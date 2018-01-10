console.log('js');

$(document).ready(onReady);

function onReady() {
  console.log('jq');
  getKoalas();
  $('#addButton').on('click', addKoala);
  $('#viewKoalas').on('click', '.terminateKoala', terminateKoala);
}

function getKoalas(){
  $.ajax({
    method: 'GET',
    url: '/koalas',
    success: function(response){
      console.log('KOALASSSSS: ', response);
      appendKoalas(response);
    }
  })
}

function appendKoalas (koalasArr) {
  for(let i = 0; i < koalasArr.length; i++) {
    let $rows = $('<tr>');
    $rows.append('<td>' + koalasArr[i].name + '</td>');
    $rows.append('<td>' + koalasArr[i].gender + '</td>');
    $rows.append('<td>' + koalasArr[i].age + '</td>');
    $rows.append('<td>' + koalasArr[i].ready_to_transfer + '</td>');
    $rows.append('<td>' + koalasArr[i].notes + '</td>');
    if(koalasArr[i].ready_to_transfer == 'N'){
      $rows.append('<td><button class="transfer">Transfer Koala</button></td>');
    } else {
      $rows.append('<td></td>');
    }
    $rows.append('<td><button data-id="' + koalasArr[i].id + '" class="terminateKoala">Terminate Koala</button><td>');
    $('#viewKoalas').append($rows);
  }
}
class Koala{
  constructor(nameIn, ageIn, genderIn, readyForTransferIn, notesIn){
      this.name = nameIn;
      this.age = ageIn;
      this.gender = genderIn;
      this.ready_to_transfer = readyForTransferIn;
      this.notes = notesIn;
  }//end constructor
}//end Koala Class

function addKoala(){
  let name = $('#nameIn').val();
  let age = $('#ageIn').val();
  let gender = $('#genderIn').val();
  let ready_to_transfer = $('#readyForTransferIn').val();
  if( $('#readyForTransferIn').is(':checked') ){
    ready_to_transfer = 'Y';
  }
  
  let notes = $('#notesIn').val();
  let koala = new Koala(name, age, gender, ready_to_transfer, notes);

  $.ajax({
    method: 'POST',
    url: '/koalas',
    data: koala,
    success: function(response){
      $('#viewKoalas').empty();
      getKoalas();
    }
  });
}//end addKoala
function terminateKoala() {
  let id = $(this).data('id');
  $(this).parent().parent().remove();
  $.ajax({
    method: "DELETE",
    url: '/koalas/'+ id,
    success: function (response) {
      console.log('successful response', response);
    }
  })
}

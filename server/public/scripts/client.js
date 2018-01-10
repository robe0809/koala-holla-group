console.log('js');

$(document).ready(onReady);

function onReady() {
  console.log('jq');
  getKoalas();
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
  let koala = new Koala(  )

}
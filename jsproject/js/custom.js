function changemyresumename(value){
  // console.log("Functin has been called" + new Date());
  document.getElementById('myresumename').innerHTML = value;
}

function changemyresumedesg(value){
  // console.log("Functin has been called" + new Date());
  document.getElementById('myresumedesc').innerHTML = value;
}


function changemyresumedesc(value){
  document.getElementById('myresumedescription').innerHTML = value;
}

function addmyexperience(){
  console.log("Working");
  $('#myexperiencesection').append(
    '<div class="row removablesection">' +
      '<div class="col-md-2 col-sm-12">' +
        '<strong>' + $('#myexpstart').val() + ' - ' + $('#myexpend').val() + '</strong>' +
      '</div>' +
      '<div class="col-md-10 col-sm-12">' +
        '<p>' +
          '<strong>' + $('#myexptitle').val() + '</strong>' +
          '<br>' +
          $('#myexpdesc').val() +
        '</p>' +
        '<button type="button" class="btn btn-info btn-sm pull-right" onclick="removeThisSection(this)" name="button"> <i class="fas fa-trash-alt"></i> </button>' +
      '</div>' +
    '</div>'
  );
  console.log("Completed");
}


function addmyeducationtoresume(){
  console.log("Working");
  $('#myeducationsection').append(
    '<div class="row removablesection">' +
      '<div class="col-md-2 col-sm-12">' +
        '<strong>' + $('#mydegreename').val() + '</strong>' +
      '</div>' +
      '<div class="col-md-10 col-sm-12">' +
        '<p>' +
          '<strong>' + $('#mydegreetitle').val() + '</strong>' +
          '<br>' +
          $('#mydegreebrief').val() +
        '</p>' +
        '<button type="button" class="btn btn-info btn-sm pull-right" onclick="removeThisSection(this)" name="button"> <i class="fas fa-trash-alt"></i> </button>' +
      '</div>' +
    '</div>'
  );
  console.log("Completed");
}
function addmyaddress()


function removeThisSection(element){
  element.closest('.removablesection').remove();
}

$(document).ready(function(){

    var theTemplateScript = $("#all-students").html();
    var theTemplate = Handlebars.compile(theTemplateScript);
    var context = {};

    $.get("http://localhost:3000/students")
      .done(function(response){
        context = {
          students: response
        }
        var theCompiledHtml = theTemplate(context);
        console.log(theCompiledHtml);
        $(".content-placeholder").append(theCompiledHtml);
    })

    bindListeners();

});


var bindListeners = function(){
  $("container").("submit", "list-student a", displayStudent)
}

var displayStudent = function(e){
  e.preventDefault();
}

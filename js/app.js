document.addEventListener("DOMContentLoaded", function(event){
  displayAllStudents();
  bindListeners();

});

var displayAllStudents = function(){
  miniQuery.AjaxWrapper.request({
      url: "http://localhost:3000/students",
      type: "GET"
    }).then(function(response){
        var context = {
          students: JSON.parse(response)
        }
        var theTemplateScript = miniQuery.SweetSelector.html("#all-students")
        var theTemplate = Handlebars.compile(theTemplateScript);
        var theCompiledHtml = theTemplate(context);
        miniQuery.SweetSelector.select(".content-placeholder").innerHTML = theCompiledHtml;
    })
}


var bindListeners = function(){
  miniQuery.SweetSelector.select(".content-placeholder").onclick = function(e) {
    e = event || event
    var target = e.target || e.srcElement

    if (target.nodeName != 'A') return
      var href = target.href
      displayStudent(e, href);
    return false;
  }
  // miniQuery.EventDispatcher.on(".container-placeholder", "click", miniQueryEventDispatcher.on(".list-student", "submit", displayStudent));
}

var displayStudent = function(e, href){
  e.preventDefault();
  miniQuery.AjaxWrapper.request({
      url: href,
      type: "GET"
    }).then(function(response){
      var student = JSON.parse(response)
      var context = {
        name: student["name"],
        badges: student["badges"]
      }
      console.log(context);
      var theTemplateScript = miniQuery.SweetSelector.html("#student-badges")
      var theTemplate = Handlebars.compile(theTemplateScript);
      var theCompiledHtml = theTemplate(context);
      console.log(theCompiledHtml);
      miniQuery.SweetSelector.select(".content-placeholder").innerHTML = theCompiledHtml;
    })
}

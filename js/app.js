$document.ready(function(){


    var theTemplateScript = $("#all-students").html();

    var theTemplate = Handlebars.compile(theTemplateScript);

    $.get({"students/"
    })


});

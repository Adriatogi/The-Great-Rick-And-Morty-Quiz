//check off specific Todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
})

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
    if (event.which === 13) {
        var todoText = $(this).val(); //grabbing text from input
        $(this).val(""); // clear input
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");//create a new li to add to ul
    }
});

$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
})
/* eslint-disable prettier/prettier */

$(document).ready(function(){
    $('#afterPost').hide();
})

$("#submit").click(function (event) {
    event.preventDefault();

    var product_name = $("#product_name").val().trim();
    var product_catagory = $("#product_catagory").val().trim();
    var product_description = $("#product_description").val().trim();
    var price = $("#price").val().trim();
    var quantity = $("#quantity").val().trim();
    
    $('#post-form').empty();
    $('.proform').hide();
    $('#afterPost').show();

    
    $.post("/api/sell",
        {
            product_name,
            product_catagory,
            product_description,
            price: price,
            quantity
        },
        function () {
            console.log("Success!")
        });
});
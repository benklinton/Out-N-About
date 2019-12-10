/* eslint-disable prettier/prettier */

$(document).ready(function() {
    $('#afterPost').hide();
    $('.confirmPage').hide();
    $('.afterPurchase').hide();
})

$('#buyButton').click(function(event) {
    $('.listings').hide();
    $('.confirmPage').show();
})

$('.deleteButton').click(function() {
    $('.confirmPage').hide();
    $('.afterPurchase').show();
})

$(".delete-listing").on("click", function(event) {
    var id = $(this).data("id");
    console.log("id: " + id);
    // Send the DELETE request.
    $.ajax("/api/Products/" + id, {
        type: "DELETE"
    }).then(
        function() {
            console.log("deleted cat", id);
            // Reload the page to get the updated list
            location.reload();

        }
    );
});

$("#submit").click(function(event) {
    event.preventDefault();

    var product_name = $("#product_name").val().trim();
    var product_category = $("#product_category").val().trim();
    console.log(product_category)
    var product_description = $("#product_description").val().trim();
    var price = $("#price").val().trim();
    var seller_name = $("#seller_name").val().trim();
    var seller_number = $("#seller_number").val().trim();
    console.log('seller_name: ', seller_name)

    $('#post-form').empty();
    $('.proform').hide();
    $('#bottomCards').hide()
    $('#afterPost').show();


    $.post("/api/sell", {
            product_name,
            product_category,
            product_description,
            price: price,
            seller_name,
            seller_number
        },
        function() {
            console.log("Success!")
        });
});
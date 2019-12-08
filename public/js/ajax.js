/* eslint-disable prettier/prettier */
$("#submit").click(function (event) {
    event.preventDefault();
    console.log('click')
    var product_name = $("#product_name").val().trim();
    var product_catagory = $("#product_catagory").val().trim();
    var product_description = $("#product_description").val().trim();
    var price = $("#price").val().trim();
    var quantity = $("#quantity").val().trim();

    console.log('product name: ', product_name)
    console.log('product_catagory: ', product_catagory)
    console.log('product_description: ', product_description)
    console.log('price: ', price)
    console.log('quantity: ', quantity)
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
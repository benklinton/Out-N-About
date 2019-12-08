$("#submit").click(function () {

    var product_name = $("#product_name").val().trim();
    var product_catagory = $("#product_catagory").val().trim();
    var product_description = $("#product_description").val().trim();
    var price = $("#price").val().trim();
    var quantiy = $("#quanity").val().trim();

    $.post("/api/post",
        {
            product_name: product_name,
            product_catagory: product_catagory,
            product_description: product_description,
            price: price,
            quantiy: quantiy
        },
        function () {
            console.log("Success!")
        });
});
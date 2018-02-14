
$(document).ready(function () {
    console.log("Document ready.");
    var $titles = $('.card-title');
    $titles.css('color', 'green').text('Caaaat!');



    $('.container').on("click", ".card .btn", function (event) {
        event.preventDefault();
        $(this).parent().parent().parent().remove();
        console.log('CLICK!!');

    })

    $('#add').on("click", function () {
        var $col = $('<div class="col">\
            <div class="card" >\
            <img class="card-img-top" src="https://images.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg?w=940&h=650&auto=compress&cs=tinysrgb" alt="Card image cap">\
            <div class="card-body">\
            <h5 class="card-title">Card title</h5>\
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\
        <a href="#" class="btn btn-primary">Go somewhere</a>\
        </div>\
        </div>\
        </div>');


        $('.row').append($col);
    })


});


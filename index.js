$(document).ready(function () {

    var checkbox = document.getElementById('nav-toggle');
    console.log(checkbox);
    console.log(checkbox.checked);

    $('.navigation_link').on('click', function() {
        console.log('a click!');
        if (checkbox.checked === true) {
            checkbox.checked = false;
            console.log(checkbox.checked);
        }
    });
})


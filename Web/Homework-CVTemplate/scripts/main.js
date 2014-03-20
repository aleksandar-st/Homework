$(document).ready(function() {

    //This function scrol pages
    $('#nav li a').click(function(e){
        e.preventDefault();
        var position=$($(this).attr('href')).offset().top;
        console.log(position);
        $('html, body').animate({
            scrollTop: position-60+'px'
        },500);
    });

    //This function create progress bar
    function progress(percent, element) {
        var progressBarWidth = percent * element.width() / 100;
        element.find('div').animate({ width: progressBarWidth }, 7000, "easeOutBounce");
    }
    progress(75, $('.html-progress-bar'));
    progress(70, $('.css-progress-bar'));
    progress(60, $('.jquery-progress-bar'));
    progress(50, $('.photoshop-progress-bar'));
    progress(45, $('.sql-progress-bar'));
    progress(45, $('.xml-progress-bar'));
});


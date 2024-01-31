$("#document").ready(function(){
    $.ajax({
        url: 'https://api.github.com/users/BeeFriedman/repos',
        method: 'GET',
        dataType: 'json',
        success: function(repositories) {
          // Process the repositories here
          repositories.forEach(function(repository) {
            if(repository.description == null)
                respoitory.description = "";
            var div = document.createElement("li");
            div.innerHTML = "<h4>" + repository.name + "</h4>";
            div.innerHTML +="<p>" + repository.description + "</p>";
            div.innerHTML +="<div><a href='" + repository.html_url + "'>" + repository.html_url + "</a></div>";
            $("#list").append(div);
        });
        // Variables to keep track of the current slide and total number of slides
        var currentSlide = 0;
        var totalSlides = $("#list li").length;
        var slideWidth = $("#list li").width();
        
        // Function to move the slideshow to the next slide
        function moveNext() {
            if (currentSlide < totalSlides - 1) {
            currentSlide++;
            var slidePosition = -currentSlide * slideWidth;
            $("#list").animate({ marginLeft: slidePosition }, 500);
            }
        }
        
        // Function to move the slideshow to the previous slide
        function movePrev() {
            if (currentSlide > 0) {
            currentSlide--;
            var slidePosition = -currentSlide * slideWidth;
            $("#list").animate({ marginLeft: slidePosition }, 500);
            }
        }
        
        // Event handlers for the left and right buttons
        $("#left_button").click(function() {
            movePrev();
        });
        
        $("#right_button").click(function() {
            moveNext();
        });          
        },
        error: function(status, error) {
          console.error(status + ': ' + error);
        }
    });
    // Get the current page URL
    var currentURL = window.location.href;

    // Iterate over each navigation link
    $('.navbar-nav .nav-link').each(function() {
        // Get the link's URL
        var linkURL = $(this).attr('href');

        // Check if the link's URL matches the current page URL
		if (currentURL === 'https://beefriedman.com/' && linkURL === 'index.html') {
			$(this).addClass('active');
		}		
        else if (currentURL.includes(linkURL)) {
            // Add the 'active' class to the link
            $(this).addClass('active');
        }
    });    
});


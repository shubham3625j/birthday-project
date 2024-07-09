

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "Days <span class=\"digit\">" + days + "</span> Hours <span class=\"digit\">" + hours + "</span> Minutes <span class=\"digit\">" + minutes; 
	$("#clock").html(result);

	var text = "THE WORLD JUST GOT LUCKIER SINCE ";
	$("#message-box").html(text);

}
document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photo');

    photos.forEach(photo => {
        // Apply a slight random rotation within the range of -15 to 15 degrees
        const randomAngle = Math.random() * 30 - 15; // Range from -15 to 15 degrees
        photo.style.setProperty('--angle', randomAngle);

        // Add click event to open photo
        photo.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevents event bubbling
            photo.classList.add('open');

            // Add event listener to close photo when clicking outside
            document.addEventListener('click', closePhotoHandler);
        });
    });

    function closePhotoHandler(event) {
        // Check if the clicked element is not a photo
        if (!event.target.classList.contains('photo')) {
            // Remove 'open' class from all photos
            photos.forEach(photo => {
                photo.classList.remove('open');
            });

            // Remove the event listener after closing the photo
            document.removeEventListener('click', closePhotoHandler);
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('birthdayBanner');
    banner.classList.add('show');
});



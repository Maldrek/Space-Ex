


// Seachbar Handler
$(function () {
	var searchField = $("#Searchq");
	var icon = $("#search-BTN");
	$('#search-BTN').on("click", function (e) {
		e.preventDefault();
		search();
	});
	//Focus event Handler
	$(searchField).on('focus', function () {
		$(this).animate({
			width: '70%'
		}, 400);
		$(icon).animate({
			right: '10px'
		}, 400);
	});
	// Blur Even Handler   
	$(searchField).on('blur', function () {
		if (searchField.val() == '') {
			$(searchField).animate({
				width: '45%'
			},
				400);
		}
	})
});
function search() {
	// clear results

	$("#results").html('')
	$("#buttons").html('')
	// Get For Input
	q = $("#Searchq").val().trim();
	// Run Get Request
	$.ajax("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + q + "&type=video&maxResults=3&key=AIzaSyBmBgUspUyuv5RHJj4nBnlOAC7F1Gn8w-M")
		.then(function (response) {
			console.log(response);
			var VideoPush = $("#results")

			for (i = 0; i < response.items.length; i++) {
				var Pic = response.items[i].snippet.thumbnails.high.url;
				var showPic = $("<img>").attr("src", Pic).addClass("VidResponse")
				console.log(Pic);
				VideoPush.append(showPic);

				var Title = response.items[i].snippet.title;
				var VidTitle = $("<H1>").text("Title: " + Title);
				console.log(Title);
				VideoPush.append(VidTitle);
				var Description = response.items[i].snippet.description;
				var VidDescription = $("<P>").text("Description: " + Description);
				console.log(Description)
				VideoPush.append(VidDescription);
			};
			var videoId1 = response.items[0].id;
			console.log(videoId1);
			// Load the IFrame Player API code asynchronously.
			var tag = document.createElement('script');
			tag.src = "https://www.youtube.com/player_api";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			// Replace the 'ytplayer' element with an <iframe> and
			// YouTube player after the API code downloads.
			var player;
			function onYouTubePlayerAPIReady() {
				player = new YT.Player('ytplayer', {
					height: '360',
					width: '640',
					videoId: videoId1,
				});
			}
		});
};


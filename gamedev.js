$( document ).ready(function() {

	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight1.jpg')");
		$("#goRight1").hide();
		$("#goBack").hide();
		$("#goRight-Left1").show();
		$("#goRight-Right1").show();
	});

	$("#goRight-Left1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight2.jpg')");
		$("#goRight-Straight1").hide();
		$("#goRight-Straight2").show();
	});


	$("#goRight-Right1").click(function() {
		$("#exploreBody").css("background-image", "url('img/explore2-goBack2.jpg')");
		$("#goRight-Right2").hide();
		$("#goBack").hide();
	});


	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft1.jpg')");
		$("#goLeft-Right1").show();
		$("#goLeft-Left1").show();
	});

	$("#goLeft-Left1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft2.jpg')");
		$("#goLeft2").hide();
		$("#goLeft3").hide();
	});

	$("#goLeft-Right1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft3.jpg')");
		$("#goLeft3").hide();
		$("#goBack").hide();
	});


	
	



});
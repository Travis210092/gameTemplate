$( document ).ready(function() {

	$("#goRightB1").click(function() {
		$("#exploreBody").css("background-image", "url('img/RightB1.png')");
		$("#goRightB1").hide();
		$("#goLeftB1").hide();
		$("#goBack").hide();
		$("#goRightR2B").show();
		$("#goRightL2B").show();
	});

	$("#goRightR2B").click(function() {
		$("#exploreBody").css("background-image", "url('img/RightR2B.png')");
		$("#goRightR2B").hide();
		$("#goBack").show();
		$("#goRightL2B").hide();

	});

	$("#goExit1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exit1.png')");
		$("#goRight-Straight2").hide();
		$("#goBack").hide();
	});

	$("#goRightL2B").click(function() {
		$("#exploreBody").css("background-image", "url('img/splashpage.png')");
		$("#goRightR2B").hide();
		$("#goBack").show();
		$("#goRightL2B").hide();
	});

	$("#goExit2").click(function() {
		$("#exploreBody").css("background-image", "url('img/NEWPHOTO.png')");
		$("#goRight-Right2").hide();
		$("#goBack").show();
	});


	$("#goLeftB1").click(function() {
		$("#exploreBody").css("background-image", "url('img/splashpage.png')");
		$("#goLeftR2B").show();
		$("#goLeftL2B").show();
		$("#goLeftB1").hide();
		$("#goRightB1").hide()
	});

	$("#goLeftR2B").click(function() {
		$("#exploreBody").css("background-image", "url('img/RightB1.png')");
		$("#goLeft2").hide();
		$("#goExit2").show();
		$("#goLeftL2B").hide();
		$("#goLeftR2B").hide();
	});

	$("#goLeftL2B").click(function() {
		$("#exploreBody").css("background-image", "url('img/killwolf_new.png')");
		$("#goLeftB1").hide();
		$("#goExit2").show();
		$("#goLeftL2B").hide();
		$("#goLeftR2B").hide();
	});


	$("#goBack").click(function() {
		$("#exploreBody").css("background-image", "url('img/splashpage.png')");
		$("#goBack").hide();
		$("#goRight1").show();
		$("#goLeft1").show();
	});



});
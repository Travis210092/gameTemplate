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
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goRight-Straight2").hide();
		$("#goBack").show();
	});

	$("#goRightL2B").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goRightR2B").hide();
		$("#goBack").show();
		$("#goRightL2B").hide();
	});

	$("#goExit2").click(function() {
		$("#exploreBody").css("background-image", "url('img/explore2-goBack2.jpg')");
		$("#goRight-Right2").hide();
		$("#goBack").show();
	});


	$("#goLeftB1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft1.jpg')");
		$("#goLeftR2B").show();
		$("#goLeftL2B").show();
		$("#goLeftB1").hide();
		$("#goRightB1").hide()
	});

	$("#goLeftR2B").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft2.jpg')");
		$("#goLeft2").hide();
		$("#goExit2").show();
		$("#goLeftL2B").hide();
		$("#goLeftR2B").hide();
	});

	$("#goLeftL2B").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft3.jpg')");
		$("#goLeftB1").hide();
		$("#goExit2").show();
		$("#goLeftL2B").hide();
		$("#goLeftR2B").hide();
	});


	$("#goBack").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreHome1.jpg')");
		$("#goBack").hide();
		$("#goRight1").show();
		$("#goLeft1").show();
	});



});
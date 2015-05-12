$(document).ready(function(){
	//no feedback showing yet
	$('.feedBackPos').hide();
	$('.feedBackNeg').hide();
	$('.nextQuestion').hide();


//questions 1-6
var question1 = {
		quote: "I know it is wet and the sun is not sunny, but we can have lots of good fun that is funny.",
		options: {
			option1:"images/BartholomewAndTheOobleck-cover.jpg",
			option2:"images/TheCatInTheHat.jpg",
			option3:"images/McElligotsPool-cover.jpg",
			option4:"images/TheresAWocketInMyPocket-cover.jpg",},
		answer: 2,
		answerImage:"images/TheCatInTheHat.jpg",
		answerSlot: 1,
	};

var question2 = {
		quote: "Try them, try them, and you may! Try them and you may, I say.",
		options: {
			option1:"images/DidIEverTellYou-cover.jpg",
			option2:"images/FoxInSocks-cover.jpg",
			option3:"images/OhSayCanYouSay-cover.jpg",
			option4:"images/GreenEggsandHam-cover.jpg",},
		answer: 4,
		answerImage:"images/GreenEggsandHam-cover.jpg",
		answerSlot: 2,
	};

var question3 = {
		quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
		options: {
			option1:"images/OhThePlaces-cover.jpg",
			option2:"images/ICanReadWithMyEyesShut-cover.jpg",
			option3:"images/TheFootBook-cover.jpg",
			option4:"images/TheLorax-cover.jpg",},
		answer: 1,
		answerImage:"images/OhThePlaces-cover.jpg",
		answerSlot: 3,
	};

var question4 = {
		quote: "Today was good. Today was fun. Tomorrow is another one.",
		options: {
			option1:"images/IfIRanTheZoo-cover.jpg",
			option2:"images/HowTheGrinchStoleChristmas-cover.jpg",
			option3:"images/OneFishTwoFish.jpg",
			option4:"images/MrBrownCanMoo-cover.jpg",},
		answer: 3,
		answerImage:"images/OneFishTwoFish.jpg",
		answerSlot:4,
	};

var question5 = {
		quote: "Today you are You, that is truer than true. There is no one alive who is Youer than You.",
		options: {
			option1:"images/Daisy-HeadMayzie-cover.jpg",
			option2:"images/YoureOnlyOldOnce-cover.jpg",
			option3:"images/HortonHatchesTheEgg-cover.jpg",
			option4:"images/HappyBirthday-cover.jpg",},
		answer: 4,
		answerImage:"images/HappyBirthday-cover.jpg", 
		answerSlot:5,
	};

var question6 = {
		quote: "A person's a person, no matter how small.",
		options: {
			option1:"images/AndToThinkThatISawIt-cover.jpg",
			option2:"images/HortonHearsAWho-cover.jpg",
			option3:"images/MarvinKMooney-cover.jpg",
			option4:"images/IfIRanTheCircus-cover.jpg",},
		answer: 2,
		answerImage:"images/HortonHearsAWho-cover.jpg",
		answerSlot: 6,
	};

//array to run functions
var quiz = [question1, question2, question3, question4, question5, question6];
	
	function newQuestion(question){
		//default all options to incorrect
		$('.option').addClass('incorrect');

		//set quote
		$('.quote h2').text(question.quote);

		//set options
		$('.option.1').attr('src', question.options.option1);
		$('.option.2').attr('src', question.options.option2);
		$('.option.3').attr('src', question.options.option3);
		$('.option.4').attr('src', question.options.option4);

		//add correct flag to answer
		$('.option.' + question.answer).attr('id', 'correct').removeClass('incorrect');
	};

//evaluate if correct answer is clicked

		// $('.option').on('click', function(){
		// 	$(this).toggleClass('selected');
		// });
		
		//select one image at a time. If alternate image is selected remove class from first image, add to second image

	function evaluateGuess(question){
		$('.submitButton').click(function(){
			//correct answers
			$('#correct').bind('click', function(){
				console.log("yay");
				$('.answer.' + question.answerSlot).attr('src', question.answerImage);
				// $('.answer').hide();
				counter = document.getElementById('count');
		    	counter.innerHTML++;
		    	$('.feedBackPos').show();
		    	$('.nextQuestion').show();
		    	$('.submitButton').hide();
			});
			// //incorrect answers
			$('.incorrect').bind('click', function(){
				console.log('NOOOO');
				$('.answer.'+ question.answerSlot).attr('src', question.answerImage).addClass('fade').siblings().removeClass('hidden');
				// $('.answer').hide();
				$('.feedBackNeg').show();
		    	$('.nextQuestion').show();
		    	$('.submitButton').hide();
			});
		});
	};
		//only allow one entry somehow

newQuestion(quiz[0]);
evaluateGuess(quiz[0]);

clickNumber = 0;

//for all the question within quiz do this... (after 6 stop) 
	$('.feedBack').on('click','.nextQuestion',function(){	
		$('.answer').show();
		$('#correct').unbind('click');
		$('.incorrect').unbind('click');
		$('.option').removeAttr('id', 'correct');
		$('.feedBackPos').hide();
		$('.feedBackNeg').hide();
		$('.nextQuestion').hide();
		$('.submitButton').show();
		movingOn();	
		clickNumber++;
	});

function movingOn(){
	console.log("opening: "+clickNumber);
	if (clickNumber===0){
		newQuestion(quiz[1]);
		console.log("question2");
		evaluateGuess(quiz[1]);
	}
	else if (clickNumber===1){
		newQuestion(quiz[2]);
		console.log("question3");
		evaluateGuess(quiz[2]);
	}
	else if (clickNumber===2){
		newQuestion(quiz[3]);
		console.log("question4");
		evaluateGuess(quiz[3]);
	}
	else if (clickNumber===3){
		newQuestion(quiz[4]);
		console.log("question5");
		evaluateGuess(quiz[4]);
	}
	else if (clickNumber===4){
		newQuestion(quiz[5]);
		console.log("question6");
		evaluateGuess(quiz[5]);
	}
	else if (clickNumber>=5){
		console.log("coding dance!");
		function endCount(){
			counter = document.getElementById('count').innerText;
			alert("You got "+counter+" of 6 correct!");
		};
		endCount();
	}
};


 });


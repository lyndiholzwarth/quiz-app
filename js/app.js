$(document).ready(function(){

//-------Data--------

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
var quiz = {
	1: question1,
	2: question2, 
	3: question3, 
	4: question4, 
	5: question5, 
	6: question6,
};
	

//-------functions--------


	function newQuestion(question){
		//default all options to incorrect
		$('.option').addClass('incorrect').css('cursor','pointer');

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
	function evaluateGuess(question){
		var submitted=false;
		//correct answers
		$('#correct').bind('click', function(){
			if (submitted==false){
				$('.submitButton').show();
				correct = true;
				$('.option').removeClass('selected');
			 	$(this).addClass('selected');
			 };
		});

		// //incorrect answers
		$('.incorrect').bind('click', function(){
			if (submitted==false){
				$('.submitButton').show();
				correct = false;
				$('.option').removeClass('selected');
				$(this).addClass('selected');
			};
		});


	// selected item in the answer box area
		$('.submitButton').click(function(){
			submitted=true;
			answerClicked = document.getElementsByClassName('selected')[0].getAttribute('src');
			$('.option').css('cursor','default')
			//corrrect answer
			if (correct==true){
				$('.answer.' + question.answerSlot).attr('src', answerClicked);
				answerCounter = document.getElementById('correctCount');
		    	correctCount.innerHTML++;
		    	$('.feedBackText').show().text("CORRECT!");
		    	$('.nextQuestion').show();
		    	$('.submitButton').hide();
			}

			//incorrect answer
			else if (correct==false){
				$('.answer.' + question.answerSlot).attr('src', answerClicked).addClass('fade').siblings().removeClass('hidden');
				$('.feedBackText').show().text("INCORRECT!");
		    	$('.nextQuestion').show();
		    	$('.submitButton').hide();
			}
		});
	};


	//for all the question within quiz do this... (after 6 stop) 
	$('.feedBack').on('click','.nextQuestion',function(){	
		$('.answer').show();
		$('.submitButton').unbind('click');
		$('#correct').unbind('click');
		$('.incorrect').unbind('click');
		$('.option').removeAttr('id', 'correct').removeClass('selected');
		$('.feedBackText').hide();
		$('.nextQuestion').hide();
		questionCounter++;
		movingOn();	
	});

	//function to load next question
	function movingOn(){
		$('.feedBackText').hide();
		//after questions 1-5
		if (questionCounter<=6){
			newQuestion(quiz[questionCounter]);
			evaluateGuess(quiz[questionCounter]);
		}

		//after question 6
		else if (questionCounter>6){
			function endCount(){
				//show final count, give replay option
				answerCounter = document.getElementById('correctCount').innerText;
				console.log(document.getElementById('correctCount').innerText);
				$('.feedBackText').show().text("You got "+answerCounter+" of 6 correct!");
				$('.submitButton').hide();
				$('.replay').show();
				$('.counter').removeClass('visible').addClass('invisible');
			};

			endCount();

		}
	};

	//replay Quiz
	$('.replay').click(function(){
		//reset quiz
		correct=false;
		questionCounter=1;
		movingOn();

		//correct items showing / hidden
		$('.replay').hide();

		//remove last game's answers
		$('.answer').removeAttr('src', answerClicked).removeClass('fade').siblings().addClass('hidden');

		//reset counter
		$('.counter').removeClass('invisible').addClass('visible');
		answerCounter = document.getElementById('count');
		correctCount.innerHTML=0;
	});



//------running the quiz-------

correct = false	;
questionCounter = 1;
movingOn();


 });


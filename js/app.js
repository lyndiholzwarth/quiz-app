$(document).ready(function(){
//ask questions 1-6 with answer options
	$('.feedBackPos').hide();
	$('.feedBackNeg').hide();
	$('.nextQuestion').hide();
// 	$('.question-1').show();
// 	$('.question-2').hide();
// 	$('.question-3').hide();
// 	$('.question-4').hide();
// 	$('.question-5').hide();
// 	$('.question-6').hide();
// 	$('.options-1').show();
// 	$('.options-2').hide();
// 	$('.options-3').hide();
// 	$('.options-4').hide();
// 	$('.options-5').hide();
// 	$('.options-6').hide();

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
	};

var question3 = {
		quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
		options: {
			option1:"images/OhThePlaces-cover.jpg",
			option2:"images/ICanReadWithMyEyesShut-cover.jpg",
			option3:"images/TheFootBook-cover.jpg",
			option4:"images/TheLorax-cover.jpg",},
		answer: 1,
	};

var question4 = {
		quote: "Today was good. Today was fun. Tomorrow is another one.",
		options: {
			option1:"images/IfIRanTheZoo-cover.jpg",
			option2:"images/HowTheGrinchStoleChristmas-cover.jpg",
			option3:"images/OneFishTwoFish.jpg",
			option4:"images/MrBrownCanMoo-cover.jpg",},
		answer: 3,
	};

var question5 = {
		quote: "Today you are You, that is truer than true. There is no one alive who is Youer than You.",
		options: {
			option1:"images/Daisy-HeadMayzie-cover.jpg",
			option2:"images/YoureOnlyOldOnce-cover.jpg",
			option3:"images/HortonHatchesTheEgg-cover.jpg",
			option4:"images/HappyBirthday-cover.jpg",},
		answer: 4,
	};

var question6 = {
		quote: "A person's a person, no matter how small.",
		options: {
			option1:"images/AndToThinkThatISawIt-cover.jpg",
			option2:"images/HortonHearsAWho-cover.jpg",
			option3:"images/MarvinKMooney-cover.jpg",
			option4:"images/IfIRanTheCircus-cover.jpg",},
		answer: 2,
	};


var quiz = [question1, question2, question3, question4, question5, question6]

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

// var answerImage = {
// 	cover1:"images/DidIEverTellYou-cover.jpg",
// 	cover2:"images/GreenEggsandHam-cover.jpg",
// 	cover3:"images/OhThePlaces-cover.jpg",
// 	cover4:"images/OneFishTwoFish.jpg",
// 	cover5:"images/HappyBirthday-cover.jpg",  
// 	cover6:"images/HortonHearsAWho-cover.jpg",  
//  }; 

//evaluate if correct answer is clicked
	function evaluateGuess(question){
		//correct answers
		$('#correct').click(function(){
			console.log("yay");
			$('.answer.' + question.answerSlot).attr('src', question.answerImage);
			var counter = document.getElementById('count');
	    	counter.innerHTML++;
	    	$('.feedBackPos').show();
	    	$('.nextQuestion').show();
		});
		//incorrect answers
		$('.incorrect').click(function(){
			console.log('NOOOO');
			$('.answer.'+ question.answerSlot).attr('src', question.answerImage).parent().addClass('wrong')
			$('.feedBackNeg').show();
	    	$('.nextQuestion').show();
		});
		//only allow one entry somehow
	};

newQuestion(quiz[0]);
evaluateGuess(quiz[0]);
//loadNext();


//for all the question within quiz do this... (after 6 stop) 
 	function loadNext(){
		$('.feedBack').on('click','.nextQuestion',function(event){
		 	newQuestion(quiz[1]);
			evaluateGuess(quiz[1]);
			$('.feedBackPos').hide();
			$('.feedBackNeg').hide();
		    $('.nextQuestion').hide();
		});
	};

loadNext();


	

});

//reload: when the question number is 1-5, hide current question and load the next question ======= move to the next var in the array

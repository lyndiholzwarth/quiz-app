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
	function evaluateGuess(question){
		//correct answers
		$('.question').on('click', '#correct', function(){
			console.log("yay");
			// $('.answer.' + question.answerSlot).attr('src', question.answerImage);
			var counter = document.getElementById('count');
	    	counter.innerHTML++;
	    	$('.feedBackPos').show();
	    	$('.nextQuestion').show();
		});
		//incorrect answers
		$('.question').on('click','.incorrect', function(){
			console.log('NOOOO');
			// $('.answer.'+ question.answerSlot).attr('src', question.answerImage).addClass('fade').parent().addClass('wrong');
			$('.feedBackNeg').show();
	    	$('.nextQuestion').show();
		});
		//only allow one entry somehow
	};

newQuestion(quiz[0]);
evaluateGuess(quiz[0]);
//loadNext();
clickNumber = 0;
//for all the question within quiz do this... (after 6 stop) 
	$('.feedBack').on('click','.nextQuestion',function(){
		$('.option').removeAttr('id', 'correct');
		$('.feedBackPos').hide();
		$('.feedBackNeg').hide();
		movingOn();	
	});

function movingOn(){
	var loadingNew=false;
		console.log("opening: "+clickNumber);
			if (clickNumber=1){
				newQuestion(quiz[1]);
				console.log("firstClick: "+clickNumber);
				evaluateGuess(quiz[1]);
				loadingNew=true;
				clickNumber++;
			}
			else if (clickNumber=2){
				newQuestion(quiz[2]);
			 //    $('.option').removeAttr('id', 'correct');
				// $('.feedBackPos').hide();
				// $('.feedBackNeg').hide();
				// i++
			//	click++;
				console.log("secondClick: "+clickNumber);
				evaluateGuess(quiz[2]);
				// loadingNew=true;
				clickNumber++;
			}
			else if (i=3){
				newQuestion(quiz[3]);
			    $('.option').removeAttr('id', 'correct');
				$('.feedBackPos').hide();
				$('.feedBackNeg').hide();
				evaluateGuess(quiz[3]);

				// i++
			//	click++;
				// console.log("firstClick: "+i);
			}
			else if (i=4){
				newQuestion(quiz[4]);
			    $('.option').removeAttr('id', 'correct');
				$('.feedBackPos').hide();
				$('.feedBackNeg').hide();
				evaluateGuess(quiz[4]);

			}
			else if (i=5){
				newQuestion(quiz[5]);
			    $('.option').removeAttr('id', 'correct');
				$('.feedBackPos').hide();
				$('.feedBackNeg').hide();
				evaluateGuess(quiz[5]);
			}
			else if (i=6){
				console.log("coding dance!")
			}
		};


// movingOn();
// movingOn();
// movingOn();
// movingOn();
// movingOn();
// movingOn();





		// $('.feedBack').on('click','.nextQuestion',function(){
		//     $('.option').removeAttr('id', 'correct');
		// 	newQuestion(quiz[2]);
		// 	$('.feedBackPos').hide();
		// 	$('.feedBackNeg').hide();
		//     $('.nextQuestion').hide();
		// 	});

//evaluateGuess(quiz[2]);


 });


// for (var i = 0; i < excludeMe.length; i++) {
//     if (needsExclusions.indexOf(excludeMe[i]) !== -1) {
//         someFlag = false;        
//         break;
//     }

// //reload: when the question number is 1-5, hide current question and load the next question ======= move to the next var in the array


// var myStringArray = ["Hello","World"];
// var arrayLength = myStringArray.length;
// for (var i = 0; i < arrayLength; i++) {
//     alert(myStringArray[i]);
//     //Do something
// }

$(document).ready(function(){
//ask questions 1-6 with answer options
	$('.feedBackPos').hide();
	$('.feedBackNeg').hide();
	$('.nextQuestion').hide();
	$('.question-1').show();
	// $('.question-2').hide();
	// $('.question-3').hide();
	// $('.question-4').hide();
	// $('.question-5').hide();
	// $('.question-6').hide();

//evaluate if correct answer is clicked
	function evaluateGuess1(){
		$('#correct-1').click(function(){
			console.log("yay");
			$('#ans1').removeClass('hidden');
			var counter = document.getElementById('count');
	    	counter.innerHTML++;
	    	$('.feedBackPos').show();
	    	$('.nextQuestion').show()
	});
		});
		$('.incorrect').click(function(){
			console.log('NOOOO');
			$('#ans1').removeClass('hidden').addClass('fade').parent().addClass('wrong')
			$('.feedBackNeg').show();
	    	$('.nextQuestion').show();
		});
	};
	
	evaluateGuess1();

	// $('.nextQuestion').on("click", (function(){
	// 	$('.question-1').hide();
	// 	$('.question-2').show();
	// });


//show correct answer in progress bar

//red out answer if incorrect

//change counter in progress bar

//load next question

//give option to play again ?


});

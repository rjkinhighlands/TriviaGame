// TRIVIA GAME //

$(document).ready(function(){

// VARIABLES //
	
	// DOM //

	var $timerDiv = $('#timerDiv');
	var $timerSpan = $('#timerSpan');
	var $timeRemaining = $('#timeRemaining');
	var $question = $('#questionDiv');
	var $choice = $('.choice');
	var $choice1 = $('#choice1');
	var $choice2 = $('#choice2');
	var $choice3 = $('#choice3');
	var $choice4 = $('#choice4');
	var $start = $('#startButton');

	// Questions //

	var questions = [];
	var questionIndex = 0;

	// Results //

	var wins = 0;
	var losses = 0;
	var questionAnswered = false;

// TIMER //

	// Time Remaining //

	time = 10; 

	runTimer = function(){
		$timerSpan.html('Time Remaining: ')
		counter = setInterval(decrement, 1000);
		$timerSpan.show();
		$timeRemaining.html(' ' + time);
	};

	decrement = function(){

		time--;
		$timeRemaining.html(' ' + time);

		if(time == 0){

			stopTimer();
			$timerSpan.html("Warranty Expired!");
			$timerSpan.css('margin-center', '75px')

			currentQuestion.displayImage();

			time = 10; 
			questionIndex += 1;

			losses ++;
			
			setTimeout(function(){
				$timerSpan.css('margin-center', '0')
			}, 2000)
			setTimeout(nextQuestion, 2000);
		}
	}

	stopTimer = function(){
		clearInterval(counter);
		$timeRemaining.empty();
		time = 10;
	}

// QUESTIONS //

	function question(text, choices, answer, image, sound){

		this.text = text;
		this.choices = choices;
		this.answer = answer;
		this.image = image;
		this.sound = sound;

		this.displayQuestion = function(){

			console.log("displaying question")

			$question.html(this.text);

			// Choices //

			$choice1.html(this.choices[0]);
			$choice1.data('choice', this.choices[0] );

			$choice2.html(this.choices[1]);
			$choice2.data('choice', this.choices[1] );

			$choice3.html(this.choices[2]);
			$choice3.data('choice', this.choices[2] );

			$choice4.html(this.choices[3]);
			$choice4.data('choice', this.choices[3] );
		};

		this.displayImage = function(){

			$choice1.empty();
			$choice2.empty();
			$choice3.empty();
			$choice4.empty();

			$choice2.html(this.image);

			if (this.sound){
				$choice3.html(this.sound);
				this.sound.get(0).play();
			}
		}

	};

// MORE FUNCTIONALITY //

	displayResults = function(){

		$choice.empty();
		$choice1.html("Correct: " + wins);
		$choice2.html("Incorrect: " + losses);
		$start.show();
	}

	function shuffleArray(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	}

	function playMusic(){

		music = Math.floor(Math.random() * playlist.length)

		$('#title').append(playlist[music]);

		playlist[music].get(0).play();

	}

// IMAGES //
	
	var acura = $("<img>", {class: 'answerImg', src: "assets5/images5/acura.jpg" });
	var audi = $("<img>", {class: 'answerImg', src: "assets5/images5/audi.jpg"});
	var bentley = $("<img>", {class: 'answerImg', src: "assets5/images5/bentley.jpg"});
	var chrysler = $("<img>", {class: 'answerImg', src: "assets5/images5/chrysler.jpg"});
	var hyundai = $("<img>", {class: 'answerImg', src: "assets5/images5/hyundai.jpg"});
	var jaguar = $("<img>", {class: 'answerImg', src: "assets5/images5/jaguar.jpg"});
	var lexus = $("<img>", {class: 'answerImg', src: "assets5/images5/lexus.jpg"});
	var lincoln = $("<img>", {class: 'answerImg', src: "assets5/images5/lincoln.jpg"});
	var mazda = $("<img>", {class: 'answerImg', src: "assets5/images5/mazda.jpg"});
	var peugeot = $("<img>", {class: 'answerImg', src: "assets5/images5/peugeot.jpg"});
	var saturn = $("<img>", {class: 'answerImg', src: "assets5/images5/saturn.jpg"});
	var shelby = $("<img>", {class: 'answerImg', src: "assets5/images5/viper.jpg"});
	var tesla = $("<img>", {class: 'answerImg', src: "assets5/images5/tesla.jpg"});
	var viper = $("<img>", {class: 'answerImg', src: "assets5/images5/viper.jpg"});
	//var wiesmann = $("<img>", {class: 'answerImg', src: "assets5/images5/wiesmann.jpg"});

// MUSIC //

	var driveMycar = $("<audio>", {class: 'answerSound', src: "assets5/sounds5/drivemycar.m4a"});

	//var carCrash = $("<audio>", {class: 'answerSound', src: "assets5/sounds5/carcrash.mp3"});

	//var loudCar = $("<audio>", {class: 'answerSound', src: "assets5/sounds5/loudcar.mp3"});

	// Playlist //

	var playlist = [driveMycar]//, carCrash, loudCar//]


// QUESTIONS //

	var acura = new question("What's the make and country that gave us this logo?", ['Chrysler - USA', 'Lexus - Japan', 
		'Hyundai - Korea', 'Acura - Japan'], 'Acura - Japan', acura );
	
	var audi = new question("What's the make and country that gave us this logo?", ['Audi - Germany', 'Saturn - USA', 
		'Peugeot - korea', 'Bentley - England'], 'Audi - Germany', audi );

	var bentley = new question("What's the make and country that gave us this logo?", ['Lincoln - USA', 'Audi - Germany', 
		'Bentley - England', 'Acura - Japan'], 'Bentley - England', bentley );

	var chrysler = new question("What's the make and country that gave us this logo?", ['Lexus - Japan', 'Peugeot - korea', 
		'Audi - Germany', 'Chrysler - USA'], 'Chrysler - USA', chrysler );
	
	var hyundai = new question("What's the make and country that gave us this logo?", ['Audi - Germany', 'Tesla - USA', 
		'Saturn - USA', 'Saturn - USA'], 'Hyundai - Korea', hyundai );
	
	var jaguar = new question("What's the make and country that gave us this logo?", ['Chrysler - USA', 'Peugeot - korea', 
		'Audi - Germany', 'Chrysler - USA'], 'Hyundai - Korea', jaguar );

	var peugeot = new question("What's the make and country that gave us this logo?", ['Bentley - England', 'Peugeot - korea', 
		'Audi - Germany', 'Saturn - USA'], 'Peugeot - korea', peugeot );

	var shelby = new question("What's the make and country that gave us this logo?", ['Hyundai - Korea', 'Tesla - USA', 
		'Chrysler - USA', 'Audi - Germany'], 'Ford - USA', shelby );

	var tesla = new question("What's the make and country that gave us this logo?", ['Audi - Germany', 'Peugeot - korea', 
		'Tesla - USA', 'Hyundai - Korea'], 'Tesla - USA', tesla );

	var viper = new question("What's the make and country that gave us this logo?", ['Bentley - England', 'Tesla - USA', 
		'Chrysler - USA', 'Audi - Germany'], 'Chrysler - USA', viper );

	questions = [ acura, audi, bentley, chrysler, hyundai, jaguar, peugeot, shelby, tesla, viper ];

	//questions = shuffleArray(questions);

	//currentQuestion = questions[questionIndex];


// GENERAL //
	
	function nextQuestion(){

		console.log('next question')
		console.log('question index: ' + questionIndex)

		if 
			(questionIndex == questions.length) {
			$timerSpan.hide();
			$question.html("Warranties Expired!")

			displayResults();

		}else {
			console.log('current question: ' + currentQuestion)
			//currentQuestion = questions[questionIndex];
			currentQuestion.displayQuestion();
			runTimer();
			questionAnswered = false;
		}

	}

// ON CLICK ///

		// Start Button //

		$start.on('click', function(){

		questionIndex = 0;
		console.log("question index after start: " + questionIndex)

		// Game Variables //

		wins = 0;
		losses = 0;
		questionAnswered = false;

		questions = shuffleArray(questions);

		currentQuestion = questions[questionIndex];

		$start.hide();
		
		nextQuestion();

	});
	
		// Answers //
		
		$choice.on('click', function(){

		if (questionAnswered == false){

			questionAnswered = true;
		

		// Correct Answers //

			if($(this).data('choice') == currentQuestion.answer){
				
				$question.html("Covered")

				wins ++;
				questionIndex += 1;

				stopTimer();

				currentQuestion.displayImage();

				setTimeout(nextQuestion, 2500);

		// Incorrect //

			}else {
	
				$question.html("Out of Warranty!");

				losses ++;
				questionIndex += 1;

				stopTimer();

				currentQuestion.displayImage();

				$('#choice2:hover').css('color', '')

				$choice1.html(currentQuestion.answer)

				setTimeout(nextQuestion, 2500);
			}	
		}
	});

// TIME REMAING //

	$timerSpan.hide(); 

	playMusic();

})
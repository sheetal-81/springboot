// script.js

let questions = [
	{
		prompt: `What is Spring Boot?`,
		options: [
		    "A framework for building Java-based applications",
		    "A programming language",
		    "A database management system",
		    "A web browser",
		],
		answer: "A framework for building Java-based applications",
	    },
	    {
		prompt: `What are the key features of Spring Boot?`,
		options: [
		    
		    "Manual configuration, requires external servers, code generation, and development only",
		    "Standalone, lightweight, no dependencies, and development only",
		    "Auto-configuration, standalone, production-ready, and no code generation",
		    "Standalone, heavyweight, requires external servers, and development only",
		],
		answer: "Auto-configuration, standalone, production-ready, and no code generation",
	    },
	    {
		prompt: `How do you create a new Spring Boot project?`,
		options: [
		   
		    "Using Maven",
		    "Using Gradle",
		    "Using Spring Initializr",
		    "Using Eclipse",
		],
		answer: "Using Spring Initializr",
	    },
	    {
		prompt: `What is the purpose of the @SpringBootApplication annotation in Spring Boot?`,
		options: [
		    "To bootstrap the application",
		    "To define the structure of a component",
		    "To handle HTTP requests",
		    "To configure database connections",
		],
		answer: "To bootstrap the application",
	    },
	    {
		prompt: `What is the purpose of the application.properties (or application.yml) file in Spring Boot?`,
		options: [
		    
		    "To define the structure of a component",
		    "To handle HTTP requests",
		    "To configure application properties",
		    "To configure database connections",
		],
		answer: "To configure application properties",
	    },
	    {
		prompt: `What is the purpose of the @Controller annotation in Spring Boot?`,
		options: [
		    
		    "To define the structure of a component",
		    "To handle HTTP requests",
		    "To define a controller class",
		    "To configure database connections",
		],
		answer: "To define a controller class",
	    },
	    {
		prompt: `What is the purpose of the @RestController annotation in Spring Boot?`,
		options: [
		    "To define a controller class that returns RESTful responses",
		    "To define the structure of a component",
		    "To handle HTTP requests",
		    "To configure database connections",
		],
		answer: "To define a controller class that returns RESTful responses",
	    },
	    {
		prompt: `What is Spring Data JPA in Spring Boot?`,
		options: [
		    
		    "A programming language",
		    "A database management system",
		    "A data access framework",
		    "A web browser",
		],
		answer: "A data access framework",
	    },
	    {
		prompt: `What is the purpose of the @Autowired annotation in Spring Boot?`,
		options: [
		    
		    "To define the structure of a component",
		    "To handle HTTP requests",
		    "To inject dependencies",
		    "To configure database connections",
		],
		answer: "To inject dependencies",
	    },
	    {
		prompt: `What is the purpose of the @Service annotation in Spring Boot?`,
		options: [
		    
		    "To define the structure of a component",
		    "To define a service class",
		    "To handle HTTP requests",
		    "To configure database connections",
		],
		answer: "To define a service class",
	    },
	    {
		prompt: `What is the purpose of the @Repository annotation in Spring Boot?`,
		options: [
		   
		    "To define the structure of a component",
		    "To handle HTTP requests",
		    "To configure database connections",
		    "To define a repository class",
		],
		answer: "To define a repository class",
	    },
	    {
		prompt: `What is the purpose of the @GetMapping annotation in Spring Boot?`,
		options: [
		    
		    "To define the structure of a component",
		    "To handle POST requests",
		    "To handle GET requests",
		    "To configure database connections",
		],
		answer: "To handle GET requests",
	    },
	    {
		prompt: `What is the purpose of the @PostMapping annotation in Spring Boot?`,
		options: [
		    "To handle POST requests",
		    "To define the structure of a component",
		    "To handle GET requests",
		    "To configure database connections",
		],
		answer: "To handle POST requests",
	    },
	    {
		prompt: `What is the purpose of the @PutMapping annotation in Spring Boot?`,
		options: [
		    
		    "To define the structure of a component",
		    "To handle PUT requests",
		    "To handle DELETE requests",
		    "To configure database connections",
		],
		answer: "To handle PUT requests",
	    },
	    {
		prompt: `What is the purpose of the @DeleteMapping annotation in Spring Boot?`,
		options: [
		    
		    "To define the structure of a component",
		    "To handle PUT requests",
		    "To handle DELETE requests",
		    "To configure database connections",
		],
		answer: "To handle DELETE requests",
	    },
	    {
		prompt: `What is Spring Security in Spring Boot?`,
		options: [
		   
		    "A programming language",
		    "A database management system",
		    "A web browser",
		    "A framework for authentication and authorization",
		],
		answer: "A framework for authentication and authorization",
	    },
	    {
		prompt: `What is the purpose of the @EnableAutoConfiguration annotation in Spring Boot?`,
		options: [
		   
		    "To define the structure of a component",
		    "To handle HTTP requests",
		    "To configure database connections",
		    "To enable auto-configuration of the Spring application context",
		],
		answer: "To enable auto-configuration of the Spring application context",
	    },
	    {
		prompt: `What is the purpose of the @ComponentScan annotation in Spring Boot?`,
		options: [
		   
		    "To define the structure of a component",
		    "To handle HTTP requests",
		    "To scan for Spring-managed components",
		    "To configure database connections",
		],
		answer: "To scan for Spring-managed components",
	    },
	    {
		prompt: `What is the purpose of the @RequestMapping annotation in Spring Boot?`,
		options: [
		    
		    "To define the structure of a component",
		    "To map HTTP requests to controller methods",
		    "To handle HTTP requests",
		    "To configure database connections",
		],
		answer: "To map HTTP requests to controller methods",
	    },
	    {
		prompt: `What is the purpose of the @PathVariable annotation in Spring Boot?`,
		options: [
		    "To extract values from the URI path",
		    "To define the structure of a component",
		    "To handle HTTP requests",
		    "To configure database connections",
		],
		answer: "To extract values from the URI path",
	    }
	    
	    
];

// Get Dom Elements

let questionsEl =
	document.querySelector(
		"#questions"
	);
let timerEl =
	document.querySelector("#timer");
let choicesEl =
	document.querySelector("#options");
let submitBtn = document.querySelector(
	"#submit-score"
);
let startBtn =
	document.querySelector("#start");
let nameEl =
	document.querySelector("#name");
let feedbackEl = document.querySelector(
	"#feedback"
);
let reStartBtn =
	document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// Start quiz and hide frontpage

function quizStart() {
	timerId = setInterval(
		clockTick,
		1000
	);
	timerEl.textContent = time;
	let landingScreenEl =
		document.getElementById(
			"start-screen"
		);
	landingScreenEl.setAttribute(
		"class",
		"hide"
	);
	questionsEl.removeAttribute(
		"class"
	);
	getQuestion();
}

// Loop through array of questions and
// Answers and create list with buttons
function getQuestion() {
	let currentQuestion =
		questions[currentQuestionIndex];
	let promptEl =
		document.getElementById(
			"question-words"
		);
	promptEl.textContent =
		currentQuestion.prompt;
	choicesEl.innerHTML = "";
	currentQuestion.options.forEach(
		function (choice, i) {
			let choiceBtn =
				document.createElement(
					"button"
				);
			choiceBtn.setAttribute(
				"value",
				choice
			);
			choiceBtn.textContent =
				i + 1 + ". " + choice;
			choiceBtn.onclick =
				questionClick;
			choicesEl.appendChild(
				choiceBtn
			);
		}
	);
}

// Check for right answers and deduct
// Time for wrong answer, go to next question

function questionClick() {
	if (
		this.value !==
		questions[currentQuestionIndex]
			.answer
	) {
		time -= 10;
		if (time < 0) {
			time = 0;
		}
		timerEl.textContent = time;
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`;
		feedbackEl.style.color = "red";
	} else {
		feedbackEl.textContent =
			"Correct!";
		feedbackEl.style.color =
			"green";
	}
	feedbackEl.setAttribute(
		"class",
		"feedback"
	);
	setTimeout(function () {
		feedbackEl.setAttribute(
			"class",
			"feedback hide"
		);
	}, 2000);
	currentQuestionIndex++;
	if (
		currentQuestionIndex ===
		questions.length
	) {
		quizEnd();
	} else {
		getQuestion();
	}
}

// End quiz by hiding questions,
// Stop timer and show final score

function quizEnd() {
	clearInterval(timerId);
	let endScreenEl =
		document.getElementById(
			"quiz-end"
		);
	endScreenEl.removeAttribute(
		"class"
	);
	let finalScoreEl =
		document.getElementById(
			"score-final"
		);
	finalScoreEl.textContent = time;
	questionsEl.setAttribute(
		"class",
		"hide"
	);
}

// End quiz if timer reaches 0

function clockTick() {
	time--;
	timerEl.textContent = time;
	if (time <= 0) {
		quizEnd();
	}
}

// Save score in local storage
// Along with users' name

function saveHighscore() {
	let name = nameEl.value.trim();
	if (name !== "") {
		let highscores =
			JSON.parse(
				window.localStorage.getItem(
					"highscores"
				)
			) || [];
		let newScore = {
			score: time,
			name: name,
		};
		highscores.push(newScore);
		window.localStorage.setItem(
			"highscores",
			JSON.stringify(highscores)
		);
		alert(
			"Your Score has been Submitted"
		);
	}
}

// Save users' score after pressing enter

function checkForEnter(event) {
	if (event.key === "Enter") {
		saveHighscore();
		alert(
			"Your Score has been Submitted"
		);
	}
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = quizStart;

let questions = [
  {
    question: "What mainly characterizes life in the countryside?",
    options: [
      "High population concentration and tall buildings.",
      "Natural landscapes, agricultural activities, and tranquility.",
      "Fast mobility and easy access to cutting-edge technology.",
      "Diversity of cultural and leisure options."
    ],
    answer: 1 // Correct answer: option 1
  },
  {
    question: "What is one of the biggest challenges for growing cities?",
    options: [
      "Preservation of green areas and natural resources.",
      "Building new schools and hospitals.",
      "Increasing agricultural production.",
      "Providing more entertainment options."
    ],
    answer: 0 // Correct answer: option 0
  },
  {
    question: "What does 'sustainable agriculture' mean in the context of the city?",
    options: [
      "Cultivating chemical products for higher productivity.",
      "Organic farming in urban gardens and neighborhoods.",
      "Producing food only for export.",
      "Deforestation for urban expansion."
    ],
    answer: 1 // Correct answer: option 1
  },
  {
    question: "How can technology help connect the city and the countryside?",
    options: [
      "Technology can promote isolation of the countryside.",
      "Using communication systems to create a trade network between both.",
      "Discouraging farming in the countryside.",
      "Focusing on increasing the number of cars in cities."
    ],
    answer: 1 // Correct answer: option 1
  },
  {
    question: "What is the impact of uncontrolled urbanization on the countryside?",
    options: [
      "Increase in biodiversity in the countryside.",
      "Reduction of agricultural and natural areas.",
      "Improvement of soil quality.",
      "Expansion of green areas."
    ],
    answer: 1 // Correct answer: option 1
  },
  {
    question: "What is the main economic activity of the countryside?",
    options: [
      "Heavy industry.",
      "Electronics trade.",
      "Agriculture and livestock.",
      "Information technology sector."
    ],
    answer: 2 // Correct answer: option 2
  },
  {
    question: "How can cities improve integration with the countryside?",
    options: [
      "Expanding urban areas without planning.",
      "Investing in precision agriculture technologies.",
      "Increasing consumption of industrialized products.",
      "Decreasing food production."
    ],
    answer: 1 // Correct answer: option 1
  },
  {
    question: "What is a 'smart city'?",
    options: [
      "A city with many tall buildings and wide streets.",
      "A city that uses technology to improve quality of life.",
      "A city that does not depend on electricity.",
      "A city that exclusively relies on public transport."
    ],
    answer: 1 // Correct answer: option 1
  },
  {
    question: "How can agriculture in the countryside help the city?",
    options: [
      "Increasing the price of food.",
      "Providing fresh and sustainable food.",
      "Destroying green areas.",
      "Creating jobs in the cities."
    ],
    answer: 1 // Correct answer: option 1
  },
  {
    question: "What is rural exodus?",
    options: [
      "The increase in population in rural areas.",
      "The migration of people from the countryside to the city.",
      "The growth of vegetation in cities.",
      "The construction of new farms."
    ],
    answer: 1 // Correct answer: option 1
  }
];

let currentQuestion = 0;
let score = 0;
let quizOver = false;
let selectedAnswer = -1;  // To highlight the selected answer

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  noStroke();
  textFont("Arial");  // Default p5.js font (Arial)
}

function draw() {
  background(255);

  // Drawing flower decorations in the background
  drawFlowers();

  if (!quizOver) {
    // Box for the question
    fill(128, 0, 128);  // Purple color
    rect(50, 80, 500, 80, 20);  // Rounded box for the question

    // Display the question inside the box
    textSize(20);
    fill(255);
    text(questions[currentQuestion].question, width / 2, 120);

    // Display the answer options
    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
      let y = 200 + i * 60;
      let optionX = 150;
      let optionWidth = 300;
      let optionHeight = 50;

      // Color of the options
      if (selectedAnswer === i && i === questions[currentQuestion].answer) {
        fill(0, 255, 0);  // Green for correct answer
      } else if (selectedAnswer === i) {
        fill(255, 182, 193);  // Light pink for selected option
      } else {
        fill(255, 182, 193);  // Soft pink for the options
      }

      rect(optionX, y, optionWidth, optionHeight, 10);  // Draw option button
      fill(0);
      textSize(16);  // Adjust text size to fit in the options
      text(questions[currentQuestion].options[i], width / 2, y + optionHeight / 2);  // Text inside the square
    }
  } else {
    // Display the final result
    fill(255, 182, 193);  // Result box in light pink
    rect(50, 100, 500, 200, 20);

    textSize(28);
    fill(0);
    text("Quiz Finished!", width / 2, height / 4);
    textSize(24);
    text("Your score: " + score + " out of " + questions.length, width / 2, height / 2);
    textSize(18);
    text("Click to Restart", width / 2, height - 50);
  }
}

// Function to draw flowers and decorations in the background
function drawFlowers() {
  // Flowers in the top-left corner
  fill(255, 105, 180);
  ellipse(40, 40, 50, 50);
  fill(255, 182, 193);
  ellipse(70, 40, 50, 50);
  
  // Flowers in the bottom-right corner
  fill(255, 105, 180);
  ellipse(540, 350, 50, 50);
  fill(255, 182, 193);
  ellipse(470, 350, 50, 50);
  
  // Small flowers in the middle
  fill(255, 182, 193);
  ellipse(320, 280, 30, 30);
  fill(255, 105, 180);
  ellipse(360, 280, 30, 30);
}

// Detect mouse clicks on the options
function mousePressed() {
  if (quizOver) {
    // Restart the quiz
    score = 0;
    currentQuestion = 0;
    quizOver = false;
    selectedAnswer = -1;  // Reset the selection
  } else {
    // Check if the click is inside one of the option squares
    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
      let y = 200 + i * 60;
      let optionX = 150;
      let optionWidth = 300;
      let optionHeight = 50;
      
      if (mouseX > optionX && mouseX < optionX + optionWidth && mouseY > y && mouseY < y + optionHeight) {
        selectedAnswer = i;  // Update the selected answer
        
        // If the answer is correct, increase the score
        if (i === questions[currentQuestion].answer) {
          score++;
        }

        // Move to the next question
        currentQuestion++;

        if (currentQuestion === questions.length) {
          quizOver = true;  // The quiz is finished
        }
        break;
      }
    }
  }
}
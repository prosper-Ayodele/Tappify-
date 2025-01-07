let score = 0.5;

function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
  document.getElementById(pageId).style.display = 'block';

  if (pageId === 'page3') {
    document.getElementById('total-points').textContent = score;
  }
}

function incrementScore() {
  score += 0.5;
  document.getElementById('score').textContent = score.toFixed(1);
}body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #1e1e1e;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.page {
  width: 100%;
  max-width: 400px;
  padding: 20px;
}

h1, h2 {
  color: maroon;
}

.button {
  background-color: maroon;
  color: white;
  border: none;
  padding: 15px 30px;
  margin-top: 20px;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.button:hover {
  background-color: black;
}

.golden-button {
  background: linear-gradient(45deg, #d4af37, #ffd700);
  color: #000;
  border: none;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  margin: 30px auto;
  transition: 0.3s;
}

.golden-button:hover {
  transform: scale(1.1);
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.6);
}

.score-container {
  margin: 20px;
  font-size: 20px;
}

.menu-container {
  margin-top: 30px;
}<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tapify Game App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Page 1: Introductory Page -->
  <div class="page" id="page1">
    <h1>Welcome to Tapify</h1>
    <button class="button" onclick="navigateTo('page2')">Start Gaming Experience</button>
  </div>

  <!-- Page 2: Main Game Page -->
  <div class="page" id="page2" style="display: none;">
    <div class="score-container">
      <p>Score: <span id="score">0.5</span></p>
    </div>
    <button class="golden-button" onclick="incrementScore()">TP</button>
    <div class="menu-container">
      <button class="button" onclick="navigateTo('page3')">Reward</button>
    </div>
  </div>

  <!-- Page 3: Reward Page -->
  <div class="page" id="page3" style="display: none;">
    <h2>Reward Points</h2>
    <p>Your Total Points: <span id="total-points">0</span></p>
    <button class="button" onclick="navigateTo('page1')">Back to Start</button>
  </div>

  <script src="script.js"></script>
</body>
</html>

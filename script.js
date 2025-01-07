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

}
const highScoresList = document.getElementById('highScoresList');

//to get highscores from local storage
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];


highScoresList.innerHTML = highScores.map( score => 
        {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;

})
.join("");
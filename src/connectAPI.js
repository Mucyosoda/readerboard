const scoresAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/LO3yiU3cMfdqRnJggUvc/scores';

const saveScore = async (userValue, scoreValue) => {
  const response = await fetch(scoresAPI, {
    method: 'POST',
    body: JSON.stringify({
      user: userValue,
      score: scoreValue,
    }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
  const jsonData = await response.json();
  return jsonData;
};

const tabeList = (arr, cont) => {
  let players = '';
  arr.forEach((player) => {
    players += `<div id="scores">
        <h3 class="score-name">${player.user} : ${player.score}</h3>
      </div>`;
  });
  cont.innerHTML = players;
};

const getScores = async (cont) => {
  const response = await fetch(scoresAPI);
  const jsonData = await response.json();
  const sortArr = jsonData.result.sort((a, b) => b.score - a.score);
  tabeList(sortArr, cont);
};

export { saveScore, getScores };

const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];
// const ulParent = document.createElement('ul');
// for(let game of warriorsGames){
//   const {homeTeam, awayTeam} = game;
//   const gameLi = document.createElement('li');
//   if(homeTeam.points > awayTeam.points){
//     gameLi.innerHTML = `${homeTeam.team} @ ${awayTeam.team} <b>${homeTeam.points}</b>-${awayTeam.points}`;
//     gameLi.classList.add('win');
//     ulParent.append(gameLi);
//  }
//  else{
//   gameLi.innerHTML = `${homeTeam.team} @ ${awayTeam.team} ${homeTeam.points}-<b>${awayTeam.points}</b>`;
//   gameLi.classList.add('lose');
//   ulParent.append(gameLi);
//  }
// }
// document.body.append(ulParent);

const makeList = (games, targetTeam) => {
  const ulParent = document.createElement("ul");
  for (let game of games) {
    const gameLi = document.createElement("li");
    gameLi.innerHTML = scoreLine(game);
    gameLi.classList.add(isWinner(game, targetTeam) ? "win" : "lose");
    // document.body.append(gameLi);
    ulParent.appendChild(gameLi);
  }

  return ulParent;
};
const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
  const winner =
    homeTeam.points > awayTeam.points ? homeTeam.team : awayTeam.team;
  return targetTeam == winner ? true : false;
};
const scoreLine = ({ homeTeam, awayTeam }) => {
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;
  let score;
  if (hPoints > aPoints) {
    score = `${hTeam} @ ${aTeam} <b>${hPoints}</b>-${aPoints}`;
  } else {
    score = `${hTeam} @ ${aTeam} ${hPoints}-<b>${aPoints}</b>`;
  }
  return score;
};

const list = makeList(warriorsGames, "Golden State");
const list2 = makeList(warriorsGames, "Houston");
const goldenState = document.querySelector("#gs");
const houston = document.querySelector("#hs");

goldenState.appendChild(list);
houston.appendChild(list2);

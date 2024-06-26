
function game() {
    const actions = ["rock", "paper", "scissors", "lizard", "spock"];
    const playerWinResults = ["scissorspaper", 'paperrock', 'rocklizard', 'lizardspock', 'spockscissors',
        'rockscissors', 'scissorslizard', 'lizardpaper', 'paperspock', 'spockrock'];
    let playerChoice = " ";
    let compChoice = " ";
    const playChoiceElement = document.querySelector(".player-choice");
    const pickedElement = document.querySelector(".section-picked");
    const playerPickElement = document.querySelector(".user-picked");
    const pcPickElement = document.querySelector(".pc-picked");
    const resultElement = document.querySelector(".result");
    const resultTitleElement = resultElement.querySelector(".title");
    const scoreCountElement = document.querySelector(".score-count");
    let currentScore = null;

    window.addEventListener('load', () => {
        retrieveScoreFromLocalStorage();

        document.querySelectorAll(".player-choice .btn-hand").forEach(hand => {

            hand.addEventListener("click", (e) => {
                playerChoice = getPlayerChoice(e.target);
                compChoice = getCompChoice();
                console.log();

                startGame();
            })
        });
        resultElement.querySelector("button").addEventListener('click', tryAgain);

        document.getElementById("playSoundButton").addEventListener("click", function () {
            var audio = new Audio("assets/sound/rock-paper-scissors-lizard-spock-game-rules-rock-paper-scissors-lizard-spock-sheldon-big-bang-theory-101soundboards.mp3");
            audio.play();
        });
    })
    function startGame() {
        calculateWinner(playerChoice, compChoice);
        playChoiceElement.classList.add("hidden");
        pickedElement.classList.remove("hidden");
        clearResultBeforeAppend();
        buildChoiceElement(true, playerChoice);
        buildChoiceElement(false, compChoice);

    }

    function getPlayerChoice(target) {

        if (target.nodeName === 'I') {
            return target.parentElement.classList[1];
        }
        return target.classList[1];
    }

    function getCompChoice() {
        return actions[Math.floor(Math.random() * 5)];
    }
    function calculateWinner(player, comp) {
        if (player === comp) {
            resultTitleElement.innerText = `Tie`;
        } else if (getPlayerWinsStatus(player + comp)) {
            resultTitleElement.innerText = `You Win!`;
            calculateScore(1);

        } else {
            resultTitleElement.innerText = `You Lose!`;
            calculateScore(-1);
        }
    }
    function getPlayerWinsStatus(result) {
        return playerWinResults.some(winStr => winStr === result); l
    }

    function buildChoiceElement(isItUserElement, className) {
        const el = document.createElement("button");
        el.innerHTML = `<i class="fa-solid fa-hand-${className}"></i></button>`;
        el.classList = [`btn-hand ${className}`];
        if (isItUserElement) {
            playerPickElement.append(el);
        } else {
            pcPickElement.append(el);
        }
    }

    function tryAgain() {
        playChoiceElement.classList.remove("hidden");
        pickedElement.classList.add("hidden");
    }

    function clearResultBeforeAppend() {
        playerPickElement.innerHTML = "";
        pcPickElement.innerHTML = "";
    }

    function calculateScore(roundResult) {
        currentScore += roundResult;
        updateScoreBoard();
    }
    function retrieveScoreFromLocalStorage() {
        const score = + window.localStorage.getItem("gameScore") || 0;
        currentScore = score;
        updateScoreBoard();

    }
    function updateScoreBoard() {
        scoreCountElement.innerText = currentScore;
        window.localStorage.setItem("gameScore", currentScore);
    }

}

game()
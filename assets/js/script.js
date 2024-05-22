
function game() {
    const actions = ["rock", "paper", "scissors", "lizard", "spock"];
    const playerWinResults = ['scissorspaper', 'paperrock', 'rocklizard', 'lizardspock', 'spockscissors',
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


    window.addEventListener('load', () => {

        document.querySelectorAll(".player-choice .btn-hand").forEach(hand => {

            hand.addEventListener("click", (e) => {
                playerChoice = getPlayerChoice(e.target);
                compChoice = getCompChoice();
                console.log();

                startGame();
            })
        });
    })
    function startGame() {
        calculateWinner(playerChoice, compChoice);
        playChoiceElement.classList.add ("hidden");
        pickedElement.classList.remove ("hidden");
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
            resultTitleElement.innerText = `You, Win!`;

        } else {
            resultTitleElement.innerText = `You, Lose!`;
        }
    }
    function getPlayerWinsStatus(result) {
        return playerWinResults.some(winStr => winStr === result); l
    }

    function buildChoiceElement(isItUserElement, className) {
        const el = document.createElement('button');
        el.classList = [`btn-hand ${className}`];
        el.innerHTML =` <button type="button" class= "btn-hand ${className}"><i></i></button>`;
        if (isItUserElement) {
            playerPickElement.append(el);
        } else {
            pcPickElement.append(el);
        }
    }
}

game()
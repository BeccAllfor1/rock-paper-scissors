


/**
 * Gets the current score from the DOM and increments by 1
 */

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}
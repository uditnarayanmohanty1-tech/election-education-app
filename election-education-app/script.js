let score = 0;

function showPage(pageId) {
    let pages = document.getElementsByClassName("page");
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    document.getElementById(pageId).style.display = "block";
}

function checkAnswer(button, isCorrect) {
    if (button.classList.contains("answered")) return;

    button.classList.add("answered");

    if (isCorrect) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    document.getElementById("score").innerText = "Score: " + score;
}
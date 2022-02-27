var userScores = document.getElementById("scorelist");

function createLeaderboard() {
    var listOfScores = JSON.parse(localStorage.getItem('scoreList'));
    var sortedScores = listOfScores.sort(function (a, b) {
        return b.score - a.score;
    })

    for (var i = 0; i < 10; i++) {
        var tr = userScores.appendChild(document.createElement("tr"))
        var th = document.createElement("th")
        th.setAttribute("scope", "row");
        th.textContent = i + 1;
        tr.appendChild(th);
        var name = document.createElement("td");
        name.textContent = sortedScores[i].name;
        tr.appendChild(name);
        var score = document.createElement("td");
        score.textContent = sortedScores[i].score;
        tr.appendChild(score);
    }
}

createLeaderboard();

let usedNumbers = new Set();

function getUniqueRandomNumber(min, max) {
    if (usedNumbers.size >= (max - min + 1)) {
        console.log("All numbers have been used!");
        return null;
    }

    let randomNum;
    do {
        randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (usedNumbers.has(randomNum));

    usedNumbers.add(randomNum);
    return randomNum;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("fetchTicket").addEventListener("click", function () {
        let d1 = document.getElementById("tickets").value;
        let d2 = parseInt(d1);
        let reticDiv = document.getElementById("retic");
        reticDiv.innerHTML = ""; // Clear previous tickets

        if (isNaN(d2) || d2 <= 0) {
            reticDiv.innerHTML = "<p style='color: red;'>Please enter a valid number!</p>";
            return;
        }

        let generatedNumbers = new Set();
        while (generatedNumbers.size < d2) {
            generatedNumbers.add(getUniqueRandomNumber(1, 1000));
        }

        generatedNumbers.forEach(number => {
            let ticket = document.createElement("button");
            ticket.className = "ticket-button";
            ticket.textContent = `KRS_${number}_3071`;
            reticDiv.appendChild(ticket);
        });
    });
});

function getUniqueRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

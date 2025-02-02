document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#showticket").addEventListener("click", function () {
        var d1 = document.getElementById("showticket").getAttribute("value") || "";
        
        // Convert string to array, handling empty values
        let singleArray = d1.split(",").map(value => value.trim() === "" ? "" : parseInt(value) || "");

        // Convert to 3×9 matrix
        let rows = 3;
        let cols = 9;
        let twoDArray = [];

        for (let i = 0; i < rows; i++) {
            twoDArray.push(singleArray.slice(i * cols, (i + 1) * cols));
        }

        renderTicket(twoDArray);
    });
});

function renderTicket(ticket) {
    const ticketContainer = document.getElementById('ticket');
    var d2 = document.getElementById("showticket");
    var d1=document.getElementById("show");
    let tableHTML = `
        <table border="1">
            
            <tbody>
    `;

    ticket.forEach(row => {
        tableHTML += `<tr>${row.map(num => `<td onclick="markCell(this)">${num || ''}</td>`).join('')}</tr>`;
    });

    tableHTML += `</tbody></table>`;
    ticketContainer.innerHTML = tableHTML;
    d2.style.display = 'none';
    d1.style.display = 'block';
    ticketContainer.style.display = 'block';
}

function markCell(cell) {
    cell.classList.toggle('selected');
}


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#btn1").addEventListener("click", function () {
    });
});

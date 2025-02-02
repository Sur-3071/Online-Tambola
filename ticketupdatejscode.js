
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyA6x-wsNTvnP-VRPh0DccQX2zu58DFAVO0",
  authDomain: "form-359da.firebaseapp.com",
  databaseURL: "https://form-359da-default-rtdb.firebaseio.com",
  projectId: "form-359da",
  storageBucket: "form-359da.firebasestorage.app",
  messagingSenderId: "214530619278",
  appId: "1:214530619278:web:16c0dd2d5899d0d83c96df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
async function enterticket(id, ticket) {
    const dbPath = `Ticket/${id}`;
    const dataRef = ref(db, dbPath);
    const singleArray = ticket.flat();
    console.log(singleArray);

    try {
        await set(dataRef,singleArray);
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#gen").addEventListener("click", function () {
        for(let i=1;i<=1000;i++)
        {
            generateTicket(i);
        }
    });
});

function generateTicket(id) {
    const ticket = [];
    const usedNumbers = new Set();
    const columns = Array.from({ length: 9 }, (_, i) => ({
        min: i * 10 + 1,
        max: i * 10 + (i === 8 ? 11 : 10),
    }));

    for (let row = 0; row < 3; row++) {
        const currentRow = Array(9).fill('');
        const chosenColumns = new Set();

        while (chosenColumns.size < 5) {
            const colIndex = Math.floor(Math.random() * 9);
            if (!chosenColumns.has(colIndex)) {
                const { min, max } = columns[colIndex];
                let num;

                do {
                    num = Math.floor(Math.random() * (max - min)) + min;
                } while (usedNumbers.has(num));

                currentRow[colIndex] = num;
                usedNumbers.add(num);
                chosenColumns.add(colIndex);
            }
        }

        ticket.push(currentRow);
    }

    for (let colIndex = 0; colIndex < 9; colIndex++) {
        const columnValues = ticket.map(row => row[colIndex]).filter(num => num !== '');
        columnValues.sort((a, b) => a - b);

        ticket.forEach((row, rowIndex) => {
            if (row[colIndex] !== '') {
                row[colIndex] = columnValues.shift();
            }
        });
    }
    let s="KRS_"+id+"_3071"
    console.log(ticket);
    enterticket(s, ticket);
}

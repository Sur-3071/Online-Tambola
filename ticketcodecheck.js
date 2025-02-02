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


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#gettic").addEventListener("click", function () {
        var code = document.getElementById("code").value;
        document.getElementById("btn1").setAttribute("value", code);
        document.getElementById("btn2").setAttribute("value", code);
        document.getElementById("btn3").setAttribute("value", code);
        document.getElementById("btn4").setAttribute("value", code);
        document.getElementById("btn5").setAttribute("value", code);
        document.getElementById("btn6").setAttribute("value", code);
        ticketcodecheck(code);
    });
});

async function ticketcodecheck(ticketnum) {
    try {
        // Access the database and retrieve data
        const dataRefget = ref(db, `Ticket/${ticketnum}`); 
        const snapshot = await get(dataRefget);

        // Check if data exists
        if (snapshot.exists()) {
            const data = snapshot.val();
            console.log(data);
            document.getElementById("showticket").setAttribute("value", data);
            var d1=document.getElementById("show");
            var d2=document.getElementById("codecheck");
            var d3=document.getElementById("showtic");
            d3.style.display="block";
            d2.style.display="none";

        } else {
            alert("No Ticket is available for the Number");
        }
    } catch (error) {
        alert("Error occurred while fetching data");
    }
}



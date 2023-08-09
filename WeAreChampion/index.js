// firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-199fe-default-rtdb.asia-southeast1.firebasedatabase.app/"
}


const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementListDB = ref(database, "endorsementList")

// 

const message = document.getElementById("text-message")
const to = document.getElementById("sender")
const from = document.getElementById("from")
const publishBtn = document.getElementById("publish")

let endorsements = document.getElementById("endorsements")


// helper function

function capatilize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function appendNewItem(messageObj) {
    let newMsg = `
    <li>
        <div>
            <h3><span>From</span> ${messageObj.from}</h3>
            
        </div>
        <p>${messageObj.message}</p>
        <div>
            <h3><span>To</span> ${messageObj.to}</h3>
        </div>
    </li>
    `
    endorsements.innerHTML += newMsg
}

function printLs(messagesArray) {
    endorsements.innerHTML = ""
    
    for (let i =0; i < messagesArray.length; i++) {
        appendNewItem(messagesArray[i][1])
    }
}

// 
publishBtn.addEventListener("click", function() {
    
    if (message.value && from.value && to.value) {
        push(endorsementListDB, {
            "to": capatilize(to.value),
            "from": capatilize(from.value),
            "message": capatilize(message.value)
        })

    } else {
        
    }
})


onValue(endorsementListDB, function(snapshot) {
    let singleItemArray = Object.entries(snapshot.val())
    // console.log(singleItemArray[0][1])
    printLs(singleItemArray)
})



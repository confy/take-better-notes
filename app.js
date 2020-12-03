//html elements
const html = document.querySelector("html")
const content = document.querySelector(".content")
const textarea = document.querySelector(".content textarea")
const errortxt = document.querySelector("#error")
const nav = document.querySelector(".nav")
const navlist = document.querySelector(".navlist")
const menus = document.querySelectorAll(".header, .footer, .nav")
var buttons = document.querySelectorAll("button:not(.bottom)")
const btnNewNote = document.querySelector("#new")
const btnTheme = document.querySelector("#changeTheme")
const btnCancel = document.querySelector("#cancel")
const btnSave = document.querySelector("#save")

//array of all notes
let notesArray = [
    { title: "note one", body: "some text 1" },
    { title: "note two", body: "some text 2" }
]


function darkMode(themeNo) {
    //Toggles darkmode depending on theme number
    themes = ["Dark Mode", "Light Mode"]
    btnTheme.innerHTML = themes[themeNo]
    html.classList.toggle("dark")
    content.classList.toggle("dark")
    textarea.classList.toggle("dark")
    for (i = 0; i < menus.length; i++) {
        menus[i].classList.toggle("dark")
    }

    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("dark")
    }
}

function toggleContent() {
    //Toggles content visibility
    textarea.classList.toggle("hidden")
    btnSave.classList.toggle("hidden")
    btnCancel.classList.toggle("hidden")
    if (contentHidden == false) {
        errortxt.style.visibility = "hidden"
        contentHidden = true
    } else {
        errortxt.style.visibility = "visible"
        contentHidden = false
    }

}

function checkNote(title) {
    //checks for a note existence in NotesArray
    for (i = 0; i < notesArray.length; i++) {
        if (notesArray[i].title == title) {
            return false
        }
    }
    return true
}

function createNote(title, body) {
    //Adds Note to array and creates a button for note
    notesArray.push({ title: `${title}`, body: `${body}` })
    let notebtn = document.createElement("button")
    let notetitle = document.createTextNode(`${title}`)
    notebtn.setAttribute("id", title)
    if (themeCount % 2 == 1) {
        notebtn.setAttribute("class", "dark")
    }
    notebtn.appendChild(notetitle)
    navlist.appendChild(notebtn)
    buttons = document.querySelectorAll("button:not(.bottom)")
}
function error(show) {
    //Shows error text
    if (show == true) {
        errortxt.style.visibility = "visible"
    } else {
        errortxt.style.visibility = "hidden"
    }
}

let themeCount = 0
btnTheme.addEventListener("click", () => {
    //Dark Mode button
    themeCount++
    let themeNo = themeCount % 2
    darkMode(themeNo)
})


let contentHidden = false
btnCancel.addEventListener("click", () => {
    //cancel button
    toggleContent(false)
    contentHidden = true
})
// Save button
btnSave.addEventListener("click", () => {
    //Save Button
    for (i = 0; i < notesArray.length; i++) {
        console.log(notesArray[i])
    }
    if (textarea.value !== "") {
        let bodyLines = textarea.value.split("\n")
        let title = bodyLines[0]
        if (checkNote(title) == false) {
            error(true)

            return null
        }
        bodyLines.shift()
        let body = bodyLines.join("\n")
        createNote(title, body)
    } else {
        return null
    }
    error(false)

})

btnNewNote.addEventListener("click", () => {
    // New Note button
    if (contentHidden == true) {
        toggleContent(true)
    } else {
        textarea.value = ""
        errortxt.style.visibility = "hidden"

    }
})



navlist.addEventListener("click", (e) => {
    //Event listener for list of notes
    for (i = 0; i < notesArray.length; i++) {
        if (notesArray[i].title == e.target.id) {
            notesValue = `${notesArray[i].title}\n${notesArray[i].body}`
        }
    }
    textarea.value = notesValue
})
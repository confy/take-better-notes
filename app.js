//html elements
const html = document.querySelector("html")
const content = document.querySelector(".content")
const textarea = document.querySelector(".content textarea")
const errortxt = document.querySelector("#error")
const nav = document.querySelector(".nav")
const menus = document.querySelectorAll(".header, .footer, .nav")
const buttons = document.querySelectorAll("button")
const btnNewNote = document.querySelector("#new")
const btnTheme = document.querySelector("#changeTheme")
const btnCancel = document.querySelector("#cancel")
const btnSave = document.querySelector("#save")


let notesArray = [
    { title: "note one", body: "some text 1" },
    { title: "note two", body: "some text 2" }
]


//Dark or light mode toggle
const theme = {
    html: ["#F0F0EE", "#2E3440"],
    menus: ["#293c81", "#4C566A"],
    content: ["#c8c8cf", "#3B4252"],
    textAreaBg: ["#F0F0EE", "#3B4252"],
    textAreaTxt: ["#000", "#E5E9F0"],
    btnBg: ["#F0F0EE", "#4C566A"],
    btnTxt: ["#000", "#E5E9F0"],
    btnBorder: ["2px solid #203975", "2px solid #2E3440"],
    darkOrLight: ["Dark Mode", "Light Mode"],
}

let count = 0

btnTheme.addEventListener("click", () => {
    count++
    let themeNo = count % 2
    btnTheme.innerHTML = theme.darkOrLight[themeNo]
    html.style.background = theme.html[themeNo]
    content.style.background = theme.content[themeNo]
    textarea.style.background = theme.textAreaBg[themeNo]
    textarea.style.color = theme.textAreaTxt[themeNo]

    for (i = 0; i < menus.length; i++) {
        menus[i].style.background = theme.menus[themeNo]
    }

    for (i = 0; i < buttons.length; i++) {
        buttons[i].style.color = theme.btnTxt[themeNo]
        buttons[i].style.background = theme.btnBg[themeNo]
        buttons[i].style.border = theme.btnBorder[themeNo]
    }
})

function toggleContent(visibility) {
    if (visibility == false) {
        textarea.style.visibility = "hidden"
        btnSave.style.visibility = "hidden"
        btnCancel.style.visibility = "hidden"
        errortxt.style.visibility = "hidden"
    } else {
        textarea.style.visibility = "visible"
        btnSave.style.visibility = "visible"
        btnCancel.style.visibility = "visible"
    }
}

hidden = false
btnCancel.addEventListener("click", () => {
    toggleContent(false)
    hidden = true
})


//Checks ands sees if note exists in array
function checkNote(title) {
    for (i = 0; i < notesArray.length; i++) {
        if (notesArray[i].title == title) {
            return false
        }
    }
    return true
}
function createBtn(title) {
}
function addToArray(title, body) {
}

//Appends error txt to content
function error(show) {
    if (show == true) {
        errortxt.style.visibility = "visible"
    } else {
        errortxt.style.visibility = "hidden"
    }
}

// Save button
btnSave.addEventListener("click", () => {
    if (textarea.value !== "") {
        let bodyLines = textarea.value.split("/n")
        let title = bodyLines[0].toLowerCase()
        if (checkNote(title) == false) {
            error(true)
            console.log("dupe")
            return null
        }
        let body = ""
        for (i = 1; i < bodyLines; i++) {
            body += `${bodyLines[i]}\n`
        }
    } else {
        return null
    }
})

// New Note button
btnNewNote.addEventListener("click", () => {
    if (hidden == true) {
        toggleContent(true)
        hidden = false
    } else {
        textarea.value = ""
    }
})






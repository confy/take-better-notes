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


let notesArray = [
    { title: "note one", body: "some text 1" },
    { title: "note two", body: "some text 2" }
]


//Dark and light themes
const theme = {
    html: ["#f7faff", "#2E3440"],
    menus: ["#5E81AC", "#4C566A"],
    content: ["#d8dee9", "#3B4252"],
    textAreaBg: ["#f7faff", "#3B4252"],
    textAreaTxt: ["#000", "#E5E9F0"],
    btnBg: ["#eceff4", "#4C566A"],
    btnTxt: ["#000", "#E5E9F0"],
    btnBorder: ["2px solid #4c566a", "2px solid #2E3440"],
    darkOrLight: ["Dark Mode", "Light Mode"],
}

function darkMode(themeCount) {
    let themeNo = themeCount % 2
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
}

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

function checkNote(title) {
    for (i = 0; i < notesArray.length; i++) {
        if (notesArray[i].title == title) {
            return false
        }
    }
    return true
}

function createNote(title, body) {
    notesArray.push({ title: `${title}`, body: `${body}` })
    let notebtn = document.createElement("button")
    let notetitle = document.createTextNode(`${title}`)
    notebtn.setAttribute("id", title)
    notebtn.appendChild(notetitle)
        // navlist.innerHTML += `
        // <button id="${title}">${title}</button>
        // `
    navlist.appendChild(notebtn)
    buttons = document.querySelectorAll("button:not(.bottom)")
    if (themeCount % 2 == 0) {
        darkMode(0)
    } else {
        darkMode(1)
    }

}
//Appends error txt to content
function error(show) {
    if (show == true) {
        errortxt.style.visibility = "visible"
    } else {
        errortxt.style.visibility = "hidden"
    }
}

//Dark mode
let themeCount = 0
btnTheme.addEventListener("click", () => {
    themeCount++
    darkMode(themeCount)
})


contentHidden = false
btnCancel.addEventListener("click", () => {
        toggleContent(false)
        contentHidden = true
    })
    // Save button
btnSave.addEventListener("click", () => {
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

// New Note button
btnNewNote.addEventListener("click", () => {
    if (contentHidden == true) {
        toggleContent(true)
        contentHidden = false
    } else {
        textarea.value = ""
    }
})

navlist.addEventListener("click", (e) => {
    for (i = 0; i < notesArray.length; i++) {
        if (notesArray[i].title == e.target.id) {
            notesValue = `${notesArray[i].title}\n${notesArray[i].body}`
        }
    }
    textarea.value = notesValue
})
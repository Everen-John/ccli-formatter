let loaded = false;
const pElement = document.createElement("p")
pElement.className = "formattedCCLI border border-gray-600"
pElement.style.borderRadius = "4px"
pElement.style.padding = "1rem"
const container = document.createElement("div")
container.style.border = "thin solid #00a3e0"
container.style.borderRadius = "4px"
container.style.padding = "1rem 1rem 0.4rem 1rem"
container.style.marginTop = "1.5rem"
container.style.cursor = "pointer"
container.onclick = function () {
    navigator.clipboard.writeText(pElement.innerText)
}

const title = document.createElement("h4")
title.innerText = "✨✨ CCLI Formatter ✨✨"

const clickToCopyText = document.createElement("p")
clickToCopyText.style.fontSize = "12px"
clickToCopyText.innerText = "📋 Click to copy"

const helpline = document.createElement("p")
helpline.style.fontSize = "12px"
helpline.innerText = `Bugs? Don't hesitate to shoot me a message!
📧 everen.john@gmail.com
`


const creation = document.createElement("p")
creation.style.fontSize = "16px"
creation.style.color = "gray"
creation.style.fontStyle = "italic"
creation.innerText = "Philippians 4:20: To our God and Father be glory forever and ever. Amen."


container.appendChild(title)
container.appendChild(clickToCopyText)
container.appendChild(pElement)
container.appendChild(helpline)
container.appendChild(creation)
const delay = ms => new Promise(res => setTimeout(res, ms));
const inject = () => {
    const parentElement = document.getElementById("ModalSongInfo")

    let reported_check = document.querySelector("#ModalSongInfo > div:nth-child(2) > div:nth-child(1) > div.margin-bottom-1r.flex-center-start > span > div")
    let title
    let author
    let copyrights
    let ccli

    if (reported_check) {
        title = document.querySelector("#ModalSongInfo > div:nth-child(2) > div:nth-child(1) > div.medium-flex-center-between > div.flex-center-start > h4").innerText
        author = document.querySelector("#ModalSongInfo > div:nth-child(2) > div:nth-child(1) > div.grid-x.grid-margin-x > div > div > div:nth-child(1)").innerText.replace("AUTHORS\n", "")
        copyrights = getCopyright()
        ccli = document.querySelector("#ModalSongInfo > div:nth-child(2) > div:nth-child(1) > div.grid-x.grid-margin-x > div > div > div:nth-child(2)").innerText.replace("CCLI SONG #\n", "")

    }
    else {
        title = document.querySelector("#ModalSongInfo > div:nth-child(2) > div:nth-child(1) > div.medium-flex-center-between > div.flex-center-start > h4").innerText
        author = document.querySelector("#ModalSongInfo > div:nth-child(2) > div:nth-child(1) > div.grid-x.grid-margin-x > div > div > div:nth-child(1)").innerText.replace("AUTHORS\n", "")
        copyrights = getCopyright()
        ccli = document.querySelector("#ModalSongInfo > div:nth-child(2) > div:nth-child(1) > div.grid-x.grid-margin-x > div > div > div:nth-child(2)").innerText.replace("CCLI SONG #\n", "")

    }

    pElement.innerText = `${title} - ${author}
        ${copyrights}
        Used by Permission, CCLI #${ccli}`
    parentElement.appendChild(container)
}

const getCopyright = () => {
    let copyrightElement
    let thirdRow = document.querySelector("#ModalSongInfo > div:nth-child(2) > div:nth-child(1) > div.grid-x.grid-margin-x > div > div > div:nth-child(4) > div:nth-child(1)")
    if (thirdRow.textContent.toLowerCase() === "lyrics preview") {
        copyrightElement = document.querySelector("#ModalSongInfo > div:nth-child(2) > div:nth-child(1) > div.grid-x.grid-margin-x > div > div > div:nth-child(5) > div:nth-child(2)")
    }
    else {
        copyrightElement = document.querySelector("#ModalSongInfo > div > div:nth-child(1) > div.grid-x.grid-margin-x > div > div > div:nth-child(4) > div:nth-child(2)")
    }
    return copyrightElement.innerText.split("\n")[0]
}

const init = async () => {
    await delay(5000)
    while (true) {
        try {
            await delay(2000)
            inject()
        }
        catch (e) {
            console.log(e)
        }
    }
}
init()


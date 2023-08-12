const projectInfo = [
    {
        "name": "Generate a Random Password",
        "des": "Never use an insecure password again. Use the password generater along with filters to get a strong password.",
        "mp4": "projects/PaswordGenerator/preview.mp4",
        "webm": "projects/PaswordGenerator/preview.webm",
        "indexhtml": "projects/PaswordGenerator/index.html"
    },
    {
        "name": "ShoppingList",
        "des": "Simple shopping list app",
        "mp4": "projects/ShoppingList/preview.mp4",
        "webm": "projects/ShoppingList/preview.webm",
        "indexhtml": "projects/ShoppingList/index.html"
    },
    {
        "name": "We Are Champion",
        "des": "WeAreChampion simplifies the process of endorsing your colleagues. By providing a platform where you can easily share your thoughts and feedback. Used Realtime database, Firebase to store the data.",
        "mp4": "projects/WeAreChampion/assets/preview.mp4",
        "webm": "projects/WeAreChampion/assets/preview.webm",
        "indexhtml": "projects/WeAreChampion/index.html"
    },
    {
        "name": " Oldagram",
        "des": "Instagram clone",
        "mp4": "projects/Oldagram/preview.mp4",
        "webm": "projects/Oldagram/preview.webm",
        "indexhtml": "projects/Oldagram/index.html"
    },



]

const infoArray = document.getElementById("project")

let project = ""

for (let i=0; i < projectInfo.length; i++) {
    project += `
    <div>
                <h2>
                    <span class="highlight">${i+1}.</span> 
                    ${projectInfo[i].name}
                </h2>
                <p>
                    ${projectInfo[i].des}
                </p>
                <video autoplay="true" loop="true" muted="true" playsinline="true" data-play="yep">
                    <source  src="${projectInfo[i].webm}" type="video/webm">
                    <source  src="${projectInfo[i].mp4}" type="video/mp4">
                </video>
                <a target="_blank" href="${projectInfo[i].indexhtml}">Preview</a>
            </div>

    `
}
infoArray.innerHTML = project
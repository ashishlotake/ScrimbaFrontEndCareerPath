
import { projectInfo } from "./projectData.js"

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
                    <source  src="${projectInfo[i].mp4}" type="video/mp4">
                </video>
                <a target="_blank" href="${projectInfo[i].indexhtml}">Preview</a>
            </div>

    `
}
infoArray.innerHTML = project
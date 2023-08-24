import { catsData } from "./data.js"

const radioList = document.getElementById("radio-list")
const allEmClass = document.getElementsByClassName("radio")
const getImgBtn = document.getElementById("getimg") 
const isGif = document.getElementById("animate") 
const memeModalInner = document.getElementById("meme-modal-inner")


// --> Get all unique emotion into array <--

function getUniqueEmotion(){
    let emotionArray = []
    
    for (let cat of catsData){
        for (let em of cat.emotionTags){
            if (!emotionArray.includes(em)){
                emotionArray.push(em)
            }
        }
    }
    return emotionArray
}


const uniqueEmotionArray =  getUniqueEmotion()

// --> render all the emotion <--

function renderEmotion(){
    for (let oneEm of uniqueEmotionArray){
        radioList.innerHTML += `
            <div class="radio">
                <label for="${oneEm}">${oneEm}</label>
                <input type="radio" id="${oneEm}" value="${oneEm}" name="selection">
            </div>
        `
    }
}

renderEmotion()


// --> Highlight the current selected emotion <--

radioList.addEventListener("change", highlightSelected)

function highlightSelected(e){
    for (let em of allEmClass) {
        em.classList.remove('red')
    }
    document.getElementById(e.target.id).parentElement.classList.add("red")
    // return (e.target.value)
}


// --> function to get random element from array <--

function randomEl(array){
    return Math.floor(Math.random()*array.length)
}


// --> select selectedEmotion from frontend  <--

function selectedEm(){
    if (document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        return selectedEmotion
    }
}

// --> get single cat from catsData based on selectedEmotion <--

function finalCat(){
    const selectedEmotion = selectedEm()
    // all the cats who have selected emotion
    const arrayOfCatsForEm = catsData.filter(function(cat){
        if (isGif.checked){
            return cat.emotionTags.includes(selectedEmotion) && cat.isGif
        }
        return cat.emotionTags.includes(selectedEmotion)
    })

    return arrayOfCatsForEm[randomEl(arrayOfCatsForEm)]
}


// --> render cat indside modal <--

function printCat(){
    const cat =  finalCat()
    memeModalInner.innerHTML =  `
    <img 
        class="cat-img" 
        src="./images/${cat.image}"
        alt="${cat.alt}"
        >
        `
        document.getElementById("modal").style.display = 'flex'


    }

document.getElementById("modal-close-btn").addEventListener('click', function(){
    document.getElementById("modal").style.display = 'none'
})
    
getImgBtn.addEventListener("click",printCat)


const closeBtn = document.getElementById("close-btn")
const consentForm = document.getElementById("consent-form")
const declineBtn = document.getElementById("decline")
// const closeBtn = document.getElementById("close-btn")




consentForm.addEventListener("submit" ,function(e){
    e.preventDefault()

    const formData = new FormData(consentForm)
    const fullName =  formData.get('fullname')

    document.getElementById('message').innerHTML= 
    `<div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>` 

    setTimeout(function(){
        document.getElementById('upload-text').innerText =
        `Makeing the sale ..`
    }, 1500)

    setTimeout(function(){
        document.getElementById('close-btn').style.opacity = '1'
        document.getElementById('modal-inner').innerHTML =
        `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif" >
            <img  src="images/pirate.gif">
        </div>
        `
        // closeBtn.addEventListener("click", function(){
        //     document.getElementById('modal').style.display = 'none'
        // })
    }, 3000)



})

declineBtn.addEventListener("mouseenter", function(){
    document.getElementById("buttons-box").classList.toggle("reverse")
})

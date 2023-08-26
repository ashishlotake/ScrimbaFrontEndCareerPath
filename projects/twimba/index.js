import { tweetsDatas } from "./data.js"
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';



if (localStorage.getItem("tweetsDat")==null){
    localStorage.setItem("tweetsData", JSON.stringify(tweetsDatas))
}
const tweetsData = JSON.parse(localStorage.getItem("tweetsData"));

const tweetTextIn = document.getElementById("tweetText")
const tweetBtn = document.getElementById("tweetBtn")


tweetTextIn.addEventListener("input", function(){
    // console.log(tweetTextIn)
    if (tweetTextIn.value){
        
        tweetBtn.style.opacity=1
        // console.log("s")
    }
    else {

        tweetBtn.style.opacity=0.5
    }


})

tweetBtn.addEventListener("click",function(){

    if (tweetTextIn.value){
        // console.log(tweetTextIn.value)
        tweetsData.unshift({
            name: "Ashish Lotake",
            handle: `@ashish02lotake`,
            profilePic: `images/ashish.png`,
            likes: 0,
            retweets: 0,
            views: 1,
            tweetText: tweetTextIn.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        })
        render()
        tweetTextIn.value=''
    }
})

document.addEventListener("click", function(e){
    if (e.target.dataset.likes){
        highlightLike(e.target.dataset.likes)
    }
    else if  (e.target.dataset.retweet){
        highlightTweet(e.target.dataset.retweet)
    }

    else if (e.target.dataset.comment){
        showComment(e.target.dataset.comment)

    }
    else if (e.target.dataset.delete){
        deleteTweet(e.target.dataset.delete)

    }
    else if (e.target.dataset.rplycmnt ){

        console.log(e.target.dataset.rplycmnt)


        if (document.getElementById(`myTextarea-${e.target.dataset.rplycmnt}`)){
            const replycmnt = document.getElementById(`myTextarea-${e.target.dataset.rplycmnt}`)
            let tweetObj = getTweetObjFrmUID(e.target.dataset.rplycmnt)
            let singleRply =     {
                name: "Ashish Lotake",
                handle: `@ashish02lotake`,
                profilePic: `images/ashish.png`,
                tweetText: `${replycmnt.value}`
            }
            tweetObj.replies.unshift(singleRply)
            console.log(tweetObj.replies)
            replycmnt.value = ''
            render()
        }

    }

})


function getTweetObjFrmUID(tweetUID){
    const tweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetUID 
    }) 
    // console.log(tweetObj)
    return tweetObj[0]
}

function highlightLike(tweetUID){
    const tweetObj = getTweetObjFrmUID(tweetUID)
    if (tweetObj.isLiked){
        tweetObj.likes --
    }
    else{
        tweetObj.likes ++
    }
    tweetObj.isLiked = !tweetObj.isLiked
    render()

}

function highlightTweet(tweetUID){
    const tweetObj = getTweetObjFrmUID(tweetUID)
    if (tweetObj.isRetweeted) {
        tweetObj.retweets --
    }
    else {
        tweetObj.retweets ++
    }
    tweetObj.isRetweeted = !tweetObj.isRetweeted
    render()
    
}

function showComment(tweetUID){
    document.getElementById(`comment-${tweetUID}`).classList.toggle("hidden")
}



function deleteTweet(tweetUID){
    tweetsData.forEach(function (tweet, i) {
        if (tweet.uuid == tweetUID){
            tweetsData.splice(i, 1)
        }
        render()

    })


}

// step 1 --> render data

function render(){



    let tweetStr = ''
    tweetsData.forEach(tweet => {
        let retweeted =''
        let liked= ''

        let hide= true
        // console.log("---",tweet.isLiked)
        
        if (tweet.isLiked){
            liked = "liked"
        }
        else{
            liked =''
        }

        if (tweet.isRetweeted){
            retweeted = "retweeted"
        }
        else{
            retweeted =''
        }




        let repliesLs = ''
        if (tweet.replies.length){
            tweet.replies.forEach(replies => {
                repliesLs += `
                    <div class="submitSection commentSection" >
                        <img class="twitterHandel" src="${replies.profilePic}">
                        <div class="wholeTweet">
        
                            <h5>
                                ${replies.name} 
                                <span class="handel">${replies.handle} </span> 
                            </h5>
                                ${replies.tweetText}                        
            
                        </div>
                    </div>
                `
            })
        }


        tweetStr +=
        `
                    <div class="submitSection ">
                        <img class="twitterHandel" src="${tweet.profilePic}">
                        <div class="wholeTweet">
    
                            <h5>
                                ${tweet.name} 
                                <span class="handel">${tweet.handle} · 7h</span> 
                            </h5>
                                ${tweet.tweetText}                        
                            <div class="shareLs">
                                <div>
                                    <i class="makeIcon fa-regular fa-comment-dots"  data-comment="${tweet.uuid}"></i>${tweet.replies.length}
                                </div>
                                <div>
                                    <i class="makeIcon fa-solid fa-retweet retweet ${retweeted} " data-retweet="${tweet.uuid}"></i>${tweet.retweets}
                                </div>
                                <div>
                                    <i class="makeIcon fa-solid fa-heart heart ${liked} " data-likes="${tweet.uuid}"></i>${tweet.likes}
                                </div>
                                <div>
                                    <i class="makeIcon fa-solid fa-trash" data-delete="${tweet.uuid}"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden" id="comment-${tweet.uuid}">
                    <div class="submitSection commentSection">
                        <img class="twitterHandel" src="images/ashish.png">
                                <div class="wholeTweet reply-post">
                                    <textarea id="myTextarea"  placeholder="any thouhjt!"></textarea>
                                <div>
                                <i class="blue makeIcon fa-solid fa-reply" data-rplycmnt="${tweet.uuid}"></i>
                            </div>
                        </div>
                    </div>
                    ${repliesLs}
                    </div>
 
        `
    })
    console.log(uuidv4())
    localStorage.setItem("tweetsData", JSON.stringify(tweetsData))
    document.getElementById("tweetLs").innerHTML = tweetStr
}

render()



{/* <button data-replycommnt="${tweet.uuid}" id="replyBtn"><i class="fa-solid fa-reply"></i></button> */}

import { menuArray } from "./data.js"

const itemsLs = document.getElementById("itemsLs")

 
document.addEventListener("click", function(e){

    if (e.target.dataset.increment){
        const id = e.target.dataset.increment
        handelIncrement(id)

    }
    else if (e.target.dataset.decrement){
        const id = e.target.dataset.decrement
        handelDecrement(id)
    }
    else if (e.target.dataset.remove){
        const id = e.target.dataset.remove
        totalPrice -= allItemsPcLs[id][2] * allItemsPcLs[id][1]

        allItemsPcLs[id][2] = 0
        handelDecrement(id)
    }

    else if (e.target.dataset.closebtn){
        document.getElementById("modal").style.display = "none"
        document.getElementById("content").style.opacity = "1"
        console.log("aa")

    }
    else if (e.target.dataset.placeorder){
        // document.getElementById("itemsLs").innerHTML = ""
        if (totalPrice > 0){
            document.getElementById("modal").style.display = "flex"
            document.getElementById("content").style.opacity = ".3"

        }

    }
    // console.log(totalPrice)
    document.getElementById("finalValue").innerText = `${totalPrice}  $`


})



// ----------------------------------Necessay Const--------------------------------------------------
 

// this will hold detail about all item, {name , price and qty}
const allItemsPcLs = {}
let totalPrice = 0


// ----------------------------------RENDER MODULE--------------------------------------------------




export function render(){
    const arry = menuArray.map(function(food, index){
        allItemsPcLs[index] = [food.name, food.price, 0, food.image]
        return `
        <div class="item flexSpBtw">
            <div class="food">
                <div class="width-100px">
                    <img class="itemImg" src="./images/food/${food.image}"> 
                </div>
                <div class="itemDetail">
                    <h3>${food.name}</h3>
                    <p>${food.ingredients.join(", ")} </p>
                    <p>${food.price}$</p>
                </div>
            </div>
            <div class="counter">
                <button id="increment" data-increment="${food.id}"  class="incDecBtn" >+</button>
                    <div id="counter-${food.id}">0</div>
                <button  id="decrement" data-decrement="${food.id}" class="incDecBtn" >-</button>

            </div>
        </div>
                `
    }).join("")
    itemsLs.innerHTML = arry
}

render()


// ----------------------------------INCREMENT DECREMTN MODULE--------------------------------------------------

function handelIncrement(id){
    const name = allItemsPcLs[id][0]
    const price = allItemsPcLs[id][1]
    
    allItemsPcLs[id][2]++

    document.getElementById(`counter-${id}`).innerText = allItemsPcLs[id][2];


    if (document.getElementById(name)){
        
        document.getElementById(name).innerHTML=`${price} X ${allItemsPcLs[id][2]}$ = ${allItemsPcLs[id][2] * price}$`
    }
    else {
        document.getElementById("orderPrice").innerHTML+= 
        `
        <div class="flexSpBtw">
            <p>${name} <button data-remove="${id}" class="removeBtn">Remove</button></p>
            <p id="${name}">${allItemsPcLs[id][2]} X ${price}$ = ${allItemsPcLs[id][2] * price}$</p>
        </div>
        `
    }

    totalPrice += price


}

function handelDecrement(id){

    const name = allItemsPcLs[id][0]
    const price = allItemsPcLs[id][1]

    if (allItemsPcLs[id][2] > 0){

        allItemsPcLs[id][2]--
        document.getElementById(`counter-${id}`).innerText = allItemsPcLs[id][2];
        document.getElementById(name).innerHTML=`${price} X ${allItemsPcLs[id][2]}$ = ${allItemsPcLs[id][2] * price}$`


        totalPrice -=  price
    }
    //  here i will check if there are no item in cart 
    //  and if the element exist, if both are true i will remove it
    if ((allItemsPcLs[id][2] == 0) && (document.getElementById(name))) {
        document.getElementById(name).parentElement.remove()
        document.getElementById(`counter-${id}`).innerText = allItemsPcLs[id][2];
    }


}





//  this will show the final page , thank you page
document.getElementById('modal').addEventListener( "submit" , function(e) {
    e.preventDefault()
    document.querySelector(".banner").innerHTML =`
    <img class="logo" src="images/logo2.png">

    `
    
    document.getElementById("modal").style.display = 'none'
    document.getElementById("content").style.opacity = "1"

    // document.getElementById("cartArea").innerHTML = ''

    document.getElementById("buybutton").style.display = "none"

    // const a = Object.values(allItemsPcLs).filter(function(itemArr){
    //     return itemArr[2] >0
    // })
    // console.log(a)


    document.getElementById("heading").innerText = "Order Details"
    // itemsLs.innerHTML = 
    let totalItem = 0
    itemsLs.innerHTML = Object.values(allItemsPcLs).filter(function(itemArr){
        return itemArr[2] >0
    }).map(function(itm){
        totalItem += itm[2]
        return     `
        <div class="item flexSpBtw">
            <div class="food">
                <div class="width-100px">
                    <img class="itemImg" src="./images/food/${itm[3]}"> 
                </div>
                <div class="itemDetail ">
                    <h3>${itm[0]}</h3>
                </div>
            </div>
            <div class="priceOrder counter">
            ${itm[2]} X  ${itm[1]}$ =  ${itm[1]*itm[2]}$
            </div>
        </div>
    `
    }).join("")

    itemsLs.innerHTML += `
    <div class="totalCart flexSpBtw priceOrder">
            <p>Total Items</p>
            <p id="finalItem">${totalItem} items</p>
        </div>
        <div class="totalCart flexSpBtw priceOrder">
            <p>Total Price</p>
            <p id="finalValue">${totalPrice}$</p>
    </div>
            <div class="successfullOrder">
                Thanks, ${document.getElementById("name").value}! Your order is on its way!
            </div>
    <h2 class="rateHead priceOrder">Rate Your Experience</h2>
    <div class="rateStar">
        <input type="radio" id="star5" name="rateStar" value="5" />
        <label for="star5" title="text">5 stars</label>
        <input type="radio" id="star4" name="rateStar" value="4" />
        <label for="star4" title="text">4 stars</label>
        <input type="radio" id="star3" name="rateStar" value="3" />
        <label for="star3" title="text">3 stars</label>
        <input type="radio" id="star2" name="rateStar" value="2" />
        <label for="star2" title="text">2 stars</label>
        <input type="radio" id="star1" name="rateStar" value="1" />
        <label for="star1" title="text">1 star</label>
    </div>
    <a href="index.html" class="placeoder">
        Order More
    </a>    

    `
    document.getElementById('modal').innerHTML =
    `
    <h2>ENTER CARD DETAIL</h2>
    <input required type="text" placeholder="Enter your name" >
    <input required type="number" placeholder="Enter card number" >
    <input required type="number" placeholder="Enter CVV"  >
    <button id="submit" type="submit" value="submit" class="cart">
        Pay
    </button>
    `



    document.getElementById("cartArea").innerText=""

    
})



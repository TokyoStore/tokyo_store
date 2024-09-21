
// Array controllers
const Controllers =[{
    img: 'https://static.wixstatic.com/media/887c4f_12ea2c28a8b843b583d33131c2435ac6~mv2.png/v1/fit/w_500,h_500,q_90/file.png',
    name : 'PS4 Dualshock 4 Controller Copy',
    price : '600 LE',
    sold_green : 'Stock'
},
{
    img: 'https://i0.wp.com/www.pxngame.site/wp-content/uploads/2020/04/PS4-Wireless-Game-Joystick-600x600-1.jpg?fit=600%2C600&ssl=1',
    name : 'PS4 Dualshock 4 Controller Copy',
    price : '650 LE',
    sold_green : 'Stock'
},
{
    img : 'https://m.media-amazon.com/images/I/61hftsiNuzL.jpg',
    name : 'PS4 Dualshock 4 Pro Controller Original',
    price : '1200 LE',
    sold_green : 'Stock'
},
{
    img : 'https://m.media-amazon.com/images/I/71uQYNKiKCL.jpg',
    name : 'PS4 Dualshock 4 Pro Controller Original American',
    price : '1000 LE',
    sold_green : 'Stock'
},
{
    img : 'https://static.wixstatic.com/media/6dca4a_f79ccbc99b284112a324ca852642cf08~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
    name : 'PS3 Dualshock 3 Controller',
    price : '350 LE',
    sold_green : 'Stock'
},
{
    img : 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/060302/1.jpg?5117',
    name : 'PS5 Dualshock 5 Controller NEW white',
    price : '4.000 LE',
    sold_red : 'Out Of Stock'
},
{
    img : 'https://lcd-phone.com/79951-medium_default/copy-of-sony-dualsense-wireless-controller-for-ps5-cosmic-red.jpg',
    name : 'PS5 Dualshock 5 Controller NEW Nova pink',
    price : '4.000 LE',
    sold_red : 'Out Of Stock'
},
{
    img : 'https://www.skygames.com.pk/wp-content/uploads/2022/09/ps5-dualsense-controller-starlight-blue.png',
    name : 'PS5 Dualshock 5 Controller NEW Starlight Blue',
    price : '4.000 LE',
    sold_red : 'Out Of Stock'
},
{
    img : 'https://media.direct.playstation.com/is/image/sierialto/dualsense-black-hero-4',
    name : 'PS5 Dualshock 5 Controller NEW Black',
    price : '4.000 LE',
    sold_red : 'Out Of Stock'
},
{
    img : 'https://media.gamestop.com/i/gamestop/e90860d9_ALT05?$pdp$',
    name : 'PS5 Dualshock 5 Controller NEW Gry Camouflage',
    price : '4.250 LE',
    sold_red : 'Out Of Stock'
},
{
    img : 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/15964893_1/w=800,h=800,fit=pad',
    name : 'PS5 Dualshock 5 Controller NEW Galactic Purple',
    price : '4.000 LE',
    sold_red : 'Out Of Stock'
},
{
    img : 'https://btech.com/media/catalog/product/7/1/71y_ugujl5l._sl1500__1.jpg?width=1200&store=en&image-type=image',
    name : 'PS5 Dualshock 5 Controller Used',
    price : '2.500 LE',        
    sold_green : 'Stock'
}
]

// function controllers

function controllers(){
    const body = document.getElementById('controllers_body')
    Controllers.forEach((product) => {
        const card_controllers = document.createElement('div')
        card_controllers.classList.add("card_controllers");
        const img = document.createElement('img')
        const h2 = document.createElement('h2')
        const h3 = document.createElement('h3')
        const h4_green = document.createElement('h4')
        const h4_red = document.createElement('h4')


        img.src = product.img
        h2.textContent = product.name
        h3.textContent = product.price
        // stock or no stock
        if (product.sold_green) {            
            h4_green.textContent = product.sold_green
            h4_green.style.padding = '6px'
            h4_green.style.backgroundColor = 'green'
            h4_green.style.fontSize = '20px'
            h4_green.style.borderRadius = '13px'
        }else{
            h4_red.textContent = product.sold_red
            h4_red.style.backgroundColor = 'Red'
            h4_red.style.padding = '6px'
            h4_red.style.fontSize = '20px'
            h4_red.style.borderRadius = '13px'
        }
        card_controllers.appendChild(img)
        card_controllers.appendChild(h2)
        card_controllers.appendChild(h3)
        card_controllers.appendChild(h4_red)
        card_controllers.appendChild(h4_green)
        controllers_body.appendChild(card_controllers)
        
    });
}
controllers()

let i = document.querySelector(".fa-solid")
i.onclick = function(){
    nivbar_mini.style.display = 'block'
    i.style.display = 'none'
}
let close= document.querySelector("#close")
close.onclick = function(){
    nivbar_mini.style.display = 'none'
    i.style.display = 'block'
}
let btn_top = document.querySelector('#top')
window.onscroll = function(){
    if(scrollY >= 400){
        btn_top.style.display = 'block'
    }else{
        btn_top.style.display= 'none'
    }
}
btn_top.onclick = function(){
    window.scroll({
        top : 0 ,
        left : 0 ,
        behavior : 'smooth'
    })
}
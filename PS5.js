
// Array PS5
const PS5 = [{
    img : 'https://www.bigboyztech.com/public/uploads/images/16-04-2024/661d77adb2023.webp',
    name : 'PS5 Fat Used',
    version : 'Version CD Rom',
    price : '22.000 LE',
    sold_red : 'Out Of Stock'
},
{
    img : 'https://i.bikroy-st.com/ps5-slim-fat-japan-and-uk-variant-available-with-warranty-for-sale-dhaka/8bb454fd-91ac-4ff0-b165-5fbcd9ee38aa/1200/630/fitted.jpg',
    name : 'PS5 Fat New',
    version : 'Version CD Rom',
    price : '29.000 LE',
    sold_red : 'Out Of Stock'
},
{
    img : 'https://settings-ae.com/cdn/shop/files/IMG-2070.jpg?v=1720471858',
    name : 'PS5 Slim Used',
    version : 'Version CD Rom',
    price : '26.000 LE',
    sold_red : 'Out Of Stock'
},
{
    img : 'https://www.incredible.co.za/media/catalog/product/cache/73dae90034db8d1d1f2ac3680c28f0f1/p/s/ps5_slim_disk_ecommerce_ea0d.png',
    name : 'PS5 Slim New',
    version : 'Version CD Rom',
    price : '30.000 LE',
    sold_red : 'Out Of Stock'
},
{
    img : 'https://alfashop.ae/cdn/shop/files/1_a0cfbb80-a4a8-4854-b9bc-3146975d3cd6.jpg?v=1717604759',
    name : 'PS5 Fat Used',
    version : 'Version Digital',
    price : '20.000 LE',
    sold_red : 'Out Of Stock'
},
{
    img : 'https://alfashop.ae/cdn/shop/files/3_cbc5403b-9db4-4ca6-9f1d-20626d3a2b2b.jpg?v=1720085441&width=1946',
    name : 'PS5 Fat New',
    version : 'Version Digital',
    price : '27.500 LE',
    sold_red : 'Out Of Stock'
},
{
    img : 'https://asg.com.eg/wp-content/uploads/2024/07/PS5-Digital-Hero2.webp',
    name : 'PS5 Slim Used',
    version : 'Version Digital',
    price : '24.000 LE',
    sold_red : 'Out Of Stock'
},
{
    img : 'https://tv-it.com/storage/shada/playstation5/ps5-slim-digital-console-p7.webp',
    name : 'PS5 Slim New',
    version : 'Version Digital',
    price : '28.500',
    sold_red : 'Out Of Stock'
}]

// function PS5
function ps5(){
    const body = document.getElementById('body_ps5')
    PS5.forEach((product) => {
        const card_PS5 = document.createElement('div')
        card_PS5.classList.add("card_PS5");
        const img = document.createElement('img')
        const h1 = document.createElement('h1')
        const p = document.createElement('p')
        const h3 = document.createElement('h3')
        const h4_green = document.createElement('h4')
        const h4_red = document.createElement('h4')

        img.src = product.img
        h1.textContent = product.name
        p.textContent = product.version
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

        card_PS5.appendChild(img)
        card_PS5.appendChild(h1)
        card_PS5.appendChild(p)
        card_PS5.appendChild(h3)
        card_PS5.appendChild(h4_red)
        card_PS5.appendChild(h4_green)
        body_ps5.appendChild(card_PS5)
        
    });
}
ps5()

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
USA = [{
    img: 'https://egynewtech.com/image/cache/catalog/All%20Cards%20Images/PSN%20Cards/USA/5-USA-PlayStation-Store-Gift-Card-Digital-Code-550x550.jpg',
    name: 'PSN Gift Card 5$',
    price: '270 LE',
    sold_green: 'Stock'
},
{
    img: 'https://egynewtech.com/image/cache/catalog/All%20Cards%20Images/PSN%20Cards/USA/10-USA-PlayStation-Store-Gift-Card-Digital-Code-550x550.jpg',
    name: 'PSN Gift Card 10$',
    price: '520 LE',
    sold_green: 'Stock'
},
{
    img: 'https://egynewtech.com/image/cache/catalog/All%20Cards%20Images/PSN%20Cards/USA/25-USA-PlayStation-Store-Gift-Card-Digital-Code-550x550.jpg',
    name: 'PSN Gift Card 25$',
    price: '1.275 LE',
    sold_green: 'Stock'
},
{
    img: 'https://egynewtech.com/image/cache/catalog/All%20Cards%20Images/PSN%20Cards/USA/50-USA-PlayStation-Store-Gift-Card-Digital-Code-550x550.jpg',
    name: 'PSN Gift Card 50$',
    price: '2.500 LE',
    sold_green: 'Stock'
},
{
    img: 'https://egynewtech.com/image/cache/catalog/All%20Cards%20Images/PSN%20Cards/USA/75-USA-PlayStation-Store-Gift-Card-Digital-Code-550x550.jpg',
    name: 'PSN Gift Card 75$',
    price: '3.825 LE',
    sold_green: 'Stock'
},
{
    img: 'https://egynewtech.com/image/cache/catalog/All%20Cards%20Images/PSN%20Cards/USA/100-USA-PlayStation-Store-Gift-Card-Digital-Code-550x550.jpg',
    name: 'PSN Gift Card 100$',
    price: '4.900 LE',
    sold_green: 'Stock'
},
]

function usa(){
    const body = document.getElementById('USA_body')
    USA.forEach((product) => {
        const card_USA = document.createElement('div')
        card_USA.classList.add("card_USA");
        const img = document.createElement('img')
        const h2 = document.createElement('h2')
        const h3 = document.createElement('h3')
        const h4_green = document.createElement('h4')
        const h4_red = document.createElement('h4')


        img.src = product.img
        h2.textContent = product.name
        h3.textContent = product.price
        h3.style.fontSize = '20px'
        
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

        card_USA.appendChild(img)
        card_USA.appendChild(h2)
        card_USA.appendChild(h3)
        card_USA.appendChild(h4_red)
        card_USA.appendChild(h4_green)
        USA_body.appendChild(card_USA)
        
    });
}
usa()

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
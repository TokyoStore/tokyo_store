UK = [{
    img: 'https://egynewtech.com/image/cache/catalog/All%20Cards%20Images/PSN%20Cards/UK/10-UK-PlayStation-Store-Gift-Card-Digital-Code-550x550.jpg',
    name: 'PSN Gift Card 10£',
    price: '700 LE',
    sold_green: 'Stock'
},
{
    img: 'https://egynewtech.com/image/cache/catalog/All%20Cards%20Images/PSN%20Cards/UK/20-UK-PlayStation-Store-Gift-Card-Digital-Code-550x550.jpg',
    name: 'PSN Gift Card 20£',
    price: '1.400 LE',
    sold_green: 'Stock'
},
{
    img: 'https://egynewtech.com/image/cache/catalog/All%20Cards%20Images/PSN%20Cards/UK/35-UK-PlayStation-Store-Gift-Card-Digital-Code-550x550.jpg',
    name: 'PSN Gift Card 35£',
    price: '2.415 LE',
    sold_green: 'Stock'
},
{
    img: 'https://egynewtech.com/image/cache/catalog/All%20Cards%20Images/PSN%20Cards/UK/40-UK-PlayStation-Store-Gift-Card-Digital-Code-550x550.jpg',
    name: 'PSN Gift Card 40£',
    price: '2.760 LE',
    sold_green: 'Stock'
},
{
    img: 'https://egynewtech.com/image/cache/catalog/All%20Cards%20Images/PSN%20Cards/UK/50-UK-PlayStation-Store-Gift-Card-Digital-Code-550x550.jpg',
    name: 'PSN Gift Card 50£',
    price: '3.400 LE',
    sold_green: 'Stock'
},
{
    img: 'https://egynewtech.com/image/cache/catalog/All%20Cards%20Images/PSN%20Cards/UK/70-UK-PlayStation-Store-Gift-Card-Digital-Code-550x550.jpg',
    name: 'PSN Gift Card 70£',
    price: '4.690 LE',
    sold_green: 'Stock'
},
{
    img: 'https://egynewtech.com/image/cache/catalog/All%20Cards%20Images/PSN%20Cards/UK/100-UK-PlayStation-Store-Gift-Card-Digital-Code-550x550.jpg',
    name: 'PSN Gift Card 100£',
    price: '6.700 LE',
    sold_green: 'Stock'
},
]

function uk(){
    const body = document.getElementById('UK_body')
    UK.forEach((product) => {
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
        UK_body.appendChild(card_USA)
        
    });
}
uk()

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
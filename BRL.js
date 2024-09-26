BRL = [{
    img: 'https://products.eneba.games/resized-products/N_yjtbAMRq6PB2MGd3qOS5nqKgP-UtCaIiP0ezc9Yiw_350x200_1x-0.jpeg',
    name: 'PSN Gift Card 30R$',
    price: '270 LE',
    sold_red: 'Out Of Stock'
},
{
    img: 'https://products.eneba.games/resized-products/rUxlf7yzBBgNwh1pKcgzo3buIrUlKsVZXTZDoJJ4_7w_350x200_1x-0.jpeg',
    name: 'PSN Gift Card 35R$',
    price: '270 LE',
    sold_green: 'Stock'
},
{
    img: 'https://products.eneba.games/resized-products/rUxlf7yzBBgNwh1pKcgzo3buIrUlKsVZXTZDoJJ4_7w_350x200_1x-0.jpeg',
    name: 'PSN Gift Card 50R$',
    price: '1.275 LE',
    sold_red: 'Out Of Stock'
},
{
    img: 'https://products.eneba.games/resized-products/Oigoz_TYxX6Zd5OFZlx7NBsl_HE_cMl9WF_Iajv3Dic_350x200_1x-0.jpeg',
    name: 'PSN Gift Card 100R$',
    price: '1.150 LE',
    sold_green: 'Stock'
},
{
    img: 'https://products.eneba.games/resized-products/rUxlf7yzBBgNwh1pKcgzo3buIrUlKsVZXTZDoJJ4_7w_350x200_1x-0.jpeg',
    name: 'PSN Gift Card 150R$',
    price: '1.700 LE',
    sold_green: 'Stock'
},
]

function brl(){
    const body = document.getElementById('BRL_body')
    BRL.forEach((product) => {
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
        BRL_body.appendChild(card_USA)
        
    });
}
brl()

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
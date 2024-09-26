const PSN_Card =[{
    img : 'https://www.gamezawy.com/wp-content/uploads/2020/08/psn-UAE-jpg.webp',
    name : 'PSN Gift Card UEA',
    text : 'Go Page',
    link : 'UEA.html'
},
{
    img : 'https://www.gamezawy.com/wp-content/uploads/2020/06/5ea9619346177c207f1be234-1-jpg-webp.webp',
    name : 'PSN Gift Card USA',
    text : 'Go Page',
    link : 'USA.html'
},
{
    img : 'https://www.gamezawy.com/wp-content/uploads/2023/11/UK-Digital.jpg',
    name : 'PSN Gift Card UK',
    link : 'UK.html'
},
{
    img : 'https://www.gamezawy.com/wp-content/uploads/2021/05/ps_store_digital_gift_card_KSA.jpg',
    name : 'PSN Gift Card KSA',
    link : 'KSA.html'
},
{
    img : 'https://neweragames.net/wp-content/uploads/2022/06/mobile-legends1.png',
    name : 'PSN Gift Card BRl',
    link : 'BRL.html'
},
{
    img : 'https://eogstore.com/wp-content/uploads/2022/12/Playstation-PLuse-Turkey.jpg',
    name : 'PSN Gift Card Turkey ',
    link : 'Turkey.html'
},
]

// function categorys
function psn_Card(){
    const body = document.getElementById('body_PSN_Card')
    PSN_Card.forEach((product) => {
        const card_PSN_Card = document.createElement('div')
        card_PSN_Card.classList.add("card_PSN_Card");
        const img = document.createElement('img')
        const h1 = document.createElement('h1')
        const links = document.createElement('a')


        img.src = product.img
        h1.textContent = product.name
        links.href = product.link
        links.textContent = 'GO PAGE'
        
        // link style
           
        links.style.textDecoration = 'none'
        links.style.border = '1px solid #fff'
        links.style.width = '100px'
        links.style.textAlign = 'center'
        links.style.padding = '10px'
        links.style.backgroundColor = '#067aff'
        links.style.color = '#fff'
        links.style.fontSize = '19px'
        links.style.borderRadius = '12px'

        card_PSN_Card.appendChild(img)
        card_PSN_Card.appendChild(h1)
        card_PSN_Card.appendChild(links)   
        body_PSN_Card.appendChild(card_PSN_Card)
        
    });
}
psn_Card()

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
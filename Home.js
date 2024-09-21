
// Array PS5
const Categorys = [{
    img : 'download.jpeg',
    name : 'PlayStations 4',
    text : 'Go Page',
    link : 'PS4.html'
},
{
    img : 'https://assets.newatlas.com/dims4/default/3c434d4/2147483647/strip/true/crop/446x297+42+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fps3slim.jpg',
    name : 'PlayStations 3',
    text : 'Go Page',
    link : 'PS3.html'
},
{
    img : 'https://www.incredible.co.za/media/catalog/product/cache/73dae90034db8d1d1f2ac3680c28f0f1/p/s/ps5_slim_disk_ecommerce_ea0d.png',
    name : 'PlayStations 5',
    link : 'PS5.html'
},
{
    img : 'https://static.wixstatic.com/media/887c4f_12ea2c28a8b843b583d33131c2435ac6~mv2.png/v1/fit/w_500,h_500,q_90/file.png',
    name : 'Controllers',
    link : 'controllers.html'
},
{
    img : 'https://m.media-amazon.com/images/I/51jFUOC8UcL._AC_UF1000,1000_QL80_.jpg',
    name : 'Accessories',
    link : 'accessories.html'
},
{
    img : 'https://m.media-amazon.com/images/I/81htlTqEckL._AC_UF1000,1000_QL80_.jpg',
    name : 'CDs',
    link : 'cd.html'
},
]

// function categorys
function categorys(){
    const body = document.getElementById('categorys_body')
    Categorys.forEach((product) => {
        const card_categorys = document.createElement('div')
        card_categorys.classList.add("card_categorys");
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

        card_categorys.appendChild(img)
        card_categorys.appendChild(h1)
        card_categorys.appendChild(links)   
        categorys_body.appendChild(card_categorys)
        
    });
}
categorys()

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
// Array PS3
const PS3 = [{
    img : 'https://images-na.ssl-images-amazon.com/images/I/51fI3J9u2xL._AC_UL600_SR600,600_.jpg' ,
    name : 'PS3 Fat Used',
    version : 'version 4.91',
    disc :  'ياتي مع الجهاز ذراعان و العاب و الوصلات و الضمان',
    price : '3.000 LE',
    sold_green : 'Stock'
},
{
    img : 'https://assets.newatlas.com/dims4/default/3c434d4/2147483647/strip/true/crop/446x297+42+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fps3slim.jpg',
    name : 'PS3 Slim Used',
    version : 'version 4.91',
    price : '4.500 LE',
    sold_red : 'Out Of Stock'
},
{
    img : 'https://i5.walmartimages.com/seo/Restored-Sony-PS3-Slim-250GB-Super-Slim-Refurbished_035ffba5-6415-4073-bdc0-7599c63dc3c2.77c758842eb9b126351d322d8fd59145.jpeg',
    name : 'PS3 Super Slim Used',
    version : 'version 4.91',
    disc :  'ياتي مع الجهاز ذراعان و العاب و الوصلات و الضمان',
    price : '4.500 LE',
    sold_green : 'Stock'
}]
// function ps3
function ps3(){
    const body = document.getElementById('body_ps3')
    PS3.forEach((product) => {
        const card_PS3 = document.createElement('div')
        card_PS3.classList.add("card_PS3");
        const img = document.createElement('img')
        const h1 = document.createElement('h1')
        const p = document.createElement('p')
        const p_dic = document.createElement('p')
        const h3 = document.createElement('h3')
        const h4_green = document.createElement('h4')
        const h4_red = document.createElement('h4')

        img.src = product.img
        h1.textContent = product.name
        p.textContent = product.version
        p_dic.textContent = product.disc
        p_dic.style.fontSize = '20'
        p_dic.style.textAlign = 'center'
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

        card_PS3.appendChild(img)
        card_PS3.appendChild(h1)
        card_PS3.appendChild(p)
        card_PS3.appendChild(p_dic)
        card_PS3.appendChild(h3)
        card_PS3.appendChild(h4_red)
        card_PS3.appendChild(h4_green)
        body_ps3.appendChild(card_PS3)
        
    });
}
ps3()

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
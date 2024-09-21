    // Array PS4
    const PS4 = [{ 
    img : 'download.jpeg' ,
    name : 'PS4 PRO',
    version : 'version 9.00 Hack',
    price : '14.000 LE',
    sold_red : 'Out OF stock'
    },
    { 
        img : 'PS4 Fat.jpeg' ,
        name : 'PS4 FAT',
        version : 'version 9.00 Hack',
        disc : 'ياتي مع الجهاز ذراعان و العاب و الوصلات و الضمان',
        price : '10.000 LE',
        sold_green : 'Stock'
    },
    { 
        img : 'PS4 slim.jpeg' ,
        name : 'PS4 Slim',
        version : 'version 9.00 Hack',
        disc : 'ياتي مع الجهاز ذراعان و العاب و الوصلات و الضمان',
        price : '12.000 LE',
        sold_green : 'Stock'
    },
    { 
        img : 'download.jpeg' ,
        name : 'PS4 Pro',
        version : 'version 11.00 Hack',
        disc :  'ياتي مع الجهاز ذراعان و العاب و الوصلات و الضمان',
        price : '12.500 LE',
        sold_green : 'Stock'
    },
    { 
        img : 'PS4 Fat.jpeg' ,
        name : 'PS4 Fat',
        version : 'version 11.00 Hack',
        disc : '',
        price : '9.500 LE',
        sold_red : 'Out Of Stock'
    },
    {
        img : 'PS4 slim.jpeg' ,
        name : 'PS4 Slim',
        version : 'version 11.00',
        disc :  'ياتي مع الجهاز ذراعان و العاب و الوصلات و الضمان',
        price : '10.500 LE',
        sold_green : 'Stock'
    },
    {
        img: 'PS4 Fat.jpeg',
        name: 'PS4 Fat',
        version: 'version 11.52',
        disc : 'ياتي معه ذراع و الواصلات و الضمان',
        price: '7.500 LE',
        sold_green : 'Stock'
    },
    { 
        img : 'PS4 slim.jpeg' ,
        name : 'PS4 Slim',
        version : 'version 11.52',
        disc : 'ياتي معه ذراع و الواصلات و الضمان',
        price : '8.500 LE',
        sold_green : 'Stock'
    },
    { 
        img : 'download.jpeg' ,
        name : 'PS4 Pro',
        version : 'version 11.52',
        disc : 'ياتي معه ذراع و الواصلات و الضمان',
        price : '10.500 LE',
        sold_red : 'Out OF stock'
    },
]
// function ps4
function ps4(){
    const body = document.getElementById('body')
    PS4.forEach((product) => {
        const card_ps4 = document.createElement('div')
        card_ps4.classList.add("card_ps4");
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
        p_dic.style.color = 'black'
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

        card_ps4.appendChild(img)
        card_ps4.appendChild(h1)
        card_ps4.appendChild(p)
        card_ps4.appendChild(p_dic)
        card_ps4.appendChild(h3)
        card_ps4.appendChild(h4_red)
        card_ps4.appendChild(h4_green)
        body.appendChild(card_ps4)
        
    });
}
ps4()

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
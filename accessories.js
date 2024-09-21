// Array Accessories
const Accessories = [{
    img: 'https://tejarra-media.s3.amazonaws.com/19142/item_XXL_132090234_3f6fc92a002b7.jpg',
    name: 'PS4 Controller Caver Silicone Skin',
    version: 'يوجد العديد من الاشكال المتنوعة',
    price: '100 LE',
    sold_green: 'Stock'
},
{
    img: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/6/24/b4b96cd5-ca03-40e4-bbe6-03e932b516d4.jpg',
    name: 'PS4 Controller Caver Silicone Skin High Quality',
    price: '150 LE',
    sold_green: 'Stock'
},
{
    img: 'https://m.media-amazon.com/images/I/51jFUOC8UcL._AC_UF1000,1000_QL80_.jpg',
    name: 'PS5 Controller Caver Silicone Skin High Quality',
    price: '250 LE',
    sold_green: 'Stock'
},
{
    img: 'https://m.media-amazon.com/images/I/61W8cPWNK3S.jpg',
    name: 'Dual Charging Dock PS4',
    price: '350 LE',
    sold_green: 'Stock'
},
{
    img: 'https://arqoob.com/uploads/img/pi/166/166011162688/medium_1660111626.webp',
    name: 'Dual Charging Dock PS5',
    price: '450 LE',
    sold_green: 'Stock'
},
{
    img: 'https://cdn.salla.sa/WllXay/c41a3499-a1cc-493e-b190-676b5be976d5-1000x1000-LCSX0iO4UbUgw6Bi9p7iR83opIjVZsokLCzSSFvO.jpg',
    name: 'Joystick Charging Cable Ps4',
    price: '60 LE',
    sold_green: 'Stock'
},
{
    img: 'https://img.drz.lazcdn.com/g/kf/S3ce020e93b7043eb8f6a0ea2b91ae611N.jpg_720x720q80.jpg',
    name: 'Joystick Charging Cable Ps3',
    price: '60 LE',
    sold_green: 'Stock'
},
{
    img: 'https://my-live-01.slatic.net/p/81cd24a97fdf90a2afdbccd047a39022.jpg',
    name: 'Joystick Charging Cable Ps5',
    price: '65 LE',
    sold_green: 'Stock'
},
{
    img: 'https://cabletimetech.com/cdn/shop/products/7_58a1d166-748e-47aa-b64c-81b47f5560f8.jpg?v=1659077472&width=800',
    name: 'HDMI Cable',
    price: '80 LE',
    sold_green: 'Stock'
},
{
    img: 'https://www.cdiscount.com/pdt2/4/3/1/4/700x700/1237382513919431/rw/1-5m-cable-d-alimentation-eu-plug-c7-bipolaire-2-c.jpg',
    name: 'Power Cable',
    price: '50 LE',
    sold_green: 'Stock'
},
{
    img: 'https://m.media-amazon.com/images/I/610UqopGwyL.jpg',
    name: 'PS4 Skins',
    price: '200 LE',
    sold_green: 'Stock'
},
{
    img: 'https://shinawy.com/cdn/shop/files/cluppqh7a1cwu01ma6ijiasi4_1.jpg?v=1719993966',
    name: 'G91 Gaming Headset',
    price: '750 LE',
    sold_green: 'Stock'
},
{
    img: 'https://eg.jumia.is/cms/external/pet/KO148EA0K0X6SNAFAMZ/ad0dec57062f986cd972a7ccd66a3e7d.jpg',
    name: 'Kotion Each G7000 Gaming Headset',
    price: '750 LE',
    sold_green: 'Stock'
}]

// function Accessories

function accessories() {
    const body = document.getElementById('Accessories_body')
    Accessories.forEach((product) => {
        const card_Accessories = document.createElement('div')
        card_Accessories.classList.add("card_Accessories");
        const img = document.createElement('img')
        const h2 = document.createElement('h2')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const h4_green = document.createElement('h4')
        const h4_red = document.createElement('h4')


        img.src = product.img
        h2.textContent = product.name
        h3.textContent = product.price
        p.textContent = product.version
        p.style.fontSize = '20px'

        // stock or no stock
        if (product.sold_green) {
            h4_green.textContent = product.sold_green
            h4_green.style.padding = '6px'
            h4_green.style.backgroundColor = 'green'
            h4_green.style.fontSize = '20px'
            h4_green.style.borderRadius = '13px'
        } else {
            h4_red.textContent = product.sold_red
            h4_red.style.backgroundColor = 'Red'
            h4_red.style.padding = '6px'
            h4_red.style.fontSize = '20px'
            h4_red.style.borderRadius = '13px'
        }

        card_Accessories.appendChild(img)
        card_Accessories.appendChild(h2)
        card_Accessories.appendChild(h3)
        card_Accessories.appendChild(p)
        card_Accessories.appendChild(h4_red)
        card_Accessories.appendChild(h4_green)
        Accessories_body.appendChild(card_Accessories)

    });
}
accessories()

let i = document.querySelector(".fa-solid")
i.onclick = function () {
    nivbar_mini.style.display = 'block'
    i.style.display = 'none'
}
let close = document.querySelector("#close")
close.onclick = function () {
    nivbar_mini.style.display = 'none'
    i.style.display = 'block'
}
let btn_top = document.querySelector('#top')
window.onscroll = function () {
    if (scrollY >= 400) {
        btn_top.style.display = 'block'
    } else {
        btn_top.style.display = 'none'
    }
}
btn_top.onclick = function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}
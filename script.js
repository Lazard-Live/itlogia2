document.getElementById("main_action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

let buttons = document.getElementsByClassName("car_button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById("price_action").onclick = function () {
    document.getElementById("name").value === "" ? alert("Заполните имя!") :
        document.getElementById("phone").value === "" ? alert("Заполните номер!") :
            document.getElementById("car").value === "" ? alert("Заполните название машины!") :
                alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время");
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price_img');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.6) / 12) + 'px,' + ((event.clientY * 0.6) / 12) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
    })
});
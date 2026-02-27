        // button
        let activeMenu = false;
        const menu = document.querySelector("#menu");
        const btn = document.querySelector("#btn")
        btn.onclick = () => {
            switch (activeMenu) {
                case true:
                    activeMenu = false;
                    menu.style.display = "none";
                break;
                case false:
                    activeMenu = true;
                    menu.style.display = "flex";
                break;
            }
        }

// slideshow at main
const slide = document.querySelector("#slide");
let numSlide = 0; // number of slide
const slideshow = () => {
  const patch = '../slideshow/';
  const imgs = [
    patch + 'html.png',
    patch + 'css3.png',
    patch + 'js.png',
  ];
  numSlide++;

  if (numSlide > 2)
    numSlide = 0;

  slide.src = imgs[numSlide];
}
setInterval(slideshow, 3000);

// price cards
const card = document.querySelector("#card-item");
const patchToItems = "../icons//"
const items = [
    "Gloves-PNG-Pic.png",
    "Motorcycle-Leather-Jacket-PNG-Free-Download.png",
    "Bike-Helmet-PNG-High-Quality-Image-1.png",
]; // товары
let id = 0;
const changeItem = (number) => {
    const max = 2, min = 0;
    id += number;
    if (id < min) id = max;
    if (id > max) id = min;
    card.src = patchToItems + items[id];
}
const btnPven = document.querySelector("#btn-back");
const btnNext = document.querySelector("#btn-next");
const btnAdd = document.querySelector("#btn-add");

btnPven.onclick = () => changeItem(-1);
btnNext.onclick = () => changeItem(1);
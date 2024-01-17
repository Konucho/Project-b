
const searchBtn = document.getElementById("searchBtn");
const search = document.getElementById("search");
const content = document.getElementById("content");
const productOne = document.getElementById("productOne");
const productTwo = document.getElementById("productTwo");
const productThree = document.getElementById("productThree");
const changeTextOne = document.getElementById("productOne");
const changeTextTwo = document.getElementById("productTwo");
const changeTextThree = document.getElementById("productThree");
const originalTextOne = document.getElementById("productOne").innerHTML;
const originalTextTwo = document.getElementById("productTwo").innerHTML;
const originalTextThree = document.getElementById("productThree").innerHTML;

productOne.textContent = originalTextOne;
productTwo.textContent = originalTextTwo;
productThree.textContent = originalTextThree;

searchBtn.addEventListener("click", () => {
    search.style.padding = "20px"
    search.style.width = "600px";
    search.style.paddingLeft = "60px";
    search.style.cursor = "text";
    search.style.backgroundColor = "white";
    search.style.filter = "drop-shadow(0px 0.5px 0.5px grey)";
    search.focus();

    content.addEventListener("click", () => {
        if (search.value.trim() === "") {
            search.style.padding = "0px";
            search.style.paddingRight = "22px"
            search.style.width = "20px";
            search.style.cursor = "pointer";
            search.style.backgroundColor = "transparent";
        }
    });
})



productOne.addEventListener("mouseover", () => {
    productOne.textContent = "Dowiedz się więcej";
    productOne.style.padding = "20px 35px 20px 35px";
    productOne.style.backgroundColor = "#f5744b";
}); 

productTwo.addEventListener("mouseover", () => {
    productTwo.textContent = "Dowiedz się więcej";
    productTwo.style.padding = "20px 35px 20px 35px";
    productTwo.style.backgroundColor = "#fd6f5d";
}); 

productThree.addEventListener("mouseover", () => {
    productThree.textContent = "Dowiedz się więcej";
    productThree.style.padding = "20px 35px 20px 35px";
    productThree.style.backgroundColor = "#ef3c2c";
}); 

productOne.addEventListener("mouseout", () => {
    productOne.style.padding = "15px 30px 15px 30px";
    productOne.style.backgroundColor = "black"
    productOne.textContent = originalTextOne;
}); 

productTwo.addEventListener("mouseout", () => {
    productTwo.style.padding = "15px 30px 15px 30px";
    productTwo.style.backgroundColor = "black";
    productTwo.textContent = originalTextTwo;
}); 

productThree.addEventListener("mouseout", () => {
    productThree.style.padding = "15px 30px 15px 30px";
    productThree.style.backgroundColor = "black";
    productThree.textContent = originalTextThree;
}); 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
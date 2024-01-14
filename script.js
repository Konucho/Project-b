
const searchBtn = document.getElementById("searchBtn");
const search = document.getElementById("search");

searchBtn.addEventListener("click", () => {
    search.style.width = "600px";
    search.style.paddingLeft = "60px";
    search.style.cursor = "text";
    search.style.backgroundColor = "white";
    search.style.filter = "drop-shadow(0px 0.5px 0.5px grey)";
    search.focus();

    search.addEventListener("mouseenter", () => {
        search.style.color = "black";
        search.style.width = "600px";
    });

    search.addEventListener("mouseleave", () => {
        search.style.color = "white";
        search.style.paddingLeft = "60px";
        search.style.width = "20px";
    });
    
    search.addEventListener("focusout", () => {
        search.style.paddingLeft = "60px";
        search.style.width = "20px";
    });

    searchBtn.addEventListener("mouseenter", () => {
        search.style.color = "black";
        search.style.width = "600px";
    });

    searchBtn.addEventListener("mouseleave", () => {
        search.style.color = "white";
        search.style.paddingLeft = "60px";
        search.style.width = "20px";
    });
    
    searchBtn.addEventListener("focusout", () => {
        search.style.paddingLeft = "60px";
        search.style.width = "20px";
    });

})


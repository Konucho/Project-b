
const searchBtn = document.getElementById("searchBtn");
const search = document.getElementById("search");

searchBtn.addEventListener("click", () => {
    search.style.width = "600px";
    search.style.paddingLeft = "60px";
    search.style.cursor = "text";
    search.style.backgroundColor = "white";
    search.style.filter = "drop-shadow(0px 0.5px 0.5px grey)";
    search.focus();
})



const searchBtn = document.getElementById("searchBtn");
const search = document.getElementById("search");
const content = document.getElementById("content");

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


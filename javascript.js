const search = document.querySelector('.input');
const typing = document.querySelector('.input-field');

let i;

search.addEventListener("mouseover", () => {

    search.style.cssText = "border:1px solid #dfe1e5;  box-shadow: 1px 2px 4px 1px rgba(209,209,209,0.83);";
})
search.addEventListener("mouseout", () => {
    if (i != 1) { search.style.cssText = "border:1px solid #dfe1e5;box-shadow: none;" }
})

typing.addEventListener("focus", () => {
    i = 1;
    search.style.cssText = "border:1px solid #dfe1e5;  box-shadow: 1px 2px 4px 1px rgba(209,209,209,0.83);";

});

typing.addEventListener("", () => {
    i = 1;
    search.style.cssText = "border:1px solid #dfe1e5;  box-shadow: 1px 2px 4px 1px rgba(209,209,209,0.83);";

});
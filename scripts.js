const selectElement = (s) => document.querySelector(s);


selectElement(".open").addEventListener("click", () => {
	selectElement(".menu-list").classList.add("active");
});

selectElement(".closed").addEventListener("click", () => {
	selectElement(".menu-list").classList.remove("active");
});

document.onclick = function(e){
    if(e.target.id == "menu-open-icon" || e.target.id == "menu-list"){
        return false;
    }
	selectElement(".menu-list").classList.remove("active");
}

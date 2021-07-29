const selectElement = (s) => document.querySelector(s);

selectElement(".open").addEventListener("click", () => {
	selectElement(".menu-list").classList.add("active");
});

selectElement(".closed").addEventListener("click", () => {
	selectElement(".menu-list").classList.remove("active");
});

// Use JavaScript para alternar entre o modo claro e escuro
const checkbox = document.getElementById("escuro");
const body = document.body;
const modoEscuroEstilo = document.getElementById("modo-escuro-estilo");

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        body.classList.add("dark-mode");
        modoEscuroEstilo.disabled = false;
    } else {
        body.classList.remove("dark-mode");
        modoEscuroEstilo.disabled = true;
    }
});

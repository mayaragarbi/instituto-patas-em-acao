export function iniciarMenu() {
    document.addEventListener("change", function (evento) {

        if (!evento.target.matches(".menu-toggle")) {
            return;
        }

        const menuHambuguer = this.documentElement.querySelector(".menu.hamburguer");

        if (menuHamburguer) {
            menuHamburguer.setAttribute(
                "aria-expanded",
                evento.target.checked
            );
        }
    });
}

export function fecharMenu(){
    const menuToggle = document.querySelector(".menu-Toggle");

    const menuHamburguer = document.querySelector(".menu-hamburguer");

    if (menuToggle) {
        menuToggle.checked = false;
    }

    if (menuHamburguer) {
        menuHamburguer.setAttribute(
            "aria-expanded",
            "false"
        );
    }
}
export function iniciarMenu() {

    document.addEventListener("change", function (evento) {

        if (!evento.target.matches(".menu-toggle")) {
            return;
        }

        const menuHamburguer =
            document.querySelector(".menu-hamburguer");

        if (menuHamburguer) {
            menuHamburguer.setAttribute(
                "aria-expanded",
                evento.target.checked
            );
        }
    });
}

export function fecharMenu() {

    const menuToggle =
        document.querySelector(".menu-toggle");

    const menuHamburguer =
        document.querySelector(".menu-hamburguer");

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
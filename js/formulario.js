export function iniciarFormulario() {

    document.addEventListener("input", function (evento) {

        const campo = evento.target;

        if (!campo.matches("form input")) {
            return;
        }

        if (campo.value.trim() === "") {
            campo.classList.remove(
                "campo-valido",
                "campo-invalido"
            );

            return;
        }

        if (campo.checkValidity()) {
            campo.classList.add("campo-valido");
            campo.classList.remove("campo-invalido");
        } else {
            campo.classList.add("campo-invalido");
            campo.classList.remove("campo-valido");
        }
    });

    document.addEventListener("submit", function (evento) {

        const formulario = evento.target;

        if (!formulario.matches("form")) {
            return;
        }

        evento.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        const toast =
            document.querySelector("#toast-sucesso");

        if (toast) {
            toast.classList.add("mostrar");

            setTimeout(function () {
                toast.classList.remove("mostrar");
            }, 3000);
        }

        formulario.reset();

        formulario
            .querySelectorAll("input")
            .forEach(function (campo) {

                campo.classList.remove(
                    "campo-valido",
                    "campo-invalido"
                );
            });
    });
}
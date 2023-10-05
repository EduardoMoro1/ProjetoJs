function calcular(){

    const m1 = Number(document.querySelector("#massaum").value)
    const v1 = Number(document.querySelector("#velocidadeum").value);
    const m2 = Number(document.querySelector("#massadois").value);
    const v2 = Number(document.querySelector("#velocidadedois").value);
    const vf = Number(document.querySelector("#velocidadefinal").value);

    
    document.querySelector("#resultado").textContent = "Resultado";
}

document.addEventListener("DOMContentLoaded", () => {
    const calcularButton = document.querySelector("#calcular");
    calcularButton.addEventListener("click", calcular)
});
function calcular(){

    const e = Number(document.querySelector("#e").value)
    const Vaf = Number(document.querySelector("#velocidadedeafastamento").value)
    const Vap = Number(document.querySelector("#velocidadedeaproximacao").value)
    const V2 = Number(document.querySelector("#velocidadedois").value)
    const V1 = Number(document.querySelector("#velocidadeum").value)
    
    const e =Vaf/Vap=V2-V1/V1-V2; // equação

    document.querySelector("#resultado").textContent = "Resultado" + e.toFixed(2);
}

document.addEventListener("DOMContentLoaded", () => {
    const calcularButton = document.querySelector("#calcular");
    calcularButton.addEventListener("click", calcular)
});
const numero = Number(prompt("Digite um numero: "));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");


numeroTitulo.innerHTML = numero;
texto.innerHTML = 
`<p>Raiz quadrada: ${numero  ** 0.5}</p>
<p>${numero} é inteiro: ${Number.isInteger(numero)}
<p>É NaN: ${isNaN(numero)}</p>
<p>Arrendondado para baixo: ${Math.floor(numero)}</p>
<p>Arrendondado para cima: ${Math.ceil(numero)}</p>
<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
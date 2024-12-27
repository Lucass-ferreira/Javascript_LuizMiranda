const elemento = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const [ {texto: texto1}, {texto: texto2}, {texto: texto3}, {texto: texto4}] = elemento
console.log(texto1, texto2, texto3, texto4)

const container = document.querySelector('.container')
const subdiv = document.createElement('div')

const p = document.createElement('p')
p.textContent = texto1
subdiv.appendChild(p)

const div2 = document.createElement('div')
div2.textContent = texto2
subdiv.appendChild(div2)

const footer = document.createElement('footer')
footer.textContent = texto3
subdiv.appendChild(footer)

const section = document.createElement('section')
section.textContent = texto4
subdiv.appendChild(section)

container.appendChild(subdiv)



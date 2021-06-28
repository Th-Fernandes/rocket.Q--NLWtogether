import  Modal  from './modal.js'

const modal = Modal();

//selecionando o H2 e o P do modal para poder alterar
const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button')

// funcionalidade de abrir a modal ao clicar no marcar como lida
const checkButtons = document.querySelectorAll(" .actions a.check");

checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
})
// funcionalidade de abrir a modal ao clicar no excluir
const deleteButton = document.querySelectorAll(" .actions a.delete");

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false)) 
})

// Função que define o que acontece ao clicar no "marcar como lida" e "excluir"
function handleClick(event, check = "true") {
    event.preventDefault() //faz com que não altere a URl ao clicar em um link
    const text = check ? "marcar como lida" : "excluir";
    const slug = check ? "check" : "delete"; //responsável por mudal o final da url
    const roomId = document.querySelector("#room-id").dataset.id;
    const questionId = event.target.dataset.id;

    const form = document.querySelector('.modal form');
    form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`)
    // se check = true (valor padrão) = marcar como lido 
    // se n, = "excluir"
    modalTitle.innerHTML = `${text} esta pergunta`;
    modalDescription.innerHTML = `Tem certeza que deseja ${text} essa pergunta?`
    modalButton.innerHTML = `Sim, ${text}`

    const removeRedClass = check ? modalButton.classList.remove('red') : modalButton.classList.add('red');


    modal.open()
}



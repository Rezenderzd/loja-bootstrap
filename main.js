const botaoCadastro = document.querySelector("#cadastrar")
const emailCadastro = document.querySelector("#campo-email")
const mensagemEmail = document.querySelector("#mensagem-email")
const listaItens = document.querySelector("#lista-itens")

async function carregarItens(){
    const api = await fetch("http://localhost:3000/itens")
    const itens = await api.json()
    itens.forEach(item => {
        listaItens.innerHTML +=`
        <div class="card mx-3 my-2 d-flex align-items-center" style="width: 18rem;">
            <img src="./imagens/${item.foto}.png" class="card-img-top imagens-produtos mt-2" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.nome}</h5>
                <p class="card-text">R$${item.preço}</p>
                <a href="#" class="btn btn-danger d-flex justify-content-center">Adicionar ao carrinho</a>
            </div>
        </div>
        `
    });
}



botaoCadastro.addEventListener("click",() => {
    const email = emailCadastro.value
    if(email === ""){
        mensagemEmail.textContent = "Insira o e-mail que será cadastrado."
    }
    else if(!email.includes("@")){
            mensagemEmail.textContent ="E-mail necessita do caracter @ para ser compativel."
        }
        else{
            mensagemEmail.textContent = "E-mail cadastrado com sucesso! Nossas mais novas promoções e novidades chegarão em primeira mão a você!"
            emailCadastro.value = ""
        }
})

document.addEventListener("DOMContentLoaded", carregarItens)


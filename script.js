
// Função que faz a alternância da barra lateral por meio do "botão" hamburger
function toggle() {
    let n = document.getElementsByClassName("barContent");
    let sidebar = document.getElementById("sidebar");
    let hamburger = document.getElementById("hamburger");

    for(let i = 0; i < n.length; i++){
        if(n[i].style.visibility != 'visible') {
            n[i].style.visibility = 'visible';
            n[i].style.opacity = '1';
            sidebar.style.width = '280px';
            document.getElementById("side").style.minWidth = '280px';
            hamburger.setAttribute('aria-expanded', 'false');
        } else {
            n[i].style.visibility = 'hidden';
            n[i].style.opacity = '0';
            sidebar.style.width = '80px';
            document.getElementById("side").style.minWidth = '80px';
            hamburger.setAttribute('aria-expanded', 'true');
        }
    }
}







// Criando card - EM CONSTRUÇÃO
function add(e) {
    console.log("creado")

    let principal = document.getElementById("principal")
    let trilha = document.getElementsByClassName("inputTrilha")
    // console.log(trilha.length)

    // let val = trilha[0].value

    let mostrar = document.createElement("div")
    mostrar.textContent = `Nome Trilha: ${trilha[0].value} Descrição: ${trilha[1].value}${trilha[2].value}${trilha[3].value}`
    principal.appendChild(mostrar)
    
    for(let i = 0; i < trilha.length; i++) {
        let val = trilha[i].value
        console.log(val)
    }
}







// Condição e funções para mostrar janela modal e como sair dela
if(document.getElementById("addCard")){
    var modal = document.getElementById("modalCreateCard");
    var btn = document.getElementById("addCard");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function close() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
let nomesGuardados = [];

function adicionar(){
    
    let nome = document.getElementById('nome-amigo').value;
    
    if(nome === ''){
        alert("Digite um nome válido");
        return;

    }

    nomesGuardados.push(nome);


    document.getElementById('lista-amigos').innerHTML = nomesGuardados.join(', ');
    limparNome();
}



function limparNome(){
    document.getElementById('nome-amigo').value = '';

}

function sortear(){
    if (nomesGuardados.length < 2) {
        alert('É necessário pelo menos dois nomes para sortear!');
        return;
    }

    let resultado = '';
    

    while(nomesGuardados.length >= 2){

    let indiceAleatorio1 = Math.floor(Math.random() * nomesGuardados.length);
    let amigo1 = nomesGuardados.splice(indiceAleatorio1, 1)[0];;

    let indiceAleatorio2 = Math.floor(Math.random() * nomesGuardados.length);
    let amigo2 = nomesGuardados.splice(indiceAleatorio2, 1)[0];

    

    resultado +=`${amigo1} -> ${amigo2} <br>`;
}

    document.getElementById('lista-sorteio').innerHTML = resultado;

    if(nomesGuardados.length === 1){
        let amigoForaDoSorteio = nomesGuardados[0];
        document.getElementById('lista-amigos').innerHTML = `${amigoForaDoSorteio} ficou sem par`;

    }

}

function reiniciar(){
    document.getElementById('nome-amigo').innerHTML = '';
     document.getElementById('lista-amigos').innerHTML = '';
      document.getElementById('lista-sorteio').innerHTML = '';
       
}

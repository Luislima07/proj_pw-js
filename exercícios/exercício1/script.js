let proximoId = 1

function adicionarProduto(){
    //Entrada de informações do formulário
    const produto = document.getElementById("produto").value;
    const marca = document.getElementById("marca").value;
    const segmento = document.getElementById("segmento").value;
    const valor = document.getElementById("valor").value;
    const venda = document.getElementById("venda").value;


    //Aviso de não preenchido
    if(produto === '' || marca === '' || segmento === '' || valor === ''){
    alert ("Preencha todas as especificações obrigatórias do produto!")
    } else{//Se for preenchido corretamente

        //Cria uma linha da tabela se não existir
        const tabela = document.getElementById("tabelaProdutos").getElementsByTagName('tbody')[0];
    
        //Inserindo uma nova linha
        const novaLinha = tabela.insertRow();
    
        //Inserindo os valores da linha
        const celId = novaLinha.insertCell(0);
        const celProduto = novaLinha.insertCell(1);
        const celMarca = novaLinha.insertCell(2);
        const celSegmento = novaLinha.insertCell(3);
        const celValor = novaLinha.insertCell(4);
        const celVenda = novaLinha.insertCell(5);
    
        //Inserindo os valores dentro das celulas
        celId.innerHTML = proximoId;
        celProduto.innerHTML = produto;
        celMarca.innerHTML = marca;
        celSegmento.innerHTML = segmento;
        celValor.innerHTML = `R$ ${valor}`;
        celVenda.innerHTML = venda;
    
        proximoId++

        
    
        //Limpar formulario
        document.getElementById("tabelaForm").reset();
        alert ("Produto adicionado com sucesso!")
}
}



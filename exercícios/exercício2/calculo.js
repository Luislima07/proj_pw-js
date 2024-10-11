let proximoId = 1

function calcular(){

    //Entrada de valores
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const c = document.getElementById('c').value;
    const x = document.getElementById('x').value;

    //Se não preencher os campos
    if(a === '' || b === '' || c === '' || x === ''){
        alert('Preencha todos os campos!');
        return;
    } else{
        
        //Calula Delta
        const delta = (b*b) - (4*a*c);

        if(delta <  0){
            alert('Delta é negativo, não é possível calcular a raiz');
            return;
        }
        else{
            x1 = (-b + Math.sqrt(delta)) / (2*a);
            x2 = (-b - Math.sqrt(delta)) / (2*a);

            if(x == 1){
                const tabela = document.getElementById('tabelaResult').getElementsByTagName('tbody')[0];

            // Insirindo nova linha
            const novaLinha = tabela.insertRow();

            // Inserindo os valores dentro da linha
            const CelNum = novaLinha.insertCell(0);
            const CelA = novaLinha.insertCell(1);
            const CelB = novaLinha.insertCell(2);
            const CelC = novaLinha.insertCell(3);
            const CelX = novaLinha.insertCell(4);

            // Inserindo os valores dentro da linha
            CelNum.innerHTML = proximoId;
            CelA.innerHTML = a;
            CelB.innerHTML = b;
            CelC.innerHTML = c;
            CelX.innerHTML = x1;

            proximoId++

            alert('Cálculo realizado!');

            // Limpar o formulário
            document.getElementById("formCalculo").reset();
            
            }

            else{
                //Tabela

            // Criando uma nova linha
            const tabela = document.getElementById('tabelaResult').getElementsByTagName('tbody')[0];

            // Insirindo nova linha
            const novaLinha = tabela.insertRow();

            // Inserindo os valores dentro da linha
            const CelNum = novaLinha.insertCell(0);
            const CelA = novaLinha.insertCell(1);
            const CelB = novaLinha.insertCell(2);
            const CelC = novaLinha.insertCell(3);
            const CelX = novaLinha.insertCell(4);

            // Inserindo os valores dentro da linha
            CelNum.innerHTML = proximoId;
            CelA.innerHTML = a;
            CelB.innerHTML = b;
            CelC.innerHTML = c;
            CelX.innerHTML = x2;

            proximoId++

            alert('Cálculo realizado!');

            // Limpar o formulário
            document.getElementById("formCalculo").reset();
            
            }
            
        }
    }
}
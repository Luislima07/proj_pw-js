var nome = window.prompt("Digite o seu nome: ");
var idade = Number(window.prompt("Digite sua idade"));
document.write(`Seu nome é <b>${nome}</b> e você tem <b>${idade}</b> anos de idade<br>`);
document.write(`Seu nome tem <b>${nome.length}</b> caracteres <br>`);
document.write(`Seu nome em letras maiusculas é <b>${nome.toUpperCase()}</b> <br>`);
document.write(`Você viveu aproximadamente <b>${idade * 365} dias.</b>`);
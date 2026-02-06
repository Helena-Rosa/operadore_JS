function Somar() {
    // criar uma variavel para armazenar o valor 1 
    let v1 = parseFloat (prompt('Valor 1'))

    // templete de string para exibir o valor 
    // templete de string sintaxe: $ {variavel ou constante}
    alert (`O Valor 1 digitado pelo usuario ${v1}.`)

    let v2 = parseFloat (prompt(' Valor 2'))
    alert (`O Valor 2 digitado pelo usuario ${v2}.`)
    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').textContent =`O resultado é ${v1 + v2}.`; 


};


function Subtrair() {
    // criar uma variavel para armazenar o valor 1 
    let v1 = parseFloat (prompt('Valor 1'))

    // templete de string para exibir o valor 
    // templete de string sintaxe: $ {variavel ou constante}
    alert (`O Valor 1 digitado pelo usuario ${v1}.`)

    let v2 = parseFloat (prompt(' Valor 2'))
    alert (`O Valor 2 digitado pelo usuario ${v2}.`)
    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').textContent =`O resultado é ${v1 - v2}.`; 



};


function Multiplicar() {
    // criar uma variavel para armazenar o valor 1 
    let v1 = parseFloat (prompt('Valor 1'))

    // templete de string para exibir o valor 
    // templete de string sintaxe: $ {variavel ou constante}
    alert (`O Valor 1 digitado pelo usuario ${v1}.`)

    let v2 = parseFloat (prompt(' Valor 2'))
    alert (`O Valor 2 digitado pelo usuario ${v2}.`)
    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').textContent =`O resultado é ${v1 * v2}.`; 


};


function Dividir() {
      // criar uma variavel para armazenar o valor 1 
      let v1 = parseFloat (prompt('Valor 1'))

      // templete de string para exibir o valor 
      // templete de string sintaxe: $ {variavel ou constante}
      alert (`O Valor 1 digitado pelo usuario ${v1}.`)
  
      let v2 = parseFloat (prompt(' Valor 2'))
      alert (`O Valor 2 digitado pelo usuario ${v2}.`)
      document.getElementById('resultado').style.display = 'flex';
      document.getElementById('resultado').textContent =`O resultado é ${v1 / v2}.`; 
  
  

};


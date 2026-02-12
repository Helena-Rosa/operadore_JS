const input01 = document.getElementById('valor01')
const input02 = document.getElementById('valor02')

function somar(){
    const verificaV1 = input01.value;
    
    const verificaV2 = document.getElementById('valor02').value;
    
    const resultado = document.getElementById('resultado')
    const v1 =parseFloat(input01.value);
    const v2 =parseFloat(input02.value);
    console.log(typeof input01.value);
    console.log(typeof v1);

   
    
    if (isNaN (v1)  || isNaN(v2)){

        alert('Valor 01 ou valor 02 invalido. Digite um numero')

    } else{
        resultado.style.display= 'flex';
        resultado.innerHTML= 
        
        
`
            <h2>Memória de Cálculo</h2>
            <ul>
                <li>Operação: <span>SOMA</span> </li>
                <li>Valor 01 digitado pelo usuário: <span>${v1}</span> </li>
                <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
                <li>O resultado da operação é ${v1} + ${v2} = <span>${v1 + v2}</span></li>
            </ul>
        ;  

    }`;

};
}

function subtrair (){
    const verificaV1 = document.getElementById('valor01').value;
    
    const verificaV2 = document.getElementById('valor02').value;
    
    const resultado = document.getElementById('resultado')
    const v1 =parseFloat(input01.value);
    const v2 =parseFloat(input02.value);
    console.log(typeof input01.value);
    console.log(typeof v1);

   
    
    if (isNaN (v1)  || isNaN(v2)){

        alert('Valor 01 ou valor 02 invalido. Digite um numero')

    } else{
        resultado.style.display= 'flex';
        resultado.innerHTML= 
        
        
`
            <h2>Memória de Cálculo</h2>
            <ul>
                <li>Operação: <span>SOMA</span> </li>
                <li>Valor 01 digitado pelo usuário: <span>${v1}</span> </li>
                <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
                <li>O resultado da operação é ${v1} - ${v2} = <span>${v1 - v2}</span></li>
            </ul>
        ;  

    }`;

};
};



function multiplicar (){
    const verificaV1 = document.getElementById('valor01').value;
    
    const verificaV2 = document.getElementById('valor02').value;
    
    const resultado = document.getElementById('resultado')
    const v1 =parseFloat(input01.value);
    const v2 =parseFloat(input02.value);
    console.log(typeof input01.value);
    console.log(typeof v1);

   
    
    if (isNaN (v1)  || isNaN(v2)){

        alert('Valor 01 ou valor 02 invalido. Digite um numero')

    } else{
        resultado.style.display= 'flex';
        resultado.innerHTML= 
        
        
`
            <h2>Memória de Cálculo</h2>
            <ul>
                <li>Operação: <span>SOMA</span> </li>
                <li>Valor 01 digitado pelo usuário: <span>${v1}</span> </li>
                <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
                <li>O resultado da operação é ${v1} * ${v2} = <span>${v1 * v2}</span></li>
            </ul>
        ;  

    }`;

};
};

function dividir (){
    const verificaV1 = document.getElementById('valor01').value;
    
    const verificaV2 = document.getElementById('valor02').value;
    
    const resultado = document.getElementById('resultado')
    const v1 =parseFloat(input01.value);
    const v2 =parseFloat(input02.value);
    console.log(typeof input01.value);
    console.log(typeof v1);

   
    
    if (isNaN (v1)  || isNaN(v2)){

        alert('Valor 01 ou valor 02 invalido. Digite um numero')

    } else{
        resultado.style.display= 'flex';
        resultado.innerHTML= 
        
        
`
            <h2>Memória de Cálculo</h2>
            <ul>
                <li>Operação: <span>SOMA</span> </li>
                <li>Valor 01 digitado pelo usuário: <span>${v1}</span> </li>
                <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
                <li>O resultado da operação é ${v1} / ${v2} = <span>${v1 / v2}</span></li>
            </ul>
        ;  

    }`;

};
};

function porcentagem () {
    const verificaV1 = document.getElementById('valor01').value;
    
    const verificaV2 = document.getElementById('valor02').value;

    let v1 = parseFloat(document.getElementById('valor01').value);
    let v2 = parseFloat(document.getElementById('valor02').value);
    const resultado = document.getElementById('resultado')
    
    if (isNaN (v)  || isNaN(v2)){

        alert('Valor 01 ou valor 02 invalido. Digite um numero')

    } else{
        
        document.getElementById('resultado').style.disply = 'flex';


        

        
        
`
            <h2>Memória de Cálculo</h2>
            <ul>
                <li>Operação: <span>SOMA</span> </li>
                <li>Valor 01 digitado pelo usuário: <span>${v1}</span> </li>
                <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
                <li>O resultado da operação é ${v1} % ${v2} = <span>${v1 % v2}</span></li>
            </ul>
        ;  

    }`;

};
};


        


function Limpar () {
    //esconder o container de resultado
    document.getElementById ('resultado').style.display = 'none'
    // limpar os valors digitados nos campos 
    document.getElementById('valor01').value = '';
    document.getElementById('valor02').value = '';


};



        
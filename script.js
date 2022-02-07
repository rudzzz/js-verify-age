// função que faz toda a lógica da tela
function verificar(){

    // pegando a data
   const data = new Date();

   // pegando o ano da data
   const ano = data.getFullYear();

   // pegando o valor do input ano
   const formAno = document.getElementById('txtano');

   // pegando a div onde será exibido o texto  
   const resultado = document.getElementById('resultado');

   // pegando a imagem
   const imgFinal = document.getElementById('img-final');

    // condição que verifica se tem valor no input     
    if(formAno.value.length == 0 || Number(formAno.value) > ano){
        alert('Verifique os dados digitados!');
    }
    else{

        // pegando o valor do input sexo
        const formSex = document.getElementsByName('radiosex');

        // calculo da idade
        const idade = ano - Number(formAno.value);

        //  atribuindo valor nulo ao genero
        let genero = '';

        // criando elemento imagem
        const img = document.createElement('img');

        // atribuindo id para a iamgem
        img.setAttribute('id', 'foto');

        // estilizando a imagem
        img.style.borderRadius  = '20px';

        // verificação de dados, se for masculino executará o calculo e mostrará imagem masculina 
        if(formSex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/criancaM.jpg');
            }
            else if(idade < 21){
                img.setAttribute('src', 'img/jovemM.jpg');
            }
            else if(idade < 50){
                img.setAttribute('src', 'img/adultoM.jpg');
            }
            else {
                img.setAttribute('src', 'img/velhoM.jpg');
            }
        }
        // verificação de dados, se for feminino executará o calculo e mostrará imagem feminina 
        else if(formSex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/criancaF.jpg');
            }
            else if(idade < 21){
                img.setAttribute('src', 'img/jovemF.jpg');
            }
            else if(idade < 50){
                img.setAttribute('src', 'img/adultoF.jpg');
            }
            else {
                img.setAttribute('src', 'img/velhoF.jpg');
            }
        }

        // atribuindo mensagem personalizada a div
        resultado.innerHTML = `Gênero ${genero}, Idade Calculada: ${idade}`;

        // mostrando imagem abaixo da div mensagem
        resultado.append(img);
    }
}
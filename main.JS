var arrayAlunos = []

function enviar(){
    for (var cont=1; cont<=4; cont++) {
        var nome;
        nome=document.getElementById("aluno" +cont).value;
        console.log(nome);
        arrayAlunos.push(nome); 
        console.log(arrayAlunos);
    }
        console.log(arrayAlunos);
        escreveHTML();
        document.getElementById("btnEnviar").style.display="none";
        document.getElementById("btnOrganizar").style.display="inline-block";
}

function organizar(){
  arrayAlunos.sort();
  console.log(arrayAlunos);
  escreveHTML();
}


function escreveHTML(){
    var tamanhoArray = arrayAlunos.length;
    var arrayHTML = [];
    var html = "";
      for (var i=0; i<tamanhoArray; i++){
        arrayHTML.push("<h4>Nome- "+ arrayAlunos[i]+"</h4>");
      }
      console.log(arrayHTML);
      html=arrayHTML.join("");
      console.log(html);

      document.getElementById("mostrarNomes").innerHTML = html;
}
        

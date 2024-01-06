let students = [];
let menuOptions;

while (menuOptions != 4) {
  menuOptions = Number(
    prompt(`Bem vindo ao portal da escola! Digite o número desejado para acessar sua opção:
    
    1° Para cadastrar um estudante;
    2° Para calcular a média do estudante;
    3° Informações gerais dos alunos (incluindo se passou ou não);
    4° Para encerrar.    
    `)
  );

  switch (menuOptions) {
    case 1:
      let nome = prompt("Digite o nome do estudante: ");
      let firstNote = Number(prompt("Digite a primeira nota do estudante: "));
      let secondNote = Number(prompt("Digite a segunda nota do estudante: "));
      let thirdNote = Number(prompt("Digite a terceira nota do estudante: "));

      students.push({
        nome: nome,
        firstNote: firstNote,
        secondNote: secondNote,
        thirdNote: thirdNote,
      });
      alert(`Estudante ${nome} cadastrado com sucesso`);
      break;

    case 2:
      if (students.length == 0) {
        alert("Não existe cadastro");
      } else {
        let avaregeStudents = [];
        function calculateAvarege(firstNote, secondNote, thirdNote) {
          let avarege = (firstNote + secondNote + thirdNote) / (2).toFixed(1);
          return avarege;
        }

        for (let student of students) {
          let avaregeIndividual = calculateAvarege(
            student.firstNote,
            student.secondNote,
            student.thirdNote
          );

          avaregeStudents.push(
            `A média do estudante ${student.nome} é ${avaregeIndividual}`
          );
          alert(avaregeStudents);
        }
      }

      break;

    case 3:
     let studentsInfo = [];
      if (students.length == 0) {
        alert("Não é possível informar as informações sem dados");
      } else {
        for (let infoStudent of students) {
          let result = calculateAvarege(
            infoStudent.firstNote,
            infoStudent.secondNote,
            infoStudent.thirdNote
          );

          let approvedOrNot = result < 7 ? "Reprovado" : "Aprovado";
          studentsInfo.push(`O estudante ${infoStudent.nome}, teve as notas:
                Primeira: ${infoStudent.firstNote}
                Segunda:  ${infoStudent.secondNote}
                Terceira:  ${infoStudent.thirdNote}
                
                Ele está ${approvedOrNot}!`);
            console.log("to aqui")
            alert(studentsInfo)
            console.log("passei o alerta")
        
        }
      }
      break;

    case 4:
      alert("Programa encerrado");
      break;

    default:
      alert("Nenhuma das alternativas");
  }
}
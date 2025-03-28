//Escreva a função bmi que calcula o índice de massa corporal (imc = peso / altura 2 ).

function bmi(weight, height) {
  
    let IMC = weight / (height * height);
    
    if(IMC <= 18.5) {
      return "Underweight";
    } else if(IMC <=25.0) {
      return "Normal";
    } else if (IMC <= 30.0) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  console.log(bmi(60, 1.63));

  /*
  Soluções alternativas:
  function bmi(weight, height) {
  const $ = weight / height**2;
  return $ <= 18.5 ? 'Underweight' : $ <= 25.0 ? 'Normal' : $ <= 30.0 ? 'Overweight' : 'Obese';
}

  function bmi(weight, height) {
 let bmi = weight / (height * height);
 switch(true){
   case bmi <= 18.5:
     return "Underweight";
   case bmi <= 25.0:
     return "Normal";
   case bmi <= 30.0:
     return "Overweight";
   case bmi > 30:
     return "Obese";
  }
}


  Alternativas para representar a exponenciação: 
  var formula = (weight / Math.pow(height, 2));
  var formula = (weight / (height ** 2));
  */

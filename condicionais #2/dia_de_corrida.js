let raceNumber = Math.floor(Math.random() * 1000);  //1°

let registerEarly = true;  //Indica se registrou cedo ou não  //2°

let runnerAge = 33;  // Idade do corredor /3°

if((runnerAge > 18) && (registerEarly))  {  //4°
  raceNumber += 1000;  //Os primeiros adultos recebem um número igual ou superior a 1000
}

if (runnerAge > 18 && registerEarly) {  //5°
  console.log(`Number ${raceNumber} will start to runner at 9:30`); //Os primeiros adultos correm às 9h30.
} 
else if (runnerAge > 18 && registerEarly == false) {  //6°
  console.log(`Number ${raceNumber} will start to runner at 11:00`) //Adultos atrasados ​​correm às 11h.
}
else if (runnerAge < 18) {  //7°
  console.log(`Number ${raceNumber} will start to runner at 12:30`) //Os jovens inscritos começam às 12h30 (independentemente da inscrição).
}
else {  //9°
  console.log('See the registration desk')
}

let userName = 'Gleice';  //1

'Gleice' ? console.log(`Hello, ${userName}!`) : console.log('Hello!');  //2

let userQuestion = 'Devo ir à lua?';  //3
console.log(`${userName} perguntou: '${userQuestion}'`);  //4

let randomNumber = Math.floor(Math.random() * 8);  //5

let eightBall = '';  //6

/*if (randomNumber == 0) {
  eightBall = 'It is certain';
  console.log(eightBall);
} else if (randomNumber == 1) {
  eightBall = 'It is decidedly so';
  console.log(eightBall);
} else if (randomNumber == 2) {
  eightBall = 'Reply hazy try again';
  console.log(eightBall);
} else if (randomNumber == 3) {
  eightBall = 'Cannot predict now';
  console.log(eightBall);
} else if (randomNumber == 4) {
  eightBall = 'Do not count on it';
  console.log(eightBall);
} else if (randomNumber == 5) {
  eightBall = 'My sources say no';
  console.log(eightBall);
} else if (randomNumber == 6) {
  eightBall = 'Outlook not so good';
  console.log(eightBall);
} else if (randomNumber == 7) {
  eightBall = 'Signs point to yes';
  console.log(eightBall);
}
*/

switch (randomNumber) {
 case 0:
   eightBall = 'It is certain';
   break;
 case 1: 
  eightBall = 'It is decidedly so';
  break;
 case 2:
  eightBall = 'Reply hazy try again';
  break;
 case 3:
  eightBall = 'Cannot predict now';
  break;
 case 4:
  eightBall = 'Do not count on it';
  break
 case 5:
  eightBall = 'My sources say no';
  break;
 case 6:
  eightBall = 'Outlook not so good';
  break;
 case 7:
  eightBall = 'Signs point to yes';
  break;
 default:
  console.log('Invalid number!');
  break;
}

console.log(eightBall);

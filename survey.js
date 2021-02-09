const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Thank you for sharing: ${answer}`);

rl.question('What\'s an activity you like doing? ', (answer) => {
  console.log(`That sound\s like good fun: ${answer}`);

  rl.question('What do you listen to while doing that? ', (answer) => {
    console.log(`Nice one!: ${answer}`);

    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
      console.log(`Thank you for sharing: ${answer}`);

      rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
        console.log(`Very yummy!: ${answer}`);

        rl.question('Which sport is your absolute favourite?', (answer) => {
          console.log(`I'm sure you would beat me: ${answer}`);

          rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
            console.log(`Clever! 🧠: ${answer}`);

  rl.close();
});});});});});});});
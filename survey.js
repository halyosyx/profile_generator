const readline = require('readline');

const profile = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
    profile.name = answer;
    rl.question('What activity do you like doing? ', (answer) => {
        profile.activity = answer;
        rl.question('What do you listen to while doing that? ', (answer) => {
            profile.music = answer;
            rl.question(`Which meal is your favourite (eg. dinner, brunch, etc.) `, (answer) => {
                profile.meal = answer;
                rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
                    profile.food = answer;
                    rl.question(`Which sport is your absolute favourite? `, (answer) => {
                        profile.sport = answer;
                        rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer) => {
                            profile.superpower = answer;
                            console.log(`\nMy name is ${profile.name} and I like to ${profile.activity} while listening to ${profile.music}.\nMy favourite meal of the day is ${profile.meal} and like to eat ${profile.food}.\nMy favourite sport is ${profile.sport} and if I had a superpower it would be ${profile.superpower}`);
                            rl.close();
                        });
                    }); 
                }); 
            }); 
        }); 
    });
});



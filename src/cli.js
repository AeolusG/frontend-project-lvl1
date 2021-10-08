import readlineSync from 'readline-sync';


    export const hello = () => {   
        let userName = readlineSync.question('May I have your name? '); 
        console.log('Hello, ' + userName + '!'); 
    };

    


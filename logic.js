
let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const UserScore = document.querySelector("#score1");
const CompScore = document.querySelector("#score2");

const draw_game = () => {
    console.log("game is draw");
    message.innerText = "Game is a draw";
}



const getCompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const showWinner = (userwin, choiceid , compchoice) => {
    if(userwin){
        user_score++;
        UserScore.innerText = user_score;
        console.log("You Won the Match");
        message.innerText = `You Win ${choiceid} beats ${compchoice}`;
    }else{
        comp_score++;
        CompScore.innerText = comp_score;
        console.log("You loose");
        message.innerText = `You loose ${choiceid} beats ${compchoice}`
    }
}

const playgame = (choiceid) =>{
    console.log(`user choice is ${choiceid}`);

    let compchoice = getCompchoice();
    console.log("Computer choice is", compchoice);

    if(choiceid == compchoice){
        draw_game();
    }
    else{
        userwin = true;
        if(choiceid=="rock"){
            userwin = compchoice === "paper" ? false : true;
        }else if(choiceid === "paper"){
            userwin = compchoice === "scissors" ? false : true;
        }else{
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, choiceid, compchoice);
    }

}

choices.forEach((choice)=>{
        choice.addEventListener("click",()=>{
            const choiceid = choice.getAttribute("id");
            playgame(choiceid);
        });
});


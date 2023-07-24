function logic() {
    let computerOption = Math.floor(Math.random() * 3 + 1);
    console.log(computerOption);
    let x = document.getElementById("option1");
    let y = document.getElementById("option2");
    let z = document.getElementById("option3");

    if (x.checked === true) {
        if (computerOption === 3) {
            document.querySelector('h1').innerHTML = "Winner Winner Chicken Dinner!!!🎉🎊🎖️.Computer Chose 🪨";
        }else if (computerOption === 1) {
            document.querySelector('h1').innerHTML = "Draw🫣.Computer Chose 📃";
        }else{
            document.querySelector('h1').innerHTML = "You Lose 🤪. Computer Chose ✂️";
        }
    }

    if (y.checked === true) {
        if (computerOption === 1) {
            document.querySelector('h1').innerHTML = "Winner Winner Chicken Dinner!!!🎉🎊🎖️. Computer Chose 📃";
        }else if (computerOption === 2) {
            document.querySelector('h1').innerHTML = "Draw🫣. Computer Chose ✂️";
        }else{
            document.querySelector('h1').innerHTML = "You Lose 🤪. Computer Chose 🪨";
        }
    }

    if (z.checked === true) {
        if (computerOption === 2) {
            document.querySelector('h1').innerHTML = "Winner Winner Chicken Dinner!!!🎉🎊🎖️. Computer Chose ✂️";
        }else if (computerOption === 3) {
            document.querySelector('h1').innerHTML = "Draw🫣. Computer Chose 🪨";
        }else{
            document.querySelector('h1').innerHTML = "You Lose 🤪. Computer Chose 📃";
        }
    }

}
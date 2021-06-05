/*
DESCRIPTION:
Your job is to enable users to give a rating between 1 (bad) and 5 (great), 
and then display that rating in the form of an emoji. The users should give 
their ratings by pressing a key on their keyboards (the numbers 1 to 5). 
Here's the numbers' corresponding emojis:

5 = 😁
3 = 🙂
3 = 😐
2 = ☹️
1 = 🤬

event listeners, keyboard events, key codes, 
focus, focusout, DOM manipulation, tabindex

*/

const box = document.getElementById("box")
const text = document.getElementById("text")

box.addEventListener("focus", () => {
    text.textContent = "Type a number between 1 and 5";
    showEmoji();   
})

box.addEventListener("focusout", () => {
    text.style.fontSize = "30px";
    text.textContent = "Click here to give your rating";
});


// Write your code here 👇
const showEmoji = () => {
    window.addEventListener("keydown", event => {
        text.style.fontSize = "80px";
        switch (event.key) {
            case "1":
                text.textContent = "🤬";
                break;
            case "2":
                text.textContent = "☹️";
                break;
            case "3":
                text.textContent = "😐";
                break;
            case "4":
                text.textContent = "🙂";
                break;
            case "5":
                text.textContent = "😁";
                break;
            default:
                text.textContent = "Type a number between 1 and 5";
                text.style.fontSize = "30px";
                break;
        }
    })
} 


/*

DETAILED INSTRUCTIONS
1. Listen for keyboard events when the box has focus
2. Figure out which key the user pressed
3. If it's between 1 and 5, display an emoji in the box!

STRETCH GOALS:
- Animate the emoji onto the screen! Why not go crazy with multiple emojis? 
- Reset the entire app when box doesn't have focus anymore
- Can you improve the overall design?

*/

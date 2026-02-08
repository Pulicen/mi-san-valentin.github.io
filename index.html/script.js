const messages = [
    "Estás Segura?",
    "Muy, muy segura?",
    "No habrá otra oportunidad",
    "Entonces, esa es tu decisión?",
    "Yo creo que sí quieres",
    "Piénsalo bien",
    "Porfavor di que sí",
    "Voy a respetar tu decisión...",
    "Es broma, ya di que sí😢", 
]

let messageindex = 0;

function handleNOOClick(){
    const NOOBtn = document.querySelector(".NOO-button");
    const SIIBtn = document.querySelector(".SII-button");

    //NOO
    NOOBtn.textContent = messages[messageindex];
    if (messageindex < messages.length - 1) {
        messageindex++;
      }

    // SII
    const currenSize = parseFloat(window.getComputedStyle(SIIBtn).fontSize);
    const newSize = currenSize * 1.5;
    SIIBtn.style.fontSize = `${newSize}px`;

    //animation
    SIIBtn.style.transition = "transform 0.3s ease";
    SIIBtn.style.transition = "scale(1.5)";

    //reset
    setTimeout(() => { 
        SIIBtn.style.transform = "scale(1)";
        SIIBtn.style.transition = "transform 0.3s ease";
    }, 100);
}

function handleSIIClick(){
    window.location.href = "./SII.html";
}

/**
 *  événements de type 
 */
const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const reponse = document.querySelector('p');
questionContainer.addEventListener('click', () => {
    questionContainer.classList.toggle("question-click");
});
btn1.addEventListener('click', () => {
    reponse.classList.add('show-response');
    reponse.style.background = "green";
});
btn2.addEventListener('click', () => {
    reponse.classList.add('show-response');
    reponse.style.background = "red";
})

/**
 * Pour qu'une division puise suivre la souris 
 */
const mousemove = document.querySelector('.mousemove');
window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});
window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});
questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
});
questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "pink";
});
reponse.addEventListener("mouseover", () => {
    reponse.style.transform = "rotate(2deg)";
});



const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');
const ring = () => {
    const audio = new Audio();
    audio.src = "Enter.mp3";
    audio.play();
}
document.addEventListener("keypress", () => {
    key.textContent = e.key;
    ring();
});



const nav = document.querySelector('nav');
window.addEventListener("Scroll", () => {
    if(window.scrollY > 120){
        nav.style.top = 0;
    }else{
        nav.style.top = "-50px";
    }
});



const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo = "";
let language = "";
inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
});
select.addEventListener("input", (e) =>{
    language = e.target.value;
});
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if (cgv.checked) {
        document.querySelector("form > div").innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Langage préféré : ${language}</h4>`;
    } else {
        alert("Veuillez accepter les CGV");
    }
});



window.addEventListener("load", () => {
    console.log("Document chargé !");
});



const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.target.style.transform = "scale(0.7)";
    });
});



/*questionContainer.addEventListener("click", (e) => {
    alert("Test !");
    e.stopPropagation();
}); */



console.log(window.innerHeight);
window.open("http://google.com", "cours js", "height=200, width=500");

btn2.addEventListener("click" , () => {
    confirm("Voulez vous vraiment vous tromper ?");
});

btn1.addEventListener("click", () => {
    let answer = prompt("Entrez votre nom");

    questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

setTimeout(() => {
    questionContainer.style.borderRadius = "300px";
},3000);
setInterval(() => {
    document.body.innerHTML += `
        <div class='box'>
            <h2>Nouvelle boite !</h2>
        </div>`;
}, 100000000000000000);

console.log(location.href);
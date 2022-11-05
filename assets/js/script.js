// Questions to be asked

const Questions = [
    {
    id: 0,
    q: "Which movie started the Marvel universe?",
    a: [{ text: "Iron Man", isCorrect: true },
        { text: "Thor", isCorrect: false },
        { text: "Captain America", isCorrect: false },
        { text: "Spider Man", isCorrect: false }
    ]
}
]




// Set Start

var start = true;

// Iterate

function iterate(id) {
    var result = document.getElementsByClassName("result");
    result[0].innertext = ""


const question = document.getElementById("question");

question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

var selected = "";

op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})


}
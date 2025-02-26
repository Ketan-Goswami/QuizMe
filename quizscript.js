let quizData = [
    {
        "category": "General Knowledge",
        "questions": [
            {
                "id": 1,
                "question": "Who wrote 'To Kill a Mockingbird'?",
                "options": ["Harper Lee", "George Orwell", "Jane Austen", "F. Scott Fitzgerald"],
                "answer": "Harper Lee"
            },
            {
                "id": 2,
                "question": "What is the capital of Japan?",
                "options": ["Beijing", "Tokyo", "Seoul", "Bangkok"],
                "answer": "Tokyo"
            },
            {
                "id": 3,
                "question": "What is the largest mammal on Earth?",
                "options": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
                "answer": "Blue Whale"
            },
            {
                "id": 4,
                "question": "Who painted the Mona Lisa?",
                "options": ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
                "answer": "Leonardo da Vinci"
            }
        ]
    },
    {
        "category": "Science",
        "questions": [
            {
                "id": 5,
                "question": "What is the chemical symbol for water?",
                "options": ["H2O", "CO2", "O2", "N2"],
                "answer": "H2O"
            },
            {
                "id": 6,
                "question": "Who is known as the father of modern physics?",
                "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
                "answer": "Albert Einstein"
            },
            {
                "id": 7,
                "question": "Which gas do plants absorb during photosynthesis?",
                "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
                "answer": "Carbon Dioxide"
            },
            {
                "id": 8,
                "question": "What is the powerhouse of the cell?",
                "options": ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Golgi Apparatus"],
                "answer": "Mitochondria"
            }
        ]
    },
    {
        "category": "History",
        "questions": [
            {
                "id": 9,
                "question": "In which year did Christopher Columbus reach the Americas?",
                "options": ["1492", "1510", "1607", "1620"],
                "answer": "1492"
            },
            {
                "id": 10,
                "question": "Who was the first President of the United States?",
                "options": ["George Washington", "Thomas Jefferson", "John Adams", "Benjamin Franklin"],
                "answer": "George Washington"
            },
            {
                "id": 11,
                "question": "Which ancient civilization built the pyramids in Egypt?",
                "options": ["Roman", "Greek", "Mayan", "Egyptian"],
                "answer": "Egyptian"
            },
            {
                "id": 12,
                "question": "In which year did World War II end?",
                "options": ["1943", "1945", "1947", "1950"],
                "answer": "1945"
            }
        ]
    },
    {
        "category": "Geography",
        "questions": [
            {
                "id": 13,
                "question": "Which mountain is the highest in the world?",
                "options": ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
                "answer": "Mount Everest"
            },
            {
                "id": 14,
                "question": "What is the largest desert on Earth?",
                "options": ["Gobi Desert", "Sahara Desert", "Antarctica", "Arabian Desert"],
                "answer": "Antarctica"
            },
            {
                "id": 15,
                "question": "Which country is known as the Land of the Rising Sun?",
                "options": ["China", "Japan", "South Korea", "Vietnam"],
                "answer": "Japan"
            },
            {
                "id": 16,
                "question": "What is the capital of Canada?",
                "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                "answer": "Ottawa"
            }
        ]
    },
    {
        "category": "Math",
        "questions": [
            {
                "id": 17,
                "question": "What is the square of 9?",
                "options": ["81", "64", "100", "121"],
                "answer": "81"
            },
            {
                "id": 18,
                "question": "Solve for y: 3y + 7 = 22",
                "options": ["5", "6", "7", "8"],
                "answer": "5"
            },
            {
                "id": 19,
                "question": "What is the value of √25?",
                "options": ["3", "4", "5", "6"],
                "answer": "5"
            },
            {
                "id": 20,
                "question": "If a = 4 and b = 7, what is the value of a + b?",
                "options": ["10", "11", "12", "13"],
                "answer": "11"
            }
        ]
    }
];


let questions = []
let userAnswers = []
let score = 0

const data = localStorage.getItem('data')

console.log(data)

quizData.filter((question)=>{
    if(data.includes(question.category)){
        const temp  = question.questions;
        questions.push(...temp);
    }
})

//console.log(questions)


const questionContainer = document.getElementsByClassName("top")
const optionsContainer = document.getElementsByClassName("bottom")
const resultLinker = document.getElementById("submitQuiz");

let index  = -1;

const Qnode = document.createElement('p');
Qnode.setAttribute("class","quest")
questionContainer[0].appendChild(Qnode);

handleNext();

function handleNext()
{
    if(index+1<=questions.length-1){
        index++;
    }

    //Question rendering
    const newQnode = document.getElementsByClassName("quest")
    newQnode[0].innerHTML = questions[index].question
    
    //Ans
    const ans = questions[index].answer;
    const qid  = questions[index].id;

    //Options rendering
    
    const OptionValues = questions[index].options;

        //empty option container...
    while(optionsContainer[0].firstChild){
        const child = optionsContainer[0].firstChild;
        optionsContainer[0].removeChild(child)
    }

    OptionValues.forEach(() => {
        const Opnode = document.createElement('div');
        Opnode.setAttribute("class","options")
        optionsContainer[0].appendChild(Opnode);
    });
    
    let idx = 0;
    const Newoptions = document.getElementsByClassName('options');
    
    OptionValues.forEach(value => {
        Newoptions[idx].innerHTML = value
        idx++;
    });

    for (let index = 0; index < Newoptions.length; index++) {   
        const element = Newoptions[index];
        element.addEventListener('click',()=>handleScore(Newoptions,element,ans,qid))
    }
}

function handlePrev(){
    if(index-1>=0){
        index--;
    }
    //Question rendering
    const newQnode = document.getElementsByClassName("quest")
    newQnode[0].innerHTML = questions[index].question
    
    //Ans
    const ans = questions[index].answer;
    const qid  = questions[index].id;

    //Options rendering
    
    const OptionValues = questions[index].options;

        //empty option container...
    while(optionsContainer[0].firstChild){
        const child = optionsContainer[0].firstChild;
        optionsContainer[0].removeChild(child)
    }

    OptionValues.forEach(() => {
        const Opnode = document.createElement('div');
        Opnode.setAttribute("class","options")
        optionsContainer[0].appendChild(Opnode);
    });
    
    let idx = 0;
    const Newoptions = document.getElementsByClassName('options');
    
    OptionValues.forEach(value => {
        Newoptions[idx].innerHTML = value
        idx++;
    });

    for (let index = 0; index < Newoptions.length; index++) {   
        const element = Newoptions[index];
        element.addEventListener('click',()=>{
            handleScore(Newoptions,element,ans,qid);
        })
    }
   
}

function handleScore(allNodes,ans,solution,qid)
{
    for (let index = 0; index < allNodes.length; index++) {   
        const element = allNodes[index];
        element.classList.remove("answerSelection")
    }
    ans.classList.add("answerSelection")
    userAnswers[qid] = [ans.innerHTML,solution]
}



// score calculation
resultLinker.addEventListener('click',()=>{
    
    console.log(userAnswers)

    userAnswers.forEach((e)=>{
        if(e){
            if(e[0]==e[1]){
                score++;
            }
        }
    })

    localStorage.score = score;
})
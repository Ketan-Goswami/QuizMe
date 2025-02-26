let topics = [
    "General Knowledge",
    "Science",
    "History",
    "Geography",
    "Math"
]

let selectedTopics = new Set();

const container = document.getElementsByClassName("topicContent");

const startButton = document.getElementById("startQuiz")


topics.forEach(element => {
    const newTopic = document.createElement("div")
    newTopic.innerHTML= element
    newTopic.setAttribute("class","topic")
    newTopic.addEventListener("click",()=>{
        newTopic.classList.toggle("selected")
        if(!selectedTopics.has(newTopic.innerHTML))
            selectedTopics.add(newTopic.innerHTML)
        else
            selectedTopics.delete(newTopic.innerHTML)
    
        console.log(selectedTopics)
    })
    container[0].appendChild(newTopic)
});

startButton.addEventListener("click",()=>{
    const link = document.getElementsByClassName("Link")
    
    if(selectedTopics.size>=2){
        link[0].style.pointerEvents = 'all'
        localStorage.data = [...selectedTopics];
    }
    else{
        alert("select more than 2 topics")
    }
})
const score = localStorage.getItem('score');

const scoreSpan = document.getElementById('scoreSpan')
const scoreCard = document.getElementsByClassName('scoreCard')

    if(score>1)
        scoreSpan.innerHTML = score + " points";
    else if(score<=1){
        scoreSpan.innerHTML = score?score:"-" + " point";
    }


    const tag = document.createElement('a');
    tag.setAttribute("class","tag")
    tag.setAttribute("href","./topicPage.html")
    tag.innerHTML="Click to Retake Quiz";
    scoreCard[0].appendChild(tag)
    
localStorage.clear()
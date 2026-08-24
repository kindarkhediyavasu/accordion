const icons = document.querySelectorAll("i");

icons.forEach((i) => {
    i.addEventListener("click",(e) => {
          hideAnswer();
          hideMinusIcon();
        if(i.classList.contains("fa-plus")){
             i.classList.remove("fa-plus");
             i.classList.add("fa-minus");
             i.parentElement.nextElementSibling.style.display = "inline";
        }
    });
});

function hideAnswer(){
    const answers = document.querySelectorAll(".answer");
    answers.forEach((ans) => {
        ans.style.display = "none";
    });
}

function hideMinusIcon(){
    icons.forEach((i) => {
        i.classList.remove("fa-minus");
        i.classList.add("fa-plus");
    });
}

const topics = document.querySelectorAll(".topics");
const HTML_Questions = document.querySelectorAll(".html_quetions");
const CSS_Questions = document.querySelectorAll(".css_quetions");
const javascript_Questions = document.querySelectorAll(".javascript_quetions");


function  showHTMLQuestions(){
    HTML_Questions.forEach((que) => {
       que.style.display = "block";
    });
    CSS_Questions.forEach((que) => {
       que.style.display = "none";
    });
    javascript_Questions.forEach((que) => {
        que.style.display = "none"
    });
}
function  showCSSQuestions(){
   HTML_Questions.forEach((que) => {
       que.style.display = "none";
    });
    CSS_Questions.forEach((que) => {
       que.style.display = "block";
    }); 
    javascript_Questions.forEach((que) => {
        que.style.display = "none"
    });
}

function showJavascriptQuestions(){
    HTML_Questions.forEach((que) => {
       que.style.display = "none";
    });
    CSS_Questions.forEach((que) => {
       que.style.display = "none";
    }); 
    javascript_Questions.forEach((que) => {
        que.style.display = "block";
    });

}

topics.forEach((topic) => {
    topic.addEventListener("click",(e) => {
        const activeTopic = document.querySelector(".active");
        activeTopic.classList.remove("active");
        const str = e.target.innerText.toLowerCase();
        if(str.includes("html")){
            showHTMLQuestions();
        }else if(str.includes("css")){
            showCSSQuestions();
        }else if(str.includes("javascript")){
            showJavascriptQuestions();
        }
        e.target.classList.add("active");
    });
});

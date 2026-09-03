const icons = document.querySelectorAll(".question i");

icons.forEach((i) => {
    i.addEventListener("click",(e) => {
          hideAnswer();
        if(i.classList.contains("fa-plus")){
            hideMinusIcon();
             i.classList.remove("fa-plus");
             i.classList.add("fa-minus");
             i.parentElement.nextElementSibling.style.display = "block";
        }else{
             i.classList.remove("fa-minus");
             i.classList.add("fa-plus");
             i.parentElement.nextElementSibling.style.display = "none";
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
    const minusIcons = document.querySelector(".fa-minus");
      if(minusIcons){
        minusIcons.classList.remove("fa-minus");
        minusIcons.classList.add("fa-plus");
        
      }
}

// const topics = document.querySelectorAll(".topics");
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
// topics.forEach((topic) => {
//     topic.addEventListener("click",(e) => {
//         // alert("ok");
//     //     const activeTopic = document.querySelector(".active");
//     //     activeTopic.classList.remove("active");
//         const str = e.target.innerText.toLowerCase();
//         console.log("target is ",str);
//     //     if(str.includes("html")){
//     //         showHTMLQuestions();
//     //     }else if(str.includes("css")){
//     //         showCSSQuestions();
//     //     }else if(str.includes("javascript")){
//     //         showJavascriptQuestions();
//     //     }
//     //     e.target.classList.add("active");
//     });
// });

const htmlTopic = document.querySelector("#htmlTopic");
const cssTopic = document.querySelector("#cssTopic");
const javascriptTopic = document.querySelector("#javascriptTopic");

htmlTopic.addEventListener("click",() => {
    const activeTopic = document.querySelector(".active");
    activeTopic.classList.remove("active");
    htmlTopic.classList.add("active");
     showHTMLQuestions();
    
});

cssTopic.addEventListener("click",() => {
    const activeTopic = document.querySelector(".active");
    activeTopic.classList.remove("active");
    cssTopic.classList.add("active");
     showCSSQuestions();
});

javascriptTopic.addEventListener("click",() => {
    const activeTopic = document.querySelector(".active");
    activeTopic.classList.remove("active");
    javascriptTopic.classList.add("active");
     showJavascriptQuestions();
});

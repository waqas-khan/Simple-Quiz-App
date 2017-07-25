document.getElementById("result").innerHTML = "Welcome To The Html Quiz"
var quizData = 
    {
        questions:[
            {
    question: "What is HTML stands for?" ,
    options: {
        opt1: "Hypertext markup language",
        opt2: "Hyperlinks and Text Markup Language"
    },
    correct: "Hypertext markup language",
            },
        {
           
            question: "Where is the text of the title tag displayed?",
            options:{
                opt1:"In the body of the page",
                opt2: "In the Title Bar"
            },
        correct: "In the Title Bar",
            
        },
        {
            question:"What are the different levels of headings in HTML? " ,
            options: {
                opt1:"1-4",
                opt2: "1-6"                
            },
        correct: "1-6"
        },
         {
         question:"What happens if you forget a slash at the end of a header tag?",
            options:{
                opt1:'Nothing',
                opt2: 'A netscape error'   
            },
            correct: 'A netscape error'
         },
         {
            question:"Do you need to add a tag after a horizontal rule tag to get your text to the next line?",
            options:{
                opt1:'No',
                opt2: 'Yes'   
            },
            correct: 'No'
         } ,
         {
            question:"A webpage displays a picture. What tag was used to display that picture?",
            options:{
                opt1: "image" ,
                opt2: "img"
            },
            correct: "img"
         },
         {

            question:" &lt b &gt tag makes the enclosed text bold. What is other tag to make text bold?",
            options:{
                opt1: "Strong" ,
                opt2: "Dark"
            },
            correct:"Strong" 
         },
         {
            question:"Which attribute is used to name an element uniquely?",
            options:{
                opt1: 'id' ,
                opt2: 'class'
            },
            correct:'id'
         },
         {
            question:" The special formatting codes in HTML document used to present content are:",
            options:{
                opt1: 'tags' ,
                opt2: 'attributes'
            }    ,
            correct:  'tags' 
        },
            {
                question:"Inline elements are normally displayed without starting a new line.",
            options:{
                opt1: 'True',
                opt2: 'False'
            },
            correct: 'True'
         }  
        
]
    }

var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");
var i = 0;
var a = 0;
var num = 0;
var timer = 0.00;
var correctAnswere = 0;
function myfunction(){
    document.getElementById("result").innerHTML = "";
// var myVar = setInterval(myTimer, 1000);
// function myTimer(){
//     timer++;
//     document.getElementById("timer").innerHTML = timer;
// }
    question.style.display = "block"
option1.style.display = "Inline";
option2.style.display = "Inline";
radio1.style.display = "Inline";
radio2.style.display = "Inline";

    if(i <= 9){
        if(i >= 1){
    var selected;
    var correct = quizData.questions[a].correct;
    ans1 = radio1.checked;
    ans2 = radio2.checked;

    if(ans1 === true){
        selected = option1.innerHTML
    }
    if(ans2 === true)
        selected = option2.innerHTML
    if(selected === correct){
        console.log("Right");
        num = num + 10;
        correctAnswere++;
        
    }
    if(selected !== correct){
        console.log("wrong")
        
    }
    console.log(a)
    a++;
} 

    
    ques = quizData.questions[i].question   
    opt1 = quizData.questions[i].options.opt1
    opt2 = quizData.questions[i].options.opt2
    question.innerHTML = ques;
    option1.innerHTML = opt1;
    option2.innerHTML = opt2;
    document.getElementById("button").innerHTML = "Next";
    console.log(i)    
    i++
    }
    else if (i == 10){    
                if(i >= 1){
    var selected;
    var correct = quizData.questions[a].correct;
    ans1 = radio1.checked;
    ans2 = radio2.checked;

    if(ans1 === true){
        selected = option1.innerHTML
    }
    if(ans2 === true)
        selected = option2.innerHTML
    if(selected === correct){
        console.log("Right");
        num = num + 10;
        correctAnswere++;
    }
    if(selected !== correct){
        console.log("wrong")
        
    }
    console.log(a)
    a++;
}
    question.innerHTML = ' Your Quiz has been submited';
    option1.style.display = "none";
    option2.style.display = "none";
    radio1.style.display = "none";
    radio2.style.display = "none";
    document.getElementById("button").innerHTML = "Show Result";
    console.log(i)
    i++
    }
    else if(i == 11){
    question.style.display = "none";
    option1.style.display = "none";
    option2.style.display = "none";
    radio1.style.display = "none";
    radio2.style.display = "none";
    document.getElementById("button").style.display = "none";
    var percent = (num/100)*100;
    document.getElementById("result").innerHTML =" Your correct answers are:" + correctAnswere + "<br/>Your total score is " + num  ;        
    }
    console.log(num)
    localStorage.setItem("numbers", num)

    } 

question.style.display = "none";
option1.style.display = "none";
option2.style.display = "none";
radio1.style.display = "none";
radio2.style.display = "none";

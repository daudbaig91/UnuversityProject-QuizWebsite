
var wronganswers = [];
var rightanswers = [];
var z = [];
var wronganswerd = [];


// array containing questions and there answers, and an index in order to match them to the optional answers
var questions = [["From which city has this picture been taken from?","Paris",0],
["Where is the highest mountain in the world located?","Himalayas",1],
["Which country has the lowest population on earth?","Vatican city",2],
["Which is the city with the highest population in the world?","Tokyo",3],
["In which country are the status in he picture located in?","Egypt",4],

["In which country would you be if you were visiting the Taj Mahal?","Indian",5],
["Machu Picchu can be found in which country?","Peru",6],
["In which country is the worlds highest waterfall?","Venezuela",7],
["What is the unit of currency of Poland?","Zloty",8],
["In which continent is the world’s longest river, the Nile?","Africa",9]
];



//array containing all 4 posibilities of answers for each question with index to match them to questions.
var answer = [["Paris","London","New York","Madrid",0],
			["Himalayas","The alps","Sierra Nevada","Alaska Range",1],
			["Vatican city","Palau","Tuvalu","Nauru",2],
			["Tokyo","Mumbai","Delhi","Lon Angeles",3],
			["Egypt","Peru","Nigeria","Russia",4],

			["Spanish","Pakistani","French","Indian",5],
			["Peru","France","Chile","Ecuador",6],
			["Venezuela","Chile","Ecuador","Canada",7],
			["Euro","Pound","Dinar","Zloty",8],
			["Africa","Asia","Europe","Russia",9]];


//array containing all images link, for them to be called upon when question change and new pic is to be displayed
var images = ["imgs/eifel.png",
				"imgs/mountain.png",
				"imgs/lowpopulation.png",
				"imgs/population1.png",
				"imgs/pyramids.png",

				"imgs/tajmahal.png",
				"imgs/Machu.png",
				"imgs/waterfall.png",
				"imgs/dollar.png",
				"imgs/river.png"];


x = 0;//x counts the total number of questions done so far

var g = random(answer,10);//array shuffles all (variable)answer stacks to pick answers randomly for each question , non repetively

var questionscorrect =0;//checks how many questions were right

var marks = 0;//variable holding total marks

var stopthewatch = false;//boolean to stop the watch when quiz finished 

var answerquestion;//variable holding the answer of the questiond displayed,needed when we check if choosen answer matches the real answer


function enddisplay(){//function displaying last page of quiz where results are shown(summary)

	//score was hidden so make it show, then show total marks calculated and also printing total questions right
	document.getElementById("Score").style.display = "block";
	document.getElementById("paranswer1").innerHTML = "Your score is: " + String(marks) + "/20 ";
	document.getElementById("paranswer2").innerHTML = "You got " + String(questionscorrect) + " out of 10 questions.";
	document.getElementById("answerlay").innerHTML ="";
	document.getElementById("buttonnext").style.display = "block";
	document.getElementById("popupcontent").innerHTML = "";
	document.getElementById("questionlay").innerHTML = "";
	//calling function colorchangerback to change background color accordingly
	colorchangerback();
	//as i have 2 containers where right and answer will be displayed("due to lack of spcae i putted 2 separate containers"
	//i have made use of textchanger variable which tell the computer when one container is fulland when it shold now start righting in the next container)
	var textchanger =0;
	
		//when stopwatch = true it stops the watch, i have also added a unit to time as for some reason it displays one number less, s fixed that by adding one more
		stopthewatch = true;
		time++;
		var wrongtext = document.getElementById("wronganswer");
		var wrongtext1 = document.getElementById("wronganswer1");
		//showing the containers where riight answer and wrong answer summary will be displayed
		wrongtext.style.display = "block";
		wrongtext1.style.display = "block";
		wrongtext1.innerHTML  += ("Your wrong questions were: \n");
		//as i have 2 different container 

		//here i loop through the wronganswers to print each questions and its seleted wrong answer, and right answer
		for (var i in wronganswers) {
			//adding one to techchanget so computer knows when to jump and start righting to next oage or container.
			textchanger += 1
// had a huge problem breaking the line for each wrong answer, after a lot of research, i do not not why nothing was working like using \n or <br>, until when i added to the css white-space: 
//pre-wrap; (i understand what the pre-wrap does) but every solution in the web were breaking lines without the css but, please if you could explain me why this is happening  it will be really helpfull, thanks ms.
		if (textchanger <= 5){
		//made use of textcontent to right in the container and += to add on the the prewritten text so i dont clear the text written in each loop
		wrongtext1.textContent  += (wronganswers[i][0] + "\n"+ "Your Answer:"+ wronganswerd[i] + "  Right Answer:" + wronganswers[i][1] + "\n" );}
		else{
			wrongtext.textContent  += (wronganswers[i][0] + "\n"+ "Your Answer:"+ wronganswerd[i] + "  Right Answer:" + wronganswers[i][1] + "\n");
		}
		}

	//same proccess as before but this time looping through the rightasnwers
	if (textchanger <= 5){
	wrongtext1.textContent  += ("Your right questions were: \n");}
	else{wrongtext.textContent  += ("Your right questions were: \n");}

		for (var i in rightanswers) {
			textchanger += 1
		if (textchanger <= 5){
		wrongtext1.textContent  += (rightanswers[i][0] + "\n"+ "  Right Answer:" + rightanswers[i][1] + "\n");}
		else {wrongtext.textContent  += (rightanswers[i][0] + "\n"+ "  Right Answer:" + rightanswers[i][1] + "\n");}
		
	}
	
	//made use of empty return to close and end the function and program
		return;
}




var run1 =true; //boolean used to start counter
var z;//this variable shuffles again randomly, but this time it shufles the answers, so the answers for each question are always mixed
function q1(){
	
	if (run1 === true){//starts counter if counter has already not started
	setInterval(updatecount,1000); 
	run1 = false;}

	if (x >= 10){//as button next is pressed each time if questions reach 10(the total) then it send it to endisplay() (summary page)
		enddisplay();
	}
	//hidding and showing buttons for a better user interface
	var display1 = document.getElementById("hideStart");
	display1.style.display = "none";
	var display2 = document.getElementById("popupout");
	display2.style.display= "block";
	var button1 = document.getElementById("buttonnext");
	button1.style.display = "block";
	var button2 = document.getElementById("buttonnext1");
	button2.style.display = "none";
//here making use of my random function to shuffle the 4 answers for each question as mentioned before
z = random(g[x],4);
//here as each questions an aaswers are originally saved with the same indexes, we can decduct the correct answer for
// the question that is gone be selected and it will be saved in variable asnwerqeustion
answerquestion = questions[z[0]][1];

	//here im just printing to user the mixed questions, and agan as we know its index , (z[0][0]), we can also see its linked question
	//even though in the original array of answers, there is 4 answers and 1 index, when its shuffled the index is saved as the first element in the new arrays.
	document.getElementById("question1").innerHTML = questions[z[0]][0];
	document.getElementById("image").src = images[z[0]];
	document.getElementById("container1").textContent  = z[1];
	document.getElementById("container2").textContent  = z[2];
	document.getElementById("container3").textContent  = z[3];
	document.getElementById("container4").textContent  = z[4];
	//adding 1 to x to count which question we are in
	x = x +1;
	
}



//function runned when the close button is pressed
function exit1(){
	var x = document.getElementById("popupout");
	x.style.display = "none";
	var y = document.getElementById("hideStart");
	y.style.display= "block";
	location.reload();

}




//function to mix botg questions and answer separtely
//takes 2 variables, first the array, and second a number 4 or 10,if its 10 then it shuffles the 10 answers(meaning the questions)
// if its 4 then: it mean it should shuffle the 4 answers for each question

function random(x,y){
    
	var newmix = [];
	var arrayLength = y;
	// if its 4 first i push the index as first element of array
    if (y==4){
	newmix.push(x[4]);}
  	//i loop depending on the size of array
	for (var i = 0; i < arrayLength; i++) {
		//var num gives a random number from 1 to 9
	    var num = Math.floor((Math.random()*y));
	    //just ad this set of mix answers to the new array
	  	newmix.push(x[num]);
	  	// take away one as i dont want number or same answer to reapeat, so decrease lenght of array
	    y = y -1;
	    //use the return funtion to remove the set of answer we just mixed so it dosnt show more then once
        x = returns(x,x[num]);
      
	   }    
	//i return the shufflex new array containing answers either for set of answers, or mix of 10 questions
    return newmix;
    
    
}

	
//function taking an array and the index of the set of answer to be removed
function returns(array,elem){
  var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
  return array;
}



const starttime = 2
let time = starttime * 60;

const counter = document.getElementById("timer");
//function to forr counter set 2 mints, when it reache 0 it send the user to endisplay function(summary)
function updatecount(){
	const minutes = Math.floor(time /60);
	let seconds = time % 60;
	seconds = seconds<10? "0" + seconds : seconds;
	counter.innerHTML = `${minutes}:${seconds}`;

	if (stopthewatch == false){
	time--;}
	if (time < 0){
		stopthewatch = true;
		
		enddisplay();

	}


}



//function q2 which runs when person press or clicks submit 
function q2(){
var bool = false;



//i know quite well we had to use radiogetvalue function, but i wanted to make it a but more challenging for me, so i decided to make my own function 
//to retrive the data from whatever options the user selected
//again i know how to used the function that was asked to get the value, but i wanted to learn to code my own





//to get the value of radio buttons i have first checked which radio buttons was checked
if (document.getElementById("rad1").checked === true){
	//if that buttons were selected, the value of the radio button was held in the element before the radio button in html so
	//i made use of .previouselementsibling and checked if it matched the answer 
   if (document.getElementById("rad1").previousElementSibling.innerHTML === answerquestion){
   			//if answer mactched i change the color of the dots, which tell u which question one is on, i due so by running my function checkcolor()
           checkercolor(true); }else{checkercolor(false);
           	// if the value is wrong iadded to an array so i can print later the wrong answer in the summary, i have done this in all 4 options
           	wronganswerd.push( document.getElementById("rad1").previousElementSibling.innerHTML);}}

else if (document.getElementById("rad2").checked === true){
	//
   if (document.getElementById("rad2").previousElementSibling.innerHTML === answerquestion){
            checkercolor(true) ;}else{checkercolor(false);
            	wronganswerd.push( document.getElementById("rad2").previousElementSibling.innerHTML);}}

else if (document.getElementById("rad3").checked === true){
	//
   if (document.getElementById("rad3").previousElementSibling.innerHTML === answerquestion){
            checkercolor(true);}else{checkercolor(false);
            	wronganswerd.push( document.getElementById("rad3").previousElementSibling.innerHTML);}}

else if (document.getElementById("rad4").checked === true){
	//
   if (document.getElementById("rad4").previousElementSibling.innerHTML === answerquestion){
            checkercolor(true);}else{checkercolor(false);
            	wronganswerd.push( document.getElementById("rad4").previousElementSibling.innerHTML);}}
console.log(wronganswerd);
  }


//this function takes a parameter a boolean from the q2() , to bascially change the color of the cheker
// as the program knows which questin its at(x) it takes that and if its riht the checker changed to greeen , if not then to red
// the cherker are located at the bottom left side of the questionaire and allow the user to also know how many question they have done so far
//also if the bool id right, it adds the right questions and the right answer to an array for it to be printed in the summary,
// and if its wrong it does the same but it adds it to the wrong
function checkercolor(bol){

var slide = document.getElementById(String(x));


if (bol === true){
	rightanswers.push([questions[z[0]][0],questions[z[0]][1]]);
	slide.style.backgroundColor = "green";
	questionscorrect = questionscorrect + 1;
	marks = marks + 2;
}
if (bol === false){

	slide.style.backgroundColor = "red";
	marks = marks - 1;
	wronganswers.push([questions[z[0]][0],questions[z[0]][1]]);
}
	

var button1 = document.getElementById("buttonnext");
button1.style.display = "none";
var button2 = document.getElementById("buttonnext1");
button2.style.display = "block";

}

//this function basically changeds
function colorchangerback(){
	console.log("got it");
	var z12 = document.getElementById("popupin").style.background;
	if (marks <=0 ){
		document.getElementById("popupout").style.background = "#C02C0D";
		console.log("red");}
	else if(marks >0 & marks <7){
		document.getElementById("popupout").style.background = "#FBFE72";
		console.log("green");}
else if(marks > 7 & marks <15){
		document.getElementById("popupout").style.background = "#CAFE72";
		console.log("green");}
else{document.getElementById("popupout").style.background = "#51ED4E";}
	
}
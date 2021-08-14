var btn=document.querySelector('#check')
var x_btn=document.querySelector(".clr")

var note=document.querySelector(".notice")

var inp=document.querySelector('#date-of-birth')
var luck=document.querySelector('#lucky-number')
var outputTxt=document.querySelector('#output')


btn.addEventListener('click',function clickHandler(){
	const inputval=((inp.value).split('-')).join("");
	const luckval=luck.value;
	console.log(inputval)
	let sum=0;
	for(letter of inputval){
		sum=sum+Number(letter);
	}
	if(sum%luckval==0){
		outputTxt.innerHTML=`WoW! You are lucky ! 😎`
	}
	else{
		outputTxt.innerHTML="Not so lucky afterall. 😐"
	}
});

x_btn.addEventListener("click",function clearNotice(){
	note.style.display="none"
})
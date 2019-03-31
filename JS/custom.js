
var input1=document.getElementById("input1");
var button1=document.getElementById("button1");
var button2=document.getElementById("button2");
var ul=document.getElementById("ul1");

function addUp()
{
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(input1.value));
	ul.appendChild(li);
}

input1.addEventListener("keypress",function(event){
	if(event.keyCode===13 && input1.value.length!==0)
	{
		addUp();
	}
	
})

button1.addEventListener("click",function(){
	if(input1.value.length!==0)
	{
		addUp();
	}
})

button2.addEventListener("click",function(){
	
	while(ul.firstChild)
	{
		ul.removeChild(ul.firstChild);
	}
})
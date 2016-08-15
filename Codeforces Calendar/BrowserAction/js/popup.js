document.addEventListener('DOMContentLoaded', function () {
  initialize();
});
var time = "";
var flag = false;
function parseResponse(response){

var arr = response["result"];
var count = arr.length;
var table= document.getElementById("updates");
var j = 0;
for(i=count-1;i>-1;i--)
{
	if(arr[i].phase=="ACTIVE"||arr[i].phase=="BEFORE")
	{
		time = "Contest is Active";			
		flag = true;
		if(arr[i].phase=="BEFORE")
		{
		   var timeLeft = - arr[i].relativeTimeSeconds;
		   var days = parseInt(timeLeft/86400);
		   var hours = parseInt((timeLeft%86400)/3600);
		   var minutes = parseInt(((timeLeft%86400)%3600)/60);
		   time = days + " Days " + hours + " Hours " + minutes + " Minutes";
		}
		var row = document.createElement("tr");
		row.setAttribute('class','notice');
		var sno= document.createElement("td");
		var contestName= document.createElement("td");
		var timeRemaining = document.createElement("td");
		document.body.appendChild(table);
		table.appendChild(row);
		row.appendChild(sno);
		sno.innerHTML=j+1;
		j++;
		row.appendChild(contestName);
		contestName.innerHTML='<a href="http://codeforces.com/contests" target="_blank">'+ arr[i].name +'</a>';
		row.appendChild(timeRemaining);
		timeRemaining.innerHTML = time;
       }
}
if (flag == false) {
	var mid = document.createElement("h2");
	document.body.appendChild(mid);
	mid.innerHTML="<center style='color:default;'>No Recent Contests</center>";
}
var footer = document.createElement("h4");
document.body.appendChild(footer);
footer.innerHTML="<center style='color:#999;'>Developed by Sourav Chakraborty, Rudradeep Mukherjee & Koushik MLN</center>";
var body= document.body;
var loading = document.getElementById('loading');
body.removeChild(loading);
}  

function initialize() {
var loading = document.createElement('div');
document.body.appendChild(loading);
loading.setAttribute('id','loading');
loading.innerHTML="<center><img src='./images/loading.gif'></center>";

var script = document.createElement('script');
script.src = 'https://codeforces.com/api/contest.list?jsonp=parseResponse';
document.body.appendChild(script);
}

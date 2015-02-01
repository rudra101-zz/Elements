function add_field() {
document.getElementById('field').style.display = 'block';
}
function g(id,uid){
 if (confirm('Do you want to delete this note?')) {
	var xhr = new XMLHttpRequest();
	xhr.open('POST','/delete',true);
	var data = new FormData();
	data.append('nid', id);	
	xhr.send(data);
	var element = document.getElementById(id+','+uid);
	element.parentNode.removeChild(element);
}
}

function f(id){
var yourUl = document.getElementById(id);
yourUl.style.display = yourUl.style.display === 'none' ? '' : 'none';
}

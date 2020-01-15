
	function change(s){
		document.body.style.backgroundColor=s; 
	}
	
	function toggle(){
		if(document.getElementById("secret").style.display=="none")
			document.getElementById("secret").style.display="block";
	
		else 
			document.getElementById("secret").style.display="none";
	
	}
	function page_load(){
	document.getElementById("toggle").addEventListener("click",toggle,false);
	}
	
	window.addEventListener("load",page_load,false);



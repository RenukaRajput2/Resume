function loadDoc()
{
	const xhttp= new XMLHTTPRequest();
	xhttp.onload=function()
	{
		document.getElementById("Demo").innerHTML=this.responseText;
	}
	xhttp.open("GET","AA.txt");
	xhttp.send;
}
$( document ).ready(function() {
    var url = new URL(window.location.href);
    var searchtext = url.searchParams.get("search");
    console.log(searchtext);

	searchtext = searchtext.toLowerCase();
	var title = "";

	if (searchtext.includes("over") || searchtext.includes("watch"))
	{
		title = "overwatch";
	}
	else if (searchtext.includes("skyrim") || searchtext.includes("elder scrolls"))
	{
		title = "skyrim";
	}
	
	if (title == "")
	{
		document.getElementById("result").innerHTML += "<h1>No results found<h1>\n";
	}
	else
	{
	
		document.getElementById("result").innerHTML += "<li><h3><a href="+games[title]['link']+"><img class='logo' src="+games[title]['images'][0]+"></img>"+games[title]['title']+"</a></h3>";
		document.getElementById("result").innerHTML += "<div class='desc'>"+games[title]['description']+"</div><br>";
		document.getElementById("result").innerHTML += "<div class='tags'>";
		for (var cat in games[title]['categories'])
		{
			document.getElementById("result").innerHTML += "<a href='categories/"+games[title]['categories'][cat]+".html'>("+games[title]['categories'][cat]+")</a> ";
		}
		for (var asp in games[title]['aspects'])
		{
			document.getElementById("result").innerHTML += "<a href='aspects/"+games[title]['aspects'][asp]+".html'>["+games[title]['aspects'][asp]+"]</a> ";
		}
		document.getElementById("result").innerHTML += "</div></li><br>";
	}

});
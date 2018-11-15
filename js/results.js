$( document ).ready(function() {
    var url = new URL(window.location.href);
    var searchtext = url.searchParams.get("search");
    console.log(searchtext);

	searchtext = searchtext.toLowerCase();
	var results = [];

	
	for (var g in games)
	{
		if (games[g]['title'].toLowerCase().includes(searchtext) && searchtext != "")
        {
			//Add it to the results
			results.push(g);
			document.getElementById("game_result").innerHTML += "<div class='row'><li><h3><a href="+games[g]['link']+"><img class='logo' src="+games[g]['images'][0]+"></img>"+games[g]['title']+"</a></h3>";
			document.getElementById("game_result").innerHTML += "<div class='desc'>"+games[g]['description']+"</div><br>";
			document.getElementById("game_result").innerHTML += "<div class='tags'>";
			for (var cat in games[g]['categories'])
			{
				document.getElementById("game_result").innerHTML += "<a href='categories/"+games[g]['categories'][cat]+".html'>("+games[g]['categories'][cat]+")</a> ";
			}
			for (var asp in games[g]['aspects'])
			{
				document.getElementById("game_result").innerHTML += "<a href='aspects/"+games[g]['aspects'][asp]+".html'>["+games[g]['aspects'][asp]+"]</a> ";
			}
			document.getElementById("game_result").innerHTML += "</div></li><br><br></div>";
        }
	}
	for (var c in categories)
	{
		if (categories[c]['title'].toLowerCase().includes(searchtext) && searchtext != "")
		{
			//Add it to the results
			results.push(c);
			document.getElementById("cat_result").innerHTML += "<div class='row'><li><h3><a href="+categories[c]['link']+">"+categories[c]['title']+"</a></h3>";
			document.getElementById("cat_result").innerHTML += "<div class='desc'>"+categories[c]['description']+"</div><br>";
			document.getElementById("cat_result").innerHTML += "</li><br><br></div>";
		}
	}
	for (var a in aspects)
	{
		if (aspects[a]['title'].toLowerCase().includes(searchtext) && searchtext != "")
		{
			//Add it to the results
			results.push(c);
			document.getElementById("asp_result").innerHTML += "<div class='row'><li><h3><a href="+aspects[a]['link']+">"+aspects[a]['title']+"</a></h3>";
			document.getElementById("asp_result").innerHTML += "<div class='desc'>"+aspects[a]['description']+"</div><br>";
			document.getElementById("asp_result").innerHTML += "</li><br><br></div>";
		}
	}
	
	if (results.length == 0)
	{
		document.getElementById("result").innerHTML += "<h1>No results found<h1>\n";
	}

});
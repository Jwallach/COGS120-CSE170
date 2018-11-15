$( document ).ready(function() {
    var url = new URL(window.location.href);
    var searchtext = url.searchParams.get("search");
    console.log(searchtext);

	searchtext = searchtext.toLowerCase();
	var gResults = [];
	var cResults = [];
	var aResults = [];

	for (var g in games)
	{
		if (games[g]['title'].toLowerCase().includes(searchtext) && searchtext != "")
        {
			//Add it to the results
			gResults.push(g);
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
			document.getElementById("game_result").innerHTML += "</div></li><br><br></div>\n";
        }
	}
	
	for (var c in categories)
	{
		if (categories[c]['title'].toLowerCase().includes(searchtext) && searchtext != "")
		{
			//Add it to the results
			cResults.push(c);
			document.getElementById("cat_result").innerHTML += "<div class='row'><li><h3><a href="+categories[c]['link']+">"+categories[c]['title']+"</a></h3>";
			document.getElementById("cat_result").innerHTML += "<div class='desc'>"+categories[c]['description']+"</div>";
			document.getElementById("cat_result").innerHTML += "</li><br><br></div>\n";
		}
	}
	
	for (var a in aspects)
	{
		if (aspects[a]['title'].toLowerCase().includes(searchtext) && searchtext != "")
		{
			//Add it to the results
			aResults.push(a);
			document.getElementById("asp_result").innerHTML += "<div class='row'><li><h3><a href="+aspects[a]['link']+">"+aspects[a]['title']+"</a></h3>";
			document.getElementById("asp_result").innerHTML += "<div class='desc'>"+aspects[a]['description']+"</div>";
			document.getElementById("asp_result").innerHTML += "</li><br><br></div>\n";
		}
	}
	
	if (gResults.length == 0)
	{
		document.getElementById("game_result").innerHTML += "<h3>No games found</h3></div>\n";
	}
	
	if (cResults.length == 0)
	{
		document.getElementById("cat_result").innerHTML += "<h3>No categories found</h3>\n";
	}
	
	if (aResults.length == 0)
	{
		document.getElementById("asp_result").innerHTML += "<h3>No aspects found</h3>\n";
	}

});
$( document ).ready(function() {
    var url = new URL(window.location.href);
    var searchtext = url.searchParams.get("search");
    console.log(searchtext);


	searchtext = searchtext.toLowerCase();

	if (searchtext.includes("over") || searchtext.includes("watch"))
	{
		document.getElementById("result").innerHTML += "<li><h3><a href='games/overwatch.html'><img class='logo' src='res/game_img/ow_cover.png'></img>Overwatch</a></h3>"
		document.getElementById("result").innerHTML += "<div class='desc'>In a time of global crisis, an international task force of heroes banded together to restore peace to a war-torn world. This organization, known as Overwatch, ended the crisis and helped maintain peace for a generation, inspiring an era of exploration, innovation, and discovery. After many years, Overwatch's influence waned and it was eventually disbanded. Now in the wake of its dismantling, conflict is rising once again. Overwatch may be gone... but the world still needs heroes.</div><br>"
		document.getElementById("result").innerHTML += "<div class='tags'>(Multiplayer) (FPS)</div></li><br>"
	}
	else if (searchtext.includes("skyrim") || searchtext.includes("elder scrolls"))
	{
		document.getElementById("result").innerHTML += "<li><h3><a href='games/skyrim.html'><img class='logo' src='res/game_img/skyrim_cover.png'></img>The Elder Scrolls V: Skyrim</a></h3>"
		document.getElementById("result").innerHTML += "<div class='desc'>The Elder Scrolls V: Skyrim, the 2011 Game of the Year, is the next chapter in the highly anticipated Elder Scrolls saga. Developed by Bethesda Game Studios, the 2011 Studio of the Year, that brought you Oblivion and Fallout 3. Skyrim reimagines and revolutionizes the open-world fantasy epic, bringing to life a complete virtual world open for you to explore any way you choose.</div><br>"
		document.getElementById("result").innerHTML += "<div class='tags'>(Singleplayer) (RPG) [Moddable] [Open World] [Visually Appealing] [Story-driven]</div></li><br>"
	}
	else
	{
		document.getElementById("result").innerHTML += "<h1>No results found<h1>\n";
	}

});
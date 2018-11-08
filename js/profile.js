$( document ).ready(function() {
    //Game mapping
    var gameMap = games;
    
    
    //if not defined,set wishlist to null 
    if (localStorage.getItem("wishlist") === null)
    {
        localStorage.setItem("wishlist",JSON.stringify([]));
    }
    var wishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (wishlist.length == 0)
    {
        document.getElementById("wishlist_games").innerHTML += "<h5>Your wish list is empty, go to a game's page to add it!<h5>\n";
    }
    else
    {
        
      for (var x = 0; x < wishlist.length; x ++)
      {
        document.getElementById("wishlist_games").innerHTML += "<h5><a href=" + gameMap[wishlist[x]] + ">" + wishlist[x] + "</a></h5>\n"; 
      }
    }
    
    
    //if not defined,set the preferences to null
    if (localStorage.getItem("preferences") === null)
    {
        localStorage.setItem("preferences",JSON.stringify([]));
    }
    var pref = JSON.parse(localStorage.getItem("preferences"));
    if (pref.length == 0)
    {
        document.getElementById("aspect_preferences").innerHTML += "<h5><a href=\"preferences.html\">" + "You have no aspect preferences, go to Preferences to add some" +"</a></h5>\n";
    }
    else
    {
      
      for (var x = 0; x < pref.length; x ++)
      {
        var like = "";
        if (pref[x][1] === "like")
        {
          like = "Liked";
        }
        else
        {
          like = "Disliked";
        }
        document.getElementById("aspect_preferences").innerHTML += "<h5>" + pref[x][0] + " | " + like + "</h5>\n"; 
      }
    }
    

});

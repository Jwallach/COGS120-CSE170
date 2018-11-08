$( document ).ready(function() {
    //if not defined,set wishlist to null 
    if (localStorage.getItem("wishlist") === null)
    {
        localStorage.setItem("wishlist",JSON.stringify([]));
    }
    var wishlist = JSON.parse(localStorage.getItem("wishlist"));
    
    if (wishlist.length == 0)
    {
        wishlist.push("Your wish list is empty, go to Preferences to add some!");
    }
    
    for (var x = 0; x < wishlist.length; x ++)
    {
      document.getElementById("wishlist_games").innerHTML += "<h5>" + wishlist[x] + "</h5>\n"; 
    }
    
    });

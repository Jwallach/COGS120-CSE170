//MAKE SURE THE BUTTON THAT NEEDS TO BE BEDITED HAS THE ID wishlist_game_ + game_key
//RETURNS TRUE IF ADDED TO WISHLIST, FALSE IF REMOVED
function modify_wishlist(game_key)
{
    //if not defined,set wishlist to null 
    if (localStorage.getItem("wishlist") === null)
    {
        localStorage.setItem("wishlist",JSON.stringify([]));
    }
    
    //get wishlist
    var wishlist = JSON.parse(localStorage.getItem("wishlist"));
    
    var alreadyInWishlist = false;
    for (var x = 0; x < wishlist.length; x ++)
    {
        if (wishlist[x] === game_key)
        {
            alreadyInWishlist = true;
            document.getElementById("wishlist_game_" + game_key).innerHTML = "Game removed from Wish List";
            wishlist.splice(x,1);
            localStorage.setItem("wishlist",JSON.stringify(wishlist));
            return true;
        }
    }
    
    if (!alreadyInWishlist)
    {
        //put in the list
        wishlist.push(game_key);
        document.getElementById("wishlist_game_" + game_key).innerHTML = "Game added to Wish List";
        localStorage.setItem("wishlist",JSON.stringify(wishlist));
        return false;
    } 
}

function set_like_status(aspect_or_category,like_or_dislike,key)
{
  if (aspect_or_category === "category")
  {
    //if not defined,set the preferences to null
    if (localStorage.getItem("preference_category") === null)
    {
        localStorage.setItem("preference_category",JSON.stringify({}));
    }
    
    var pref_category = JSON.parse(localStorage.getItem("preference_category"));
    
    //Must be Liked or Disliked as string
    pref_category[key] = like_or_dislike;

    
    localStorage.setItem("preference_category",JSON.stringify(pref_category));
  }
  else if (aspect_or_category === "aspect")
  {
    
        
    //if not defined,set the preferences to null
    if (localStorage.getItem("preference_aspect") === null)
    {
        localStorage.setItem("preference_aspect",JSON.stringify({}));
    }
    
    var pref_aspect = JSON.parse(localStorage.getItem("preference_aspect"));
    
    pref_aspect[key] = like_or_dislike;    
    
    localStorage.setItem("preference_aspect",JSON.stringify(pref_aspect));
  }
  else
  {
    console.log("first argument must be \"Aspect\" or \"Category\"")
  }
}

$( document ).ready(function() {
    //If game already wish listed, set the text of the wish list to 
    //if not defined,set wishlist to null 
    if (localStorage.getItem("wishlist") === null)
    {
        localStorage.setItem("wishlist",JSON.stringify([]));
    }
    var title = document.getElementById("game_title").innerHTML;
    //get wishlist
    var wishlist = JSON.parse(localStorage.getItem("wishlist"));
    
    var alreadyInWishlist = false;
    for (var x = 0; x < wishlist.length; x ++)
    {
        if (wishlist[x] === title)
        {
            alreadyInWishlist = true;
            break;
        }
    }
    
    if (alreadyInWishlist)
    {
        document.getElementById("wishlist_game").innerHTML = "Game in Wish List";
    }
    

});



$('#wishlist_game').click(function(){
    //if not defined,set wishlist to null 
    if (localStorage.getItem("wishlist") === null)
    {
        localStorage.setItem("wishlist",JSON.stringify([]));
    }
    
    var title = document.getElementById("game_title").innerHTML;
    
    //get wishlist
    var wishlist = JSON.parse(localStorage.getItem("wishlist"));
    
    var alreadyInWishlist = false;
    for (var x = 0; x < wishlist.length; x ++)
    {
        if (wishlist[x] === title)
        {
            alreadyInWishlist = true;
            document.getElementById("wishlist_game").innerHTML = "Game removed from Wish List";
            wishlist.splice(x,1);
            localStorage.setItem("wishlist",JSON.stringify(wishlist));
            break;
        }
    }
    
    if (!alreadyInWishlist)
    {
        //put in the list
        wishlist.push(title);
        document.getElementById("wishlist_game").innerHTML = "Game added to Wish List";
        localStorage.setItem("wishlist",JSON.stringify(wishlist));
    }
    
    
    
    
    
    
});

$( document ).ready(function() {
    //Game mapping
    var gameMap = games;
        
    var aspectMap = aspects;
    //if not defined,set the preferences to null
    if (localStorage.getItem("preference_aspect") === null)
    {
        localStorage.setItem("preference_aspect",JSON.stringify({}));
    }
    var pref_aspect = JSON.parse(localStorage.getItem("preference_aspect"));
    
    
    
        
    var categoryMap = categories;

    //if not defined,set the preferences to null
    if (localStorage.getItem("preference_category") === null)
    {
        localStorage.setItem("preference_category",JSON.stringify({}));
    }
    var pref_category = JSON.parse(localStorage.getItem("preference_category"));
    
    
    var recommendations = []
    
    //Loop through all the aspects and select games based on them
    for (var key in pref_aspect)
    {
        if (pref_aspect[key] === "Liked")
        {
            for (var keyG in games)
            {
                //If game has the aspect and is not already recommended
                if (games[keyG]["aspects"].includes(key) && !recommendations.includes(keyG))
                {
                    //Add it to the recommendations
                    recommendations.push(keyG);
                }
            }
        }
    }
    
    //loop through categories and do the same
    for (var key in pref_category)
    {
        if (pref_category[key] === "Liked")
        {
            for (var keyG in games)
            {
                //If game has the aspect and is not already recommended
                if (games[keyG]["categories"].includes(key) && !recommendations.includes(keyG))
                {
                    //Add it to the recommendations
                    recommendations.push(keyG);
                }
            }
        }
    }
    
    for (var x = 0; x < recommendations.length; x ++)
    {
        console.log("TAY");
    }
    
    

    
    
    console.log(recommendations);
    
    
});

$(document).ready(function() {
    //category mapping
    var categoryMap = categories;
    
    var source   = document.getElementById("selection_template").innerHTML;
    var template = Handlebars.compile(source);
    
    for (var key in categoryMap) 
    {
        var context = {title: key, link: categoryMap[key], id_like: key + "_like", id_neutral : key + "_neutral", id_dislike: key + "_dislike"};
        var html    = template(context);
        document.getElementById("categories").innerHTML += html;
    }
    
    //if not defined,set the preferences to null
    if (localStorage.getItem("preference_category") === null)
    {
        localStorage.setItem("preference_category",JSON.stringify({}));
    }
    
    var pref_category = JSON.parse(localStorage.getItem("preference_category"));
    console.log(pref_category);
    for (var key in pref_category)
    {         
         var value = pref_category[key];
         if (value === "Liked")
         {
             document.getElementById(key + "_like").checked = true;
         }
         else if (value === "Disliked")
         {
            document.getElementById(key + "_dislike").checked = true;
         }
    }
    
    
});



$('#save_preferences').click(function(){
    var categoryMap = categories;
    
    
    //if not defined,set the preferences to null
    if (localStorage.getItem("preference_category") === null)
    {
        localStorage.setItem("preference_category",JSON.stringify({}));
    }
    var pref_category = JSON.parse(localStorage.getItem("preference_category"));
    
    for (var key in categoryMap) 
    {
         var value = $("input[name=" + key + "]:checked").val();
         if (value === "Liked")
         {
             pref_category[key] = "Liked";
         }
         else if (value === "Disliked")
         {
             pref_category[key] = "Disliked";
         }
         else
         {
             delete pref_category[key];
         }
    }
    
    
    localStorage.setItem("preference_category",JSON.stringify(pref_category));
    
    
   
});

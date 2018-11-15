$( document ).ready(function() {
    var url = new URL(window.location.href);
    var searchtext = url.searchParams.get("searchtext");
    console.log(searchtext);
});

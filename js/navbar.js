$( document ).ready(function() {

	if (localStorage.getItem("username") === null)
	{
		document.getElementById("profile").innerHTML += "<a class='nav-link' href='login.html'>Login</a>"
	}
	else
	{
		document.getElementById("profile").innerHTML += "<a class='nav-link' href='profile.html'>Profile</a>"
	}
});
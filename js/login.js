var username = document.getElementById('username');
localStorage.setItem('username', username.value);	

function check() {	
	if (username.value == "")
	{
		alert('Invalid username');
	}
	else
	{
		window.location.href = "profile.html";
	}
}

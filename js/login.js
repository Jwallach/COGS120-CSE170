var username = document.getElementById('username');
	

function check() {	
	if (username.value == "")
	{
		alert('Invalid username');
	}
	else
	{
		localStorage.setItem('username', username.value);
		window.location.href = "profile.html";
	}
}

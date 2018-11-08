var username = document.getElementById('username');
localStorage.setItem('username', username.value);	

function check() {	
	if (username.value === null)
	{
		alert('Invalid username');
	}
}

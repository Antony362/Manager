window.οncοntextmenu=function(){return false;}

$("#login-button").click(function(event){
	var Username = document.getElementById('Username');
	var Password = document.getElementById('Password');
	const deta = { Req: 'Signup',  User: Username.value, Pass: Password.value};

	fetch('https://ASEO.vorce362.repl.co', {
  	method: 'POST',
 	 headers: {
    	'Content-Type': 'application/json',
  	},
  	body: JSON.stringify(deta), 
	})

	.then(response => {
		let data = response.text();
		console.log(data);
	}) 

	event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
});
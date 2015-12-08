
var urlArray = ['ejamplo1', 'midireccion', 'ejemplo2'];										


var userNotify = function(data, callback) { 
	var err;
	
	if (err) {
		callback(err);
	}
	
	else {
		for (var i = 0; i < data.length; i++) {	 
			console.log("complementando la URL a \"" + data[i] + "\" correctmente");
			data[i] = "www." + data[i] + ".com";
		}
		callback(err, data);
	}
};

userNotify(urlArray, function(err, data) { 
	if (err) {	
		console.log(err);
	}
	else {
		console.log(data);
	}
}); 

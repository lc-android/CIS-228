// load menu here on page load

// data
data = [
{"name":"Home", "funct":"home();"},
{"name":"Contact", "funct":"contact();"},
{"name":"About", "funct":"about();"}
];

function load () {
	var menu = document.getElementById('menu');

	for (var i = 0; i < data.length; i++) {
		var menuItem = document.createElement('div');
		menuItem.textContent = data[i].name;
		menuItem.setAttribute("onclick", data[i].funct);
		menu.appendChild(menuItem);
	};	
	home();
}

function home () {
	var content = document.getElementById('content');
	content.textContent = "This is our home page";
}

function contact () {
	var content = document.getElementById('content');
	content.textContent = "This is our contact page";
}

function about () {
	var content = document.getElementById('content');
	content.textContent = "This is our about page";
}


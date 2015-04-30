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
		menuItem.setAttribute("onclick", data[i].funct );
		menuItem.className = "menuitem";
		menu.appendChild(menuItem);
	};	
	home();
}

function home () {
	var detail = document.getElementById('detail');
	detail.textContent = "This is our home page";
	detail.className = "home";
}

function contact () {
	var detail = document.getElementById('detail');
	detail.textContent = "This is our contact page";
	detail.className = "contact";
}

function about () {
	var detail = document.getElementById('detail');
	detail.textContent = "This is our about page";
	detail.className = "about";
}


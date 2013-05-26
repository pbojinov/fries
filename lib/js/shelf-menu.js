!function() {
		
	var isActive = false,
		menu = document.getElementById('menu'),
		page = document.querySelector('.page');
		
	window.addEventListener('click', function(e) {
		var targetClass = e.target.className;
		console.log(targetClass);
		if (targetClass == 'content' || targetClass == 'page' || targetClass == 'icon-storage') {

	  	  	toggleMenu();		
		}	
	});
	
	var toggleMenu = function() {
		if (isActive) {
			page.className = '';
			page.className = 'page';
			isActive = false;
		}
		else {
			page.className += ' slide-out';
			isActive = true;
		}
	};
}();
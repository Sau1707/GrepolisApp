// set default body zomm
const zoom = 0.8;
const scale = 1.2;
document.body.style.zoom = zoom;
// hide notification area
document.getElementById('notification_area').style.display = 'none';

// Hide menu items that are not usefull (to be moved somewhere else )

// document.getElementsByClassName("forum")[0].style.display = "none";
// document.getElementsByClassName("invite_friends")[0].style.display = "none";

/* Fix context menu to work with fingher click */

setTimeout(() => {
	const map = document.getElementById('wmap');
	var lastMove = null;
	var present = {
		x: null,
		y: null,
	};
	map.addEventListener('touchstart', function (event) {
		lastMove = event;
		const menu = document.getElementById('context_menu');
		if (!menu) present = { x: null, y: null };
		else {
			present = {
				x: menu.style.left,
				y: menu.style.top,
			};
		}
	});
	map.addEventListener('touchend', () => {
		setTimeout(() => {
			const menu = document.getElementById('context_menu');
			if (!menu) return;
			menu.style.left = `${lastMove.touches[0].pageX * scale}px`;
			menu.style.top = `${lastMove.touches[0].pageY * scale}px`;
			menu.style.scale = 1.3;
			menu.style.zIndex = 5001;
			present = {
				x: menu.style.left,
				y: menu.style.top,
			};
		}, 10);
	});
	var observer = new MutationObserver(function (mutations) {
		let menu = document.getElementById('context_menu');
		if (present.x == menu.style.left && present.y == menu.style.top) return;
		if (document.contains(menu)) {
			menu.style.zIndex = 0;
		}
	});

	observer.observe(document, {
		attributes: false,
		childList: true,
		characterData: false,
		subtree: true,
	});
}, 1000);

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML =
	'.btn_action {scale: 1.6; } .city_overview_overlay{scale: 1.3;} .ui_construction_queue{scale: 1.3;} .game_list{font-size: 16px !important;} .game_list li {height: 30px !important;}';
document.getElementsByTagName('head')[0].appendChild(style);

/* 
game_list
let el = document.getElementsByClassName("reports_date small")

el.addEventListener("click", () => {
    let input = el.getElementsByTagName("input")[0]
    input.checked = !input.checked
})
*/

/* 
const map = document.getElementById("wmap");
var lastMove = null;
map.addEventListener('touchstart', function(event) {
  lastMove = event;
});
map.addEventListener("touchend", () => {
    const menu = document.getElementById("context_menu")
    menu.style.zIndex = 0
    setTimeout(() => {
        const menu = document.getElementById("context_menu")
        console.log(menu)
        if (!menu) return;
        menu.style.left = lastMove.touches[0].screenX
        menu.style.top  = lastMove.touches[0].screenY
    }, 100)
})

var observer = new MutationObserver(function(mutations) {
    let menu = document.getElementById('context_menu');
    if (document.contains(menu)) {
        menu.style.zIndex = 0
        menu.style.left = lastMove.touches[0].screenX
        menu.style.top  = lastMove.touches[0].screenY
    }
});

observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
*/

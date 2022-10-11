var levelSelect = false;
var menu_state = ['main'];//,'options','credits','instructions','end'];
var menu_index = 0;
var continue_button = new button("click to begin",250,350,
	function(l,p,ctx){
		menuBool = false;
		var levelIndex = 0;
		var last_completed_level = localStorage.getItem("last_completed_level")
		l.levelIndex = levelIndex;
		l.init2(33, p,ctx,l);
		if(sfx_on){
			titleAudio.play();
		}
		if(music_on){
			gameAudio.play();
			gameAudio.loop = true;
			//backAudio.pause();
		}
	}
);
function updateMouse(l,p,ctx,e2) {	
	var e = (window.event ? window.event : e2);
	if(menuBool){
		if (e != null) {
			if(e.button == 0){
				if (e.clientX || e.clientY) {
					var mousePos_x = e.clientX + document.body.scrollLeft
					+ document.documentElement.scrollLeft - document.getElementById("canvas").offsetLeft;
					var mousePos_y = e.clientY + document.body.scrollTop
					+ document.documentElement.scrollTop - document.getElementById("canvas").offsetTop;
					if(menu_state[menu_index] == 'main'){
						if(continue_button.isClicked(mousePos_x,mousePos_y))
						{
							continue_button.e(l,p,ctx);
						}
						
					}
				}
			}
		}
	}
}
function menu(){
	this.center = 250;	
	this.draw = function(ctx){
		if(menu_state[menu_index] == 'main'){
			ctx.font = "24px Impact";
			var title = "we.cannot.go.back_we.have.gone.too.far";
			var titleCenter = (ctx.measureText(title)).width;
			titleCenter /= 2;
				
			var randomLeft = parseInt(Math.random() * 4);
			var randomTop = parseInt(Math.random() * 4);

			ctx.fillText(title, this.center - titleCenter + randomLeft, this.center - 12 + randomTop);
			
			ctx.font = "12px Impact";
			var byline = "by aaron yashinsky";
			var bylineCenter = (ctx.measureText(byline)).width;
			bylineCenter /= 2;
			ctx.fillText(byline, this.center - bylineCenter, this.center + 24);
			continue_button.draw(ctx);
		}	
	}
}
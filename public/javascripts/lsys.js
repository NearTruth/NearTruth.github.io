var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

c_width = c.width
c_height = c.height
axiom = "X"
update_rules = [["X", "F-[[X]+X]+F[+FX]-X"], ["F", "FF"]]  // arrays of pairs [inital, final]
theta = 22.5

function draw_between_points(x, y, x_new, y_new){  // sets the origin at bottom left
	ctx.moveTo(x, c_height - y)
	ctx.lineTo(x_new, c_height - y_new)
	ctx.stroke()
}


function recursive_tree(x_base, y_base, angle, limb_length, limb_angle, limb_mult, num_segments) {
	if(num_segments == 0) {
		return
	}
	
	var x_new = x_base + Math.cos(angle)*limb_length
	var y_new = y_base + Math.sin(angle)*limb_length
	draw_between_points(x_base, y_base, x_new, y_new)
	recursive_tree(x_new, y_new, angle - limb_angle, limb_length * limb_mult, limb_angle, limb_mult, num_segments - 1)
	recursive_tree(x_new, y_new, angle + 2*limb_angle, limb_length * limb_mult, limb_angle, limb_mult, num_segments - 1)
	return
}

function update_str(str) {
	var new_str = ""
	for(var i = 0; i< str.length; i++) {  // we assume that the initial part of the prod rule is one character
		var update = false
		for(var j = 0; j < update_rules.length; j++) {
			if(str[i] == update_rules[j][0]){
				var new_str.append(update_rules[j][1])
				var update = true
			}
		}
		if(!update) {
			var new_str.append(str[i])
		}
	}
	return new_str
}


function main() {
	
	draw_between_points(0,0, 100, 100)
	draw_between_points(100,100, 200, 100)
	draw_between_points(100,100, 100, 200)
	
	recursive_tree(400, 100, Math.PI / 4, 150, Math.PI / 7, 0.65, 11)
	s = axiom
	for(var i = 0; i< 3; i++) {
		console.log(s)
		s = update_str(s)	
	}
	console.log(s)
}

main()



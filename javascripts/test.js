var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

c_width = c.width
c_height = c.height

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

// we create driver for lines
class Segment {
	constructor(x1, y1, x2, y2) {
		this.x1 = x1
		this.y1 = y1
		this.x2 = x2
		this.y2 = y2
		this.mass = 10
	}
	
	
}





function main() {
	
	draw_between_points(0,0, 100, 100)
	draw_between_points(100,100, 200, 100)
	draw_between_points(100,100, 100, 200)
	
	recursive_tree(400, 100, Math.PI / 4, 150, Math.PI / 7, 0.65, 11)
}

main()



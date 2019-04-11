(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// stage content:
(lib.L0_B_Act_PY = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0));

	// Layer 8
	this.FLangBtn = new lib.Symbol34_1();
	this.FLangBtn.setTransform(105.6,164.5);

	this.langBtn = new lib.Symbol34_1();
	this.langBtn.setTransform(45.7,98.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.langBtn},{t:this.FLangBtn}]}).wait(1));

	// Layer 6
	this.finishBtn = new lib.Symbol28copy();
	this.finishBtn.setTransform(308.7,295.8,1,1,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.finishBtn}]}).wait(1));

	// Layer 4
	this.start = new lib.Symbol35_1();
	this.start.setTransform(292.6,353.4);

	this.backbtn = new lib.Symbol29_1();
	this.backbtn.setTransform(292.5,232.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.backbtn},{t:this.start}]}).wait(1));

	// Layer 9
	this.car = new lib.Symbol1();
	this.car.setTransform(-301.1,255.4,1,1,0,0,0,-309.7,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.car}]}).wait(1));

	// Layer 2
	this.dragabbles = new lib.Symbol3();
	this.dragabbles.setTransform(289.6,473.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dragabbles}]}).wait(1));

	// Layer 1
	this.pictures = new lib.Symbol2();
	this.pictures.setTransform(446.8,145.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3.7).p("ADkAAQAABehDBDQhDBDheAAQhdAAhDhDQhDhDAAheQAAheBDhCQBDhDBdAAQBeAABDBDQBDBCAABeg");
	this.shape.setTransform(59.9,67.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC400").s().p("AigChQhDhDAAheQAAheBDhCQBDhDBdAAQBeAABDBDQBDBCAABeQAABehDBDQhDBDheAAQhdAAhDhDg");
	this.shape_1.setTransform(59.9,67.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFC400").ss(2).p("AFPAAIjZAfICsCIIjMhSIBSDNIiIitIggDaIgejaIiICtIBSjNIjNBSICtiIIjagfIDageIitiJIDNBSIhSjMICICsIAejZIAgDZICIisIhSDMIDMhSIisCJg");
	this.shape_2.setTransform(57.2,67.5,1,1,0,0,0,-2.6,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC400").s().p("AgeB1IiICtIBRjMIjMBSICtiJIjagfIDageIitiJIDMBSIhRjMICICtIAejaIAfDaICIitIhRDMIDMhSIisCJIDZAeIjZAfICsCJIjMhSIBRDMIiIitIgfDag");
	this.shape_3.setTransform(59.9,67.5);

	this.instance = new lib.sym01();
	this.instance.setTransform(179.9,94.3,1,1,0,0,0,100.4,37.7);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.pictures}]}).wait(1));

	// Layer 10
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#50D5DD").ss(5,1,1).p("EgtXAqzMAAAhVlMBavAAAMAAABVlg");
	this.shape_4.setTransform(292.5,276);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).wait(1));

	// Layer 3
	this.instance_1 = new lib.sym02();
	this.instance_1.setTransform(507.9,53.9,1,1,0,0,0,56,14.4);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.sym05();
	this.instance_2.setTransform(290.1,249.1,1,1,0,0,0,344.5,114.4);
	this.instance_2.alpha = 0.5;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggANIAAgZIBBAAIAAAZg");
	this.shape_5.setTransform(614.9,379.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EAsXAANIAAgZICGAAIAAAZgEAnlAANIAAgZICGAAIAAAZgEAizAANIAAgZICGAAIAAAZgAeBANIAAgZICGAAIAAAZgAZPANIAAgZICGAAIAAAZgAUdANIAAgZICGAAIAAAZgAPrANIAAgZICGAAIAAAZgAK5ANIAAgZICGAAIAAAZgAGHANIAAgZICGAAIAAAZgABVANIAAgZICHAAIAAAZgAjbANIAAgZICHAAIAAAZgAoMANIAAgZICGAAIAAAZgAs+ANIAAgZICGAAIAAAZgAxwANIAAgZICGAAIAAAZgA2iANIAAgZICGAAIAAAZgA7UANIAAgZICGAAIAAAZgEggGAANIAAgZICGAAIAAAZgEgk4AANIAAgZICGAAIAAAZgEgpqAANIAAgZICGAAIAAAZgEgucAANIAAgZICGAAIAAAZg");
	this.shape_6.setTransform(297,379.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggANIAAgZIBBAAIAAAZg");
	this.shape_7.setTransform(-20.8,379.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EgyLAAeIAAg7MBkXAAAIAAA7g");
	this.shape_8.setTransform(297,353);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#656764").s().p("EgyLADrIAAnVMBkXAAAIAAHVg");
	this.shape_9.setTransform(297,379.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#50D5DD").s().p("EgtmAdDMAAAg6FMBbNAAAMAAAA6Fg");
	this.shape_10.setTransform(290,186);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EgtmAQKMAAAggTMBbNAAAMAAAAgTg");
	this.shape_11.setTransform(290,446.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-548.5,-3.2,1166.8,584.1);
p.frameBounds = [rect];


// symbols:
(lib.Group = function() {
	this.initialize(img.Group);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,126);


(lib.Group_0 = function() {
	this.initialize(img.Group_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,57);


(lib.Group_1 = function() {
	this.initialize(img.Group_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,61);


(lib.Group_11 = function() {
	this.initialize(img.Group_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,457,64);


(lib.Group_12 = function() {
	this.initialize(img.Group_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,83);


(lib.Group_2 = function() {
	this.initialize(img.Group_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,36);


(lib.Group_3 = function() {
	this.initialize(img.Group_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,2);


(lib.Group_6 = function() {
	this.initialize(img.Group_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,17);


(lib.Group_7 = function() {
	this.initialize(img.Group_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,40);


(lib.Group_8 = function() {
	this.initialize(img.Group_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,72);


(lib.LV1_U1_L1_Activity_P_img_11 = function() {
	this.initialize(img.LV1_U1_L1_Activity_P_img_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,424,314);


(lib.LV1_U1_L1_Activity_P_img_21 = function() {
	this.initialize(img.LV1_U1_L1_Activity_P_img_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,424,314);


(lib.Mesh = function() {
	this.initialize(img.Mesh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,34);


(lib.Mesh_1 = function() {
	this.initialize(img.Mesh_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,32);


(lib.Mesh_2 = function() {
	this.initialize(img.Mesh_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,27);


(lib.Mesh_3 = function() {
	this.initialize(img.Mesh_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,74);


(lib.Mesh_4 = function() {
	this.initialize(img.Mesh_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,389,210);


(lib.Mesh_5 = function() {
	this.initialize(img.Mesh_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,159);


(lib.Path_1 = function() {
	this.initialize(img.Path_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,79);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],-2.3,9,-8.5,-6.1).s().p("AgHAPQgGgDgCgHQgDgFAEgGQADgHAHgCQAFgDAGAEQAHAEACAGQACAFgDAHQgDAGgHACIgFABQgDAAgEgCg");
	this.shape.setTransform(6,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],7.5,6.6,1.3,-8.5).s().p("AgGAPQgHgDgCgHQgCgFADgHQADgGAHgCQAFgDAHAEQAGAEACAGQADAFgEAHQgDAGgHACIgFABQgDAAgDgCg");
	this.shape_1.setTransform(-5.9,-2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],6.8,6.7,0.6,-8.3).s().p("AgGAPQgHgDgCgHQgCgFADgGQADgHAIgCQAEgCAGADQAHAEACAGQACAFgDAGQgDAHgHACIgFABQgDAAgDgCg");
	this.shape_2.setTransform(-3,6.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],-1.6,8.8,-7.8,-6.3).s().p("AgGAPQgHgDgCgHQgDgFAEgHQADgGAHgCQAFgCAHADQAGADACAIQACAEgDAGQgEAHgGACIgFABQgDAAgDgCg");
	this.shape_3.setTransform(3.1,-5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],2.4,7.8,-3.7,-7.2).s().p("AgMAbQgMgGgEgMQgEgKAGgLQAGgMAMgEQAKgEAMAGQALAFAEANQAEAKgGALQgGAMgMAEQgFACgEAAQgGAAgGgEg");
	this.shape_4.setTransform(0.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAQQgHgDgCgHQgDgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHACIgGACIgGgCg");
	this.shape_5.setTransform(-7.7,-16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAQQgHgDgCgHQgDgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_6.setTransform(7.3,19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADACAHQADAFgDAHQgDAHgHACQgDACgDAAIgGgCg");
	this.shape_7.setTransform(18.4,-4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADACAHQADAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_8.setTransform(-16.7,9.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADACAHQADAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_9.setTransform(17.2,9.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_10.setTransform(-17.3,-5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_11.setTransform(-7.4,18.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHACIgGACQgCAAgEgCg");
	this.shape_12.setTransform(8.5,-16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAGgFAGAAQAHAAAFAFQAGAGAAAGQAAAHgGAFQgFAGgHAAQgGAAgGgGg");
	this.shape_13.setTransform(-13.6,-12.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAGgFAGAAQAHAAAFAFQAGAGAAAGQAAAHgGAFQgFAGgHAAQgGAAgGgGg");
	this.shape_14.setTransform(13.4,14.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAGgEAGAAQAHAAAFAEQAGAGAAAGQAAAHgGAFQgFAGgHAAQgGAAgGgGg");
	this.shape_15.setTransform(14.5,-11.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAGgEAGAAQAHAAAFAEQAGAGAAAGQAAAHgGAFQgFAGgHAAQgGAAgGgGg");
	this.shape_16.setTransform(-12.5,15.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAFQgGAGgHAAQgGAAgFgGg");
	this.shape_17.setTransform(19,2.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAFQgGAGgHAAQgGAAgFgGg");
	this.shape_18.setTransform(-19,2.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLANQgGgGAAgHQAAgGAGgFQAFgFAGgBQAHABAFAFQAGAFAAAGQAAAHgGAGQgFAEgHAAQgGAAgFgEg");
	this.shape_19.setTransform(0,20.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAFAGQAGAFAAAGQAAAHgGAFQgFAGgHAAQgGAAgFgGg");
	this.shape_20.setTransform(0,-18.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["rgba(0,0,0,0)","rgba(255,255,255,0)","#FFFFFF","#F5F5F5","#ACACAC","#6F6F6F","#3F3F3F","#1D1D1D","#080808","#000000"],[0,0.965,0.965,0.965,0.973,0.98,0.984,0.992,0.996,1],0,0,0,0,0,25.7).s().p("Ai1C2QhLhMAAhqQAAhpBLhMQBMhLBpAAQBqAABMBLQBLBMAABpQAABqhLBMQhMBLhqAAQhpAAhMhLg");
	this.shape_21.setTransform(0,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["rgba(0,0,0,0)","rgba(248,248,248,0)","#F8F8F8","#FFFFFF","#FBFBFB","#F0F0F0","#DCDCDC","#C1C1C1","#9F9F9F","#999999","#000000","#999999","#FFFFFF","rgba(255,255,255,0)","rgba(0,0,0,0)"],[0,0.663,0.663,0.671,0.69,0.71,0.725,0.745,0.761,0.765,0.82,0.882,0.965,0.965,1],0,0,0,0,0,25.7).s().p("Ai1C2QhLhMAAhqQAAhpBLhMQBMhLBpAAQBqAABMBLQBLBMAABpQAABqhLBMQhMBLhqAAQhpAAhMhLg");
	this.shape_22.setTransform(0,0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#000000","#0C0C0C","#1D1D1D","#2A2A2A","#313131","#333333","#000000","#202020","#636363","#9A9A9A","#C6C6C6","#E5E5E5","#F8F8F8","rgba(248,248,248,0)","rgba(0,0,0,0)"],[0.314,0.325,0.345,0.376,0.412,0.498,0.584,0.588,0.608,0.624,0.639,0.651,0.663,0.663,1],0,0,0,0,0,25.7).s().p("Ai1C2QhLhMAAhqQAAhpBLhMQBMhLBpAAQBqAABMBLQBLBMAABpQAABqhLBMQhMBLhqAAQhpAAhMhLg");
	this.shape_23.setTransform(0,0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#000000","#333333","#000000","#000000","#333333","#000000","#2A2A28","#4D4D4D"],[0,0.451,0.51,0.651,0.722,0.796,0.957,1],0,0,0,0,0,35).s().p("AAAFbQguAAgVgCQgkgDgcgLQhigog8hXQg+haAAhuQAAiQBnhnQBnhnCRAAQCRAABoBnQBnBnAACQQAABzhDBdQhCBahqAkQgXAIggABg");

	this.addChild(this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-35.2,-34.7,70.6,69.6);
p.frameBounds = [rect];


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],-2.3,9,-8.5,-6.1).s().p("AgHAPQgGgDgCgHQgDgFAEgGQADgHAHgCQAFgDAGAEQAHAEACAGQACAFgDAHQgDAGgHACIgFABQgDAAgEgCg");
	this.shape.setTransform(6,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],7.5,6.6,1.3,-8.5).s().p("AgGAPQgHgDgCgHQgCgFADgHQADgGAHgCQAFgDAHAEQAGAEACAGQADAFgEAHQgDAGgHACIgFABQgDAAgDgCg");
	this.shape_1.setTransform(-5.9,-2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],6.8,6.7,0.6,-8.3).s().p("AgGAPQgHgDgCgHQgCgFADgGQADgHAIgCQAEgCAGADQAHAEACAGQACAFgDAGQgDAHgHACIgFABQgDAAgDgCg");
	this.shape_2.setTransform(-3,6.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],-1.6,8.8,-7.8,-6.3).s().p("AgGAPQgHgDgCgHQgDgFAEgHQADgGAHgCQAFgCAHADQAGADACAIQACAEgDAGQgEAHgGACIgFABQgDAAgDgCg");
	this.shape_3.setTransform(3.1,-5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],2.4,7.8,-3.7,-7.2).s().p("AgMAbQgMgGgEgMQgEgKAGgLQAGgMAMgEQAKgEAMAGQALAFAEANQAEAKgGALQgGAMgMAEQgFACgEAAQgGAAgGgEg");
	this.shape_4.setTransform(0.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAQQgHgDgCgHQgDgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHACIgGACIgGgCg");
	this.shape_5.setTransform(-7.7,-16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAQQgHgDgCgHQgDgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_6.setTransform(7.3,19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADACAHQADAFgDAHQgDAHgHACQgDACgDAAIgGgCg");
	this.shape_7.setTransform(18.4,-4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADACAHQADAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_8.setTransform(-16.7,9.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADACAHQADAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_9.setTransform(17.2,9.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_10.setTransform(-17.3,-5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_11.setTransform(-7.4,18.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHACIgGACQgCAAgEgCg");
	this.shape_12.setTransform(8.5,-16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAGgFAGAAQAHAAAFAFQAGAGAAAGQAAAHgGAFQgFAGgHAAQgGAAgGgGg");
	this.shape_13.setTransform(-13.6,-12.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAGgFAGAAQAHAAAFAFQAGAGAAAGQAAAHgGAFQgFAGgHAAQgGAAgGgGg");
	this.shape_14.setTransform(13.4,14.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAGgEAGAAQAHAAAFAEQAGAGAAAGQAAAHgGAFQgFAGgHAAQgGAAgGgGg");
	this.shape_15.setTransform(14.5,-11.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAGgEAGAAQAHAAAFAEQAGAGAAAGQAAAHgGAFQgFAGgHAAQgGAAgGgGg");
	this.shape_16.setTransform(-12.5,15.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAFQgGAGgHAAQgGAAgFgGg");
	this.shape_17.setTransform(19,2.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAFQgGAGgHAAQgGAAgFgGg");
	this.shape_18.setTransform(-19,2.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLANQgGgGAAgHQAAgGAGgFQAFgFAGgBQAHABAFAFQAGAFAAAGQAAAHgGAGQgFAEgHAAQgGAAgFgEg");
	this.shape_19.setTransform(0,20.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAFAGQAGAFAAAGQAAAHgGAFQgFAGgHAAQgGAAgFgGg");
	this.shape_20.setTransform(0,-18.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["rgba(0,0,0,0)","rgba(255,255,255,0)","#FFFFFF","#F5F5F5","#ACACAC","#6F6F6F","#3F3F3F","#1D1D1D","#080808","#000000"],[0,0.965,0.965,0.965,0.973,0.98,0.984,0.992,0.996,1],0,0,0,0,0,25.7).s().p("Ai1C2QhLhMAAhqQAAhpBLhMQBMhLBpAAQBqAABMBLQBLBMAABpQAABqhLBMQhMBLhqAAQhpAAhMhLg");
	this.shape_21.setTransform(0,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["rgba(0,0,0,0)","rgba(248,248,248,0)","#F8F8F8","#FFFFFF","#FBFBFB","#F0F0F0","#DCDCDC","#C1C1C1","#9F9F9F","#999999","#000000","#999999","#FFFFFF","rgba(255,255,255,0)","rgba(0,0,0,0)"],[0,0.663,0.663,0.671,0.69,0.71,0.725,0.745,0.761,0.765,0.82,0.882,0.965,0.965,1],0,0,0,0,0,25.7).s().p("Ai1C2QhLhMAAhqQAAhpBLhMQBMhLBpAAQBqAABMBLQBLBMAABpQAABqhLBMQhMBLhqAAQhpAAhMhLg");
	this.shape_22.setTransform(0,0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#000000","#0C0C0C","#1D1D1D","#2A2A2A","#313131","#333333","#000000","#202020","#636363","#9A9A9A","#C6C6C6","#E5E5E5","#F8F8F8","rgba(248,248,248,0)","rgba(0,0,0,0)"],[0.314,0.325,0.345,0.376,0.412,0.498,0.584,0.588,0.608,0.624,0.639,0.651,0.663,0.663,1],0,0,0,0,0,25.7).s().p("Ai1C2QhLhMAAhqQAAhpBLhMQBMhLBpAAQBqAABMBLQBLBMAABpQAABqhLBMQhMBLhqAAQhpAAhMhLg");
	this.shape_23.setTransform(0,0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#000000","#333333","#000000","#000000","#333333","#000000","#2A2A28","#4D4D4D"],[0,0.451,0.51,0.651,0.722,0.796,0.957,1],0,0,0,0,0,35).s().p("AAAFbQguAAgVgCQgkgDgcgLQhigog8hXQg+haAAhuQAAiQBnhnQBnhnCRAAQCRAABoBnQBnBnAACQQAABzhDBdQhCBahqAkQgXAIggABg");

	this.addChild(this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-35.2,-34.7,70.6,69.6);
p.frameBounds = [rect];


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],-2.3,9,-8.5,-6.1).s().p("AgGAPQgHgDgCgHQgCgFADgGQADgHAHgCQAFgDAHAEQAGAEACAGQADAFgEAHQgDAGgHACIgFABQgDAAgDgCg");
	this.shape.setTransform(6,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],7.5,6.6,1.3,-8.5).s().p("AgGAPQgHgDgCgHQgDgFAEgHQADgGAHgCQAFgDAHAEQAGAEACAGQACAFgDAHQgEAGgGACIgFABQgDAAgDgCg");
	this.shape_1.setTransform(-5.9,-2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],6.8,6.7,0.6,-8.3).s().p("AgGAPQgHgDgCgHQgCgFADgGQADgHAHgCQAFgCAGADQAHAEACAGQADAFgEAGQgDAHgHACIgFABQgDAAgDgCg");
	this.shape_2.setTransform(-3,6.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],-1.6,8.8,-7.8,-6.3).s().p("AgHAPQgGgDgCgHQgCgFADgHQADgGAIgCQAEgCAGADQAHADACAIQADAEgEAGQgEAHgGACIgFABQgDAAgEgCg");
	this.shape_3.setTransform(3.1,-5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],2.4,7.8,-3.7,-7.2).s().p("AgMAbQgMgGgEgMQgEgKAGgLQAGgMAMgEQAKgEAMAGQALAFAEANQAEAKgGALQgGAMgMAEQgFACgEAAQgGAAgGgEg");
	this.shape_4.setTransform(0.2,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADACAHQADAFgDAHQgDAHgHACIgGACIgGgCg");
	this.shape_5.setTransform(-7.6,-16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAQQgHgDgCgHQgDgGADgGQADgHAHgDQAFgCAHADQAHADACAHQADAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_6.setTransform(7.3,19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGAQQgHgDgCgHQgDgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHACIgGACIgGgCg");
	this.shape_7.setTransform(18.4,-4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGAQQgHgDgCgHQgDgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_8.setTransform(-16.7,9.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_9.setTransform(17.2,9.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_10.setTransform(-17.3,-5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_11.setTransform(-7.4,18.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAQQgHgDgCgHQgDgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHACIgGACQgCAAgEgCg");
	this.shape_12.setTransform(8.5,-16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAGgFAGAAQAHAAAFAFQAGAGAAAGQAAAHgGAFQgFAGgHAAQgGAAgGgGg");
	this.shape_13.setTransform(-13.6,-12.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAGgFAGAAQAHAAAFAFQAGAGAAAGQAAAHgGAFQgFAGgHAAQgGAAgGgGg");
	this.shape_14.setTransform(13.4,14.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAGgEAGAAQAHAAAFAEQAGAGAAAGQAAAHgGAFQgFAGgHAAQgGAAgGgGg");
	this.shape_15.setTransform(14.5,-11.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAGgEAGAAQAHAAAFAEQAGAGAAAGQAAAHgGAFQgFAGgHAAQgGAAgGgGg");
	this.shape_16.setTransform(-12.5,15.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAFQgGAGgHAAQgGAAgFgGg");
	this.shape_17.setTransform(19,2.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAFAGQAGAFAAAGQAAAHgGAFQgFAGgHAAQgGAAgFgGg");
	this.shape_18.setTransform(-19,2.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLANQgGgGAAgHQAAgGAGgFQAFgFAGgBQAHABAGAFQAFAFAAAGQAAAHgFAGQgGAEgHAAQgGAAgFgEg");
	this.shape_19.setTransform(0,20.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAFQgGAGgHAAQgGAAgFgGg");
	this.shape_20.setTransform(0,-18.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["rgba(0,0,0,0)","rgba(255,255,255,0)","#FFFFFF","#F5F5F5","#ACACAC","#6F6F6F","#3F3F3F","#1D1D1D","#080808","#000000"],[0,0.965,0.965,0.965,0.973,0.98,0.984,0.992,0.996,1],0,0,0,0,0,25.7).s().p("Ai1C2QhLhMAAhqQAAhpBLhMQBMhLBpAAQBqAABMBLQBLBMAABpQAABqhLBMQhMBLhqAAQhpAAhMhLg");
	this.shape_21.setTransform(0,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["rgba(0,0,0,0)","rgba(248,248,248,0)","#F8F8F8","#FFFFFF","#FBFBFB","#F0F0F0","#DCDCDC","#C1C1C1","#9F9F9F","#999999","#000000","#999999","#FFFFFF","rgba(255,255,255,0)","rgba(0,0,0,0)"],[0,0.663,0.663,0.671,0.69,0.71,0.725,0.745,0.761,0.765,0.82,0.882,0.965,0.965,1],0,0,0,0,0,25.7).s().p("Ai1C2QhLhMAAhqQAAhpBLhMQBMhLBpAAQBqAABMBLQBLBMAABpQAABqhLBMQhMBLhqAAQhpAAhMhLg");
	this.shape_22.setTransform(0,0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#000000","#0C0C0C","#1D1D1D","#2A2A2A","#313131","#333333","#000000","#202020","#636363","#9A9A9A","#C6C6C6","#E5E5E5","#F8F8F8","rgba(248,248,248,0)","rgba(0,0,0,0)"],[0.314,0.325,0.345,0.376,0.412,0.498,0.584,0.588,0.608,0.624,0.639,0.651,0.663,0.663,1],0,0,0,0,0,25.7).s().p("Ai1C2QhLhMAAhqQAAhpBLhMQBMhLBpAAQBqAABMBLQBLBMAABpQAABqhLBMQhMBLhqAAQhpAAhMhLg");
	this.shape_23.setTransform(0,0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#000000","#333333","#000000","#000000","#333333","#000000","#2A2A28","#4D4D4D"],[0,0.451,0.51,0.651,0.722,0.796,0.957,1],0,0,0,0,0,35).s().p("AAAFbQguAAgVgCQgkgDgcgLQhigog9hXQg9haAAhuQAAiQBnhnQBohnCQAAQCSAABmBnQBoBnAACQQAABzhEBdQhCBahpAkQgXAIggABg");

	this.addChild(this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-35.2,-34.7,70.5,69.6);
p.frameBounds = [rect];


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],-2.3,9,-8.5,-6.1).s().p("AgGAPQgHgDgCgHQgCgFADgGQADgHAHgCQAFgDAHAEQAGAEACAGQADAFgEAHQgDAGgHACIgFABQgDAAgDgCg");
	this.shape.setTransform(6,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],7.5,6.6,1.3,-8.5).s().p("AgGAPQgHgDgCgHQgDgFAEgHQADgGAHgCQAFgDAHAEQAGAEACAGQACAFgDAHQgEAGgGACIgFABQgDAAgDgCg");
	this.shape_1.setTransform(-5.9,-2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],6.8,6.7,0.6,-8.3).s().p("AgGAPQgHgDgCgHQgCgFADgGQADgHAHgCQAFgCAGADQAHAEACAGQADAFgEAGQgDAHgHACIgFABQgDAAgDgCg");
	this.shape_2.setTransform(-3,6.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],-1.6,8.8,-7.8,-6.3).s().p("AgHAPQgGgDgCgHQgCgFADgHQADgGAIgCQAEgCAGADQAHADACAIQADAEgEAGQgEAHgGACIgFABQgDAAgEgCg");
	this.shape_3.setTransform(3.1,-5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#3C3C3C","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#3C3C3C"],[0,0.361,0.396,0.498,0.651,1],2.4,7.8,-3.7,-7.2).s().p("AgMAbQgMgGgEgMQgEgKAGgLQAGgMAMgEQAKgEAMAGQALAFAEANQAEAKgGALQgGAMgMAEQgFACgEAAQgGAAgGgEg");
	this.shape_4.setTransform(0.2,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADACAHQADAFgDAHQgDAHgHACIgGACIgGgCg");
	this.shape_5.setTransform(-7.6,-16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAQQgHgDgCgHQgDgGADgGQADgHAHgDQAFgCAHADQAHADACAHQADAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_6.setTransform(7.3,19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGAQQgHgDgCgHQgDgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHACIgGACIgGgCg");
	this.shape_7.setTransform(18.4,-4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGAQQgHgDgCgHQgDgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_8.setTransform(-16.7,9.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_9.setTransform(17.2,9.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_10.setTransform(-17.3,-5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGAQQgHgDgDgHQgCgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHADIgGABQgCAAgEgCg");
	this.shape_11.setTransform(-7.4,18.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAQQgHgDgCgHQgDgGADgGQADgHAHgDQAFgCAHADQAHADADAHQACAFgDAHQgDAHgHACIgGACQgCAAgEgCg");
	this.shape_12.setTransform(8.5,-16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAGgFAGAAQAHAAAFAFQAGAGAAAGQAAAHgGAFQgFAGgHAAQgGAAgGgGg");
	this.shape_13.setTransform(-13.6,-12.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAGgFAGAAQAHAAAFAFQAGAGAAAGQAAAHgGAFQgFAGgHAAQgGAAgGgGg");
	this.shape_14.setTransform(13.4,14.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAGgEAGAAQAHAAAFAEQAGAGAAAGQAAAHgGAFQgFAGgHAAQgGAAgGgGg");
	this.shape_15.setTransform(14.5,-11.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAGgEAGAAQAHAAAFAEQAGAGAAAGQAAAHgGAFQgFAGgHAAQgGAAgGgGg");
	this.shape_16.setTransform(-12.5,15.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAFQgGAGgHAAQgGAAgFgGg");
	this.shape_17.setTransform(19,2.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAFAGQAGAFAAAGQAAAHgGAFQgFAGgHAAQgGAAgFgGg");
	this.shape_18.setTransform(-19,2.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLANQgGgGAAgHQAAgGAGgFQAFgFAGgBQAHABAGAFQAFAFAAAGQAAAHgFAGQgGAEgHAAQgGAAgFgEg");
	this.shape_19.setTransform(0,20.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAFQgGAGgHAAQgGAAgFgGg");
	this.shape_20.setTransform(0,-18.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["rgba(0,0,0,0)","rgba(255,255,255,0)","#FFFFFF","#F5F5F5","#ACACAC","#6F6F6F","#3F3F3F","#1D1D1D","#080808","#000000"],[0,0.965,0.965,0.965,0.973,0.98,0.984,0.992,0.996,1],0,0,0,0,0,25.7).s().p("Ai1C2QhLhMAAhqQAAhpBLhMQBMhLBpAAQBqAABMBLQBLBMAABpQAABqhLBMQhMBLhqAAQhpAAhMhLg");
	this.shape_21.setTransform(0,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["rgba(0,0,0,0)","rgba(248,248,248,0)","#F8F8F8","#FFFFFF","#FBFBFB","#F0F0F0","#DCDCDC","#C1C1C1","#9F9F9F","#999999","#000000","#999999","#FFFFFF","rgba(255,255,255,0)","rgba(0,0,0,0)"],[0,0.663,0.663,0.671,0.69,0.71,0.725,0.745,0.761,0.765,0.82,0.882,0.965,0.965,1],0,0,0,0,0,25.7).s().p("Ai1C2QhLhMAAhqQAAhpBLhMQBMhLBpAAQBqAABMBLQBLBMAABpQAABqhLBMQhMBLhqAAQhpAAhMhLg");
	this.shape_22.setTransform(0,0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#000000","#0C0C0C","#1D1D1D","#2A2A2A","#313131","#333333","#000000","#202020","#636363","#9A9A9A","#C6C6C6","#E5E5E5","#F8F8F8","rgba(248,248,248,0)","rgba(0,0,0,0)"],[0.314,0.325,0.345,0.376,0.412,0.498,0.584,0.588,0.608,0.624,0.639,0.651,0.663,0.663,1],0,0,0,0,0,25.7).s().p("Ai1C2QhLhMAAhqQAAhpBLhMQBMhLBpAAQBqAABMBLQBLBMAABpQAABqhLBMQhMBLhqAAQhpAAhMhLg");
	this.shape_23.setTransform(0,0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#000000","#333333","#000000","#000000","#333333","#000000","#2A2A28","#4D4D4D"],[0,0.451,0.51,0.651,0.722,0.796,0.957,1],0,0,0,0,0,35).s().p("AAAFbQguAAgVgCQgkgDgcgLQhigog9hXQg9haAAhuQAAiQBnhnQBohnCQAAQCSAABmBnQBoBnAACQQAABzhEBdQhCBahpAkQgXAIggABg");

	this.addChild(this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-35.2,-34.7,70.5,69.6);
p.frameBounds = [rect];


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmBeQgzgDgcgNQgRgJgIgLQgIgNACgUQABgZAPgUQAHgJAEAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAgBABQAAADgDAHQgHAPgBAIQAAAHAFAJQAHALAPAIQAaANAvACQAzADA4gJQA0gIACgIIABgHQAAgKgGgOIgKgQIAAgBQAAgFAHgMQAHgNADAAQAFABAGARQAHATgBASQgCAggPATQgJALg1ALQguAKgpAAIgVgBgAAbgmIgWgVIgRASQgEACgCgCQgQgLgIgNQgCgCADgDQAKgLAOgMQACgCADADQAMAPAIAGIASgSQAEgEACACQAQATAHAFIACADIgCACIgXAXQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgDgBg");
	this.shape.setTransform(0.5,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("ADPEbIm2gUQgEAAABgEIAYoaQABgEAEAAIG1AUQADABAAADIgZIbQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgBgBg");
	this.shape_1.setTransform(0.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5A967").s().p("AC0EaImAgRQgVgBgNgPQgOgQABgUIAVnAQAAgUAQgOQAPgNAUABIGAARQAVABANAPQAOAQgBAUIgVHAQAAAUgPAOQgPAMgSAAIgDAAg");
	this.shape_2.setTransform(-2.3,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9B6A3A").s().p("ACyEaIl8gRQgUgBgOgPQgOgPABgVIAVnAQABgUAPgOQAPgNAUABIF8ARQAVABANAPQAOAPgBAUIgVHAQgBAVgPANQgOANgSAAIgDAAg");
	this.shape_3.setTransform(2.6,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.6,-28.4,55.3,56.9);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBtQgQAAgKgLQgLgLAAgPQABgVASgiQASggALABQAJAAAMAKQAXASAAAcQAAAQgGARQgGAQgNAJQgNAJgPAAIgCAAgAgLAcQgIAFgFAJQgFAIAAAFQAAAGAHAFQAHAGAKAAQAFAAAKgDQALgDAEgFIABgDIgBgCQgFgLgJgJQgKgJgIgBQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAgAAVg3QgMgJgJgLQgLANgHAGQgEACgCgCQgQgKgJgMQgCgDADgDQAMgPAKgJQADgCACADQAMANAJAHQAMgOAGgFQAEgEACACQAQARAIAGIACADIgCACIgWAYQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgDgBg");
	this.shape.setTransform(0.4,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("AjcERQgDAAAAgEIABobQAAgDAEAAIG2ABQAEAAAAAEIgBIbQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_1.setTransform(0.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5A967").s().p("AjBERQgUAAgOgPQgPgOABgUIABnBQAAgUAOgOQAPgPAUABIGBABQAUAAAPAOQAOAOAAAVIgBHAQgBAVgOAOQgPAOgUAAg");
	this.shape_2.setTransform(-2.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9B6A3A").s().p("Ai+ERQgVAAgOgOQgPgOAAgVIACnAQAAgVAOgOQAPgOAUAAIF8ABQAVAAAOAOQAOAOABAVIgCHAQAAAVgPAOQgOAOgUAAg");
	this.shape_3.setTransform(2.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.6,-27.4,53.4,55);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBJQgFgEgDgPQgBgJABgEQABgIADAAIADACQAJAEATgDQAPgBAOgFQAPgFAGgFQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgCQgIgQgUgSQgUgVgPACIgJAEQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgHADgMQACgNAEgEQACgCAFgBQAKgBAIADQAGACALAJQAMAKAJANQAOAVADARQACAQgCAQQgDATgTAKQgRAKgiAEIgIAAQgIAAgDgCg");
	this.shape.setTransform(0.4,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("Ai5EpIhHoWQgBgEAEAAIGzg6QAEgBAAAEIBHIWQAAAEgDABImyA5IgCAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_1.setTransform(-0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B6A3A").s().p("Ai/EfQgQgMgCgUIg7m9QgDgUAMgQQAMgQAVgDIF9gzQAUgCARAMQAQAMACAUIA8G9QACAUgMAQQgNARgUACIl9AzIgIAAQgQAAgNgKg");
	this.shape_2.setTransform(2.4,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("Ai9EfQgQgMgCgVIg8m8QgCgUAMgRQAMgPAVgEIF5gxQAUgDAQAMQAQANADATIA7G9QADAUgMAQQgNAQgUADIl5AzIgHAAQgQAAgOgKg");
	this.shape_3.setTransform(-2.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.4,-30.1,58.9,60.3);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah8BqQgbgSAAgfQAAgLAFgPQAEgRAIgLQAFgHAEAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIgCAGIgGARQgDAKAAAGQAAARAWAPQAdATA2AAQAnAAAvgIQAmgGAZgJQALgEACgDQACgCAAgJQAAgJgFgLQgDAGgHAFQgJAEgKAAQgcAAAAgfQAAgSAMgYQAMgXAIAAQATAAAPAbQAOAaAAAgQAAAGgCANQgDAPgEAKQgDAIgEAEQgDADgJAFQgZALgoAJQgwALgrAAQg9AAgfgTgABYgGIAAACIAAACQADAHANAAQAKAAAFgFIABAAQAAgFgFgGQgGgIgJAAQgIAAgEANgAAthFIgQgLQgJgIgDgEQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAJgNAMgMQABgBAAgBQABAAABAAQAAgBABAAQAAAAAAABQAQAPANAJQABAAAAAAQABABAAAAQAAABgBAAQAAAAgBABIgXAbIgCABIgBgBg");
	this.shape.setTransform(-3,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("ACvEwImxhDQgDgBAAgEIBToUQABgEAEABIGwBDQAEABgBAEIhTIUQAAABAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_1.setTransform(0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5A967").s().p("ACVEsIl9g7QgUgDgMgRQgMgQADgUIBFm7QAEgUAQgMQARgMATADIF9A7QAUAEAMAQQAMAQgDAUIhFG8QgEAUgQAMQgNAJgPAAIgIgBg");
	this.shape_2.setTransform(-2.3,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9B6A3A").s().p("ACSEsIl4g7QgUgDgMgRQgMgQAEgUIBEm7QAEgUARgMQAPgMAVADIF4A7QAUADAMARQAMAQgEAUIhEG7QgEAUgQAMQgNAKgPAAIgJgBg");
	this.shape_3.setTransform(2.6,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.8,-30.5,59.8,61.1);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMByQgWgUAAgiQAAgRAJgTQAFgRAJgIQAEgHADAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAAEgDACQgOAcAAASQAAAUAVAPQAUAMAYAAQAeAAAegMQAhgMAHgUIAAgHQAAgcgNgVIgIgNIAAgDQAAgEACgIIAHgSQABgBAAAAQABgBAAAAQABgBAAAAQAAAAAAAAQADAAABAEQAVApgBAhQAAAggFALQgIATgJAKQgSARgXAJQgcAMgjAAQgggCgQgQgAAAhMIgNgLQgKgIgDgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAKgNALgMQAEgEABACQALANAQALQABAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABIgXAbIgCABIgCgBg");
	this.shape.setTransform(0.1,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("AjlEJQgEgBAAgDIAWobQAAgBAAgBQAAAAABgBQAAAAABAAQABAAAAgBIG2ASQAEAAAAAEIgWIbQAAABAAABQAAAAgBABQAAAAgBAAQgBABAAAAg");
	this.shape_1.setTransform(-0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B6A3A").s().p("AC2EZImBgPQgVgBgNgPQgOgPABgUIASnBQABgUAPgOQAPgNAUAAIGBAQQAUABAOAPQAOAPgBAUIgSHAQgBAVgPANQgOAOgSAAIgDgBg");
	this.shape_2.setTransform(2.4,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("ACzEZIl8gPQgUgBgOgPQgNgPAAgUIASnAQABgVAPgOQAPgNAUABIF9APQAUABAOAPQAOAPgBAUIgTHAQAAAUgPAOQgOANgTAAIgDAAg");
	this.shape_3.setTransform(-2.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.5,-28.2,55.1,56.6);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAB4QAAgbgHhVQgJhSAAgIQAAgQAOgYQADgIACAAQACAAABANIAGBPQAFA8AAAjQAAAogFAQQgHASgDAAQgCAAAAgLg");
	this.shape.setTransform(-1.1,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("AkODfQgDAAAAgEIBuoQQABgEAEABIGtBZQADABAAAEIhuIQQgBADgEAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B6A3A").s().p("ACFEzIl5hOQgUgEgLgRQgLgRAEgUIBcm3QAEgUARgLQARgLAUAEIF5BOQAUAEALARQALARgEAUIhcG3QgEAUgRALQgMAIgOAAIgLgBg");
	this.shape_2.setTransform(2.4,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("ACDEzIl0hOQgVgEgLgRQgLgRAEgUIBcm3QAEgUARgLQARgLAUAEIF1BOQATAEALARQALARgDAUIhbG3QgFAUgRALQgMAIgOAAIgLgBg");
	this.shape_3.setTransform(-2.5,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.7,-31.3,61.6,62.8);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhpBXQgfgEgRgVQgSgWAEghQACgOAJgSQAIgPAIgJQAIgJAEABQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQgBAFgEAGQgRAYgCARQgCATAUAQQARAPAXACQAhAEAegHQAdgIANgRIACgGQACgUgDgOQgBgKgHgPIAAgDQABgHANgVQADgEACAAQAAAAAAAAQABABAAAAQAAABAAAAQABABAAABQAHAeAWACQAMACANgJQAMgIAFgLQAHgOAFABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABIgCAMQgCAOAJAJQAIAIALABQAMABABgGQAAgGgGgMIAAgBIAGgLIAJgNQAEgGACAAQADABACAJQABAJgCANQgDAagOAQQgNAPgSgBQgUgCgLgcQgCAHgKAIQgNALgQgCQgHgBgIgEQgDAcgJARQgGAMgHAIQgIAJgPAKQgaAQgnAAIgZgCg");
	this.shape.setTransform(-0.6,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("AkCDtQgEgBABgEIBToUQAAgEAEABIGxBDQAEABgBAEIhTIUQAAAEgEAAg");
	this.shape_1.setTransform(-0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B6A3A").s().p("ACUEsIl8g7QgUgEgMgQQgMgQADgUIBGm7QADgVAQgMQARgMAUAEIF8A7QAUADAMARQAMAQgDAUIhGG7QgDAUgQAMQgNAKgQAAIgIgBg");
	this.shape_2.setTransform(2.4,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("ACSEsIl4g7QgUgDgMgRQgMgQADgUIBGm7QADgUAQgMQAQgMAVADIF4A7QAUADAMARQAMAQgDAUIhGG7QgDAUgQAMQgNAKgQAAIgIgBg");
	this.shape_3.setTransform(-2.5,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.8,-30.5,59.7,61.1);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6D6D6").p("AiKjBIEVAAQAYAAARARQARARAAAYIAAEPQAAAYgRARQgRARgYAAIkVAAQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAg");
	this.shape.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AiKDCQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAIEUAAQAZAAARARQARARAAAYIAAEPQAAAYgRARQgRARgZAAg");
	this.shape_1.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.027)").s().p("AjkEaIgDAAQgTgCgMgOQgPgOAAgVIAEnSQAAgUAPgPQAPgPAUAAIA2ABIABgBIFZADIABAAIADAAIAuAAQAVABAOAPQAPAPABAUIgFHSQAAAUgPAQQgMANgRABIgDABg");
	this.shape_2.setTransform(-0.4,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhKB1QgWgUgBgiQgBgRAIgTQAFgRAIgKQAFgGADAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAEgDACQgNAdABASQABATAWAPQATALAZgBQAegBAdgNQAhgNAHgUIgBgIQgBgbgOgVIgIgMIAAgDQgBgEADgJIAGgSQABgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQACAAACAEQAWAoABAhQAAAggEAMQgIASgJALQgRARgWALQgcAMgjABQgfgBgSgOgAgChMIgQgLQgJgHgEgFQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAJgNALgMQAEgEABABQALANARAKQABAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgWAcIAAABIgCAAg");
	this.shape_3.setTransform(0,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E5A967").s().p("AjNEDQgNgOgBgVIADnBQAAgUAOgOQAMgMAQgCQAAABAAAAQgBAAAAAAQAAABAAAAQAAABAAAAIgDIdIABACQgPgCgNgMgADPkQIAHAAIAGABg");
	this.shape_4.setTransform(-5,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C99353").s().p("AjcERIgCgBIgCgDIAEocQgBAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAAAAIABAAIADAAIACAAIArAAIGHACQAEAAAAAEIgDIcQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAIgCAAgAhKgKQgHAKgFAPQgIAUABAQQABAjAWATQASAPAfABQAjgBAcgNQAWgKARgRQAJgLAHgTQAFgLAAghQgBghgXgoQgBgEgCAAQgBAAAAAAQAAABgBAAQAAABAAAAQgBABAAABIgGASQgDAIABAEIAAADIAIANQAOAVABAbIAAAHQgGAUghAOQgdAMgeABQgZABgUgLQgWgOAAgUQgBgSANgaQADgEgBgEQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQgDAAgFAIgAgHiMQgMAMgIAOQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAEAEAJAIIAOAKQAAABABAAQAAAAABAAQAAAAABAAQAAgBABAAIAVgcQABgBAAAAQABgBAAAAQAAAAAAgBQgBAAAAAAQgSgLgKgMIgBgBQAAAAgBABQAAAAgBAAQAAAAgBABQAAABgBAAg");
	this.shape_5.setTransform(-0.4,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9B6A3A").s().p("ACtEQIADobQAAgEgEAAImHgCIAFgBIFGACIANAAIAuAAQAVABAOAOQAOAOAAAVIgCHAQgBAVgOAOQgOANgSABQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBg");
	this.shape_6.setTransform(4.4,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#54D6DD").s().p("Ag9CEQAAgUARAAIAEAAQArgBAWgIQARABAAgVQgBgMgFgMQgKATgYAAQgfgBAAgkQAUhLAQAAQA3AvAAAtQgCAtgPAYQgNAMgNAEQgjALgYAAIgEAAIgBAAQgQAAAAgWgAgGAOIgEAJQAFAMAMAAQARgBAAgIQAAgIgIgHQgHgGgHAAIgBAAQgCAAgFAJgAAFhaQgXgPgHgMQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQANgSALgLQACgFABACQAPAQATAMQAAABABAAQAAAAAAABQAAAAAAABQgBAAAAABIgbAfQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAIgDgBg");
	this.shape_7.setTransform(171.2,-1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#54D6DD").s().p("ABZAHQgLAkgfAAQgdgHgDgdQgQAjggAAQgiADgJggQgEAMgLAJQgKAJgdAAIgEAAQgTAAAAgWQAAgUATAAIAFAAQAsAAAPgeQABgGAFAAQADAAABAKQAGAYAbAAQAfABASghQADgHAEAAQADgBAAALIAAAIQAEAVASAAQAYgKAMgXQABgHAFAAQADgDABAPQAEAdAZABIAFAAQAUgBAAAUQABAXgVAAIgFAAIgCAAQghAAgFgkg");
	this.shape_8.setTransform(154.2,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#54D6DD").s().p("AAvBiQglgagDgEQgHAfg7AAIgCAAQgRgFAAgQQAAgVARAAIANAAQAlAKAWgoQAGgKADAAQAEAAAAAOQAFAWAUADIAMABQAQAKAAAJQAIAXgYAAgAgcgjQgSgLgLgPQgDgCAEgEIAZgcQADgEADAFQAQARAJAGIAUgXQAEgFACADQAOARAPAJQAFACgFAEIgZAcQgBAEgEgDIgZgXIgVAWQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgEgBg");
	this.shape_9.setTransform(135.2,3.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#54D6DD").s().p("AgGCOQgTgSgFgnQgEgegBgnQgBhNgJgxIAAgFIADgHIAMgWQAEgGACAAQADgCACAOQgDCDAPBJQACANAFAMQAFAQAUACQAVAAABAUQgCAWgSAAIgEAAIgEAAQgQAAgJgJg");
	this.shape_10.setTransform(126.5,-1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#54D6DD").s().p("AhYCEQgZgaAAglQALg0APgTQAGgIADAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAABIgEAHQgQAYAAAdQAEAZAVAPQAXAOAcAAQBhgDATgwIAAgIQgBgigPgWIgJgQIAAgDIADgPIAIgUIAEgEQACABABAEQAYAlAAAwQgBAmgGANQgGATgNAOQgQARgfANQgeANgsAAIgFAAQgcAAgWgUgAABhYQgXgPgHgMQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQANgSAKgLQAFgEABABQANAQATAMQAAAAABABQAAAAAAABQAAAAgBABQAAAAAAABIgbAfQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_11.setTransform(106.1,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.3,-28.1,57.7,57.4);
p.frameBounds = [rect, new cjs.Rectangle(-27,-26.9,53.6,55.2), new cjs.Rectangle(94.6,-17.4,82.9,34.3)];


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6D6D6").p("AEbjDIAAGHQAAAigYAYQgZAZgjAAImOAAQgjAAgYgZQgYgYAAgiIAAmHQAAgiAYgZQAYgYAjAAIGOAAQAjAAAZAYQAYAZAAAig");
	this.shape.setTransform(-1.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AjHEXQgjAAgYgZQgYgYAAgjIAAmFQAAgjAYgZQAYgXAjAAIGOAAQAjAAAZAXQAYAZAAAjIAAGFQAAAjgYAYQgZAZgjAAg");
	this.shape_1.setTransform(-1.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIB4QACgbgDhVQgEhTAAgIQABgPAOgYQAFgIADAAQACAAgBAOIACBPQABA7gCAkQgCAogHAPQgGASgDAAQgDAAABgLg");
	this.shape_2.setTransform(-2,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("AADERQgSAAgOgOQgPgOAAgVIACnAQAAgUAPgOQAMgNAPgCIgBADIgCIbQABAEACAAIAqAAIADABg");
	this.shape_3.setTransform(-24.4,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C99353").s().p("ADZETIlzgCIgWAAIgrgBQgDAAgBgEIACoaIABgDIADgBIG2ABIACABIABADIgCIcQAAADgEABIgBAAg");
	this.shape_4.setTransform(-2.3,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B6A3A").s().p("ACxEOIACocIgBgDQASABANANQAOAPAAAVIgCHAQAAAUgOAOQgOAOgUABQAEgBAAgDgAjVEQIgGAAIgDAAIAWAAg");
	this.shape_5.setTransform(2.1,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.027)").s().p("AjkEaIgDAAQgTgCgMgOQgPgOAAgVIAEnSQAAgUAPgPQAPgPAUAAIA2ABIABgBIFZADIABAAIADAAIAuAAQAVABAOAPQAPAPABAUIgFHSQAAAUgPAQQgMANgRABIgDABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.3,-28.6,58.2,57.3);
p.frameBounds = [rect, new cjs.Rectangle(-28.9,-28.6,56.8,57.3), new cjs.Rectangle(0,0,0,0)];


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6D6D6").p("AiKjBIEVAAQAYAAARARQARARAAAYIAAEPQAAAYgRARQgRARgYAAIkVAAQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAg");
	this.shape.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AiKDCQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAIEUAAQAZAAARARQARARAAAYIAAEPQAAAYgRARQgRARgZAAg");
	this.shape_1.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBfQg0AAgcgMQgRgIgJgLQgIgMAAgUQABgZANgVQAGgJAEAAQABAAABAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAADgDAHQgHAOABAKQAAAHAFAIQAIALAQAHQAaAMAwgBQAyABA4gMQAzgLACgIIABgHQAAgKgHgLIgLgSIgBgBQAAgFAGgNQAHgMADgBQAEABAIAQQAIATAAASQgBAhgOATQgIAMg0AOQg4AOgwAAIgEAAgAAZgpIgYgUQgMAQgEADQgEADgCgCQgRgKgIgMQgCgDADgCQAJgMANgNQACgCADADQANAOAIAGIARgUQAEgEACADQASASAHAEIACADIgCACIgWAZQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgCgBg");
	this.shape_2.setTransform(0.6,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9B6A3A").s().p("AgQEOIgDoaQAAgDgDgBQARABALANQAPAOAAAUIACHAQAAAVgOAOQgJAMgQACIAAgDg");
	this.shape_3.setTransform(24.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C99353").s().p("AjbETQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIgDoaQAAgEAEAAIGxgDIAFAAQADABAAADIADIaIAAADIgDABIm2ADIgCAAgAiCgGQgNAUgBAaQAAAUAJAMQAIALASAHQAcANA0AAQAyAAA5gPQA0gOAJgLQAOgUAAggQAAgSgIgTQgHgRgFAAQgDAAgGANQgGANgBAEIABABIALAQQAHANAAALIgBAGQgCAJgzAKQg4AMgyAAQgwAAgagLQgQgHgHgLQgGgIAAgIQAAgKAGgNQADgHAAgDQABgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQgEAAgHAKgAAdghQADACACgDIAVgYIACgDIgCgCQgHgFgSgSQgBgCgEAEIgSATQgIgFgNgPQgCgDgDACQgNANgJAMQgDADACACQAJAMAQAKQACACAEgCQAEgDAMgQIAYAUg");
	this.shape_4.setTransform(0.1,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5A967").s().p("AgeEDQgOgOAAgUIgBnBQgBgTAPgQQAOgOATABIAsAAIgEAAIgrAAQgEAAABADIABIbIABAEQgQgDgMgMg");
	this.shape_5.setTransform(-21.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.027)").s().p("AjkEaIgDAAQgTgCgMgOQgPgOAAgVIAEnSQAAgUAPgPQAPgPAUAAIA2ABIABgBIFZADIABAAIADAAIAuAAQAVABAOAPQAPAPABAUIgFHSQAAAUgPAQQgMANgRABIgDABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.3,-28.6,58.2,57.3);
p.frameBounds = [rect, new cjs.Rectangle(-27.7,-28.6,55.7,57.3), new cjs.Rectangle(0,0,0,0)];


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6D6D6").p("AiKjBIEVAAQAYAAARARQARARAAAYIAAEPQAAAYgRARQgRARgYAAIkVAAQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAg");
	this.shape.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AiKDCQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAIEUAAQAZAAARARQARARAAAYIAAEPQAAAYgRARQgRARgZAAg");
	this.shape_1.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5A967").s().p("AgeEDQgPgNAAgVIAAnAQgBgVAPgOQAOgOASgBIAtAAIgFABIgqAAQgFAAABAEIABIbIABACQgQgCgLgMg");
	this.shape_2.setTransform(-22,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiKBbQgVgUgBggQgBgRAGgSQAGgPAHgLQAGgJAEAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAFgDAGQgNAZABAQQABAWAWANQAUAMAWgBQAigCAcgMQAcgNAKgSIABgHQgBgTgFgNQgDgLgJgNIgBgDQAAgHAKgXQACgFABAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABQAMAcAWgBQAMAAAMgKQALgKADgNQAEgOAGAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAABIAAAMQAAAOALAHQAIAHAMAAQALgBAAgHQAAgGgIgKIAAgCIAEgLIAHgOQADgHACAAQADAAADAJQADAJAAAMQABAbgLASQgLASgSAAQgUABgPgZQgBAHgJAJQgLANgQAAIgPgBQABAcgGARQgEANgFAJQgIALgNALQgfAag3ADIgEAAQgdAAgTgRg");
	this.shape_3.setTransform(-0.6,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C99353").s().p("AjdERIgBgCIgBobQgBgEAFAAIAsAAIA5gBIFRgBQABABABAAQAAAAABABQAAAAAAABQAAABAAAAIACIcQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABIgCAAIm3ABIgDgBgAiIgFQgEAAgGAHQgHALgGARQgGASABARQABAgAVAUQAUASAggCQA3gCAggaQAMgLAIgLQAFgJAEgNQAGgRgBgfIAPACQAQAAALgNQAJgHABgIQAPAYAUgBQASAAALgQQALgSgBgbQAAgNgDgJQgDgIgDgBQgCABgDAGIgHAPIgEALIAAABQAIALAAAGQAAAHgLABQgMgBgIgGQgLgIAAgNIAAgNQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgGgBgEAPQgDAMgLAKQgMALgMAAQgWABgMgdQAAAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAgCAEQgIAYAAAHIAAADQAIANADAJQAFAMABAWIgBAGQgKATgcANQgcAMgiABQgWACgUgMQgWgOgBgVQgBgQANgbQADgGAAgDQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIAAAAg");
	this.shape_4.setTransform(-0.2,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B6A3A").s().p("ACyEPIgCocQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBAAgBgBQAUABAOAOQAOAOAAAUIABHBQAAAUgOAOQgNANgSACQAAgBAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAgAjYkQIACAAIABAAIAxAAIg5ABIAFgBg");
	this.shape_5.setTransform(4.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.027)").s().p("AjkEaIgDAAQgTgCgMgOQgPgOAAgVIAEnSQAAgUAPgPQAPgPAUAAIA2ABIABgBIFZADIABAAIADAAIAuAAQAVABAOAPQAPAPABAUIgFHSQAAAUgPAQQgMANgRABIgDABg");
	this.shape_6.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.3,-28.6,58,57.3);
p.frameBounds = [rect, new cjs.Rectangle(-28,-28.6,55.7,57.3), new cjs.Rectangle(0,0,0,0)];


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6D6D6").p("AiKjBIEVAAQAYAAARARQARARAAAYIAAEPQAAAYgRARQgRARgYAAIkVAAQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAg");
	this.shape.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AiKDCQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAIEUAAQAZAAARARQARARAAAYIAAEPQAAAYgRARQgRARgZAAg");
	this.shape_1.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglB6Qg9gDgdgUQgbgTACgfQABgMAFgOQAGgRAIgJQAGgJADABQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIgDAIIgGAPQgEAKAAAFQgBASAVAPQAcAVA1ADQAnACAvgFQAngEAagHQALgEACgDQACgCAAgJQABgJgEgMQgDAGgIAEQgJAFgJgBQgdgBACgfQAAgTAOgXQANgWAJABQASAAANAcQAOAZgCAhIgEAUQgEAPgEAJQgEAIgDAEIgNAHQgZAKgpAGQglAGggABIgXgBgABbgCIgBACIABAAQACAKANAAQAKABAFgGIABgCQAAgDgEgFQgFgJgKAAQgIAAgEAMgAAzhDQgHgEgIgIIgMgMQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAKgNAMgLQAEgDABABQAPAQANAKQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAIgZAaIgBABIgCgBg");
	this.shape_2.setTransform(-1.1,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("ADXEVIgCAAIgGAAIAOAAIgFAAgAjOD/QgPgQABgTIAJnAQABgVAPgPQANgMASAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIgKIbQAAAEADAAQgTAAgOgOg");
	this.shape_3.setTransform(-4.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C99353").s().p("ADWEWIgsgBIgPAAIl7gHQgDgBAAgEIAKobQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIACgBIG2AIIADABIAAADIgKIbQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAIgBAAg");
	this.shape_4.setTransform(0.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B6A3A").s().p("AgFERIguAAIAGgBIAsABQABAAABgEIAKobIAAgDQAPADAMAMQAOAPgBAUIgIHAQgBAVgOAOQgOAOgSAAIgBgBg");
	this.shape_5.setTransform(22.3,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.027)").s().p("AjkEaIgDAAQgTgCgMgOQgPgOAAgVIAEnSQAAgUAPgPQAPgPAUAAIA2ABIABgBIFZADIABAAIADAAIAuAAQAVABAOAPQAPAPABAUIgFHSQAAAUgPAQQgMANgRABIgDABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.3,-28.6,58.2,57.3);
p.frameBounds = [rect, new cjs.Rectangle(-27.7,-28.6,55.7,57.3), new cjs.Rectangle(0,0,0,0)];


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbB1QgSgTgEgKQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAKgKAQgKQAEgDABACQAJAQAMAOQAAAAABAAQAAABAAAAQgBABAAAAQAAAAgBABIgaAVIgCABIgCgBgAgxASQgxgLgagQQgQgLgGgMQgGgOAFgUQACgMAIgOQAHgLAGgGQAIgJAEABQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAIgGAKQgJALgCAMQgEAUAZATQAWAQAwAKQAxALA5AAQA0AAAEgHIACgGQACgLgEgOIgHgUIAAgBQABgEAJgLQAJgMADABQAEABAEASQAEAUgFAUQgHAfgRAPQgLAJg2ADIgVAAQguAAgpgJg");
	this.shape.setTransform(0.4,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("ACfE3ImshYQgDgCAAgDIBuoOQABgDADAAIGsBaQAEAAgBADIhuIPQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgBgBg");
	this.shape_1.setTransform(0.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5A967").s().p("ACFEyIl4hOQgUgEgLgRQgLgRAEgUIBcm1QAEgUARgLQAQgLAUAEIF4BOQAUAEALARQALARgEAUIhbG1QgEAUgRALQgNAIgOAAIgKgBg");
	this.shape_2.setTransform(-2.3,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9B6A3A").s().p("ACDEyIl0hNQgUgEgLgRQgLgRAEgUIBbm2QAEgUARgLQARgLAUAEIF0BOQAUAEALARQALAQgEAUIhcG2QgDAUgRALQgNAIgOAAIgKgBg");
	this.shape_3.setTransform(2.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.6,-31.2,61.4,62.6);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBnQgMgJgCgPQgDgVAOgkQANgiAJgBQAKgCAOAJQAaAPADAbQACAQgDARQgEASgMALQgLALgSACIgGAAQgLAAgJgIgAABAcIgCACQgHAGgEAKQgEAIABAGQABAGAIAEQAGAEAJgBQAHgBAJgEQALgFADgGIABgCIgBgCQgHgLgKgHQgKgHgJAAIgCAAgAgagzQgQgHgLgMQgDgCACgDQAKgRAJgKQABgBAAAAQABAAAAAAQABAAABAAQAAAAABABQANALANAGIANgWQADgEACABQAPANANAHQADABgDAEIgSAbQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQgMgGgLgLQgKAQgGAGIgEABIgCAAg");
	this.shape.setTransform(-0.8,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("Ai4EoIhHoVQAAgDADgBIGxg5QADgBABAEIBHIUQAAAEgDABImxA5IgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape_1.setTransform(-0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B6A3A").s().p("Ai+EeQgQgMgDgUIg6m7QgDgUAMgQQANgRATgCIF9gzQAUgCAQAMQAQAMADAUIA6G7QADAVgMAQQgNAQgTACIl9AzIgGAAQgRAAgNgKg");
	this.shape_2.setTransform(2.4,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("Ai8EeQgQgMgDgUIg7m7QgCgUAMgRQAMgQAUgCIF4gyQAUgDARAMQAQAMACAVIA7G7QADAUgMAQQgNAQgUADIl4AyIgGAAQgQAAgOgKg");
	this.shape_3.setTransform(-2.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.3,-30,58.7,60.1);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBeQgLgBgTgHQgTgIgOgJQgFgEAAgCQABgDAEABIAdAGQAOABAWgHQAOgFAUgPQAYgRAIgQIADgJQAAgSgLgVIgKgVIgBgEQABgIALgSQABgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAFABAHASQAHARADASQACALgCAUQgFAmgVAcQgVAcgfAJIgFABIgFgBg");
	this.shape.setTransform(-2.2,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("ACuEvImvhDQgEgBAAgDIBUoTQAAgEAEABIGvBDQAEAAgBAEIhTITQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B6A3A").s().p("ACUErIl7g7QgUgDgMgRQgMgQADgUIBGm6QACgUARgMQAQgMAUAEIF7A7QAUADAMARQAMAQgDAUIhGG5QgCAUgRAMQgNAKgPAAIgIgBg");
	this.shape_2.setTransform(2.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("ACSErIl3g7QgUgDgMgQQgMgQADgUIBFm6QADgUARgMQAQgMAUADIF3A7QAUADAMARQAMAQgDAUIhGG5QgDAUgQAMQgNAKgPAAIgIgBg");
	this.shape_3.setTransform(-2.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.7,-30.4,59.6,60.9);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhOCKQgXgTAAgiQAAghAQgcQAGgKAEAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABQAAAEgCAGQgLAXgBARQABAWAUAPQATAOAXAAQAgAAAhgOQAjgOAKgVQABgEAAgIQAAgLgDgPQgCgNgDgFQgGAUgVAAQgPAAgIgKQgHgJAAgOQABgSAMgWQAMgWAMAAQARAAANAdQANAcAAAkQAAApgNAZQgMAYgfAQQggARgkAAQgjgBgVgPgAAqgUQgEAEAAAEQAAALAPAAQAGAAAFgCQAEgCAAgDQAAgFgEgGQgFgGgFAAQgGAAgGAFgAAOhjQgOgMgIgLQgCgCACgDQAIgLAMgOQADgCACADQAOAPAJAFIASgTQAEgEABACQASASAHAFQABAAAAABQABAAAAABQAAAAgBABQAAABgBABIgVAYQgCACgDgBIgXgUIgSATQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgDAAg");
	this.shape.setTransform(-0.8,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("AkBDsQgEAAABgEIBToTQABgEADABIGvBDQAEABAAAEIhUISQAAAEgEAAg");
	this.shape_1.setTransform(0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5A967").s().p("ACUErIl7g7QgUgDgMgRQgMgQADgUIBFm6QADgUARgMQAQgMAUAEIF7A7QAUADAMARQAMAQgDAUIhFG5QgEAUgQAMQgNAKgPAAIgIgBg");
	this.shape_2.setTransform(-2.3,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9B6A3A").s().p("ACSErIl3g7QgUgDgMgQQgMgQADgVIBGm5QADgUAQgMQAQgMAUADIF3A7QAUADAMAQQAMARgDAUIhFG5QgDAUgRAMQgNAKgOAAIgJgBg");
	this.shape_3.setTransform(2.5,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.7,-30.4,59.6,60.9);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiOBTQgUgUAAggQAAgRAHgQQAGgRAHgKQAGgJAEAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAADgEAHQgOAZAAAQQAAAVAWAOQATANAWAAQAiAAAdgLQAdgMAKgSIABgGQgBgUgEgNQgCgKgIgOIgBgDQAAgIAKgWQACgEADAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAABABQALAdAVAAQAMAAAMgJQALgKAEgMQAFgOAGAAQAAAAABAAQAAAAAAABQAAAAABABQAAABAAABIgBAMQAAAOAKAIQAJAHALAAQAMAAAAgHQAAgEgIgNIAAgBQAAgCAFgJQAEgKADgFQAEgGABAAQAEAAACAKQACAJAAAMQAAAagMASQgLASgSAAQgWAAgMgbQgCAHgJAJQgMAMgQAAQgIAAgHgCQAAAcgGASQgEAMgHAJQgIAKgNALQgiAZg2AAQgfAAgTgUg");
	this.shape.setTransform(0,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("AjlEIQgEAAABgEIAVoZQAAgDAEgBIG1ASQABABAAAAQABAAAAAAQABABAAAAQAAABAAABIgWIZQAAAEgEAAg");
	this.shape_1.setTransform(-0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B6A3A").s().p("AC1EYIl/gPQgUgBgOgPQgOgPABgUIASm/QABgUAPgOQAPgNAUAAIF/AQQAVABANAPQAOAPgBAUIgSG+QgBAUgPAOQgOAOgSAAIgDgBg");
	this.shape_2.setTransform(2.4,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("ACzEYIl7gPQgUgBgOgPQgOgPABgUIASm/QABgUAPgOQAPgNAUAAIF7AQQAVABANAPQAOAPgBAUIgSG+QgBAUgPAOQgOAOgTAAIgCgBg");
	this.shape_3.setTransform(-2.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.4,-28.2,54.9,56.5);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAB5QAAgcgHhVQgJhSAAgJQAAgNAOgaQACgIADAAQADAAAAAMIAGBQQAFA7AAAlQAAAmgFARQgGASgEAAQgCAAAAgKg");
	this.shape.setTransform(-2.1,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("ACfE4ImshZQgEgBABgEIBuoOQABgEADABIGsBZQAEABgBAEIhuIOQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAIgBAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B6A3A").s().p("ACFEyIl4hOQgUgEgLgRQgLgRAEgUIBbm1QAEgUARgLQARgLAUAEIF4BOQAUAEALARQALARgEAUIhcG2QgEATgRALQgMAIgOAAIgKgBg");
	this.shape_2.setTransform(2.4,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("ACDEyIl0hNQgUgEgLgRQgLgRAEgUIBcm2QAEgUAQgLQARgLAUAEIF0BOQAUAEALARQALAQgEAUIhbG2QgEAUgRALQgNAIgOAAIgKgBg");
	this.shape_3.setTransform(-2.4,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.6,-31.2,61.4,62.6);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6D6D6").p("AiKjBIEVAAQAYAAARARQARARAAAYIAAEPQAAAYgRARQgRARgYAAIkVAAQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAg");
	this.shape.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AiKDCQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAIEUAAQAZAAARARQARARAAAYIAAEPQAAAYgRARQgRARgZAAg");
	this.shape_1.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.027)").s().p("AjkEaIgDAAQgTgCgMgOQgPgOAAgVIAEnSQAAgUAPgPQAPgPAUAAIA2ABIABgBIFZADIABAAIADAAIAuAAQAVABAOAPQAPAPABAUIgFHSQAAAUgPAQQgMANgRABIgDABg");
	this.shape_2.setTransform(-0.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("AggEDQgOgPAAgVIADm+QAAgVAPgOQAOgOATAAIAqAAIgDABIgsAAQgBAAgBADIgEIaIACADQgQgDgMgLg");
	this.shape_3.setTransform(-24.3,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBuQgQAAgLgMQgJgLAAgPQAAgUASgjQASggAKABQAJgBANALQAXATAAAbQgBARgFAQQgHAQgNAKQgMAJgPAAIgCAAgAAKBGQALgDAFgGIABgCIgBgCQgGgMgIgIQgKgKgIgBIgEACQgIAFgGAJQgFAIAAAGQABAGAHAFQAHAFAKAAQAFAAAJgCgAAWg3QgLgIgLgMQgKAOgHAFQgEACgCgCQgPgJgKgNQgCgDACgDQANgOAKgJQACgDADADQALAOAKAHIASgUQAEgEACACQAMAPAMAJQAAAAABAAQAAABAAABQAAAAAAABQgBABAAABIgWAXIgCABIgDAAg");
	this.shape_4.setTransform(-3.1,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C99353").s().p("AjbEQQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAgBIgCgDIAEoZQABgDADAAIAsAAIGIACQAEABABADIgEIZQAAABAAABQAAAAAAABQgBAAAAAAQAAAAgBABIgCABgAgiAsQgSAiAAAVQAAAPAJALQALAMAQAAQAQAAANgJQANgKAHgQQAFgRABgRQAAgagXgVQgNgLgIABIgBgBQgKAAgSAigAAQgdQADADACgDIAWgYQAAAAABgBQAAgBAAgBQAAAAAAgBQgBAAAAAAQgMgJgMgPQgCgCgEADIgQAVQgMgIgLgNQgDgDgCACQgKAKgNAOQgCADACACQAKAOAPAJQACACAEgCQAHgFALgOQAKAMALAHgAgKBiQgKABgHgFQgHgGgBgFQAAgGAFgIQAGgJAIgGIAEgBQAKABAIAJQAIAJAGAMIABACIgBACQgFAFgLAEIgLACIgDgBg");
	this.shape_5.setTransform(-2.5,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9B6A3A").s().p("ACuEPIADoZQAAgEgEAAImIgCIACgBIAGAAIF/ADQAVAAAOAOQAOAPgBAUIgCG/QgBAUgOAOQgNAOgSAAQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAABgBg");
	this.shape_6.setTransform(2.2,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#54D6DD").s().p("AAYBsQgYgPgGgMQAAAAAAAAQgBAAAAgBQAAgBABAAQAAgBAAgBQALgSALgLQAEgEACABQAOAQATAMQABABAAAAQABABAAAAQAAAAgBABQAAAAgBABIgaAfQAAAAgBABQAAAAAAAAQAAAAgBAAQAAABAAAAIgDgCgAg4AGQAAgTASAAIAKAAQApAEAQgQQgLgggJgNIAAgBQAAgHANgcIACgDQAWANAAA0QADAbgPASQgJATglAGIgaABQgSgFAAgQg");
	this.shape_7.setTransform(131.7,2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#54D6DD").s().p("AhbBvQAAgUASAAIADAAQAZAAAHgHIgCgOQAhhdAoAAQAYAHAAAfQAAArgcAaQANAHAbAAIAFAAQASAAAAAVQAAAVgSAAIgGAAQg3gDgXgPQgXASglAAIgEAAIgBAAQgQAAAAgWgAgOApQgCAMAWAOQAbgPAAgKQACgYgVAAQgcAMAAALgAAehGIgagXQgMASgHAEQgCAEgFgDQgSgLgLgPQgDgBADgFIAagcQACgDAEAEQAQARAIAGIAVgXQADgFADADQAPAQAOALQAEABgEAEIgZAdQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgEgBg");
	this.shape_8.setTransform(121.3,-7.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#54D6DD").s().p("AhkBQQgHgEAAgDQAAgEAHAAIAXABQBugeALg8IgYgiIgBgFQAFgaAGgJQADgEACAAQADgBAIAOQAIAQAaAAIAIAAQAUgBAAAVQAAAWgUAAIgdgCIAAAGQAAAWgHAPQgCAzg+AdQgLAFgMAAQghgEgggPg");
	this.shape_9.setTransform(105.3,8.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#54D6DD").s().p("Ag0BVQAdhlAXAAQANABANALQAbASAAAiQABATgHAUQgQAogoAAQgrgIAAgigAgKAhQgVAUAAAMQAGATAWAAQAZAAAKgOIABgCIgBgDQgPgigXAAIgEACgAgbhAQgRgLgMgOQgDgCAEgEIAZgdQADgDADAEQAQARAJAGIAUgXQAEgFADADQAOARAOAKQAFABgFAFIgZAcQgBADgEgDQgNgJgNgNIgUAWQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAIgEgCg");
	this.shape_10.setTransform(94.1,-7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.3,-28.6,57.7,57.3);
p.frameBounds = [rect, new cjs.Rectangle(-29.1,-27.6,53.5,55.1), new cjs.Rectangle(88.3,-21.2,49.1,39.6)];


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6D6D6").p("AiKjBIEVAAQAYAAARARQARARAAAYIAAEPQAAAYgRARQgRARgYAAIkVAAQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAg");
	this.shape.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AiKDCQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAIEUAAQAZAAARARQARARAAAYIAAEPQAAAYgRARQgRARgZAAg");
	this.shape_1.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5A967").s().p("AgfEDQgOgOAAgUIgBnAQAAgUAOgOQAPgPASABIAuAAIgGABIgqgBQgFAAABAEIABIaIABACQgPgCgNgMg");
	this.shape_2.setTransform(-22.4,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeBfQgUgEgPgHQgFgEgBgCQABgDAEAAIAeACQANgBAVgLQANgHASgSQAUgUAGgRIACgKQgDgSgPgTIgNgTIgCgEQAAgHAIgVQADgDABAAQAFAAAKARQAKAPAGASQAEAKABAUQABAngRAfQgQAfgeANQgEACgGAAIgDABQgKAAgRgEg");
	this.shape_3.setTransform(-2.1,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C99353").s().p("AjcEQIgBgCIgBoZQgBgEAFAAIAsAAIGJgBQAEgBgBAEIACIaIgBADIgDAAIm1ACIgDgCgAhUBmQAAADAFADQAPAHAVAEQAUAFALgBQAGAAAEgCQAdgOAQgfQARgfgCgoQgBgSgEgLQgFgRgKgQQgKgRgFABQgCAAgCADQgIAUAAAHIABAEIANAUQAPASADARIgCALQgFARgVAVQgQARgOAIQgVAKgOABIgdgBIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAABg");
	this.shape_4.setTransform(-0.7,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B6A3A").s().p("ACyEOIgCoZQABgFgEABImJACIAFgBIABAAIACgBIAEABIF7gCQAUAAAPAPQAPAOAAAUIAAG/QAAAUgOAOQgNAOgRABIABgDg");
	this.shape_5.setTransform(3.8,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.027)").s().p("AjkEaIgDAAQgTgCgMgOQgPgOAAgVIAEnSQAAgUAPgPQAPgPAUAAIA2ABIABgBIFZADIABAAIADAAIAuAAQAVABAOAPQAPAPABAUIgFHSQAAAUgPAQQgMANgRABIgDABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.3,-28.6,58.2,57.3);
p.frameBounds = [rect, new cjs.Rectangle(-27.8,-28.6,55.7,57.3), new cjs.Rectangle(0,0,0,0)];


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6D6D6").p("AiKjBIEVAAQAYAAARARQARARAAAYIAAEPQAAAYgRARQgRARgYAAIkVAAQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAg");
	this.shape.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AiKDCQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAIEUAAQAZAAARARQARARAAAYIAAEPQAAAYgRARQgRARgZAAg");
	this.shape_1.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5A967").s().p("AjNECQgOgOAAgUIgBm/QAAgUAOgPQANgNASgBIgBADIABIaQAAAEAEgBIGIgBIgCABIgFAAImAABIgBAAQgTAAgPgPg");
	this.shape_2.setTransform(-4.4,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhACXQgagPgGgiQgFghALgeQAFgKAEgBQABAAAAAAQAAAAABAAQAAABAAAAQAAABABAAQAAAEgBAHQgHAYACASQAEAVAVAMQAWALAXgEQAggFAegTQAggUAGgWQABgEgBgIQgCgLgFgOQgFgNgDgEQgDAVgVADQgOACgKgIQgIgIgDgOQgCgSAJgXQAIgZALgBQASgDASAbQAQAaAGAjQAGApgIAaQgIAagcAUQgeAXgjAFIgSABQgXAAgQgIgAAngfQgFABgFAGQgEAFABADQACAMAPgDQAFAAAFgDQAEgDgBgDQAAgFgGgFQgFgFgFAAIgBAAgAgJhiQgSgJgKgJQgCgCACgDIARgdQADgDADAEQAOAMAKAEQAKgSAEgEQADgEACABQAVAPAIAEQADABgDAEIgRAbQgCADgDgBIgagQIgNAVQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAAAAAIgCAAg");
	this.shape_3.setTransform(0,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C99353").s().p("AjdEOIgBoaIABgDIADgBIG0gBIADABIABADIABIZQAAABAAABQAAABAAAAQgBABAAAAQgBAAgBAAIgtAAImIABIgBABQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBgAhSAYQgEABgFAKQgLAeAFAhQAFAiAaAPQAXAMAjgFQAjgFAegXQAbgUAIgaQAJgagHgpQgGgjgQgaQgSgbgRADQgMABgIAZQgJAXADASQACAOAJAIQAJAIAPgCQAUgDAEgUQADADAEANQAGAOABALQACAIgBAEQgGAWghAUQgeATggAFQgXAEgVgLQgWgMgEgVQgCgSAHgYQACgHgBgEQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgBAAgAgViaIgSAdQgCADADACQAJAJASAJQAEACADgEIANgVIAZAQQADABACgDIASgbQACgEgDgBQgIgEgVgPQgBgBgEAEQgEAEgKASQgIgEgQgMQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAIgCABgAAYgUQAAgDAEgFQAEgGAGgBQAFgBAGAGQAFAFABAFQAAADgEADQgEADgGAAIgFABQgKAAgCgKg");
	this.shape_4.setTransform(0.1,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B6A3A").s().p("AgsERIACgBIArAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAgBIgBoZIgBgDQAQACAMAMQAOAPAAAUIABG/QAAAUgOAOQgPAPgSAAg");
	this.shape_5.setTransform(22,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.027)").s().p("AjkEaIgDAAQgTgCgMgOQgPgOAAgVIAEnSQAAgUAPgPQAPgPAUAAIA2ABIABgBIFZADIABAAIADAAIAuAAQAVABAOAPQAPAPABAUIgFHSQAAAUgPAQQgMANgRABIgDABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.3,-28.6,58.2,57.3);
p.frameBounds = [rect, new cjs.Rectangle(-27.8,-28.6,55.7,57.3), new cjs.Rectangle(0,0,0,0)];


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6D6D6").p("AiKjBIEVAAQAYAAARARQARARAAAYIAAEPQAAAYgRARQgRARgYAAIkVAAQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAg");
	this.shape.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AiKDCQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAIEUAAQAZAAARARQARARAAAYIAAEPQAAAYgRARQgRARgZAAg");
	this.shape_1.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPB6QgUgNgHgJQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAGgNALgNQADgEACABQANAOARAJQAAABABAAQAAAAAAABQAAAAAAAAQAAABgBAAIgWAcIgCACIgCgBgAhuAYQgTgHgIgKQgJgKgBgUQgBgNAEgPIAIgUQAGgKAFAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIgCALQgGANABAMQABAUAdAMQAZAKAxgDQAzgCA3gPQAygOACgHIAAgHQgBgLgHgMIgMgSIAAgBQAAgEAFgNQAGgOADAAQAFAAAIARQAJASABAUQABAhgNAUQgIAMgzAOQg5ASgyACIgTABQglAAgYgJg");
	this.shape_2.setTransform(0,6.3,1,1,5.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("AjGEIIgGgGQgPgOAAgUIgBm/QAAgUAPgPIAHgGQAKgHANgBIgBADIABIaQAAAEAEgBIGIgBIgCABIgGAAIl+ABIgCAAQgPAAgMgJg");
	this.shape_3.setTransform(-3.4,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C99353").s().p("AjdEOIgBoaIABgDIADgBIG0gBIADABIABADIABIZQAAABAAABQAAABAAAAQgBABAAAAQgBAAgBAAIgtAAImIABIgBABQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBg");
	this.shape_4.setTransform(1.2,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B6A3A").s().p("AgsERIACgBIArAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAgBIgBoZIgBgDQAQACAMAMQAOAPAAAUIABG/QAAAUgOAOQgPAPgSAAg");
	this.shape_5.setTransform(23.1,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.027)").s().p("AjkEaIgDAAQgTgCgMgOQgPgOAAgVIAEnSQAAgUAPgPQAPgPAUAAIA2ABIABgBIFZADIABAAIADAAIAuAAQAVABAOAPQAPAPABAUIgFHSQAAAUgPAQQgMANgRABIgDABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.3,-28.6,58.2,57.3);
p.frameBounds = [rect, new cjs.Rectangle(-27.7,-28.6,55.7,57.3), new cjs.Rectangle(0,0,0,0)];


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3CBQgKgBgVgJQgXgKgLgLQgEgDAAgDQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAIAWAEQAXACANAAIAQgBQAQgQAUgQIABgTQgBgegDgaIgIg0IgDgNIgDgOIAAgEIAAgDIAGgNQAHgRAFAAQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAEAOAHAPIACADIgBADQgDAIgEAKQAFA6AAAaQAAAagDASQA3gvAZAAQAPAAAPAJQAQAJAAAMQAAAHgFAOQgGAQgIAKQgQAUg1ANQgqAKgnAAgAgbBeQAqgDArgLQAigKAKgHIABgBIAAgCQgHgFgOgGQgOgFgKgBQgdABg4Ayg");
	this.shape.setTransform(0,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("AjyEXQgEgBAAgDIAXo5QABgDADAAIHPASQADACAAADIgXI5QAAADgEAAg");
	this.shape_1.setTransform(-0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B6A3A").s().p("ADAEpImWgRQgWAAgOgQQgPgQABgWIATnZQABgVAQgPQAQgOAVABIGWAQQAWABAOAQQAPAQgBAVIgUHZQAAAWgQAOQgPAOgUAAIgCAAg");
	this.shape_2.setTransform(2.5,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("AC9EpImRgQQgWgBgOgQQgOgQABgVIASnZQABgWAQgOQAQgOAWAAIGRARQAVABAPAPQAOAQgBAVIgTHZQAAAWgRAOQgOAOgUAAIgDAAg");
	this.shape_3.setTransform(-2.7,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29,-29.8,58.1,59.8);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUBiQgYgGgigZQgHgEABgDQAAgDAHABIALAEQAKAEAHABQATAFAjgOQAygTAHggQADgIgEgOQgLAPgSgCQgPgEgGgKQgHgLAEgQQACgNAPgSQAWgaAMADQAIACAHALQAHAMADAQQACAVgGAdQgKAugVAZQgXAbgjAGIgDAAIgIAAgAAgg7QgEAEgBADQgBAEAFAFQAFAEAHABQAKACADgGQABgIgFgHQgEgGgEgBIgCAAQgFAAgFAFg");
	this.shape.setTransform(-2.3,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("ACoFKInFhfQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgBgDIB0otQABgEAEABIHFBeQAEABgBAEIh0ItQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAIgCAAg");
	this.shape_1.setTransform(0.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5A967").s().p("ACNFEImOhSQgVgFgMgSQgLgSAEgVIBgnPQAFgVASgMQASgMAVAFIGNBTQAVAEAMASQAMASgFAVIhgHPQgEAVgSAMQgNAIgPAAIgLgBg");
	this.shape_2.setTransform(-2.4,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9B6A3A").s().p("ACKFEImJhSQgVgFgMgRQgLgSAEgVIBgnPQAFgVASgMQARgMAVAEIGKBSQAVAEAMATQALARgEAWIhgHPQgFAUgSAMQgNAJgPAAIgLgBg");
	this.shape_3.setTransform(2.7,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.4,-33.1,65,66.3);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiACwQgXgRgEggQgCgQAFgUQAEgRAGgLQAFgJAEgBQAAgBABAAQAAAAABABQAAAAAAAAQAAABAAABQABADgDAIQgKAbACASQADAVAXALQAUAKAXgDQAhgEAbgPQAbgPAIgUQABgCgBgEQgDgWgFgMQgEgKgKgNIgBgDQAAgJAGgVQACgDACAAQABAAAAAAQAAAAABAAQAAABABAAQAAABAAABQAPAaAVgEQANgBAKgLQAKgKACgLQAEgPAFgBQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABIABAMQACAMALAGQAJAGALgBQAMgCgBgGQAAgEgJgKIAAgBQgBgCAEgKIAFgPQADgHABAAQAEAAADAJQAEAIABAMQAEAZgKATQgJATgSACQgVACgQgYQgBAHgHAKQgLAOgQACQgIABgHgCQADAegDATQgDANgFAIQgHAMgNANQgdAcg1AHIgMABQgXAAgSgOgAA3g7QgQgIgMgLQgCgCACgDIATgcQACgCADADQAPAMAKAEIAPgVQADgFADACQASAPAJAFQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIgCADQgMAQgGALQgCADgDgCIgagRQgLARgEAEIgFACIgBAAgABEiHQgXgKgIgKQAAAAAAgBQAAAAgBgBQAAAAAAgBQABAAAAgBQAGgNALgOQADgEACABQARAOAOAGQABAAAAABQABAAAAAAQAAABAAAAQgBABAAAAIgUAeIgCABIgBAAg");
	this.shape.setTransform(0.8,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("AjDE6IhLo0QgBgEAEgBIHKg9QAFgBAAAFIBLI0QABAEgEAAInLA9QgDAAgBgDg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B6A3A").s().p("AjJEvQgRgNgDgVIg+nWQgDgVANgRQANgRAVgDIGTg1QAVgDARANQARANADAVIA+HVQADAWgNARQgNARgVADImTA1IgHABQgRAAgOgLg");
	this.shape_2.setTransform(2.5,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("AjHEvQgRgNgDgWIg+nVQgDgVANgRQANgRAVgDIGPg1QAVgDARANQARANADAVIA+HWQADAVgNARQgNARgVADImOA1IgIAAQgRAAgOgKg");
	this.shape_3.setTransform(-2.6,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-31.7,62.1,63.6);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpCIIAAgQQAAgigPhWQgDgRAAgNQAAgTAHgNQADgIAIgHIAAgFQAAgVAKgTQAMgXAQAAQAQAAAUATQALALAPAXIABAEQgEAWgKAKIgCACIgCAAQgPgEgKAAQgTABgRAEQgUAFgBAHIAIArQAHAsAAAnIAAASQgCASgEAOQgEALgEAAQgCAAAAgKgAgahWQAMgGAXgCQgJgKgKAAQgLAAgFASg");
	this.shape.setTransform(0,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("AjyEXQgEAAAAgEIAXo4QAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIHOATQAEAAAAAEIgXI4QAAAEgEAAg");
	this.shape_1.setTransform(-0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B6A3A").s().p("ADAEpImWgQQgWgCgOgPQgPgQABgVIATnaQABgVAQgPQAQgOAVABIGWARQAVABAPAPQAPAPgBAWIgUHZQAAAVgQAPQgPAOgUAAIgCAAg");
	this.shape_2.setTransform(2.6,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("AC+EpImSgRQgVAAgPgQQgOgQAAgVIAUnZQABgWAPgOQAQgPAWABIGRAQQAVABAPAQQAPAQgBAVIgUHZQAAAWgQAOQgPAOgUAAIgCAAg");
	this.shape_3.setTransform(-2.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29,-29.8,58.2,59.8);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghBIQgPgCgEgFQgEgFACgOQAAgIADgGQACgHACAAIAEADQAGAGAVADQAPABANgBQARAAAHgEIACgBIgBgDQgDgTgPgVQgRgagNgBIgJACQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAgGAFgMQAGgMAFgDQADgBADAAQAJABAIAGQAHAEAIALQAJAMAGAPQAJAXgCARQgCAUgGAMQgHARgUAGQgLADgNAAQgNAAgQgCg");
	this.shape.setTransform(-0.2,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("AkRD6QgDgBAAgEIBYoyQABgEADABIHJBHQAEABAAAEIhYIyQAAADgFAAg");
	this.shape_1.setTransform(-0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B6A3A").s().p("ACdE9ImSg/QgVgDgMgSQgNgRADgVIBJnUQAEgVARgNQARgMAWADIGRA/QAVADANASQAMARgDAVIhJHUQgEAVgRAMQgOALgQAAIgIgBg");
	this.shape_2.setTransform(2.5,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("ACaE8ImNg+QgVgDgMgRQgNgSADgUIBJnUQAEgWARgMQARgNAWAEIGMA+QAWADAMARQANARgDAWIhKHUQgDAUgRANQgOAKgQAAIgJgBg");
	this.shape_3.setTransform(-2.6,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.4,-32.1,63,64.4);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6D6D6").p("AiKjBIEVAAQAYAAARARQARARAAAYIAAEPQAAAYgRARQgRARgYAAIkVAAQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAg");
	this.shape.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AiKDCQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAIEUAAQAZAAARARQARARAAAYIAAEPQAAAYgRARQgRARgZAAg");
	this.shape_1.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5A967").s().p("AgjERQgPgPAAgVIADnZQAAgWAPgPQAPgOAUgBIAwABIgGAAIgtAAQgDAAgBAEIgDI4IACAEQgSgDgMgNg");
	this.shape_2.setTransform(-23,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2CBQgJABgVgJQgYgJgLgLQgEgCAAgDQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAWACQAXABANAAIAPgBQAQgRAUgQIAAgTQgCgegEgbIgKgyQAAgEgDgKIgEgOIAAgEIAAgCIAGgPQAGgRAEAAQABAAAAABQABAAAAAAQABABAAAAQAAABABABQAEANAJAPIABADIAAAEQgCAHgHAKQAJA6AAAaQABAbgDARQA2gxAYgBQAQgBAQAJQAPAJABALQAAAIgEAOQgGAQgIALQgPAUg0AOQgqAMgnABgAA5AoQgcACg4A0QArgEAqgNQAigLAKgIIABgBIgBgBQgGgGgPgFQgNgFgJAAIgCAAg");
	this.shape_3.setTransform(0.1,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C99353").s().p("AjoEgIgCgBIgCgEIADo4QABgEADAAIAvAAIGgACQADABAAAEIgDI4QAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgDAAgAh1BGQgBAAgBAAQAAAAgBABQAAAAAAAAQAAAAAAABQAAADAEACQALALAYAJQAVAJAJAAIAMAAQAngCAqgMQA0gOAPgUQAIgLAGgPQAEgPAAgIQgBgJgPgJQgQgIgQAAQgYABg3AvQAEgRgBgZQgBgcgIg6QAGgKABgHIABgEIgCgDQgHgPgEgNQgBgBAAgBQgBAAAAgBQgBAAAAAAQAAAAgBAAQgEAAgGARIgGAOIAAACIAAAEIAEAOQADAKAAAEIAKAzQAEAcACAcIAAATQgUARgQAQIgPABQgNABgXgCIgVgCIgBAAgAA8ARQAJgBAPAFQAPAFAGAGIABACIgBABQgKAHgiALQgqANgrAEQA4g0AcgBg");
	this.shape_4.setTransform(-0.1,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B6A3A").s().p("AC4EfIADo5QAAgDgEgCImfgBIAFgBIAAAAIACAAIGXACQAWAAAPAQQAPAPgBAWIgDHZQABAVgQAPQgOAOgTABQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAg");
	this.shape_5.setTransform(4.8,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#54D6DD").s().p("AhaAsQACgUAQAAIACAAQAjAAAUgZIAUgkQAcgcAOAAQAsAsAAAeQgQAtgOAAQgrgJgagbQgbAwgiAAIgDAAIAAAAQgSAAAAgWgAA7ALQgOgngSAAQgEAAgGAGIgEAJIAuAYIAAAAg");
	this.shape_6.setTransform(81.9,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#54D6DD").s().p("ABZBmQgLAkgfAAQgdgHgDgcQgQAjggAAQgiACgJgfQgEAMgLAJQgKAIgdAAIgEAAQgTABAAgXQAAgUATAAIAFAAQAsABAPghQABgGAFAAQADABABAJQAGAZAbAAQAfABASghQADgHAEAAQADgBAAAKIAAAJQAEAVASAAQAYgKAMgYQABgHAFAAQADgDABAPQAEAeAZACIAFAAQAUAAAAATQABAXgVAAIgFAAIgCAAQghAAgFgkgAAwAKIgagVIgVAUQgBAEgFgDQgRgKgLgOQgDgCADgEIAagdQACgCAEADQAOARAKAGIAVgWQADgFADADQAPAQAOAKQAEABgEAFIgZAaQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgEgBgAAThKQgXgPgHgLQgCgBACgEQALgSALgLQAEgEACABQAOAQATAMQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgaAfQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgDgBg");
	this.shape_7.setTransform(61.8,-5.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#54D6DD").s().p("AhXCZQgsgIgfgbQgEgDAAgEQAAgBAAAAQAAgBAAAAQABAAABAAQABAAABAAQAfAFAkABIARgCIAsgmIAAgVQgIhngFgdQgGgUgBgMIgBgEIAAgDIAHgQQAJgTAFAAQABAAAAAAQAAAAABAAQAAABABAAQAAABAAABQAJAYAGAKIACADIgBAEIgLAUQAKBAAAAoQAAAdgHAVQBBg3AcgBQARABARAIQAZANAAAOQgFArgaAWQAQgEAcAAIAGAAQATAAAAAVQAAAVgTAAIitACQgcADgUAAgAg2BwQB4gLAmgbQgggVgZgBQgyAPgzAtg");
	this.shape_8.setTransform(33.7,-6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.027)").s().p("AjkEaIgDAAQgTgCgMgOQgPgOAAgVIAEnSQAAgUAPgPQAPgPAUAAIA2ABIABgBIFZADIABAAIADAAIAuAAQAVABAOAPQAPAPABAUIgFHSQAAAUgPAQQgMANgRABIgDABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.3,-28.6,58.2,57.3);
p.frameBounds = [rect, new cjs.Rectangle(-28.2,-29.5,56.5,58.2), new cjs.Rectangle(-27.8,-28.6,118.8,57.3)];


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6D6D6").p("AiKjBIEVAAQAYAAARARQARARAAAYIAAEPQAAAYgRARQgRARgYAAIkVAAQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAg");
	this.shape.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AiKDCQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAIEUAAQAZAAARARQARARAAAYIAAEPQAAAYgRARQgRARgZAAg");
	this.shape_1.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhdCyQgfAAgUgUQgUgUABghQAAgQAIgTQAGgQAHgKQAHgJAEAAQAAgBABABQAAAAAAAAQABAAAAABQAAAAAAABQAAADgEAIQgOAaAAARQgBAVAWAPQASAMAXAAQAiACAdgLQAdgLAKgSQABgCAAgFQAAgWgDgNQgDgKgIgOIgBgDQAAgJALgUQADgDACAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAABQALAeAVgBQANAAAMgJQALgJAFgMQAFgMAFAAQAAAAAAAAQABAAAAABQAAAAAAABQABABAAABIgBAKQAAAOAKAIQAIAHALAAQAMAAAAgGQAAgFgHgMIABgBQgBgCAFgIIAHgOIAFgGQAEAAACAJQACAJAAALQAAAagMASQgNARgRAAQgWgBgMgaQgBAHgJAJQgNALgQAAQgIAAgHgDQgBAfgGARQgFANgGAIQgIAKgNALQghAXgzAAIgEAAgAB2gwIgWgUQgOAPgFAEQgEACgCgCQgPgJgJgOQgCgCACgDIAWgYQADgCADADQANAPAJAFIASgTQAEgEACACQAQARAIAHIADACIgDADQgOAOgIAKQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgDgBgABfh6QgVgNgGgLQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAHgMAOgNQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAQAPAQAOAJQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAABIgYAaIgCABIgBAAg");
	this.shape_2.setTransform(-0.2,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("AjZESQgPgPABgWIAFnZQABgWAPgPQAPgPAVABIAuAAIgDABIgvgBQgFABABADIgHI5IACADQgRgDgNgMgADakbIAKAAIAFABg");
	this.shape_3.setTransform(-5,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C99353").s().p("AjqEeIgCgBIgCgDIAHo5QgBgDAFgBIAvABIGfAFQAEgBAAAFIgHI5QAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAIgCABgAiFA1QgEAAgGAJQgIAKgGAQQgHATAAAQQgCAhAUAUQAUAUAfAAQA2ABAigYQAOgLAIgKQAGgIAFgNQAGgRABgfQAGADAJAAQAQAAAMgLQAJgJACgHQAMAaAWABQARAAAMgRQAMgSABgaQAAgNgCgJQgDgHgDAAIgFAEIgHAOQgFAKAAACIAAABQAHAMAAAFQAAAGgMAAQgLAAgIgHQgLgIAAgOIABgMQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQgEAAgGAOQgEAMgLAJQgMAJgNAAQgVABgLgeQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQgCAAgCAFQgLAUAAAJIAAADQAJAOACAKQAEANAAAWQAAAFgCACQgKASgdALQgdALghgCQgXAAgTgMQgVgPAAgVQABgRAOgaQADgIAAgDQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAIgBAAgAB1geQADADACgDQAHgKAPgOIACgDIgCgCQgJgHgQgRQgCgCgEAEIgRATQgKgFgNgPQgCgDgDACIgWAYQgDADACACQAKAOAOAJQADACAEgCQAFgEANgPIAXAUgABXidQgOANgHAMQAAABAAAAQgBABAAAAQAAABABAAQAAABAAAAQAGALAVANQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABgBIAXgaQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBAAQgNgJgPgQIgBAAIgEACg");
	this.shape_4.setTransform(-0.1,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B6A3A").s().p("AC0EgIAGo5QABgEgEAAImfgFIADgBIAFAAIFUAFIAPAAIAzAAQAVABAPAPQAPAPAAAWIgGHZQAAAWgPAPQgOAOgTAAQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_5.setTransform(5.1,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.027)").s().p("AjkEaIgDAAQgTgCgMgOQgPgOAAgVIAEnSQAAgUAPgPQAPgPAUAAIA2ABIABgBIFZADIABAAIADAAIAuAAQAVABAOAPQAPAPABAUIgFHSQAAAUgPAQQgMANgRABIgDABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.3,-28.6,58.2,57.3);
p.frameBounds = [rect, new cjs.Rectangle(-28.3,-29.7,56.8,58.5), new cjs.Rectangle(0,0,0,0)];


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6D6D6").p("AiKjBIEVAAQAYAAARARQARARAAAYIAAEPQAAAYgRARQgRARgYAAIkVAAQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAg");
	this.shape.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AiKDCQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAIEUAAQAZAAARARQARARAAAYIAAEPQAAAYgRARQgRARgZAAg");
	this.shape_1.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjCJIAAgQQgBgigShXQgEgPAAgNQgBgUAGgNQAEgHAHgIIAAgFQgBgUAKgVQALgXAQAAQAQgBAUATQAMAKAQAXIABADQgDAXgKALIgCABIgCAAQgPgDgKABQgTAAgRAFQgUAGAAAHIAJArQAJAsABAmIAAASQgBATgEANQgDAMgEAAQgCAAgBgKgAgMhoQgLABgEASQALgHAXgDQgJgJgJAAIgBAAg");
	this.shape_2.setTransform(0.2,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("AjXERQgPgPAAgVIACnZQABgWAPgPQAPgOAWAAIGRACIAFAAIlkgCIgHABIgwgBQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIgDI4IABAEQgRgDgMgNg");
	this.shape_3.setTransform(-4.7,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C99353").s().p("AjoEfIgEgBIgBgDIAEo4QAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAxAAIGeACQAEAAAAAEIgDI5QAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgDAAgAgGh1QgQAAgLAXQgJAVAAAUIABAFQgIAIgDAHQgHANABAUQAAALAFARQASBXABAiIAAAQQAAAKACAAQAEAAAEgMQADgNABgTIAAgSQgBgmgJgsIgJgrQAAgHAUgGQARgFAUAAQAJgBAPADIACAAIADgBQAJgLADgXIgBgDQgQgXgMgKQgTgSgQAAIgBAAgAgMhMQAKAAAKAJQgXADgMAHQAEgSALgBg");
	this.shape_4.setTransform(0.2,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B6A3A").s().p("AC3EeIADo5QAAgDgEAAImegCIAHgBIFjACIAzAAQAVAAAQAQQAPAPAAAVIgDHZQAAAVgPAPQgOAPgUABQABAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBg");
	this.shape_5.setTransform(5.3,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.027)").s().p("AjkEaIgDAAQgTgCgMgOQgPgOAAgVIAEnSQAAgUAPgPQAPgPAUAAIA2ABIABgBIFZADIABAAIADAAIAuAAQAVABAOAPQAPAPABAUIgFHSQAAAUgPAQQgMANgRABIgDABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.3,-28.6,58.2,57.3);
p.frameBounds = [rect, new cjs.Rectangle(-27.8,-28.7,56.5,58.2), new cjs.Rectangle(0,0,0,0)];


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvBGQgFgFAAgOIABgOQACgIACAAIAEADQAHAFAVAAQAPAAANgDQAQgCAHgFQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAIgBgCQgGgUgRgSQgSgYgPABIgFABIgEACQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgHADgLQAEgNAFgDQACgCAGAAQAJgBAGAFQAIADAJALQALALAHANQAMAWAAASQAAASgEAOQgFASgUAIQgSAIgigBQgOABgFgFg");
	this.shape.setTransform(0,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("AjuETQgEAAAAgEIAXovQAAgEAEAAIHGASQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAIgXIwQAAADgEAAg");
	this.shape_1.setTransform(-0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B6A3A").s().p("AC8EkImPgQQgVgBgOgPQgOgQAAgVIATnRQABgVAPgPQAQgOAVABIGQAQQAUABAPAPQAOAQgBAVIgTHRQgBAVgPAPQgOANgUAAIgDAAg");
	this.shape_2.setTransform(2.5,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("AC7EkImLgQQgVgBgPgPQgOgQABgVIATnRQABgVAPgPQAQgOAVABIGLAQQAVABAOAPQAOAQgBAVIgTHRQAAAVgQAPQgOANgUAAIgCAAg");
	this.shape_3.setTransform(-2.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.5,-29.3,57.2,58.8);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTBiQgZgGgigZQgHgFABgCQABgDAGABIAcAJQATAFAjgOQAygSAHghQACgJgDgNQgLAPgRgCQghgIAIghQADgNAOgSQAWgaANADQAIABAHAMQAHAMACAQQADAUgGAeQgLAugVAZQgWAbgkAGgAAgg7QgEAEgBADQgBAEAFAFQAFAEAHABQALACACgGQACgHgFgIQgEgGgFgBIgCAAQgEAAgGAFg");
	this.shape.setTransform(-2.3,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("AClFFIm9hdQgDAAAAgEIByokQABgFAEABIG9BdQAEABgBADIhyIkQAAABAAABQAAABgBAAQAAAAgBABQAAAAgBAAIgCAAg");
	this.shape_1.setTransform(0.2,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5A967").s().p("ACKE/ImHhSQgUgDgMgSQgMgSAFgUIBenIQAFgVARgMQASgMAVAFIGHBRQAUAEAMATQAMARgFAUIheHJQgFAUgRAMQgNAIgOAAIgMgBg");
	this.shape_2.setTransform(-2.3,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9B6A3A").s().p("ACIE/ImDhRQgUgEgMgRQgMgTAFgUIBfnIQAEgVASgLQARgMAVAFIGDBQQAUAFAMARQALASgEAUIhfHIQgEAVgRALQgNAJgOAAIgMgBg");
	this.shape_3.setTransform(2.7,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.9,-32.5,63.9,65.2);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNCSQgRgSAAgcQAAghARgiQAHgNAFAAQAAAAABAAQAAAAAAAAQAAABABAAQAAABAAABQAAAEgFAIQgLAaAAAPQAAAWASAPQATARAiAAQAXgBAdgOQAbgNAGgOIACgFQgCghgGgtIgOhqIgGgbIAAgEIAAgDIAGgNQADgHAEgFQAFgGACABQAAAAAAAAQABAAAAAAQAAABABAAQAAABAAABQAGASAHAKIACAEIgBADQgDAMgFAFQAQCAAAAqQAAAagEANQgDAHgIAOQgPAWgaANQgZAMgbAAQgsgBgUgUg");
	this.shape.setTransform(-0.2,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("AjuETIgDgBQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAXowQAAgDAEAAIHGASQAEAAAAAEIgXIvQAAAEgEAAg");
	this.shape_1.setTransform(-0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B6A3A").s().p("AC8EkImPgQQgVgBgOgQQgOgPAAgVIATnRQABgWAPgOQAQgOAVABIGPAQQAVABAPAPQAOAQgBAVIgTHRQAAAVgQAPQgPANgTAAIgDAAg");
	this.shape_2.setTransform(2.5,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("AC7EkImLgQQgVgBgPgQQgOgPABgVIATnRQABgVAPgPQAQgOAVABIGLAQQAVABAOAPQAOAQgBAVIgSHRQgBAVgQAOQgOAOgUAAIgCAAg");
	this.shape_3.setTransform(-2.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.5,-29.3,57.2,58.8);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5A967").s().p("AAZESQgRgNgDgUIg7nOQgDgUANgRQANgSAVgCIAtgGIgEABIguAGQgEABABADIBIIsIABACQgQAAgOgLg");
	this.shape.setTransform(-24.8,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhzB4QgdgOgEggQgCgKADgQQADgRAFgMQAFgKADAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIgBAIQgGAZABAJQADARAXAMQAfAPA2gGQAngGAtgNQAmgMAXgLQAKgGACgDQABgDgBgIQAAgIgHgMQgDAHgHAGQgHAFgKABQgcAEgEgfQgDgTAKgYQAIgYAJgBQATgCARAYQASAYAEAfQABAGgBAOQgBAPgDAKQgCAJgDAEQgDAEgIAFQgXAPgmAOQgvAQgrAGQgUADgRAAQgiAAgWgKgABbggQgEAAgDAFQgCAEgBAFIAAACIAAACQAFAIAMgCQAKAAAFgHIAAgBQAAgFgGgFQgGgGgHAAIgDAAgAAehLQgXgKgHgKQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAEgMAMgQQADgEACABQAMALAUAKQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAABIgUAdIgCACIgBgBg");
	this.shape_1.setTransform(0,-2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C99353").s().p("Ai/E3IgBgCIhKorQgBgEAEgBIAwgGIGTg2QAEAAABAEIBKIrIgBADIgDABInDA8IgBAAIgCgBgAiCgQQgEAAgEAKQgGAKgDARQgCAQABAKQAEAgAeAOQAgAPA9gIQAqgGAvgQQAngOAWgPQAJgFADgEQACgEADgJQACgKABgPQACgMgBgGQgEghgSgYQgSgYgTACQgIABgJAYQgJAYACAVQAFAdAcgEQAKAAAHgEQAHgGACgHQAHAMABAGQABAIgCADQgCADgKAGQgXALgmAMQgtANgnAGQg2AGgegPQgYgMgCgRQgBgJAFgXIABgIQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAAAgAARiZQgMAQgFAMQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAHAKAXAKQABAAABAAQAAAAAAAAQABAAAAAAQABAAAAgBIATgdQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQgTgKgNgLIAAAAQgBAAAAAAQgBAAAAABQgBAAAAABQgBAAAAABgABSgpIgBgCIAAgCQABgFADgEQADgFADAAQAJgCAHAIQAGAFABAFIgBABQgFAHgJAAIgEAAQgJAAgEgGg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9B6A3A").s().p("ADdEXIhKorQgBgEgDAAImTA2IADgBIGPg1QAVgDAQANQARANADAVIA9HNQADAVgNARQgMAPgRAEIAAgDg");
	this.shape_3.setTransform(4.4,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-31.2,61.1,62.6);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPB3QADgbABhVQABhUABgHQACgPAOgXQAFgHADAAQADAAgBANIgDBPQgCA8gEAkQgEAngGAPQgIARgEAAQgDAAACgLg");
	this.shape.setTransform(1.2,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("AC1E8InBhHQgDAAAAgEIBWopQABgEAEABIHBBGQAEABgBAEIhWIpQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAIgCAAg");
	this.shape_1.setTransform(-0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B6A3A").s().p("ACaE4ImLg+QgUgEgNgRQgMgRADgUIBInMQADgVARgNQARgMAVADIGLA+QAVADAMARQANARgEAVIhIHMQgDAVgRAMQgOAKgQAAIgIAAg");
	this.shape_2.setTransform(2.5,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("ACYE3ImHg9QgUgDgNgRQgNgRAEgVIBInMQADgVARgMQARgNAVADIGHA+QAUADANARQAMARgDAVIhIHMQgEAVgRAMQgNAKgPAAIgJgBg");
	this.shape_3.setTransform(-2.6,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.9,-31.6,62.1,63.4);
p.frameBounds = [rect, new cjs.Rectangle(0,0,0,0)];


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6D6D6").p("AiKjBIEVAAQAYAAARARQARARAAAYIAAEPQAAAYgRARQgRARgYAAIkVAAQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAg");
	this.shape.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AiKDCQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAIEUAAQAZAAARARQARARAAAYIAAEPQAAAYgRARQgRARgZAAg");
	this.shape_1.setTransform(-1.9,-0.2,1.435,1.435);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5A967").s().p("AgiEOQgPgQAAgUIADnSQAAgVAPgPQAPgOATgBIAvAAIgFABIgtAAQgEAAABAEIgEIvIABADQgQgCgMgMg");
	this.shape_2.setTransform(-22.6,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguBHQgFgFAAgOQgBgGACgIQABgHACAAIAEACQAHAFAVgBQAPAAAOgEQAPgDAHgEQAAAAAAgBQABAAAAAAQAAAAAAAAQABgBAAAAIgBgCQgGgTgTgSQgSgXgPABIgFACIgEABQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAgBAAAAQAAgHADgMQAEgNAFgDQACgCAFgBQAKAAAGAEQAHADAKAKQALALAIANQANAVABATQAAASgEAOQgEASgTAJQgTAIghABIgDAAQgMAAgFgEg");
	this.shape_3.setTransform(0.1,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C99353").s().p("AjkEbIgDgBIgBgDIADovQAAgEAEAAIAuAAIGZACQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIgDIwQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgDAAgAgwA4QgBAHAAAGQABAPAFAFQAFAEAOgBQAigBASgIQATgJAFgSQAEgNgBgTQgBgUgMgUQgIgNgLgKQgKgLgIgCQgFgFgKABQgGAAgCACQgFAEgDAMQgDAMAAAHQAAABAAABQAAAAAAAAQABABAAAAQAAAAABAAIAEgCIAEgCQAPAAATAUQASAUAHATIAAADQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQgGAEgQAEQgPADgNABQgVAAgHgFIgEgCQgDAAgBAIg");
	this.shape_4.setTransform(-0.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B6A3A").s().p("AC0EaIADowQABAAAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAImZgDIAGAAIFcACIAFAAIAxAAQAVAAAPAPQAPAPgBAVIgCHSQgBAVgPAPQgOAOgSAAQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_5.setTransform(4.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#54D6DD").s().p("AhMBlQgIgEAAgDQAAgEAHAAQAOAEAUAAQAWAAAlgZQA0gdAAgoQAAgMgIgPQgHAVgVAAQgkABAAgoQABgSAJgVQARgjAQAAQAXAEAOAkQAJAVAAAkQAHBshUAhIgKABQgkgCgmgRgAARhFIgEAJQAHAMAOAAQANgCABgGQgKgWgJAAQgHACgFAHg");
	this.shape_6.setTransform(68.4,8.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#54D6DD").s().p("AgWCYQgSAAAAgXQAAgTASAAIAEAAQAPAAAKgEQALgEACgEQgJhDgJhgIgFgsQADgOAFgLQAIgRAFAAQACABACADQAIAZAGAJIACAGIAAACQgEAOgGAGQANBiAAAuQAAAtgTAdQgLATgdAAg");
	this.shape_7.setTransform(55.9,-7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#54D6DD").s().p("AheBgQgMgHAAgNQAAgTAIgQQACgGAEAAQADAAACAGQALASAgAAQA0gBANgXIABgMQgFgmgJgrIgBgIQgDADANgeQAEgMADAAQADAAACALQAMBdAKAjQADAKAFAGQALAMAMAAIAGAAQATAAAAAVQAAAVgUAAIgFAAQgVAAgMgMQgMgJgIgbQgUAxg/AAIgJABQgQAAgPgKg");
	this.shape_8.setTransform(45.1,-2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// Layer 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.027)").s().p("AjkEaIgDAAQgTgCgMgOQgPgOAAgVIAEnSQAAgUAPgPQAPgPAUAAIA2ABIABgBIFZADIABAAIADAAIAuAAQAVABAOAPQAPAPABAUIgFHSQAAAUgPAQQgMANgRABIgDABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.3,-28.6,58.2,57.3);
p.frameBounds = [rect, new cjs.Rectangle(-27.7,-28.6,55.7,57.3), new cjs.Rectangle(-27.7,-28.6,104.8,57.3)];


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLCVQgSgRgBgcQgBgiAQghQAHgOAFgBQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAFgEAIQgLAaABAPQABAXASAOQATAQAigCQAYAAAcgPQAbgOAFgPIACgGQgDgggIgtIgRhoIgHgcIgBgEIABgCIAFgOQACgHAFgFQAEgGACAAQABAAAAAAQAAABABAAQAAABAAAAQABABAAABQAGARAIALIABADIgBAEQgCALgFAGQAVB+ABArQABAZgEANQgCAIgIANQgOAYgZANQgZANgbABIgFAAQgoAAgUgTg");
	this.shape.setTransform(0.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C99353").s().p("AjlEbIgCgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIACowQAAgDAEAAIAtAAIGaACQAEAAAAAEIgDIvQAAAEgEAAgAhMAiQgQAhABAiQABAcASARQAVAUAsgBQAbgBAZgNQAZgNAOgYQAIgNACgIQAEgNgBgZQgBgrgVh+QAFgGACgLIABgEIgBgDQgIgLgGgRQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQgCAAgEAGQgFAFgCAHIgFAOIgBACIABAEIAHAcIARBoQAIAtADAgIgCAGQgFAPgbAOQgcAPgYAAQgiACgTgQQgSgOgBgXQgBgPALgaQAEgIAAgFQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgFABgHAOg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B6A3A").s().p("AC1EZIAEouQAAgEgEgBImbgCIAJgBIFfADIAyAAQAVAAAPAOQAPAPgBAWIgCHRQAAAWgQAPQgOAOgUABQADgBAAgEg");
	this.shape_2.setTransform(4.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("AjTENQgPgPgBgVIAEnRQAAgVAOgPQAPgOAVgBIGLACIAGABIlfgDIgJABIgtAAQgFAAABAEIgDIwQAAAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAQgQgCgMgNg");
	this.shape_3.setTransform(-4.9,-0.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-27.7,-28.6,55.6,57.3);
p.frameBounds = [rect];


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6D6D6").p("AiKjBIEVAAQAYAAARARQARARAAAYIAAEPQAAAYgRARQgRARgYAAIkVAAQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAg");
	this.shape.setTransform(0.2,-0.2,1.435,1.435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AiKDCQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAIEUAAQAZAAARARQARARAAAYIAAEPQAAAYgRARQgRARgZAAg");
	this.shape_1.setTransform(0.2,-0.2,1.435,1.435);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhCBWQgIgEABgDQAAgDAGABIAdADQATABAggUQAsgcACghQAAgKgGgMQgHASgRAAQgggCAAghQABgOAJgUQAQgeAMAAQAJAAAJALQAKAKAFAPQAHAUAAAdQgCAxgPAcQgRAfgkANIgIABIgCAAQgYAAglgSgAArgvQAAgIgGgGQgFgGgEAAQgGAAgGAHQgDAFAAADQAAAEAGAEQAGADAGAAQALABABgHg");
	this.shape_2.setTransform(-1.1,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5A967").s().p("AjYEMQgPgOAAgVIAEnSQAAgUAPgPQAPgPAUAAQgEAAAAAEIgFIwIABADQgTgCgMgOgAh7kaIABgBIFZADIABAAIADAAIABAAIAEABg");
	this.shape_3.setTransform(-4.5,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9B6A3A").s().p("AAAEZIAFovQAAgEgEAAIgsAAIgDgBIAtAAQATABAOAPQAPAPAAAUIgEHSQAAAUgPAQQgMANgQABQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_4.setTransform(23.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C99353").s().p("AjlEaIgDgBIgBgDIAFovQAAgEAEAAIA2AAIFjAEIAtAAQAEAAAAADIgFIwQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgDABgAhXB5QgBACAIAEQAnATAYgBIAKgBQAigMARgfQAPgcACgzQABgbgIgUQgFgPgJgLQgJgKgJAAQgNAAgOAdQgLAVAAALQgBAiAgABQASABAGgTQAHANAAAMQgCAhgsAbQggAVgUgBIgcgEIgCAAQgFAAAAADgAARAAQgGAAgGgCQgFgEAAgEQAAgDADgFQAGgHAFgBQAEABAFAGQAHAGAAAHQgBAGgJAAIgDAAg");
	this.shape_5.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.027)").s().p("AjkEaIgDAAQgTgCgMgOQgPgOAAgVIAEnSQAAgUAPgPQAPgPAUAAIA2ABIABgBIFZADIABAAIADAAIAuAAQAVABAOAPQAPAPABAUIgFHSQAAAUgPAQQgMANgRABIgDABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28.6,56.7,57.3);
p.frameBounds = [rect, new cjs.Rectangle(-27.7,-28.6,55.7,57.3), new cjs.Rectangle(0,0,0,0)];


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,153,0,0.008)").ss(3.8).p("EAhIAYiMhCPAAAMAAAgxDMBCPAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("EghHAYhMAAAgxBMBCPAAAMAAAAxBg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-211.9,-156.9,424,314);
p.frameBounds = [rect];


(lib.sym09 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAAAAA").s().p("AgqB5QAMgBAOgEQAbgIAJgQQAAhRgahEQgOgkgSgbQAYARAdBaQAdBSgBAeQgdARgeAEIgSABIgIAAg");
	this.shape.setTransform(4.3,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AAAAAA").s().p("AgqB5QAMgBAOgEQAbgIAJgQQAAhRgahEQgOgkgSgbQAYARAdBaQAdBSgBAeQgdARgeAEIgSABIgIAAg");
	this.shape_1.setTransform(4.3,12.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,8.7,24.4);
p.frameBounds = [rect];


(lib.sym08 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAAAAA").s().p("AARAcQgJgagQgPQgJgKgJgEQAQACATAaQAKANAIAOg");
	this.shape.setTransform(2.7,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AAAAAA").s().p("AARAcQgJgagQgPQgJgKgJgEQAQACATAaQAKANAIAOg");
	this.shape_1.setTransform(2.7,2.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,5.4,5.7);
p.frameBounds = [rect];


(lib.sym07 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAAAAA").s().p("AgMAcQAHgdAJgRQAFgJAEgDQgLAVgBAog");
	this.shape.setTransform(1.4,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AAAAAA").s().p("AgMAcQAHgdAJgRQAFgJAEgDQgLAVgBAog");
	this.shape_1.setTransform(1.4,3.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,2.8,6.3);
p.frameBounds = [rect];


(lib.sym005 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3).p("ADNjcQh5AxgwAQQgYAIhtgWQhugVgYAKQghANgOBbQgMBRAKBJQAJA/AtApQAqAnA3ABQAsABBHgPQAigIAbgHIAZADQAgABAdgJQBdgbAhhwQAmiBgRhOQgRhKg6AMg");
	this.shape.setTransform(31.9,22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.3).p("ADNjcQh5AxgwAQQgYAIhtgWQhugVgYAKQghANgOBbQgMBRAKBJQAJA/AtApQAqAnA3ABQAsABBHgPQAigIAbgHIAZADQAgABAdgJQBdgbAhhwQAmiBgRhOQgRhKg6AMg");
	this.shape_1.setTransform(31.9,22.4);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiBDeQg3gBgqgnQgtgpgJg/QgKhJAMhRQAOhbAhgNQAYgKBuAVQBtAWAYgIQAwgQB5gxQA6gMARBKQARBOgmCBQghBwhdAbQgdAJgggBIgZgDQgbAHgiAIQhEAOgsAAIgDAAg");
	mask.setTransform(31.9,22.4);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AAVgMQANgSAHgMQgTAqggAaQgRANgNAEQAkgXAZggg");
	this.shape_2.setTransform(52.2,36);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4F4F4").s().p("AhnCdQhzgLglg1QgjgzAChbQAChaAfgUIAFA3QAMA9AhAeQAnAhAhANQAdAMAhgCQAegBAqgKQAqgJAEgEQAEgGAoADQAqACAWAKQAYALAqgUQApgTATgcQALgRgDATQgEASgQAZQgyBThfAfQhYAdhWAAQgbAAgagDg");
	this.shape_3.setTransform(29,32.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E120D").s().p("AgiAiQgMgCALgbQAMgbAWgIQAVgJAOASQANARgJANQgGAMgMAFQgFACgPABIgQADQgHACgGAAIgFAAg");
	this.shape_4.setTransform(37.4,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E120D").s().p("AgoBFQgDgIgWgPQgbgTgOgPQgSgSACgXQACgTAOgGIAYgIQAMgGAIgMQAJgQARgFQASgGAoADQAhACAaAYQARAQATAeQANAVgOAWQgMAWgVAGQgMAEgRAYQgTAZgRAJQgJAFgJAAQgWAAgSglg");
	this.shape_5.setTransform(26.8,14.8);

	this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = mask;

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AAVgMQANgSAHgMQgTAqggAaQgRANgNAEQAkgXAZggg");
	this.shape_6.setTransform(52.2,36);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4F4F4").s().p("AhnCdQhzgLglg1QgjgzAChbQAChaAfgUIAFA3QAMA9AhAeQAnAhAhANQAdAMAhgCQAegBAqgKQAqgJAEgEQAEgGAoADQAqACAWAKQAYALAqgUQApgTATgcQALgRgDATQgEASgQAZQgyBThfAfQhYAdhWAAQgbAAgagDg");
	this.shape_7.setTransform(29,32.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E120D").s().p("AgiAiQgMgCALgbQAMgbAWgIQAVgJAOASQANARgJANQgGAMgMAFQgFACgPABIgQADQgHACgGAAIgFAAg");
	this.shape_8.setTransform(37.4,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E120D").s().p("AgoBFQgDgIgWgPQgbgTgOgPQgSgSACgXQACgTAOgGIAYgIQAMgGAIgMQAJgQARgFQASgGAoADQAhACAaAYQARAQATAeQANAVgOAWQgMAWgVAGQgMAEgRAYQgTAZgRAJQgJAFgJAAQgWAAgSglg");
	this.shape_9.setTransform(26.8,14.8);

	this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = mask;

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiBDeQg3gBgqgnQgtgpgJg/QgKhJAMhRQAOhbAhgNQAYgKBuAVQBtAWAYgIQAwgQB5gxQA6gMARBKQARBOgmCBQghBwhdAbQgdAJgggBIgZgDQgbAHgiAIQhEAOgsAAIgDAAg");
	this.shape_10.setTransform(31.9,22.4);

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AiBDeQg3gBgqgnQgtgpgJg/QgKhJAMhRQAOhbAhgNQAYgKBuAVQBtAWAYgIQAwgQB5gxQA6gMARBKQARBOgmCBQghBwhdAbQgdAJgggBIgZgDQgbAHgiAIQhEAOgsAAIgDAAg");
	mask_1.setTransform(31.9,22.4);

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiBDeQg3gBgqgnQgtgpgJg/QgKhJAMhRQAOhbAhgNQAYgKBuAVQBtAWAYgIQAwgQB5gxQA6gMARBKQARBOgmCBQghBwhdAbQgdAJgggBIgZgDQgbAHgiAIQhEAOgsAAIgDAAg");
	this.shape_11.setTransform(31.9,22.4);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(3.3,0.1,57.2,44.6);
p.frameBounds = [rect];


(lib.sym05 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgtmAR4MAAAgjvMBbOAAAMAAAAjvg");
	mask.setTransform(344.5,114.4);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIuCDIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgOAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgnAAIAAkFITPAAIAAEFg");
	this.shape.setTransform(480.1,202.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCF7F8").s().p("AjgHrIAAvVIHBAAIAAPVgAA9HoIBBAAIAAhNIhBAAgAh9HoIBBAAIAAhNIhBAAgAA9FiIBBAAIAAhNIhBAAgAh9FiIBBAAIAAhNIhBAAgAA9DcIBBAAIAAhNIhBAAgAh9DcIBBAAIAAhNIhBAAgAA9BWIBBAAIAAhNIhBAAgAh9BWIBBAAIAAhNIhBAAgAA9guIBBAAIAAhNIhBAAgAh9guIBBAAIAAhNIhBAAgAA9i0IBBAAIAAhNIhBAAgAh9i0IBBAAIAAhNIhBAAgAA9k6IBBAAIAAhNIhBAAgAh9k6IBBAAIAAhNIhBAAg");
	this.shape_1.setTransform(70,166.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AEEFtIAAhbIhWAAIAABbIgXAAIAAhbIhWAAIAABbIgXAAIAAhbIhUAAIAABbIgXAAIAAhbIhXAAIAABbIgWAAIAAhbIhXAAIAABbIgRAAIAArZIItAAIAALZgACuD4IBWAAIAAhcIhWAAgABBD4IBWAAIAAhcIhWAAgAgqD4IBUAAIAAhcIhUAAgAiYD4IBXAAIAAhcIhXAAgAkFD4IBXAAIAAhcIhXAAgACuCCIBWAAIAAhcIhWAAgABBCCIBWAAIAAhcIhWAAgAgqCCIBUAAIAAhcIhUAAgAiYCCIBXAAIAAhcIhXAAgAkFCCIBXAAIAAhcIhXAAgACuANIBWAAIAAhaIhWAAgABBANIBWAAIAAhaIhWAAgAgqANIBUAAIAAhaIhUAAgAiYANIBXAAIAAhaIhXAAgAkFANIBXAAIAAhaIhXAAgACuhnIBWAAIAAhbIhWAAgABBhnIBWAAIAAhbIhWAAgAgqhnIBUAAIAAhbIhUAAgAiYhnIBXAAIAAhbIhXAAgAkFhnIBXAAIAAhbIhXAAgACujdIBWAAIAAhbIhWAAgABBjdIBWAAIAAhbIhWAAgAgqjdIBUAAIAAhbIhUAAgAiYjdIBXAAIAAhbIhXAAgAkFjdIBXAAIAAhbIhXAAg");
	this.shape_2.setTransform(120.3,178.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B9EEF1").s().p("ADOKcIAAg8IhFAAIAAA8IgSAAIAAg8IhFAAIAAA8IgNAAIAArcIgEAAIAAhXIhDAAIAABXIgSAAIAAhXIhGAAIAABXIgSAAIAAhXIhEAAIAABXIgXAAIAApbIHPAAIAAU3gACJJBIBFAAIAAh5IhFAAgAAyJBIBFAAIAAh5IhFAAgACJGoIBFAAIAAh4IhFAAgAAyGoIBFAAIAAh4IhFAAgACJEQIBFAAIAAh4IhFAAgAAyEQIBFAAIAAh4IhFAAgACJB4IBFAAIAAh4IhFAAgAAyB4IBFAAIAAh4IhFAAgACJgeIBFAAIAAh5IhFAAgAAygeIBFAAIAAh5IhFAAgACJi2IBFAAIAAh5IhFAAgAAyi2IBFAAIAAh5IhFAAgAgii2IBDAAIAAh5IhDAAgAh6i2IBGAAIAAh5IhGAAgAjQi2IBEAAIAAh5IhEAAgACJlOIBFAAIAAh5IhFAAgAAylOIBFAAIAAh5IhFAAgAgilOIBDAAIAAh5IhDAAgAh6lOIBGAAIAAh5IhGAAgAjQlOIBEAAIAAh5IhEAAgACJnmIBFAAIAAh5IhFAAgAAynmIBFAAIAAh5IhFAAgAginmIBDAAIAAh5IhDAAgAh6nmIBGAAIAAh5IhGAAgAjQnmIBEAAIAAh5IhEAAg");
	this.shape_3.setTransform(144.4,148.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ADaNJIAAk5IhFAAIAAE5Ig3AAIAAjpIi/AAIAADpIg4AAIAAk5IhFAAIAAE5IhAAAIAAlfIBoAAIAAzZIAuAAIAAhZIESAAIAABZIAuAAIAATZIBmAAIAAFfgAhhI+IC/AAIAAgrIi/AAgABqHqIAoAAIAAzQIgoAAgAgTHqIAnAAIAAzQIgnAAgAiRHqIApAAIAAzQIgpAAg");
	this.shape_4.setTransform(206.9,131.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AizINIAAvKIBdAAIgBgDQAAgfAbgWQAagXAiAAQAjAAAaAXQAaAWAAAfIAAADIBdAAIAAPKgAAym4QAVAVAAAeIAAADIBcAAIAAN/IALAAIAAuPIhhAAIAAgDQAAghgYgUQgWgTgfAAQgeAAgXATQgYAUAAAhIABADIhiAAIAAOPIAMAAIAAt/IBcAAIAAgDQAAgeAVgVQAVgVAcAAQAdAAAVAVgAAqHCIBXAAIAAg5IhXAAgAiAHCIBWAAIAAg5IhWAAgAAqFYIBXAAIAAg6IhXAAgAiAFYIBWAAIAAg6IhWAAgAAqDuIBXAAIAAg6IhXAAgAiADuIBWAAIAAg6IhWAAgAAqCDIBXAAIAAg5IhXAAgAiACDIBWAAIAAg5IhWAAgAAqAZIBXAAIAAg3IhXAAgAiAAZIBWAAIAAg3IhWAAgAAqhPIBXAAIAAg5IhXAAgAiAhPIBWAAIAAg5IhWAAgAAqi5IBXAAIAAg6IhXAAgAiAi5IBWAAIAAg6IhWAAgAAqkjIBXAAIAAg6IhXAAgAiAkjIBWAAIAAg6IhWAAg");
	this.shape_5.setTransform(322.1,163.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AmIEEIAAoHIMRAAIAAIHgACdEBIB4AAIAAhzIh4AAgAg6EBIB2AAIAAhzIh2AAgAkTEBIB4AAIAAhzIh4AAgAD6BJIBEAAIAAg0IhEAAgABtBJIBEAAIAAg0IhEAAgAgeBJIBCAAIAAg0IhCAAgAisBJIBEAAIAAg0IhEAAgAk5BJIBEAAIAAg0IhEAAgAD6gaIBEAAIAAg0IhEAAgABtgaIBEAAIAAg0IhEAAgAgegaIBCAAIAAg0IhCAAgAisgaIBEAAIAAg0IhEAAgAk5gaIBEAAIAAg0IhEAAgAD6iUIBEAAIAAg1IhEAAgABtiUIBEAAIAAg1IhEAAgAgeiUIBCAAIAAg1IhCAAgAisiUIBEAAIAAg1IhEAAgAk5iUIBEAAIAAg1IhEAAg");
	this.shape_6.setTransform(379.1,190.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AmZAWIAAgrIMzAAIAAArg");
	this.shape_7.setTransform(380.9,160.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DCF7F8").s().p("ADOKzIAAhYIg3AAIAABYIgRAAIAAhYIg3AAIAABYIgQAAIAAhYIg3AAIAABYIgPAAIAAhYIg3AAIAABYIgQAAIAAhYIg4AAIAABYIgQAAIAAhYIgEAAIAAg9IAEAAIAAhcIgEAAIAAg8IAEAAIAAhdIg3AAIAABPIgTAAIAAwqIHBAAIAAVlgACXIeIA3AAIAAhcIg3AAgABPIeIA3AAIAAhcIg3AAgAAIIeIA3AAIAAhcIg3AAgAg+IeIA3AAIAAhcIg3AAgAiGIeIA4AAIAAhcIg4AAgACXGGIA3AAIAAhdIg3AAgABPGGIA3AAIAAhdIg3AAgAAIGGIA3AAIAAhdIg3AAgAg+GGIA3AAIAAhdIg3AAgAiGGGIA4AAIAAhdIg4AAgACXDtIA3AAIAAhdIg3AAgABPDtIA3AAIAAhdIg3AAgAAIDtIA3AAIAAhdIg3AAgAg+DtIA3AAIAAhdIg3AAgAiGDtIA4AAIAAhdIg4AAgAjNDtIA3AAIAAhdIg3AAgACXBUIA3AAIAAhbIg3AAgABPBUIA3AAIAAhbIg3AAgAAIBUIA3AAIAAhbIg3AAgAg+BUIA3AAIAAhbIg3AAgAiGBUIA4AAIAAhbIg4AAgAjNBUIA3AAIAAhbIg3AAgACXhDIA3AAIAAhcIg3AAgABPhDIA3AAIAAhcIg3AAgAAIhDIA3AAIAAhcIg3AAgAg+hDIA3AAIAAhcIg3AAgAiGhDIA4AAIAAhcIg4AAgAjNhDIA3AAIAAhcIg3AAgACXjcIA3AAIAAhcIg3AAgABPjcIA3AAIAAhcIg3AAgAAIjcIA3AAIAAhcIg3AAgAg+jcIA3AAIAAhcIg3AAgAiGjcIA4AAIAAhcIg4AAgAjNjcIA3AAIAAhcIg3AAgACXl0IA3AAIAAhdIg3AAgABPl0IA3AAIAAhdIg3AAgAAIl0IA3AAIAAhdIg3AAgAg+l0IA3AAIAAhdIg3AAgAiGl0IA4AAIAAhdIg4AAgAjNl0IA3AAIAAhdIg3AAgACXoNIA3AAIAAhdIg3AAgABPoNIA3AAIAAhdIg3AAgAAIoNIA3AAIAAhdIg3AAgAg+oNIA3AAIAAhdIg3AAgAiGoNIA4AAIAAhdIg4AAgAjNoNIA3AAIAAhdIg3AAg");
	this.shape_8.setTransform(434.1,120.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DCF7F8").s().p("ABkLMIAAg1IB1AAIAAgrIh1AAIAAgVIB1AAIAAgrIh1AAIAAgVIB1AAIAAgrIh1AAIAAgVIB1AAIAAgrIjMAAIAAAZIgZAAIAAgZIjMAAIAAAZIgTAAIAApXIgZAAIAAhoIA8AAIAAktIgZAAIAAgrIAqAAIAAgbIFvheIAAB5IAqAAIAAArIgaAAIAAEtIA9AAIAABoIgaAAIAANegAANGXIDMAAIAAgrIjMAAgAjYGXIDMAAIAAgrIjMAAgAANFWIDMAAIAAgrIjMAAgAjYFWIDMAAIAAgrIjMAAgAANEWIDMAAIAAgrIjMAAgAjYEWIDMAAIAAgrIjMAAgAANDWIDMAAIAAgrIjMAAgAjYDWIDMAAIAAgrIjMAAgAANCWIDMAAIAAgrIjMAAgAjYCWIDMAAIAAgrIjMAAgAANBWIDMAAIAAgrIjMAAgAjYBWIDMAAIAAgrIjMAAgAANAWIDMAAIAAgpIjMAAgAjYAWIDMAAIAAgpIjMAAgAANgoIDMAAIAAgrIjMAAgAjYgoIDMAAIAAgrIjMAAgAANhoIDMAAIAAgrIjMAAgAjYhoIDMAAIAAgrIjMAAgAi3j4IFvAAIAAguIlvAAgAi3k4IFvAAIAAguIlvAAgAi3l4IFvAAIAAguIlvAAgAi3m4IFvAAIAAguIlvAAgAi3n4IFvAAIAAguIlvAAg");
	this.shape_9.setTransform(530.3,144.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkmHPIAAudIJNAAIAAOdgADOGeIA+AAIAAh6Ig+AAgABvGeIA+AAIAAh6Ig+AAgAAQGeIA+AAIAAh6Ig+AAgAhNGeIA9AAIAAh6Ig9AAgAisGeIA+AAIAAh6Ig+AAgAkLGeIA9AAIAAh6Ig9AAgADODwIA+AAIAAh7Ig+AAgABvDwIA+AAIAAh7Ig+AAgAAQDwIA+AAIAAh7Ig+AAgAhNDwIA9AAIAAh7Ig9AAgAisDwIA+AAIAAh7Ig+AAgAkLDwIA9AAIAAh7Ig9AAgADOBBIA+AAIAAh4Ig+AAgABvBBIA+AAIAAh4Ig+AAgAAQBBIA+AAIAAh4Ig+AAgAhNBBIA9AAIAAh4Ig9AAgAisBBIA+AAIAAh4Ig+AAgAkLBBIA9AAIAAh4Ig9AAgADOhsIA+AAIAAh6Ig+AAgABvhsIA+AAIAAh6Ig+AAgAAQhsIA+AAIAAh6Ig+AAgAhNhsIA9AAIAAh6Ig9AAgAishsIA+AAIAAh6Ig+AAgAkLhsIA9AAIAAh6Ig9AAgADOkbIA+AAIAAh5Ig+AAgABvkbIA+AAIAAh5Ig+AAgAAQkbIA+AAIAAh5Ig+AAgAhNkbIA9AAIAAh5Ig9AAgAiskbIA+AAIAAh5Ig+AAgAkLkbIA9AAIAAh5Ig9AAg");
	this.shape_10.setTransform(630.1,169.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B9EEF1").s().p("AiKFjIAAgXIEEAAIAAg8IkEAAIAAgiIEEAAIAAg9IkEAAIAAgiIEEAAIAAg8IkEAAIAAgjIEEAAIAAg6IkEAAIAAgiIEEAAIAAg9IkEAAIAAgiIEEAAIAAg8IkEAAIAAgjIEEAAIAAg8IkEAAIAAg8IEVAAIAALFg");
	this.shape_11.setTransform(470.3,154.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A7EAEE").s().p("AAKIFIAAgkIAuAAIAAg5IguAAIAAg2IAuAAIAAg5IguAAIAAg2IAuAAIAAg5IguAAIAAg2IAuAAIAAg5Ih0AAIAAAUIgUAAIgBgMIgDgMIgEgKIgDgEIgBgDIgCgCIgEgFIgMgLIgBgBIgEgDIgBAAQgLgIgMgDIAoAAIAAg3IhMAAIAAg2IBMAAIAAg6IhMAAIAAgIIg/AAIAAkAICGAAIAAh6IFXAAIAAQJgABgHhIB2AAIAAg5Ih2AAgABgFyIB2AAIAAg5Ih2AAgABgEDIB2AAIAAg5Ih2AAgABgCUIB2AAIAAg5Ih2AAgABgAlIB2AAIAAg3Ih2AAgAg8AlIB0AAIAAg3Ih0AAgABghIIB2AAIAAg6Ih2AAgAg8hIIB0AAIAAg6Ih0AAgABgi4IB2AAIAAg5Ih2AAgAg8i4IB0AAIAAg5Ih0AAgAjZi4IB2AAIAAg5Ih2AAgABgknIB2AAIAAg5Ih2AAgAg8knIB0AAIAAg5Ih0AAgAjZknIB2AAIAAg5Ih2AAgACJmNIBNAAIAAhYIhNAAgAAdmNIBMAAIAAhYIhMAAgAhOmNIBMAAIAAhYIhMAAg");
	this.shape_12.setTransform(339.1,107.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CAF2F5").s().p("AAmJgIAAhFIhFAAIAABFIgWAAIAAhFIhIAAIAABFIgVAAIAAhFIhIAAIAABFIgjAAIAAy/IH7AAIAACsQgfACgXAUIgvAAIAAA5IgWAAIAAg5IhIAAIAABuIAVAAIAAAwIgVAAIAABvIAVAAIAAAwIgVAAIAABsIAVAAIAAAyIgVAAIAABuIAVAAIAAAwIgVAAIAABvIAVAAIAAAxIgVAAIAABtIAVAAIAAAyIgVAAIAABFgAgfHpIBFAAIAAhtIhFAAgAh9HpIBIAAIAAhtIhIAAgAjaHpIBIAAIAAhtIhIAAgAgfFLIBFAAIAAhvIhFAAgAh9FLIBIAAIAAhvIhIAAgAjaFLIBIAAIAAhvIhIAAgAgfCsIBFAAIAAhuIhFAAgAh9CsIBIAAIAAhuIhIAAgAjaCsIBIAAIAAhuIhIAAgAgfAMIBFAAIAAhsIhFAAgAh9AMIBIAAIAAhsIhIAAgAjaAMIBIAAIAAhsIhIAAgAgfiQIBFAAIAAhvIhFAAgAh9iQIBIAAIAAhvIhIAAgAjaiQIBIAAIAAhvIhIAAgAgfkvIBFAAIAAhuIhFAAgAh9kvIBIAAIAAhuIhIAAgAjakvIBIAAIAAhuIhIAAgACZnPIBHAAIAAhuIhHAAgAA7nPIBIAAIAAhuIhIAAgAgfnPIBFAAIAAhuIhFAAgAh9nPIBIAAIAAhuIhIAAgAjanPIBIAAIAAhuIhIAAg");
	this.shape_13.setTransform(296.1,154.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B9EEF1").s().p("AgkKpIAAgIIAUAAIAAhNIgUAAIAAgjIAUAAIAAhOIgUAAIAAgiIAUAAIAAhNIgUAAIAAgjIAUAAIAAhOIglAAIAABLIgfAAIAAhLIgmAAIAABLIgRAAIAAv2IEXAAIAAVRgABTKhIAlAAIAAhNIglAAgAAOKhIAlAAIAAhNIglAAgABTIxIAlAAIAAhOIglAAgAAOIxIAlAAIAAhOIglAAgABTHBIAlAAIAAhNIglAAgAAOHBIAlAAIAAhNIglAAgABTFRIAlAAIAAhOIglAAgAAOFRIAlAAIAAhOIglAAgABTDhIAlAAIAAhNIglAAgAAODhIAlAAIAAhNIglAAgAg1DhIAlAAIAAhNIglAAgAh6DhIAmAAIAAhNIgmAAgABTBxIAlAAIAAhOIglAAgAAOBxIAlAAIAAhOIglAAgAg1BxIAlAAIAAhOIglAAgAh6BxIAmAAIAAhOIgmAAgABTABIAlAAIAAhMIglAAgAAOABIAlAAIAAhMIglAAgAg1ABIAlAAIAAhMIglAAgAh6ABIAmAAIAAhMIgmAAgABThtIAlAAIAAhNIglAAgAAOhtIAlAAIAAhNIglAAgAg1htIAlAAIAAhNIglAAgAh6htIAmAAIAAhNIgmAAgABTjcIAlAAIAAhOIglAAgAAOjcIAlAAIAAhOIglAAgAg1jcIAlAAIAAhOIglAAgAh6jcIAmAAIAAhOIgmAAgABTlNIAlAAIAAhNIglAAgAAOlNIAlAAIAAhNIglAAgAg1lNIAlAAIAAhNIglAAgAh6lNIAmAAIAAhNIgmAAgABTm8IAlAAIAAhOIglAAgAAOm8IAlAAIAAhOIglAAgAg1m8IAlAAIAAhOIglAAgAh6m8IAmAAIAAhOIgmAAgABTotIAlAAIAAhNIglAAgAAOotIAlAAIAAhNIglAAgAg1otIAlAAIAAhNIglAAgAh6otIAmAAIAAhNIgmAAg");
	this.shape_14.setTransform(239.3,147.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B9EEF1").s().p("ACyDTIAAisQABgagTgRQgSgSgbAAQgaAAgTASQgSARAAAaIAACsIhiAAIAAisQAAgagTgRQgSgSgaAAQgaAAgTASQgSARAAAaIAACsIhCAAIAAmkIHdAAIAAGkg");
	this.shape_15.setTransform(24,194.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B9EEF1").s().p("AjuAuIAAhaIHdAAIAABag");
	this.shape_16.setTransform(24,167.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B0ECF0").s().p("AiUDyIAAnjIEpAAIAAHjgAAOClIBeAAIAAhoIheAAgAh3ClIBeAAIAAhoIheAAgAAOAbIBeAAIAAhmIheAAgAh3AbIBeAAIAAhmIheAAgAAOhtIBeAAIAAhnIheAAgAh3htIBeAAIAAhnIheAAg");
	this.shape_17.setTransform(674,190.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#84E2E7").s().p("AhZAmIAAhLICzAAIAABLg");
	this.shape_18.setTransform(261.9,126.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#84E2E7").s().p("AhZAWIAAgrICzAAIAAArg");
	this.shape_19.setTransform(261.9,150.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#84E2E7").s().p("AhZAXIAAgsICzAAIAAAsg");
	this.shape_20.setTransform(261.9,139.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#84E2E7").s().p("AhZAWIAAgrICzAAIAAArg");
	this.shape_21.setTransform(261.9,162.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#84E2E7").s().p("AhZAXIAAgtICzAAIAAAtg");
	this.shape_22.setTransform(261.9,173.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#84E2E7").s().p("AhZA3IAAhtICzAAIAABtg");
	this.shape_23.setTransform(261.9,210.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#84E2E7").s().p("AhZAWIAAgsICzAAIAAAsg");
	this.shape_24.setTransform(261.9,195.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#84E2E7").s().p("AhZAXIAAgsICzAAIAAAsg");
	this.shape_25.setTransform(261.9,184.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B9EEF1").s().p("ABYM2IAAgZIivAAIAAAZIgSAAIAAgZIixAAIAAAZIgLAAIAA0NICqAAIAAjlIF7h5IAAFeIAmAAIAAFqIjGAAIAAOdIDGAAIAAAGgAhXL5ICvAAIAAguIivAAgAkaL5ICxAAIAAguIixAAgAhXKnICvAAIAAgvIivAAgAkaKnICxAAIAAgvIixAAgAhXJUICvAAIAAgtIivAAgAkaJUICxAAIAAgtIixAAgAhXIDICvAAIAAgvIivAAgAkaIDICxAAIAAgvIixAAgAhXGxICvAAIAAgvIivAAgAkaGxICxAAIAAgvIixAAgAhXFeICvAAIAAgvIivAAgAkaFeICxAAIAAgvIixAAgAhXEMICvAAIAAgvIivAAgAkaEMICxAAIAAgvIixAAgAhXC5ICvAAIAAguIivAAgAkaC5ICxAAIAAguIixAAgAhXBnICvAAIAAguIivAAgAkaBnICxAAIAAguIixAAgAhXAVICvAAIAAgsIivAAgAkaAVICxAAIAAgsIixAAgAhXg7ICvAAIAAguIivAAgAkag7ICxAAIAAguIixAAgABqiNICxAAIAAgvIixAAgAhXiNICvAAIAAgvIivAAgAkaiNICxAAIAAgvIixAAgABqjfICxAAIAAgvIixAAgAhXjfICvAAIAAgvIivAAgAkajfICxAAIAAgvIixAAgABqkyICxAAIAAgvIixAAgAhXkyICvAAIAAgvIivAAgAkakyICxAAIAAgvIixAAgABqmEICxAAIAAgvIixAAgAhXmEICvAAIAAgvIivAAgAkamEICxAAIAAgvIixAAgABLnUICnAAIAAhSIinAAgAhrnUIClAAIAAhSIilAAgABLo3ICnAAIAAhSIinAAgAhro3IClAAIAAhSIilAAgABLrpIAABPICnAAIAAiBgAhrqxIAAAXIClAAIAAhKg");
	this.shape_26.setTransform(590.9,133.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#84E2E7").s().p("AivIlIAAgGIBPAAIAAgZIAVAAIAAg6IgVAAIAAguIAVAAIAAg5IgVAAIAAguIAVAAIAAg6IgVAAIAAgtIAVAAIAAg6IgVAAIAAguIAVAAIAAg5IgVAAIAAguIAVAAIAAg4IgVAAIAAgtIAVAAIAAg6IgVAAIAAgGIhPAAIAAmAIFfAAIAAHfIgoAAIAAJqgABLIGIA9AAIAAg6Ig9AAgAgcIGIA5AAIAAg6Ig5AAgABLGeIA9AAIAAg5Ig9AAgAgcGeIA5AAIAAg5Ig5AAgABLE3IA9AAIAAg6Ig9AAgAgcE3IA5AAIAAg6Ig5AAgABLDQIA9AAIAAg6Ig9AAgAgcDQIA5AAIAAg6Ig5AAgABLBoIA9AAIAAg5Ig9AAgAgcBoIA5AAIAAg5Ig5AAgABLABIA9AAIAAg4Ig9AAgAgcABIA5AAIAAg4Ig5AAgABLhkIA9AAIAAg6Ig9AAgAgchkIA5AAIAAg6Ig5AAgABLjMIA9AAIAAg5Ig9AAgAgcjMIA5AAIAAg5Ig5AAgAiHjMIA8AAIAAg5Ig8AAgABLkzIA9AAIAAg6Ig9AAgAgckzIA5AAIAAg6Ig5AAgAiHkzIA8AAIAAg6Ig8AAgABLmaIA9AAIAAg6Ig9AAgAgcmaIA5AAIAAg6Ig5AAgAiHmaIA8AAIAAg6Ig8AAg");
	this.shape_27.setTransform(494,135.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#84E2E7").s().p("AjzELIAAoVIHnAAIAAIVgAB9D9IByAAIAAgnIhyAAgAAFD9IByAAIAAgnIhyAAgAhxD9IBxAAIAAgnIhxAAgAjqD9IByAAIAAgnIhyAAgAB9C0IByAAIAAgnIhyAAgAAFC0IByAAIAAgnIhyAAgAhxC0IBxAAIAAgnIhxAAgAjqC0IByAAIAAgnIhyAAgAB9BrIByAAIAAgnIhyAAgAAFBrIByAAIAAgnIhyAAgAhxBrIBxAAIAAgnIhxAAgAjqBrIByAAIAAgnIhyAAgAB9AiIByAAIAAglIhyAAgAAFAiIByAAIAAglIhyAAgAhxAiIBxAAIAAglIhxAAgAjqAiIByAAIAAglIhyAAgAB9glIByAAIAAgnIhyAAgAAFglIByAAIAAgnIhyAAgAhxglIBxAAIAAgnIhxAAgAjqglIByAAIAAgnIhyAAgAB9huIByAAIAAgnIhyAAgAAFhuIByAAIAAgnIhyAAgAhxhuIBxAAIAAgnIhxAAgAjqhuIByAAIAAgnIhyAAgAB9i3IByAAIAAgnIhyAAgAAFi3IByAAIAAgnIhyAAgAhxi3IBxAAIAAgnIhxAAgAjqi3IByAAIAAgnIhyAAg");
	this.shape_28.setTransform(387.3,131.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#84E2E7").s().p("Ag4BjIAAjEIBxAAIAADEg");
	this.shape_29.setTransform(172.4,205.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#84E2E7").s().p("AhsAtIAAhaIDYAAIAAAgIhnAAIAAA6g");
	this.shape_30.setTransform(177.6,182.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#84E2E7").s().p("AhwAtIAAhZIDhAAIAABZg");
	this.shape_31.setTransform(178.1,129.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#84E2E7").s().p("AhwAuIAAhaIDhAAIAABag");
	this.shape_32.setTransform(178.1,146.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#84E2E7").s().p("AhwAqIAAhTIDhAAIAABTg");
	this.shape_33.setTransform(178.1,111.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#84E2E7").s().p("AhwAuIAAhbIDhAAIAABbg");
	this.shape_34.setTransform(178.1,164.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#84E2E7").s().p("AjMGFIAAsJIGZAAIAACuIh2AAIAAgBIBrAAIAAgSIhzAAIAAA3IAIAAIAAI3gAgzFzIBxAAIAAg4IhxAAgAi3FzIBzAAIAAg4IhzAAgAgzEXIBxAAIAAg3IhxAAgAi3EXIBzAAIAAg3IhzAAgAgzC7IBxAAIAAg3IhxAAgAi3C7IBzAAIAAg3IhzAAgAgzBgIBxAAIAAg4IhxAAgAi3BgIBzAAIAAg4IhzAAgAgzADIBxAAIAAg1IhxAAgAi3ADIBzAAIAAg1IhzAAgAgzhXIBxAAIAAg3IhxAAgAi3hXIBzAAIAAg3IhzAAgAgziyIBxAAIAAg3IhxAAgAi3iyIBzAAIAAg3IhzAAgABPkOIBzAAIAAg3IhzAAgAgzkOIBxAAIAAg3IhxAAgAi3kOIBzAAIAAg3IhzAAg");
	this.shape_35.setTransform(112.3,103.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#84E2E7").s().p("Ai2FvIAArdIFtAAIAADlIi5AAIAAH4gAinElICkAAIAAhFIikAAgAinB7ICkAAIAAhFIikAAgAinguICkAAIAAhFIikAAgAinjZIFOAAIAAhFIlOAAg");
	this.shape_36.setTransform(47.8,130.8);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = mask;

	// Layer 3
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AIuCDIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgOAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgeAAIAAhuQAAgQgLgJQgLgMgQAAQgQAAgLAMQgLAJAAAQIAABuIgnAAIAAkFITPAAIAAEFg");
	this.shape_37.setTransform(480.1,202.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DCF7F8").s().p("AjgHrIAAvVIHBAAIAAPVgAA9HoIBBAAIAAhNIhBAAgAh9HoIBBAAIAAhNIhBAAgAA9FiIBBAAIAAhNIhBAAgAh9FiIBBAAIAAhNIhBAAgAA9DcIBBAAIAAhNIhBAAgAh9DcIBBAAIAAhNIhBAAgAA9BWIBBAAIAAhNIhBAAgAh9BWIBBAAIAAhNIhBAAgAA9guIBBAAIAAhNIhBAAgAh9guIBBAAIAAhNIhBAAgAA9i0IBBAAIAAhNIhBAAgAh9i0IBBAAIAAhNIhBAAgAA9k6IBBAAIAAhNIhBAAgAh9k6IBBAAIAAhNIhBAAg");
	this.shape_38.setTransform(70,166.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AEEFtIAAhbIhWAAIAABbIgXAAIAAhbIhWAAIAABbIgXAAIAAhbIhUAAIAABbIgXAAIAAhbIhXAAIAABbIgWAAIAAhbIhXAAIAABbIgRAAIAArZIItAAIAALZgACuD4IBWAAIAAhcIhWAAgABBD4IBWAAIAAhcIhWAAgAgqD4IBUAAIAAhcIhUAAgAiYD4IBXAAIAAhcIhXAAgAkFD4IBXAAIAAhcIhXAAgACuCCIBWAAIAAhcIhWAAgABBCCIBWAAIAAhcIhWAAgAgqCCIBUAAIAAhcIhUAAgAiYCCIBXAAIAAhcIhXAAgAkFCCIBXAAIAAhcIhXAAgACuANIBWAAIAAhaIhWAAgABBANIBWAAIAAhaIhWAAgAgqANIBUAAIAAhaIhUAAgAiYANIBXAAIAAhaIhXAAgAkFANIBXAAIAAhaIhXAAgACuhnIBWAAIAAhbIhWAAgABBhnIBWAAIAAhbIhWAAgAgqhnIBUAAIAAhbIhUAAgAiYhnIBXAAIAAhbIhXAAgAkFhnIBXAAIAAhbIhXAAgACujdIBWAAIAAhbIhWAAgABBjdIBWAAIAAhbIhWAAgAgqjdIBUAAIAAhbIhUAAgAiYjdIBXAAIAAhbIhXAAgAkFjdIBXAAIAAhbIhXAAg");
	this.shape_39.setTransform(120.3,178.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B9EEF1").s().p("ADOKcIAAg8IhFAAIAAA8IgSAAIAAg8IhFAAIAAA8IgNAAIAArcIgEAAIAAhXIhDAAIAABXIgSAAIAAhXIhGAAIAABXIgSAAIAAhXIhEAAIAABXIgXAAIAApbIHPAAIAAU3gACJJBIBFAAIAAh5IhFAAgAAyJBIBFAAIAAh5IhFAAgACJGoIBFAAIAAh4IhFAAgAAyGoIBFAAIAAh4IhFAAgACJEQIBFAAIAAh4IhFAAgAAyEQIBFAAIAAh4IhFAAgACJB4IBFAAIAAh4IhFAAgAAyB4IBFAAIAAh4IhFAAgACJgeIBFAAIAAh5IhFAAgAAygeIBFAAIAAh5IhFAAgACJi2IBFAAIAAh5IhFAAgAAyi2IBFAAIAAh5IhFAAgAgii2IBDAAIAAh5IhDAAgAh6i2IBGAAIAAh5IhGAAgAjQi2IBEAAIAAh5IhEAAgACJlOIBFAAIAAh5IhFAAgAAylOIBFAAIAAh5IhFAAgAgilOIBDAAIAAh5IhDAAgAh6lOIBGAAIAAh5IhGAAgAjQlOIBEAAIAAh5IhEAAgACJnmIBFAAIAAh5IhFAAgAAynmIBFAAIAAh5IhFAAgAginmIBDAAIAAh5IhDAAgAh6nmIBGAAIAAh5IhGAAgAjQnmIBEAAIAAh5IhEAAg");
	this.shape_40.setTransform(144.4,148.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("ADaNJIAAk5IhFAAIAAE5Ig3AAIAAjpIi/AAIAADpIg4AAIAAk5IhFAAIAAE5IhAAAIAAlfIBoAAIAAzZIAuAAIAAhZIESAAIAABZIAuAAIAATZIBmAAIAAFfgAhhI+IC/AAIAAgrIi/AAgABqHqIAoAAIAAzQIgoAAgAgTHqIAnAAIAAzQIgnAAgAiRHqIApAAIAAzQIgpAAg");
	this.shape_41.setTransform(206.9,131.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AizINIAAvKIBdAAIgBgDQAAgfAbgWQAagXAiAAQAjAAAaAXQAaAWAAAfIAAADIBdAAIAAPKgAAym4QAVAVAAAeIAAADIBcAAIAAN/IALAAIAAuPIhhAAIAAgDQAAghgYgUQgWgTgfAAQgeAAgXATQgYAUAAAhIABADIhiAAIAAOPIAMAAIAAt/IBcAAIAAgDQAAgeAVgVQAVgVAcAAQAdAAAVAVgAAqHCIBXAAIAAg5IhXAAgAiAHCIBWAAIAAg5IhWAAgAAqFYIBXAAIAAg6IhXAAgAiAFYIBWAAIAAg6IhWAAgAAqDuIBXAAIAAg6IhXAAgAiADuIBWAAIAAg6IhWAAgAAqCDIBXAAIAAg5IhXAAgAiACDIBWAAIAAg5IhWAAgAAqAZIBXAAIAAg3IhXAAgAiAAZIBWAAIAAg3IhWAAgAAqhPIBXAAIAAg5IhXAAgAiAhPIBWAAIAAg5IhWAAgAAqi5IBXAAIAAg6IhXAAgAiAi5IBWAAIAAg6IhWAAgAAqkjIBXAAIAAg6IhXAAgAiAkjIBWAAIAAg6IhWAAg");
	this.shape_42.setTransform(322.1,163.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AmIEEIAAoHIMRAAIAAIHgACdEBIB4AAIAAhzIh4AAgAg6EBIB2AAIAAhzIh2AAgAkTEBIB4AAIAAhzIh4AAgAD6BJIBEAAIAAg0IhEAAgABtBJIBEAAIAAg0IhEAAgAgeBJIBCAAIAAg0IhCAAgAisBJIBEAAIAAg0IhEAAgAk5BJIBEAAIAAg0IhEAAgAD6gaIBEAAIAAg0IhEAAgABtgaIBEAAIAAg0IhEAAgAgegaIBCAAIAAg0IhCAAgAisgaIBEAAIAAg0IhEAAgAk5gaIBEAAIAAg0IhEAAgAD6iUIBEAAIAAg1IhEAAgABtiUIBEAAIAAg1IhEAAgAgeiUIBCAAIAAg1IhCAAgAisiUIBEAAIAAg1IhEAAgAk5iUIBEAAIAAg1IhEAAg");
	this.shape_43.setTransform(379.1,190.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AmZAWIAAgrIMzAAIAAArg");
	this.shape_44.setTransform(380.9,160.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DCF7F8").s().p("ADOKzIAAhYIg3AAIAABYIgRAAIAAhYIg3AAIAABYIgQAAIAAhYIg3AAIAABYIgPAAIAAhYIg3AAIAABYIgQAAIAAhYIg4AAIAABYIgQAAIAAhYIgEAAIAAg9IAEAAIAAhcIgEAAIAAg8IAEAAIAAhdIg3AAIAABPIgTAAIAAwqIHBAAIAAVlgACXIeIA3AAIAAhcIg3AAgABPIeIA3AAIAAhcIg3AAgAAIIeIA3AAIAAhcIg3AAgAg+IeIA3AAIAAhcIg3AAgAiGIeIA4AAIAAhcIg4AAgACXGGIA3AAIAAhdIg3AAgABPGGIA3AAIAAhdIg3AAgAAIGGIA3AAIAAhdIg3AAgAg+GGIA3AAIAAhdIg3AAgAiGGGIA4AAIAAhdIg4AAgACXDtIA3AAIAAhdIg3AAgABPDtIA3AAIAAhdIg3AAgAAIDtIA3AAIAAhdIg3AAgAg+DtIA3AAIAAhdIg3AAgAiGDtIA4AAIAAhdIg4AAgAjNDtIA3AAIAAhdIg3AAgACXBUIA3AAIAAhbIg3AAgABPBUIA3AAIAAhbIg3AAgAAIBUIA3AAIAAhbIg3AAgAg+BUIA3AAIAAhbIg3AAgAiGBUIA4AAIAAhbIg4AAgAjNBUIA3AAIAAhbIg3AAgACXhDIA3AAIAAhcIg3AAgABPhDIA3AAIAAhcIg3AAgAAIhDIA3AAIAAhcIg3AAgAg+hDIA3AAIAAhcIg3AAgAiGhDIA4AAIAAhcIg4AAgAjNhDIA3AAIAAhcIg3AAgACXjcIA3AAIAAhcIg3AAgABPjcIA3AAIAAhcIg3AAgAAIjcIA3AAIAAhcIg3AAgAg+jcIA3AAIAAhcIg3AAgAiGjcIA4AAIAAhcIg4AAgAjNjcIA3AAIAAhcIg3AAgACXl0IA3AAIAAhdIg3AAgABPl0IA3AAIAAhdIg3AAgAAIl0IA3AAIAAhdIg3AAgAg+l0IA3AAIAAhdIg3AAgAiGl0IA4AAIAAhdIg4AAgAjNl0IA3AAIAAhdIg3AAgACXoNIA3AAIAAhdIg3AAgABPoNIA3AAIAAhdIg3AAgAAIoNIA3AAIAAhdIg3AAgAg+oNIA3AAIAAhdIg3AAgAiGoNIA4AAIAAhdIg4AAgAjNoNIA3AAIAAhdIg3AAg");
	this.shape_45.setTransform(434.1,120.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DCF7F8").s().p("ABkLMIAAg1IB1AAIAAgrIh1AAIAAgVIB1AAIAAgrIh1AAIAAgVIB1AAIAAgrIh1AAIAAgVIB1AAIAAgrIjMAAIAAAZIgZAAIAAgZIjMAAIAAAZIgTAAIAApXIgZAAIAAhoIA8AAIAAktIgZAAIAAgrIAqAAIAAgbIFvheIAAB5IAqAAIAAArIgaAAIAAEtIA9AAIAABoIgaAAIAANegAANGXIDMAAIAAgrIjMAAgAjYGXIDMAAIAAgrIjMAAgAANFWIDMAAIAAgrIjMAAgAjYFWIDMAAIAAgrIjMAAgAANEWIDMAAIAAgrIjMAAgAjYEWIDMAAIAAgrIjMAAgAANDWIDMAAIAAgrIjMAAgAjYDWIDMAAIAAgrIjMAAgAANCWIDMAAIAAgrIjMAAgAjYCWIDMAAIAAgrIjMAAgAANBWIDMAAIAAgrIjMAAgAjYBWIDMAAIAAgrIjMAAgAANAWIDMAAIAAgpIjMAAgAjYAWIDMAAIAAgpIjMAAgAANgoIDMAAIAAgrIjMAAgAjYgoIDMAAIAAgrIjMAAgAANhoIDMAAIAAgrIjMAAgAjYhoIDMAAIAAgrIjMAAgAi3j4IFvAAIAAguIlvAAgAi3k4IFvAAIAAguIlvAAgAi3l4IFvAAIAAguIlvAAgAi3m4IFvAAIAAguIlvAAgAi3n4IFvAAIAAguIlvAAg");
	this.shape_46.setTransform(530.3,144.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AkmHPIAAudIJNAAIAAOdgADOGeIA+AAIAAh6Ig+AAgABvGeIA+AAIAAh6Ig+AAgAAQGeIA+AAIAAh6Ig+AAgAhNGeIA9AAIAAh6Ig9AAgAisGeIA+AAIAAh6Ig+AAgAkLGeIA9AAIAAh6Ig9AAgADODwIA+AAIAAh7Ig+AAgABvDwIA+AAIAAh7Ig+AAgAAQDwIA+AAIAAh7Ig+AAgAhNDwIA9AAIAAh7Ig9AAgAisDwIA+AAIAAh7Ig+AAgAkLDwIA9AAIAAh7Ig9AAgADOBBIA+AAIAAh4Ig+AAgABvBBIA+AAIAAh4Ig+AAgAAQBBIA+AAIAAh4Ig+AAgAhNBBIA9AAIAAh4Ig9AAgAisBBIA+AAIAAh4Ig+AAgAkLBBIA9AAIAAh4Ig9AAgADOhsIA+AAIAAh6Ig+AAgABvhsIA+AAIAAh6Ig+AAgAAQhsIA+AAIAAh6Ig+AAgAhNhsIA9AAIAAh6Ig9AAgAishsIA+AAIAAh6Ig+AAgAkLhsIA9AAIAAh6Ig9AAgADOkbIA+AAIAAh5Ig+AAgABvkbIA+AAIAAh5Ig+AAgAAQkbIA+AAIAAh5Ig+AAgAhNkbIA9AAIAAh5Ig9AAgAiskbIA+AAIAAh5Ig+AAgAkLkbIA9AAIAAh5Ig9AAg");
	this.shape_47.setTransform(630.1,169.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B9EEF1").s().p("AiKFjIAAgXIEEAAIAAg8IkEAAIAAgiIEEAAIAAg9IkEAAIAAgiIEEAAIAAg8IkEAAIAAgjIEEAAIAAg6IkEAAIAAgiIEEAAIAAg9IkEAAIAAgiIEEAAIAAg8IkEAAIAAgjIEEAAIAAg8IkEAAIAAg8IEVAAIAALFg");
	this.shape_48.setTransform(470.3,154.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A7EAEE").s().p("AAKIFIAAgkIAuAAIAAg5IguAAIAAg2IAuAAIAAg5IguAAIAAg2IAuAAIAAg5IguAAIAAg2IAuAAIAAg5Ih0AAIAAAUIgUAAIgBgMIgDgMIgEgKIgDgEIgBgDIgCgCIgEgFIgMgLIgBgBIgEgDIgBAAQgLgIgMgDIAoAAIAAg3IhMAAIAAg2IBMAAIAAg6IhMAAIAAgIIg/AAIAAkAICGAAIAAh6IFXAAIAAQJgABgHhIB2AAIAAg5Ih2AAgABgFyIB2AAIAAg5Ih2AAgABgEDIB2AAIAAg5Ih2AAgABgCUIB2AAIAAg5Ih2AAgABgAlIB2AAIAAg3Ih2AAgAg8AlIB0AAIAAg3Ih0AAgABghIIB2AAIAAg6Ih2AAgAg8hIIB0AAIAAg6Ih0AAgABgi4IB2AAIAAg5Ih2AAgAg8i4IB0AAIAAg5Ih0AAgAjZi4IB2AAIAAg5Ih2AAgABgknIB2AAIAAg5Ih2AAgAg8knIB0AAIAAg5Ih0AAgAjZknIB2AAIAAg5Ih2AAgACJmNIBNAAIAAhYIhNAAgAAdmNIBMAAIAAhYIhMAAgAhOmNIBMAAIAAhYIhMAAg");
	this.shape_49.setTransform(339.1,107.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CAF2F5").s().p("AAmJgIAAhFIhFAAIAABFIgWAAIAAhFIhIAAIAABFIgVAAIAAhFIhIAAIAABFIgjAAIAAy/IH7AAIAACsQgfACgXAUIgvAAIAAA5IgWAAIAAg5IhIAAIAABuIAVAAIAAAwIgVAAIAABvIAVAAIAAAwIgVAAIAABsIAVAAIAAAyIgVAAIAABuIAVAAIAAAwIgVAAIAABvIAVAAIAAAxIgVAAIAABtIAVAAIAAAyIgVAAIAABFgAgfHpIBFAAIAAhtIhFAAgAh9HpIBIAAIAAhtIhIAAgAjaHpIBIAAIAAhtIhIAAgAgfFLIBFAAIAAhvIhFAAgAh9FLIBIAAIAAhvIhIAAgAjaFLIBIAAIAAhvIhIAAgAgfCsIBFAAIAAhuIhFAAgAh9CsIBIAAIAAhuIhIAAgAjaCsIBIAAIAAhuIhIAAgAgfAMIBFAAIAAhsIhFAAgAh9AMIBIAAIAAhsIhIAAgAjaAMIBIAAIAAhsIhIAAgAgfiQIBFAAIAAhvIhFAAgAh9iQIBIAAIAAhvIhIAAgAjaiQIBIAAIAAhvIhIAAgAgfkvIBFAAIAAhuIhFAAgAh9kvIBIAAIAAhuIhIAAgAjakvIBIAAIAAhuIhIAAgACZnPIBHAAIAAhuIhHAAgAA7nPIBIAAIAAhuIhIAAgAgfnPIBFAAIAAhuIhFAAgAh9nPIBIAAIAAhuIhIAAgAjanPIBIAAIAAhuIhIAAg");
	this.shape_50.setTransform(296.1,154.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B9EEF1").s().p("AgkKpIAAgIIAUAAIAAhNIgUAAIAAgjIAUAAIAAhOIgUAAIAAgiIAUAAIAAhNIgUAAIAAgjIAUAAIAAhOIglAAIAABLIgfAAIAAhLIgmAAIAABLIgRAAIAAv2IEXAAIAAVRgABTKhIAlAAIAAhNIglAAgAAOKhIAlAAIAAhNIglAAgABTIxIAlAAIAAhOIglAAgAAOIxIAlAAIAAhOIglAAgABTHBIAlAAIAAhNIglAAgAAOHBIAlAAIAAhNIglAAgABTFRIAlAAIAAhOIglAAgAAOFRIAlAAIAAhOIglAAgABTDhIAlAAIAAhNIglAAgAAODhIAlAAIAAhNIglAAgAg1DhIAlAAIAAhNIglAAgAh6DhIAmAAIAAhNIgmAAgABTBxIAlAAIAAhOIglAAgAAOBxIAlAAIAAhOIglAAgAg1BxIAlAAIAAhOIglAAgAh6BxIAmAAIAAhOIgmAAgABTABIAlAAIAAhMIglAAgAAOABIAlAAIAAhMIglAAgAg1ABIAlAAIAAhMIglAAgAh6ABIAmAAIAAhMIgmAAgABThtIAlAAIAAhNIglAAgAAOhtIAlAAIAAhNIglAAgAg1htIAlAAIAAhNIglAAgAh6htIAmAAIAAhNIgmAAgABTjcIAlAAIAAhOIglAAgAAOjcIAlAAIAAhOIglAAgAg1jcIAlAAIAAhOIglAAgAh6jcIAmAAIAAhOIgmAAgABTlNIAlAAIAAhNIglAAgAAOlNIAlAAIAAhNIglAAgAg1lNIAlAAIAAhNIglAAgAh6lNIAmAAIAAhNIgmAAgABTm8IAlAAIAAhOIglAAgAAOm8IAlAAIAAhOIglAAgAg1m8IAlAAIAAhOIglAAgAh6m8IAmAAIAAhOIgmAAgABTotIAlAAIAAhNIglAAgAAOotIAlAAIAAhNIglAAgAg1otIAlAAIAAhNIglAAgAh6otIAmAAIAAhNIgmAAg");
	this.shape_51.setTransform(239.3,147.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B9EEF1").s().p("ACyDTIAAisQABgagTgRQgSgSgbAAQgaAAgTASQgSARAAAaIAACsIhiAAIAAisQAAgagTgRQgSgSgaAAQgaAAgTASQgSARAAAaIAACsIhCAAIAAmkIHdAAIAAGkg");
	this.shape_52.setTransform(24,194.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B9EEF1").s().p("AjuAuIAAhaIHdAAIAABag");
	this.shape_53.setTransform(24,167.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B0ECF0").s().p("AiUDyIAAnjIEpAAIAAHjgAAOClIBeAAIAAhoIheAAgAh3ClIBeAAIAAhoIheAAgAAOAbIBeAAIAAhmIheAAgAh3AbIBeAAIAAhmIheAAgAAOhtIBeAAIAAhnIheAAgAh3htIBeAAIAAhnIheAAg");
	this.shape_54.setTransform(674,190.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#84E2E7").s().p("AhZAmIAAhLICzAAIAABLg");
	this.shape_55.setTransform(261.9,126.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#84E2E7").s().p("AhZAWIAAgrICzAAIAAArg");
	this.shape_56.setTransform(261.9,150.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#84E2E7").s().p("AhZAXIAAgsICzAAIAAAsg");
	this.shape_57.setTransform(261.9,139.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#84E2E7").s().p("AhZAWIAAgrICzAAIAAArg");
	this.shape_58.setTransform(261.9,162.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#84E2E7").s().p("AhZAXIAAgtICzAAIAAAtg");
	this.shape_59.setTransform(261.9,173.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#84E2E7").s().p("AhZA3IAAhtICzAAIAABtg");
	this.shape_60.setTransform(261.9,210.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#84E2E7").s().p("AhZAWIAAgsICzAAIAAAsg");
	this.shape_61.setTransform(261.9,195.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#84E2E7").s().p("AhZAXIAAgsICzAAIAAAsg");
	this.shape_62.setTransform(261.9,184.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B9EEF1").s().p("ABYM2IAAgZIivAAIAAAZIgSAAIAAgZIixAAIAAAZIgLAAIAA0NICqAAIAAjlIF7h5IAAFeIAmAAIAAFqIjGAAIAAOdIDGAAIAAAGgAhXL5ICvAAIAAguIivAAgAkaL5ICxAAIAAguIixAAgAhXKnICvAAIAAgvIivAAgAkaKnICxAAIAAgvIixAAgAhXJUICvAAIAAgtIivAAgAkaJUICxAAIAAgtIixAAgAhXIDICvAAIAAgvIivAAgAkaIDICxAAIAAgvIixAAgAhXGxICvAAIAAgvIivAAgAkaGxICxAAIAAgvIixAAgAhXFeICvAAIAAgvIivAAgAkaFeICxAAIAAgvIixAAgAhXEMICvAAIAAgvIivAAgAkaEMICxAAIAAgvIixAAgAhXC5ICvAAIAAguIivAAgAkaC5ICxAAIAAguIixAAgAhXBnICvAAIAAguIivAAgAkaBnICxAAIAAguIixAAgAhXAVICvAAIAAgsIivAAgAkaAVICxAAIAAgsIixAAgAhXg7ICvAAIAAguIivAAgAkag7ICxAAIAAguIixAAgABqiNICxAAIAAgvIixAAgAhXiNICvAAIAAgvIivAAgAkaiNICxAAIAAgvIixAAgABqjfICxAAIAAgvIixAAgAhXjfICvAAIAAgvIivAAgAkajfICxAAIAAgvIixAAgABqkyICxAAIAAgvIixAAgAhXkyICvAAIAAgvIivAAgAkakyICxAAIAAgvIixAAgABqmEICxAAIAAgvIixAAgAhXmEICvAAIAAgvIivAAgAkamEICxAAIAAgvIixAAgABLnUICnAAIAAhSIinAAgAhrnUIClAAIAAhSIilAAgABLo3ICnAAIAAhSIinAAgAhro3IClAAIAAhSIilAAgABLrpIAABPICnAAIAAiBgAhrqxIAAAXIClAAIAAhKg");
	this.shape_63.setTransform(590.9,133.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#84E2E7").s().p("AivIlIAAgGIBPAAIAAgZIAVAAIAAg6IgVAAIAAguIAVAAIAAg5IgVAAIAAguIAVAAIAAg6IgVAAIAAgtIAVAAIAAg6IgVAAIAAguIAVAAIAAg5IgVAAIAAguIAVAAIAAg4IgVAAIAAgtIAVAAIAAg6IgVAAIAAgGIhPAAIAAmAIFfAAIAAHfIgoAAIAAJqgABLIGIA9AAIAAg6Ig9AAgAgcIGIA5AAIAAg6Ig5AAgABLGeIA9AAIAAg5Ig9AAgAgcGeIA5AAIAAg5Ig5AAgABLE3IA9AAIAAg6Ig9AAgAgcE3IA5AAIAAg6Ig5AAgABLDQIA9AAIAAg6Ig9AAgAgcDQIA5AAIAAg6Ig5AAgABLBoIA9AAIAAg5Ig9AAgAgcBoIA5AAIAAg5Ig5AAgABLABIA9AAIAAg4Ig9AAgAgcABIA5AAIAAg4Ig5AAgABLhkIA9AAIAAg6Ig9AAgAgchkIA5AAIAAg6Ig5AAgABLjMIA9AAIAAg5Ig9AAgAgcjMIA5AAIAAg5Ig5AAgAiHjMIA8AAIAAg5Ig8AAgABLkzIA9AAIAAg6Ig9AAgAgckzIA5AAIAAg6Ig5AAgAiHkzIA8AAIAAg6Ig8AAgABLmaIA9AAIAAg6Ig9AAgAgcmaIA5AAIAAg6Ig5AAgAiHmaIA8AAIAAg6Ig8AAg");
	this.shape_64.setTransform(494,135.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#84E2E7").s().p("AjzELIAAoVIHnAAIAAIVgAB9D9IByAAIAAgnIhyAAgAAFD9IByAAIAAgnIhyAAgAhxD9IBxAAIAAgnIhxAAgAjqD9IByAAIAAgnIhyAAgAB9C0IByAAIAAgnIhyAAgAAFC0IByAAIAAgnIhyAAgAhxC0IBxAAIAAgnIhxAAgAjqC0IByAAIAAgnIhyAAgAB9BrIByAAIAAgnIhyAAgAAFBrIByAAIAAgnIhyAAgAhxBrIBxAAIAAgnIhxAAgAjqBrIByAAIAAgnIhyAAgAB9AiIByAAIAAglIhyAAgAAFAiIByAAIAAglIhyAAgAhxAiIBxAAIAAglIhxAAgAjqAiIByAAIAAglIhyAAgAB9glIByAAIAAgnIhyAAgAAFglIByAAIAAgnIhyAAgAhxglIBxAAIAAgnIhxAAgAjqglIByAAIAAgnIhyAAgAB9huIByAAIAAgnIhyAAgAAFhuIByAAIAAgnIhyAAgAhxhuIBxAAIAAgnIhxAAgAjqhuIByAAIAAgnIhyAAgAB9i3IByAAIAAgnIhyAAgAAFi3IByAAIAAgnIhyAAgAhxi3IBxAAIAAgnIhxAAgAjqi3IByAAIAAgnIhyAAg");
	this.shape_65.setTransform(387.3,131.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#84E2E7").s().p("Ag4BjIAAjEIBxAAIAADEg");
	this.shape_66.setTransform(172.4,205.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#84E2E7").s().p("AhsAtIAAhaIDYAAIAAAgIhnAAIAAA6g");
	this.shape_67.setTransform(177.6,182.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#84E2E7").s().p("AhwAtIAAhZIDhAAIAABZg");
	this.shape_68.setTransform(178.1,129.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#84E2E7").s().p("AhwAuIAAhaIDhAAIAABag");
	this.shape_69.setTransform(178.1,146.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#84E2E7").s().p("AhwAqIAAhTIDhAAIAABTg");
	this.shape_70.setTransform(178.1,111.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#84E2E7").s().p("AhwAuIAAhbIDhAAIAABbg");
	this.shape_71.setTransform(178.1,164.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#84E2E7").s().p("AjMGFIAAsJIGZAAIAACuIh2AAIAAgBIBrAAIAAgSIhzAAIAAA3IAIAAIAAI3gAgzFzIBxAAIAAg4IhxAAgAi3FzIBzAAIAAg4IhzAAgAgzEXIBxAAIAAg3IhxAAgAi3EXIBzAAIAAg3IhzAAgAgzC7IBxAAIAAg3IhxAAgAi3C7IBzAAIAAg3IhzAAgAgzBgIBxAAIAAg4IhxAAgAi3BgIBzAAIAAg4IhzAAgAgzADIBxAAIAAg1IhxAAgAi3ADIBzAAIAAg1IhzAAgAgzhXIBxAAIAAg3IhxAAgAi3hXIBzAAIAAg3IhzAAgAgziyIBxAAIAAg3IhxAAgAi3iyIBzAAIAAg3IhzAAgABPkOIBzAAIAAg3IhzAAgAgzkOIBxAAIAAg3IhxAAgAi3kOIBzAAIAAg3IhzAAg");
	this.shape_72.setTransform(112.3,103.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#84E2E7").s().p("Ai2FvIAArdIFtAAIAADlIi5AAIAAH4gAinElICkAAIAAhFIikAAgAinB7ICkAAIAAhFIikAAgAinguICkAAIAAhFIikAAgAinjZIFOAAIAAhFIlOAAg");
	this.shape_73.setTransform(47.8,130.8);

	this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = mask;

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgtmAR4MAAAgjvMBbOAAAMAAAAjvg");
	mask_1.setTransform(344.5,114.4);

	this.addChild(this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(52.5,47.8,584,168.6);
p.frameBounds = [rect];


(lib.sym04 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8YOzIAA9lMA4xAAAIAAdlg");
	mask.setTransform(195.9,302.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDCFD1").s().p("A8YBxIAAjhMA4xAAAIAADhg");
	this.shape.setTransform(195.9,380.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CA0000").s().p("A0rY8QpjiEnXjwQnXjwkCk3QkMlBAAlgQAAlfEMlBQECk3HXjwQHXjwJjiEQJ4iIKzAAQK0AAJ4CIQJjCEHXDwQHXDwECE3QEMFBAAFfQAAFgkMFBQkCE3nXDwQnXDwpjCEQp4CIq0AAQqzAAp4iIg");
	this.shape_1.setTransform(381.5,173.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9D0000").s().p("A0rY8QpjiEnXjwQnXjwkCk3QkMlBAAlgQAAlfEMlBQECk3HXjwQHXjwJjiEQJ4iIKzAAQK0AAJ4CIQJjCEHXDwQHXDwECE3QEMFBAAFfQAAFgkMFBQkCE3nXDwQnXDwpjCEQp4CHq0ABQqzgBp4iHg");
	this.shape_2.setTransform(340.3,179.2);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CDCFD1").s().p("A8YBxIAAjhMA4xAAAIAADhg");
	this.shape_3.setTransform(195.9,380.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CA0000").s().p("A0rY8QpjiEnXjwQnXjwkCk3QkMlBAAlgQAAlfEMlBQECk3HXjwQHXjwJjiEQJ4iIKzAAQK0AAJ4CIQJjCEHXDwQHXDwECE3QEMFBAAFfQAAFgkMFBQkCE3nXDwQnXDwpjCEQp4CIq0AAQqzAAp4iIg");
	this.shape_4.setTransform(381.5,173.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9D0000").s().p("A0rY8QpjiEnXjwQnXjwkCk3QkMlBAAlgQAAlfEMlBQECk3HXjwQHXjwJjiEQJ4iIKzAAQK0AAJ4CIQJjCEHXDwQHXDwECE3QEMFBAAFfQAAFgkMFBQkCE3nXDwQnXDwpjCEQp4CHq0ABQqzgBp4iHg");
	this.shape_5.setTransform(340.3,179.2);

	this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = mask;

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A8YOzIAA9lMA4xAAAIAAdlg");
	mask_1.setTransform(195.9,302.6);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(14.2,207.8,363.5,184.3);
p.frameBounds = [rect];


(lib.sym003 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhGBvQgwgTgTgrQgUgsAUgsQAWg1BBgTQAygQA1ALQA6AMAXAnQAaArgWAxQgYA3hDAZQgjAOgeAAQgbAAgZgKg");
	mask.setTransform(18.3,12.2);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE9D2").s().p("Ag3BdQgpgWgQgtQgQgqATgiQASghA2gNQA1gNA1ARQAkAMAKAUQAMAYgQAtQgQAyg3AcQgfAPgYAAQgWAAgSgJg");
	this.shape.setTransform(18.5,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2CBA0").s().p("Ah0BHQg6gnADggQAFg2A1gyQgGAWAAAdQABA2AjAfQAtAoBCgNQBKgPAjhHQAZg0gQgYIAUAbQAQAngYAuQgYAxg6AXQgcAMhAALIgNABQglAAgygig");
	this.shape_1.setTransform(17.3,16.2);

	this.shape.mask = this.shape_1.mask = mask;

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE9D2").s().p("Ag3BdQgpgWgQgtQgQgqATgiQASghA2gNQA1gNA1ARQAkAMAKAUQAMAYgQAtQgQAyg3AcQgfAPgYAAQgWAAgSgJg");
	this.shape_2.setTransform(18.5,11.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2CBA0").s().p("Ah0BHQg6gnADggQAFg2A1gyQgGAWAAAdQABA2AjAfQAtAoBCgNQBKgPAjhHQAZg0gQgYIAUAbQAQAngYAuQgYAxg6AXQgcAMhAALIgNABQglAAgygig");
	this.shape_3.setTransform(17.3,16.2);

	this.shape_2.mask = this.shape_3.mask = mask;

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE0BB").s().p("AhGBvQgwgTgTgrQgUgsAUgsQAWg1BBgTQAygQA1ALQA6AMAXAnQAaArgWAxQgYA3hDAZQgjAOgeAAQgbAAgZgKg");
	this.shape_4.setTransform(18.3,12.2);

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhGBvQgwgTgTgrQgUgsAUgsQAWg1BBgTQAygQA1ALQA6AMAXAnQAaArgWAxQgYA3hDAZQgjAOgeAAQgbAAgZgKg");
	mask_1.setTransform(18.3,12.2);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE0BB").s().p("AhGBvQgwgTgTgrQgUgsAUgsQAWg1BBgTQAygQA1ALQA6AMAXAnQAaArgWAxQgYA3hDAZQgjAOgeAAQgbAAgZgKg");
	this.shape_5.setTransform(18.3,12.2);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(3.5,0,29.7,24.4);
p.frameBounds = [rect];


(lib.sym03 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_12();
	this.instance.setTransform(-1.4,-2.1);

	this.instance_1 = new lib.Group_12();
	this.instance_1.setTransform(-1.4,-2.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-1.4,-2.1,66,83);
p.frameBounds = [rect];


(lib.sym002 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag+B/QgQhHgGgSIgLgiQgIgTgFgGQgGgFAAgKIAAgIQgJgCgDgJIgBgJQgHgDAHgIQAIgIAFAIQARgZA6gXQATgHAZAFIAaAFQAFgCALgBQAMAAAEADQAEAGgJAJQAJADgHAFQAKAGgJANQAFAKAtBHQAYAmgFAWQgCALhfAeQhNAYgPAAIgDgBg");
	mask.setTransform(14.2,14.4);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E120D").s().p("AgSAyQgQgygIgLQgVgfgHgWQgKgjAiAEQAIABATgBQAPAAACAIQACARAEAGQAGAMAMABQAPACAOALQAQALAFAQQAEANgGARQgFAOgMAMIgeAfQgTAUgEAAQgDAAgPgug");
	this.shape.setTransform(7.4,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E120D").s().p("AAwBcQgkgCgcgKQgigMgMgSQgFgIgDgPQgEgQAFgHQAEgFABgJQAAgGgBgNQgBgMAAgNQABgOADgEQAOgQAOgDQAQgDAMAOQAHAMAWA0IAeBCIATAgQAEAKgVAAIgHAAg");
	this.shape_1.setTransform(21.9,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DBDBDB").s().p("AgSAdIgJgLQgHANgVAEQgLACgJgBQAGghAggVQAZgSAOAAQBWADgOAWQgKANgRgCIgQgEQADALgFAMQgHAPgPADIgFAAQgJAAgLgIg");
	this.shape_2.setTransform(11.6,5.8);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E120D").s().p("AgSAyQgQgygIgLQgVgfgHgWQgKgjAiAEQAIABATgBQAPAAACAIQACARAEAGQAGAMAMABQAPACAOALQAQALAFAQQAEANgGARQgFAOgMAMIgeAfQgTAUgEAAQgDAAgPgug");
	this.shape_3.setTransform(7.4,15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E120D").s().p("AAwBcQgkgCgcgKQgigMgMgSQgFgIgDgPQgEgQAFgHQAEgFABgJQAAgGgBgNQgBgMAAgNQABgOADgEQAOgQAOgDQAQgDAMAOQAHAMAWA0IAeBCIATAgQAEAKgVAAIgHAAg");
	this.shape_4.setTransform(21.9,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DBDBDB").s().p("AgSAdIgJgLQgHANgVAEQgLACgJgBQAGghAggVQAZgSAOAAQBWADgOAWQgKANgRgCIgQgEQADALgFAMQgHAPgPADIgFAAQgJAAgLgIg");
	this.shape_5.setTransform(11.6,5.8);

	this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = mask;

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag+B/QgQhHgGgSIgLgiQgIgTgFgGQgGgFAAgKIAAgIQgJgCgDgJIgBgJQgHgDAHgIQAIgIAFAIQARgZA6gXQATgHAZAFIAaAFQAFgCALgBQAMAAAEADQAEAGgJAJQAJADgHAFQAKAGgJANQAFAKAtBHQAYAmgFAWQgCALhfAeQhNAYgPAAIgDgBg");
	this.shape_6.setTransform(14.2,14.4);

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ag+B/QgQhHgGgSIgLgiQgIgTgFgGQgGgFAAgKIAAgIQgJgCgDgJIgBgJQgHgDAHgIQAIgIAFAIQARgZA6gXQATgHAZAFIAaAFQAFgCALgBQAMAAAEADQAEAGgJAJQAJADgHAFQAKAGgJANQAFAKAtBHQAYAmgFAWQgCALhfAeQhNAYgPAAIgDgBg");
	mask_1.setTransform(14.2,14.4);

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag+B/QgQhHgGgSIgLgiQgIgTgFgGQgGgFAAgKIAAgIQgJgCgDgJIgBgJQgHgDAHgIQAIgIAFAIQARgZA6gXQATgHAZAFIAaAFQAFgCALgBQAMAAAEADQAEAGgJAJQAJADgHAFQAKAGgJANQAFAKAtBHQAYAmgFAWQgCALhfAeQhNAYgPAAIgDgBg");
	this.shape_7.setTransform(14.2,14.4);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(1,1.5,26.3,25.8);
p.frameBounds = [rect];


(lib.sym02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AouCPIAAgDQAAhBAvgvQAugsBCgBQAeAAAbAMQAegmAvAAQAZAAAWAMQASgxArgfQAsgfA2AAQAzAAAoAcQAqAbATAtIAPgBQAnAAAdAcQAegcAnAAQAgAAAZATQAUgdAegPQAfgQAjAAQA6gBApApQAqAqAAA4QAAAyggAng");
	this.shape.setTransform(56,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AouCPIAAgDQAAhBAvgvQAugsBCgBQAeAAAbAMQAegmAvAAQAZAAAWAMQASgxArgfQAsgfA2AAQAzAAAoAcQAqAbATAtIAPgBQAnAAAdAcQAegcAnAAQAgAAAZATQAUgdAegPQAfgQAjAAQA6gBApApQAqAqAAA4QAAAyggAng");
	this.shape_1.setTransform(56,14.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,111.9,28.7);
p.frameBounds = [rect];


(lib.sym001 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.2).p("AAzgZIAPgGQAOgIgIgNQgFgIgRAHQgXAKgFAAQgMgBgFgBQgHgBgRAGQgTAGgNALQgNAKgIADQgPAFgCAJQgCALATAAIgKAOQgHAQAOAIQARAKASgOQATgPACgdIAJAVQALAUASgGQASgHgDgTIgHgRIAXAOQAZAMAKgQQAMgPgNgKQgMgJgVACg");
	this.shape.setTransform(10.3,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.2).p("AAzgZIAPgGQAOgIgIgNQgFgIgRAHQgXAKgFAAQgMgBgFgBQgHgBgRAGQgTAGgNALQgNAKgIADQgPAFgCAJQgCALATAAIgKAOQgHAQAOAIQARAKASgOQATgPACgdIAJAVQALAUASgGQASgHgDgTIgHgRIAXAOQAZAMAKgQQAMgPgNgKQgMgJgVACg");
	this.shape_1.setTransform(10.3,5.9);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhLA1QgOgIAHgQIAKgOQgTAAACgLQACgJAPgFQAIgDANgKQANgLATgGQARgGAHABIARACQAFAAAXgKQARgHAFAIQAIANgOAIIgPAGQAVgCAMAJQANAKgMAPQgKAQgZgMIgXgOIAHARQADATgSAHQgSAGgLgUIgJgVQgCAdgTAPQgLAIgKAAQgHAAgHgEg");
	mask.setTransform(10.3,5.9);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F4F4").s().p("AhWA0QgPgVAAgbQgBgbAbAEIgHAHQgGAIAEAEQAFAEAIABIgFAMQgCAOAMAFQAOAFAQgQQAPgOADgOIAKANQAJAOALgFQAKgEAEgPIABgNIAWAHQAXAFAHgIQAHgKgKgHQgIgHgRgCIAOgHQAMgJgEgLQAIANgBAFQgBACAUARQANAUghAYQgoAfg4AKQgUADgOAAQgbAAgIgLg");
	this.shape_2.setTransform(10.3,6.9);

	this.shape_2.mask = mask;

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4F4F4").s().p("AhWA0QgPgVAAgbQgBgbAbAEIgHAHQgGAIAEAEQAFAEAIABIgFAMQgCAOAMAFQAOAFAQgQQAPgOADgOIAKANQAJAOALgFQAKgEAEgPIABgNIAWAHQAXAFAHgIQAHgKgKgHQgIgHgRgCIAOgHQAMgJgEgLQAIANgBAFQgBACAUARQANAUghAYQgoAfg4AKQgUADgOAAQgbAAgIgLg");
	this.shape_3.setTransform(10.3,6.9);

	this.shape_3.mask = mask;

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhLA1QgOgIAHgQIAKgOQgTAAACgLQACgJAPgFQAIgDANgKQANgLATgGQARgGAHABIARACQAFAAAXgKQARgHAFAIQAIANgOAIIgPAGQAVgCAMAJQANAKgMAPQgKAQgZgMIgXgOIAHARQADATgSAHQgSAGgLgUIgJgVQgCAdgTAPQgLAIgKAAQgHAAgHgEg");
	this.shape_4.setTransform(10.3,5.9);

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhLA1QgOgIAHgQIAKgOQgTAAACgLQACgJAPgFQAIgDANgKQANgLATgGQARgGAHABIARACQAFAAAXgKQARgHAFAIQAIANgOAIIgPAGQAVgCAMAJQANAKgMAPQgKAQgZgMIgXgOIAHARQADATgSAHQgSAGgLgUIgJgVQgCAdgTAPQgLAIgKAAQgHAAgHgEg");
	mask_1.setTransform(10.3,5.9);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhLA1QgOgIAHgQIAKgOQgTAAACgLQACgJAPgFQAIgDANgKQANgLATgGQARgGAHABIARACQAFAAAXgKQARgHAFAIQAIANgOAIIgPAGQAVgCAMAJQANAKgMAPQgKAQgZgMIgXgOIAHARQADATgSAHQgSAGgLgUIgJgVQgCAdgTAPQgLAIgKAAQgHAAgHgEg");
	this.shape_5.setTransform(10.3,5.9);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(1.3,0.2,18.2,11.5);
p.frameBounds = [rect];


(lib.sym01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApqCuQACgkAbgYQAZgYAkABQAdAAAXAQQAOgxArghQAqgeA1AAIASABQAUgnAmgXQAlgYAuAAIAHAAQAYglAogWQAogYAuAAQA9AAAwAnQAwAmAOA6QATgKAXAAQAXAAAVAMQAUALAMAUQAjgfAwAAQAyABAlAhQAlAgAEAxQASgHATgBQAlAAAaAbQAbAaAAAmIgBAMg");
	this.shape.setTransform(62,58);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Am+CVQABggAWgWQAXgXAgAAIANABQANgWAWgOQAXgNAbAAQATAAARAHQARgfAegQQAggTAlAAQAQAAAKACQATgzAsggQAsggA4AAQBIAAAzAzQAzAzAABGQAdAAAYAQQAYAPAMAaQAQgJATAAQAgAAAXAXQAWAWABAgg");
	this.shape_1.setTransform(155.9,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ApqCuQACgkAbgYQAZgYAkABQAdAAAXAQQAOgxArghQAqgeA1AAIASABQAUgnAmgXQAlgYAuAAIAHAAQAYglAogWQAogYAuAAQA9AAAwAnQAwAmAOA6QATgKAXAAQAXAAAVAMQAUALAMAUQAjgfAwAAQAyABAlAhQAlAgAEAxQASgHATgBQAlAAAaAbQAbAaAAAmIgBAMg");
	this.shape_2.setTransform(62,58);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Am+CVQABggAWgWQAXgXAgAAIANABQANgWAWgOQAXgNAbAAQATAAARAHQARgfAegQQAggTAlAAQAQAAAKACQATgzAsggQAsggA4AAQBIAAAzAzQAzAzAABGQAdAAAYAQQAYAPAMAaQAQgJATAAQAgAAAXAXQAWAWABAgg");
	this.shape_3.setTransform(155.9,15);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,200.7,75.4);
p.frameBounds = [rect];


(lib.sym00 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group_0();

	this.instance_1 = new lib.Group_0();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,88,57);
p.frameBounds = [rect];


(lib.Symbol33_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAeIAAg6IARAAIAAAFQAJgGAJAAIAAASQgKAAgIAEIAAAlg");
	this.shape_7.setTransform(4.5,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AATApIgHgTIgZAAIgHATIgTAAIAchRIAWAAIAdBRgAgJAGIAQAAIgHgag");
	this.shape_8.setTransform(-2,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C15C00").s().p("AhPAcQgNAAgJgKQgJgJAAgLIAAgZQAAANAJAJQAJAIANAAICfAAQANAAAJgIQAJgJAAgNIAAAZQAAALgJAJQgJAKgNAAg");
	this.shape_9.setTransform(0,9.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCEA9").s().p("ABmAGQgJgIgNAAIifAAQgNAAgJAIQgJAJAAANIAAgZQAAgLAJgJQAJgKANAAICfAAQANAAAJAKQAJAJAAALIAAAZQAAgNgJgJg");
	this.shape_10.setTransform(0,-8.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F78508").s().p("AheCGQgNAAgJgJQgJgJAAgMIAAjOQAAgNAJgKQAJgIANgBIC9AAQANABAJAIQAJAKAAANIAADOQAAANgJAIQgJAJgNAAg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAeIAAg6IAQAAIABAFQAIgGAKAAIAAASQgKAAgIAEIAAAlg");
	this.shape_12.setTransform(4.5,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATAqIgGgUIgaAAIgGAUIgTAAIAchSIAVAAIAdBSgAgIAGIAPAAIgHgZg");
	this.shape_13.setTransform(-2.1,-0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCEA9").s().p("AhPAcQgNAAgJgKQgJgJAAgLIAAgZQAAANAJAJQAJAIANAAICfAAQANAAAJgIQAJgJAAgNIAAAZQAAALgJAJQgJAKgNAAg");
	this.shape_14.setTransform(0,9.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C15C00").s().p("ABmAGQgJgIgNAAIifAAQgNAAgJAIQgJAJAAANIAAgZQAAgLAJgJQAJgKANAAICfAAQANAAAJAKQAJAJAAALIAAAZQAAgNgJgJg");
	this.shape_15.setTransform(0,-8.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F78508").s().p("AheCGQgNAAgJgJQgJgIAAgOIAAjNQAAgNAJgKQAJgIANgBIC9AAQANABAJAIQAJAKAAANIAADNQAAAOgJAIQgJAJgNAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.6,-13.4,25.4,27);
p.frameBounds = [rect, new cjs.Rectangle(-12.6,-13.4,25.3,27)];


(lib.Symbol32_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAJAeIAAghQgBgIgGAAQgEAAgGAEIAAAlIgTAAIAAg6IAQAAIACAFQAJgGAIAAQAUAAAAAUIAAAng");
	this.shape_4.setTransform(3.7,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdApIAAhRIA6AAIAAARIgmAAIAAAQIAjAAIAAAPIgjAAIAAAQIAnAAIAAARg");
	this.shape_5.setTransform(-3.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C15C00").s().p("AhPAcQgNAAgJgKQgJgJAAgLIAAgZQAAANAJAJQAJAIANAAICfAAQANAAAJgIQAJgJAAgNIAAAZQAAALgJAJQgJAKgNAAg");
	this.shape_6.setTransform(0,9.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCEA9").s().p("ABmAGQgJgIgNAAIifAAQgNAAgJAIQgJAJAAANIAAgZQAAgLAJgJQAJgKANAAICfAAQANAAAJAKQAJAJAAALIAAAZQAAgNgJgJg");
	this.shape_7.setTransform(0,-8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F78508").s().p("AheCGQgNAAgJgJQgJgJAAgMIAAjOQAAgNAJgKQAJgIANgBIC9AAQANABAJAIQAJAKAAANIAADOQAAANgJAIQgJAJgNAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAJAeIAAghQAAgJgIAAQgDAAgGAFIAAAlIgTAAIAAg6IARAAIABAFQAJgGAIAAQAUAAAAAUIAAAng");
	this.shape_9.setTransform(3.7,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcApIAAhRIA4AAIAAARIglAAIAAAQIAjAAIAAAPIgjAAIAAAQIAmAAIAAARg");
	this.shape_10.setTransform(-3.2,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCEA9").s().p("AhOAbQgOAAgJgJQgKgJAAgLIAAgYQABAMAJAJQAJAHAOAAICdAAQAOAAAJgHQAJgJAAgMIAAAYQAAALgJAJQgJAJgOAAg");
	this.shape_11.setTransform(0,9.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C15C00").s().p("ABmAGQgJgIgOAAIidAAQgOAAgJAIQgJAJgBANIAAgZQAAgLAKgJQAJgKAOAAICdAAQAOAAAJAKQAJAJAAALIAAAZQAAgNgJgJg");
	this.shape_12.setTransform(0,-8.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F78508").s().p("AheCHQgMgBgKgIQgJgKAAgNIAAjOQAAgMAJgJQAKgJAMAAIC9AAQANAAAJAJQAJAJAAAMIAADOQAAANgJAKQgJAIgNABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.6,-13.4,25.4,27);
p.frameBounds = [rect, new cjs.Rectangle(-12.6,-13.4,25.3,27)];


(lib.Symbol31_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAcQAEgbAiAAIAAAAQAEgIgQABQgLABgGADIgEgNQAIgGAQAAQAfAFAAAXIABAoIgUAAIgBgHIAAAAQgHAJgNgBQgUgEAAgQgAABAaQABAHAIABQAJgCABgGIABgEIAAgIIgEAAQgQAAAAAMgAB0ArQgFgGgBgPIAAgaIgJAAIAAgQIAJAAIAAgOIAVgGIAAAUIAPAAIAAAQIgPAAIAAAXQgBAMAKAAIAGgBIAAARIgNABIgCAAQgKAAgFgFgAg3ArQgFgGAAgPIAAgaIgKAAIAAgQIAKAAIAAgOIAUgGIAAAUIAQAAIAAAQIgQAAIAAAXQgBAMAKAAIAGgBIABARIgPABIgBAAQgKAAgFgFgAiSArIAFgSQAKAGAOAAQAPAAgBgLQACgGgSgGQgZgIAAgSQACgeAiAAQAPACAJAEIgFARQgFgFgPAAQgOACAAAHQAAAHASAHQAZAHAAATQAAAdgnAAQgTgBgIgEgAA3AvIgBhDIATAAIAAANIAAAAQAKgOAJAAIAFAAIAAAUIgGgBQgMACgDAIIAAAng");
	this.shape_4.setTransform(-8.2,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhHhSICPBSIiPBTg");
	this.shape_5.setTransform(18.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#336699").s().p("AkcATQgHAAgFgGQgFgFAAgIIAAgSQAAAHAFAGQAFAFAHAAII5AAQAHAAAFgFQAFgGAAgHIAAASQAAAIgFAFQgFAGgHAAg");
	this.shape_6.setTransform(0,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C5F3FF").s().p("AEpAGQgFgGgHAAIo5AAQgHAAgFAGQgFAGAAAHIAAgTQAAgHAFgGQAFgFAHAAII5AAQAHAAAFAFQAFAGAAAHIAAATQAAgIgFgFg");
	this.shape_7.setTransform(0,-18.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#33BBFF").s().p("AkiDeQgKAAgIgHQgHgIAAgKIAAmJQAAgLAHgGQAIgIAKAAIJFAAQAKAAAHAIQAIAGAAALIAAGJQAAAKgIAIQgHAHgKAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C5F3FF").s().p("AkcATQgHAAgFgGQgFgFAAgIIAAgSQAAAHAFAGQAFAFAHAAII5AAQAHAAAFgFQAFgGAAgHIAAASQAAAIgFAFQgFAGgHAAg");
	this.shape_9.setTransform(0,18.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#336699").s().p("AEpAGQgFgGgHAAIo5AAQgHAAgFAGQgFAGAAAHIAAgTQAAgHAFgGQAFgFAHAAII5AAQAHAAAFAFQAFAGAAAHIAAATQAAgHgFgGg");
	this.shape_10.setTransform(0,-18.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#33BBFF").s().p("AkiDeQgKAAgIgHQgHgIAAgKIAAmJQAAgLAHgGQAIgIAKAAIJFAAQAKAAAIAIQAHAGAAALIAAGJQAAAKgHAIQgIAHgKAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.6,-22.2,63.3,44.5);
p.frameBounds = [rect, rect];


(lib.Symbol30_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAnBEIAQgOIANAPIgQANgAACAvIgBABIgCAAQgLgBgJgIQgOAIgTABIgLAAIgFgVIABgCIAmgBIgSgkIAPgKIABAAIATAlIAHAJIAHABIABAAIABABIACgBIAbAAIACABIABgBIARAAIAAglIATAAIAAA8IgkAAIAAgBIgDABIgbAAIAAAAIgCgBgABdAwIAAhnIAUAAIAABngAhoAwIAAhbIATAAIAABbgAhwg+IAIABQgDgDAAgFIADgKIAMgDIAJABIgBAKIgJgBIgEABIAAABQgBAGADADIAOgCIABAAIABAKIghACg");
	this.shape_4.setTransform(7.5,-3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhHAAICPhSIAAClg");
	this.shape_5.setTransform(-20.8,-4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#336699").s().p("AkcATQgHAAgFgGQgFgFAAgIIAAgSQAAAHAFAGQAFAFAHAAII5AAQAHAAAFgFQAFgGAAgHIAAASQAAAIgFAFQgFAGgHAAg");
	this.shape_6.setTransform(-3.1,13.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C5F3FF").s().p("AEpAGQgFgGgHAAIo5AAQgHAAgFAGQgFAGAAAHIAAgTQAAgHAFgGQAFgFAHAAII5AAQAHAAAFAFQAFAGAAAHIAAATQAAgHgFgGg");
	this.shape_7.setTransform(-3.1,-22.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#33BBFF").s().p("AkiDeQgKAAgHgHQgIgIAAgKIAAmJQAAgLAIgGQAHgIAKAAIJFAAQALAAAHAIQAHAGAAALIAAGJQAAAKgHAIQgHAHgLAAg");
	this.shape_8.setTransform(-3.1,-4.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAnBEIAQgOIANAPIgQANgAACAvIgBABIgCAAQgLgBgJgIQgOAIgTABIgLAAIgFgVIABgCIAmgBIgSgkIAPgKIABAAIATAlIAHAJIAHABIABAAIABABIACgBIAbAAIACABIABgBIARAAIAAglIATAAIAAA8IgkAAIgBgBIgCABIgbAAIAAAAIgCgBgABdAwIAAhnIAUAAIAABngAhoAwIAAhbIATAAIAABbgAhwg+IAIABQgDgDAAgFIADgKIAMgDIAJABIgBAKIgJgBIgEABIAAABQgBAGADADIAOgCIABAAIABAKIghACg");
	this.shape_9.setTransform(7.6,-3.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C5F3FF").s().p("AkcATQgHAAgFgGQgFgFAAgIIAAgSQAAAHAFAGQAFAFAHAAII5AAQAHAAAFgFQAFgGAAgHIAAASQAAAIgFAFQgFAGgHAAg");
	this.shape_10.setTransform(-3.1,13.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#336699").s().p("AEpAGQgFgGgHAAIo5AAQgHAAgFAGQgFAGAAAHIAAgTQAAgHAFgGQAFgFAHAAII5AAQAHAAAFAFQAFAGAAAHIAAATQAAgHgFgGg");
	this.shape_11.setTransform(-3.1,-22.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#33BBFF").s().p("AkiDeQgLAAgGgHQgIgIAAgKIAAmJQAAgLAIgGQAGgIALAAIJFAAQAKAAAHAIQAIAGAAALIAAGJQAAAKgIAIQgHAHgKAAg");
	this.shape_12.setTransform(-3.1,-4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_5},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.8,-26.7,63.3,44.5);
p.frameBounds = [rect, rect];


(lib.Symbol29_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAABQQAAgSgEg5IgGg7QAAgLAJgQQABgFACAAQABAAABAIIAEA1QADAnAAAYQAAAagDALQgFAMgCAAQgBAAAAgHg");
	this.shape_4.setTransform(147.8,-1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhAAhQgLAAAAgNQAAgLALAAIADAAQANAAAKgFQAIgEAKgOQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQACAAAAAIQACAOANAAQAIAAAIgFQAIgGAEgJQADgJADAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgBAIQAAAJAHAEQAGAEAHAAQAHAAAAgEQAAgCgEgIIgBgBQAAgFALgOIACgCIACADQADAFAAAMQAAAMgHAMQgIAPgNAAQgRAAgGgRQgLAUgPAAQgSAAgEgXQgHAKgGAFQgMALgNAAg");
	this.shape_5.setTransform(136,4.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMAUQgEgEAAgGQAAgIAHgMQAGgNADAAQAFAAAGAHQAGAHAAAJQAAAFgCAFQgFAOgMAAQgGAAgEgEgAgGgCQgDACAAADQAAAAAAABQABAAAAABQAAAAABABQAAAAABABQACACAEAAIAGgCQAEgCAAgBQAAgCgEgCQgFgFgCAAQgCAAgDADg");
	this.shape_6.setTransform(138,-5.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABGAoQgVAAgIgJQgIgIAAgTQgRAAgIAEIgUAJIglASQgOAFgOAAIgDAAQgMAAAAgNQAAgLAMAAIADAAQAXAAAOgFQAQgEAYgJIgagJQgOgEgHAAIgHABIgIAEQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgIANgLQAGgHAJAAIAFABQAJACAWAIQAUAHAKACQASAEATAAIAFAAIABABQAAADgEAHQgEAFgEADIgBAAIgFABIgQgBQAAAFAKADQAJADALABIAMAAQAMAAAAALQAAANgMAAg");
	this.shape_7.setTransform(121.7,3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYATQAAgGACgFIAIgGIAmgUQAAAAAAAAQAAgBABAAQAAABAAAAQAAAAAAABQAAAKgGAEIgqAWIgBABIAAgBg");
	this.shape_8.setTransform(120.1,-4.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQBJQgOgJgEgHQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAFgIAIgIQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAGAHALAJQAAAAAAAAQABABAAAAQAAAAgBAAQAAABAAAAIgNASIgCABIgBAAgAhaAAQgXgJAAgXQAAgQAJgSQAFgGACAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAADgCAEQgEAKAAAGQAAANAUAKQAQAHAhAAQAkAAAhgJQAegJAOgKIADgCQACAAAAAFQAAAKAFAGQAEAFAGAAIAEAAQAKAAAAAMQAAAKgKAAIgEAAQgXAAgFgWQgXANgQAEQgjAKgjAAQgiAAgTgGg");
	this.shape_9.setTransform(103.5,7.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYATQAAgHACgEIAIgGIAlgUQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAALgGAEIgqAWIAAAAIgBAAg");
	this.shape_10.setTransform(102.1,17.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAABQQAAgSgEg5IgGg7QAAgLAJgQQABgFACAAQABAAABAIIAEA1QADAnAAAYQAAAagDALQgFAMgCAAQgBAAAAgHg");
	this.shape_11.setTransform(82,-1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMBXQgLAAAAgNQAAgLALAAIACAAQAIAAAGgCQAGgCABgDQAAgJgDgfIgHg1IgCgZQAAgDADgLQAFgKADAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQADAKAGAKIABADIAAABQgDAIgDAEQABATADAdIADAiQAAAbgLAPQgHALgOAAg");
	this.shape_12.setTransform(74.9,-1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMAUQgEgEAAgGQAAgIAGgMQAHgNADAAQAFAAAGAHQAGAHAAAJIgCAKQgEAOgNAAQgGAAgEgEgAgGgCQgDACAAADQAAAAAAABQABABAAAAQAAABABAAQAAAAABABQACACAEAAIAGgCQAEgCAAgBQAAgCgEgCQgFgFgCAAQgCAAgDADg");
	this.shape_13.setTransform(75.9,-13.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABGAoQgVAAgIgJQgIgJAAgSQgRAAgIAEIgUAJIglASQgOAFgOAAIgDAAQgMAAAAgNQAAgLAMAAIADAAQAXAAAOgFQAQgEAYgJIgagJQgOgEgHAAIgHABIgIAEQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgIAMgLQAHgHAJAAIAFABQAJACAWAIQAUAHAKACQASAEATAAIAFAAIABABQAAADgEAHQgEAFgEADIgBAAIgFABIgQgBQAAAFAKADQAJADALABIAMAAQAMAAAAALQAAANgMAAg");
	this.shape_14.setTransform(65.7,3.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbAhQAAgBAGgDQAIgEAKgIQAIgJAFgGQgKgFAAgIQAAgFAFgJQAHgIAGAAQAJAAAAANQABAHgEAJQAEACAAACQAAAEgDAEIgBABIgGgDQgNASgMAGQgHAEgJAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAgAAIgPIgBABQABACAIAEQACgCgBgFQAAgFgDAAQgDAAgDAFg");
	this.shape_15.setTransform(63.5,-5.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag5AuQgFgCAAgCQAAgBABAAQAAgBAAAAQABAAABAAQAAAAACAAIANABQAYAAAVgSQAWgRACgRQAAgDgFgIIgIgJIgBgDQAAgEADgHIADgJIADgCQACAAAEAHQAGAKAOAAIAEAAQAMgBAAAMQAAAMgMAAIgCAAQgLAAgDgBIAAAFQAAAMgEAHQgGARgGAIQgKAPgOAHQgFADgIAAQgNAAgZgLg");
	this.shape_16.setTransform(52.9,9.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbAhQAAgBAGgDQAWgPAJgMQgKgGAAgHQAAgGAFgIQAHgJAGABQAJAAAAANQAAAIgDAIQAEABAAACQAAAFgEAEIgBABIgFgEQgLASgOAHQgIAFgHgBQgBAAgBAAQgBAAgBAAQAAAAAAAAQgBgBAAAAgAAIgPIAAABQAAACAIAEQACgDAAgEQgBgFgDAAQgDAAgDAFg");
	this.shape_17.setTransform(53.3,-1.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgrA6QgFgCAAgCQAAgBABAAQAAgBAAAAQABAAABAAQABAAABAAIATACQANAAAUgOQAegTAAgVQAAgHgEgIQgFAMgMAAQgUAAAAgXQAAgIAFgOQALgUAIAAQAGAAAGAGQAGAHAEAKQAFAMAAAVQAAAfgKATQgLAVgYAJIgEABQgRAAgagLgAAKgoQgCADAAADQAAADAEACQADACAFAAQAHAAABgFQAAgFgEgEQgEgDgDAAQgEAAgDAEg");
	this.shape_18.setTransform(41.7,7.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhkAmQAAgSALgSQADgEADAAIABABIgCADQgFARAAAFQAAALAOAKQATANAkAAQAaAAAfgFQAagFAQgFQAHgDACgCQABgCAAgFQAAgGgDgIQgFALgOAAQgTAAAAgVQAAgMAIgQQAIgPAFAAQANAAAJASQAKARAAAVQAAALgGASQgCAGgDACIgIAFQgQAIgbAGQggAHgcAAQhPAAAAgtgAA6gEIAAADQADAEAIAAQAIAAACgDIABAAQAAgDgEgEQgEgFgGAAQgFAAgDAIgAAdgtQgNgIgFgIIAAgCQAFgIAJgJIADgCQAHAJAMAIQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBABIgPARIgCABIgBAAg");
	this.shape_19.setTransform(25.3,-0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYATQAAgGACgFIAIgGIAmgUQAAAAAAgBQAAAAABABQAAAAAAAAQAAAAAAAAQAAALgGAEIgqAWIAAABIgBgBg");
	this.shape_20.setTransform(27.4,-12.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMBXQgLAAAAgNQAAgLALAAIACAAQAIAAAGgCQAGgCACgDQAAgJgEgfIgGg1IgDgXIAAgCQAAgDAEgLQAFgKACAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQADAKAGAKIABADIAAABQgDAIgDAEQABATAEAdIADAiQAAAbgLAPQgIALgOAAg");
	this.shape_21.setTransform(4.4,-1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYATQAAgHADgEQABgCAGgEIAlgUQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAMgGACIgqAXIAAAAIgBAAg");
	this.shape_22.setTransform(5.9,11.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAcA4QgPgBgIgRQgDAHgHAFQgLAGgRAAIgBAAQgKAAAAgMQAAgMAKAAIAHAAQAZAAAJgRQADgGACAAQACAAABAIQgBAFAFAEQAEAFAGABIAGAAIAAAAQAKAAAAALQAAANgJAAgAAPgUQgJgGgGgHIgKANQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgJgFgIgKQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAIAOgRQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAJAJAEAEIAMgNQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAJAKAIAFQAAABAAAAQABAAAAABQAAAAgBAAQAAABAAAAIgPARIgBABIgCgBg");
	this.shape_23.setTransform(-0.4,1.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgbAhQAAgBAGgDQAHgEALgIQAJgJAEgGQgKgGAAgHQAAgGAFgIQAHgIAHAAQAHAAACANQgBAHgDAJQAEADAAABQAAAEgDAFQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgFgDQgMASgNAGQgJAFgHAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAgAAIgPIAAAAQgBACAJAFQABgDABgEQgBgFgDAAQgEAAgCAFg");
	this.shape_24.setTransform(-1.1,-8.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ABABhQgKAAgNgKQgJgHgPgQQgOgQgIgFIABAMQAAAKgDAIQgFAMgPAFQgTAHgTAAIgDAAQgJAAAAgMQAAgMAKAAQAPAAAXgEQAOgDACgKQgCgQglghQgIgGAAgGQAAgXAGgGQAJgKATgLQAXgOAfgOQAZgLAHgCIABAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAHgHALIgBACQg1AWggATQgNAJgEAGIAZATQAkAcAUAWQAYAXAIAAIAEAAQAJAAAAALQAAANgJAAg");
	this.shape_25.setTransform(-10.6,-2.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYATQAAgHADgEQABgCAGgEIAlgUQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAMgGACIgqAXIAAAAIgBAAg");
	this.shape_26.setTransform(-13.4,-12.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag2A7QgEgCAAgCQAAAAAAgBQAAAAABAAQAAAAABgBQABAAABAAIATACQAKAAANgGQARgKAMgNQALgMAAgKIgBgFIgIAAQgOAAgHgFQgLgGAAgKQAAgIAHgQQAJgYAJAAQALAAAIANQAGAKACAUIAKAAQAKAAAAALQAAANgKAAIgLABQgBAbgKASQgLASgUAJIgHABQgRAAgagMgAAAgqQgBADAAACQAAAFAGADQAGACAHAAIACAAQAAgDgDgEQgCgFgEgDQgDgDgDAAQgDAAgCADg");
	this.shape_27.setTransform(-22,7.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgaAoIACgHIADgFIAEgDIAsgVQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQgCAIgEAEIgFADIgqAVgAgYAGQgEgEAAgGQAAgHACgFQACgGADAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIAAAFQAAABAAABQAAAAAAABQAAAAABABQAAAAABABQACACADAAIAFgBQAHgEABgLQABgGADAAQACAAAAAGQABAFAFAAQAJAAABgPQABgHADAAQADAAAAAMQAAAcgUAAQgEAAgEgDQgEAOgNgBQgFAAgDgEg");
	this.shape_28.setTransform(-21.7,-6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgyBMQgPgNAAgXQAAgLAGgNQAEgLAFgFQAEgFACAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQAAADgCAAQgJAUAAALQAAANAOAKQANAIARAAQATAAAUgIQAVgIAGgNIAAgFQAAgSgJgOIgFgJIgBgBQAAgEACgFIAFgLQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIACADQAOAdAAATQgBAWgDAHQgGANgGAHQgJAKgRAHQgSAIgYAAQgUgBgMgLgAAAgyQgMgIgEgHQAAgBgBAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAGgKAIgHIACgBQAHAJALAHQABAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAABIgPASIgCAAIgBAAg");
	this.shape_29.setTransform(-35.6,0.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYATQAAgHADgEQABgCAGgEIAlgUQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAMgGACIgqAXIAAAAIgBAAg");
	this.shape_30.setTransform(-36.1,-11.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAABQQAAgSgEg5IgGg7QAAgLAJgQQABgFACAAQABAAABAIIAEA1QADAnAAAYQAAAbgEAKQgDAMgDAAQgBAAAAgHg");
	this.shape_31.setTransform(-52.2,-1.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhAAhQgLAAAAgNQAAgLALAAIADAAQAMAAALgFQAIgEAKgOQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQADAAAAAIQACAOAMAAQAJAAAIgFQAIgGADgJQAEgJADAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAABIgBAIQAAAJAHAEQAGAEAHAAQAHAAAAgEQAAgDgFgHIAAgBQAAgFALgOIACgCQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQADAFAAAMQAAAMgHAMQgIAPgNAAQgSAAgFgRQgLAUgPAAQgSAAgEgXIgNAPQgMALgNAAg");
	this.shape_32.setTransform(-64,4.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgMAUQgEgEAAgGQAAgIAGgMQAHgNADAAQAFAAAGAHQAGAHAAAJIgCAKQgEAOgNAAQgGAAgEgEgAgGgCQgDACAAADQAAAAAAABQABAAAAABQAAAAABABQAAAAABABQACACAEAAIAGgCQAEgCAAgBQAAgCgEgCQgFgFgCAAQgCAAgDADg");
	this.shape_33.setTransform(-62,-5.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgtBQIAAgFQAAgQgNhHQgBgGAAgHQAAgUALgPQAMgPAUgDQADgHABAAQADAAAFAFQAHAJAQAFQAOAFAOAAIABAAQAMAAAAAMQAAAMgMAAIgBAAQgWAAgLgFIABAJQAAAJgDAGQgDAMgGAAQgDAAgFgGQgGgHgEgJQgFgLABgOQgXAEgHAKIAAACQAAAFAHAkQAHAmAAAPQAAAJgDAKQgCAKgDAAQgCAAAAgGg");
	this.shape_34.setTransform(-75.3,11.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgYATQAAgHACgEIAIgGIAlgUQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAALgGADIgqAXg");
	this.shape_35.setTransform(-76.9,-1.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAABQQAAgSgEg5IgGg7QAAgKAJgRQABgFACAAQABAAABAIIAEA1QAEAnAAAYQgBAZgEAMQgDAMgDAAQgBAAAAgHg");
	this.shape_36.setTransform(-91.2,-1.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgMBXQgLAAAAgNQAAgLALAAIACAAQAIAAAGgCQAGgCABgDQAAgKgEgeIgGg1IgCgXIAAgCQAAgCAEgMQAFgKACAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQADAKAGAKIABADIAAABQgBAGgFAGQABATAEAdIADAiQAAAagLAQQgJALgOAAg");
	this.shape_37.setTransform(-98.3,-1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AguAsIABgCIAFgLQgRgHgHgPQgIATgQAAIgDAAQgJAAgBgMQABgMAJABIADAAQASgCAIgOQAEgNAEAAQADABAAAHQgBAKAJAGQAHAGALACQAPgQAVgSQAZgUAMAAQAJAAAJAGQAMAGAAALQAAAOgKAPIATgBIADAAQAMgBAAAMQAAAMgMAAIgDAAQgcABgTADQgaAEgQAAQgQAAgPgDIgGAJQgEAFgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAgBgAAHgKQgNAKgKAKQAIACAIAAQAfgBAhgNIAAAAQAAgGgIgHQgLgGgHAAQgMAAgTALg");
	this.shape_38.setTransform(-108.4,4.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNAvQgFAAgEgEQgEgEAAgIIABgIQACgIAEAAQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAABIAAAFQAAAGAHAAIAAAAQAIAAACgJQABgLAEAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABIAAACQAAAEAEAAIACgBQAFAAADgIQACgHACAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAABIABAFQAAAHgDAGQgFALgKAAIgGgBQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABQgFALgIABgAgUAHQAUgNAGgJQgHgHAAgFQAAgFADgHQAGgHAFAAQAFgBADAJIAAADQAAAEgDAKQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQAAAGgEADIgEgCQgJALgEAEQgEADgNABQgCAAgBAAQgBAAgBAAQAAgBAAAAQAAAAACAAgAAEgeQABACAHADIABgGQgBgEgDAAQgCAAgDAFg");
	this.shape_39.setTransform(-110.9,-6.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ag2A7QgEgBAAgDQAAAAAAgBQABAAAAAAQABAAAAgBQABAAABAAIAUACQAJAAAMgGQASgKAMgNQAKgMABgKIgBgFIgIAAQgOAAgIgFQgKgGAAgKQAAgIAHgQQAIgYAJAAQAMAAAHANQAIALAAATIALAAQAKAAAAALQAAANgKAAIgLABQgBAbgKASQgLASgVAJIgGABQgRAAgagMgAAAgqQgBADAAACQAAAFAGADQAFACAIAAIACAAQAAgDgCgEQgDgFgEgDQgEgDgCAAQgDAAgCADg");
	this.shape_40.setTransform(-122.2,7.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgVA+QgNgEgKgFQgEgCAAgCQAAAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAIAUACQAKAAANgGQAIgEANgMQAOgNAEgLIACgGQAAgKgLgPIgIgNIgBgDQAAgFAGgNIADgCQADAAAGALQAGALAEAMQACAIAAAMQAAAagMATQgMAUgVAJQgCABgDAAQgHAAgNgDg");
	this.shape_41.setTransform(-133.8,7.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgYATQAAgFACgGIAIgGIAlgUQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAALgFADIgrAXIAAAAIgBAAg");
	this.shape_42.setTransform(-131.8,-3.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgWBCQgHgHAAgKQAAgPAMgWQAMgVAFAAQAHAAAIAHQAQALAAASQAAALgEAMQgIAXgXAAQgLAAgHgHgAgFASQgGAEgDAGQgDAFAAAFQAAAEAFADQAFADAGABQACAAAHgCQAIgDACgDIABgCIgBgBQgJgUgMAAgAAPgkIgPgNIgLAMQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgKgGgHgJQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAPgQQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAHAJAGAFIAMgNQABgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAJALAHAFQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAIgOAQIgCABIgBAAg");
	this.shape_43.setTransform(-142,0.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgYATQAAgHADgEQABgCAGgEIAlgUQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAMgGACIgqAXIAAAAIgBAAg");
	this.shape_44.setTransform(-141.6,11.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#336699").s().p("Ego2AYeQgrAAgfgfQgegfAAgrMAAAgtpQAAgrAegfQAfgfArAAMBRtAAAQAqAAAgAfQAeAfAAArMAAAAtpQAAArgeAfQggAfgqAAg");

	this.text = new cjs.Text("Drag the letters to form the word of the picture", "22px Myriad Pro Light", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.setTransform(-1.4,-12.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#336699").s().p("Ego1AYeQgsAAgfgfQgfgfAAgrMAAAgtpQAAgrAfgfQAfgfAsAAMBRsAAAQArAAAfAfQAeAfAAArMAAAAtpQAAArgeAfQgfAfgrAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_46},{t:this.text}]},1).wait(1));

	// Layer 2
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.8)").s().p("EguZAr+MAAAhX7MBcyAAAMAAABX7g");
	this.shape_47.setTransform(-0.4,191.5,1,1,0,0,0,0,141.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-297.4,-231.7,594,563);
p.frameBounds = [rect, rect];


(lib.Symbol27_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhCAAICEhMIAACZg");
	this.shape_4.setTransform(18.4,15.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#25878C").s().p("AifAWQgLAAgHgGQgIgGAAgJIAAgWQABAIAHAGQAHAGALAAIE/AAQALAAAHgGQAHgGABgIIAAAWQAAAJgIAGQgHAGgLAAg");
	this.shape_5.setTransform(19.4,29);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#45F2FF").s().p("ACyAIQgHgGgLAAIk/AAQgLAAgHAGQgHAGgBAIIAAgXQAAgIAIgGQAHgGALAAIE/AAQALAAAHAGQAIAGAAAIIAAAXQgBgIgHgGg");
	this.shape_6.setTransform(19.4,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#33BFC0").s().p("AimCeQgLAAgIgGQgIgGAAgKIAAkPQAAgJAIgHQAIgGALAAIFNAAQAMAAAHAGQAIAHAAAJIAAEPQAAAKgIAGQgHAGgMAAg");
	this.shape_7.setTransform(19.5,15.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#33BFC0").s().p("AimCeQgLAAgIgGQgIgGAAgKIAAkPQAAgJAIgHQAIgGALAAIFNAAQAMAAAHAGQAIAHAAAJIAAEPQAAAKgIAGQgHAGgMAAg");
	this.shape_8.setTransform(19.5,15.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#45F2FF").s().p("AifAWQgLAAgHgGQgIgGAAgJIAAgWQABAIAHAGQAHAGALAAIE/AAQALAAAHgGQAHgGABgIIAAAWQAAAJgIAGQgHAGgLAAg");
	this.shape_9.setTransform(19.6,29);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#25878C").s().p("ACyAIQgHgGgLAAIk/AAQgLAAgHAGQgHAGgBAIIAAgXQAAgIAIgGQAHgGALAAIE/AAQALAAAHAGQAIAGAAAIIAAAXQgBgIgHgGg");
	this.shape_10.setTransform(19.6,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_10},{t:this.shape_9},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,39,31.7);
p.frameBounds = [rect, rect];


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sym04();
	this.instance.setTransform(94.4,-134.9,1,1,0,0,0,360.9,198.7);

	this.instance_1 = new lib.Group_8();
	this.instance_1.setTransform(223.1,-39.6);

	this.instance_2 = new lib.Group_6();
	this.instance_2.setTransform(221.4,16.2);

	this.instance_3 = new lib.Group_3();
	this.instance_3.setTransform(221.3,14.1);

	this.instance_4 = new lib.Group_2();
	this.instance_4.setTransform(215,-20.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag9BkQgGAEgFAAIgPAAQgKAAgGgHQgHgHAAgJIAAk/QAAgKAHgGQAGgGAKgBIAPAAQAJAAAGAHIApgRIAJAVIgiAOIAABEIgIAAIAAC0IALABIgDBEICRADIAHAWIiPgCIBgCkIgYAEg");
	this.shape.setTransform(225.9,5.9);

	this.instance_5 = new lib.Group_1();
	this.instance_5.setTransform(113.4,68.8);

	this.instance_6 = new lib.sym00();
	this.instance_6.setTransform(171.7,-16.2,1,1,0,0,0,44,28.5);
	this.instance_6.alpha = 0.262;

	this.instance_7 = new lib.Mesh();
	this.instance_7.setTransform(243.3,55);

	this.instance_8 = new lib.Group();
	this.instance_8.setTransform(140.3,-36.3);

	this.instance_9 = new lib.Group_7();
	this.instance_9.setTransform(-255.4,87.6);

	this.instance_10 = new lib.Path_1();
	this.instance_10.setTransform(123.7,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#680603").s().p("AgOB5QgXgXAAgfIAAiFQAAgfAXgXQAUgWAgAAIAAEdQggAAgUgWg");
	this.shape_1.setTransform(-255.3,106.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AGhC3QgFg+gTg1QgmhqhvhUQh7hbiKgBQhhABhaAwQiBBFhBCVQgSArgHAwQgHAwADBAIgoAAQgCgaABgoQAEhQAWhFQBdkoFLAAQCugBB1BWQBqBNA+CUIARBDQAQBMgHA0IgxAGQAAg3gBgSg");
	this.shape_2.setTransform(-150.5,99.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#010101","#171717","#272727","#303030","#333333","#666666","#808080","#333333","#1D1D1D","#0D0D0D","#030303","#000000"],[0,0.004,0.078,0.161,0.255,0.388,0.459,0.498,0.627,0.698,0.773,0.855,0.969],0,-21.9,0,22).s().p("AgVDbIAAm2IArAAIAAG2g");
	this.shape_3.setTransform(-2.2,106.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","#010101","#171717","#272727","#303030","#333333","#666666","#808080","#333333","#1D1D1D","#0D0D0D","#030303","#000000"],[0,0.004,0.078,0.161,0.255,0.388,0.459,0.498,0.627,0.698,0.773,0.855,0.969],0,-21.9,0,22).s().p("AgVDcIAAm3IArAAIAAG3g");
	this.shape_4.setTransform(-16.1,106.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","rgba(52,52,52,0)","#343434","#1D1D1D","#0D0D0D","#030303","#000000"],[0,0.71,0.71,0.761,0.82,0.882,0.969],0,-21.9,0,22).s().p("AgVDbIAAm2IArAAIAAG2g");
	this.shape_5.setTransform(15.5,106.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000000","#171717","#343434","#4A4A4A","#5A5A5A","#636363","#666666","#757676","#B4B6B7","#CDCFD1","#666666","#515151","#343434","rgba(52,52,52,0)","rgba(0,0,0,0)"],[0,0.035,0.09,0.149,0.216,0.286,0.388,0.404,0.471,0.498,0.627,0.659,0.71,0.71,1],0,-21.9,0,22).s().p("AgVDbIAAm2IArAAIAAG2g");
	this.shape_6.setTransform(15.5,106.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","rgba(52,52,52,0)","#343434","#1D1D1D","#0D0D0D","#030303","#000000"],[0,0.71,0.71,0.761,0.82,0.882,0.969],0,-21.9,0,22).s().p("AgVDcIAAm3IArAAIAAG3g");
	this.shape_7.setTransform(83.9,106.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000000","#171717","#343434","#4A4A4A","#5A5A5A","#636363","#666666","#757676","#B4B6B7","#CDCFD1","#666666","#515151","#343434","rgba(52,52,52,0)","rgba(0,0,0,0)"],[0,0.035,0.09,0.149,0.216,0.286,0.388,0.404,0.471,0.498,0.627,0.659,0.71,0.71,1],0,-21.9,0,22).s().p("AgVDcIAAm3IArAAIAAG3g");
	this.shape_8.setTransform(83.9,106.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGDUIAAmnIANAAIAAGng");
	this.shape_9.setTransform(-18.4,105.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGDUIAAmnIANAAIAAGng");
	this.shape_10.setTransform(-4.5,105.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGDUIAAmnIANAAIAAGng");
	this.shape_11.setTransform(12.5,105.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGDUIAAmnIANAAIAAGng");
	this.shape_12.setTransform(64.1,105.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGDUIAAmnIANAAIAAGng");
	this.shape_13.setTransform(81,105.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGDUIAAmnIANAAIAAGng");
	this.shape_14.setTransform(101.4,105.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","rgba(52,52,52,0)","#343434","#1D1D1D","#0D0D0D","#030303","#000000"],[0,0.71,0.71,0.761,0.82,0.882,0.969],0,-21.9,0,22).s().p("AgVDbIAAm2IArAAIAAG2g");
	this.shape_15.setTransform(104.4,106.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#000000","#171717","#343434","#4A4A4A","#5A5A5A","#636363","#666666","#757676","#B4B6B7","#CDCFD1","#666666","#515151","#343434","rgba(52,52,52,0)","rgba(0,0,0,0)"],[0,0.035,0.09,0.149,0.216,0.286,0.388,0.404,0.471,0.498,0.627,0.659,0.71,0.71,1],0,-21.9,0,22).s().p("AgVDbIAAm2IArAAIAAG2g");
	this.shape_16.setTransform(104.4,106.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","rgba(52,52,52,0)","#343434","#1D1D1D","#0D0D0D","#030303","#000000"],[0,0.71,0.71,0.761,0.82,0.882,0.969],0,-21.9,0,22).s().p("AgVDbIAAm2IArAAIAAG2g");
	this.shape_17.setTransform(67.1,106.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#000000","#171717","#343434","#4A4A4A","#5A5A5A","#636363","#666666","#757676","#B4B6B7","#CDCFD1","#666666","#515151","#343434","rgba(52,52,52,0)","rgba(0,0,0,0)"],[0,0.035,0.09,0.149,0.216,0.286,0.388,0.404,0.471,0.498,0.627,0.659,0.71,0.71,1],0,-21.9,0,22).s().p("AgVDbIAAm2IArAAIAAG2g");
	this.shape_18.setTransform(67.1,106.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0)","rgba(52,52,52,0)","#343434","#1D1D1D","#0D0D0D","#030303","#000000"],[0,0.71,0.71,0.761,0.82,0.882,0.969],0,-20.2,0,20.3).s().p("AgQDLQguAAghghQghghAAgvIAAizQAAgvAhghQAhghAuAAIAhAAQAuAAAhAhQAhAhAAAvIAACzQAAAvghAhQghAhguAAg");
	this.shape_19.setTransform(-9.1,106.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#000000","#171717","#343434","#4A4A4A","#5A5A5A","#636363","#666666","#757676","#B4B6B7","#CDCFD1","#666666","#515151","#343434","rgba(52,52,52,0)","rgba(0,0,0,0)"],[0,0.035,0.09,0.149,0.216,0.286,0.388,0.404,0.471,0.498,0.627,0.659,0.71,0.71,1],0,-20.2,0,20.3).s().p("AgQDLQguAAghghQghghAAgvIAAizQAAgvAhghQAhghAuAAIAhAAQAuAAAhAhQAhAhAAAvIAACzQAAAvghAhQghAhguAAg");
	this.shape_20.setTransform(-9.1,106.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0)","rgba(161,161,161,0)","#A1A1A1","#767676","#525252","#343434","#1D1D1D","#0D0D0D","#030303","#000000"],[0,0.647,0.647,0.682,0.722,0.761,0.804,0.851,0.902,0.969],0,-20.2,0,20.3).s().p("AjlDLQgvAAghghQggghgBgvIAAizQABgvAgghQAhghAvAAIHLAAQAuAAAiAhQAgAhABAvIAACzQgBAvggAhQgiAhguAAg");
	this.shape_21.setTransform(41.3,106.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#000000","#1C1C1C","#454545","#696969","#868686","#9C9C9C","#ACACAC","#B5B5B5","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#A1A1A1","rgba(161,161,161,0)","rgba(0,0,0,0)"],[0,0.024,0.063,0.106,0.149,0.196,0.247,0.306,0.388,0.416,0.498,0.627,0.647,0.647,1],0,-20.2,0,20.3).s().p("AjlDLQgvAAghghQggghgBgvIAAizQABgvAgghQAhghAvAAIHLAAQAuAAAiAhQAgAhABAvIAACzQgBAvggAhQgiAhguAAg");
	this.shape_22.setTransform(41.3,106.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0)","rgba(161,161,161,0)","#A1A1A1","#767676","#525252","#343434","#1D1D1D","#0D0D0D","#030303","#000000"],[0,0.647,0.647,0.682,0.722,0.761,0.804,0.851,0.902,0.969],0,-20.2,0,20.3).s().p("Ag5DLQguAAghghQgighAAgvIAAizQAAgvAighQAhghAuAAIBzAAQAuAAAhAhQAiAhgBAvIAACzQABAvgiAhQghAhguAAg");
	this.shape_23.setTransform(94,106.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#000000","#1C1C1C","#454545","#696969","#868686","#9C9C9C","#ACACAC","#B5B5B5","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#A1A1A1","rgba(161,161,161,0)","rgba(0,0,0,0)"],[0,0.024,0.063,0.106,0.149,0.196,0.247,0.306,0.388,0.416,0.498,0.627,0.647,0.647,1],0,-20.2,0,20.3).s().p("Ag5DLQguAAghghQgighAAgvIAAizQAAgvAighQAhghAuAAIBzAAQAuAAAhAhQAiAhgBAvIAACzQABAvgiAhQghAhguAAg");
	this.shape_24.setTransform(94,106.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AmhFAQgUgcgOgbIAAkQIAjAAICXlEIFsAAQAsgCA7AXQB2AvBHCCIA9CqIgKAMQgNAKgOgPQgJgjgRgoQgjhWgmgmQgygyhAghQhFgkg6AAIkOAAIgQAJQgSAMgNAVQgUAghyDXIgMExIgHAKQgDACgDAAQgHAAgJgMg");
	this.shape_25.setTransform(158.5,101.5);

	this.instance_11 = new lib.Mesh_1();
	this.instance_11.setTransform(197.6,88.1);

	this.instance_12 = new lib.Mesh_2();
	this.instance_12.setTransform(241.6,88.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AB2FeQgPgVgGgXQgjiGh1kJQhTi7grhTQgMgWAOgBIARAEQACADgCAGQgCAGABADQBzDaCAEfQBBCQAqBlIgLABQghAAgZglg");
	this.shape_26.setTransform(240.1,-3.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#414649","#B8B8B8","#FFFFFF"],[0,0.71,1],-8.5,-33,14.3,21).s().p("ADbE1QgpAAgmgPIlviRQhagjg3hQQg2hPAAhhIAAhaQAAgfAWgXQAWgWAgAAIH9AAQAXAAAZAHQAzANAMAfIBBCvQBDCyAHAaQAMAsAEAbQAEAegDAdQgDAZgMAPQgOARgWAAg");
	this.shape_27.setTransform(194.1,0.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CDCFD1").s().p("ADgE9QgpAAgngPIl5iVQhcgkg4hTQg4hQAAhjIAAhdQAAggAXgXQAXgXAgAAIIKAAQAXAAAbAHQA0AOAMAgIBDCzQBEC2AIAbQAMAsAEAdQAEAfgDAeQgDAZgNAQQgOARgXAAg");
	this.shape_28.setTransform(194.1,0.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("ADmFFQgqAAgpgQImCiYQhfglg5hVQg5hSAAhmIAAhfQAAghAXgYQAYgXAhAAIIXAAQAYAAAbAHQA1AOANAhIBFC4QBGC7AHAcQANAtADAdQAFAggEAeQgCAagNAQQgPASgXAAg");
	this.shape_29.setTransform(194.1,0.9);

	this.instance_13 = new lib.Mesh_3();
	this.instance_13.setTransform(123.7,-119.8);

	this.instance_14 = new lib.Mesh_4();
	this.instance_14.setTransform(-264.4,-134.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#000000","#0C0C0C","#171717","#1E1E1E","#202020","#000000"],[0,0.02,0.059,0.106,0.247,1],0,23.5,0,-23.4).s().p("AmmAwICikaIFjAAIC9BnICKC6IAAB7ItCA5g");
	this.shape_30.setTransform(161.5,95.6);

	this.instance_15 = new lib.Mesh_5();
	this.instance_15.setTransform(123.7,-49);

	this.instance_16 = new lib.Group_11();
	this.instance_16.setTransform(-251.8,70.5);

	this.addChild(this.instance_16,this.instance_15,this.shape_30,this.instance_14,this.instance_13,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.instance_12,this.instance_11,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.shape,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-264.4,-134.8,529.1,269.7);
p.frameBounds = [rect];


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sym04();
	this.instance.setTransform(94.4,-135.1,1,1,0,0,0,360.9,198.7);

	this.instance_1 = new lib.Group_8();
	this.instance_1.setTransform(223.1,-39.8);

	this.instance_2 = new lib.Group_6();
	this.instance_2.setTransform(221.4,16.1);

	this.instance_3 = new lib.Group_3();
	this.instance_3.setTransform(221.3,14);

	this.instance_4 = new lib.Group_2();
	this.instance_4.setTransform(215,-20.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag9BkQgGAEgFAAIgPAAQgKAAgGgHQgHgHAAgJIAAk/QAAgKAHgGQAGgGAKgBIAPAAQAJAAAGAHIApgRIAJAVIgiAOIAABEIgIAAIAAC0IALABIgDBEICRADIAHAWIiPgCIBgCkIgYAEg");
	this.shape.setTransform(225.9,5.8);

	this.instance_5 = new lib.Group_1();
	this.instance_5.setTransform(113.4,68.6);

	this.instance_6 = new lib.sym00();
	this.instance_6.setTransform(171.7,-16.4,1,1,0,0,0,44,28.5);
	this.instance_6.alpha = 0.262;

	this.instance_7 = new lib.Mesh();
	this.instance_7.setTransform(243,54.4);

	this.instance_8 = new lib.Group();
	this.instance_8.setTransform(140.3,-36.4);

	this.instance_9 = new lib.Group_7();
	this.instance_9.setTransform(-254.9,87.4);

	this.instance_10 = new lib.Path_1();
	this.instance_10.setTransform(124,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#680603").s().p("AgOB5QgXgXAAgfIAAiFQAAgfAXgXQAUgWAgAAIAAEdQggAAgUgWg");
	this.shape_1.setTransform(-255.3,106.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AGhC3QgFg+gTg1QgmhqhvhUQh7hbiKgBQhhABhaAwQiBBFhBCVQgSArgHAwQgHAwADBAIgoAAQgCgaABgoQAEhQAWhFQBdkoFLAAQCugBB1BWQBqBNA+CUIARBDQAQBMgHA0IgxAGQAAg3gBgSg");
	this.shape_2.setTransform(-150.5,99.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#010101","#171717","#272727","#303030","#333333","#666666","#808080","#333333","#1D1D1D","#0D0D0D","#030303","#000000"],[0,0.004,0.078,0.161,0.255,0.388,0.459,0.498,0.627,0.698,0.773,0.855,0.969],0,-21.9,0,22).s().p("AgVDbIAAm2IArAAIAAG2g");
	this.shape_3.setTransform(-2.2,106.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","#010101","#171717","#272727","#303030","#333333","#666666","#808080","#333333","#1D1D1D","#0D0D0D","#030303","#000000"],[0,0.004,0.078,0.161,0.255,0.388,0.459,0.498,0.627,0.698,0.773,0.855,0.969],0,-21.9,0,22).s().p("AgVDcIAAm3IArAAIAAG3g");
	this.shape_4.setTransform(-16.1,106.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","rgba(52,52,52,0)","#343434","#1D1D1D","#0D0D0D","#030303","#000000"],[0,0.71,0.71,0.761,0.82,0.882,0.969],0,-21.9,0,22).s().p("AgVDbIAAm2IArAAIAAG2g");
	this.shape_5.setTransform(15.5,106.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000000","#171717","#343434","#4A4A4A","#5A5A5A","#636363","#666666","#757676","#B4B6B7","#CDCFD1","#666666","#515151","#343434","rgba(52,52,52,0)","rgba(0,0,0,0)"],[0,0.035,0.09,0.149,0.216,0.286,0.388,0.404,0.471,0.498,0.627,0.659,0.71,0.71,1],0,-21.9,0,22).s().p("AgVDbIAAm2IArAAIAAG2g");
	this.shape_6.setTransform(15.5,106.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","rgba(52,52,52,0)","#343434","#1D1D1D","#0D0D0D","#030303","#000000"],[0,0.71,0.71,0.761,0.82,0.882,0.969],0,-21.9,0,22).s().p("AgVDcIAAm3IArAAIAAG3g");
	this.shape_7.setTransform(83.9,106.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000000","#171717","#343434","#4A4A4A","#5A5A5A","#636363","#666666","#757676","#B4B6B7","#CDCFD1","#666666","#515151","#343434","rgba(52,52,52,0)","rgba(0,0,0,0)"],[0,0.035,0.09,0.149,0.216,0.286,0.388,0.404,0.471,0.498,0.627,0.659,0.71,0.71,1],0,-21.9,0,22).s().p("AgVDcIAAm3IArAAIAAG3g");
	this.shape_8.setTransform(83.9,106.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGDUIAAmnIANAAIAAGng");
	this.shape_9.setTransform(-18.4,105.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGDUIAAmnIANAAIAAGng");
	this.shape_10.setTransform(-4.5,105.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGDUIAAmnIANAAIAAGng");
	this.shape_11.setTransform(12.5,105.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGDUIAAmnIANAAIAAGng");
	this.shape_12.setTransform(64.1,105.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGDUIAAmnIANAAIAAGng");
	this.shape_13.setTransform(81,105.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGDUIAAmnIANAAIAAGng");
	this.shape_14.setTransform(101.4,105.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","rgba(52,52,52,0)","#343434","#1D1D1D","#0D0D0D","#030303","#000000"],[0,0.71,0.71,0.761,0.82,0.882,0.969],0,-21.9,0,22).s().p("AgVDbIAAm2IArAAIAAG2g");
	this.shape_15.setTransform(104.4,106.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#000000","#171717","#343434","#4A4A4A","#5A5A5A","#636363","#666666","#757676","#B4B6B7","#CDCFD1","#666666","#515151","#343434","rgba(52,52,52,0)","rgba(0,0,0,0)"],[0,0.035,0.09,0.149,0.216,0.286,0.388,0.404,0.471,0.498,0.627,0.659,0.71,0.71,1],0,-21.9,0,22).s().p("AgVDbIAAm2IArAAIAAG2g");
	this.shape_16.setTransform(104.4,106.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","rgba(52,52,52,0)","#343434","#1D1D1D","#0D0D0D","#030303","#000000"],[0,0.71,0.71,0.761,0.82,0.882,0.969],0,-21.9,0,22).s().p("AgVDbIAAm2IArAAIAAG2g");
	this.shape_17.setTransform(67.1,106.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#000000","#171717","#343434","#4A4A4A","#5A5A5A","#636363","#666666","#757676","#B4B6B7","#CDCFD1","#666666","#515151","#343434","rgba(52,52,52,0)","rgba(0,0,0,0)"],[0,0.035,0.09,0.149,0.216,0.286,0.388,0.404,0.471,0.498,0.627,0.659,0.71,0.71,1],0,-21.9,0,22).s().p("AgVDbIAAm2IArAAIAAG2g");
	this.shape_18.setTransform(67.1,106.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0)","rgba(52,52,52,0)","#343434","#1D1D1D","#0D0D0D","#030303","#000000"],[0,0.71,0.71,0.761,0.82,0.882,0.969],0,-20.2,0,20.3).s().p("AgQDLQguAAghghQghghAAgvIAAizQAAgvAhghQAhghAuAAIAhAAQAuAAAhAhQAhAhAAAvIAACzQAAAvghAhQghAhguAAg");
	this.shape_19.setTransform(-9.1,106.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#000000","#171717","#343434","#4A4A4A","#5A5A5A","#636363","#666666","#757676","#B4B6B7","#CDCFD1","#666666","#515151","#343434","rgba(52,52,52,0)","rgba(0,0,0,0)"],[0,0.035,0.09,0.149,0.216,0.286,0.388,0.404,0.471,0.498,0.627,0.659,0.71,0.71,1],0,-20.2,0,20.3).s().p("AgQDLQguAAghghQghghAAgvIAAizQAAgvAhghQAhghAuAAIAhAAQAuAAAhAhQAhAhAAAvIAACzQAAAvghAhQghAhguAAg");
	this.shape_20.setTransform(-9.1,106.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0)","rgba(161,161,161,0)","#A1A1A1","#767676","#525252","#343434","#1D1D1D","#0D0D0D","#030303","#000000"],[0,0.647,0.647,0.682,0.722,0.761,0.804,0.851,0.902,0.969],0,-20.2,0,20.3).s().p("AjlDLQgvAAghghQggghgBgvIAAizQABgvAgghQAhghAvAAIHLAAQAuAAAiAhQAgAhABAvIAACzQgBAvggAhQgiAhguAAg");
	this.shape_21.setTransform(41.3,106.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#000000","#1C1C1C","#454545","#696969","#868686","#9C9C9C","#ACACAC","#B5B5B5","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#A1A1A1","rgba(161,161,161,0)","rgba(0,0,0,0)"],[0,0.024,0.063,0.106,0.149,0.196,0.247,0.306,0.388,0.416,0.498,0.627,0.647,0.647,1],0,-20.2,0,20.3).s().p("AjlDLQgvAAghghQggghgBgvIAAizQABgvAgghQAhghAvAAIHLAAQAuAAAiAhQAgAhABAvIAACzQgBAvggAhQgiAhguAAg");
	this.shape_22.setTransform(41.3,106.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0)","rgba(161,161,161,0)","#A1A1A1","#767676","#525252","#343434","#1D1D1D","#0D0D0D","#030303","#000000"],[0,0.647,0.647,0.682,0.722,0.761,0.804,0.851,0.902,0.969],0,-20.2,0,20.3).s().p("Ag5DLQguAAghghQgighAAgvIAAizQAAgvAighQAhghAuAAIBzAAQAuAAAhAhQAiAhgBAvIAACzQABAvgiAhQghAhguAAg");
	this.shape_23.setTransform(94,106.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#000000","#1C1C1C","#454545","#696969","#868686","#9C9C9C","#ACACAC","#B5B5B5","#B8B8B8","#C1C1C1","#DBDBDB","#B8B8B8","#A1A1A1","rgba(161,161,161,0)","rgba(0,0,0,0)"],[0,0.024,0.063,0.106,0.149,0.196,0.247,0.306,0.388,0.416,0.498,0.627,0.647,0.647,1],0,-20.2,0,20.3).s().p("Ag5DLQguAAghghQgighAAgvIAAizQAAgvAighQAhghAuAAIBzAAQAuAAAhAhQAiAhgBAvIAACzQABAvgiAhQghAhguAAg");
	this.shape_24.setTransform(94,106.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AmhFAQgUgcgOgbIAAkQIAjAAICXlEIFsAAQAsgCA7AXQB2AvBHCCIA9CqIgKAMQgNAKgOgPQgJgjgRgoQgjhWgmgmQgygyhAghQhFgkg6AAIkOAAIgQAJQgSAMgNAVQgUAghyDXIgMExIgHAKQgDACgDAAQgHAAgJgMg");
	this.shape_25.setTransform(158.5,101.4);

	this.instance_11 = new lib.Mesh_1();
	this.instance_11.setTransform(198,88.4);

	this.instance_12 = new lib.Mesh_2();
	this.instance_12.setTransform(242,88.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AB2FeQgPgVgGgXQgjiGh1kJQhTi7grhTQgMgWAOgBIARAEQACADgCAGQgCAGABADQBzDaCAEfQBBCQAqBlIgLABQghAAgZglg");
	this.shape_26.setTransform(240.1,-3.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#414649","#B8B8B8","#FFFFFF"],[0,0.71,1],-8.5,-33,14.3,21).s().p("ADbE1QgpAAgmgPIlviRQhagjg3hQQg2hPAAhhIAAhaQAAgfAWgXQAWgWAgAAIH9AAQAXAAAZAHQAzANAMAfIBBCvQBDCyAHAaQAMAsAEAbQAEAegDAdQgDAZgMAPQgOARgWAAg");
	this.shape_27.setTransform(194.1,0.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CDCFD1").s().p("ADgE9QgpAAgngPIl5iVQhcgkg4hTQg4hQAAhjIAAhdQAAggAXgXQAXgXAgAAIIKAAQAXAAAbAHQA0AOAMAgIBDCzQBEC2AIAbQAMAsAEAdQAEAfgDAeQgDAZgNAQQgOARgXAAg");
	this.shape_28.setTransform(194.1,0.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("ADmFFQgqAAgpgQImCiYQhfglg5hVQg5hSAAhmIAAhfQAAghAXgYQAYgXAhAAIIXAAQAYAAAbAHQA1AOANAhIBFC4QBGC7AHAcQANAtADAdQAFAggEAeQgCAagNAQQgPASgXAAg");
	this.shape_29.setTransform(194.1,0.7);

	this.instance_13 = new lib.Mesh_3();
	this.instance_13.setTransform(124,-119.6);

	this.instance_14 = new lib.Mesh_4();
	this.instance_14.setTransform(-264.9,-134.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#000000","#0C0C0C","#171717","#1E1E1E","#202020","#000000"],[0,0.02,0.059,0.106,0.247,1],0,23.5,0,-23.4).s().p("AmmAwICikaIFjAAIC9BnICKC6IAAB7ItCA5g");
	this.shape_30.setTransform(161.5,95.4);

	this.instance_15 = new lib.Mesh_5();
	this.instance_15.setTransform(124,-49.6);

	this.instance_16 = new lib.Group_11();
	this.instance_16.setTransform(-251.9,70.4);

	this.addChild(this.instance_16,this.instance_15,this.shape_30,this.instance_14,this.instance_13,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.instance_12,this.instance_11,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.shape,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-264.9,-134.6,530,269.3);
p.frameBounds = [rect];


(lib.Symbol28copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap9C9IAogoIApAoIgpApgAI6DbIAAj0IA0AAIAAD0gAFCDbQgOAAgLgHQgJgHgMgNIgSAbQgrAAgwgbIgUAbQghAAgggZIgDAZIhOAAQgFAAgIgCQgHgCgGgFIgVgWIgTAfIhEAAQgKAAgJgFQgHgDgIgGIgOgQIgUAeIiMAAQgzAAgcgZQgbgYAAgwQAAgUAIgdIAngIIAEADQgGAYAAASQAAAZAQAMQAPAMAoAAIB2AAIAAheIA0AAIAABVQALAJATAAIA2AAIAAheIA0AAIAABWQALAIAQAAIAiAAIALhbIA0AAIgLBQQATAKAZAAIALhaIAyAAIgJBTQAZAHAhABQgHgzgIguIA0gLQAJAxAGAzQAKAIAUAAIAvAAQAlAAAVgFQAWgFAYgLQgcgSgSgGQgQgFgWAAQgRAAgYAHIgEgCIAAg1QAbgNAYABQAagBAfATQAfAQAxArIgMAuQgnAXgnALQgkANgwAAgAptCMIgGi1IA9AAIgGC1gAknAUIggAaIgggmIArghIAXAaIAggYIAgAkIgpAigAhagLIAqgjIAgAnIgpAhgABjgUIBiglIAAAZIhiAjgAGZgmQgIgIABgKQAAgPAMgPQAOgQAGABQAKAAAKALQAKAMAAANQAAANgMALQgMAKgNAAQgKAAgIgHgAGrhKIgDAEQgBADAAAEQAAAFAIABQAMgBAAgEQAAgDgEgGQgGgEgDAAgAImgwIAAgcIAVABQgIgKAAgKQAAgNAIgPQASgGAOAAQANAAANACIgDAaQgMgCgMAAIgNABIAAAEQAAAPAHAIQAYgBAMgEIACABIAEAaQgRAFggAAgAlihfIBiglIAAAZIhiAkgAhThaQgIgIAAgKQAAgPANgPQAOgPAGAAQAKAAAJALQALALAAAOQAAAOgMAKQgMAKgMAAQgLAAgIgHgAhBh+IgDAFQgBACgBAEQAAAGAJgBQAMAAgBgEQABgCgFgGQgFgFgDAAgAIRjAIBhglIAAAYIhhAmg");
	this.shape.setTransform(-105.3,-84.7);

	this.replay = new lib.Symbol27_1();
	this.replay.setTransform(-174.2,122.3,1,1,0,0,0,19.4,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFEFD").s().p("AMFB7QgIgIAAgNQAAgMAIgIQAHgIANAAQAMAAAIAIQAHAIAAAMQAAANgHAIQgIAJgMgBQgNABgHgJgAC1BrQgagaAAgqQAAgpAagaQAagZAoAAQAoAAAZAZQAYAaAAAnQAAAtgdAbQgZAWglAAQgnAAgZgYgADUgBQgKAOAAAZQAAAbAMARQAMARAUAAQATAAANgRQAMgRAAgbQAAgYgKgPQgMgTgWAAQgWAAgMATgAghBrQgWgaAAgpQgBgpAYgbQAXgZAfAAQAkAAAPAXIAAAAIAAhlIAtAAIAADQIACAyIgoAAIgCgcIgBAAQgIAPgPAJQgQAJgTgBQgfAAgVgYgAAAgBQgKAOAAAZQAAAaAKAPQAMAQAVAAQAOAAALgJQAKgIAEgPQABgGAAgHIgBgnQgDgLgKgJQgLgJgPAAQgVAAgMARgAJTBrQgYgYAAgqQAAgnAWgZQAYgeApAAQAoAAAUAdQARAXAAAgQAAANgCAHIh3AAQABAXAQAMQAPALAXAAQAcAAAVgIIAHAfQgcALgiAAQgrAAgZgYgAJxgHQgJAKgCARIBOAAQABgQgIgKQgKgQgUAAQgTAAgLAPgAnjBrQgZgYAAgqQAAgnAWgZQAZgeAoAAQAoAAAVAdQAQAXAAAgIgBAUIh4AAQABAXAQAMQAPALAXAAQAcAAAWgIIAGAfQgcALgiAAQgrAAgYgYgAnGgHQgJAKgCARIBPAAQAAgQgHgKQgKgQgUAAQgTAAgMAPgAHpB/IAAhkQAAgsgiABQgMAAgKAIQgJAHgEAJQgCAGAAAIIAABpIgtAAIAAh9QAAgjgCgQIAoAAIACAbIABAAQAHgNANgHQARgLAUAAQAbAAAQARQAUAVAAAkIAABqgAjWB/IAAkCIAuAAIAAECgAk0B/IAAkCIAuAAIAAECgApxB/Igah0QgJglgEgnIgBAAQgGAlgLAnIgcB0IgxAAIg8j1IAwAAIAXBxIAQBTIABAAIAShUIAbhwIAvAAIAYByQAKArAFAmIABAAQAHgoAKgrIAahwIAtAAIhCD1gAMHAzIgGipIAvAAIgGCpg");
	this.shape_1.setTransform(96.3,-78.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AibBBQAHgBAGgFQAIgGAEgIIACgEIgBgFIghhPIAZAAIAVA/IAAAAIATg/IAYAAIgXA6QgQAugOALQgLAKgNACgABFBLIAFgRQAMAHANAAQAaAAAAgbIAAgIIgBAAQgIANgRAAQgRAAgKgMQgLgMAAgTQAAgTAMgNQAMgNAQAAQASABAIAOIAAAAIABgNIATAAIAABKQAAAbgNANQgNALgVgBQgVAAgKgGgABagUQgGAJAAALQAAALAFAHQAGAIAKAAQAOAAAEgNIABgIIAAgSQgFgPgNAAQgKAAgGAIgACsAmQgIgIAAgKQAAgRAOgGQAOgJAZAAIAAgBQAAgQgSABQgOAAgKAGIgEgPQANgHATgBQAkAAAAAmIAAAeIABAVIgUAAIgBgKIgBAAQgJAMgRAAQgNAAgHgIgAC6ARQAAANANAAQAOAAAEgNIAAgEIAAgNQgfABAAAQgAgWAmQgHgIAAgKQAAgRAOgGQANgJAXAAIAAgBQAAgQgSABQgMAAgKAGIgEgPQANgHARgBQAkAAAAAmIAAAeQAAANACAIIgVAAIgBgKIgBAAQgIAMgQAAQgMAAgIgIgAgHARQAAANAKAAQAOAAAEgNIABgEIAAgNQgdABAAAQgAjwAmQgHgIAAgKQAAgRAOgGQANgJAZAAIAAgBQAAgQgSABQgOAAgKAGIgEgPQANgHATgBQAkAAAAAmIABAzIgUAAIgBgKIgBAAQgJAMgRAAQgMAAgIgIgAjhARQAAANAMAAQAOAAAEgNIAAgEIAAgNQgeABAAAQgAFuAsIAAgwQAAgWgQgBQgNAAgFAOIgBAHIAAAyIgWAAIgBhXIAUAAIABAOIAAAAQAJgQATAAQANAAAJAJQAKAKAAATIAAAzgAEGAsIAAhXIAXAAIAABXgAkgAsIAAh/IAXAAIAAB/gAmEAsIAAh2QAOgDAUAAQAYAAANAKQALAKAAARQAAASgKAKQgNAMgaAAIgKAAIAAAsgAltg7IAAApQACABAIAAQAbAAAAgWQAAgVgZAAgAEJg6QgEgEAAgFQAAgFAEgDQADgEAGAAQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAQgGAAgDgDg");
	this.shape_2.setTransform(80.2,125.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.replay,p:{x:-174.2,y:122.3}},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.replay,p:{x:148.7,y:122.2}}]},1).wait(1));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAwQAAgLgCgiIgEgjQABgFAFgLQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAFIACAgIADAkQAAARgDAGQgDAHAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBg");
	this.shape_3.setTransform(-65.5,121.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHA0QgGAAAAgHQAAgHAGAAIABAAQAGAAACgCQADAAACgCIgHg4IAAgNIAAgCQAAgCABgGQADgGACAAIABABIAGAMIAAACIAAABIgEAHQABAWAEAaQAAAPgHALQgEAGgJAAg");
	this.shape_4.setTransform(-69.8,121.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGALQgDgCAAgEQAAgFAEgFQAEgIABAAQADAAAEAEQADAEAAAFIgBAGQgDAIgGAAQgEAAgCgDgAgDAAIgCABQAAAEAFAAQAFAAAAgDIgCgCQgDgDAAAAIgDADg");
	this.shape_5.setTransform(-69.2,114.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfAYQgJAAgIgFQgHgDgEgIQgJAJgHAEQgIADgKAAQgHAAAAgHQAAgIAHABIABAAQAQgBANgHQgEgEgLgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAgHADgDQAKgHAIAAQALAAAGAHIABAEQAAAKgIADQAIAJAJAAIACAAQAGgBAAAIQAAAHgGAAg");
	this.shape_6.setTransform(-73.7,124.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOALQAAgEACgCIAEgEIAWgLQAAAAAAgBQAAAAAAAAQABABAAAAQAAAAAAAAQAAAGgEADIgYAMIgBABIAAgBg");
	this.shape_7.setTransform(-73.7,119.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAiIAAgCQADgFAGgFQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAIAKAKQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgHALIgCABQgJgHgCgDgAg1AAQgOgGAAgNQAAgLAFgJQADgEABABIACABIgCADQgCAGgBAEQABAJALAFQAKAEAUAAQAXAAARgFQASgFAJgGIACgCQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAABQAAAFADAEQADADADAAIACAAQAGAAAAAHQAAAGgGAAIgCAAQgOAAgDgNQgOAHgKADQgWAGgTgBQgTAAgMgDg");
	this.shape_8.setTransform(-83.1,127.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJAFQAAgEAEgGQAEgIABAAQADAAAEAEQADAEAAAFIgBAGQgDAIgGAAQgJAAAAgJgAgDgBIgBACQAAAEAEAAIADgBIADgCIgDgCQgCgDgBAAIgDACg");
	this.shape_9.setTransform(-84.3,119.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAXQgHAAAAgIQAAgHAHAAIAAAAQAMAAAHgIIAGgMQAGgJAIAAQAHAAAFAKQADAHAAAHQAAAFgEAFQgDAFgDAAQgEAAgHgDQgIgEgEgFQgJARgMAAgAAGgHIgCAEIAQAHQgBgEgDgEQgEgFgDAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAg");
	this.shape_10.setTransform(-97.8,124.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOALQAAgEACgDIAEgDIAWgMIABABQAAAHgEABIgYAOg");
	this.shape_11.setTransform(-97.1,120);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghAbQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAQABAAAAAAIAJABQAOAAAMgLQAMgKACgJQAAgCgDgFIgFgFIAAgCQAAgHADgFIACgBQACAAACAEQADAGAJAAIACAAQAHAAAAAHQAAAHgHAAIgBAAIgJAAIAAACQAAAHgCAEIgHAPQgGAJgIAEIgIACQgHAAgPgHg");
	this.shape_12.setTransform(-103.2,128.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPAMIAAgFQACgFACAAQAAAAAAAAQAAABABAAQAAAAAAABQAAABAAABIAAACQAAADAEAAIAAAAQAGgBAAgFQABgFABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAABQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABAAQAFAAAAgDQABgFACAAQACAAAAAFIgBAGQgDAIgGAAIgEgBIgBAAQgDAJgGAAQgHAAAAgKgAgPAAIABgEIADgDIACgBIAYgMQAAgBAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgDAHIgEACIgXALIAAAAIgBAAg");
	this.shape_13.setTransform(-102.8,121.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNAnQgEgEAAgGQAAgIAHgOQAIgMACAAQAEAAAFAEQAJAHAAAKQAAAIgCAGQgFAOgNAAQgGAAgFgFgAgCALQgIAEAAAHQAAADADACQADACAEAAQAIAAADgFIAAgBIAAgBQgGgMgGAAgAAJgVIgJgIIgGAIIgCAAQgHgFgDgEIAAgCIAJgKQAAAAAAAAQABgBAAAAQAAAAAAABQAAAAABAAQAEAFADADIAHgIIACAAQAGAGAEADQAAAAAAAAQABAAAAABQAAAAgBAAQAAAAAAABIgIAKIgBAAIgBAAg");
	this.shape_14.setTransform(-108.9,122.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNARQgBgEACgCIAEgEIAWgLQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAEgDACIgYAPgAgNAEQgBgEACAAIAEgEIAWgNQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAGgDACIgYANg");
	this.shape_15.setTransform(-109.1,115.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAABDQAAgMgBghIgEgkQAAgGAFgJQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIABAGIACAdIACAnQAAARgCAFQgCAIgCgBIgBgDgAgOgeIABgEIAFgGIABgBIgBAAQgGgDAAgDIAAgBQAAgJAMgKQACgCACgBQAFABAAAEIgBAGIgCADIgCgBQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgDAAgCACQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABQAAABAEACIAFACIABgBQADAAAHgDIACgBIAAAAIgBADQgCAEgCABIgXARIgBAAg");
	this.shape_16.setTransform(-116.9,120.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQATQAAAAAAAAQABAAAAgBQABAAAAAAQABgBABAAQAMgHAGgJQgGgDAAgEQAAgDADgGQAEgEAEAAQAFAAAAAHQAAAGgCAEIADACQAAACgDACIAAABIgDgCQgIALgGAEIgKACQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBgAAFgIIgBAAQAAABAGACIAAgDQAAgBAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAABg");
	this.shape_17.setTransform(-117.5,110.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpApQgHAAAAgIQAAgHAHAAIABAAQAOAAAJgDQAJgCAOgHIgcgHIgEAAQgCACgDAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgFAIgFQAEgDAFAAIADAAIAkAJQAOADAIAAIADgBIAAABIgCAGIgFAGIgDABIgMgBQgJAAgGACIgNAGQgQAJgHACQgGADgKAAgAAJgRQgJgGAAgEIAAgBQABgFAFgFIACgBQAHAHAFACQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIgJAKIgBABIgBAAg");
	this.shape_18.setTransform(-124.3,123);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAGQAAgGAEgFQAEgIABAAQADAAAEAEQADAEAAAFIgBAGQgDAIgGAAQgJAAAAgIgAgDAAIgBABQAAAEAEAAIADgBQABAAAAgBQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBAAQgCgDgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQAAABgBABg");
	this.shape_19.setTransform(-123.5,116.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgiAbQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAIAIABQAPAAALgLQANgKACgJQAAgCgEgFIgEgFIgBgCQAAgFAEgHIACgBQABAAACAEQAEAGAIAAIADAAQAHAAAAAHQAAAHgHAAIgCAAIgIAAIAAACQAAAHgCAEIgIAPQgGAJgHAEIgIACQgIAAgPgHg");
	this.shape_20.setTransform(-131.4,128.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOALQAAgEACgCIAEgEIAWgLIABAAQAAAHgEACIgYAMg");
	this.shape_21.setTransform(-130.7,122.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgiAmQgLgIAAgPQAAgQAKgPQACgEABAAIABABIgBAFQgHAMAAAIQAAAMALAGQAIAGANAAQAJAAARgHQAPgGAEgEIAAgBQAAgCgOgCQgUgBgBgGIgBgFQABgPAOgNQAMgMAKAAQAHAAAAAHQAAADgCAGIgCACIgCgBQAAgBgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgHAAgKAHQgKAHgBAGQABAHARACIAOAAQAEABABAHQAAANgVAMQgUAMgOAAQgPAAgJgHg");
	this.shape_22.setTransform(-138.9,125.5);

	this.instance = new lib.LV1_U1_L1_Activity_P_img_21();
	this.instance.setTransform(-230.6,-157.6);

	this.image = new lib.Symbol4();
	this.image.setTransform(-212.8,-157.8,1,1,0,0,0,-211.9,-156.9);

	this.instance_1 = new lib.LV1_U1_L1_Activity_P_img_11();
	this.instance_1.setTransform(-229.6,-157.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.image,p:{skewY:0,x:-212.8}},{t:this.instance},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.image,p:{skewY:180,x:194.9}},{t:this.instance_1}]},1).wait(1));

	// Layer 3
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.8)").s().p("EgtmAtdMAAAha5MBbOAAAMAAABa5g");
	this.shape_23.setTransform(-18.5,139.6,1,1,0,0,0,0,146.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-310.5,-297.9,584,582);
p.frameBounds = [rect, rect];


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6D6D6").p("AiKjBIEVAAQAYAAARARQARARAAAYIAAEPQAAAYgRARQgRARgYAAIkVAAQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAg");
	this.shape.setTransform(-0.9,-0.2,1.435,1.435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AiKDCQgYAAgRgRQgRgRAAgYIAAkPQAAgYARgRQARgRAYAAIEUAAQAZAAARARQARARAAAYIAAEPQAAAYgRARQgRARgZAAg");
	this.shape_1.setTransform(-0.9,-0.2,1.435,1.435);

	this.instance = new lib.Symbol6("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.027)").s().p("AjkEaIgDAAQgTgCgMgOQgPgOAAgVIAEnSQAAgUAPgPQAPgPAUAAIA2ABIABgBIFZADIABAAIADAAIAuAAQAVABAOAPQAPAPABAUIgFHSQAAAUgPAQQgMANgRABIgDABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.3,-28.6,57.2,57.3);
p.frameBounds = [rect, new cjs.Rectangle(-27.7,-28.6,55.7,57.3), new cjs.Rectangle(0,0,0,0)];


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 3
	this.dragabble_2 = new lib.Symbol14();
	this.dragabble_2.setTransform(41.7,-216.1);

	this.dragabble_0 = new lib.Symbol13();
	this.dragabble_0.setTransform(-75.8,-152.9);

	this.dragabble_1 = new lib.Symbol12();
	this.dragabble_1.setTransform(-43.9,-211.3);

	this.dragabble_15 = new lib.Symbol11();
	this.dragabble_15.setTransform(0.3,-152.5);

	this.dragabble_16 = new lib.Symbol9();
	this.dragabble_16.setTransform(76.8,-151.9);

	this.dragabble_5 = new lib.Symbol22();
	this.dragabble_5.setTransform(-44.5,-213.2);

	this.dragabble_17 = new lib.Symbol21();
	this.dragabble_17.setTransform(-77,-153.8);

	this.dragabble_4 = new lib.Symbol20();
	this.dragabble_4.setTransform(0.3,-153.4);

	this.dragabble_3 = new lib.Symbol19();
	this.dragabble_3.setTransform(42.4,-218);

	this.dragabble_18 = new lib.Symbol18();
	this.dragabble_18.setTransform(78.1,-152.9);

	this.dragabble_6 = new lib.Symbol32();
	this.dragabble_6.setTransform(-74.8,-147.4);

	this.dragabble_9 = new lib.Symbol31();
	this.dragabble_9.setTransform(-1.7,-147);

	this.dragabble_8 = new lib.Symbol30();
	this.dragabble_8.setTransform(71.6,-146.5);

	this.dragabble_7 = new lib.Symbol29();
	this.dragabble_7.setTransform(-73.1,-213.5);

	this.dragabble_20 = new lib.Symbol28();
	this.dragabble_20.setTransform(-1.9,-208.5);

	this.dragabble_19 = new lib.Symbol27();
	this.dragabble_19.setTransform(73.4,-212.6);

	this.dragabble_12 = new lib.Symbol44();
	this.dragabble_12.setTransform(-111.8,-162.9);

	this.dragabble_21 = new lib.Symbol43();
	this.dragabble_21.setTransform(-43.5,-154.4);

	this.dragabble_22 = new lib.Symbol42();
	this.dragabble_22.setTransform(29.8,-154);

	this.dragabble_10 = new lib.Symbol41();
	this.dragabble_10.setTransform(-73.6,-222.4);

	this.dragabble_14 = new lib.Symbol40();
	this.dragabble_14.setTransform(-2.2,-217.4);

	this.dragabble_13 = new lib.Symbol39();
	this.dragabble_13.setTransform(73.3,-221.5);

	this.dragabble_11 = new lib.Symbol38();
	this.dragabble_11.setTransform(103.5,-153.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dragabble_16},{t:this.dragabble_15},{t:this.dragabble_1},{t:this.dragabble_0},{t:this.dragabble_2}]}).to({state:[{t:this.dragabble_18},{t:this.dragabble_3},{t:this.dragabble_4},{t:this.dragabble_17},{t:this.dragabble_5}]},1).to({state:[{t:this.dragabble_19},{t:this.dragabble_20},{t:this.dragabble_7},{t:this.dragabble_8},{t:this.dragabble_9},{t:this.dragabble_6}]},1).to({state:[{t:this.dragabble_11},{t:this.dragabble_13},{t:this.dragabble_14},{t:this.dragabble_10},{t:this.dragabble_22},{t:this.dragabble_21},{t:this.dragabble_12}]},1).wait(1));

	// Layer 1
	this.dropabble_1 = new lib.Symbol8();
	this.dropabble_1.setTransform(-1.9,0.4);

	this.dropabble_2 = new lib.Symbol7();
	this.dropabble_2.setTransform(-57.7,0.4);

	this.dropabble_0 = new lib.Symbol5();
	this.dropabble_0.setTransform(53.7,0.4);

	this.dropabble_5 = new lib.Symbol17();
	this.dropabble_5.setTransform(-57.6,0.4);

	this.dropabble_4 = new lib.Symbol16();
	this.dropabble_4.setTransform(-1,0.4);

	this.dropabble_3 = new lib.Symbol15();
	this.dropabble_3.setTransform(55.5,0.4);

	this.dropabble_9 = new lib.Symbol26();
	this.dropabble_9.setTransform(-93.7,-0.3);

	this.dropabble_8 = new lib.Symbol25();
	this.dropabble_8.setTransform(-37.7,0.2);

	this.dropabble_7 = new lib.Symbol24();
	this.dropabble_7.setTransform(17.3,0.2);

	this.dropabble_6 = new lib.Symbol23();
	this.dropabble_6.setTransform(73.5,-0.3);

	this.dropabble_14 = new lib.Symbol37();
	this.dropabble_14.setTransform(-117.1,-0.7);

	this.dropabble_13 = new lib.Symbol36();
	this.dropabble_13.setTransform(-60.9,-0.2);

	this.dropabble_12 = new lib.Symbol35();
	this.dropabble_12.setTransform(-4.3,-0.2);

	this.dropabble_11 = new lib.Symbol34();
	this.dropabble_11.setTransform(51.8,-0.2);

	this.dropabble_10 = new lib.Symbol33();
	this.dropabble_10.setTransform(108.5,-0.2,1,1,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dropabble_0},{t:this.dropabble_2},{t:this.dropabble_1}]}).to({state:[{t:this.dropabble_3},{t:this.dropabble_4},{t:this.dropabble_5}]},1).to({state:[{t:this.dropabble_6},{t:this.dropabble_7},{t:this.dropabble_8},{t:this.dropabble_9}]},1).to({state:[{t:this.dropabble_10},{t:this.dropabble_11},{t:this.dropabble_12},{t:this.dropabble_13},{t:this.dropabble_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.8,-245.5,215.7,274.6);
p.frameBounds = [rect, new cjs.Rectangle(-109.5,-247.9,219.2,277.1), new cjs.Rectangle(-124,-243.9,228.2,272.8), new cjs.Rectangle(-147.5,-252.9,284.4,281.9)];


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9A4C3E").s().p("AgKgCQAFgFAGACQAJADAAAIQgSgGgCgCg");
	this.shape.setTransform(4,29.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9A4C3E").s().p("AAAgFQAHgCAGAFQgEAEgUAFQABgJAKgDg");
	this.shape_1.setTransform(-2.2,29.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.4).p("AgDAcQABgLAHgw");
	this.shape_2.setTransform(-1.6,73.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.4).p("AAJgrQgDAJgOBS");
	this.shape_3.setTransform(-10.1,71.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_4.setTransform(3.5,30.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAg");
	this.shape_5.setTransform(3.9,30.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AgEAAQgBgEAFAAQAFAAAAAEQAAAFgFAAQgFAAABgFg");
	this.shape_6.setTransform(3.9,30.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAAIAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAg");
	this.shape_7.setTransform(-2,30.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAg");
	this.shape_8.setTransform(-1.6,30.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_9.setTransform(-1.6,30.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAJQgEgEAAgFQAAgEAEgEQAFgEAEAAQAGAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgGAAQgEAAgFgEg");
	this.shape_10.setTransform(-2,30.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgDAEgBQAFABAEADQAEAEAAAEQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_11.setTransform(3.7,30);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#636363").s().p("Ag9BGQAAgHADgDQgKgDABgJIADgIQgJgIAEgKQADgHAJgFQgLgKARgVQAPgTAKAAQgBgOASgHQAOgGAIAEQAAgKAagFQAVgEALAGQgKgEgVAIQgaAKACAEQgNgDgMALQgNALABAGQgNgCgJAWQgKATAFAFQgPAJABAJQABAGAHAEQgFAFABAFQACAFAGACQgIAMAIAFIgFAHQgHgCABgIg");
	this.shape_12.setTransform(-8.3,24.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhBBLQgQgJgFAHQgLACgCgJQgCgHAEgHQgHgCgBgGQgBgFAEgGQgIgGABgIQACgKALgHQgKgIARgWQAQgVAIACQAAgOATgHQARgHAFAEQAEgLAbgCQAcgDAEAGQAZgCALAMQAyAGgVAmQgIAOgPAHQgPAGgLgFQgJAQgTgLQgQgIgEgNQgBAJgSAMQgVAPgKgBQALAIABAVQAAAUgGAAQAEAMgJAHQgEADgFABIgOgLg");
	this.shape_13.setTransform(-4.4,25.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B40306").s().p("AgLgBQANgDAKAFQgEACgFAAQgGAAgIgEg");
	this.shape_14.setTransform(-0.8,37);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFAHQgLgFgHgKQAQAIAQAAQAJAAAGgBQgLAKgLAAQgCAAgFgCg");
	this.shape_15.setTransform(-0.8,36.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4C2D27").s().p("AAEASQgIgDgMgMIgJgKIgBgBQgCABgCAGQgCgLAHgDQADgCAEAAIgFAFIAAACQATAPATABQAKAAAGgEQgCAFgEAEQgIAHgJAAIgEAAg");
	this.shape_16.setTransform(-1.2,35.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9A4C3E").s().p("AgGADQAKgBAAgEQAIAFgOAAIgEAAg");
	this.shape_17.setTransform(-8.5,36.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4C2D27").s().p("AAIADQgFgCgDAAIgJACQADgDAGAAIACAAQgDgHgOgCQAMgCAKAKQAGADADAFIgFADQABgDgEgEg");
	this.shape_18.setTransform(-11.4,34.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4C2D27").s().p("AAAAAIgDgGQAKAFgEAEIgDAEQADgFgDgCg");
	this.shape_19.setTransform(2.3,32.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHgHQAMgCAVAEIgyANQgCgLATgEg");
	this.shape_20.setTransform(-3,27);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgOgJQAMgCAIAHQAKAFgCAKg");
	this.shape_21.setTransform(4.5,27.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9A4C3E").s().p("AAZAXQgCghgDgTQgFgigLABIAAgIQAAgHACAAQAEAAAEAEQAOATABAgIABA2QgRAggqAOQAlgOARgpg");
	this.shape_22.setTransform(2.9,31.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9A4C3E").s().p("AhKAgQgMgcALgVQANgdA0gJQAxgKAjATQANAIgLAIQgKAHgSgEQgEAIgSgCQgTgDgFgOQgXAdgMgBQAGAIADAOQAFAVgLADQABALgHAHQgGAGgLAAQgLgFgKgXg");
	this.shape_23.setTransform(-3.7,28.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.4).p("AhBASQgDgDgDgDQgMgKgJAJQgUAUAmAQQAWAIAOgEIAUATQAYATAagCQAcgKAQgMQAQgMAIgRQAAgsgCgUQgCgkgVgLQgdgMgnAAQguABgYAZQgXAXAKAiQAEAMAHAKQACACACAD");
	this.shape_24.setTransform(-3.8,31.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BC6251").s().p("AgSBGIgUgTQgOAEgWgIQgmgQAUgUQAJgJAMAKIAGAGIAEAFIgEgFQgHgKgEgMQgKgiAXgXQAYgZAugBQAnAAAdAMQAVALACAkQACAUAAAsQgIARgQAMQgQAMgcAKIgEABQgYAAgWgSg");
	this.shape_25.setTransform(-3.8,31.4);

	this.instance = new lib.sym08();
	this.instance.setTransform(1.8,44.4,1,1,0,0,0,2.7,2.9);
	this.instance.alpha = 0.289;

	this.instance_1 = new lib.sym09();
	this.instance_1.setTransform(1.1,54,1,1,0,0,0,4.3,12.2);
	this.instance_1.alpha = 0.289;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9A4C3E").s().p("AAAAAQAAgDAAgOIADAOQADAMgJAIQADgHAAgKg");
	this.shape_26.setTransform(15.3,48.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9A4C3E").s().p("AAfgWIAGADIhJAqg");
	this.shape_27.setTransform(9.3,52.8);

	this.instance_2 = new lib.sym07();
	this.instance_2.setTransform(-8.5,46.1,1,1,0,0,0,1.4,3.1);
	this.instance_2.alpha = 0.289;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AAAAAA").s().p("AgZAIIAFgOQABgEARAAQARgBALAJIgBANQgegKgUAHg");
	this.shape_28.setTransform(-11.1,48.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4C2D27").s().p("AgEAQQgHgCgBgNQgBgIACgIQgCAeAMgBQAKgBAEgQIgCAJQgEAKgHAAIgEAAg");
	this.shape_29.setTransform(-13.7,68.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9A4C3E").s().p("AgJAmQAGAEgCgNIABgZIACgRIABgTQAAgJgBgDQADgBAFAJIABAXQAAAXgCAJQAHANgDAIQgCAEgDABIgEAAQgEAAgFgHg");
	this.shape_30.setTransform(-13.1,67);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BC6251").s().p("AgKAVQgCgSABgIIABgHQACgFAJgIIALgGIAAApQAAAOgLAGQgBACgCAAQgHAAgBgLg");
	this.shape_31.setTransform(-13.6,66.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").p("AgFgrQgBABgDAFQgLAtAAAFQAAAEAUAYQAEAFAHgCQAIgCgCgPQAGgDgCgHQgBgHgHgEIAAgsQAAgCgCgB");
	this.shape_32.setTransform(-14,67.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BC6251").s().p("AAAApQgUgYAAgEQAAgFALgtIAEgGIAQACQAAAAAAAAQABABAAAAQAAABAAAAQABAAAAABIAAAsQAHAEABAHQACAHgGADQACAPgIACIgEAAQgFAAgCgDg");
	this.shape_33.setTransform(-14,67.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9A4C3E").s().p("AgLAlQARhFAAgMQAFgHABAFIAAAFIgHAoQgGAmgDAIQgBAEgCAAQgCAAgCgMg");
	this.shape_34.setTransform(-11.8,58.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.4).p("AACgxQgCACgBADIgSBSQACAIAJADQAIADADgIQADgHAGgiQAIgmAAgDQAAgEgCgD");
	this.shape_35.setTransform(-12.7,59.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BC6251").s().p("AgIAxQgJgDgCgIIAShSIADgFIAQAEQACADAAAEIgIApQgGAigDAHQgDAGgEAAIgEgBg");
	this.shape_36.setTransform(-12.7,59.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9A4C3E").s().p("AgFAVIAGgwIAAgCIAGADIgIA4IgBAAQgFAAACgJg");
	this.shape_37.setTransform(-10.3,52.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.4).p("AgGgjIAHABQAJAAAFADQgBAIgDAXQgEAZgCADQgFAKgHgDQgHgDgBgMg");
	this.shape_38.setTransform(-11.3,52.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BC6251").s().p("AgGAjQgIgDAAgMIAJg3IAGABQAJAAAFADIgEAfQgEAZgCADQgEAIgEAAIgDgBg");
	this.shape_39.setTransform(-11.4,52.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(0.2).p("AAZgDIgEAmQgLACgKAAQgYABgFgHQAIgdAMgQQARgbAbAF");
	this.shape_40.setTransform(-10.7,46.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FCF7F8").s().p("AgfAfQAHgdAMgQQARgbAbAFIgBACIgJAfIgDAmQgLACgKAAIgGAAQgTAAgEgGg");
	this.shape_41.setTransform(-10.5,46.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AAAAAA").s().p("AgQAHQgIgLAKgNQAGAOAJgCQAJAAAGgKQAGAEgCANQgBAQgNAAQgOAAgIgLg");
	this.shape_42.setTransform(-4.6,43.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9A4C3E").s().p("AgJASIAIgCQADgCACgDIgBgPQgNgHgEgKQAPAIAOADIAAAXQgBAEgIAEQgDABgDAAQgEAAgFgEg");
	this.shape_43.setTransform(-4.6,40.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").p("AAUgKIAAAYQgUAWgTgZIAAggg");
	this.shape_44.setTransform(-4.7,40.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BC6251").s().p("AgSAKIAAggIAlALIAAAYQgJAKgJAAQgJAAgKgNg");
	this.shape_45.setTransform(-4.7,40.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.2).p("AgBh4QgVgHgRAIQgPAHgHAQQAAACABA/QACBAgWA8QAVAVAmAIQAzALA0gfQAAgXgSg8QgUhCgWgo");
	this.shape_46.setTransform(-2.7,53.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FCF7F8").s().p("AgWB6QgmgIgVgVQAWg8gBhAIgBhBQAGgQAPgHQARgIAVAHIAXAhQAXAoAUBCQASA8AAAXQgmAXgoAAQgMAAgOgDg");
	this.shape_47.setTransform(-2.7,53.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7C7C7B").s().p("AAAgLIACgBIgCAYIgBABg");
	this.shape_48.setTransform(0.3,67.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7C7C7B").s().p("AgNANQAGgDAGgFQAKgIgCgNIAIACIgGAOQgJANgOAFg");
	this.shape_49.setTransform(-7.9,67);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7C7C7B").s().p("AgGAAQAHgFAMgCQgWAMgDADIAGgIg");
	this.shape_50.setTransform(-0.4,69.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7C7C7B").s().p("AgDgVIAHAAIgEAoIgDADg");
	this.shape_51.setTransform(-1.7,68.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7C7C7B").s().p("AAGhgIAHgFQgKAwgDA2QAAAggBBBQgHABgEAEQANi0AFgTg");
	this.shape_52.setTransform(3.3,74.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7C7C7B").s().p("AgWBVQADhTARgvQAMglANgDQgQATgHAxQgLAwACA1IgJACIgEgBg");
	this.shape_53.setTransform(-4,79.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7C7C7B").s().p("AgBALQglgGgdgRQAHACA8ABIBEAAQgQAWgjAAQgJAAgJgCg");
	this.shape_54.setTransform(-2,65.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#AAAAAA").s().p("AgPA1QgKgBgJgEQgFgBgEgEIgDgEQAShVAAgEQATgGAUAKQAVAKAQAUIgJANQgKARgHAdQgOAKgSAAIgFAAg");
	this.shape_55.setTransform(-6.3,72);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#AAAAAA").s().p("AgeAqIAKg8QAIgLAKgKQATgSAOAJIgDAeIgGA4QgKALgMACIgIABQgOAAgIgKg");
	this.shape_56.setTransform(1.1,72);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(0.4).p("AAbgJQgwAJgtgdQABAJgFAUIBLAiIAZgPQAFgFAGgFQANgJAKABQABgLACgJIACgGQgQALgaAFg");
	this.shape_57.setTransform(-2.1,66.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#AAAAAA").s().p("AhFgBQAFgVgBgJQAtAeAwgKQAagFAQgLIgCAGIgDAVQgKgBgNAIIgLAKIgZAPg");
	this.shape_58.setTransform(-2.2,67.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(0.4).p("AgZg0IgSBTIAaAUQAcASAXgEQgBhCALgvQgxgggUAcg");
	this.shape_59.setTransform(-8.4,81.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#AAAAAA").s().p("AgRAzIgagUIAThTQATgcAxAgQgLAvABBCIgJABQgTAAgXgPg");
	this.shape_60.setTransform(-8.5,81.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(0.4).p("AgSgxQgQBlAAAJQATADAUgQQAXgQAFAAQABgIAAg8IABgRQgFgJgTACQgQACgNAJg");
	this.shape_61.setTransform(-0.1,81.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#AAAAAA").s().p("AgiA9QAAgJARhlQANgJAPgCQAUgCAEAJIgBARQAAA8gBAIQgFAAgWAQQgSAOgRAAIgFgBg");
	this.shape_62.setTransform(-0.2,81.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CCCCCC").s().p("AgnAdQAfgDAQgGQANgEAAgCQAEgMgHgQIgIgPQAVAJAHAVIACASQgcALgcAAIgXgBg");
	this.shape_63.setTransform(6.1,88.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A7406B").s().p("AgVASQgCgNADgGQAEADAMgCQgCgGABgLQANgEAJABIAGABQgSAOgFANQAAAIAAAFIgCAAQgFAAgOgDg");
	this.shape_64.setTransform(-0.5,86.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(0.4).p("AgPgeQgRANgFALQgEAGABAKIgVgDIgEAMIApAMQAwAJArgSIgBgRQgDgLgMgLQgXgWgrAJg");
	this.shape_65.setTransform(3.4,87.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgYAfIgpgMIADgMIAVADQAAgKADgGQAFgLARgNQAsgJAXAWQAMALACALIABARQgdAMggAAQgNAAgQgDg");
	this.shape_66.setTransform(3.5,87.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CCCCCC").s().p("Ag7AYQA/gHAEgDQAAgOgDgKIgFgQIADACQALAMABAXQAVABAWgDQADAHgBAFQgTAGglAAQgaAAglgDg");
	this.shape_67.setTransform(-11.9,87.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#A7406B").s().p("AgPAVQAAgVgMgNIAJADIgEgKIAOgBQAMAAAFAHQgHAMgCADQAGAIAWgJIgCAUIgWABIgMABIgHgBg");
	this.shape_68.setTransform(-8.7,86.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(0.4).p("AhHAJQALgpAnABQATABAPAKQAMAKAAAYIAsgBIACAFQABAFAAADQgnAIg3gCQgcgCgVgCg");
	this.shape_69.setTransform(-13,87.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgWAgQgcgCgVgCIAAgTQALgpAnABQATABAPAKQAMAKAAAYIAsgBIACAFQABAFAAADQgfAGgpAAIgWAAg");
	this.shape_70.setTransform(-13,87.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#AAAAAA").s().p("AgYgBQAFgKARgDQAHgBAHAAIANASQgTgDgMAIQgHADgDAFIgIgRg");
	this.shape_71.setTransform(2,46.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#9A4C3E").s().p("AgWgdIACgBIAdAvQACgCAGgBIAGgBQgNAHgDAFIgCAGIgbg8g");
	this.shape_72.setTransform(3.3,50.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#9A4C3E").s().p("AgyAYIASACQAVgCAMgVQAegFAOgXQAFgHABAFQAAAFgGAIQgLAOgeAJQgLANgKAFQgHADgHAAQgKAAgJgGg");
	this.shape_73.setTransform(18.1,47.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(0.4,1,1).p("Ag3AmQgEgIADgGQAFgJAAgCQABgMgHgFQgGgFACgHQADgIALACQAPADABARQABAGgCAIQAGgDAGgHQANgMAFgSQADgWABgCQABgEAFAAQALAAABAMQACARgYAeQALgEALgMQAKgJACgGQABgKAKgBQAKgBgDARQgHARgNAJIgMAIIAMgDQANgFAIgKQADgFAGAEQAFADgHAMQgMATgfAKQgHAIgIAGQgTAMgQgJ");
	this.shape_74.setTransform(17.1,44.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#BC6251").s().p("AgjA1IgUgPQgEgIADgGIAFgLQABgMgHgFQgGgFACgHQADgIALACQAPADABARQABAGgCAIQAGgDAGgHQANgMAFgSIAEgYQABgEAFAAQALAAABAMQACARgYAeQALgEALgMQAKgJACgGQABgKAKgBQAKgBgDARQgHARgNAJIgMAIIAMgDQANgFAIgKQADgFAGAEQAFADgHAMQgMATgfAKQgHAIgIAGQgKAHgKAAQgIAAgHgEg");
	this.shape_75.setTransform(17.1,44.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(0.4).p("AgwAVQAAAJAQAEQAagNA0gfQAFgHgEgJQgEgKgJADIhBAl");
	this.shape_76.setTransform(8.9,51.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#BC6251").s().p("AgwAVIARgRIBBglQAJgDAEAKQAEAJgFAIQg0AegaAOQgQgFAAgJg");
	this.shape_77.setTransform(8.9,51.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(0.4).p("AgZgfIAFgEQAIgDAJgBQACADANAeQAPAcABADQACANgKACQgJABgIgLg");
	this.shape_78.setTransform(3.5,50.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BC6251").s().p("AACAeIgcg+IAFgDQAIgEAJAAIAPAgQAPAcABAEQACAMgKADIgBAAQgIAAgIgKg");
	this.shape_79.setTransform(3.6,50.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(0.2).p("AAmAWQgJgTgPgPQgbgigXANQATAfAPAlIALACQAQgBANgOg");
	this.shape_80.setTransform(0.6,44.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FCF7F8").s().p("AgDAjQgPglgTgfQAYgNAaAiQAPAPAKATQgOAOgQABg");
	this.shape_81.setTransform(0.7,44.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(0.4).p("AgOAiQAGgYAFgKQAIgXANgG");
	this.shape_82.setTransform(-2.4,72.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(0.4).p("AgDAvQADgvAEgp");
	this.shape_83.setTransform(3.8,71);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#9D0000").s().p("AkMEvQAJgBALgHQAFgCBZheQBkhrBXhhQBPhaBPheQBFhTABgFQADgHAAgGIgGgMIAFAFQABADAAAEIACADQAGASgIAPQg8BciXCsQhcBohlBgQgyAwggAbQgHAGgKAFQgPAHgNAAIgBAAg");
	this.shape_84.setTransform(2.5,60.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CA0000").s().p("AkQE2QgXgYgTgiQgCgDADgEIACgDQABAAAAgBQAAAAABAAQAAAAABgBQABAAAAAAQABAAAAAAQABABABAAQAAAAABAAQAAABABAAQA7BAAUgNIADgCIhHg8QgEgEAEgEIAKgLQADgEAFADIBGA8QAEAEADgEIABgBQAFgEgFgFIhFhAQgEgEAEgEIAKgLQAEgEAEAEIBHBBQAEAEAEgEIAGgFQAEgFgFgEIhJg/QgEgDADgFIAKgLQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIBMBBQAEAEAEgFIAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIhLhGQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAKgLQAEgEAFAEIBLBGQAAAAABABQAAAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABgBIAFgGQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIhOhDQgEgDADgFIAKgLQAEgEAEADIBQBEQAEAEAEgEIAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIhOhJQgEgDADgFIALgLQAAAAABgBQAAAAAAAAQABAAABgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAABABIBOBJQAEAEAEgEIAGgHQAEgEgEgEIhShFQgEgEAEgFIAJgLQAFgEAEADIBSBHQAFADADgEIABAAQADgEgEgEIhRhMQgEgCAEgEIAKgLQAEgEAEAEIBQBJQADAEAEgEIAGgGQAEgFgEgEIhShFQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAKgMQAEgEAEAEIBTBGQAEAEAEgFIAAAAQAEgEgEgEIhShLQgEgFAEgEIAKgLQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIBRBNQAFADAEgDIAGgHQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIhUhJQgEgEADgEIAKgMQAEgEACAEIBXBKQAEADAEgEIAAAAQAEgEgEgEIhVhPQgEgEADgFIALgKQADgEAFADIBUBPQAEAEAEgFIAGgGQAEgFgEgEIhYhKQgEgEAEgEIAJgMQAEgEAFAEIBXBKQAFAEADgEQAEgFgEgDIhWhQQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAKgLQAEgEAEADIBVBPQAFAEADgEIAGgHQADgFgEgDIhXhLQgFgEAEgEIAKgMQAEgEAEAEIBXBKQAFAEADgEIAAgBQAEgEgEgDIhWhQQgEgEAEgEIAKgLQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIBUBOQAEAFAEgFIAGgHQADgEgEgEIhWhKQgEgEADgEIAKgLQAEgFAEAEIBUBHQAFAFAEgGQAJgPgCgCQgOgVhGg3QgEgDACgEIAEgGQADgFAEADQAbAPAdATQArAdAPAUQAUAbgUAkQgQAahaBvQheBxiBCGQiQCUgkAKIgLACQgaAAgggkg");
	this.shape_85.setTransform(-2.3,56.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#1E120D").s().p("AgVAKIgFgXIAugBIAHAYQgGADgJABIgKABQgLAAgMgFg");
	this.shape_86.setTransform(-20.6,88.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#1E120D").s().p("AgMBnQgJgCgJgMQgKgNADhZQADhcAKAEQAJADgDAhQgDAjAKAFQANAJATAQQAUATgDAGQgCAEgKAKQgJAKABAKIADAWQABAMgNAEQgNAGgHAAIgBAAg");
	this.shape_87.setTransform(-26.1,55);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(0.2).p("Ag8huQAMAbAIAoQAIAqgFALQgHARAAAGQAAALALAKQANAMAKA0IAugBIgdhbQAHgFAIgJQAbgaACgYQABgQAEgjIAFgh");
	this.shape_88.setTransform(-22.2,74.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AghA4QgLgKAAgKQAAgHAHgRQAFgMgIgpQgIgngMgbIB5gNIgFAhIgFAzQgCAYgbAaQgIAJgHAFIAdBbIguABQgKg0gNgMg");
	this.shape_89.setTransform(-22.2,74.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#1E120D").s().p("AgPAYQgCgJAHgNIAJgQQAAgDgGgLQgEgIAFgIQAGgIAHABQAFAAAEACQADAUgSBSQgMgNgEgQg");
	this.shape_90.setTransform(12.9,71.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#1E120D").s().p("AgaAPIgBgVQAggBAOgKIAJAaQgJAEgLACQgJADgIAAQgKAAgHgDg");
	this.shape_91.setTransform(10.2,89.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(0.2).p("AhNhKQAGAGAYAiQAXAiAHAFQALALAGB6QAggBAOgJIgBgFQgDgeARh1QAThwAAgC");
	this.shape_92.setTransform(7.5,74.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgRAFQgHgFgXghQgYgjgGgGICbhAIgTBzQgRB0ADAeIABAFQgOAKggAAQgGh6gLgLg");
	this.shape_93.setTransform(7.5,74.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1E120D").s().p("AgBArIgFgVIgPAQQgSAPgLgFQgLgEATggIAUgcQgHABgHgBQgPgDABgKQACgMAogLQAmgMAKAJQAIAGAFAVQAEAXgGAHQgFAJgIgEIgIgFIABAbQgBAbgNAEIgDAAQgLAAgEgRg");
	this.shape_94.setTransform(-40.9,75.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(0.2).p("AA8ipQgPATgQAbQgfA2gGAnQgFAegIBHQgKA9gaAWIgBAJQAAAJAKgDQANgEATguQATg0ABgzQAAguASgiQAUgeAFgI");
	this.shape_95.setTransform(-31.8,54.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("Ag6CjIABgJQAagWAKg9QAIhHAEgeQAHgnAeg2QARgbAPgTIgNBDIgZAmQgSAiAAAuQgBAzgTA0QgTAugNAEIgFABQgFAAAAgHg");
	this.shape_96.setTransform(-31.8,54.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAGgOQANgBALADQgcgCgRAOIgOAPQALgZAYgEg");
	this.shape_97.setTransform(12.3,37.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1E120D").s().p("AgUAbIgUgJQALgnAjgHQASgDARAFIgDAUQgGAUgPAKQgJAGgKAAQgIAAgKgDg");
	this.shape_98.setTransform(12.6,37.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAGgLQAOABANAEQgegGgTAMIgQAMQALgWAbgBg");
	this.shape_99.setTransform(37.6,29.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1E120D").s().p("AgkASIgLgOIAegVQAigTAfAWQgBAOgNANQgNAOgVAAQgPAAgVgJg");
	this.shape_100.setTransform(37.3,29.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#C18B4F").s().p("AgZAAQABgWAYABQAYAAACAVQACASgFAEQgBgIgEgIQgHgOgLABQgOABgFAOQgDAHAAAIQgEgMABgLg");
	this.shape_101.setTransform(36.3,44.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F2CBA0").s().p("AgTAAQAFgSAOABQANAAAHARQADAIAAAJQgBgFgEgFQgHgIgLAAQgKAAgHAJIgEAKQgDgFAFgNg");
	this.shape_102.setTransform(36.3,44.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#C18B4F").s().p("AgWAQQgNgQAPgQQARgTARALQAJAGAGAKQgFgEgIgDQgQgEgJAJQgKAKAGAOQADAIAGAHIgBAAQgGAAgLgNg");
	this.shape_103.setTransform(24.3,49.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F2CBA0").s().p("AgVAIQgIgQALgKQAKgKAQAHQAKADAHAGQgFgCgHgBQgNAAgHAIQgIAHACANQACAHACAFQgFgCgHgPg");
	this.shape_104.setTransform(24.8,49.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#991414").s().p("AgnAbIgYgYIApgIQAugPAlgTIADAcQgFAdglAQQgNAGgKAAQgTAAgTgNg");
	this.shape_105.setTransform(32.7,54);

	this.instance_3 = new lib.sym003();
	this.instance_3.setTransform(31.8,52.2,1,1,0,0,0,17.3,13.4);

	this.instance_4 = new lib.sym001();
	this.instance_4.setTransform(22.1,26.6,1,1,0,0,0,10.3,6.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#1E120D").s().p("AgNANQgGgFAAgIQAAgHAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAHQAAAIgGAFQgGAHgIgBQgHABgGgHg");
	this.shape_106.setTransform(29.7,33.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgVAWQgJgKAAgMQAAgLAJgKQAKgJALAAQAMAAAKAJQAJAJAAAMQAAAMgJAKQgKAJgMAAQgMAAgJgJg");
	this.shape_107.setTransform(30.9,34.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#1E120D").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAHgIgBQgHABgGgHg");
	this.shape_108.setTransform(21,36.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgVAWQgJgJAAgNQAAgLAJgKQAKgJALAAQANAAAJAJQAJAKAAALQAAANgJAJQgJAJgNAAQgLAAgKgJg");
	this.shape_109.setTransform(22.1,37.5);

	this.instance_5 = new lib.sym002();
	this.instance_5.setTransform(26.3,35.7,1,1,0,0,0,14.6,13.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFD0A1").s().p("AgZAVQAGgGgHgCQAEgEgDgGIAUgEQAUgMALgWQADAMgEAPQgIAcgiAQQgCgMgGgDg");
	this.shape_110.setTransform(35.5,24.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#E8AE69").s().p("AgjAdQgTgaAVgFIAhgHQAggOAGgeQAJAWgDAXQgFAvg0APQgNgMgJgNg");
	this.shape_111.setTransform(34.5,24.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFD0A1").s().p("AgWACIgTgVQASAPAbgGQAPgDALgGQgCAEAHAKIAHAGQgDAEABAHIACAGIgQACQgbAAgVgSg");
	this.shape_112.setTransform(9.3,32.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E8AE69").s().p("AgmAJQgKgKgFgRIgEgOQAWAWAjgIQAQgDAOgIQAVgEAFAeQADANgCAQQgXAHgTAAQggAAgVgYg");
	this.shape_113.setTransform(10.2,32.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFE131").s().p("AgcAzIABgvQACgvACgHIAIgBQAKgBAFACQAcBHABAKQABAIgXAIQgNAFgMAAIgKgBg");
	this.shape_114.setTransform(25.5,62.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FCC106").s().p("AgjA3IgJgGQgDgKAKgtQAKgyAMgBIAOgCQANgCADAEQAEAFAPArQAPArgEADQgEAEgXAJQgXAKgKAAIgCAAQgIAAgKgFg");
	this.shape_115.setTransform(24.3,62.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFE131").s().p("AgEATQgMgDAFgQIAHgTQATADgCASQgCASgLAAIgEgBg");
	this.shape_116.setTransform(23.8,69.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF7639").s().p("AgIgPIAFgmIANA8QgGAMgCATIAAAQQgMgcACgpg");
	this.shape_117.setTransform(17.2,45.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F21919").s().p("AgWgUQAEglAMggIAfBfIgVBUQgjgiAJhMg");
	this.shape_118.setTransform(18.2,44.8);

	this.instance_6 = new lib.sym005();
	this.instance_6.setTransform(-3,56.4,1,1,0,0,0,30.3,24.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFE0BB").s().p("AADAJIgCAAIgBgCIgDgEQgEgEABgEQABgEADABQADAAAEAHIADACIAAAEQgBAEgDAAIgBAAg");
	this.shape_119.setTransform(-4.3,82.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFE0BB").s().p("AAAAJQgDgCgBgFIgCgEQAAgFAFgCQADAAADADQACAEAAACQAAAGgDACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIAAgBg");
	this.shape_120.setTransform(-8.8,84.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFE0BB").s().p("AgFAFIgBgDIABgCIACgBIADgDQAEgDADAEQACADgEACIgFADIgCABg");
	this.shape_121.setTransform(-18.6,81.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFE0BB").s().p("AgGAEQgBgEADgBIAEgFQADgCACADQADACgBADQAAABgEADIgCADIgCABQgFAAAAgEg");
	this.shape_122.setTransform(-15.3,84.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFE0BB").s().p("AgVAbQgagIgMgUIgGgUQAiAMAzgJQAagFAUgHIgBALQgDAMgGAIQgJAQgSAIQgNAGgOAAQgKAAgNgEg");
	this.shape_123.setTransform(-11.3,79.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F2D099").s().p("AgRAJQAAgJARgIQAOgJACAFIACABQABACgDAGQgEAHgNAHQgHAEgEAAQgFAAAAgGg");
	this.shape_124.setTransform(-18.1,81);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F2D099").s().p("AgQAOQAAgKAQgOQARgQgBAHQgCAYgOAMQgHAFgDAAQgFAAgBgIg");
	this.shape_125.setTransform(-15.1,83.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F2D099").s().p("AgKgNQgBgMAEABQADAAAEAHIAIARQAJAUgMAEIgEABQgLAAAAgmg");
	this.shape_126.setTransform(-8.9,83.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F2D099").s().p("AgDANQgHgJgFgLQgEgJADgEIAEgCIARARQASAQgGAHQgEAFgEAAQgGAAgGgKg");
	this.shape_127.setTransform(-4.6,82.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F2D099").s().p("AgDBGQgkgDgUgZQgSgXAEgiIAGggQAPgRAlgEQAlgEAYAUQAaAUACAgQADAggXAUQgWASgfAAIgEAAg");
	this.shape_128.setTransform(-11.2,76.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(0.2).p("AhIhEQAFAGAOAdQAOAcAGAFQAJAMgHByQAJACAOgCQAHgBAOgEIAAgBQAAgdAehuQAehpAAgC");
	this.shape_129.setTransform(16.5,73.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F4F4F4").s().p("AgfB+QAHhygJgMQgGgFgOgcQgOgdgFgGICRg6IgeBrQgeBuAAAdIAAABIgVAFIgMABQgGAAgFgBg");
	this.shape_130.setTransform(16.5,73.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#1E120D").s().p("AgZAMIABgYQAJADAOgCIAVgFIAHAdQgJACgLABIgKABQgOAAgIgFg");
	this.shape_131.setTransform(15.8,87.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#1E120D").s().p("AgWAJIgDgQQAcABARgIQAEANACALQgGADgJABIgJABQgLAAgNgGg");
	this.shape_132.setTransform(-14.2,86.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(0.2).p("AgiixQgMADgGAFQAXAHAOAQQAPASgDAVIgNA5QgOA6gBAPQgCAagbAbQgDAKABAHQABAJAKAIQAMAMALA7QAcABARgIIgahcQANgKANgSQAPgUABgRQACgQAOg6IAOg4QAFghgigVQgggTgkAJg");
	this.shape_133.setTransform(-13.9,67.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F4F4F4").s().p("AgcC1QgLg7gMgMQgKgIgBgJQgBgHADgKQAbgbACgaQABgPAOg6IANg5QADgVgPgSQgOgQgXgHQAGgFAMgDQAkgJAgATQAiAVgFAhIgOA4QgOA6gCAQQgBARgPAUQgNASgNAKIAaBcQgPAHgXAAIgHAAg");
	this.shape_134.setTransform(-13.9,67.6);

	this.instance_7 = new lib.sym03();
	this.instance_7.setTransform(2.1,58,1,1,0,0,0,31.5,39.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FCC181").s().p("AgEAEIAHgKIABAIQAAAFgDAAQgBAAgEgDg");
	this.shape_135.setTransform(-11.2,46.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FCC181").s().p("AgDACIABgIIAHAKQgFADAAAAQgDAAAAgFg");
	this.shape_136.setTransform(3.9,45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_2},{t:this.shape_27},{t:this.shape_26},{t:this.instance_1},{t:this.instance},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.instance_6},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.instance_5},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.instance_4},{t:this.instance_3},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_136},{t:this.shape_135},{t:this.instance_7}]},1).wait(1));

	// Layer 3
	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#DDDDDD").s().p("AgsAiQgcgRACgRQACgVAigPQAkgRBFgHIgeAKQggANgSAPQg8ArBnAoQgxgJgdgSg");
	this.shape_137.setTransform(73.5,29.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("Ag3AgIgDAAIAAgBIAAAAIAqgPIAWgIQALgEAMgEQALgHAGgGIAJgMIADgGIAAAAIABABIgCAGIgIAOQgGAIgKAFQgGAEgFACIgMAHIgWAKQgNAEgJABIgRABg");
	this.shape_138.setTransform(82.2,59.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgQAOIgIgBIgPgDIgYgIIgQgGIAAgBIAAAAIAhAFIAlAGIANABIAXgCIAUgFIAUgGIANgIIAAAAIAAABIgFAEIgPAJIgRAHIgVAGIgQACg");
	this.shape_139.setTransform(76.3,50.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#DDDDDD").s().p("AAnCMQgOgEgagNQgQgBgRgHQgagIgPgNQgvgkApg6QglgWAJgbQAMgnBhg5IgOARQgSAWgMAUQgmBCAkAdQgUApAHAaQALAjA6AKIAhAOQAbAJAqABIgYABQgaAAgXgGg");
	this.shape_140.setTransform(77,50.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgIDXQgUgFgNgFIgfgPIgigIIgegNIgFgEIgGgEIgIgHIgHgIIgGgNIgCgGIgBgHIgBgNIAEgRIACgFIAOgZIgJgFIgKgIIgCgDQgGgIgDgIQgBgJABgHQABgIADgEIAHgLIAJgKIATgSIA3giIAVgKIgNAAIgQgDQgQgEgQgHQgSgIgNgMQgIgHgEgHQgFgIAAgKQABgJAEgGQADgEAIgIQAIgHASgIIAOgFIAsgNIAfgFIAggBQAhABAeALQAkAMAaAWQAdAZAPAgQAPAoAFAaQAJAjgBAdIgDAgIgNAsIgHAOIgQAZQgSAYgXATIguAeIgBAAIgSAHIgPADIgMAAIgUgBgAhAhUQgeAQgPALIgeAXIgTASIgHAKIgGAJIgEAMQgBAFACAIQABAGAFAFIACADIAEADIAFADIASAKIgOAWIgEAKIgFAUIAAALIADAKIACAFIAFAHIAKAKIAFAEQADACACABIAFADIALAFIAWAHIAXAFIABAAIABABIAPAIIAPAHQAQAGAPADQAPADAOgCIAVgEIALgFIAAAAIAtgcQAZgTAQgWIAJgLIAPgaIAKgcIAEgPIADgfQABgdgHgiQgHgcgOglQgPgfgdgXQgagVgigKQgdgKgggBIgfACQgUACgKACIgrAMIgOAGQgRAHgIAGQgHAGgDAEQgFAFAAAIQAAAGAEAIQADAFAHAIQAMAKARAJQAPAIAQAFIAQADIAQABIADgBg");
	this.shape_141.setTransform(83.5,44.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgdDNQgXgHgUgMQgmgGgcgRQg4gkAvhDQg1gaAggrQAcgmBLgkQgPADgcgKQgbgJgUgQQgVgRACgSQADgUAlgQQBtgtBVAkQAlAPAZAZQAYAYAKAcQALAeAGAVQAKArgDAkQgHBwh2A/QgTAKgYAAQgRAAgYgHg");
	this.shape_142.setTransform(83.6,44.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#DDDDDD").s().p("AALgaQgSgMgogLIghgHQBIABApAOQAnAMAHATQAIAQgYATQgZAUgvAMQBegvhKgkg");
	this.shape_143.setTransform(-77.2,29.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAtAaQgNAAgMgDIgmgMIgNgGQgMgFgJgGQgHgGgFgHIgEgGIABAAIAAAAIAFAFQAGAGAGAFQAIAFANAEIAaAIIBIARIAAAAIgBAAIgBABIgFAAg");
	this.shape_144.setTransform(-77,58.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgOANIgYgEIgTgGQgNgDgFgEIgHgDIAAgBIABAAIAZAIIAiAGIAWAAIAXgEIA7gOIABAAIAAAAIgOAJIgKADIgbAKIgPACIgXABIgIAAg");
	this.shape_145.setTransform(-73.8,49.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#DDDDDD").s().p("AhfCRQAqgGAZgKIAcgQQA7gPAAgiQABgZgggmQAcgfg4g8QgPgSgagVIgUgPQBxAwAXAkQARAaggAYQA7A0gmAnQgOAOgWAJQgSAIgNACQgaAQgKAEQgeALgjAAIgIAAg");
	this.shape_146.setTransform(-72,49.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AASDSIgJgBIgSgGIgBAAIAAAAIg2gZQgegRgYgVIgXgXIgLgMIgZgqQgIgRgEgOQgJgcgCgiQgBgbAEglQAGghAXgaQAVgXAggPQAcgNAkgEIAQgBIARAAQAKAAAUACIBAANQAUAHALAFIAOAKQAHAIACAHQADAJgDAJQgDAIgGAGQgJAMgQAJQgMAIgSAGIgPAEIgNABIAYAIIBBAdIAZAPIAVAUQAEAEAFAJQADAGAAAHQAAAGgEAJIgCAEIgIAJIgHAFIAFAFIAQASIAGAKIAGALIADAMIABAGIgCANIgCAGIgFAJIgPAQIgPAKIgiANIgKACIgNAJIgOAJQgRAHgOAEQgTAEgPAAIgIAAgAgjjIIgPABQgiADgcAMQgfAMgVAXQgXAZgGAeQgFAnABAZQADAiAJAbQADAMAJASIAaAoIAVAYIAMAKQAYAUAdAQIA2AXIAAAAIALAEIAWADQAOAAARgEQANgEAQgIIAOgHIANgJIACgBIALgDIAfgNIASgMIAEgEIAFgGIAGgLIABgFIgBgLIgCgKIgFgKIgNgSIgTgUIAPgLIAEgDIADgEIABgCQAEgHAAgFQgBgJgCgDIgHgKIgJgKIgigZIgmgUIg1gVIgDgBIADAAQAHABAJgDIAPgEQARgHAMgIQAOgJAJgMQAGgGACgHQACgIgDgGQgCgIgGgEQgGgFgHgDQgMgHgRgFIg/gMIgegCg");
	this.shape_147.setTransform(-81.7,43.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgHDHQiKg0gmhrQgNglgBgnQAAgPADgkQACgaASgaQAUgcAggQQBPgpB4AiQAqAMAJAUQAHAQgRATQgOAQgaAMQgZALgRgCQBYAeAlAiQAtAngvAdQBDA9gwAnQgYATglAIQgOAMgYAKQgaALgYAAQgUAAgQgHg");
	this.shape_148.setTransform(-81.8,43.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#E4E0D0").s().p("Ar2gJIAQgEIXagBIADACIAAAZI3tACg");
	this.shape_149.setTransform(-1.2,102.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#F4EFD9").s().p("AmBnSIAngEILRABQAOACgCFgQgCFmgPDPQiHAHAYgDQAPgDhnAEQhtAFisgDQiygBhiAPg");
	this.shape_150.setTransform(-38.4,56.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F4EFD9").s().p("ABXHHQi2ABhoAAQhMgBg8gDIgzAAQAOjdACjnQADm3gBgdILjgBIAPACIgBOoQhfgOjLAAg");
	this.shape_151.setTransform(36.3,56.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#6E32E0").s().p("AsXn/IYwgBIgBP/I4wACg");
	this.shape_152.setTransform(-1.3,55.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#F4F0ED").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgDACAAQADAAADADQACACAAACQAAADgDADQgCACgDAAQgCAAgCgDg");
	this.shape_153.setTransform(21.2,-45.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#F4F0ED").s().p("AgOAPQgGgHAAgIQAAgIAHgGQAGgGAHAAQAJAAAGAGQAHAHgBAHQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_154.setTransform(24.5,-54.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgNAXQgGgJAAgOQAAgMAGgKQAGgJAHAAQAIgBAGAKQAGAKAAAMQAAANgGAKQgGAJgIAAQgHAAgGgJg");
	this.shape_155.setTransform(22.2,-50.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#896C4D").s().p("AgkA8QgQgZAAgjQABgkAPgYQAQgZAUAAQAWAAAQAaQAPAZAAAiQAAAigQAbQgQAZgVAAQgUgBgQgZg");
	this.shape_156.setTransform(22.2,-50.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#F4F0ED").s().p("AgFAGQgDgDAAgDQAAgCADgDQADgDACAAQADAAADADQADADAAACQAAADgDADQgDADgDAAQgCAAgDgDg");
	this.shape_157.setTransform(-16.6,-45.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F4F0ED").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQgBAKgGAGQgIAHgIAAQgJAAgGgHg");
	this.shape_158.setTransform(-20.1,-55.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgOAZQgGgLAAgOQAAgNAGgKQAHgLAHAAQAJAAAGALQAGAKAAANQAAANgGAMQgHAKgIAAQgHAAgHgKg");
	this.shape_159.setTransform(-17.6,-50.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#896C4D").s().p("AgnBAQgQgbAAglQAAglARgaQARgbAVAAQAYABAQAaQAQAcAAAjQAAAlgRAcQgQAagXAAQgWAAgRgbg");
	this.shape_160.setTransform(-17.8,-50.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#010101").s().p("AAbgJQg1giguBMQAIgZARgSQASgVAVgFQAvgNAiBXQgRghgdgOg");
	this.shape_161.setTransform(21.9,-62.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#010101").s().p("AAegKQg5gkgyBRQAKgbARgTQAUgWAVgFQA0gPAjBeQgTgjgdgQg");
	this.shape_162.setTransform(-17.9,-63.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgqCDQgQgPgKgZQgSgoABgzQABgyASgpQALgYAPgQQATgTAWAAQALAAAMAGQANAGAHAHQAQAQAKAZQAIASAFAbQAEAZAAAUQgBA0gRAoQgKAYgQAPQgIAJgMAGQgMAFgLAAQgYgBgSgTgAgmiBQgRAQgKAXQgSAmAAA0QABAyASAoQAKAXAPAOQAUATATAAQAVAAATgSQAPgPALgWQALgVAEgYQAFgWAAgYQAAgZgEgUQgFgYgKgUQgMgZgOgOQgRgRgXgBQgUAAgTARg");
	this.shape_163.setTransform(21.9,-50.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("Ag8BpQgZgtAAg8QAAg9AagrQAZgsAiAAQAkAAAZAsQAZArAAA9QgBA+gZArQgaAsgiAAQgjAAgZgsg");
	this.shape_164.setTransform(22,-50.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AhABwQgagwAAhAQABhBAbguQAaguAkAAQAmABAbAtQAbAugBBBQAABDgbAtQgbAvglgBQglAAgbgug");
	this.shape_165.setTransform(-18.1,-51.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgGAuIAAAAQgQgBgVgRQAFACARADIAPACIANAAQARgBAGgCQgUAOgOAAIgCAAgAg7gGQgrgFhaghQAfALBRALQApAGAngBIAAABQAmAAAogGQBWgMAdgLQhBAbgyAJQgxAIgXAAIgGAAQgYAAgjgFg");
	this.shape_166.setTransform(1.4,-9.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#DDBE05").s().p("AAGChQk+gBh9iiQgngzgPg9QgFgTgBgRIAEAQQAOAmAmAgQB6BkFEACQE1gEBxhLQAngcARglQAEgKAGgUIAFgYQAABlg8BJQh1CTk1AAIgGAAg");
	this.shape_167.setTransform(0,13.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FCF059").s().p("AgdEmQhYAAhQggQhMgfg5g3Qg4g4gchGQgchGAHhOQAAgdAfgiQAggjA4gdQCIhGC0ABQCyABCMBQQA1AeAiAjQAfAhgBAVQALBcglBLQgiBGhIA0QhDAxhZAaQhUAZhVAAIgHgBg");
	this.shape_168.setTransform(0.9,-76.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FCE74F").s().p("AAGKsQi/gCh/g5Qhmgug4hQQgog4gOhGQgEgZgBgQIADpDQgBgZAIgsQAOhRAqhFQA6hgBmg2QB+hDC+AAQC/ABB8BFQBiA3A1BhQAlBDALBUQAFAngDAdIgDJDQAAAUgDAWQgJBDgmA6Qg1BPhjAtQh7A4i8AAIgHAAg");
	this.shape_169.setTransform(0,-38.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-106.7,203.8,213.6);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_43 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(43).call(this.frame_43).wait(31));

	// Layer 2
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(-128.6,117.6,1,1,-59.9);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(161.3,117.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,rotation:-59.9,x:-128.6,y:117.6}}]}).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-57.8,x:-118.3,y:117.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.998,scaleY:0.998,rotation:-55.6,x:-108,y:117.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.998,scaleY:0.998,rotation:-53.5,x:-97.5,y:117.5}}]},1).to({state:[{t:this.instance,p:{scaleX:0.998,scaleY:0.998,rotation:-51.3,x:-87.2,y:117.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.998,scaleY:0.998,rotation:-49.3,x:-76.8,y:117.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.998,scaleY:0.998,rotation:-47,x:-66.5,y:117.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.998,scaleY:0.998,rotation:-45,x:-56.1,y:117.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.998,scaleY:0.998,rotation:-42.8,x:-45.8,y:117.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.998,scaleY:0.998,rotation:-40.5,x:-35.4,y:117.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.998,scaleY:0.998,rotation:-38.5,x:-25.1,y:117.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.998,scaleY:0.998,rotation:-36.3,x:-14.7,y:117.5}}]},1).to({state:[{t:this.instance,p:{scaleX:0.998,scaleY:0.998,rotation:-34.2,x:-4.3,y:117.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-32,x:6,y:117.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-29.9,x:16.4,y:117.5}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-27.7,x:26.7,y:117.5}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-25.5,x:37,y:117.5}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-23.4,x:47.4,y:117.5}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-21.2,x:57.7,y:117.5}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-19.2,x:68.1,y:117.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-17,x:78.5,y:117.5}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-14.9,x:88.8,y:117.5}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-12.7,x:99.2,y:117.5}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-10.5,x:109.5,y:117.6}}]},1).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,rotation:-8.4,x:120,y:117.6}}]},1).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,rotation:-6.2,x:130.3,y:117.5}}]},1).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,rotation:-4.2,x:140.6,y:117.5}}]},1).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,rotation:-1.9,x:151,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:161.3,skewX:0,skewY:0,scaleX:1,scaleY:1,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:1.3,x:180.2,skewX:0,skewY:0,scaleX:1,scaleY:1,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:2.5,x:199.1,skewX:0,skewY:0,scaleX:1,scaleY:1,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:3.8,x:218,skewX:0,skewY:0,scaleX:1,scaleY:1,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:5,x:236.9,skewX:0,skewY:0,scaleX:1,scaleY:1,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:255.7,skewX:6.3,skewY:6.5,scaleX:1,scaleY:1,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:274.6,skewX:7.5,skewY:7.8,scaleX:1,scaleY:1,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:293.5,skewX:8.8,skewY:9,scaleX:0.999,scaleY:1,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:312.4,skewX:10,skewY:10.3,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:331.3,skewX:11.3,skewY:11.6,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:350.2,skewX:12.6,skewY:13,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:369.1,skewX:13.8,skewY:14.3,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:388,skewX:15.3,skewY:15.6,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:406.9,skewX:16.5,skewY:16.8,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:425.8,skewX:17.8,skewY:18.3,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:444.7,skewX:19,skewY:19.5,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:463.6,skewX:20.3,skewY:20.8,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:482.5,skewX:21.6,skewY:22.1,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:501.4,skewX:22.8,skewY:23.3,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:520.3,skewX:24.1,skewY:24.8,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:539.2,skewX:25.3,skewY:26.1,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:558.1,skewX:26.6,skewY:27.3,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:576.9,skewX:27.8,skewY:28.6,scaleX:0.999,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:595.9,skewX:29.3,skewY:29.9,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:614.7,skewX:30.6,skewY:31.3,scaleX:0.999,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:633.6,skewX:31.8,skewY:32.6,scaleX:0.998,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:652.5,skewX:33.1,skewY:33.8,scaleX:0.998,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:671.4,skewX:34.3,skewY:35.1,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:690.3,skewX:35.6,skewY:36.6,scaleX:0.998,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:709.2,skewX:36.9,skewY:37.8,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:728.1,skewX:38.1,skewY:39.1,scaleX:0.998,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:747,skewX:39.4,skewY:40.4,scaleX:0.998,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:765.9,skewX:40.6,skewY:41.6,scaleX:0.998,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:784.8,skewX:41.9,skewY:43.1,scaleX:0.998,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:803.7,skewX:43.1,skewY:44.4,scaleX:0.998,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:822.6,skewX:44.6,skewY:45.6,scaleX:0.998,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:841.5,skewX:45.9,skewY:46.9,scaleX:0.998,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:860.4,skewX:47.1,skewY:48.4,scaleX:0.998,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:879.3,skewX:48.4,skewY:49.6,scaleX:0.998,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:898.2,skewX:49.6,skewY:50.9,scaleX:0.998,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:917.1,skewX:50.9,skewY:52.2,scaleX:0.998,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:935.9,skewX:52.2,skewY:53.4,scaleX:0.998,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:954.9,skewX:53.4,skewY:54.9,scaleX:0.998,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:973.7,skewX:54.7,skewY:56.2,scaleX:0.998,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:992.6,skewX:55.9,skewY:57.4,scaleX:0.998,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:1011.5,skewX:57.2,skewY:58.7,scaleX:0.999,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:1030.4,skewX:58.5,skewY:60,scaleX:1,scaleY:1,y:117.5}}]},1).wait(1));

	// Layer 3
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(-443.8,117.6,1,1,-44.9);

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(-153.8,117.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:-44.9,x:-443.8,y:117.6}}]}).to({state:[{t:this.instance_2,p:{scaleX:0.998,scaleY:0.998,rotation:-43.3,x:-433.5,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.998,scaleY:0.998,rotation:-41.7,x:-423.1,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.998,scaleY:0.998,rotation:-40,x:-412.7,y:117.7}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.998,scaleY:0.998,rotation:-38.5,x:-402.3,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.998,scaleY:0.998,rotation:-36.8,x:-392,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.998,scaleY:0.998,rotation:-35.2,x:-381.6,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.998,scaleY:0.998,rotation:-33.5,x:-371.3,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.998,scaleY:0.998,rotation:-32,x:-361,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.999,scaleY:0.999,rotation:-30.5,x:-350.6,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.999,scaleY:0.999,rotation:-28.7,x:-340.2,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.999,scaleY:0.999,rotation:-27.2,x:-329.9,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.999,scaleY:0.999,rotation:-25.5,x:-319.5,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.999,scaleY:0.999,rotation:-24,x:-309.2,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.999,scaleY:0.999,rotation:-22.2,x:-298.8,y:117.7}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.999,scaleY:0.999,rotation:-20.7,x:-288.5,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.999,scaleY:0.999,rotation:-19.2,x:-278.1,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.999,scaleY:0.999,rotation:-17.5,x:-267.7,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.999,scaleY:0.999,rotation:-15.9,x:-257.4,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.999,scaleY:0.999,rotation:-14.2,x:-247.1,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.999,scaleY:0.999,rotation:-12.7,x:-236.6,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.999,scaleY:0.999,rotation:-11,x:-226.3,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.999,scaleY:0.999,rotation:-9.4,x:-216,y:117.7}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.999,scaleY:0.999,rotation:-7.9,x:-205.6,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:-6.2,x:-195.3,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:-4.7,x:-184.9,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:-3,x:-174.5,y:117.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:-1.4,x:-164.2,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:-153.8,skewX:0,skewY:0,scaleX:1,scaleY:1,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:1.3,x:-134.9,skewX:0,skewY:0,scaleX:1,scaleY:1,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:2.5,x:-116,skewX:0,skewY:0,scaleX:1,scaleY:1,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:3.8,x:-97.1,skewX:0,skewY:0,scaleX:1,scaleY:1,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:5,x:-78.2,skewX:0,skewY:0,scaleX:1,scaleY:1,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:-59.4,skewX:6.3,skewY:6.5,scaleX:1,scaleY:1,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:-40.5,skewX:7.5,skewY:7.8,scaleX:1,scaleY:1,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:-21.6,skewX:8.8,skewY:9,scaleX:0.999,scaleY:1,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:-2.7,skewX:10,skewY:10.3,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:16.2,skewX:11.3,skewY:11.6,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:35.1,skewX:12.6,skewY:13,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:54,skewX:13.8,skewY:14.3,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:72.8,skewX:15.3,skewY:15.6,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:91.8,skewX:16.5,skewY:16.8,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:110.7,skewX:17.8,skewY:18.3,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:129.6,skewX:19,skewY:19.5,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:148.5,skewX:20.3,skewY:20.8,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:167.4,skewX:21.6,skewY:22.1,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:186.3,skewX:22.8,skewY:23.3,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:205.1,skewX:24.1,skewY:24.8,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:224,skewX:25.3,skewY:26.1,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:242.9,skewX:26.6,skewY:27.3,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:261.8,skewX:27.8,skewY:28.6,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:280.7,skewX:29.3,skewY:29.9,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:299.6,skewX:30.6,skewY:31.3,scaleX:0.999,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:318.5,skewX:31.8,skewY:32.6,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:337.4,skewX:33.1,skewY:33.8,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:356.3,skewX:34.3,skewY:35.1,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:375.2,skewX:35.6,skewY:36.6,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:394.1,skewX:36.9,skewY:37.8,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:413,skewX:38.1,skewY:39.1,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:431.9,skewX:39.4,skewY:40.4,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:450.8,skewX:40.6,skewY:41.6,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:469.7,skewX:41.9,skewY:43.1,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:488.6,skewX:43.1,skewY:44.4,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:507.5,skewX:44.6,skewY:45.6,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:526.4,skewX:45.9,skewY:46.9,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:545.3,skewX:47.1,skewY:48.4,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:564.2,skewX:48.4,skewY:49.6,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:583.1,skewX:49.6,skewY:50.9,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:602,skewX:50.9,skewY:52.2,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:620.9,skewX:52.2,skewY:53.4,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:639.8,skewX:53.4,skewY:54.9,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:658.6,skewX:54.7,skewY:56.2,scaleX:0.998,scaleY:0.999,y:117.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:677.5,skewX:55.9,skewY:57.4,scaleX:0.998,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:696.4,skewX:57.2,skewY:58.7,scaleX:0.999,scaleY:0.999,y:117.5}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:715.3,skewX:58.5,skewY:60,scaleX:1,scaleY:1,y:117.5}}]},1).wait(1));

	// Layer 1
	this.instance_4 = new lib.Tween5("synched",0);
	this.instance_4.setTransform(-291.9,-1.3);

	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.setTransform(-1.9,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{x:-291.9,y:-1.3}}]}).to({state:[{t:this.instance_4,p:{x:-281.6,y:-1.3}}]},1).to({state:[{t:this.instance_4,p:{x:-271.2,y:-1.3}}]},1).to({state:[{t:this.instance_4,p:{x:-260.9,y:-1.3}}]},1).to({state:[{t:this.instance_4,p:{x:-250.5,y:-1.3}}]},1).to({state:[{t:this.instance_4,p:{x:-240.1,y:-1.3}}]},1).to({state:[{t:this.instance_4,p:{x:-229.8,y:-1.3}}]},1).to({state:[{t:this.instance_4,p:{x:-219.4,y:-1.3}}]},1).to({state:[{t:this.instance_4,p:{x:-209.1,y:-1.3}}]},1).to({state:[{t:this.instance_4,p:{x:-198.7,y:-1.3}}]},1).to({state:[{t:this.instance_4,p:{x:-188.4,y:-1.3}}]},1).to({state:[{t:this.instance_4,p:{x:-178,y:-1.3}}]},1).to({state:[{t:this.instance_4,p:{x:-167.6,y:-1.3}}]},1).to({state:[{t:this.instance_4,p:{x:-157.3,y:-1.3}}]},1).to({state:[{t:this.instance_4,p:{x:-146.9,y:-1.4}}]},1).to({state:[{t:this.instance_4,p:{x:-136.6,y:-1.4}}]},1).to({state:[{t:this.instance_4,p:{x:-126.2,y:-1.4}}]},1).to({state:[{t:this.instance_4,p:{x:-115.9,y:-1.4}}]},1).to({state:[{t:this.instance_4,p:{x:-105.5,y:-1.4}}]},1).to({state:[{t:this.instance_4,p:{x:-95.1,y:-1.4}}]},1).to({state:[{t:this.instance_4,p:{x:-84.8,y:-1.4}}]},1).to({state:[{t:this.instance_4,p:{x:-74.4,y:-1.4}}]},1).to({state:[{t:this.instance_4,p:{x:-64.1,y:-1.4}}]},1).to({state:[{t:this.instance_4,p:{x:-53.7,y:-1.4}}]},1).to({state:[{t:this.instance_4,p:{x:-43.4,y:-1.4}}]},1).to({state:[{t:this.instance_4,p:{x:-33,y:-1.4}}]},1).to({state:[{t:this.instance_4,p:{x:-22.6,y:-1.4}}]},1).to({state:[{t:this.instance_4,p:{x:-12.3,y:-1.4}}]},1).to({state:[{t:this.instance_5,p:{x:-1.9,skewX:0}}]},1).to({state:[{t:this.instance_5,p:{x:16.9,skewX:0}}]},1).to({state:[{t:this.instance_5,p:{x:35.7,skewX:0}}]},1).to({state:[{t:this.instance_5,p:{x:54.5,skewX:0}}]},1).to({state:[{t:this.instance_5,p:{x:73.3,skewX:0}}]},1).to({state:[{t:this.instance_5,p:{x:92.1,skewX:0}}]},1).to({state:[{t:this.instance_5,p:{x:111,skewX:0}}]},1).to({state:[{t:this.instance_5,p:{x:129.8,skewX:0}}]},1).to({state:[{t:this.instance_5,p:{x:148.6,skewX:-0.2}}]},1).to({state:[{t:this.instance_5,p:{x:167.5,skewX:-0.2}}]},1).to({state:[{t:this.instance_5,p:{x:186.3,skewX:-0.2}}]},1).to({state:[{t:this.instance_5,p:{x:205.1,skewX:-0.2}}]},1).to({state:[{t:this.instance_5,p:{x:223.9,skewX:-0.2}}]},1).to({state:[{t:this.instance_5,p:{x:242.8,skewX:-0.2}}]},1).to({state:[{t:this.instance_5,p:{x:261.6,skewX:-0.2}}]},1).to({state:[{t:this.instance_5,p:{x:280.4,skewX:-0.2}}]},1).to({state:[{t:this.instance_5,p:{x:299.2,skewX:-0.4}}]},1).to({state:[{t:this.instance_5,p:{x:318.1,skewX:-0.4}}]},1).to({state:[{t:this.instance_5,p:{x:336.9,skewX:-0.4}}]},1).to({state:[{t:this.instance_5,p:{x:355.7,skewX:-0.4}}]},1).to({state:[{t:this.instance_5,p:{x:374.5,skewX:-0.4}}]},1).to({state:[{t:this.instance_5,p:{x:393.4,skewX:-0.4}}]},1).to({state:[{t:this.instance_5,p:{x:412.2,skewX:-0.5}}]},1).to({state:[{t:this.instance_5,p:{x:431,skewX:-0.5}}]},1).to({state:[{t:this.instance_5,p:{x:449.9,skewX:-0.7}}]},1).to({state:[{t:this.instance_5,p:{x:468.7,skewX:-0.7}}]},1).to({state:[{t:this.instance_5,p:{x:487.5,skewX:-0.7}}]},1).to({state:[{t:this.instance_5,p:{x:506.3,skewX:-0.7}}]},1).to({state:[{t:this.instance_5,p:{x:525.1,skewX:-0.7}}]},1).to({state:[{t:this.instance_5,p:{x:544,skewX:-0.7}}]},1).to({state:[{t:this.instance_5,p:{x:562.8,skewX:-0.7}}]},1).to({state:[{t:this.instance_5,p:{x:581.6,skewX:-0.9}}]},1).to({state:[{t:this.instance_5,p:{x:600.5,skewX:-0.9}}]},1).to({state:[{t:this.instance_5,p:{x:619.3,skewX:-0.9}}]},1).to({state:[{t:this.instance_5,p:{x:638.1,skewX:-0.9}}]},1).to({state:[{t:this.instance_5,p:{x:656.9,skewX:-0.9}}]},1).to({state:[{t:this.instance_5,p:{x:675.8,skewX:-0.9}}]},1).to({state:[{t:this.instance_5,p:{x:694.6,skewX:-1}}]},1).to({state:[{t:this.instance_5,p:{x:713.4,skewX:-1}}]},1).to({state:[{t:this.instance_5,p:{x:732.2,skewX:-1.2}}]},1).to({state:[{t:this.instance_5,p:{x:751.1,skewX:-1.2}}]},1).to({state:[{t:this.instance_5,p:{x:769.9,skewX:-1.2}}]},1).to({state:[{t:this.instance_5,p:{x:788.7,skewX:-1.2}}]},1).to({state:[{t:this.instance_5,p:{x:807.5,skewX:-1.2}}]},1).to({state:[{t:this.instance_5,p:{x:826.4,skewX:-1.2}}]},1).to({state:[{t:this.instance_5,p:{x:845.2,skewX:-1.2}}]},1).to({state:[{t:this.instance_5,p:{x:864.1,skewX:-1.4}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-556.9,-135.9,530,303.1);
p.frameBounds = [rect, new cjs.Rectangle(-546.6,-135.9,530,303.1), new cjs.Rectangle(-536.2,-135.9,530,303), new cjs.Rectangle(-525.9,-135.9,530,302.9), new cjs.Rectangle(-515.5,-135.9,530,302.7), new cjs.Rectangle(-505.1,-136,530,303), new cjs.Rectangle(-494.8,-136,530,303.1), new cjs.Rectangle(-484.4,-136,530,303.1), new cjs.Rectangle(-474.1,-136,530,303.1), new cjs.Rectangle(-463.7,-136,530,302.9), new cjs.Rectangle(-453.4,-136,530,302.7), new cjs.Rectangle(-443,-136,530,302.4), new cjs.Rectangle(-432.6,-136,530,302.2), new cjs.Rectangle(-422.3,-136,530,301.8), new cjs.Rectangle(-411.9,-136,530,301.3), new cjs.Rectangle(-401.6,-136,530,300.8), new cjs.Rectangle(-391.2,-136,530,300.2), new cjs.Rectangle(-380.9,-136,530,299.5), new cjs.Rectangle(-370.5,-136,530,298.8), new cjs.Rectangle(-360.1,-136,530,298.1), new cjs.Rectangle(-349.8,-136,530,297.2), new cjs.Rectangle(-339.4,-136,530,296.3), new cjs.Rectangle(-329.1,-136,530,295.3), new cjs.Rectangle(-318.7,-136,530,294.3), new cjs.Rectangle(-308.4,-136.1,530,293.3), new cjs.Rectangle(-298,-136.1,530,292.1), new cjs.Rectangle(-287.6,-136.1,530,291), new cjs.Rectangle(-277.3,-136.1,530,289.7), new cjs.Rectangle(-266.4,-136.3,529.1,288.7), new cjs.Rectangle(-247.6,-136.3,529.1,289.5), new cjs.Rectangle(-228.8,-136.3,529.2,290.2), new cjs.Rectangle(-210,-136.3,529.2,291), new cjs.Rectangle(-191.2,-136.3,529.3,291.7), new cjs.Rectangle(-172.4,-136.3,529.3,292.5), new cjs.Rectangle(-153.6,-136.3,529.3,293.2), new cjs.Rectangle(-134.8,-136.3,529.4,293.8), new cjs.Rectangle(-116.4,-136.3,530.3,294.5), new cjs.Rectangle(-97.6,-136.3,530.3,295.1), new cjs.Rectangle(-78.8,-136.3,530.4,295.8), new cjs.Rectangle(-60,-136.3,530.4,296.4), new cjs.Rectangle(-41.2,-136.3,530.4,296.9), new cjs.Rectangle(-22.4,-136.3,530.5,297.5), new cjs.Rectangle(-3.6,-136.3,530.5,298.1), new cjs.Rectangle(15.2,-136.3,530.6,298.6), new cjs.Rectangle(33.5,-136.3,531.5,299), new cjs.Rectangle(52.4,-136.3,531.5,299.5), new cjs.Rectangle(71.2,-136.3,531.6,299.9), new cjs.Rectangle(90,-136.3,531.6,300.4), new cjs.Rectangle(108.8,-136.3,531.6,300.8), new cjs.Rectangle(127.6,-136.3,531.7,301.2), new cjs.Rectangle(146.4,-136.3,531.7,301.5), new cjs.Rectangle(165.2,-136.3,531.7,301.8), new cjs.Rectangle(183.6,-136.3,532.7,302.2), new cjs.Rectangle(202.4,-136.3,532.7,302.4), new cjs.Rectangle(221.2,-136.3,532.7,302.6), new cjs.Rectangle(240,-136.3,532.8,302.9), new cjs.Rectangle(258.8,-136.3,532.8,303.1), new cjs.Rectangle(277.6,-136.3,532.9,303.4), new cjs.Rectangle(296.4,-136.3,532.9,303.5), new cjs.Rectangle(314.8,-136.3,533.8,303.6), new cjs.Rectangle(333.6,-136.3,533.9,303.7), new cjs.Rectangle(352.4,-136.3,533.9,303.8), new cjs.Rectangle(371.2,-136.3,533.9,303.9), new cjs.Rectangle(390,-136.3,534,303.8), new cjs.Rectangle(408.8,-136.3,534,303.8), new cjs.Rectangle(427.6,-136.3,534,303.9), new cjs.Rectangle(446.4,-136.3,534.1,303.8), new cjs.Rectangle(464.8,-136.3,535,303.7), new cjs.Rectangle(483.6,-136.3,535,303.6), new cjs.Rectangle(502.4,-136.3,535.1,303.5), new cjs.Rectangle(521.2,-136.3,535.1,303.4), new cjs.Rectangle(540,-136.3,535.2,303.3), new cjs.Rectangle(558.8,-136.3,535.2,303), new cjs.Rectangle(577.6,-136.3,535.2,302.8), new cjs.Rectangle(596,-136.3,536.2,302.6)];


(lib.Symbol35_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.pre_0 = new lib.Symbol30_1();
	this.pre_0.setTransform(-223.3,4.5);

	this.pre_1 = new lib.Symbol31_1();
	this.pre_1.setTransform(226.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pre_0}]}).to({state:[{t:this.pre_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-258.2,-22.2,63.3,44.5);
p.frameBounds = [rect, new cjs.Rectangle(195,-22.2,63.3,44.5)];


(lib.Symbol34_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.pre_0 = new lib.Symbol32_1();

	this.pre_1 = new lib.Symbol33_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pre_0}]}).to({state:[{t:this.pre_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.6,-13.4,25.4,27);
p.frameBounds = [rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
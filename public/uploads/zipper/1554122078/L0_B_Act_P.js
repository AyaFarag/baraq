(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// stage content:
(lib.L0_B_Act_P = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 6
	this.FLangBtn = new lib.Symbol34copy();
	this.FLangBtn.setTransform(103.5,156.9);

	this.finishBtn = new lib.Symbol28copy();
	this.finishBtn.setTransform(285.3,282.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("EgtxAtdMAAAha5MBbiAAAMAAABa5g");
	this.shape.setTransform(290.5,439.6,1,1,0,0,0,-0.9,146.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.finishBtn},{t:this.FLangBtn}]},7).wait(1));

	// Layer 4
	this.start = new lib.Symbol35();
	this.start.setTransform(292.6,353.4);

	this.langBtn = new lib.Symbol34copy();
	this.langBtn.setTransform(45.7,98.4);

	this.backbtn = new lib.Symbol29copy();
	this.backbtn.setTransform(292.5,232.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.backbtn},{t:this.langBtn},{t:this.start}]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},2).wait(1));

	// Layer 5
	this.sim = new lib.Symbol29();
	this.sim.setTransform(199.2,216.8);
	this.sim._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sim).wait(1).to({_off:false},0).to({_off:true},1).wait(6));

	// Layer 2
	this.ans_1 = new lib.Symbol6();
	this.ans_1.setTransform(164.5,200.1);

	this.ans_2 = new lib.Symbol5();
	this.ans_2.setTransform(157.5,205);

	this.ans_0 = new lib.Symbol4();
	this.ans_0.setTransform(176,216.2);

	this.place_2 = new lib.Symbol3();
	this.place_2.setTransform(195.7,433);

	this.place_0 = new lib.Symbol1();
	this.place_0.setTransform(399.3,436.2);

	this.place_1 = new lib.Symbol2();
	this.place_1.setTransform(304.9,426.1);

	this.place_5 = new lib.Symbol9();
	this.place_5.setTransform(192.7,427.8);

	this.place_4 = new lib.Symbol8();
	this.place_4.setTransform(301.9,427.4);

	this.place_3 = new lib.Symbol7();
	this.place_3.setTransform(396.4,427.6);

	this.ans_5 = new lib.Symbol12();
	this.ans_5.setTransform(141.5,218.5);

	this.ans_4 = new lib.Symbol11();
	this.ans_4.setTransform(160.1,210.9);

	this.ans_3 = new lib.Symbol10();
	this.ans_3.setTransform(174,201.9);

	this.ans_8 = new lib.Symbol18();
	this.ans_8.setTransform(139.7,208.2);

	this.ans_7 = new lib.Symbol17();
	this.ans_7.setTransform(161,218);

	this.ans_6 = new lib.Symbol16();
	this.ans_6.setTransform(181.2,209);

	this.place_8 = new lib.Symbol15();
	this.place_8.setTransform(192.7,427.8);

	this.place_7 = new lib.Symbol14();
	this.place_7.setTransform(301.9,427.4);

	this.place_6 = new lib.Symbol13();
	this.place_6.setTransform(396.4,427.6);

	this.ans_9 = new lib.Symbol23();
	this.ans_9.setTransform(184,207);

	this.ans_11 = new lib.Symbol25();
	this.ans_11.setTransform(155.7,212.9);

	this.ans_12 = new lib.Symbol26();
	this.ans_12.setTransform(145.2,196.7);

	this.ans_10 = new lib.Symbol24();
	this.ans_10.setTransform(172.8,196);

	this.place_12 = new lib.Symbol22();
	this.place_12.setTransform(141.7,427.4);

	this.place_11 = new lib.Symbol21();
	this.place_11.setTransform(246.8,427.4);

	this.place_10 = new lib.Symbol20();
	this.place_10.setTransform(347.9,427.4);

	this.place_9 = new lib.Symbol19();
	this.place_9.setTransform(439.4,427.4);

	this.place_16 = new lib.Symbol28();
	this.place_16.setTransform(148.4,427.4);

	this.place_15 = new lib.Symbol28copy2();
	this.place_15.setTransform(247.9,427.4);

	this.ans_16 = new lib.Symbol34copy2();
	this.ans_16.setTransform(135.4,213.2);

	this.ans_15 = new lib.Symbol33copy2();
	this.ans_15.setTransform(159.8,204);

	this.ans_14 = new lib.Symbol32();
	this.ans_14.setTransform(177.8,197.1);

	this.ans_13 = new lib.Symbol31();
	this.ans_13.setTransform(196.8,207.1);

	this.place_14 = new lib.Symbol28copy3();
	this.place_14.setTransform(347.9,427.4);

	this.place_13 = new lib.Symbol27();
	this.place_13.setTransform(439.4,427.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.place_1},{t:this.place_0},{t:this.place_2},{t:this.ans_0},{t:this.ans_2},{t:this.ans_1}]},2).to({state:[{t:this.ans_3},{t:this.ans_4},{t:this.ans_5},{t:this.place_3},{t:this.place_4},{t:this.place_5}]},1).to({state:[{t:this.place_6},{t:this.place_7},{t:this.place_8},{t:this.ans_6},{t:this.ans_7},{t:this.ans_8}]},1).to({state:[{t:this.place_9},{t:this.place_10},{t:this.place_11},{t:this.place_12},{t:this.ans_10},{t:this.ans_12},{t:this.ans_11},{t:this.ans_9}]},1).to({state:[{t:this.place_13},{t:this.place_14},{t:this.ans_13},{t:this.ans_14},{t:this.ans_15},{t:this.ans_16},{t:this.place_15},{t:this.place_16}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(0,1);

	this.instance_1 = new lib.path200();
	this.instance_1.setTransform(270.2,200.4,1,1,0,0,0,536,370.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-4.9,0.6,594,563);
p.frameBounds = [rect, new cjs.Rectangle(0.1,0.8,666.8,550), rect=new cjs.Rectangle(0,1,584,550), rect, rect, rect, rect, new cjs.Rectangle(-1.5,1,586,583)];


// symbols:
(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,584,550);


(lib.LV1_U1_L1_Activity_P_img_11 = function() {
	this.initialize(img.LV1_U1_L1_Activity_P_img_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,424,314);


(lib.LV1_U1_L1_Activity_P_img_21 = function() {
	this.initialize(img.LV1_U1_L1_Activity_P_img_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,424,314);


(lib.path000 = function() {
	this.initialize(img.path000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,100);


(lib.path001 = function() {
	this.initialize(img.path001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,100);


(lib.path007 = function() {
	this.initialize(img.path007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,100);


(lib.path009 = function() {
	this.initialize(img.path009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,100);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjED3QgDgBgBgDQgIgNgBgNQgCgOAGgOQAJgZAcgVQAcgVAngMQATgHAMgIQAKgHAAgHQABgFgGgGQgEgEgHgEIjmiDQgTgLgJgXQgKgYAJgRQAKgRAZgDQAZgDATALIBvBAQgBgOAIgNQAJgQARgGQARgGAQAHQAAgPAHgNQAIgOAPgHQAOgGAPADQgCgQAIgPQAJgOANgGQAPgHAQAEQAGACAHADICJBQQAkAVAnBGQANAXALAZIACAFQAFgFAHgCQAKgDAJAFIAHAEQAJAFADALQACAIgFAJIh8DVQgFAJgJADQgLACgJgFIgHgEQgJgFgCgKQgDgKAFgIIgXgNQgkgWhjAWQg0ANheAgIgeAKIgTAGIgBAAIgFgBgAkniQQgQABgGAJQgFAJAHAQQAHAPAMAHIDmCDQAQAJAHAMQAFAJgBAJQgBAPgPALQgPANgZAHQgjALgYASQgYASgIAUQgGAQAGAOIAngNQBtgmA7gMQBagSAoAYIAXANIBni0QgQglgUghQghg7gdgRIiJhPQgEgCgCAAIgBgBQgKgCgJAEQgJADgFAJQgCAIAAAJQAAAIAEAHIAhATQAEACABAEQABAEgCAEQgCAEgEABQgEABgEgCIgqgaQgKgGgMAEQgLACgGALQgFAIABAJQABAJAFAGIAgASQADACABAFQACAEgCADQgCAEgFABQgEABgDgCIgzgdQgLgGgLADQgMADgGAKQgFAIABAKQABAIAGAGIArAZQAEADABAEQABAEgCAEQgDADgEACQgEABgEgDIi1hoQgKgGgNAAIgFAAgAEzgEQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBABIh7DTIgBAEQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAHAEQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAIB7jWQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIgHgEIgDAAIgBAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai6DFQAIgUAYgSQAYgSAjgLQAZgHAPgNQAPgLABgPQABgJgFgJQgHgMgQgJIjmiDQgMgHgHgPQgHgQAFgJQAGgJAQgBQARgBALAHIC1BoQAEADAEgBQAEgCADgDQACgEgBgEQgBgEgEgDIgrgZQgGgGgBgIQgBgKAFgIQAGgKAMgDQALgDALAGIAzAdQADACAEgBQAFgBACgEQACgDgCgEQgBgFgDgCIgggSQgFgGgBgJQgBgJAFgIQAGgLALgCQAMgEAKAGIAqAaQAEACAEgBQAEgBACgEQACgEgBgEQgBgEgEgCIghgTQgEgHAAgIQAAgJACgIQAFgJAJgDQAJgEAKACIABABQACAAAEACICJBPQAdARAhA7QAUAhAQAlIhnC0IgXgNQgogYhaASQg7AMhtAmIgnANQgGgOAGgQgAC+DdIgHgEQgBgBAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIABgEIB7jTQABgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIAEAAIAHADQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAIh7DWQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAABIgCAAIgBAAg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-34,-24.8,68.2,49.7);
p.frameBounds = [rect];


(lib.Symbol34copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("AgIB6QgYgPgHgLQgBgCABgDQAIgLAPgRQAEgDACABQALAPATAMQABABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIgYAfIgCABIgCgBgAiEgBQgTgIgKgNQgKgNABgUQgBgQAHgSQADgNAGgJQAGgLAGAAQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAADgDAIQgHAPAAANQAAAWAhAPQAaANA4AAQBBAAA1gPQAegJAOgGQARgHAOgKIAFgDQACAAAAAIQABAQAHALIAAAuQgXgGgGgfQgqAVgZAIQg+ARg4AAQg4AAghgLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AipB/IAAj9IFTAAIAAD9g");
	this.shape_1.setTransform(-0.4,-2.8,1,1.864);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.4,-26.6,34.7,47.5);
p.frameBounds = [rect, new cjs.Rectangle(-17.4,-26.6,34,47.5)];


(lib.Symbol33copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("ABFBfIgFAAIgDAAIgHAAQgagDgNgbQgEALgPAIQgSAKgXABIgCAAIgHAAQgKAAgHgCIAAgwQAGAIAJABIADAAIAOAAQAnAAASgdQAFgJAEAAQAEAAAAANQAAAIAHAHQAHAIAKACIAJAAIADAAIAFAAIAAApIgDAAgAAggjQgNgKgNgMQgMARgHAEQgEADgCgCQgRgKgMgPQgCgCADgEQAJgMAPgPQAEgCACADQAOAPAKAHIAUgWQAEgEACACQASASAKAIQAEACgEADIgZAcQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgCgCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AhHB7IAAj1ICPAAIAAD1g");
	this.shape_1.setTransform(-0.2,3,1,2.113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7.4,-23.1,14.8,52.3);
p.frameBounds = [rect, new cjs.Rectangle(-7.4,-23.1,14.5,52.3)];


(lib.Symbol33copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAeIAAg6IARAAIAAAFQAJgGAJAAIAAASQgKAAgIAEIAAAlg");
	this.shape.setTransform(4.5,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATApIgHgTIgZAAIgHATIgTAAIAchRIAWAAIAdBRgAgJAGIAQAAIgHgag");
	this.shape_1.setTransform(-2,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C15C00").s().p("AhPAcQgNAAgJgKQgJgJAAgLIAAgZQAAANAJAJQAJAIANAAICfAAQANAAAJgIQAJgJAAgNIAAAZQAAALgJAJQgJAKgNAAg");
	this.shape_2.setTransform(0,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCEA9").s().p("ABmAGQgJgIgNAAIifAAQgNAAgJAIQgJAJAAANIAAgZQAAgLAJgJQAJgKANAAICfAAQANAAAJAKQAJAJAAALIAAAZQAAgNgJgJg");
	this.shape_3.setTransform(0,-8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F78508").s().p("AheCGQgNAAgJgJQgJgJAAgMIAAjOQAAgNAJgKQAJgIANgBIC9AAQANABAJAIQAJAKAAANIAADOQAAANgJAIQgJAJgNAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAeIAAg6IAQAAIABAFQAIgGAKAAIAAASQgKAAgIAEIAAAlg");
	this.shape_5.setTransform(4.5,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATAqIgGgUIgaAAIgGAUIgTAAIAchSIAVAAIAdBSgAgIAGIAPAAIgHgZg");
	this.shape_6.setTransform(-2.1,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCEA9").s().p("AhPAcQgNAAgJgKQgJgJAAgLIAAgZQAAANAJAJQAJAIANAAICfAAQANAAAJgIQAJgJAAgNIAAAZQAAALgJAJQgJAKgNAAg");
	this.shape_7.setTransform(0,9.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C15C00").s().p("ABmAGQgJgIgNAAIifAAQgNAAgJAIQgJAJAAANIAAgZQAAgLAJgJQAJgKANAAICfAAQANAAAJAKQAJAJAAALIAAAZQAAgNgJgJg");
	this.shape_8.setTransform(0,-8.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F78508").s().p("AheCGQgNAAgJgJQgJgIAAgOIAAjNQAAgNAJgKQAJgIANgBIC9AAQANABAJAIQAJAKAAANIAADNQAAAOgJAIQgJAJgNAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.6,-13.4,25.4,27);
p.frameBounds = [rect, new cjs.Rectangle(-12.6,-13.4,25.3,27)];


(lib.Symbol32copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJAeIAAghQgBgIgGAAQgEAAgGAEIAAAlIgTAAIAAg6IAQAAIACAFQAJgGAIAAQAUAAAAAUIAAAng");
	this.shape.setTransform(3.7,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdApIAAhRIA6AAIAAARIgmAAIAAAQIAjAAIAAAPIgjAAIAAAQIAnAAIAAARg");
	this.shape_1.setTransform(-3.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C15C00").s().p("AhPAcQgNAAgJgKQgJgJAAgLIAAgZQAAANAJAJQAJAIANAAICfAAQANAAAJgIQAJgJAAgNIAAAZQAAALgJAJQgJAKgNAAg");
	this.shape_2.setTransform(0,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCEA9").s().p("ABmAGQgJgIgNAAIifAAQgNAAgJAIQgJAJAAANIAAgZQAAgLAJgJQAJgKANAAICfAAQANAAAJAKQAJAJAAALIAAAZQAAgNgJgJg");
	this.shape_3.setTransform(0,-8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F78508").s().p("AheCGQgNAAgJgJQgJgJAAgMIAAjOQAAgNAJgKQAJgIANgBIC9AAQANABAJAIQAJAKAAANIAADOQAAANgJAIQgJAJgNAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAJAeIAAghQAAgJgIAAQgDAAgGAFIAAAlIgTAAIAAg6IARAAIABAFQAJgGAIAAQAUAAAAAUIAAAng");
	this.shape_5.setTransform(3.7,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcApIAAhRIA4AAIAAARIglAAIAAAQIAjAAIAAAPIgjAAIAAAQIAmAAIAAARg");
	this.shape_6.setTransform(-3.2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCEA9").s().p("AhOAbQgOAAgJgJQgKgJAAgLIAAgYQABAMAJAJQAJAHAOAAICdAAQAOAAAJgHQAJgJAAgMIAAAYQAAALgJAJQgJAJgOAAg");
	this.shape_7.setTransform(0,9.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C15C00").s().p("ABmAGQgJgIgOAAIidAAQgOAAgJAIQgJAJgBANIAAgZQAAgLAKgJQAJgKAOAAICdAAQAOAAAJAKQAJAJAAALIAAAZQAAgNgJgJg");
	this.shape_8.setTransform(0,-8.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F78508").s().p("AheCHQgMgBgKgIQgJgKAAgNIAAjOQAAgMAJgJQAKgJAMAAIC9AAQANAAAJAJQAJAJAAAMIAADOQAAANgJAKQgJAIgNABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.6,-13.4,25.4,27);
p.frameBounds = [rect, new cjs.Rectangle(-12.6,-13.4,25.3,27)];


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("ABcCgQgLgFgMgJQgPgMgZgaQgagcgLgIIABAVQAAASgGANQgBAFgEAEQgJAMgTAHQgVAIgVADIgSABIAAgpIAOgBQATgCAXgFQAOgDAHgFQAFgFABgHQgDgagygsIgNgMQgLgLgBgJIAAgDQAAgmAKgKQARgTAegRQA6glBYgfIACgBQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAHgMAXIgCACQheAqgyAdQgVANgIAKIApAhQBAAyAhAiQAVAVAOAKQAJAGAGACIAAAqQgHgBgIgDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AhAClIAAlJICBAAIAAFJg");
	this.shape_1.setTransform(0,0.3,1.497,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.7,-16.3,21.5,33.2);
p.frameBounds = [rect, new cjs.Rectangle(-9.6,-16.1,19.5,33)];


(lib.Symbol31copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAcQAEgbAiAAIAAAAQAEgIgQABQgLABgGADIgEgNQAIgGAQAAQAfAFAAAXIABAoIgUAAIgBgHIAAAAQgHAJgNgBQgUgEAAgQgAABAaQABAHAIABQAJgCABgGIABgEIAAgIIgEAAQgQAAAAAMgAB0ArQgFgGgBgPIAAgaIgJAAIAAgQIAJAAIAAgOIAVgGIAAAUIAPAAIAAAQIgPAAIAAAXQgBAMAKAAIAGgBIAAARIgNABIgCAAQgKAAgFgFgAg3ArQgFgGAAgPIAAgaIgKAAIAAgQIAKAAIAAgOIAUgGIAAAUIAQAAIAAAQIgQAAIAAAXQgBAMAKAAIAGgBIABARIgPABIgBAAQgKAAgFgFgAiSArIAFgSQAKAGAOAAQAPAAgBgLQACgGgSgGQgZgIAAgSQACgeAiAAQAPACAJAEIgFARQgFgFgPAAQgOACAAAHQAAAHASAHQAZAHAAATQAAAdgnAAQgTgBgIgEgAA3AvIgBhDIATAAIAAANIAAAAQAKgOAJAAIAFAAIAAAUIgGgBQgMACgDAIIAAAng");
	this.shape.setTransform(-8.2,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhHhSICPBSIiPBTg");
	this.shape_1.setTransform(18.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#336699").s().p("AkcATQgHAAgFgGQgFgFAAgIIAAgSQAAAHAFAGQAFAFAHAAII5AAQAHAAAFgFQAFgGAAgHIAAASQAAAIgFAFQgFAGgHAAg");
	this.shape_2.setTransform(0,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C5F3FF").s().p("AEpAGQgFgGgHAAIo5AAQgHAAgFAGQgFAGAAAHIAAgTQAAgHAFgGQAFgFAHAAII5AAQAHAAAFAFQAFAGAAAHIAAATQAAgIgFgFg");
	this.shape_3.setTransform(0,-18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33BBFF").s().p("AkiDeQgKAAgIgHQgHgIAAgKIAAmJQAAgLAHgGQAIgIAKAAIJFAAQAKAAAHAIQAIAGAAALIAAGJQAAAKgIAIQgHAHgKAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C5F3FF").s().p("AkcATQgHAAgFgGQgFgFAAgIIAAgSQAAAHAFAGQAFAFAHAAII5AAQAHAAAFgFQAFgGAAgHIAAASQAAAIgFAFQgFAGgHAAg");
	this.shape_5.setTransform(0,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#336699").s().p("AEpAGQgFgGgHAAIo5AAQgHAAgFAGQgFAGAAAHIAAgTQAAgHAFgGQAFgFAHAAII5AAQAHAAAFAFQAFAGAAAHIAAATQAAgHgFgGg");
	this.shape_6.setTransform(0,-18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#33BBFF").s().p("AkiDeQgKAAgIgHQgHgIAAgKIAAmJQAAgLAHgGQAIgIAKAAIJFAAQAKAAAIAIQAHAGAAALIAAGJQAAAKgHAIQgIAHgKAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.6,-22.2,63.3,44.5);
p.frameBounds = [rect, rect];


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("AhIBAIgIAAIgBAAIAAgpIAEAAIADAAIACAAQAgAAATgYIAVgjQAJgOAMgHQAKgGAIAAQAVAAAMAdQAKAWAAAVQAAANgLAPQgKAPgIAAQgLAAgWgLQgUgLgNgNQgaAtgfACIgCAAgAALgVIgFAIIAtAXQgBgKgKgNQgLgOgJAAQgFAAgEAGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AhAClIAAlJICBAAIAAFJg");
	this.shape_1.setTransform(0.5,0.1,1.269,0.605);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.2,-9.8,17,20);
p.frameBounds = [rect, new cjs.Rectangle(-7.7,-9.8,16.5,20)];


(lib.Symbol30copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnBEIAQgOIANAPIgQANgAACAvIgBABIgCAAQgLgBgJgIQgOAIgTABIgLAAIgFgVIABgCIAmgBIgSgkIAPgKIABAAIATAlIAHAJIAHABIABAAIABABIACgBIAbAAIACABIABgBIARAAIAAglIATAAIAAA8IgkAAIAAgBIgDABIgbAAIAAAAIgCgBgABdAwIAAhnIAUAAIAABngAhoAwIAAhbIATAAIAABbgAhwg+IAIABQgDgDAAgFIADgKIAMgDIAJABIgBAKIgJgBIgEABIAAABQgBAGADADIAOgCIABAAIABAKIghACg");
	this.shape.setTransform(7.5,-3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhHAAICPhSIAAClg");
	this.shape_1.setTransform(-20.8,-4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#336699").s().p("AkcATQgHAAgFgGQgFgFAAgIIAAgSQAAAHAFAGQAFAFAHAAII5AAQAHAAAFgFQAFgGAAgHIAAASQAAAIgFAFQgFAGgHAAg");
	this.shape_2.setTransform(-3.1,13.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C5F3FF").s().p("AEpAGQgFgGgHAAIo5AAQgHAAgFAGQgFAGAAAHIAAgTQAAgHAFgGQAFgFAHAAII5AAQAHAAAFAFQAFAGAAAHIAAATQAAgHgFgGg");
	this.shape_3.setTransform(-3.1,-22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33BBFF").s().p("AkiDeQgKAAgHgHQgIgIAAgKIAAmJQAAgLAIgGQAHgIAKAAIJFAAQALAAAHAIQAHAGAAALIAAGJQAAAKgHAIQgHAHgLAAg");
	this.shape_4.setTransform(-3.1,-4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnBEIAQgOIANAPIgQANgAACAvIgBABIgCAAQgLgBgJgIQgOAIgTABIgLAAIgFgVIABgCIAmgBIgSgkIAPgKIABAAIATAlIAHAJIAHABIABAAIABABIACgBIAbAAIACABIABgBIARAAIAAglIATAAIAAA8IgkAAIgBgBIgCABIgbAAIAAAAIgCgBgABdAwIAAhnIAUAAIAABngAhoAwIAAhbIATAAIAABbgAhwg+IAIABQgDgDAAgFIADgKIAMgDIAJABIgBAKIgJgBIgEABIAAABQgBAGADADIAOgCIABAAIABAKIghACg");
	this.shape_5.setTransform(7.6,-3.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C5F3FF").s().p("AkcATQgHAAgFgGQgFgFAAgIIAAgSQAAAHAFAGQAFAFAHAAII5AAQAHAAAFgFQAFgGAAgHIAAASQAAAIgFAFQgFAGgHAAg");
	this.shape_6.setTransform(-3.1,13.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#336699").s().p("AEpAGQgFgGgHAAIo5AAQgHAAgFAGQgFAGAAAHIAAgTQAAgHAFgGQAFgFAHAAII5AAQAHAAAFAFQAFAGAAAHIAAATQAAgHgFgGg");
	this.shape_7.setTransform(-3.1,-22.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#33BBFF").s().p("AkiDeQgLAAgGgHQgIgIAAgKIAAmJQAAgLAIgGQAGgIALAAIJFAAQAKAAAHAIQAIAGAAALIAAGJQAAAKgIAIQgHAHgKAAg");
	this.shape_8.setTransform(-3.1,-4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_1},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.8,-26.7,63.3,44.5);
p.frameBounds = [rect, rect];


(lib.Symbol29copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAhIAGgEQAHgEALgJQAJgIAEgGQgKgHAAgGQAAgGAFgIQAGgIAIAAQAHAAACANQAAAIgEAIQAEACAAACQAAAEgEAEIgBABIgFgDQgNASgLAGQgJAEgIAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAgAAIgPIAAABQAAADAJADQABgCAAgFQAAgFgEAAQgDAAgDAFg");
	this.shape.setTransform(39.9,-8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABQQAAgSgEg5IgHg8QAAgJAKgRQABgFACAAQACAAAAAIIAEA1QADAnABAYQAAAZgFAMQgEAMgCAAQgBAAAAgHg");
	this.shape_1.setTransform(134.8,-7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhAAhQgLAAAAgMQAAgMALAAIADAAQAOAAAIgFQAKgEAJgOQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQABgBABAIQACAOANAAQAIAAAIgFQAIgGADgIQAEgKADAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABIgBAIQAAAJAHAEQAGAEAHAAQAHAAAAgEQAAgCgFgIIAAgBQAAgFAKgOQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAABQADAFAAAMQAAAMgHAMQgIAQgNAAQgSAAgEgSQgMAVgPgBQgSABgEgYQgIAKgFAFQgMALgNAAg");
	this.shape_2.setTransform(122.9,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAUQgEgEAAgGQAAgIAHgMQAHgNACAAQAFAAAGAHQAGAHAAAIQAAAFgCAGQgFAOgMAAQgGAAgEgEgAgGgCQgDACAAADQAAACADACQADACADAAQACAAAEgCQABgBABAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAgCgEgDQgFgFgCAAQgCAAgDAEg");
	this.shape_3.setTransform(124.9,-13.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABHAoQgWAAgIgJQgHgHgBgVQgPAAgKAEIgUAKQgaAOgMADQgMAGgPAAIgDAAQgLAAAAgNQAAgMALAAIADAAQAWAAAPgEQAQgEAYgJIgagJQgPgEgGAAIgHABQgGADgCAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgHAMgNQAHgGAJAAIAEABIAgAJQAVAIAJACQATAEASAAIAFgBIABACQgBACgDAHQgFAFgDAEIgBAAIgVAAQAAAFAJADQALADAKAAIAMAAQAMAAgBAMQABANgMAAg");
	this.shape_4.setTransform(108.6,-2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYATQAAgHADgEQABgCAGgEIAlgUQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAMgGADIgqAWIAAAAIgBAAg");
	this.shape_5.setTransform(107,-12.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHAJQgDgEAAgFQAAgDADgEQAEgEADAAQAFABADADQADAFAAACQAAAFgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_6.setTransform(-132.6,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBIQgPgJgEgGQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAGgJAJgHQAAgBABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAJAJAIAHQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIgOASIgBABIgBgBgAhZAAQgYgKAAgWQAAgRAJgRQAEgGADAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABIgCAGQgDAIgBAJQAAANAUAJQAQAIAgAAQAnAAAfgKQAegIAOgKIADgCQABAAAAABQAAAAABAAQAAABAAABQAAABAAABQAAAJAFAGQAEAGAGAAIAEAAQAKAAAAAMQAAAKgKAAIgFAAQgXAAgEgWQgdAOgKADQgjAKgjAAQgiAAgSgGg");
	this.shape_7.setTransform(90.5,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYATQAAgHADgEQABgCAGgEIAlgUQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAMgGACIgqAXIAAAAIgBAAg");
	this.shape_8.setTransform(89,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAABQQAAgSgEg5IgGg8QAAgIAJgSQABgFACAAQACAAAAAIIAEA1QADAnAAAYQAAAagDALQgFAMgCAAQgBAAAAgHg");
	this.shape_9.setTransform(68.9,-7.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMBXQgKAAAAgNQAAgLAKAAIACAAQAKAAAEgCQAGgCACgDQAAgJgFgfIgFg1IgDgZQAAgEAEgLQAFgJADAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAABABQADAMAFAHIACAEIgBABIgGAMIAFAwIADAhQgBAbgKAQQgJALgOAAg");
	this.shape_10.setTransform(61.8,-7.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMAUQgEgEAAgGQAAgIAHgMQAGgNADAAQAFAAAGAHQAGAHAAAIQAAAFgCAGQgFAOgMAAQgGAAgEgEgAgGgCQgDACAAADQAAAAAAABQABAAAAABQAAABABAAQAAAAABABQACACAEAAIAGgCQAEgCAAgBQAAgCgEgDQgFgFgCAAQgCAAgDAEg");
	this.shape_11.setTransform(62.8,-22);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABGAoQgVAAgIgJQgIgIAAgUQgPAAgKAEIgUAKQgcAPgJACQgNAGgPAAIgDAAQgMAAAAgNQAAgMAMAAIADAAQAWAAAPgEQAPgEAZgJIgagJQgOgEgHAAIgHABQgGADgCAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgHANgNQAGgGAJAAIAFABIAfAJQAVAIAKACQARAEATAAIAFgBQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAACgEAHQgEAFgEAEIgBAAIgVAAQAAAFAKADQAKADAKAAIAMAAQAMAAAAAMQAAANgMAAg");
	this.shape_12.setTransform(52.6,-2.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbAhIAGgEQAHgEALgJQAJgIAEgGQgKgHAAgGQAAgGAFgIQAGgIAIAAQAHAAACANQAAAIgEAIQAEACAAACQAAAEgEAEIgBABIgFgDQgNASgLAGQgJAEgIAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAgAAIgPIAAABQAAADAJADQABgCAAgFQAAgFgEAAQgDAAgDAFg");
	this.shape_13.setTransform(50.4,-13.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag5AuQgEgCAAgDQAAAAAAAAQAAgBABAAQAAAAABAAQABgBABAAIANABQAZAAAUgSQAVgRADgQQAAgDgGgIIgHgJIgBgDQAAgEACgGIAEgKQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQACAAAEAHQAGAJAOAAIAEAAQAMAAAAAMQAAANgMAAIgCAAQgLAAgDgBIAAADQAAAMgEAJQgHARgFAGQgKAQgOAHQgHADgGAAQgOAAgYgLg");
	this.shape_14.setTransform(39.8,2.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgrA6QgFgCAAgCQAAAAAAgBQABAAAAgBQABAAABAAQAAAAACAAIATACQAOAAATgOQAegSAAgWQAAgHgFgIQgEANgMAAQgUAAAAgYQAAgIAFgOQALgVAIAAQAFABAHAGQAGAHAEAKQAFAOAAATQAAAfgKATQgLAWgYAJIgFABQgQAAgagMgAAKgoIgDAGQABACAEADQADACAFAAQAHAAABgFQAAgFgFgEQgDgDgDAAQgEAAgDAEg");
	this.shape_15.setTransform(28.7,1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhSBGQgSgLAAgVQAAgSALgSQADgEADAAIABABIgCADQgFAQAAAGQAAALAOAKQATANAkAAQAaAAAfgFQAagFAQgFQAHgDACgCIABgHQAAgFgDgJQgFAKgOAAQgTAAAAgUQAAgMAIgQQAIgPAFAAQANAAAKASQAJARAAAVQAAALgGASIgEAIIgJAFQgQAIgbAGQggAHgcAAQgoAAgVgNgAA6gEIAAADQADAEAIAAQAHAAADgDIABAAQAAgDgEgEQgEgFgGAAQgFAAgDAIgAAdgtQgNgIgFgIIAAgDIAOgQQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQAJAKAKAGQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAIgPASIgCABIgBAAg");
	this.shape_16.setTransform(12.2,-6.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYATQAAgHADgEQABgCAGgEIAlgUQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAMgGACIgqAXIAAAAIgBAAg");
	this.shape_17.setTransform(14.3,-20.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMBXQgKAAAAgNQAAgLAKAAIACAAQAJAAAFgCQAGgCACgDQAAgJgFgfIgFg1IgDgZIAEgPQAFgJADAAIACACQACALAGAIIABAEIAAABIgGAMQABATAEAdIACAhQABAbgLAQQgIALgPAAg");
	this.shape_18.setTransform(-8.6,-7.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYATQAAgHADgEIAHgGIAlgUQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAALgGADIgqAXg");
	this.shape_19.setTransform(-7.1,7.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAcA5QgKgBgHgIQgEgFgCgEQgDAGgHAFQgLAHgQAAIgBAAQgLAAAAgMQAAgFADgEQACgEAGAAIAHAAQAZAAAIgRQADgFACAAQADAAAAAIQAAAEAFAFQAEAEAFABIAHAAQAJAAAAALQAAAOgJAAgAAPgUIgPgNQgIALgDACQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgLgHgHgHQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAIgKAHgGQAAgBABAAQAAAAAAAAQABAAAAAAQABABAAAAQAIAKAGADIALgNQABgBAAAAQABAAAAAAQABgBAAABQABAAAAAAQAKALAGAEQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABIgOAQIgBABIgCgBg");
	this.shape_20.setTransform(-13.5,-4.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgbAhIAGgEQAVgNAKgOQgKgGAAgHQAAgFAFgJQAHgJAGABQAIAAABANQAAAHgDAJQAEABAAACQAAAFgEAEIAAABIgGgEQgLASgOAIQgJADgGAAQgCAAAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAgAAIgPIAAABQAAACAIAEIABgHQABgFgEAAQgEAAgCAFg");
	this.shape_21.setTransform(-14.2,-17);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABGAoQgVAAgIgJQgIgIAAgUQgPAAgKAEIgUAKQgcAPgJACQgNAGgPAAIgDAAQgMAAAAgNQAAgMAMAAIADAAQAWAAAPgEQAQgEAYgJIgagJQgOgEgHAAIgHABQgGADgCAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgHAMgNQAIgGAIAAIAFABIAfAJQAUAIAKACQASAEATAAIAFgBQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAACgEAHQgEAFgEAEIgBAAIgVAAQAAAFAKADQAKADAKAAIAMAAQAMAAAAAMQAAANgMAAg");
	this.shape_22.setTransform(-24.9,-2.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgYATQAAgGACgFQADgDAFgDIAlgUQABAAAAgBQAAAAABABQAAAAAAAAQAAAAAAAAQAAALgFAEIgrAWIgBABIAAgBg");
	this.shape_23.setTransform(-26.5,-12.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAbBWQgLAAgIgHQgIgIAAgLQgGAagUAAIgDAAQgLgBAAgNQAAgLALAAIADAAQAJAAAFgEQAFgGAAgOIgDhhQAAgHAGgLQADgHABABQABAAABAIIADA8QACAmACAUQABAKAIAGQAEADAGAAIADAAQAKAAAAAMQAAANgKAAg");
	this.shape_24.setTransform(-35.7,-7.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgaApQAAgFACgDIADgGIAEgCIAsgVIAAABQgBAHgEAFIgFADIgqAVgAgYAHQgEgFAAgGQAAgGACgGQACgGACAAQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIAAAGQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQACACADAAIAFgCQAHgDABgKQABgHADAAQACAAAAAGQAAAFAGAAQAIAAACgPQABgHADAAQADAAAAAMQAAAcgUAAQgEAAgEgCQgFAMgMAAQgFAAgDgDg");
	this.shape_25.setTransform(-36.4,-23.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhGBtQgMgMAAgTQAAgWAMgWQAEgJAEAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAADgDAGQgHARAAAKQAAASAPAKQANAIASAAQAUAAATgLQAVgLAAgJIgHg0IgLhlIgBgKIABgHQAIgTADAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABIADAhQACAgAFApQADAOAIAJQAHAJAMAAIACAAQALAAAAAMQAAANgLAAIgDAAQgSgBgGgPIABAXQAAAPgCAJQgDAGgFAIQgHALgMAIQgTAOgaAAQgdAAgNgOg");
	this.shape_26.setTransform(-45.7,-3.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYATQAAgFADgGIAHgGIAlgUQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAALgFADIgrAXg");
	this.shape_27.setTransform(-43.9,-20.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAABQQAAgSgEg5IgGg8QAAgKAJgQQABgFACAAQABAAABAIIAEA1QADAnAAAYQAAAagDALQgFAMgCAAQgBAAAAgHg");
	this.shape_28.setTransform(-63.7,-7.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMBXQgLAAAAgNQAAgLALAAIACAAQAJAAAFgCQAGgCABgDQAAgJgDgfIgHg1IgCgZIADgPQAGgJACAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQADALAGAIIABAEIAAABIgGAMQABATADAdIAEAhQAAAbgMAQQgHALgOAAg");
	this.shape_29.setTransform(-70.9,-7.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgMAUQgEgEAAgGQAAgIAGgMQAHgNADAAQAFAAAGAHQAGAHAAAIIgCALQgEAOgNAAQgGAAgEgEgAgGgCQgDACAAADQAAAAAAABQABAAAAABQAAABABAAQAAAAABABQACACAEAAIAGgCQAEgCAAgBQAAgCgEgDQgFgFgCAAQgCAAgDAEg");
	this.shape_30.setTransform(-69.8,-22);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("ABABhQgKAAgNgLQgKgHgOgPQgQgRgGgFIABANQAAAKgDAJQgFAKgPAHQgTAGgTAAIgDAAQgJAAAAgNQAAgMAKABQARgBAVgEQAOgDACgIQgDgSgkggQgIgHAAgFQAAgYAGgFQALgMARgKQAigVA0gTIABAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAFgHANIgBABQgyAUgiAWQgNAIgFAFIAZAUQAlAdATAUQAXAYAKAAIADAAQAJgBAAAMQAAANgJAAg");
	this.shape_31.setTransform(-78.8,-8.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgYATQAAgHADgEIAHgGIAlgUQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAALgGADIgqAXg");
	this.shape_32.setTransform(-81.6,-20.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAbBWQgLAAgIgHQgIgIgBgLQgFAagVAAIgCAAQgLgBAAgNQAAgLALAAIADAAQAJAAAFgEQAFgGAAgOIgDhhQAAgIAFgKQAEgHABABQABAAAAAIIAEA8IAEA6QABAKAIAGQAEADAFAAIADAAQALAAAAAMQgBANgKAAg");
	this.shape_33.setTransform(-88.4,-7.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgYATQAAgHADgEIAHgGIAlgUQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAALgGADIgqAXg");
	this.shape_34.setTransform(-88.4,7.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgCAaQgSgIgGgJQgDAHgHAFQgIAEgHAAIgCAAQgKAAAAgMQAAgNAKAAIACAAQAVAAAQgOIALgMQAEgGAEAAQADAAADADQAdAdAMAAIABAAQALAAAAAMQAAANgLAAIgBAAQgGAAgHgEQgGgDgCgCQgBAGgFAFQgFAGgDAAQgGAAgNgHgAgHgIQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAACALAEIAQAGQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAAgCgKgIQgHgHgDAAQgCAAgEADg");
	this.shape_35.setTransform(-96.6,-1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgYATQAAgHADgEQABgCAGgEIAlgUQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAMgGADIgqAWIAAAAIgBAAg");
	this.shape_36.setTransform(-96.8,-10.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AANBXQgMAAgEgFQgLgJgDgYIgDgoQgCg1gDgTIgBgDIAKgRQAAAAABgBQAAgBAAAAQABgBAAAAQAAAAABAAQABAAACAHQACARAAAuQABAmADAQIAEAOQADAKALABQAMAAABAMQAAAMgMAAg");
	this.shape_37.setTransform(-103.6,-7.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhLA3QgMgEgFgIQgGgIAAgNQAAgQAJgOQAEgHADAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAADgCAEQgEAJAAAGQAAANAUAJQAQAHAgAAQAiAAAlgIQAhgHACgGIAAgEQAAgHgEgHIgIgMIAAAAQAAgEAEgIQAEgJACAAQAEAAAFAMQAFANAAALQAAAVgJANQgGAIgjAJQglAKghAAQgiAAgUgIgAgOgbQgLgHgFgHQgBgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBIAPgQQAAAAAAgBQABAAAAAAQABAAAAABQABAAAAAAQAJAKAFADIALgNQABAAAAgBQABAAABAAQAAAAAAAAQABAAAAAAQAKALAGAEQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgOAQQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQgIgFgHgIIgLANIgCABIgCgBg");
	this.shape_38.setTransform(-118.9,-5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgYASQAAgGADgEIAHgGIAlgUQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAALgGADIgqAXIAAAAIgBgBg");
	this.shape_39.setTransform(-118.8,7.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#336699").s().p("Ego2AYeQgrAAgfgfQgegfAAgrMAAAgtpQAAgrAegfQAfgfArAAMBRtAAAQAqAAAgAfQAeAfAAArMAAAAtpQAAArgeAfQggAfgqAAg");

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AHOBSIAHgCIAJgGQADgCAEgFQAEgEADgFIABgDIABgCIgBgCIgBgEIgmhgIAdAAIATA4IAEALIADAKIAAAAIADgKIADgLIARg4IAdAAIgbBHQgIAUgGANQgGAOgFAIQgGAJgHAFQgIAHgHADQgIADgFABgA14BeQgLgCgGgEIAFgVQAFADAJADQAIACAKAAQAJAAAHgDQAHgEAEgGQADgIAAgLIAAgJIAAAAQgFAHgHAEQgJAEgKAAQgOAAgKgGQgKgHgGgMQgGgMAAgNQABgRAGgOQAHgMALgHQALgHANAAQAMABAHAFQAIAFAEAGIABAAIABgOIAXAAIgBANIAAASIAAA7QAAAQgEANQgDAMgJAHQgJAHgKADQgLADgLAAQgLAAgJgCgA1vgbQgIAIAAARQAAAIACAHQAEAHAFAFQAHAEAIAAQAIAAAFgEQAGgFADgHIAAgFIABgFIAAgPIgBgEIAAgEQgCgHgGgFQgFgFgJABQgMAAgGAJgAYsA0QgLgHgGgMQgGgNgBgQQABgQAGgMQAHgNALgHQAKgHAOAAQALAAAIAEQAHAEAEAGIAAAAIAAg8IAbAAIAAB8IAAAQIABANIgYAAIgBgRIgBAAQgEAJgJAGQgKAFgLAAQgNAAgKgHgAY9gZQgHAFgCAHQgEAIAAAIQAAAKAEAHQACAJAHADQAFAFAJAAQAJAAAGgFQAGgFACgJIABgEIAAgEIAAgOIAAgDIgBgEQgBgIgHgFQgGgGgIAAQgKAAgFAFgAVlA0QgNgHgGgLQgIgNAAgRQAAgQAIgMQAHgNAMgHQAMgHAQAAQAQAAAMAHQAMAHAHAMQAHAMAAAPQAAATgJANQgHANgMAGQgNAGgOAAQgPAAgMgHgAVxgZQgFAFgDAHQgDAJAAAHQAAAKADAIQAEAJAFAFQAHAEAIAAQAHAAAHgEQAFgFAEgJQADgHAAgMQAAgGgCgIQgEgIgFgFQgGgGgJAAQgJAAgHAGgAExA2QgHgFgEgGQgEgIAAgIQAAgUARgJQARgJAegBIAAgBIgCgIQgBgFgFgDQgFgCgJgBQgIABgIABQgHACgGAEIgFgSQAGgDAJgDQALgDANAAQARAAAJAHQAKAGAEAKQAEAKAAAMIAAAlIAAAOIABALIgYAAIgCgLIgBAAQgEAGgJAEQgIAEgLAAQgKAAgIgFgAFQAFQgIACgGAEQgFAFAAAIQAAAIAEAEQAFAEAGgBQAJABAFgFQAGgEACgGIAAgDIAAgDIAAgPQgJAAgJABgABEA2QgIgFgEgGQgEgIAAgIQAAgUARgJQAQgJAegBIAAgBIgBgIQgBgFgFgDQgFgCgJgBQgJABgHABQgHACgGAEIgGgSQAHgDAKgDQAJgDANAAQASAAAJAHQAKAGAEAKQAEAKgBAMIAAAlIABAOIABALIgYAAIgCgLIAAAAQgGAGgIAEQgIAEgLAAQgKAAgHgFgABiAFQgJACgEAEQgGAFAAAIQAAAIAFAEQAEAEAGgBQAJABAFgFQAFgEACgGIABgDIAAgDIAAgPQgJAAgJABgAhZA0QgLgHgIgLQgGgNgBgRQABgQAGgMQAIgNAMgHQAMgHARAAQAQAAAMAHQAMAHAGAMQAHAMAAAPQgBATgHANQgJANgMAGQgMAGgOAAQgQAAgMgHgAhLgZQgGAFgDAHQgDAJAAAHQAAAKADAIQAEAJAGAFQAFAEAJAAQAIAAAFgEQAGgFADgJQAEgHAAgMQAAgGgDgIQgDgIgFgFQgGgGgJAAQgKAAgFAGgAajA4QgIgCgGgDIAFgUIANAGQAHACAHAAQAJAAAFgDQAEgDAAgFQAAgGgEgDQgEgEgKgDQgQgGgGgGQgIgIAAgJQABgKAFgHQAEgIAJgFQAKgEAMAAQAJAAAHACQAIACAFADIgGATIgJgFQgGgCgHAAQgHAAgFADQgDAEAAAEQAAAGAEADQAEADAKADQAPAFAHAGQAHAIAAAMQAAAKgFAIQgFAHgKAEQgKAFgOgBQgJAAgJgCgAQgA0QgMgHgHgMQgHgMAAgRQAAgNAHgNQAFgNAMgHQAMgJARAAQANAAAIAFQAJAEAGAIQAFAIADAJQACAJAAAIIAAAGIgBAEIhIAAQAAAKAFAHQAFAGAHADQAHACAJAAIAQgBQAIgBAGgCIAEASQgHADgKABQgJACgMAAQgRABgMgHgAQrgcQgFAEgDAGIgDAMIAvAAQABgFgCgGQgCgHgFgEQgFgEgJgBQgJABgFAEgANZA4QgGgCgEgEQgEgFgCgHQgCgIAAgKIAAgxIgPAAIAAgUIAPAAIAAgYIAagGIAAAeIAZAAIAAAUIgZAAIAAAuQAAAKADAEQAEAGAHAAIAGgBIAEAAIABAUIgIACIgMAAQgHAAgGgCg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");

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#336699").s().p("Ego1AYeQgsAAgfgfQgfgfAAgrMAAAgtpQAAgrAfgfQAfgfAsAAMBRsAAAQArAAAfAfQAeAfAAArMAAAAtpQAAArgeAfQgfAfgrAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).wait(1));

	// Layer 2
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.8)").s().p("EgtnAtbMAAAha0MBbPAAAMAAABa0g");
	this.shape_43.setTransform(-0.4,191.5,1.017,0.968,0,0,0,0,146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-297.4,-231.7,594,563);
p.frameBounds = [rect, rect];


(lib.Symbol28copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgxAAQAAgRANAAIBJAAQAMAAAAARQAAASgMAAIhJAAIgBAAQgMAAAAgSg");
	this.shape.setTransform(21,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA8CCIgjgiQgYgZgJgHIABASQAAASgGALQgGAQgXAJQgdAKgbAAIgEAAQgOAAAAgTQAAgSAOAAQAXABAhgHQAXgFACgNQgDgag3gvQgMgLAAgJQACgkAGgIQATgSAXgOQB6g5AJgDIACgBQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAQgGAUgEAHIgCACQg0AShMAtQgPAIgMANIAmAeQArAfArArQAlAjALAAIAEAAQAPABABAQQgBAUgPAAIgHAAIAAAAQgPAAgUgQg");
	this.shape_1.setTransform(7.4,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgxAAQAAgRANAAIBJAAQAMAAAAARQAAASgMAAIhJAAIgBAAQgMAAAAgSg");
	this.shape_2.setTransform(-6,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.027)").s().p("AlBFKIAAqTIKDAAIAAKTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.2,-32.9,64.5,66.1);
p.frameBounds = [rect, rect];


(lib.Symbol28copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmATQgNAAAAgTQABgRAMAAIBMAAQAOAAAAARQAAATgOAAg");
	this.shape.setTransform(19.9,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AArBZQgigYgCgEQgGAcg2AAIgBAAQgQgEAAgPQAAgTAQAAIALAAQAiAKATglQAFgJADAAQAEAAAAAMQAFAUASADIAKABQAPAJAAAIQAHAVgVAAgAgZggQgQgKgKgNQgCgCADgEIAXgZQACgEADAFQAPAPAHAFIATgUQADgEACACQANAPANAJQAEABgEAEIgWAaQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQgMgIgLgMIgSATQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgEgCg");
	this.shape_1.setTransform(10.6,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmATQgNAAAAgTQABgRAMAAIBMAAQAOAAAAARQAAATgOAAg");
	this.shape_2.setTransform(0.9,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.027)").s().p("AlBFKIAAqTIKDAAIAAKTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.2,-32.9,64.5,66.1);
p.frameBounds = [rect, rect];


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmASQgNAAAAgSQABgSAMABIBMAAQAOgBAAASQAAASgOAAg");
	this.shape.setTransform(20.9,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaByQgWgOgHgLQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQALgQALgKQADgDACABQANAOAPALQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAIgWAcIgCABIgCAAgAiNgBQglgMAAgmQAHgnAIgNQAFgKAFAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgDALQgGAOAAAMQgGASAkARQAZAMA0AAQBIgDAmgMQApgJAcgUIAEgDQADgBAAAJQAGAhASAAIAGAAQAQAAAAASQgBASgPAAIgHAAQgkAAgHgkQgeASggAJQgwAPg+AAQg2AAgcgKg");
	this.shape_1.setTransform(1.5,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.027)").s().p("AlBFKIAAqTIKDAAIAAKTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.2,-32.9,64.5,66.1);
p.frameBounds = [rect, rect];


(lib.Symbol27copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCAAICEhMIAACZg");
	this.shape.setTransform(18.4,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25878C").s().p("AifAWQgLAAgHgGQgIgGAAgJIAAgWQABAIAHAGQAHAGALAAIE/AAQALAAAHgGQAHgGABgIIAAAWQAAAJgIAGQgHAGgLAAg");
	this.shape_1.setTransform(19.4,29);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#45F2FF").s().p("ACyAIQgHgGgLAAIk/AAQgLAAgHAGQgHAGgBAIIAAgXQAAgIAIgGQAHgGALAAIE/AAQALAAAHAGQAIAGAAAIIAAAXQgBgIgHgGg");
	this.shape_2.setTransform(19.4,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33BFC0").s().p("AimCeQgLAAgIgGQgIgGAAgKIAAkPQAAgJAIgHQAIgGALAAIFNAAQAMAAAHAGQAIAHAAAJIAAEPQAAAKgIAGQgHAGgMAAg");
	this.shape_3.setTransform(19.5,15.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33BFC0").s().p("AimCeQgLAAgIgGQgIgGAAgKIAAkPQAAgJAIgHQAIgGALAAIFNAAQAMAAAHAGQAIAHAAAJIAAEPQAAAKgIAGQgHAGgMAAg");
	this.shape_4.setTransform(19.5,15.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#45F2FF").s().p("AifAWQgLAAgHgGQgIgGAAgJIAAgWQABAIAHAGQAHAGALAAIE/AAQALAAAHgGQAHgGABgIIAAAWQAAAJgIAGQgHAGgLAAg");
	this.shape_5.setTransform(19.6,29);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#25878C").s().p("ACyAIQgHgGgLAAIk/AAQgLAAgHAGQgHAGgBAIIAAgXQAAgIAIgGQAHgGALAAIE/AAQALAAAHAGQAIAGAAAIIAAAXQgBgIgHgGg");
	this.shape_6.setTransform(19.6,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,39,31.7);
p.frameBounds = [rect, rect];


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("AhKBFQgTAAAAgXQABgVASAAIABAAQAkAAAVgaIAWgmQAKgOANgIQALgHAJAAQAVAAAOAfQAKAZAAAVQAAAOgLARQgMAPgIAAQgLAAgYgLQgYgMgMgNQgcAygkAAgAATgXQgDADgDAGIAwAZQgBgLgLgOQgMgPgJAAQgFAAgEAGg");
	this.shape.setTransform(9.7,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E211A").s().p("AgsAVQgPAAAAgVQAAgVAPAAIBYAAQAQABAAAUQAAAVgQAAg");
	this.shape_1.setTransform(-2.2,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.027)").s().p("AlBFKIAAqTIKDAAIAAKTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.2,-32.9,64.5,66.1);
p.frameBounds = [rect, rect];


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("AgqB3QgMgNAAgTQAAgZAVgpQAVgmAMAAQAMAAAPAMQAcAVAAAiQAAATgHAUQgGAUgQAMQgQALgUAAQgTAAgNgNgAgLAiQgKAGgGALQgGAJAAAHQAAAHAJAGQAJAHALAAQAHAAALgEQAOgEAFgGIABgDIgBgDQgHgNgKgKQgNgMgKAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABgAgdhDQgSgLgLgPQgDgDADgEQAOgRANgMQACgDAEAEQAOAQAMAIQAMgQAJgIQAEgEACACQAUAVAKAHIACACIgCAEIgaAdQgCADgEgDQgPgLgLgMIgVAXIgDACIgFgCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AhAClIAAlJICBAAIAAFJg");
	this.shape_1.setTransform(0.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-6,-16.1,13.1,33);
p.frameBounds = [rect, new cjs.Rectangle(-5.9,-16.1,13,33)];


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AhAClIAAlJICBAAIAAFJg");
	this.shape.setTransform(3.6,3.2,0.98,0.826);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E211A").s().p("Ag6BgIgfgNQgIgDAAgFQAAgEAHAAIAZABQAMABAMgDQAfgHAbgWQAcgXALgWQADgIACgJQAAgFgIgLIgDgEIgJgLIgFgGIgBgEQAAgIAEgLIAHgRIACgBQAAgBABgBQAAAAABAAQAAgBAAAAQABAAAAAAQAEAAAHALIABACIABACIADAEQAHAGAKADQAGABAIAAIAAAsIgBAAIgRgBIgEgBIABAHQAAAXgIAPIgKAXIgLAUIgFAHQgSAWgZAMQgIAFgNAAQgOAAgXgHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.7,-10.4,19.8,27.3);
p.frameBounds = [rect, new cjs.Rectangle(-2.7,-10.4,12.8,27.3)];


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AhAClIAAlJICBAAIAAFJg");
	this.shape.setTransform(0.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E211A").s().p("Ag/CKIgEAAIgDAAIgBAAIAAgsIAGAAIACAAIABAAQAXAAAHgHQgCgGAAgJQAAggAcgiQAagfAWAAQAMAAAHANQAGALAAAQQAAAUgHASQgIAVgOANQALAGAXABIgZAfIgBALQgdgEgUgMQgaARgfABIgDAAgAABAcQgIAIAAAGQAAAOAVANQAGgCAKgJQAMgKAAgEQAAgagUAAQgLAAgKAKgAgQhJQgRgKgNgQQgCgDADgEIAbgdQACgDAEAEQAMAQANAHIAVgXQAFgFACADQASATAMAIQADADgDADIgaAeQgCACgEgCQgOgKgOgNQgMARgHAFIgEACIgBAAIgDgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7.2,-16.1,14.6,33);
p.frameBounds = [rect, new cjs.Rectangle(-5.9,-16.1,13,33)];


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AhAClIAAlJICBAAIAAFJg");
	this.shape.setTransform(0.5,0.1,1,0.698);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E211A").s().p("AAgBxQgagRgGgLQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAIgOAQgRQAEgEACACQAQARATAMQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBABIgbAgIgDABIgCgBgAgZAcIgBAAIgHAAIgGAAIgZgCIABgLIAZgdIAFAAIALAAQAvAAAMgLQgCgXgSgYIAAgCQAAgEAGgQIAHgQQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAGAAAIAUQAJAXAAAZQAAAggMAOQgQAVggAFIgUABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-6.5,-11.4,13.6,23);
p.frameBounds = [rect, new cjs.Rectangle(-5.9,-11.4,13,23)];


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("AgqB3QgNgNAAgTQAAgZAWgpQAVgmAMAAQAMAAAPAMQAcAVAAAiQAAAUgHATQgHAUgQAMQgPALgUAAQgTAAgNgNgAgLAiQgKAGgGALQgGAJAAAHQAAAHAJAGQAJAHALAAQAHAAALgEQAOgEAFgGIABgDIgBgDQgHgOgKgJQgNgMgKAAQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABgAAahDQgRgMgJgLIgVAXQgFACgDgCQgSgLgMgPQgCgDADgEQAOgRANgMQACgDAEAEQAOAQALAIIAVgYQAFgFACADQAUAVAKAHIACACIgCAEIgaAdIgDABIgDgBg");
	this.shape.setTransform(4,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AlBFKIAAqTIKDAAIAAKTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.2,-32.9,64.5,66.1);
p.frameBounds = [rect, rect];


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag9AAQAAgVAQAAIBaAAQARAAAAAVQAAAWgQAAIhbAAIgBAAQgPAAAAgWg");
	this.shape.setTransform(11.7,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhrBWQgJgFAAgDQABgEAHAAIAZABQB3ggALhBQgSgdgHgIIgBgFQAFgbAGgKQAEgFACAAQADAAAIAOQAKARAbAAIAJAAQAWAAAAAWQAAAXgWAAIgfgBIAAAGQAAAXgHAQQgDA4hDAfQgMAGgMAAQgkgFgigQg");
	this.shape_1.setTransform(-1.9,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.027)").s().p("AlBFKIAAqTIKDAAIAAKTg");
	this.shape_2.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.2,-31.9,64.5,66.1);
p.frameBounds = [rect, rect];


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag9AAQAAgVAQAAIBaAAQARAAAAAVQAAAWgQAAIhbAAIgBAAQgPAAAAgWg");
	this.shape.setTransform(17.7,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhiB4QAAgWATAAIAEAAQAaAAAIgIIgCgPQAlhlAqAAQAZAIAAAiQABAugfAcQAOAIAdAAIAFAAQAUAAAAAWQABAXgVAAIgFAAQg7gDgagQQgZATgoAAIgEAAIgBAAQgRAAAAgXgAgPAsQgCAOAYAOQAdgQAAgLQACgagXAAQgeAOAAALgAgYhMQgTgLgMgQQgDgCADgFIAcgfQADgDADAFQARASAKAGIAWgYQAEgGADAEQAPARAQALQAEACgEAEIgbAfQgCADgEgDQgOgJgPgPQgNASgIAFQAAABAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgEgCg");
	this.shape_1.setTransform(5.8,-1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag9AAQAAgVAQAAIBaAAQARAAAAAVQAAAWgQAAIhbAAIgBAAQgPAAAAgWg");
	this.shape_2.setTransform(-6.2,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.027)").s().p("AlBFKIAAqTIKDAAIAAKTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.2,-32.9,64.5,66.1);
p.frameBounds = [rect, rect];


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("AAaBxQgagQgFgMQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAGgOARgRQAEgEABACQAQARATAMQABAAAAAAQAAABAAAAQAAABgBAAQAAABAAABIgcAgIgCABIgCgBgAg1AWQgFgGAAgKQAAgHAFgGQAFgHAJAAIAKAAQAwAAAMgLQgBgMgIgPQgFgMgHgIIAAgCQAAgEAHgQIAHgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAGAAAIAUQAIAXAAAZQAAAggMAOQgPAVghAFIgbABQgJAAgFgGg");
	this.shape.setTransform(10.9,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E211A").s().p("AgsAVQgPAAAAgVQAAgUAPgBIBYAAQAQAAAAAVQAAAWgQgBg");
	this.shape_1.setTransform(2.7,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.027)").s().p("AlBFKIAAqTIKDAAIAAKTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.2,-32.9,64.5,66.1);
p.frameBounds = [rect, rect];


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AiSDnIAAnNIElAAIAAHNg");
	this.shape.setTransform(-1.9,0.9,1,1,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E211A").s().p("AhxDEQgUgVAAghQAAgpAVgoQAJgQAFAAQABgBAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAFgEALQgOAigBAPQAAAhAcARQAXAPAjAAQAggBAmgTQAlgTAAgSIgKhdIgWi3IgBgTQAAgFACgGIAJgVQAIgNAEAAQACAAAAAGIAEA9QAGA2AJBMQAEAaAPARQALANAOADIABAgIAAAMQgLgCgIgFQgNgIgFgMQACAYAAASQAAAagFAPQgDAMgKAOQgMAUgYAPQglAYgsAAQgzAAgagZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16.6,-22.1,30.2,46.3);
p.frameBounds = [rect, new cjs.Rectangle(-16.6,-22.1,29.5,46.3)];


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AhAClIAAlJICBAAIAAFJg");
	this.shape.setTransform(0,-0.6,1.154,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E211A").s().p("AAIBkQgHgEgJgJQgMgKgEgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAKgOAOgQQAEgEACABQAPARAUAMQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgcAgIgCACIgCgBgAA2gPIgEAAIgHgBQgbgCgPgeQgCAMgRAJQgTALgaABIgBAAIgBAAIgHAAIgGgBIAAgMIgBggIAIABIAPAAQAsAAARgfQAGgKAEAAQAEAAAAAOQAAAJAIAHQAIAIAKACIAJABIAGAAIAKAAIAAALIAKAPIAAAQQgKACgLAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8,-17.1,16.1,33);
p.frameBounds = [rect, new cjs.Rectangle(-7.4,-17.1,15,33)];


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AhAClIAAlJICBAAIAAFJg");
	this.shape.setTransform(0.4,0.3,1.982,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E211A").s().p("Ah3A3IgLgPIAAgLQAigBAXgHQAagIAwgSIgxgPQgZgHgNAAQgIAAgEACQgNAFgDAAQgEAAABgEQgBgGAIgLQAHgLAIgHQANgLAOAAIAJABQAQADAqAOQAlANASAEQAjAHAfAAIAJAAQABAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAAGgIAMQgHALgHAFQgBACgJAAIglgCQgXAAgUAGQgNAEgdAOQgyAagTAHQgNAFgOACg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13,-16.1,26.4,33);
p.frameBounds = [rect, new cjs.Rectangle(-12.4,-16.1,25.8,33)];


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag9AAQAAgVAQAAIBaAAQARAAAAAVQAAAWgQAAIhbAAIgBAAQgPAAAAgWg");
	this.shape.setTransform(22.6,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AibCTQAFgxASgjQAKgRAFAAQAAAAAAABQABAAAAAAQAAABAAAAQABABAAAAQgBAGgFALQgOAaAAAYQAbBDA9AAQBvgWAAglIgKhgQgJhDgOh7IgBgTIACgMQANgjAJAAQACAAAAAGIAFA/QAGA+AJBKQAPA+AnAAIAGAAQATAAAAAWQABAXgVAAIgHAAQgggBgMgcIACArQgBAugRAYQgLA9hvAAQhkgVgBg9g");
	this.shape_1.setTransform(4.8,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.027)").s().p("AlBFKIAAqTIKDAAIAAKTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.2,-32.9,64.5,66.1);
p.frameBounds = [rect, rect];


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhEAAQABgYARAAIBkAAQATABAAAXQAAAZgSAAIhlAAIgBAAQgRAAAAgZg");
	this.shape.setTransform(18.1,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AARByQgcgSgJgOQgCgBACgEQAQgVALgOQAFgFACACQARATAXAPQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABIggAlQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABAAAAIgDgCgAA5gSQgtgfgDgGQgIAlhHAAIgCAAQgVgFAAgUQAAgZAVAAIAPAAQAtANAZgwQAIgMADAAQAGgBAAARQAFAaAZAEIANABQATAMAAALQAKAbgcAAg");
	this.shape_1.setTransform(5.3,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhEAAQABgYARAAIBkAAQATABAAAXQAAAZgSAAIhlAAIgBAAQgRAAAAgZg");
	this.shape_2.setTransform(-6.7,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.027)").s().p("AlBFKIAAqTIKDAAIAAKTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.2,-32.9,64.5,66.1);
p.frameBounds = [rect, rect];


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("Ah/BIQgVAAAAgXQAAgVAVAAIAGAAQAoAAAagIQAhgJAqgRIgxgPQgagHgMAAQgIAAgFACIgPAGQgEAAAAgFQAAgGAHgLQAHgKAJgIQANgLAOAAIAJABQAQAEAoAOQAmAMATAEQAfAHAjAAIAJAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAGgHANQgIAKgGAGQgBABgKAAIgkgBQgaAAgRAFQgUAHgWAMQg0AagSAGQgVAIgbABg");
	this.shape.setTransform(12,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E211A").s().p("AgsAVQgPABAAgWQAAgUAPgBIBYAAQAQAAAAAVQAAAVgPAAg");
	this.shape_1.setTransform(-4.9,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.027)").s().p("AlBFKIAAqTIKDAAIAAKTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.2,-32.9,64.5,66.1);
p.frameBounds = [rect, rect];


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AhAClIAAlJICBAAIAAFJg");
	this.shape.setTransform(-1.8,0.3,1.365,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E211A").s().p("AhdBTQgIgDAAgFQAAgEAHAAIAZABQArAAAngfQAmgfAFgfQAAgGgKgOIgOgRQgBgBAAgDQAAgIAEgLQADgMAEgFQACgEADAAQAEAAAHANQAKAQAaAAIAIAAQAAAWgCAWIgDAAQgSAAgHgCIAAAHQAAAWgHAQQgNAegJANQgSAbgbAOQgLAFgMAAQgXAAgtgUg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.7,-16.1,21,33);
p.frameBounds = [rect, new cjs.Rectangle(-10.7,-16.1,17.8,33)];


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AhAClIAAlJICBAAIAAFJg");
	this.shape.setTransform(0.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E211A").s().p("AAFAvQgggOgLgQQgEANgOAHQgKAGgMACIgGAAQACgWAAgWIABAAQAlAAAdgcIASgWQAKgJAHgBQAFAAAGAGQAiAjAUANQgCAWABAXIgDgCQgJgEgFgEQgCAKgJAKQgJAJgGABQgJAAgbgNgAgCgRQgGAFAAADQAAADAVAJQAXAMAHAAQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgBgHgKIgLgKQgMgNgJAAQgEABgEAEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.4,-16.1,17.1,33);
p.frameBounds = [rect, new cjs.Rectangle(-5.9,-16.1,13,33)];


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("AgiCGIgDAAQgIgBgIgEQgBgXABgYQAMAIAHAAIABAAIAKAAQAvAAAMgLQgCgXgSgYIAAgCQAAgEAGgQIAHgOQABgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAGAAAIASQAJAXAAAZQAAAggMAQQgQAVggAFIgYABgAAVhEIgSgNQgJgJgEgGQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAJgPAOgPQAEgFACACQARASASALQAAAAAAABQABAAAAABQAAAAgBABQAAAAgBABQgKANgRATIgCABIgDgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AhAClIAAlJICBAAIAAFJg");
	this.shape_1.setTransform(1.5,0.3,0.846,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5.4,-16.1,12.5,33);
p.frameBounds = [rect, new cjs.Rectangle(-3.9,-16.1,11,33)];


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhEAAQABgYARAAIBkAAQATABAAAXQAAAZgSAAIhlAAIgBAAQgRAAAAgZg");
	this.shape.setTransform(14.2,8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah3BfQgJgFAAgDQAAgFAIAAIAcABQCEgkANhHQgVghgIgJIgBgFQAGgfAHgKQAEgFACAAQAEgBAJAPQAKATAfAAIAJAAQAYABAAAYQABAagZAAIgigCIAAAHQAAAagIASQgDA9hKAjQgOAGgNAAQgngFgngSg");
	this.shape_1.setTransform(-0.8,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.027)").s().p("AlBFKIAAqTIKDAAIAAKTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.2,-32.9,64.5,66.1);
p.frameBounds = [rect, rect];


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhEAAQABgYARAAIBkAAQATABAAAXQAAAZgSAAIhlAAIgBAAQgRAAAAgZg");
	this.shape.setTransform(22.4,8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4AUQgVAggfAAIgEAAQgUAAAAgYQAAgbAVAAIAEAAQAygFAagbQAYgkARAAQAGAAAHAGQA1A+AgAAIACAAQAXAAAAAZQAAAagXAAIgCAAQgmgLgFgGQgRAhgOAAQg+gEgcgsgAgQgSQgGAFAAADQgEACAcAMQAZANAJAAQABAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQgLgOgKgKQgMgPgKAAQgEAAgIAHg");
	this.shape_1.setTransform(6.6,6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhEAAQABgYARAAIBkAAQATABAAAXQAAAZgSAAIhlAAIgBAAQgRAAAAgZg");
	this.shape_2.setTransform(-9.4,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.027)").s().p("AlBFKIAAqTIKDAAIAAKTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.2,-32.9,64.5,66.1);
p.frameBounds = [rect, rect];


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("AgwCAQgFgGAAgJQAAgJAFgHQAFgHAJAAIAKAAQAwAAAMgLQgCgVgTgaIAAgCQAAgEAHgQIAGgOIADgCQAGAAAHASQAJAWAAAZQAAAggMAQQgQAVggAFIgbABQgJAAgFgGgAAVhDQgYgQgIgMQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQALgQAMgOQAFgEABABQAOAPAVAOQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAABIgcAgIgDABIgBAAg");
	this.shape.setTransform(8.1,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E211A").s().p("AgsAVQgPAAAAgVQAAgUAPAAIBYAAQAQgBAAAVQAAAWgQgBg");
	this.shape_1.setTransform(0.4,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.027)").s().p("AlBFKIAAqTIKDAAIAAKTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.2,-32.9,64.5,66.1);
p.frameBounds = [rect, rect];


(lib.Symbol6copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("AgdByIABAAQANgBAMgEQAJgDACgFQAAgRgHg4QgGhAgDggQAAgKgHgfIgBgEQAAgHALgTQAHgSAEAAQACAAACAEQAFAUALAQIACAFIgBADQgEAMgHAJQACAiAHA2QAFAuAAAPQAAAwgTAdQgNASgXACIgEgsg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E211A").s().p("AgXCeQgTAAAAgYQAAgUATAAIAEAAQAQAAAKgFQALgDADgFQgBgSgGg3QgIhBgDgfIgFgpIgBgEQAAgIAIgSQAKgSAEAAQABAAADAEQAFAUAKAQIACAFIAAADQgEALgHAKQACAjAGA1QAGAuAAAPQAAAwgUAdQgPAUgaAAg");
	this.shape_1.setTransform(0.4,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E211A").s().p("AgsAVQgPABAAgWQAAgUAPgBIBYAAQAQAAAAAVQAAAWgQgBg");
	this.shape_2.setTransform(-6.1,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.008)").s().p("AhAClIAAlJICBAAIAAFJg");
	this.shape_3.setTransform(0.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5.9,-16.1,13,33);
p.frameBounds = [rect, new cjs.Rectangle(-12.2,-16.1,19.3,33)];


(lib.Symbol6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("AgdByIABAAQANgBAMgEQAJgDACgFQAAgRgHg4QgGhAgDggQAAgKgHgfIgBgEQAAgHALgTQAHgSAEAAQACAAACAEQAFAUALAQIACAFIgBADQgEAMgHAJQACAiAHA2QAFAuAAAPQAAAwgTAdQgNASgXACIgEgsg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E211A").s().p("AgXCeQgTAAAAgYQAAgUATAAIAEAAQAQAAAKgFQALgDADgFQgBgSgGg3QgIhBgDgfIgFgpIgBgEQAAgIAIgSQAKgSAEAAQABAAADAEQAFAUAKAQIACAFIAAADQgEALgHAKQACAjAGA1QAGAuAAAPQAAAwgUAdQgPAUgaAAg");
	this.shape_1.setTransform(0.4,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E211A").s().p("AgsAVQgPABAAgWQAAgUAPgBIBYAAQAQAAAAAVQAAAWgQgBg");
	this.shape_2.setTransform(-6.1,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.008)").s().p("AhAClIAAlJICBAAIAAFJg");
	this.shape_3.setTransform(0.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5.9,-16.1,13,33);
p.frameBounds = [rect, new cjs.Rectangle(-12.2,-16.1,19.3,33)];


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("AgdByIABAAQANgBAMgEQAJgDACgFQAAgRgHg4QgGhAgDggQAAgKgHgfIgBgEQAAgHALgTQAHgSAEAAQACAAACAEQAFAUALAQIACAFIgBADQgEAMgHAJQACAiAHA2QAFAuAAAPQAAAwgTAdQgNASgXACIgEgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AhAClIAAlJICBAAIAAFJg");
	this.shape_1.setTransform(0.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5.9,-16.1,13,33);
p.frameBounds = [rect, rect];


(lib.Symbol5copy2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("AhZBkQgNgIAAgMQAAgUAIgRQADgHADAAQAEABABAGQAGATAnAAQA2gBANgYQACgGAAgHQAAgQgFgXIgJgtIgBgJQAAgEAJgXQAFgMADAAQADAAACALQAIAjAGAvQAGAnADALQADALAGAGQALAMAMABIAGAAIAEAsIgBAAIgDAAIgHAAIgGgBQgSgCgJgKQgNgLgIgaQgFAXgZAOQgXAOgigBQgaAAgOgJg");
	this.shape.setTransform(-5.9,0);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AhACHIAAkNICBAAIAAENg");
	this.shape_1.setTransform(0.5,3.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-16.2,-10.9,23.3,27.8);
p.frameBounds = [rect];


(lib.Symbol5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("AhZBkQgNgIAAgMQAAgUAIgRQADgHADAAQAEABABAGQAGATAnAAQA2gBANgYQACgGAAgHQAAgQgFgXIgJgtIgBgJQAAgEAJgXQAFgMADAAQADAAACALQAIAjAGAvQAGAnADALQADALAGAGQALAMAMABIAGAAIAEAsIgBAAIgDAAIgHAAIgGgBQgSgCgJgKQgNgLgIgaQgFAXgZAOQgXAOgigBQgaAAgOgJg");
	this.shape.setTransform(-5.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AhACHIAAkNICBAAIAAENg");
	this.shape_1.setTransform(0.5,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16.2,-10.9,23.3,27.8);
p.frameBounds = [rect, rect];


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("AhZBkQgNgIAAgMQAAgUAIgRQADgHADAAQAEABABAGQAGATAnAAQA2gBANgYQACgGAAgHQAAgQgFgXIgJgtIgBgJQAAgEAJgXQAFgMADAAQADAAACALQAIAjAGAvQAGAnADALQADALAGAGQALAMAMABIAGAAIAEAsIgBAAIgDAAIgHAAIgGgBQgSgCgJgKQgNgLgIgaQgFAXgZAOQgXAOgigBQgaAAgOgJg");
	this.shape.setTransform(-5.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AhACHIAAkNICBAAIAAENg");
	this.shape_1.setTransform(0.5,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16.2,-10.9,23.3,27.8);
p.frameBounds = [rect, new cjs.Rectangle(-5.9,-10.2,13,27.1)];


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("AhPBpQgIgEAAgEQAAgDAIAAIANACQANACAJAAQAXAAAmgaQA2giAAgmQAAgOgIgOQgIAWgWAAQglAAAAgpQAAgRAKgYQATgkAPAAQAKAAALAMQALALAHATQAJAYAAAjQAAA5gSAjQgTAmgrAQQgHACgDAAQggAAgtgUgAAShIQgEAFAAAFQAAAEAHAEQAHAEAIAAQAMAAADgIQgBgJgHgIQgHgGgFAAQgHAAgGAJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AheClIAAlJIC8AAIAAFJg");
	this.shape_1.setTransform(3.5,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(102,153,0,0.008)").ss(1,1,1).p("ABfClIi9AAIAAlJIC9AAg");
	this.shape_2.setTransform(3.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.8,-16.1,21.9,33);
p.frameBounds = [rect, new cjs.Rectangle(-5.9,-16.1,19,33)];


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhEAAQABgYARAAIBkAAQATABAAAXQAAAZgSAAIhlAAIgBAAQgRAAAAgZg");
	this.shape.setTransform(13.2,8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhwBzQgOgJAAgPQAAgWAJgUQADgHAEAAQADAAACAHQAPAWAlAAQA/gCAPgaIABgPQgGgugKgzIgBgKQgEAEAPgkQAFgOADAAQAEAAADANQAOBvAMAqQADAMAHAHQANAOAOAAIAHAAQAXAAgBAZQAAAagWAAIgHAAQgagBgNgOQgPgLgKggQgYA6hMAAIgJABQgUAAgRgLg");
	this.shape_1.setTransform(-2.3,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.027)").s().p("AlBFKIAAqTIKDAAIAAKTg");
	this.shape_2.setTransform(-2.9,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.1,-38.1,64.5,66.1);
p.frameBounds = [rect, rect];


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("AgXCeQgTAAAAgYQAAgUATAAIAEAAQAQAAAKgFQALgDADgFQgBgSgGg3QgIhBgDgfIgFgpIgBgEQAAgIAIgSQAKgSAEAAQABAAADAEQAFAUAKAQIACAFIAAADQgEALgHAKQACAjAGA1QAGAuAAAPQAAAwgUAdQgPAUgaAAg");
	this.shape.setTransform(4.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E211A").s().p("AgsAVQgPABAAgWQAAgUAPgBIBYAAQAQAAAAAVQAAAWgQgBg");
	this.shape_1.setTransform(-2.4,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.027)").s().p("AlBFKIAAqTIKDAAIAAKTg");
	this.shape_2.setTransform(-2.9,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.1,-31.6,64.5,66.1);
p.frameBounds = [rect, rect];


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E211A").s().p("AhPBpQgIgEAAgEQAAgDAIAAIANACIAWACQAWAAAngaQA2giAAgmQAAgNgIgPQgJAWgVAAQgTAAgKgKQgJgLAAgUQAAgRALgYQAIgPAIgKQAKgLAIAAQAKAAALAMQALALAHATQAJAYAAAjQAAA5gSAjQgTAmgrAQQgGACgEAAQggAAgtgUgAAShIQgEAFAAAFQAAAEAHAEQAHAEAIAAQAMAAACgIQAAgJgIgIQgGgGgGAAQgGAAgGAJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("AlBFKIAAqTIKDAAIAAKTg");
	this.shape_1.setTransform(-2.9,-8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.1,-41.6,64.5,66.1);
p.frameBounds = [rect, rect];


(lib.path20 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BA7547").ss(0.8).p("AeQnjI3fAAIhEAhIhBghIucAAIglAlIhAglIp5AAIgzAyIgygyInYAAIA2BZIg2AzIAAHwIA6BLIg6BHIAAC5MAo9AAAIBChCIBDBCIRZAAIAAh4IhBhCIBBhCIAAomIhBhBIBBhCg");
	this.shape.setTransform(194,49.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BA7547").ss(0.8).p("AeQnjI3fAAIhEAhIhBghIucAAIglAlIhAglIp5AAIgzAyIgygyInYAAIA2BZIg2AzIAAHwIA6BLIg6BHIAAC5MAo9AAAIBChCIBDBCIRZAAIAAh4IhBhCIBBhCIAAomIhBhBIBBhCg");
	this.shape_1.setTransform(194,49.9);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AM1HkIhDhCIhCBCMgo9AAAIAAi5IA6hHIg6hLIAAnwIA2g0Ig2hYIHYAAIAyAyIAzgyIJ5AAIBAAlIAlglIOcAAIBBAgIBEggIXfAAIAAAiIhBBCIBBBBIAAImIhBBCIBBBCIAAB4g");
	mask.setTransform(194.2,49.9);

	// Layer 3
	this.instance = new lib.path000();
	this.instance.setTransform(286.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BA7547").ss(1.5).p("AH3HtIAAvSIvPAAIAAABQgVCMgIC+QAIAzASAIQAeAMA0gpIAAABQAvgnA8AAQBGAAAxAxQAxAxAABDQAABGgxAxQgxAyhFAAQguAAg8gmIgBAAQgpgbgCgBQgYgNgQAHQgUAIgHA1QAIC/AUCM");
	this.shape_2.setTransform(337.3,49.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB380").s().p("AnaHoQgUiMgIi+QAHg1AUgIQAPgHAYAMIAsAcIAAAAQA9AmAuAAQBFAAAxgxQAxgxAAhGQAAhEgxgxQgygxhFAAQg9AAguAnIAAAAQg1ApgdgNQgTgHgHg0QAIi+AUiMIAAgBIPQAAIAAPTg");
	this.shape_3.setTransform(337.3,49.8);

	this.instance_1 = new lib.path001();
	this.instance_1.setTransform(190.2,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BA7547").ss(1.5).p("AFMHpQgGglgHhBQgOiBgEiJQAHgLAHgEQAfgNA0AqIABgBQAvAnA8AAQBGAAAxgxQAxgxAAhGQAAhEgxgyQgxgzhGAAQgdAAgdAKQgcAJgUAPQgfAXgMAHQgaAOgQgHQgHgCgGgKQAFiCANiLQAHhFAFgrIAAgCIvPAAIAAACQgVCLgIC/QAIAzASAHQAdANA1gpQAvgmA8AAQBGAAAxAxQAxAxAABDQAABGgxAxQgxAyhFAAQguAAg8gnIgBAAQgdgUgOgHQgYgNgQAHQgUAIgHA1QAIC/AUCM");
	this.shape_4.setTransform(258.4,49.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFB380").s().p("AqGHpQgTiMgIi/QAHg1AUgJQAQgGAYAMQAOAIAdAUIAAAAQA9AmAtAAQBGAAAxgxQAxgxAAhGQAAhDgxgyQgxgwhGgBQg8ABgwAmQg0ApgegNQgRgIgJgyQAJi/AUiMIAAgBIPQAAIAAABIgMBxQgNCLgFCCQAGAJAHADQAQAHAagPQALgGAggXQAUgPAcgKQAdgKAdAAQBFAAAyA0QAxAyAABEQAABGgxAwQgyAyhFAAQg9AAgvgnIAAAAQg0gpgfANQgHAEgHALQAECJAOCBQAHBBAGAlIAAACg");
	this.shape_5.setTransform(258.4,50);

	this.instance_2 = new lib.path009();
	this.instance_2.setTransform(93.8,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BA7547").ss(1.5).p("AFMHpQgGglgHhBQgNiBgEiJQAHgMAHgDQAfgNA0AqIAAgBQAwAnA7AAQBGAAAxgxQAxgxAAhGQAAhEgxgyQgxgzhFAAQgdAAgeAKQgcAJgUAPQgfAXgMAHQgaAOgPgHQgIgDgFgJQAEiCANiLQAHhFAFgrIAAgCIvPAAIAAACQgFAjgGA6QgNB2gFB3QAHAyATAIQAeANA0gpQAvgmA9AAQBFAAAxAxQAyAxAABDQAABGgxAxQgyAyhFAAQgbAAgegMQgVgJgcgSQgsgbAAAAQgYgNgQAHQgTAIgIA1QAJC/ATCM");
	this.shape_6.setTransform(161.9,49.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFB380").s().p("AqFHpQgTiMgJi/QAIg1ATgJQAPgGAZAMIAsAcQAbARAWAJQAeAMAbAAQBFAAAygxQAwgxAAhGQABhDgygyQgxgwhFgBQg9ABgvAmQg1ApgdgNQgTgIgHgyQAFh3ANh2QAFg6AGgkIAAgBIPPAAIAAABQgGAsgGBFQgNCLgFCCQAFAJAJADQAPAHAagPQAMgGAfgXQAUgPAbgKQAegKAeAAQBFAAAxA0QAxAyAABEQAABGgxAwQgxAyhGAAQg8AAgvgnIAAAAQg1gpgeANQgHADgIAMQAECJAOCBQAHBBAGAlIAAACg");
	this.shape_7.setTransform(162,50);

	this.instance_3 = new lib.path007();
	this.instance_3.setTransform(0,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BA7547").ss(1.5).p("AE+HpQgGgngHhCQgNiEgEiJQAFgLAIgDQAfgNA1ApIAAgBQAuAnA9AAQBGAAAxgxQAxgxAAhFQAAhEgxgzQgxgzhGAAQgdAAgdAKQgcAKgUAPQgiAYgJAFQgaAOgPgGQgIgEgGgJQAFiCANiHQAHhEAFgqIAAgCIvPAAIgCPS");
	this.shape_8.setTransform(66.8,49.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFB380").s().p("AqTHpIACvSIPPAAIAAABIgMBuQgNCIgFCCQAGAJAIADQAPAHAagPQAJgEAigZQAUgOAcgKQAdgKAdAAQBGAAAxAzQAxAyAABGQAABDgxAyQgxAxhGAAQg9AAgugnIAAABQg1gpgfANQgIADgFALQAECJANCEQAHBCAGAnIAAACg");
	this.shape_9.setTransform(66.8,50);

	this.instance.mask = this.shape_2.mask = this.shape_3.mask = this.instance_1.mask = this.shape_4.mask = this.shape_5.mask = this.instance_2.mask = this.shape_6.mask = this.shape_7.mask = this.instance_3.mask = this.shape_8.mask = this.shape_9.mask = mask;

	// Layer 3
	this.instance_4 = new lib.path000();
	this.instance_4.setTransform(286.2,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#BA7547").ss(1.5).p("AH3HtIAAvSIvPAAIAAABQgVCMgIC+QAIAzASAIQAeAMA0gpIAAABQAvgnA8AAQBGAAAxAxQAxAxAABDQAABGgxAxQgxAyhFAAQguAAg8gmIgBAAQgpgbgCgBQgYgNgQAHQgUAIgHA1QAIC/AUCM");
	this.shape_10.setTransform(337.3,49.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFB380").s().p("AnaHoQgUiMgIi+QAHg1AUgIQAPgHAYAMIAsAcIAAAAQA9AmAuAAQBFAAAxgxQAxgxAAhGQAAhEgxgxQgygxhFAAQg9AAguAnIAAAAQg1ApgdgNQgTgHgHg0QAIi+AUiMIAAgBIPQAAIAAPTg");
	this.shape_11.setTransform(337.3,49.8);

	this.instance_5 = new lib.path001();
	this.instance_5.setTransform(190.2,0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BA7547").ss(1.5).p("AFMHpQgGglgHhBQgOiBgEiJQAHgLAHgEQAfgNA0AqIABgBQAvAnA8AAQBGAAAxgxQAxgxAAhGQAAhEgxgyQgxgzhGAAQgdAAgdAKQgcAJgUAPQgfAXgMAHQgaAOgQgHQgHgCgGgKQAFiCANiLQAHhFAFgrIAAgCIvPAAIAAACQgVCLgIC/QAIAzASAHQAdANA1gpQAvgmA8AAQBGAAAxAxQAxAxAABDQAABGgxAxQgxAyhFAAQguAAg8gnIgBAAQgdgUgOgHQgYgNgQAHQgUAIgHA1QAIC/AUCM");
	this.shape_12.setTransform(258.4,49.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFB380").s().p("AqGHpQgTiMgIi/QAHg1AUgJQAQgGAYAMQAOAIAdAUIAAAAQA9AmAtAAQBGAAAxgxQAxgxAAhGQAAhDgxgyQgxgwhGgBQg8ABgwAmQg0ApgegNQgRgIgJgyQAJi/AUiMIAAgBIPQAAIAAABIgMBxQgNCLgFCCQAGAJAHADQAQAHAagPQALgGAggXQAUgPAcgKQAdgKAdAAQBFAAAyA0QAxAyAABEQAABGgxAwQgyAyhFAAQg9AAgvgnIAAAAQg0gpgfANQgHAEgHALQAECJAOCBQAHBBAGAlIAAACg");
	this.shape_13.setTransform(258.4,50);

	this.instance_6 = new lib.path009();
	this.instance_6.setTransform(93.8,0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BA7547").ss(1.5).p("AFMHpQgGglgHhBQgNiBgEiJQAHgMAHgDQAfgNA0AqIAAgBQAwAnA7AAQBGAAAxgxQAxgxAAhGQAAhEgxgyQgxgzhFAAQgdAAgeAKQgcAJgUAPQgfAXgMAHQgaAOgPgHQgIgDgFgJQAEiCANiLQAHhFAFgrIAAgCIvPAAIAAACQgFAjgGA6QgNB2gFB3QAHAyATAIQAeANA0gpQAvgmA9AAQBFAAAxAxQAyAxAABDQAABGgxAxQgyAyhFAAQgbAAgegMQgVgJgcgSQgsgbAAAAQgYgNgQAHQgTAIgIA1QAJC/ATCM");
	this.shape_14.setTransform(161.9,49.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFB380").s().p("AqFHpQgTiMgJi/QAIg1ATgJQAPgGAZAMIAsAcQAbARAWAJQAeAMAbAAQBFAAAygxQAwgxAAhGQABhDgygyQgxgwhFgBQg9ABgvAmQg1ApgdgNQgTgIgHgyQAFh3ANh2QAFg6AGgkIAAgBIPPAAIAAABQgGAsgGBFQgNCLgFCCQAFAJAJADQAPAHAagPQAMgGAfgXQAUgPAbgKQAegKAeAAQBFAAAxA0QAxAyAABEQAABGgxAwQgxAyhGAAQg8AAgvgnIAAAAQg1gpgeANQgHADgIAMQAECJAOCBQAHBBAGAlIAAACg");
	this.shape_15.setTransform(162,50);

	this.instance_7 = new lib.path007();
	this.instance_7.setTransform(0,0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#BA7547").ss(1.5).p("AE+HpQgGgngHhCQgNiEgEiJQAFgLAIgDQAfgNA1ApIAAgBQAuAnA9AAQBGAAAxgxQAxgxAAhFQAAhEgxgzQgxgzhGAAQgdAAgdAKQgcAKgUAPQgiAYgJAFQgaAOgPgGQgIgEgGgJQAFiCANiHQAHhEAFgqIAAgCIvPAAIgCPS");
	this.shape_16.setTransform(66.8,49.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFB380").s().p("AqTHpIACvSIPPAAIAAABIgMBuQgNCIgFCCQAGAJAIADQAPAHAagPQAJgEAigZQAUgOAcgKQAdgKAdAAQBGAAAxAzQAxAyAABGQAABDgxAyQgxAxhGAAQg9AAgugnIAAABQg1gpgfANQgIADgFALQAECJANCEQAHBCAGAnIAAACg");
	this.shape_17.setTransform(66.8,50);

	this.instance_4.mask = this.shape_10.mask = this.shape_11.mask = this.instance_5.mask = this.shape_12.mask = this.shape_13.mask = this.instance_6.mask = this.shape_14.mask = this.shape_15.mask = this.instance_7.mask = this.shape_16.mask = this.shape_17.mask = mask;

	// Layer 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E5A370").s().p("AM1HkIhDhCIhCBCMgo9AAAIAAi5IA6hHIg6hLIAAnwIA2g0Ig2hYIHYAAIAyAyIAzgyIJ5AAIBAAlIAlglIOcAAIBBAgIBEggIXfAAIAAAiIhBBCIBBBBIAAImIhBBCIBBBCIAAB4g");
	this.shape_18.setTransform(194.2,49.9);

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AM1HkIhDhCIhCBCMgo9AAAIAAi5IA6hHIg6hLIAAnwIA2g0Ig2hYIHYAAIAyAyIAzgyIJ5AAIBAAlIAlglIOcAAIBBAgIBEggIXfAAIAAAiIhBBCIBBBBIAAImIhBBCIBBBCIAAB4g");
	mask_1.setTransform(194.2,49.9);

	// Layer 1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E5A370").s().p("AM1HkIhDhCIhCBCMgo9AAAIAAi5IA6hHIg6hLIAAnwIA2g0Ig2hYIHYAAIAyAyIAzgyIJ5AAIBAAlIAlglIOcAAIBBAgIBEggIXfAAIAAAiIhBBCIBBBBIAAImIhBBCIBBBCIAAB4g");
	this.shape_19.setTransform(194.2,49.9);

	this.addChild(this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.instance_7,this.shape_15,this.shape_14,this.instance_6,this.shape_13,this.shape_12,this.instance_5,this.shape_11,this.shape_10,this.instance_4,this.shape_9,this.shape_8,this.instance_3,this.shape_7,this.shape_6,this.instance_2,this.shape_5,this.shape_4,this.instance_1,this.shape_3,this.shape_2,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0.7,1.5,387,96.9);
p.frameBounds = [rect];


(lib.path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#C49A6C","#8B5E3C"],[0,1],0,0,0,0,0,203).s().p("AM1HkIhDhCIhCBCMgo9AAAIAAi5IA6hHIg6hLIAAnwIA2g0Ig2hYIHYAAIAyAyIAzgyIJ5AAIBAAlIAlglIOcAAIBBAgIBEggIXfAAIAAAiIhBBCIBBBCIAAIlIhBBBIBBBDIAAB4g");
	this.shape.setTransform(193.5,48.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#C49A6C","#8B5E3C"],[0,1],0,0,0,0,0,203).s().p("AM1HkIhDhCIhCBCMgo9AAAIAAi5IA6hHIg6hLIAAnwIA2g0Ig2hYIHYAAIAyAyIAzgyIJ5AAIBAAlIAlglIOcAAIBBAgIBEggIXfAAIAAAiIhBBCIBBBCIAAIlIhBBBIBBBDIAAB4g");
	this.shape_1.setTransform(193.5,48.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,387,96.9);
p.frameBounds = [rect];


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.pre_0 = new lib.Symbol30copy();
	this.pre_0.setTransform(-223.3,4.5);

	this.pre_1 = new lib.Symbol31copy();
	this.pre_1.setTransform(226.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pre_0}]}).to({state:[{t:this.pre_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-258.2,-22.2,63.3,44.5);
p.frameBounds = [rect, new cjs.Rectangle(195,-22.2,63.3,44.5)];


(lib.Symbol34copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.pre_0 = new lib.Symbol32copy();

	this.pre_1 = new lib.Symbol33copy();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pre_0}]}).to({state:[{t:this.pre_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.6,-13.4,25.4,27);
p.frameBounds = [rect, rect];


(lib.Symbol29 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(425.8,133.1,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,rotation:27.3,x:389.3,y:122},0).wait(1).to({rotation:24.8,x:354.4,y:111.3},0).wait(1).to({rotation:22.3,x:321.4,y:101.3},0).wait(1).to({rotation:20,x:290,y:91.7},0).wait(1).to({rotation:17.8,x:260.2,y:82.7},0).wait(1).to({rotation:15.8,x:232.2,y:74.2},0).wait(1).to({rotation:13.8,x:205.8,y:66.2},0).wait(1).to({rotation:12,x:181.3,y:58.7},0).wait(1).to({rotation:10.3,x:158.4,y:51.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:8.8,x:137.1,y:45.3},0).wait(1).to({rotation:7.3,x:117.6,y:39.3},0).wait(1).to({rotation:6.1,x:99.7,y:33.9},0).wait(1).to({rotation:5,x:83.6,y:29},0).wait(1).to({rotation:3.8,x:69.1,y:24.6},0).wait(1).to({rotation:3,x:56.4,y:20.8},0).wait(1).to({rotation:2.1,x:45.4,y:17.4},0).wait(1).to({rotation:1.5,x:36,y:14.6},0).wait(1).to({rotation:0.8,x:28.4,y:12.3},0).wait(1).to({rotation:0.5,x:22.5,y:10.4},0).wait(1).to({rotation:0.1,x:18.2,y:9.2},0).wait(1).to({rotation:0,x:15.6,y:8.4},0).wait(1).to({x:14.9,y:8.1},0).wait(1).to({x:30.5,y:23.7},0).wait(1).to({x:45.6,y:38.7},0).wait(1).to({x:60.1,y:53.2},0).wait(1).to({x:74.1,y:67},0).wait(1).to({x:87.4,y:80.3},0).wait(1).to({x:100.2,y:93.1},0).wait(1).to({x:112.5,y:105.3},0).wait(1).to({x:124.1,y:116.9},0).wait(1).to({x:135.2,y:127.9},0).wait(1).to({x:145.7,y:138.4},0).wait(1).to({x:155.7,y:148.3},0).wait(1).to({x:165.1,y:157.7},0).wait(1).to({x:173.9,y:166.4},0).wait(1).to({x:182.2,y:174.7},0).wait(1).to({x:189.8,y:182.3},0).wait(1).to({x:197,y:189.4},0).wait(1).to({x:203.5,y:195.9},0).wait(1).to({x:209.5,y:201.9},0).wait(1).to({x:214.9,y:207.2},0).wait(1).to({x:219.7,y:212},0).wait(1).to({x:224,y:216.3},0).wait(1).to({x:227.7,y:220},0).wait(1).to({x:230.8,y:223.1},0).wait(1).to({x:233.4,y:225.6},0).wait(1).to({x:235.4,y:227.6},0).wait(1).to({x:236.8,y:229},0).wait(1).to({x:237.6,y:229.9},0).wait(1).to({x:237.9,y:230.2},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:-2.1},0).wait(1).to({rotation:-3.4},0).wait(1).to({rotation:-4.6},0).wait(1).to({rotation:-5.9},0).wait(1).to({rotation:-7.1},0).wait(1).to({rotation:-8.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-9.6},0).wait(1).to({rotation:-10.9},0).wait(1).to({rotation:-12.1},0).wait(1).to({rotation:-13.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-14.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-12.3,x:218.8,y:211.8},0).wait(1).to({rotation:-10.1,x:200.4,y:194.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-7.9,x:182.7,y:177.2},0).wait(1).to({rotation:-5.8,x:165.9,y:161.1},0).wait(1).to({rotation:-3.9,x:149.9,y:145.7},0).wait(1).to({rotation:-2.1,x:134.6,y:131.1},0).wait(1).to({rotation:-0.3,x:120.2,y:117.1},0).wait(1).to({rotation:1,x:106.5,y:104.1},0).wait(1).to({rotation:2.6,x:93.6,y:91.6},0).wait(1).to({rotation:4.1,x:81.4,y:80.1},0).wait(1).to({rotation:5.5,x:70.1,y:69.1},0).wait(1).to({rotation:6.8,x:59.5,y:59},0).wait(1).to({rotation:8,x:49.7,y:49.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:9.1,x:40.7,y:41},0).wait(1).to({rotation:10.1,x:32.5,y:33.1},0).wait(1).to({rotation:11,x:25.1,y:25.9},0).wait(1).to({rotation:11.8,x:18.4,y:19.6},0).wait(1).to({rotation:12.5,x:12.6,y:13.9},0).wait(1).to({rotation:13.3,x:7.4,y:9},0).wait(1).to({rotation:13.8,x:3.1,y:4.9},0).wait(1).to({rotation:14.1,x:-0.3,y:1.6},0).wait(1).to({rotation:14.5,x:-3,y:-0.9},0).wait(1).to({rotation:14.8,x:-5,y:-2.8},0).wait(1).to({x:-6.1,y:-3.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:15,x:-6.5,y:-4.3},0).wait(4).to({scaleX:1,scaleY:1,rotation:14.8,y:-4.4},0).wait(1).to({scaleX:1,scaleY:1,x:4.3,y:12.5},0).wait(1).to({x:14.8,y:28.9},0).wait(1).to({scaleX:1,scaleY:1,x:24.8,y:44.7},0).wait(1).to({x:34.4,y:59.7},0).wait(1).to({x:43.6,y:74.1},0).wait(1).to({x:52.4,y:87.8},0).wait(1).to({x:60.8,y:100.9},0).wait(1).to({x:68.7,y:113.3},0).wait(1).to({x:76.2,y:125},0).wait(1).to({x:83.2,y:136},0).wait(1).to({x:89.8,y:146.4},0).wait(1).to({x:96,y:156.1},0).wait(1).to({x:101.8,y:165.1},0).wait(1).to({x:107.2,y:173.5},0).wait(1).to({x:112.1,y:181.2},0).wait(1).to({x:116.6,y:188.2},0).wait(1).to({x:120.6,y:194.6},0).wait(1).to({x:124.3,y:200.3},0).wait(1).to({x:127.5,y:205.3},0).wait(1).to({x:130.3,y:209.6},0).wait(1).to({x:132.6,y:213.3},0).wait(1).to({x:134.6,y:216.3},0).wait(1).to({x:136,y:218.7},0).wait(1).to({x:137.1,y:220.3},0).wait(1).to({x:137.8,y:221.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:15,x:137.9,y:221.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.3},0).wait(1).to({rotation:10,y:221.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:7.8,y:221.6},0).wait(1).to({rotation:6,y:221.7},0).wait(1).to({rotation:4.3,y:221.6},0).wait(1).to({rotation:3,y:221.7},0).wait(1).to({rotation:1.8,y:221.6},0).wait(1).to({rotation:1,y:221.7},0).wait(1).to({rotation:0.3,y:221.6},0).wait(1).to({rotation:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:0.6,x:130.2,y:211.2},0).wait(1).to({rotation:1.3,x:122.5,y:200.7},0).wait(1).to({rotation:2.1,x:114.7,y:190.3},0).wait(1).to({rotation:2.8,x:107,y:179.8},0).wait(1).to({rotation:3.6,x:99.3,y:169.4},0).wait(1).to({rotation:4.3,x:91.5,y:158.9},0).wait(1).to({rotation:5.1,x:83.8,y:148.4},0).wait(1).to({rotation:5.8,x:76.1,y:138},0).wait(1).to({rotation:6.6,x:68.4,y:127.5},0).wait(1).to({rotation:7.3,x:60.6,y:117.1},0).wait(1).to({rotation:8.1,x:52.9,y:106.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:8.8,x:45.2,y:96.2},0).wait(1).to({rotation:9.6,x:37.5,y:85.7},0).wait(1).to({rotation:10.3,x:29.7,y:75.3},0).wait(1).to({rotation:11.1,x:22,y:64.8},0).wait(1).to({rotation:11.8,x:14.3,y:54.4},0).wait(1).to({rotation:12.6,x:6.6,y:43.9},0).wait(1).to({rotation:13.3,x:-1,y:33.4},0).wait(1).to({rotation:14.1,x:-8.7,y:23},0).wait(1).to({regY:0.1,scaleX:1,scaleY:1,rotation:15,x:-16.4,y:12.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:14.8,x:-13.1,y:29.1},0).wait(1).to({x:-9.9,y:45},0).wait(1).to({x:-6.8,y:60.2},0).wait(1).to({x:-3.9,y:74.8},0).wait(1).to({x:-1,y:88.8},0).wait(1).to({x:1.4,y:102.2},0).wait(1).to({x:4,y:114.9},0).wait(1).to({x:6.5,y:127},0).wait(1).to({x:8.8,y:138.5},0).wait(1).to({x:11,y:149.4},0).wait(1).to({x:13.1,y:159.6},0).wait(1).to({x:15,y:169.3},0).wait(1).to({x:16.8,y:178.3},0).wait(1).to({x:18.5,y:186.7},0).wait(1).to({x:20.1,y:194.4},0).wait(1).to({x:21.5,y:201.6},0).wait(1).to({x:22.8,y:208.1},0).wait(1).to({x:24,y:214},0).wait(1).to({x:25.1,y:219.3},0).wait(1).to({x:26.1,y:224},0).wait(1).to({x:26.9,y:228},0).wait(1).to({x:27.6,y:231.4},0).wait(1).to({x:28.1,y:234.2},0).wait(1).to({x:28.6,y:236.4},0).wait(1).to({x:28.9,y:237.9},0).wait(1).to({x:29.1,y:238.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:15,y:239.1},0).wait(2).to({startPosition:0},0).wait(1).to({regY:0,scaleX:1,scaleY:1,rotation:13.6,x:64.4,y:229.6},0).wait(1).to({rotation:12.3,x:98,y:220.6},0).wait(1).to({rotation:11.1,x:130,y:212.1},0).wait(1).to({regY:0.1,rotation:10,x:160.3,y:204.1},0).wait(1).to({regY:0,rotation:8.8,x:189,y:196.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:7.8,x:216.1,y:189.1},0).wait(1).to({rotation:6.8,x:241.5,y:182.3},0).wait(1).to({rotation:6,x:265.3,y:176},0).wait(1).to({regY:0.1,rotation:5.1,x:287.5,y:170.2},0).wait(1).to({regY:0,rotation:4.3,x:308,y:164.6},0).wait(1).to({regY:0.1,rotation:3.6,x:326.8,y:159.7},0).wait(1).to({regY:0,rotation:3,x:344,y:155},0).wait(1).to({rotation:2.5,x:359.6,y:150.8},0).wait(1).to({rotation:1.8,x:373.6,y:147.1},0).wait(1).to({rotation:1.5,x:385.8,y:143.8},0).wait(1).to({regY:0.1,rotation:1,x:396.5,y:141.1},0).wait(1).to({regY:0,rotation:0.8,x:405.5,y:138.6},0).wait(1).to({regY:0.1,rotation:0.3,x:412.9,y:136.7},0).wait(1).to({regY:0,rotation:0.3,x:418.6,y:135.1},0).wait(1).to({regY:0.1,rotation:0,x:422.7,y:134.1},0).wait(1).to({x:425.2,y:133.4},0).wait(1).to({regY:0,x:425.8,y:133.1},0).wait(23));

	// ans_1
	this.ans_1 = new lib.Symbol6();
	this.ans_1.setTransform(-34.6,-16.6);

	this.instance_1 = new lib.Symbol6copy2("single",0);
	this.instance_1.setTransform(-34.6,-16.6);

	this.instance_2 = new lib.Symbol6copy("single",1);
	this.instance_2.setTransform(109.9,209.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ans_1}]}).to({state:[{t:this.instance_1,p:{x:-34.6,y:-16.6}}]},91).to({state:[{t:this.instance_1,p:{x:-23.7,y:0.4}}]},1).to({state:[{t:this.instance_1,p:{x:-13.2,y:16.8}}]},1).to({state:[{t:this.instance_1,p:{x:-3.1,y:32.5}}]},1).to({state:[{t:this.instance_1,p:{x:6.4,y:47.5}}]},1).to({state:[{t:this.instance_1,p:{x:15.6,y:61.9}}]},1).to({state:[{t:this.instance_1,p:{x:24.4,y:75.6}}]},1).to({state:[{t:this.instance_1,p:{x:32.7,y:88.7}}]},1).to({state:[{t:this.instance_1,p:{x:40.6,y:101}}]},1).to({state:[{t:this.instance_1,p:{x:48.1,y:112.7}}]},1).to({state:[{t:this.instance_1,p:{x:55.2,y:123.8}}]},1).to({state:[{t:this.instance_1,p:{x:61.8,y:134.1}}]},1).to({state:[{t:this.instance_1,p:{x:68,y:143.8}}]},1).to({state:[{t:this.instance_1,p:{x:73.8,y:152.9}}]},1).to({state:[{t:this.instance_1,p:{x:79.1,y:161.2}}]},1).to({state:[{t:this.instance_1,p:{x:84,y:168.9}}]},1).to({state:[{t:this.instance_1,p:{x:88.5,y:175.9}}]},1).to({state:[{t:this.instance_1,p:{x:92.6,y:182.3}}]},1).to({state:[{t:this.instance_1,p:{x:96.2,y:188}}]},1).to({state:[{t:this.instance_1,p:{x:99.4,y:193}}]},1).to({state:[{t:this.instance_1,p:{x:102.2,y:197.3}}]},1).to({state:[{t:this.instance_1,p:{x:104.6,y:201}}]},1).to({state:[{t:this.instance_1,p:{x:106.5,y:204}}]},1).to({state:[{t:this.instance_1,p:{x:108,y:206.4}}]},1).to({state:[{t:this.instance_1,p:{x:109.1,y:208}}]},1).to({state:[{t:this.instance_1,p:{x:109.7,y:209}}]},1).to({state:[{t:this.instance_2}]},1).wait(105));

	// ans_2
	this.ans_2 = new lib.Symbol5();
	this.ans_2.setTransform(-41.6,-11.7);

	this.ans_2_1 = new lib.Symbol5copy2();
	this.ans_2_1.setTransform(-41.6,-11.7);

	this.instance_3 = new lib.Symbol5copy("single",1);
	this.instance_3.setTransform(4.1,214.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ans_2}]}).to({state:[{t:this.ans_2_1,p:{x:-41.6,y:-11.7}}]},148).to({state:[{t:this.ans_2_1,p:{x:-38.2,y:4.7}}]},1).to({state:[{t:this.ans_2_1,p:{x:-35,y:20.5}}]},1).to({state:[{t:this.ans_2_1,p:{x:-32,y:35.8}}]},1).to({state:[{t:this.ans_2_1,p:{x:-29,y:50.4}}]},1).to({state:[{t:this.ans_2_1,p:{x:-26.2,y:64.3}}]},1).to({state:[{t:this.ans_2_1,p:{x:-23.5,y:77.7}}]},1).to({state:[{t:this.ans_2_1,p:{x:-20.9,y:90.4}}]},1).to({state:[{t:this.ans_2_1,p:{x:-18.5,y:102.6}}]},1).to({state:[{t:this.ans_2_1,p:{x:-16.2,y:114.1}}]},1).to({state:[{t:this.ans_2_1,p:{x:-14,y:124.9}}]},1).to({state:[{t:this.ans_2_1,p:{x:-11.9,y:135.2}}]},1).to({state:[{t:this.ans_2_1,p:{x:-9.9,y:144.8}}]},1).to({state:[{t:this.ans_2_1,p:{x:-8.1,y:153.8}}]},1).to({state:[{t:this.ans_2_1,p:{x:-6.4,y:162.2}}]},1).to({state:[{t:this.ans_2_1,p:{x:-4.9,y:170}}]},1).to({state:[{t:this.ans_2_1,p:{x:-3.4,y:177.1}}]},1).to({state:[{t:this.ans_2_1,p:{x:-2.1,y:183.7}}]},1).to({state:[{t:this.ans_2_1,p:{x:-0.9,y:189.6}}]},1).to({state:[{t:this.ans_2_1,p:{x:0.1,y:194.8}}]},1).to({state:[{t:this.ans_2_1,p:{x:1.1,y:199.5}}]},1).to({state:[{t:this.ans_2_1,p:{x:1.9,y:203.5}}]},1).to({state:[{t:this.ans_2_1,p:{x:2.6,y:207}}]},1).to({state:[{t:this.ans_2_1,p:{x:3.1,y:209.8}}]},1).to({state:[{t:this.ans_2_1,p:{x:3.6,y:211.9}}]},1).to({state:[{t:this.ans_2_1,p:{x:3.9,y:213.5}}]},1).to({state:[{t:this.ans_2_1,p:{x:4.1,y:214.4}}]},1).to({state:[{t:this.instance_3}]},1).wait(47));

	// ans_0
	this.ans_0 = new lib.Symbol4();
	this.ans_0.setTransform(-23.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.ans_0).wait(22).wait(1).to({x:-7.4,y:14.9},0).wait(1).to({x:7.5,y:29.8},0).wait(1).to({x:22.1,y:44.1},0).wait(1).to({x:36,y:57.8},0).wait(1).to({x:49.4,y:71},0).wait(1).to({x:62.2,y:83.7},0).wait(1).to({x:74.4,y:95.7},0).wait(1).to({x:86.1,y:107.2},0).wait(1).to({x:97.1,y:118.2},0).wait(1).to({x:107.7,y:128.6},0).wait(1).to({x:117.6,y:138.4},0).wait(1).to({x:127,y:147.6},0).wait(1).to({x:135.8,y:156.3},0).wait(1).to({x:144.1,y:164.5},0).wait(1).to({x:151.8,y:172.1},0).wait(1).to({x:158.9,y:179.1},0).wait(1).to({x:165.4,y:185.5},0).wait(1).to({x:171.4,y:191.4},0).wait(1).to({x:176.8,y:196.7},0).wait(1).to({x:181.6,y:201.5},0).wait(1).to({x:185.9,y:205.7},0).wait(1).to({x:189.6,y:209.4},0).wait(1).to({x:192.7,y:212.5},0).wait(1).to({x:195.3,y:215},0).wait(1).to({x:197.3,y:217},0).wait(1).to({x:198.7,y:218.4},0).wait(1).to({x:199.5,y:219.2},0).wait(1).to({x:199.8,y:219.5},0).wait(172));

	// Layer 6
	this.instance_4 = new lib.Bitmap1();
	this.instance_4.setTransform(-198.9,-215.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(222));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-198.9,-215.9,666.8,550);
p.frameBounds = [rect, new cjs.Rectangle(-198.9,-215.9,630,550), new cjs.Rectangle(-198.9,-215.9,594.7,550), rect=new cjs.Rectangle(-198.9,-215.9,584,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-198.9,-215.9,593.7,550), new cjs.Rectangle(-198.9,-215.9,607.5,550), new cjs.Rectangle(-198.9,-215.9,619.6,550), new cjs.Rectangle(-198.9,-215.9,630,550), new cjs.Rectangle(-198.9,-215.9,638.9,550), new cjs.Rectangle(-198.9,-215.9,646.1,550), new cjs.Rectangle(-198.9,-215.9,651.8,550), new cjs.Rectangle(-198.9,-215.9,655.8,550), new cjs.Rectangle(-198.9,-215.9,658.3,550), rect=new cjs.Rectangle(-198.9,-215.9,658.9,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.shape.graphics.f("#FFFFFF").s().p("AgYBqQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIAIAAQAOAAAMgKQAHgGAEgGIgBgBIAAAAIACgGIACgCIAAgBQAAgDgIgJIgBgBQAAgGAEgGIACgCIAEAFQADAGAIAAIADAAQALgBAHgJIAIgNQAGgJAIAAQAHAAAFAKQADAIAAAIQAAAFgEAFQgDAGgDAAQgEAAgHgEQgJgEgEgFQgIAOgJACIgOAIIgCAIIgHAOQgHAJgJAFIgGABQgIAAgOgHgAAdBFIABgBIgBAAgABFAmIgCADIAQAIQAAgEgEgFQgEgEgDgBQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABgAkwBqQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIAIAAQAOAAAOgKQAMgLACgLQAAgDgIgJIAAgBQAAgIADgEIACgCQABAAADAFQADAGAIAAIAEAAQAMgBAJgDQAJgBAQgIIgdgHIgFAAIgFADQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgFAIgHQAEgDAFAAIADAAIAmALQANADAJAAIADgBIAAABQAAACgDAEIgEAGQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgMgBQgGAAgIACIgmARIgMACIgDABIgCAAIgDAAIgFgBIAAACQAAAJgCAFQgIAUgPAIIgIABQgIAAgOgHgADGBvQgIgEgDgFIAAgBQACgEAHgGQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAEAGAHAEIAAACIgJAKIgBAAIgBAAgAmFBEQAAgTAJgOQADgEABAAIABABIgCAFQgGAMAAAKQAAAMAKAGQAIAGANAAQALAAARgHQAPgGAEgEIAAgBQAAgCgPgCQgSgCgCgEIgBgIQAAgPAOgNQAMgMALAAQAHAAAAAHQAAAFgDAEIgBACIgCgBQgCgCgCAAQgHAAgKAHQgKAHgBAGQABAGAQACIAPACQAFADAAAGQAAANgVAMQgUALgQAAQgiAAAAgdgACaBDQgNgFAAgOQAAgLAFgJQACgEACAAIABABIgBAEQgDAFAAAFQAAAIAMAFQAJAEAUABQAYgBATgFQASgGAIgFIACgBQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAFADAEQACADAEABIACAAQAOgBAOgHQgEgFgLgCQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgIADgDQAKgHAKAAQAKAAAHAHQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAJgIAHQAIAHAIABIACAAQAGgBADgBQAEgBAAgCIgGg2IgCgOIAAgCQAAgCADgGQADgGACAAIABACQACAGADAFIABACIAAABIgEAHIAFAwQAAAPgHAKQgFAGgIABIgBAAIgCAAIgCAAQgJgCgGgDQgGgFgEgGQgMALgGACQgHADgIAAIgBAAIgCAAIgBAAQgNAAgDgOQgNAGgLAEQgWAGgUAAQgTAAgNgEgAF/BBQAAgLgEghIgDgjQAAgGAFgKIADgDQABAAAAAEIADAeQACAYAAAPQAAAOgCAHQgCAIgCAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBgAg8BBQgEgEAAgGQAAgJAHgOQAHgNAEAAQAEAAAFAEQAKAIAAALQAAAGgDAHQgEAOgQAAQgGAAgEgEgAgyAlQgHAEAAAHQAAACADACQADADADAAQAJgBAEgFIABAAIgBgBQgFgMgJAAgAh9BBQAAgLgEghIgDgjQAAgGAFgKIADgDQABAAABAEIACAeIACAnQAAAOgCAHQgCAIgCAAQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBgAgBAWIAAgFQABgFAAAAQABAAAAAAQAAAAAAABQABAAAAABQAAABAAAAIAAACQAAAEAEAAIAAAAQAEgBACgFQACgHACAAQAAAAAAAAQAAAAABABQAAAAAAABQAAABAAABQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAABQAGgBAAgFQABgGACABQACgBAAAIIgBAGQgDAHgHAAIgDAAIgBAAQgFAJgGgBQgFAAAAgJgAkYAQIABgFIAFgEIAXgLQABgBAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAEgDADIgbAOIAAAAIAAgBgAgBAJIABgFIAAgDIAdgMIAAABQgBAFgCACIgDACIgXALgAi9AJQgHgEgEgFIAAAAIAIgKIACgBIAMAKIAAABIgKAJIAAAAIgBAAgAC6AAQAAgFAEgHQAEgJADABQADgBAEAEQADAFAAAFIgBAHQgDAHgIgBQgJAAAAgGgADAgIIgBAEQAAAEAFgBIAEgBQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAAAIgDgEQgCgDgDAAIgDACgAA1AEIABgEIAFgDIAXgOQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAHgDACIgbAMIAAABIAAgBgAEeADIABgEIAFgDIAXgOQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAHgDABIgaAOgAglADIgJgGIgHAGIgDAAQgGgDgEgEIAAgCIAJgKIACABIAJAHIAHgHQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIAJAJQABAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIgIAIIgBAAIgBAAgAjKgdQAAgFAEgIQAEgIADAAQADAAAEAEQAEAEAAAFQAAAEgCAEQgCAIgJAAQgJAAAAgIgAjDgmQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAABQAAADAFAAIAFgBQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQgDgDgCAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABAAAAgAg/gdQAAgDACgDIAEgEIAXgMIABAAQAAAGgDADIgaAOgAiNgeIAAgBIABgEIAFgGIABAAIgBgBQgGgCAAgEIAAgBQAAgJAMgKQADgDADAAQAFAAAAAFIgBAHIgCACIgCgBIgDgCQgEAAgCACQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQAAACAFACIAHACIABAAQAGgCADgDIACgBIABABIgBADQgCAEgCABQgLAGgOALgAg/gpQAAgFACgCIAEgDIAXgOIABABQAAAHgDABIgaAPgAFSgtQgCgCAAgDQAAgGAEgHQAEgIACAAQAEAAADAEQAEAFAAAFIgBAHQgDAIgJAAQgDAAgDgDgAFWg6IgCADQAAAEAFAAQAHAAAAgDQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQgDgCgCAAIgDACgAiUhIIAEgCQAOgJAFgHQgGgFAAgEQAAgDADgFQAEgFAEAAQAFAAABAIIgCAKIACACQAAADgCADIgBABIgDgCQgGAJgKAFQgFACgEAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBgAh+hlIAAAAIAFAEIABgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAgBABg");
	this.shape.setTransform(-104.1,120.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ap9C9IAogoIApAoIgpApgAI6DbIAAj0IA0AAIAAD0gAFCDbQgOAAgLgHQgJgHgMgNIgSAbQgrAAgwgbIgUAbQghAAgggZIgDAZIhOAAQgFAAgIgCQgHgCgGgFIgVgWIgTAfIhEAAQgKAAgJgFQgHgDgIgGIgOgQIgUAeIiMAAQgzAAgcgZQgbgYAAgwQAAgUAIgdIAngIIAEADQgGAYAAASQAAAZAQAMQAPAMAoAAIB2AAIAAheIA0AAIAABVQALAJATAAIA2AAIAAheIA0AAIAABWQALAIAQAAIAiAAIALhbIA0AAIgLBQQATAKAZAAIALhaIAyAAIgJBTQAZAHAhABQgHgzgIguIA0gLQAJAxAGAzQAKAIAUAAIAvAAQAlAAAVgFQAWgFAYgLQgcgSgSgGQgQgFgWAAQgRAAgYAHIgEgCIAAg1QAbgNAYABQAagBAfATQAfAQAxArIgMAuQgnAXgnALQgkANgwAAgAptCMIgGi1IA9AAIgGC1gAknAUIggAaIgggmIArghIAXAaIAggYIAgAkIgpAigAhagLIAqgjIAgAnIgpAhgABjgUIBiglIAAAZIhiAjgAGZgmQgIgIABgKQAAgPAMgPQAOgQAGABQAKAAAKALQAKAMAAANQAAANgMALQgMAKgNAAQgKAAgIgHgAGrhKIgDAEQgBADAAAEQAAAFAIABQAMgBAAgEQAAgDgEgGQgGgEgDAAgAImgwIAAgcIAVABQgIgKAAgKQAAgNAIgPQASgGAOAAQANAAANACIgDAaQgMgCgMAAIgNABIAAAEQAAAPAHAIQAYgBAMgEIACABIAEAaQgRAFggAAgAlihfIBiglIAAAZIhiAkgAhThaQgIgIAAgKQAAgPANgPQAOgPAGAAQAKAAAJALQALALAAAOQAAAOgMAKQgMAKgMAAQgLAAgIgHgAhBh+IgDAFQgBACgBAEQAAAGAJgBQAMAAgBgEQABgCgFgGQgFgFgDAAgAIRjAIBhglIAAAYIhhAmg");
	this.shape_1.setTransform(-105.3,-84.7);

	this.replay = new lib.Symbol27copy();
	this.replay.setTransform(-174.2,122.3,1,1,0,0,0,19.4,15.9);

	this.instance = new lib.LV1_U1_L1_Activity_P_img_21();
	this.instance.setTransform(-212.9,-157.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFEFD").s().p("AMFB7QgIgIAAgNQAAgMAIgIQAHgIANAAQAMAAAIAIQAHAIAAAMQAAANgHAIQgIAJgMgBQgNABgHgJgAC1BrQgagaAAgqQAAgpAagaQAagZAoAAQAoAAAZAZQAYAaAAAnQAAAtgdAbQgZAWglAAQgnAAgZgYgADUgBQgKAOAAAZQAAAbAMARQAMARAUAAQATAAANgRQAMgRAAgbQAAgYgKgPQgMgTgWAAQgWAAgMATgAghBrQgWgaAAgpQgBgpAYgbQAXgZAfAAQAkAAAPAXIAAAAIAAhlIAtAAIAADQIACAyIgoAAIgCgcIgBAAQgIAPgPAJQgQAJgTgBQgfAAgVgYgAAAgBQgKAOAAAZQAAAaAKAPQAMAQAVAAQAOAAALgJQAKgIAEgPQABgGAAgHIgBgnQgDgLgKgJQgLgJgPAAQgVAAgMARgAJTBrQgYgYAAgqQAAgnAWgZQAYgeApAAQAoAAAUAdQARAXAAAgQAAANgCAHIh3AAQABAXAQAMQAPALAXAAQAcAAAVgIIAHAfQgcALgiAAQgrAAgZgYgAJxgHQgJAKgCARIBOAAQABgQgIgKQgKgQgUAAQgTAAgLAPgAnjBrQgZgYAAgqQAAgnAWgZQAZgeAoAAQAoAAAVAdQAQAXAAAgIgBAUIh4AAQABAXAQAMQAPALAXAAQAcAAAWgIIAGAfQgcALgiAAQgrAAgYgYgAnGgHQgJAKgCARIBPAAQAAgQgHgKQgKgQgUAAQgTAAgMAPgAHpB/IAAhkQAAgsgiABQgMAAgKAIQgJAHgEAJQgCAGAAAIIAABpIgtAAIAAh9QAAgjgCgQIAoAAIACAbIABAAQAHgNANgHQARgLAUAAQAbAAAQARQAUAVAAAkIAABqgAjWB/IAAkCIAuAAIAAECgAk0B/IAAkCIAuAAIAAECgApxB/Igah0QgJglgEgnIgBAAQgGAlgLAnIgcB0IgxAAIg8j1IAwAAIAXBxIAQBTIABAAIAShUIAbhwIAvAAIAYByQAKArAFAmIABAAQAHgoAKgrIAahwIAtAAIhCD1gAMHAzIgGipIAvAAIgGCpg");
	this.shape_2.setTransform(96.3,-78.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AibBBQAHgCAGgEQAIgGAEgIIACgEIgBgEIghhPIAZAAIAVA+IAAAAIATg+IAYAAIgXA5QgQAugOAMQgLAJgNACgABFBLIAFgRQAMAHANAAQAaAAAAgbIAAgIIgBAAQgIANgRAAQgRAAgKgMQgLgMAAgTQAAgTAMgNQAMgNAQAAQASAAAIAPIAAAAIABgMIATAAIAABJQAAAbgNANQgNALgVAAQgVgBgKgGgABagUQgGAIAAAMQAAALAFAIQAGAHAKAAQAOAAAEgNIABgIIAAgSQgFgPgNAAQgKABgGAHgACsAmQgIgIAAgKQAAgRAOgGQAOgJAZAAIAAgBQAAgQgSAAQgOABgKAGIgEgPQANgHATgBQAkAAAAAmIAAAeIABAVIgUAAIgBgKIgBAAQgJAMgRAAQgNAAgHgIgAC6ARQAAANANAAQAOAAAEgNIAAgEIAAgMQgfAAAAAQgAgWAmQgHgIAAgKQAAgRAOgGQANgJAXAAIAAgBQAAgQgSAAQgMABgKAGIgEgPQANgHARgBQAkAAAAAmIAAAeQAAANACAIIgVAAIgBgKIgBAAQgIAMgQAAQgMAAgIgIgAgHARQAAANAKAAQAOAAAEgNIABgEIAAgMQgdAAAAAQgAjwAmQgHgIAAgKQAAgRAOgGQANgJAZAAIAAgBQAAgQgSAAQgOABgKAGIgEgPQANgHATgBQAkAAAAAmIABAzIgUAAIgBgKIgBAAQgJAMgRAAQgMAAgIgIgAjhARQAAANAMAAQAOAAAEgNIAAgEIAAgMQgeAAAAAQgAFuAsIAAgwQAAgWgQgBQgNAAgFAOIgBAHIAAAyIgWAAIgBhWIAUAAIABANIAAAAQAJgQATAAQANAAAJAJQAKAKAAAUIAAAygAEGAsIAAhWIAXAAIAABWgAkgAsIAAh/IAXAAIAAB/gAmEAsIAAh2QAOgDAUAAQAYAAANAKQALAKAAARQAAASgKAKQgNAMgaAAIgKAAIAAAsgAltg7IAAApQACABAIAAQAbAAAAgWQAAgVgZAAgAEJg6QgEgEAAgFQAAgFAEgDQADgEAGAAQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAQgGAAgDgDg");
	this.shape_3.setTransform(100.2,125.5);

	this.instance_1 = new lib.LV1_U1_L1_Activity_P_img_11();
	this.instance_1.setTransform(-212.9,-157.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.replay,p:{x:-174.2}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.replay,p:{x:168.7}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-212.9,-157.9,424,314);
p.frameBounds = [rect, rect];


(lib.path200 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgtnAq+MAAAhV6MBbOAAAMAAABV6g");
	mask.setTransform(557.8,446.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B734E").s().p("AjWCdQAAgMALgBQA3gGBFgjQAvgYBAgtQB6hQAlhwQAEgLALADQAMADgEALQgmBzh2BSQhDAyg4AcQhLAmg/AHIgBAAQgKAAAAgLg");
	this.shape.setTransform(306.9,672.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3B734E").s().p("Ah+C7QgBgQAKgKIAXgRQA5gmAmgvQAsg0Aag9QAag/AGhFQABgLAMAAQAMAAgBALQgLB3g9BeQgfAvgnAoQgHAGgrAcQgmAcAAALQABALgMAAQgMAAAAgLg");
	this.shape_1.setTransform(278.2,693.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3B734E").s().p("Ah1C2QgIgIAJgIQBphYAqg8QBGhcgEhkQgBgMAMAAQANAAAAAMQAEBphHBhQgvBAhqBbQgEAEgEAAQgFAAgFgFg");
	this.shape_2.setTransform(245.8,689.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B734E").s().p("ABDCTQgHgKALgGQA0gZAYgQQAogcATghQARgdgDgSQgHgxgoAMQgZAIgaAZQgVAWgNAeQgFAMgEAPQgEAKgLgCQgLgDADgMIAJgcQASg9gQgiQgghAgwAxQgnAmgNAwQgDAIgKgCQgKgBgBgIQgCgxgGgYQgNgrgigGQgngHgWAyQgQAjgBAtQgBAKgMAAQgMAAABgKQACg2ATgqQAag4AvADQAxAEAWAyQAIASAEAaQANgYATgVQAtgyAtAUQArATABBEIAAANQATgXAYgOQAcgQAZACQAdACAOAbQAhA8hCBBQgqAphOAmQgDACgDAAQgGAAgEgHg");
	this.shape_3.setTransform(267.9,663.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B734E").s().p("ACQCLQgGgKAKgGQBWgpAngsQAXgXADgeQgZhGg2AgQgPAJgPASQgIAIgQAWQgFAHgIgCQgJgCAAgHQgEhHgBgGQgLgtgqAIQgiAGgYAZQgYAZgFAiQgCAJgJAAQgKgBgCgIQgJgvgJgVQgQgmgmAMQgfAJgOAkQgJAYgDAqQgBAIgKABQgJACgEgIQgOgmgJgOQgSgegZgDQghgFgNAXQgKARACAcQAEA7A4A+QAIAJgJAJQgIAIgIgJQgpgtgSg0QgYhAAggqQAPgSAXgEQAWgEAXAKQAZALASAeIAIAOQAShTA/gJQAxgHASAoQAHAPAGAaQAKgUATgRQAlggAvgBQAyAAALAwQAEATAAAkIAQgSQAZgZAdgFQAagFAVAKQAXALAKAXQAYA5hCA8QgpAlhLAkIgGACQgGAAgEgHg");
	this.shape_4.setTransform(280.8,628.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3B734E").s().p("Ag0FRQgmgVgSgrQgFgLALgGQAKgGAEAKQAHAQAFAHQAGAKAKAJQAMATAXgDQAbANAHgjQAfgbgagjIgQgZIgYgYQgHgHAGgIQAHgJAJAFIAeASQAVAJAPgBQA3gGgEgjQgDgZgZgYQgQgPgYgNQgPgHgcgMQgLgEADgLQADgKAKACQAmAHAegeQAegcgMgmQgKghghgPQgfgOgfAJQgLADgEgMQgDgLALgEQAjgLARgoQAQglgLgmQgOg1giAdQgYATgZAsQgFAJgKgEQgKgEADgKQAKglgBgSQgDgjgjgDQgLAAAAgNQAAgMALABQAuADAKAqQAEANAAAPQAQgTATgPQAzgoAVA2QAUA1gTA3QgKAfgTATQAUADAUALQAuAaAFAwQAFAwgnAgQgQAOgTAGQAbAOARANQAxAngJAvQgKAyg4gBQgTgBgVgGQAOAUAHASQAVA1gmAgQgVASgUAAQgSAAgTgLg");
	this.shape_5.setTransform(333.3,664);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3B734E").s().p("AmKB1QgogVgJgvQgKgxAlgaQAggZApANQAPAFALAJQACgZAOgVQAbgsA0AFQAuAEASAoQAKAYgFAXQAigKAnAJQAYAGAdANQgCgIABgLQABgrAlgTQAtgWApAcQANAJAKAMIAEgLQARglAmgFQAngGAZAgQAGAIAFAJQARgbAegPQA2gcA0AkQAuAfgGA4QgGA0gzAWQgLAFgGgLQgGgKAKgFQArgSADgqQACgtgpgVQgpgVgnAZQgiAWgLApIgBAFQgDALgMgDQgLgDADgMIABgGQAHgggdgSQgfgSgbAaQgVAUAEAdQABAIAEAJQACAKgLADQgLACgEgLIgEgPQgGgSgLgNQgSgWgcgBQgngCgNAkQgQAhAhAYQAJAGgFAKQgGALgKgGQg0ghgggJQgzgNgpAYQgHAFgIgHQgHgHAGgGQAWgfgUgfQgUgfgnAJQgfAIgNAeQgKAbAIAeQADAMgMADQgLADgEgLQgKgcgjgGQgjgGgSAZQgQAXALAeQAKAbAZAOQAKAFgGALQgEAGgGAAQgDAAgDgCg");
	this.shape_6.setTransform(406.5,693.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#203E34").s().p("AibHyQitgMlSgwQhSgLgugJQhGgNg3gRQhoghg4g4QhLhKgPiEQgKhaASiVQAJhNAKgpQARhAAggqQAVgbAcgQQAegSAfABQAGAAAIAFIANAIQAqAOAhAhQAhAgAQArQAHghAkgOQAkgOAcATQAphZBeguQBegvBhAUQAnAJATARQAfAbgCAvQgCAtgdAiQgYAcgqAWIgjAQIAPgDQAhgGAXAOQAZARADAkQACAhgUAbQgQAXgeASQgTAMglARQAXgKAYASQAWASAFAbQAEAVgJAcQgFASgPAgQARgYAiABQAhABAUAXQATAVADAhQADAdgLAeQgJAZgUAbQgLAQgbAeQAhgbASgLQAdgTAbgHQAggJAeAKQAhAJAQAaQAIAOAEAYIAHAoQAGAWANAPQAOASATAAQARgbAOhkQAMhQAogYQAlgVAqAbQAqAcgEArQAoguBEAHQBEAHAdA0QgLgcAAgXQABgdAUgKQAZgNAXAbQAUAXAIAjQAYgpA3AHQA2AGANArIgOgyQAegGAeAJQAeAIAWAWQgQggAMglQAMglAfgQQAggQAkANQAlANAOAgQAPAggRAkQgGANgJAKQARgHAUgCQAqgFAjASQAcggAQgPQAbgYAZgOQAegQAhgBQAigBAaARQAoAcABA4QABA2gjAnQgdAigzAWQgmAQg7ALQhZAShHACQglABhPgDQhMgCgoACQgtACg/AKIhtARQiNAVikAAQhhAAhrgIg");
	this.shape_7.setTransform(342.7,673.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#264F37").s().p("Au0KCQhFgDgngHQg7gJgqgXQgygbgdgvQgbgsAFgsQhOlNAblTQAEgwAJgZQAOgmAwguQBthqCLhEQCKhECWgUQCXgUCYAcQCXAcCFBJQA5AfAaAhQAQAUAMAfQAFATALAmQAnCNAKBQQAPB8gfBdQCshWDHgIQDGgICzBHQAcgoAxgbQAtgYA2gGQBdgKBwAsQBAAZAcAeQA0A5gFB7QgICxhVBbQgkAlg2AbQgsAWg9ASQhhAch8APQhUAKiOAIQmKAWmHAAQl1AAl0gUg");
	this.shape_8.setTransform(339.4,675.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3B734E").s().p("AjuB5QgtgpgEg6QgFg6AugoQApgiA0ALQAoAIAWAfQALgYAQgQQAcgdAkAFQAwAIAKBAQAMgPAQgJQAkgVAnASQAkAQAFAmQACAMgCALQAHgCAHAAQAcgBAVASQAVATACAcQADAegXAbQgIAJgJgJQgIgIAIgJQAhgmgkgfQgOgMgTAAQgSABgOAOIgEADQgIAJgIgJQgJgIAIgJIAEgDQASgSgIgZQgHgdgdgGQgagHgXARQgVAQgKAYQgEAKgKgBQgKgBAAgLQAAgYgBgKQgCgUgIgMQgagqgkAeQgbAXgNAmQgDAIgHABQgJACgDgHQgVgtgtgFQgugFgfAmQgcAjAIApQAHAoAiAgQAIAIgIAJQgFAEgEAAQgEAAgEgEg");
	this.shape_9.setTransform(693.9,700);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3B734E").s().p("AhTBsQgwgDgcgiQgfgkASgsQAQgpAqgHQAggGAZARQAHgWAQgSQAbgfAeAOQAgAOgBAmQgBAMgDAOQAUgJAUgDQAsgEAcAgQAWAYgGAfQgGAggeAPQgKAGgHgLQgGgLALgFQAlgRgUgfQACgbgdgCQgXgKgWAGQgTAEgWAQQgIAGgIgGQgIgGAFgHIACgDQAPgagDgeQg9ghgGBFQgBAHgGAEQgHADgGgGQgZgYgcAIQgdAHgJAeQgKAhAWAXQAUAWAiACQALAAAAAMQAAAMgKAAIgBAAg");
	this.shape_10.setTransform(761.3,702.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3B734E").s().p("AhPDPQgygKgPgyQgRg4AqgkQAagYAlgHQgHgIgDgKQgLgaARgaQAXglArABQASAAASAFQgOgagHgfQgRhIA+gCQAzgBAVBSQAPA6gEA9QgBAKgMAAQgMAAABgKQAFg/gSg0QgHgUgHgOQgRgkgiBKQAAAUAmAsQAGAIgGAIQgGAJgJgGQgsgegfAJQgpAHAMAmQgOAbAbAHQAJAEgBAKQgBAKgLAAQgmAAgbAQQggATgCAkQgBAuApAQQApAQAigcQAJgHAGAIQAJAJgJAHQgcAZgjAAQgLAAgLgCg");
	this.shape_11.setTransform(802.9,677.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3B734E").s().p("AieDAQg1gEgVg8QgVg7AhgrQALgPATgEQASgDATAGQAPAGAMAMIABgcQAEhBAqgUQAxgWAiAuQAIAKAGAMQACggAEgWQAOhUAvgMQARgFASAHQAQAGAMAOQATAWgBAiQAAALgCAMQAIgEAJgDQAggLARAbQATAcgMA0QgIAngVApQgFAKgKgGQgLgGAGgKQAXgwACgoQACgXgDgSQgogQgVAeQgGAGgIgEQgIgFACgJQAJgZACgXQAJg7g0AaQgfAFgFAGQgDAEgHAdQgMA3ABBCIAAADQABAKgLACQgLABgCgKIgIggQgFgTgGgNQgTgegbgDQgdgCgSAjQgVAoAZBaQADALgLAEQgLADgEgLQgLgggGgJQgPgXgHgBQgIgBgYASQgWARgEALQgGAMAGAYQAEARAPAOQAQAPAQABQAMABAAAMQAAALgKAAIgCAAg");
	this.shape_12.setTransform(840.5,644.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3B734E").s().p("Ai5CmQgzgagFg3QgFgyAmgcQAcgSAfAFQgZhOA1gVQAmgPAiANIANAGQgCgMABgLQAEgtAmgJQAqgLAcAnQAOATAJAcQAOgVAPgNQAggcAlAIQAeAHALAZQAMAagNAbQgFAKgKgGQgLgGAFgLQgahHgmAiQgQAGgIAOQgKALgNAaQgDAHgIgCQgJgBgCgHQgVhhgzASQgZAKABAdQAAAPANAiIABADQACALgKADQgLADgEgLIgBgCQgOgigqgDQgrgDgJAmQgDANAGATQACAKAJATQADAIgHAEQgHAFgHgEQgtgUgZApQgXAoAZAmQASAaAhAJQAcAIAigHQALgCAEAMQADAMgMACQgRADgPAAQglAAgfgQg");
	this.shape_13.setTransform(847.2,684.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#203E34").s().p("AkfGeQgagEg4gMQg2gLgdgEQgtgFg4ACQgiABhEAGIkZAYQgoADgYgFQgjgIgNgZQgIgOAAgcQgBgjgBgJQgDgMgJgUQgKgWgCgKQgFgSAGgRQAGgSAPgFQgSgWAFgeQAFgfAYgPQALADAeADQAZADAPAFQAUAHAMASQANATgIASQAUgGAUAKQAUAKAIAUQgBg4AggXQASgNAYAGQAZAHAEAVQgDgdAjgMQAigLAYAUQAVASAJAhQAGAWADAoQAZgUAiAIQAjAIAOAdQANgbAfgKQAggKAaAQIAaAQQAQAIALgHQAHgEAIgRQAUgnAggLQASgGATAFQAUAGAJAPQASgcAhgOQAggPAiAFQAhAFAbAXQAbAYAKAgQAPgoAhgdQAigcArgJQAqgIArAOQATAHAQAJIgJgMQgTgbgBgfQgCggATgaQASgcAegIQAegJAeASQAeARAFAdQAEgXASgUQASgUAYgIQgrgKgMgzQgLgzAjgcQAigcAwAWQAvAVABAtQAMgMARgDQARgEAPAGQgJgRgDgLQgFgRAEgNQAFgPASgDQATgEAFAOQgGgQAGgSQAGgSAPgKQAPgJATACQATADAMAMQgHg1AqgsQArgsA2AFQATACAQAJQASAJAIAQQAJASgEAgQgFAngUAkQgTAjgeAbQAoAGAiAbQAeAXAPAgIgNgdQA0ACApAqQAnAnANA1QALAugGA7QgDAlgOBFQgJAsgHAWQgMAkgTAYQgmAwhNAOQgzAJhbgFQmVgYmSAfQhVAHgkABIgiABQgvAAgogFg");
	this.shape_14.setTransform(773.2,691.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#264F37").s().p("AvuHgQgogGgbgUQgagUgOgiQgNgfAAglQAAgfAIglIALgnIgLARIATgtIgIAcQA3hTBsgrQBpgqCAAFQBuAFBrAiQBrAiBdA8QgLgZAJgeQAIgcAWgUQAhgeBFgRQB6geBTASQA2AMAqAeQAtAhAVAuQACi8Axi5QAMgqAPgSQATgXAhgCQAggDAXATQAXATADAgQACARgEAOQAagqAsglQAuglBGgjQDShoDpgVIAVAAQALAAAIAFQAPAHAGAVQAEAOABAZIAULIQABAYgHAMQgJANgZAIQh4ApieAVQhgANi9AMQkzAUibAGQj/AJjNgJIh6gHQhHgDgzABQg2ABhbAIQhqAIgnACIgeABQgZAAgTgDg");
	this.shape_15.setTransform(763.4,680.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#486E22").s().p("AlgGLQg4gDgqgTQhAgcgkg/QgWglgGgnQgSgigIgVQgQgmgEggQgEgnALgjQAMgkAcgWQAugiBAAVQA9AUAgA0QgJgaAEgcQAFgdAVgRQAWgSAeAIQAUAGAJANQgBgQASgPQAagYAZAOQAZAPgBAiQgBAhgZARQAzgJAzAQQAzAQAlAiQgEgYgOgkIgXg+QgYhKAYgtQAagvA8ABQA/ABAYAwQAGhFBDgpQBCgpBBAZIARAHQAJADAIgBQAJgBAPgJIBng+QAIAbAiAZIA6ArQAhAgAJA0QAJAwgPAwQgMAqgeAtQgUAfgnAsQgyA6goAoQgzAzgyAjQhxBRihApQh6AgiyANQgrADggAAIgcgBg");
	this.shape_16.setTransform(786.2,680.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#507C26").s().p("AAEHnQgNgDg+gRQgwgNgegDQgqgFg2AGQgYAChIAMQhtARhzAJQg4AEgagHQglgKgdggQgbgdgPgnIgFgQQgMgcAAghIAAgFQgDgbgCgxIAIAtQAGgaAOgXQAYglArgUQArgTAsAHQgTgpgHgXQgKglAFgeQAHghAggUQAhgVAdAQIANAKQAJAFAGABQAKACAUgKQArgUAwgHQAwgGAvAJQAOgkALgTQARgcAYgNQAbgOAfAPQAfAPgEAdQAggNAiAOQAiANAPAfQgTgzADgzQAEg4AcgmQAhgqA5gFQA6gGAgAnQgLgSALgWQALgVAVgHQAUgHAWAHQAVAFASAPQgIgcAQgaQARgaAcgGQAcgFAZAUQAXARADAaQgDgoAQglQASgoAigTQAlgVArANQAsAOANAmQADAIAEAWQADATAFAKQAFAKAKALIASARQBCA/AYBhQAXBbgUBdQglCoieCOQh4BtiTAwQhhAghdAAQg5AAg4gMg");
	this.shape_17.setTransform(775.5,670);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#486E22").s().p("AqSHeQgugEgkgMQg7gOgcgKQgxgRgMgiQAGgggBgzIgChUQACguAQgkQATgqAigTQAlgUArAWQAYANAJARQgKhhAygbQAVgNAaAEQAaAEARASQAQAQACAaQABAagOAUQAegCAcATQAbATAJAeQADgrAIgaQAKgmAXgVQAagYAnAEQAoAFAIAhQARgaAbgQQAbgPAfgDQgYgQACgiQADghAZgRQAYgQAgAFQAeAFAXAUQgUgUAFggQAEggAYgSQAWgRAfgDQAdgCAaALQAZAIAaATQAQAKAfAZQgRgsADguQACgwAYgmQAZgnArgUQAsgVAsAJQAtAJAeAnQAfAogGAsQAKgwASgTQAOgOAUgBQAVgCALAOQAEgSAVgKQATgIAVAEQARAFASANQALAIATATQATgpAMgVQAUghAWgVQAbgYAigIQAkgJAeAPQAfAQAHAmQAIAngbAVQAaANAQAbQAQAagBAdQgBAdgRAaQgRAagbAMQAYAcgSArQgPAjgkAiQh2Bvg/A2QhoBahfA3QjFB0kRAtQjGAhk0ACIgVAAQgnAAgYgBg");
	this.shape_18.setTransform(776.8,650.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#507C26").s().p("AAGMSQglgEhPgLQhOgLgngEQhBgFhTABQgtABhmAFInyAaQggABgQAAQgbgBgUgHQg9gUgjhKQgZg0gOhaIAAgBQgaAKgZgaQgcgcAIgiQAIgfAegXQAagUAlgJQBVgVBTAgQgPggABgiQABgkAUgaQAVgbAkgGQAmgFAXAXQgahNABhNQAChSAihBQAlhHBFgqQBIgrBMAJQBPAJA2BAQAnAvAGA0QADgOAGgNQAQgiAegTQAegUAmABQAmAAAeAVQgFgSgMgeQgOghgEgOQgJgbABgYQACgcAPgSQAQgVAcAAQAegBALAWQBBg3BXgUQBUgTBSAXQgigqADg7QACg7AmgpQAkgoA6gKQA5gKAyAWQAyAXAgAwQAeAuAFA2QgCgWANgTQAOgVAVgHQAWgIAXAHQAXAIANATQgbiBAsh6QAIgXAPgNQASgQARAJQARAJACAhQAHBbgcBYQAdg8ARgeQAdgxAgggQAmglAwgRQA0gSAuANQAXAHAZAPQAQAKAbAUQAqAfAUAcQAcAmgJAkQATghAlgPQAlgQAlAKQAlAKAZAfQAZAgABAmIgBAbQgCARACAKQABALAFAOIAJAYQAiBcgfCgIgZCCQgMBJADA3QACAjALA9QANBEADAcQAGA/gIBQQgGAvgRBfQgGAggFAQQgHAbgNARQgaAmg3ASQglAMhCAGIqnA9Qh9ALhAADQgoABgkAAQg9AAg1gEg");
	this.shape_19.setTransform(777.5,658);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3B7522").s().p("AECD1Qh4gCiGgOQisgSgmgZQgVgOhlACIi5AHIBegZQBpgYA0gCQh4gOASgVQARgUA6AAQiFgkAfgVQAMgHAegCQAegCAZAFQgogyAVgJQADgCA7AAQgkg0AfgDQAcgEApAiQAnicAkAFQAYADAWBGQBVh+AcAuQAYAogeBmQArggAPAfQAMAYgIApQAZgIAKgBQAZgBAHAYQBXh6AmAcQAfAWgOBKQBXhEABAuQACAng/BiQClg7gaAsQgVAmhUAuQAcgOAvAAQAuABAQANQANAKgeAZQgQANgSAKQg6AHg4AEQgpACgeAAIgQAAg");
	this.shape_20.setTransform(423.1,509.3);

	this.instance = new lib.path20();
	this.instance.setTransform(558.2,602.9,1,1,0,0,0,194.6,50.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C1AA91").s().p("AM1HkIhDhCIhCBCMgo9AAAIAAi5IA6hIIg6hKIAAnvIA2g1Ig2hYIHYAAIAyAzIAzgzIJ5AAIBAAlIAlglIOcAAIBBAhIBEghIXfAAIAAAiIhBBCIBBBCIAAIlIhBBBIBBBDIAAB4g");
	this.shape_21.setTransform(557.8,602.7);

	this.instance_1 = new lib.path();
	this.instance_1.setTransform(557.8,602.7,1,1,0,0,0,193.5,48.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#563320").p("AC0sIIgCYSIllgBIAC4Sg");
	this.shape_22.setTransform(721.2,618.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9B5F2F").s().p("AizMJIAC4SIFlABIgCYSg");
	this.shape_23.setTransform(721.2,618.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#563320").p("ACysJIAAYSIlkAAIAA4Sg");
	this.shape_24.setTransform(393.5,618.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9B5F2F").s().p("AixMJIAA4SIFkAAIAAYSg");
	this.shape_25.setTransform(393.5,618.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4C952B").s().p("ADaEvQh4gDiEgOQiugRgmgZQgagSjWAKQjJAJgGgZQgKgsBmgaQAzgNA1gEQgrgHgmgOQhLgcAbgkQAdglA+gCQApgCBVARQAAiRAugKQARgDASARQARAPAGAVQAWhRA4g+QA9hDBJgJQBNgKBeA+QBiBABABqQBshXBaAGQBAAEAbAlQAPAWgWA9QgUA5goA4QA3gVAgAFQAdAFAEAYQADAXgUAdQgVAfgnAYQBdgiA3AJQAyAIgKAnQgIAhjAAcQiZAWhjAAIgXAAg");
	this.shape_26.setTransform(427.1,503.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#824916").s().p("AgPgPQAOgDAKgJQAFAdACAZIgXABQgBgVgHgWg");
	this.shape_27.setTransform(416.7,329.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#824916").s().p("AiVAXQgHgLAdgNQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIADAAQCVAGB6gdQgaAag1AIIhZAHQg3AFgnAAIgVABIgGAAQgKAAgBgBg");
	this.shape_28.setTransform(442.1,528.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#824916").s().p("AAAENQAAkYgFh2QgHiTgcj8IAAgBIAXgBQA6JBAAHAQgXANgOAXIgEkGg");
	this.shape_29.setTransform(425.1,478.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BA7547").s().p("AgQDqQgOiRACg+IAEhtQABhBgCguIgNhpQgHhAAJgqQAFgEAPgRIAMgPQgCBHANBSQAAABABABQAAAAAAAAQABABAAAAQABAAABAAIAAAEQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAaAAIgjAOQgBABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIAHBuQABAEADAAIAQgCIgUAGQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABIALE0IABABIgEABQgEABAAAEIAEAvQAAAEAEgBIAWAAIgWACQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAABQAAAAABABQANBWgNBXQgQAQgKATQAFhJgMiGg");
	this.shape_30.setTransform(339.4,384.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BA7547").s().p("AuEA6QAOgVAPgRQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAIGNgXQH1gYNngkIgCABIgOALIgfAVQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQhmgBkYAHQqiARq5A9g");
	this.shape_31.setTransform(428.4,424);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#563320").s().p("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");
	this.shape_32.setTransform(427.6,428.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9B5F2F").s().p("AhqIFIgCgDQAAo3g+nIIDggKQAJBoASCWIAfD9IA7H3IgCADQioAZhsABQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_33.setTransform(440.9,476);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9B5F2F").s().p("AhhgVQBhABBcgOQABAUAFAmIi8ALQAAgegHgag");
	this.shape_34.setTransform(428.1,328.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E5A370").s().p("AtoHiQgGgGAEgeQAFghAAgJQAAgfgCgYIgDgVQgBgNAHgGQAIgGAnACIAwgDQAEgBgBgDQAAgEgEAAIgtACQgcABgQgEQgKgCgGgKQgGgKAFgKQAFgJAMgCIAWgDQADAAAAgEQAAgDgEAAIgPAAQgJgBgFgEQgEgFgBgJIAAgQIgIjWIgCgdQAAgTAJgIQAHgFASgEIAagGIAzgQQABAAABAAQAAgBAAAAQABgBAAAAQgBgBAAgBQgBgEgDABIgZAIQgZAHgVADIgOADQgLACgDgBQgHgEgCgIIAAgPIgEgiQgDgWADgLQADgMARgHQAKgFATgGQABAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAgBAAIgtgBIgBABIAAgBQgIg9gEhmIAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBIADAAIACAAQCsgPDSgPQClgNDPgNQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIACgBIAagCQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABgBIEKgQQB1gHDbgJIFQgPIAEAvIACATQACANgCAFQgFAQgwAFIgiACQgDABAAADQAAAEAEAAQAegEAVABQATAAAEABQAJADACANQADAOgFAiIAAAwIACA3IAEAYQACASgCAGQgGAMgnADIg0ABQgEAAAAAEQABAEADAAIArgBQAaAAAPAFQANAEAEADQACADAEAOQACALAAAaIAHBJIADATQACAPgBAEQgEAJgPADQgHACgQAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAABAAAAQAAABAAABQAAABAAAAQABABAAAAQABAAABAAIAXABQARAAAFAEQAIAFACALIAAATQABAoAEAwQAGAzAGAkIADASQABAMgGAGQgDADgPADQgKgBgMAEQgBABgBAAQAAABgBAAQAAABAAAAQAAABABABQABADADgBIANgDQAYgCAJAaQAIAXgJAXQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAIgFgCIgBACQiWAFkzANQl4AQmtAWImTAWIg6ADIgWADIgDAAQgNAAgDgEg");
	this.shape_35.setTransform(429.7,376.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#483223").s().p("AADBZQirgEjNgOIiqgNQgZgWgPgUQgegmAwAJQA3ALHRghQHDghCSgXIAZAtQAXAugGAQQgeBMmeAAQhEAAhPgDg");
	this.shape_36.setTransform(745.5,439.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#153011").s().p("AwVPgQgTgVAFgwQgDAIgFAHQgOAXgfACQgeACgKgXQgFgNAFgbQAHgjALghQgOAQgXAMQgzAYgogdQgngeAJg4QADgUAIgPQgQAIgTAFQgzAMglgbQgmgcAIg3QAEgYAKgOIgQAIQghAOgcgCQghgDgXgbQgXgdANgcQAOgdA0gJQgTAAgTgHQgfgLgSgZQg3BEhkgEQhjgFgxhKQg3ASg5AAQgsAAgrgKQAPALABAeQACAxgmAMQgkALgjgdQgggbgHgpQgBAYAOAkQATAzACAHQAIAggMAeQgMAhgdAEQgvAGgjhQQANArguAdQguAcgmgaQglgZgCgyQgCgxAegjQhCgTgchYQgdhZAzgtQA8jSBliHQBsiUB5gNQBXgJDxhQQDfhKBqgBQBHgBBvg/QBPgsCFhiQCwiBAjgXQBwhLBCgTQKei8HiAPQD7AHELA6QD6A1E5BtQAxARBXBUQAjAhCCCJQBrBxA8AyQBYBJA1ADQC8ALBmB5QBcBrgDCZQgDCXhZBxQhhB6icAPQggADgwA2QgrAxgjgIQgygLghgtQghgtAEg0QgIA4gqAtQgqAsg4AMQgiAIgPgRQgJgKgBgcIgEhtQgDBFg3A6QhDBFhVgHQAHA+hFAeQhGAdgogvQgaAkg0gPQgngLgLgcQADAkggAhQgnApg1gDQhDgDg7g+QAGASgBAYQgDA7gtAYQguAYgygeQgKgGgJgHQAHAWgBATQgBAfgYAWQgZAXgcgJQgSgGgUgaQgZgigNgpQgNgpABgqQgNBIgiAkQgWAXgfAGQggAHgZgPQgagQgBgiQgCgjAagOQgdgCgWgXQgMgOgGgPQABAhgZAfQgjAqgwgGQgvgFgZgwQgYgxAXgpQgfAogWASQghAcgiAFQgoAFgegiQgSgWABgUQgKAWgPATQgYAeghAQQAIAegZAbQgYAaghABQg1ACg8g3QACAlghAZQggAagkgKQgjgJgPgnQgGgRAAgQQgKAPgRALQgmAYgmgMQgkgMgXgkQgWgjABgpQAChIA/hEQgiAjgVAQQghAZggAHQgmAIgigUQgcgRgHgZQAAAZgWAWQgcAbghgJQASAFAFAWQAGAVgNAOQg6gGgrgnQAUAZAIANQAOAXADAVQAFAYgMAXQgMAYgXAEIgshJQAQArAEAYQAHAmgKAdQgMAhgkAOQgOAFgMAAQgUAAgPgOg");
	this.shape_37.setTransform(757.5,214.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1E4914").s().p("AEcFrQgTgEgIgTQgEgJAAgHQgIAOgQAJQgZAPgagGQgZgGgQgYQgQgXAEgaQgOANgUgKQgUgKgFgUQgDgSAHgVQAEgOANgWQgQACgTALIghAUQgSALgQABQgWABgMgMQgLgKgCgRQgBgOAEgRQAJgkAXgcQgSAMgXAEQgrAJgigWQgBAbgUAWQgUAWgbADQgcADgYgQQgYgQgHgaQAEASgKARQgLATgTAEQgSAFgSgMQgSgLgEgTQgRAWgeAFQgeAFgXgPQgYgPgIgdQgIgeANgYQgiAagtgXQgtgYACgpIANABQgIgkARgsQALgdAeguQAlg6AYgcQAlgtAogYQAsgZA+gKQAqgGBIAAQDugCDjASQA3ADAhAGQAwAHAlAOQBSAdA6BFQA6BFARBVQAKA0gIAwQgKA2geAnQghAqgzAQQg2ARgtgVQACAsgRAqQgRAqghAdQgcAZgaAAIgLgBg");
	this.shape_38.setTransform(590.9,268.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#685144").s().p("AjIE4QgBAAAAgBQAAAAgBgBQAAAAAAgBQABAAAAgBQAvheA6gcQAegPA8AFQBBAGAZgHQB8ghgNjGQgLijAChaQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAAAQgBA5AEBPIAHCIQACA0gHAlQgJAygcAhQgwA6hkgGIhGgCQgmADgcAaQgpAkgfA9QAAAAgBABQAAAAAAAAQAAAAgBAAQAAABAAAAIgCgBg");
	this.shape_39.setTransform(765.6,619);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#685144").s().p("AjpInQgHg0Ahg9IAbgzQATgfATgNQAVgOAkgDIA+gDQAsgEAVgHQAmgNANgcQAHgRACghIADgzQAIhCAjhhQAviAAIgdQA1jCgzjMQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQABgBAAAAQABAAAAABQABAAAAAAQAAABABABQAqCngcCiQgLA+gmBoQgrBwgLAyQgFAUgEBFQgEA6gNAdQgIASgYAKQgLAEghAGIhYAIQg3AEgbAXQgLAKgNAXIgUAlQgUAigHAYQgLAgAFAgQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABIgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_40.setTransform(764.1,595.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#685144").s().p("AgGJRQgNh2ANiyQASkWABgSQAEh5gNivQgPjGgHhjQgBgBABAAQAAgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAHBjAPDGQANCvgEB5QgBASgSEWQgNCyANB2QAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_41.setTransform(816.6,598.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#685144").s().p("AAEJ3QhGkUBClFQAdiMgKi8IgblLQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQAHBkAWDLQANCygXB9IgcChQgQBdgBBHQgDChApCmQABABAAAAQAAABgBAAQAAABAAAAQgBAAgBABIAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_42.setTransform(801.8,580.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#685144").s().p("ABjFAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAchQgWhfQgPhBgxhkQhCiPhaiTQgBgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAABQABAAAAABQBvC1BECbQAlBSAKBBQAOBSgZBGQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgBAAg");
	this.shape_43.setTransform(754.5,340.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#685144").s().p("AFPGuQh1j7irjXQipjZjZisQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQDYCtCqDZQCrDYB2D7QAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBABIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_44.setTransform(763.5,340.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#685144").s().p("AhbaJQgmi9AQi2QAEg0AWiJQAUh3ABhHQAChBgLhmQgOiJgCgeQgIiHAfi8QAnj1ALhmQASjCgMifQgOirgviwQgYhdgHgxQgKhPARhBQAPg/AwhVQAagxA3hgQAthVAOhBQARhTgbhOQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABQAbBPgSBVQgOBBguBWQg4BjgbAxQgvBWgPBBQgRBNAVBnQAMA7AfB1QAjCdAKCeQAHCUgUC7QgIBDgpEHQggDJAPCdIAQCnQAIBhgFBHQgFA4gTB3QgTBygEA8QgMCvAkCwQABABgBABQAAAAAAABQAAAAgBABQAAAAgBAAIgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_45.setTransform(806.8,472);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#685144").s().p("AApMKQgMgMgGgYQgEgMgEgcQgHgugDheQgChoAHjSQADhZgBgkQgChEgNg3IgdhuQgShDgIgvQgMg9gBgfQgDgzAOgpQAMglAWgrQANgZAbg0QAYgqAMg8IARhtQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAABIgRBrQgMA8gXApIguBZQgbA0gJAqQgNAzANBLQAEAXAZBlIAZBeQAOA2AHAmQAHArgBA7QgBAjgEBEQgGDHACBkQACBRAGAvQAEAiADANQAGAcANAOQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgCABIgCgBg");
	this.shape_46.setTransform(810.7,405.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#685144").ss(2.8).p("AIk84IgGAhQgIApgPApQgvCGhWBfQg4A8lXEdQk9EFg1BQQhBBhgjFCQgbD6AAEBQAACTgUB7QgTBvADAvQAEBHBKJ0QAlE7AkEr");
	this.shape_47.setTransform(871.9,476.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#483223").s().p("EAFgAg3QADgPgGgRQgKgigqgMQgpgLhGAdIg/AfIh4AAQALgWABgaQgBg0g6gPQg8gPgzA0QgQAQgNAVIgLASIhNgCIApg1IBhgoIArg0QA2g2A0gMQAqgJBdgLQBRgRAwg6QA2g+BFjmQBBjTgBhGQABgxgQhTIgPhJQBLkqAvlJQBdqPiOiWQiJiQjShNIiig2Qhcgfg2gfQiHhNjLiwQjJiwg/hgQg2hPgUhWIgLhGIBFBZQBXBtBdBmQEnFEDpB8QCEBHA/g3QA6gygRiMQgPiLhRiwQhVi7iFioQjmkiBWhuQArg3BZADIAlB/QAxCcA+CQQDLHOEMCrIgOAdQgPAlgHAoQgZB+A9BqQAWAoBLBzQBPB7ApBEQCQD1AAB7QAABBgaCCIg4D8QhPFdAKCLQAPDPACBLQAEBhgIBJQgFAggbBLIg3CPQhIDBANA/QAQBEAcBTIAaBFg");
	this.shape_48.setTransform(737.3,444);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2E211A").s().p("EgEKAgpQADgPgGgRQgLgjgpgLQgpgLhHAdIg/AfIh4AAQAMgXAAgaQAAgzg8gQQg9gPgzA0QgPAQgOAWIgKARIhOgCIAqg0IBhgpIArg0QA2g2A1gLQAqgJBdgLQBRgSAxg5QA1g/BGjlQBAjUAAhGQAAgxgPhTIgQhJQBMkqAvlIQBbqPiNiXQiJiPjRhNIikg3Qhcgfg3gfQiHhMjKixQjJiwhAhfQg1hPgVhWIgLhGIBGBZQBXBtBdBlQEnFFDoB7QCHBHA+g2QA6gygQiNQgPiKhSiwQhWi7iFioQjmkiBWhuQArg3BYADIAqCPQA5CvBJCcQDoH1EzCFQB3A1BCj+QA2jNgGj6QgEiiA1A7QAaAdAcA+IgWCBQgYCdgMCKQgnG5BaBWQBdBYE2jZQCwh8C0ioQA+g5CRj8QCQj2AXhUQAThDARBXQAIAsAEA5QhFCGhXCTQisEnhYBEQgdAYhnBDQhmBEg9AwQjPChhLC0QhjDtgvE6Qg2FiAqEYQAfDHBMIjQBGHOApBHQApBHBuAsQA3AXAvAIg");
	this.shape_49.setTransform(799.4,445.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A69854").s().p("ADMDaQkYgLiwgRQjBgSAqgRQCmgVA3gTQA5gTgxgXQg4gZkvggQlRghlCgEQBVgeD4gNQBbgFAbgHQAmgLgfgYQg4gLhcgUIhRgSICMgRQCsgUCfgNQH8gnDIAyQBpAbChAEQBXADDFgGQCrgFBKAFQBwAJAnAiQBHA/hcCLQgcAtgqAuIgkAmQhQAZkkAAQi6AAkRgKg");
	this.shape_50.setTransform(769.6,656.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1E4914").s().p("ADxLAQgdgPgIgdQgiAlg4gSQg4gSgNgyQgOgwAegwQAbguAygTQhHgChBgfQhAgfgug1QgEAbgSAUQgTAWgZACQgbADgTgWQgUgXAIgYQgUA2hDAJQhCAIgigvQAFAxgwAfQgwAggrgYQALAXgKAbQgKAbgXAKQgWAIgWgHQAIAagNAVQgNAYgeAIQgbAHgbgJQgwgSgbg8QgIAcgaARQgaAQgdgGQgbgGgSgaQgRgaAGgcQgHAgglAIQgmAIgUgZQgWgZAOgjQAMghAbgIQgbAGgcgKQgggLgSgZQAFAXgRAWQgRAVgZgBQgYAAgQgWQgPgTADgVQgHAegfARQggATgggMQgggMgMgkQgJgeALgYQgKANgQAHQgWAKgVgJQgUgIgKgXQgHgPADgPQgHAOgOAJQgWAOgVgHQgVgHgKgXQgFgNABgLQgMAVgkADQgxADgWgkQgjg6AvhkQAghCAsgpQAxgrA2gFQC1ilBihNQCiiACUhJQCchNDag0QF2hcGwgFQF3gFG5A8QB6ARBKARQBrAZBPApQBdAvBBBJQBGBQATBdQAXBugwCTQgtCGhOAvQgyAeg8gNQg+gNgVgyQgGAXgGAqQgHAugEATQgJAkgRAZQgVAegdAKQghALgfgUIgGgEQACAVgIAYQgSA4gwANQgxANgrgnQgqgoAJgyQgPBCgzAyQgzAyhCANQhDANhCgaQg0gVgjgmQAUAhgHAtQgIA+gwAhQgtAgg8gFQg7gEgvgjQAMAcgOAeQgNAfgdAJQgLAEgLAAQgSAAgSgKg");
	this.shape_51.setTransform(813.4,296.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#28601B").s().p("Ar3X0QgEAPgNAKQgOAKgPgBIgphFQALAjglAYQgmAXgfgVQgegTgDgqQgDgfAOgaQgOAOgagCQgkgDgRgbQgPgYgBgjQAAgXAHgpQgSANgHAoQgIAsgMANQgWAZgmgNQgkgMgNgiQgKgcAGgmIAFgaQgJAHgQAEQgxAOgZgiQgng0AqhpQgfAugzAbQgzAbg4gBQALhjAvhVQgMAJgWgBQgrgCgNghQgNgfAPgkQANggAdgaQhOAphVgGQAYAYAKAMQASAVAGAVQAIAYgJAYQgJAagXAIIgghEQACAQgOATQgXAdgfgGQgegFgTgdQgSgagDgiQgWAegoAHQgoAHgfgVQADhiAkhdQgsAfgyAPQgRgOgGgXQgFgXAIgVQghADgfgOQgdgLgUgWQASAXgGAhQgHAlgeAPQgfAOghgSQgZgNgJgXQAEAfgZAeQggAkgpgJQgpgKgNguQgIgdAIgWQgUAagdATQgrAcgxAEQgCglALglQALgkAXgeQgfAcgeANQglAPgfgMQgigMgDgrQgBgTAGgMQgSAJgTAFQgkAJgkgIIBJiYQgSAcgrAEQg3AEgcgmQgbgmAKgzQAKgxAmgeQhEALgzg8Qg0g9AWhBQAihpAmhOQA+iEAxgIQAkgGA4ARQAzAOAmgNQAxgQAChPQACgvgThxQgThtACglQAFg/AzAGIBvATQBbAPAUgEQAfgFB6hwQA/g6BQhOQAZgXAPhBQAFgWAQhkQALhKAOgdQATgpAhALQAIACCeBkQCSBbAUgGQAOgFBChtQBIh1AEgEQA/hCBgAkQAeALA7AgQBAAiAgANQA6iAB8hJQCJhQBgBGQAcgcApg6QAvhEARgUQBMhaBQAjQAYALApBMQAlBGAfAAQAWAABXhSQBVhTAVgCQA8gHBKBAIA+A0QAkAdAhALQAlAMBOgSQArgKBtgjQBmggAxgKQBNgPAjARQAUAKBdCNQBZCIAbACQAzAGDyglQDtglA3AIQAdAFBBB6QBBB6AcAEQA8AKDBAVQDkAZAYgIQByghCrDdQCJCxBCCsQBZgKAhExQAMB0AAB4QgBBzgMAzQghCMijCyQhnBxgPASQg6BIgUA5QgmBth5BBQgmAUgqANIgiAJQANAwgqAnQgqAogugRQAFBBhGAjQhFAjgxgsQACAogcAhQgcAhgnAEQgoAEgigbQgdgXgJggQAEAhgcAcQghAggqgDQgngCgjgcQgfgZgWgnQAeBHgrBMQgqBMhMAMQhMANhBg5QhBg5AEhOQgPArgrAXQgrAXgsgLQAZAvgpAwQgoAvg4gDQgzgDgugmQgogfggg0QgPA1hbAXQhvAdiPACQhVACitgKIoGggQgpAQgtgHQgmgGgegVQAPARgVAdQgaAlgjgLQgfgLgVgkQgOgZgMguQALA5gaA3QgbA3gyAcg");
	this.shape_52.setTransform(776.6,229.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#5C9742").s().p("A0DB8QhMgGgtgTQg4gXgggwQgKgRA3gHQA7gHgEgYQgFgckpgRQkugNgPgGQgWgHAngOQAmgNApAAQKvAEWQAmQVhAkE8AUICDAbQhNAQhzAVQjmApi9ARQjMASh8gIQhggGgXgSQgKgIBCgHQA+gHgggPQgmgRifAYQhAAJiYAdQg2ALiLAFQhhADhjAAQgVAAk4gNQkjgLhLADImtAXQkSAQhbAAIgkgCg");
	this.shape_53.setTransform(772.7,502.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6BA84D").s().p("AG9EKQhuggDvhNQC6g8CtgeQA2gKh9gZQiCgajNgPQo4gumIBQQggAJgSAbQgfAugIAHQhIBHkEAOQkRAPiMg/QgrgTgwgkQgygmgTgJQgUgKhag3Qhkg/hIgoQj6iJi/gTQCwgVeyAxQeRAwCLAVQBlAPgcBgQgPAxgiArQjBAbi7AhQl3BCAaAeQAZAeC0ANQBaAHBgAEQAIADi2ALQjGANjWAJQkaALiwAAQjTAAg6gQg");
	this.shape_54.setTransform(759.3,518.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#305E4C").s().p("ACAG5Qg8gNgjgkQguAag5gFQg4gFgrgiQhNAshdgMQhdgLhAg9QgSABgSgLQgTgLgMgUQgRgfgBg3QgBhCAUgpQANgaAWgRQAYgSAagCIgXgEQgOgQAAgVQAAgXAPgQQAPgPAXgBQAXgBAQAOQgLhFAhgTQARgKAVAIQAVAIAJASQASAhgRAuQAVgRAdAAQAYAAASALQgJgJgCgQQgBgVAOgNQAOgNAWADQAVADALAQIAOgbQgYgJgPgQQgSgSgCgVQgBgYAWgPQALgIAKgBQgKgFgIgLQgQgUAIgUQAGgQATgHQASgHASAFQAZAHAjAhQgPgUgEgXQgEgaANgSQAOgTAbACQAUACAIAMQgHgTAFgVQAGgdAUgMQAXgNAaAQQASALADAQQADgOALgNQASgSAXADQAWADANAWQAKASgDAQQAFgOAMgKQAQgOATgCQAUgCASANQARANAEATQADAUgOARQgMAQgRACQAygCAJAZQAHAQgNAQQgLAPgTAIQglARgogEQAJAEAgAAQAZgBAEAOQAEAQgUAOQgeAWgngCQARAEAEAVQAEATgKAQQgJANgSAKIgQAIQANgBAOAJQAYAPgDAZQgDAYgaAKQgWAIgSgHQATALgDAeQgEAigbAMQgZAMgegLQgXgJgQgSQAOAWgCAcQgDAkgaAUIAogCQAMASABAYQATgGARAMQAOAKAEANQgBgKAGgLQAHgPAPgFQAOgFAPAGQAQAGAGAOQgFghAFgRQAEgNAJgJQAKgKAMAAQAWgBAMAZQAKAUABAdQAbg5AkgKQAYgGAVASQAVASgJAWQgEAHgNAOQgMAMgDAJQAMgXAfAAQAeAAAQAWQAPAVgEAdQgEAbgRAVQAMgJARAAQARABALAKQAKgRAXABQAXABAOAQQAMAOAGAWQADAPACAZQioApiwABIgGAAQg+AAgqgKg");
	this.shape_55.setTransform(877.3,461.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3C7168").s().p("AglGYQjQhBiMiMQgvgvgOgUQgegoABgoQgShAAOgvQAIgcAUgVQAWgWAbgFQAdgFAaARQAaASACAcQAEhBAdg+QAcg8AvgxQBahcCIgmQBDgSA6AEQBEAEAvAjQArAgAWA3QAUA0gEA5QgFBehHBvQgUAegsA6QgsA9gUAdQAxgeA7gFQA7gEA0AYQA0AXAlAwQAkAvAIA5QAJA6gbAfQgQATgdAJQgUAGghADQgwAEgvAAQihAAiVgvg");
	this.shape_56.setTransform(880,455.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#305E4C").s().p("ArtIoQgEgFAAgGQgBgGAEgFQgFg3BIgQQAcgGAjAFQAWADAoALQgGg0AAgwQAAgbAJgMQANgTAeAEQAXADAbAPQgUhTAOhUQADgTAHgHQAJgIAPACQAOADAIAKQALAOAFAjQAKgTASgLQASgLAUAAQgKgMgXgXQgYgXgKgNQgRgUgIgWQgIgZAGgVQAFgSAQgOQAPgNATgDQATgDATAIQASAJALAPQgHgKACgNQACgNAJgJQAJgIANAAQANgBAKAIQgMgdgEgQQgHgaAEgVQAEgYAWgPQAWgQAVAJQgpgigTgeQgbgoAHgmQAEgbAWgVQAVgUAcgDQAcgEAZAQQAaAPAKAZQAGgcAggHQAhgIARAXQgWghAAgpQgBgqAVghQALgRAPgJQAPgMARACQAQABAOAMQANALAHARQAJAagEAqQAQgkAUgTQAbgaAcAHQAdAGAEAjQAFAigaAOQANABAWgFIAigHQASgCAQAIQASAIACAQQAFAhg4AVQAqANAIAcQAFARgNAPQgOAPgPgHQATAPACAbQADAagMAWQgWAmg4ASQAnAaAOAVQAKAQAAASQABAUgLANQAVAYALAbQALAegCAeQgCAfgQAbQgRAcgbAOQAWgHAZAFQAYAGARAQQgBgyAhgrQAhgrAygMQAVgFAUAEQAWAEAMAOQAOARgCAbQgCAWgMAYQgfA+g3ApQAMgIAOAJQAOAJABAPQAAAOgLAMQgKALgOAFQAdAcAOAlQADgNAQgEQAQgDAMAJQARANAEAmIACAdQADAQAGALQAigTAogFQAogEAlAKQAYAGAPARQAQATgKASQgJASgnACQjfAMivgbIhGgLQgpgGgeACQgTABhYAPQhAALgogJIgfgIQgUgGgMgCQgjgFhbAXQhQAUgqgSQhfAahjACIgVAAQhZAAhWgTg");
	this.shape_57.setTransform(719.6,453.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3C7168").s().p("AKJJLQh/gElIgnQkdgjioAFQg/ACkSAhQjNAYiEgSQgkgTgBgwQgBgvAjgVQgOgIgGgSQgFgSAFgRQAHgcAhgcQA+g4BTgUQgJh1ARhuQAThyAvhkQAxhpBPhSQBShVBlguQCXhEC1ARQB9AMBGA4QA5AvAYBPQAXBJgMBPQgUB/hyCPQAtghA9AJQA9ALAhAvQAgAugHA9QgHA8gpAoQAeANAogVQAYgMAsggQA2ghBCgCQBCgDA6AcQA4AbArAzQApAxAUA+QApgHApAUQAoATAUAlQAPAagFAVQgJAohEAOQg4AMhBADQgeACgiAAIg7gBg");
	this.shape_58.setTransform(743.4,449.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3F835A").s().p("APKKTIqxgMQk8gPlHgZQqOgygxg1Qgxg1AliNQALgtASgvIARgnQAgggAsgQQAtgPAsAHQgggbgPgSQgYgcgEgcQgFgfAZgbQAbgbAcAOQAiARgBA/QALgOARgJQARgIASAAQgggRgLgQQgHgMABgOQABgPAKgHQALgIAOAIQAGAEACAEQACgHAIgGQAPgMAQAFQAOAFALAPQAHAKAKATQBDgtBTgJQBUgIBLAeQAQgyAzgYQAzgZAxATQACgQgMg0QgJgqALgXQADgGAJgMQAJgLADgHQAHgNADguQADglASgNQALgJAQACQAQACAJALQAKALgBAPQgBAKgDAHQANgQAUgIQAZgLAbAEQgdgWgLglQgLglAOgiQAOghAjgRQAhgSAiALQAjALARAkQASAkgOAhQAVgQAYgEQACglAGgZQAIgiASgWQAUgaAggHQAigIAXAUQARAOAGAaQAEAWgEAaQgCAMgKAjQgJAdgBASQAegoAggLQATgHAVAFQAVAFALAQQAMARgIAWQgFANgJAGQAngLAqAQQAyASAYAsQAXArgNA0QgNA0gpAcQAXgMAaALQAbALAKAZQAJAXgHAbQgHAagTASQglAig7gCQApAGAfAdQAgAeAFApIAKgcQAHgQAKgJQALgMAPgDQAQgDAMAJQAMAJgCASIAAABIAEgDQAOgIANAFQAPAEADASQABAHgCAFQAUgSAbgIQAjgLAhAKQgOgjgEgVQgGgiAMgZQAOgeAjgMQAigMAhAMQAfALAYAbQAWAZAMAiQAKAbAFAlQADAXACAtIASFbQADAtgCAYQgCAmgNAdQgOAhgeAUQgYAPgXAAQgJAAgIgCg");
	this.shape_59.setTransform(868.5,434.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#4F9F6D").s().p("ACFMWQlugElxgdQrig6gFh7QgHiVBuhdQAugoA4gRQA2gSAwAJQhtiQAYh2QAciJDUgtQAJhWAkheQAnhiA4hKQCIi1CdAzQBJheCEgjQCTgnCUA5QCuBECJC9QCfDcBbFpQApiNCGg9QBugxBaAaQB/AmBTBDQCNBtAJCyQAJCsjKDXQg/BEhMA/IhAAyg");
	this.shape_60.setTransform(885.7,420.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#376359").s().p("ACGFMQgtAVgpACQgwABgegaQgfAPgtADIhQACQgTABg7gOQg8gPgGAAQhCgEgkADQgkAChzgDIhsgCQAMgXAYgNQAYgMAZACQgLgFgDgNQgEgMAGgLQAGgKANgCQANgCAKAHQgFgRAHgSQAHgQAOgNQASgQAtgSQgYAFgSgDQgXgDgFgSQgFgNAKgOQAJgNAQgDQANgEAQADIAdAIQgOgHgEgSQgDgSALgMQAMgLASACQASADAIAOQgIgWAUgQQATgSAXAHQAVAGAKAWQAKAXgIAWQAFgNANgGQAOgGANAFQAMAFAGAOQAHANgFANQATgQAYAHQgJgXASgWQASgUAYACQAYADALAaQALAagPAUQAagTAdAJQgPgUgDgaQgCgZALgXQgTAAgQgPQgQgOgCgTQgDgUALgSQALgRASgHQgQACgOgNQgNgOAAgRQAAgRAMgOQALgNAQgGQAfgLAjARQgUgpAGguQAEgcAQgGQAIgDANACQAXAEASANQAVANANAUQgIgjACgSQACgOAHgMQAIgMAMgEQARgGASAKQARAJAIARQAHAOACASQABgHADgGQAHgMANgHQAOgGALAGQAIAFAIAQQAPAegBAiQgBAigPAeQAOgEAQAEQAPAFAJAMQAKAMABAQQABAQgHANQAbgLAdgBQAegBAbAKQgSgTgHgMQgNgSgEgQQgEgUAHgTQAIgUASgHQAWgIASAVQAHAIADAIIACgGQAGgRAOgCQAJgCAIAHQAIAGADAKQAEAKgCARQAFgkAJgQQAJgPAOgIQAQgJAPAEQAPADAKAOQAKANACAQQABANgEAUQAFgGAIgFQAYgPAYAJQAnAQARA/QAUBLgOBeQgJA+gfBrQgMAtgKAZQgPAlgVAZQhEBQifADIgJAAQiPAAhLg+g");
	this.shape_61.setTransform(614.7,458.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#478577").s().p("AAKGSQg+gGkuABQknABhkgMQgXhjAQhUQAQhTA0gwQA1gzBQgDQBWgDBoA2QAPj2BbiAQBNhsBkAKQBWAJAwA0QAyA2AmCEQAMinCXAAQCgAHB7DnQAvBWAxCGQASAxA/C6QiXAMiqAKQjpANh0AAQg2AAgdgDg");
	this.shape_62.setTransform(630.1,451.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#685144").s().p("ADFGYQgmhjgsgoQgggcgtABQgxAGgegCQgwgDgjgcQgigbgTguQgVg0gDhHQgCgjAFhZQAJiagCiUQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABABQABAAAAAAQAAAAAAABQABAAAAABQACCUgJCaQgGBnADAqQAHBVAlA1QAcAqAwANQAlAKA3gHQAYgDAKAAQATgBAOAHQAoAQAiA4QAWAkAXA8QAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBABQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_63.setTransform(324.9,626.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#685144").s().p("ADkLUQAHg3gWhCQgQgwgkhCQgXgrhCgLQhKgFgigMQghgLgMgMQgNgPgFgfQgEgcgIhcQgHhLgJgtQgJgrgsigQgih9gLhRQgajTApjVQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAABQguDwAnDrQAMBEAoCNQAmCFALBKQAEAYAFBHIAEBIQAGAuAWARQAeAXA/ADQBJADAZALQAcANAUAlQALAWASAsQAVAvAIAjQALAtgFAqQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_64.setTransform(326.3,595.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#685144").s().p("AABMNQANibgNjqIgTmFQgDihAMjlQAQkGAHiDQAAAAAAgBQAAgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQABABAAAAQAAAAAAABQABABAAAAQgHCDgQEGQgMDlADChIATGFQANDqgNCbQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_65.setTransform(273.9,599.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#685144").s().p("AgHNAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAgBQApjWgDjSQgBhegOh3QgFgogXiqQgYiqAMjrQAWkPAIiGQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAIgcGwQgKD3AdC3QAfDTABC8QAADOgkDAQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgBgBg");
	this.shape_66.setTransform(288.7,575.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#685144").s().p("AhmGiQgZheAPhwQALhWAohzQBIjRBmjcQAAgBABAAQAAAAABgBQAAAAABAAQAAABABAAQABAAAAABQABAAAAABQAAAAAAABQAAAAgBABQhiDThFDJQgrB4gNBWQgRB0AaBiQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBABQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_67.setTransform(336,259.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#685144").s().p("AlSI3QAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQBzlDCkkVQCtkmDgjrQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAQjgDqirEmQilEUhyFCQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_68.setTransform(327,259.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#685144").s().p("EABYAidQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBQAokGgUj/QgDgvgYjFQgSiVAAhfQgBhUAMiSQAOijAChCQAChpgKh7QgIhegRiFQgikFgLixQgOjvANjMQAOjNAqjSQAdiTAFhPQAIh8gdhmQgUhHgvhtQg+iSgMgiQhSjWAsiiQABgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAABABQAAAAAAAAQABABAAABQAAAAgBABQgdBrAXB3QAQBXA2B/IBXDUQAuB6AHBiQAFBXgWB7QgMBGgcCKQgnDogGDoQgEC7AaEAQAPCRAjEmQAXDggRDfQgMClgDA6QgFB8AIBjQAFAxAUCnQAQCGADBSQAJDbgiDfQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_69.setTransform(283.8,432.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#685144").s().p("AgtQBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAQgVAGgnIAGhAQAGhOABh1QACh0gHkSQgDhxABgeQABhQALg+IAZiGQARhWAIgzQAShoADgyQAFhWgThDQgNgugag/QgchGgOgkQgUgzgJhLIgOiBQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABQAOBvAIAuQAQBUAcBCQAhBTANAkQAXBFAFA3QAEA/gMBWQgFAfgWB0QgIAtgUBZQgOBPgGA3QgHA6ADBWIAGCQQAGD8gECZQgDBfgIA+QgEAfgDALQgFAYgLAPIgDABIgCAAg");
	this.shape_70.setTransform(279.8,345.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#685144").ss(2.8).p("EgIjgmBIAGAqQAJA2APA3QAuCxBXB8QA3BPFYF4QE9FXA1BqQBBCAAiGoQAbFJAAFTQAADBAVCjQASCSgDA9QgDBehKM7QglGegkGK");
	this.shape_71.setTransform(218.6,439);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#483223").s().p("EgJRAqDQAchuAPhZQAOhShIj+QhSkggEgrQgJhfAEh/QAChjAPkSQAKi2hPnLQgwkbgIgyQgairAAhVQAAiiCRlDQAphcBPigQBKiXAXg1QA8iLgYimQgIg1gPgwIgNgnQELjhDLpgQBkkwAwkDIAyAHQA3AQAbAuQBWCRjmF9QiFDehUD2QhSDogPC2QgRC6A6BBQA/BHCEhdQDpijEnmrQCUjUBli1IgLBcQgVBwg0BpQhAB9jJDoQjLDpiHBkQg2AphdApQhpAtg4AbQjSBliJC9QiPDHBeNeQAvGxBLGIIgPBgQgPBtAABBQAABcBAEXQBFEuA1BSQAxBLBSAYQAuAOBZANQAyAOA3BHQAbAkAQAhIBhA1IAqBFIhPADQgNgngaghQgzhFg8AUQg7AUABBEQAAAiAMAeIh5AAQgbgWgjgTQhHgmgqAPQgpAOgKAuQgGAXADATIkMAOQAMglAOg3g");
	this.shape_72.setTransform(353.2,396.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#2E211A").s().p("EgKfArKQBug8AphdQAqhdBFpgQBNrQAdkGQArlxg1nSQgvmehjk4QhLjtjQjVQg8g/hohaQhlhYgegfQhXhZitmEIicl0QAFhLAIg5QARhzASBZQAYBuCOFEQCSFMA9BKQC4DiCuCfQE2EfBch0QBahygopFQgLi1gYjPIgViqIARguQATgyARgZQA1hMgFDUQgFFKA1ENQBCFPB3hFQEzivDpqTQB0lLA3knIAzAHQA3AQAaAuQBWCRjlF9QiGDehWD2QhSDogPC2QgRC6A6BBQA/BHCGhdQDpijEnmrQCUjUBli1IgLBcQgUBwg1BpQhAB9jJDoQjLDpiHBkQg2AphcApQhsAtg4AbQjSBliJC9QiMDHBbNeQAvGxBLGIIgPBgQgPBtAABBQAABcBAEXQBFEuA2BSQAwBLBSAYQAuAOBZANQA1AOA2BHQAbAkARAhIBgA1IAqBFIhOADQgOgngaghQgyhFg9AUQg8AUAABEQAAAiAMAeIh5AAQgbgWgjgTQhHgmgpAPQgqAOgKAuQgFAXADATIwQAzQAugKA3gdg");
	this.shape_73.setTransform(291.2,398);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#28601B").s().p("AKZXrQgag4ALg4QgMAtgOAaQgVAkgfAKQgjAMgagmQgVgdAPgRQgeAUgmAHQgtAIgpgQIoGAfQirAKhWgBQiQgDhugcQhbgYgQg1QggA0gnAgQgvAmgyADQg4ADgogvQgpgxAYgvQgrAMgrgYQgsgXgOgqQAEBNhBA5QhBA6hMgNQhMgNgrhMQgqhLAdhIQgWAngeAZQgjAcgnADQgrADggghQgdgcAEggQgJAggcAWQgiAbgogEQgngEgdghQgcghADgnQgxArhGgjQhFgiAFhBQgvAQgqgnQgqgoAOgvQg1gLg9ggQh6hAgmhuQgTg5g7hHQgPgThmhxQijiyghiMQgMgzgBhzQgBh3ANh1QAhkxBYAKQBCirCKiyQCqjcByAhQAnALHSg7QAdgFBBh6QBBh6AdgEQA3gJDtAlQDyAlAygFQAbgDBaiIQBdiNATgJQAkgRBMAPQAxAJBmAhQBuAjArAKQBOASAlgNQAhgLAkgcIA9g1QBKhAA8AHQAVACBWBTQBWBSAWAAQAfAAAlhGQAphMAYgKQBQgjBMBaQARAUAvBDQApA6AcAcQBghGCJBQQB8BKA6B/QAggNBAgiQA7gfAegLQBhgkA+BBQAEAFBIB1QBCBsAPAFQATAHCShcQCehjAIgDQAhgLATApQAOAdALBKQAQBlAFAWQAPBBAZAXICPCIQB6BwAfAFQAUADBbgPIBwgSQAzgHAEA/QACAlgTBtQgTBxACAvQACBPAxAQQAnAOAygPQA5gQAjAFQAxAJA+CDQAmBOAiBpQAWBCg0A8QgzA8hEgLQAmAfAKAxQAKAzgbAlQgcAmg2gEQgsgEgSgcIBJCZQgjAHglgJQgTgFgSgJQAGAMgBATQgCAsgjAMQgfALglgPQgegMgfgcQAXAdALAlQALAkgCAlQgxgEgrgcQgdgTgVgZQAJAVgIAdQgNAvgpAJQgpAJgggkQgageAFgfQgJAXgZAOQghASgfgPQgegOgHgmQgGghASgXQgUAWgcAMQggANghgDQAIAVgFAXQgGAYgRAOQgygPgsggQAkBeADBiQgfAUgogHQgngHgXgdQgDAhgSAaQgTAdgdAGQgfAGgXgeQgPgTACgQIggBEQgXgHgJgaQgJgYAIgZQAGgVASgVQALgOAYgVQhWAFhOgoQAdAZANAgQAPAlgNAeQgNAhgrACQgWABgNgJQAxBWAKBiQg4ABgzgbQgzgagfguQAqBognA1QgZAhgxgNQgQgFgKgHIAGAaQAGAmgKAdQgNAhgkANQgmANgWgZQgMgOgIgsQgHgngSgNQAHApAAAWQgBAkgPAXQgRAcgkADQgbABgNgOQANAagCAgQgDApgeAUQgfAVglgYQgmgXALgjIgoBEQgQACgOgKQgNgKgEgPIgSBIQgygbgbg3g");
	this.shape_74.setTransform(295.4,159.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#42642B").s().p("AyYBtQAEhoALh+IALhsIBOAaQBWAhAqAhQgUgZgMgeQgNggAFgQQAMgqB8BlQAKg9ALgTQAPgdAHBfQAqhFA4g0QAygvAhgIQAigIgNApQgQAvhMBeQA8gMAOAJQARANg+AyQAgAAAiAXQASAMAKAMQAahKAmgiQBMhDBADHQAZhlAjgZQAmgZAbBQQAdgLAhAKQAfAJARAUQgLhIACg/QAChAANgUQAjgzBHD3QAVgRAQAbQAMASANArQA9icBDhkQA9hcAaALQAaALgcBaQgeBjhOB/QAdAAALApQADALAFAyQAuh4A2gcQA6gfgTCbQBWhKBCgIQBGgIhaByIBEgdQA6gLg2BQQA7gbA8ARQAuAMAZAcQAbhNAngQQAqgPAHBWQAXhIAhg0QAig3AegJQBMgYgGD3QBKAnAsA5QAWAdAIAVQg2AKiZACIiOAAQghAHgugFQhdgIg/g4QhqgPkhAHQlWAJhjAxQgJAVA1ANQAxANBxAIQBiAHgRAbQgRAahLAEQhjAGjwAGQkXAHg4gFQhMgIgKgRQgLgUBugJQA5gFANgKQALgIgXgJQg7gXhVALQiEASgrAKQhoAYg9AwQgHAFgGAAQgrAAAMkjg");
	this.shape_75.setTransform(276.4,489.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#4F7435").s().p("Ax6CTIgPkTQARg7AdgyQAegzAagOQBDglgLDTQCQi+CmgyQCZgvBeBZQBKBHgxBbQgYAtgnAgIAYgMQAegMAggGQBmgVBWAzQgWhhANhBQANhAAqgIQAsgJBAA7QBFBDBPCNQAdhcA8hMQA5hJAwgNQA0gPAHBFQAIBRg8CvQBOg1ApASQAsATgQBeQByhKBTAFQAoADAJAbQAKAegfA3QAlggA7AaQAeANAWAUQBDhjBMgtQCXheAuEBQAhCMhbA1QgtAbg1gBQhXgehlgfQjIg9hAgBQiKgErJArQsNAwgUAkQgCAEgDAAQgSAAgQjvg");
	this.shape_76.setTransform(269.7,474.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#42642B").s().p("AjeDxQgcgJgRgyQgQgtgDg/QgCg9ALgtQANgzAYgMQApgUAuA5QAYAdAOAeQAGgfANgdQAcg7ApASQAIhOAjgoQAkgnAuASQArARgPBhQgOBWgvBaQAgghA0gfQA6gmAkgFQBmgPiEDnQgqA1i6AWQhjALg2AAQgmAAgQgFg");
	this.shape_77.setTransform(396.1,476.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#4F7435").s().p("AgxE4QhCgChLgHIg+gHQhSiggFiEQgEiLBbgXQBOgUAgAqQAPAVAAAYQAQg+Ajg6QBIh1BkAUQBmAVgHBwQgEA4gYA0QASgXAcgRQA4ghAwAhQA1AkgyCHQgrB1hDBRQgqAyi2AAIgfAAg");
	this.shape_78.setTransform(396.5,476.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#456930").s().p("AmuAoQAOguAdg2QAeg3AagbQAegeAMAVQAOAagNBcQAwhhAxgSQAzgSgEBZQATghAbAHQAOAEAKAKQAbhLAkg0QBFhoAoBxQAogxAzghQAzghAdAEQAgAEgOAxQgQA6hNBrQAggKAXAEQAXAEAFAOQANAkhUAzQBBgUAFAiQAGAkhAAqQA8gPANAdQAGAMgGAhQA1glAuAHQAXADANALIAFAYQAAAagZAKQgIADiEAAQhuABgCAeQAFALAQAAQAEABAdgEQAwgGANAgQAPAlkxAOIk2AHg");
	this.shape_79.setTransform(460.6,483.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#56813A").s().p("AhTEMImHgKIAejRQAthaBIgvQBbg6B5AaQAGgZAUgbQATgaATgJQAVgLAGARQAIAUgQA1QBWhVBfgmQBegnA9AWQBBAXACBTQABBfhSCXQAxgeAxgCQAwgCAYAYQAZAbgRAxQgSA3hHBIQg9AAmRgJg");
	this.shape_80.setTransform(461,474.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#567B3D").s().p("A4tIEIgLoGQgTjIAGghQAOhWBpCMQgQhDAHgxQAHgyAbgLQBFgZCEDdQAAglASgVQARgTAZAAQAZAAATAUQAWAXAFAnQANhEAegmQAbgkAcAGQAdAHALAwQANA3gRBaQBJgvAuAYQAtAXggA+QAkgXA1ASQAkANAYAVQgfiZAPhBQARhIBQgCQBEgBADBfQABAygLBFQAbgUAzAEQAtAEANAMQALgOAggCQAQgBAOACQgfgtgWg9Qgth5AqhLQAphMA2CCQAcBBASBPQAFgIAJgHQAQgOAOAEQAuAMAMC7QA5hBCAATQBBAKA1AXQhAg0g5hEQhxiGAkhMQAjhLBuAuQA3AXAxAmQgjgogZgzQgYgvABgXQABgZAeAZQAkAdBBBcQAviYBNgOQAdgGAbARQAYAOAMAXQATAkg1BvQgbA4geAxIASgEQAWgCAYAHQBNAXBCBuQAPiqBEgYQAcgJAbAYQAcAYAQAzQAqgMA3ArQAcAWATAYQgJglAHgeQAHgdASgIQAugTA8BzQgsi3AQhGQAShTBqAXQBlAWATBfQANBCgcCFQA/AHAoBRQAKAUAdBbQAYh6Aog/QAqhCA5AGQA0AGAWBXQARBCgEBgQgDBCiFDOQhDBohCBaIxoALg");
	this.shape_81.setTransform(320.6,452.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#639243").s().p("A5bHqIgVpjQAHhMAghEQAjhKAygfQB+hPCNDoQAwgpA+gSQA+gSAzALQA4ANAaAuQAdAzgQBUQA2gSBAAvQAhAXAVAbQgkhoAFhSQAFhOAogZQAqgZBAAuQBIA0BQCEQgNh1AnhjQAjhZA4ghQA5giAkAxQApA4gKCNQA3hPAiAnQAjApgTCYQAGAIAPgOQgCiIA0iIQBmkPEPAGQCPAJA4BdQA2BZgPC6QBIgwBgAZQBTAWAlAyQAAiaA2hOQBDhhCYAOQCgAQBAByQA7BpACDqQArhMA1gqQA2gqArALQAvAMATBKQAVBSgTCSQghEGluCFQhyApiGAYIhvAQg");
	this.shape_82.setTransform(319.5,445.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#A69854").s().p("AwKDLQg8g6guhHQhciLBHg/QAngiBwgJQBKgFCrAFQDFAFBWgCQChgEBqgbQDHgzH9AoQD/AUDYAeQiLAghaAQQgfAZAmALQAbAHBbAFQD4ANBVAeQlCAElRAhQkvAgg5AZQgxAWA6AUQA3ATClAUQAqARjAATQiwARkYALQkRAKi6AAQkkAAhQgZg");
	this.shape_83.setTransform(321.6,670.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#6EAC4F").s().p("Eg7PASDQgGn/AJoDQASwGBLgWQBlgeachqQa7hsEoAPIATAMQAVAPARASQA2A5gPA8QgNAzjIBBQhmAigbALQg4AYAIAUQAIAUAmAFQANACBFACQB9ADAuA1QAcAfjXAWQhWAJmaAaQlbAWibAXQjhAhARAzQASAyBlAOQBCAJCdgEQCrgFBCAFQB5AJAsAqQArApkyATQg9AEp3AVQnXAQjOAdQkiAoBIBNQBIBNDxAfQChATFPAIQF9AIB1AJQDzAUBIA5QBJA6jHBMQiGAzldBWQmYBlhrAhQjsBIAQAyQAfBfKjgrQDLgNE3gdQEsgcApgDQA+gDD/gUQENgTDEgIQJpgYBXBKQgMAfiOAUQhRALjTAQQjFAPhAALQhnASAtAcQBJAuULgeQNJgUBqgCQHTgIByAOQDaAZEQC3QCIBcBdBWg");
	this.shape_84.setTransform(499.4,605.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#BBD55E").s().p("AjmKnQhvgGjjhFQjfhEjOhZQjghihahKQhphXBsghQBfgdESg3IH/hkQKEiFgOhAQgMg6irgyQhNgYgSgIQgjgRAagSQApgcDOgdQBegNAagGQAvgKgSgKQgPgJjagsQi0glAjgZQAmgaKSgXQFJgLFDgGQhhArnQAeIkfATQh2AKAUAMQAfATGbgKQG/gLBhAOQBnAQisAXQhiANlVAgQlPAeh7ASQjFAbBEAWQBEAWC5ADQBaABEQgFQDrgEBoAFQCaAIAaAeQAaAfjFAlQh+AZk/ArQlQAthpATQjBAiAgAYQAfAYC/AbQBxAOEbAiQIlBJAOBWQAIA2jHBWQivBMkhBTQkSBPj8AxQjsAvhxAAIgXAAg");
	this.shape_85.setTransform(841.4,609.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BBD55E").s().p("A2hM2QApgzEQhOQBwghG+hxQFshcCWg1QDYhNgkg0QgkgzkOgmQifgWmIghQlvgfh0gTQi8gfBVgqQCPhFPSA4IJ0AhQEMALgagZQgtgrougbQkNgMhigGQiggJAMgKQAOgMH6hCQH+hCAogeQAYgSiegsQhTgXkXhBQkAg9hpgfQihgvAUgZQATgWBigbQA5gPCEgfQBugdAogZQA1gigvgnQhXhIDbgZQBtgNB+ABIDhAQQDiAUAHASQAHARiyAoQjDArgNAJQgSALEXALQEnAKAQAQQAQARoGA3QofA5gVAKQgiAPCnAJQBTAEBbACIHLAlQHLAoAEATQADAQh/ARQiFATgJAOQgGAKAyALIB3AUQC7AfAeAlQAeAll8ApIkRAeQiAARgIANQgIAOBxAiQAlALDaA6QF8BkAHAtQAHAultA+QjTAkgqAJQh0AYgCASQgCASB9AkIEWBIQGWBnAAA2QAABFq0ARQqNARmQgmQCLAdD1A/IAHAMQAIAOABANQADArhDARQgsALj5AOQkRAQkFADIhiAAQp2AABKhdg");
	this.shape_86.setTransform(460.7,589.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B5D15C").s().p("AsvRCIiVgjQgGh6BDhuQBDhvBxgxIBJgbQArgRAbgQQAjgVAVghQAWglgGgkQgKgzg8geQgpgVhMgMQjQgjjFhRQhCgbABgnQH3gwH2AFQBfABAtgEQBMgHA5gXQAUgIAFgLQAJgSgSgRQgPgPgYgHQkdhSknAIQhsADgogEQhSgIg0gkIKNgdQA2gCAcgEQAsgHAhgPQjRg7lwgBIkmAAQipgDh8gSQCJgtEZgLQCSgGBCgHQB1gLBagbQASgGAJgFQAPgIAHgLQAIgQgGgUQgFgTgQgMQgWgRgwgIQlGg7lIAFQAmgwBmgLIBUgIQAvgGAggOQAVgJAGgOQAHgWgYgPQgVgNgdgCIpygjIHuhUQAngGAPgNQAMgJADgPQADgQgIgLQjZgDjTg+ICghCIjggpQgFgKAJgLQAIgJANgEIAYgDQAOgCAHgGQAJgIgCgOQgDgLgHgBQCRgODUA9QA8ARB3AmQBrAgBJAPIBNAOQAsAKAfAMQAlAPBDAsIClBtQhuAih1gGIAFA6QCSAWChgQQBFgHCKgUQB7gPBUAFQCmAKCSBRIkdBmQgsAQgFAXQgEAWAXARQATAOAeAGQCEAaEMApQDuAqCaA7QBKAcAJAqIv/COQglAGgXAQQgfASAHAbQAFASAcASQA3AhBTALQAZADB7AHQDFALDAA6QAWAHAHAMQAGAOgNAQQgLAMgUAIIkuCDQgiAOgJARQgNAZATAdQAQAXAeAUQAOAJAeAMIA0ATQA5AYgTAaQjYErnBB8QjsBCloASIg6ACQiCAAiRgcg");
	this.shape_87.setTransform(679.4,604.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C1D960").s().p("EAuyARbQicgHizgTIiTgRQhcg5iIg/QkPh9jagZQhxgOnTAIQhqACtJAUQ0JAehKguQgsgcBngSQBAgLDFgPQDSgQBSgLQCNgUAMgfQhXhKpoAYQjEAIkQATQj/AUg+ADQgoADktAcQk3AdjKANQqjArgfhfQgRgyDshIQBsghGXhlQFehWCGgzQDGhMhJg6QhHg5j0gUQh0gJl9gIQlQgIihgVQjxgdhHhNQhIhNEigoQDNgdHYgQQJ3gVA9gEQEygTgrgpQgsgqh6gJQhBgFisAFQicAEhCgJQhmgOgRgyQgSgzDighQCagXFcgWQGZgaBWgJQDagWgcgfQgug1h/gDQhFgCgOgCQglgFgIgUQgIgUA3gYQAcgLBngiQDJhBAMgzQAPg8g1g5QgRgSgWgPIgSgMIFKAAQC/ASD6CKQBIAnBkA/QBaA5AUAKQATAKAyAlQAuAkArAUQCMA/ERgPQEEgPBIhGQAIgHAfguQASgcAggJQGIhSI6AvQDNARCCAaQB9AZg2AJQitAei6A9QjvBNBuAfQBsAfJrgaQDWgJDGgMQC2gMgIgCQhggFhagGQi0gOgZgdQgagfF3hCQC7ghDBgbQAigtAPgwQAchhhlgPIEKgxIAHE1QAIF1gCE+QgEP5hXBhQhGBOlRAAQhSAAhhgFg");
	this.shape_88.setTransform(627.3,602.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#73A884").s().p("A2QKRQhsgQgOgtQgHgYAXgfQAggrBAgWQBAgWBCAIQAghHBCg5QBDg7BagfQBdggBpADQBqADBVAmIBsAyQBBAYAwgPQhCgugLhFQgMhGAzg1QA0g2BigNQBigKBHAlQhUhLgyhGQg9hUgShRQgUhbAkhVQAnhaBbg2QBvhCDKgNQCLgJCDAOQCKAOB5AoQChA1CDBiQB9BeBPB5QBKBzAeCEQAcB+gOCHQCCAXBlBBQA0AhAMAfQAHAVgIATQgJAWgXAJQA5AXgCA3QgBA3g7AWQjSAVlGgcIkLgZQidgNhygCQkMgGnHAoQoNAujIAEIhSABQiyAAiCgUg");
	this.shape_89.setTransform(578.2,442.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#7DBC92").s().p("A8uLOQlBj5AOjGQAPjNDgh+QCGhNDIgrQCQgfCvA6QDVBFBDCjQCRmhD9j9QDajZEWhOQDshCDqAtQDTApB0BsQD7g7DZDQQBaBVA9ByQA6BrAOBkQFSAzAtCfQAmCIiuClQBLgJBXATQBZAVBJAtQCwBrgKCrQgICOyZBDQlwAVm4ALI6DAXQijhUihh8g");
	this.shape_90.setTransform(351.3,409.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#73A884").s().p("ArAHDIoAgZQBkjWAdg4QBPibBKhjQDEkKD/gIQCOAABBBDQAtAtAIBQQA9iYBPg+QBMg8CLgLQCggLB7B8QCRCTAYEcQClg+CKAEQB/ADBVA7QBRA4AaBfQAaBgglBzQigANnWgBQnigBhjAHQgtAEhVAAQi5AAl1gQg");
	this.shape_91.setTransform(758.8,444.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#9ED9DF").s().p("EhBJgZ/MCBuAAkQAAKOAFLMQAJWTAXEuQnPhK0fgFQx2gF3oAuQ15ArxKBBQxnBEiyA3g");
	this.shape_92.setTransform(565.2,359.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.instance.mask = this.shape_21.mask = this.instance_1.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = mask;

	// Layer 3
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#3B734E").s().p("AjWCdQAAgMALgBQA3gGBFgjQAvgYBAgtQB6hQAlhwQAEgLALADQAMADgEALQgmBzh2BSQhDAyg4AcQhLAmg/AHIgBAAQgKAAAAgLg");
	this.shape_93.setTransform(306.9,672.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3B734E").s().p("Ah+C7QgBgQAKgKIAXgRQA5gmAmgvQAsg0Aag9QAag/AGhFQABgLAMAAQAMAAgBALQgLB3g9BeQgfAvgnAoQgHAGgrAcQgmAcAAALQABALgMAAQgMAAAAgLg");
	this.shape_94.setTransform(278.2,693.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3B734E").s().p("Ah1C2QgIgIAJgIQBphYAqg8QBGhcgEhkQgBgMAMAAQANAAAAAMQAEBphHBhQgvBAhqBbQgEAEgEAAQgFAAgFgFg");
	this.shape_95.setTransform(245.8,689.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3B734E").s().p("ABDCTQgHgKALgGQA0gZAYgQQAogcATghQARgdgDgSQgHgxgoAMQgZAIgaAZQgVAWgNAeQgFAMgEAPQgEAKgLgCQgLgDADgMIAJgcQASg9gQgiQgghAgwAxQgnAmgNAwQgDAIgKgCQgKgBgBgIQgCgxgGgYQgNgrgigGQgngHgWAyQgQAjgBAtQgBAKgMAAQgMAAABgKQACg2ATgqQAag4AvADQAxAEAWAyQAIASAEAaQANgYATgVQAtgyAtAUQArATABBEIAAANQATgXAYgOQAcgQAZACQAdACAOAbQAhA8hCBBQgqAphOAmQgDACgDAAQgGAAgEgHg");
	this.shape_96.setTransform(267.9,663.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3B734E").s().p("ACQCLQgGgKAKgGQBWgpAngsQAXgXADgeQgZhGg2AgQgPAJgPASQgIAIgQAWQgFAHgIgCQgJgCAAgHQgEhHgBgGQgLgtgqAIQgiAGgYAZQgYAZgFAiQgCAJgJAAQgKgBgCgIQgJgvgJgVQgQgmgmAMQgfAJgOAkQgJAYgDAqQgBAIgKABQgJACgEgIQgOgmgJgOQgSgegZgDQghgFgNAXQgKARACAcQAEA7A4A+QAIAJgJAJQgIAIgIgJQgpgtgSg0QgYhAAggqQAPgSAXgEQAWgEAXAKQAZALASAeIAIAOQAShTA/gJQAxgHASAoQAHAPAGAaQAKgUATgRQAlggAvgBQAyAAALAwQAEATAAAkIAQgSQAZgZAdgFQAagFAVAKQAXALAKAXQAYA5hCA8QgpAlhLAkIgGACQgGAAgEgHg");
	this.shape_97.setTransform(280.8,628.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#3B734E").s().p("Ag0FRQgmgVgSgrQgFgLALgGQAKgGAEAKQAHAQAFAHQAGAKAKAJQAMATAXgDQAbANAHgjQAfgbgagjIgQgZIgYgYQgHgHAGgIQAHgJAJAFIAeASQAVAJAPgBQA3gGgEgjQgDgZgZgYQgQgPgYgNQgPgHgcgMQgLgEADgLQADgKAKACQAmAHAegeQAegcgMgmQgKghghgPQgfgOgfAJQgLADgEgMQgDgLALgEQAjgLARgoQAQglgLgmQgOg1giAdQgYATgZAsQgFAJgKgEQgKgEADgKQAKglgBgSQgDgjgjgDQgLAAAAgNQAAgMALABQAuADAKAqQAEANAAAPQAQgTATgPQAzgoAVA2QAUA1gTA3QgKAfgTATQAUADAUALQAuAaAFAwQAFAwgnAgQgQAOgTAGQAbAOARANQAxAngJAvQgKAyg4gBQgTgBgVgGQAOAUAHASQAVA1gmAgQgVASgUAAQgSAAgTgLg");
	this.shape_98.setTransform(333.3,664);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3B734E").s().p("AmKB1QgogVgJgvQgKgxAlgaQAggZApANQAPAFALAJQACgZAOgVQAbgsA0AFQAuAEASAoQAKAYgFAXQAigKAnAJQAYAGAdANQgCgIABgLQABgrAlgTQAtgWApAcQANAJAKAMIAEgLQARglAmgFQAngGAZAgQAGAIAFAJQARgbAegPQA2gcA0AkQAuAfgGA4QgGA0gzAWQgLAFgGgLQgGgKAKgFQArgSADgqQACgtgpgVQgpgVgnAZQgiAWgLApIgBAFQgDALgMgDQgLgDADgMIABgGQAHgggdgSQgfgSgbAaQgVAUAEAdQABAIAEAJQACAKgLADQgLACgEgLIgEgPQgGgSgLgNQgSgWgcgBQgngCgNAkQgQAhAhAYQAJAGgFAKQgGALgKgGQg0ghgggJQgzgNgpAYQgHAFgIgHQgHgHAGgGQAWgfgUgfQgUgfgnAJQgfAIgNAeQgKAbAIAeQADAMgMADQgLADgEgLQgKgcgjgGQgjgGgSAZQgQAXALAeQAKAbAZAOQAKAFgGALQgEAGgGAAQgDAAgDgCg");
	this.shape_99.setTransform(406.5,693.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#203E34").s().p("AibHyQitgMlSgwQhSgLgugJQhGgNg3gRQhoghg4g4QhLhKgPiEQgKhaASiVQAJhNAKgpQARhAAggqQAVgbAcgQQAegSAfABQAGAAAIAFIANAIQAqAOAhAhQAhAgAQArQAHghAkgOQAkgOAcATQAphZBeguQBegvBhAUQAnAJATARQAfAbgCAvQgCAtgdAiQgYAcgqAWIgjAQIAPgDQAhgGAXAOQAZARADAkQACAhgUAbQgQAXgeASQgTAMglARQAXgKAYASQAWASAFAbQAEAVgJAcQgFASgPAgQARgYAiABQAhABAUAXQATAVADAhQADAdgLAeQgJAZgUAbQgLAQgbAeQAhgbASgLQAdgTAbgHQAggJAeAKQAhAJAQAaQAIAOAEAYIAHAoQAGAWANAPQAOASATAAQARgbAOhkQAMhQAogYQAlgVAqAbQAqAcgEArQAoguBEAHQBEAHAdA0QgLgcAAgXQABgdAUgKQAZgNAXAbQAUAXAIAjQAYgpA3AHQA2AGANArIgOgyQAegGAeAJQAeAIAWAWQgQggAMglQAMglAfgQQAggQAkANQAlANAOAgQAPAggRAkQgGANgJAKQARgHAUgCQAqgFAjASQAcggAQgPQAbgYAZgOQAegQAhgBQAigBAaARQAoAcABA4QABA2gjAnQgdAigzAWQgmAQg7ALQhZAShHACQglABhPgDQhMgCgoACQgtACg/AKIhtARQiNAVikAAQhhAAhrgIg");
	this.shape_100.setTransform(342.7,673.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#264F37").s().p("Au0KCQhFgDgngHQg7gJgqgXQgygbgdgvQgbgsAFgsQhOlNAblTQAEgwAJgZQAOgmAwguQBthqCLhEQCKhECWgUQCXgUCYAcQCXAcCFBJQA5AfAaAhQAQAUAMAfQAFATALAmQAnCNAKBQQAPB8gfBdQCshWDHgIQDGgICzBHQAcgoAxgbQAtgYA2gGQBdgKBwAsQBAAZAcAeQA0A5gFB7QgICxhVBbQgkAlg2AbQgsAWg9ASQhhAch8APQhUAKiOAIQmKAWmHAAQl1AAl0gUg");
	this.shape_101.setTransform(339.4,675.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3B734E").s().p("AjuB5QgtgpgEg6QgFg6AugoQApgiA0ALQAoAIAWAfQALgYAQgQQAcgdAkAFQAwAIAKBAQAMgPAQgJQAkgVAnASQAkAQAFAmQACAMgCALQAHgCAHAAQAcgBAVASQAVATACAcQADAegXAbQgIAJgJgJQgIgIAIgJQAhgmgkgfQgOgMgTAAQgSABgOAOIgEADQgIAJgIgJQgJgIAIgJIAEgDQASgSgIgZQgHgdgdgGQgagHgXARQgVAQgKAYQgEAKgKgBQgKgBAAgLQAAgYgBgKQgCgUgIgMQgagqgkAeQgbAXgNAmQgDAIgHABQgJACgDgHQgVgtgtgFQgugFgfAmQgcAjAIApQAHAoAiAgQAIAIgIAJQgFAEgEAAQgEAAgEgEg");
	this.shape_102.setTransform(693.9,700);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3B734E").s().p("AhTBsQgwgDgcgiQgfgkASgsQAQgpAqgHQAggGAZARQAHgWAQgSQAbgfAeAOQAgAOgBAmQgBAMgDAOQAUgJAUgDQAsgEAcAgQAWAYgGAfQgGAggeAPQgKAGgHgLQgGgLALgFQAlgRgUgfQACgbgdgCQgXgKgWAGQgTAEgWAQQgIAGgIgGQgIgGAFgHIACgDQAPgagDgeQg9ghgGBFQgBAHgGAEQgHADgGgGQgZgYgcAIQgdAHgJAeQgKAhAWAXQAUAWAiACQALAAAAAMQAAAMgKAAIgBAAg");
	this.shape_103.setTransform(761.3,702.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#3B734E").s().p("AhPDPQgygKgPgyQgRg4AqgkQAagYAlgHQgHgIgDgKQgLgaARgaQAXglArABQASAAASAFQgOgagHgfQgRhIA+gCQAzgBAVBSQAPA6gEA9QgBAKgMAAQgMAAABgKQAFg/gSg0QgHgUgHgOQgRgkgiBKQAAAUAmAsQAGAIgGAIQgGAJgJgGQgsgegfAJQgpAHAMAmQgOAbAbAHQAJAEgBAKQgBAKgLAAQgmAAgbAQQggATgCAkQgBAuApAQQApAQAigcQAJgHAGAIQAJAJgJAHQgcAZgjAAQgLAAgLgCg");
	this.shape_104.setTransform(802.9,677.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3B734E").s().p("AieDAQg1gEgVg8QgVg7AhgrQALgPATgEQASgDATAGQAPAGAMAMIABgcQAEhBAqgUQAxgWAiAuQAIAKAGAMQACggAEgWQAOhUAvgMQARgFASAHQAQAGAMAOQATAWgBAiQAAALgCAMQAIgEAJgDQAggLARAbQATAcgMA0QgIAngVApQgFAKgKgGQgLgGAGgKQAXgwACgoQACgXgDgSQgogQgVAeQgGAGgIgEQgIgFACgJQAJgZACgXQAJg7g0AaQgfAFgFAGQgDAEgHAdQgMA3ABBCIAAADQABAKgLACQgLABgCgKIgIggQgFgTgGgNQgTgegbgDQgdgCgSAjQgVAoAZBaQADALgLAEQgLADgEgLQgLgggGgJQgPgXgHgBQgIgBgYASQgWARgEALQgGAMAGAYQAEARAPAOQAQAPAQABQAMABAAAMQAAALgKAAIgCAAg");
	this.shape_105.setTransform(840.5,644.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#3B734E").s().p("Ai5CmQgzgagFg3QgFgyAmgcQAcgSAfAFQgZhOA1gVQAmgPAiANIANAGQgCgMABgLQAEgtAmgJQAqgLAcAnQAOATAJAcQAOgVAPgNQAggcAlAIQAeAHALAZQAMAagNAbQgFAKgKgGQgLgGAFgLQgahHgmAiQgQAGgIAOQgKALgNAaQgDAHgIgCQgJgBgCgHQgVhhgzASQgZAKABAdQAAAPANAiIABADQACALgKADQgLADgEgLIgBgCQgOgigqgDQgrgDgJAmQgDANAGATQACAKAJATQADAIgHAEQgHAFgHgEQgtgUgZApQgXAoAZAmQASAaAhAJQAcAIAigHQALgCAEAMQADAMgMACQgRADgPAAQglAAgfgQg");
	this.shape_106.setTransform(847.2,684.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#203E34").s().p("AkfGeQgagEg4gMQg2gLgdgEQgtgFg4ACQgiABhEAGIkZAYQgoADgYgFQgjgIgNgZQgIgOAAgcQgBgjgBgJQgDgMgJgUQgKgWgCgKQgFgSAGgRQAGgSAPgFQgSgWAFgeQAFgfAYgPQALADAeADQAZADAPAFQAUAHAMASQANATgIASQAUgGAUAKQAUAKAIAUQgBg4AggXQASgNAYAGQAZAHAEAVQgDgdAjgMQAigLAYAUQAVASAJAhQAGAWADAoQAZgUAiAIQAjAIAOAdQANgbAfgKQAggKAaAQIAaAQQAQAIALgHQAHgEAIgRQAUgnAggLQASgGATAFQAUAGAJAPQASgcAhgOQAggPAiAFQAhAFAbAXQAbAYAKAgQAPgoAhgdQAigcArgJQAqgIArAOQATAHAQAJIgJgMQgTgbgBgfQgCggATgaQASgcAegIQAegJAeASQAeARAFAdQAEgXASgUQASgUAYgIQgrgKgMgzQgLgzAjgcQAigcAwAWQAvAVABAtQAMgMARgDQARgEAPAGQgJgRgDgLQgFgRAEgNQAFgPASgDQATgEAFAOQgGgQAGgSQAGgSAPgKQAPgJATACQATADAMAMQgHg1AqgsQArgsA2AFQATACAQAJQASAJAIAQQAJASgEAgQgFAngUAkQgTAjgeAbQAoAGAiAbQAeAXAPAgIgNgdQA0ACApAqQAnAnANA1QALAugGA7QgDAlgOBFQgJAsgHAWQgMAkgTAYQgmAwhNAOQgzAJhbgFQmVgYmSAfQhVAHgkABIgiABQgvAAgogFg");
	this.shape_107.setTransform(773.2,691.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#264F37").s().p("AvuHgQgogGgbgUQgagUgOgiQgNgfAAglQAAgfAIglIALgnIgLARIATgtIgIAcQA3hTBsgrQBpgqCAAFQBuAFBrAiQBrAiBdA8QgLgZAJgeQAIgcAWgUQAhgeBFgRQB6geBTASQA2AMAqAeQAtAhAVAuQACi8Axi5QAMgqAPgSQATgXAhgCQAggDAXATQAXATADAgQACARgEAOQAagqAsglQAuglBGgjQDShoDpgVIAVAAQALAAAIAFQAPAHAGAVQAEAOABAZIAULIQABAYgHAMQgJANgZAIQh4ApieAVQhgANi9AMQkzAUibAGQj/AJjNgJIh6gHQhHgDgzABQg2ABhbAIQhqAIgnACIgeABQgZAAgTgDg");
	this.shape_108.setTransform(763.4,680.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#486E22").s().p("AlgGLQg4gDgqgTQhAgcgkg/QgWglgGgnQgSgigIgVQgQgmgEggQgEgnALgjQAMgkAcgWQAugiBAAVQA9AUAgA0QgJgaAEgcQAFgdAVgRQAWgSAeAIQAUAGAJANQgBgQASgPQAagYAZAOQAZAPgBAiQgBAhgZARQAzgJAzAQQAzAQAlAiQgEgYgOgkIgXg+QgYhKAYgtQAagvA8ABQA/ABAYAwQAGhFBDgpQBCgpBBAZIARAHQAJADAIgBQAJgBAPgJIBng+QAIAbAiAZIA6ArQAhAgAJA0QAJAwgPAwQgMAqgeAtQgUAfgnAsQgyA6goAoQgzAzgyAjQhxBRihApQh6AgiyANQgrADggAAIgcgBg");
	this.shape_109.setTransform(786.2,680.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#507C26").s().p("AAEHnQgNgDg+gRQgwgNgegDQgqgFg2AGQgYAChIAMQhtARhzAJQg4AEgagHQglgKgdggQgbgdgPgnIgFgQQgMgcAAghIAAgFQgDgbgCgxIAIAtQAGgaAOgXQAYglArgUQArgTAsAHQgTgpgHgXQgKglAFgeQAHghAggUQAhgVAdAQIANAKQAJAFAGABQAKACAUgKQArgUAwgHQAwgGAvAJQAOgkALgTQARgcAYgNQAbgOAfAPQAfAPgEAdQAggNAiAOQAiANAPAfQgTgzADgzQAEg4AcgmQAhgqA5gFQA6gGAgAnQgLgSALgWQALgVAVgHQAUgHAWAHQAVAFASAPQgIgcAQgaQARgaAcgGQAcgFAZAUQAXARADAaQgDgoAQglQASgoAigTQAlgVArANQAsAOANAmQADAIAEAWQADATAFAKQAFAKAKALIASARQBCA/AYBhQAXBbgUBdQglCoieCOQh4BtiTAwQhhAghdAAQg5AAg4gMg");
	this.shape_110.setTransform(775.5,670);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#486E22").s().p("AqSHeQgugEgkgMQg7gOgcgKQgxgRgMgiQAGgggBgzIgChUQACguAQgkQATgqAigTQAlgUArAWQAYANAJARQgKhhAygbQAVgNAaAEQAaAEARASQAQAQACAaQABAagOAUQAegCAcATQAbATAJAeQADgrAIgaQAKgmAXgVQAagYAnAEQAoAFAIAhQARgaAbgQQAbgPAfgDQgYgQACgiQADghAZgRQAYgQAgAFQAeAFAXAUQgUgUAFggQAEggAYgSQAWgRAfgDQAdgCAaALQAZAIAaATQAQAKAfAZQgRgsADguQACgwAYgmQAZgnArgUQAsgVAsAJQAtAJAeAnQAfAogGAsQAKgwASgTQAOgOAUgBQAVgCALAOQAEgSAVgKQATgIAVAEQARAFASANQALAIATATQATgpAMgVQAUghAWgVQAbgYAigIQAkgJAeAPQAfAQAHAmQAIAngbAVQAaANAQAbQAQAagBAdQgBAdgRAaQgRAagbAMQAYAcgSArQgPAjgkAiQh2Bvg/A2QhoBahfA3QjFB0kRAtQjGAhk0ACIgVAAQgnAAgYgBg");
	this.shape_111.setTransform(776.8,650.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#507C26").s().p("AAGMSQglgEhPgLQhOgLgngEQhBgFhTABQgtABhmAFInyAaQggABgQAAQgbgBgUgHQg9gUgjhKQgZg0gOhaIAAgBQgaAKgZgaQgcgcAIgiQAIgfAegXQAagUAlgJQBVgVBTAgQgPggABgiQABgkAUgaQAVgbAkgGQAmgFAXAXQgahNABhNQAChSAihBQAlhHBFgqQBIgrBMAJQBPAJA2BAQAnAvAGA0QADgOAGgNQAQgiAegTQAegUAmABQAmAAAeAVQgFgSgMgeQgOghgEgOQgJgbABgYQACgcAPgSQAQgVAcAAQAegBALAWQBBg3BXgUQBUgTBSAXQgigqADg7QACg7AmgpQAkgoA6gKQA5gKAyAWQAyAXAgAwQAeAuAFA2QgCgWANgTQAOgVAVgHQAWgIAXAHQAXAIANATQgbiBAsh6QAIgXAPgNQASgQARAJQARAJACAhQAHBbgcBYQAdg8ARgeQAdgxAgggQAmglAwgRQA0gSAuANQAXAHAZAPQAQAKAbAUQAqAfAUAcQAcAmgJAkQATghAlgPQAlgQAlAKQAlAKAZAfQAZAgABAmIgBAbQgCARACAKQABALAFAOIAJAYQAiBcgfCgIgZCCQgMBJADA3QACAjALA9QANBEADAcQAGA/gIBQQgGAvgRBfQgGAggFAQQgHAbgNARQgaAmg3ASQglAMhCAGIqnA9Qh9ALhAADQgoABgkAAQg9AAg1gEg");
	this.shape_112.setTransform(777.5,658);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#3B7522").s().p("AECD1Qh4gCiGgOQisgSgmgZQgVgOhlACIi5AHIBegZQBpgYA0gCQh4gOASgVQARgUA6AAQiFgkAfgVQAMgHAegCQAegCAZAFQgogyAVgJQADgCA7AAQgkg0AfgDQAcgEApAiQAnicAkAFQAYADAWBGQBVh+AcAuQAYAogeBmQArggAPAfQAMAYgIApQAZgIAKgBQAZgBAHAYQBXh6AmAcQAfAWgOBKQBXhEABAuQACAng/BiQClg7gaAsQgVAmhUAuQAcgOAvAAQAuABAQANQANAKgeAZQgQANgSAKQg6AHg4AEQgpACgeAAIgQAAg");
	this.shape_113.setTransform(423.1,509.3);

	this.instance_2 = new lib.path20();
	this.instance_2.setTransform(558.2,602.9,1,1,0,0,0,194.6,50.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C1AA91").s().p("AM1HkIhDhCIhCBCMgo9AAAIAAi5IA6hIIg6hKIAAnvIA2g1Ig2hYIHYAAIAyAzIAzgzIJ5AAIBAAlIAlglIOcAAIBBAhIBEghIXfAAIAAAiIhBBCIBBBCIAAIlIhBBBIBBBDIAAB4g");
	this.shape_114.setTransform(557.8,602.7);

	this.instance_3 = new lib.path();
	this.instance_3.setTransform(557.8,602.7,1,1,0,0,0,193.5,48.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#563320").p("AC0sIIgCYSIllgBIAC4Sg");
	this.shape_115.setTransform(721.2,618.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#9B5F2F").s().p("AizMJIAC4SIFlABIgCYSg");
	this.shape_116.setTransform(721.2,618.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#563320").p("ACysJIAAYSIlkAAIAA4Sg");
	this.shape_117.setTransform(393.5,618.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#9B5F2F").s().p("AixMJIAA4SIFkAAIAAYSg");
	this.shape_118.setTransform(393.5,618.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#4C952B").s().p("ADaEvQh4gDiEgOQiugRgmgZQgagSjWAKQjJAJgGgZQgKgsBmgaQAzgNA1gEQgrgHgmgOQhLgcAbgkQAdglA+gCQApgCBVARQAAiRAugKQARgDASARQARAPAGAVQAWhRA4g+QA9hDBJgJQBNgKBeA+QBiBABABqQBshXBaAGQBAAEAbAlQAPAWgWA9QgUA5goA4QA3gVAgAFQAdAFAEAYQADAXgUAdQgVAfgnAYQBdgiA3AJQAyAIgKAnQgIAhjAAcQiZAWhjAAIgXAAg");
	this.shape_119.setTransform(427.1,503.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#824916").s().p("AgPgPQAOgDAKgJQAFAdACAZIgXABQgBgVgHgWg");
	this.shape_120.setTransform(416.7,329.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#824916").s().p("AiVAXQgHgLAdgNQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIADAAQCVAGB6gdQgaAag1AIIhZAHQg3AFgnAAIgVABIgGAAQgKAAgBgBg");
	this.shape_121.setTransform(442.1,528.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#824916").s().p("AAAENQAAkYgFh2QgHiTgcj8IAAgBIAXgBQA6JBAAHAQgXANgOAXIgEkGg");
	this.shape_122.setTransform(425.1,478.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#BA7547").s().p("AgQDqQgOiRACg+IAEhtQABhBgCguIgNhpQgHhAAJgqQAFgEAPgRIAMgPQgCBHANBSQAAABABABQAAAAAAAAQABABAAAAQABAAABAAIAAAEQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAaAAIgjAOQgBABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIAHBuQABAEADAAIAQgCIgUAGQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABIALE0IABABIgEABQgEABAAAEIAEAvQAAAEAEgBIAWAAIgWACQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAABQAAAAABABQANBWgNBXQgQAQgKATQAFhJgMiGg");
	this.shape_123.setTransform(339.4,384.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#BA7547").s().p("AuEA6QAOgVAPgRQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAIGNgXQH1gYNngkIgCABIgOALIgfAVQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQhmgBkYAHQqiARq5A9g");
	this.shape_124.setTransform(428.4,424);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#563320").s().p("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");
	this.shape_125.setTransform(427.6,428.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#9B5F2F").s().p("AhqIFIgCgDQAAo3g+nIIDggKQAJBoASCWIAfD9IA7H3IgCADQioAZhsABQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_126.setTransform(440.9,476);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#9B5F2F").s().p("AhhgVQBhABBcgOQABAUAFAmIi8ALQAAgegHgag");
	this.shape_127.setTransform(428.1,328.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#E5A370").s().p("AtoHiQgGgGAEgeQAFghAAgJQAAgfgCgYIgDgVQgBgNAHgGQAIgGAnACIAwgDQAEgBgBgDQAAgEgEAAIgtACQgcABgQgEQgKgCgGgKQgGgKAFgKQAFgJAMgCIAWgDQADAAAAgEQAAgDgEAAIgPAAQgJgBgFgEQgEgFgBgJIAAgQIgIjWIgCgdQAAgTAJgIQAHgFASgEIAagGIAzgQQABAAABAAQAAgBAAAAQABgBAAAAQgBgBAAgBQgBgEgDABIgZAIQgZAHgVADIgOADQgLACgDgBQgHgEgCgIIAAgPIgEgiQgDgWADgLQADgMARgHQAKgFATgGQABAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAgBAAIgtgBIgBABIAAgBQgIg9gEhmIAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBIADAAIACAAQCsgPDSgPQClgNDPgNQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIACgBIAagCQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABgBIEKgQQB1gHDbgJIFQgPIAEAvIACATQACANgCAFQgFAQgwAFIgiACQgDABAAADQAAAEAEAAQAegEAVABQATAAAEABQAJADACANQADAOgFAiIAAAwIACA3IAEAYQACASgCAGQgGAMgnADIg0ABQgEAAAAAEQABAEADAAIArgBQAaAAAPAFQANAEAEADQACADAEAOQACALAAAaIAHBJIADATQACAPgBAEQgEAJgPADQgHACgQAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAABAAAAQAAABAAABQAAABAAAAQABABAAAAQABAAABAAIAXABQARAAAFAEQAIAFACALIAAATQABAoAEAwQAGAzAGAkIADASQABAMgGAGQgDADgPADQgKgBgMAEQgBABgBAAQAAABgBAAQAAABAAAAQAAABABABQABADADgBIANgDQAYgCAJAaQAIAXgJAXQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAIgFgCIgBACQiWAFkzANQl4AQmtAWImTAWIg6ADIgWADIgDAAQgNAAgDgEg");
	this.shape_128.setTransform(429.7,376.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#483223").s().p("AADBZQirgEjNgOIiqgNQgZgWgPgUQgegmAwAJQA3ALHRghQHDghCSgXIAZAtQAXAugGAQQgeBMmeAAQhEAAhPgDg");
	this.shape_129.setTransform(745.5,439.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#153011").s().p("AwVPgQgTgVAFgwQgDAIgFAHQgOAXgfACQgeACgKgXQgFgNAFgbQAHgjALghQgOAQgXAMQgzAYgogdQgngeAJg4QADgUAIgPQgQAIgTAFQgzAMglgbQgmgcAIg3QAEgYAKgOIgQAIQghAOgcgCQghgDgXgbQgXgdANgcQAOgdA0gJQgTAAgTgHQgfgLgSgZQg3BEhkgEQhjgFgxhKQg3ASg5AAQgsAAgrgKQAPALABAeQACAxgmAMQgkALgjgdQgggbgHgpQgBAYAOAkQATAzACAHQAIAggMAeQgMAhgdAEQgvAGgjhQQANArguAdQguAcgmgaQglgZgCgyQgCgxAegjQhCgTgchYQgdhZAzgtQA8jSBliHQBsiUB5gNQBXgJDxhQQDfhKBqgBQBHgBBvg/QBPgsCFhiQCwiBAjgXQBwhLBCgTQKei8HiAPQD7AHELA6QD6A1E5BtQAxARBXBUQAjAhCCCJQBrBxA8AyQBYBJA1ADQC8ALBmB5QBcBrgDCZQgDCXhZBxQhhB6icAPQggADgwA2QgrAxgjgIQgygLghgtQghgtAEg0QgIA4gqAtQgqAsg4AMQgiAIgPgRQgJgKgBgcIgEhtQgDBFg3A6QhDBFhVgHQAHA+hFAeQhGAdgogvQgaAkg0gPQgngLgLgcQADAkggAhQgnApg1gDQhDgDg7g+QAGASgBAYQgDA7gtAYQguAYgygeQgKgGgJgHQAHAWgBATQgBAfgYAWQgZAXgcgJQgSgGgUgaQgZgigNgpQgNgpABgqQgNBIgiAkQgWAXgfAGQggAHgZgPQgagQgBgiQgCgjAagOQgdgCgWgXQgMgOgGgPQABAhgZAfQgjAqgwgGQgvgFgZgwQgYgxAXgpQgfAogWASQghAcgiAFQgoAFgegiQgSgWABgUQgKAWgPATQgYAeghAQQAIAegZAbQgYAaghABQg1ACg8g3QACAlghAZQggAagkgKQgjgJgPgnQgGgRAAgQQgKAPgRALQgmAYgmgMQgkgMgXgkQgWgjABgpQAChIA/hEQgiAjgVAQQghAZggAHQgmAIgigUQgcgRgHgZQAAAZgWAWQgcAbghgJQASAFAFAWQAGAVgNAOQg6gGgrgnQAUAZAIANQAOAXADAVQAFAYgMAXQgMAYgXAEIgshJQAQArAEAYQAHAmgKAdQgMAhgkAOQgOAFgMAAQgUAAgPgOg");
	this.shape_130.setTransform(757.5,214.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#1E4914").s().p("AEcFrQgTgEgIgTQgEgJAAgHQgIAOgQAJQgZAPgagGQgZgGgQgYQgQgXAEgaQgOANgUgKQgUgKgFgUQgDgSAHgVQAEgOANgWQgQACgTALIghAUQgSALgQABQgWABgMgMQgLgKgCgRQgBgOAEgRQAJgkAXgcQgSAMgXAEQgrAJgigWQgBAbgUAWQgUAWgbADQgcADgYgQQgYgQgHgaQAEASgKARQgLATgTAEQgSAFgSgMQgSgLgEgTQgRAWgeAFQgeAFgXgPQgYgPgIgdQgIgeANgYQgiAagtgXQgtgYACgpIANABQgIgkARgsQALgdAeguQAlg6AYgcQAlgtAogYQAsgZA+gKQAqgGBIAAQDugCDjASQA3ADAhAGQAwAHAlAOQBSAdA6BFQA6BFARBVQAKA0gIAwQgKA2geAnQghAqgzAQQg2ARgtgVQACAsgRAqQgRAqghAdQgcAZgaAAIgLgBg");
	this.shape_131.setTransform(590.9,268.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#685144").s().p("AjIE4QgBAAAAgBQAAAAgBgBQAAAAAAgBQABAAAAgBQAvheA6gcQAegPA8AFQBBAGAZgHQB8ghgNjGQgLijAChaQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAAAQgBA5AEBPIAHCIQACA0gHAlQgJAygcAhQgwA6hkgGIhGgCQgmADgcAaQgpAkgfA9QAAAAgBABQAAAAAAAAQAAAAgBAAQAAABAAAAIgCgBg");
	this.shape_132.setTransform(765.6,619);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#685144").s().p("AjpInQgHg0Ahg9IAbgzQATgfATgNQAVgOAkgDIA+gDQAsgEAVgHQAmgNANgcQAHgRACghIADgzQAIhCAjhhQAviAAIgdQA1jCgzjMQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQABgBAAAAQABAAAAABQABAAAAAAQAAABABABQAqCngcCiQgLA+gmBoQgrBwgLAyQgFAUgEBFQgEA6gNAdQgIASgYAKQgLAEghAGIhYAIQg3AEgbAXQgLAKgNAXIgUAlQgUAigHAYQgLAgAFAgQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABIgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_133.setTransform(764.1,595.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#685144").s().p("AgGJRQgNh2ANiyQASkWABgSQAEh5gNivQgPjGgHhjQgBgBABAAQAAgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAHBjAPDGQANCvgEB5QgBASgSEWQgNCyANB2QAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_134.setTransform(816.6,598.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#685144").s().p("AAEJ3QhGkUBClFQAdiMgKi8IgblLQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQAHBkAWDLQANCygXB9IgcChQgQBdgBBHQgDChApCmQABABAAAAQAAABgBAAQAAABAAAAQgBAAgBABIAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_135.setTransform(801.8,580.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#685144").s().p("ABjFAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAchQgWhfQgPhBgxhkQhCiPhaiTQgBgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAABQABAAAAABQBvC1BECbQAlBSAKBBQAOBSgZBGQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgBAAg");
	this.shape_136.setTransform(754.5,340.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#685144").s().p("AFPGuQh1j7irjXQipjZjZisQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQDYCtCqDZQCrDYB2D7QAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBABIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_137.setTransform(763.5,340.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#685144").s().p("AhbaJQgmi9AQi2QAEg0AWiJQAUh3ABhHQAChBgLhmQgOiJgCgeQgIiHAfi8QAnj1ALhmQASjCgMifQgOirgviwQgYhdgHgxQgKhPARhBQAPg/AwhVQAagxA3hgQAthVAOhBQARhTgbhOQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABQAbBPgSBVQgOBBguBWQg4BjgbAxQgvBWgPBBQgRBNAVBnQAMA7AfB1QAjCdAKCeQAHCUgUC7QgIBDgpEHQggDJAPCdIAQCnQAIBhgFBHQgFA4gTB3QgTBygEA8QgMCvAkCwQABABgBABQAAAAAAABQAAAAgBABQAAAAgBAAIgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_138.setTransform(806.8,472);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#685144").s().p("AApMKQgMgMgGgYQgEgMgEgcQgHgugDheQgChoAHjSQADhZgBgkQgChEgNg3IgdhuQgShDgIgvQgMg9gBgfQgDgzAOgpQAMglAWgrQANgZAbg0QAYgqAMg8IARhtQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAABIgRBrQgMA8gXApIguBZQgbA0gJAqQgNAzANBLQAEAXAZBlIAZBeQAOA2AHAmQAHArgBA7QgBAjgEBEQgGDHACBkQACBRAGAvQAEAiADANQAGAcANAOQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgCABIgCgBg");
	this.shape_139.setTransform(810.7,405.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#685144").ss(2.8).p("AIk84IgGAhQgIApgPApQgvCGhWBfQg4A8lXEdQk9EFg1BQQhBBhgjFCQgbD6AAEBQAACTgUB7QgTBvADAvQAEBHBKJ0QAlE7AkEr");
	this.shape_140.setTransform(871.9,476.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#483223").s().p("EAFgAg3QADgPgGgRQgKgigqgMQgpgLhGAdIg/AfIh4AAQALgWABgaQgBg0g6gPQg8gPgzA0QgQAQgNAVIgLASIhNgCIApg1IBhgoIArg0QA2g2A0gMQAqgJBdgLQBRgRAwg6QA2g+BFjmQBBjTgBhGQABgxgQhTIgPhJQBLkqAvlJQBdqPiOiWQiJiQjShNIiig2Qhcgfg2gfQiHhNjLiwQjJiwg/hgQg2hPgUhWIgLhGIBFBZQBXBtBdBmQEnFEDpB8QCEBHA/g3QA6gygRiMQgPiLhRiwQhVi7iFioQjmkiBWhuQArg3BZADIAlB/QAxCcA+CQQDLHOEMCrIgOAdQgPAlgHAoQgZB+A9BqQAWAoBLBzQBPB7ApBEQCQD1AAB7QAABBgaCCIg4D8QhPFdAKCLQAPDPACBLQAEBhgIBJQgFAggbBLIg3CPQhIDBANA/QAQBEAcBTIAaBFg");
	this.shape_141.setTransform(737.3,444);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#2E211A").s().p("EgEKAgpQADgPgGgRQgLgjgpgLQgpgLhHAdIg/AfIh4AAQAMgXAAgaQAAgzg8gQQg9gPgzA0QgPAQgOAWIgKARIhOgCIAqg0IBhgpIArg0QA2g2A1gLQAqgJBdgLQBRgSAxg5QA1g/BGjlQBAjUAAhGQAAgxgPhTIgQhJQBMkqAvlIQBbqPiNiXQiJiPjRhNIikg3Qhcgfg3gfQiHhMjKixQjJiwhAhfQg1hPgVhWIgLhGIBGBZQBXBtBdBlQEnFFDoB7QCHBHA+g2QA6gygQiNQgPiKhSiwQhWi7iFioQjmkiBWhuQArg3BYADIAqCPQA5CvBJCcQDoH1EzCFQB3A1BCj+QA2jNgGj6QgEiiA1A7QAaAdAcA+IgWCBQgYCdgMCKQgnG5BaBWQBdBYE2jZQCwh8C0ioQA+g5CRj8QCQj2AXhUQAThDARBXQAIAsAEA5QhFCGhXCTQisEnhYBEQgdAYhnBDQhmBEg9AwQjPChhLC0QhjDtgvE6Qg2FiAqEYQAfDHBMIjQBGHOApBHQApBHBuAsQA3AXAvAIg");
	this.shape_142.setTransform(799.4,445.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#A69854").s().p("ADMDaQkYgLiwgRQjBgSAqgRQCmgVA3gTQA5gTgxgXQg4gZkvggQlRghlCgEQBVgeD4gNQBbgFAbgHQAmgLgfgYQg4gLhcgUIhRgSICMgRQCsgUCfgNQH8gnDIAyQBpAbChAEQBXADDFgGQCrgFBKAFQBwAJAnAiQBHA/hcCLQgcAtgqAuIgkAmQhQAZkkAAQi6AAkRgKg");
	this.shape_143.setTransform(769.6,656.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#1E4914").s().p("ADxLAQgdgPgIgdQgiAlg4gSQg4gSgNgyQgOgwAegwQAbguAygTQhHgChBgfQhAgfgug1QgEAbgSAUQgTAWgZACQgbADgTgWQgUgXAIgYQgUA2hDAJQhCAIgigvQAFAxgwAfQgwAggrgYQALAXgKAbQgKAbgXAKQgWAIgWgHQAIAagNAVQgNAYgeAIQgbAHgbgJQgwgSgbg8QgIAcgaARQgaAQgdgGQgbgGgSgaQgRgaAGgcQgHAgglAIQgmAIgUgZQgWgZAOgjQAMghAbgIQgbAGgcgKQgggLgSgZQAFAXgRAWQgRAVgZgBQgYAAgQgWQgPgTADgVQgHAegfARQggATgggMQgggMgMgkQgJgeALgYQgKANgQAHQgWAKgVgJQgUgIgKgXQgHgPADgPQgHAOgOAJQgWAOgVgHQgVgHgKgXQgFgNABgLQgMAVgkADQgxADgWgkQgjg6AvhkQAghCAsgpQAxgrA2gFQC1ilBihNQCiiACUhJQCchNDag0QF2hcGwgFQF3gFG5A8QB6ARBKARQBrAZBPApQBdAvBBBJQBGBQATBdQAXBugwCTQgtCGhOAvQgyAeg8gNQg+gNgVgyQgGAXgGAqQgHAugEATQgJAkgRAZQgVAegdAKQghALgfgUIgGgEQACAVgIAYQgSA4gwANQgxANgrgnQgqgoAJgyQgPBCgzAyQgzAyhCANQhDANhCgaQg0gVgjgmQAUAhgHAtQgIA+gwAhQgtAgg8gFQg7gEgvgjQAMAcgOAeQgNAfgdAJQgLAEgLAAQgSAAgSgKg");
	this.shape_144.setTransform(813.4,296.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#28601B").s().p("Ar3X0QgEAPgNAKQgOAKgPgBIgphFQALAjglAYQgmAXgfgVQgegTgDgqQgDgfAOgaQgOAOgagCQgkgDgRgbQgPgYgBgjQAAgXAHgpQgSANgHAoQgIAsgMANQgWAZgmgNQgkgMgNgiQgKgcAGgmIAFgaQgJAHgQAEQgxAOgZgiQgng0AqhpQgfAugzAbQgzAbg4gBQALhjAvhVQgMAJgWgBQgrgCgNghQgNgfAPgkQANggAdgaQhOAphVgGQAYAYAKAMQASAVAGAVQAIAYgJAYQgJAagXAIIgghEQACAQgOATQgXAdgfgGQgegFgTgdQgSgagDgiQgWAegoAHQgoAHgfgVQADhiAkhdQgsAfgyAPQgRgOgGgXQgFgXAIgVQghADgfgOQgdgLgUgWQASAXgGAhQgHAlgeAPQgfAOghgSQgZgNgJgXQAEAfgZAeQggAkgpgJQgpgKgNguQgIgdAIgWQgUAagdATQgrAcgxAEQgCglALglQALgkAXgeQgfAcgeANQglAPgfgMQgigMgDgrQgBgTAGgMQgSAJgTAFQgkAJgkgIIBJiYQgSAcgrAEQg3AEgcgmQgbgmAKgzQAKgxAmgeQhEALgzg8Qg0g9AWhBQAihpAmhOQA+iEAxgIQAkgGA4ARQAzAOAmgNQAxgQAChPQACgvgThxQgThtACglQAFg/AzAGIBvATQBbAPAUgEQAfgFB6hwQA/g6BQhOQAZgXAPhBQAFgWAQhkQALhKAOgdQATgpAhALQAIACCeBkQCSBbAUgGQAOgFBChtQBIh1AEgEQA/hCBgAkQAeALA7AgQBAAiAgANQA6iAB8hJQCJhQBgBGQAcgcApg6QAvhEARgUQBMhaBQAjQAYALApBMQAlBGAfAAQAWAABXhSQBVhTAVgCQA8gHBKBAIA+A0QAkAdAhALQAlAMBOgSQArgKBtgjQBmggAxgKQBNgPAjARQAUAKBdCNQBZCIAbACQAzAGDyglQDtglA3AIQAdAFBBB6QBBB6AcAEQA8AKDBAVQDkAZAYgIQByghCrDdQCJCxBCCsQBZgKAhExQAMB0AAB4QgBBzgMAzQghCMijCyQhnBxgPASQg6BIgUA5QgmBth5BBQgmAUgqANIgiAJQANAwgqAnQgqAogugRQAFBBhGAjQhFAjgxgsQACAogcAhQgcAhgnAEQgoAEgigbQgdgXgJggQAEAhgcAcQghAggqgDQgngCgjgcQgfgZgWgnQAeBHgrBMQgqBMhMAMQhMANhBg5QhBg5AEhOQgPArgrAXQgrAXgsgLQAZAvgpAwQgoAvg4gDQgzgDgugmQgogfggg0QgPA1hbAXQhvAdiPACQhVACitgKIoGggQgpAQgtgHQgmgGgegVQAPARgVAdQgaAlgjgLQgfgLgVgkQgOgZgMguQALA5gaA3QgbA3gyAcg");
	this.shape_145.setTransform(776.6,229.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#5C9742").s().p("A0DB8QhMgGgtgTQg4gXgggwQgKgRA3gHQA7gHgEgYQgFgckpgRQkugNgPgGQgWgHAngOQAmgNApAAQKvAEWQAmQVhAkE8AUICDAbQhNAQhzAVQjmApi9ARQjMASh8gIQhggGgXgSQgKgIBCgHQA+gHgggPQgmgRifAYQhAAJiYAdQg2ALiLAFQhhADhjAAQgVAAk4gNQkjgLhLADImtAXQkSAQhbAAIgkgCg");
	this.shape_146.setTransform(772.7,502.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#6BA84D").s().p("AG9EKQhuggDvhNQC6g8CtgeQA2gKh9gZQiCgajNgPQo4gumIBQQggAJgSAbQgfAugIAHQhIBHkEAOQkRAPiMg/QgrgTgwgkQgygmgTgJQgUgKhag3Qhkg/hIgoQj6iJi/gTQCwgVeyAxQeRAwCLAVQBlAPgcBgQgPAxgiArQjBAbi7AhQl3BCAaAeQAZAeC0ANQBaAHBgAEQAIADi2ALQjGANjWAJQkaALiwAAQjTAAg6gQg");
	this.shape_147.setTransform(759.3,518.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#305E4C").s().p("ACAG5Qg8gNgjgkQguAag5gFQg4gFgrgiQhNAshdgMQhdgLhAg9QgSABgSgLQgTgLgMgUQgRgfgBg3QgBhCAUgpQANgaAWgRQAYgSAagCIgXgEQgOgQAAgVQAAgXAPgQQAPgPAXgBQAXgBAQAOQgLhFAhgTQARgKAVAIQAVAIAJASQASAhgRAuQAVgRAdAAQAYAAASALQgJgJgCgQQgBgVAOgNQAOgNAWADQAVADALAQIAOgbQgYgJgPgQQgSgSgCgVQgBgYAWgPQALgIAKgBQgKgFgIgLQgQgUAIgUQAGgQATgHQASgHASAFQAZAHAjAhQgPgUgEgXQgEgaANgSQAOgTAbACQAUACAIAMQgHgTAFgVQAGgdAUgMQAXgNAaAQQASALADAQQADgOALgNQASgSAXADQAWADANAWQAKASgDAQQAFgOAMgKQAQgOATgCQAUgCASANQARANAEATQADAUgOARQgMAQgRACQAygCAJAZQAHAQgNAQQgLAPgTAIQglARgogEQAJAEAgAAQAZgBAEAOQAEAQgUAOQgeAWgngCQARAEAEAVQAEATgKAQQgJANgSAKIgQAIQANgBAOAJQAYAPgDAZQgDAYgaAKQgWAIgSgHQATALgDAeQgEAigbAMQgZAMgegLQgXgJgQgSQAOAWgCAcQgDAkgaAUIAogCQAMASABAYQATgGARAMQAOAKAEANQgBgKAGgLQAHgPAPgFQAOgFAPAGQAQAGAGAOQgFghAFgRQAEgNAJgJQAKgKAMAAQAWgBAMAZQAKAUABAdQAbg5AkgKQAYgGAVASQAVASgJAWQgEAHgNAOQgMAMgDAJQAMgXAfAAQAeAAAQAWQAPAVgEAdQgEAbgRAVQAMgJARAAQARABALAKQAKgRAXABQAXABAOAQQAMAOAGAWQADAPACAZQioApiwABIgGAAQg+AAgqgKg");
	this.shape_148.setTransform(877.3,461.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#3C7168").s().p("AglGYQjQhBiMiMQgvgvgOgUQgegoABgoQgShAAOgvQAIgcAUgVQAWgWAbgFQAdgFAaARQAaASACAcQAEhBAdg+QAcg8AvgxQBahcCIgmQBDgSA6AEQBEAEAvAjQArAgAWA3QAUA0gEA5QgFBehHBvQgUAegsA6QgsA9gUAdQAxgeA7gFQA7gEA0AYQA0AXAlAwQAkAvAIA5QAJA6gbAfQgQATgdAJQgUAGghADQgwAEgvAAQihAAiVgvg");
	this.shape_149.setTransform(880,455.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#305E4C").s().p("ArtIoQgEgFAAgGQgBgGAEgFQgFg3BIgQQAcgGAjAFQAWADAoALQgGg0AAgwQAAgbAJgMQANgTAeAEQAXADAbAPQgUhTAOhUQADgTAHgHQAJgIAPACQAOADAIAKQALAOAFAjQAKgTASgLQASgLAUAAQgKgMgXgXQgYgXgKgNQgRgUgIgWQgIgZAGgVQAFgSAQgOQAPgNATgDQATgDATAIQASAJALAPQgHgKACgNQACgNAJgJQAJgIANAAQANgBAKAIQgMgdgEgQQgHgaAEgVQAEgYAWgPQAWgQAVAJQgpgigTgeQgbgoAHgmQAEgbAWgVQAVgUAcgDQAcgEAZAQQAaAPAKAZQAGgcAggHQAhgIARAXQgWghAAgpQgBgqAVghQALgRAPgJQAPgMARACQAQABAOAMQANALAHARQAJAagEAqQAQgkAUgTQAbgaAcAHQAdAGAEAjQAFAigaAOQANABAWgFIAigHQASgCAQAIQASAIACAQQAFAhg4AVQAqANAIAcQAFARgNAPQgOAPgPgHQATAPACAbQADAagMAWQgWAmg4ASQAnAaAOAVQAKAQAAASQABAUgLANQAVAYALAbQALAegCAeQgCAfgQAbQgRAcgbAOQAWgHAZAFQAYAGARAQQgBgyAhgrQAhgrAygMQAVgFAUAEQAWAEAMAOQAOARgCAbQgCAWgMAYQgfA+g3ApQAMgIAOAJQAOAJABAPQAAAOgLAMQgKALgOAFQAdAcAOAlQADgNAQgEQAQgDAMAJQARANAEAmIACAdQADAQAGALQAigTAogFQAogEAlAKQAYAGAPARQAQATgKASQgJASgnACQjfAMivgbIhGgLQgpgGgeACQgTABhYAPQhAALgogJIgfgIQgUgGgMgCQgjgFhbAXQhQAUgqgSQhfAahjACIgVAAQhZAAhWgTg");
	this.shape_150.setTransform(719.6,453.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#3C7168").s().p("AKJJLQh/gElIgnQkdgjioAFQg/ACkSAhQjNAYiEgSQgkgTgBgwQgBgvAjgVQgOgIgGgSQgFgSAFgRQAHgcAhgcQA+g4BTgUQgJh1ARhuQAThyAvhkQAxhpBPhSQBShVBlguQCXhEC1ARQB9AMBGA4QA5AvAYBPQAXBJgMBPQgUB/hyCPQAtghA9AJQA9ALAhAvQAgAugHA9QgHA8gpAoQAeANAogVQAYgMAsggQA2ghBCgCQBCgDA6AcQA4AbArAzQApAxAUA+QApgHApAUQAoATAUAlQAPAagFAVQgJAohEAOQg4AMhBADQgeACgiAAIg7gBg");
	this.shape_151.setTransform(743.4,449.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#3F835A").s().p("APKKTIqxgMQk8gPlHgZQqOgygxg1Qgxg1AliNQALgtASgvIARgnQAgggAsgQQAtgPAsAHQgggbgPgSQgYgcgEgcQgFgfAZgbQAbgbAcAOQAiARgBA/QALgOARgJQARgIASAAQgggRgLgQQgHgMABgOQABgPAKgHQALgIAOAIQAGAEACAEQACgHAIgGQAPgMAQAFQAOAFALAPQAHAKAKATQBDgtBTgJQBUgIBLAeQAQgyAzgYQAzgZAxATQACgQgMg0QgJgqALgXQADgGAJgMQAJgLADgHQAHgNADguQADglASgNQALgJAQACQAQACAJALQAKALgBAPQgBAKgDAHQANgQAUgIQAZgLAbAEQgdgWgLglQgLglAOgiQAOghAjgRQAhgSAiALQAjALARAkQASAkgOAhQAVgQAYgEQACglAGgZQAIgiASgWQAUgaAggHQAigIAXAUQARAOAGAaQAEAWgEAaQgCAMgKAjQgJAdgBASQAegoAggLQATgHAVAFQAVAFALAQQAMARgIAWQgFANgJAGQAngLAqAQQAyASAYAsQAXArgNA0QgNA0gpAcQAXgMAaALQAbALAKAZQAJAXgHAbQgHAagTASQglAig7gCQApAGAfAdQAgAeAFApIAKgcQAHgQAKgJQALgMAPgDQAQgDAMAJQAMAJgCASIAAABIAEgDQAOgIANAFQAPAEADASQABAHgCAFQAUgSAbgIQAjgLAhAKQgOgjgEgVQgGgiAMgZQAOgeAjgMQAigMAhAMQAfALAYAbQAWAZAMAiQAKAbAFAlQADAXACAtIASFbQADAtgCAYQgCAmgNAdQgOAhgeAUQgYAPgXAAQgJAAgIgCg");
	this.shape_152.setTransform(868.5,434.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#4F9F6D").s().p("ACFMWQlugElxgdQrig6gFh7QgHiVBuhdQAugoA4gRQA2gSAwAJQhtiQAYh2QAciJDUgtQAJhWAkheQAnhiA4hKQCIi1CdAzQBJheCEgjQCTgnCUA5QCuBECJC9QCfDcBbFpQApiNCGg9QBugxBaAaQB/AmBTBDQCNBtAJCyQAJCsjKDXQg/BEhMA/IhAAyg");
	this.shape_153.setTransform(885.7,420.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#376359").s().p("ACGFMQgtAVgpACQgwABgegaQgfAPgtADIhQACQgTABg7gOQg8gPgGAAQhCgEgkADQgkAChzgDIhsgCQAMgXAYgNQAYgMAZACQgLgFgDgNQgEgMAGgLQAGgKANgCQANgCAKAHQgFgRAHgSQAHgQAOgNQASgQAtgSQgYAFgSgDQgXgDgFgSQgFgNAKgOQAJgNAQgDQANgEAQADIAdAIQgOgHgEgSQgDgSALgMQAMgLASACQASADAIAOQgIgWAUgQQATgSAXAHQAVAGAKAWQAKAXgIAWQAFgNANgGQAOgGANAFQAMAFAGAOQAHANgFANQATgQAYAHQgJgXASgWQASgUAYACQAYADALAaQALAagPAUQAagTAdAJQgPgUgDgaQgCgZALgXQgTAAgQgPQgQgOgCgTQgDgUALgSQALgRASgHQgQACgOgNQgNgOAAgRQAAgRAMgOQALgNAQgGQAfgLAjARQgUgpAGguQAEgcAQgGQAIgDANACQAXAEASANQAVANANAUQgIgjACgSQACgOAHgMQAIgMAMgEQARgGASAKQARAJAIARQAHAOACASQABgHADgGQAHgMANgHQAOgGALAGQAIAFAIAQQAPAegBAiQgBAigPAeQAOgEAQAEQAPAFAJAMQAKAMABAQQABAQgHANQAbgLAdgBQAegBAbAKQgSgTgHgMQgNgSgEgQQgEgUAHgTQAIgUASgHQAWgIASAVQAHAIADAIIACgGQAGgRAOgCQAJgCAIAHQAIAGADAKQAEAKgCARQAFgkAJgQQAJgPAOgIQAQgJAPAEQAPADAKAOQAKANACAQQABANgEAUQAFgGAIgFQAYgPAYAJQAnAQARA/QAUBLgOBeQgJA+gfBrQgMAtgKAZQgPAlgVAZQhEBQifADIgJAAQiPAAhLg+g");
	this.shape_154.setTransform(614.7,458.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#478577").s().p("AAKGSQg+gGkuABQknABhkgMQgXhjAQhUQAQhTA0gwQA1gzBQgDQBWgDBoA2QAPj2BbiAQBNhsBkAKQBWAJAwA0QAyA2AmCEQAMinCXAAQCgAHB7DnQAvBWAxCGQASAxA/C6QiXAMiqAKQjpANh0AAQg2AAgdgDg");
	this.shape_155.setTransform(630.1,451.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#685144").s().p("ADFGYQgmhjgsgoQgggcgtABQgxAGgegCQgwgDgjgcQgigbgTguQgVg0gDhHQgCgjAFhZQAJiagCiUQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABABQABAAAAAAQAAAAAAABQABAAAAABQACCUgJCaQgGBnADAqQAHBVAlA1QAcAqAwANQAlAKA3gHQAYgDAKAAQATgBAOAHQAoAQAiA4QAWAkAXA8QAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBABQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_156.setTransform(324.9,626.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#685144").s().p("ADkLUQAHg3gWhCQgQgwgkhCQgXgrhCgLQhKgFgigMQghgLgMgMQgNgPgFgfQgEgcgIhcQgHhLgJgtQgJgrgsigQgih9gLhRQgajTApjVQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAABQguDwAnDrQAMBEAoCNQAmCFALBKQAEAYAFBHIAEBIQAGAuAWARQAeAXA/ADQBJADAZALQAcANAUAlQALAWASAsQAVAvAIAjQALAtgFAqQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_157.setTransform(326.3,595.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#685144").s().p("AABMNQANibgNjqIgTmFQgDihAMjlQAQkGAHiDQAAAAAAgBQAAgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQABABAAAAQAAAAAAABQABABAAAAQgHCDgQEGQgMDlADChIATGFQANDqgNCbQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_158.setTransform(273.9,599.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#685144").s().p("AgHNAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAgBQApjWgDjSQgBhegOh3QgFgogXiqQgYiqAMjrQAWkPAIiGQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAIgcGwQgKD3AdC3QAfDTABC8QAADOgkDAQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgBgBg");
	this.shape_159.setTransform(288.7,575.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#685144").s().p("AhmGiQgZheAPhwQALhWAohzQBIjRBmjcQAAgBABAAQAAAAABgBQAAAAABAAQAAABABAAQABAAAAABQABAAAAABQAAAAAAABQAAAAgBABQhiDThFDJQgrB4gNBWQgRB0AaBiQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBABQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_160.setTransform(336,259.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#685144").s().p("AlSI3QAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQBzlDCkkVQCtkmDgjrQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAQjgDqirEmQilEUhyFCQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_161.setTransform(327,259.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#685144").s().p("EABYAidQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBQAokGgUj/QgDgvgYjFQgSiVAAhfQgBhUAMiSQAOijAChCQAChpgKh7QgIhegRiFQgikFgLixQgOjvANjMQAOjNAqjSQAdiTAFhPQAIh8gdhmQgUhHgvhtQg+iSgMgiQhSjWAsiiQABgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAABABQAAAAAAAAQABABAAABQAAAAgBABQgdBrAXB3QAQBXA2B/IBXDUQAuB6AHBiQAFBXgWB7QgMBGgcCKQgnDogGDoQgEC7AaEAQAPCRAjEmQAXDggRDfQgMClgDA6QgFB8AIBjQAFAxAUCnQAQCGADBSQAJDbgiDfQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_162.setTransform(283.8,432.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#685144").s().p("AgtQBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAQgVAGgnIAGhAQAGhOABh1QACh0gHkSQgDhxABgeQABhQALg+IAZiGQARhWAIgzQAShoADgyQAFhWgThDQgNgugag/QgchGgOgkQgUgzgJhLIgOiBQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABQAOBvAIAuQAQBUAcBCQAhBTANAkQAXBFAFA3QAEA/gMBWQgFAfgWB0QgIAtgUBZQgOBPgGA3QgHA6ADBWIAGCQQAGD8gECZQgDBfgIA+QgEAfgDALQgFAYgLAPIgDABIgCAAg");
	this.shape_163.setTransform(279.8,345.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#685144").ss(2.8).p("EgIjgmBIAGAqQAJA2APA3QAuCxBXB8QA3BPFYF4QE9FXA1BqQBBCAAiGoQAbFJAAFTQAADBAVCjQASCSgDA9QgDBehKM7QglGegkGK");
	this.shape_164.setTransform(218.6,439);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#483223").s().p("EgJRAqDQAchuAPhZQAOhShIj+QhSkggEgrQgJhfAEh/QAChjAPkSQAKi2hPnLQgwkbgIgyQgairAAhVQAAiiCRlDQAphcBPigQBKiXAXg1QA8iLgYimQgIg1gPgwIgNgnQELjhDLpgQBkkwAwkDIAyAHQA3AQAbAuQBWCRjmF9QiFDehUD2QhSDogPC2QgRC6A6BBQA/BHCEhdQDpijEnmrQCUjUBli1IgLBcQgVBwg0BpQhAB9jJDoQjLDpiHBkQg2AphdApQhpAtg4AbQjSBliJC9QiPDHBeNeQAvGxBLGIIgPBgQgPBtAABBQAABcBAEXQBFEuA1BSQAxBLBSAYQAuAOBZANQAyAOA3BHQAbAkAQAhIBhA1IAqBFIhPADQgNgngaghQgzhFg8AUQg7AUABBEQAAAiAMAeIh5AAQgbgWgjgTQhHgmgqAPQgpAOgKAuQgGAXADATIkMAOQAMglAOg3g");
	this.shape_165.setTransform(353.2,396.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#2E211A").s().p("EgKfArKQBug8AphdQAqhdBFpgQBNrQAdkGQArlxg1nSQgvmehjk4QhLjtjQjVQg8g/hohaQhlhYgegfQhXhZitmEIicl0QAFhLAIg5QARhzASBZQAYBuCOFEQCSFMA9BKQC4DiCuCfQE2EfBch0QBahygopFQgLi1gYjPIgViqIARguQATgyARgZQA1hMgFDUQgFFKA1ENQBCFPB3hFQEzivDpqTQB0lLA3knIAzAHQA3AQAaAuQBWCRjlF9QiGDehWD2QhSDogPC2QgRC6A6BBQA/BHCGhdQDpijEnmrQCUjUBli1IgLBcQgUBwg1BpQhAB9jJDoQjLDpiHBkQg2AphcApQhsAtg4AbQjSBliJC9QiMDHBbNeQAvGxBLGIIgPBgQgPBtAABBQAABcBAEXQBFEuA2BSQAwBLBSAYQAuAOBZANQA1AOA2BHQAbAkARAhIBgA1IAqBFIhOADQgOgngaghQgyhFg9AUQg8AUAABEQAAAiAMAeIh5AAQgbgWgjgTQhHgmgpAPQgqAOgKAuQgFAXADATIwQAzQAugKA3gdg");
	this.shape_166.setTransform(291.2,398);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#28601B").s().p("AKZXrQgag4ALg4QgMAtgOAaQgVAkgfAKQgjAMgagmQgVgdAPgRQgeAUgmAHQgtAIgpgQIoGAfQirAKhWgBQiQgDhugcQhbgYgQg1QggA0gnAgQgvAmgyADQg4ADgogvQgpgxAYgvQgrAMgrgYQgsgXgOgqQAEBNhBA5QhBA6hMgNQhMgNgrhMQgqhLAdhIQgWAngeAZQgjAcgnADQgrADggghQgdgcAEggQgJAggcAWQgiAbgogEQgngEgdghQgcghADgnQgxArhGgjQhFgiAFhBQgvAQgqgnQgqgoAOgvQg1gLg9ggQh6hAgmhuQgTg5g7hHQgPgThmhxQijiyghiMQgMgzgBhzQgBh3ANh1QAhkxBYAKQBCirCKiyQCqjcByAhQAnALHSg7QAdgFBBh6QBBh6AdgEQA3gJDtAlQDyAlAygFQAbgDBaiIQBdiNATgJQAkgRBMAPQAxAJBmAhQBuAjArAKQBOASAlgNQAhgLAkgcIA9g1QBKhAA8AHQAVACBWBTQBWBSAWAAQAfAAAlhGQAphMAYgKQBQgjBMBaQARAUAvBDQApA6AcAcQBghGCJBQQB8BKA6B/QAggNBAgiQA7gfAegLQBhgkA+BBQAEAFBIB1QBCBsAPAFQATAHCShcQCehjAIgDQAhgLATApQAOAdALBKQAQBlAFAWQAPBBAZAXICPCIQB6BwAfAFQAUADBbgPIBwgSQAzgHAEA/QACAlgTBtQgTBxACAvQACBPAxAQQAnAOAygPQA5gQAjAFQAxAJA+CDQAmBOAiBpQAWBCg0A8QgzA8hEgLQAmAfAKAxQAKAzgbAlQgcAmg2gEQgsgEgSgcIBJCZQgjAHglgJQgTgFgSgJQAGAMgBATQgCAsgjAMQgfALglgPQgegMgfgcQAXAdALAlQALAkgCAlQgxgEgrgcQgdgTgVgZQAJAVgIAdQgNAvgpAJQgpAJgggkQgageAFgfQgJAXgZAOQghASgfgPQgegOgHgmQgGghASgXQgUAWgcAMQggANghgDQAIAVgFAXQgGAYgRAOQgygPgsggQAkBeADBiQgfAUgogHQgngHgXgdQgDAhgSAaQgTAdgdAGQgfAGgXgeQgPgTACgQIggBEQgXgHgJgaQgJgYAIgZQAGgVASgVQALgOAYgVQhWAFhOgoQAdAZANAgQAPAlgNAeQgNAhgrACQgWABgNgJQAxBWAKBiQg4ABgzgbQgzgagfguQAqBognA1QgZAhgxgNQgQgFgKgHIAGAaQAGAmgKAdQgNAhgkANQgmANgWgZQgMgOgIgsQgHgngSgNQAHApAAAWQgBAkgPAXQgRAcgkADQgbABgNgOQANAagCAgQgDApgeAUQgfAVglgYQgmgXALgjIgoBEQgQACgOgKQgNgKgEgPIgSBIQgygbgbg3g");
	this.shape_167.setTransform(295.4,159.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#42642B").s().p("AyYBtQAEhoALh+IALhsIBOAaQBWAhAqAhQgUgZgMgeQgNggAFgQQAMgqB8BlQAKg9ALgTQAPgdAHBfQAqhFA4g0QAygvAhgIQAigIgNApQgQAvhMBeQA8gMAOAJQARANg+AyQAgAAAiAXQASAMAKAMQAahKAmgiQBMhDBADHQAZhlAjgZQAmgZAbBQQAdgLAhAKQAfAJARAUQgLhIACg/QAChAANgUQAjgzBHD3QAVgRAQAbQAMASANArQA9icBDhkQA9hcAaALQAaALgcBaQgeBjhOB/QAdAAALApQADALAFAyQAuh4A2gcQA6gfgTCbQBWhKBCgIQBGgIhaByIBEgdQA6gLg2BQQA7gbA8ARQAuAMAZAcQAbhNAngQQAqgPAHBWQAXhIAhg0QAig3AegJQBMgYgGD3QBKAnAsA5QAWAdAIAVQg2AKiZACIiOAAQghAHgugFQhdgIg/g4QhqgPkhAHQlWAJhjAxQgJAVA1ANQAxANBxAIQBiAHgRAbQgRAahLAEQhjAGjwAGQkXAHg4gFQhMgIgKgRQgLgUBugJQA5gFANgKQALgIgXgJQg7gXhVALQiEASgrAKQhoAYg9AwQgHAFgGAAQgrAAAMkjg");
	this.shape_168.setTransform(276.4,489.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#4F7435").s().p("Ax6CTIgPkTQARg7AdgyQAegzAagOQBDglgLDTQCQi+CmgyQCZgvBeBZQBKBHgxBbQgYAtgnAgIAYgMQAegMAggGQBmgVBWAzQgWhhANhBQANhAAqgIQAsgJBAA7QBFBDBPCNQAdhcA8hMQA5hJAwgNQA0gPAHBFQAIBRg8CvQBOg1ApASQAsATgQBeQByhKBTAFQAoADAJAbQAKAegfA3QAlggA7AaQAeANAWAUQBDhjBMgtQCXheAuEBQAhCMhbA1QgtAbg1gBQhXgehlgfQjIg9hAgBQiKgErJArQsNAwgUAkQgCAEgDAAQgSAAgQjvg");
	this.shape_169.setTransform(269.7,474.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#42642B").s().p("AjeDxQgcgJgRgyQgQgtgDg/QgCg9ALgtQANgzAYgMQApgUAuA5QAYAdAOAeQAGgfANgdQAcg7ApASQAIhOAjgoQAkgnAuASQArARgPBhQgOBWgvBaQAgghA0gfQA6gmAkgFQBmgPiEDnQgqA1i6AWQhjALg2AAQgmAAgQgFg");
	this.shape_170.setTransform(396.1,476.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#4F7435").s().p("AgxE4QhCgChLgHIg+gHQhSiggFiEQgEiLBbgXQBOgUAgAqQAPAVAAAYQAQg+Ajg6QBIh1BkAUQBmAVgHBwQgEA4gYA0QASgXAcgRQA4ghAwAhQA1AkgyCHQgrB1hDBRQgqAyi2AAIgfAAg");
	this.shape_171.setTransform(396.5,476.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#456930").s().p("AmuAoQAOguAdg2QAeg3AagbQAegeAMAVQAOAagNBcQAwhhAxgSQAzgSgEBZQATghAbAHQAOAEAKAKQAbhLAkg0QBFhoAoBxQAogxAzghQAzghAdAEQAgAEgOAxQgQA6hNBrQAggKAXAEQAXAEAFAOQANAkhUAzQBBgUAFAiQAGAkhAAqQA8gPANAdQAGAMgGAhQA1glAuAHQAXADANALIAFAYQAAAagZAKQgIADiEAAQhuABgCAeQAFALAQAAQAEABAdgEQAwgGANAgQAPAlkxAOIk2AHg");
	this.shape_172.setTransform(460.6,483.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#56813A").s().p("AhTEMImHgKIAejRQAthaBIgvQBbg6B5AaQAGgZAUgbQATgaATgJQAVgLAGARQAIAUgQA1QBWhVBfgmQBegnA9AWQBBAXACBTQABBfhSCXQAxgeAxgCQAwgCAYAYQAZAbgRAxQgSA3hHBIQg9AAmRgJg");
	this.shape_173.setTransform(461,474.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#567B3D").s().p("A4tIEIgLoGQgTjIAGghQAOhWBpCMQgQhDAHgxQAHgyAbgLQBFgZCEDdQAAglASgVQARgTAZAAQAZAAATAUQAWAXAFAnQANhEAegmQAbgkAcAGQAdAHALAwQANA3gRBaQBJgvAuAYQAtAXggA+QAkgXA1ASQAkANAYAVQgfiZAPhBQARhIBQgCQBEgBADBfQABAygLBFQAbgUAzAEQAtAEANAMQALgOAggCQAQgBAOACQgfgtgWg9Qgth5AqhLQAphMA2CCQAcBBASBPQAFgIAJgHQAQgOAOAEQAuAMAMC7QA5hBCAATQBBAKA1AXQhAg0g5hEQhxiGAkhMQAjhLBuAuQA3AXAxAmQgjgogZgzQgYgvABgXQABgZAeAZQAkAdBBBcQAviYBNgOQAdgGAbARQAYAOAMAXQATAkg1BvQgbA4geAxIASgEQAWgCAYAHQBNAXBCBuQAPiqBEgYQAcgJAbAYQAcAYAQAzQAqgMA3ArQAcAWATAYQgJglAHgeQAHgdASgIQAugTA8BzQgsi3AQhGQAShTBqAXQBlAWATBfQANBCgcCFQA/AHAoBRQAKAUAdBbQAYh6Aog/QAqhCA5AGQA0AGAWBXQARBCgEBgQgDBCiFDOQhDBohCBaIxoALg");
	this.shape_174.setTransform(320.6,452.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#639243").s().p("A5bHqIgVpjQAHhMAghEQAjhKAygfQB+hPCNDoQAwgpA+gSQA+gSAzALQA4ANAaAuQAdAzgQBUQA2gSBAAvQAhAXAVAbQgkhoAFhSQAFhOAogZQAqgZBAAuQBIA0BQCEQgNh1AnhjQAjhZA4ghQA5giAkAxQApA4gKCNQA3hPAiAnQAjApgTCYQAGAIAPgOQgCiIA0iIQBmkPEPAGQCPAJA4BdQA2BZgPC6QBIgwBgAZQBTAWAlAyQAAiaA2hOQBDhhCYAOQCgAQBAByQA7BpACDqQArhMA1gqQA2gqArALQAvAMATBKQAVBSgTCSQghEGluCFQhyApiGAYIhvAQg");
	this.shape_175.setTransform(319.5,445.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#A69854").s().p("AwKDLQg8g6guhHQhciLBHg/QAngiBwgJQBKgFCrAFQDFAFBWgCQChgEBqgbQDHgzH9AoQD/AUDYAeQiLAghaAQQgfAZAmALQAbAHBbAFQD4ANBVAeQlCAElRAhQkvAgg5AZQgxAWA6AUQA3ATClAUQAqARjAATQiwARkYALQkRAKi6AAQkkAAhQgZg");
	this.shape_176.setTransform(321.6,670.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#6EAC4F").s().p("Eg7PASDQgGn/AJoDQASwGBLgWQBlgeachqQa7hsEoAPIATAMQAVAPARASQA2A5gPA8QgNAzjIBBQhmAigbALQg4AYAIAUQAIAUAmAFQANACBFACQB9ADAuA1QAcAfjXAWQhWAJmaAaQlbAWibAXQjhAhARAzQASAyBlAOQBCAJCdgEQCrgFBCAFQB5AJAsAqQArApkyATQg9AEp3AVQnXAQjOAdQkiAoBIBNQBIBNDxAfQChATFPAIQF9AIB1AJQDzAUBIA5QBJA6jHBMQiGAzldBWQmYBlhrAhQjsBIAQAyQAfBfKjgrQDLgNE3gdQEsgcApgDQA+gDD/gUQENgTDEgIQJpgYBXBKQgMAfiOAUQhRALjTAQQjFAPhAALQhnASAtAcQBJAuULgeQNJgUBqgCQHTgIByAOQDaAZEQC3QCIBcBdBWg");
	this.shape_177.setTransform(499.4,605.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#BBD55E").s().p("AjmKnQhvgGjjhFQjfhEjOhZQjghihahKQhphXBsghQBfgdESg3IH/hkQKEiFgOhAQgMg6irgyQhNgYgSgIQgjgRAagSQApgcDOgdQBegNAagGQAvgKgSgKQgPgJjagsQi0glAjgZQAmgaKSgXQFJgLFDgGQhhArnQAeIkfATQh2AKAUAMQAfATGbgKQG/gLBhAOQBnAQisAXQhiANlVAgQlPAeh7ASQjFAbBEAWQBEAWC5ADQBaABEQgFQDrgEBoAFQCaAIAaAeQAaAfjFAlQh+AZk/ArQlQAthpATQjBAiAgAYQAfAYC/AbQBxAOEbAiQIlBJAOBWQAIA2jHBWQivBMkhBTQkSBPj8AxQjsAvhxAAIgXAAg");
	this.shape_178.setTransform(841.4,609.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#BBD55E").s().p("A2hM2QApgzEQhOQBwghG+hxQFshcCWg1QDYhNgkg0QgkgzkOgmQifgWmIghQlvgfh0gTQi8gfBVgqQCPhFPSA4IJ0AhQEMALgagZQgtgrougbQkNgMhigGQiggJAMgKQAOgMH6hCQH+hCAogeQAYgSiegsQhTgXkXhBQkAg9hpgfQihgvAUgZQATgWBigbQA5gPCEgfQBugdAogZQA1gigvgnQhXhIDbgZQBtgNB+ABIDhAQQDiAUAHASQAHARiyAoQjDArgNAJQgSALEXALQEnAKAQAQQAQARoGA3QofA5gVAKQgiAPCnAJQBTAEBbACIHLAlQHLAoAEATQADAQh/ARQiFATgJAOQgGAKAyALIB3AUQC7AfAeAlQAeAll8ApIkRAeQiAARgIANQgIAOBxAiQAlALDaA6QF8BkAHAtQAHAultA+QjTAkgqAJQh0AYgCASQgCASB9AkIEWBIQGWBnAAA2QAABFq0ARQqNARmQgmQCLAdD1A/IAHAMQAIAOABANQADArhDARQgsALj5AOQkRAQkFADIhiAAQp2AABKhdg");
	this.shape_179.setTransform(460.7,589.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#B5D15C").s().p("AsvRCIiVgjQgGh6BDhuQBDhvBxgxIBJgbQArgRAbgQQAjgVAVghQAWglgGgkQgKgzg8geQgpgVhMgMQjQgjjFhRQhCgbABgnQH3gwH2AFQBfABAtgEQBMgHA5gXQAUgIAFgLQAJgSgSgRQgPgPgYgHQkdhSknAIQhsADgogEQhSgIg0gkIKNgdQA2gCAcgEQAsgHAhgPQjRg7lwgBIkmAAQipgDh8gSQCJgtEZgLQCSgGBCgHQB1gLBagbQASgGAJgFQAPgIAHgLQAIgQgGgUQgFgTgQgMQgWgRgwgIQlGg7lIAFQAmgwBmgLIBUgIQAvgGAggOQAVgJAGgOQAHgWgYgPQgVgNgdgCIpygjIHuhUQAngGAPgNQAMgJADgPQADgQgIgLQjZgDjTg+ICghCIjggpQgFgKAJgLQAIgJANgEIAYgDQAOgCAHgGQAJgIgCgOQgDgLgHgBQCRgODUA9QA8ARB3AmQBrAgBJAPIBNAOQAsAKAfAMQAlAPBDAsIClBtQhuAih1gGIAFA6QCSAWChgQQBFgHCKgUQB7gPBUAFQCmAKCSBRIkdBmQgsAQgFAXQgEAWAXARQATAOAeAGQCEAaEMApQDuAqCaA7QBKAcAJAqIv/COQglAGgXAQQgfASAHAbQAFASAcASQA3AhBTALQAZADB7AHQDFALDAA6QAWAHAHAMQAGAOgNAQQgLAMgUAIIkuCDQgiAOgJARQgNAZATAdQAQAXAeAUQAOAJAeAMIA0ATQA5AYgTAaQjYErnBB8QjsBCloASIg6ACQiCAAiRgcg");
	this.shape_180.setTransform(679.4,604.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#C1D960").s().p("EAuyARbQicgHizgTIiTgRQhcg5iIg/QkPh9jagZQhxgOnTAIQhqACtJAUQ0JAehKguQgsgcBngSQBAgLDFgPQDSgQBSgLQCNgUAMgfQhXhKpoAYQjEAIkQATQj/AUg+ADQgoADktAcQk3AdjKANQqjArgfhfQgRgyDshIQBsghGXhlQFehWCGgzQDGhMhJg6QhHg5j0gUQh0gJl9gIQlQgIihgVQjxgdhHhNQhIhNEigoQDNgdHYgQQJ3gVA9gEQEygTgrgpQgsgqh6gJQhBgFisAFQicAEhCgJQhmgOgRgyQgSgzDighQCagXFcgWQGZgaBWgJQDagWgcgfQgug1h/gDQhFgCgOgCQglgFgIgUQgIgUA3gYQAcgLBngiQDJhBAMgzQAPg8g1g5QgRgSgWgPIgSgMIFKAAQC/ASD6CKQBIAnBkA/QBaA5AUAKQATAKAyAlQAuAkArAUQCMA/ERgPQEEgPBIhGQAIgHAfguQASgcAggJQGIhSI6AvQDNARCCAaQB9AZg2AJQitAei6A9QjvBNBuAfQBsAfJrgaQDWgJDGgMQC2gMgIgCQhggFhagGQi0gOgZgdQgagfF3hCQC7ghDBgbQAigtAPgwQAchhhlgPIEKgxIAHE1QAIF1gCE+QgEP5hXBhQhGBOlRAAQhSAAhhgFg");
	this.shape_181.setTransform(627.3,602.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#73A884").s().p("A2QKRQhsgQgOgtQgHgYAXgfQAggrBAgWQBAgWBCAIQAghHBCg5QBDg7BagfQBdggBpADQBqADBVAmIBsAyQBBAYAwgPQhCgugLhFQgMhGAzg1QA0g2BigNQBigKBHAlQhUhLgyhGQg9hUgShRQgUhbAkhVQAnhaBbg2QBvhCDKgNQCLgJCDAOQCKAOB5AoQChA1CDBiQB9BeBPB5QBKBzAeCEQAcB+gOCHQCCAXBlBBQA0AhAMAfQAHAVgIATQgJAWgXAJQA5AXgCA3QgBA3g7AWQjSAVlGgcIkLgZQidgNhygCQkMgGnHAoQoNAujIAEIhSABQiyAAiCgUg");
	this.shape_182.setTransform(578.2,442.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#7DBC92").s().p("A8uLOQlBj5AOjGQAPjNDgh+QCGhNDIgrQCQgfCvA6QDVBFBDCjQCRmhD9j9QDajZEWhOQDshCDqAtQDTApB0BsQD7g7DZDQQBaBVA9ByQA6BrAOBkQFSAzAtCfQAmCIiuClQBLgJBXATQBZAVBJAtQCwBrgKCrQgICOyZBDQlwAVm4ALI6DAXQijhUihh8g");
	this.shape_183.setTransform(351.3,409.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#73A884").s().p("ArAHDIoAgZQBkjWAdg4QBPibBKhjQDEkKD/gIQCOAABBBDQAtAtAIBQQA9iYBPg+QBMg8CLgLQCggLB7B8QCRCTAYEcQClg+CKAEQB/ADBVA7QBRA4AaBfQAaBgglBzQigANnWgBQnigBhjAHQgtAEhVAAQi5AAl1gQg");
	this.shape_184.setTransform(758.8,444.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#9ED9DF").s().p("EhBJgZ/MCBuAAkQAAKOAFLMQAJWTAXEuQnPhK0fgFQx2gF3oAuQ15ArxKBBQxnBEiyA3g");
	this.shape_185.setTransform(565.2,359.6);

	this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = this.shape_100.mask = this.shape_101.mask = this.shape_102.mask = this.shape_103.mask = this.shape_104.mask = this.shape_105.mask = this.shape_106.mask = this.shape_107.mask = this.shape_108.mask = this.shape_109.mask = this.shape_110.mask = this.shape_111.mask = this.shape_112.mask = this.shape_113.mask = this.instance_2.mask = this.shape_114.mask = this.instance_3.mask = this.shape_115.mask = this.shape_116.mask = this.shape_117.mask = this.shape_118.mask = this.shape_119.mask = this.shape_120.mask = this.shape_121.mask = this.shape_122.mask = this.shape_123.mask = this.shape_124.mask = this.shape_125.mask = this.shape_126.mask = this.shape_127.mask = this.shape_128.mask = this.shape_129.mask = this.shape_130.mask = this.shape_131.mask = this.shape_132.mask = this.shape_133.mask = this.shape_134.mask = this.shape_135.mask = this.shape_136.mask = this.shape_137.mask = this.shape_138.mask = this.shape_139.mask = this.shape_140.mask = this.shape_141.mask = this.shape_142.mask = this.shape_143.mask = this.shape_144.mask = this.shape_145.mask = this.shape_146.mask = this.shape_147.mask = this.shape_148.mask = this.shape_149.mask = this.shape_150.mask = this.shape_151.mask = this.shape_152.mask = this.shape_153.mask = this.shape_154.mask = this.shape_155.mask = this.shape_156.mask = this.shape_157.mask = this.shape_158.mask = this.shape_159.mask = this.shape_160.mask = this.shape_161.mask = this.shape_162.mask = this.shape_163.mask = this.shape_164.mask = this.shape_165.mask = this.shape_166.mask = this.shape_167.mask = this.shape_168.mask = this.shape_169.mask = this.shape_170.mask = this.shape_171.mask = this.shape_172.mask = this.shape_173.mask = this.shape_174.mask = this.shape_175.mask = this.shape_176.mask = this.shape_177.mask = this.shape_178.mask = this.shape_179.mask = this.shape_180.mask = this.shape_181.mask = this.shape_182.mask = this.shape_183.mask = this.shape_184.mask = this.shape_185.mask = mask;

	// Layer 1
	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#D1EDB4").s().p("EgtnAq+MAAAhV6MBbOAAAMAAABV6g");
	this.shape_186.setTransform(557.8,446.5);

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgtnAq+MAAAhV6MBbOAAAMAAABV6g");
	mask_1.setTransform(557.8,446.5);

	// Layer 1
	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#D1EDB4").s().p("EgtnAq+MAAAhV6MBbOAAAMAAABV6g");
	this.shape_187.setTransform(557.8,446.5);

	this.addChild(this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.instance_3,this.shape_114,this.instance_2,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.instance_1,this.shape_21,this.instance,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(265.8,171.5,584,550);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
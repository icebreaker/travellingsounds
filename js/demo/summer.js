function Summer()
{
  TS.Scene.apply(this, arguments);
}
Summer.prototype = Object.create(TS.Scene.prototype);

Summer.prototype.initialize = function(loader, fader)
{
  TS.Scene.prototype.initialize.apply(this, arguments);
 
  this.add(new Sky(loader));

  this.bike = new Bike(loader.findImage('bike'));
  this.add(this.bike);

  for(var i=0; i<16; i++)
    this.add(new Butterfly(loader.loadImage(i % 2 == 0 ? 'butterfly1' : 'butterfly2')));

  var last = 0;
  for(var i=0; i<16; i++)
  {
    var x = 20 + TS.random(100);
    this.add(new Flower(loader.loadImage(i % 2 == 0 ? 'flower1' : 'flower3'), last + x, TS.height, '#00B000', '#66FF00'));
    last += x;
  }

  this.background = loader.findImage('background');
  this.grass = loader.findImage('grass');

  this.fader = fader;
};
Summer.prototype.update = function()
{
  TS.Scene.prototype.update.apply(this, arguments);

  if(this.bike.x > 1024 && this.fader.ended)
    this.fader.fadeIn();
};
Summer.prototype.draw = function(ctx)
{
  ctx.drawImage(this.background, 2048, 0, 1016, 480, 0, 0, 1024, 480);
  TS.Scene.prototype.draw.apply(this, arguments);
  ctx.drawImage(this.grass, 0, 400);
};

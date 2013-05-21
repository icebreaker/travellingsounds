function Spring()
{
  TS.Scene.apply(this, arguments);
}
Spring.prototype = Object.create(TS.Scene.prototype);

Spring.prototype.initialize = function(loader, fader)
{
  TS.Scene.prototype.initialize.apply(this, arguments);
 
  this.add(new Sky(loader));

  this.add(new Rainbow());

  this.bike = new Bike(loader.findImage('bike'));
  this.add(this.bike);

  for(var i=1; i<4; i++)
    this.add(new Bird(loader.findImage('bird'+i)));

  this.background = loader.findImage('background');

  this.fader = fader;
};
Spring.prototype.update = function()
{
  TS.Scene.prototype.update.apply(this, arguments);

  if(this.bike.x > 1024 && this.fader.ended)
    this.fader.fadeIn();
};
Spring.prototype.draw = function(ctx)
{
  ctx.drawImage(this.background, 1024, 0, 1020, 480, 0, 0, 1024, 480);
  TS.Scene.prototype.draw.apply(this, arguments);
};

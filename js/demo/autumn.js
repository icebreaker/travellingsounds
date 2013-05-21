function Autumn()
{
  TS.Scene.apply(this, arguments);
}
Autumn.prototype = Object.create(TS.Scene.prototype);

Autumn.prototype.initialize = function(loader, fader)
{
  TS.Scene.prototype.initialize.apply(this, arguments);
 
  this.add(new Sky(loader, true, true));

  this.add(new Plane(loader.findImage('plane')));

  this.bike = new Bike(loader.findImage('bike'));
  this.add(this.bike);

  this.background = loader.findImage('background');

  for(var i = 0; i<30; i++)
    this.add(new Light());

  this.fader = fader;
};
Autumn.prototype.update = function()
{
  TS.Scene.prototype.update.apply(this, arguments);

  if(this.bike.x > 1024 && this.fader.ended)
    this.fader.fadeIn();
};
Autumn.prototype.draw = function(ctx)
{
  ctx.drawImage(this.background, 3072, 0, 1024, 480, 0, 0, 1024, 480);
  TS.Scene.prototype.draw.apply(this, arguments);
};

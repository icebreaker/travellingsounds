function Winter()
{
  TS.Scene.apply(this, arguments);
}
Winter.prototype = Object.create(TS.Scene.prototype);

Winter.prototype.initialize = function(loader, fader)
{
  TS.Scene.prototype.initialize.apply(this, arguments);
 
  this.add(new Sky(loader));

  this.bike = new Bike(loader.findImage('bike'));
  this.add(this.bike);

  this.background = loader.findImage('background');
  for(var i=0; i<100; i++)
      this.add(new TS.SnowFlake(TS.width, TS.height));

  this.fader = fader;
};
Winter.prototype.update = function()
{
  TS.Scene.prototype.update.apply(this, arguments);

  if(TS.beat)
  {
    for(var z=0; z<50; z++)
    {
      var i = TS.random(99);
      var s = TS.random(2) == 1 ? 1 : -1;
      this.elements[i].x += s*10;
    }
  }

  if(this.bike.x > 1024 && this.fader.ended)
    this.fader.fadeIn();
};
Winter.prototype.draw = function(ctx)
{
  ctx.drawImage(this.background, 0, 0, 1024, 480, 0, 0, 1024, 480);
  TS.Scene.prototype.draw.apply(this, arguments);
};

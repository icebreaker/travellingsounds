function SkyObject()
{
  this.initialize.apply(this, arguments);
};
SkyObject.prototype = 
{
  x: 0,
  y: 0,
  dx: 0,
  dy: 0,
  sx: 0,
  sy: 0,
  initialize: function(image)
  {
    this.x = 100 + TS.random(600);
    this.y = 20 + TS.random(100);
    this.sx = 2 + TS.random(2);
    this.sy = 2 + TS.random(2);
    this.image = image;
  },
  update: function()
  {
    this.dx += TS.elapsed;
    this.dy += TS.elapsed;

    this.x += Math.cos(this.dx * 5) * 0.8 * this.sx;
    this.y += Math.sin(this.dy * 8) * 0.5 * this.sy;

    if(TS.beat)
    {
      this.x += (TS.random(2) == 1 ? 1 : -1) * 5;
      this.y += (TS.random(2) == 1 ? 1 : -1) * 8;
    }
  },
  draw: function(ctx)
  {
    ctx.save();
    ctx.drawImage(this.image, this.x, this.y);
    ctx.restore();
  }
};

function Sky()
{
  TS.Scene.apply(this, arguments);
}
Sky.prototype = Object.create(TS.Scene.prototype);
Sky.prototype.initialize = function(loader, moon, stars)
{
  TS.Scene.prototype.initialize.call(this);

  var objects = [];

  if(moon)
    objects.push('moon');
  else
    objects.push('sun');

  if(stars)
  {
    for(var i=0; i<48; i++)
      objects.push(i % 2 == 0 ? 'star1' : 'star2');
  }
  else
  {
    objects.push('cloud1');
    objects.push('cloud2');
    objects.push('cloud3');
    objects.push('cloud4');
    objects.push('cloud5');
  }

  for(var i in objects)
    this.add(new SkyObject(loader.findImage(objects[i])));
};

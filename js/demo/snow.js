TS.SnowFlake = function()
{ 
  this.initialize.apply(this, arguments);
};
TS.SnowFlake.prototype =
{
  x: 0,
  y: 0,
  r: 5,
  w: 0,
  h: 0,
  dx: 0,
  dir: 0,
  initialize: function(width, height)
  {
    this.w = width;
    this.h = height;
    this.spawn();
  },
  spawn: function()
  {
    this.x = TS.random(this.w);
    this.y = -50;
//    this.y = TS.rnd(this.h);
    this.r = 2 + TS.random(5);
    this.dx = 15 + TS.random(50);
    this.dy = TS.random(10);
    this.dir = (TS.random(2) == 1) ? 1 : -1;
  },
  update: function()
  {
    this.x += TS.elapsed * this.dy * this.dir;
    this.y += TS.elapsed * this.dx;

    if(this.y > this.h - 5 + this.r)
      this.spawn();
  },
  draw: function(ctx)
  {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
    ctx.arc(this.x, this.y, this.r, 0, TS.PI2, false);
    ctx.fill();
    ctx.restore();
  }
};

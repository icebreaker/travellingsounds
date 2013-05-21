function Plane()
{
  this.initialize.apply(this, arguments);
}
Plane.prototype =
{
  x: 0,
  y: 0,
  dx: 0,
  dy: 0,
  plane: null,
  initialize: function(plane, x, y)
  {
    this.plane = plane;
    this.x = x || -220;
    this.y = y || 100;
  },
  update: function()
  {
    if(this.x > 1024)
      return;

    this.dy += TS.elapsed;
    this.x += 40 * TS.elapsed;
    this.y += Math.sin(this.dy * 8) * 0.5;

    if(TS.beat)
    {
      this.x += 10;
      this.y += (TS.random(2) == 1 ? 1 : -1) * 8;
    }
  },
  draw: function(ctx)
  {
    if(this.x > 1024)
      return;

    ctx.save();
    ctx.drawImage(this.plane, this.x, this.y);
    ctx.restore();
  }
};

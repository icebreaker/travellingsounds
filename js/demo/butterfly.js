function Butterfly()
{
  this.initialize.apply(this, arguments);
}
Butterfly.prototype =
{
  x: 0,
  y: 0,
  dx: 0,
  dy: 0,
  butterfly: null,
  speed: 0,
  initialize: function(butterfly, x, y)
  {
    this.butterfly = butterfly;
    this.x = x || TS.random(600) + TS.random(600);
    this.y = y || TS.random(200) + TS.random(100);
    this.speed = 1 + TS.random(2);
  },
  update: function()
  {
    this.dx += TS.elapsed;
    this.dy += TS.elapsed;

    this.x += Math.cos(this.dx * 5) * 0.8 * this.speed;
    this.y += Math.sin(this.dy * 8) * 0.5 * this.speed;

    if(TS.beat)
    {
      this.x += (TS.random(2) == 1 ? 1 : -1) * 5;
      this.y += (TS.random(2) == 1 ? 1 : -1) * 8;
    }
  },
  draw: function(ctx)
  {
    ctx.save();
    ctx.drawImage(this.butterfly, this.x, this.y);
    ctx.restore();
  }
};

function Bird()
{
  this.initialize.apply(this, arguments);
}
Bird.prototype =
{
  x: 0,
  y: 0,
  dx: 0,
  dy: 0,
  bird: null,
  speed: 0,
  initialize: function(bird, x, y)
  {
    this.bird = bird;
    this.x = x || -220;
    this.y = y || 100;
    this.speed = 10 + TS.random(30);
  },
  update: function()
  {
    if(this.x > 1024)
      return;

    this.dy += TS.elapsed;
    this.x += this.speed * TS.elapsed;
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
    ctx.drawImage(this.bird, this.x, this.y);
    ctx.restore();
  }
};

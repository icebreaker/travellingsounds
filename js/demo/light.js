function Light()
{
  this.initialize.apply(this, arguments);
}
Light.prototype = 
{
  alpha: 0.0,
  r: 255,
  g: 255,
  b: 255,
  x: 0,
  y: 0,
  initialize: function()
  {
    this.spawn();
  },
  spawn: function()
  {
    this.alpha = 0.9;
    this.r = TS.random(255);
    this.g = TS.random(255);
    this.x = 50 + TS.random(TS.width - 50);
    this.y = 50 + TS.random(TS.height / 2);
  },
  update: function()
  {
    if(TS.beat)
      this.spawn();

    if(this.alpha > 0.2)
        this.alpha -= 0.05;
  },
  draw: function(ctx)
  {
    if(this.alpha < 0.2)
      return;

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "rgba("+ this.r + ", " + this.g + ", 255, " + this.alpha + ")";
    ctx.lineWidth = "20";
    ctx.arc(this.x, this.y, 30, 0, TS.PI2, false);
    ctx.stroke();
    ctx.lineWidth = "10";
    ctx.strokeStyle = "rgba(255, " + this.r + ", " + this.r +  ", " + this.alpha + ")";
    ctx.stroke();
    ctx.fillStyle = "rgba("+ this.r + ", " + this.g + ", 255, " + this.alpha + ")";
    ctx.fill();
    ctx.restore();
  }
};

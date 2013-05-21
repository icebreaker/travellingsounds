TS.Fader = function()
{
  this.initialize.apply(this, arguments);
};
TS.Fader.prototype =
{
  alpha: -1,
  dir: 0,
  ended: false,
  initialize: function()
  {
    // empty
  },
  fadeIn: function()
  {
    this.alpha = 0.0;
    this.dir = 1;
    this.ended = false;
  },
  fadeOut: function()
  {
    this.alpha = 1.0;
    this.dir = -1;
    this.ended = false;
  },
  update: function()
  {
    if(this.ended)
      return;

    if(this.alpha < -1.5 || this.alpha > 1.5)
    {
      this.ended = true;

      if(this.alpha < 0.0)
        this.alpha = 0.0;
      else if(this.alpha > 1.0)
        this.alpha = 1.0;

      if(typeof(this.onend) == "function")
        this.onend.apply(this);

      return;
    }

    this.alpha += this.dir * TS.elapsed * 0.2;
  },
  draw: function(ctx)
  {
    ctx.save();
    ctx.fillStyle = "rgba(0,0,0," + this.alpha +")";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.restore();
  }
};

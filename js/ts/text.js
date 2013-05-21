TS.Text = function()
{
  this.initialize.apply(this, arguments);
};
TS.Text.measure = function(text, font, ctx)
{
  var w;

  ctx.save();
  ctx.font = font;
  w = ctx.measureText(text).width;
  ctx.restore();

  return w;
};
TS.Text.prototype =
{
  x: 0,
  y: 0,
  da: 0.2,
  text: null,
  color: null,
  font: null,
  alpha: 1.0,
  dir: 0,
  ended: true,
  initialize: function(x, y, text, color, font)
  {
    this.x = x;
    this.y = y;
    this.text = text;
    this.color = color || "255,255,255";
    this.font = font || "72px Arial";
  },
  length: function()
  {
    return this.text.length; 
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

    if(this.alpha < 0.0 || this.alpha > 1.0)
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

    this.alpha += this.dir * this.da * TS.elapsed;
  },
  draw: function(ctx)
  {
    if(this.alpha > 0.001)
    {
      ctx.save();
      ctx.font = this.font;
      ctx.fillStyle = "rgba(" + this.color + "," + this.alpha +")";
      ctx.fillText(this.text, this.x, this.y);
      ctx.restore();
    }   
  }
};

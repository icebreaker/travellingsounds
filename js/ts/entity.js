TS.Entity = function()
{
  this.initialize.apply(this, arguments);
};
TS.Entity.prototype =
{
  x: 0,
  y: 0,
  dx: 0,
  dy: 0,
  ix: 0,
  iy: 0,
  image: null,
  alive: true,
  visible: true,
  initialize: function(x, y, image)
  {
    this.x = x;
    this.y = y;
    this.image = image;
  },
  spawn: function(x, y)
  {
    this.x = x;
    this.y = y;

    this.alive = true;
    this.visible = true;
  },
  kill: function()
  {
    this.alive = false;
    this.visible = false;
  },
  update: function()
  {
    if(this.alive)
    {
      this.x  += this.dx * TS.elapsed;
      this.y  += this.dy * TS.elapsed;
      this.dx += this.ix * TS.elapsed;
      this.dy += this.iy * TS.elapsed;
    }
  },
  draw: function(ctx)
  {
    if(this.visible)
    {
      ctx.save();
      ctx.drawImage(this.image, this.x, this.y);
      ctx.restore();
    }   
  }
};

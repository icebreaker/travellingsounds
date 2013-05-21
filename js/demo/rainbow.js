function Rainbow()
{
  this.initialize.apply(this, arguments);
}
Rainbow.prototype =
{
  colors: ["3c646d", "459ba8", "79c267", "c5d647", "746a3e", "f28c33", "e868a2", "bf62a6"],
  x: 0,
  y: 0,
  dx: 0,
  dy: 0,
  cx: 0,
  initialize: function()
  {
    this.x = -300;
    this.y = 150;
  },
  update: function()
  {
    // empty
  },
  draw: function(ctx)
  {
    ctx.save();
    for(var i in this.colors)
    {
      ctx.beginPath();
      ctx.strokeStyle = "#" + this.colors[i];
      ctx.lineWidth = "8";

      var xx = this.x;
      var yy = 100 + (7 * i);

      this.dy += TS.elapsed * 0.5;

      this.dx += TS.elapsed * 3;

      if(TS.beat)
        this.dy += TS.elapsed * 5;

      ctx.moveTo(xx + this.dx, yy + Math.sin(this.dy) * 20);
      ctx.bezierCurveTo(xx + 100 + this.dx, yy - 30 * Math.cos(this.dy) * 2,
                        xx + 200 + this.dx, yy - 60 * Math.sin(this.dy) * 2,
                        xx + 300 + this.dx, yy - 20 * Math.cos(this.dy) * 2);
      ctx.stroke();
    }
    ctx.restore();
  }
};

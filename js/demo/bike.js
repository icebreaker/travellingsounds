function Bike()
{
  this.initialize.apply(this, arguments);
}
Bike.prototype =
{
  bike: null,
  x: 0,
  y: 0,
  r: 30,
  rot: 0,
  initialize: function(bike, x, y)
  {
    this.bike = bike;
    this.x = x || -220;
    this.y = y || 380;
  },
  update: function()
  {
    if(this.x > 1024)
      return;

    if(TS.beat)
    {
      this.x += 30; 
      this.rot += 4;
    }

//  this.rot += TS.elapsed * 3;
//  this.x += TS.elapsed * 30;
  },
  draw: function(ctx)
  {
    if(this.x > 1024)
      return;

    this.drawWheel(ctx, this.x + 45, this.y + 2*this.r, this.rot, "#B00000", "#00B000", "5");
    this.drawWheel(ctx, this.x + this.bike.width - 45, this.y + 2*this.r, this.rot, "#B0B000", "#0000B0", "5");
    ctx.drawImage(this.bike, this.x, this.y);
  },
  drawWheel: function(ctx, x, y, rot, col1, col2, w)
  {
    ctx.save();

    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.translate(-x, -y);

    ctx.beginPath();
    ctx.strokeStyle = col1;
    ctx.lineWidth = w;
    ctx.arc(x, y, this.r, 0, Math.PI, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = col2;
    ctx.arc(x, y, this.r, Math.PI, Math.PI*2, false);
    ctx.stroke();
    ctx.restore();
  }
};

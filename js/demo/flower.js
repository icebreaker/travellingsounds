function Flower()
{
  this.initialize.apply(this, arguments);
}
Flower.prototype = 
{
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  dx: 0,
  dy: 0,
  r1: 0,
  r2: 0,
  h: 0,
  col1: null,
  col2: null,
  flower: null,
  initialize: function(flower, x, y, col1, col2)
  {
    this.flower = flower;
    this.x = x;
    this.y = y;
    this.col1 = col1;
    this.col2 = col2;

    this.rd1 = 15 + Math.random() * 110;
    this.rd2 = 15 + Math.random() * 50;

    this.mm = 210 + Math.random() * 100;

    if (Math.random() * 3 < 1.5) this.rd2 = -this.rd2;
  },
  update: function()
  {
    this.dx += (2 * TS.elapsed);

    if (TS.beat) this.dx += 10 + Math.random() * 90;

    if (this.dy < 1.0) this.dy += TS.elapsed * 0.1;

    this.x2 = this.x + Math.sin(this.dx) * this.rd2;
    this.y2 = this.y - this.mm * this.dy;
  },
  draw: function(ctx)
  {
    ctx.beginPath();
    ctx.strokeStyle = this.col2;
    ctx.lineWidth = 12;
    ctx.moveTo(this.x, this.y);

    ctx.bezierCurveTo(this.x, this.y - 100 * this.dy,
        this.x + Math.cos(this.dx) * this.rd1, this.y - 200 * this.dy,
        this.x + Math.sin(this.dx) * this.rd2, this.y - this.mm * this.dy);
    ctx.stroke();
    ctx.lineWidth = 8;
    ctx.strokeStyle = this.col1;
    ctx.stroke();

    var px = this.x + Math.sin(this.dx) * this.rd2;
    var py = this.y - this.mm * this.dy;

    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(Math.atan2(py - 64, px - 64));
    ctx.drawImage(this.flower, -32, -32);
//    ctx.lineWidth = 2;
//    ctx.strokeStyle = this.col1;
//    ctx.strokeRect(-32, -32, 64, 64);
    ctx.restore();
  }
};

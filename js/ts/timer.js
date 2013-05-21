TS.Timer = function()
{
  this.initialize.apply(this, arguments);
};
TS.Timer.prototype = 
{
  last: 0,
  dt: 0,
  initialize: function()
  {
    this.last = new Date();
  },
  update: function()
  {
    var now = new Date();
    this.dt = (now - this.last) * 0.001;
    this.last = now;
    return this.dt;
  }
};

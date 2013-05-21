TS.Scene = function()
{
  this.initialize.apply(this, arguments);
};
TS.Scene.prototype = 
{
  elements: [],
  initialize: function()
  {
    this.elements = [];
  },
  add: function(elem)
  {
    this.elements.push(elem);  
  },
  remove: function(elem)
  {
    if(typeof elem == Number)
      this.elements.splice(elem, 1);
    else
      this.elements.splice(this.elements.indexOf(elem), 1);
  },
  update: function()
  {
    var e;
    for(var i in this.elements)
    {
      e = this.elements[i];
      e.update.apply(e, arguments);
    }
  },
  draw: function()
  {
    var e;
    for(var i in this.elements)
    {
      e = this.elements[i];
      e.draw.apply(e, arguments);
    }
  }
};

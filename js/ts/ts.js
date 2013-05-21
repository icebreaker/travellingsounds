//
// Travelling Sounds
// Copyright (c) 2013, Mihail Szabolcs
// MIT license, for more information see LICENSE.
//
if(!window.requestAnimationFrame)
{
  window.requestAnimationFrame = (function()
  {
      return window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback, element) { window.setTimeout(callback, 1000 / 60); };
  })();
}
var TS = 
{
  PI2: 2 * Math.PI,
  log: function() { return console.log.apply(console, arguments); },
  randomf: function(x) { return (Math.random() * x); },
  random: function(x) { return TS.randomf(x) | 0; },
  elapsed: 0,
  beat: false,
  width: 0,
  height: 0,
  ctx: null
};

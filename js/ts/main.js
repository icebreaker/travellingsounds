TS.main = function(resources, initialize, loop)
{
  if(typeof resources != "object")
    throw "Argument 0 of TS.main() must be an object";

  if(typeof initialize != "function")
    throw "Argument 1 of TS.main() must be a function";

  if(typeof loop != "function")
    throw "Argument 2 of TS.main() must be a function";

  window.onload = function()
  {
    var canvas = document.getElementById('canvas');
    var ctx    = canvas.getContext('2d');

    TS.ctx     = ctx;
    TS.width   = canvas.width;
    TS.height  = canvas.height;

    var timer = new TS.Timer();
    var loader = new TS.Loader();
    loader.onload = function()
    {
      loader.draw(ctx);
      initialize.call(loader);
    };

    var images = resources.images;
    if(images)
    {
      for(var i in images)
        loader.loadImage(images[i]);
    }

    var sounds = resources.sounds;
    if(sounds)
    {
      for(var i in sounds)
        loader.loadAudio(sounds[i]);
    }

    function tick()
    {
      if(loader.isLoading())
        loader.draw(ctx);
      else
        loop.call(this, ctx);

      TS.elapsed = timer.update();

      requestAnimationFrame(tick);
    }

    tick();
  };
};

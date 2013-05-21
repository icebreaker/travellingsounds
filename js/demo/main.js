(function()
{
  window.title = "Travelling Sounds";
  var audio, track, scene = null, scanlines, text, fader;
  var scenes = [], scene_idx = 0;

  function initialize()
  {
    var x = (TS.width - TS.Text.measure(window.title, "72px Arial", TS.ctx)) / 2;
    text = new TS.Text(x, TS.height / 2, window.title);
//    text.fadeOut();

    fader = new TS.Fader();
    fader.fadeIn();
    fader.onend = function()
    {
      if(this.alpha == 1.0) // on fadeIn
      {
        if(scene_idx == 0)
        {
          text.fadeOut();
        }
        else if(scene_idx == 4)
        {
          scene = null;

          window.title = "Happy Birthday";

          text.text = window.title;
          text.x = (TS.width - TS.Text.measure(window.title, "72px Arial", TS.ctx)) / 2;
          text.fadeIn();

          return;
        }

        scene = scenes[scene_idx++];
        this.fadeOut();
      }
    }

    scenes.push(new Winter(this, fader));
    scenes.push(new Spring(this, fader));
    scenes.push(new Summer(this, fader));
    scenes.push(new Autumn(this, fader));

    scanlines = this.findImage('scanlines');

    track = this.loadAudio('travelling_sounds');
    audio = new TS.BeatSync(track, beats, 0.7);
    audio.play();
  }
  
  function tick(ctx)
  {
    TS.beat = audio.update();

    text.update();
    fader.update();

    if(scene != null)
    {
      scene.update();
      scene.draw(ctx);
      ctx.drawImage(scanlines, 0, 0);
    }
    else
    {
      ctx.clearRect(0, 0, TS.width, TS.height);  
    }

    fader.draw(ctx);
    text.draw(ctx);
  }

  TS.main(
  {
    'images': [
      'scanlines',
      'background',
      'moon',
      'sun',
      'cloud1',
      'cloud2',
      'cloud3',
      'cloud4',
      'cloud5',
      'plane',
      'bird1',
      'bird2',
      'bird3',
      'flower1',
      'flower2',
      'flower3',
      'star1',
      'star2',
      'butterfly1',
      'butterfly2',
      'butterfly3',
      'grass',
      'bike'
    ], 
    'sounds':[
      'travelling_sounds'
    ]
  }, initialize, tick);
})();

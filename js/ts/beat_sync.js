TS.BeatSync = function(audio, beats, confidence)
{
  this.initialize.apply(this, arguments);
}
TS.BeatSync.prototype =
{
  beat: 0,
  initialize: function(audio, beats, confidence)
  {
    this.audio = audio;
    this.beats = beats;
    this.confidence = confidence;
  },
  play: function()
  {
    this.beat = 0;
    this.audio.currentTime = 0;
    this.audio.play();
  },
  isPlaying: function()
  {
    return this.audio.paused == false;  
  },
  update: function()
  {
    var t = this.audio.currentTime;

    for(var i = this.beat; i < this.beats.length; i++)
    {
      var b = this.beats[i];

      if((t >= b.start) && 
         (t <= (b.start + b.duration)) && 
         b.confidence > this.confidence && 
         this.beat != i)
      {
        this.beat = i;
        return true;
      }
    }

    return false;
  }
};

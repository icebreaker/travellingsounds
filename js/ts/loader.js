TS.Loader = function()
{
  this.initialize.apply(this, arguments);
};
TS.Loader.prototype =
{
  audioExt: null,
  imageExt: null,
  audioPath: "data/sfx/",
  imagePath: "data/gfx/",
  images: {},
  audios: {},
  w: 256,
  h: 16,
  m: 4,
  dm: 8,
  total: 0,
  loaded: 0,
  initialize: function()
  {
    var ogg = new Audio().canPlayType("audio/ogg");
    var mp3 = new Audio().canPlayType("audio/mp3");

    if(!ogg && !mp3)
      throw "Ogg/Mp3 Audio Support is required. Sorry :(";

    this.audioExt = ogg ? ".ogg" : ".mp3";
    this.imageExt = ".png";
  },
  callback: function()
  {
    if(++this.loaded == this.total)
    {
      if(typeof this.onload == "function")
        this.onload.apply(this);
    }
  },
  loadAudio: function(filename)
  {
    var self = this;

    if(this.audios[filename])
      return this.audios[filename];

    this.total++;

    var audio = new Audio();
    audio.loaded = false;
    audio.addEventListener("loadedmetadata", function()
    {
      TS.log("Loaded audio: " + this.src);
      this.loaded = true;
      self.callback();
    });
    audio.onerror = function()
    {
      TS.log("Failed to load audio: " + this.src);
      self.callback();
    };
    audio.setVolume = function(volume)
    {
      if(volume)
        this.volume = parseFloat(volume / 100.0);
      else
        this.volume = 1.0;
    };
    audio.src = this.audioPath + filename + this.audioExt;
    this.audios[filename] = audio;
    
    return audio;
  },
  loadImage: function(filename)
  {
    var self = this;

    if(this.images[filename])
      return this.images[filename];

    this.total++;

    var image = new Image();
    image.loaded = false;
    image.onload = function()
    {
      TS.log("Loaded image: " + this.src);
      this.loaded = true;
      self.callback();
    };
    image.onerror = function()
    {
      TS.log("Failed to load image: " + this.src);
      self.callback();
    };
    image.src = this.imagePath + filename + this.imageExt;
    this.images[filename] = image;

    return image;
  },
  findImage: function(filename)
  {
    return this.images[filename];
  },
  findAudio: function(filename)
  {
    return this.audios[filename];
  },
  isLoading: function()
  {
    return this.loaded < this.total;  
  },
  draw: function(ctx)
  {
    var x = (TS.width  - this.w) / 2;
    var y = (TS.height - this.h) / 2;

    ctx.save();
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(x + this.m, y + this.m, ((this.loaded * (this.w - this.dm)) / this.total), this.h - this.dm);
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = "#FFFFFF";
    ctx.strokeRect(x, y, this.w, this.h);
    ctx.restore();
  }
};

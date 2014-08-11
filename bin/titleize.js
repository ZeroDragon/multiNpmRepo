Object.defineProperty(String.prototype, 'titleize', {
  configurable : true,
  get: function(){
    var i;
    words = this.match(/([A-Z]?[^A-Z]*)/g).slice(0,-1).join(' ');
    words = words.split(/\s|_|-/);
    array = [];
    for(i in words){
      word = words[i];
      array.push(word.charAt(0).toUpperCase()+word.toLowerCase().slice(1));
    }
    return array.join(' ');
  }
});

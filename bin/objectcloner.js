Object.defineProperty(Array.prototype, 'clone',{
  get : function(){
    return cloneArray(this);
  }
});

Object.defineProperty(Object.prototype, 'clone',{
  get : function(){
    return cloneObject(this);
  }
});

var cloneArray = function(arr){
  var clone = [];
  for(var k in arr){
    if(typeof arr[k] == 'object'){
      clone.push(arr[k].clone);
    }else if(typeof arr[k] == 'function'){
      eval('clone.push('+arr[k].toString()+')');
    }else{
      clone.push(arr[k]);
    }
  }
  return clone;
};

var cloneObject = function(obj){
  var clone = {};
  for(var k in obj){
    if(typeof obj[k] == 'object'){
      clone[k] = obj[k].clone;
    }else if(typeof obj[k] == 'function'){
      eval('clone[k]='+obj[k].toString());
    }else{
      clone[k] = obj[k];
    }
  }
  return clone;
};
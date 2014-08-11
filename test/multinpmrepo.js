config = require('../config.json');
logger = require('nicelogger').config(config.logger, __dirname+'/..');
require('../bin/multinpmrepo');
var obj1, obj2;
logger.welcome();

exports.setUp = function(done){
  obj1 = {
    arr : ['uno','dos','tres',function(playschool){return playschool;}],
    element : {
      wow : 'such',
      deep : ['level',true]
    }
  };
  obj2 = {
    arr : ['uno','dos','tres',function(playschool){return playschool;}],
    element : {
      wow : 'such',
      deep : ['level',true]
    }
  };
  obj1Test = {
    arr : ['uno','dos','cuatro',function(playschool){return playschool;}],
    element : {
      wow : 'such',
      deep : ['level',false]
    }
  };
  done();
};

exports.testTitleize = function(test){
  logger.info('Probando la transformación de titleize');
  logger.debug(
    'the x-men are a single_word: awesome'.yellow,
    '=>'.red,
    'The X Men Are A Single Word: Awesome'.yellow
  );
  test.equal('the x-men are a single_word: awesome'.titleize,'The X Men Are A Single Word: Awesome');
  test.done();
};

exports.testCloner = function(test){
  console.log();
  logger.info('Probando el clonador de objetos');
  logger.info('Después de clonar','obj1'.magenta,'en','obj1Cloned'.magenta,'modificamos el clon');
  obj1Cloned = obj1.clone;
  obj1Cloned.arr[2] = 'cuatro';
  obj1Cloned.element.deep[1] = false;
  logger.info('Comparamos el clon contra el obj1Test el cual representa como debería haber quedado');
  
  test.equal(JSON.stringify(obj1Cloned),JSON.stringify(obj1Test));
  logger.info('Si el clon está bien hecho,','obj1'.red,'debe ser igual a','obj2'.red);
  
  test.equal(JSON.stringify(obj1),JSON.stringify(obj2));
  logger.info('Sin embargo, el clon debe podernos contestar con la función que copió de obj1');
  var resClon = obj1Cloned.arr[3]('wow');
  var resobj1 = obj1.arr[3]('wow');
  
  test.equal(resClon,resobj1);

  test.done();
};
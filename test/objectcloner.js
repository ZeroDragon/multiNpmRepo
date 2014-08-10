require('../bin/objectcloner.js');
var arr1, obj1, arr2, obj2;
exports.setUp = function(done){
  arr1  = [
    'ele',
    'ment',
    'one',
    [
      'Woow',
      [
        function(par1){
          return (par1);
        },
        [
          'lol'
        ]
      ]
    ]
  ];
  arr2  = [
    'ele',
    'ment',
    'one',
    [
      'Woow',
      [
        function(par1){
          return (par1);
        },
        [
          'lol'
        ]
      ]
    ]
  ];
  arr2b = [
    'ele',
    'ment',
    'one',
    [
      'Woow',
      [
        function(par1){
          return (par1);
        },
        [
          'change'
        ]
      ]
    ]
  ];
  obj1  = {
    key:'stuff',
    name:'noName',
    wow:{
      such:{
        deep:'lol',
        something:function(par1){
          return (par1);
        }
      }
    }
  };
  obj2  = {
    key:'stuff',
    name:'noName',
    wow:{
      such:{
        deep:'lol',
        something:function(par1){
          return (par1);
        }
      }
    }
  };
  obj2b  = {
    key:'stuff',
    name:'noName',
    wow:{
      such:{
        deep:'change',
        something:function(par1){
          return (par1);
        }
      }
    }
  };
  done();
};

exports.testArray = function(test){
  var arr1b = arr1.clone;
  arr1b[3][1][1][0] = 'change';
  test.equal(arr1.toString(),arr2.toString());
  test.equal(arr1b.toString(),arr2b.toString());
  test.equal(arr1b[3][1][0]('wow'),'wow');
  test.done();
};

exports.testObject = function(test){
  var obj1b = obj1.clone;
  obj1b.wow.such.deep = 'change';
  test.equal(JSON.stringify(obj1),JSON.stringify(obj2));
  test.equal(JSON.stringify(obj1b),JSON.stringify(obj2b));
  wow = obj1b.wow.such.something('wow');
  test.equal(wow,'wow');
  test.done();
};
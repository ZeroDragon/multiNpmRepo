require('../bin/titleize');

exports.testTitleCase = function(test){
  test.equal('man from the boondocks'.titleize, 'Man From The Boondocks');
  test.equal('x-men: the last stand'.titleize, 'X Men: The Last Stand');
  test.equal('TheManWithoutAPast'.titleize, 'The Man Without A Past');
  test.equal('raiders_of_the_lost_ark'.titleize,'Raiders Of The Lost Ark');
  test.done();
};

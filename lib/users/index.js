/*jslint sloppy: true, laxcomma: true, -W108, -W109, white : true,
devel: true, indent: false*/

exports.all = function(fn) {
  fn(null, [
    { name: 'tobi' },
    { name: 'loki' },
    { name: 'thor' }
  ]);
};

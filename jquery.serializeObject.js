$.fn.serializeObject = function() {
  function assignNested(o, keys, value) {
    var last = keys.length - 1;

    for (var i = 0; i < last; ++i) {
      var key = keys[i];

      if (!(key in o)) {
          o[key] = {};
      }

      o = o[key];
    }

    if (o[keys[last]] !== undefined) {
      if (!o[keys[last]].push) {
          o[keys[last]] = [o[keys[last]]];
      }
      o[keys[last]].push(value);
    } else {
      o[keys[last]] = value;
    }
  }

  var obj = {},
      a = this.serializeArray();

  $.each(a, function() {
    assignNested(obj, this.name.split('.'), this.value);
  });

  return obj;
};

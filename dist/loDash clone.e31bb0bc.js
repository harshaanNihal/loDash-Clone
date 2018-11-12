// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"array/chunk.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chunk;

// Creates an array of elements split into groups the length of size.If array can't be split evenly, the final chunk will be the remaining elements.
// ++++ARGUMENT++++
// array(Array): The array to process.
// [size = 1](number): The length of each chunk
function chunk(array) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var newArr = [];
  array.reduce(function (acc, v, i, a) {
    acc.push(v);

    if ((i + 1) % size == 0 || i + 1 >= a.length) {
      newArr.push(acc);
      acc = [];
    }

    return acc;
  }, []);
  return newArr;
} // +++RETURN+++
// (Array): Returns the new array of chunks.
// +++EXAMPLE+++
// chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
// chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
},{}],"array/compact.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compact;

// Creates an array with all falsey values removed.The values false, null, 0, "", undefined, and NaN are falsey.
// ++++ARGUMENT++++
// array(Array): The array to compact.
function compact(array) {
  return array.reduce(function (acc, v) {
    if (v) acc.push(v);
    return acc;
  }, []);
} // without reduce working
// function compact(array) {
//     return array.filter(v => Boolean(v));
// }
// +++RETURN+++
// (Array): Returns the new array of filtered values.
// +++EXAMPLE+++
// compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
// compact([0, 1, false, 2, '', 3, NaN, 4, null, 5, undefined]);
// => [1, 2, 3, 4, 5]
},{}],"array/concat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = concat;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Creates a new array concatenating array with any additional arrays and / or values.
// ++++ARGUMENT++++
// array(Array): The array to concatenate.
// [values](...*): The values to concatenate.
function concat(arr) {
  var newArr = _toConsumableArray(arr);

  for (var _len = arguments.length, value = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    value[_key - 1] = arguments[_key];
  }

  value.forEach(function (v) {
    if (Array.isArray(v)) {
      v.forEach(function (element) {
        return newArr.push(element);
      });
    } else newArr.push(v);
  });
  return newArr;
} // +++RETURN+++
// (Array): Returns the new concatenated array.
// +++EXAMPLE+++
// var array = [1];
// var other = concat(array, 2, [3], [[4]]);
// console.log(other);
// // => [1, 2, 3, [4]]
// console.log(array);
// => [1]
},{}],"array/difference.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = difference;

// Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.The order and references of result values are determined by the first array.
// ++++ARGUMENT++++
// array(Array): The array to inspect.
// [values](...Array): The values to exclude.
// without redeeuce and with just 2nd argument as array
function difference(arr1, arr2) {
  return arr1.filter(function (v) {
    return !arr2.includes(v);
  });
} //with Reduce working with second arg as rest Argument
// function difference(arr1, arr2) {
//   return arr1.reduce((acc,v) => {
//     arr2.includes(v) ? null : acc.push(v);
//     return acc;
//   },[])
// }
// +++RETURN+++
// (Array): Returns the new array of filtered values.
// +++EXAMPLE+++
// difference([2, 1], [2, 3]);
// => [1]
// difference([2, 1,3,4], [2, 3]);
// => [1,4]
},{}],"array/drop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = drop;

// Creates a slice of array with n elements dropped from the beginning.
// ++++ARGUMENT++++
// array(Array): The array to query.
// [n = 1](number): The number of elements to drop.
// with slice
function drop(array) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return array.slice(n);
} //without slice with reduce working
// function drop(array, n = 1) {
//  return array.reduce( (acc,value,i)=>{
//     if(i >= n) acc.push(value); 
//     return acc;
//  },[])
// }
// +++RETURN+++
// (Array): Returns the slice of array.
// +++EXAMPLE+++
// drop([1, 2, 3]);
// => [2, 3]
// drop([1, 2, 3], 2);
// => [3]
// drop([1, 2, 3], 5);
// => []
// drop([1, 2, 3], 0);
// => [1, 2, 3]
},{}],"array/dropRight.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dropRight;

// Creates a slice of array with n elements dropped from the end.
// ++++ARGUMENT++++
// array(Array): The array to query.
// [n = 1](number): The number of elements to drop.
// with slice
function dropRight(array) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return array.slice(0, -n) || [];
} // +++RETURN+++
// (Array): Returns the slice of array.
// +++EXAMPLE+++
// dropRight([1, 2, 3], 2);
// => [1]
// dropRight([1, 2, 3], 5);
// => []
},{}],"array/fill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fill;

//Fills elements of array with value from start up to, but not including, end.
// // ++++ARGUMENT++++
// array(Array): The array to fill.
// value(*): The value to fill array with.
// [start = 0](number): The start position.
// [end = array.length](number): The end position.
function fill(arr, value) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : arr.length;
  arr = arr.reduce(function (acc, v, i) {
    if (i >= start && i < end) {
      acc.push(value);
    } else acc.push(v);

    return acc;
  }, []);
  return arr;
} // +++RETURN+++
// (Array): Returns array.
// +++EXAMPLE+++
// fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
// var array = [1,2,3]
// fill(array, 'a');
// console.log(array);
// => ['a', 'a', 'a']
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _chunk = _interopRequireDefault(require("./array/chunk"));

var _compact = _interopRequireDefault(require("./array/compact"));

var _concat = _interopRequireDefault(require("./array/concat"));

var _difference = _interopRequireDefault(require("./array/difference"));

var _drop = _interopRequireDefault(require("./array/drop"));

var _dropRight = _interopRequireDefault(require("./array/dropRight"));

var _fill = _interopRequireDefault(require("./array/fill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = {
  chunk: _chunk.default,
  compact: _compact.default,
  concat: _concat.default,
  difference: _difference.default,
  drop: _drop.default,
  dropRight: _dropRight.default,
  fill: _fill.default
};
var name1 = "hello";
console.log(_);

var x = _.chunk([1, 2, 3, 4, 5], 2);

console.log(x);
},{"./array/chunk":"array/chunk.js","./array/compact":"array/compact.js","./array/concat":"array/concat.js","./array/difference":"array/difference.js","./array/drop":"array/drop.js","./array/dropRight":"array/dropRight.js","./array/fill":"array/fill.js"}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36573" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/loDash%20clone.e31bb0bc.map
(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        "use strict";

        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }

        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);

              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }

              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }

              _next(undefined);
            });
          };
        }

        (module.exports = _asyncToGenerator),
          (module.exports.__esModule = true),
          (module.exports["default"] = module.exports);
      },
      {},
    ],
    2: [
      function (require, module, exports) {
        "use strict";

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        (module.exports = _interopRequireDefault),
          (module.exports.__esModule = true),
          (module.exports["default"] = module.exports);
      },
      {},
    ],
    3: [
      function (require, module, exports) {
        "use strict";

        function _typeof(obj) {
          "@babel/helpers - typeof";

          return (
            ((module.exports = _typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            (module.exports.__esModule = true),
            (module.exports["default"] = module.exports)),
            _typeof(obj)
          );
        }

        (module.exports = _typeof),
          (module.exports.__esModule = true),
          (module.exports["default"] = module.exports);
      },
      {},
    ],
    4: [
      function (require, module, exports) {
        "use strict";

        module.exports = require("regenerator-runtime");
      },
      { "regenerator-runtime": 5 },
    ],
    5: [
      function (require, module, exports) {
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof2 = _interopRequireDefault(
          require("@babel/runtime/helpers/typeof")
        );

        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var runtime = (function (exports) {
          "use strict";

          var Op = Object.prototype;
          var hasOwn = Op.hasOwnProperty;
          var undefined; // More compressible than void 0.

          var $Symbol = typeof Symbol === "function" ? Symbol : {};
          var iteratorSymbol = $Symbol.iterator || "@@iterator";
          var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
          var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

          function define(obj, key, value) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
            return obj[key];
          }

          try {
            // IE 8 has a broken Object.defineProperty that only works on DOM objects.
            define({}, "");
          } catch (err) {
            define = function define(obj, key, value) {
              return (obj[key] = value);
            };
          }

          function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator =
              outerFn && outerFn.prototype instanceof Generator
                ? outerFn
                : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.

            generator._invoke = makeInvokeMethod(innerFn, self, context);
            return generator;
          }

          exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
          // record like context.tryEntries[i].completion. This interface could
          // have been (and was previously) designed to take a closure to be
          // invoked without arguments, but in all the cases we care about we
          // already have an existing method we want to call, so there's no need
          // to create a new function object. We can even get away with assuming
          // the method takes exactly one argument, since that happens to be true
          // in every case, so we don't have to touch the arguments object. The
          // only additional allocation required is the completion record, which
          // has a stable shape and so hopefully should be cheap to allocate.

          function tryCatch(fn, obj, arg) {
            try {
              return {
                type: "normal",
                arg: fn.call(obj, arg),
              };
            } catch (err) {
              return {
                type: "throw",
                arg: err,
              };
            }
          }

          var GenStateSuspendedStart = "suspendedStart";
          var GenStateSuspendedYield = "suspendedYield";
          var GenStateExecuting = "executing";
          var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
          // breaking out of the dispatch switch statement.

          var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
          // .constructor.prototype properties for functions that return Generator
          // objects. For full spec compliance, you may wish to configure your
          // minifier not to mangle the names of these two functions.

          function Generator() {}

          function GeneratorFunction() {}

          function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
          // don't natively support it.

          var IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          var getProto = Object.getPrototypeOf;
          var NativeIteratorPrototype =
            getProto && getProto(getProto(values([])));

          if (
            NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol)
          ) {
            // This environment has a native %IteratorPrototype%; use it instead
            // of the polyfill.
            IteratorPrototype = NativeIteratorPrototype;
          }

          var Gp =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(IteratorPrototype));
          GeneratorFunction.prototype = GeneratorFunctionPrototype;
          define(Gp, "constructor", GeneratorFunctionPrototype);
          define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
          GeneratorFunction.displayName = define(
            GeneratorFunctionPrototype,
            toStringTagSymbol,
            "GeneratorFunction"
          ); // Helper for defining the .next, .throw, and .return methods of the
          // Iterator interface in terms of a single ._invoke method.

          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }

          exports.isGeneratorFunction = function (genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor
              ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
                  // do is to check its .name property.
                  (ctor.displayName || ctor.name) === "GeneratorFunction"
              : false;
          };

          exports.mark = function (genFun) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
              genFun.__proto__ = GeneratorFunctionPrototype;
              define(genFun, toStringTagSymbol, "GeneratorFunction");
            }

            genFun.prototype = Object.create(Gp);
            return genFun;
          }; // Within the body of any async function, `await x` is transformed to
          // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
          // `hasOwn.call(value, "__await")` to determine if the yielded value is
          // meant to be awaited.

          exports.awrap = function (arg) {
            return {
              __await: arg,
            };
          };

          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);

              if (record.type === "throw") {
                reject(record.arg);
              } else {
                var result = record.arg;
                var value = result.value;

                if (
                  value &&
                  (0, _typeof2["default"])(value) === "object" &&
                  hasOwn.call(value, "__await")
                ) {
                  return PromiseImpl.resolve(value.__await).then(
                    function (value) {
                      invoke("next", value, resolve, reject);
                    },
                    function (err) {
                      invoke("throw", err, resolve, reject);
                    }
                  );
                }

                return PromiseImpl.resolve(value).then(
                  function (unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                  },
                  function (error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                  }
                );
              }
            }

            var previousPromise;

            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }

              return (previousPromise = // If enqueue has been called before, then we want to wait until
                // all previous Promises have been resolved before calling invoke,
                // so that results are always delivered in the correct order. If
                // enqueue has not been called before, then it is important to
                // call invoke immediately, without waiting on a callback to fire,
                // so that the async generator function has the opportunity to do
                // any necessary setup in a predictable way. This predictability
                // is why the Promise constructor synchronously invokes its
                // executor callback, and why async functions synchronously
                // execute code before the first await. Since we implement simple
                // async functions in terms of async generators, it is especially
                // important to get this right, even though it requires care.
                previousPromise
                  ? previousPromise.then(
                      callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
                      // invocations of the iterator.
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
            } // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).

            this._invoke = enqueue;
          }

          defineIteratorMethods(AsyncIterator.prototype);
          define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
            return this;
          });
          exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
          // AsyncIterator objects; they just return a Promise for the value of
          // the final result produced by the iterator.

          exports.async = function (
            innerFn,
            outerFn,
            self,
            tryLocsList,
            PromiseImpl
          ) {
            if (PromiseImpl === void 0) PromiseImpl = Promise;
            var iter = new AsyncIterator(
              wrap(innerFn, outerFn, self, tryLocsList),
              PromiseImpl
            );
            return exports.isGeneratorFunction(outerFn)
              ? iter // If outerFn is a generator, return the full iterator.
              : iter.next().then(function (result) {
                  return result.done ? result.value : iter.next();
                });
          };

          function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;
            return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                throw new Error("Generator is already running");
              }

              if (state === GenStateCompleted) {
                if (method === "throw") {
                  throw arg;
                } // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume

                return doneResult();
              }

              context.method = method;
              context.arg = arg;

              while (true) {
                var delegate = context.delegate;

                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);

                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }

                if (context.method === "next") {
                  // Setting context._sent for legacy support of Babel's
                  // function.sent implementation.
                  context.sent = context._sent = context.arg;
                } else if (context.method === "throw") {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw context.arg;
                  }

                  context.dispatchException(context.arg);
                } else if (context.method === "return") {
                  context.abrupt("return", context.arg);
                }

                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);

                if (record.type === "normal") {
                  // If an exception is thrown from innerFn, we leave state ===
                  // GenStateExecuting and loop back for another invocation.
                  state = context.done
                    ? GenStateCompleted
                    : GenStateSuspendedYield;

                  if (record.arg === ContinueSentinel) {
                    continue;
                  }

                  return {
                    value: record.arg,
                    done: context.done,
                  };
                } else if (record.type === "throw") {
                  state = GenStateCompleted; // Dispatch the exception by looping back around to the
                  // context.dispatchException(context.arg) call above.

                  context.method = "throw";
                  context.arg = record.arg;
                }
              }
            };
          } // Call delegate.iterator[context.method](context.arg) and handle the
          // result, either by returning a { value, done } result from the
          // delegate iterator, or by modifying context.method and context.arg,
          // setting context.delegate to null, and returning the ContinueSentinel.

          function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];

            if (method === undefined) {
              // A .throw or .return when the delegate iterator has no .throw
              // method always terminates the yield* loop.
              context.delegate = null;

              if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                  // If the delegate iterator has a return method, give it a
                  // chance to clean up.
                  context.method = "return";
                  context.arg = undefined;
                  maybeInvokeDelegate(delegate, context);

                  if (context.method === "throw") {
                    // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                  }
                }

                context.method = "throw";
                context.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                );
              }

              return ContinueSentinel;
            }

            var record = tryCatch(method, delegate.iterator, context.arg);

            if (record.type === "throw") {
              context.method = "throw";
              context.arg = record.arg;
              context.delegate = null;
              return ContinueSentinel;
            }

            var info = record.arg;

            if (!info) {
              context.method = "throw";
              context.arg = new TypeError("iterator result is not an object");
              context.delegate = null;
              return ContinueSentinel;
            }

            if (info.done) {
              // Assign the result of the finished delegate to the temporary
              // variable specified by delegate.resultName (see delegateYield).
              context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

              context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
              // exception, let the outer generator proceed normally. If
              // context.method was "next", forget context.arg since it has been
              // "consumed" by the delegate iterator. If context.method was
              // "return", allow the original .return call to continue in the
              // outer generator.

              if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
              }
            } else {
              // Re-yield the result returned by the delegate method.
              return info;
            } // The delegate iterator is finished, so forget it and continue with
            // the outer generator.

            context.delegate = null;
            return ContinueSentinel;
          } // Define Generator.prototype.{next,throw,return} in terms of the
          // unified ._invoke helper method.

          defineIteratorMethods(Gp);
          define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
          // @@iterator function is called on it. Some browsers' implementations of the
          // iterator prototype chain incorrectly implement this, causing the Generator
          // object to not be returned from this call. This ensures that doesn't happen.
          // See https://github.com/facebook/regenerator/issues/274 for more details.

          define(Gp, iteratorSymbol, function () {
            return this;
          });
          define(Gp, "toString", function () {
            return "[object Generator]";
          });

          function pushTryEntry(locs) {
            var entry = {
              tryLoc: locs[0],
            };

            if (1 in locs) {
              entry.catchLoc = locs[1];
            }

            if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
            }

            this.tryEntries.push(entry);
          }

          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
          }

          function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [
              {
                tryLoc: "root",
              },
            ];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }

          exports.keys = function (object) {
            var keys = [];

            for (var key in object) {
              keys.push(key);
            }

            keys.reverse(); // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.

            return function next() {
              while (keys.length) {
                var key = keys.pop();

                if (key in object) {
                  next.value = key;
                  next.done = false;
                  return next;
                }
              } // To avoid creating an additional object, we just hang the .value
              // and .done properties off the next function object itself. This
              // also ensures that the minifier will not anonymize the function.

              next.done = true;
              return next;
            };
          };

          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];

              if (iteratorMethod) {
                return iteratorMethod.call(iterable);
              }

              if (typeof iterable.next === "function") {
                return iterable;
              }

              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    while (++i < iterable.length) {
                      if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                      }
                    }

                    next.value = undefined;
                    next.done = true;
                    return next;
                  };

                return (next.next = next);
              }
            } // Return an iterator with no values.

            return {
              next: doneResult,
            };
          }

          exports.values = values;

          function doneResult() {
            return {
              value: undefined,
              done: true,
            };
          }

          Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              this.prev = 0;
              this.next = 0; // Resetting context._sent for legacy support of Babel's
              // function.sent implementation.

              this.sent = this._sent = undefined;
              this.done = false;
              this.delegate = null;
              this.method = "next";
              this.arg = undefined;
              this.tryEntries.forEach(resetTryEntry);

              if (!skipTempReset) {
                for (var name in this) {
                  // Not sure about the optimal order of these conditions:
                  if (
                    name.charAt(0) === "t" &&
                    hasOwn.call(this, name) &&
                    !isNaN(+name.slice(1))
                  ) {
                    this[name] = undefined;
                  }
                }
              }
            },
            stop: function stop() {
              this.done = true;
              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;

              if (rootRecord.type === "throw") {
                throw rootRecord.arg;
              }

              return this.rval;
            },
            dispatchException: function dispatchException(exception) {
              if (this.done) {
                throw exception;
              }

              var context = this;

              function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;

                if (caught) {
                  // If the dispatched exception was caught by a catch block,
                  // then let that catch block handle the exception normally.
                  context.method = "next";
                  context.arg = undefined;
                }

                return !!caught;
              }

              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;

                if (entry.tryLoc === "root") {
                  // Exception thrown outside of any try block that could handle
                  // it, so set the completion value of the entire function to
                  // throw the exception.
                  return handle("end");
                }

                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc");
                  var hasFinally = hasOwn.call(entry, "finallyLoc");

                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    } else if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    }
                  } else if (hasFinally) {
                    if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else {
                    throw new Error("try statement without catch or finally");
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];

                if (
                  entry.tryLoc <= this.prev &&
                  hasOwn.call(entry, "finallyLoc") &&
                  this.prev < entry.finallyLoc
                ) {
                  var finallyEntry = entry;
                  break;
                }
              }

              if (
                finallyEntry &&
                (type === "break" || type === "continue") &&
                finallyEntry.tryLoc <= arg &&
                arg <= finallyEntry.finallyLoc
              ) {
                // Ignore the finally entry if control is not jumping to a
                // location outside the try/catch block.
                finallyEntry = null;
              }

              var record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;

              if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
              }

              return this.complete(record);
            },
            complete: function complete(record, afterLoc) {
              if (record.type === "throw") {
                throw record.arg;
              }

              if (record.type === "break" || record.type === "continue") {
                this.next = record.arg;
              } else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
              } else if (record.type === "normal" && afterLoc) {
                this.next = afterLoc;
              }

              return ContinueSentinel;
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];

                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },
            catch: function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];

                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;

                  if (record.type === "throw") {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }

                  return thrown;
                }
              } // The context.catch method must only be called with a location
              // argument that corresponds to a known catch block.

              throw new Error("illegal catch attempt");
            },
            delegateYield: function delegateYield(
              iterable,
              resultName,
              nextLoc
            ) {
              this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc,
              };

              if (this.method === "next") {
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                this.arg = undefined;
              }

              return ContinueSentinel;
            },
          }; // Regardless of whether this script is executing as a CommonJS module
          // or not, return the runtime object so that we can declare the variable
          // regeneratorRuntime in the outer scope, which allows this module to be
          // injected easily by `bin/regenerator --include-runtime script.js`.

          return exports;
        })(
          // If this script is executing as a CommonJS module, use module.exports
          // as the regeneratorRuntime namespace. Otherwise create a new empty
          // object. Either way, the resulting object will be used to initialize
          // the regeneratorRuntime variable at the top of this file.
          (typeof module === "undefined"
            ? "undefined"
            : (0, _typeof2["default"])(module)) === "object"
            ? module.exports
            : {}
        );

        try {
          regeneratorRuntime = runtime;
        } catch (accidentalStrictMode) {
          // This module should not be running in strict mode, so the above
          // assignment should always work unless something is misconfigured. Just
          // in case runtime.js accidentally runs in strict mode, in modern engines
          // we can explicitly access globalThis. In older engines we can escape
          // strict mode using a global Function call. This could conceivably fail
          // if a Content Security Policy forbids using Function, but in that case
          // the proper solution is to fix the accidental strict mode problem. If
          // you've misconfigured your bundler to force strict mode and applied a
          // CSP to forbid Function, and you're not willing to fix either of those
          // problems, please detail your unique predicament in a GitHub issue.
          if (
            (typeof globalThis === "undefined"
              ? "undefined"
              : (0, _typeof2["default"])(globalThis)) === "object"
          ) {
            globalThis.regeneratorRuntime = runtime;
          } else {
            Function("r", "regeneratorRuntime = r")(runtime);
          }
        }
      },
      {
        "@babel/runtime/helpers/interopRequireDefault": 2,
        "@babel/runtime/helpers/typeof": 3,
      },
    ],
    6: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.ABI = void 0;
        var ABI = [
          {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
              },
              {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
              },
              {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
              },
            ],
            name: "ApprovalForAll",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "approve",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
            ],
            name: "balanceOf",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "cost",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "getApproved",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "hiddenMetadataUri",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "address",
                name: "operator",
                type: "address",
              },
            ],
            name: "isApprovedForAll",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "maxMintAmountPerAddress",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "maxMintAmountPerTx",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "maxSupply",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_mintAmount",
                type: "uint256",
              },
            ],
            name: "mint",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_mintAmount",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "_receiver",
                type: "address",
              },
            ],
            name: "mintForAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "ownerOf",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "paused",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "revealed",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
              },
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "operator",
                type: "address",
              },
              {
                internalType: "bool",
                name: "approved",
                type: "bool",
              },
            ],
            name: "setApprovalForAll",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_cost",
                type: "uint256",
              },
            ],
            name: "setCost",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "string",
                name: "_hiddenMetadataUri",
                type: "string",
              },
            ],
            name: "setHiddenMetadataUri",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_maxMintAmountPerTx",
                type: "uint256",
              },
            ],
            name: "setMaxMintAmountPerTx",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "bool",
                name: "_state",
                type: "bool",
              },
            ],
            name: "setPaused",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "bool",
                name: "_state",
                type: "bool",
              },
            ],
            name: "setRevealed",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "string",
                name: "_uriPrefix",
                type: "string",
              },
            ],
            name: "setUriPrefix",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "string",
                name: "_uriSuffix",
                type: "string",
              },
            ],
            name: "setUriSuffix",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_newmaxMintAmount",
                type: "uint256",
              },
            ],
            name: "setmaxMintAmountPerAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
              },
            ],
            name: "supportsInterface",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
              },
            ],
            name: "tokenURI",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "transferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "uriPrefix",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "uriSuffix",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_owner",
                type: "address",
              },
            ],
            name: "walletOfOwner",
            outputs: [
              {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ];
        exports.ABI = ABI;
      },
      {},
    ],
    7: [
      function (require, module, exports) {
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.toggleConnected =
          exports.showMessage =
          exports.round =
          exports.postData =
            void 0;

        var _regenerator = _interopRequireDefault(
          require("@babel/runtime/regenerator")
        );

        var _asyncToGenerator2 = _interopRequireDefault(
          require("@babel/runtime/helpers/asyncToGenerator")
        );

        var postData = /*#__PURE__*/ (function () {
          var _ref = (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/ _regenerator["default"].mark(function _callee() {
              var url,
                data,
                response,
                _args = arguments;
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      url =
                        _args.length > 0 && _args[0] !== undefined
                          ? _args[0]
                          : "";
                      data =
                        _args.length > 1 && _args[1] !== undefined
                          ? _args[1]
                          : {};
                      _context.next = 4;
                      return fetch(url, {
                        method: "POST",
                        cache: "no-cache",
                        credentials: "same-origin",
                        headers: {
                          "Content-Type": "application/json;charset=utf-8",
                        },
                        redirect: "follow",
                        // manual, *follow, error
                        body: JSON.stringify(data),
                      });

                    case 4:
                      response = _context.sent;
                      _context.next = 7;
                      return response.json();

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          );

          return function postData() {
            return _ref.apply(this, arguments);
          };
        })();

        exports.postData = postData;

        var toggleConnected = function toggleConnected(state) {
          state
            ? document.body.classList.replace("not-connected", "is-connected")
            : document.body.classList.replace("is-connected", "not-connected");
        };

        exports.toggleConnected = toggleConnected;

        var round = function round(num) {
          var decimalPlaces =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : 3;
          num = Math.round(num + "e" + decimalPlaces);
          return Number(num + "e" + -decimalPlaces);
        };

        exports.round = round;

        var showMessage = function showMessage(message) {
          var type =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : "success";
          var showTime =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : 5000;
          var el = document.getElementById("message");

          if (el !== null) {
            el.innerHTML = message;
            el.classList.add("active", type);
          }

          if (showTime > 0) {
            setTimeout(hideMessage, 5000);
          }
        };

        exports.showMessage = showMessage;

        var hideMessage = function hideMessage() {
          var el = document.getElementById("message");

          if (el !== null) {
            el.innerHTML = "";
            el.classList.remove("active", "error", "success", "warning");
          }
        };
      },
      {
        "@babel/runtime/helpers/asyncToGenerator": 1,
        "@babel/runtime/helpers/interopRequireDefault": 2,
        "@babel/runtime/regenerator": 4,
      },
    ],
    8: [
      function (require, module, exports) {
        "use strict"; //import Web3 from 'web3';

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.signWithWeb3 = exports.signDataWithWeb3 = void 0;

        var _regenerator = _interopRequireDefault(
          require("@babel/runtime/regenerator")
        );

        var _asyncToGenerator2 = _interopRequireDefault(
          require("@babel/runtime/helpers/asyncToGenerator")
        );

        var _abi = require("./abi");

        var _common = require("./common");

        var rightChainId = 1;
        // const contractAddress = '0x4B18663E93E6eece88F70BfF58E10EFb44f58397';
        var contractAddress = "0x88cf6ad7b51c452bc8d01a6850165e38cf0202d7";
        var apiUrl = "https://cryptopop.club/api/v1/";
        var states = ["Closed", "Presale", "Public"];
        var chains = {
          1: "Mainnet",
          3: "Ropsten",
          4: "Rinkeby",
          5: "Goerli",
          56: "Binance Smart Chain",
          137: "Polygon",
        };
        var instance = false;
        var currentAccount;
        var web3;
        var currentChainId;
        var authSig;
        var numtomint = 1;
        var total = 333;
        var BN;
        var currentPrice;
        var currentState;
        var currentMinted;
        var mintedbyYou;
        var amountPerMint = 1; //max

        var priceval;

        var signWithWeb3 = /*#__PURE__*/ (function () {
          var _ref = (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/ _regenerator["default"].mark(function _callee(
              walletAddress,
              data
            ) {
              var msg;
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      msg = web3.eth.abi.encodeParameter(
                        "bytes32",
                        web3.eth.abi.encodeParameter("address", data)
                      );
                      _context.next = 3;
                      return web3.eth.sign(msg, walletAddress);

                    case 3:
                      return _context.abrupt("return", _context.sent);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          );

          return function signWithWeb3(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        })();

        exports.signWithWeb3 = signWithWeb3;

        var signDataWithWeb3 = /*#__PURE__*/ (function () {
          var _ref2 = (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/ _regenerator["default"].mark(function _callee2(
              walletAddress,
              data
            ) {
              var msg;
              return _regenerator["default"].wrap(function _callee2$(
                _context2
              ) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      msg = web3.eth.abi.encodeParameter(
                        "bytes64",
                        web3.eth.abi.encodeParameter("string", data)
                      );
                      _context2.next = 3;
                      return web3.eth.sign(msg, walletAddress);

                    case 3:
                      return _context2.abrupt("return", _context2.sent);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              },
              _callee2);
            })
          );

          return function signDataWithWeb3(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        })();

        exports.signDataWithWeb3 = signDataWithWeb3;

        var getChainExplorerLink = function getChainExplorerLink(chainId) {
          if (chainId == 1) {
            return "https://etherscan.io/";
          } else {
            var subdomain = chains[chainId].toLowerCase();
            return "https://".concat(subdomain, ".etherscan.io/");
          }
        };

        var ethEnabled = function ethEnabled() {
          if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            console.log("using standalone Web3");
            return true;
          }
          /* else if (window.web3) {
     web3 = window.web3;
     return true
  }*/

          console.log("eth disabled");
          return false;
        };

        var refreshData = /*#__PURE__*/ (function () {
          var _ref3 = (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/ _regenerator["default"].mark(function _callee3() {
              var once,
                stateEl,
                maxSupEl,
                walletAddr,
                progressbar,
                _args3 = arguments;
              return _regenerator["default"].wrap(function _callee3$(
                _context3
              ) {
                while (1) {
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      once =
                        _args3.length > 0 && _args3[0] !== undefined
                          ? _args3[0]
                          : false;

                      if (!instance) {
                        _context3.next = 38;
                        break;
                      }

                      console.log("refresh");
                      stateEl = document.getElementById("state");
                      maxSupEl = document.getElementById("maxsupplyval");
                      walletAddr = document.getElementById("wallet");
                      progressbar = document.getElementById("progressbar");
                      priceval = document.getElementById("priceval");
                      _context3.next = 10;
                      return instance.methods.state.call().call();

                    case 10:
                      currentState = _context3.sent;

                      if (!instance.methods.hasOwnProperty("getPrice")) {
                        _context3.next = 17;
                        break;
                      }

                      _context3.next = 14;
                      return instance.methods.getPrice(1).call();

                    case 14:
                      _context3.t0 = _context3.sent;
                      _context3.next = 18;
                      break;

                    case 17:
                      _context3.t0 = web3.utils.toBN(0);

                    case 18:
                      currentPrice = _context3.t0;
                      _context3.next = 21;
                      return instance.methods.totalSupply().call();

                    case 21:
                      currentMinted = _context3.sent;
                      currentMinted = web3.utils.toBN(currentMinted);
                      _context3.next = 25;
                      return instance.methods.numMinted(currentAccount).call();

                    case 25:
                      mintedbyYou = _context3.sent;
                      mintedbyYou = web3.utils.toBN(mintedbyYou);
                      _context3.next = 29;
                      return instance.methods.MAX_ELEMENTS.call().call();

                    case 29:
                      _context3.t1 = _context3.sent;
                      total = _context3.t1 - 1;

                      if (once === true && maxSupEl) {
                        maxSupEl.value = total;
                      }

                      if (walletAddr && currentAccount) {
                        walletAddr.innerText = currentAccount;
                      }

                      if (currentState == 2) {
                        //amountPerMint = 5;
                      } // console.log('Current state is', currentState);
                      // console.log('State: ' + currentState + ' Price: ', web3.utils.fromWei(currentPrice.toString()));

                      updatePrice(numtomint);

                      if (stateEl) {
                        stateEl.innerText = states[currentState];
                      }

                      if (priceval && once === true) {
                        priceval.value = web3.utils
                          .fromWei(currentPrice)
                          .toString();
                        console.log(currentPrice.toString());
                      }

                      if (progressbar) {
                        progressbar.style.width =
                          Math.round(
                            (currentMinted.toNumber() / total) * 100
                          ).toString() + "%"; //document.getElementById('nftleft').innerText = Math.round(currentMinted.toNumber()/total*100) + '%';
                      }

                    case 38:
                    case "end":
                      return _context3.stop();
                  }
                }
              },
              _callee3);
            })
          );

          return function refreshData() {
            return _ref3.apply(this, arguments);
          };
        })();

        var handleChainID = /*#__PURE__*/ (function () {
          var _ref4 = (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/ _regenerator["default"].mark(function _callee4() {
              return _regenerator["default"].wrap(
                function _callee4$(_context4) {
                  while (1) {
                    switch ((_context4.prev = _context4.next)) {
                      case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return window.ethereum.request({
                          method: "wallet_switchEthereumChain",
                          params: [
                            {
                              chainId: web3.utils.numberToHex(rightChainId),
                            },
                          ], // chainId must be in hexadecimal numbers
                        });

                      case 3:
                        _context4.next = 9;
                        break;

                      case 5:
                        _context4.prev = 5;
                        _context4.t0 = _context4["catch"](0);
                        console.error(_context4.t0);
                        (0, _common.showMessage)(
                          "User rejected chain switch",
                          "error"
                        );

                      case 9:
                      case "end":
                        return _context4.stop();
                    }
                  }
                },
                _callee4,
                null,
                [[0, 5]]
              );
            })
          );

          return function handleChainID() {
            return _ref4.apply(this, arguments);
          };
        })();

        var handleAccountsChange = function handleAccountsChange(newAccounts) {
          if (newAccounts.length === 0) {
            (0, _common.showMessage)("Connect to MetaMask!", "error");
            (0, _common.toggleConnected)(false);
          } else if (newAccounts[0] !== currentAccount) {
            currentAccount = newAccounts[0];
            console.log("Account changed to ", currentAccount); //window.location.reload();
          } else {
            console.log("Same account");
          }
        };

        var connectWallet = /*#__PURE__*/ (function () {
          var _ref5 = (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/ _regenerator["default"].mark(function _callee5() {
              var accs;
              return _regenerator["default"].wrap(
                function _callee5$(_context5) {
                  while (1) {
                    switch ((_context5.prev = _context5.next)) {
                      case 0:
                        _context5.prev = 0;
                        _context5.next = 3;
                        return window.ethereum.request({
                          method: "eth_requestAccounts",
                        });

                      case 3:
                        accs = _context5.sent;
                        handleAccountsChange(accs);
                        _context5.next = 7;
                        return web3.eth.getChainId();

                      case 7:
                        currentChainId = _context5.sent;

                        if (!(currentChainId !== rightChainId)) {
                          _context5.next = 12;
                          break;
                        }

                        (0, _common.showMessage)(
                          "Wrong chain (".concat(
                            chains[currentChainId],
                            "), connect to "
                          ) + chains[rightChainId],
                          "error"
                        );
                        _context5.next = 12;
                        return handleChainID();

                      case 12:
                        document.body.classList.replace(
                          "not-connected",
                          "is-connected"
                        );
                        return _context5.abrupt("return", accs);

                      case 16:
                        _context5.prev = 16;
                        _context5.t0 = _context5["catch"](0);

                        if (_context5.t0.code == 4001) {
                          //accounts = false;
                          console.error(_context5.t0);
                        }

                      case 19:
                      case "end":
                        return _context5.stop();
                    }
                  }
                },
                _callee5,
                null,
                [[0, 16]]
              );
            })
          );

          return function connectWallet() {
            return _ref5.apply(this, arguments);
          };
        })();

        var isWalletConnected = /*#__PURE__*/ (function () {
          var _ref6 = (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/ _regenerator["default"].mark(function _callee6() {
              var acc;
              return _regenerator["default"].wrap(function _callee6$(
                _context6
              ) {
                while (1) {
                  switch ((_context6.prev = _context6.next)) {
                    case 0:
                      _context6.next = 2;
                      return web3.eth.getAccounts();

                    case 2:
                      acc = _context6.sent;
                      console.log("Web3 accs: ", acc);
                      console.log(currentAccount);
                      return _context6.abrupt(
                        "return",
                        acc.length > 0 ? true : false
                      );

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              },
              _callee6);
            })
          );

          return function isWalletConnected() {
            return _ref6.apply(this, arguments);
          };
        })();

        var isRightChainId = /*#__PURE__*/ (function () {
          var _ref7 = (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/ _regenerator["default"].mark(function _callee7() {
              return _regenerator["default"].wrap(function _callee7$(
                _context7
              ) {
                while (1) {
                  switch ((_context7.prev = _context7.next)) {
                    case 0:
                      _context7.next = 2;
                      return web3.eth.getChainId();

                    case 2:
                      currentChainId = _context7.sent;
                      return _context7.abrupt(
                        "return",
                        currentChainId == rightChainId ? true : false
                      );

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              },
              _callee7);
            })
          );

          return function isRightChainId() {
            return _ref7.apply(this, arguments);
          };
        })();

        var getWL = /*#__PURE__*/ (function () {
          var _ref8 = (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/ _regenerator["default"].mark(function _callee8() {
              var response, result;
              return _regenerator["default"].wrap(function _callee8$(
                _context8
              ) {
                while (1) {
                  switch ((_context8.prev = _context8.next)) {
                    case 0:
                      _context8.next = 2;
                      return fetch(
                        "".concat(apiUrl, "users?sig=").concat(authSig),
                        {}
                      );

                    case 2:
                      response = _context8.sent;
                      _context8.next = 5;
                      return response.json();

                    case 5:
                      result = _context8.sent;
                      return _context8.abrupt("return", result);

                    case 7:
                    case "end":
                      return _context8.stop();
                  }
                }
              },
              _callee8);
            })
          );

          return function getWL() {
            return _ref8.apply(this, arguments);
          };
        })();

        var delWl = /*#__PURE__*/ (function () {
          var _ref9 = (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/ _regenerator["default"].mark(function _callee9(addr) {
              var data, response;
              return _regenerator["default"].wrap(function _callee9$(
                _context9
              ) {
                while (1) {
                  switch ((_context9.prev = _context9.next)) {
                    case 0:
                      if (!authSig) {
                        _context9.next = 11;
                        break;
                      }

                      data = {
                        address: addr,
                        sig: authSig,
                      };
                      _context9.next = 4;
                      return (0, _common.postData)(
                        "".concat(apiUrl, "del"),
                        data
                      );

                    case 4:
                      response = _context9.sent;
                      _context9.next = 7;
                      return wlPopulate();

                    case 7:
                      (0, _common.showMessage)("Deleted");
                      addDelEv();
                      _context9.next = 12;
                      break;

                    case 11:
                      (0, _common.showMessage)(
                        "Invalid signature, try again",
                        "error"
                      );

                    case 12:
                    case "end":
                      return _context9.stop();
                  }
                }
              },
              _callee9);
            })
          );

          return function delWl(_x5) {
            return _ref9.apply(this, arguments);
          };
        })();

        var wlPopulate = /*#__PURE__*/ (function () {
          var _ref10 = (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/ _regenerator["default"].mark(function _callee10() {
              var wl, html;
              return _regenerator["default"].wrap(function _callee10$(
                _context10
              ) {
                while (1) {
                  switch ((_context10.prev = _context10.next)) {
                    case 0:
                      _context10.next = 2;
                      return getWL();

                    case 2:
                      wl = _context10.sent;
                      html = "";
                      wl.addresses.forEach(function (val) {
                        html +=
                          '\n                        <div class="wl-list-item">\n                            <span>'
                            .concat(
                              val,
                              '</span><div class="wl-list-item-del" data-address="'
                            )
                            .concat(
                              val,
                              '">&times;</div>\n                        </div>\n                    '
                            );
                      });
                      document.getElementById("wl_list").innerHTML = html;
                      return _context10.abrupt("return", wl);

                    case 7:
                    case "end":
                      return _context10.stop();
                  }
                }
              },
              _callee10);
            })
          );

          return function wlPopulate() {
            return _ref10.apply(this, arguments);
          };
        })();

        var addDelEv = /*#__PURE__*/ (function () {
          var _ref11 = (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/ _regenerator["default"].mark(function _callee11() {
              return _regenerator["default"].wrap(function _callee11$(
                _context11
              ) {
                while (1) {
                  switch ((_context11.prev = _context11.next)) {
                    case 0:
                      document
                        .querySelectorAll(".wl-list-item-del")
                        .forEach(function (el) {
                          el.addEventListener("click", function (e) {
                            var addr = el.getAttribute("data-address");
                            console.log(addr);
                            delWl(addr);
                          });
                        });
                      return _context11.abrupt("return", true);

                    case 2:
                    case "end":
                      return _context11.stop();
                  }
                }
              },
              _callee11);
            })
          );

          return function addDelEv() {
            return _ref11.apply(this, arguments);
          };
        })();

        var contractInit = /*#__PURE__*/ (function () {
          var _ref12 = (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/ _regenerator["default"].mark(function _callee13() {
              var timer;
              return _regenerator["default"].wrap(
                function _callee13$(_context13) {
                  while (1) {
                    switch ((_context13.prev = _context13.next)) {
                      case 0:
                        _context13.prev = 0;
                        instance = new web3.eth.Contract(
                          _abi.ABI,
                          contractAddress
                        );
                        _context13.next = 4;
                        return refreshData(true);

                      case 4:
                        timer = setInterval(
                          /*#__PURE__*/ (0, _asyncToGenerator2["default"])(
                            /*#__PURE__*/ _regenerator["default"].mark(
                              function _callee12() {
                                return _regenerator["default"].wrap(
                                  function _callee12$(_context12) {
                                    while (1) {
                                      switch (
                                        (_context12.prev = _context12.next)
                                      ) {
                                        case 0:
                                          _context12.next = 2;
                                          return refreshData();

                                        case 2:
                                        case "end":
                                          return _context12.stop();
                                      }
                                    }
                                  },
                                  _callee12
                                );
                              }
                            )
                          ),
                          3000
                        );
                        _context13.next = 10;
                        break;

                      case 7:
                        _context13.prev = 7;
                        _context13.t0 = _context13["catch"](0);
                        console.log(_context13.t0);

                      case 10:
                      case "end":
                        return _context13.stop();
                    }
                  }
                },
                _callee13,
                null,
                [[0, 7]]
              );
            })
          );

          return function contractInit() {
            return _ref12.apply(this, arguments);
          };
        })();

        var updatePrice = function updatePrice(n) {
          var priceEl = document.getElementById("price");
          var pricePerOneEl = document.getElementById("priceone");
          var price = 0;

          if (currentState && currentState == 2) {
            price = currentPrice ? web3.utils.fromWei(currentPrice) : price;
          } //document.getElementById('price').innerText = web3.utils.fromWei(currentPrice).toString();

          if (priceEl) {
            priceEl.innerText = (0, _common.round)(price * n, 3).toString();
          }

          if (pricePerOneEl) {
            pricePerOneEl.innerText = (0, _common.round)(price, 3).toString();
          }
        };

        var listeners = /*#__PURE__*/ (function () {
          var _ref14 = (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/ _regenerator["default"].mark(function _callee18(e) {
              var addWlBtn,
                connectBtna,
                connectBtn,
                signinBtn,
                increaseBtn,
                decreaseBtn,
                maxBtn,
                mintBtn,
                setsaleBtn,
                withdrawBtn,
                setMaxSupplyBtn,
                setPriceBtn,
                logoutBtn;
              return _regenerator["default"].wrap(function _callee18$(
                _context18
              ) {
                while (1) {
                  switch ((_context18.prev = _context18.next)) {
                    case 0:
                      _context18.next = 2;
                      return isWalletConnected();

                    case 2:
                      _context18.t0 = _context18.sent;

                      if (!_context18.t0) {
                        _context18.next = 5;
                        break;
                      }

                      _context18.t0 = isRightChainId();

                    case 5:
                      if (!_context18.t0) {
                        _context18.next = 9;
                        break;
                      }

                      document.body.classList.replace(
                        "not-connected",
                        "is-connected"
                      );
                      _context18.next = 10;
                      break;

                    case 9:
                      document.body.classList.replace(
                        "is-connected",
                        "not-connected"
                      );

                    case 10:
                      addWlBtn = document.querySelector("#wl_add");
                      connectBtna = document.querySelector("#connect_wallet_a");
                      connectBtn = document.querySelector("#connect_wallet");
                      signinBtn = document.querySelector("#signin");
                      increaseBtn = document.querySelector("#plus");
                      decreaseBtn = document.querySelector("#minus");
                      maxBtn = document.querySelector("#setmax");
                      mintBtn = document.querySelectorAll("[data-role=mint]");
                      setsaleBtn = document.querySelectorAll(
                        "[data-role=set-sale]"
                      );
                      withdrawBtn = document.querySelectorAll(
                        "[data-role=withdraw]"
                      );
                      setMaxSupplyBtn =
                        document.querySelectorAll("[data-role=setmax]");
                      setPriceBtn = document.querySelectorAll(
                        "[data-role=setprice]"
                      );
                      logoutBtn = document.querySelector("#exit");

                      if (logoutBtn) {
                        logoutBtn.addEventListener("click", function (e) {
                          e.preventDefault();
                          logout();
                        });
                      }

                      if (increaseBtn) {
                        increaseBtn.addEventListener("click", function (e) {
                          e.preventDefault();

                          if (numtomint < amountPerMint) {
                            numtomint++;
                            updatePrice(numtomint);
                            document.getElementById("numtomint").innerText =
                              numtomint;
                          }
                        });
                      }

                      if (decreaseBtn) {
                        decreaseBtn.addEventListener("click", function (e) {
                          e.preventDefault();

                          if (numtomint > 1) {
                            numtomint--;
                            updatePrice(numtomint);
                            document.getElementById("numtomint").innerText =
                              numtomint;
                          }
                        });
                      }

                      if (maxBtn) {
                        maxBtn.addEventListener("click", function (e) {
                          e.preventDefault();
                          numtomint = amountPerMint;
                          updatePrice(amountPerMint);
                          document.getElementById("numtomint").innerText =
                            amountPerMint;
                        });
                      }

                      setMaxSupplyBtn.forEach(function (el) {
                        el.addEventListener("click", function (e) {
                          e.preventDefault();
                          var newMaxSupply = web3.utils
                            .toBN(document.getElementById("maxsupplyval").value)
                            .add(web3.utils.toBN(1));
                          instance.methods
                            .setMaxElements(newMaxSupply)
                            .send({
                              from: currentAccount,
                            })
                            .then(function (receipt) {
                              var hash = receipt.transactionHash;
                              (0,
                              _common.showMessage)('TX confirmed! <a href="'.concat(getChainExplorerLink(currentChainId), "tx/").concat(hash, '" target="_blank">View on Etherscan</a>'), "success");
                            });
                        });
                      });
                      setPriceBtn.forEach(function (el) {
                        el.addEventListener("click", function (e) {
                          e.preventDefault();

                          if (priceval) {
                            var priceWei = web3.utils.toBN(
                              web3.utils.toWei(priceval.value, "ether")
                            );
                            console.log("wei: ", priceWei);
                            instance.methods
                              .setPrice(priceWei)
                              .send({
                                from: currentAccount,
                              })
                              .then(function (receipt) {
                                var hash = receipt.transactionHash;
                                (0,
                                _common.showMessage)('TX confirmed! <a href="'.concat(getChainExplorerLink(currentChainId), "tx/").concat(hash, '" target="_blank">View on Etherscan</a>'), "success");
                              });
                          }
                        });
                      });
                      withdrawBtn.forEach(function (el) {
                        el.addEventListener("click", function (e) {
                          e.preventDefault();
                          instance.methods
                            .withdrawAll()
                            .send({
                              from: currentAccount,
                            })
                            .then(function (receipt) {
                              var hash = receipt.transactionHash;
                              (0,
                              _common.showMessage)('TX confirmed! <a href="'.concat(getChainExplorerLink(currentChainId), "tx/").concat(hash, '" target="_blank">View on Etherscan</a>'), "success");
                            });
                        });
                      });
                      setsaleBtn.forEach(function (el) {
                        el.addEventListener(
                          "click",
                          /*#__PURE__*/ (function () {
                            var _ref15 = (0, _asyncToGenerator2["default"])(
                              /*#__PURE__*/ _regenerator["default"].mark(
                                function _callee14(e) {
                                  var newSaleState;
                                  return _regenerator["default"].wrap(
                                    function _callee14$(_context14) {
                                      while (1) {
                                        switch (
                                          (_context14.prev = _context14.next)
                                        ) {
                                          case 0:
                                            e.preventDefault();
                                            newSaleState =
                                              el.getAttribute("data-id"); //console.log(newSaleState.toString());

                                            if (instance) {
                                              _context14.next = 5;
                                              break;
                                            }

                                            _context14.next = 5;
                                            return contractInit();

                                          case 5:
                                            if (currentState != newSaleState) {
                                              instance.methods
                                                .setSaleState(newSaleState)
                                                .send({
                                                  from: currentAccount,
                                                })
                                                .then(function (receipt) {
                                                  var hash =
                                                    receipt.transactionHash;
                                                  (0,
                                                  _common.showMessage)('TX confirmed! <a href="'.concat(getChainExplorerLink(currentChainId), "tx/").concat(hash, '" target="_blank">View on Etherscan</a>'), "success");
                                                }); //
                                            } else {
                                              //mint(numtomint);
                                              (0, _common.showMessage)(
                                                "Sales state is already " +
                                                  states[currentState],
                                                "error"
                                              );
                                            }

                                          case 6:
                                          case "end":
                                            return _context14.stop();
                                        }
                                      }
                                    },
                                    _callee14
                                  );
                                }
                              )
                            );

                            return function (_x7) {
                              return _ref15.apply(this, arguments);
                            };
                          })()
                        );
                      });
                      mintBtn.forEach(function (el) {
                        el.addEventListener("click", function (e) {
                          e.preventDefault();

                          if (currentState == 0) {
                            (0, _common.showMessage)(
                              "Sales is closed",
                              "error"
                            );
                          } else {
                            mint(numtomint);
                          }
                        });
                      });

                      if (addWlBtn) {
                        addWlBtn.addEventListener(
                          "click",
                          /*#__PURE__*/ (function () {
                            var _ref16 = (0, _asyncToGenerator2["default"])(
                              /*#__PURE__*/ _regenerator["default"].mark(
                                function _callee15(e) {
                                  var data, response;
                                  return _regenerator["default"].wrap(
                                    function _callee15$(_context15) {
                                      while (1) {
                                        switch (
                                          (_context15.prev = _context15.next)
                                        ) {
                                          case 0:
                                            e.preventDefault();

                                            if (!authSig) {
                                              _context15.next = 12;
                                              break;
                                            }

                                            data = {
                                              addresses:
                                                document.getElementById(
                                                  "wl_textarea"
                                                ).value,
                                              sig: authSig,
                                            };
                                            _context15.next = 5;
                                            return (0, _common.postData)(
                                              "".concat(apiUrl, "add"),
                                              data
                                            );

                                          case 5:
                                            response = _context15.sent;
                                            _context15.next = 8;
                                            return wlPopulate();

                                          case 8:
                                            (0, _common.showMessage)(
                                              "Success!"
                                            );
                                            addDelEv();
                                            _context15.next = 13;
                                            break;

                                          case 12:
                                            (0, _common.showMessage)(
                                              "Invalid signature, try again",
                                              "error"
                                            );

                                          case 13:
                                          case "end":
                                            return _context15.stop();
                                        }
                                      }
                                    },
                                    _callee15
                                  );
                                }
                              )
                            );

                            return function (_x8) {
                              return _ref16.apply(this, arguments);
                            };
                          })()
                        );
                      }

                      if (connectBtna) {
                        connectBtna.addEventListener(
                          "click",
                          /*#__PURE__*/ (function () {
                            var _ref17 = (0, _asyncToGenerator2["default"])(
                              /*#__PURE__*/ _regenerator["default"].mark(
                                function _callee16(e) {
                                  return _regenerator["default"].wrap(
                                    function _callee16$(_context16) {
                                      while (1) {
                                        switch (
                                          (_context16.prev = _context16.next)
                                        ) {
                                          case 0:
                                            e.preventDefault();
                                            _context16.next = 3;
                                            return connectWallet();

                                          case 3:
                                            _context16.next = 5;
                                            return signAuth();

                                          case 5:
                                            _context16.next = 7;
                                            return wlPopulate();

                                          case 7:
                                            _context16.next = 9;
                                            return addDelEv();

                                          case 9:
                                          case "end":
                                            return _context16.stop();
                                        }
                                      }
                                    },
                                    _callee16
                                  );
                                }
                              )
                            );

                            return function (_x9) {
                              return _ref17.apply(this, arguments);
                            };
                          })()
                        );
                      }

                      if (connectBtn) {
                        connectBtn.addEventListener(
                          "click",
                          /*#__PURE__*/ (function () {
                            var _ref18 = (0, _asyncToGenerator2["default"])(
                              /*#__PURE__*/ _regenerator["default"].mark(
                                function _callee17(e) {
                                  return _regenerator["default"].wrap(
                                    function _callee17$(_context17) {
                                      while (1) {
                                        switch (
                                          (_context17.prev = _context17.next)
                                        ) {
                                          case 0:
                                            e.preventDefault();
                                            _context17.next = 3;
                                            return connectWallet();

                                          case 3:
                                            _context17.next = 5;
                                            return contractInit();

                                          case 5:
                                          case "end":
                                            return _context17.stop();
                                        }
                                      }
                                    },
                                    _callee17
                                  );
                                }
                              )
                            );

                            return function (_x10) {
                              return _ref18.apply(this, arguments);
                            };
                          })()
                        );
                      }

                    case 35:
                    case "end":
                      return _context18.stop();
                  }
                }
              },
              _callee18);
            })
          );

          return function listeners(_x6) {
            return _ref14.apply(this, arguments);
          };
        })();

        function mint(_x11) {
          return _mint.apply(this, arguments);
        }

        function _mint() {
          _mint = (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/ _regenerator["default"].mark(function _callee22(num) {
              var wallet,
                signature,
                response,
                result,
                balance,
                state,
                price,
                aPrice;
              return _regenerator["default"].wrap(
                function _callee22$(_context22) {
                  while (1) {
                    switch ((_context22.prev = _context22.next)) {
                      case 0:
                        if (!instance) {
                          _context22.next = 45;
                          break;
                        }
                        console.log({ currentAccount });
                        wallet = currentAccount.toLowerCase();
                        num = web3.utils.toBN(num);
                        _context22.prev = 3;
                        console.log("dddd");
                        if (
                          !(
                            currentState == 1 &&
                            mintedbyYou.add(num).toNumber() > amountPerMint
                          )
                        ) {
                          _context22.next = 6;
                          break;
                        }

                        throw new Error("Exceed mint limit");

                      case 6:
                        signature = false;

                        if (!(currentState == 2)) {
                          _context22.next = 11;
                          break;
                        }

                        signature = "0x";
                        _context22.next = 18;
                        break;

                      case 11:
                        _context22.next = 13;
                      /* return fetch(
                          "".concat(apiUrl, "user/").concat(wallet),
                          {}
                        );*/

                      case 13:
                        //response = _context22.sent;
                        _context22.next = 16;
                      //return response.json();

                      case 16:
                        result = _context22.sent; //console.log('Got it:', JSON.stringify(result));

                      /*if (result.s !== null) {
                          signature = result.s;
                        }*/

                      case 18:
                        /*console.log({ signature });
                        if (!(signature !== false)) {
                          _context22.next = 38;
                          break;
                        }*/

                        _context22.next = 21;
                        return web3.eth.getBalance(wallet);

                      case 21:
                        balance = _context22.sent;
                        balance = web3.utils.toBN(balance);
                        _context22.next = 25;
                        console.log({ balance });
                      /*return instance.methods.state.call() .call();*/

                      case 25:
                        state = _context22.sent;

                        if (!instance.methods.hasOwnProperty("getPrice")) {
                          _context22.next = 32;
                          break;
                        }

                        _context22.next = 29;
                        console.log({ num });
                        return instance.methods.getPrice(num).call();

                      case 29:
                        _context22.t0 = _context22.sent;
                        _context22.next = 33;
                        break;

                      case 32:
                        _context22.t0 = web3.utils.toBN(0);

                      case 33:
                        price = _context22.t0;
                        aPrice = web3.utils.toBN(price); // console.log('Price', price.toString());
                        // console.log('Price is BN?', web3.utils.isBN(aPrice));

                        if (balance.cmp(aPrice) == -1) {
                          (0, _common.showMessage)(
                            "Insufficient funds",
                            "error"
                          );
                        } else {
                          console.log("sig: ", signature);
                          console.log({ num });
                          console.log({ aPrice });
                          instance.methods
                            .mint(num /*, signature*/)
                            .send({
                              from: currentAccount,
                              value: aPrice,
                            })
                            .once("transactionHash", function (hash) {
                              (0,
                              _common.showMessage)('TX sent! <a href="'.concat(getChainExplorerLink(currentChainId), "tx/").concat(hash, '" target="_blank">View on Etherscan</a>'), "success");
                            })
                            .then(function (receipt) {
                              // will be fired once the receipt is mined
                              //console.log('receipt: ', receipt);
                              var hash = receipt.transactionHash;
                              (0,
                              _common.showMessage)('TX confirmed! <a href="'.concat(getChainExplorerLink(currentChainId), "tx/").concat(hash, '" target="_blank">View on Etherscan</a>'), "success");
                            });
                        }

                        _context22.next = 39;
                        break;

                      case 38:
                        (0, _common.showMessage)(
                          "You are not whitelisted",
                          "warning"
                        );

                      case 39:
                        _context22.next = 45;
                        break;

                      case 41:
                        _context22.prev = 41;
                        _context22.t1 = _context22["catch"](3);
                        (0, _common.showMessage)(
                          _context22.t1.toString(),
                          "error"
                        );
                        console.error(_context22.t1);

                      case 45:
                      case "end":
                        return _context22.stop();
                    }
                  }
                },
                _callee22,
                null,
                [[3, 41]]
              );
            })
          );
          return _mint.apply(this, arguments);
        }

        var signAuth = /*#__PURE__*/ (function () {
          var _ref19 = (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/ _regenerator["default"].mark(function _callee19() {
              var sig;
              return _regenerator["default"].wrap(function _callee19$(
                _context19
              ) {
                while (1) {
                  switch ((_context19.prev = _context19.next)) {
                    case 0:
                      console.log("signauth");
                      _context19.next = 3;
                      return signWithWeb3(currentAccount, currentAccount);

                    case 3:
                      sig = _context19.sent;
                      console.log("Sig is:", sig);
                      document.querySelector("#sig").value = sig;
                      authSig = sig;
                      (0, _common.showMessage)(sig, "warning");
                      return _context19.abrupt("return", sig);

                    case 9:
                    case "end":
                      return _context19.stop();
                  }
                }
              },
              _callee19);
            })
          );

          return function signAuth() {
            return _ref19.apply(this, arguments);
          };
        })();

        var logout = /*#__PURE__*/ (function () {
          var _ref20 = (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/ _regenerator["default"].mark(function _callee20() {
              return _regenerator["default"].wrap(function _callee20$(
                _context20
              ) {
                while (1) {
                  switch ((_context20.prev = _context20.next)) {
                    case 0:
                      _context20.t0 = console;
                      _context20.next = 3;
                      return web3.eth.setProvider(null);

                    case 3:
                      _context20.t1 = _context20.sent;

                      _context20.t0.log.call(_context20.t0, _context20.t1);

                    case 5:
                    case "end":
                      return _context20.stop();
                  }
                }
              },
              _callee20);
            })
          );

          return function logout() {
            return _ref20.apply(this, arguments);
          };
        })();

        (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/ _regenerator["default"].mark(function _callee21() {
            var wConn, isRCID;
            return _regenerator["default"].wrap(function _callee21$(
              _context21
            ) {
              while (1) {
                switch ((_context21.prev = _context21.next)) {
                  case 0:
                    if (!ethEnabled()) {
                      _context21.next = 33;
                      break;
                    }

                    window.ethereum.on("accountsChanged", function (acc) {
                      handleAccountsChange(acc);
                    });
                    window.ethereum.on("chainChanged", function (chainID) {
                      window.location.reload();
                    });
                    window.ethereum.on("disconnect", function (ev) {
                      console.log("disconnect", ev);
                    });
                    document.addEventListener("DOMContentLoaded", listeners);
                    _context21.next = 7;
                    return isWalletConnected();

                  case 7:
                    wConn = _context21.sent;
                    _context21.next = 10;
                    return isRightChainId();

                  case 10:
                    isRCID = _context21.sent;

                    if (!(!isRCID && wConn)) {
                      _context21.next = 15;
                      break;
                    }

                    (0, _common.showMessage)(
                      "Wrong chain (".concat(
                        chains[currentChainId],
                        "), connect to "
                      ) + chains[rightChainId],
                      "error",
                      2000
                    );
                    _context21.next = 15;
                    return handleChainID();

                  case 15:
                    console.log("wConn ", wConn);

                    if (!(wConn && isRCID)) {
                      _context21.next = 33;
                      break;
                    }

                    _context21.next = 19;
                    return connectWallet();

                  case 19:
                    if (!location.pathname.includes("manage.html")) {
                      _context21.next = 30;
                      break;
                    }

                    console.log("manage");
                    _context21.next = 23;
                    return contractInit();

                  case 23:
                    _context21.next = 25;
                    return signAuth();

                  case 25:
                    _context21.next = 27;
                    return wlPopulate();

                  case 27:
                    addDelEv();
                    _context21.next = 33;
                    break;

                  case 30:
                    console.log("Usual page");
                    _context21.next = 33;
                    return contractInit();

                  case 33:
                    document.addEventListener("DOMContentLoaded", function () {
                      if (!ethEnabled()) {
                        (0, _common.showMessage)(
                          'You need to install <a href="https://metamask.io/" target="_blank">MetaMask</a> first!',
                          "error",
                          0
                        );
                      }
                    });

                  case 34:
                  case "end":
                    return _context21.stop();
                }
              }
            },
            _callee21);
          })
        )();
      },
      {
        "./abi": 6,
        "./common": 7,
        "@babel/runtime/helpers/asyncToGenerator": 1,
        "@babel/runtime/helpers/interopRequireDefault": 2,
        "@babel/runtime/regenerator": 4,
      },
    ],
  },
  {},
  [8]
);

//# sourceMappingURL=build.js.map

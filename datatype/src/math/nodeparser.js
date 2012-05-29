module.exports = (function(){
  /* Generated by PEG.js 0.6.1 (http://pegjs.majda.cz/). */
  
  var result = {
    /*
     * Parses the input with a generated parser. If the parsing is successfull,
     * returns a value explicitly or implicitly specified by the grammar from
     * which the parser was generated (see |PEG.buildParser|). If the parsing is
     * unsuccessful, throws |PEG.parser.SyntaxError| describing the error.
     */
    parse: function(input, startRule) {
      var parseFunctions = {
        "additive": parse_additive,
        "integer": parse_integer,
        "multiplicative": parse_multiplicative,
        "primary": parse_primary
      };
      
      if (startRule !== undefined) {
        if (parseFunctions[startRule] === undefined) {
          throw new Error("Invalid rule name: " + quote(startRule) + ".");
        }
      } else {
        startRule = "additive";
      }
      
      var pos = 0;
      var reportMatchFailures = true;
      var rightmostMatchFailuresPos = 0;
      var rightmostMatchFailuresExpected = [];
      var cache = {};
      
      function padLeft(input, padding, length) {
        var result = input;
        
        var padLength = length - input.length;
        for (var i = 0; i < padLength; i++) {
          result = padding + result;
        }
        
        return result;
      }
      
      function escape(ch) {
        var charCode = ch.charCodeAt(0);
        
        if (charCode <= 0xFF) {
          var escapeChar = 'x';
          var length = 2;
        } else {
          var escapeChar = 'u';
          var length = 4;
        }
        
        return '\\' + escapeChar + padLeft(charCode.toString(16).toUpperCase(), '0', length);
      }
      
      function quote(s) {
        /*
         * ECMA-262, 5th ed., 7.8.4: All characters may appear literally in a
         * string literal except for the closing quote character, backslash,
         * carriage return, line separator, paragraph separator, and line feed.
         * Any character may appear in the form of an escape sequence.
         */
        return '"' + s
          .replace(/\\/g, '\\\\')            // backslash
          .replace(/"/g, '\\"')              // closing quote character
          .replace(/\r/g, '\\r')             // carriage return
          .replace(/\n/g, '\\n')             // line feed
          .replace(/[\x80-\uFFFF]/g, escape) // non-ASCII characters 
          + '"';
      }
      
      function matchFailed(failure) {
        if (pos < rightmostMatchFailuresPos) {
          return;
        }
        
        if (pos > rightmostMatchFailuresPos) {
          rightmostMatchFailuresPos = pos;
          rightmostMatchFailuresExpected = [];
        }
        
        rightmostMatchFailuresExpected.push(failure);
      }
      
      function parse_additive() {
        var cacheKey = 'additive@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos1 = pos;
        var result9 = parse_multiplicative();
        if (result9 !== null) {
          if (input.substr(pos, 1) === "+") {
            var result10 = "+";
            pos += 1;
          } else {
            var result10 = null;
            if (reportMatchFailures) {
              matchFailed("\"+\"");
            }
          }
          if (result10 !== null) {
            var result11 = parse_additive();
            if (result11 !== null) {
              var result8 = [result9, result10, result11];
            } else {
              var result8 = null;
              pos = savedPos1;
            }
          } else {
            var result8 = null;
            pos = savedPos1;
          }
        } else {
          var result8 = null;
          pos = savedPos1;
        }
        var result7 = result8 !== null
          ? (function(left, right) { return dt.math.add([left, right]); })(result8[0], result8[2])
          : null;
        if (result7 !== null) {
          var result0 = result7;
        } else {
          var savedPos0 = pos;
          var result4 = parse_multiplicative();
          if (result4 !== null) {
            if (input.substr(pos, 1) === "-") {
              var result5 = "-";
              pos += 1;
            } else {
              var result5 = null;
              if (reportMatchFailures) {
                matchFailed("\"-\"");
              }
            }
            if (result5 !== null) {
              var result6 = parse_additive();
              if (result6 !== null) {
                var result3 = [result4, result5, result6];
              } else {
                var result3 = null;
                pos = savedPos0;
              }
            } else {
              var result3 = null;
              pos = savedPos0;
            }
          } else {
            var result3 = null;
            pos = savedPos0;
          }
          var result2 = result3 !== null
            ? (function(left, right) { return dt.math.subtract([left, right]); })(result3[0], result3[2])
            : null;
          if (result2 !== null) {
            var result0 = result2;
          } else {
            var result1 = parse_multiplicative();
            if (result1 !== null) {
              var result0 = result1;
            } else {
              var result0 = null;;
            };
          };
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_multiplicative() {
        var cacheKey = 'multiplicative@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos2 = pos;
        var result13 = parse_primary();
        if (result13 !== null) {
          if (input.substr(pos, 1) === "*") {
            var result14 = "*";
            pos += 1;
          } else {
            var result14 = null;
            if (reportMatchFailures) {
              matchFailed("\"*\"");
            }
          }
          if (result14 !== null) {
            var result15 = parse_multiplicative();
            if (result15 !== null) {
              var result12 = [result13, result14, result15];
            } else {
              var result12 = null;
              pos = savedPos2;
            }
          } else {
            var result12 = null;
            pos = savedPos2;
          }
        } else {
          var result12 = null;
          pos = savedPos2;
        }
        var result11 = result12 !== null
          ? (function(left, right) { return dt.math.multiply([left, right]); })(result12[0], result12[2])
          : null;
        if (result11 !== null) {
          var result0 = result11;
        } else {
          var savedPos1 = pos;
          var result8 = parse_primary();
          if (result8 !== null) {
            if (input.substr(pos, 1) === "/") {
              var result9 = "/";
              pos += 1;
            } else {
              var result9 = null;
              if (reportMatchFailures) {
                matchFailed("\"/\"");
              }
            }
            if (result9 !== null) {
              var result10 = parse_multiplicative();
              if (result10 !== null) {
                var result7 = [result8, result9, result10];
              } else {
                var result7 = null;
                pos = savedPos1;
              }
            } else {
              var result7 = null;
              pos = savedPos1;
            }
          } else {
            var result7 = null;
            pos = savedPos1;
          }
          var result6 = result7 !== null
            ? (function(left, right) { return dt.math.divide([left, right]); })(result7[0], result7[2])
            : null;
          if (result6 !== null) {
            var result0 = result6;
          } else {
            var savedPos0 = pos;
            if (input.substr(pos, 1) === "-") {
              var result4 = "-";
              pos += 1;
            } else {
              var result4 = null;
              if (reportMatchFailures) {
                matchFailed("\"-\"");
              }
            }
            if (result4 !== null) {
              var result5 = parse_primary();
              if (result5 !== null) {
                var result3 = [result4, result5];
              } else {
                var result3 = null;
                pos = savedPos0;
              }
            } else {
              var result3 = null;
              pos = savedPos0;
            }
            var result2 = result3 !== null
              ? (function(primary) {return -1*primary})(result3[1])
              : null;
            if (result2 !== null) {
              var result0 = result2;
            } else {
              var result1 = parse_primary();
              if (result1 !== null) {
                var result0 = result1;
              } else {
                var result0 = null;;
              };
            };
          };
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_primary() {
        var cacheKey = 'primary@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var result6 = parse_integer();
        if (result6 !== null) {
          var result0 = result6;
        } else {
          var savedPos0 = pos;
          if (input.substr(pos, 1) === "(") {
            var result3 = "(";
            pos += 1;
          } else {
            var result3 = null;
            if (reportMatchFailures) {
              matchFailed("\"(\"");
            }
          }
          if (result3 !== null) {
            var result4 = parse_additive();
            if (result4 !== null) {
              if (input.substr(pos, 1) === ")") {
                var result5 = ")";
                pos += 1;
              } else {
                var result5 = null;
                if (reportMatchFailures) {
                  matchFailed("\")\"");
                }
              }
              if (result5 !== null) {
                var result2 = [result3, result4, result5];
              } else {
                var result2 = null;
                pos = savedPos0;
              }
            } else {
              var result2 = null;
              pos = savedPos0;
            }
          } else {
            var result2 = null;
            pos = savedPos0;
          }
          var result1 = result2 !== null
            ? (function(additive) { return additive; })(result2[1])
            : null;
          if (result1 !== null) {
            var result0 = result1;
          } else {
            var result0 = null;;
          };
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_integer() {
        var cacheKey = 'integer@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        var savedReportMatchFailures = reportMatchFailures;
        reportMatchFailures = false;
        if (input.substr(pos).match(/^[0-9]/) !== null) {
          var result2 = input.charAt(pos);
          pos++;
        } else {
          var result2 = null;
          if (reportMatchFailures) {
            matchFailed("[0-9]");
          }
        }
        if (result2 !== null) {
          var result1 = [];
          while (result2 !== null) {
            result1.push(result2);
            if (input.substr(pos).match(/^[0-9]/) !== null) {
              var result2 = input.charAt(pos);
              pos++;
            } else {
              var result2 = null;
              if (reportMatchFailures) {
                matchFailed("[0-9]");
              }
            }
          }
        } else {
          var result1 = null;
        }
        var result0 = result1 !== null
          ? (function(digits) { return parseInt(digits.join(""), 10); })(result1)
          : null;
        reportMatchFailures = savedReportMatchFailures;
        if (reportMatchFailures && result0 === null) {
          matchFailed("integer");
        }
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function buildErrorMessage() {
        function buildExpected(failuresExpected) {
          failuresExpected.sort();
          
          var lastFailure = null;
          var failuresExpectedUnique = [];
          for (var i = 0; i < failuresExpected.length; i++) {
            if (failuresExpected[i] !== lastFailure) {
              failuresExpectedUnique.push(failuresExpected[i]);
              lastFailure = failuresExpected[i];
            }
          }
          
          switch (failuresExpectedUnique.length) {
            case 0:
              return 'end of input';
            case 1:
              return failuresExpectedUnique[0];
            default:
              return failuresExpectedUnique.slice(0, failuresExpectedUnique.length - 1).join(', ')
                + ' or '
                + failuresExpectedUnique[failuresExpectedUnique.length - 1];
          }
        }
        
        var expected = buildExpected(rightmostMatchFailuresExpected);
        var actualPos = Math.max(pos, rightmostMatchFailuresPos);
        var actual = actualPos < input.length
          ? quote(input.charAt(actualPos))
          : 'end of input';
        
        return 'Expected ' + expected + ' but ' + actual + ' found.';
      }
      
      function computeErrorPosition() {
        /*
         * The first idea was to use |String.split| to break the input up to the
         * error position along newlines and derive the line and column from
         * there. However IE's |split| implementation is so broken that it was
         * enough to prevent it.
         */
        
        var line = 1;
        var column = 1;
        var seenCR = false;
        
        for (var i = 0; i <  rightmostMatchFailuresPos; i++) {
          var ch = input.charAt(i);
          if (ch === '\n') {
            if (!seenCR) { line++; }
            column = 1;
            seenCR = false;
          } else if (ch === '\r' | ch === '\u2028' || ch === '\u2029') {
            line++;
            column = 1;
            seenCR = true;
          } else {
            column++;
            seenCR = false;
          }
        }
        
        return { line: line, column: column };
      }
      
      
      
      var result = parseFunctions[startRule]();
      
      /*
       * The parser is now in one of the following three states:
       *
       * 1. The parser successfully parsed the whole input.
       *
       *    - |result !== null|
       *    - |pos === input.length|
       *    - |rightmostMatchFailuresExpected| may or may not contain something
       *
       * 2. The parser successfully parsed only a part of the input.
       *
       *    - |result !== null|
       *    - |pos < input.length|
       *    - |rightmostMatchFailuresExpected| may or may not contain something
       *
       * 3. The parser did not successfully parse any part of the input.
       *
       *   - |result === null|
       *   - |pos === 0|
       *   - |rightmostMatchFailuresExpected| contains at least one failure
       *
       * All code following this comment (including called functions) must
       * handle these states.
       */
      if (result === null || pos !== input.length) {
        var errorPosition = computeErrorPosition();
        throw new this.SyntaxError(
          buildErrorMessage(),
          errorPosition.line,
          errorPosition.column
        );
      }
      
      return result;
    },
    
    /* Returns the parser source code. */
    toSource: function() { return this._source; }
  };
  
  /* Thrown when a parser encounters a syntax error. */
  
  result.SyntaxError = function(message, line, column) {
    this.name = 'SyntaxError';
    this.message = message;
    this.line = line;
    this.column = column;
  };
  
  result.SyntaxError.prototype = Error.prototype;
  
  return result;
})();

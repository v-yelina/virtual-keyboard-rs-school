(() => {
  "use strict";
  var e = {
      192: (e, t, r) => {
        r.d(t, { Z: () => s });
        var n = r(81),
          a = r.n(n),
          i = r(645),
          c = r.n(i)()(a());
        c.push([
          e.id,
          "*{box-sizing:border-box}body{height:95vh;background-color:#c6c5b9}.main{position:fixed;bottom:20px;left:3%;width:94%;margin:0 auto}.textarea{resize:none;margin-bottom:25px;min-width:100%;max-width:100%;height:6em;border-radius:10px;padding:10px;font-size:1.5rem}.keyboard{padding:30px;display:grid;grid-template-columns:repeat(14, 1fr);grid-template-rows:repeat(5, 1fr);gap:10px;max-width:100%;background-color:#7b7a65;border:1px solid #000;border-radius:10px}.key{position:relative;padding:10px;border:2px solid #000;border-radius:10px;text-align:center;background-color:#546a7b;font-size:1.5rem;color:#eee}.key:active{background-color:rgba(27,141,229,.7215686275);animation-name:animate-key-press;animation-duration:200ms}.key:hover{cursor:pointer;box-shadow:rgba(0,0,0,.15) 1.95px 1.95px 2.6px}.key .shift{display:none}.animated-key{background-color:rgba(27,141,229,.7215686275);animation-name:animate-key-press;animation-duration:200ms}@keyframes animate-key-press{0%{top:0px}25%{top:1px}50%{top:2px}100%{top:0px}}.number .shift{display:block;position:absolute;font-size:1rem;top:5px;left:10px}.character{background-color:#62929e}.spacebar{grid-column:4/9}.enter{grid-column:14/15;grid-row:2/4}.right-shift{grid-column:13/15;grid-row:4/5}.active{background-color:rgba(27,141,229,.7215686275)}.footer{padding:10px;text-align:center;font-size:1.5rem;z-index:-1}",
          "",
        ]);
        const s = c;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var r = "",
                  n = void 0 !== t[5];
                return (
                  t[4] && (r += "@supports (".concat(t[4], ") {")),
                  t[2] && (r += "@media ".concat(t[2], " {")),
                  n &&
                    (r += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (r += e(t)),
                  n && (r += "}"),
                  t[2] && (r += "}"),
                  t[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (t.i = function (e, r, n, a, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var c = {};
              if (n)
                for (var s = 0; s < this.length; s++) {
                  var o = this[s][0];
                  null != o && (c[o] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l]);
                (n && c[u[0]]) ||
                  (void 0 !== i &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = i)),
                  r &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = r))
                      : (u[2] = r)),
                  a &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = a))
                      : (u[4] = "".concat(a))),
                  t.push(u));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var t = [];
        function r(e) {
          for (var r = -1, n = 0; n < t.length; n++)
            if (t[n].identifier === e) {
              r = n;
              break;
            }
          return r;
        }
        function n(e, n) {
          for (var i = {}, c = [], s = 0; s < e.length; s++) {
            var o = e[s],
              l = n.base ? o[0] + n.base : o[0],
              u = i[l] || 0,
              h = "".concat(l, " ").concat(u);
            i[l] = u + 1;
            var f = r(h),
              d = {
                css: o[1],
                media: o[2],
                sourceMap: o[3],
                supports: o[4],
                layer: o[5],
              };
            if (-1 !== f) t[f].references++, t[f].updater(d);
            else {
              var S = a(d, n);
              (n.byIndex = s),
                t.splice(s, 0, { identifier: h, updater: S, references: 1 });
            }
            c.push(h);
          }
          return c;
        }
        function a(e, t) {
          var r = t.domAPI(t);
          return (
            r.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                r.update((e = t));
              } else r.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var i = n((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var c = 0; c < i.length; c++) {
              var s = r(i[c]);
              t[s].references--;
            }
            for (var o = n(e, a), l = 0; l < i.length; l++) {
              var u = r(i[l]);
              0 === t[u].references && (t[u].updater(), t.splice(u, 1));
            }
            i = o;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, r) {
          var n = (function (e) {
            if (void 0 === t[e]) {
              var r = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (e) {
                  r = null;
                }
              t[e] = r;
            }
            return t[e];
          })(e);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          n.appendChild(r);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, r) => {
        e.exports = function (e) {
          var t = r.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (r) {
              !(function (e, t, r) {
                var n = "";
                r.supports && (n += "@supports (".concat(r.supports, ") {")),
                  r.media && (n += "@media ".concat(r.media, " {"));
                var a = void 0 !== r.layer;
                a &&
                  (n += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {"
                  )),
                  (n += r.css),
                  a && (n += "}"),
                  r.media && (n += "}"),
                  r.supports && (n += "}");
                var i = r.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (n +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  t.styleTagTransform(n, e, t.options);
              })(t, e, r);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function r(n) {
    var a = t[n];
    if (void 0 !== a) return a.exports;
    var i = (t[n] = { id: n, exports: {} });
    return e[n](i, i.exports, r), i.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = r(379),
        t = r.n(e),
        n = r(795),
        a = r.n(n),
        i = r(569),
        c = r.n(i),
        s = r(565),
        o = r.n(s),
        l = r(216),
        u = r.n(l),
        h = r(589),
        f = r.n(h),
        d = r(192),
        S = {};
      (S.styleTagTransform = f()),
        (S.setAttributes = o()),
        (S.insert = c().bind(null, "head")),
        (S.domAPI = a()),
        (S.insertStyleElement = u()),
        t()(d.Z, S),
        d.Z && d.Z.locals && d.Z.locals;
      const y = [
          {
            classList: "key character backquote ",
            ru: "ё",
            ruShift: "Ё",
            en: "`",
            enShift: "~",
          },
          {
            classList: "key character number digit1",
            ru: "1",
            ruShift: "!",
            en: "1",
            enShift: "!",
          },
          {
            classList: "key character number digit2",
            ru: "2",
            ruShift: '"',
            en: "2",
            enShift: "@",
          },
          {
            classList: "key character number digit3",
            ru: "3",
            ruShift: "№",
            en: "3",
            enShift: "#",
          },
          {
            classList: "key character number digit4",
            ru: "4",
            ruShift: ";",
            en: "4",
            enShift: "$",
          },
          {
            classList: "key character number digit5",
            ru: "5",
            ruShift: "%",
            en: "5",
            enShift: "%",
          },
          {
            classList: "key character number digit6",
            ru: "6",
            ruShift: ":",
            en: "6",
            enShift: "^",
          },
          {
            classList: "key character number digit7",
            ru: "7",
            ruShift: "?",
            en: "7",
            enShift: "&",
          },
          {
            classList: "key character number digit8",
            ru: "8",
            ruShift: "*",
            en: "8",
            enShift: "*",
          },
          {
            classList: "key character number digit9",
            ru: "9",
            ruShift: "(",
            en: "9",
            enShift: "(",
          },
          {
            classList: "key character number digit0",
            ru: "0",
            ruShift: ")",
            en: "0",
            enShift: ")",
          },
          {
            classList: "key character minus numpadsubtract",
            ru: "-",
            ruShift: "_",
            en: "-",
            enShift: "_",
          },
          {
            classList: "key character equal",
            ru: "=",
            ruShift: "+",
            en: "=",
            enShift: "+",
          },
          {
            classList: "key backspace",
            ru: "&#8701;",
            ruShift: "&#8701;",
            en: "&#8701;",
            enShift: "&#8701;",
          },
          {
            classList: "key tab",
            ru: "&#8633;",
            ruShift: "&#8633;",
            en: "&#8633;",
            enShift: "&#8633;",
          },
          {
            classList: "key character keyq",
            ru: "й",
            ruShift: "Й",
            en: "q",
            enShift: "Q",
          },
          {
            classList: "key character keyw",
            ru: "ц",
            ruShift: "Ц",
            en: "w",
            enShift: "W",
          },
          {
            classList: "key character  keye",
            ru: "у",
            ruShift: "У",
            en: "e",
            enShift: "E",
          },
          {
            classList: "key character  keyr",
            ru: "к",
            ruShift: "К",
            en: "r",
            enShift: "R",
          },
          {
            classList: "key character  keyt",
            ru: "е",
            ruShift: "Е",
            en: "t",
            enShift: "T",
          },
          {
            classList: "key character  keyy",
            ru: "н",
            ruShift: "Н",
            en: "y",
            enShift: "Y",
          },
          {
            classList: "key character keyu",
            ru: "г",
            ruShift: "Г",
            en: "u",
            enShift: "U",
          },
          {
            classList: "key character  keyi",
            ru: "ш",
            ruShift: "Ш",
            en: "i",
            enShift: "I",
          },
          {
            classList: "key character keyo",
            ru: "щ",
            ruShift: "Щ",
            en: "o",
            enShift: "O",
          },
          {
            classList: "key character keyp",
            ru: "з",
            ruShift: "З",
            en: "p",
            enShift: "P",
          },
          {
            classList: "key character open-bracket bracketleft",
            ru: "х",
            ruShift: "Х",
            en: "[",
            enShift: "{",
          },
          {
            classList: "key character close-bracket bracketright",
            ru: "ъ",
            ruShift: "Ъ",
            en: "]",
            enShift: "}",
          },
          {
            classList: "key enter",
            ru: "&#8629;",
            ruShift: "&#8629;",
            en: "&#8629;",
            enShift: "&#8629;",
          },
          {
            classList: "key caps capslock",
            ru: "&#8659;",
            ruShift: "&#8659;",
            en: "&#8659;",
            enShift: "&#8659;",
          },
          {
            classList: "key character keya",
            ru: "ф",
            ruShift: "Ф",
            en: "a",
            enShift: "A",
          },
          {
            classList: "key character keys",
            ru: "ы",
            ruShift: "Ы",
            en: "s",
            enShift: "S",
          },
          {
            classList: "key character keyd",
            ru: "в",
            ruShift: "В",
            en: "d",
            enShift: "D",
          },
          {
            classList: "key character keyf",
            ru: "а",
            ruShift: "А",
            en: "f",
            enShift: "F",
          },
          {
            classList: "key character keyg",
            ru: "п",
            ruShift: "П",
            en: "g",
            enShift: "G",
          },
          {
            classList: "key character keyh",
            ru: "р",
            ruShift: "Р",
            en: "h",
            enShift: "H",
          },
          {
            classList: "key character keyj",
            ru: "о",
            ruShift: "О",
            en: "j",
            enShift: "J",
          },
          {
            classList: "key character keyk",
            ru: "л",
            ruShift: "Л",
            en: "k",
            enShift: "K",
          },
          {
            classList: "key character keyl",
            ru: "д",
            ruShift: "Д",
            en: "l",
            enShift: "L",
          },
          {
            classList: "key character semicolon",
            ru: "ж",
            ruShift: "Ж",
            en: ";",
            enShift: ":",
          },
          {
            classList: "key character apostrophe quote",
            ru: "э",
            ruShift: "Э",
            en: "'",
            enShift: '"',
          },
          {
            classList: "key character backslash",
            ru: "\\",
            ruShift: "//",
            en: "\\",
            enShift: "|",
          },
          {
            classList: "key shift left-shift shiftleft",
            ru: "&#8657;",
            ruShift: "&#8657;",
            en: "&#8657;",
            enShift: "&#8657;",
          },
          {
            classList: "key character keyz",
            ru: "я",
            ruShift: "Я",
            en: "z",
            enShift: "Z",
          },
          {
            classList: "key character keyx",
            ru: "ч",
            ruShift: "Ч",
            en: "x",
            enShift: "X",
          },
          {
            classList: "key character keyc",
            ru: "с",
            ruShift: "С",
            en: "c",
            enShift: "C",
          },
          {
            classList: "key character keyv",
            ru: "м",
            ruShift: "М",
            en: "v",
            enShift: "V",
          },
          {
            classList: "key character keyb",
            ru: "и",
            ruShift: "И",
            en: "b",
            enShift: "B",
          },
          {
            classList: "key character keyn",
            ru: "т",
            ruShift: "Т",
            en: "n",
            enShift: "N",
          },
          {
            classList: "key character keym",
            ru: "ь",
            ruShift: "Ь",
            en: "m",
            enShift: "M",
          },
          {
            classList: "key character comma numpaddecimal",
            ru: "б",
            ruShift: "Б",
            en: ",",
            enShift: "<",
          },
          {
            classList: "key character dot period",
            ru: "ю",
            ruShift: "Ю",
            en: ".",
            enShift: ">",
          },
          {
            classList: "key character forward-slash slash",
            ru: ".",
            ruShift: ",",
            en: "/",
            enShift: "?",
          },
          {
            classList: "key arrow-up arrowup character",
            ru: "&#9651;",
            ruShift: "&#9651;",
            en: "&#9651;",
            enShift: "&#9651;",
          },
          {
            classList: "key shift right-shift shiftright",
            ru: "&#8657;",
            ruShift: "&#8657;",
            en: "&#8657;",
            enShift: "&#8657;",
          },
          {
            classList: "key ctrl right-ctrl controlleft",
            ru: "ctrl",
            ruShift: "ctrl",
            en: "ctrl",
            enShift: "ctrl",
          },
          {
            classList: "key lang-change",
            ru: "en",
            ruShift: "en",
            en: "ru",
            enShift: "ru",
          },
          {
            classList: "key alt left-alt altleft",
            ru: "alt",
            ruShift: "alt",
            en: "alt",
            enShift: "alt",
          },
          {
            classList: "key character spacebar space",
            ru: " ",
            ruShift: " ",
            en: " ",
            enShift: " ",
          },
          {
            classList: "key alt right-alt altright",
            ru: "alt",
            ruShift: "alt",
            en: "alt",
            enShift: "alt",
          },
          {
            classList: "key ctrl right-ctrl controlright",
            ru: "ctrl",
            ruShift: "ctrl",
            en: "ctrl",
            enShift: "ctrl",
          },
          {
            classList: "key arrow arrow-left arrowleft character",
            ru: "&#9665;",
            ruShift: "&#9665;",
            en: "&#9665;",
            enShift: "&#9665;",
          },
          {
            classList: "key arrow arrow-bottom arrowdown character",
            ru: "&#9661;",
            ruShift: "&#9661;",
            en: "&#9661;",
            enShift: "&#9661;",
          },
          {
            classList: "key arrow arrow-right arrowright character",
            ru: "&#9655;",
            ruShift: "&#9655;",
            en: "&#9655;",
            enShift: "&#9655;",
          },
          {
            classList: "key del numpaddecimal",
            ru: "del",
            ruShift: "del",
            en: "del",
            enShift: "del",
          },
        ],
        p = () => {
          "en" === localStorage.getItem("lang")
            ? localStorage.setItem("lang", "ru")
            : localStorage.setItem("lang", "en"),
            document.querySelector(".main").remove(),
            b();
        };
      let k = !1,
        m = !1;
      const g = (e) => {
          const t = e;
          e.selectionStart !== e.selectionEnd
            ? (t.textContent =
                e.textContent.slice(0, e.selectionStart) +
                e.textContent.slice(e.selectionEnd))
            : e.selectionStart
            ? (t.textContent =
                e.textContent.slice(0, e.selectionStart - 1) +
                e.textContent.slice(e.selectionStart))
            : (t.textContent = e.textContent.slice(
                0,
                e.textContent.length - 1
              ));
          const r = e.value.length;
          e.setSelectionRange(r, r), e.focus();
        },
        L = (e) => {
          const t = e;
          e.selectionStart
            ? (t.textContent = `${e.textContent.slice(
                0,
                e.selectionStart
              )}\n${e.textContent.slice(e.selectionStart)}`)
            : (t.textContent += "\n");
        },
        x = (e) => {
          const t = e;
          e.selectionStart !== e.selectionEnd
            ? (t.textContent =
                e.textContent.slice(0, e.selectionStart) +
                e.textContent.slice(e.selectionEnd))
            : e.selectionStart &&
              (t.textContent =
                e.textContent.slice(0, e.selectionStart) +
                e.textContent.slice(e.selectionStart + 1));
          const r = e.value.length;
          e.setSelectionRange(r, r), e.focus();
        },
        v = (e) => {
          const t = e;
          e.selectionStart !== e.selectionEnd
            ? (t.textContent = `${e.textContent.slice(
                0,
                e.selectionStart
              )}  ${e.textContent.slice(e.selectionEnd)}`)
            : e.selectionStart
            ? (t.textContent = `${e.textContent.slice(
                0,
                e.selectionStart
              )}  ${e.textContent.slice(e.selectionStart + 1)}`)
            : (t.textContent += "   ");
          const r = e.value.length;
          e.setSelectionRange(r, r), e.focus();
        },
        b = (e = !1) => {
          let t, r, n;
          localStorage.getItem("lang")
            ? (t = localStorage.getItem("lang"))
            : ((t = "en"), localStorage.setItem("lang", "en"));
          const a = document.createElement("main");
          a.classList.add("main");
          const i = document.createElement("textarea");
          i.classList.add("textarea"), (i.cols = "100");
          const c = document.createElement("div");
          c.classList.add("keyboard");
          let s = "";
          for (let a = 0; a < y.length; a += 1)
            "en" === t
              ? ((r = y[a].en), (n = y[a].enShift))
              : ((r = y[a].ru), (n = y[a].ruShift)),
              (s += `<div class='${y[a].classList}'>${
                e ? n : r
              }<div class='shift'>${n}</div></div>`);
          (c.innerHTML = s),
            a.appendChild(i),
            a.appendChild(c),
            document.body.appendChild(a);
          const o = i.value.length;
          i.setSelectionRange(o, o),
            i.focus(),
            (() => {
              let e = !1,
                t = !1;
              const r = document.querySelectorAll(".character"),
                n = document.querySelector(".textarea"),
                a = document.querySelector(".backspace"),
                i = document.querySelector(".enter"),
                c = document.querySelector(".del"),
                s = document.querySelector(".tab"),
                o = document.querySelector(".caps"),
                l = document.querySelectorAll(".shift");
              for (let a = 0; a < r.length; a += 1)
                r[a].addEventListener("click", () => {
                  let i;
                  const c = r[a].querySelector(".shift").textContent;
                  e
                    ? (i = r[a].textContent[0].toUpperCase())
                    : ([i] = r[a].textContent),
                    (n.textContent += t ? c : i);
                  const s = n.value.length;
                  n.setSelectionRange(s, s), n.focus();
                });
              a.addEventListener("click", () => {
                g(n);
              }),
                i.addEventListener("click", () => {
                  L(n);
                }),
                c.addEventListener("click", () => {
                  x(n);
                }),
                s.addEventListener("click", () => {
                  v(n);
                }),
                o.addEventListener("click", () => {
                  e = !e;
                }),
                l.forEach((e) =>
                  e.addEventListener("click", () => {
                    t = !t;
                  })
                ),
                document
                  .querySelector(".lang-change")
                  .addEventListener("click", p);
            })();
        };
      b(),
        (() => {
          const e = document.createElement("footer");
          e.classList.add("footer");
          const t = document.createElement("p");
          t.classList.add("system-info"),
            (t.textContent = "Created for Windows");
          const r = document.createElement("p");
          r.classList.add("change-language-info"),
            (r.textContent =
              "For switching keyboard layout press CTRL+ALT on physical keyboard or key 'ru'/'en' on virtual keyboard"),
            e.appendChild(t),
            e.appendChild(r),
            document.body.appendChild(e);
        })(),
        (() => {
          let e = !1,
            t = !1;
          window.addEventListener(
            "keydown",
            function (r) {
              this.document
                .querySelectorAll(`.${r.code.toLowerCase()}`)
                .forEach((n) => {
                  n.classList.add("active"),
                    n.classList.add("animated-key"),
                    n.classList.contains("caps") && (e = !e),
                    n.classList.contains("shift") && (t = !t);
                  const a = this.document.querySelector(".textarea");
                  if (
                    (n.classList.contains("tab") && (r.preventDefault(), v(a)),
                    n.classList.contains("backspace") &&
                      (r.preventDefault(), g(a)),
                    n.classList.contains("enter") && (r.preventDefault(), L(a)),
                    n.classList.contains("del") && (r.preventDefault(), x(a)),
                    n.classList.contains("character"))
                  ) {
                    let i;
                    r.preventDefault();
                    const c = n.querySelector(".shift").textContent;
                    e
                      ? (i = n.textContent[0].toUpperCase())
                      : ([i] = n.textContent),
                      (a.textContent += t ? c : i);
                    const s = a.value.length;
                    a.setSelectionRange(s, s), a.focus();
                  }
                }),
                "ControlLeft" === r.code || "ControlRight" === r.code
                  ? ((k = !0), k && m && p())
                  : ("AltLeft" !== r.code && "AltRight" !== r.code) ||
                    ((m = !0), k && m && p());
            },
            !0
          ),
            window.addEventListener(
              "keyup",
              function (e) {
                this.document
                  .querySelectorAll(`.${e.code.toLowerCase()}`)
                  .forEach((e) => {
                    e.classList.remove("active"),
                      e.classList.remove("animated-key");
                  }),
                  "ControlLeft" === e.code || "ControlRight" === e.code
                    ? (k = !1)
                    : ("AltLeft" !== e.code && "AltRight" !== e.code) ||
                      (m = !1);
              },
              !0
            );
        })();
    })();
})();

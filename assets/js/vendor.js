! function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";

    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }

    function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function D(a, b, c) {
        return r.isFunction(b) ? r.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? r.grep(a, function(a) {
            return a === b !== c
        }) : "string" != typeof b ? r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c
        }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType
        }))
    }

    function J(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function L(a) {
        var b = {};
        return r.each(a.match(K) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function M(a) {
        return a
    }

    function N(a) {
        throw a
    }

    function O(a, b, c) {
        var d;
        try {
            a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a)
        } catch (a) {
            c.call(void 0, a)
        }
    }

    function R() {
        d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready()
    }

    function U() {
        this.expando = r.expando + U.uid++
    }

    function Z(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a)
    }

    function $(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = Z(c)
                } catch (e) {}
                W.set(a, b, c)
            } else c = void 0;
        return c
    }

    function ea(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return r.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    function ga(a) {
        var b, c = a.ownerDocument,
            d = a.nodeName,
            e = fa[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), fa[d] = e, e)
    }

    function ha(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; g > f; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
        for (f = 0; g > f; f++) null != e[f] && (a[f].style.display = e[f]);
        return a
    }

    function ma(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c
    }

    function na(a, b) {
        for (var c = 0, d = a.length; d > c; c++) V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"))
    }

    function pa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; o > n; n++)
            if (f = a[n], f || 0 === f)
                if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                else if (oa.test(f)) {
            for (g = g || l.appendChild(b.createElement("div")), h = (ja.exec(f) || ["", ""])[1].toLowerCase(), i = la[h] || la._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0]; k--;) g = g.lastChild;
            r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        for (l.textContent = "", n = 0; f = m[n++];)
            if (d && r.inArray(f, d) > -1) e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f), g = ma(l.appendChild(f), "script"), j && na(g), c)
            for (k = 0; f = g[k++];) ka.test(f.type || "") && c.push(f);
        return l
    }

    function ua() {
        return !0
    }

    function va() {
        return !1
    }

    function wa() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function xa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) xa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = va;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return r().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() {
            r.event.add(this, b, e, d, c)
        })
    }

    function Da(a, b) {
        return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
    }

    function Ea(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function Fa(a) {
        var b = Ba.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ga(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) r.event.add(b, e, j[e][c])
            }
            W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i))
        }
    }

    function Ha(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function Ia(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d)
        });
        if (m && (e = pa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(ma(e, "script"), Ea), i = h.length; m > l; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, ma(j, "script"))), c.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; i > l; l++) j = h[l], ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k))
        }
        return a
    }

    function Ja(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(ma(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    function Na(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ma(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function Oa(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function Ua(a) {
        if (a in Ta) return a;
        for (var b = a[0].toUpperCase() + a.slice(1), c = Sa.length; c--;)
            if (a = Sa[c] + b, a in Ta) return a
    }

    function Va(a, b, c) {
        var d = aa.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Wa(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; 4 > f; f += 2) "margin" === c && (g += r.css(a, c + ba[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e)));
        return g
    }

    function Xa(a, b, c) {
        var d, e = !0,
            f = Ma(a),
            g = "border-box" === r.css(a, "boxSizing", !1, f);
        if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), 0 >= d || null == d) {
            if (d = Na(a, b, f), (0 > d || null == d) && (d = a.style[b]), La.test(d)) return d;
            e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px"
    }

    function Ya(a, b, c, d, e) {
        return new Ya.prototype.init(a, b, c, d, e)
    }

    function bb() {
        $a && (a.requestAnimationFrame(bb), r.fx.tick())
    }

    function cb() {
        return a.setTimeout(function() {
            Za = void 0
        }), Za = r.now()
    }

    function db(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = ba[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function eb(a, b, c) {
        for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function fb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && ca(a),
            q = V.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
            g.unqueued || h()
        }), g.unqueued++, m.always(function() {
            m.always(function() {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b)
            if (e = b[d], _a.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                n[d] = q && q[d] || r.style(a, d)
            }
        if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() {
                o.display = j
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            })), i = !1;
            for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && ha([a], !0), m.done(function() {
                p || ha([a]), V.remove(a, "fxshow");
                for (d in n) r.style(a, d, n[d])
            })), i = eb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
        }
    }

    function gb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function hb(a, b, c) {
        var d, e, f = 0,
            g = hb.prefilters.length,
            h = r.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: r.extend({}, b),
                opts: r.extend(!0, {
                    specialEasing: {},
                    easing: r.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Za || cb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (gb(k, j.opts.specialEasing); g > f; f++)
            if (d = hb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, eb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function mb(a) {
        var b = a.match(K) || [];
        return b.join(" ")
    }

    function nb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    function xb(a, b, c, d) {
        var e;
        if (r.isArray(b)) r.each(b, function(b, e) {
            c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== r.type(b)) d(a, b);
        else
            for (e in b) xb(a + "[" + e + "]", b[e], c, d)
    }

    function Jb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(K) || [];
            if (r.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Kb(a, b, c, d) {
        function g(h) {
            var i;
            return e[h] = !0, r.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        var e = {},
            f = a === Gb;
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Lb(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d), a
    }

    function Mb(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Nb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function Sb(a) {
        return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {},
        q = "3.1.1",
        r = function(a, b) {
            return new r.fn.init(a, b)
        },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function(a, b) {
            return b.toUpperCase()
        };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function() {
            return f.call(this)
        },
        get: function(a) {
            return null == a ? f.call(this) : 0 > a ? this[a + this.length] : this[a]
        },
        pushStack: function(a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this, b
        },
        each: function(a) {
            return r.each(this, a)
        },
        map: function(a) {
            return this.pushStack(r.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(f.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, r.extend = r.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === r.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        },
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== k.call(a) || (b = e(a)) && (c = l.call(b, "constructor") && b.constructor, "function" != typeof c || m.call(c) !== n))
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            p(a)
        },
        camelCase: function(a) {
            return a.replace(t, "ms-").replace(u, v)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (w(a))
                for (c = a.length; c > d && b.call(a[d], d, a[d]) !== !1; d++);
            else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(s, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : i.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, f = 0,
                h = [];
            if (w(a))
                for (d = a.length; d > f; f++) e = b(a[f], f, c), null != e && h.push(e);
            else
                for (f in a) e = b(a[f], f, c), null != e && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a) ? (d = f.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(f.call(arguments)))
            }, e.guid = a.guid = a.guid || r.guid++, e) : void 0
        },
        now: Date.now,
        support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        j["[object " + b + "]"] = b.toLowerCase()
    });
    var x = function(a) {
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
                    }
                if (!(!c.qsa || A[a + " "] || q && q.test(a))) {
                    if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length; h--;) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }

        function ha() {
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            var a = [];
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            for (var c = a.split("|"), e = c.length; e--;) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return function(b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a
            }
        }

        function pa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function ra() {}

        function sa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first ? function(b, c, e) {
                for (; b = b[d];)
                    if (1 === b.nodeType || g) return a(b, c, e);
                return !1
            } : function(b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || g)
                            if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else {
                                if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                                if (k[f] = m, m[2] = a(b, c, i)) return !0
                            } return !1
            }
        }

        function ua(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function va(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c
        }

        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d)
                    for (j = wa(r, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--;)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        for (k = r.length; k--;)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
                    return a === b
                }, h, !0), l = ta(function(a) {
                    return I(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e && !d.relative[a[e].type]; e++);
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, e > i && ya(a.slice(i, e)), f > e && ya(a = a.slice(e)), f > e && sa(a))
                    }
                    m.push(c)
                }
            return ua(m)
        }

        function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            for (o = 0, g || l.ownerDocument === n || (m(l), h = !p); q = a[o++];)
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        for (o = 0; q = b[o++];) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                for (; s--;) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u)
                        }
                        G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ia(f) : f
        }
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function(a, b) {
                return b ? "\x00" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            },
            da = function() {
                m()
            },
            ea = ta(function(a) {
                return a.disabled === !0 && ("form" in a || "label" in a)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
        } catch (fa) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }) : (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        for (e = b.getElementsByName(a), d = 0; f = e[d++];)
                            if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                    }
                    return []
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                for (c = a; c = c.parentNode;) g.unshift(c);
                for (c = b; c = c.parentNode;) h.unshift(c);
                for (; g[d] === h[d];) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !p || A[b + " "] || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.escape = function(a) {
            return (a + "").replace(ba, ca)
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                for (; b = a[f++];) b === a[f] && (e = d.push(f));
                for (; e--;) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                for (; b = a[d++];) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(_, aa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (m = b; m = m[p];)
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                for (;
                                    (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m !== b)););
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        for (var d, f = e(a, b), g = f.length; g--;) d = I(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o;

                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return X.test(a.nodeName)
                },
                input: function(a) {
                    return W.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: pa(function() {
                    return [0]
                }),
                last: pa(function(a, b) {
                    return [b - 1]
                }),
                eq: pa(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: pa(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: pa(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: pa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: pa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ma(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = na(b);
        return ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = d.preFilter; h;) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        }, h = ga.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                for (b || (b = g(a)), c = b.length; c--;) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function(a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a,
                n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length)
                }
                for (f = V.needsContext.test(a) ? 0 : i.length; f-- && (j = i[f], !d.relative[k = j.type]);)
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
                        break
                    }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(J, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && r(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        z = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        A = r.expr.match.needsContext,
        B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        C = /^.[^:#\[\.,]*$/;
    r.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, r.fn.extend({
        find: function(a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function() {
                for (b = 0; d > b; b++)
                    if (r.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; d > b; b++) r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        },
        filter: function(a) {
            return this.pushStack(D(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(D(this, a || [], !0))
        },
        is: function(a) {
            return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
        }
    });
    var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        G = r.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || E, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b))
                        for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
            }
            return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
        };
    G.prototype = r.fn, E = r(d);
    var H = /^(?:parents|prev(?:Until|All))/,
        I = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    r.fn.extend({
        has: function(a) {
            var b = r(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (r.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), r.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return y(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return y(a, "parentNode", c)
        },
        next: function(a) {
            return J(a, "nextSibling")
        },
        prev: function(a) {
            return J(a, "previousSibling")
        },
        nextAll: function(a) {
            return y(a, "nextSibling")
        },
        prevAll: function(a) {
            return y(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return y(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return y(a, "previousSibling", c)
        },
        siblings: function(a) {
            return z((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return z(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || r.merge([], a.childNodes)
        }
    }, function(a, b) {
        r.fn[a] = function(c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var K = /[^\x20\t\r\n\f]+/g;
    r.Callbacks = function(a) {
        a = "string" == typeof a ? L(a) : r.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1)
                    for (c = g.shift(); ++h < f.length;) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        r.each(b, function(b, c) {
                            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return r.each(arguments, function(a, b) {
                        for (var c;
                            (c = r.inArray(b, f, c)) > -1;) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? r.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || b || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, r.extend({
        Deferred: function(b) {
            var c = [
                    ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                    ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        return f.done(arguments).fail(arguments), this
                    },
                    "catch": function(a) {
                        return e.then(null, a)
                    },
                    pipe: function() {
                        var a = arguments;
                        return r.Deferred(function(b) {
                            r.each(c, function(c, d) {
                                var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function() {
                                    var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function(b, d, e) {
                        function g(b, c, d, e) {
                            return function() {
                                var h = this,
                                    i = arguments,
                                    j = function() {
                                        var a, j;
                                        if (!(f > b)) {
                                            if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                        }
                                    },
                                    k = e ? j : function() {
                                        try {
                                            j()
                                        } catch (a) {
                                            r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i))
                                        }
                                    };
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                            }
                        }
                        var f = 0;
                        return r.Deferred(function(a) {
                            c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N))
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? r.extend(a, e) : e
                    }
                },
                f = {};
            return r.each(c, function(a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function() {
                    d = h
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function(a) {
                    return function(c) {
                        d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e)
                    }
                };
            if (1 >= b && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            for (; c--;) O(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) {
        a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }, r.readyException = function(b) {
        a.setTimeout(function() {
            throw b
        })
    };
    var Q = r.Deferred();
    r.fn.ready = function(a) {
        return Q.then(a)["catch"](function(a) {
            r.readyException(a)
        }), this
    }, r.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? r.readyWait++ : r.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]))
        }
    }), r.ready.then = Q.then, "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));
    var S = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === r.type(c)) {
                e = !0;
                for (h in c) S(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(r(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        T = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };
    U.uid = 1, U.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c;
            else
                for (d in b) e[r.camelCase(d)] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;
                    for (; c--;) delete d[b[c]]
                }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b)
        }
    };
    var V = new U,
        W = new U,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;
    r.extend({
        hasData: function(a) {
            return W.hasData(a) || V.hasData(a)
        },
        data: function(a, b, c) {
            return W.access(a, b, c)
        },
        removeData: function(a, b) {
            W.remove(a, b)
        },
        _data: function(a, b, c) {
            return V.access(a, b, c)
        },
        _removeData: function(a, b) {
            V.remove(a, b)
        }
    }), r.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), $(f, d, e[d])));
                    V.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                W.set(this, a)
            }) : S(this, function(b) {
                var c;
                if (f && void 0 === b) {
                    if (c = W.get(f, a), void 0 !== c) return c;
                    if (c = $(f, a), void 0 !== c) return c
                } else this.each(function() {
                    W.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                W.remove(this, a)
            })
        }
    }), r.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function() {
                    r.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return V.get(a, c) || V.access(a, c, {
                empty: r.Callbacks("once memory").add(function() {
                    V.remove(a, [b + "queue", c])
                })
            })
        }
    }), r.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                r.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
        ba = ["Top", "Right", "Bottom", "Left"],
        ca = function(a, b) {
            return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
        },
        da = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        fa = {};
    r.fn.extend({
        show: function() {
            return ha(this, !0)
        },
        hide: function() {
            return ha(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                ca(this) ? r(this).show() : r(this).hide()
            })
        }
    });
    var ia = /^(?:checkbox|radio)$/i,
        ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ka = /^$|\/(?:java|ecma)script/i,
        la = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    la.optgroup = la.option, la.tbody = la.tfoot = la.colgroup = la.caption = la.thead, la.th = la.td;
    var oa = /<|&#?\w+;/;
    ! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var qa = d.documentElement,
        ra = /^key/,
        sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ta = /^([^.]*)(?:\.(.+)|)/;
    r.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(qa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                        return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(K) || [""], j = b.length; j--;) h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && r.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(K) || [""], j = b.length; j--;)
                    if (h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && V.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var c, d, e, f, g, h, b = r.event.fix(a),
                i = new Array(arguments.length),
                j = (V.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                for (h = r.event.handlers.call(this, b, j), c = 0;
                    (f = h[c++]) && !b.isPropagationStopped();)
                    for (b.currentTarget = f.elem, d = 0;
                        (g = f.handlers[d++]) && !b.isImmediatePropagationStopped();) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, b), b.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                        for (f = [], g = {}, c = 0; i > c; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    }
            return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h
        },
        addProp: function(a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ? function() {
                    return this.originalEvent ? b(this.originalEvent) : void 0
                } : function() {
                    return this.originalEvent ? this.originalEvent[a] : void 0
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function(a) {
            return a[r.expando] ? a : new r.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== wa() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === wa() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && r.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return r.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, r.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, r.Event = function(a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
    }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: va,
        isPropagationStopped: va,
        isImmediatePropagationStopped: va,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ua, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ua, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ua, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, r.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, r.event.addProp), r.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), r.fn.extend({
        on: function(a, b, c, d) {
            return xa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return xa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = va), this.each(function() {
                r.event.remove(this, a, c, b)
            })
        }
    });
    var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        za = /<script|<style|<link/i,
        Aa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ba = /^true\/(.*)/,
        Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    r.extend({
        htmlPrefilter: function(a) {
            return a.replace(ya, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = ma(h), f = ma(a), d = 0, e = f.length; e > d; d++) Ha(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; e > d; d++) Ga(f[d], g[d]);
                else Ga(a, h);
            return g = ma(h, "script"), g.length > 0 && na(g, !i && ma(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (T(c)) {
                    if (b = c[V.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[V.expando] = void 0
                    }
                    c[W.expando] && (c[W.expando] = void 0)
                }
        }
    }), r.fn.extend({
        detach: function(a) {
            return Ja(this, a, !0)
        },
        remove: function(a) {
            return Ja(this, a)
        },
        text: function(a) {
            return S(this, function(a) {
                return void 0 === a ? r.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return Ia(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ia(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ia(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ia(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return r.clone(this, a, b)
            })
        },
        html: function(a) {
            return S(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ia(this, arguments, function(b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), r.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        r.fn[a] = function(a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Ka = /^margin/,
        La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
        Ma = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        };
    ! function() {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", qa.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, qa.removeChild(h), i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"),
            i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return b(), e
            },
            pixelMarginRight: function() {
                return b(), f
            },
            reliableMarginLeft: function() {
                return b(), g
            }
        }))
    }();
    var Pa = /^(none|table(?!-c[ea]).+)/,
        Qa = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ra = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Sa = ["Webkit", "Moz", "ms"],
        Ta = d.createElement("div").style;
    r.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Na(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b),
                    i = a.style;
                return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), void(null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = r.camelCase(b);
            return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Na(a, b, d)), "normal" === e && b in Ra && (e = Ra[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), r.each(["height", "width"], function(a, b) {
        r.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function() {
                    return Xa(a, b, d)
                }) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && Ma(a),
                    g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Va(a, c, g)
            }
        }
    }), r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), r.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        r.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + ba[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ka.test(a) || (r.cssHooks[a + b].set = Va)
    }), r.fn.extend({
        css: function(a, b) {
            return S(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (r.isArray(b)) {
                    for (d = Ma(a), e = b.length; e > g; g++) f[b[g]] = r.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, arguments.length > 1)
        }
    }), r.Tween = Ya, Ya.prototype = {
        constructor: Ya,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ya.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ya.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ya.propHooks[this.prop];
            return this.pos = b = this.options.duration ? r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ya.propHooks._default.set(this), this
        }
    }, Ya.prototype.init.prototype = Ya.prototype, Ya.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, r.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, r.fx = Ya.prototype.init, r.fx.step = {};
    var Za, $a, _a = /^(?:toggle|show|hide)$/,
        ab = /queueHooks$/;
    r.Animation = r.extend(hb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return ea(c.elem, a, aa.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], hb.tweeners[c] = hb.tweeners[c] || [], hb.tweeners[c].unshift(b)
            },
            prefilters: [fb],
            prefilter: function(a, b) {
                b ? hb.prefilters.unshift(a) : hb.prefilters.push(a)
            }
        }), r.speed = function(a, b, c) {
            var e = a && "object" == typeof a ? r.extend({}, a) : {
                complete: c || !c && b || r.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !r.isFunction(b) && b
            };
            return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration = e.duration in r.fx.speeds ? r.fx.speeds[e.duration] : r.fx.speeds._default), null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function() {
                r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue)
            }, e
        }, r.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(ca).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = r.isEmptyObject(a),
                    f = r.speed(b, c, d),
                    g = function() {
                        var b = hb(this, r.extend({}, a), f);
                        (e || V.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = r.timers,
                        g = V.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || r.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = V.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = r.timers,
                        g = d ? d.length : 0;

                    for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), r.each(["toggle", "show", "hide"], function(a, b) {
            var c = r.fn[b];
            r.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e)
            }
        }), r.each({
            slideDown: db("show"),
            slideUp: db("hide"),
            slideToggle: db("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            r.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), r.timers = [], r.fx.tick = function() {
            var a, b = 0,
                c = r.timers;
            for (Za = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || r.fx.stop(), Za = void 0
        }, r.fx.timer = function(a) {
            r.timers.push(a), a() ? r.fx.start() : r.timers.pop()
        }, r.fx.interval = 13, r.fx.start = function() {
            $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval))
        }, r.fx.stop = function() {
            a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), $a = null
        }, r.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, r.fn.delay = function(b, c) {
            return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
        }();
    var ib, jb = r.expr.attrHandle;
    r.fn.extend({
        attr: function(a, b) {
            return S(this, r.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                r.removeAttr(this, a)
            })
        }
    }), r.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return 3 !== f && 8 !== f && 2 !== f ? "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d)) : void 0
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0,
                e = b && b.match(K);
            if (e && 1 === a.nodeType)
                for (; c = e[d++];) a.removeAttribute(c)
        }
    }), ib = {
        set: function(a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = jb[b] || r.find.attr;
        jb[b] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g : null, jb[g] = f), e
        }
    });
    var kb = /^(?:input|select|textarea|button)$/i,
        lb = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function(a, b) {
            return S(this, r.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[r.propFix[a] || a]
            })
        }
    }), r.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            return 3 !== f && 8 !== f && 2 !== f ? (1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), o.optSelected || (r.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        r.propFix[this.toLowerCase()] = this
    }), r.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).addClass(a.call(this, b, nb(this)))
            });
            if ("string" == typeof a && a)
                for (b = a.match(K) || []; c = this[i++];)
                    if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                        for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = mb(d), e !== h && c.setAttribute("class", h)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).removeClass(a.call(this, b, nb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a)
                for (b = a.match(K) || []; c = this[i++];)
                    if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                        for (g = 0; f = b[g++];)
                            for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                        h = mb(d), e !== h && c.setAttribute("class", h)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(r.isFunction(a) ? function(c) {
                r(this).toggleClass(a.call(this, c, nb(this), b), b)
            } : function() {
                var b, d, e, f;
                if ("string" === c)
                    for (d = 0, e = r(this), f = a.match(K) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++];)
                if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var ob = /\r/g;
    r.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = r.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function(a) {
                    return null == a ? "" : a + ""
                })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c)) : void 0
        }
    }), r.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b : mb(r.text(a))
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        h = g ? null : [],
                        i = g ? f + 1 : e.length;
                    for (d = 0 > f ? i : g ? f : 0; i > d; d++)
                        if (c = e[d], !(!c.selected && d !== f || c.disabled || c.parentNode.disabled && r.nodeName(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), g) return b;
                            h.push(b)
                        }
                    return h
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = r.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), r.each(["radio", "checkbox"], function() {
        r.valHooks[this] = {
            set: function(a, b) {
                return r.isArray(b) ? a.checked = r.inArray(r(a).val(), b) > -1 : void 0
            }
        }, o.checkOn || (r.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                for (g = 0;
                    (h = o[g++]) && !b.isPropagationStopped();) b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = r.extend(new r.Event, c, {
                type: a,
                isSimulated: !0
            });
            r.event.trigger(d, null, b)
        }
    }), r.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                r.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? r.event.trigger(a, b, c, !0) : void 0
        }
    }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
        r.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), r.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), o.focusin = "onfocusin" in a, o.focusin || r.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            r.event.simulate(b, a.target, r.event.fix(a))
        };
        r.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b);
                e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b) - 1;
                e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b))
            }
        }
    });
    var qb = a.location,
        rb = r.now(),
        sb = /\?/;
    r.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c
    };
    var tb = /\[\]$/,
        ub = /\r?\n/g,
        vb = /^(?:submit|button|image|reset|file)$/i,
        wb = /^(?:input|select|textarea|keygen)/i;
    r.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                var c = r.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) xb(c, a[c], b, e);
        return d.join("&")
    }, r.fn.extend({
        serialize: function() {
            return r.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a))
            }).map(function(a, b) {
                var c = r(this).val();
                return null == c ? null : r.isArray(c) ? r.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ub, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ub, "\r\n")
                }
            }).get()
        }
    });
    var yb = /%20/g,
        zb = /#.*$/,
        Ab = /([?&])_=[^&]*/,
        Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Db = /^(?:GET|HEAD)$/,
        Eb = /^\/\//,
        Fb = {},
        Gb = {},
        Hb = "*/".concat("*"),
        Ib = d.createElement("a");
    Ib.href = qb.href, r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qb.href,
            type: "GET",
            isLocal: Cb.test(qb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Hb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a)
        },
        ajaxPrefilter: Jb(Fb),
        ajaxTransport: Jb(Gb),
        ajax: function(b, c) {
            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", 0 > b && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
            }
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (k) {
                            if (!h)
                                for (h = {}; b = Bb.exec(g);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return k ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return null == k && (o.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (k) y.always(a[y.status]);
                            else
                                for (b in a) u[b] = [u[b], a[b]];
                        return this
                    },
                    abort: function(a) {
                        var b = a || x;
                        return e && e.abort(b), A(0, b), this
                    }
                };
            if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host
                } catch (z) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() {
                    y.abort("timeout")
                }, o.timeout));
                try {
                    k = !1, e.send(v, A)
                } catch (z) {
                    if (k) throw z;
                    A(-1, z)
                }
            } else A(-1, "No Transport");
            return y
        },
        getJSON: function(a, b, c) {
            return r.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return r.get(a, void 0, b, "script")
        }
    }), r.each(["get", "post"], function(a, b) {
        r[b] = function(a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r.isPlainObject(a) && a))
        }
    }), r._evalUrl = function(a) {
        return r.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, r.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this
        },
        wrapInner: function(a) {
            return this.each(r.isFunction(a) ? function(b) {
                r(this).wrapInner(a.call(this, b))
            } : function() {
                var b = r(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = r.isFunction(a);
            return this.each(function(c) {
                r(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                r(this).replaceWith(this.childNodes)
            }), this
        }
    }), r.expr.pseudos.hidden = function(a) {
        return !r.expr.pseudos.visible(a)
    }, r.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, r.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Ob = {
            0: 200,
            1223: 204
        },
        Pb = r.ajaxSettings.xhr();
    o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function(b) {
        var c, d;
        return o.cors || Pb && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }), r.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }), r.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return r.globalEval(a), a
            }
        }
    }), r.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), r.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = r("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Qb = [],
        Rb = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Qb.pop() || r.expando + "_" + rb++;
            return this[a] = !0, a
        }
    }), r.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || r.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), o.createHTMLDocument = function() {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), r.parseHTML = function(a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var e, f, g;
        return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
    }, r.fn.load = function(a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        r.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), r.expr.pseudos.animated = function(a) {
        return r.grep(r.timers, function(b) {
            return a === b.elem
        }).length
    }, r.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"),
                l = r(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, r.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                r.offset.setOffset(this, a, b)
            });
            var b, c, d, e, f = this[0];
            return f ? f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, {
                top: d.top + c.pageYOffset - b.clientTop,
                left: d.left + c.pageXOffset - b.clientLeft
            }) : d) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - r.css(c, "marginTop", !0),
                    left: b.left - d.left - r.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && "static" === r.css(a, "position");) a = a.offsetParent;
                return a || qa
            })
        }
    }), r.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function(d) {
            return S(this, function(a, d, e) {
                var f = Sb(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), r.each(["top", "left"], function(a, b) {
        r.cssHooks[b] = Oa(o.pixelPosition, function(a, c) {
            return c ? (c = Na(a, b), La.test(c) ? r(a).position()[b] + "px" : c) : void 0
        })
    }), r.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        r.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            r.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");
                return S(this, function(b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }), r.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return r
    });
    var Tb = a.jQuery,
        Ub = a.$;
    return r.noConflict = function(b) {
        return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r
    }, b || (a.jQuery = a.$ = r), r
}), ! function($) {
    var defaults = {
        sectionContainer: "section",
        easing: "ease",
        animationTime: 1e3,
        pagination: !0,
        updateURL: !1,
        keyboard: !0,
        beforeMove: null,
        afterMove: null,
        loop: !0,
        responsiveFallback: !1,
        direction: "vertical"
    };
    $.fn.swipeEvents = function() {
        return this.each(function() {
            function touchstart(event) {
                var touches = event.originalEvent.touches;
                touches && touches.length && (startX = touches[0].pageX, startY = touches[0].pageY, $this.bind("touchmove", touchmove))
            }

            function touchmove(event) {
                var touches = event.originalEvent.touches;
                if (touches && touches.length) {
                    var deltaX = startX - touches[0].pageX,
                        deltaY = startY - touches[0].pageY;
                    deltaX >= 50 && $this.trigger("swipeLeft"), -50 >= deltaX && $this.trigger("swipeRight"), deltaY >= 50 && $this.trigger("swipeUp"), -50 >= deltaY && $this.trigger("swipeDown"), (Math.abs(deltaX) >= 50 || Math.abs(deltaY) >= 50) && $this.unbind("touchmove", touchmove)
                }
            }
            var startX, startY, $this = $(this);
            $this.bind("touchstart", touchstart)
        })
    }, $.fn.onepage_scroll = function(options) {
        function responsive() {
            var valForTest = !1,
                typeOfRF = typeof settings.responsiveFallback;
            "number" == typeOfRF && (valForTest = $(window).width() < settings.responsiveFallback), "boolean" == typeOfRF && (valForTest = settings.responsiveFallback), "function" == typeOfRF && (valFunction = settings.responsiveFallback(), valForTest = valFunction, typeOFv = typeof valForTest, "number" == typeOFv && (valForTest = $(window).width() < valFunction)), valForTest ? ($("body").addClass("disabled-onepage-scroll"), $(document).unbind("mousewheel DOMMouseScroll MozMousePixelScroll"), el.swipeEvents().unbind("swipeDown swipeUp")) : ($("body").hasClass("disabled-onepage-scroll") && ($("body").removeClass("disabled-onepage-scroll"), $("html, body, .wrapper").animate({
                scrollTop: 0
            }, "fast")), el.swipeEvents().bind("swipeDown", function(event) {
                $("body").hasClass("disabled-onepage-scroll") || event.preventDefault(), el.moveUp()
            }).bind("swipeUp", function(event) {
                $("body").hasClass("disabled-onepage-scroll") || event.preventDefault(), el.moveDown()
            }), $(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(event) {
                document.addEventListener("mousewheel DOMMouseScroll", {
                    passive: !1
                });
                var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
                init_scroll(event, delta)
            }))
        }

        function init_scroll(event, delta) {
            deltaOfInterest = delta;
            var timeNow = (new Date).getTime();
            return timeNow - lastAnimation < quietPeriod + settings.animationTime ? void document.addEventListener("mousewheel DOMMouseScroll", {
                passive: !1
            }) : (deltaOfInterest < 0 ? el.moveDown() : el.moveUp(), void(lastAnimation = timeNow))
        }
        var settings = $.extend({}, defaults, options),
            el = $(this),
            sections = $(settings.sectionContainer);
        if (total = sections.length, status = "off", topPos = 0, leftPos = 0, lastAnimation = 0, quietPeriod = 500, paginationList = "", $.fn.transformPage = function(settings, pos, index) {
                if ("function" == typeof settings.beforeMove && settings.beforeMove(index), $("html").hasClass("ie8"))
                    if ("horizontal" == settings.direction) {
                        var toppos = el.width() / 100 * pos;
                        $(this).animate({
                            left: toppos + "px"
                        }, settings.animationTime)
                    } else {
                        var toppos = el.height() / 100 * pos;
                        $(this).animate({
                            top: toppos + "px"
                        }, settings.animationTime)
                    }
                else $(this).css({
                    "-webkit-transform": "horizontal" == settings.direction ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
                    "-webkit-transition": "all " + settings.animationTime + "ms " + settings.easing,
                    "-moz-transform": "horizontal" == settings.direction ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
                    "-moz-transition": "all " + settings.animationTime + "ms " + settings.easing,
                    "-ms-transform": "horizontal" == settings.direction ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
                    "-ms-transition": "all " + settings.animationTime + "ms " + settings.easing,
                    transform: "horizontal" == settings.direction ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
                    transition: "all " + settings.animationTime + "ms " + settings.easing
                });
                $(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                    "function" == typeof settings.afterMove && settings.afterMove(index)
                })
            }, $.fn.moveDown = function() {
                var el = $(this);
                if (index = $(settings.sectionContainer + ".active").data("index"), current = $(settings.sectionContainer + "[data-index='" + index + "']"), next = $(settings.sectionContainer + "[data-index='" + (index + 1) + "']"), next.length < 1) {
                    if (1 != settings.loop) return;
                    pos = 0, next = $(settings.sectionContainer + "[data-index='1']")
                } else pos = 100 * index * -1;
                if ("function" == typeof settings.beforeMove && settings.beforeMove(next.data("index")), current.removeClass("active"), next.addClass("active"), 1 == settings.pagination && ($(".onepage-pagination li a[data-index='" + index + "']").removeClass("active"), $(".onepage-pagination li a[data-index='" + next.data("index") + "']").addClass("active")), $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, ""), $("body").addClass("viewing-page-" + next.data("index")), history.replaceState && 1 == settings.updateURL) {
                    var href = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (index + 1);
                    history.pushState({}, document.title, href)
                }
                el.transformPage(settings, pos, next.data("index"))
            }, $.fn.moveUp = function() {
                var el = $(this);
                if (index = $(settings.sectionContainer + ".active").data("index"), current = $(settings.sectionContainer + "[data-index='" + index + "']"), next = $(settings.sectionContainer + "[data-index='" + (index - 1) + "']"), next.length < 1) {
                    if (1 != settings.loop) return;
                    pos = 100 * (total - 1) * -1, next = $(settings.sectionContainer + "[data-index='" + total + "']")
                } else pos = 100 * (next.data("index") - 1) * -1;
                if ("function" == typeof settings.beforeMove && settings.beforeMove(next.data("index")), current.removeClass("active"), next.addClass("active"), 1 == settings.pagination && ($(".onepage-pagination li a[data-index='" + index + "']").removeClass("active"), $(".onepage-pagination li a[data-index='" + next.data("index") + "']").addClass("active")), $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, ""), $("body").addClass("viewing-page-" + next.data("index")), history.replaceState && 1 == settings.updateURL) {
                    var href = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (index - 1);
                    history.pushState({}, document.title, href)
                }
                el.transformPage(settings, pos, next.data("index"))
            }, $.fn.moveTo = function(page_index) {
                if (current = $(settings.sectionContainer + ".active"), next = $(settings.sectionContainer + "[data-index='" + page_index + "']"), next.length > 0) {
                    if ("function" == typeof settings.beforeMove && settings.beforeMove(next.data("index")), current.removeClass("active"), next.addClass("active"), $(".onepage-pagination li a.active").removeClass("active"), $(".onepage-pagination li a[data-index='" + page_index + "']").addClass("active"), $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, ""), $("body").addClass("viewing-page-" + next.data("index")), pos = 100 * (page_index - 1) * -1, history.replaceState && 1 == settings.updateURL) {
                        var href = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (page_index - 1);
                        history.pushState({}, document.title, href)
                    }
                    el.transformPage(settings, pos, page_index)
                }
            }, el.addClass("onepage-wrapper").css("position", "relative"), $.each(sections, function(i) {
                $(this).css({
                    position: "absolute",
                    top: topPos + "%"
                }).addClass("section").attr("data-index", i + 1), $(this).css({
                    position: "absolute",
                    left: "horizontal" == settings.direction ? leftPos + "%" : 0,
                    top: "vertical" == settings.direction || "horizontal" != settings.direction ? topPos + "%" : 0
                }), "horizontal" == settings.direction ? leftPos += 100 : topPos += 100, 1 == settings.pagination && (paginationList += "<li><a data-index='" + (i + 1) + "' href='#" + (i + 1) + "'></a></li>")
            }), el.swipeEvents().bind("swipeDown", function(event) {
                $("body").hasClass("disabled-onepage-scroll") || event.preventDefault(), el.moveUp()
            }).bind("swipeUp", function(event) {
                $("body").hasClass("disabled-onepage-scroll") || event.preventDefault(), el.moveDown()
            }), 1 == settings.pagination && ($("ul.onepage-pagination").length < 1 && $("<ul class='onepage-pagination'></ul>").prependTo("body"), "horizontal" == settings.direction ? (posLeft = el.find(".onepage-pagination").width() / 2 * -1, el.find(".onepage-pagination").css("margin-left", posLeft)) : (posTop = el.find(".onepage-pagination").height() / 2 * -1, el.find(".onepage-pagination").css("margin-top", posTop)), $("ul.onepage-pagination").html(paginationList)), "" != window.location.hash && "#1" != window.location.hash)
            if (init_index = window.location.hash.replace("#", ""), parseInt(init_index) <= total && parseInt(init_index) > 0) {
                if ($(settings.sectionContainer + "[data-index='" + init_index + "']").addClass("active"), $("body").addClass("viewing-page-" + init_index), 1 == settings.pagination && $(".onepage-pagination li a[data-index='" + init_index + "']").addClass("active"), next = $(settings.sectionContainer + "[data-index='" + init_index + "']"), next && (next.addClass("active"), 1 == settings.pagination && $(".onepage-pagination li a[data-index='" + init_index + "']").addClass("active"), $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, ""), $("body").addClass("viewing-page-" + next.data("index")), history.replaceState && 1 == settings.updateURL)) {
                    var href = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + init_index;
                    history.pushState({}, document.title, href)
                }
                pos = 100 * (init_index - 1) * -1, el.transformPage(settings, pos, init_index)
            } else $(settings.sectionContainer + "[data-index='1']").addClass("active"), $("body").addClass("viewing-page-1"), 1 == settings.pagination && $(".onepage-pagination li a[data-index='1']").addClass("active");
        else $(settings.sectionContainer + "[data-index='1']").addClass("active"), $("body").addClass("viewing-page-1"), 1 == settings.pagination && $(".onepage-pagination li a[data-index='1']").addClass("active");

        return 1 == settings.pagination && $(".onepage-pagination li a").click(function() {
            var page_index = $(this).data("index");
            el.moveTo(page_index)
        }), $(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(event) {
            document.addEventListener("mousewheel DOMMouseScroll MozMousePixelScroll", {
                passive: !1
            });
            var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
            $("body").hasClass("disabled-onepage-scroll") || init_scroll(event, delta)
        }), 0 != settings.responsiveFallback && ($(window).resize(function() {
            responsive()
        }), responsive()), 1 == settings.keyboard && $(document).keydown(function(e) {
            var tag = e.target.tagName.toLowerCase();
            if (!$("body").hasClass("disabled-onepage-scroll")) switch (e.which) {
                case 38:
                    "input" != tag && "textarea" != tag && el.moveUp();
                    break;
                case 40:
                    "input" != tag && "textarea" != tag && el.moveDown();
                    break;
                case 32:
                    "input" != tag && "textarea" != tag && el.moveDown();
                    break;
                case 33:
                    "input" != tag && "textarea" != tag && el.moveUp();
                    break;
                case 34:
                    "input" != tag && "textarea" != tag && el.moveDown();
                    break;
                case 36:
                    el.moveTo(1);
                    break;
                case 35:
                    el.moveTo(total);
                    break;
                default:
                    return
            }
        }), !1
    }
}(window.jQuery), ! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, function() {
    "use strict";

    function s(s, a) {
        var r = [],
            n = 0;
        if (s && !a && s instanceof i) return s;
        if (s)
            if ("string" == typeof s) {
                var o, l, d = s.trim();
                if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                    var h = "div";
                    for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) r.push(l.childNodes[n])
                } else
                    for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && r.push(o[n])
            } else if (s.nodeType || s === t || s === e) r.push(s);
        else if (s.length > 0 && s[0].nodeType)
            for (n = 0; n < s.length; n += 1) r.push(s[n]);
        return new i(r)
    }

    function a(e) {
        for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }

    function D(i) {
        var a = this.touchEventsData,
            r = this.params,
            o = this.touches;
        if (!this.animating || !r.preventInteractionOnTransition) {
            var l = i;
            l.originalEvent && (l = l.originalEvent);
            var d = s(l.target);
            if (!("wrapper" === r.touchEventsTarget && !d.closest(this.wrapperEl).length || (a.isTouchEvent = "touchstart" === l.type, !a.isTouchEvent && "which" in l && 3 === l.which || !a.isTouchEvent && "button" in l && l.button > 0 || a.isTouched && a.isMoved)))
                if (r.noSwiping && d.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;
                else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
                o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                var h = o.currentX,
                    p = o.currentY,
                    c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                    u = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                if (!c || !(u >= h || h >= t.screen.width - u)) {
                    if (n.extend(a, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }), o.startX = h, o.startY = p, a.touchStartTime = n.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== l.type) {
                        var v = !0;
                        d.is(a.formElements) && (v = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== d[0] && e.activeElement.blur();
                        var f = v && this.allowTouchMove && r.touchStartPreventDefault;
                        (r.touchStartForcePreventDefault || f) && l.preventDefault()
                    }
                    this.emit("touchStart", l)
                }
            }
        }
    }

    function O(t) {
        var i = this.touchEventsData,
            a = this.params,
            r = this.touches,
            o = this.rtlTranslate,
            l = t;
        if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
            if (!i.isTouchEvent || "mousemove" !== l.type) {
                var d = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                    h = "touchmove" === l.type ? d.pageX : l.pageX,
                    p = "touchmove" === l.type ? d.pageY : l.pageY;
                if (l.preventedByNestedSwiper) return r.startX = h, void(r.startY = p);
                if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (n.extend(r, {
                    startX: h,
                    startY: p,
                    currentX: h,
                    currentY: p
                }), i.touchStartTime = n.now()));
                if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                    if (this.isVertical()) {
                        if (p < r.startY && this.translate <= this.maxTranslate() || p > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                    } else if (h < r.startX && this.translate <= this.maxTranslate() || h > r.startX && this.translate >= this.minTranslate()) return;
                if (i.isTouchEvent && e.activeElement && l.target === e.activeElement && s(l.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
                if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                    r.currentX = h, r.currentY = p;
                    var c = r.currentX - r.startX,
                        u = r.currentY - r.startY;
                    if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) {
                        var v;
                        if (void 0 === i.isScrolling && (this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? v > a.touchAngle : 90 - v > a.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                        else if (i.startMoving) {
                            this.allowClick = !1, a.cssMode || l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
                            var f = this.isHorizontal() ? c : u;
                            r.diff = f, f *= a.touchRatio, o && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                            var m = !0,
                                g = a.resistanceRatio;
                            if (a.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (m = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g))) : 0 > f && i.currentTranslate < this.maxTranslate() && (m = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))), m && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                                if (!(Math.abs(f) > a.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                            }
                            a.followFinger && !a.cssMode && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                                position: r[this.isHorizontal() ? "startX" : "startY"],
                                time: i.touchStartTime
                            }), i.velocities.push({
                                position: r[this.isHorizontal() ? "currentX" : "currentY"],
                                time: n.now()
                            })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                        }
                    }
                }
            }
        } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l)
    }

    function A(e) {
        var t = this,
            i = t.touchEventsData,
            s = t.params,
            a = t.touches,
            r = t.rtlTranslate,
            o = t.$wrapperEl,
            l = t.slidesGrid,
            d = t.snapGrid,
            h = e;
        if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var p, c = n.now(),
            u = c - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap click", h), 300 > u && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)), i.lastClickTime = n.now(), n.nextTick(function() {
                t.destroyed || (t.allowClick = !0)
            }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode)
            if (s.freeMode) {
                if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                if (p > -t.maxTranslate()) return void t.slideTo(t.slides.length < d.length ? d.length - 1 : t.slides.length - 1);
                if (s.freeModeMomentum) {
                    if (i.velocities.length > 1) {
                        var v = i.velocities.pop(),
                            f = i.velocities.pop(),
                            m = v.position - f.position,
                            g = v.time - f.time;
                        t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || n.now() - v.time > 300) && (t.velocity = 0)
                    } else t.velocity = 0;
                    t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                    var b = 1e3 * s.freeModeMomentumRatio,
                        w = t.velocity * b,
                        y = t.translate + w;
                    r && (y = -y);
                    var x, T, E = !1,
                        S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                    if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0);
                    else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (T = !0);
                    else if (s.freeModeSticky) {
                        for (var C, M = 0; M < d.length; M += 1)
                            if (d[M] > -y) {
                                C = M;
                                break
                            }
                        y = -(y = Math.abs(d[C] - y) < Math.abs(d[C - 1] - y) || "next" === t.swipeDirection ? d[C] : d[C - 1])
                    }
                    if (T && t.once("transitionEnd", function() {
                            t.loopFix()
                        }), 0 !== t.velocity) {
                        if (b = Math.abs(r ? (-y - t.translate) / t.velocity : (y - t.translate) / t.velocity), s.freeModeSticky) {
                            var P = Math.abs((r ? -y : y) - t.translate),
                                z = t.slidesSizesGrid[t.activeIndex];
                            b = z > P ? s.speed : 2 * z > P ? 1.5 * s.speed : 2.5 * s.speed
                        }
                    } else if (s.freeModeSticky) return void t.slideToClosest();
                    s.freeModeMomentumBounce && E ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd(function() {
                        t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), o.transitionEnd(function() {
                            t && !t.destroyed && t.transitionEnd()
                        }))
                    })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd(function() {
                        t && !t.destroyed && t.transitionEnd()
                    }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
                } else if (s.freeModeSticky) return void t.slideToClosest();
                (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
            } else {
                for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < l.length; L += s.slidesPerGroup) void 0 !== l[L + s.slidesPerGroup] ? p >= l[L] && p < l[L + s.slidesPerGroup] && (k = L, $ = l[L + s.slidesPerGroup] - l[L]) : p >= l[L] && (k = L, $ = l[l.length - 1] - l[l.length - 2]);
                var I = (p - l[k]) / $;
                if (u > s.longSwipesMs) {
                    if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && t.slideTo(I >= s.longSwipesRatio ? k + s.slidesPerGroup : k), "prev" === t.swipeDirection && t.slideTo(I > 1 - s.longSwipesRatio ? k + s.slidesPerGroup : k)
                } else {
                    if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                    !t.navigation || h.target !== t.navigation.nextEl && h.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(k + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(k)) : t.slideTo(h.target === t.navigation.nextEl ? k + s.slidesPerGroup : k)
                }
            }
    }

    function G() {
        var e = this.params,
            t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext,
                s = this.allowSlidePrev,
                a = this.snapGrid;
            this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
        }
    }

    function B(e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
    }

    function H() {
        var e = this.wrapperEl;
        this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? -e.scrollLeft : -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
        var t = this.maxTranslate() - this.minTranslate();
        (0 === t ? 0 : (this.translate - this.minTranslate()) / t) !== this.progress && this.updateProgress(this.translate), this.emit("setTranslate", this.translate, !1)
    }

    function X() {}
    var e = "undefined" == typeof document ? {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null
            },
            querySelectorAll: function() {
                return []
            },
            getElementById: function() {
                return null
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                }
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        t = "undefined" == typeof window ? {
            document: e,
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function() {
                return this
            },
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return ""
                    }
                }
            },
            Image: function() {},
            Date: function() {},
            screen: {},
            setTimeout: function() {},
            clearTimeout: function() {}
        } : window,
        i = function(e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return this.length = e.length, this
        };
    s.fn = i.prototype, s.Class = i, s.Dom7 = i;
    var r = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1)
                if (2 === i.length) this[s].setAttribute(e, t);
                else
                    for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        },
        on: function() {
            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(r)) n.apply(t, i);
                    else
                        for (var a = s(t).parents(), o = 0; o < a.length; o += 1) s(a[o]).is(r) && n.apply(a[o], i)
                }
            }

            function d(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
            }
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var a = t[0],
                r = t[1],
                n = t[2],
                o = t[3];
            "function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);
            for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (h = 0; h < p.length; h += 1) {
                        var v = p[h];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({
                            listener: n,
                            proxyListener: l
                        }), u.addEventListener(v, l, o)
                    } else
                        for (h = 0; h < p.length; h += 1) {
                            var f = p[h];
                            u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
                                listener: n,
                                proxyListener: d
                            }), u.addEventListener(f, d, o)
                        }
            }
            return this
        },
        off: function() {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var s = t[0],
                a = t[1],
                r = t[2],
                n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], h = 0; h < this.length; h += 1) {
                    var p = this[h],
                        c = void 0;
                    if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length)
                        for (var u = c.length - 1; u >= 0; u -= 1) {
                            var v = c[u];
                            r && v.listener === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
            for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
                for (var o = a[n], l = 0; l < this.length; l += 1) {
                    var d = this[l],
                        h = void 0;
                    try {
                        h = new t.CustomEvent(o, {
                            detail: r,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (t) {
                        (h = e.createEvent("Event")).initEvent(o, !0, !0), h.detail = r
                    }
                    d.dom7EventData = i.filter(function(e, t) {
                        return t > 0
                    }), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData
                }
            return this
        },
        transitionEnd: function(e) {
            function a(r) {
                if (r.target === this)
                    for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a)
            }
            var t, i = ["webkitTransitionEnd", "transitionend"],
                s = this;
            if (e)
                for (t = 0; t < i.length; t += 1) s.on(i[t], a);
            return this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (this.length > 0) {
                var i = this[0],
                    s = i.getBoundingClientRect(),
                    a = e.body,
                    r = i.clientTop || a.clientTop || 0,
                    n = i.clientLeft || a.clientLeft || 0,
                    o = i === t ? t.scrollY : i.scrollTop,
                    l = i === t ? t.scrollX : i.scrollLeft;
                return {
                    top: s.top + o - r,
                    left: s.left + l - n
                }
            }
            return null
        },
        css: function(e, i) {
            var s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (s = 0; s < this.length; s += 1)
                        for (var a in e) this[s].style[a] = e[a];
                    return this
                }
                if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(a) {
            var r, n, o = this[0];
            if (!o || void 0 === a) return !1;
            if ("string" == typeof a) {
                if (o.matches) return o.matches(a);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
                if (o.msMatchesSelector) return o.msMatchesSelector(a);
                for (r = s(a), n = 0; n < r.length; n += 1)
                    if (r[n] === o) return !0;
                return !1
            }
            if (a === e) return o === e;
            if (a === t) return o === t;
            if (a.nodeType || a instanceof i) {
                for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1)
                    if (r[n] === o) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t, s = this.length;
            return new i(e > s - 1 ? [] : 0 > e ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var t, s = [], a = arguments.length; a--;) s[a] = arguments[a];
            for (var r = 0; r < s.length; r += 1) {
                t = s[r];
                for (var n = 0; n < this.length; n += 1)
                    if ("string" == typeof t) {
                        var o = e.createElement("div");
                        for (o.innerHTML = t; o.firstChild;) this[n].appendChild(o.firstChild)
                    } else if (t instanceof i)
                    for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]);
                else this[n].appendChild(t)
            }
            return this
        },
        prepend: function(t) {
            var s, a;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof t) {
                    var r = e.createElement("div");
                    for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(r.childNodes[a], this[s].childNodes[0])
                } else if (t instanceof i)
                for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]);
            else this[s].insertBefore(t, this[s].childNodes[0]);
            return this
        },
        next: function(e) {
            return new i(this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
        },
        nextAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new i([]);
            for (; a.nextElementSibling;) {
                var r = a.nextElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r
            }
            return new i(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                var t = this[0];
                return new i(e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? [t.previousElementSibling] : [] : t.previousElementSibling ? [t.previousElementSibling] : [])
            }
            return new i([])
        },
        prevAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new i([]);
            for (; a.previousElementSibling;) {
                var r = a.previousElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r
            }
            return new i(t)
        },
        parent: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return s(a(t))
        },
        parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var r = this[i].parentNode; r;) e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
            return s(a(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1)
                for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) t.push(a[r]);
            return new i(t)
        },
        children: function(e) {
            for (var t = [], r = 0; r < this.length; r += 1)
                for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
            return new i(a(t))
        },
        filter: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1) e.call(this[s], s, this[s]) && t.push(this[s]);
            return new i(t)
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, a;
            for (i = 0; i < e.length; i += 1) {
                var r = s(e[i]);
                for (a = 0; a < r.length; a += 1) this[this.length] = r[a], this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? t.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(r).forEach(function(e) {
        s.fn[e] = s.fn[e] || r[e]
    });
    var n = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach(function(e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            },
            nextTick: function(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function() {
                return Date.now()
            },
            getTranslate: function(e, i) {
                var s, a, r;
                void 0 === i && (i = "x");
                var n = t.getComputedStyle(e, null);
                return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : parseFloat(16 === s.length ? s[12] : s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : parseFloat(16 === s.length ? s[13] : s[5])), a || 0
            },
            parseUrlQuery: function(e) {
                var i, s, a, r, n = {},
                    o = e || t.location.href;
                if ("string" == typeof o && o.length)
                    for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                            return "" !== e
                        })).length, i = 0; r > i; i += 1) a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
                return n
            },
            isObject: function(e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                    var a = e[s];
                    if (null != a)
                        for (var r = Object.keys(Object(a)), o = 0, l = r.length; l > o; o += 1) {
                            var d = r[o],
                                h = Object.getOwnPropertyDescriptor(a, d);
                            void 0 !== h && h.enumerable && (n.isObject(i[d]) && n.isObject(a[d]) ? n.extend(i[d], a[d]) : !n.isObject(i[d]) && n.isObject(a[d]) ? (i[d] = {}, n.extend(i[d], a[d])) : i[d] = a[d])
                        }
                }
                return i
            }
        },
        o = {
            touch: t.Modernizr && !0 === t.Modernizr.touch || !!(t.navigator.maxTouchPoints > 0 || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
            pointerEvents: !!t.PointerEvent && "maxTouchPoints" in t.navigator && t.navigator.maxTouchPoints > 0,
            observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
            passiveListener: function() {
                var e = !1;
                try {
                    var i = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    t.addEventListener("testPassiveListener", null, i)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in t
        },
        l = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
                t.on(e, t.params.on[e])
            })
        },
        d = {
            components: {
                configurable: !0
            }
        };
    l.prototype.on = function(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach(function(e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
        }), s
    }, l.prototype.once = function(e, t, i) {
        function a() {
            for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];
            s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i)
        }
        var s = this;
        return "function" != typeof t ? s : (a.f7proxy = t, s.on(e, a, i))
    }, l.prototype.off = function(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach(function(e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach(function(s, a) {
                (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1)
            })
        }), i) : i
    }, l.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, s, a, r = this;
        if (!r.eventsListeners) return r;
        "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r);
        var n = Array.isArray(i) ? i : i.split(" ");
        return n.forEach(function(e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                }), t.forEach(function(e) {
                    e.apply(a, s)
                })
            }
        }), r
    }, l.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var s = t.modules[i];
            s.params && n.extend(e, s.params)
        })
    }, l.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var s = t.modules[i],
                a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach(function(e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            }), s.on && t.on && Object.keys(s.on).forEach(function(e) {
                t.on(e, s.on[e])
            }), s.create && s.create.bind(t)(a)
        })
    }, d.components.set = function(e) {
        this.use && this.use(e)
    }, l.installModule = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = e.name || Object.keys(s.prototype.modules).length + "_" + n.now();
        return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function(t) {
            s.prototype[t] = e.proto[t]
        }), e["static"] && Object.keys(e["static"]).forEach(function(t) {
            s[t] = e["static"][t]
        }), e.install && e.install.apply(s, t), s
    }, l.use = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return s.installModule(e)
        }), s) : s.installModule.apply(s, [e].concat(t))
    }, Object.defineProperties(l, d);
    var m, g, b, w, y, x, T, E, S, C, M, P, z, k, $, h = {
            updateSize: function() {
                var e, t, i = this.$el;
                e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), n.extend(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t
                }))
            },
            updateSlides: function() {
                function v(t) {
                    return !e.cssMode || t !== d.length - 1
                }
                var e = this.params,
                    i = this.$wrapperEl,
                    s = this.size,
                    a = this.rtlTranslate,
                    r = this.wrongRTL,
                    o = this.virtual && e.virtual.enabled,
                    l = o ? this.virtual.slides.length : this.slides.length,
                    d = i.children("." + this.params.slideClass),
                    h = o ? this.virtual.slides.length : d.length,
                    p = [],
                    c = [],
                    u = [],
                    f = e.slidesOffsetBefore;
                "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
                var m = e.slidesOffsetAfter;
                "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
                var g = this.snapGrid.length,
                    b = this.snapGrid.length,
                    w = e.spaceBetween,
                    y = -f,
                    x = 0,
                    T = 0;
                if (void 0 !== s) {
                    var E, S;
                    "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), this.virtualSize = -w, d.css(a ? {
                        marginLeft: "",
                        marginTop: ""
                    } : {
                        marginRight: "",
                        marginBottom: ""
                    }), e.slidesPerColumn > 1 && (E = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
                    for (var C, M = e.slidesPerColumn, P = E / M, z = Math.floor(h / e.slidesPerColumn), k = 0; h > k; k += 1) {
                        S = 0;
                        var $ = d.eq(k);
                        if (e.slidesPerColumn > 1) {
                            var L = void 0,
                                I = void 0,
                                D = void 0;
                            if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                                var O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)),
                                    A = k - e.slidesPerColumn * e.slidesPerGroup * O,
                                    G = 0 === O ? e.slidesPerGroup : Math.min(Math.ceil((h - O * M * e.slidesPerGroup) / M), e.slidesPerGroup);
                                L = (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) + D * E / M, $.css({
                                    "-webkit-box-ordinal-group": L,
                                    "-moz-box-ordinal-group": L,
                                    "-ms-flex-order": L,
                                    "-webkit-order": L,
                                    order: L
                                })
                            } else "column" === e.slidesPerColumnFill ? (D = k - (I = Math.floor(k / M)) * M, (I > z || I === z && D === M - 1) && (D += 1) >= M && (D = 0, I += 1)) : I = k - (D = Math.floor(k / P)) * P;
                            $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px")
                        }
                        if ("none" !== $.css("display")) {
                            if ("auto" === e.slidesPerView) {
                                var B = t.getComputedStyle($[0], null),
                                    H = $[0].style.transform,
                                    N = $[0].style.webkitTransform;
                                if (H && ($[0].style.transform = "none"), N && ($[0].style.webkitTransform = "none"), e.roundLengths) S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
                                else if (this.isHorizontal()) {
                                    var X = parseFloat(B.getPropertyValue("width")),
                                        V = parseFloat(B.getPropertyValue("padding-left")),
                                        Y = parseFloat(B.getPropertyValue("padding-right")),
                                        F = parseFloat(B.getPropertyValue("margin-left")),
                                        W = parseFloat(B.getPropertyValue("margin-right")),
                                        R = B.getPropertyValue("box-sizing");
                                    S = R && "border-box" === R ? X + F + W : X + V + Y + F + W
                                } else {
                                    var q = parseFloat(B.getPropertyValue("height")),
                                        j = parseFloat(B.getPropertyValue("padding-top")),
                                        K = parseFloat(B.getPropertyValue("padding-bottom")),
                                        U = parseFloat(B.getPropertyValue("margin-top")),
                                        _ = parseFloat(B.getPropertyValue("margin-bottom")),
                                        Z = B.getPropertyValue("box-sizing");
                                    S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _
                                }
                                H && ($[0].style.transform = H), N && ($[0].style.webkitTransform = N), e.roundLengths && (S = Math.floor(S))
                            } else S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), d[k] && (this.isHorizontal() ? d[k].style.width = S + "px" : d[k].style.height = S + "px");
                            d[k] && (d[k].swiperSlideSize = S), u.push(S), e.centeredSlides ? (y = y + S / 2 + x / 2 + w, 0 === x && 0 !== k && (y = y - s / 2 - w), 0 === k && (y = y - s / 2 - w), Math.abs(y) < .001 && (y = 0), e.roundLengths && (y = Math.floor(y)), T % e.slidesPerGroup == 0 && p.push(y), c.push(y)) : (e.roundLengths && (y = Math.floor(y)), T % e.slidesPerGroup == 0 && p.push(y), c.push(y), y = y + S + w), this.virtualSize += S + w, x = S, T += 1
                        }
                    }
                    if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
                            width: this.virtualSize + e.spaceBetween + "px"
                        }), e.setWrapperSize && i.css(this.isHorizontal() ? {
                            width: this.virtualSize + e.spaceBetween + "px"
                        } : {
                            height: this.virtualSize + e.spaceBetween + "px"
                        }), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, i.css(this.isHorizontal() ? {
                            width: this.virtualSize + e.spaceBetween + "px"
                        } : {
                            height: this.virtualSize + e.spaceBetween + "px"
                        }), e.centeredSlides)) {
                        C = [];
                        for (var Q = 0; Q < p.length; Q += 1) {
                            var J = p[Q];
                            e.roundLengths && (J = Math.floor(J)), p[Q] < this.virtualSize + p[0] && C.push(J)
                        }
                        p = C
                    }
                    if (!e.centeredSlides) {
                        C = [];
                        for (var ee = 0; ee < p.length; ee += 1) {
                            var te = p[ee];
                            e.roundLengths && (te = Math.floor(te)), p[ee] <= this.virtualSize - s && C.push(te)
                        }
                        p = C, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s)
                    }
                    if (0 === p.length && (p = [0]), 0 !== e.spaceBetween && d.filter(v).css(this.isHorizontal() ? a ? {
                            marginLeft: w + "px"
                        } : {
                            marginRight: w + "px"
                        } : {
                            marginBottom: w + "px"
                        }), e.centeredSlides && e.centeredSlidesBounds) {
                        var ie = 0;
                        u.forEach(function(t) {
                            ie += t + (e.spaceBetween ? e.spaceBetween : 0)
                        });
                        var se = (ie -= e.spaceBetween) - s;
                        p = p.map(function(e) {
                            return 0 > e ? -f : e > se ? se + m : e
                        })
                    }
                    if (e.centerInsufficientSlides) {
                        var ae = 0;
                        if (u.forEach(function(t) {
                                ae += t + (e.spaceBetween ? e.spaceBetween : 0)
                            }), (ae -= e.spaceBetween) < s) {
                            var re = (s - ae) / 2;
                            p.forEach(function(e, t) {
                                p[t] = e - re
                            }), c.forEach(function(e, t) {
                                c[t] = e + re
                            })
                        }
                    }
                    n.extend(this, {
                        slides: d,
                        snapGrid: p,
                        slidesGrid: c,
                        slidesSizesGrid: u
                    }), h !== l && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), c.length !== b && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
                }
            },
            updateAutoHeight: function(e) {
                var t, i = [],
                    s = 0;
                if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                    for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                        var a = this.activeIndex + t;
                        if (a > this.slides.length) break;
                        i.push(this.slides.eq(a)[0])
                    } else i.push(this.slides.eq(this.activeIndex)[0]);
                for (t = 0; t < i.length; t += 1)
                    if (void 0 !== i[t]) {
                        var r = i[t].offsetHeight;
                        s = r > s ? r : s
                    }
                s && this.$wrapperEl.css("height", s + "px")
            },
            updateSlidesOffset: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
            },
            updateSlidesProgress: function(e) {
                void 0 === e && (e = this && this.translate || 0);
                var t = this.params,
                    i = this.slides,
                    a = this.rtlTranslate;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                    var r = -e;
                    a && (r = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                    for (var n = 0; n < i.length; n += 1) {
                        var o = i[n],
                            l = (r + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
                        if (t.watchSlidesVisibility) {
                            var d = -(r - o.swiperSlideOffset),
                                h = d + this.slidesSizesGrid[n];
                            (d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || 0 >= d && h >= this.size) && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(n), i.eq(n).addClass(t.slideVisibleClass))
                        }
                        o.progress = a ? -l : l
                    }
                    this.visibleSlides = s(this.visibleSlides)
                }
            },
            updateProgress: function(e) {
                if (void 0 === e) {
                    var t = this.rtlTranslate ? -1 : 1;
                    e = this && this.translate && this.translate * t || 0
                }
                var i = this.params,
                    s = this.maxTranslate() - this.minTranslate(),
                    a = this.progress,
                    r = this.isBeginning,
                    o = this.isEnd,
                    l = r,
                    d = o;
                0 === s ? (a = 0, r = !0, o = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, o = a >= 1), n.extend(this, {
                    progress: a,
                    isBeginning: r,
                    isEnd: o
                }), (i.watchSlidesProgress || i.watchSlidesVisibility) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), o && !d && this.emit("reachEnd toEdge"), (l && !r || d && !o) && this.emit("fromEdge"), this.emit("progress", a)
            },
            updateSlidesClasses: function() {
                var e, t = this.slides,
                    i = this.params,
                    s = this.$wrapperEl,
                    a = this.activeIndex,
                    r = this.realIndex,
                    n = this.virtual && i.virtual.enabled;
                t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
                var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
                var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
            },
            updateActiveIndex: function(e) {
                var t, i = this.rtlTranslate ? this.translate : -this.translate,
                    s = this.slidesGrid,
                    a = this.snapGrid,
                    r = this.params,
                    o = this.activeIndex,
                    l = this.realIndex,
                    d = this.snapIndex,
                    h = e;
                if (void 0 === h) {
                    for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                    r.normalizeSlideIndex && (0 > h || void 0 === h) && (h = 0)
                }
                if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1), h !== o) {
                    var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                    n.extend(this, {
                        snapIndex: t,
                        realIndex: c,
                        previousIndex: o,
                        activeIndex: h
                    }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== c && this.emit("realIndexChange"), (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange")
                } else t !== d && (this.snapIndex = t, this.emit("snapIndexChange"))
            },
            updateClickedSlide: function(e) {
                var t = this.params,
                    i = s(e.target).closest("." + t.slideClass)[0],
                    a = !1;
                if (i)
                    for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);
                return i && a ? (this.clickedSlide = i, this.clickedIndex = this.virtual && this.params.virtual.enabled ? parseInt(s(i).attr("data-swiper-slide-index"), 10) : s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide(), void 0) : (this.clickedSlide = void 0, void(this.clickedIndex = void 0))
            }
        },
        p = {
            getTranslate: function(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this.params,
                    i = this.rtlTranslate,
                    s = this.translate,
                    a = this.$wrapperEl;
                if (t.virtualTranslate) return i ? -s : s;
                if (t.cssMode) return s;
                var r = n.getTranslate(a[0], e);
                return i && (r = -r), r || 0
            },
            setTranslate: function(e, t) {
                var i = this.rtlTranslate,
                    s = this.params,
                    a = this.$wrapperEl,
                    r = this.wrapperEl,
                    n = this.progress,
                    o = 0,
                    l = 0;
                this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
                var d = this.maxTranslate() - this.minTranslate();
                (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, i, s, a) {
                var r;
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                var n = this,
                    o = n.params,
                    l = n.wrapperEl;
                if (n.animating && o.preventInteractionOnTransition) return !1;
                var d, h = n.minTranslate(),
                    p = n.maxTranslate();
                if (d = s && e > h ? h : s && p > e ? p : e, n.updateProgress(d), o.cssMode) {
                    var c = n.isHorizontal();
                    return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d, r.behavior = "smooth", r)) : l[c ? "scrollLeft" : "scrollTop"] = -d, !0
                }
                return 0 === t ? (n.setTransition(0), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                    n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
                }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0
            }
        },
        c = {
            setTransition: function(e, t) {
                this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
                void 0 === e && (e = !0);
                var i = this.activeIndex,
                    s = this.params,
                    a = this.previousIndex;
                if (!s.cssMode) {
                    s.autoHeight && this.updateAutoHeight();
                    var r = t;
                    if (r || (r = i > a ? "next" : a > i ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
                        if ("reset" === r) return void this.emit("slideResetTransitionStart");
                        this.emit("slideChangeTransitionStart"), this.emit("next" === r ? "slideNextTransitionStart" : "slidePrevTransitionStart")
                    }
                }
            },
            transitionEnd: function(e, t) {
                void 0 === e && (e = !0);
                var i = this.activeIndex,
                    s = this.previousIndex,
                    a = this.params;
                if (this.animating = !1, !a.cssMode) {
                    this.setTransition(0);
                    var r = t;
                    if (r || (r = i > s ? "next" : s > i ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                        if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                        this.emit("slideChangeTransitionEnd"), this.emit("next" === r ? "slideNextTransitionEnd" : "slidePrevTransitionEnd")
                    }
                }
            }
        },
        u = {
            slideTo: function(e, t, i, s) {
                var a;
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                var r = this,
                    n = e;
                0 > n && (n = 0);
                var o = r.params,
                    l = r.snapGrid,
                    d = r.slidesGrid,
                    h = r.previousIndex,
                    p = r.activeIndex,
                    c = r.rtlTranslate,
                    u = r.wrapperEl;
                if (r.animating && o.preventInteractionOnTransition) return !1;
                var v = Math.floor(n / o.slidesPerGroup);
                v >= l.length && (v = l.length - 1), (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
                var f, m = -l[v];
                if (r.updateProgress(m), o.normalizeSlideIndex)
                    for (var g = 0; g < d.length; g += 1) - Math.floor(100 * m) >= Math.floor(100 * d[g]) && (n = g);
                if (r.initialized && n !== p) {
                    if (!r.allowSlideNext && m < r.translate && m < r.minTranslate()) return !1;
                    if (!r.allowSlidePrev && m > r.translate && m > r.maxTranslate() && (p || 0) !== n) return !1
                }
                if (f = n > p ? "next" : p > n ? "prev" : "reset", c && -m === r.translate || !c && m === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(m), "reset" !== f && (r.transitionStart(i, f), r.transitionEnd(i, f)), !1;
                if (o.cssMode) {
                    var b = r.isHorizontal();
                    return 0 === t ? u[b ? "scrollLeft" : "scrollTop"] = -m : u.scrollTo ? u.scrollTo(((a = {})[b ? "left" : "top"] = -m, a.behavior = "smooth", a)) : u[b ? "scrollLeft" : "scrollTop"] = -m, !0
                }
                return 0 === t ? (r.setTransition(0), r.setTranslate(m), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, f), r.transitionEnd(i, f)) : (r.setTransition(t), r.setTranslate(m), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, f), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, f))
                }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0
            },
            slideToLoop: function(e, t, i, s) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                var a = e;
                return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
            },
            slideNext: function(e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var s = this.params,
                    a = this.animating;
                return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)
            },
            slidePrev: function(e, t, i) {
                function l(e) {
                    return 0 > e ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var s = this.params,
                    a = this.animating,
                    r = this.snapGrid,
                    n = this.slidesGrid,
                    o = this.rtlTranslate;
                if (s.loop) {
                    if (a) return !1;
                    this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                }
                var d, h = l(o ? this.translate : -this.translate),
                    p = r.map(function(e) {
                        return l(e)
                    }),
                    c = (n.map(function(e) {
                        return l(e)
                    }), r[p.indexOf(h)], r[p.indexOf(h) - 1]);
                return void 0 === c && s.cssMode && r.forEach(function(e) {
                    !c && h >= e && (c = e)
                }), void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i)
            },
            slideReset: function(e, t, i) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
            },
            slideToClosest: function(e, t, i, s) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
                var a = this.activeIndex,
                    r = Math.floor(a / this.params.slidesPerGroup),
                    n = this.rtlTranslate ? this.translate : -this.translate;
                if (n >= this.snapGrid[r]) {
                    var o = this.snapGrid[r];
                    n - o > (this.snapGrid[r + 1] - o) * s && (a += this.params.slidesPerGroup)
                } else {
                    var l = this.snapGrid[r - 1];
                    n - l <= (this.snapGrid[r] - l) * s && (a -= this.params.slidesPerGroup)
                }
                return a = Math.max(a, 0), a = Math.min(a, this.snapGrid.length - 1), this.slideTo(a, e, t, i)
            },
            slideToClickedSlide: function() {
                var e, t = this,
                    i = t.params,
                    a = t.$wrapperEl,
                    r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                    o = t.clickedIndex;
                if (i.loop) {
                    if (t.animating) return;
                    e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < t.loopedSlides - r / 2 || o > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick(function() {
                        t.slideTo(o)
                    })) : t.slideTo(o) : o > t.slides.length - r ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick(function() {
                        t.slideTo(o)
                    })) : t.slideTo(o)
                } else t.slideTo(o)
            }
        },
        v = {
            loopCreate: function() {
                var t = this,
                    i = t.params,
                    a = t.$wrapperEl;
                a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                var r = a.children("." + i.slideClass);
                if (i.loopFillGroupWithBlank) {
                    var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
                    if (n !== i.slidesPerGroup) {
                        for (var o = 0; n > o; o += 1) {
                            var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                            a.append(l)
                        }
                        r = a.children("." + i.slideClass)
                    }
                }
                "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
                var d = [],
                    h = [];
                r.each(function(e, i) {
                    var a = s(i);
                    e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e)
                });
                for (var p = 0; p < h.length; p += 1) a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
                for (var c = d.length - 1; c >= 0; c -= 1) a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
            },
            loopFix: function() {
                this.emit("beforeLoopFix");
                var e, t = this.activeIndex,
                    i = this.slides,
                    s = this.loopedSlides,
                    a = this.allowSlidePrev,
                    r = this.allowSlideNext,
                    n = this.snapGrid,
                    o = this.rtlTranslate;
                this.allowSlidePrev = !0, this.allowSlideNext = !0;
                var l = -n[t] - this.getTranslate();
                s > t ? (e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)) : t >= i.length - s && (e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)), this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix")
            },
            loopDestroy: function() {
                var e = this.$wrapperEl,
                    t = this.params,
                    i = this.slides;
                e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
            }
        },
        f = {
            setGrabCursor: function(e) {
                if (!(o.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                    var t = this.el;
                    t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                }
            },
            unsetGrabCursor: function() {
                o.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
            }
        },
        L = {
            appendSlide: function(e) {
                var t = this.$wrapperEl,
                    i = this.params;
                if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
                else t.append(e);
                i.loop && this.loopCreate(), i.observer && o.observer || this.update()
            },
            prependSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop && this.loopDestroy();
                var a = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                    a = s + e.length
                } else i.prepend(e);
                t.loop && this.loopCreate(), t.observer && o.observer || this.update(), this.slideTo(a, 0, !1)
            },
            addSlide: function(e, t) {
                var i = this.$wrapperEl,
                    s = this.params,
                    a = this.activeIndex;
                s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
                var r = this.slides.length;
                if (0 >= e) this.prependSlide(t);
                else if (e >= r) this.appendSlide(t);
                else {
                    for (var n = a > e ? a + 1 : a, l = [], d = r - 1; d >= e; d -= 1) {
                        var h = this.slides.eq(d);
                        h.remove(), l.unshift(h)
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
                        n = a > e ? a + t.length : a
                    } else i.append(t);
                    for (var c = 0; c < l.length; c += 1) i.append(l[c]);
                    s.loop && this.loopCreate(), s.observer && o.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
                }
            },
            removeSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
                var a, r = s;
                if ("object" == typeof e && "length" in e) {
                    for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), r > a && (r -= 1);
                    r = Math.max(r, 0)
                } else a = e, this.slides[a] && this.slides.eq(a).remove(), r > a && (r -= 1), r = Math.max(r, 0);
                t.loop && this.loopCreate(), t.observer && o.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        I = (m = t.navigator.platform, g = t.navigator.userAgent, b = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            edge: !1,
            ie: !1,
            firefox: !1,
            macos: !1,
            windows: !1,
            cordova: !(!t.cordova && !t.phonegap),
            phonegap: !(!t.cordova && !t.phonegap),
            electron: !1
        }, w = t.screen.width, y = t.screen.height, x = g.match(/(Android);?[\s\/]+([\d.]+)?/), T = g.match(/(iPad).*OS\s([\d_]+)/), E = g.match(/(iPod)(.*OS\s([\d_]+))?/), S = !T && g.match(/(iPhone\sOS|iOS)\s([\d_]+)/), C = g.indexOf("MSIE ") >= 0 || g.indexOf("Trident/") >= 0, M = g.indexOf("Edge/") >= 0, P = g.indexOf("Gecko/") >= 0 && g.indexOf("Firefox/") >= 0, z = "Win32" === m, k = g.toLowerCase().indexOf("electron") >= 0, $ = "MacIntel" === m, !T && $ && o.touch && (1024 === w && 1366 === y || 834 === w && 1194 === y || 834 === w && 1112 === y || 768 === w && 1024 === y) && (T = g.match(/(Version)\/([\d.]+)/), $ = !1), b.ie = C, b.edge = M, b.firefox = P, x && !z && (b.os = "android", b.osVersion = x[2], b.android = !0, b.androidChrome = g.toLowerCase().indexOf("chrome") >= 0), (T || S || E) && (b.os = "ios", b.ios = !0), S && !E && (b.osVersion = S[2].replace(/_/g, "."), b.iphone = !0), T && (b.osVersion = T[2].replace(/_/g, "."), b.ipad = !0), E && (b.osVersion = E[3] ? E[3].replace(/_/g, ".") : null, b.ipod = !0), b.ios && b.osVersion && g.indexOf("Version/") >= 0 && "10" === b.osVersion.split(".")[0] && (b.osVersion = g.toLowerCase().split("version/")[1].split(" ")[0]), b.webView = !(!(S || T || E) || !g.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone) || t.matchMedia && t.matchMedia("(display-mode: standalone)").matches, b.webview = b.webView, b.standalone = b.webView, b.desktop = !(b.ios || b.android) || k, b.desktop && (b.electron = k, b.macos = $, b.windows = z, b.macos && (b.os = "macos"), b.windows && (b.os = "windows")), b.pixelRatio = t.devicePixelRatio || 1, b),
        N = !1,
        V = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        Y = {
            update: h,
            translate: p,
            transition: c,
            slide: u,
            loop: v,
            grabCursor: f,
            manipulation: L,
            events: {
                attachEvents: function() {
                    var t = this.params,
                        i = this.touchEvents,
                        s = this.el,
                        a = this.wrapperEl;
                    this.onTouchStart = D.bind(this), this.onTouchMove = O.bind(this), this.onTouchEnd = A.bind(this), t.cssMode && (this.onScroll = H.bind(this)), this.onClick = B.bind(this);
                    var r = !!t.nested;
                    if (!o.touch && o.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, r), e.addEventListener(i.end, this.onTouchEnd, !1);
                    else {
                        if (o.touch) {
                            var n = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.addEventListener(i.start, this.onTouchStart, n), s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? {
                                passive: !1,
                                capture: r
                            } : r), s.addEventListener(i.end, this.onTouchEnd, n), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, n), N || (e.addEventListener("touchstart", X), N = !0)
                        }(t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, r), e.addEventListener("mouseup", this.onTouchEnd, !1))
                    }(t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0)
                },
                detachEvents: function() {
                    var t = this.params,
                        i = this.touchEvents,
                        s = this.el,
                        a = this.wrapperEl,
                        r = !!t.nested;
                    if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, r), e.removeEventListener(i.end, this.onTouchEnd, !1);
                    else {
                        if (o.touch) {
                            var n = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.removeEventListener(i.start, this.onTouchStart, n), s.removeEventListener(i.move, this.onTouchMove, r), s.removeEventListener(i.end, this.onTouchEnd, n), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, n)
                        }(t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, r), e.removeEventListener("mouseup", this.onTouchEnd, !1))
                    }(t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G)
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    var e = this.activeIndex,
                        t = this.initialized,
                        i = this.loopedSlides;
                    void 0 === i && (i = 0);
                    var s = this.params,
                        a = this.$el,
                        r = s.breakpoints;
                    if (r && (!r || 0 !== Object.keys(r).length)) {
                        var o = this.getBreakpoint(r);
                        if (o && this.currentBreakpoint !== o) {
                            var l = o in r ? r[o] : void 0;
                            l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerColumn"].forEach(function(e) {
                                var t = l[e];
                                void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                            });
                            var d = l || this.originalParams,
                                h = s.slidesPerColumn > 1,
                                p = d.slidesPerColumn > 1;
                            h && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !h && p && (a.addClass(s.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
                            var c = d.direction && d.direction !== s.direction,
                                u = s.loop && (d.slidesPerView !== s.slidesPerView || c);
                            c && t && this.changeDirection(), n.extend(this.params, d), n.extend(this, {
                                allowTouchMove: this.params.allowTouchMove,
                                allowSlideNext: this.params.allowSlideNext,
                                allowSlidePrev: this.params.allowSlidePrev
                            }), this.currentBreakpoint = o, u && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", d)
                        }
                    }
                },
                getBreakpoint: function(e) {
                    if (e) {
                        var i = !1,
                            s = [];
                        Object.keys(e).forEach(function(e) {
                            s.push(e)
                        }), s.sort(function(e, t) {
                            return parseInt(e, 10) - parseInt(t, 10)
                        });
                        for (var a = 0; a < s.length; a += 1) {
                            var r = s[a];
                            r <= t.innerWidth && (i = r)
                        }
                        return i || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    var e = this.params,
                        t = this.isLocked,
                        i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                    this.isLocked = e.slidesOffsetBefore && e.slidesOffsetAfter && i ? i <= this.size : 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var e = this.classNames,
                        t = this.params,
                        i = this.rtl,
                        s = this.$el,
                        a = [];
                    a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && (a.push("multirow"), "column" === t.slidesPerColumnFill && a.push("multirow-column")), I.android && a.push("android"), I.ios && a.push("ios"), t.cssMode && a.push("css-mode"), a.forEach(function(i) {
                        e.push(t.containerModifierClass + i)
                    }), s.addClass(e.join(" "))
                },
                removeClasses: function() {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, i, s, a, r, n) {
                    function l() {
                        n && n()
                    }
                    var o;
                    e.complete && r ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l()
                },
                preloadImages: function() {
                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    var e = this;
                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        F = {},
        W = function(e) {
            function t() {
                for (var i, a, r, l = [], d = arguments.length; d--;) l[d] = arguments[d];
                1 === l.length && l[0].constructor && l[0].constructor === Object ? r = l[0] : (a = (i = l)[0], r = i[1]), r || (r = {}), r = n.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(Y).forEach(function(e) {
                    Object.keys(Y[e]).forEach(function(i) {
                        t.prototype[i] || (t.prototype[i] = Y[e][i])
                    })
                });
                var h = this;
                void 0 === h.modules && (h.modules = {}), Object.keys(h.modules).forEach(function(e) {
                    var t = h.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0],
                            s = t.params[i];
                        if ("object" != typeof s || null === s) return;
                        if (!(i in r && "enabled" in s)) return;
                        !0 === r[i] && (r[i] = {
                            enabled: !0
                        }), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {
                            enabled: !1
                        })
                    }
                });
                var p = n.extend({}, V);
                h.useModulesParams(p), h.params = n.extend({}, p, F, r), h.originalParams = n.extend({}, h.params), h.passedParams = n.extend({}, r), h.$ = s;
                var c = s(h.params.el);
                if (a = c[0]) {
                    if (c.length > 1) {
                        var u = [];
                        return c.each(function(e, i) {
                            var s = n.extend({}, r, {
                                el: i
                            });
                            u.push(new t(s))
                        }), u
                    }
                    var v, f, m;
                    return a.swiper = h, c.data("swiper", h), a && a.shadowRoot && a.shadowRoot.querySelector ? (v = s(a.shadowRoot.querySelector("." + h.params.wrapperClass))).children = function(e) {
                        return c.children(e)
                    } : v = c.children("." + h.params.wrapperClass), n.extend(h, {
                        $el: c,
                        el: a,
                        $wrapperEl: v,
                        wrapperEl: v[0],
                        classNames: [],
                        slides: s(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function() {
                            return "horizontal" === h.params.direction
                        },
                        isVertical: function() {
                            return "vertical" === h.params.direction
                        },
                        rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
                        rtlTranslate: "horizontal" === h.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
                        wrongRTL: "-webkit-box" === v.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: h.params.allowSlideNext,
                        allowSlidePrev: h.params.allowSlidePrev,
                        touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"], m = ["mousedown", "mousemove", "mouseup"], o.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]), h.touchEventsTouch = {
                            start: f[0],
                            move: f[1],
                            end: f[2],
                            cancel: f[3]
                        }, h.touchEventsDesktop = {
                            start: m[0],
                            move: m[1],
                            end: m[2]
                        }, o.touch || !h.params.simulateTouch ? h.touchEventsTouch : h.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: n.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: h.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), h.useModules(), h.params.init && h.init(), h
                }
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var i = {
                extendedDefaults: {
                    configurable: !0
                },
                defaults: {
                    configurable: !0
                },
                Class: {
                    configurable: !0
                },
                $: {
                    configurable: !0
                }
            };
            return t.prototype.slidesPerViewDynamic = function() {
                var e = this.params,
                    t = this.slides,
                    i = this.slidesGrid,
                    s = this.size,
                    a = this.activeIndex,
                    r = 1;
                if (e.centeredSlides) {
                    for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
                    for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0))
                } else
                    for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
                return r
            }, t.prototype.update = function() {
                function s() {
                    var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                var e = this;
                if (e && !e.destroyed) {
                    var t = e.snapGrid,
                        i = e.params;
                    i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
            }, t.prototype.changeDirection = function(e, t) {
                void 0 === t && (t = !0);
                var i = this.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e ? this : (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e),
                    this.params.direction = e, this.slides.each(function(t, i) {
                        "vertical" === e ? i.style.width = "" : i.style.height = ""
                    }), this.emit("changeDirection"), t && this.update(), this)
            }, t.prototype.init = function() {
                this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
            }, t.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i = this,
                    s = i.params,
                    a = i.$el,
                    r = i.$wrapperEl,
                    o = i.slides;
                return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
                    i.off(e)
                }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), n.deleteProps(i)), i.destroyed = !0, null)
            }, t.extendDefaults = function(e) {
                n.extend(F, e)
            }, i.extendedDefaults.get = function() {
                return F
            }, i.defaults.get = function() {
                return V
            }, i.Class.get = function() {
                return e
            }, i.$.get = function() {
                return s
            }, Object.defineProperties(t, i), t
        }(l),
        R = {
            name: "device",
            proto: {
                device: I
            },
            "static": {
                device: I
            }
        },
        q = {
            name: "support",
            proto: {
                support: o
            },
            "static": {
                support: o
            }
        },
        j = {
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari: function() {
                var e = t.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        },
        K = {
            name: "browser",
            proto: {
                browser: j
            },
            "static": {
                browser: j
            }
        },
        U = {
            name: "resize",
            create: function() {
                var e = this;
                n.extend(e, {
                    resize: {
                        resizeHandler: function() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function() {
                    t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function() {
                    t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        _ = {
            func: t.MutationObserver || t.WebkitMutationObserver,
            attach: function(e, i) {
                void 0 === i && (i = {});
                var s = this,
                    a = new _.func(function(e) {
                        if (1 !== e.length) {
                            var i = function() {
                                s.emit("observerUpdate", e[0])
                            };
                            t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0)
                        } else s.emit("observerUpdate", e[0])
                    });
                a.observe(e, {
                    attributes: void 0 === i.attributes || i.attributes,
                    childList: void 0 === i.childList || i.childList,
                    characterData: void 0 === i.characterData || i.characterData
                }), s.observer.observers.push(a)
            },
            init: function() {
                if (o.observer && this.params.observer) {
                    if (this.params.observeParents)
                        for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], {
                        childList: this.params.observeSlideChildren
                    }), this.observer.attach(this.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                this.observer.observers.forEach(function(e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        },
        Z = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function() {
                n.extend(this, {
                    observer: {
                        init: _.init.bind(this),
                        attach: _.attach.bind(this),
                        destroy: _.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function() {
                    this.observer.init()
                },
                destroy: function() {
                    this.observer.destroy()
                }
            }
        },
        Q = {
            update: function(e) {
                function S() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                var t = this,
                    i = t.params,
                    s = i.slidesPerView,
                    a = i.slidesPerGroup,
                    r = i.centeredSlides,
                    o = t.params.virtual,
                    l = o.addSlidesBefore,
                    d = o.addSlidesAfter,
                    h = t.virtual,
                    p = h.from,
                    c = h.to,
                    u = h.slides,
                    v = h.slidesGrid,
                    f = h.renderSlide,
                    m = h.offset;
                t.updateActiveIndex();
                var g, b, w, y = t.activeIndex || 0;
                g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (b = Math.floor(s / 2) + a + l, w = Math.floor(s / 2) + a + d) : (b = s + (a - 1) + l, w = a + d);
                var x = Math.max((y || 0) - w, 0),
                    T = Math.min((y || 0) + b, u.length - 1),
                    E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
                if (n.extend(t.virtual, {
                        from: x,
                        to: T,
                        offset: E,
                        slidesGrid: t.slidesGrid
                    }), p === x && c === T && !e) return t.slidesGrid !== v && E !== m && t.slides.css(g, E + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: E,
                    from: x,
                    to: T,
                    slides: function() {
                        for (var e = [], t = x; T >= t; t += 1) e.push(u[t]);
                        return e
                    }()
                }), void S();
                var C = [],
                    M = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var P = p; c >= P; P += 1)(x > P || P > T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
                for (var z = 0; z < u.length; z += 1) z >= x && T >= z && (void 0 === c || e ? M.push(z) : (z > c && M.push(z), p > z && C.push(z)));
                M.forEach(function(e) {
                    t.$wrapperEl.append(f(u[e], e))
                }), C.sort(function(e, t) {
                    return t - e
                }).forEach(function(e) {
                    t.$wrapperEl.prepend(f(u[e], e))
                }), t.$wrapperEl.children(".swiper-slide").css(g, E + "px"), S()
            },
            renderSlide: function(e, t) {
                var i = this.params.virtual;
                if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                var a = s(i.renderSlide ? i.renderSlide.call(this, e, t) : '<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a
            },
            appendSlide: function(e) {
                if ("object" == typeof e && "length" in e)
                    for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                else this.virtual.slides.push(e);
                this.virtual.update(!0)
            },
            prependSlide: function(e) {
                var t = this.activeIndex,
                    i = t + 1,
                    s = 1;
                if (Array.isArray(e)) {
                    for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
                    i = t + e.length, s = e.length
                } else this.virtual.slides.unshift(e);
                if (this.params.virtual.cache) {
                    var r = this.virtual.cache,
                        n = {};
                    Object.keys(r).forEach(function(e) {
                        var t = r[e],
                            i = t.attr("data-swiper-slide-index");
                        i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t
                    }), this.virtual.cache = n
                }
                this.virtual.update(!0), this.slideTo(i, 0)
            },
            removeSlide: function(e) {
                if (null != e) {
                    var t = this.activeIndex;
                    if (Array.isArray(e))
                        for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
                    else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], t > e && (t -= 1), t = Math.max(t, 0);
                    this.virtual.update(!0), this.slideTo(t, 0)
                }
            },
            removeAllSlides: function() {
                this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
            }
        },
        J = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function() {
                n.extend(this, {
                    virtual: {
                        update: Q.update.bind(this),
                        appendSlide: Q.appendSlide.bind(this),
                        prependSlide: Q.prependSlide.bind(this),
                        removeSlide: Q.removeSlide.bind(this),
                        removeAllSlides: Q.removeAllSlides.bind(this),
                        renderSlide: Q.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if (this.params.virtual.enabled) {
                        this.classNames.push(this.params.containerModifierClass + "virtual");
                        var e = {
                            watchSlidesProgress: !0
                        };
                        n.extend(this.params, e), n.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update()
                    }
                },
                setTranslate: function() {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        },
        ee = {
            handle: function(i) {
                var s = this.rtlTranslate,
                    a = i;
                a.originalEvent && (a = a.originalEvent);
                var r = a.keyCode || a.charCode;
                if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r || 34 === r)) return !1;
                if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r || 33 === r)) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                    if (this.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
                        var n = !1;
                        if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                        var o = t.innerWidth,
                            l = t.innerHeight,
                            d = this.$el.offset();
                        s && (d.left -= this.$el[0].scrollLeft);
                        for (var h = [
                                [d.left, d.top],
                                [d.left + this.width, d.top],
                                [d.left, d.top + this.height],
                                [d.left + this.width, d.top + this.height]
                            ], p = 0; p < h.length; p += 1) {
                            var c = h[p];
                            c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0)
                        }
                        if (!n) return
                    }
                    this.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (34 !== r && 39 !== r || s) && (33 !== r && 37 !== r || !s) || this.slideNext(), (33 !== r && 37 !== r || s) && (34 !== r && 39 !== r || !s) || this.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 34 !== r && 40 !== r || this.slideNext(), 33 !== r && 38 !== r || this.slidePrev()), this.emit("keyPress", r)
                }
            },
            enable: function() {
                this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function() {
                this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        te = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0
                }
            },
            create: function() {
                n.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: ee.enable.bind(this),
                        disable: ee.disable.bind(this),
                        handle: ee.handle.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy: function() {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        },
        ie = {
            lastScrollTime: n.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: function() {
                return t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                    var t = "onwheel" in e;
                    if (!t) {
                        var i = e.createElement("div");
                        i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
                    }
                    return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
                }() ? "wheel" : "mousewheel"
            },
            normalize: function(e) {
                var t = 0,
                    i = 0,
                    s = 0,
                    a = 0;
                return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = 1 > s ? -1 : 1), a && !i && (i = 1 > a ? -1 : 1), {
                    spinX: t,
                    spinY: i,
                    pixelX: s,
                    pixelY: a
                }
            },
            handleMouseEnter: function() {
                this.mouseEntered = !0
            },
            handleMouseLeave: function() {
                this.mouseEntered = !1
            },
            handle: function(e) {
                var t = e,
                    i = this,
                    s = i.params.mousewheel;
                if (i.params.cssMode && t.preventDefault(), !i.mouseEntered && !s.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var a = 0,
                    r = i.rtlTranslate ? -1 : 1,
                    o = ie.normalize(t);
                if (s.forceToAxis)
                    if (i.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                        a = o.pixelX * r
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                        a = o.pixelY
                    }
                else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
                if (0 === a) return !0;
                if (s.invert && (a = -a), i.params.freeMode) {
                    var l = {
                            time: n.now(),
                            delta: Math.abs(a),
                            direction: Math.sign(a)
                        },
                        d = i.mousewheel.lastEventBeforeSnap,
                        h = d && l.time < d.time + 500 && l.delta <= d.delta && l.direction === d.direction;
                    if (!h) {
                        i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
                        var p = i.getTranslate() + a * s.sensitivity,
                            c = i.isBeginning,
                            u = i.isEnd;
                        if (p >= i.minTranslate() && (p = i.minTranslate()), p <= i.maxTranslate() && (p = i.maxTranslate()), i.setTransition(0), i.setTranslate(p), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!c && i.isBeginning || !u && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
                            clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
                            var v = i.mousewheel.recentWheelEvents;
                            v.length >= 15 && v.shift();
                            var f = v.length ? v[v.length - 1] : void 0,
                                m = v[0];
                            if (v.push(l), f && (l.delta > f.delta || l.direction !== f.direction)) v.splice(0);
                            else if (v.length >= 15 && l.time - m.time < 500 && m.delta - l.delta >= 1 && l.delta <= 6) {
                                var g = a > 0 ? .8 : .2;
                                i.mousewheel.lastEventBeforeSnap = l, v.splice(0), i.mousewheel.timeout = n.nextTick(function() {
                                    i.slideToClosest(i.params.speed, !0, void 0, g)
                                }, 0)
                            }
                            i.mousewheel.timeout || (i.mousewheel.timeout = n.nextTick(function() {
                                i.mousewheel.lastEventBeforeSnap = l, v.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
                            }, 500))
                        }
                        if (h || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), p === i.minTranslate() || p === i.maxTranslate()) return !0
                    }
                } else {
                    var b = {
                            time: n.now(),
                            delta: Math.abs(a),
                            direction: Math.sign(a),
                            raw: e
                        },
                        w = i.mousewheel.recentWheelEvents;
                    w.length >= 2 && w.shift();
                    var y = w.length ? w[w.length - 1] : void 0;
                    if (w.push(b), y ? (b.direction !== y.direction || b.delta > y.delta) && i.mousewheel.animateSlider(b) : i.mousewheel.animateSlider(b), i.mousewheel.releaseScroll(b)) return !0
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            animateSlider: function(e) {
                return e.delta >= 6 && n.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = (new t.Date).getTime(), !1)
            },
            releaseScroll: function(e) {
                var t = this.params.mousewheel;
                if (e.direction < 0) {
                    if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
                } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
                return !1
            },
            enable: function() {
                var e = ie.event();
                if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
                if (!e) return !1;
                if (this.mousewheel.enabled) return !1;
                var t = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
            },
            disable: function() {
                var e = ie.event();
                if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
                if (!e) return !1;
                if (!this.mousewheel.enabled) return !1;
                var t = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
            }
        },
        se = {
            update: function() {
                var e = this.params.navigation;
                if (!this.params.loop) {
                    var t = this.navigation,
                        i = t.$nextEl,
                        s = t.$prevEl;
                    s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                }
            },
            onPrevClick: function(e) {
                e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function(e) {
                e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function() {
                var e, t, i = this.params.navigation;
                (i.nextEl || i.prevEl) && (i.nextEl && (e = s(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = s(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), n.extend(this.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
            },
            destroy: function() {
                var e = this.navigation,
                    t = e.$nextEl,
                    i = e.$prevEl;
                t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
            }
        },
        ae = {
            update: function() {
                var e = this.rtl,
                    t = this.params.pagination;
                if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var i, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        r = this.pagination.$el,
                        n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                    if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), 0 > i && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                        var o, l, d, h = this.pagination.bullets;
                        if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each(function(e, a) {
                            var r = s(a),
                                n = r.index();
                            n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && l >= n && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                        });
                        else {
                            var p = h.eq(i),
                                c = p.index();
                            if (p.addClass(t.bulletActiveClass), t.dynamicBullets) {
                                for (var u = h.eq(o), v = h.eq(l), f = o; l >= f; f += 1) h.eq(f).addClass(t.bulletActiveClass + "-main");
                                if (this.params.loop)
                                    if (c >= h.length - t.dynamicMainBullets) {
                                        for (var m = t.dynamicMainBullets; m >= 0; m -= 1) h.eq(h.length - m).addClass(t.bulletActiveClass + "-main");
                                        h.eq(h.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
                                    } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                                else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                            }
                        }
                        if (t.dynamicBullets) {
                            var g = Math.min(h.length, t.dynamicMainBullets + 4),
                                b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                                w = e ? "right" : "left";
                            h.css(this.isHorizontal() ? w : "top", b + "px")
                        }
                    }
                    if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), r.find("." + t.totalClass).text(t.formatFractionTotal(n))), "progressbar" === t.type) {
                        var y;
                        y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                        var x = (i + 1) / n,
                            T = 1,
                            E = 1;
                        "horizontal" === y ? T = x : E = x, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + E + ")").transition(this.params.speed)
                    }
                    "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
                }
            },
            render: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        i = this.pagination.$el,
                        s = "";
                    if ("bullets" === e.type) {
                        for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; a > r; r += 1) s += e.renderBullet ? e.renderBullet.call(this, r, e.bulletClass) : "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                        i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
                    }
                    "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                }
            },
            init: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el) {
                    var i = s(t.el);
                    0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function(t) {
                        t.preventDefault();
                        var i = s(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                    }), n.extend(e.pagination, {
                        $el: i,
                        el: i[0]
                    }))
                }
            },
            destroy: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.pagination.$el;
                    t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
                }
            }
        },
        re = {
            setTranslate: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.rtlTranslate,
                        i = this.progress,
                        s = e.dragSize,
                        a = e.trackSize,
                        r = e.$dragEl,
                        n = e.$el,
                        o = this.params.scrollbar,
                        l = s,
                        d = (a - s) * i;
                    t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : 0 > d ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
                        n[0].style.opacity = 0, n.transition(400)
                    }, 1e3))
                }
            },
            setTransition: function(e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = e.$dragEl,
                        i = e.$el;
                    t[0].style.width = "", t[0].style.height = "";
                    var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        r = this.size / this.virtualSize,
                        o = r * (a / this.size);
                    s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), n.extend(e, {
                        trackSize: a,
                        divider: r,
                        moveDivider: o,
                        dragSize: s
                    }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                }
            },
            getPointerPosition: function(e) {
                return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
            },
            setDragPosition: function(e) {
                var t, i = this.scrollbar,
                    s = this.rtlTranslate,
                    a = i.$el,
                    r = i.dragSize,
                    n = i.trackSize,
                    o = i.dragStartPos;
                t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
                var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    a = i.$el,
                    r = i.$dragEl;
                this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this.scrollbar,
                    i = this.$wrapperEl,
                    s = t.$el,
                    a = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    a = i.$el;
                this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = n.nextTick(function() {
                    a.css("opacity", 0), a.transition(400)
                }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
            },
            enableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar,
                        i = this.touchEventsTouch,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        r = t.$el[0],
                        n = !(!o.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        l = !(!o.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    o.touch ? (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, l))
                }
            },
            disableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar,
                        i = this.touchEventsTouch,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        r = t.$el[0],
                        n = !(!o.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        l = !(!o.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    o.touch ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, l))
                }
            },
            init: function() {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.$el,
                        i = this.params.scrollbar,
                        a = s(i.el);
                    this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
                    var r = a.find("." + this.params.scrollbar.dragClass);
                    0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), n.extend(e, {
                        $el: a,
                        el: a[0],
                        $dragEl: r,
                        dragEl: r[0]
                    }), i.draggable && e.enableDraggable()
                }
            },
            destroy: function() {
                this.scrollbar.disableDraggable()
            }
        },
        ne = {
            setTransform: function(e, t) {
                var i = this.rtl,
                    a = s(e),
                    r = i ? -1 : 1,
                    n = a.attr("data-swiper-parallax") || "0",
                    o = a.attr("data-swiper-parallax-x"),
                    l = a.attr("data-swiper-parallax-y"),
                    d = a.attr("data-swiper-parallax-scale"),
                    h = a.attr("data-swiper-parallax-opacity");
                if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != h) {
                    var p = h - (h - 1) * (1 - Math.abs(t));
                    a[0].style.opacity = p
                }
                if (null == d) a.transform("translate3d(" + o + ", " + l + ", 0px)");
                else {
                    var c = d - (d - 1) * (1 - Math.abs(t));
                    a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
                }
            },
            setTranslate: function() {
                var e = this,
                    t = e.$el,
                    i = e.slides,
                    a = e.progress,
                    r = e.snapGrid;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t, i) {
                    e.parallax.setTransform(i, a)
                }), i.each(function(t, i) {
                    var n = i.progress;
                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t, i) {
                        e.parallax.setTransform(i, n)
                    })
                })
            },
            setTransition: function(e) {
                void 0 === e && (e = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t, i) {
                    var a = s(i),
                        r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (r = 0), a.transition(r)
                })
            }
        },
        oe = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    i = e.targetTouches[0].pageY,
                    s = e.targetTouches[1].pageX,
                    a = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
            },
            onGestureStart: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    a = i.gesture;
                if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !o.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureTouched = !0, a.scaleStart = oe.getDistanceBetweenTouches(e)
                }
                a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!o.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, s.scaleMove = oe.getDistanceBetweenTouches(e)
                }
                s.$imageEl && 0 !== s.$imageEl.length && (i.scale = o.gestures ? e.scale * i.currentScale : s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
            },
            onGestureEnd: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!o.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !I.android) return;
                    i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                }
                s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image;
                i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (I.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image,
                    a = t.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                    s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = n.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = n.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                    var r = s.width * t.scale,
                        o = s.height * t.scale;
                    if (!(r < i.slideWidth && o < i.slideHeight)) {
                        if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                            if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                            if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1);

                        }
                        e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    i = e.image,
                    s = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                    i.isTouched = !1, i.isMoved = !1;
                    var a = 300,
                        r = 300,
                        n = s.x * a,
                        o = i.currentX + n,
                        l = s.y * r,
                        d = i.currentY + l;
                    0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                    var h = Math.max(a, r);
                    i.currentX = o, i.currentY = d;
                    var p = i.width * e.scale,
                        c = i.height * e.scale;
                    i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t["in"](e)
            },
            "in": function(e) {
                var t, i, a, r, n, o, l, d, h, p, c, u, v, f, m, g, b = this.zoom,
                    w = this.params.zoom,
                    y = b.gesture,
                    x = b.image;
                y.$slideEl || (y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = y.$slideEl[0].offsetWidth, g = y.$slideEl[0].offsetHeight, a = y.$slideEl.offset().left + m / 2 - t, r = y.$slideEl.offset().top + g / 2 - i, l = y.$imageEl[0].offsetWidth, d = y.$imageEl[0].offsetHeight, h = l * b.scale, p = d * b.scale, v = -(c = Math.min(m / 2 - h / 2, 0)), f = -(u = Math.min(g / 2 - p / 2, 0)), (n = a * b.scale) < c && (n = c), n > v && (n = v), (o = r * b.scale) < u && (o = u), o > f && (o = f)) : (n = 0, o = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
            },
            out: function() {
                var e = this.zoom,
                    t = this.params.zoom,
                    i = e.gesture;
                i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
            },
            enable: function() {
                var e = this.zoom;
                if (!e.enabled) {
                    e.enabled = !0;
                    var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        i = !o.passiveListener || {
                            passive: !1,
                            capture: !0
                        };
                    o.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
                }
            },
            disable: function() {
                var e = this.zoom;
                if (e.enabled) {
                    this.zoom.enabled = !1;
                    var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        i = !o.passiveListener || {
                            passive: !1,
                            capture: !0
                        };
                    o.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
                }
            }
        },
        le = {
            loadInSlide: function(e, t) {
                void 0 === t && (t = !0);
                var i = this,
                    a = i.params.lazy;
                if (void 0 !== e && 0 !== i.slides.length) {
                    var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                        n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                    !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function(e, n) {
                        var o = s(n);
                        o.addClass(a.loadingClass);
                        var l = o.attr("data-background"),
                            d = o.attr("data-src"),
                            h = o.attr("data-srcset"),
                            p = o.attr("data-sizes");
                        i.loadImage(o[0], d || l, h, p, !1, function() {
                            if (null != i && i && (!i || i.params) && !i.destroyed) {
                                if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                                    var e = r.attr("data-swiper-slide-index");
                                    if (r.hasClass(i.params.slideDuplicateClass)) {
                                        var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                        i.lazy.loadInSlide(s.index(), !1)
                                    } else {
                                        var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        i.lazy.loadInSlide(n.index(), !1)
                                    }
                                }
                                i.emit("lazyImageReady", r[0], o[0])
                            }
                        }), i.emit("lazyImageLoad", r[0], o[0])
                    })
                }
            },
            load: function() {
                function d(e) {
                    if (n) {
                        if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (a[e]) return !0;
                    return !1
                }

                function h(e) {
                    return n ? s(e).attr("data-swiper-slide-index") : s(e).index()
                }
                var e = this,
                    t = e.$wrapperEl,
                    i = e.params,
                    a = e.slides,
                    r = e.activeIndex,
                    n = e.virtual && i.virtual.enabled,
                    o = i.lazy,
                    l = i.slidesPerView;
                if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function(t, i) {
                    var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
                    e.lazy.loadInSlide(a)
                });
                else if (l > 1)
                    for (var p = r; r + l > p; p += 1) d(p) && e.lazy.loadInSlide(p);
                else e.lazy.loadInSlide(r);
                if (o.loadPrevNext)
                    if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                        for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; v > m; m += 1) d(m) && e.lazy.loadInSlide(m);
                        for (var g = f; r > g; g += 1) d(g) && e.lazy.loadInSlide(g)
                    } else {
                        var b = t.children("." + i.slideNextClass);
                        b.length > 0 && e.lazy.loadInSlide(h(b));
                        var w = t.children("." + i.slidePrevClass);
                        w.length > 0 && e.lazy.loadInSlide(h(w))
                    }
            }
        },
        de = {
            LinearSpline: function(e, t) {
                var i, s, a, r, n, o = function(e, t) {
                    for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
                    return i
                };
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
                }, this
            },
            getInterpolateFunction: function(e) {
                this.controller.spline || (this.controller.spline = this.params.loop ? new de.LinearSpline(this.slidesGrid, e.slidesGrid) : new de.LinearSpline(this.snapGrid, e.snapGrid))
            },
            setTranslate: function(e, t) {
                function n(e) {
                    var t = a.rtlTranslate ? -a.translate : a.translate;
                    "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                var i, s, a = this,
                    r = a.controller.control;
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof W && n(r[o]);
                else r instanceof W && t !== r && n(r)
            },
            setTransition: function(e, t) {
                function r(t) {
                    t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && n.nextTick(function() {
                        t.updateAutoHeight()
                    }), t.$wrapperEl.transitionEnd(function() {
                        a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
                    }))
                }
                var i, s = this,
                    a = s.controller.control;
                if (Array.isArray(a))
                    for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof W && r(a[i]);
                else a instanceof W && t !== a && r(a)
            }
        },
        he = {
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"), e
            },
            addElRole: function(e, t) {
                return e.attr("role", t), e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t), e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function(e) {
                var t = this.params.a11y;
                if (13 === e.keyCode) {
                    var i = s(e.target);
                    this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.a11y.notify(this.isEnd ? t.lastSlideMessage : t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.a11y.notify(this.isBeginning ? t.firstSlideMessage : t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function() {
                if (!this.params.loop && this.navigation) {
                    var e = this.navigation,
                        t = e.$nextEl,
                        i = e.$prevEl;
                    i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
                }
            },
            updatePagination: function() {
                var e = this,
                    t = e.params.a11y;
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(i, a) {
                    var r = s(a);
                    e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
                })
            },
            init: function() {
                this.$el.append(this.a11y.liveRegion);
                var e, t, i = this.params.a11y;
                this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            },
            destroy: function() {
                var e, t;
                this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            }
        },
        pe = {
            init: function() {
                if (this.params.history) {
                    if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                    var e = this.history;
                    e.initialized = !0, e.paths = pe.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
                }
            },
            destroy: function() {
                this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                this.history.paths = pe.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function() {
                var e = t.location.pathname.slice(1).split("/").filter(function(e) {
                        return "" !== e
                    }),
                    i = e.length;
                return {
                    key: e[i - 2],
                    value: e[i - 1]
                }
            },
            setHistory: function(e, i) {
                if (this.history.initialized && this.params.history.enabled) {
                    var s = this.slides.eq(i),
                        a = pe.slugify(s.attr("data-history"));
                    t.location.pathname.includes(e) || (a = e + "/" + a);
                    var r = t.history.state;
                    r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({
                        value: a
                    }, null, a) : t.history.pushState({
                        value: a
                    }, null, a))
                }
            },
            slugify: function(e) {
                return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, i) {
                if (t)
                    for (var s = 0, a = this.slides.length; a > s; s += 1) {
                        var r = this.slides.eq(s);
                        if (pe.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                            var n = r.index();
                            this.slideTo(n, e, i)
                        }
                    } else this.slideTo(0, e, i)
            }
        },
        ce = {
            onHashCange: function() {
                var t = e.location.hash.replace("#", "");
                if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                    var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                    if (void 0 === i) return;
                    this.slideTo(i)
                }
            },
            setHash: function() {
                if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                    if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                    else {
                        var i = this.slides.eq(this.activeIndex),
                            s = i.attr("data-hash") || i.attr("data-history");
                        e.location.hash = s || ""
                    }
            },
            init: function() {
                if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                    this.hashNavigation.initialized = !0;
                    var i = e.location.hash.replace("#", "");
                    if (i)
                        for (var a = 0, r = this.slides.length; r > a; a += 1) {
                            var n = this.slides.eq(a);
                            if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                                var o = n.index();
                                this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                            }
                        }
                    this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange)
                }
            },
            destroy: function() {
                this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        ue = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = n.nextTick(function() {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
                }, i)
            },
            start: function() {
                return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
            },
            stop: function() {
                return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
            },
            pause: function(e) {
                this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
            }
        },
        ve = {
            setTranslate: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var i = this.slides.eq(t),
                        s = -i[0].swiperSlideOffset;
                    this.params.virtualTranslate || (s -= this.translate);
                    var a = 0;
                    this.isHorizontal() || (a = s, s = 0);
                    var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: r
                    }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    s = t.$wrapperEl;
                if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                    var a = !1;
                    i.transitionEnd(function() {
                        if (!a && t && !t.destroyed) {
                            a = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
                        }
                    })
                }
            }
        },
        fe = {
            setTranslate: function() {
                var e, t = this.$el,
                    i = this.$wrapperEl,
                    a = this.slides,
                    r = this.width,
                    n = this.height,
                    o = this.rtlTranslate,
                    l = this.size,
                    d = this.params.cubeEffect,
                    h = this.isHorizontal(),
                    p = this.virtual && this.params.virtual.enabled,
                    c = 0;
                d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                    height: r + "px"
                })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));
                for (var u = 0; u < a.length; u += 1) {
                    var v = a.eq(u),
                        f = u;
                    p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var m = 90 * f,
                        g = Math.floor(m / 360);
                    o && (m = -m, g = Math.floor(-m / 360));
                    var b = Math.max(Math.min(v[0].progress, 1), -1),
                        w = 0,
                        y = 0,
                        x = 0;
                    f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
                    var T = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                    if (1 >= b && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
                        var E = v.find(h ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                            S = v.find(h ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                        0 === E.length && (E = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
                    }
                }
                if (i.css({
                        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                        "transform-origin": "50% 50% -" + l / 2 + "px"
                    }), d.shadow)
                    if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                    else {
                        var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                            M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
                            P = d.shadowScale,
                            z = d.shadowScale / M,
                            k = d.shadowOffset;
                        e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / z + "px) rotateX(-90deg)")
                    }
                var $ = j.isSafari || j.isUiWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        me = {
            setTranslate: function() {
                for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                    var a = e.eq(i),
                        r = a[0].progress;
                    this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                    var n = -180 * r,
                        o = 0,
                        l = -a[0].swiperSlideOffset,
                        d = 0;
                    if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
                        var h = a.find(this.isHorizontal() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                            p = a.find(this.isHorizontal() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                        0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0))
                    }
                    a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    s = t.activeIndex,
                    a = t.$wrapperEl;
                if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    i.eq(s).transitionEnd(function() {
                        if (!r && t && !t.destroyed) {
                            r = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
                        }
                    })
                }
            }
        },
        ge = {
            setTranslate: function() {
                for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, l = this.isHorizontal(), d = this.translate, h = l ? e / 2 - d : t / 2 - d, p = l ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; v > u; u += 1) {
                    var f = i.eq(u),
                        m = r[u],
                        g = (h - f[0].swiperSlideOffset - m / 2) / m * n.modifier,
                        b = l ? p * g : 0,
                        w = l ? 0 : p * g,
                        y = -c * Math.abs(g),
                        x = l ? 0 : n.stretch * g,
                        T = l ? n.stretch * g : 0;
                    Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
                    var E = "translate3d(" + T + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                    if (f.transform(E), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
                        var S = f.find(l ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                            C = f.find(l ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                        0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), f.append(S)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), f.append(C)), S.length && (S[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0)
                    }
                }(o.pointerEvents || o.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = h + "px 50%")
            },
            setTransition: function(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        be = {
            init: function() {
                var e = this.params.thumbs,
                    t = this.constructor;
                e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, n.extend(this.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), n.extend(this.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : n.isObject(e.swiper) && (this.thumbs.swiper = new t(n.extend({}, e.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
            },
            onThumbClick: function() {
                var e = this.thumbs.swiper;
                if (e) {
                    var t = e.clickedIndex,
                        i = e.clickedSlide;
                    if (!(i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                        var a;
                        if (a = e.params.loop ? parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
                            var r = this.activeIndex;
                            this.slides.eq(r).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, r = this.activeIndex);
                            var n = this.slides.eq(r).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
                                o = this.slides.eq(r).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
                            a = void 0 === n ? o : void 0 === o ? n : r - n > o - r ? o : n
                        }
                        this.slideTo(a)
                    }
                }
            },
            update: function(e) {
                var t = this.thumbs.swiper;
                if (t) {
                    var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
                    if (this.realIndex !== t.realIndex) {
                        var s, a = t.activeIndex;
                        if (t.params.loop) {
                            t.slides.eq(a).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, a = t.activeIndex);
                            var r = t.slides.eq(a).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                                n = t.slides.eq(a).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                            s = void 0 === r ? n : void 0 === n ? r : n - a == a - r ? a : a - r > n - a ? n : r
                        } else s = this.realIndex;
                        t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(s) < 0 && (t.params.centeredSlides ? s = s > a ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > a && (s = s - i + 1), t.slideTo(s, e ? 0 : void 0))
                    }
                    var o = 1,
                        l = this.params.thumbs.slideThumbActiveClass;
                    if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (o = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (o = 1), o = Math.floor(o), t.slides.removeClass(l), t.params.loop || t.params.virtual && t.params.virtual.enabled)
                        for (var d = 0; o > d; d += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + d) + '"]').addClass(l);
                    else
                        for (var h = 0; o > h; h += 1) t.slides.eq(this.realIndex + h).addClass(l)
                }
            }
        },
        we = [R, q, K, U, Z, J, te, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function() {
                n.extend(this, {
                    mousewheel: {
                        enabled: !1,
                        enable: ie.enable.bind(this),
                        disable: ie.disable.bind(this),
                        handle: ie.handle.bind(this),
                        handleMouseEnter: ie.handleMouseEnter.bind(this),
                        handleMouseLeave: ie.handleMouseLeave.bind(this),
                        animateSlider: ie.animateSlider.bind(this),
                        releaseScroll: ie.releaseScroll.bind(this),
                        lastScrollTime: n.now(),
                        lastEventBeforeSnap: void 0,
                        recentWheelEvents: []
                    }
                })
            },
            on: {
                init: function() {
                    !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function() {
                    this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                n.extend(this, {
                    navigation: {
                        init: se.init.bind(this),
                        update: se.update.bind(this),
                        destroy: se.destroy.bind(this),
                        onNextClick: se.onNextClick.bind(this),
                        onPrevClick: se.onPrevClick.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.navigation.init(), this.navigation.update()
                },
                toEdge: function() {
                    this.navigation.update()
                },
                fromEdge: function() {
                    this.navigation.update()
                },
                destroy: function() {
                    this.navigation.destroy()
                },
                click: function(e) {
                    var t, i = this.navigation,
                        a = i.$nextEl,
                        r = i.$prevEl;
                    !this.params.navigation.hideOnClick || s(e.target).is(r) || s(e.target).is(a) || (a ? t = a.hasClass(this.params.navigation.hiddenClass) : r && (t = r.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), a && a.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e) {
                        return e
                    },
                    formatFractionTotal: function(e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                n.extend(this, {
                    pagination: {
                        init: ae.init.bind(this),
                        render: ae.render.bind(this),
                        update: ae.update.bind(this),
                        destroy: ae.destroy.bind(this),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init: function() {
                    this.pagination.init(), this.pagination.render(), this.pagination.update()
                },
                activeIndexChange: function() {
                    this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                },
                snapIndexChange: function() {
                    this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function() {
                    this.params.loop && (this.pagination.render(), this.pagination.update())
                },
                snapGridLengthChange: function() {
                    this.params.loop || (this.pagination.render(), this.pagination.update())
                },
                destroy: function() {
                    this.pagination.destroy()
                },
                click: function(e) {
                    this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                n.extend(this, {
                    scrollbar: {
                        init: re.init.bind(this),
                        destroy: re.destroy.bind(this),
                        updateSize: re.updateSize.bind(this),
                        setTranslate: re.setTranslate.bind(this),
                        setTransition: re.setTransition.bind(this),
                        enableDraggable: re.enableDraggable.bind(this),
                        disableDraggable: re.disableDraggable.bind(this),
                        setDragPosition: re.setDragPosition.bind(this),
                        getPointerPosition: re.getPointerPosition.bind(this),
                        onDragStart: re.onDragStart.bind(this),
                        onDragMove: re.onDragMove.bind(this),
                        onDragEnd: re.onDragEnd.bind(this),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function() {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                },
                update: function() {
                    this.scrollbar.updateSize()
                },
                resize: function() {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function() {
                    this.scrollbar.updateSize()
                },
                setTranslate: function() {
                    this.scrollbar.setTranslate()
                },
                setTransition: function(e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function() {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                n.extend(this, {
                    parallax: {
                        setTransform: ne.setTransform.bind(this),
                        setTranslate: ne.setTranslate.bind(this),
                        setTransition: ne.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                init: function() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTranslate: function() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTransition: function(e) {
                    this.params.parallax.enabled && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var e = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) {
                    t[i] = oe[i].bind(e)
                }), n.extend(e, {
                    zoom: t
                });
                var i = 1;
                Object.defineProperty(e.zoom, "scale", {
                    get: function() {
                        return i
                    },
                    set: function(t) {
                        if (i !== t) {
                            var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                            e.emit("zoomChange", t, s, a)
                        }
                        i = t
                    }
                })
            },
            on: {
                init: function() {
                    this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function() {
                    this.zoom.disable()
                },
                touchStart: function(e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd: function(e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap: function(e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                },
                transitionEnd: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                },
                slideChange: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                n.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: le.load.bind(this),
                        loadInSlide: le.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                },
                init: function() {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                },
                scroll: function() {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                },
                resize: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function() {
                    this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                },
                transitionEnd: function() {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                },
                slideChange: function() {
                    this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                n.extend(this, {
                    controller: {
                        control: this.params.controller.control,
                        getInterpolateFunction: de.getInterpolateFunction.bind(this),
                        setTranslate: de.setTranslate.bind(this),
                        setTransition: de.setTransition.bind(this)
                    }
                })
            },
            on: {
                update: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                resize: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                observerUpdate: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                setTranslate: function(e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition: function(e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function() {
                var e = this;
                n.extend(e, {
                    a11y: {
                        liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(he).forEach(function(t) {
                    e.a11y[t] = he[t].bind(e)
                })
            },
            on: {
                init: function() {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                },
                toEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function() {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function() {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                n.extend(this, {
                    history: {
                        init: pe.init.bind(this),
                        setHistory: pe.setHistory.bind(this),
                        setHistoryPopState: pe.setHistoryPopState.bind(this),
                        scrollToSlide: pe.scrollToSlide.bind(this),
                        destroy: pe.destroy.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.history.enabled && this.history.init()
                },
                destroy: function() {
                    this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function() {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                },
                slideChange: function() {
                    this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                n.extend(this, {
                    hashNavigation: {
                        initialized: !1,
                        init: ce.init.bind(this),
                        destroy: ce.destroy.bind(this),
                        setHash: ce.setHash.bind(this),
                        onHashCange: ce.onHashCange.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd: function() {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                },
                slideChange: function() {
                    this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function() {
                var e = this;
                n.extend(e, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: ue.run.bind(e),
                        start: ue.start.bind(e),
                        stop: ue.stop.bind(e),
                        pause: ue.pause.bind(e),
                        onVisibilityChange: function() {
                            "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
                        },
                        onTransitionEnd: function(t) {
                            e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init: function() {
                    this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
                },
                beforeTransitionStart: function(e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                },
                sliderFirstMove: function() {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                },
                touchEnd: function() {
                    this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
                },
                destroy: function() {
                    this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                n.extend(this, {
                    fadeEffect: {
                        setTranslate: ve.setTranslate.bind(this),
                        setTransition: ve.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("fade" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "fade");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        n.extend(this.params, e), n.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                n.extend(this, {
                    cubeEffect: {
                        setTranslate: fe.setTranslate.bind(this),
                        setTransition: fe.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("cube" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        n.extend(this.params, e), n.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                n.extend(this, {
                    flipEffect: {
                        setTranslate: me.setTranslate.bind(this),
                        setTransition: me.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("flip" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        n.extend(this.params, e), n.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition: function(e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                n.extend(this, {
                    coverflowEffect: {
                        setTranslate: ge.setTranslate.bind(this),
                        setTransition: ge.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function() {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition: function(e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    multipleActiveThumbs: !0,
                    swiper: null,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function() {
                n.extend(this, {
                    thumbs: {
                        swiper: null,
                        init: be.init.bind(this),
                        update: be.update.bind(this),
                        onThumbClick: be.onThumbClick.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this.params.thumbs;
                    e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                },
                slideChange: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                update: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                resize: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                observerUpdate: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                setTransition: function(e) {
                    var t = this.thumbs.swiper;
                    t && t.setTransition(e)
                },
                beforeDestroy: function() {
                    var e = this.thumbs.swiper;
                    e && this.thumbs.swiperCreated && e && e.destroy()
                }
            }
        }];
    return void 0 === W.use && (W.use = W.Class.use, W.installModule = W.Class.installModule), W.use(we), W
}), ! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";

    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function n(t) {
        return "string" == typeof t
    }

    function o(t) {
        return "function" == typeof t
    }

    function p(t) {
        return "number" == typeof t
    }

    function q(t) {
        return void 0 === t
    }

    function r(t) {
        return "object" == typeof t
    }

    function s(t) {
        return !1 !== t
    }

    function t() {
        return "undefined" != typeof window
    }

    function u(t) {
        return o(t) || n(t)
    }

    function K(t) {
        return (l = mt(t, ot)) && ae
    }

    function L(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function M(t, e) {
        return !e && console.warn(t)
    }

    function N(t, e) {
        return t && (ot[t] = e) && l && (l[t] = e) || ot
    }

    function O() {
        return 0
    }

    function Y(t) {
        var e, i, n = t[0];
        if (r(n) || o(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
            for (i = _t.length; i-- && !_t[i].targetTest(n););
            e = _t[i]
        }
        for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new It(t[i], e))) || t.splice(i, 1);
        return t
    }

    function Z(t) {
        return t._gsap || Y(bt(t))[0]._gsap
    }

    function $(t, e, r) {
        return (r = t[e]) && o(r) ? t[e]() : q(r) && t.getAttribute && t.getAttribute(e) || r
    }

    function _(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function aa(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function ba(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
        return r > i
    }

    function ca(t, e, r) {
        var i, n = p(t[1]),
            a = (n ? 2 : 1) + (2 > e ? 0 : 1),
            o = t[a];
        if (n && (o.duration = t[1]), o.parent = r, e) {
            for (i = o; r && !("immediateRender" in i);) i = r.vars.defaults || {}, r = s(r.vars.inherit) && r.parent;
            o.immediateRender = s(i.immediateRender), 2 > e ? o.runBackwards = 1 : o.startAt = t[a - 1]
        }
        return o
    }

    function da() {
        var t, e, r = ht.length,
            i = ht.slice(0);
        for (lt = {}, t = ht.length = 0; r > t; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function ea(t, e, r, i) {
        ht.length && da(), t.render(e, r, i), ht.length && da()
    }

    function fa(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(st).length < 2 ? e : n(t) ? t.trim() : t
    }

    function ga(t) {
        return t
    }

    function ha(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    }

    function ia(t, e) {
        for (var r in e) r in t || "duration" === r || "ease" === r || (t[r] = e[r])
    }

    function ka(t, e) {
        for (var i in e) t[i] = r(e[i]) ? ka(t[i] || (t[i] = {}), e[i]) : e[i];
        return t
    }

    function la(t, e) {
        var r, i = {};
        for (r in t) r in e || (i[r] = t[r]);
        return i
    }

    function ma(t) {
        var e = t.parent || E,
            r = t.keyframes ? ia : ha;
        if (s(t.inherit))
            for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    }

    function pa(t, e, r, i) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var n = e._prev,
            a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
    }

    function qa(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
    }

    function ra(t, e) {
        if (!e || e._end > t._dur || e._start < 0)
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    }

    function ua(t) {
        return t._repeat ? gt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function wa(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function xa(t) {
        return t._end = aa(t._start + (t._tDur / Math.abs(t._ts || t._rts || U) || 0))
    }

    function ya(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = aa(t._dp._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), xa(t), r._dirty || ra(r, t)), t
    }

    function za(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = wa(t.rawTime(), e), (!e._dur || yt(0, e.totalDuration(), r) - e._tTime > U) && e.render(r, !0)), ra(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -U
        }
    }

    function Aa(t, e, r, i) {
        return e.parent && qa(e), e._start = aa(r + e._delay), e._end = aa(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
            function(t, e, r, i, n) {
                void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
                var a, s = t[i];
                if (n)
                    for (a = e[n]; s && s[n] > a;) s = s._prev;
                s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t
            }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, i || za(t, e), t
    }

    function Ba(t, e) {
        return (ot.ScrollTrigger || L("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }

    function Ca(t, e, r, i) {
        return Nt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && d !== At.frame ? (ht.push(t), t._lazy = [e, i], 1) : void 0 : 1
    }

    function Fa(t, e, r, i) {
        var n = t._repeat,
            a = aa(e) || 0,
            s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? 0 > n ? 1e10 : aa(a * (n + 1) + t._rDelay * n) : a, s && !i ? ya(t, t._tTime = t._tDur * s) : t.parent && xa(t), r || ra(t.parent, t), t
    }

    function Ga(t) {
        return t instanceof Bt ? ra(t) : Fa(t, t._dur)
    }

    function Ia(t, e) {
        var r, i, a = t.labels,
            s = t._recent || vt,
            o = t.duration() >= B ? s.endTime(!1) : t._dur;
        return n(e) && (isNaN(e) || e in a) ? "<" === (r = e.charAt(0)) || ">" === r ? ("<" === r ? s._start : s.endTime(0 <= s._repeat)) + (parseFloat(e.substr(1)) || 0) : (r = e.indexOf("=")) < 0 ? (e in a || (a[e] = o), a[e]) : (i = +(e.charAt(r - 1) + e.substr(r + 1)), r > 1 ? Ia(t, e.substr(0, r - 1)) + i : o + i) : null == e ? o : +e
    }

    function Ja(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function La(t) {
        return (t + "").substr((parseFloat(t) + "").length)
    }

    function Oa(t, e) {
        return t && r(t) && "length" in t && (!e && !t.length || t.length - 1 in t && r(t[0])) && !t.nodeType && t !== i
    }

    function Ra(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }

    function Sa(t) {
        if (o(t)) return t;
        var _ = r(t) ? t : {
                each: t
            },
            c = Rt(_.ease),
            m = _.from || 0,
            g = parseFloat(_.base) || 0,
            v = {},
            e = m > 0 && 1 > m,
            y = isNaN(m) || e,
            T = _.axis,
            b = m,
            w = m;
        return n(m) ? b = w = {
                center: .5,
                edges: .5,
                end: 1
            }[m] || 0 : !e && y && (b = m[0], w = m[1]),
            function(t, e, r) {
                var i, n, a, s, o, u, h, l, f, d = (r || _).length,
                    p = v[d];
                if (!p) {
                    if (!(f = "auto" === _.grid ? 0 : (_.grid || [1, B])[1])) {
                        for (h = -B; h < (h = r[f++].getBoundingClientRect().left) && d > f;);
                        f--
                    }
                    for (p = v[d] = [], i = y ? Math.min(f, d) * b - .5 : m % f, n = y ? d * w / f - .5 : m / f | 0, l = B, u = h = 0; d > u; u++) a = u % f - i, s = n - (u / f | 0), p[u] = o = T ? Math.abs("y" === T ? s : a) : J(a * a + s * s), o > h && (h = o), l > o && (l = o);
                    "random" === m && Ra(p), p.max = h - l, p.min = l, p.v = d = (parseFloat(_.amount) || parseFloat(_.each) * (f > d ? d - 1 : T ? "y" === T ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1), p.b = 0 > d ? g - d : g, p.u = La(_.amount || _.each) || 0, c = c && 0 > d ? Ft(c) : c
                }
                return d = (p[t] - p.min) / p.max || 0, aa(p.b + (c ? c(d) : d) * p.v) + p.u
            }
    }

    function Ta(e) {
        var r = 1 > e ? Math.pow(10, (e + "").length - 2) : 1;
        return function(t) {
            return Math.floor(Math.round(parseFloat(t) / e) * e * r) / r + (p(t) ? 0 : La(t))
        }
    }

    function Ua(u, t) {
        var h, l, e = tt(u);
        return !e && r(u) && (h = e = u.radius || B, u.values ? (u = bt(u.values), (l = !p(u[0])) && (h *= h)) : u = Ta(u.increment)), Ja(t, e ? o(u) ? function(t) {
            return l = u(t), Math.abs(l - t) <= h ? l : t
        } : function(t) {
            for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = B, s = 0, o = u.length; o--;)(e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, s = o);
            return s = !h || h >= a ? u[s] : t, l || s === t || p(t) ? s : s + La(t)
        } : Ta(u))
    }

    function Va(t, e, r, i) {
        return Ja(tt(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return tt(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = 1 > r ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / r) * r * i) / i
        })
    }

    function Za(e, r, t) {
        return Ja(t, function(t) {
            return e[~~r(t)]
        })
    }

    function ab(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? st : et), s += t.substr(a, e - a) + Va(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
        return s + t.substr(a, t.length - a)
    }

    function db(t, e, r) {
        var i, n, a, s = t.labels,
            o = B;
        for (i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
        return a
    }

    function fb(t) {
        return qa(t), t.progress() < 1 && xt(t, "onInterrupt"), t
    }

    function kb(t, e, r) {
        return (6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : .5 > t ? r : 2 > 3 * t ? e + (r - e) * (2 / 3 - t) * 6 : e) * kt + .5 | 0
    }

    function lb(t, e, r) {
        var i, n, a, s, o, u, h, l, f, d, _ = t ? p(t) ? [t >> 16, t >> 8 & kt, t & kt] : 0 : Ot.black;
        if (!_) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Ot[t]) _ = Ot[t];
            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a), _ = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & kt, t & kt];
            else if ("hsl" === t.substr(0, 3))
                if (_ = d = t.match(et), e) {
                    if (~t.indexOf("=")) return _ = t.match(rt), r && _.length < 4 && (_[3] = 1), _
                } else s = +_[0] % 360 / 360, o = _[1] / 100, i = 2 * (u = _[2] / 100) - (n = .5 >= u ? u * (o + 1) : u + o - u * o), 3 < _.length && (_[3] *= 1), _[0] = kb(s + 1 / 3, i, n), _[1] = kb(s, i, n), _[2] = kb(s - 1 / 3, i, n);
            else _ = t.match(et) || Ot.transparent;
            _ = _.map(Number)
        }
        return e && !d && (i = _[0] / kt, n = _[1] / kt, a = _[2] / kt, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s = o = 0 : (f = h - l, o = u > .5 ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (a > n ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s *= 60), _[0] = ~~(s + .5), _[1] = ~~(100 * o + .5), _[2] = ~~(100 * u + .5)), r && _.length < 4 && (_[3] = 1), _
    }

    function mb(t) {
        var r = [],
            i = [],
            n = -1;
        return t.split(Mt).forEach(function(t) {
            var e = t.match(it) || [];
            r.push.apply(r, e), i.push(n += e.length + 1)
        }), r.c = i, r
    }

    function nb(t, e, r) {
        var i, n, a, s, o = "",
            u = (t + o).match(Mt),
            h = e ? "hsla(" : "rgba(",
            l = 0;
        if (!u) return t;
        if (u = u.map(function(t) {
                return (t = lb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), r && (a = mb(t), (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(Mt, "1").split(it)).length - 1; s > l; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n)
            for (s = (n = t.split(Mt)).length - 1; s > l; l++) o += n[l] + u[l];
        return o + n[s]
    }

    function qb(t) {
        var e, r = t.join(" ");
        return Mt.lastIndex = 0, Mt.test(r) ? (e = Ct.test(r), t[1] = nb(t[1], e), t[0] = nb(t[0], e, mb(t[1])), !0) : void 0
    }

    function zb(t) {
        var e = (t + "").split("("),
            r = Dt[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; u > o; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(zt, "").trim() : +i, s = r.substr(e + 1).trim();
            return n
        }(e[1])] : function(t) {
            var e = t.indexOf("(") + 1,
                r = t.indexOf(")"),
                i = t.indexOf("(", e);
            return t.substring(e, ~i && r > i ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(fa)) : Dt._CE && St.test(t) ? Dt._CE("", t) : r
    }

    function Bb(t, e) {
        for (var r, i = t._first; i;) i instanceof Bt ? Bb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Bb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
    }

    function Db(t, e, r, i) {
        void 0 === r && (r = function(t) {
            return 1 - e(1 - t)
        }), void 0 === i && (i = function(t) {
            return .5 > t ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return _(t, function(t) {
            for (var e in Dt[t] = ot[t] = a, Dt[n = t.toLowerCase()] = r, a) Dt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Dt[t + "." + e] = a[e]
        }), a
    }

    function Eb(e) {
        return function(t) {
            return .5 > t ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }

    function Fb(r, t, e) {
        function ul(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * W((t - a) * n) + 1
        }
        var i = t >= 1 ? t : 1,
            n = (e || (r ? .3 : .45)) / (1 > t ? t : 1),
            a = n / V * (Math.asin(1 / i) || 0),
            s = "out" === r ? ul : "in" === r ? function(t) {
                return 1 - ul(1 - t)
            } : Eb(ul);
        return n = V / n, s.config = function(t, e) {
            return Fb(r, t, e)
        }, s
    }

    function Gb(e, r) {
        function Cl(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? Cl : "in" === e ? function(t) {
            return 1 - Cl(1 - t)
        } : Eb(Cl);
        return t.config = function(t) {
            return Gb(e, t)
        }, t
    }

    function qk(t) {
        var e, r, i, n, a = x() - P,
            s = !0 === t;
        if (a > k && (A += a - C), (0 < (e = (i = (P += a) - A) - S) || s) && (n = ++T.frame, b = i - 1e3 * T.time, T.time = i /= 1e3, S += e + (e >= D ? 4 : D - e), r = 1), s || (g = v(qk)), r)
            for (w = 0; w < z.length; w++) z[w](i, b, n, t)
    }

    function Tl(t) {
        return R > t ? F * t * t : .7272727272727273 > t ? F * Math.pow(t - 1.5 / 2.75, 2) + .75 : .9090909090909092 > t ? F * (t -= 2.25 / 2.75) * t + .9375 : F * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }

    function Animation(t, e) {
        var r = t.parent || E;
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Fa(this, +t.duration, 1, 1), this.data = t.data, m || At.wake(), r && Aa(r, this, e || 0 === e ? e : r._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
    }

    function Nb(t, e, i, a, s, u) {
        var h, l, f, d;
        if (ft[t] && !1 !== (h = new ft[t]).init(s, h.rawVars ? e[t] : function(t, e, i, a, s) {
                if (o(t) && (t = jt(t, s, e, i, a)), !r(t) || t.style && t.nodeType || tt(t) || H(t)) return n(t) ? jt(t, s, e, i, a) : t;
                var u, h = {};
                for (u in t) h[u] = jt(t[u], s, e, i, a);
                return h
            }(e[t], a, s, u, i), i, a, u) && (i._pt = l = new ie(i._pt, s, t, 0, 1, h.render, h, 0, h.priority), i !== c))
            for (f = i._ptLookup[i._targets.indexOf(s)], d = h._props.length; d--;) f[h._props[d]] = l;
        return h
    }

    function Yb(t, e, r) {
        return t.setAttribute(e, r)
    }

    function ec(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }

    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Wt, this.d = s || this, this.set = o || Gt, this.pr = u || 0, (this._next = t) && (t._prev = this)
    }

    function ic(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
        return r
    }

    function kc(t, a) {
        return {
            name: t,
            rawVars: 1,
            init: function(t, i, e) {
                e._onInit = function(t) {
                    var e, r;
                    if (n(i) && (e = {}, _(i, function(t) {
                            return e[t] = 1
                        }), i = e), a) {
                        for (r in e = {}, i) e[r] = a(i[r]);
                        i = e
                    }! function(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e)
                            for (i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = ic(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r))
                    }(t, i)
                }
            }
        }
    }

    function Vc(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function Wc(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function Xc(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function Yc(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (0 > r ? -.5 : .5)) + e.u, e)
    }

    function Zc(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function $c(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function _c(t, e, r) {
        return t.style[e] = r
    }

    function ad(t, e, r) {
        return t.style.setProperty(e, r)
    }

    function bd(t, e, r) {
        return t._gsap[e] = r
    }

    function cd(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }

    function dd(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r, a.renderTransform(n, a)
    }

    function ed(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r, a.renderTransform(n, a)
    }

    function id(t, e) {
        var r = oe.createElementNS ? oe.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : oe.createElement(t);
        return r.style ? r : oe.createElement(t)
    }

    function jd(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(Ie, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && jd(t, Ue(e) || e, 1) || ""
    }

    function md() {
        (function() {
            return "undefined" != typeof window
        })() && window.document && (se = window, oe = se.document, ue = oe.documentElement, le = id("div") || {
            style: {}
        }, fe = id("div"), Ye = Ue(Ye), Ne = Ye + "Origin", le.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", pe = !!Ue("perspective"), he = 1)
    }

    function nd(t) {
        var e, r = id("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            n = this.nextSibling,
            a = this.style.cssText;
        if (ue.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = nd
        } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), ue.removeChild(r), this.style.cssText = a, e
    }

    function od(t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    }

    function pd(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = nd.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === nd || (r = nd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
            x: +od(e, ["x", "cx", "x1"]) || 0,
            y: +od(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function qd(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !pd(t))
    }

    function rd(t, e) {
        if (e) {
            var r = t.style;
            e in ze && e !== Ne && (e = Ye), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Ie, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }

    function sd(t, e, r, i, n, a) {
        var s = new ie(t._pt, e, r, 0, 1, a ? $c : Zc);
        return (t._pt = s).b = i, s.e = n, t._props.push(r), s
    }

    function ud(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0,
            h = (r + "").trim().substr((u + "").length) || "px",
            l = le.style,
            f = Le.test(e),
            d = "svg" === t.tagName.toLowerCase(),
            p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
            _ = "px" === i,
            c = "%" === i;
        return i === h || !u || Ve[i] || Ve[h] ? u : ("px" === h || _ || (u = ud(t, e, r, "px")), o = t.getCTM && qd(t), c && (ze[e] || ~e.indexOf("adius")) ? aa(u / (o ? t.getBBox()[f ? "width" : "height"] : t[p]) * 100) : (l[f ? "width" : "height"] = 100 + (_ ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== oe && a.appendChild || (a = oe.body), (s = a._gsap) && c && s.width && f && s.time === At.time ? aa(u / s.width * 100) : (!c && "%" !== h || (l.position = jd(t, "position")), a === t && (l.position = "static"), a.appendChild(le), n = le[p], a.removeChild(le), l.position = "absolute", f && c && ((s = Z(a)).time = At.time, s.width = a[p]), aa(_ ? n * u / 100 : n && u ? 100 / n * u : 0))))
    }

    function vd(t, e, r, i) {
        var n;
        return he || md(), e in qe && "transform" !== e && ~(e = qe[e]).indexOf(",") && (e = e.split(",")[0]), ze[e] && "transform" !== e ? (n = Qe(t, i), n = "transformOrigin" !== e ? n[e] : We(jd(t, Ne)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Ge[e] && Ge[e](t, e, r) || jd(t, e) || $(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").indexOf(" ") ? ud(t, e, n, r) + r : n
    }

    function wd(t, e, r, i) {
        if (!r || "none" === r) {
            var n = Ue(e, t, 1),
                a = n && jd(t, n, 1);
            a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = jd(t, "borderTopColor"))
        }
        var s, o, u, h, l, f, d, p, _, c, m, g, v = new ie(this._pt, t.style, e, 0, 1, Ht),
            y = 0,
            T = 0;
        if (v.b = r, v.e = i, r += "", "auto" == (i += "") && (t.style[e] = i, i = jd(t, e) || i, t.style[e] = r), qb(s = [r, i]), i = s[1], u = (r = s[0]).match(it) || [], (i.match(it) || []).length) {
            for (; o = it.exec(i);) d = o[0], _ = i.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5) || (l = 1), d !== (f = u[T++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), p = parseFloat(d), c = d.substr((p + "").length), y = it.lastIndex - c.length, c || (c = c || j.units[e] || m, y === i.length && (i += c, v.e += c)), m !== c && (h = ud(t, e, f, c) || 0), v._pt = {
                _next: v._pt,
                p: _ || 1 === T ? _ : ",",
                s: h,
                c: g ? g * p : p - h,
                m: l && 4 > l ? Math.round : 0
            });
            v.c = y < i.length ? i.substring(y, i.length) : ""
        } else v.r = "display" === e && "none" === i ? $c : Zc;
        return at.test(i) && (v.e = 0), this._pt = v
    }

    function yd(t) {
        var e = t.split(" "),
            r = e[0],
            i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = Xe[r] || r, e[1] = Xe[i] || i, e.join(" ")
    }

    function zd(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t,
                s = a.style,
                o = e.u,
                u = a._gsap;
            if ("all" === o || !0 === o) s.cssText = "", i = 1;
            else
                for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], ze[r] && (i = 1, r = "transformOrigin" === r ? Ne : Ye), rd(a, r);
            i && (rd(a, Ye), u && (u.svg && a.removeAttribute("transform"), Qe(a, 1), u.uncache = 1))
        }
    }

    function Dd(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function Ed(t) {
        var e = jd(t, Ye);
        return Dd(e) ? Ze : e.substr(7).match(rt).map(aa)
    }

    function Fd(t, e) {
        var r, i, n, a, s = t._gsap || Z(t),
            o = t.style,
            u = Ed(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Ze : u : (u !== Ze || t.offsetParent || t === ue || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextSibling, ue.appendChild(t)), u = Ed(t), n ? o.display = n : rd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : ue.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }

    function Gd(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap,
            l = n || Fd(t, !0),
            f = h.xOrigin || 0,
            d = h.yOrigin || 0,
            p = h.xOffset || 0,
            _ = h.yOffset || 0,
            c = l[0],
            m = l[1],
            g = l[2],
            v = l[3],
            y = l[4],
            T = l[5],
            b = e.split(" "),
            w = parseFloat(b[0]) || 0,
            x = parseFloat(b[1]) || 0;
        r ? l !== Ze && (o = c * v - m * g) && (u = w * (-m / o) + x * (c / o) - (c * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = pd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - d, h.xOffset = p + (y * c + T * g) - y, h.yOffset = _ + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[Ne] = "0px 0px", a && (sd(a, h, "xOrigin", f, w), sd(a, h, "yOrigin", d, x), sd(a, h, "xOffset", p, h.xOffset), sd(a, h, "yOffset", _, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
    }

    function Jd(t, e, r) {
        var i = La(e);
        return aa(parseFloat(e) + parseFloat(ud(t, "x", r + "px", i))) + i
    }

    function Qd(t, e, r, i, a, s) {
        var o, u, h = 360,
            l = n(a),
            f = parseFloat(a) * (l && ~a.indexOf("rad") ? Fe : 1),
            d = s ? f * s : f - i,
            p = i + d + "deg";
        return l && ("short" === (o = a.split("_")[1]) && (d %= h) !== d % 180 && (d += 0 > d ? h : -h), "cw" === o && 0 > d ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === o && d > 0 && (d = (d - 36e9) % h - ~~(d / h) * h)), t._pt = u = new ie(t._pt, e, r, i, d, Wc), u.e = p, u.u = "deg", t._props.push(r), u
    }

    function Rd(t, e, r) {
        var i, n, a, s, o, u, h, l = fe.style,
            f = r._gsap;
        for (n in l.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;", l[Ye] = e, oe.body.appendChild(fe), i = Qe(fe, 1), ze)(a = f[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = La(a) !== (h = La(s)) ? ud(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new ie(t._pt, f, n, o, u - o, Vc), t._pt.u = h || 0, t._props.push(n));
        oe.body.removeChild(fe)
    }
    var E, i, a, h, l, f, d, c, m, g, v, y, T, b, w, x, k, C, A, P, D, S, z, F, R, j = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        I = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        B = 1e8,
        U = 1 / B,
        V = 2 * Math.PI,
        X = V / 4,
        G = 0,
        J = Math.sqrt,
        Q = Math.cos,
        W = Math.sin,
        H = "function" == typeof ArrayBuffer ? ArrayBuffer.isView : function() {},
        tt = Array.isArray,
        et = /(?:-?\.?\d|\.)+/gi,
        rt = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
        it = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        nt = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
        at = /[+-]=-?[\.\d]+/,
        st = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        ot = {},
        ut = {},
        ht = [],
        lt = {},
        ft = {},
        dt = {},
        pt = 30,
        _t = [],
        ct = "",
        mt = function(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        gt = function(t, e) {
            return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
        },
        vt = {
            _start: 0,
            endTime: O
        },
        yt = function(t, e, r) {
            return t > r ? t : r > e ? e : r
        },
        Tt = [].slice,
        bt = function(t, e) {
            return !n(t) || e || !a && Pt() ? tt(t) ? function(t, e, r) {
                return void 0 === r && (r = []), t.forEach(function(t) {
                    return n(t) && !e || Oa(t, 1) ? r.push.apply(r, bt(t)) : r.push(t)
                }) || r
            }(t, e) : Oa(t) ? Tt.call(t, 0) : t ? [t] : [] : Tt.call(h.querySelectorAll(t), 0)
        },
        wt = function(e, t, r, i, n) {
            var a = t - e,
                s = i - r;
            return Ja(n, function(t) {
                return r + ((t - e) / a * s || 0)
            })
        },
        xt = function(t, e, r) {
            var i, n, a = t.vars,
                s = a[e];
            return s ? (i = a[e + "Params"], n = a.callbackScope || t, r && ht.length && da(), i ? s.apply(n, i) : s.call(n)) : void 0
        },
        kt = 255,
        Ot = {
            aqua: [0, kt, kt],
            lime: [0, kt, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, kt],
            navy: [0, 0, 128],
            white: [kt, kt, kt],
            olive: [128, 128, 0],
            yellow: [kt, kt, 0],
            orange: [kt, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [kt, 0, 0],
            pink: [kt, 192, 203],
            cyan: [0, kt, kt],
            transparent: [kt, kt, kt, 0]
        },
        Mt = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in Ot) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Ct = /hsl[a]?\(/,
        At = (x = Date.now, k = 500, C = 33, A = x(), P = A, S = D = 1e3 / 240, T = {
            time: 0,
            frame: 0,
            tick: function() {
                qk(!0)
            },
            deltaRatio: function(t) {
                return b / (1e3 / (t || 60))
            },
            wake: function() {
                f && (!a && t() && (i = a = window, h = i.document || {}, ot.gsap = ae, (i.gsapVersions || (i.gsapVersions = [])).push(ae.version), K(l || i.GreenSockGlobals || !i.gsap && i || {}), y = i.requestAnimationFrame), g && T.sleep(), v = y || function(t) {
                    return setTimeout(t, S - 1e3 * T.time + 1 | 0)
                }, m = 1, qk(2))
            },
            sleep: function() {
                (y ? i.cancelAnimationFrame : clearTimeout)(g), m = 0, v = O
            },
            lagSmoothing: function(t, e) {
                k = t || 1e8, C = Math.min(e, k, 0)
            },
            fps: function(t) {
                D = 1e3 / (t || 240), S = 1e3 * T.time + D
            },
            add: function(t) {
                z.indexOf(t) < 0 && z.push(t), Pt()
            },
            remove: function(t) {
                var e;
                ~(e = z.indexOf(t)) && z.splice(e, 1) && w >= e && w--
            },
            _listeners: z = []
        }),
        Pt = function() {
            return !m && At.wake()
        },
        Dt = {},
        St = /^[\d.\-M][\d.\-,\s]/,
        zt = /["']/g,
        Ft = function(e) {
            return function(t) {
                return 1 - e(1 - t)
            }
        },
        Rt = function(t, e) {
            return t && (o(t) ? t : Dt[t] || zb(t)) || e
        };
    _("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = 5 > e ? e + 1 : e;
        Db(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return .5 > t ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }), Dt.Linear.easeNone = Dt.none = Dt.Linear.easeIn, Db("Elastic", Fb("in"), Fb("out"), Fb()), F = 7.5625, R = 1 / 2.75, Db("Bounce", function(t) {
        return 1 - Tl(1 - t)
    }, Tl), Db("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), Db("Circ", function(t) {
        return -(J(1 - t * t) - 1)
    }), Db("Sine", function(t) {
        return 1 === t ? 1 : 1 - Q(t * X)
    }), Db("Back", Gb("in"), Gb("out"), Gb()), Dt.SteppedEase = Dt.steps = ot.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                i = t + (e ? 0 : 1),
                n = e ? 1 : 0;
            return function(t) {
                return ((i * yt(0, .99999999, t) | 0) + n) * r
            }
        }
    }, I.ease = Dt["quad.out"], _("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return ct += t + "," + t + "Params,"
    });
    var Et, It = function(t, e) {
            this.id = G++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : $, this.set = e ? e.getSetter : Qt
        },
        Lt = ((Et = Animation.prototype).delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, Et.duration = function(t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, Et.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0, Fa(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, Et.totalTime = function(t, e) {
            if (Pt(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (ya(this, t); r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Aa(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === U || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ea(this, t, e)), this
        }, Et.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + ua(this)) % this._dur || (t ? this._dur : 0), e) : this._time
        }, Et.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, Et.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + ua(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, Et.iteration = function(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? gt(this._tTime, r) + 1 : 1
        }, Et.timeScale = function(t) {
            if (!arguments.length) return this._rts === -U ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? wa(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -U ? 0 : this._rts,
                function(t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                }(this.totalTime(yt(-this._delay, this._tDur, e), !0))
        }, Et.paused = function(t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= U) && Math.abs(this._zTime) !== U))), this) : this._ps
        }, Et.startTime = function(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return !e || !e._sort && this.parent || Aa(e, this, t - this._delay), this
            }
            return this._start
        }, Et.endTime = function(t) {
            return this._start + (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        }, Et.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? wa(e.rawTime(t), this) : this._tTime : this._tTime
        }, Et.globalTime = function(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
            return r
        }, Et.repeat = function(t) {
            return arguments.length ? (this._repeat = t, Ga(this)) : this._repeat
        }, Et.repeatDelay = function(t) {
            return arguments.length ? (this._rDelay = t, Ga(this)) : this._rDelay
        }, Et.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, Et.seek = function(t, e) {
            return this.totalTime(Ia(this, t), s(e))
        }, Et.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, s(e))
        }, Et.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, Et.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, Et.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, Et.resume = function() {
            return this.paused(!1)
        }, Et.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -U : 0)), this) : this._rts < 0
        }, Et.invalidate = function() {
            return this._initted = 0, this._zTime = -U, this
        }, Et.isActive = function() {
            var t, e = this.parent || this._dp,
                r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - U))
        }, Et.eventCallback = function(t, e, r) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
        }, Et.then = function(t) {
            var i = this;
            return new Promise(function(e) {
                function jn() {
                    var t = i.then;
                    i.then = null, o(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t
                }
                var r = o(t) ? t : ga;
                i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? jn() : i._prom = jn
            })
        }, Et.kill = function() {
            fb(this)
        }, Animation);
    ha(Lt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -U,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Bt = function(i) {
        function Timeline(t, e) {
            var r;
            return void 0 === t && (t = {}), (r = i.call(this, t, e) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = s(t.sortChildren), r.parent && za(r.parent, _assertThisInitialized(r)), t.scrollTrigger && Ba(_assertThisInitialized(r), t.scrollTrigger), r
        }
        _inheritsLoose(Timeline, i);
        var t = Timeline.prototype;
        return t.to = function(t, e, r, i) {
            return new Xt(t, ca(arguments, 0, this), Ia(this, p(e) ? i : r)), this
        }, t.from = function(t, e, r, i) {
            return new Xt(t, ca(arguments, 1, this), Ia(this, p(e) ? i : r)), this
        }, t.fromTo = function(t, e, r, i, n) {
            return new Xt(t, ca(arguments, 2, this), Ia(this, p(e) ? n : i)), this
        }, t.set = function(t, e, r) {
            return e.duration = 0, e.parent = this, ma(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Xt(t, e, Ia(this, r), 1), this
        }, t.call = function(t, e, r) {
            return Aa(this, Xt.delayedCall(0, t, e), Ia(this, r))
        }, t.staggerTo = function(t, e, r, i, n, a, s) {
            return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Xt(t, r, Ia(this, n)), this
        }, t.staggerFrom = function(t, e, r, i, n, a, o) {
            return r.runBackwards = 1, ma(r).immediateRender = s(r.immediateRender), this.staggerTo(t, e, r, i, n, a, o)
        }, t.staggerFromTo = function(t, e, r, i, n, a, o, u) {
            return i.startAt = r, ma(i).immediateRender = s(i.immediateRender), this.staggerTo(t, e, i, n, a, o, u)
        }, t.render = function(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d, p, _, c = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                g = this._dur,
                v = this !== E && t > m - U && t >= 0 ? m : U > t ? 0 : t,
                y = this._zTime < 0 != 0 > t && (this._initted || !g);
            if (v !== this._tTime || r || y) {
                if (c !== this._time && g && (v += this._time - c, t += this._time - c), i = v, f = this._start, u = !(l = this._ts), y && (g || (c = this._zTime), !t && e || (this._zTime = t)), this._repeat && (p = this._yoyo, o = g + this._rDelay, i = aa(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), i > g && (i = g)), d = gt(this._tTime, o), !c && this._tTime && d !== s && (d = s), p && 1 & s && (i = g - i, _ = 1), s !== d && !this._lock)) {
                    var T = p && 1 & d,
                        b = T === (p && 1 & s);
                    if (d > s && (T = !T), c = T ? 0 : g, this._lock = 1, this.render(c || (_ ? 0 : aa(s * o)), e, !g)._lock = 0, !e && this.parent && xt(this, "onRepeat"), this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1), c !== this._time || u != !this._ts) return this;
                    if (g = this._dur, m = this._tDur, b && (this._lock = 2, c = T ? g + 1e-4 : -1e-4, this.render(c, !0), this.vars.repeatRefresh && !_ && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                    Bb(this, _)
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function(t, e, r) {
                        var i;
                        if (r > e)
                            for (i = t._first; i && i._start <= r;) {
                                if (!i._dur && "isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= r;) {
                                    if (!i._dur && "isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, aa(c), aa(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), c || !i || e || xt(this, "onStart"), i >= c && t >= 0)
                    for (n = this._first; n;) {
                        if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this) return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                h = 0, a && (v += this._zTime = -U);
                                break
                            }
                        }
                        n = a
                    } else {
                        n = this._last;
                        for (var w = 0 > t ? t : i; n;) {
                            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                                if (n.parent !== this) return this.render(t, e, r);
                                if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                    h = 0, a && (v += this._zTime = w ? -U : U);
                                    break
                                }
                            }
                            n = a
                        }
                    }
                if (h && !e && (this.pause(), h.render(i >= c ? 0 : -U)._zTime = i >= c ? 1 : -1, this._ts)) return this._start = f, xa(this), this.render(t, e, r);
                this._onUpdate && !e && xt(this, "onUpdate", !0), (v === m && m >= this.totalDuration() || !v && c) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || qa(this, 1), e || 0 > t && !c || !v && !c || (xt(this, v === m ? "onComplete" : "onReverseComplete", !0), !this._prom || m > v && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, t.add = function(t, e) {
            var r = this;
            if (p(e) || (e = Ia(this, e)), !(t instanceof Lt)) {
                if (tt(t)) return t.forEach(function(t) {
                    return r.add(t, e)
                }), this;
                if (n(t)) return this.addLabel(t, e);
                if (!o(t)) return this;
                t = Xt.delayedCall(0, t)
            }
            return this !== t ? Aa(this, t, e) : this
        }, t.getChildren = function(t, e, r, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -B);
            for (var n = [], a = this._first; a;) a._start >= i && (a instanceof Xt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
            return n
        }, t.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, t.remove = function(t) {
            return n(t) ? this.removeLabel(t) : o(t) ? this.killTweensOf(t) : (pa(this, t), t === this._recent && (this._recent = this._last), ra(this))
        }, t.totalTime = function(t, e) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = aa(At.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
        }, t.addLabel = function(t, e) {
            return this.labels[t] = Ia(this, e), this
        }, t.removeLabel = function(t) {
            return delete this.labels[t], this
        }, t.addPause = function(t, e, r) {
            var i = Xt.delayedCall(0, e || O, r);
            return i.data = "isPause", this._hasPause = 1, Aa(this, i, Ia(this, t))
        }, t.removePause = function(t) {
            var e = this._first;
            for (t = Ia(this, t); e;) e._start === t && "isPause" === e.data && qa(e), e = e._next
        }, t.killTweensOf = function(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--;) qt !== i[n] && i[n].kill(t, e);
            return this
        }, t.getTweensOf = function(t, e) {
            for (var r, i = [], n = bt(t), a = this._first, s = p(e); a;) a instanceof Xt ? ba(a._targets, n) && (s ? (!qt || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next;
            return i
        }, t.tweenTo = function(t, e) {
            e = e || {};
            var r = this,
                i = Ia(r, t),
                n = e.startAt,
                a = e.onStart,
                s = e.onStartParams,
                o = Xt.to(r, ha(e, {
                    ease: "none",
                    lazy: !1,
                    time: i,
                    duration: e.duration || Math.abs((i - (n && "time" in n ? n.time : r._time)) / r.timeScale()) || U,
                    onStart: function() {
                        r.pause();
                        var t = e.duration || Math.abs((i - r._time) / r.timeScale());
                        o._dur !== t && Fa(o, t, 0, 1).render(o._time, !0, !0), a && a.apply(o, s || [])
                    }
                }));
            return o
        }, t.tweenFromTo = function(t, e, r) {
            return this.tweenTo(e, ha({
                startAt: {
                    time: Ia(this, t)
                }
            }, r))
        }, t.recent = function() {
            return this._recent
        }, t.nextLabel = function(t) {
            return void 0 === t && (t = this._time), db(this, Ia(this, t))
        }, t.previousLabel = function(t) {
            return void 0 === t && (t = this._time), db(this, Ia(this, t), 1)
        }, t.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + U)
        }, t.shiftChildren = function(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
            if (e)
                for (i in a) a[i] >= r && (a[i] += t);
            return ra(this)
        }, t.invalidate = function() {
            var t = this._first;
            for (this._lock = 0; t;) t.invalidate(), t = t._next;
            return i.prototype.invalidate.call(this)
        }, t.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._time = this._tTime = this._pTime = 0, t && (this.labels = {}), ra(this)
        }, t.totalDuration = function(t) {
            var e, r, i, n = 0,
                a = this,
                s = a._last,
                o = B;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Aa(a, s, r - s._delay, 1)._lock = 0) : o = r, 0 > r && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -(1 / 0)), o = 0), s._end > n && s._ts && (n = s._end), s = e;
                Fa(a, a === E && a._time > n ? a._time : n, 1, 1), a._dirty = 0
            }
            return a._tDur
        }, Timeline.updateRoot = function(t) {
            if (E._ts && (ea(E, wa(t, E)), d = At.frame), At.frame >= pt) {
                pt += j.autoSleep || 120;
                var e = E._first;
                if ((!e || !e._ts) && j.autoSleep && At._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || At.sleep()
                }
            }
        }, Timeline
    }(Lt);
    ha(Bt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var qt, Yt = function(t, e, r, i, a, s, u, h, l) {
            o(i) && (i = i(a || 0, t, s));
            var f, d = t[e],
                p = "get" !== r ? r : o(d) ? l ? t[e.indexOf("set") || !o(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d,
                _ = o(d) ? l ? Jt : Zt : Gt;
            return n(i) && (~i.indexOf("random(") && (i = ab(i)), "=" === i.charAt(1) && (i = parseFloat(p) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (La(p) || 0))), p !== i ? isNaN(p * i) ? (d || e in t || L(e, i), function(t, e, r, i, n, a, s) {
                var o, u, h, l, f, d, p, _, c = new ie(this._pt, t, e, 0, 1, Ht, null, n),
                    m = 0,
                    g = 0;
                for (c.b = r, c.e = i, r += "", (p = ~(i += "").indexOf("random(")) && (i = ab(i)), a && (a(_ = [r, i], t, e), r = _[0], i = _[1]), u = r.match(nt) || []; o = nt.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, c._pt = {
                    _next: c._pt,
                    p: f || 1 === g ? f : ",",
                    s: d,
                    c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
                    m: h && 4 > h ? Math.round : 0
                }, m = nt.lastIndex);
                return c.c = m < i.length ? i.substring(m, i.length) : "", c.fp = s, (at.test(i) || p) && (c.e = 0), this._pt = c
            }.call(this, t, e, p, i, _, h || j.stringFilter, l)) : (f = new ie(this._pt, t, e, +p || 0, i - (p || 0), "boolean" == typeof d ? $t : Wt, 0, _), l && (f.fp = l), u && f.modifier(u, this, t), this._pt = f) : void 0
        },
        Nt = function _initTween(t, e) {
            var r, i, n, a, o, u, h, l, f, d, p, _, c, m = t.vars,
                g = m.ease,
                v = m.startAt,
                y = m.immediateRender,
                T = m.lazy,
                b = m.onUpdate,
                w = m.onUpdateParams,
                x = m.callbackScope,
                k = m.runBackwards,
                O = m.yoyoEase,
                M = m.keyframes,
                C = m.autoRevert,
                A = t._dur,
                P = t._startAt,
                D = t._targets,
                S = t.parent,
                z = S && "nested" === S.data ? S.parent._targets : D,
                F = "auto" === t._overwrite,
                R = t.timeline;
            if (!R || M && g || (g = "none"), t._ease = Rt(g, I.ease), t._yEase = O ? Ft(Rt(!0 === O ? g : O, I.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), !R) {
                if (_ = (l = D[0] ? Z(D[0]).harness : 0) && m[l.prop], r = la(m, ut), P && P.render(-1, !0).kill(), v) {
                    if (qa(t._startAt = Xt.set(D, ha({
                            data: "isStart",
                            overwrite: !1,
                            parent: S,
                            immediateRender: !0,
                            lazy: s(T),
                            startAt: null,
                            delay: 0,
                            onUpdate: b,
                            onUpdateParams: w,
                            callbackScope: x,
                            stagger: 0
                        }, v))), y)
                        if (e > 0) C || (t._startAt = 0);
                        else if (A && !(0 > e && P)) return void(e && (t._zTime = e))
                } else if (k && A)
                    if (P) C || (t._startAt = 0);
                    else if (e && (y = !1), n = ha({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: y && s(T),
                        immediateRender: y,
                        stagger: 0,
                        parent: S
                    }, r), _ && (n[l.prop] = _), qa(t._startAt = Xt.set(D, n)), y) {
                    if (!e) return
                } else _initTween(t._startAt, U);
                for (t._pt = 0, T = A && s(T) || T && !A, i = 0; i < D.length; i++) {
                    if (h = (o = D[i])._gsap || Y(D)[i]._gsap, t._ptLookup[i] = d = {}, lt[h.id] && da(), p = z === D ? i : z.indexOf(o), l && !1 !== (f = new l).init(o, _ || r, t, p, z) && (t._pt = a = new ie(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) {
                            d[t] = a
                        }), f.priority && (u = 1)), !l || _)
                        for (n in r) ft[n] && (f = Nb(n, r, t, p, o, z)) ? f.priority && (u = 1) : d[n] = a = Yt.call(t, o, n, "get", r[n], p, z, 0, m.stringFilter);
                    t._op && t._op[i] && t.kill(o, t._op[i]), F && t._pt && (qt = t, E.killTweensOf(o, d, t.globalTime(0)), c = !t.parent, qt = 0), t._pt && T && (lt[h.id] = 1)
                }
                u && re(t), t._onInit && t._onInit(t)
            }
            t._from = !R && !!m.runBackwards, t._onUpdate = b, t._initted = (!t._op || t._pt) && !c
        },
        jt = function(t, e, r, i, a) {
            return o(t) ? t.call(e, r, i, a) : n(t) && ~t.indexOf("random(") ? ab(t) : t
        },
        Ut = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Vt = (Ut + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        Xt = function(S) {
            function Tween(t, e, i, n) {
                var a;
                "number" == typeof e && (i.duration = e, e = i, i = null);
                var o, h, l, f, d, _, c, m, g = (a = S.call(this, n ? e : ma(e), i) || this).vars,
                    v = g.duration,
                    y = g.delay,
                    T = g.immediateRender,
                    b = g.stagger,
                    w = g.overwrite,
                    x = g.keyframes,
                    k = g.defaults,
                    C = g.scrollTrigger,
                    A = g.yoyoEase,
                    P = a.parent,
                    D = (tt(t) || H(t) ? p(t[0]) : "length" in e) ? [t] : bt(t);
                if (a._targets = D.length ? Y(D) : M("GSAP target " + t + " not found. https://greensock.com", !j.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = w, x || b || u(v) || u(y)) {
                    if (e = a.vars, (o = a.timeline = new Bt({
                            data: "nested",
                            defaults: k || {}
                        })).kill(), o.parent = _assertThisInitialized(a), x) ha(o.vars.defaults, {
                        ease: "none"
                    }), x.forEach(function(t) {
                        return o.to(D, t, ">")
                    });
                    else {
                        if (f = D.length, c = b ? Sa(b) : O, r(b))
                            for (d in b) ~Ut.indexOf(d) && ((m = m || {})[d] = b[d]);
                        for (h = 0; f > h; h++) {
                            for (d in l = {}, e) Vt.indexOf(d) < 0 && (l[d] = e[d]);
                            l.stagger = 0, A && (l.yoyoEase = A), m && mt(l, m), _ = D[h], l.duration = +jt(v, _assertThisInitialized(a), h, _, D), l.delay = (+jt(y, _assertThisInitialized(a), h, _, D) || 0) - a._delay, !b && 1 === f && l.delay && (a._delay = y = l.delay, a._start += y, l.delay = 0), o.to(_, l, c(h, _, D))
                        }
                        o.duration() ? v = y = 0 : a.timeline = 0
                    }
                    v || a.duration(v = o.duration())
                } else a.timeline = 0;
                return !0 === w && (qt = _assertThisInitialized(a), E.killTweensOf(D), qt = 0), P && za(P, _assertThisInitialized(a)), (T || !v && !x && a._start === aa(P._time) && s(T) && function _hasNoPausedAncestors(t) {
                    return !t || t._ts && _hasNoPausedAncestors(t.parent)
                }(_assertThisInitialized(a)) && "nested" !== P.data) && (a._tTime = -U, a.render(Math.max(0, -y))), C && Ba(_assertThisInitialized(a), C), a
            }
            _inheritsLoose(Tween, S);
            var t = Tween.prototype;
            return t.render = function(t, e, r) {
                var i, n, a, s, o, u, h, l, f, d = this._time,
                    p = this._tDur,
                    _ = this._dur,
                    c = t > p - U && t >= 0 ? p : U > t ? 0 : t;
                if (_) {
                    if (c !== this._tTime || !t || r || this._startAt && this._zTime < 0 != 0 > t) {
                        if (i = c, l = this.timeline, this._repeat) {
                            if (s = _ + this._rDelay, i = aa(c % s), c === p ? (a = this._repeat, i = _) : ((a = ~~(c / s)) && a === c / s && (i = _, a--), i > _ && (i = _)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = _ - i), o = gt(this._tTime, s), i === d && !r && this._initted) return this;
                            a !== o && (l && this._yEase && Bb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(aa(s * a), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (Ca(this, 0 > t ? t : i, r, e)) return this._tTime = 0, this;
                            if (_ !== this._dur) return this.render(t, e, r)
                        }
                        for (this._tTime = c, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / _), this._from && (this.ratio = h = 1 - h), !i || d || e || xt(this, "onStart"), n = this._pt; n;) n.r(h, n.d), n = n._next;
                        l && l.render(0 > t ? t : !i && u ? -U : l._dur * h, e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (0 > t && this._startAt && this._startAt.render(t, !0, r), xt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && xt(this, "onRepeat"), c !== this._tDur && c || this._tTime !== c || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && _ || !(c === this._tDur && 0 < this._ts || !c && this._ts < 0) || qa(this, 1), e || 0 > t && !d || !c && !d || (xt(this, c === p ? "onComplete" : "onReverseComplete", !0), !this._prom || p > c && 0 < this.timeScale() || this._prom()))
                    }
                } else ! function(t, e, r, i) {
                    var n, a, s = t.ratio,
                        o = 0 > e || !e && s && !t._start && t._zTime > U && !t._dp._lock || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data ? 0 : 1,
                        u = t._rDelay,
                        h = 0;
                    if (u && t._repeat && (h = yt(0, t._tDur, e), gt(h, u) !== (a = gt(t._tTime, u)) && (s = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), t._initted || !Ca(t, e, i, r))
                        if (o !== s || i || t._zTime === U || !e && t._zTime) {
                            for (a = t._zTime, t._zTime = e || (r ? U : 0), r = r || e && !a, t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = h, r || xt(t, "onStart"), n = t._pt; n;) n.r(o, n.d), n = n._next;
                            t._startAt && 0 > e && t._startAt.render(e, !0, !0), t._onUpdate && !r && xt(t, "onUpdate"), h && t._repeat && !r && t.parent && xt(t, "onRepeat"), (e >= t._tDur || 0 > e) && t.ratio === o && (o && qa(t, 1), r || (xt(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                        } else t._zTime || (t._zTime = e)
                }(this, t, e, r);
                return this
            }, t.targets = function() {
                return this._targets
            }, t.invalidate = function() {
                return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), S.prototype.invalidate.call(this)
            }, t.kill = function(t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return fb(this);
                if (this.timeline) {
                    var r = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, qt && !0 !== qt.vars.overwrite)._first || fb(this), this.parent && r !== this.timeline.totalDuration() && Fa(this, this._dur * this.timeline._tDur / r, 0, 1), this
                }
                var i, a, s, o, u, h, l, f = this._targets,
                    d = t ? bt(t) : f,
                    p = this._ptLookup,
                    c = this._pt;
                if ((!e || "all" === e) && function(t, e) {
                        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                        return 0 > r
                    }(f, d)) return "all" === e && (this._pt = 0), fb(this);
                for ((i = this._op = this._op || [], "all" !== e && (n(e) && (u = {}, _(e, function(t) {
                        return u[t] = 1
                    }), e = u), e = function(t, e) {
                        var r, i, n, a, s = t[0] ? Z(t[0]).harness : 0,
                            o = s && s.aliases;
                        if (!o) return e;
                        for (i in r = mt({}, e), o)
                            if (i in r)
                                for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
                        return r
                    }(f, e)), l = f.length); l--;)
                    if (~d.indexOf(f[l]))
                        for (u in a = p[l], "all" === e ? (i[l] = e, o = a, s = {}) : (s = i[l] = i[l] || {}, o = e), o)(h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || pa(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
                return this._initted && !this._pt && c && fb(this), this
            }, Tween.to = function(t, e, r) {
                return new Tween(t, e, r)
            }, Tween.from = function(t) {
                return new Tween(t, ca(arguments, 1))
            }, Tween.delayedCall = function(t, e, r, i) {
                return new Tween(e, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: e,
                    onReverseComplete: e,
                    onCompleteParams: r,
                    onReverseCompleteParams: r,
                    callbackScope: i
                })
            }, Tween.fromTo = function(t) {
                return new Tween(t, ca(arguments, 2))
            }, Tween.set = function(t, e) {
                return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e)
            }, Tween.killTweensOf = function(t, e, r) {
                return E.killTweensOf(t, e, r)
            }, Tween
        }(Lt);
    ha(Xt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), _("staggerTo,staggerFrom,staggerFromTo", function(r) {
        Xt[r] = function() {
            var t = new Bt,
                e = Tt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e)
        }
    });
    var Gt = function(t, e, r) {
            return t[e] = r
        },
        Zt = function(t, e, r) {
            return t[e](r)
        },
        Jt = function(t, e, r, i) {
            return t[e](i.fp, r)
        },
        Qt = function(t, e) {
            return o(t[e]) ? Zt : q(t[e]) && t.setAttribute ? Yb : Gt
        },
        Wt = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
        },
        $t = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        Ht = function(t, e) {
            var r = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        Kt = function(t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        te = function(t, e, r, i) {
            for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n
        },
        ee = function(t) {
            for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? pa(this, i, "_pt") : i.dep || (e = 1), i = r;
            return !e
        },
        re = function(t) {
            for (var e, r, i, n, a = t._pt; a;) {
                for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
                (a._prev = r ? r._prev : n) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : n = a, a = e
            }
            t._pt = i
        },
        ie = (PropTween.prototype.modifier = function(t, e, r) {
            this.mSet = this.mSet || this.set, this.set = ec, this.m = t, this.mt = r, this.tween = e
        }, PropTween);
    _(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ut[t] = 1
    }), ot.TweenMax = ot.TweenLite = Xt, ot.TimelineLite = ot.TimelineMax = Bt, E = new Bt({
        sortChildren: !1,
        defaults: I,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), j.stringFilter = qb;
    var ne = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), r = 0; t > r; r++) e[r] = arguments[r];
            e.forEach(function(t) {
                return function(t) {
                    var e = (t = !t.name && t["default"] || t).name,
                        r = o(t),
                        i = e && !r && t.init ? function() {
                            this._props = []
                        } : t,
                        n = {
                            init: O,
                            render: Kt,
                            add: Yt,
                            kill: ee,
                            modifier: te,
                            rawVars: 0
                        },
                        a = {
                            targetTest: 0,
                            get: 0,
                            getSetter: Qt,
                            aliases: {},
                            register: 0
                        };
                    if (Pt(), t !== i) {
                        if (ft[e]) return;
                        ha(i, ha(la(t, n), a)), mt(i.prototype, mt(n, la(t, a))), ft[i.prop = e] = i, t.targetTest && (_t.push(i), ut[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    N(e, i), t.register && t.register(ae, i, ie)
                }(t)
            })
        },
        timeline: function(t) {
            return new Bt(t)
        },
        getTweensOf: function(t, e) {
            return E.getTweensOf(t, e)
        },
        getProperty: function(i, t, e, r) {
            n(i) && (i = bt(i)[0]);
            var a = Z(i || {}).get,
                s = e ? ga : fa;
            return "native" === e && (e = ""), i ? t ? s((ft[t] && ft[t].get || a)(i, t, e, r)) : function(t, e, r) {
                return s((ft[t] && ft[t].get || a)(i, t, e, r))
            } : i
        },
        quickSetter: function(r, e, i) {
            if (1 < (r = bt(r)).length) {
                var n = r.map(function(t) {
                        return ae.quickSetter(t, e, i)
                    }),
                    a = n.length;
                return function(t) {
                    for (var e = a; e--;) n[e](t)
                }
            }
            r = r[0] || {};
            var s = ft[e],
                o = Z(r),
                u = o.harness && (o.harness.aliases || {})[e] || e,
                h = s ? function(t) {
                    var e = new s;
                    c._pt = 0, e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && Kt(1, c)
                } : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        isTweening: function(t) {
            return 0 < E.getTweensOf(t, !0).length
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Rt(t.ease, I.ease)), ka(I, t || {})
        },
        config: function(t) {
            return ka(j, t || {})
        },
        registerEffect: function(t) {
            var n = t.name,
                i = t.effect,
                e = t.plugins,
                a = t.defaults,
                s = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !ft[t] && !ot[t] && M(n + " effect requires " + t + " plugin.")
            }), dt[n] = function(t, e, r) {
                return i(bt(t), ha(e || {}, a), r)
            }, s && (Bt.prototype[n] = function(t, e, i) {
                return this.add(dt[n](t, r(e) ? e : (i = e) && {}, this), i)
            })
        },
        registerEase: function(t, e) {
            Dt[t] = Rt(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? Rt(t, e) : Dt
        },
        getById: function(t) {
            return E.getById(t)
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new Bt(t);
            for (n.smoothChildTiming = s(t.smoothChildTiming), E.remove(n), n._dp = 0, n._time = n._tTime = E._time, r = E._first; r;) i = r._next, !e && !r._dur && r instanceof Xt && r.vars.onComplete === r._targets[0] || Aa(n, r, r._start - r._delay), r = i;
            return Aa(E, n, 0), n
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return tt(e) ? Za(e, wrap(0, e.length), t) : Ja(r, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e,
                    n = 2 * i;
                return tt(e) ? Za(e, wrapYoyo(0, e.length - 1), t) : Ja(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
                })
            },
            distribute: Sa,
            random: Va,
            snap: Ua,
            normalize: function(t, e, r) {
                return wt(t, e, 0, 1, r)
            },
            getUnit: La,
            clamp: function(e, r, t) {
                return Ja(t, function(t) {
                    return yt(e, r, t)
                })
            },
            splitColor: lb,
            toArray: bt,
            mapRange: wt,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), r = 0; t > r; r++) e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || La(t))
                }
            },
            interpolate: function interpolate(e, r, t, i) {
                var a = isNaN(e + r) ? 0 : function(t) {
                    return (1 - t) * e + t * r
                };
                if (!a) {
                    var s, o, u, h, l, f = n(e),
                        d = {};
                    if (!0 === t && (i = 1) && (t = null), f) e = {
                        p: e
                    }, r = {
                        p: r
                    };
                    else if (tt(e) && !tt(r)) {
                        for (u = [], h = e.length, l = h - 2, o = 1; h > o; o++) u.push(interpolate(e[o - 1], e[o]));
                        h--, a = function(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }, t = r
                    } else i || (e = mt(tt(e) ? [] : {}, e));
                    if (!u) {
                        for (s in r) Yt.call(d, e, s, "get", r[s]);
                        a = function(t) {
                            return Kt(t, d) || (f ? e.p : e)
                        }
                    }
                }
                return Ja(t, a)
            },
            shuffle: Ra
        },
        install: K,
        effects: dt,
        ticker: At,
        updateRoot: Bt.updateRoot,
        plugins: ft,
        globalTimeline: E,
        core: {
            PropTween: ie,
            globals: N,
            Tween: Xt,
            Timeline: Bt,
            Animation: Lt,
            getCache: Z,
            _removeLinkedListItem: pa
        }
    };
    _("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return ne[t] = Xt[t]
    }), At.add(Bt.updateRoot), c = ne.to({}, {
        duration: 0
    });
    var ae = ne.registerPlugin({
        name: "attr",
        init: function(t, e, r, i, n) {
            var a, s;
            for (a in e)(s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a), this._props.push(a)
        }
    }, {
        name: "endArray",
        init: function(t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r])
        }
    }, kc("roundProps", Ta), kc("modifiers"), kc("snap", Ua)) || ne;
    Xt.version = Bt.version = ae.version = "3.5.0", f = 1, t() && Pt();
    var se, oe, ue, he, le, fe, de, pe, _e = Dt.Power0,
        ce = Dt.Power1,
        me = Dt.Power2,
        ge = Dt.Power3,
        ve = Dt.Power4,
        ye = Dt.Linear,
        Te = Dt.Quad,
        be = Dt.Cubic,
        we = Dt.Quart,
        xe = Dt.Quint,
        ke = Dt.Strong,
        Oe = Dt.Elastic,
        Me = Dt.Back,
        Ce = Dt.SteppedEase,
        Ae = Dt.Bounce,
        Pe = Dt.Sine,
        De = Dt.Expo,
        Se = Dt.Circ,
        ze = {},
        Fe = 180 / Math.PI,
        Re = Math.PI / 180,
        Ee = Math.atan2,
        Ie = /([A-Z])/g,
        Le = /(?:left|right|width|margin|padding|x)/i,
        Be = /[\s,\(]\S/,
        qe = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        Ye = "transform",
        Ne = Ye + "Origin",
        je = "O,Moz,ms,Ms,Webkit".split(","),
        Ue = function(t, e, r) {
            var i = (e || le).style,
                n = 5;
            if (t in i && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(je[n] + t in i););
            return 0 > n ? null : (3 === n ? "ms" : n >= 0 ? je[n] : "") + t
        },
        Ve = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        Xe = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Ge = {
            clearProps: function(t, e, r, i, n) {
                if ("isFromStart" !== n.data) {
                    var a = t._pt = new ie(t._pt, e, r, 0, 0, zd);
                    return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1
                }
            }
        },
        Ze = [1, 0, 0, 1, 0, 0],
        Je = {},
        Qe = function(t, e) {
            var r = t._gsap || new It(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i, n, a, s, o, u, h, l, f, d, p, _, c, m, g, v, y, T, b, w, x, k, O, M, C, A, P, D, S, z, F, R, E = t.style,
                I = r.scaleX < 0,
                L = "deg",
                B = jd(t, Ne) || "0";
            return i = n = a = u = h = l = f = d = p = 0, s = o = 1, r.svg = !(!t.getCTM || !qd(t)), m = Fd(t, r.svg), r.svg && (M = !r.uncache && t.getAttribute("data-svg-origin"), Gd(t, M || B, !!M || r.originIsAbsolute, !1 !== r.smooth, m)), _ = r.xOrigin || 0, c = r.yOrigin || 0, m !== Ze && (T = m[0], b = m[1], w = m[2], x = m[3], i = k = m[4], n = O = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? Ee(b, T) * Fe : 0, (f = w || x ? Ee(w, x) * Fe + u : 0) && (o *= Math.cos(f * Re)), r.svg && (i -= _ - (_ * T + c * w), n -= c - (_ * b + c * x))) : (R = m[6], z = m[7], P = m[8], D = m[9], S = m[10], F = m[11], i = m[12], n = m[13], a = m[14], h = (g = Ee(R, S)) * Fe, g && (M = k * (v = Math.cos(-g)) + P * (y = Math.sin(-g)), C = O * v + D * y, A = R * v + S * y, P = k * -y + P * v, D = O * -y + D * v, S = R * -y + S * v, F = z * -y + F * v, k = M, O = C, R = A), l = (g = Ee(-w, S)) * Fe, g && (v = Math.cos(-g), F = x * (y = Math.sin(-g)) + F * v, T = M = T * v - P * y, b = C = b * v - D * y, w = A = w * v - S * y), u = (g = Ee(b, T)) * Fe, g && (M = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), C = k * v + O * y, b = b * v - T * y, O = O * v - k * y, T = M, k = C), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = aa(Math.sqrt(T * T + b * b + w * w)), o = aa(Math.sqrt(O * O + R * R)), g = Ee(k, O), f = 2e-4 < Math.abs(g) ? g * Fe : 0, p = F ? 1 / (0 > F ? -F : F) : 0), r.svg && (M = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Dd(jd(t, Ye)), M && t.setAttribute("transform", M))), 90 < Math.abs(f) && Math.abs(f) < 270 && (I ? (s *= -1, f += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (o *= -1, f += 0 >= f ? 180 : -180)), r.x = ((r.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", r.y = ((r.yPercent = n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px", r.z = a + "px", r.scaleX = aa(s), r.scaleY = aa(o), r.rotation = aa(u) + L, r.rotationX = aa(h) + L, r.rotationY = aa(l) + L, r.skewX = f + L, r.skewY = d + L, r.transformPerspective = p + "px", (r.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (E[Ne] = We(B)), r.xOffset = r.yOffset = 0,
                r.force3D = j.force3D, r.renderTransform = r.svg ? rr : pe ? er : $e, r.uncache = 0, r
        },
        We = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        $e = function(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, er(t, e)
        },
        He = "0deg",
        Ke = "0px",
        tr = ") ",
        er = function(t, e) {
            var r = e || this,
                i = r.xPercent,
                n = r.yPercent,
                a = r.x,
                s = r.y,
                o = r.z,
                u = r.rotation,
                h = r.rotationY,
                l = r.rotationX,
                f = r.skewX,
                d = r.skewY,
                p = r.scaleX,
                _ = r.scaleY,
                c = r.transformPerspective,
                m = r.force3D,
                g = r.target,
                v = r.zOrigin,
                y = "",
                T = "auto" === m && t && 1 !== t || !0 === m;
            if (v && (l !== He || h !== He)) {
                var b, w = parseFloat(h) * Re,
                    x = Math.sin(w),
                    k = Math.cos(w);
                w = parseFloat(l) * Re, b = Math.cos(w), a = Jd(g, a, x * b * -v), s = Jd(g, s, -Math.sin(w) * -v), o = Jd(g, o, k * b * -v + v)
            }
            c !== Ke && (y += "perspective(" + c + tr), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Ke && s === Ke && o === Ke || (y += o !== Ke || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + tr), u !== He && (y += "rotate(" + u + tr), h !== He && (y += "rotateY(" + h + tr), l !== He && (y += "rotateX(" + l + tr), f === He && d === He || (y += "skew(" + f + ", " + d + tr), 1 === p && 1 === _ || (y += "scale(" + p + ", " + _ + tr), g.style[Ye] = y || "translate(0, 0)"
        },
        rr = function(t, e) {
            var r, i, n, a, s, o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                d = o.rotation,
                p = o.skewX,
                _ = o.skewY,
                c = o.scaleX,
                m = o.scaleY,
                g = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                T = o.xOffset,
                b = o.yOffset,
                w = o.forceCSS,
                x = parseFloat(l),
                k = parseFloat(f);
            d = parseFloat(d), p = parseFloat(p), (_ = parseFloat(_)) && (p += _ = parseFloat(_), d += _), d || p ? (d *= Re, p *= Re, r = Math.cos(d) * c, i = Math.sin(d) * c, n = Math.sin(d - p) * -m, a = Math.cos(d - p) * m, p && (_ *= Re, s = Math.tan(p - _), n *= s = Math.sqrt(1 + s * s), a *= s, _ && (s = Math.tan(_), r *= s = Math.sqrt(1 + s * s), i *= s)), r = aa(r), i = aa(i), n = aa(n), a = aa(a)) : (r = c, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = ud(g, "x", l, "px"), k = ud(g, "y", f, "px")), (v || y || T || b) && (x = aa(x + v - (v * r + y * n) + T), k = aa(k + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = aa(x + u / 100 * s.width), k = aa(k + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")", g.setAttribute("transform", s), w && (g.style[Ye] = s)
        };
    _("padding,margin,Width,Radius", function(e, r) {
        var t = "Right",
            i = "Bottom",
            n = "Left",
            o = (3 > r ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
                return 2 > r ? e + t : "border" + t + e
            });
        Ge[r > 1 ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            return arguments.length < 4 ? (a = o.map(function(t) {
                return vd(e, t, r)
            }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s) : (a = (i + "").split(" "), s = {}, o.forEach(function(t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }), e.init(t, s, n), void 0)
        }
    });
    var ir, nr, ar, sr = {
        name: "css",
        register: md,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, r, i, n) {
            var a, s, o, u, h, l, f, d, p, _, c, m, g, v, y, T = this._props,
                b = t.style;
            for (f in he || md(), e)
                if ("autoRound" !== f && (s = e[f], !ft[f] || !Nb(f, e, r, i, t, n)))
                    if (h = typeof s, l = Ge[f], "function" === h && (h = typeof(s = s.call(r, i, t, n))), "string" === h && ~s.indexOf("random(") && (s = ab(s)), l) l(this, t, f, s, r) && (y = 1);
                    else if ("--" === f.substr(0, 2)) this.add(b, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", s + "", i, n, 0, 0, f);
            else if ("undefined" !== h) {
                if (a = vd(t, f), u = parseFloat(a), (_ = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), o = parseFloat(s), f in qe && ("autoAlpha" === f && (1 === u && "hidden" === vd(t, "visibility") && o && (u = 0), sd(this, b, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = qe[f]).indexOf(",") && (f = f.split(",")[0])), c = f in ze)
                    if (m || ((g = t._gsap).renderTransform || Qe(t), v = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new ie(this._pt, b, Ye, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === f) this._pt = new ie(this._pt, g, "scaleY", g.scaleY, _ ? _ * o : o - g.scaleY), T.push("scaleY", f), f += "X";
                    else {
                        if ("transformOrigin" === f) {
                            s = yd(s), g.svg ? Gd(t, s, 0, v, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && sd(this, g, "zOrigin", g.zOrigin, p), sd(this, b, f, We(a), We(s)));
                            continue
                        }
                        if ("svgOrigin" === f) {
                            Gd(t, s, 1, v, 0, this);
                            continue
                        }
                        if (f in Je) {
                            Qd(this, g, f, u, s, _);
                            continue
                        }
                        if ("smoothOrigin" === f) {
                            sd(this, g, "smooth", g.smooth, s);
                            continue
                        }
                        if ("force3D" === f) {
                            g[f] = s;
                            continue
                        }
                        if ("transform" === f) {
                            Rd(this, s, t);
                            continue
                        }
                    }
                else f in b || (f = Ue(f) || f);
                if (c || (o || 0 === o) && (u || 0 === u) && !Be.test(s) && f in b)(d = (a + "").substr((u + "").length)) !== (p = (s + "").substr(((o = o || 0) + "").length) || (f in j.units ? j.units[f] : d)) && (u = ud(t, f, a, p)), this._pt = new ie(this._pt, c ? g : b, f, u, _ ? _ * o : o - u, "px" !== p || !1 === e.autoRound || c ? Vc : Yc), this._pt.u = p || 0, d !== p && (this._pt.b = a, this._pt.r = Xc);
                else if (f in b) wd.call(this, t, f, a, s);
                else {
                    if (!(f in t)) {
                        L(f, s);
                        continue
                    }
                    this.add(t, f, t[f], s, i, n)
                }
                T.push(f)
            }
            y && re(this)
        },
        get: vd,
        aliases: qe,
        getSetter: function(t, e, r) {
            var i = qe[e];
            return i && i.indexOf(",") < 0 && (e = i), e in ze && e !== Ne && (t._gsap.x || vd(t, "x")) ? r && de === r ? "scale" === e ? cd : bd : (de = r || {}) && ("scale" === e ? dd : ed) : t.style && !q(t.style[e]) ? _c : ~e.indexOf("-") ? ad : Qt(t, e)
        },
        core: {
            _removeProperty: rd,
            _getMatrix: Fd
        }
    };
    ae.utils.checkPrefix = Ue, ar = _((ir = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (nr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        ze[t] = 1
    }), _(nr, function(t) {
        j.units[t] = "deg", Je[t] = 1
    }), qe[ar[13]] = ir + "," + nr, _("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        qe[e[1]] = ar[e[0]]
    }), _("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        j.units[t] = "px"
    }), ae.registerPlugin(sr);
    var or = ae.registerPlugin(sr) || ae,
        ur = or.core.Tween;
    e.Back = Me, e.Bounce = Ae, e.CSSPlugin = sr, e.Circ = Se, e.Cubic = be, e.Elastic = Oe, e.Expo = De, e.Linear = ye, e.Power0 = _e, e.Power1 = ce, e.Power2 = me, e.Power3 = ge, e.Power4 = ve, e.Quad = Te, e.Quart = we, e.Quint = xe, e.Sine = Pe, e.SteppedEase = Ce, e.Strong = ke, e.TimelineLite = Bt, e.TimelineMax = Bt, e.TweenLite = Xt, e.TweenMax = ur, e["default"] = or, e.gsap = or, "undefined" == typeof window || window !== e ? Object.defineProperty(e, "__esModule", {
        value: !0
    }) : delete e["default"]
}), ! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function m(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }

    function arcToSegment(e, t, n, s, a, r, i, o, h) {
        if (e !== o || t !== h) {
            n = F(n), s = F(s);
            var u = a % 360 * Y,
                f = B(u),
                c = k(u),
                l = Math.PI,
                g = 2 * l,
                d = (e - o) / 2,
                m = (t - h) / 2,
                x = f * d + c * m,
                p = -c * d + f * m,
                y = x * x,
                M = p * p,
                v = y / (n * n) + M / (s * s);
            v > 1 && (n = J(v) * n, s = J(v) * s);
            var C = n * n,
                E = s * s,
                b = (C * E - C * M - E * y) / (C * M + E * y);
            0 > b && (b = 0);
            var w = (r === i ? -1 : 1) * J(b),
                P = n * p / s * w,
                S = -s * x / n * w,
                N = f * P - c * S + (e + o) / 2,
                D = c * P + f * S + (t + h) / 2,
                T = (x - P) / n,
                V = (p - S) / s,
                _ = (-x - P) / n,
                q = (-p - S) / s,
                A = T * T + V * V,
                R = (0 > V ? -1 : 1) * Math.acos(T / J(A)),
                G = (0 > T * q - V * _ ? -1 : 1) * Math.acos((T * _ + V * q) / J(A * (_ * _ + q * q)));
            isNaN(G) && (G = l), !i && G > 0 ? G -= g : i && 0 > G && (G += g), R %= g, G %= g;
            var L, O = Math.ceil(F(G) / (g / 4)),
                j = [],
                z = G / O,
                I = 4 / 3 * k(z / 2) / (1 + B(z / 2)),
                H = f * n,
                Q = c * n,
                Z = c * -s,
                U = f * s;
            for (L = 0; O > L; L++) x = B(a = R + L * z), p = k(a), T = B(a += z), V = k(a), j.push(x - I * p, p + I * x, T + I * V, V - I * T, T, V);
            for (L = 0; L < j.length; L += 2) x = j[L], p = j[L + 1], j[L] = x * H + p * Z + N, j[L + 1] = x * Q + p * U + D;
            return j[L - 2] = o, j[L - 1] = h, j
        }
    }

    function stringToRawPath(e) {
        function db(e, t, n, s) {
            f = (n - e) / 3, c = (s - t) / 3, o.push(e + f, t + c, n - f, s - c, n, s)
        }
        var t, n, s, a, r, i, o, h, u, f, c, l, g, d, m, x = (e + "").replace(w, function(e) {
                var t = +e;
                return 1e-4 > t && t > -1e-4 ? 0 : t
            }).match(b) || [],
            p = [],
            y = 0,
            M = 0,
            v = x.length,
            C = 0,
            E = "ERROR: malformed path: " + e;
        if (!e || !isNaN(x[0]) || isNaN(x[1])) return console.log(E), p;
        for (t = 0; v > t; t++)
            if (g = r, isNaN(x[t]) ? i = (r = x[t].toUpperCase()) !== x[t] : t--, s = +x[t + 1], a = +x[t + 2], i && (s += y, a += M), t || (h = s, u = a), "M" === r) o && (o.length < 8 ? --p.length : C += o.length), y = h = s, M = u = a, o = [s, a], p.push(o), t += 2, r = "L";
            else if ("C" === r) i || (y = M = 0), (o = o || [0, 0]).push(s, a, y + 1 * x[t + 3], M + 1 * x[t + 4], y += 1 * x[t + 5], M += 1 * x[t + 6]), t += 6;
        else if ("S" === r) f = y, c = M, "C" !== g && "S" !== g || (f += y - o[o.length - 4], c += M - o[o.length - 3]), i || (y = M = 0), o.push(f, c, s, a, y += 1 * x[t + 3], M += 1 * x[t + 4]), t += 4;
        else if ("Q" === r) f = y + 2 / 3 * (s - y), c = M + 2 / 3 * (a - M), i || (y = M = 0), y += 1 * x[t + 3], M += 1 * x[t + 4], o.push(f, c, y + 2 / 3 * (s - y), M + 2 / 3 * (a - M), y, M), t += 4;
        else if ("T" === r) f = y - o[o.length - 4], c = M - o[o.length - 3], o.push(y + f, M + c, s + 2 / 3 * (y + 1.5 * f - s), a + 2 / 3 * (M + 1.5 * c - a), y = s, M = a), t += 2;
        else if ("H" === r) db(y, M, y = s, M), t += 1;
        else if ("V" === r) db(y, M, y, M = s + (i ? M - y : 0)), t += 1;
        else if ("L" === r || "Z" === r) "Z" === r && (s = h, a = u, o.closed = !0), ("L" === r || .5 < F(y - s) || .5 < F(M - a)) && (db(y, M, s, a), "L" === r && (t += 2)), y = s, M = a;
        else if ("A" === r) {
            if (d = x[t + 4], m = x[t + 5], f = x[t + 6], c = x[t + 7], n = 7, 1 < d.length && (d.length < 3 ? (c = f, f = m, n--) : (c = m, f = d.substr(2), n -= 2), m = d.charAt(1), d = d.charAt(0)), l = arcToSegment(y, M, +x[t + 1], +x[t + 2], +x[t + 3], +d, +m, (i ? y : 0) + 1 * f, (i ? M : 0) + 1 * c), t += n, l)
                for (n = 0; n < l.length; n++) o.push(l[n]);
            y = o[o.length - 2], M = o[o.length - 1]
        } else console.log(E);
        return (t = o.length) < 6 ? (p.pop(), t = 0) : o[0] === o[t - 2] && o[1] === o[t - 1] && (o.closed = !0), p.totalPoints = C + t, p
    }

    function p() {
        return M || "undefined" != typeof window && (M = window.gsap) && M.registerPlugin && M
    }

    function q() {
        (M = p()) ? (M.registerEase("_CE", n.create), a = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
    }

    function s(e) {
        return ~~(1e3 * e + (0 > e ? -.5 : .5)) / 1e3
    }

    function x(e, t, n, s, a, r, i, o, h, u, f) {
        var c, l = (e + n) / 2,
            g = (t + s) / 2,
            d = (n + a) / 2,
            m = (s + r) / 2,
            p = (a + i) / 2,
            y = (r + o) / 2,
            M = (l + d) / 2,
            v = (g + m) / 2,
            C = (d + p) / 2,
            E = (m + y) / 2,
            b = (M + C) / 2,
            w = (v + E) / 2,
            P = i - e,
            S = o - t,
            N = Math.abs((n - i) * S - (s - o) * P),
            D = Math.abs((a - i) * S - (r - o) * P);
        return u || (u = [{
            x: e,
            y: t
        }, {
            x: i,
            y: o
        }], f = 1), u.splice(f || u.length - 1, 0, {
            x: b,
            y: w
        }), (N + D) * (N + D) > h * (P * P + S * S) && (c = u.length, x(e, t, l, g, M, v, b, w, h, u, f), x(b, w, C, E, p, y, i, o, h, u, f + 1 + (u.length - c))), u
    }

    function CustomEase(e, t, n) {
        a || q(), this.id = e, this.setData(t, n)
    }
    var M, a, t, b = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        w = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        Y = Math.PI / 180,
        k = Math.sin,
        B = Math.cos,
        F = Math.abs,
        J = Math.sqrt,
        y = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        v = /[cLlsSaAhHvVtTqQ]/g,
        n = ((t = CustomEase.prototype).setData = function(e, t) {
            t = t || {};
            var n, s, a, r, i, o, h, u, f, c = (e = e || "0,0,1,1").match(y),
                l = 1,
                g = [],
                d = [],
                m = t.precision || 1,
                p = 1 >= m;
            if (this.data = e, (v.test(e) || ~e.indexOf("M") && e.indexOf("C") < 0) && (c = stringToRawPath(e)[0]), 4 === (n = c.length)) c.unshift(0, 0), c.push(1, 1), n = 8;
            else if ((n - 2) % 6) throw "Invalid CustomEase";
            for (0 == +c[0] && 1 == +c[n - 2] || function(e, t, n) {
                    n || 0 === n || (n = Math.max(+e[e.length - 1], +e[1]));
                    var s, a = -1 * e[0],
                        r = -n,
                        i = e.length,
                        o = 1 / (+e[i - 2] + a),
                        h = -t || (Math.abs(e[i - 1] - e[1]) < .01 * (e[i - 2] - e[0]) ? function(e) {
                            var t, n = e.length,
                                s = 1e20;
                            for (t = 1; n > t; t += 6) + e[t] < s && (s = +e[t]);
                            return s
                        }(e) + r : +e[i - 1] + r);
                    for (h = h ? 1 / h : -o, s = 0; i > s; s += 2) e[s] = (+e[s] + a) * o, e[s + 1] = (+e[s + 1] + r) * h
                }(c, t.height, t.originY), this.segment = c, r = 2; n > r; r += 6) s = {
                x: +c[r - 2],
                y: +c[r - 1]
            }, a = {
                x: +c[r + 4],
                y: +c[r + 5]
            }, g.push(s, a), x(s.x, s.y, +c[r], +c[r + 1], +c[r + 2], +c[r + 3], a.x, a.y, 1 / (2e5 * m), g, g.length - 1);
            for (n = g.length, r = 0; n > r; r++) h = g[r], u = g[r - 1] || h, h.x > u.x || u.y !== h.y && u.x === h.x || h === u ? (u.cx = h.x - u.x, u.cy = h.y - u.y, u.n = h, u.nx = h.x, p && r > 1 && 2 < Math.abs(u.cy / u.cx - g[r - 2].cy / g[r - 2].cx) && (p = 0), u.cx < l && (u.cx ? l = u.cx : (u.cx = .001, r === n - 1 && (u.x -= .001, l = Math.min(l, .001), p = 0)))) : (g.splice(r--, 1), n--);
            if (i = 1 / (n = 1 / l + 1 | 0), h = g[o = 0], p) {
                for (r = 0; n > r; r++) f = r * i, h.nx < f && (h = g[++o]), s = h.y + (f - h.x) / h.cx * h.cy, d[r] = {
                    x: f,
                    cx: i,
                    y: s,
                    cy: 0,
                    nx: 9
                }, r && (d[r - 1].cy = s - d[r - 1].y);
                d[n - 1].cy = g[g.length - 1].y - s
            } else {
                for (r = 0; n > r; r++) h.nx < r * i && (h = g[++o]), d[r] = h;
                o < g.length - 1 && (d[r - 1] = g[g.length - 2])
            }
            return this.ease = function(e) {
                var t = d[e * n | 0] || d[n - 1];
                return t.nx < e && (t = t.n), t.y + (e - t.x) / t.cx * t.cy
            }, (this.ease.custom = this).id && M.registerEase(this.id, this.ease), this
        }, t.getSVGData = function(e) {
            return CustomEase.getSVGData(this, e)
        }, CustomEase.create = function(e, t, n) {
            return new CustomEase(e, t, n).ease
        }, CustomEase.register = function(e) {
            M = e, q()
        }, CustomEase.get = function(e) {
            return M.parseEase(e)
        }, CustomEase.getSVGData = function(e, t) {
            var n, a, r, i, o, h, u, f, c, l, g = (t = t || {}).width || 100,
                d = t.height || 100,
                x = t.x || 0,
                p = (t.y || 0) + d,
                y = M.utils.toArray(t.path)[0];
            if (t.invert && (d = -d, p = 0), "string" == typeof e && (e = M.parseEase(e)), e.custom && (e = e.custom), e instanceof CustomEase) n = function(e) {
                ! function(e) {
                    return "number" == typeof e
                }(e[0]) || (e = [e]);
                var t, n, s, a, r = "",
                    i = e.length;
                for (n = 0; i > n; n++) {
                    for (a = e[n], r += "M" + m(a[0]) + "," + m(a[1]) + " C", t = a.length, s = 2; t > s; s++) r += m(a[s++]) + "," + m(a[s++]) + " " + m(a[s++]) + "," + m(a[s++]) + " " + m(a[s++]) + "," + m(a[s]) + " ";
                    a.closed && (r += "z")
                }
                return r
            }(function(e, t, n, s, a, r, i) {
                for (var o, h, u, f, c, l = e.length; - 1 < --l;)
                    for (h = (o = e[l]).length, u = 0; h > u; u += 2) f = o[u], c = o[u + 1], o[u] = f * t + c * s + r, o[u + 1] = f * n + c * a + i;
                return e._dirty = 1, e
            }([e.segment], g, 0, 0, -d, x, p));
            else {
                for (n = [x, p], i = 1 / (u = Math.max(5, 200 * (t.precision || 1))), f = 5 / (u += 2), c = s(x + i * g), a = ((l = s(p + e(i) * -d)) - p) / (c - x), r = 2; u > r; r++) o = s(x + r * i * g), h = s(p + e(r * i) * -d), (Math.abs((h - l) / (o - c) - a) > f || r === u - 1) && (n.push(c, l), a = (h - l) / (o - c)), c = o, l = h;
                n = "M" + n.join(",")
            }
            return y && y.setAttribute("d", n), n
        }, CustomEase);
    p() && M.registerPlugin(n), n.version = "3.5.0", e.CustomEase = n, e["default"] = n, "undefined" == typeof window || window !== e ? Object.defineProperty(e, "__esModule", {
        value: !0
    }) : delete e["default"]
});
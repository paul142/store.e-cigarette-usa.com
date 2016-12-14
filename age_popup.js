/**
 * Created by paul142 on 11/30/16.
 */
/*! jQuery v1.6.4 http://jquery.com/ | http://jquery.org/license */
(function (a, b) {
    function cu(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cr(a) {
        if (!cg[a]) {
            var b = c.body, d = f("<" + a + ">").appendTo(b), e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ch || (ch = c.createElement("iframe"), ch.frameBorder = ch.width = ch.height = 0), b.appendChild(ch);
                if (!ci || !ch.createElement)ci = (ch.contentWindow || ch.contentDocument).document, ci.write((c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), ci.close();
                d = ci.createElement(a), ci.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ch)
            }
            cg[a] = e
        }
        return cg[a]
    }

    function cq(a, b) {
        var c = {};
        f.each(cm.concat.apply([], cm.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }

    function cp() {
        cn = b
    }

    function co() {
        setTimeout(cp, 0);
        return cn = f.now()
    }

    function cf() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    function ce() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function b$(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1)for (h in a.converters)typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*")k = l; else if (l !== "*" && l !== k) {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }
                !n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }

    function bZ(a, c, d) {
        var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
        for (i in g)i in d && (c[g[i]] = d[i]);
        while (f[0] === "*")f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)for (i in e)if (e[i] && e[i].test(h)) {
            f.unshift(i);
            break
        }
        if (f[0] in d)j = f[0]; else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function bY(a, b, c, d) {
        if (f.isArray(b))f.each(b, function (b, e) {
            c || bA.test(a) ? d(a, e) : bY(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d)
        }); else if (!c && b != null && typeof b == "object")for (var e in b)bY(a + "[" + e + "]", b[e], c, d); else d(a, b)
    }

    function bX(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c)c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }

    function bW(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f], i = 0, j = h ? h.length : 0, k = a === bP, l;
        for (; i < j && (k || !l); i++)l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bW(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = bW(a, c, d, e, "*", g));
        return l
    }

    function bV(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bL), e = 0, g = d.length, h, i, j;
                for (; e < g; e++)h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }

    function by(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight, e = b === "width" ? bt : bu;
        if (d > 0) {
            c !== "border" && f.each(e, function () {
                c || (d -= parseFloat(f.css(a, "padding" + this)) || 0), c === "margin" ? d += parseFloat(f.css(a, c + this)) || 0 : d -= parseFloat(f.css(a, "border" + this + "Width")) || 0
            });
            return d + "px"
        }
        d = bv(a, b, b);
        if (d < 0 || d == null)d = a.style[b] || 0;
        d = parseFloat(d) || 0, c && f.each(e, function () {
            d += parseFloat(f.css(a, "padding" + this)) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + this + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + this)) || 0)
        });
        return d + "px"
    }

    function bl(a, b) {
        b.src ? f.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bd, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
    }

    function bk(a) {
        f.nodeName(a, "input") ? bj(a) : "getElementsByTagName" in a && f.grep(a.getElementsByTagName("input"), bj)
    }

    function bj(a) {
        if (a.type === "checkbox" || a.type === "radio")a.defaultChecked = a.checked
    }

    function bi(a) {
        return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : []
    }

    function bh(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
            if (c === "object")b.outerHTML = a.outerHTML; else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                if (c === "option")b.selected = a.defaultSelected; else if (c === "input" || c === "textarea")b.defaultValue = a.defaultValue
            } else a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
            b.removeAttribute(f.expando)
        }
    }

    function bg(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c = f.expando, d = f.data(a), e = f.data(b, d);
            if (d = d[c]) {
                var g = d.events;
                e = e[c] = f.extend({}, d);
                if (g) {
                    delete e.handle, e.events = {};
                    for (var h in g)for (var i = 0, j = g[h].length; i < j; i++)f.event.add(b, h + (g[h][i].namespace ? "." : "") + g[h][i].namespace, g[h][i], g[h][i].data)
                }
            }
        }
    }

    function bf(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function V(a, b, c) {
        b = b || 0;
        if (f.isFunction(b))return f.grep(a, function (a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType)return f.grep(a, function (a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (Q.test(b))return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function U(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function M(a, b) {
        return (a && a !== "*" ? a + "." : "") + b.replace(y, "`").replace(z, "&")
    }

    function L(a) {
        var b, c, d, e, g, h, i, j, k, l, m, n, o, p = [], q = [], r = f._data(this, "events");
        if (!(a.liveFired === this || !r || !r.live || a.target.disabled || a.button && a.type === "click")) {
            a.namespace && (n = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")), a.liveFired = this;
            var s = r.live.slice(0);
            for (i = 0; i < s.length; i++)g = s[i], g.origType.replace(w, "") === a.type ? q.push(g.selector) : s.splice(i--, 1);
            e = f(a.target).closest(q, a.currentTarget);
            for (j = 0, k = e.length; j < k; j++) {
                m = e[j];
                for (i = 0; i < s.length; i++) {
                    g = s[i];
                    if (m.selector === g.selector && (!n || n.test(g.namespace)) && !m.elem.disabled) {
                        h = m.elem, d = null;
                        if (g.preType === "mouseenter" || g.preType === "mouseleave")a.type = g.preType, d = f(a.relatedTarget).closest(g.selector)[0], d && f.contains(h, d) && (d = h);
                        (!d || d !== h) && p.push({elem: h, handleObj: g, level: m.level})
                    }
                }
            }
            for (j = 0, k = p.length; j < k; j++) {
                e = p[j];
                if (c && e.level > c)break;
                a.currentTarget = e.elem, a.data = e.handleObj.data, a.handleObj = e.handleObj, o = e.handleObj.origHandler.apply(e.elem, arguments);
                if (o === !1 || a.isPropagationStopped()) {
                    c = e.level, o === !1 && (b = !1);
                    if (a.isImmediatePropagationStopped())break
                }
            }
            return b
        }
    }

    function J(a, c, d) {
        var e = f.extend({}, d[0]);
        e.type = a, e.originalEvent = {}, e.liveFired = b, f.event.handle.call(c, e), e.isDefaultPrevented() && d[0].preventDefault()
    }

    function D() {
        return !0
    }

    function C() {
        return !1
    }

    function m(a, c, d) {
        var e = c + "defer", g = c + "queue", h = c + "mark", i = f.data(a, e, b, !0);
        i && (d === "queue" || !f.data(a, g, b, !0)) && (d === "mark" || !f.data(a, h, b, !0)) && setTimeout(function () {
            !f.data(a, g, b, !0) && !f.data(a, h, b, !0) && (f.removeData(a, e, !0), i.resolve())
        }, 0)
    }

    function l(a) {
        for (var b in a)if (b !== "toJSON")return !1;
        return !0
    }

    function k(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(j, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNaN(d) ? i.test(d) ? f.parseJSON(d) : d : parseFloat(d)
                } catch (g) {
                }
                f.data(a, c, d)
            } else d = b
        }
        return d
    }

    var c = a.document, d = a.navigator, e = a.location, f = function () {
        function K() {
            if (!e.isReady) {
                try {
                    c.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(K, 1);
                    return
                }
                e.ready()
            }
        }

        var e = function (a, b) {
            return new e.fn.init(a, b, h)
        }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /\d/, n = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, o = /^[\],:{}\s]*$/, p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, r = /(?:^|:|,)(?:\s*\[)+/g, s = /(webkit)[ \/]([\w.]+)/, t = /(opera)(?:.*version)?[ \/]([\w.]+)/, u = /(msie) ([\w.]+)/, v = /(mozilla)(?:.*? rv:([\w.]+))?/, w = /-([a-z]|[0-9])/ig, x = /^-ms-/, y = function (a, b) {
            return (b + "").toUpperCase()
        }, z = d.userAgent, A, B, C, D = Object.prototype.toString, E = Object.prototype.hasOwnProperty, F = Array.prototype.push, G = Array.prototype.slice, H = String.prototype.trim, I = Array.prototype.indexOf, J = {};
        e.fn = e.prototype = {
            constructor: e, init: function (a, d, f) {
                var g, h, j, k;
                if (!a)return this;
                if (a.nodeType) {
                    this.context = this[0] = a, this.length = 1;
                    return this
                }
                if (a === "body" && !d && c.body) {
                    this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                    return this
                }
                if (typeof a == "string") {
                    a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                    if (g && (g[1] || !d)) {
                        if (g[1]) {
                            d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = n.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                            return e.merge(this, a)
                        }
                        h = c.getElementById(g[2]);
                        if (h && h.parentNode) {
                            if (h.id !== g[2])return f.find(a);
                            this.length = 1, this[0] = h
                        }
                        this.context = c, this.selector = a;
                        return this
                    }
                    return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                }
                if (e.isFunction(a))return f.ready(a);
                a.selector !== b && (this.selector = a.selector, this.context = a.context);
                return e.makeArray(a, this)
            }, selector: "", jquery: "1.6.4", length: 0, size: function () {
                return this.length
            }, toArray: function () {
                return G.call(this, 0)
            }, get: function (a) {
                return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
            }, pushStack: function (a, b, c) {
                var d = this.constructor();
                e.isArray(a) ? F.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                return d
            }, each: function (a, b) {
                return e.each(this, a, b)
            }, ready: function (a) {
                e.bindReady(), B.done(a);
                return this
            }, eq: function (a) {
                return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, slice: function () {
                return this.pushStack(G.apply(this, arguments), "slice", G.call(arguments).join(","))
            }, map: function (a) {
                return this.pushStack(e.map(this, function (b, c) {
                    return a.call(b, c, b)
                }))
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: F, sort: [].sort, splice: [].splice
        }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
            var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
            typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
            for (; j < k; j++)if ((a = arguments[j]) != null)for (c in a) {
                d = i[c], f = a[c];
                if (i === f)continue;
                l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
            }
            return i
        }, e.extend({
            noConflict: function (b) {
                a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                return e
            }, isReady: !1, readyWait: 1, holdReady: function (a) {
                a ? e.readyWait++ : e.ready(!0)
            }, ready: function (a) {
                if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                    if (!c.body)return setTimeout(e.ready, 1);
                    e.isReady = !0;
                    if (a !== !0 && --e.readyWait > 0)return;
                    B.resolveWith(c, [e]), e.fn.trigger && e(c).trigger("ready").unbind("ready")
                }
            }, bindReady: function () {
                if (!B) {
                    B = e._Deferred();
                    if (c.readyState === "complete")return setTimeout(e.ready, 1);
                    if (c.addEventListener)c.addEventListener("DOMContentLoaded", C, !1), a.addEventListener("load", e.ready, !1); else if (c.attachEvent) {
                        c.attachEvent("onreadystatechange", C), a.attachEvent("onload", e.ready);
                        var b = !1;
                        try {
                            b = a.frameElement == null
                        } catch (d) {
                        }
                        c.documentElement.doScroll && b && K()
                    }
                }
            }, isFunction: function (a) {
                return e.type(a) === "function"
            }, isArray: Array.isArray || function (a) {
                return e.type(a) === "array"
            }, isWindow: function (a) {
                return a && typeof a == "object" && "setInterval" in a
            }, isNaN: function (a) {
                return a == null || !m.test(a) || isNaN(a)
            }, type: function (a) {
                return a == null ? String(a) : J[D.call(a)] || "object"
            }, isPlainObject: function (a) {
                if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a))return !1;
                try {
                    if (a.constructor && !E.call(a, "constructor") && !E.call(a.constructor.prototype, "isPrototypeOf"))return !1
                } catch (c) {
                    return !1
                }
                var d;
                for (d in a);
                return d === b || E.call(a, d)
            }, isEmptyObject: function (a) {
                for (var b in a)return !1;
                return !0
            }, error: function (a) {
                throw a
            }, parseJSON: function (b) {
                if (typeof b != "string" || !b)return null;
                b = e.trim(b);
                if (a.JSON && a.JSON.parse)return a.JSON.parse(b);
                if (o.test(b.replace(p, "@").replace(q, "]").replace(r, "")))return (new Function("return " + b))();
                e.error("Invalid JSON: " + b)
            }, parseXML: function (c) {
                var d, f;
                try {
                    a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                } catch (g) {
                    d = b
                }
                (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                return d
            }, noop: function () {
            }, globalEval: function (b) {
                b && j.test(b) && (a.execScript || function (b) {
                    a.eval.call(a, b)
                })(b)
            }, camelCase: function (a) {
                return a.replace(x, "ms-").replace(w, y)
            }, nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            }, each: function (a, c, d) {
                var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
                if (d) {
                    if (i) {
                        for (f in a)if (c.apply(a[f], d) === !1)break
                    } else for (; g < h;)if (c.apply(a[g++], d) === !1)break
                } else if (i) {
                    for (f in a)if (c.call(a[f], f, a[f]) === !1)break
                } else for (; g < h;)if (c.call(a[g], g, a[g++]) === !1)break;
                return a
            }, trim: H ? function (a) {
                return a == null ? "" : H.call(a)
            } : function (a) {
                return a == null ? "" : (a + "").replace(k, "").replace(l, "")
            }, makeArray: function (a, b) {
                var c = b || [];
                if (a != null) {
                    var d = e.type(a);
                    a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? F.call(c, a) : e.merge(c, a)
                }
                return c
            }, inArray: function (a, b) {
                if (!b)return -1;
                if (I)return I.call(b, a);
                for (var c = 0, d = b.length; c < d; c++)if (b[c] === a)return c;
                return -1
            }, merge: function (a, c) {
                var d = a.length, e = 0;
                if (typeof c.length == "number")for (var f = c.length; e < f; e++)a[d++] = c[e]; else while (c[e] !== b)a[d++] = c[e++];
                a.length = d;
                return a
            }, grep: function (a, b, c) {
                var d = [], e;
                c = !!c;
                for (var f = 0, g = a.length; f < g; f++)e = !!b(a[f], f), c !== e && d.push(a[f]);
                return d
            }, map: function (a, c, d) {
                var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                if (k)for (; i < j; i++)f = c(a[i], i, d), f != null && (h[h.length] = f); else for (g in a)f = c(a[g], g, d), f != null && (h[h.length] = f);
                return h.concat.apply([], h)
            }, guid: 1, proxy: function (a, c) {
                if (typeof c == "string") {
                    var d = a[c];
                    c = a, a = d
                }
                if (!e.isFunction(a))return b;
                var f = G.call(arguments, 2), g = function () {
                    return a.apply(c, f.concat(G.call(arguments)))
                };
                g.guid = a.guid = a.guid || g.guid || e.guid++;
                return g
            }, access: function (a, c, d, f, g, h) {
                var i = a.length;
                if (typeof c == "object") {
                    for (var j in c)e.access(a, j, c[j], f, g, d);
                    return a
                }
                if (d !== b) {
                    f = !h && f && e.isFunction(d);
                    for (var k = 0; k < i; k++)g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                    return a
                }
                return i ? g(a[0], c) : b
            }, now: function () {
                return (new Date).getTime()
            }, uaMatch: function (a) {
                a = a.toLowerCase();
                var b = s.exec(a) || t.exec(a) || u.exec(a) || a.indexOf("compatible") < 0 && v.exec(a) || [];
                return {browser: b[1] || "", version: b[2] || "0"}
            }, sub: function () {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }

                e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                    f && f instanceof e && !(f instanceof a) && (f = a(f));
                    return e.fn.init.call(this, d, f, b)
                }, a.fn.init.prototype = a.fn;
                var b = a(c);
                return a
            }, browser: {}
        }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
            J["[object " + b + "]"] = b.toLowerCase()
        }), A = e.uaMatch(z), A.browser && (e.browser[A.browser] = !0, e.browser.version = A.version), e.browser.webkit && (e.browser.safari = !0), j.test("Â ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? C = function () {
            c.removeEventListener("DOMContentLoaded", C, !1), e.ready()
        } : c.attachEvent && (C = function () {
            c.readyState === "complete" && (c.detachEvent("onreadystatechange", C), e.ready())
        });
        return e
    }(), g = "done fail isResolved isRejected promise then always pipe".split(" "), h = [].slice;
    f.extend({
        _Deferred: function () {
            var a = [], b, c, d, e = {
                done: function () {
                    if (!d) {
                        var c = arguments, g, h, i, j, k;
                        b && (k = b, b = 0);
                        for (g = 0, h = c.length; g < h; g++)i = c[g], j = f.type(i), j === "array" ? e.done.apply(e, i) : j === "function" && a.push(i);
                        k && e.resolveWith(k[0], k[1])
                    }
                    return this
                }, resolveWith: function (e, f) {
                    if (!d && !b && !c) {
                        f = f || [], c = 1;
                        try {
                            while (a[0])a.shift().apply(e, f)
                        } finally {
                            b = [e, f], c = 0
                        }
                    }
                    return this
                }, resolve: function () {
                    e.resolveWith(this, arguments);
                    return this
                }, isResolved: function () {
                    return !!c || !!b
                }, cancel: function () {
                    d = 1, a = [];
                    return this
                }
            };
            return e
        }, Deferred: function (a) {
            var b = f._Deferred(), c = f._Deferred(), d;
            f.extend(b, {
                then: function (a, c) {
                    b.done(a).fail(c);
                    return this
                },
                always: function () {
                    return b.done.apply(b, arguments).fail.apply(this, arguments)
                },
                fail: c.done,
                rejectWith: c.resolveWith,
                reject: c.resolve,
                isRejected: c.isResolved,
                pipe: function (a, c) {
                    return f.Deferred(function (d) {
                        f.each({done: [a, "resolve"], fail: [c, "reject"]}, function (a, c) {
                            var e = c[0], g = c[1], h;
                            f.isFunction(e) ? b[a](function () {
                                h = e.apply(this, arguments), h && f.isFunction(h.promise) ? h.promise().then(d.resolve, d.reject) : d[g + "With"](this === b ? d : this, [h])
                            }) : b[a](d[g])
                        })
                    }).promise()
                },
                promise: function (a) {
                    if (a == null) {
                        if (d)return d;
                        d = a = {}
                    }
                    var c = g.length;
                    while (c--)a[g[c]] = b[g[c]];
                    return a
                }
            }), b.done(c.cancel).fail(b.cancel), delete b.cancel, a && a.call(b, b);
            return b
        }, when: function (a) {
            function i(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? h.call(arguments, 0) : c, --e || g.resolveWith(g, h.call(b, 0))
                }
            }

            var b = arguments, c = 0, d = b.length, e = d, g = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred();
            if (d > 1) {
                for (; c < d; c++)b[c] && f.isFunction(b[c].promise) ? b[c].promise().then(i(c), g.reject) : --e;
                e || g.resolveWith(g, b)
            } else g !== a && g.resolveWith(g, d ? [a] : []);
            return g.promise()
        }
    }), f.support = function () {
        var a = c.createElement("div"), b = c.documentElement, d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
        a.setAttribute("className", "t"), a.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = a.getElementsByTagName("*"), e = a.getElementsByTagName("a")[0];
        if (!d || !d.length || !e)return {};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = a.getElementsByTagName("input")[0], k = {
            leadingWhitespace: a.firstChild.nodeType === 3,
            tbody: !a.getElementsByTagName("tbody").length,
            htmlSerialize: !!a.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55$/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: a.className !== "t",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, i.checked = !0, k.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, k.optDisabled = !h.disabled;
        try {
            delete a.test
        } catch (v) {
            k.deleteExpando = !1
        }
        !a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function () {
            k.noCloneEvent = !1
        }), a.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), k.radioValue = i.value === "t", i.setAttribute("checked", "checked"), a.appendChild(i), l = c.createDocumentFragment(), l.appendChild(a.firstChild), k.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, a.innerHTML = "", a.style.width = a.style.paddingLeft = "1px", m = c.getElementsByTagName("body")[0], o = c.createElement(m ? "div" : "body"), p = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, m && f.extend(p, {position: "absolute", left: "-1000px", top: "-1000px"});
        for (t in p)o.style[t] = p[t];
        o.appendChild(a), n = m || b, n.insertBefore(o, n.firstChild), k.appendChecked = i.checked, k.boxModel = a.offsetWidth === 2, "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, k.inlineBlockNeedsLayout = a.offsetWidth === 2, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", k.shrinkWrapBlocks = a.offsetWidth !== 2), a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", q = a.getElementsByTagName("td"), u = q[0].offsetHeight === 0, q[0].style.display = "", q[1].style.display = "none", k.reliableHiddenOffsets = u && q[0].offsetHeight === 0, a.innerHTML = "", c.defaultView && c.defaultView.getComputedStyle && (j = c.createElement("div"), j.style.width = "0", j.style.marginRight = "0", a.appendChild(j), k.reliableMarginRight = (parseInt((c.defaultView.getComputedStyle(j, null) || {marginRight: 0}).marginRight, 10) || 0) === 0), o.innerHTML = "", n.removeChild(o);
        if (a.attachEvent)for (t in{
            submit: 1,
            change: 1,
            focusin: 1
        })s = "on" + t, u = s in a, u || (a.setAttribute(s, "return;"), u = typeof a[s] == "function"), k[t + "Bubbles"] = u;
        o = l = g = h = m = j = a = i = null;
        return k
    }(), f.boxModel = f.support.boxModel;
    var i = /^(?:\{.*\}|\[.*\])$/, j = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !l(a)
        },
        data: function (a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i = f.expando, j = typeof c == "string", k = a.nodeType, l = k ? f.cache : a, m = k ? a[f.expando] : a[f.expando] && f.expando;
                if ((!m || e && m && l[m] && !l[m][i]) && j && d === b)return;
                m || (k ? a[f.expando] = m = ++f.uuid : m = f.expando), l[m] || (l[m] = {}, k || (l[m].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function")e ? l[m][i] = f.extend(l[m][i], c) : l[m] = f.extend(l[m], c);
                g = l[m], e && (g[i] || (g[i] = {}), g = g[i]), d !== b && (g[f.camelCase(c)] = d);
                if (c === "events" && !g[c])return g[i] && g[i].events;
                j ? (h = g[c], h == null && (h = g[f.camelCase(c)])) : h = g;
                return h
            }
        },
        removeData: function (a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e = f.expando, g = a.nodeType, h = g ? f.cache : a, i = g ? a[f.expando] : f.expando;
                if (!h[i])return;
                if (b) {
                    d = c ? h[i][e] : h[i];
                    if (d) {
                        d[b] || (b = f.camelCase(b)), delete d[b];
                        if (!l(d))return
                    }
                }
                if (c) {
                    delete h[i][e];
                    if (!l(h[i]))return
                }
                var j = h[i][e];
                f.support.deleteExpando || !h.setInterval ? delete h[i] : h[i] = null, j ? (h[i] = {}, g || (h[i].toJSON = f.noop), h[i][e] = j) : g && (f.support.deleteExpando ? delete a[f.expando] : a.removeAttribute ? a.removeAttribute(f.expando) : a[f.expando] = null)
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b)return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), f.fn.extend({
        data: function (a, c) {
            var d = null;
            if (typeof a == "undefined") {
                if (this.length) {
                    d = f.data(this[0]);
                    if (this[0].nodeType === 1) {
                        var e = this[0].attributes, g;
                        for (var h = 0, i = e.length; h < i; h++)g = e[h].name, g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)), k(this[0], g, d[g]))
                    }
                }
                return d
            }
            if (typeof a == "object")return this.each(function () {
                f.data(this, a)
            });
            var j = a.split(".");
            j[1] = j[1] ? "." + j[1] : "";
            if (c === b) {
                d = this.triggerHandler("getData" + j[1] + "!", [j[0]]), d === b && this.length && (d = f.data(this[0], a), d = k(this[0], a, d));
                return d === b && j[1] ? this.data(j[0]) : d
            }
            return this.each(function () {
                var b = f(this), d = [j[0], c];
                b.triggerHandler("setData" + j[1] + "!", d), f.data(this, a, c), b.triggerHandler("changeData" + j[1] + "!", d)
            })
        }, removeData: function (a) {
            return this.each(function () {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function (a, c) {
            a && (c = (c || "fx") + "mark", f.data(a, c, (f.data(a, c, b, !0) || 0) + 1, !0))
        }, _unmark: function (a, c, d) {
            a !== !0 && (d = c, c = a, a = !1);
            if (c) {
                d = d || "fx";
                var e = d + "mark", g = a ? 0 : (f.data(c, e, b, !0) || 1) - 1;
                g ? f.data(c, e, g, !0) : (f.removeData(c, e, !0), m(c, d, "mark"))
            }
        }, queue: function (a, c, d) {
            if (a) {
                c = (c || "fx") + "queue";
                var e = f.data(a, c, b, !0);
                d && (!e || f.isArray(d) ? e = f.data(a, c, f.makeArray(d), !0) : e.push(d));
                return e || []
            }
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = f.queue(a, b), d = c.shift(), e;
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), d.call(a, function () {
                f.dequeue(a, b)
            })), c.length || (f.removeData(a, b + "queue", !0), m(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function (a, c) {
            typeof a != "string" && (c = a, a = "fx");
            if (c === b)return f.queue(this[0], a);
            return this.each(function () {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                f.dequeue(this, a)
            })
        }, delay: function (a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function () {
                var c = this;
                setTimeout(function () {
                    f.dequeue(c, b)
                }, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }

            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l;
            while (g--)if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f._Deferred(), !0))h++, l.done(m);
            m();
            return d.promise()
        }
    });
    var n = /[\n\t\r]/g, o = /\s+/, p = /\r/g, q = /^(?:button|input)$/i, r = /^(?:button|input|object|select|textarea)$/i, s = /^a(?:rea)?$/i, t = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, u, v;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, a, b, !0, f.attr)
        }, removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        }, prop: function (a, b) {
            return f.access(this, a, b, !0, f.prop)
        }, removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {
                }
            })
        }, addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a))return this.each(function (b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(o);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)if (!e.className && b.length === 1)e.className = a; else {
                        g = " " + e.className + " ";
                        for (h = 0, i = b.length; h < i; h++)~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                        e.className = f.trim(g)
                    }
                }
            }
            return this
        }, removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a))return this.each(function (b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(o);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className)if (a) {
                        h = (" " + g.className + " ").replace(n, " ");
                        for (i = 0, j = c.length; i < j; i++)h = h.replace(" " + c[i] + " ", " ");
                        g.className = f.trim(h)
                    } else g.className = ""
                }
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a, d = typeof b == "boolean";
            if (f.isFunction(a))return this.each(function (c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            });
            return this.each(function () {
                if (c === "string") {
                    var e, g = 0, h = f(this), i = b, j = a.split(o);
                    while (e = j[g++])i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean")this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        }, hasClass: function (a) {
            var b = " " + a + " ";
            for (var c = 0, d = this.length; c < d; c++)if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(n, " ").indexOf(b) > -1)return !0;
            return !1
        }, val: function (a) {
            var c, d, e = this[0];
            if (!arguments.length) {
                if (e) {
                    c = f.valHooks[e.nodeName.toLowerCase()] || f.valHooks[e.type];
                    if (c && "get" in c && (d = c.get(e, "value")) !== b)return d;
                    d = e.value;
                    return typeof d == "string" ? d.replace(p, "") : d == null ? "" : d
                }
                return b
            }
            var g = f.isFunction(a);
            return this.each(function (d) {
                var e = f(this), h;
                if (this.nodeType === 1) {
                    g ? h = a.call(this, d, e.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                        return a == null ? "" : a + ""
                    })), c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                    if (!c || !("set" in c) || c.set(this, h, "value") === b)this.value = h
                }
            })
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            }, select: {
                get: function (a) {
                    var b, c = a.selectedIndex, d = [], e = a.options, g = a.type === "select-one";
                    if (c < 0)return null;
                    for (var h = g ? c : 0, i = g ? c + 1 : e.length; h < i; h++) {
                        var j = e[h];
                        if (j.selected && (f.support.optDisabled ? !j.disabled : j.getAttribute("disabled") === null) && (!j.parentNode.disabled || !f.nodeName(j.parentNode, "optgroup"))) {
                            b = f(j).val();
                            if (g)return b;
                            d.push(b)
                        }
                    }
                    if (g && !d.length && e.length)return f(e[c]).val();
                    return d
                }, set: function (a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function () {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0},
        attrFix: {tabindex: "tabIndex"},
        attr: function (a, c, d, e) {
            var g = a.nodeType;
            if (!a || g === 3 || g === 8 || g === 2)return b;
            if (e && c in f.attrFn)return f(a)[c](d);
            if (!("getAttribute" in a))return f.prop(a, c, d);
            var h, i, j = g !== 1 || !f.isXMLDoc(a);
            j && (c = f.attrFix[c] || c, i = f.attrHooks[c], i || (t.test(c) ? i = v : u && (i = u)));
            if (d !== b) {
                if (d === null) {
                    f.removeAttr(a, c);
                    return b
                }
                if (i && "set" in i && j && (h = i.set(a, d, c)) !== b)return h;
                a.setAttribute(c, "" + d);
                return d
            }
            if (i && "get" in i && j && (h = i.get(a, c)) !== null)return h;
            h = a.getAttribute(c);
            return h === null ? b : h
        },
        removeAttr: function (a, b) {
            var c;
            a.nodeType === 1 && (b = f.attrFix[b] || b, f.attr(a, b, ""), a.removeAttribute(b), t.test(b) && (c = f.propFix[b] || b) in a && (a[c] = !1))
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (q.test(a.nodeName) && a.parentNode)f.error("type property can't be changed"); else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b), c && (a.value = c);
                        return b
                    }
                }
            }, value: {
                get: function (a, b) {
                    if (u && f.nodeName(a, "button"))return u.get(a, b);
                    return b in a ? a.value : null
                }, set: function (a, b, c) {
                    if (u && f.nodeName(a, "button"))return u.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e = a.nodeType;
            if (!a || e === 3 || e === 8 || e === 2)return b;
            var g, h, i = e !== 1 || !f.isXMLDoc(a);
            i && (c = f.propFix[c] || c, h = f.propHooks[c]);
            return d !== b ? h && "set" in h && (g = h.set(a, d, c)) !== b ? g : a[c] = d : h && "get" in h && (g = h.get(a, c)) !== null ? g : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : r.test(a.nodeName) || s.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabIndex = f.propHooks.tabIndex, v = {
        get: function (a, c) {
            var d;
            return f.prop(a, c) === !0 || (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        }, set: function (a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, f.support.getSetAttribute || (u = f.valHooks.button = {
        get: function (a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && d.nodeValue !== "" ? d.nodeValue : b
        }, set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    })), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        }, set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (a, b) {
                if (f.isArray(b))return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var w = /\.(.*)$/, x = /^(?:textarea|input|select)$/i, y = /\./g, z = / /g, A = /[^\w\s.|`]/g, B = function (a) {
        return a.replace(A, "\\$&")
    };
    f.event = {
        add: function (a, c, d, e) {
            if (a.nodeType !== 3 && a.nodeType !== 8) {
                if (d === !1)d = C; else if (!d)return;
                var g, h;
                d.handler && (g = d, d = g.handler), d.guid || (d.guid = f.guid++);
                var i = f._data(a);
                if (!i)return;
                var j = i.events, k = i.handle;
                j || (i.events = j = {}), k || (i.handle = k = function (a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.handle.apply(k.elem, arguments) : b
                }), k.elem = a, c = c.split(" ");
                var l, m = 0, n;
                while (l = c[m++]) {
                    h = g ? f.extend({}, g) : {
                        handler: d,
                        data: e
                    }, l.indexOf(".") > -1 ? (n = l.split("."), l = n.shift(), h.namespace = n.slice(0).sort().join(".")) : (n = [], h.namespace = ""), h.type = l, h.guid || (h.guid = d.guid);
                    var o = j[l], p = f.event.special[l] || {};
                    if (!o) {
                        o = j[l] = [];
                        if (!p.setup || p.setup.call(a, e, n, k) === !1)a.addEventListener ? a.addEventListener(l, k, !1) : a.attachEvent && a.attachEvent("on" + l, k)
                    }
                    p.add && (p.add.call(a, h), h.handler.guid || (h.handler.guid = d.guid)), o.push(h), f.event.global[l] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, c, d, e) {
            if (a.nodeType !== 3 && a.nodeType !== 8) {
                d === !1 && (d = C);
                var g, h, i, j, k = 0, l, m, n, o, p, q, r, s = f.hasData(a) && f._data(a), t = s && s.events;
                if (!s || !t)return;
                c && c.type && (d = c.handler, c = c.type);
                if (!c || typeof c == "string" && c.charAt(0) === ".") {
                    c = c || "";
                    for (h in t)f.event.remove(a, h + c);
                    return
                }
                c = c.split(" ");
                while (h = c[k++]) {
                    r = h, q = null, l = h.indexOf(".") < 0, m = [], l || (m = h.split("."), h = m.shift(), n = new RegExp("(^|\\.)" + f.map(m.slice(0).sort(), B).join("\\.(?:.*\\.)?") + "(\\.|$)")), p = t[h];
                    if (!p)continue;
                    if (!d) {
                        for (j = 0; j < p.length; j++) {
                            q = p[j];
                            if (l || n.test(q.namespace))f.event.remove(a, r, q.handler, j), p.splice(j--, 1)
                        }
                        continue
                    }
                    o = f.event.special[h] || {};
                    for (j = e || 0; j < p.length; j++) {
                        q = p[j];
                        if (d.guid === q.guid) {
                            if (l || n.test(q.namespace))e == null && p.splice(j--, 1), o.remove && o.remove.call(a, q);
                            if (e != null)break
                        }
                    }
                    if (p.length === 0 || e != null && p.length === 1)(!o.teardown || o.teardown.call(a, m) === !1) && f.removeEvent(a, h, s.handle), g = null, delete
                        t[h]
                }
                if (f.isEmptyObject(t)) {
                    var u = s.handle;
                    u && (u.elem = null), delete s.events, delete s.handle, f.isEmptyObject(s) && f.removeData(a, b, !0)
                }
            }
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (c, d, e, g) {
            var h = c.type || c, i = [], j;
            h.indexOf("!") >= 0 && (h = h.slice(0, -1), j = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
            if (!!e && !f.event.customEvent[h] || !!f.event.global[h]) {
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.exclusive = j, c.namespace = i.join("."), c.namespace_re = new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)");
                if (g || !e)c.preventDefault(), c.stopPropagation();
                if (!e) {
                    f.each(f.cache, function () {
                        var a = f.expando, b = this[a];
                        b && b.events && b.events[h] && f.event.trigger(c, d, b.handle.elem)
                    });
                    return
                }
                if (e.nodeType === 3 || e.nodeType === 8)return;
                c.result = b, c.target = e, d = d != null ? f.makeArray(d) : [], d.unshift(c);
                var k = e, l = h.indexOf(":") < 0 ? "on" + h : "";
                do {
                    var m = f._data(k, "handle");
                    c.currentTarget = k, m && m.apply(k, d), l && f.acceptData(k) && k[l] && k[l].apply(k, d) === !1 && (c.result = !1, c.preventDefault()), k = k.parentNode || k.ownerDocument || k === c.target.ownerDocument && a
                } while (k && !c.isPropagationStopped());
                if (!c.isDefaultPrevented()) {
                    var n, o = f.event.special[h] || {};
                    if ((!o._default || o._default.call(e.ownerDocument, c) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e)) {
                        try {
                            l && e[h] && (n = e[l], n && (e[l] = null), f.event.triggered = h, e[h]())
                        } catch (p) {
                        }
                        n && (e[l] = n), f.event.triggered = b
                    }
                }
                return c.result
            }
        },
        handle: function (c) {
            c = f.event.fix(c || a.event);
            var d = ((f._data(this, "events") || {})[c.type] || []).slice(0), e = !c.exclusive && !c.namespace, g = Array.prototype.slice.call(arguments, 0);
            g[0] = c, c.currentTarget = this;
            for (var h = 0, i = d.length; h < i; h++) {
                var j = d[h];
                if (e || c.namespace_re.test(j.namespace)) {
                    c.handler = j.handler, c.data = j.data, c.handleObj = j;
                    var k = j.handler.apply(this, g);
                    k !== b && (c.result = k, k === !1 && (c.preventDefault(), c.stopPropagation()));
                    if (c.isImmediatePropagationStopped())break
                }
            }
            return c.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (a) {
            if (a[f.expando])return a;
            var d = a;
            a = f.Event(d);
            for (var e = this.props.length, g; e;)g = this.props[--e], a[g] = d[g];
            a.target || (a.target = a.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement);
            if (a.pageX == null && a.clientX != null) {
                var h = a.target.ownerDocument || c, i = h.documentElement, j = h.body;
                a.pageX = a.clientX + (i && i.scrollLeft || j && j.scrollLeft || 0) - (i && i.clientLeft || j && j.clientLeft || 0), a.pageY = a.clientY + (i && i.scrollTop || j && j.scrollTop || 0) - (i && i.clientTop || j && j.clientTop || 0)
            }
            a.which == null && (a.charCode != null || a.keyCode != null) && (a.which = a.charCode != null ? a.charCode : a.keyCode), !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey), !a.which && a.button !== b && (a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0);
            return a
        },
        guid: 1e8,
        proxy: f.proxy,
        special: {
            ready: {setup: f.bindReady, teardown: f.noop}, live: {
                add: function (a) {
                    f.event.add(this, M(a.origType, a.selector), f.extend({}, a, {handler: L, guid: a.handler.guid}))
                }, remove: function (a) {
                    f.event.remove(this, M(a.origType, a.selector), a)
                }
            }, beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                }, teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        }
    }, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!this.preventDefault)return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? D : C) : this.type = a, b && f.extend(this, b), this.timeStamp = f.now(), this[f.expando] = !0
    }, f.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = D;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = D;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = D, this.stopPropagation()
        }, isDefaultPrevented: C, isPropagationStopped: C, isImmediatePropagationStopped: C
    };
    var E = function (a) {
        var b = a.relatedTarget, c = !1, d = a.type;
        a.type = a.data, b !== this && (b && (c = f.contains(this, b)), c || (f.event.handle.apply(this, arguments), a.type = d))
    }, F = function (a) {
        a.type = a.data, f.event.handle.apply(this, arguments)
    };
    f.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        f.event.special[a] = {
            setup: function (c) {
                f.event.add(this, b, c && c.selector ? F : E, a)
            }, teardown: function (a) {
                f.event.remove(this, b, a && a.selector ? F : E)
            }
        }
    }), f.support.submitBubbles || (f.event.special.submit = {
        setup: function (a, b) {
            if (!f.nodeName(this, "form"))f.event.add(this, "click.specialSubmit", function (a) {
                var b = a.target, c = f.nodeName(b, "input") || f.nodeName(b, "button") ? b.type : "";
                (c === "submit" || c === "image") && f(b).closest("form").length && J("submit", this, arguments)
            }), f.event.add(this, "keypress.specialSubmit", function (a) {
                var b = a.target, c = f.nodeName(b, "input") || f.nodeName(b, "button") ? b.type : "";
                (c === "text" || c === "password") && f(b).closest("form").length && a.keyCode === 13 && J("submit", this, arguments)
            }); else return !1
        }, teardown: function (a) {
            f.event.remove(this, ".specialSubmit")
        }
    });
    if (!f.support.changeBubbles) {
        var G, H = function (a) {
            var b = f.nodeName(a, "input") ? a.type : "", c = a.value;
            b === "radio" || b === "checkbox" ? c = a.checked : b === "select-multiple" ? c = a.selectedIndex > -1 ? f.map(a.options, function (a) {
                return a.selected
            }).join("-") : "" : f.nodeName(a, "select") && (c = a.selectedIndex);
            return c
        }, I = function (c) {
            var d = c.target, e, g;
            if (!!x.test(d.nodeName) && !d.readOnly) {
                e = f._data(d, "_change_data"), g = H(d), (c.type !== "focusout" || d.type !== "radio") && f._data(d, "_change_data", g);
                if (e === b || g === e)return;
                if (e != null || g)c.type = "change", c.liveFired = b, f.event.trigger(c, arguments[1], d)
            }
        };
        f.event.special.change = {
            filters: {
                focusout: I, beforedeactivate: I, click: function (a) {
                    var b = a.target, c = f.nodeName(b, "input") ? b.type : "";
                    (c === "radio" || c === "checkbox" || f.nodeName(b, "select")) && I.call(this, a)
                }, keydown: function (a) {
                    var b = a.target, c = f.nodeName(b, "input") ? b.type : "";
                    (a.keyCode === 13 && !f.nodeName(b, "textarea") || a.keyCode === 32 && (c === "checkbox" || c === "radio") || c === "select-multiple") && I.call(this, a)
                }, beforeactivate: function (a) {
                    var b = a.target;
                    f._data(b, "_change_data", H(b))
                }
            }, setup: function (a, b) {
                if (this.type === "file")return !1;
                for (var c in G)f.event.add(this, c + ".specialChange", G[c]);
                return x.test(this.nodeName)
            }, teardown: function (a) {
                f.event.remove(this, ".specialChange");
                return x.test(this.nodeName)
            }
        }, G = f.event.special.change.filters, G.focus = G.beforeactivate
    }
    f.support.focusinBubbles || f.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        function e(a) {
            var c = f.event.fix(a);
            c.type = b, c.originalEvent = {}, f.event.trigger(c, null, c.target), c.isDefaultPrevented() && a.preventDefault()
        }

        var d = 0;
        f.event.special[b] = {
            setup: function () {
                d++ === 0 && c.addEventListener(a, e, !0)
            }, teardown: function () {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }), f.each(["bind", "one"], function (a, c) {
        f.fn[c] = function (a, d, e) {
            var g;
            if (typeof a == "object") {
                for (var h in a)this[c](h, d, a[h], e);
                return this
            }
            if (arguments.length === 2 || d === !1)e = d, d = b;
            c === "one" ? (g = function (a) {
                f(this).unbind(a, g);
                return e.apply(this, arguments)
            }, g.guid = e.guid || f.guid++) : g = e;
            if (a === "unload" && c !== "one")this.one(a, d, e); else for (var i = 0, j = this.length; i < j; i++)f.event.add(this[i], a, g, d);
            return this
        }
    }), f.fn.extend({
        unbind: function (a, b) {
            if (typeof a == "object" && !a.preventDefault)for (var c in a)this.unbind(c, a[c]); else for (var d = 0, e = this.length; d < e; d++)f.event.remove(this[d], a, b);
            return this
        }, delegate: function (a, b, c, d) {
            return this.live(b, c, d, a)
        }, undelegate: function (a, b, c) {
            return arguments.length === 0 ? this.unbind("live") : this.die(b, null, c, a)
        }, trigger: function (a, b) {
            return this.each(function () {
                f.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            if (this[0])return f.event.trigger(a, b, this[0], !0)
        }, toggle: function (a) {
            var b = arguments, c = a.guid || f.guid++, d = 0, e = function (c) {
                var e = (f.data(this, "lastToggle" + a.guid) || 0) % d;
                f.data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                return b[e].apply(this, arguments) || !1
            };
            e.guid = c;
            while (d < b.length)b[d++].guid = c;
            return this.click(e)
        }, hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var K = {focus: "focusin", blur: "focusout", mouseenter: "mouseover", mouseleave: "mouseout"};
    f.each(["live", "die"], function (a, c) {
        f.fn[c] = function (a, d, e, g) {
            var h, i = 0, j, k, l, m = g || this.selector, n = g ? this : f(this.context);
            if (typeof a == "object" && !a.preventDefault) {
                for (var o in a)n[c](o, d, a[o], m);
                return this
            }
            if (c === "die" && !a && g && g.charAt(0) === ".") {
                n.unbind(g);
                return this
            }
            if (d === !1 || f.isFunction(d))e = d || C, d = b;
            a = (a || "").split(" ");
            while ((h = a[i++]) != null) {
                j = w.exec(h), k = "", j && (k = j[0], h = h.replace(w, ""));
                if (h === "hover") {
                    a.push("mouseenter" + k, "mouseleave" + k);
                    continue
                }
                l = h, K[h] ? (a.push(K[h] + k), h = h + k) : h = (K[h] || h) + k;
                if (c === "live")for (var p = 0, q = n.length; p < q; p++)f.event.add(n[p], "live." + M(h, m), {
                    data: d,
                    selector: m,
                    handler: e,
                    origType: h,
                    origHandler: e,
                    preType: l
                }); else n.unbind("live." + M(h, m), e)
            }
            return this
        }
    }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (a, b) {
        f.fn[b] = function (a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0)
    }), function () {
        function u(a, b, c, d, e, f) {
            for (var g = 0, h = d.length; g < h; g++) {
                var i = d[g];
                if (i) {
                    var j = !1;
                    i = i[a];
                    while (i) {
                        if (i.sizcache === c) {
                            j = d[i.sizset];
                            break
                        }
                        if (i.nodeType === 1) {
                            f || (i.sizcache = c, i.sizset = g);
                            if (typeof b != "string") {
                                if (i === b) {
                                    j = !0;
                                    break
                                }
                            } else if (k.filter(b, [i]).length > 0) {
                                j = i;
                                break
                            }
                        }
                        i = i[a]
                    }
                    d[g] = j
                }
            }
        }

        function t(a, b, c, d, e, f) {
            for (var g = 0, h = d.length; g < h; g++) {
                var i = d[g];
                if (i) {
                    var j = !1;
                    i = i[a];
                    while (i) {
                        if (i.sizcache === c) {
                            j = d[i.sizset];
                            break
                        }
                        i.nodeType === 1 && !f && (i.sizcache = c, i.sizset = g);
                        if (i.nodeName.toLowerCase() === b) {
                            j = i;
                            break
                        }
                        i = i[a]
                    }
                    d[g] = j
                }
            }
        }

        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, d = 0, e = Object.prototype.toString, g = !1, h = !0, i = /\\/g, j = /\W/;
        [0, 0].sort(function () {
            h = !1;
            return 0
        });
        var k = function (b, d, f, g) {
            f = f || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9)return [];
            if (!b || typeof b != "string")return f;
            var i, j, n, o, q, r, s, t, u = !0, w = k.isXML(d), x = [], y = b;
            do {
                a.exec(""), i = a.exec(y);
                if (i) {
                    y = i[3], x.push(i[1]);
                    if (i[2]) {
                        o = i[3];
                        break
                    }
                }
            } while (i);
            if (x.length > 1 && m.exec(b))if (x.length === 2 && l.relative[x[0]])j = v(x[0] + x[1], d); else {
                j = l.relative[x[0]] ? [d] : k(x.shift(), d);
                while (x.length)b = x.shift(), l.relative[b] && (b += x.shift()), j = v(b, j)
            } else {
                !g && x.length > 1 && d.nodeType === 9 && !w && l.match.ID.test(x[0]) && !l.match.ID.test(x[x.length - 1]) && (q = k.find(x.shift(), d, w), d = q.expr ? k.filter(q.expr, q.set)[0] : q.set[0]);
                if (d) {
                    q = g ? {
                        expr: x.pop(),
                        set: p(g)
                    } : k.find(x.pop(), x.length === 1 && (x[0] === "~" || x[0] === "+") && d.parentNode ? d.parentNode : d, w), j = q.expr ? k.filter(q.expr, q.set) : q.set, x.length > 0 ? n = p(j) : u = !1;
                    while (x.length)r = x.pop(), s = r, l.relative[r] ? s = x.pop() : r = "", s == null && (s = d), l.relative[r](n, s, w)
                } else n = x = []
            }
            n || (n = j), n || k.error(r || b);
            if (e.call(n) === "[object Array]")if (!u)f.push.apply(f, n); else if (d && d.nodeType === 1)for (t = 0; n[t] != null; t++)n[t] && (n[t] === !0 || n[t].nodeType === 1 && k.contains(d, n[t])) && f.push(j[t]); else for (t = 0; n[t] != null; t++)n[t] && n[t].nodeType === 1 && f.push(j[t]); else p(n, f);
            o && (k(o, h, f, g), k.uniqueSort(f));
            return f
        };
        k.uniqueSort = function (a) {
            if (r) {
                g = h, a.sort(r);
                if (g)for (var b = 1; b < a.length; b++)a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        }, k.matches = function (a, b) {
            return k(a, null, null, b)
        }, k.matchesSelector = function (a, b) {
            return k(b, null, null, [a]).length > 0
        }, k.find = function (a, b, c) {
            var d;
            if (!a)return [];
            for (var e = 0, f = l.order.length; e < f; e++) {
                var g, h = l.order[e];
                if (g = l.leftMatch[h].exec(a)) {
                    var j = g[1];
                    g.splice(1, 1);
                    if (j.substr(j.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(i, ""), d = l.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(l.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {set: d, expr: a}
        }, k.filter = function (a, c, d, e) {
            var f, g, h = a, i = [], j = c, m = c && c[0] && k.isXML(c[0]);
            while (a && c.length) {
                for (var n in l.filter)if ((f = l.leftMatch[n].exec(a)) != null && f[2]) {
                    var o, p, q = l.filter[n], r = f[1];
                    g = !1, f.splice(1, 1);
                    if (r.substr(r.length - 1) === "\\")continue;
                    j === i && (i = []);
                    if (l.preFilter[n]) {
                        f = l.preFilter[n](f, j, d, i, e, m);
                        if (!f)g = o = !0; else if (f === !0)continue
                    }
                    if (f)for (var s = 0; (p = j[s]) != null; s++)if (p) {
                        o = q(p, f, s, j);
                        var t = e ^ !!o;
                        d && o != null ? t ? g = !0 : j[s] = !1 : t && (i.push(p), g = !0)
                    }
                    if (o !== b) {
                        d || (j = i), a = a.replace(l.match[n], "");
                        if (!g)return [];
                        break
                    }
                }
                if (a === h)if (g == null)k.error(a); else break;
                h = a
            }
            return j
        }, k.error = function (a) {
            throw"Syntax error, unrecognized expression: " + a
        };
        var l = k.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {"class": "className", "for": "htmlFor"},
            attrHandle: {
                href: function (a) {
                    return a.getAttribute("href")
                }, type: function (a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function (a, b) {
                    var c = typeof b == "string", d = c && !j.test(b), e = c && !d;
                    d && (b = b.toLowerCase());
                    for (var f = 0, g = a.length, h; f < g; f++)if (h = a[f]) {
                        while ((h = h.previousSibling) && h.nodeType !== 1);
                        a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                    }
                    e && k.filter(b, a, !0)
                }, ">": function (a, b) {
                    var c, d = typeof b == "string", e = 0, f = a.length;
                    if (d && !j.test(b)) {
                        b = b.toLowerCase();
                        for (; e < f; e++) {
                            c = a[e];
                            if (c) {
                                var g = c.parentNode;
                                a[e] = g.nodeName.toLowerCase() === b ? g : !1
                            }
                        }
                    } else {
                        for (; e < f; e++)c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                        d && k.filter(b, a, !0)
                    }
                }, "": function (a, b, c) {
                    var e, f = d++, g = u;
                    typeof b == "string" && !j.test(b) && (b = b.toLowerCase(), e = b, g = t), g("parentNode", b, f, a, e, c)
                }, "~": function (a, b, c) {
                    var e, f = d++, g = u;
                    typeof b == "string" && !j.test(b) && (b = b.toLowerCase(), e = b, g = t), g("previousSibling", b, f, a, e, c)
                }
            },
            find: {
                ID: function (a, b, c) {
                    if (typeof b.getElementById != "undefined" && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                }, NAME: function (a, b) {
                    if (typeof b.getElementsByName != "undefined") {
                        var c = [], d = b.getElementsByName(a[1]);
                        for (var e = 0, f = d.length; e < f; e++)d[e].getAttribute("name") === a[1] && c.push(d[e]);
                        return c.length === 0 ? null : c
                    }
                }, TAG: function (a, b) {
                    if (typeof b.getElementsByTagName != "undefined")return b.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function (a, b, c, d, e, f) {
                    a = " " + a[1].replace(i, "") + " ";
                    if (f)return a;
                    for (var g = 0, h; (h = b[g]) != null; g++)h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                    return !1
                }, ID: function (a) {
                    return a[1].replace(i, "")
                }, TAG: function (a, b) {
                    return a[1].replace(i, "").toLowerCase()
                }, CHILD: function (a) {
                    if (a[1] === "nth") {
                        a[2] || k.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                    } else a[2] && k.error(a[0]);
                    a[0] = d++;
                    return a
                }, ATTR: function (a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(i, "");
                    !f && l.attrMap[g] && (a[1] = l.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(i, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                    return a
                }, PSEUDO: function (b, c, d, e, f) {
                    if (b[1] === "not")if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))b[3] = k(b[3], null, null, c); else {
                        var g = k.filter(b[3], c, d, !0 ^ f);
                        d || e.push.apply(e, g);
                        return !1
                    } else if (l.match.POS.test(b[0]) || l.match.CHILD.test(b[0]))return !0;
                    return b
                }, POS: function (a) {
                    a.unshift(!0);
                    return a
                }
            },
            filters: {
                enabled: function (a) {
                    return a.disabled === !1 && a.type !== "hidden"
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    return a.checked === !0
                }, selected: function (a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === !0
                }, parent: function (a) {
                    return !!a.firstChild
                }, empty: function (a) {
                    return !a.firstChild
                }, has: function (a, b, c) {
                    return !!k(c[3], a).length
                }, header: function (a) {
                    return /h\d/i.test(a.nodeName)
                }, text: function (a) {
                    var b = a.getAttribute("type"), c = a.type;
                    return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                }, radio: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                }, checkbox: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                }, file: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "file" === a.type
                }, password: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "password" === a.type
                }, submit: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "submit" === a.type
                }, image: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "image" === a.type
                }, reset: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "reset" === a.type
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && "button" === a.type || b === "button"
                }, input: function (a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                }, focus: function (a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (a, b) {
                    return b === 0
                }, last: function (a, b, c, d) {
                    return b === d.length - 1
                }, even: function (a, b) {
                    return b % 2 === 0
                }, odd: function (a, b) {
                    return b % 2 === 1
                }, lt: function (a, b, c) {
                    return b < c[3] - 0
                }, gt: function (a, b, c) {
                    return b > c[3] - 0
                }, nth: function (a, b, c) {
                    return c[3] - 0 === b
                }, eq: function (a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function (a, b, c, d) {
                    var e = b[1], f = l.filters[e];
                    if (f)return f(a, c, b, d);
                    if (e === "contains")return (a.textContent || a.innerText || k.getText([a]) || "").indexOf(b[3]) >= 0;
                    if (e === "not") {
                        var g = b[3];
                        for (var h = 0, i = g.length; h < i; h++)if (g[h] === a)return !1;
                        return !0
                    }
                    k.error(e)
                }, CHILD: function (a, b) {
                    var c = b[1], d = a;
                    switch (c) {
                        case"only":
                        case"first":
                            while (d = d.previousSibling)if (d.nodeType === 1)return !1;
                            if (c === "first")return !0;
                            d = a;
                        case"last":
                            while (d = d.nextSibling)if (d.nodeType === 1)return !1;
                            return !0;
                        case"nth":
                            var e = b[2], f = b[3];
                            if (e === 1 && f === 0)return !0;
                            var g = b[0], h = a.parentNode;
                            if (h && (h.sizcache !== g || !a.nodeIndex)) {
                                var i = 0;
                                for (d = h.firstChild; d; d = d.nextSibling)d.nodeType === 1 && (d.nodeIndex = ++i);
                                h.sizcache = g
                            }
                            var j = a.nodeIndex - f;
                            return e === 0 ? j === 0 : j % e === 0 && j / e >= 0
                    }
                }, ID: function (a, b) {
                    return a.nodeType === 1 && a.getAttribute("id") === b
                }, TAG: function (a, b) {
                    return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
                }, CLASS: function (a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                }, ATTR: function (a, b) {
                    var c = b[1], d = l.attrHandle[c] ? l.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c), e = d + "", f = b[2], g = b[4];
                    return d == null ? f === "!=" : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                }, POS: function (a, b, c, d) {
                    var e = b[2], f = l.setFilters[e];
                    if (f)return f(a, c, b, d)
                }
            }
        }, m = l.match.POS, n = function (a, b) {
            return "\\" + (b - 0 + 1)
        };
        for (var o in l.match)l.match[o] = new RegExp(l.match[o].source + /(?![^\[]*\])(?![^\(]*\))/.source), l.leftMatch[o] = new RegExp(/(^(?:.|\r|\n)*?)/.source + l.match[o].source.replace(/\\(\d+)/g, n));
        var p = function (a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (q) {
            p = function (a, b) {
                var c = 0, d = b || [];
                if (e.call(a) === "[object Array]")Array.prototype.push.apply(d, a); else if (typeof a.length == "number")for (var f = a.length; c < f; c++)d.push(a[c]); else for (; a[c]; c++)d.push(a[c]);
                return d
            }
        }
        var r, s;
        c.documentElement.compareDocumentPosition ? r = function (a, b) {
            if (a === b) {
                g = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition)return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (r = function (a, b) {
            if (a === b) {
                g = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex)return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], h = a.parentNode, i = b.parentNode, j = h;
            if (h === i)return s(a, b);
            if (!h)return -1;
            if (!i)return 1;
            while (j)e.unshift(j), j = j.parentNode;
            j = i;
            while (j)f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++)if (e[k] !== f[k])return s(e[k], f[k]);
            return k === c ? s(a, f[k], -1) : s(e[k], b, 1)
        }, s = function (a, b, c) {
            if (a === b)return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b)return -1;
                d = d.nextSibling
            }
            return 1
        }), k.getText = function (a) {
            var b = "", c;
            for (var d = 0; a[d]; d++)c = a[d], c.nodeType === 3 || c.nodeType === 4 ? b += c.nodeValue : c.nodeType !== 8 && (b += k.getText(c.childNodes));
            return b
        }, function () {
            var a = c.createElement("div"), d = "script" + (new Date).getTime(), e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (l.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, l.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(), function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (l.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++)c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (l.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll && function () {
            var a = k, b = c.createElement("div"), d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                k = function (b, e, f, g) {
                    e = e || c;
                    if (!g && !k.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1])return p(e.getElementsByTagName(b), f);
                            if (h[2] && l.find.CLASS && e.getElementsByClassName)return p(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body)return p([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode)return p([], f);
                                if (i.id === h[3])return p([i], f)
                            }
                            try {
                                return p(e.querySelectorAll(b), f)
                            } catch (j) {
                            }
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var m = e, n = e.getAttribute("id"), o = n || d, q = e.parentNode, r = /^\s*[+~]/.test(b);
                            n ? o = o.replace(/'/g, "\\$&") : e.setAttribute("id", o), r && q && (e = e.parentNode);
                            try {
                                if (!r || q)return p(e.querySelectorAll("[id='" + o + "'] " + b), f)
                            } catch (s) {
                            } finally {
                                n || m.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a)k[e] = a[e];
                b = null
            }
        }(), function () {
            var a = c.documentElement, b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"), e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                k.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!k.isXML(a))try {
                        if (e || !l.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11)return f
                        }
                    } catch (g) {
                    }
                    return k(c, null, null, [a]).length > 0
                }
            }
        }(), function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1)return;
                l.order.splice(1, 0, "CLASS"), l.find.CLASS = function (a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c)return b.getElementsByClassName(a[1])
                }, a = null
            }
        }(), c.documentElement.contains ? k.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? k.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : k.contains = function () {
            return !1
        }, k.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var v = function (a, b) {
            var c, d = [], e = "", f = b.nodeType ? [b] : b;
            while (c = l.match.PSEUDO.exec(a))e += c[0], a = a.replace(l.match.PSEUDO, "");
            a = l.relative[a] ? a + "*" : a;
            for (var g = 0, h = f.length; g < h; g++)k(a, f[g], d);
            return k.filter(e, d)
        };
        f.find = k, f.expr = k.selectors, f.expr[":"] = f.expr.filters, f.unique = k.uniqueSort, f.text = k.getText, f.isXMLDoc = k.isXML, f.contains = k.contains
    }();
    var N = /Until$/, O = /^(?:parents|prevUntil|prevAll)/, P = /,/, Q = /^.[^:#\[\.,]*$/, R = Array.prototype.slice, S = f.expr.match.POS, T = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    f.fn.extend({
        find: function (a) {
            var b = this, c, d;
            if (typeof a != "string")return f(a).filter(function () {
                for (c = 0, d = b.length; c < d; c++)if (f.contains(b[c], this))return !0
            });
            var e = this.pushStack("", "find", a), g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0)for (h = g; h < e.length; h++)for (i = 0; i < g; i++)if (e[i] === e[h]) {
                    e.splice(h--, 1);
                    break
                }
            }
            return e
        }, has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++)if (f.contains(this, b[a]))return !0
            })
        }, not: function (a) {
            return this.pushStack(V(this, a, !1), "not", a)
        }, filter: function (a) {
            return this.pushStack(V(this, a, !0), "filter", a)
        }, is: function (a) {
            return !!a && (typeof a == "string" ? f.filter(a, this).length > 0 : this.filter(a).length > 0)
        }, closest: function (a, b) {
            var c = [], d, e, g = this[0];
            if (f.isArray(a)) {
                var h, i, j = {}, k = 1;
                if (g && a.length) {
                    for (d = 0, e = a.length; d < e; d++)i = a[d], j[i] || (j[i] = S.test(i) ? f(i, b || this.context) : i);
                    while (g && g.ownerDocument && g !== b) {
                        for (i in j)h = j[i], (h.jquery ? h.index(g) > -1 : f(g).is(h)) && c.push({
                            selector: i,
                            elem: g,
                            level: k
                        });
                        g = g.parentNode, k++
                    }
                }
                return c
            }
            var l = S.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (l ? l.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11)break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        }, index: function (a) {
            if (!a)return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == "string")return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        }, add: function (a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a), d = f.merge(this.get(), c);
            return this.pushStack(U(c[0]) || U(d[0]) ? d : f.unique(d))
        }, andSelf: function () {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        }, parents: function (a) {
            return f.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return f.dir(a, "parentNode", c)
        }, next: function (a) {
            return f.nth(a, 2, "nextSibling")
        }, prev: function (a) {
            return f.nth(a, 2, "previousSibling")
        }, nextAll: function (a) {
            return f.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return f.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return f.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return f.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return f.sibling(a.parentNode.firstChild, a)
        }, children: function (a) {
            return f.sibling(a.firstChild)
        }, contents: function (a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c), g = R.call(arguments);
            N.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !T[a] ? f.unique(e) : e, (this.length > 1 || P.test(d)) && O.test(a) && (e = e.reverse());
            return this.pushStack(e, a, g.join(","))
        }
    }), f.extend({
        filter: function (a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        }, dir: function (a, c, d) {
            var e = [], g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d)))g.nodeType === 1 && e.push(g), g = g[c];
            return e
        }, nth: function (a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c])if (a.nodeType === 1 && ++e === b)break;
            return a
        }, sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling)a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var W = / jQuery\d+="(?:\d+|null)"/g, X = /^\s+/, Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Z = /<([\w:]+)/, $ = /<tbody/i, _ = /<|&#?\w+;/, ba = /<(?:script|object|embed|option|style)/i, bb = /checked\s*(?:[^=]|=\s*.checked.)/i, bc = /\/(java|ecma)script/i, bd = /^\s*<!(?:\[CDATA\[|\-\-)/, be = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    };
    be.optgroup = be.option, be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, be.th = be.td, f.support.htmlSerialize || (be._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function (a) {
            if (f.isFunction(a))return this.each(function (b) {
                var c = f(this);
                c.text(a.call(this, b, c.text()))
            });
            if (typeof a != "object" && a !== b)return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a));
            return f.text(this)
        }, wrapAll: function (a) {
            if (f.isFunction(a))return this.each(function (b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1)a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            if (f.isFunction(a))return this.each(function (b) {
                f(this).wrapInner(a.call(this, b))
            });
            return this.each(function () {
                var b = f(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            return this.each(function () {
                f(this).wrapAll(a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        }, before: function () {
            if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = f(arguments[0]);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        }, after: function () {
            if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f(arguments[0]).toArray());
                return a
            }
        }, remove: function (a, b) {
            for (var c = 0, d; (d = this[c]) != null; c++)if (!a || f.filter(a, [d]).length)!b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        }, empty: function () {
            for (var a = 0, b; (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild)b.removeChild(b.firstChild)
            }
            return this
        }, clone: function (a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function () {
                return f.clone(this, a, b)
            })
        }, html: function (a) {
            if (a === b)return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(W, "") : null;
            if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !be[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Y, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; c < d; c++)this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch (e) {
                    this.empty().append(a)
                }
            } else f.isFunction(a) ? this.each(function (b) {
                var c = f(this);
                c.html(a.call(this, b, c.html()))
            }) : this.empty().append(a);
            return this
        }, replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a))return this.each(function (b) {
                    var c = f(this), d = c.html();
                    c.replaceWith(a.call(this, b, d))
                });
                typeof a != "string" && (a = f(a).detach());
                return this.each(function () {
                    var b = this.nextSibling, c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, c, d) {
            var e, g, h, i, j = a[0], k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bb.test(j))return this.each(function () {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j))return this.each(function (e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
            });
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {fragment: i} : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++)d.call(c ? bf(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, bl)
            }
            return this
        }
    }), f.buildFragment = function (a, b, d) {
        var e, g, h, i;
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof a[0] == "string" && a[0].length < 512 && i === c && a[0].charAt(0) === "<" && !ba.test(a[0]) && (f.support.checkClone || !bb.test(a[0])) && (g = !0, h = f.fragments[a[0]], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean
        (a, i, e, d)), g && (f.fragments[a[0]] = h ? e : 1);
        return {fragment: e, cacheable: g}
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        f.fn[a] = function (c) {
            var d = [], e = f(c), g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function (a, b, c) {
            var d = a.cloneNode(!0), e, g, h;
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bh(a, d), e = bi(a), g = bi(d);
                for (h = 0; e[h]; ++h)g[h] && bh(e[h], g[h])
            }
            if (b) {
                bg(a, d);
                if (c) {
                    e = bi(a), g = bi(d);
                    for (h = 0; e[h]; ++h)bg(e[h], g[h])
                }
            }
            e = g = null;
            return d
        }, clean: function (a, b, d, e) {
            var g;
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            var h = [], i;
            for (var j = 0, k; (k = a[j]) != null; j++) {
                typeof k == "number" && (k += "");
                if (!k)continue;
                if (typeof k == "string")if (!_.test(k))k = b.createTextNode(k); else {
                    k = k.replace(Y, "<$1></$2>");
                    var l = (Z.exec(k) || ["", ""])[1].toLowerCase(), m = be[l] || be._default, n = m[0], o = b.createElement("div");
                    o.innerHTML = m[1] + k + m[2];
                    while (n--)o = o.lastChild;
                    if (!f.support.tbody) {
                        var p = $.test(k), q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
                        for (i = q.length - 1; i >= 0; --i)f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                    }
                    !f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild), k = o.childNodes
                }
                var r;
                if (!f.support.appendChecked)if (k[0] && typeof (r = k.length) == "number")for (i = 0; i < r; i++)bk(k[i]); else bk(k);
                k.nodeType ? h.push(k) : h = f.merge(h, k)
            }
            if (d) {
                g = function (a) {
                    return !a.type || bc.test(a.type)
                };
                for (j = 0; h[j]; j++)if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript"))e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]); else {
                    if (h[j].nodeType === 1) {
                        var s = f.grep(h[j].getElementsByTagName("script"), g);
                        h.splice.apply(h, [j + 1, 0].concat(s))
                    }
                    d.appendChild(h[j])
                }
            }
            return h
        }, cleanData: function (a) {
            var b, c, d = f.cache, e = f.expando, g = f.event.special, h = f.support.deleteExpando;
            for (var i = 0, j; (j = a[i]) != null; i++) {
                if (j.nodeName && f.noData[j.nodeName.toLowerCase()])continue;
                c = j[f.expando];
                if (c) {
                    b = d[c] && d[c][e];
                    if (b && b.events) {
                        for (var k in b.events)g[k] ? f.event.remove(j, k) : f.removeEvent(j, k, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    h ? delete j[f.expando] : j.removeAttribute && j.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bm = /alpha\([^)]*\)/i, bn = /opacity=([^)]*)/, bo = /([A-Z]|^ms)/g, bp = /^-?\d+(?:px)?$/i, bq = /^-?\d/, br = /^([\-+])=([\-+.\de]+)/, bs = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, bt = ["Left", "Right"], bu = ["Top", "Bottom"], bv, bw, bx;
    f.fn.css = function (a, c) {
        if (arguments.length === 2 && c === b)return this;
        return f.access(this, a, c, !0, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        })
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = bv(a, "opacity", "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": f.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b)return g;
                    return j[c]
                }
                h = typeof d, h === "string" && (g = br.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d))return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b)try {
                    j[c] = d
                } catch (l) {
                }
            }
        },
        css: function (a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b)return e;
            if (bv)return bv(a, c)
        },
        swap: function (a, b, c) {
            var d = {};
            for (var e in b)d[e] = a.style[e], a.style[e] = b[e];
            c.call(a);
            for (e in b)a.style[e] = d[e]
        }
    }), f.curCSS = f.css, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {
            get: function (a, c, d) {
                var e;
                if (c) {
                    if (a.offsetWidth !== 0)return by(a, b, d);
                    f.swap(a, bs, function () {
                        e = by(a, b, d)
                    });
                    return e
                }
            }, set: function (a, b) {
                if (!bp.test(b))return b;
                b = parseFloat(b);
                if (b >= 0)return b + "px"
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b) {
            return bn.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = f.isNaN(b) ? "" : "alpha(opacity=" + b * 100 + ")", g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bm, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter)return
            }
            c.filter = bm.test(g) ? g.replace(bm, e) : g + " " + e
        }
    }), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (a, b) {
                var c;
                f.swap(a, {display: "inline-block"}, function () {
                    b ? c = bv(a, "margin-right", "marginRight") : c = a.style.marginRight
                });
                return c
            }
        })
    }), c.defaultView && c.defaultView.getComputedStyle && (bw = function (a, c) {
        var d, e, g;
        c = c.replace(bo, "-$1").toLowerCase();
        if (!(e = a.ownerDocument.defaultView))return b;
        if (g = e.getComputedStyle(a, null))d = g.getPropertyValue(c), d === "" && !f.contains(a.ownerDocument.documentElement, a) && (d = f.style(a, c));
        return d
    }), c.documentElement.currentStyle && (bx = function (a, b) {
        var c, d = a.currentStyle && a.currentStyle[b], e = a.runtimeStyle && a.runtimeStyle[b], f = a.style;
        !bp.test(d) && bq.test(d) && (c = f.left, e && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : d || 0, d = f.pixelLeft + "px", f.left = c, e && (a.runtimeStyle.left = e));
        return d === "" ? "auto" : d
    }), bv = bw || bx, f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth, c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    });
    var bz = /%20/g, bA = /\[\]$/, bB = /\r?\n/g, bC = /#.*$/, bD = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bE = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bF = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bG = /^(?:GET|HEAD)$/, bH = /^\/\//, bI = /\?/, bJ = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bK = /^(?:select|textarea)/i, bL = /\s+/, bM = /([?&])_=[^&]*/, bN = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bO = f.fn.load, bP = {}, bQ = {}, bR, bS, bT = ["*/"] + ["*"];
    try {
        bR = e.href
    } catch (bU) {
        bR = c.createElement("a"), bR.href = "", bR = bR.href
    }
    bS = bN.exec(bR.toLowerCase()) || [], f.fn.extend({
        load: function (a, c, d) {
            if (typeof a != "string" && bO)return bO.apply(this, arguments);
            if (!this.length)return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a, type: h, dataType: "html", data: c, complete: function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bJ, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        }, serialize: function () {
            return f.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || bK.test(this.nodeName) || bE.test(this.type))
            }).map(function (a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                    return {name: b.name, value: a.replace(bB, "\r\n")}
                }) : {name: b.name, value: c.replace(bB, "\r\n")}
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.bind(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({type: c, url: a, data: d, success: e, dataType: g})
        }
    }), f.extend({
        getScript: function (a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            b ? bX(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), bX(a, b);
            return a
        },
        ajaxSettings: {
            url: bR,
            isLocal: bF.test(bS[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bT
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": a.String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML},
            flatOptions: {context: !0, url: !0}
        },
        ajaxPrefilter: bV(bP),
        ajaxTransport: bV(bQ),
        ajax: function (a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c, x = l ? bZ(d, v, l) : b, y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified"))f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag"))f.etag[k] = z
                        }
                        if (a === 304)w = "notmodified", o = !0; else try {
                            r = b$(d, x), w = "success", o = !0
                        } catch (A) {
                            w = "parsererror", u = A
                        }
                    } else {
                        u = w;
                        if (!w || a)w = "error", a < 0 && (a = 0)
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.resolveWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }

            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f._Deferred(), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = {
                readyState: 0,
                setRequestHeader: function (a, b) {
                    if (!s) {
                        var c = a.toLowerCase();
                        a = m[c] = m[c] || a, l[a] = b
                    }
                    return this
                },
                getAllResponseHeaders: function () {
                    return s === 2 ? n : null
                },
                getResponseHeader: function (a) {
                    var c;
                    if (s === 2) {
                        if (!o) {
                            o = {};
                            while (c = bD.exec(n))o[c[1].toLowerCase()] = c[2]
                        }
                        c = o[a.toLowerCase()]
                    }
                    return c === b ? null : c
                },
                overrideMimeType: function (a) {
                    s || (d.mimeType = a);
                    return this
                },
                abort: function (a) {
                    a = a || "abort", p && p.abort(a), w(0, a);
                    return this
                }
            };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.done, v.statusCode = function (a) {
                if (a) {
                    var b;
                    if (s < 2)for (b in a)j[b] = [j[b], a[b]]; else b = a[v.status], v.then(b, b)
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bC, "").replace(bH, bS[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bL), d.crossDomain == null && (r = bN.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bS[1] && r[2] == bS[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bS[3] || (bS[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bW(bP, d, c, v);
            if (s === 2)return !1;
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bG.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bI.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(), y = d.url.replace(bM, "$1_=" + x);
                    d.url = y + (y === d.url ? (bI.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }
            (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bT + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers)v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in{success: 1, error: 1, complete: 1})v[u](d[u]);
            p = bW(bQ, d, c, v);
            if (!p)w(-1, "No Transport"); else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    s < 2 ? w(-1, z) : f.error(z)
                }
            }
            return v
        },
        param: function (a, c) {
            var d = [], e = function (a, b) {
                b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a))f.each(a, function () {
                e(this.name, this.value)
            }); else for (var g in a)bY(g, a[g], c, e);
            return d.join("&").replace(bz, "+")
        }
    }), f.extend({active: 0, lastModified: {}, etag: {}});
    var b_ = f.now(), ca = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            return f.expando + "_" + b_++
        }
    }), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ca.test(b.url) || e && ca.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(ca, l), b.url === j && (e && (k = k.replace(ca, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function (f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState))d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                    }, e.insertBefore(d, e.firstChild)
                }, abort: function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var cb = a.ActiveXObject ? function () {
        for (var a in cd)cd[a](0, 1)
    } : !1, cc = 0, cd;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && ce() || cf()
    } : ce, function (a) {
        f.extend(f.support, {ajax: !!a, cors: !!a && "withCredentials" in a})
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function (e, g) {
                    var h = c.xhr(), i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields)for (j in c.xhrFields)h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e)h.setRequestHeader(j, e[j])
                    } catch (k) {
                    }
                    h.send(c.hasContent && c.data || null), d = function (a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b, i && (h.onreadystatechange = f.noop, cb && delete cd[i]);
                                if (e)h.readyState !== 4 && h.abort(); else {
                                    j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText;
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }
                                    !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }, !c.async || h.readyState === 4 ? d() : (i = ++cc, cb && (cd || (cd = {}, f(a).unload(cb)), cd[i] = d), h.onreadystatechange = d)
                }, abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var cg = {}, ch, ci, cj = /^(?:toggle|show|hide)$/, ck = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, cl, cm = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], cn;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0)return this.animate(cq("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++)d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cr(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none")d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        }, hide: function (a, b, c) {
            if (a || a === 0)return this.animate(cq("hide", 3), a, b, c);
            for (var d = 0, e = this.length; d < e; d++)if (this[d].style) {
                var g = f.css(this[d], "display");
                g !== "none" && !f._data(this[d], "olddisplay") && f._data(this[d], "olddisplay", g)
            }
            for (d = 0; d < e; d++)this[d].style && (this[d].style.display = "none");
            return this
        }, _toggle: f.fn.toggle, toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(cq("toggle", 3), a, b, c);
            return this
        }, fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a))return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return this[e.queue === !1 ? "each" : "queue"](function () {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m, n, o;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d)return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (f.support.inlineBlockNeedsLayout ? (j = cr(this.nodeName), j === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a)k = new f.fx(this, b, i), h = a[i], cj.test(h) ? k[h === "toggle" ? d ? "show" : "hide" : h]() : (l = ck.exec(h), m = k.cur(), l ? (n = parseFloat(l[2]), o = l[3] || (f.cssNumber[i] ? "" : "px"), o !== "px" && (f.style(this, i, (n || 1) + o), m = (n || 1) / k.cur() * m, f.style(this, i, m + o)), l[1] && (n = (l[1] === "-=" ? -1 : 1) * n + m), k.custom(m, n, o)) : k.custom(m, h, ""));
                return !0
            })
        }, stop: function (a, b) {
            a && this.queue([]), this.each(function () {
                var a = f.timers, c = a.length;
                b || f._unmark(!0, this);
                while (c--)a[c].elem === this && (b && a[c](!0), a.splice(c, 1))
            }), b || this.dequeue();
            return this
        }
    }), f.each({
        slideDown: cq("show", 1),
        slideUp: cq("hide", 1),
        slideToggle: cq("toggle", 1),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function (a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default, d.old = d.complete, d.complete = function (a) {
                f.isFunction(d.old) && d.old.call(this), d.queue !== !1 ? f.dequeue(this) : a !== !1 && f._unmark(this)
            };
            return d
        }, easing: {
            linear: function (a, b, c, d) {
                return c + d * a
            }, swing: function (a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        }, timers: [], fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        }, cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        }, custom: function (a, b, c) {
            function g(a) {
                return d.step(a)
            }

            var d = this, e = f.fx;
            this.startTime = cn || co(), this.start = a, this.end = b, this.unit = c || this.unit || (f.cssNumber[this.prop] ? "" : "px"), this.now = this.start, this.pos = this.state = 0, g.elem = this.elem, g() && f.timers.push(g) && !cl && (cl = setInterval(e.tick, e.interval))
        }, show: function () {
            this.options.orig[this.prop] = f.style(this.elem, this.prop), this.options.show = !0, this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        }, hide: function () {
            this.options.orig[this.prop] = f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        }, step: function (a) {
            var b = cn || co(), c = !0, d = this.elem, e = this.options, g, h;
            if (a || b >= e.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), e.animatedProperties[this.prop] = !0;
                for (g in e.animatedProperties)e.animatedProperties[g] !== !0 && (c = !1);
                if (c) {
                    e.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                        d.style["overflow" + b] = e.overflow[a]
                    }), e.hide && f(d).hide();
                    if (e.hide || e.show)for (var i in e.animatedProperties)f.style(d, i, e.orig[i]);
                    e.complete.call(d)
                }
                return !1
            }
            e.duration == Infinity ? this.now = b : (h = b - this.startTime, this.state = h / e.duration, this.pos = f.easing[e.animatedProperties[this.prop]](this.state, h, 0, 1, e.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function () {
            for (var a = f.timers, b = 0; b < a.length; ++b)a[b]() || a.splice(b--, 1);
            a.length || f.fx.stop()
        }, interval: 13, stop: function () {
            clearInterval(cl), cl = null
        }, speeds: {slow: 600, fast: 200, _default: 400}, step: {
            opacity: function (a) {
                f.style(a.elem, "opacity", a.now)
            }, _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var cs = /^t(?:able|d|h)$/i, ct = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? f.fn.offset = function (a) {
        var b = this[0], c;
        if (a)return this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument)return null;
        if (b === b.ownerDocument.body)return f.offset.bodyOffset(b);
        try {
            c = b.getBoundingClientRect()
        } catch (d) {
        }
        var e = b.ownerDocument, g = e.documentElement;
        if (!c || !f.contains(g, b))return c ? {top: c.top, left: c.left} : {top: 0, left: 0};
        var h = e.body, i = cu(e), j = g.clientTop || h.clientTop || 0, k = g.clientLeft || h.clientLeft || 0, l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop, m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft, n = c.top + l - j, o = c.left + m - k;
        return {top: n, left: o}
    } : f.fn.offset = function (a) {
        var b = this[0];
        if (a)return this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument)return null;
        if (b === b.ownerDocument.body)return f.offset.bodyOffset(b);
        f.offset.initialize();
        var c, d = b.offsetParent, e = b, g = b.ownerDocument, h = g.documentElement, i = g.body, j = g.defaultView, k = j ? j.getComputedStyle(b, null) : b.currentStyle, l = b.offsetTop, m = b.offsetLeft;
        while ((b = b.parentNode) && b !== i && b !== h) {
            if (f.offset.supportsFixedPosition && k.position === "fixed")break;
            c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, f.offset.doesNotAddBorder && (!f.offset.doesAddBorderForTableAndCells || !cs.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.offset.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c
        }
        if (k.position === "relative" || k.position === "static")l += i.offsetTop, m += i.offsetLeft;
        f.offset.supportsFixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
        return {top: l, left: m}
    }, f.offset = {
        initialize: function () {
            var a = c.body, b = c.createElement("div"), d, e, g, h, i = parseFloat(f.css(a, "marginTop")) || 0, j = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            f.extend(b.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            }), b.innerHTML = j, a.insertBefore(b, a.firstChild), d = b.firstChild, e = d.firstChild, h = d.nextSibling.firstChild.firstChild, this.doesNotAddBorder = e.offsetTop !== 5, this.doesAddBorderForTableAndCells = h.offsetTop === 5, e.style.position = "fixed", e.style.top = "20px", this.supportsFixedPosition = e.offsetTop === 20 || e.offsetTop === 15, e.style.position = e.style.top = "", d.style.overflow = "hidden", d.style.position = "relative", this.subtractsBorderForOverflowNotVisible = e.offsetTop === -5, this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== i, a.removeChild(b), f.offset.initialize = f.noop
        }, bodyOffset: function (a) {
            var b = a.offsetTop, c = a.offsetLeft;
            f.offset.initialize(), f.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {top: b, left: c}
        }, setOffset: function (a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function () {
            if (!this[0])return null;
            var a = this[0], b = this.offsetParent(), c = this.offset(), d = ct.test(b[0].nodeName) ? {
                top: 0,
                left: 0
            } : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {top: c.top - d.top, left: c.left - d.left}
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || c.body;
                while (a && !ct.test(a.nodeName) && f.css(a, "position") === "static")a = a.offsetParent;
                return a
            })
        }
    }), f.each(["Left", "Top"], function (a, c) {
        var d = "scroll" + c;
        f.fn[d] = function (c) {
            var e, g;
            if (c === b) {
                e = this[0];
                if (!e)return null;
                g = cu(e);
                return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]
            }
            return this.each(function () {
                g = cu(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
            })
        }
    }), f.each(["Height", "Width"], function (a, c) {
        var d = c.toLowerCase();
        f.fn["inner" + c] = function () {
            var a = this[0];
            return a && a.style ? parseFloat(f.css(a, d, "padding")) : null
        }, f.fn["outer" + c] = function (a) {
            var b = this[0];
            return b && b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : null
        }, f.fn[d] = function (a) {
            var e = this[0];
            if (!e)return a == null ? null : this;
            if (f.isFunction(a))return this.each(function (b) {
                var c = f(this);
                c[d](a.call(this, b, c[d]()))
            });
            if (f.isWindow(e)) {
                var g = e.document.documentElement["client" + c], h = e.document.body;
                return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g
            }
            if (e.nodeType === 9)return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            if (a === b) {
                var i = f.css(e, d), j = parseFloat(i);
                return f.isNaN(j) ? i : j
            }
            return this.css(d, typeof a == "string" ? a : a + "px")
        }
    }), a.jQuery = a.$ = f
})(window);


var JQ = jQuery.noConflict();
var age_popup_4_png = "data:image/png;base64,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";
var grp_buttons_png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUYAAABkCAYAAAGNw6nvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg1NEYxNjQwODlGMTExRTE5N0M3ODhGOTIyREYxRkRBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg1NEYxNjQxODlGMTExRTE5N0M3ODhGOTIyREYxRkRBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODU0RjE2M0U4OUYxMTFFMTk3Qzc4OEY5MjJERjFGREEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODU0RjE2M0Y4OUYxMTFFMTk3Qzc4OEY5MjJERjFGREEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4xJvghAAA8OElEQVR42tRVQYhSURQ9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";

function siteAgegetCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            return true
        }
    }
    return false;
}

JQ(document).ready(function () {
    if (siteAgegetCookie("siteAge")) {
        var cookie_date = new Date(2030, 01, 15);
        document.cookie = "siteAge=the_value01;expires=" + cookie_date.toGMTString();
    } else {
        JQ('body').append('<div id="siteAge-PopUp-bg" style="background-color: #000000; opacity: 0.8;cursor: auto;display: block;width:100%;height:100%;position:fixed;top:0;left:0;z-index:100000;"></div>' +
            '<div id="siteAge-PopUp-box" style="width:486px;height:515px;position:fixed;top:50%;left:50%;margin: -250px 0 0 -243px;background: url(' + age_popup_4_png + ') 50% 50% no-repeat;z-index:100002;">' +
            '<div class="age-popup" style="width:444px;height:110px;position:absolute;overflow:hidden;top:380px;left:20px;text-align:center;">' +
            '<div class="button-set"><input class="button age-18" type="button" id="ageNotMatch" style="background: url(' + grp_buttons_png + ') no-repeat scroll 0 0 transparent;border: medium none;cursor: pointer;height: 43px;width: 158px;" />' +
            '<input type="button" value="" class="button age-18-plus" id="callAgeMatch" style="background: url(' + grp_buttons_png + ') no-repeat scroll -168px 0 transparent;margin-left:10px;border: medium none;cursor: pointer;height: 43px;width: 158px;" /></div>' +
            '<p style="margin: 8px auto;width:80%;">Intended for sale to adults 21 years or older. If you are not legally able to purchase tobacco products in the state where you live, please do not enter this site</p></div></div>');
        JQ("#ageNotMatch").click(function () {
            location.href = 'http://www.google.com/';
        });
        JQ("#callAgeMatch").click(function () {
            var cookie_date = new Date(2030, 01, 15);
            document.cookie = "siteAge=the_value01;expires=" + cookie_date.toGMTString();
            JQ('#siteAge-PopUp-bg').hide();
            JQ('#siteAge-PopUp-box').hide();
            return false;
        });
    }

});

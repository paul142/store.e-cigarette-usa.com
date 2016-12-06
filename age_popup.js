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
var age_popup_4_png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeYAAAIDCAYAAADR8r1jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1RUUxN0MyOEZGRDZFMTExQjVBMDk2ODYyMkMyN0RDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpERkRFODI5MERCMDgxMUUxQjc0NENBMTQ0RkJFRjA0NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpERkRFODI4RkRCMDgxMUUxQjc0NENBMTQ0RkJFRjA0NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYzRTE3QzI4RkZENkUxMTFCNUEwOTY4NjIyQzI3REM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVFRTE3QzI4RkZENkUxMTFCNUEwOTY4NjIyQzI3REM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yqxNYwAAXkdJREFUeNrsnQegJFWZtr/uvnFyTkxgAsMMDDkjIugKCoZVVsy4iv66uyZWV11l9zfriqJrdnXXNYCr+Itidk2AiiA5DgPMDJMHJt+ZubG7//Oe7uqprq7qcG/f4c7c58Hyzu3bVXVC1XnP951zvpN6//vfb0PFXSNlAAAAoxynh/mhXqNlmAQYoQYAgNFAvh6dbESwawpzDTFODUKYEW0AADhkxXeogl1LpFsGIcipOn9PIcoAAHAYi3O+qGv5hM+rinSSQLc0IMqpGv9O1fgeYg0AAIeyCCeJb74O8Y4V6DhxbqlDlKsJcqqGOKfquAYAAMBIFue4f+djrOboz6goVwh0nDi3DEKUUw38G2EGgMOZkdSG5amOgy7M+Zjfw67tVI3PY8W5pY4HrhERTiWI8lDd3QAAAAerU1PLQo4T56hQJwqxJY9NlwtzxFquR5SjR7qGMNcSaEQZAABGmjgniXDcZ7mY74SFOCrKJXEOW831rGNOEtZ0FVFOD8KKRpwBAGCkiXIt6zgsxqnI77kqFnMiLQlCXM0yTiUIczryedrqc3NHhRoAAOCpEuhalnJUlNMhMc5VEfSk+1W4tFsCE7qKOFsVUU7HHFGhribSiDLA6IH3HA4Va7maKEct4rA4p0JWc/jzJDGOnQTWUuXFSRLnqABnEgQ6XcV6TlcRZl5eAEhW90yLbyPy2YF89PPoZ+m2znSurzuXdH7038H5wXnh84O/h8/R3/VvfSf893TnuHR2765smRU0cVrLwO5tA+HPMuMmZfJ9vflwGnXNVFt7qt7zc917c+F8h9MUznOqrSOl75aVj0tnxWdDPd99lu/ryddK01DPbzRP+Wx/+TXLv5cP3Uf1EZS9q8/WfLq9M5Xdv2cgLMzufHPnD4REOBWjZ8H9cjVEuUygG3VlJ4lvJuFnKkak6xFnAIB48yY7UPfnroGt+r2kfwfnhc8P/h73vejfnahasR0s4URVP9rCnxW/V5nmwnXrPT9TT57z3Xsr7xX32VDPr/OaQz1/qHlK+F5gCbcEIixBz+7vz4esX3+48wNxzRY/y8YYmeEOQi5G55Jd2XWIc5xrOirE4SPJkq5nYhgAAMBT0u+z6u7rXOTIFjUtGxJpi7GaA+1Lsp4tSZirRfWKs5ijotxSp0DXM+YMAABwMAXZGhDlwEoOi3KqxrXD7u64KGAlka623jidIMZJgtySIM5JY9BxAo0wAwDASBDmXORnNiLM0WOgeGRDP7OR74fFPW7dc9V1zEmu7HQNUW6pItBJY88IMwAAjGRhzsWIbFiQU3Vcv1ps7TLqmfyVrkOcW4765K+vT6VaxhXvX5i1mM+HEptPRZKZGvWPQD0kTRUYcaQGkbmRTmqQFUff8vB8GQ/155dyGUQRRgoiVfo9lQr+XfiZz2f3PvLOv3pRjBhHj3QtcW6pIcrVxpfLhDnd2n6EpTJjwtdPjYR3K8U7jl40q/Dyo7Cw84fog5dvTn3mhyF7+YNZLKmnsN5HV/uQyuf2hzS12iSyqLZWiHNLRIiTxDlpRnZJnJ11nFMHYuVbzqaOAABg1LDsc39yFnMuZ6FlVlYZGSwVsZZTkV5iye2YrtHNSrKa4yaAAQAAjGbC86uiq5LqXoWUruL3qBVcJDq5CwAAYDRTa0VSUuyOVDVhNqu9bWOSQAMAACDM9QlyYnCtdI2b1BMnG2EGAACotJbjlgab1ZiVV22MuZ5tHg9Yzfk8c34BAGB0UtDAatZytYiXVYU57ov1bmYBAAAwmklbbTd2qpbupiN/rCbIlmA548oGAACodGMn7aSYJNCxFnOSSBsWMwAAgFWRx5oWcz1aW9fkr3oOhBkAAEY76QZ0s+pFrA6ruZYoM/ELAAAwnWuLc1VrOUmYq50c584u/ptZ2QAAMFrJx236VEuQm7KOuZoFDQAAMNot5moW8pDWMde6aVwiAAAAEOY6rOKhCHO9yo8wAwAAwly/p3lQwpzCYgYAABgWi7nuyV+pBm8OAAAAQ9PJmrtLDTYBAAAAo12MhwyBQQAAAEYQCDMAAADCDAAAAAgzAAAAwgwAAAAIMwAAwEEhjzADAAAcruKMMAMAAIwgEGYAAACEGQAA4HCieQEwEWYAAIARIsoIMwAAwAgDYQYAAECYAQAAAGEGAABAmAEAAABhBgAAQJgBAAAAYQYAAECYAQAAAGEGAABAmAEAAABhBgAAQJgBAAAAYQYAAACEGQAAAGEGAAAAhBkAAABhBgAAAIQZAAAAYQYAAACEGQAAAGEGAAAAhBkAAABhBgAAAIQZAAAAYQYAAACEGQAAABBmAACAIZJHmAEAALCYAQAAAGEGAABAmAEAAABhBgAAQJgBAAAAYQYAADh8aN6SKYQZAAAAixkAAACGWZhTlCYAAAAWMwAAAMIcQ57SBAAAwGIGAABAmAEAAABhBgAAQJgBAAAAYQYAAECYAQAAAGEGAAAAhBkAAABhBgAAAIQZAAAAYQYAAACEGQAAAGEGAAAAhBkAAABhjiNFaQIAAGAxAwAAIMwAAACAMAMAACDMDcA4MwAAABYzAAAAwgwAAAAIMwAAAMIMAAAACDMAAADCDAAAAAgzAAAAIMwAAAAIMwAAACDMAAAACDMAAAAgzAAAAAgzAAAAIMwAAAAIcyx5ShQAAGBkCDOiDAAAMMIsZgAAAECYAQAAEGYAAABAmAEAABBmAAAAQJgBAAAQZgAAAECYAQAAAGEGAAAYSbRQBAAAB8h391j/H/9kA/feb7Zvn1kqNYw3y5u1t1tm4ZGWnj/PWpYvs9SE8VQCwgwwwhvK3l5LtbUNbwMJPGd7uqz/D3+y/Vd9xnLr11t+YMAslxv+G+u5ds93qqXFi3LLqSdb55veYC0rjnV/o15GI7iyYcSTfXiV7b/6c5bbvp3CgGGj97ofWNffvc2yjz1m+f7+A4Ld0+M6h33FFtM1mZmMF+x8T2/hcwmrPsu6z5yFnd+71x3uZ1/xbzonckj0C+f3FsTf3S+/f7/lNm+xvht+artf9FLb/+nPOuu9m4rBYgYYeWSWHW29b/5H6//zbTb+C5+29IzpFAo0lf5b/2L7PvJvTjRlomYKH0owOzut9cQTvDhn1603cz9tIGupadOsZd4RTnz7Lbt2reV37rL09OnWeuazC96dbNayjz5mAw88ZKn2toJwl5Q+b5m5R/jnOO+ulV2/wcwJuRftACfq+//tU17kx/7zP5m1tlJJCDPAyCHlrI6WJYus73c3We+Pfmydb3gdhQJNpecrXyuM95bE0x3Oqm096wwb97EPWrcT5J73f9hafnuj2b791vGmy63ztZdZz65dtuvNV9iYuXNt3Mc/ZC3HH2cmIXainl37uPX88MfW+/kvW94JdUl4W1ts3Cc/ZpnFi2zAfW+XE+DUD3/i+gSZA8M1EnInxt1f+U9rOXqptb/0b6ikUQSubBjxyCU4cM/9BSNm42YKBJr7fHV1WXb12uinXhhbTz3J0rNnWe/CI8127baUexZTEyc4K/p4S8+Zbd1Tpzi9zVjnGy+3ltNOsf35nO185FHb//AqyyxaaGP/8a02cNkrnOYXRF+u6Y6/ebG1nnuOpY+YY23z5lr+jNMsJzHPl2+dm3L3TzlB33/1Zy276lEqCmEGGEHWzDeusdyOHQVDwjV2AE0VZo0Ha6JX2Yd5S3W0Owv4eP/rgBNb2/qEd1FLUNMSasc+93mbezYziwq/77n1dut/1kXWfdGLrOf711vfni7LXfycggXsRD09a5Z1vun13iDfH9xTQzNtlcLs6ey0rLtH7w0/pqJGNM2dpYcww4hGY3/dX/2vwsM6c4a1nn0GhQLD0K7GNKxOTDPHLvf/9Bars6wtl7f01KmWmTev8J0HVvpx4NyuPf7XqccdY2Nf9xprWTDfuj74MXvi1ZfbwCc+7ZttjVN3/t0bLO3+tmfnTtvrnm1/m8WLLNXZUXCfxzF2rPVed73lnniCehol4owww4glu/Jh2/fuKy2/a7cfn+t4+aWWWbKYgoHhRwLsxDc9dYr5+djuWcx07bW8ew7T8+daavw468vlLOM+18Sv7q98zXKPr7PWKVNs7PvfZ+O+/hUbe/nf2pgHH7Ixv7vJi3fr6adb+4teYAPOMt7+/R9a+7euLQjz/HmWcuIbazFbwaWt8er+399MvYwSEGYYme3ilq22933vt6xr7ETLicdbB5O+4KCR9+PLolfP45q1ltm3z1JjOi2zdIn/fF9vr2VWr3bK2mL9N/3Bdl/2etvz1a9bv1zbC4+0MW/7e8t85irLTZnkhHeMdVx+mZ+JvdtZy2Nv/oO1tLS6i/dap4R37pxkg0tu9fZ26/nOdVTLCH5eEGY4vB/xnh7b9+F/s4E77y5YDM6aGHvle3yjCHCw2lm5rH0n8cltln9stX8uU+PHW9vZZ/nPezZusvTWJ238R95vY//ji9afSVvP+/6v7Tn/Quv+3v/z32m96EIbWLrUWk49xVvLYoqzqmf+xxds7L9f5aN+tadSll20yPLVAujoO846zz62hroZBeLMcikYcfR88xrr++nPS7+Pedc/WstJJ1AwMDxovXKcG7n4WZsT3A65tZceZe0v/mtrOeUky7rPB/50q7X0D1j7a15p+ZYW6+ntsey/fcrSmYyl9u335/bn8pafPNHGvPENfsy6r6vLcpu2OOPYWcGptLXMmmnpCeMtNe+I6pHt3N80o7v3Zz+3MW/5e+rsMAdhhpHV53QNV/eXvlr6ve2Zz7COV1xKwcCw4T0xUVFMp6zvj7dYx+teY53Owu346Acsv2OHF2exbcdOS//wBsts2Wo9137XOi57pU2+9BLLKtb1uHGWXrjAi/fu2++wSccfb63nnOXHqrf81zct85WvWdp1BlKdnTblkx+3tmedVwi/mU5XFWa5vQduvd3sLdTZ4U4TXdkEdYWhM3DPfU6c9xYezhnTrfOKt7ruI/1HGEZhnjzZz/gvbxnTNnDLn63rLe+w7rvutr5pU23AiXKXxPXe+63/n95r7bffZXnX7HV/8jO29wtftv27dln2uGNtwInyrmzWtv76t9b6rx+y9Gkn2y533pNr1lrLT53Fu/VJa9+7z1rXb7Te2263rnzOehfMr9mCyn7Prl1nuSeepNKwmBFnOIiNZEfHAWv54uc6S+IYCgWGnfbnXGADd9xVbqG2tVufE9f+Bx4wmzHDBuYdYanH11tq+w7r3LrVUop53dpquW07rOcTnzbT5Cwn8lnXoUytXmOZJ7dZqxPr3vf8i2XHj7NW1+HMOFHNuX/766fS1vfNayz3699Ye7b2Zhn+fvv2WvbR1YSlRZgBDh6Z5Uf7iEp514C1XfhXFAgcFDpe+2q/s1TvL37llyd5L40TTwUZMVmoW7Za5v4HLZUrhtZ0fy9N1mpvc587YXUWsa1ea5l0qvB7JuOF2zZstIx+L55Xcpu3ZPy2kumHHi7tMFVDmc32d1tuC9HvEGaAg2kxawb2B//Fer91rQ+8AHBweoQZG/vRD1hq2hTrvf7Hlt+2zVvMhU0timSzhXm3insd2n2qgqwd+F5fX9n5iecpCpiPNtaRuJ5ZadEEsPw2dllDmAEOMm3nnesD96fGjaUw4OB1CqdOsXGajPVXz/Q7mfn42X7bxeEeostbev4867/zLsvKKh8/Pl6cNWHMvRMK6wkIM8BBRxsHABxUYW5vL3QMn3OBP/K795Ttyzysz/vkSZbdsMH2f/rz1nvtdy01ZkzlTHGJtbOoU8X11YAwAwCMLqGeOOGgTmfNLFhg4z/xEe/W7v3+9QW3dkictUNVuqPTWcwzqJzD3TChCAAARghtbTb23e+0zJIlfrvTMrJFV/bs2ZQTwgzQGOrZ53I5f4yodBXTlnUNXD6fp6JgZDbK846wtudeaNYacWhm0tZy1GJC044CcGUfuurnt0T0szlTQ3C4SZ9yWb9rk5YpNYKEd9Ujj9j69Rtsl3bY6en2n02ePNkWLlxos2bNtHZnAbQrHrA7UlXSOeDysXv3butzVoL+nT+QTdc+tVhHZ4eNHTPGX6ce9u7da4+tXm1PPPGkPbntSRvo73fXzdq8eXNtwfwFNn3GdMtkMtbZ0WGtWtIyyA6I0tzT02P97vpxUp/P5a29o8062jusU+mvtSSmeN2uri7bt2+fT3O+RgxelZHyMW78OH+/VDrl2vC0M77aqpZ5uOx37dplfb6MBobySPqlQmNcPnXvcePG+c917e7u7rryUs/zqvyN6ei01rZWGz9+vM+jykp13tfX7+dqDabjpXN6e3sL57r/jXXpH+tEcOLEiZYuRuXSfVQ3e4t1M5hXTylLuf/Gjh1jnZ2dNmHCBP+Mh2l//kXW++1rLL+/u7DMqjhju/W8c2n7EGYYySh0ZX7//qEJsxqKnl4bc8U/WFudwqzG65ZbbrFf/frX9tBDK23//kJcYJ8KlxY1yhLRo48+2p71rGc5IZzvGqGxNnHSRGvRhvExSOA+9vF/s02bNzlxz5eJ/9KjjrLXXHaZZWakawrznj177AfX/9Buve02W7dunRcaNYLBYKEEbIxLy3ErVvi0zZkzxwnIWBuvMIrpxhxIKodvfevbdsuttyZ6ByRI5513nr3gec+zqS4R9Qiz0vyjG35sP/npT+sSVm9lubSrgZ97xBG2fPlyO/GEE7wwKm8SymrX2bFjh33k4x+3J594oqzsGyWbzdq0qVPt9Zdfbke4dATCfL2rj5//8pc+DakhPqu6h/L5spe+1JYtW+aFWWV/40032bedkA24vytWtQ3RI6L7vOqVr7RTTj7Z3y9AdaK6kXgP1uui9Oo5uOSSF9upp5xq48aOq2iJW5Yf7Xqk6jB2l3o9CuHZ+qxn0vAhzDCSSSlAgY4hNnbWki4EL6iD9Rs22Cc+cZU98OCDvoFpKfb0gwZXTdWAE2pZL1tdQ3/7HXfYhRdeYM+7+GLrddbwjOnTSueUNYTuWuvWr/MWblggdY8Z06d7K6lao67v3XX33Xb1pz9jGzdu9NcoXSc4zzVue5y1s8t1ArZs2WJ33HmnvfzlL7OTTjjRerp7bdq0Kd6Krhfl8U9/vsU2b96SKOoS70dWrbJ9+/fZpEmT6rbctm3b5vPRVoeQB+ds3rzZHn30Ubvp5ptt1qxZ9pK/ucRWHLvCC+SUKZMT8ybLb/3j62zHzl0uH4N/liRmQVrSmQPlsd0J//r16711OFTUaVGZDgz0l3XydjurfJ27R73lVc99+vv7XD7Ky2Pnzp2F+wzSyxI8qx2ug9nX2+fqJG2xuxLpHQnnxdVR28XPsfTUyTR8owDGmA9h5LbMa7x0qMdAfWPBq1evsXe969129z33lKy0YCxZjbKOnI6Q9djlxOt737vO/ue73/MN6patW0sNeFknoyigUSvEWyYFTU10gup6v/3t7+xtb7/CNm3aVBLJIG25ULp0PQl8zv18wnUc/v3fP2v/6yx/ueG3bdve0Li43KY7tu+oacnudB2B7u4e62/ATZxq0B0bWKPq4MitvmbNGvvU1Z+2n//iF9a1b5/v8CTlzfdb0gkCMRjhiVSWyqDZY/oVhn1qOO4hqzgVKZVU02Zq53yJJ27C7IPtBJZ/Xlb2i19Io4fFDCMeNfT9A0O3mN01UjUatXXr1tvbrni7bXdCJIt3oN71nUWxveGGG/y450te8hJvSc+aObPCyhxw6dB18yEB8YKvMed8chN266232fv+5V+8FZNtZIzUpU0i9u1vf9uPI5599tnemp4yuT6rpK+v14u7d6fGdDaCjsUGZ2FpbDLowNRjledch0llkUkPru8ske5zHaFrrr3W7/971lln2Z6uPTZpYrzV7sfg3ZFOD76vrrz5+suXjyTn87nS9ZthycbdI5fLDqm84u6TK04SDL8buWJehvLG6TkYcM9A0FFMqEG/m5V/f3p6rPWcp1nricfR5iHMMOJR4HsJwlCFOdsfY4KEBajPPvDBD9rWLVtjRTloXKq5miW2P/zhD/2ksJNOOsmPvWrcuSwZanQ1QSjUWAWWeLQhDtjqLHClLV8UvThhrJa2VNGqv9YJ2Lx582zu3Lk2zqWrlktU1129eq0X9loTpvZ2dbkOzfaie7S/LmEeyA747zfiWo/LW48r5+985zu2ZMkSS7sy0Hhm7FDCQCEfQxFmnV+qq7CYuWfLC+oQJpZV3MOLWq5c7IZYXtH7lPIRenTy6nxo3sIQ3rkgrfkqwiwxLrpN/O+db3itWXsHbR7CDCOe3IBa1HhhllWRrc8t6yeQVWk0b775Zrv99tv9xKto4xptpPS7ZjnHNfCavXzdddfZcccdZ7t27fZjjuHvFRpdNYjpCmGO82Xr8xtu+LEfv9Q4ajRt/SELMHBrx81U1oxYjc0qn5dccont3tNl06dNrWkdPvTQg14IaglOvtiB6PNjo/WJk5Z0qZOSyQzEdpSE8hbkJfzvMEqf3Np33HGHPfP8810d9LqyaqlIn+4VJ8zhmcq1XMU6X3Xqx5hDSdEsZtV3NO9Kr56pauPzUasySKPKIB2aF7F/334/8S9ucmBHR0fiPYKOVTRv/f2FjkTal2kqUi/xwqw0BR2TWsIcrD5IJwh89rHV3pOV37vP2p57gbWefQbtHcIMhwLqveejy6XUwR8/ztpe+Hwf5s9qzrLN+2ukly5JbER++av/LVgj6UyZOaZGTQ3hc57zHDv36ee4BrDTVq1aZV/92te8Rewts3x5Iy8Rvf/++73VrDG8dOiCmtAjd3a4Ec0WLZS4XKjB/8//+i8vtjovnDY16rNnz7YLLrjATj3lFH/vG2+60a7/4Y8KS1PylQL2m9/8xs534qU8Kd/VrEel6S+us+L/3T9Q07qW8Pe6a0sA6xJmdVJkZUaF0v2nGc8qW+UjW/SYaAa6yrwj2DYzkr/bbrvNzj33XOvp7fEztaOWtSY6Rcte92ptabUVK1bY1KlT/ISybDZbRXDyNmH8eDtm+bLSjGxxxhmn+7y0d7RH8pj1E/aU9nRk8mE2l7XFixf7IYbFixYWxq2L9+h01zn5pBNtxswZXiBVvsuPWe4n8kW9Afr7rX++1TZoQmCqPG9CeZo5c6b3lmgilibQDRQ9N0uXHuWX/JVNRvSu7IGykWZdS99ZoMhdLv+Fzl8VYXbi3u7qaenSpTZHO6nFCHl25Sq/YYWNHWPtL/0bS4XKE0Yi5R04hHk0o0Z+IOLKVqD7MZ3W8YpLC5NHhogaqltv/XNBiLP9ZY2LLOPXvva1dtmrX+0apELD8XQn0Mcee6y99e1vs+793X42dbjToDWtd911l2usz7B+ZzW0hGbqykrRPdIxFnNc4yUrVLOrx08Yb1k7IBiaFKdG+4orrrBnPfOZTqwKgnDeec/wjf3HPv5xa2ttK1tTq4ZWlqVmQk+dOtWv6e2osjRLwi2xlYDk8tU9E/r7xk0bCzOKo9Gc4l5xP4kr68silS1/2ZW3d77znX4cXI16ixNOuXQ1ueuaa6/xE+3a2tsqzlm5cqW/v+okN7my0yEhiiv7iRMn2FVXXeVnxre2Dq65uPiii/wRxze++U376Ec/VpFmLcFT/akDN86JUzWUl3Of/nR/xPHlr3zFrr7602UdA9/xckL9ghe8wF71yld4Qa3LSaXJdXoP0uXekzGdY+wNb3iDnXPOOTZp4oTGmvQYFe+/7z5nLe+1tuddxPanoxBmZR/Swpw7IM7ho2+gqmu6EbTGdfuOnSXXanD0OIt0xfEr7OKLLyoJX9DInHnmGfY6J9hBEIbS4RowLRva5MReor5/f3dZh7MwrpqtOCRSlZN9cnabs1gzGvOOfL9r31776xf+tZ144onOemkts4pfeuml/vOevt6yczRjOu/S8OijjxRmL9cxw3fjpk1Fi776IWtv1apHSkt96pn5nXRdpVPraqc5oZw2bZpNnjzJT+5atuxoe+c73mFHHXWUu0dfRbnv2rPbz1jPxo5rpvx14+7X5zpL8kx0d3c3/fFVHn3gkVx8XgtBQ7qGfB9fHnHl6Z43Da907d1X92z8wvhwfL2oMyF3+pAj3rn6Gbj9Tku5eh7zzreVNtcAhBkOCWEe8G7o6OEnhDXJraL1tJqJHUzeOTCBqcVOOuEki2uDJM7HH3+8/xmM4QWHBF5WswQ/vNY1VXQJh7974CiMMUcXrqjhDlzdwaGxu/a2dh/cRON3UctQHYJTTj7Fenv6Yu+jJVOa3FbNZSvuu//+kHiWl01FntVZcOIm70N/cRyyFv0DldcuHcUZzlEBkNv38stf58u38pwBv+46GzOeWhiWSCr74j7Bw7KbQyrU4au8ryZHNeO23v2ckLd6O2EHnFSV1wrqW9dKNWHJVm7TZss/ud06X3uZtaw4lnZuFIIr+1AmGzP5Sw3NQPO2qpNLt7e3p8wqVsOuoTyJnCZrxXf68yUXdNhVp89kWUhUK8WoctZyaX107E3iJ5/NmDHDpy2X0EgWGtT+imAa2WLjGsTUTjZo8vbAAw+UrhW1qAL3avTzDRs22JIlR3kxqhWfQunLeg9CquI6Pn0Ja45nz5pdMVM88Db4ckpQOo0xZyNr0EvDCNasFc7RDlxxwp/qI6L8Xuis2jrfBgzQ4tru8HPlRdTVUbZYnvX2PPIaYuivfObU8fHrnpvQg+m/7XbLLDrSOv/xLbRxhwzNfUsQ5kP5UQgs5LLJX3nL9fc3bR6Cxl4DK7Csoc/nS9ZU0nMatzRIn5XWGufLW+mw5VEmDt56qpSiYNlJpegGVmE1Ya6cWRte7lMLWcxxaVWnQFa7QoxGI5g98uij9oxnPKNsmU+8YKX8GH5cQJJglnI+YVKf/pZUX5o4FZe1lFnJ8ot2ovqLa4ZtmPb80PrjuHz2F9ezNyNoSC5BmAsBcrJV18hX9IWLZRJ+dPzz1Na89OZ37LTOt/xdU+aIABYzHEz8GseYdcxqGPwyqeYos+TQj/NGLLBUsXHLVTkzTrizETELi0M2COoQFeZcwXYKi4OfIJUd8IE9spHr++vkc4l9hiBCWTYVtZizIYu0OqseXuWvEU5rd0+PLVm82Idt1MS0cFxs3XPt2rX+3/u7e2qGp5TFnFNeYkTGqqYv7623aH0VluUk2dmpUrlFhflA4JThUWaVeT5Sh6XPc/mm3NV7bwbKy8TXczFyXaMirzXf2ZC3JVvWGRw6bc+/yFKTJtLGIcxwSBI3KzufL+441SSr3FvGfX6iTPizYAeffELD5te/KkhCZOJKaa2ya3TDs5l9pCot2cn2x4qDb0BTMZavrhVqvvV7IQBFvLz6+/T1xrrg+wcK47a+I1CjjdUs58JSpQOf7du/12+4oXjif/7zn4txkA+kdfXqx7zVtn/fPpsyeVJy0JOi9yB6/ZIw5ILyiD+/P6a+NDvei1FcONRUcblUtlKY9VlBvJo/yOzzqSVykToM8pDV89GErUO9ZyU7UFYm3mLOpV155BsSZz1Xuk46my5/5oqdumZsdZqeMZ22DWGGQ1uYB+KFuYkNaTDztEyYLVW0ZJMt+taWTKW+uc8zra1+LW155K+C+7awlV65OCRNltL3C3srR9JackcnC590O11ha5pfwzx75gz3Mznyl5ZJPfHkE36pUrihb2trtyPmzrUdu3b5sgmXmdK5c+cuPzN6nvtOdOy9UlwHCuOfAzEWc/6AlyG2XGLqK5Wqbh1mB+LLvt5114MWzZg6DOrRIlG3htK57O/PuvrKlgtzKldzqVtFORXrNZ3OVjxzI23/cUCY4SkR5oHY/ZjzTbSYg/2ao5OJCtZDLlEAtV3en2+9teIvPkBEZ4cPfRkWgYKntTKsZsFqy1aMc5asrUi0qv7ijOWkSFU67x+vuKKwjWRk/Fvf1xrmyTViZT/00EN+CU4430HUK22xqDjgCnTho1MV06Z8aGmO1knPmT27piU50B8fIrM0xpwUyrH4/9H6CgJx5GMkvVAPCWUfxClPD6PFHJNPP+u8Sa5hPXPyCITXYZfGmLPZBq9VGPuPRqxrpisbAGE+hPHCqAY40qilFMQi3ZyYwUEkpbjJRNniUpM4w08CddSSJXXfRyIZuHCj4lCa3R2dRV38W1hQ/MSnbLa4M1C8MEt8dQyWRx9bXRbuU2gLv+nTp/tDsbeVH63RDcRfadGSqVWPPGKnn3561QAmqWKM5DhvQWmMOcHSC7YjjNZXYO352cip+ss+mCTXX0dglMFbzJX51OznfJMsUC/AxcltUWHONjhhy6dVz1hkVnZ/aPlaOs0qVECYRycSq669BXdfpAHz4ft6e506Dn3/2zVr11impbXMTVeY4Zsr7rub8dsfxm2M0AiaMKW10VF3YDBup8ZOy6wmhjatD9JRYVEW15NG0yQLVktdqk0p8mPf7nxZv+HgJGFuvPH3fhejsjLJFSxmBfvQUjCFpNTP0j7VLj37nVAr/KTStW/vvqqRxdLpTKxr9MDWlfHbHN57332x9RVs/KBlZNHTtKY8qex1roYcunt6bZ8r/7h7BjP0x7j8tzcaDCNlyS5gV3YFz8TQ2LJ5kw9EE77PgQ5OvrR9aT0bYATPXHQ2fq5YtgqJqk5XRQzsVKoUI1srHca4dzM1PIvDAWGGp06Yc6UXvqLxdg3t3ne911IKZRizrCbvGofM/HnW8X8ut3SNzRp2OcFM+9jS8WKWLoaPHCqyLlNVxF2NZ3S8M13NK6Cx7GJDq1CbX/rSl2zn7j0Hlv8kWENnnXmmnXfeeTZzxgybllA2snrjykQRuRR7udsJ2IQJ4/2WkGVWcHbAHn/88cLGF9nqkdlSNUQizipT1KnvXHttbNp0f3UaFF+7paX82urwxJW97iEr/z3veY8XtiCGeLnFm7Wjli61v7nkEps0aWJNN309+QhpdlPcw4pAV+0ZThU7B4PdmSrYyOTrX/+6/eKXv/RLsKKoQ6hn46UveYnfYW1M5xHDMZ8OEGZ4StFLrVm/MbFE8rt2W9+vf1e9MVm8yNpf+TKzGsKczrTUjIzUjK3jU6Et7hLT0qCFETTqTz75pH3nf77rQ2hWs1JyA/1+AwK/1jjBqtZa5K49XbFplTBrfDq7YL4TQZXrYxXf2bF9uz2xdavNmDmz+kYZVcpC1riGCgKRVIdC1vlVn/yk3XjzH2LLQenSph5xFm1S2etzjYt////9v+Qyc/dWR+aSF794eB7zJliVmTqe4aGENvMucVcON//hD4nWf951xBYuXmIXXnABbRcgzJDUWo2ecTA17hlvKVZ/3GvtKCU0eSu6EYXvADjrfc6cOd56UiM9xVmPcdfqcgL6hOsoTHcW+WCsQeXl57/4hbNOJ3nXeYu7h2aB//GPf7QfOAHNxO213N9n5zvxlChPHMT62Eyd1ntqlJuAKofE7SWdMOv5U/3hwgaEGaCJKBRnNJyoBFaiFyyD0ji4YnX/6te/ibofbOeOHbZu/Xpbvnz5oNynatSvfO8/x/otWrXlY0TsdY8xY8fZxRdf7Ldu7Ay2hQQAhBngcGDlyocrwoAKucC1T7KEWZas/l1hUTkR3rN7t48KJstK492ttYJmx9DaniCucfv6Omv5RS97mZ122mk2fdo0KhAAYYYRS270rLn0M2mzzQmUoVnVcdeXxSwxlkU7YeIkv/1iFM3k7u/tsS2bN3th1mz2MWOGK9Mae+63p53zdHvzP/yDzT1izqAnNwVLw5LOL808t9G9jre0CUjCEEVhSRVrnQFhhiTSo2ecS8KRzgx9Xfe27dtt85bNscKs8UONMatx1iS1uVWie23essVvciGhmzRMMZH7+3ptydFH2wc+8AE/C7hjkC5sCbI25pDYKEBHNls+uUnrgKc6S1xj3uNG8aYLqmVN/pMHJK4Dow6ZZmXPmD7Vxo8fz4zsw/YpQJghqTGdOcM6Xn6ppaZOiY/5rN1xpk21tP5+mAuyWLBggX3ogx/wYigB/cEPrrff33hjw9fbsH6D3685Ds161n7IQeCPk046yW9i0ddfOW1es8S1Z7KWVA2jn8BanEBIKDQmPjAwpWKZVD0WoPL05S99yR555BE752lnV058c8KsTsgRc2aP2vdN5aSx+ze8/vW+3hX5LS4YzgQnyMcfd5y1M86PKCPMo1CYp0yxjsteYakaoSUPBqXtIYsiWVibWnB7SjiGM0qS30TDIYvv1a961QGB3bBhUMK8ceMG2749XpgXHnmkX8KkgBhPOvFWB2CB++zhhx8uz2Mq7Wd2y/qWhT0oa7i3kK90S2uyeznTYls2b/GT1SScqoNGhVlo7PzMM8+0E0443hY5yxvin3Ht7XycE93zzz/fCfMMCgUQZog0FBrr2tNlmadQmB977DG78aabfGAFbYcYjPHKcpDr87RTT/XjnpOHMY1x1qroKQp2o6xes8YHQql4iZwIKy64Zj4Xdt4qxKXeFLNuWoEuJMw7igKvSFBtbW0NicB7r/wX7zqeMX2aDxjyxS992W77y1/KvifB3r1rhz28apU973nPc+nebx0d7Y0/S+5+igwmKxBqdAR7e32wlnqW3cFh1+paM7dGRZhhWLjjjjvt7Vf8o3ejhtcPy9o76eRT7HOf+1zTNilIotnrRbds2ZL4t127d9uObU+Wi2NrW0UDHUwA27Fzp0+fLOxGhfmi5z7XTy6bOGG8n3SmbSajwhxsWrHadZDkNk+nU4PuBPl09vXyUAMcJOjWwfD1IZ0wyHILYgsHsZcPxe3xZNnKYk5CgqtlTOGjmtW06uGHfbjLnt7GrXd5Hbq69pSWWp379KcnSao9tnq1t9zVARhKeMsUs5UAEGY49Aks1iDaUfj3Qw2tPdY+zM1i27ZthZ2w+vqHfK3jjz/eT9Kq6Cw44ZbFvH79+lJ4TQAYltYOYQY42Gj3q40bNjbnFU5n/EYYcvP3NmE7RS2FOvWUUypfbmex93TvL+4f3eu3owQALGags/iUWOqpIWep/AqbNm+27Tt2xH7XW769Pe6obxxWa6rXr1tnfe77uZi9iBtFwwXnnntu4t/vu/9+Pwbe3Y3FDHAowOQvqEo10fATjBJ0WeOfT4XLujBRqc9yVlihFRfko1oErML+vClraS1/NTY7YY7diziXs/nz5/slSXIn79qx3Vra2v2aMG2HqfW/u3btrrBk9+zeZbv37PET4CTsmSEGQDnrrDPjOwEtrXbfvffaPmct6z6qz0wTgq0AAMIMTxGKTKVZ1dH40GrkNe7a5gR4f3e3jY1EfdqydUtsTGkxdty4piyTiptEprRuc/fe64RIUaq6uvZWBPKoZjlqEpffjSo0cUtitnLlytjvD/T32Zvf/Ga7/HWvswnjx1XsYPV/3vgm++9vfCPWJtca4+XLl1mPs5wHE5lLoh6kUuuotYf01tAe0EEnZMvmTX4CmDoPqqvxrvwbJZ3BuQZQwyxo2pV426AqR8yZ4zdliFqlWSfMN910kxfnPbv32J6urtLfJYr/8z/f9eIdh0IXBuELh4KuEf9+pO0nP/6x7xhIqPpC47hr1qyxG9zfEsxlH+86nc6UpU1rl++77/7EdEydMsWPQcdtK6ldpuLfvLQvO3Ue+gY5zhxuBqZNm2ZnJljNKg8tp1J9aJ1to2g5V19vHy9DrcbU1ameAdYwAxYzJNPI8pgEt/OyZct8bN+ukPD6B8c11vffe4+998or7cr3vc/HTNYEo927dtv/ff/77Y9/+lNFAyULt6W1zRYvWuT+nfUhK4fC4sWL4h9qd4/rvv99mzp1qr361a+2xx9f5/chVsSvd7/7Pd56jC+vnBdSrQ0OW7DK14aNlRO/JPzTps/wopi0Fnn69GmJjfgDDz7oy6QZoiePxamnnGo/+tENMdZuxu68805v+Tc6M1t5vOuuu/y5ymNV0XHPW5sruyOd9a642fPnzxsddpJ7d1SPWk6ncr7jjjus2iiOXkt5ZOa4TqCe0TmzZ/lnDgBhPozJOQHae8W7LDWms/YuUkXxbr/0Emt/0QtixG+xLXNiFRWzwsYQLfbb3/7WHnQCc/JJJ/nP7rnnHttS3NawIl2u8dI47Nlnn+0ti6E2Rstdp2HJkiUVy5jUKEpQvvDFL9pPf/YzO/200/zkp1tuucV3MOLGvmVNLjlqqQ+TOX5cuVteHgCF1qwoOidWM2bO9B6FOGtZzJs3z4tmdA9npWHd44/7n/0D/U2p9+OOW+HLPeri12f3unrZuWuXjXHPRL3bTfroYa7cXvu615Utd0tC11V+v/iFL3hxHi2onJT3q6++Orb8o6iTo/CtV7pO7Quf//xDcl0/IMzQqKG8v9sG7rqnoXNazzw98W9vfetb7Le/+12lpaCgGu7Qpgw//8UvSiKQZFVJyI455hg76cQTbWKSG7oBFjnL+28uebF9/N8+EWuRarKWXNcSbj9u7BrQOHHxk7qcBa+QmnJlT4qMfytIR3xwjry3euRRSLL+p0ye4sfT44RZ8bIlfGPHjinGsh7a63jkggV+ItratWsrRbNo+Sq0psbY6x1GUL5765xtPuDESRZ5MIFutJE0dBMnzMF3cXtDHDwVEChZ4p8UAvLFL35RlVMLY2vVxtdkFYxz1rL2Bp42fZq3GJrBm974xti9j0tWvToPToSUtliLz3020Ndry49dYZdeeql3K2Yiebj77uROzlwnzNo1KMmVPeeIOTZ/XrxLV2KsNcaFceahW80S5SWLF8eWg4TgjttvL6xtbtCdHQ4QU+2wOqzqw5l6yyk1yssJEObDuRWwVH9/8y5Xwyr61FVX+d1zBoNEWZPF3vrmN9sFz362syKbt3GFXM9f/MLnbfq0aYOzcpxITXdW5L9ceaWdcPxxFRPdxD33JgvzjOnTrdN1MtrbE8aYXbqmz5ieWC6aAKafSTPYG2HcuHF2zDHL4+/lrLR7773X30vCjPsUAGGGJpPXWFZnR2MTvJIegn37rX/B/KrfkYv3K1/6ki1durQx4evr8y7kd7zznfb2t7/Npk6d0rC1EHw/KdbzM8491771rW/62dF1l19x/fCMWbPs6k9dbS94/vMqlnwFxIXilDtS8bBVLspftbXBs2fNTrRiNQFM5zY6Mzufy8dW/QknnBDvpnb303aUyovWeTejI1C1rnLN2aAkfxA2OvH3GOb7JOWtWeUECDMczBe3uOnDwEBhXEoNuMb8tJVi3n1msnyGeuRzXmhyxXsF941y6qmn2M9/+hO79NKX1OWK1rVOOfVU++Y3vmEf/tAHq1q1+u7eyMzvgGBrxGrjos88/3y77rrv2TlPe1p9D77r2Fx80UX2/e99z17q8pMkylpedPvtd8SmV2Uw01nbtWaXS7xj8+zEcfOmTTZ50iRX9uUWbHdPd+L1NGO8zVnocf0bTcIbN25sbH4V1OS+++7z54ctZrnSk8q+UZFTXXW0t/v01UM1t3qn63i2DXHmfrWyVHAYdYp0j3o7iz69rq4Kkd4Gd+QG+m3vnsIkxA6XR9zaEIXJXyOQ8G5MajS1tCjnetZqvNWYSEDzrlFPKehDuniUvdypAxaAD3+VswOrXvMHfnpLwTSt1LL79tn+3j5LZQeKE7hkBaYrJnNp1u23v/lN+8EPrrcf/fgGP/6qTRJkgfn1zU7gJ02c6C23008/zV7/+tf7tdC10ASq5z73uRV7GA+4651x+um2aOGRNSfKSJR/8fOf2df/+7/tZz/7uY9Hrb2Pw9eTSB57zDF24YUX2steeql3/1Zj+/bt9oIXPN96unvKrqOoXrNmzLRnPONcmzFjetXG9eSTT/Lj9Cqbsry5BvqYY471nYKoK/y0U0/zS8+iedZ9j1txrBeTOCtdy71e/rKXe8s4em6vE6gV7twj5swuS4eCyGjim9zqQxEJdeamTJliJ554Qt1zCFasWOGHN6Jp7XMCduYZZ8RuztEo2vt7546dZXnz75d71i+44Nk2ffp0S9eZ7xNOON6e6zp0LS2tQ3i/s65z1GmnnXKKex7nDLtXAA49UqFDb0Ym9LMldLQWj7bi0R46tOCzc+mnb/xGKtM6ZuVbzqJUh4is46xrNLLh7RL9z4JFWxLolau8QFvRwi255PKVtVw2OacY3SrlRT3lKtwds2ZaZsYM/eqOghhLmNX4V5st/Jh2L9qwoSQ6+qnG9DjX4MaN11Zr1OURUP7CDag+DyaWNYIsN6VtoxP6cKM/Z/Zsvza7kU6S0hUN7RlsaVnv7OYgHGb0GkpbnFWojo7OiQqWzqkVJSzpXN1fS9Sigp5U9oMR5qT8NJpWpaWR56fWPYKOYzit+r3RJXu6zlBjmwfo2WFW9uHBss/dYvls//5VVzzjNXLSyLmivnDo6Cse/cVjIHTogcqFfuaxmEcgBUu11TJhqzkQ48Bi1nHSiU6DA1E2/28LfpY0OXVAnC2YEVr4t5a0+JnL+kwNlW9YMwUrWaJcFPBqaJ3z4piZwINxgzbDbRmgay1fvtwfQ0Fl0YzgD2qEG4l0NpjOyGDPbXbZD2dan+p7HIz0AvCEjUQ3RtGyDfemA3dXPmQdh8eCc34SSd7yCW6RkkwXhTmwntOBJR26LzQfdab27d3nLa7Jkyf5zx5/fL2PXb1o4YJRGflprysPxQmfNnXKIZsHvX+PrV7jo7ctWbLoKevgAMIMT5FYh3/CocWWLVtt1apHbdnRR5Ua9HXr1/vO19KjFo+68tizp8vuvOsemzf3iENamOXB2rhxs98YhF27oFkwwAFwEHjyiW3+57RpU/3P/fu7vZdDE79GY4OuzUX8ZLGpk0dMmgYzCUuBYVSXY8aOQZgBixlgKMilvNlZsdu2bfe/a8nTnDmz/QzlsJWrhlezrjWJTFZeW1urD32pMJoBapgVH3z37j1+7H78hHG2YP48PxbZ09Prr6NY3bKuHl+33kcX045VEoKJEyf4v2994kn/+6yZM2zWrJllYhGkU5OOtBRKs9wV87okcluf8BOopkyZbGvWrvPfW7xoYVkatSf0zp27bObM6aUZ03v27LHNm7f6zsLUotWqvKxzaVQaVBZaHrRh4ybvdlZa1JE4Ys6s0vIyWYtavrdw4YIyb47upXXTs2fN8DPuA/r7B3x+nyh2VDZu2OTLTPdSHja437VPte6l7To1WU/LpqqhrT21yYjKWh6Iqa4cNPs+SM769Rt92SuPyotm2OvaixYd6fO1bv0Gn089AwsXLbAxnQfK7cknt/ny1XOgJWDKjzaeOFCuu1w9Z8rSuGnzFr/b2tRJk3xwGV+H7rNt23bYQHbA74o2x5XhmCZNbgOEGeCQR0LywIMrvZAW1ke3+H8/uW2bHb30KC9KEreNmzbbvn37fWMezA7fsWOn/+y0U0/xDb8a7pUPr/KCI9HUedt37PDXO+nE432Dv941/OoIaLLd1q1P+ut3+f2is77Blmi0tbW76+71AqpJYhIRff7gQyu9iHV0tPvPJVz6/cQTjisJ75q1j3uhl+Bq3XUm0+LzFEbpWL1mrbW6joW+J+Nw1SOP+XRq96lAmCVSEhafRicu99x7vxcl3UvBMLzgujwfe8wyL6Zde7u8uM9wgj+uKNYqiwcfetgL9dwj5kQszD5/faVHf9/uylP30j3uuvteH1Nc6VNZaVcw3euE45Nn+Ktzcfc99/u60Hk6X0vcJLhHH32UL+NAeNXByRfX7O/YudP2uu/q+4U13SkvnJr0uHxZYavORx9b7ecBaPxfwqvO0ROuA7V48ULf8RLqROgZmljc83utS/MjrlynuPJceOR8/9zcf/+D9oTLh67R6p4hPQ8S++OPO9Z1WsbxQsLwCXOw5gpgJCNBkpBo84ijliyxuXMLwqGdl+6++z7feEsoZH3pKOyYdISzkud7Ibn7nvtcw7/DC4FERqKoWfNqZAM39apHHvVWmqxJXf+ooxZ7oVq00DXoC+YVBaUQ0EOCo3Fn/VQH4OGHH/HWtYTysdVrvZDr3hIDLwROSG+/4y5nea+zY5Yv850MCaHc4lo/ftqpJ3uhkTiHae9oL3kKxDbXCdG1RBBsRJtbbHRpmOmsPInuvfc+4K+94tjl3msQWJD33veALy99p7Ojs2hp7y8J8/qiEEoYw5a9kMAfs/xoJ8L3+Dwee8xyf3+JsnbxWu7+Jo9CYOmqLCWOy5bFR5zb4MpYeVInSJPqVL+333Gn72Qd6YSx3y9vKiyVkjdCn6lTdIcrQ+XlqCWLXf3O9WuLf/f7m30ZeEvedcrWrHncZrpz1AmRm1pBfXTepk1b/LUk2Hv27PWW9ISJE1ydbLBHH1ntNwpZtuwo35F6eNUjtsWJ8BJXfwsXHlnyJtx+x90+f8ccczQvJWAxw6iXZicy06zTCYa2d5SgeIvSNcjBZhwFker24qJoZQuPXFAU9Xxpra6QFSQ3qoQ1EGUxe9Ysbwnv3rPb5tocP/Na5wWzsSXourYaezX6wUze4NoKetLnOgQSDgUemTV7pu0rplPflct13979/vtyPfuZ3pMmeSEUcWtjO4trn4PQn+qAyAWr7nQQfUsWqs6dN3+u/33x4iNt5qwZ3kUuL4HKTvdTpyTY6GPsuDFe9HqKgubF3Yma3NcSqDgkjFqrH+wwJpe3OioSu0CUhYJvSJhVfup4xO1YpaEFlYPuqXSos7Ds6KVe5FVW8kDoXjOLouw7J66zoXNUt/OLeS10WArLxvS3Te56bU5Yly9fWho7VhkqNrrupXLQd70L3NXR2rXrvJCrExfUg54hWdmy5NXZC541eT90jiKSqVPCWmZAmGFU40XEWcLbXYP5uGtM+/r7vJXlA7pkc37MVxSEyEoWtZB1qoZY7kd9V5azGu0pkRjdqXTBf5RKpUvX0n0Dd6zES9dSbO/w8hqJiJBgyarq6en217jrrnvtQNSYlI91LZe0t7y7urx7VuPj1ZCr3FvHLt0SFbnkJYISfI3xKo3qCEiEA8GUWMrVLMEJgqwUXPKZUl7Gjyu4cPft7y6Ju8RfHY6C8McI856uwvh6cTx/r+vcSKDmzi0PXRoIcbVJWbJ25baWa1giqA6SxHZ2UeD3FO8Vrke5n4XG28NlrzqSS1qCqjqaPn2atUYifAXbifp8FNOt+wd1p/IL2Llzt7tOr7W4Z+SOO8s3QtH1OzvaeSEBYQZQAypXrBphiZlcrXKvyu2sSUmTA7HYt883wuFJPRIviboEVWKocVFZQ1EBkhhoHHOs+5u+E4ybKnBM0CjLRTx12gFBV1svi0r3lEW1dWuP/2z27BmFsKF5swOxYlL+O8pDQeTMicjUmp4CdQIUTU4WnwRF1t0jj6721u+mzZu9la4JUV5g1623R93flAdZzZqopIhjGvOWOE8ojqkGHQsJt6zUzVu2eKsyLFBlqVA+u7t92scWx7olhN4ijYwjBwKqvCbt7yzvgVztcv+vW1cYu93lOjUnnni8r1fVoyz8cWPHlT0DssDHhcZ3VWctrn6UL9WzOhdx49o6V3nW3+QuV1nIpb1k0ULb4MpVQwzqHPgOYG+Pu06vzV14pI318ctDlej+XRhLx1oGhBlGORrvk2iefNIJJdeyGuk1fY8XNhVw4qPGVtaQLONwtC4JqgRt8pRJ3pJVgx8XZlNubO8qdRaX3JU6T5OggkZ43/59BWszJAyyxHXfwFoNvqtx49kh967GoWXZLl26xKdF1y6Ifqamp0CuWE2M0nnznaWpvOo+EkB5AOTu1XpcpV0Wu8459dSTSu59dRzU0dAmFUFAFGVdaZYVvvbx9V5oj1yYvFOZhEreAu1hXRKl0u5h5Rt5qLPkrdCYbUJVZ5qcJaE8/bSTbdrUqf6QS1kBP+Sq1wQtdaQmjJ9QEnbls7e3z7upx4biecvqVRlqtnlPzw7/mWZQl4vyLj9pbIarV3UW9IyorDSUobru2rfXp1kdMXWm0sXIeXpeZs6YUbrO+g0bXT3sbOr2p3B4QXcNRhWp1IFdkArC1m0PrXzYu3Y1PikRkjUbNK7hSVTBLkVy32ZC1pUsbYmqxNVP3nJioclSssa79xfEPOOsaolE3kcA2+/vE96VSvfTfQNLdMLEgnDJCtQ9grFbXV9plwUry1ORsyZPqmejh5QfV9c99G/Noi641zv8tXXNYLy1aNB5MZPgSsxkUT7w4MM+n+MnjC+7svKp9Mta1eS28VU2BtH1VE4SNgl0sGRMSFT7iltSqgOiDo7+Fh6/LzVcLm297jqaOa4Ja4X48tmSm3mMy5eGAnQPXSPoPKkO+/v7/GStAJ0rl74mcale9H1ZxFu2POHzpetqXHylK3vNdp/vBL8wvu/OaW3zoixU5+rIaWa2UMx4dX6UryDfmlW/cuUj3sPQyXIpwGIGKGxioZnOWi6lBliiJFe0jmActau4BaJcoYExLLHYuWOXt6oCS2/+vHm2Z3eXPbzqUW+hyRKTEMiVe7SzaEWmpfBdjb3KwtLnWk4VjRQlS0wCEFjRskI1G1tLnDQLW9/VtdV50KxmCY3GZiVk9Sy58XuXFDMjiy9w7QZ5kes5mFWta0+fMc2nU9G5dH0Jc7CdpNIRxoucE0cJTa2dxApjtObXbau8TjhhhbfUNUteYqzZ3hrDVh0oTcuXLU2MMb5gwfySYG7avNU7iWX9a7a3rinviDpFE0MdF7n+dd+5cw8Is+4l0ZxS9KBITDVR7KGHVtlfbr/TT2TTeLFEWelRumRhF7wqBzopU50FrHMl6FpHPtmVi4YLHntsjb+Ohgz2uk6WJp1pNjZu7MOow29m+SZfrym7Sx1d3F3qIXaXghGOGm+5aiXECiahhlyTwDRbV+5tWbZyN8sF2lacZFWwGvf4xlRWbWCBaSLWju07vMWlv0lwdb2g0fXrmt3fNdYpN6nCT8qi1qzc8JaTGp+V9Ttp4qTSmLU6CUFgEG1iovN17baiUKlTIYtOHYx6NsjQd7XkR6LcUZx45K/h8ipRDu9aJfHcsbOwHlvrlyXOkyZN8tdQJ2FCyGqWVf/Io4/ZksWLSsvBklCe1AmR0CvNwRaU6vjIvat10T5Ii7ufBLDWhhGyWguTrLp9pHi5yDUZTyKqz1Qv4TINykxWf+CxUOdGIqu6Dgutxq13alZ3v9z3Hd4lHV6r3dW1x0+qC+9/ret4V727vsai1THYtVvP204fL111Pq2YPjh8WF7cXerhJu0uxbaPANAwhR1Gc97SvO0vd3qXuNZQH8pWYHRrT4CnSpjptgFAw8j9q4hnculKjGUtH+quWUQZRgoIMwA0jERYrtopUxQ/emYppCfAaCTf5OshzADQMBpXVbxuABiGji9FAAAAMHiaPQiCMAMAAGAxAwAAwDALc96aPwQOAACAMAMAAADCDAAAAAgzAAAAwgwAAAAIMwAAAMIMAAAACDMAAADCDAAAAAgzAAAAwgwAAAAIMwAAAMIMAAAACDMAAADCDAAAAAgzAAAAIMwAAAAIMwAAAAy3MKcoTQAAgJFlMSPOAAAAI0iYAQAAAGEGAABAmAEAAABhBgAAQJgBAAAAYQYAAECYAQAA4DAR5jwlCgAAMDKEGVEGAAAYYRYzAAAAIMwAAAAIMwAAACDMAAAACDMAAAAgzAAAAAgzAAAAIMwAAACAMAMAACDMAAAAgDADAAAgzAAAAIAwAwAAIMwAAACAMAMAACDMAAAAgDADAAAgzHWRKh4AAACAxQwAAIAwR8lTogAAACNDmBFlAACAEWYxAwAAwMgRZoxmAAAALGYAAACEGQAAABBmAAAAhBkAAAAQZgAAAIQZAAAAEGYAAABAmAEAABBmAAAAQJgBAAAQZgAAAHiqhDlFgQIAAGAxAwAAIMwAAACAMAMAACDMAAAAgDADAAAgzAAAAIAwAwAAAMIMAACAMAMAAADCDAAAgDADAAAAwgwAAIAwAwAAAMIMAACAMAMAAADCDAAAgDADAAAAwgwAAIAwAwAAAMIMAAAACDMAAADCDAAAAAgzAAAAwgwAAABPiTCnKE0AAICRZTEjzgAAACNImAEAAABhBgAAQJij5IsHAAAAYDEDAAAgzAAAAIAwAwAAIMwAAACAMAMAACDMAAAAgDADAAAgzAAAAIAwAwAAAMIMAACAMAMAAADCDAAAMIqFmb2YAQAARpAws7MUAADACBJmAAAAGCotzbpQKtM2Rj+Xfe4WShUAAEYXmdYxWMwAAABYzLVZ+ZazKFUAABg1NNtTjMUMAAAwgkCYAQAAEGYAAABAmAEAABBmAAAAQJgBAAAQZgAAAECYAQAAEGYAAABAmAEAABBmAAAAOBi0UASHN0888YQ/AlasWNHU699///3Dct2DyZo1a2zfvn3+3wsXLrSxY8fy4Byi9aDzdZ2AkVyf0bTOmDHDH4N5/wZ7PiDM8BRw5ZVXlgnzW9/6VnvmM585JCH+7W9/63+GryvUAEqgzzjjjJr3+M///M+yRqkWamAvv/zypjWIt956aykfUdS4KQ/Pf/7zyxo6fV9HI3z4wx8uq4skgkZV+dS9o/z+97/3R5iBgYGy31OplGUymYpye81rXhN7/2iZVktfo3mrp74GWw+1nqtwHek51DMfZTB1Gc6Xnl3dK4zuVeu513k//vGPY9+f8DukPNfT2Q2Xu8ro05/+dEMdkcHUGyDMMARWr15tW7ZsKfvsz3/+86CEWddSQ3Tfffclfqerq8tuueUWf9xwww2+QVy0aFHi9apdK0o+n29KmSj///7v/16yzOJQmf3oRz/yx2c+85lSHrZu3Wr33nvvoO9d77lqWF/wghfYy1/+8tJnmzdvtjvvvLPhe4bFO3r/aJk2M2+16mso9VANPXu5XK7s9zhhHmxdBvnau3dvxfnHHnts1U6I8qt8VyP8Dh133HFeJKvlO5xXlZfu8d73vnfY6g0QZhgiEsfwiyv+9Kc/+UZp5syZdV/n17/+tX31q1+t2ohGefTRR32D+Pa3v93+6q/+KrZBiaatGo18Nwk17spLo9Z1uNEaSjrqPVeN8zXXXOPrSeU3lHuHG9ro+bV+H0reql1rqPVQ7TlV2UXLUp9Hn8HBlmf4nOj5SaKmTug///M/N/T+iHvuuafqOxSXBr3f6si88IUvbHq9AcIMQ0SNwB//+MfYF0298b/+67+u6zr67tVXX5349+OPP76qtaVzZQGeddZZQ2oYh9qTl4vvf//3f4ckbAdLmAN+9atf2fTp0+2Vr3zlQRGSZuYtqb6aUQ/VhDnpeW+WMAfpiDs/Lo0S5Xe/+90Ni3L0HdK1n/3sZ9f1TH3lK1/x1nY9HoZ66w0QZmgCEuU9e/bE/u0HP/hBXcIsi+2Tn/ykZbPZss9lbb/qVa+yCy64oPSZXHtqcL/97W/7f4fRNb7xjW/YuHHjSp/pmtHrXnXVVYlpGcoEnuuvv95+8YtfxP5NeVAjNmvWLP/7Y4895vOhn3GNcjTNb3rTm2zx4sV1pSN6rjo1ynPgFlU6ox0c1ZWEWY1y0AkK+NKXvlSRTpV1mGiZV0tP9HflS/kbTN6ivzezHpKe1bvuuiv2b3/4wx8qvEQSat0vzJe//OWK+0WfyfBzGM1jVNRUr+9///sT30PV5wknnFD6XfdW/Uffn6BeJbTRZy2unIXu+8UvfrGs/gdbb4AwQ5P45S9/mfiSbdq0yTcCtQTlE5/4hO3evbuisf7Upz5V8cLr9xe96EW+sXnHO95R1rgoHXLLPe1pTyvrqccJVbPRuJs6BXGi8653vauiDJQG5UPlJ+GLuoKj11FjWW+6o+cG1orK7uyzz/aHyk5lFaDy1+9qwKMToDo7OyuuGRWbeu6f9Hddf6h5G456aPR5D8T5kksuKetcRodz4sozKf9xnbRontWp0rsWRXX593//97Hvn94b5Vf5iSKh1btXj5DqvupUfOADHxhSvcFTA+uYD0PUCGqiUGCVxh1JlkuAxoij11DDpRe9Wi9cjU1gZeuQpScrOizKYZELH8OBxEDiFr6PZp6qgavWMbnwwgt9PsIWUtAYh49GXH/Rc+MaQZVX9Ht333137PUaLcNa968nfYO9djPrIY6f//znQ3reGy3PWs+CBPa6666r+I7qt1qe9W790z/9k73zne+sOFfvY/RZqJbnm266yb7//e8P+ZkELGZoAmqkwrNxTzrpJP/C33zzzaXPfvKTn9g//MM/JF7je9/7XsVynBe/+MUlV2M1lixZYn/3d39n5557buL31QhEr99s1Dgqn1FkodVy8QX5iDbc0TQ3IszRc+Mafllx0e8lNZaNlmGt+9eTvsFcu9n1EEUu7A0bNpR99pa3vMU+97nPlX5fuXKlPfLII3bUUUdVFal6y1P1Xq2efvazn9muXbvK/q53odo7F+Y5z3mOF9bwOxu8lyeeeGJiuUfRLG1Z6En5HkqdAxYzNIAawXAvWNaqjvBnsl704iehNbNRa/klL3lJ3Wm49NJLq4r4wbCYb7zxxop7qMGr1jg3alE122LWLOLo98aMGXNIW8zNrocoEsHo8/70pz+94p763nBazOE8692K/v1v//Zv6+qIhDsX0WvcfvvtVctdQys6wp+95z3viR23xmLGYoaDhBrB9evXl30my1UNQnS8SYEO9Lcoq1atqujtn3POOQ01KvU05NHe+h133JH4/Tlz5tjs2bMbuoeuF71HI52LuIY7er2HH344UZzHjx9vS5cubcg6UYco+j15PJ4Ki1nPQFKdROuj2rWbXQ/RjoyWB0WfVaVNAqVnOUDLB9/2trcdFIv5tttuq3gWLr744obypjyok6F3Olonp5xySmy5qxN3xRVXeI9VsHRM7YHe/bjJlVjMCDMcBH73u9+VvWxHH310qQGVFaG/B/zmN7/xL68ajTCaRRp9YWu5E5shzG94wxsSv//GN77RH40g92b4HlGhbIYwV5tJfuqpp9p//Md/1N0IXnvttfbDH/6wQgCT0jzcwvzggw8m1km0Pqpdu9n1UO15F894xjP8z4suusjnIWDnzp3+++eff/6wCrPeqejf9O4NBp2n9zT6flYrd5WtOiCamR1+1/V8veIVr0CYEWY4mKhB0EzQJGtL1nF0DamsDS19CvOXv/yl4oWt5nbUDNCNGzfWTJ8a5GXLlg1KVAbjYotGWRpq5yJOmGt1Pqo1gg888EAp/KHGQKPBMWp1VoZbmBupj2rXbnY9hNHEwvC99XwFHc3zzjvPPv7xj1c878MtzKrL6N8aCegTtZqj19L1gzwklbsix+k9DnsTVBYnn3xy6R1EmBFmOAgowEL0RdMLGqBQnB/96EfLBEBCHhXmRic5aX3qF77whZrpO/300+2///u/D5owN7vRabYwy4JT8IsktFyoWgSnQ0WYh6vxV2cwGmP7ec97Xpm3QUIUdisraEucl6iZwlzLzd0Ita5VrWw1uU6donCnWePWeueD/CPMCDMMM9F1ohMmTCjrHetllDiHrWpZbXpxjzjiiLLGoJEXtN7vh78TN7lGwl3NcmiUZgdPiMvn8uXLYxt5EXXX1nt/1Zs2nnjzm99cM3+N5KnRACPR56dafVS71nAFsYhbF33aaadVdEyjnR95jbTCoNnlGe68Rv8WjQdQL3JbN3Kf8O96Lj/72c+WBRNat26dnwwWdKQJMIIwwzCisbTophBxLjsJs5ZchPn6179etsuMxqXj3K5JwlmvJanrVrNOvvWtbzW1TCSM4TFGxRFutsWsGMhxu0HVY7FK+KJRoebOnVs22aeWMAynxazhi3rrpNq1m10PAVonHL6vyk4dpTCK8KV1wdHnPUmYm2Ex6z2J/i1u96x63+votcKdj1p1qvKQEId3AtOabpXBa1/7WixmhBmGEwUSiJtVqw0DajWiWvccFmZZz3HCnIQaIrnIwshKiY4tRsNDDvc6ZnUEoiEuFVFJQSuaJcxDWcccWNThclq7dq3fxauerfcOlXXMza6H4PwdO3aUfaYZyXHPu5bthdc5Ky36XUI+HMIcd88gRK46Y40QjUkQvJ+N1JkEWO9jOJqYJoapQ4kwI8wwjHznO9+peMl++tOf+qMWEgP1orW2VBxzzDG+kQtbc7rOv/7rv8Y2LGeeeaY/wjz++OMV6QlblgdDmNVhULmEkbdgpAizykCbOkTLTpGuFDt63rx5h4UwN7segvOj95Tg1ruV49e+9rWyWcvNFmblWe9VmO9+97tVJ/NFUWc4mh89E+EORb11pmdK1wovpXzd616HMI9QCDByGKBetawHvWSDPXSNMBKG8N91/fDSn2poPE1CHj4/usNU0AiGj2ajhl/3Dd9DwVcG60oNhDl8NCrM4UNloIZW606jZR23h3CSMNdbhnH3b+Tvg712s+tBz5fOH8rzHheJrJHyDIQ5fISFObBGw4eW1jUy1iwvVvQa0WGTeutMHWp1RsLfXbNmzZDqHBBmqGEtV4uZW8+hhircaKhnH/2OguvXM1ambeckLuFzo9bRwYj8NXHiRB+BLHqfV7/61XXlQ+UqF2S1NDcj8pfKWu7J8N8UilG7HdXqKBwKkb+aXQ/NeN5lzYav2Wh51or89bKXvayiTvVOaJZ9PeKsoSE9A9F7aJOTwdbZihUrfKCRauVC5C+EGZqAZlkqolG416tlIgpUUe1QQxk+Z/v27WVub73EEtPodxS9KDrJLIyCGGhJVrQnHp2AczAsZqH7Rq21IB/qaCSVqbZaVPSk6O5SzbaYA+H60Ic+VPH3j33sYz4th7rF3Ox60C5L0ftphna15z2ufK+55pphs5iFNqKIfkebUGjHKr0ncWgXLAUV0aS76Ll6Z+fPnz+kOtM2nho6SfIkYDGPDBhjPsRRWM3oy/Tyl7/chyWshlxb0Rm3CtYQjgykBvDYY48t6+Gr16/tCdVg6ggiGsni1vejQfeFAvdHG5S4LRQlREnofN1vMFazloaoTMIoH1rn+fnPf97nYcGCBf5zpT+ch7AgxC2XUpnF5TlAs7bDDX+0DAIkUCrX8LWURjWkSTGe48qwllWbdP96/j6UazerHjROKhdsGJ1XK9yl3oePfOQjZc+yOrR65pS2Rssz7lmIdtL0LsU9H8qzoqYp3+FtJTUvI6kjpjTGvR+DqTN1SKLv9WDqHBBmSEANWvTljIbdi0MNgiaRqDEIUJxm/R40jmoMJAqynKMv8Te/+U1/1HOfaPSlpEZQVk0Silo2GGEWCjqhTkNcSE818tGGPqmxjUtzrTKoV5iFLMfoch/Vieo4bk3zoSTMzaoHiXtcR7QeJN7hzqgEUuIsl3ozhDkuz3K76/2Jm5Sm+6t+6+lc6j0MOhBDrTNdRxZ7MNkTYR554Mo+hLnnnnts9erVZWNEanwCYa2FhC46xhS1oiWsmrGtYAWNjuMpAH/SPriDGRccCmp8NWY7lHvGjSs2cn6tv6ve3vve91Z8Rx2WcAeq3us1+v2hlHm95w61HuSWDn+u5zIQ1sE87+GO1VDLM25YQyKodyC6u1u9hzrPOj9sWTejztTRjXvWcGUfpsKsh5Pj4ByK6qMebviQVVLv+QrFGT1fITOj31OjoPi8cd+PO+Qmf9/73ufDH6phSrp/PdcKjmaUlxrwW2+91bs+67mnZkzLhT6Y9Malu548ye2v+4a/J8tK65qjDX+916z3/kMp80bOHWw9aBxZZTHY5133i5atLFZNBGs0H408p3oH9C584hOf8O9Gvc+OvCQqJ71/zSj36KF3NFoHtKuDO3BlQ4njjjuuLDCIuOyyy+o+XxZa3BIOBSaZNGlS2Wf6XcstdD8Fxtd+s2rQZLUL7ehz5JFH+p64Zp5Gz48ikW9kx516vQC10KbxCsmodMta0mSccKQt/V2bH6gc9e+olREt70aInhuXp6Cc46J/qbwXLlw46DKsdf960jeUvA21HiRwQ3nehdbzBs9s+HlXehspT30/mpa4LVTDaAmcDnUw9P4oz+G06P1RXnUdhWSt9Q4Ntc6EoqdpU5Fgm1dc2SODVOiQ9ZwJ/WwJHa3Fo614tIeODnd0Hv3ZP12nCz705jMpVYDhemFTqTKLGQCeepZ/vhC97+G3nq2Nxrvd0eOO3tDRVzz6i8dA6ND4QS70M88YMwAAwAii6a5sevEAB9diDn82mPey1vm80wCHuDADwPBxMMYAEWIALGYAaJIV3QyLmXcYAIsZAIaZdJrpJAAIMwCMWFgWAzCKhBk3GMDIh/cUAIsZAIYJwigCIMz0xAEAAIYJZoQAAABgMQMAAAAWMwAAABYzAAAAYDEDAABgMWMxAwAAYDEDAABgMWMxAwAAYDEDAABgMWMxAwAAIMwAAACjDFzZAAAAWMwAAACAxQwAAIDFDAAAAFjMAAAACDMAAAAgzAAAAAgzAAAAIMwAAAAIMwAAACDMAAAACDMAAAAgzAAAAIAwAwAAIMwAAACAMAMAACDMAAAAgDADAAAgzAAAAIAwAwAAIMwAAACAMAMAACDMAAAAgDADAAAgzAAAAIAwAwAAAMIMAACAMAMAAADCDAAAgDADAAAAwgwAAIAwAwAAAMIMAACAMAMAAADCDAAAgDADAAAAwgwAAIAwAwAAAMIMAAAAjpZmXzCfz1OqAAAAWMwAAABYzFjMAAAAWMwAAABYzFjMAAAACDMAAMDoAVc2AAAAFjMAAAAgzAAAACMcXNkAAABYzAAAAIDFDAAAgMUMAAAACDMAAMAhCK5sAAAALGYAAADAYgYAAMBiBgAAAIQZAADgEARXNgAAABYzAAAAYDEDAABgMQMAAADCDAAAcAiCKxsAAACLGQAAALCYAQAAsJgBAAAAixkAAACLGYsZAAAAixkAAACLGYsZAAAAixkAAACLGYsZAAAAixkAAACLGYsZAAAAixkAAAAQZgAAgJEErmwAAAAsZgAAAMBiBgAAwGIGAAAAhBkAAABhBgAAgKHAGDMAAAAWMwAAACDMAAAACDMAAAAcbGFmYBkAAEY7TdHC9BBujhgDAAA0WSfTVdQ+X8eN8og0AABAoibmq+hprN6mB3GT6I0QZQAAgHJNrKad+UYs5sH0BBBnAACAeE1s2LOcrvMm1W6UKx4AAACjmUAPqxmyNY3ZdA0xjprjcYLMGDMAAECyPtZyb9dlMVeb5JXHYgYAAKjLYs5bY5PC6p78ZQlWc1icAQAARrswJ4lxvpYg12Mxx/0eFuKwtYwwAwAAwlxuNees+iqmmhZztWnd+RqijDADAADCXF2ck9zaZRqcThBjS/g8Z5Vjyzqy1AcAAIxysjHCHGc5V9XdWpO/ktQ+KspYzAAAgMWcLM5JmlpBvQFG4lzXYWHGYgYAACzmSmGOinRN0jWs5Xyd1jLCDAAACHN9VnO1seaam1hUE+Zs6BigPgAAYJQzENHGWsIcp73WUuMmcYKcLt4wXfx9ICzwXf0EAQMAgFFrMQ9EDNhqkcBiaYmodaqKlZwOXTxVvGGqeJQs5lf8ZjtVAwAAo9liHrB4d3atACT5OIs5X0Ocw4IcFuZU6FwAAIDRRr4oyGF3dnS8uVZUsJKFnIr8O1W0joOfmeLP4N/hoyXhyIR+ZkLXyESunY7c1xB3AAB4CkTVLHmjpuhk52zEMh5IOLIWP+acrWJFJ44xhy3nXEgwc1VENJyZluLPTIy4pxNEGWEGAICRIsxJy4SjAj2Q8DPJlZ2z5BCdFghz2AUdHWtOWeVGFWHhzFbJWDbG2k5VEWWEGQAARpIwR8U0W4dAJ7mxk+JmV8zQbomxks2q7yiVq5GhuNnbGTswezuFtQwAAIeQ1ZxPEOdcjBgPWH1jy4lLplIxP4N/h8UzOi6cjljCcT/j3NbRaxrCDAAAI1CYzeLjXddyb8dZykkzs3Mx98ynagh0KkFQ0zVEOm6CV5L7GlEGAICRbDUniXM+RpyrheNMWjJl1YS5mtWcihHnakKdSrC6UwkWOsIMAAAjzWpO2oCimgUdJ+BxIh+9V5kw12M1J1nRtazjauPJSR0DAACAgy3I9YhzLYGOG5euNcZc9jNJEOsV51oinK5yLcNaBgCAEWw1WxUhzdUh1o2IckPCbFWs3WpWMVYyAAAc7tZzrf2W486zeoW5XnGuJtTpGn+vdQ8AAICRZDHXI9Bm8euU81XOTbpHVWGuJqK1BDpJjFN13hcAAOCptpitipjm6xTsfC0hriXMg7Gia4lwrc+sjjQAAAAcDCFO+lu+js/yNYS8pihXE8Bagp20vKoRqxjxBQCAQ9F6riXW+RriXrVjMBirtRGLeqj3AgAAGIkWdD2WdK1r5gcriI0KamoQ10GgAQBgpAryYAQ2P9h7NSqEwy2uCDMAAIxUYR4OUR8WIURMAQAAmiPy9v8FGABkdIqwMkfpZgAAAABJRU5ErkJggg==";
var grp_buttons_png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUYAAABkCAYAAAGNw6nvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg1NEYxNjQwODlGMTExRTE5N0M3ODhGOTIyREYxRkRBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg1NEYxNjQxODlGMTExRTE5N0M3ODhGOTIyREYxRkRBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODU0RjE2M0U4OUYxMTFFMTk3Qzc4OEY5MjJERjFGREEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODU0RjE2M0Y4OUYxMTFFMTk3Qzc4OEY5MjJERjFGREEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4xJvghAAA8OElEQVR42tRVQYhSURQ9f3hT1qBQ02I2I4QyUBSFtok2Mc0iCJRatcmdRoJtjKCdu0ARoV2zcBcNmMMsI6NaGILwRbFVQUJE2FCmfif92vTi3eY9/i+ozVvUgcs97977L/dx77vfsG2bt9tt6EA4HDaENk2TQxNETtZsNiFEU0LSjyY5aCsSG5jjnMOyLJJEIkHi8/kUj0ajLr/H41Fn5zeCO3H33AYuLF9T/FcI26H9frzt7RCXIn0etqBiVZHValUZu92u4p1ORxUkEIvF1DmdTiOTyZDdWeTMtnHr2WWs+S8RlzYpS/MrZNsevsHyAnMVL+OtnZ7iRq1W46VSSUtr8vk8zeT1zfPaZvL+lRcGCwQCmEwm0InRoK81nyHa/a9jDv8BWL1e561WS1vCeDxOc3nn5VVtLWKi3aPRCGI2I5EIGRuNBkKhEPHBYIBisUjc6/ViOp3C3nt14ixeNWMMqVQKhULBlfzmqTzutdLETx5eQ7v31LWC9i5DWqyj22eyxM2PdRxgB3F88QT5qd3D4RDO2axUKopns1nyCxEFJZNJ11losVdlHolvsxk+WO9Jz/N9OOo9RlyKM04UvDvbxYNX6z+N3zk+f91WflpB5XJZW7tzuRy1+8bWqrr1Wf9F1N49dsWtHDmN15/+/KeTMSwYDGI8Hmsfdqv/RfEn/Ye/+c3+87/mkDE/BGC/jnkihKE4gBcWLoRFbsDEVcJgYlw5v8DNxNmBiZUeu3Fy8wsQd7+BH8KBr+DoZlxYLuSu/yaveYBnovfGa9Lw2keappTyw+u6bjcMw9GTiqJIZVnmmT0rBhYaE2+32OqZAdXD+73c4zDfmKfMAIOQwMFwCBB5nruY9ydJMgMGgDBFw285Xj++vseHOQ1OkwIYAAeOCspvzZtWVZW7D8RDjD1N9xIi6ptniwyOBsoBD5TDpBBTRbkIFxYhDhhaa7FDF8CQxIUDhu/7qu/7owdL09ReH1evavO2Fpng1dntCRiywGjbVnQpAQxJXNiVBC7MwBYZOEoopoo29fGYt+M4dn3T/5hDxxDP313q2XE0miShgCOjrmuHCCoUF0UxywVBMOqbIoL6eI7nF35ocTGFB1WvaRrRRwNgcFygLMNzo5rP/+9JSVyUZTnDxU/tvxR9/aL2ArBnfSFNhVH8+Gf9QWrQHhxRD0n/oPZgUfYHekmCliRDsQcJKYgeHDboxWkgBDkJAjcUhKTwIZoQiyBGhSBCiXuWkCAtSrRiuVFenLq57u/T8/V9c+vFPUzoB4fv7HznnHvvubvnnnNuEaYN+RoO5BPmBRcx3/6uMb1CqYLMPObzI86zOJlMihcOCHcrk8f6LzkIHYYqs9vt2n40GpX2mbaTk5OElx7bsY4KNYhf40mZAMZ/fM6ZELLh5/y2DQculw8xZFGTRyYPdHZ2ktvtpuHh4XVyECcsBoKjoqGhQfoFsR1QWVlJMzMzgkcAM5ObABLjGu21lpD37RUhfukaW5Urempmduw6L+3A28oWhHwqatZhiWWpZyyuytmeV+gx//7bHN04elf4qNhR9fec1H6WC0HzMae2tjatgOTV6/VSIBDQ5KyLPS0p2mzSXywWo+rqaq0w9fl8kq+vr5f26JUzK2fAUAJ789h9OmJ3ZN0D3xK+mPUfM/YrZN6grYIfrH1OvpFbqz23qb/dUqb54hV67O9s+QGqsB6k2elFMna+WT8HGh0dTQeDwYLLPX6/X+bIa0+qCraWfNwYKdo09e5mQPH/EOSpb5iYmEhHIpGCPDmr1Uoul0s+4vnuR/KFPSWHqBTJ3TAMIWhubqZwOCw+hzDvdDrFXm9vr9QBjxVAP9Pf308Wi0XKgIGBAWpqahI8ph0Oh0M7OOvCF8qjjo4O8bu7u1v4Ekl/7byyoXZfi1hffArQVGyWBmtGtGFsLiylkrSlpHTDwVP9TKc+6B/CAHWco3YUuPChoSHtrd3V1UU9PT3k8XjWvW25YURp09fXp82+QHxjwKN/k/OzRELTywWLeRGndp8RfM3+y9kK5az15YNzz+T+dyMuedwYNKuYhmNiDlL1eI/9sR+tjuSTxjC6rq6OWltb5Vhfdhft7YLUQEIPhGBlXjQX1aFQSJvVMfE+eD4e+8wVyIX535LSyytSdvXwbZqOfxG/75x4KGSe15fo49y4WFU7tgEeXXgl+eD4PTpefpKWjASlzBoTpOrheNhT7VW/YppfiOUPw3zUZY68/vR0wZYYfwRg32pCooqi8B0dhIqgzBaiLkboZ9lCSnATkWNZIFExGkHSom0tMluEIIwLQ+1nFYZgZEEUlVhUVqSF5EKYjVkT0o9KNoxllmk6Nfa+O57befe9UcsJnjAHLu/cc88993l889653znXFQqFZgYHBx11U3ifpqWlKQcGg8EZHVty0n26mpqaHPcfxr67vLzc8V/qVOEW/oIWlxtgRZL+jX6JmO/c2NOCcnNzZXiDLy/nAVDU1NTIOA48D4NAXV1dIhAIyDEimsf7nOLp6npxoCrBnlBL3jkevRn9JHJXr1m04+zspCCBjhaZhXp1nr7QxEcYJFxfXy8KCgrEwEDsC9na2iplpAue7FArLS21jNnp2VI03eIwO+fZQWjXdj80hUE8dLHD4/VUIcnJzl87EYRUou5EGkfhgAyIS0qkHslpDndOY2OjhMvoNcKdFteJBE+5Pkm4bGgsbJYz3uQYBrUpHYN8rXsk/2366x+HG/2rLy/KZtJDTHpzi2m+bjcFP2de0gE+Pz9f8SAq4ALxd2hfX5/adciYywiXoEvzaAdCa1AzQitRWVmpdEmf63CKGH1qE5MT4nLxY5mnJRnXofwtH+c6oJyVQlZyvB55KSYi42osasSEaFwP1LD1ojjRfsyyFvXVk9jb26sclp2dLXFA/oQQLhiNRtUf19LSInFFI0ySffxUMZ/m+f3+2M3k5KgnrLOzU7S1tam1FvIkThs7GmrnCmNz67bdUjJdBzgh73MdmisMJ6aKFHHy4X41lhp1yWbSw7u6u1Kc9p4VX8bGLGvJODGRCfZEElUDSrA2wUn7RJIsAFgKIc70fyg/Sig8BuTFCLgddVNVVVWm/roVeeLFaJfjnNdQ/EAkUe8k4p10YtKJSdI+LM3NzY59KXIkp/758ZmR6JAznRjRSqqcSk51oGnbh4YCO53Htb+/X/JZWVkmOVowGDSN6ePcJrfN5WVlZbKPUwfxtn6ckBuhxBX1sQd+PvRu3j946OvIop2m20jRb1rnQbW1tZKnwJzkiC/r6upERkaGGsPxCRqnoxQoNOTrkJz6KEeHDJWVC3Hi+M8PKmEFAg80p8PXPSeSA9q3/iCr6dkeq80ZHY6L3OioDhwIG7Yojr5/5SgNMoAobtLRnXA4LM+m+Hw+NQY9GsdxORASX3wdfa3h4WE5D6nbeeEwgx4P3rCFvyZ/frdAW5TBIyit+2Ps9Mbh9h0Gf2cW3uq0QGt0hZ5Csp7uE5d3PpI23K6Mv3MiQV3ICHI5riha4uhOdXW1Gvd6vfLa09MzpxMzMzPlPI/HE9eJvJyVl8KGx2IoTEXHXrHMvULKwJMsELqn5uSt3azmIpO321Om9Mjx3DbpEY+UKXTR35Sep+xafs5IqlNinf+sKW3K5dDDASOMEboDGY3TCaqioiLLe1F/dfA1beGwqR+mRrINqzyS37C80KSHtKk+59n76yI8+lnZDM3yGLvff0Xx/Mr5J29viaObzkgbsEV2E16jnEiiA1Ugve5Zp10bD4m7ry7Na9PvvSpOtR9Y1H3pNpZMiDM1D5JzM3BhQXYqZtHqxZBuw41yjrlqYJxCxZlHxO135x15b78FYO9qYKoqw/ALKAgYgghEaWAbZoD4E6jBoMwfRlCtLatFWzNLcjbNEKpN23JrLUnIzDmma241G6yGFTTzr4VFIKaNipaW3KsoP6WCYgoIt/t8h+/c73z3O/dyjZXO82yHw/l+33Pue77f532PX3t7u2P37t3W3G0YQMeXlZXlp4qrOvSR41B/tfWQfEBW4BOUk+ZiAo6y2+10ozSN/zeOHTsGZVTGWYroO2r7KiiHXF0M4y7Kyoj5CKcRoTXwFI65BoAuKjk52VAOj8PkLioqSr/mOHHiBDOJg9GGKp8IszJQL0h7s2fP9njjsM6JiIig/Px8VlZVVRXbf4TJMptQOu8L9yfXNxLY33KUZkTdS3dHJtEe226aEOpHE8MmGOJFzJ888+ZcWMRmizxNgAOHvLw89v+mTZs8hvO5IQDXLhUVFfo1j6uurmYWRWJaGcePH2eEH7lMjvr6egLxnMdBCWFQg81yDlFWEYGBgTqzFMyD06dPgyjODl4viEhFRUV6Hi7zvwG4yoxmmzH08nU30+rUIrcJ+6GnfzPkU3FkooM0R0KdvT94rfe1tHK6cvVvKju6mk6cM86jo0IDtIbl0gBd6L1AM2JdLxxPe+f4ILd8ZuGqsNYeZw9yh8Y7Xz2zjMaMCqG3Ggu8K6O4uKDPGxXcG0/hbE7a0cFs+latWsXs+6ZOnWrIJ6cXFa64uJgZsYModeDAAT0c1GZu5lZXV2egs6DLxHJdQUEBzZs3TymTKKus4AsXavNu1It4/rJAFjOZfQVI87Ji3X/7M5Qdn+OmfGbLeDt/1swH7QVafFx5DDtPi57sPOLd0gf5R1JY4Dj9x694qMpNwUHsev8B1/PIq5rLyhLTQsmwGvbU3c/Rzl+3695gVOWJYfdE30ePJVRR68VTtKWpiL0QuDfI1Tt4duSUUZwtynlA/gLWrVunL+Z4UkaRT8URHBxsSIeWj9cJqw2xfigRp58vXryYUlJShqUgsGrmTmiwrAnrEhV8VcZBL8SS85d76J15FRQWNI5dv/LNY8Mqy17QYYjj13ttlbTPXumWN2HCdKU8XNnfri8kx1XN4PeHtgYKHKXZpzb/+bNb/Y6hhTqczcoT70N8obY3rTXkSQibTk1/7fHeTcsPvampiRnmcuUCmQ5LromJifrY0Uy51q5dS+np6QZ+LfzmyOlRrgi0gB9/bHTSk5SUZIjnfDTeMsLwA1w0OFmDYbCnYUBtbS07RGB5GHJAZhkqmT12yX3qtP3Ornr5zBJKitHG06UHNRlj/GfTqSsHvZa1eu9D7Fw2xI/j12Y4fOYLyk9a5iYPr7f9UqtzzHrrkJI56IMf3zSUL9Y/OGQAg7NZebKsvJxvj/1C0ybGGuTyurQDAxduzaNCZmYmU0IoAwiKvNvkgMMwQDW+4nHnzp1jrRy/FhVM5ShCTqcqA/m4LGJ6T3KYQcwjyyzDqfDKpZ0Vny9wW0meOynbeSwyrffdukL9/5fSNyrDrwUr5mygxJhZkOl/n5RseXgfNXccoS0NxWbxfgZlFCcdFjyjrKxMqYzPVWZYtLtrwPbHv3OtM2K5w1pnHB64pzAVbh+dQC0Xf7Iekg9IDE83dtM2m82BrSysqQUEBFhPyAQYFnR2dlJcXJyyZbTb7Y7o6Gg2CbNwbc/TInVbuG5gUZItWMpowYKMUfhAB77WgAXgkfCjfTMA+9apqamm48eWlhbHZ+3l1DFosx7WMBDjH0+P3rac/BoaGkbM+frNhqVLlyqV8Xp1tXLdt4z4o1ragRM1ICQkhB1m4fwagOmGCNH3LI8T06vyyPnktJC1u7vbaxkqeKsbZTc2NrJ02J1JS0v7z38QmI9c6u+luyInjohjuRtOGVW2OnyLDOwVUL3MwsWtNNCwysvLde9/U6ZM0Vk+3M2tausNgKEXvMggr5hPBMpAF4nPvKgAhynOrtP0ZuW6uUwAti/xXRIA7KA5czSnJbt27dK93PxbyGQIgzebtHJGcJDxwv48ihgz1hDGnUariBIyYoPTaOWsQlYXd/KnDzdGj6HQwDF6eExouB53/koPYx2hbvzv1rU608rlIYznE8PE+3/vyEZqu9yoVkYVhUwEmDKqeFU4FAUKAT9QWLsUWTZyWhjBceCzPVAE5EW4mC83N1f/H+wcsRXnZaxZs4ad4dpILFcG4vDtIjB9ZJlCQzXfyXBWCD9TaCEBWDriRRkJQCHgyREOCmVwRXy4ahFd7Ougr5/QPiCFbyG1XTKOPZnjbfLuywqK8VZGoZ4O5lAi9p38hNm08fALfd30Rv1S1iI/n/w6k3PD4WLamLVBeS9yeQjj+U5e/IPuuEXbWuUMHs5OUr1g+mxatjWTaWOewkVACQGYZkFBzp51UYbk/GKZolNv0bUUUFNTox+IExUIdXBFxDeCUL/qXsRDzC+Gb968mYVBWbkiAiUlJaZlmQEsF7ND9KAuhq/Zr5nbfv7oHl0R8SP+0tmkp5Hdm+oWohHzlXVlxT5iqEdGZ895QzheCPAvu3pCXHIOOujVg4/TzuZt7BJnXKvKE++v4XQjk58Nu/rPG2SAXCp5lawdEaBngVQLD02cNwiYMXfgygUs8CVLlmCAb4gTsW3bNkbAAPWME2Qxq0c6sWWMj3d1Rfj2oqhMqGv9+vXsfzC9QfgAkdYTZGXk4J8KgN02tv1gXQuP+ZWVlW7uabyh3xPbZ8A93T0xufTUtGXs/5Vf5TK/u8+mvElJ0clUvuhLKtynKRU/b1zwmeHaDF2XbUp5cj7Uvn4XNTaMom5xDQ1Q3vjgaNqa7aIADvT2s/wig8esvMTYSfr9/f5nPS2eqrXIb3/7MoWHhBrkUj0j0zEjmNH4TCmUUfTzCyYLSK2efmgY8yM/DE/59phch82mPShsC0EhxXEpXD3K6bhM4nYbykQYCLEwX4Dj5q1bt2JrzvQHkvNzwNIY8oo0NsiGcF/R6+GTnAHk55auzv4ppd02lxIiU+i97BpD+hers93KUIWp0Nx2mJ3njH+Sas/soONnm7Sx8oM7tNardS/Vn9qjh0OetisnWfnLUp2/3eix5OfoG5KzZyhdjy63XN6m74ucXf0ZFo58KGfVvSX0akYpM/AN959ikEsGY+3g7bfgO0pLS5VLO89/kmkt7VzLbBrdmsXa8R2ehgMDvVdpwGF5TfbpefoHkx/YJvhqEAimllIOD+Hh4WxYEBERoWwZu7q6HFirlNdDLXh+nv8IwN61AFdVnOEN3BBAhCjII2BorVMegUHRMgryKjY6bUULWCPCNOMDdWgRImTqOGqVKaNYAmJBSrVkAKlIaBGoEEgAx0IxGDQaTYCAmgSSCAmEBA3JTW7vtzd77n/27HncS5R0ut/Mzr1nzz7+u/c//+4559/vj8HrQGz/bI8M9+0FcK3DIx6sZWlkALL2DAQVkHue61eq0Y9nTE5OTqC8vFyPkAsQXQHPPINXsEUZEVJjWckTepAiWR+yTmzekGWm8fTh7YL2aXQHLB7u0jGdyMA+bI3I4GeNlvH06WnFO1oUD3r5NB1o0IPTBuPpsxtgDY3vfepWWUaZI8cun/LeUE4ewImXR6CoqIi/OaHeM7QeBdqQ+XAA7PGeMGGC6UG5CuDVmTNnDt/TjTp4jy2Csahkk39PtMD74f2lR9mDwx9hJ+vL2bsntrC7B91qnD9ccczkiPD/yrNjq4xiMzw4aOibETmfbprHn0tDTsL5VGzkF4Gt7DbZz5w50/CSofUo0AYuAMqHI8tMXd0owKdDgx+CfQIxSbOzs/k5lWxegnG54UJjA1s89k2TN86fJrzCNh15ix0+s4UfLxr7mslxws35wQtAJb2i4FkTudTlABiSZ494gcdl9XSTCGWUE53TnfIp4HEDZwVRlk7/cn0Z69atY8XFxZZ68g0EbUN+AgAmM9VvQaKEUKA2EcQB4NJFnFaVbE7j4hVjE1IMRTx7MWzR7x2Uwmq+DT0U7+Lr5H7z1BLHiZ+6dHC31lX1dZySG4pYd9HPSZloAsR3mY9c5Jeda7DUU+V9XW9uD2n70cOGpYcMkKWqvs6bZXQKPoQ/QHXeLn/t2rXc1xDODfTPk8uKKHawpDQsIPJpPVFO1Y4gHhBB30DkhOnXCbt37+bvuqGcgpUMXjqY/tEX3NgQVE4lczSA0hmW+8OQD6bwupk+6DG2s/R1tq74RVO+Cr269OHsZflVeSyrJMOxz/sHh309E7tfZyJ4EpZXEDVRlzE+pq356Ed2c1PlCUIoUU8A7VLWMci0pzwzumnayQI65fNpZ9Ei/mfLllFWZgDe3Pv27eNrPpFP640fP974DnYyeq6goICv84QygnvHTiZ5ChbOvwC1jE4yRwN5yqVOp51j3S2iYCATgQjA2yPypg+bqKzzs4F3sm0nNloUSaXEsNrJiQ+xfSfNBN4om1XCLDFAb+rjHBNU+CvSZQlkueu6+7wpY1tZRkSNgMsYLA2mP+o5I5elx9h/I5QR+VQJsH4U2LVrl6kerLBpALOyvN1QnD3LfRSNdR1hNnOy5o7AY1oPz2qHxod5d94rf1tdh+TJDGRQSpGHkJ12KKr+0BRKs0vHruzEmVbuxZ7miwD0fO8czWI9utYrZVAdi7a6xQVY727h+4TDp45Z6kAWKKOX8XG0jHbrKZVlxKswRPLF2g17R3DH7WYZAXoXLFtG3AG7rTvBPmZHEioDZE7UJQxKKa+Fo7WMLS7lP68MTl23hXwWS84WsuoLlVG146VcoLmFn8cnvwh6DWMb7w5NpZTCDt9fGp/FVia/wX759mjbtuVj0dabn6020dxl3xsiMj1Z/4VRR8jg5Xc5KiMslnC5x7RIFUClYNjDAlpi3NUOGTLEURmhGIhoAhJQO2Xcu3ev7UNS0PTNnTuXB/2ANca7YSfAdxGKiPIAjanbFsroVP7419+ybSmhCMqHKvawjUWvempHxNLt2fmH7KnRGSz/1Afs761rTCfEBq5sHcuQNbKrhzIZeWksbVQG2/7rA56MB5XLDs+99yiL73KFIYvX8eyA6UhO4lkePLDB0wivCnBgC+AmQDX1IgmPadU5ASgCNkNRRQTPIsrQV5MoJxLOUWWBV4y4o4ZSwktc9VuQsDadMWOGoYi0bVw8ohztW9WO0zzd3OxXpgNHS9g/U1r3mDTUsvdLPmQJsbfyRMuF/3hrGx1axeoY08G2H9rO6AHJ/LuwRn2u6Gfqk/ZVVnuMvVf6jqR8apkERFsxTb1M+VuOhIhX/3Db60YdyGL3uzw92snICC92sTUAf7axGM7PV06ZtL7sHe32aATlsXZDGbv35KrHRStWrDCOc3Jy+DpV9XsmTZpkEJ1al2gBoxztO5JHO6jV3OS3pLzio+zAY+E96d0792BpY9ONRMsa/SraOVlbxANl/+2jZ5Xnaco+tondcu1o/r1D63AN6JFo6lPua3PhKnaGLBvsZBIQbY3s8xNT/p7jm43++seO4ucgC2RSySojZsGCBbYry4SEBL71AJ8gZn//fTPTqhNJJ6j2xEtwcU4m7VQRe9J6cllsGYAstC4tTwlEBWgdu3WkIAVVyUyBaHTB8bB47fzn0P7A+ornLOUpAagKKrLQSyUKBUDQOW/rNNbIzl3Wh96dWDxbOjnLlrT0wf4vmcaz3UaKb4+YPn26rTJmlj3dbuS8IeE29vGpf7d7WWYNXGIaT+0o0SYITvX+9uMln1+6939SFq2MbQTVGkgjMviwniorK9Mj4QH0bpzi6u7XKO8ONSIbz5iKiooAPFqE94qGFXhuis39uHD79u1rWTOePn06gAv6L58/yeqbzuoBc0G32KvYo0OXWMaTc3prLmqXKbi52WDQUHEyYoel5kW/9PHUnN4a7QaaRllDK6OGhlZGDa2MGhpaGTW0MmpoRAofYpaADFQTP3mDIC3C/uu4uDjLM0cQab1bsIl97M/RTBMe0CmmMxvpS2Z3jpjKfPC2pvtANJwBJ1v4TSI0x+DBgy3nsZ88r2m7HiiPwAV7sGkrG/TFSObDFgKNyGF3Add+o18HRjue2mtHo/2sGVXu9KrIVnb5IuqUKkqVUzQtADsD6R5muR6FXRuo78azo2pXVQ9TbGFhIT83bNgwHuHhe7UOjQ3sxLlKHiPlclOTtBtlxFpI8N3QfSaqfBF1CmEvEAyTQpwDNw823KuiY2E/9Pr16w2uHVqPwqmN/fv3s61bt7LExETHH0vrYhsF3X2Ii0ze7A+2C7rL8VLQp3MSu6XfJON451dvsost4Tg5oAbZeNcW4xh8PLnl65XBeyJB7hcftRsyKTdZlBuyVDw5bvw5U6ZM4axiXrl5BJKTk/mGfCiU08YnpzbGjBnDw4HYce2o2qUbsRAVSxBKYcehWEeDcsVLW17Qu2s/vglfpK6x4bgo4N2RKUJAjTLnhheV1hPh2hBj0PXmoNnP8mYcYUN7hmIgIrwaTTRPhsgHb45cD3lyvuDXoXmQVQAyQJZGB79Pn90mfap0bvkC+PNSU1PZiBEjXBVp6dKlLCkpiSsjsGHDBr5dVYRNA2DtVBujAEyn4M7BJimx4cpNSdDnvHnzTMoI4FGNYZE2beKfolxbkaleaD7Fw6PdnjjNcm7W8HT+WVF/ki0veJJdFXcNS7/5VR6qTcaAK3/Mlk/c4ol35+q4QaFZoDoU8UsVXk3kvfHpalZyfo9xTuTb8e4ANF/II/cxKzuV9ezWYMgAmer9x79byyiQmZnJw7S5WUYcg6hJhEkDwIlIy2HnHragIsltCmVauXKlUlY3i0YtY1VVmEYEAZXctqxGo6Anaj/ncfpU+KoutJ21X7f+nK+xoTG+TS6A392Yzo6fO+Kp7EPDZ7Ejp63RGVTLBC95It7h6jsyDQsJWSCT7TSt2qwuc8445QuA4UEAgSnpORU3j6hPH5E88MADpnKwsiJuIJ7r0XMIF9K3b19uTVWy2iV6gdB8sQZetWoVS0tL49+h6G7ttAUOVe1m3/hD01z2tHz27OiF/Pvyj39vlBFxAtNvXmxYJTmWoAwQMOVV7bPkP7jrTp5k/OOeHfxioPhr4Qvm6K/B78gTeObAb3lbCHhJAdnzKkIBNwf3DM2UkEUVObbNLSOUCtMmgGmT7lW2s4x2ZAAqIAgQPYf2wRIhIOj0orGM2Gs9e/ZsS58gMcVe7IgsY8AlkKUxKAEj73j1KeZXtLm7JN82CKWpS4e+ympLLG1gKkWieas/ed64GGounLe0bTlunT0Wjv4zb+uRpGdM5XrH3sRG9QsxA5fWFvFzkMVOXr5mVF3l1HWenqdRoVSWDnQlWAdCURB0UrZCcnlxJ4worOLOWuZgBImoCniFiQCbwMGDByN+nUllmjx5spEv2DAQRxAcPthKQKPDeoGXaby5OXyBvn7HNtY9rgerb6xjzx9IZT+KT2KP3fAC2zZtN5ubezcPbLlg39TWNdcP2FO3LmH5FR+wt44sdl+rXmywlYfmH6v5JGjJcoMKNInNuXGx7W8xjqUNAvHBaZqWnTcqdEO46ODjRj5kcRofpWWsrKw0PQvEHw9SJ0GkqbKM4hjTnJc74TVr1vC7WCigAPhyaDk8KkI5JMggt7Fjxw7+CW5uEFRFYhmpzLffHmY8QFQrGkpj3LhxEa8ZW8ALZJPCV2OzkQdFBDYXbuTHh0rDHEQJXa431/e39t3i3I/oK6Hz9Za+EQUViebh+8bPlrMLTfUs6Zphlt9iOW41gk/8K5W3lZ79sKlcaW3oJqW6xmfUgSx242OrjPTPAM8OFJFGVgUVsZ0yIglL52QtQB5FA5UvXLjQ0ib6RjmklJQUSxtQXgFQMVMa50iUMTc318gDzxCivArYtek0T7sRM/G++QVqzvvNyIdZ/05j2NLkzUbeqbpiU31fx2ZWUvNp8I600pUEqqS6mN0/PNXSz46Zh3lSkTs9vec+aYzUJFDiJu+VX2Tytp4as9RULuNgKH72kp+/ygq+LOfnIAtkshuXDnZ/GmiGBQcNBR59IDi4kzIi0TDAsK52fyCIpNCXIH6yKye3Af5HIafxIHnnTs/KKOojYa1LFVtg+/btthbXYcnI/E1+22RMSS3hcguypxr5aePSOUEUgLC4cv2vao6yZQfms02frnTsBykraOnQ1vn6C/wYoXdponm0HuSR8+XjuqYKU1s4lssh5C++v/arNVwGyAKZ7MYlZv78+Xp7YBSApbbj3Vl78pmo2hzQ43o2ot8YVh6c4goq2oYr57V79rA/7p0VbLPkso4XftvTE1ezx7f8VHn+4Wtf1hGyvgv4o+Td+bK6iKe2xCNZY9vFmOB3ucmivXbaHAHNuxMlfFiIaoWMHHbMEXEdu2renSjH0zdx4kT+uk3DO0BYNHDgQOU5eA51LeoeXNDX6IHyiPhOvfl4xgTvmHXU+AgAX0cw8OJBeFDxLDcwpaWlAbyqhINHU1OTHrAIxvO/ArR3HeBVVNt6pUMSIDGNEiAJQSBAEKSDPC9NKSotgu1dOvhUpChe8FEuPozlUeSKBYQLVxBCEVEEI73EGCRSIgRBCUkoIQmQhJaEJOeef4c5mZmzZ86ZkxPg6v6/b77kzOzZs/eamTVrrb33v1wKCwtNGA7DxFJkDJCGvwQEHPnUgkAMVNQRERFs7gBv0ZoWsJgNz+KRnARKL/2FrpqyxKI2AacBi//8XWpTuFs0PRTSRff5dDlx4oQJUwPFAkEBZwJjFJgk37RpU7sVY2pqqmlr3jLKLTsnBChQpQh1a0I9/J7RfD7dMVVBLFYVcDYwLdroxxaLfIVSFLgbOFf6q+7zybIMi4i3gICAgEox2hNTlC/elyAtqne0PG+hPo8IwFl1q109HnmAvdfTgrwdCHjbGkgwQkBgL3BdZF5AEBlykALvkC1GjhD/07pvttqsd8/vNbAENlu2ZNbHw4v8q9eo9LpzAaEYNSEnkpAgETw4Wp5HDAFSiqSkJF1iCEfrVgNLZrBkB6sesrOz2XIanrLkXU8L8nZACb3yyit2nYdlQJioDiVpixRD0xU1K7SMjAw2eV6ed54HcCYgr7y0hEiCrTbr3fN7AfAE5N4oo+kdZjNeBK7bdC2T5vwwg07nHaaOodbkINEBfSi8ZmPNa2xOW3RfKP39GSnUJKD+n5L1RtMlLsilXy9n0iMNWpKnm/vdV4w8d1uPbMRoeQkgSAG/BBYSYDk/T1E5WrcaUB64lsRngcUFM2fOZAmN5dc1EmqQt8NIe0DOgg2YMmWK5nwgLYAtEuQsGGmzB1i3iS02NlbB32FzmZkDcq4qnL2aT5/2jtNdhQ2E1qjPaASABYfep7RrCeTjWc1y/EH/ZlZ8GY4oRomySwIs1gj/Ok5Rig19O9G858vpHz4/OY9xc2C/ZB1rAdYyFIa6LPbpWdJqspsQHz92frEdEyOlunmEOYr3z6Oa5T7olZX6oAbIcmK7lCfDXvTzPEq/nug05eguJ5u5HxSjpLBA2IOliIsWLeKS9jhSN0h2JKsIPHegPJO7sZGRkYzsBwu1kURRUhi86+kRAOm1UyIHApDbbcCAAVZZ2V977TVCIkcjwAdFrRTB0QILT4Kc1EjCtGnTaM6cOWxxuGR1SnLCnC75YvL7STFeKyqhNf23We3fd34LbTu7iv1fxyfMijVrUtvXzS9RGV28ddiyL60gma4WZbD/eSRI9kIiQJJgDxGSPQAx0YQ25Qpg8+8rLIRFId4RNK+b/qJ5UHygb7yy/7N9FJW5XuIqSB4h05gWM3U/IOp+q+tQ44vUzyjlyg7u9dSIP7uNFh9eQGF+3hZlCjlAHk81Gs7kMzfpTU0CJ6NwlawEW5ueMnK0vC3AzQOBFOJ7EuFTZeqWjmHpLcimli5dygin1PFDMJpJ5FNa15OTUck3eTt57ZDTqeC6csIqCeATsueeyDcXFxcWFpBvR44cUZSREyXIAQXojHteWVIsIxgQOYy7X1KKAEinlqUstirzSKhyZWJy9l5GxqVFyHUvAStNIskCYdaPWd8ZOl/PKvyo1zL24fg562yl63KkXLCPNrEZCNKuFuVYfj8W1oe+Hvg9/SX0OUU5yEMiNYOcbFnQhlxpe8i0eA86j1TM0fISQGI2btw4RaZhEFNInEyw8hytm3cc+2CdjRw5UrEfRGjvvPOOZl9AjIZNDZCYYQqU1vWwEgGWKCy07t27W1mLAMjWjBKc7du3T/c4qIp4nFbgRNXKee+onO8G7FFkp3KzzK6WdZ/TCo45pQ16xG8ArKuHQ9ZqWkl2KRnPBpZQAY9ITo5DWUn00bFZdrmhFe5oC4of/CMLMfycE68bv5STzrV8oCc922y0oX6pCe/krrTWtaDoPulRkTRkYOMYOpi9UVEWcmnk14TJKah6GJWYcv94MUbMLQLLTfv27alXr16W/VAgmzZtYoMGWKHjSN1ax7UGE6TyRmKMcsI+3nnox4svvsg9F2w++/fvp8JC5632gHWMAZl169ZZHTt8+LDC1a6qWK7duEMiWOk+37pOrqbatPEpa0WyI309HbwYb6xZzpzOZjIZqi86oIL5XCI1rLgZSgqYtrU70PLaSovyvYOv05WidKuyyWYlChe7Z8MYS4ihoGgsDdv8BDUNDrQtA3V2ejv6pXaXvzixlI5d3s63Jj0epppeNSmm7TCVSx1ndZ1MGUdKM79WmnVWicXIW6kOJaB1rpzA0Z7yaqsOriBijGDplFtVcrJH9Qtr1GIsLi5mzFUbNlhbHnKCSJ6C0COM1LNQ0SfENeG+KlyCH39kKRbU8VRHgRF3DCatXLmSxVTlgIsdHx9vUwFrKcaqtBgro3TzzAoxK7+UVg/caOEWlPB73nFa+cu7dKvkhtPaJBFlVsQCywkzLcrHTuJMPXi5VgwCqgk2QexpCzU9q1POzVLrsma9Fp+2lvZlfkNjomdR/ZqNmMy2Pr2P1p9Ya1MGJpWixW+j9y7QuyaVZvPPkUg9JaxLXU6/XN7DvX8S2ackL2d8uO0efJGThkoAYSisLVhxUtIeuGVQXnIyUQngejRi1cF6BOEo4n0jRoyw+RLbqhtEo8x9iIpiGzgf586da1UOlHhyWjyegpDIS9WAYpOUm5alCWXVqVMn6tOnj2UfSE4xVQkfAmRc4H1Y7AGUfWJiIn388cesj3LgA4CBHb0231OLkUhJomonbpeWUHJ6JsUN/ZZCaymTR23//Wua/8NsaxeyTn3nt8lNJZcyx/ojx6UbFbzqIFg9lZ+heb2D5xJp1m5l6KBhQLDZXfXSbNuNknxaeHAytQjqSCNaTWOHYqKG2ZSBqdRk9dtWX0EkK0eQb00KqsGfUTA3YQxNbDff3PbyQcHHIwbTmuQ4qh/kztibFV6YT6RCXmVO+HDb7UpDqYGkdvBg5VcSygWbLeBcOQmuka8zLB/EGQcOHEht27Z12NoA6a0eEMdctmyZXa6sVr/XrFnDRp71FCPaCcWLUW0k3pIDcxlhPc6ePZtNGzICcK0iDCHFRtUYMmQI2/TaXNVWnS1f2ihP1sHf0mnpkLXU/LEW3OO9Gj3JNqv7F9/PQH/ta5NEJGyx2u8QClcGp3KPMILfyICmjOx3wravyO/OBPtS1fPVPrQTIw6W4//2TqDcwt+typYbRBVtO5p1gCZm9aOX2sZS44BomzJQu7OmO+TLelC37fPDH1NyNj/pcM71C/Tm7mE0ueMH1KBWJLNmNz0fT/G/bqVFSTOocUj5DIy8mzfpma7Dy/WEWU6QlzPgbuRBh9uJDS8saNj9/f1txrcwUosX1hkvHSweMG5PmDBBMTgD6JEzawFMQsgaiPaBXUgLRlamyNshnx9oCTj7VuQBwMAH5mtOnTqVMdLIrUeQQMPqw/xEe6xEfLB41q/RNtvqtyNyNhBiVJBL6yEjJ5dGt51GCx9zbHpNiQHWTHvLSqTWzgbIpv/W7SNGPN234Vj6Lu1T8vbyIvfq5UTVui+4SzkxtbqsRHStBsiuQ81u9eDm43Vl4OJ6U1EffqvL2Gqb/Bx1WWn/e/tfor+ED6To2uWT9yMCQ2lhv3/SqqP/T5lXM6hv+DgL0bhEyu0MuJjdLhOsOQEBZ0OL6FwLlSFA/6PjwcCHaFLX+XT5ZhZ9kjTznpOy3w8AMfz4DnMowLs2LTgw2bC1COJ4refTkMUoIFDVcJSM/4+OE1k/3TfJAe4XIEnB37bGVEndgl1H4D6CSAwhcH/AHaOfItmGgLOB50orGYkWkKQEo6WlJqEcBar4+XStrvt8uoPJBYlfMMVDsHgLOAOYN4nRb6NEGHgW+xaMpZ3nV4mkOQJVBiQZGtk0Vvf5dElPTzfhQQabDObmYf2uSJwj4AjwDGEkHmQWGCnH0khekiYtIHmTeBYF7ofn08VkEpmlBQQEBORwFSIQEBAQEIpRQEBAQChGAQEBAaEYBQQEBIRiFBAQEBCKUUBAQKDK4F5cXMzm64AVG2w4YJwRa6cFnAmsMAAbEhiEJMYeT09Pu+c3imdU4G4/n+540MDFBwosAYEqdU9cXdlqgxYtWiho1mwBz+gP6dvp4O0tQogCVYMbZmWY60mdPQdSh0b/Re4gj0VOEDHRW6CqASsPvJdIBGZEMeIZPXR7mxCgQJWihIopoXgj1U4PI3fk7xBuicDdAshKjBKWFJsKqYzEMypwFz7eZvWI51PQjgkICAioYIioNicnh2WfkwNU/UFBQQ6X56UuBcsP4lCVbYtWWlQJcOuKiopYgnsk8woMDDR0PS3I24FzcK5ueMPcX+R/QTuaNGliKJWCFvT6jsX0oaGhmscRWsH5YF1C0q7o6GhLX44dO8aYmBISEliKW2e01dk4c/UipeVlaR5vU6exblL4Szfy6JfsNPJwrUGd6naher7lskq9fJwSL/xAgd7VqWVwuGZOZIE/mWJEIqq+ffsq9iEvsVa+FHvKI2UoD/PmzWNJqbRevMrUrQW87MhK2KZNG6Y8bF1PC/J2QEG+/vrrhtohtdv7TtIjR6DXd+S52bVrF/dYdnY2xcbGair8zp07s23KlClMUc6YMcMqFey9xlONXlAkg7eSzaGpLKey1QequJCqu4XT8t5rbV6joDifxsQ/TxEP+Nzjj8BlmtTm77Q8ZQndKjtHoTUD//RK7VxBLlV3DaWRLcfSgp9nUYR/gHHFaG/6VC2XWy+dZmXSb+LFQ8pWJIriZcuritSeXbp0Ydvp06fpgw8+oMaNG+teTwsYWEAdWh8dWIgYaQV4lhv6vH37dqbAqgJa9xzx5jlz5ij2paamshzbgJeXF8XExFBAQIBFUb7xxhssx/b9BEctufAa7WlS2+mKfcnZe2lL2r/MCtObnms62Ww9hrP9NT1rUdwT39CEXf9NPl7F+nGrMi+qU73CAwLX5K2ytEr389L1a7S09wbWlgi/cFpweFKFwrxSpO/VeBIF+3pxy+aZPxqwqnnIzCuk22UVM62CfNwo71aJYp+mp+Jqovp+1azq0CrHu55CAV7LpBu3rzLrXf5BwP+TWsdSsHcdWhq4gSbufpZCfGsYtxjtTaDOe5mwT+t8o+XVAG8aclavXbuWWXNhYWGVrhuWqBzSyx4SEmLZB4X44YcfMgUl7eddb/PmzSy1qx547YE1KSkbyapELm45evXqxdxWRyH1E8pr3LhxVh8QXrvAhajGpk2bKD8/n4KDg5mihiLv379/xQPk7m73/bxb+DFrC9uAIZGT6eGQ9nad1yusj7Ies9u8IvV95nYXltygl3c9T5ueTFCU6R32OCVc/Fq33sDqIWaFW+E1JF86SBt+m1/pfj7T9BWmFIGPU/5XcSzuiU26536R+hmlXNmhWfaNfZMo//Zpq5ADPhxyecL6HtF8iF0ylvqtrkOrHO96Wnhl51jyrVZg+Q15zOqwjMkHctp1bkXVudJ3y2K8dOmSQlEh21y/fv3o1VdfpYiICEab72jd6uMgQ125ciWLlz366KOKY08//bTF5eRdr127dlSvXj2r/fv27bMoC955OHb06FFGlompKGorDTh16pRTZgvwrq9lMcKKXbFiBQ0fPtyyb/r06Zp1I9SxevXqP8yshq1nl1NErVjy9ihXBh3rdqaowNW0/tc48wtWk2K7KBPRZ147w1WKX/yyW/Eb9chxu7TEqgysnpbBYXa31cs1gHo1fJz9/82ZOKa49TAtYZghWbzbbQGzyP66bRC1r6cfKoES23DHPmj5QE9FGEOugI2GNvTK1vEJoxFR06mGZ/nH/B89ltDU/X8lN9dy6xfygFyeiBjK5JRw4RsqKrv8n20xIuk9FOOoUaMs+zD3bfny5SyvNRLKQ0E6UrfW8ZSUFCvFiLiiZNnx+lK3bl22qYHBCSgNreu1bt2aWcJaOHv2LMuh7Qzwrq9lMQIHDhygPXv2sBzVPKUv4auvvqIlS5ZQ8+bNbeYXr7zvz7S54+dafxm49V0tzKYR3/UjD5cgWtV/g8VlHtVyrJULN/irvtS6TgPuIE76uEu6TYKiVJf5InUppVzeYXe3HvR7qCLccfmQTfmcyVW6y75eJosrrcbNkuvk7e5LoTXq086nf6Jlx5bQnnNx5e6qyZYsTdY3QN021c/CIi9F+zzc4Ep7ccteLLhMp/PSaNeN4zSo0UsWxchCKB5uZoVoUsgFihGo5xNJZwpy757FCAWgdb6kHByx6i5cuEBvvfUWc9ugSORWGvJgI/blDIsRgOXGi/UdP37cUp7XdxzPzc3VvQ7vehi0gIsrR0FBAfsQSCPAzgLv+noW42effaZUAufOMXcay/EwYg7LHfTwAwYMYBvaPXnyZMP5XQxbvo5apRyFYSots6qv2GzFeZrCzW6lMl56xawsk7P2mBVgEEUFtGPWJBRG0gspVFCUTy9ue4FC/T0r3b+g6rUM9dFUZtLtjxpxTynd5dXHl9Cx3O+5Zf+eMJy6hvanJxqVew6josdSTJOhNPrb58jUqExXlvJ2Sb+t2qa6JzO7vKV0pS8m0bpT73PLLui+zKq9t8zW4ZKjs+hmUYFV2yR4u/kYkq+hwRde/g1YWVBUrVq1UuyHqzhixAir8niRjCgvxPH27t1LY8eOVYzSNmvWrFKK8cqVK2xDvG/+/PnUsWNHq7IYANFTjLAyT548afhjAjcZ7vaYMWOYkpHie+vXr6eFCxeyOhFfdYpCMeBKz54929p1ee89yyoVxBjxQZo1a5YiLon4qNYod1UqeEctxrIy6/77uzeimd2U8eeNqaso8eJGxb7R0XOpaWBUed+9atHqAV/T+G1Pmi2wioxzr+0aqDgnoFo4TetcEVNMvpBEa06+Uyl55N6oWMLrYaphUz7qNtmS9d70zXTw/A4a99Acs6UYwfq6btAWm7I0laoUYynnWVPdk9gfJtPlwjS77l9q7hFqFlhhLa8/vpbiTiyisIAQq1MhF7m8jDxDhlxpvBSYkyefKwhLCxYFXhrJ7ezduzf3JcO5cBONun+wyt5++202TURvygxeeFt94bVLDVircNvlFi9vySRinzysWbOGWZNaiknqE6bFjB8/XmGtTpw4kX08Bg0axFXWzlCMWvccbVIPwKB9+CjBckR74D7zLO6qHYDBy+VY/bz7BstBXV/jYOvQTIe63ejdXXPJ37caiwt6u4VQ0+5RVuUi/cPp/LUzmm1wVTXBzcXV4f5Ywi35hy3/dw7tTXEnk3XL1/XopHRJb56mEtcsDcVY3rbrpfk0L+lVahnckUa2elPTkpf3hWcxqvuqvieRvu3Iq7TCECgozqX8slRu2S9T/0leHmZF3/ED9jum+TC2Dfy8N9ULcjO74e4KufDk5XRXGoB1hdSY6ik0UVFRbNNCcnKy3XEzrfbs37+fxRhHjx7NjX8ZsX612rhlyxZuCMDIWnJ5O2xZbIsXL6YePXpQz549FVbYjh07WKwV8T69ydjOtBiXLl1KL7/8skK2uKeIO2oBswV27txZ5SHG0tsOKhLOd6HsdqlVfYkZWygqsDW1ql0xUBJaqwEdfClVt/ovUz+ljCundMucz0+lCVv7OF0u8afX02ONY6hj/c70SYKb+bnRnqIz+ZGpyo/3kSWUeIE/cq2WzZHzB2jC+T40qs0MhXyY0i9TlndXMRnit7o+dxdlPueY6GeU17vwEy0/MpNbFteDvN/YPoRe6/wPCvKpw/ZveuF72v3b97Q4aSbV9fc3GxdeTC6SnIw+Py6JiYmmL7/80uGbg8EHTPD18/OzDETA4kJMCqs58L8eeJODcZ4tIOCvJiKAayzND9SqW20ZgsLKHvCupwV5O0BnpB6gwTXVctGqn1fWCOy9Pq+/Xbt2tdxf+XnwDg4dOmS37NQYOnQoPqx2044l/pRgWnVxlkPXGtLiRbMrGKnYt+H4R3QuX/sZ61j/Merb5AUK8OaHM07nHqVvT/2L/b3XeKnDexQV0ob9P+nrIVRMefRnhyf50YIny42wE5d+NivLqYbOH1nv3XLFiNiWgMDdwrPPPmtYMa7IfFMITgMP1e1qtrIOCEE4SS5jG84TJBIC/wkwu/4lt4UYtEJAGbuFEJwsFzYqLRSjwP0Oh2OMAgKOKEbEtRBHyszMFNIQqHJguSVv6aEeHqgZRA28m1HatRQhQIEqRZRfZ/Z8umRnZ5ukCdWYW4clalgmJyDgLGD+KUa6u3Xrxv7CS6ldu7bdMcacnBzLM/pdxjJKv36Crt++KgQr4BT4evhTQ98oerzBKMvz6XL27Fk2DwVkCqD4wjpkJIcREHCaG2xWapjrCDIK8F8CDRs2tFsxpqeni2dU4K4+n/8GcYCWCTJSPXMAAAAASUVORK5CYII=";

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
            '<div class="button-set"><input class="button age-18" type="button" id="ageNotMatch" style="background: url(' + grp_buttons_png + ') no-repeat scroll 0 0px transparent;border: medium none;cursor: pointer;height: 43px;width: 158px;" />' +
            '<input type="button" value="" class="button age-18-plus" id="callAgeMatch" style="background: url(' + grp_buttons_png + ') no-repeat scroll -168px 0px transparent;margin-left:10px;border: medium none;cursor: pointer;height: 43px;width: 158px;" /></div>' +
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

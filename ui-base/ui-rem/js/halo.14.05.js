var halo = function() {
	var a = "20140624",
	b = {
		length: 0
	},
	c = {},
	d = !0,
	e = "/wx/js/halo.14.03/",
	f = "http://static.paipaiimg.com",
	g = "/c/",
	h = !0,
	i = function() {},
	j = function() {};
	i.prototype = b,
	j.prototype = new i;
	var k = new j,
	l = function(b, c) {
		var d = document.createElement("script");
		d.onload = function() {
			"function" == typeof c && c("success")
		},
		d.onerror = function() {
			"function" == typeof c && c("error")
		},
		d.onabort = function() {
			"function" == typeof c && c("abort")
		},
		d.type = "text/javascript",
		d.src = "js/loader.js?v=" + a,
		document.head.appendChild(d)
	},
	m = function(a, b, c, d) {
		var e = o.set(a, b, c);
		b = p(b),
		a.addEventListener(b, e, d)
	},
	n = function(a, b, c, d) {
		if ("undefined" == typeof c) o.del(a, b);
		else {
			var e = o.get(a, b, c, "remove_cb");
			b = p(b),
			a.removeEventListener(b, e, d)
		}
	},
	o = function() {
		var a = {},
		c = function(c, d, e) {
			var f = c.getAttribute("haloEV");
			if (f || (f = "pm_" + (new Date).getTime(), c.setAttribute("haloEV", f)), a[f] = a[f] || {},
			a[f][d] = a[f][d] || {
				pm_cb: [],
				cb: []
			},
			a[f][d].cb.push(e), b.uievent && b.uievent[d]) var g = function(a) {
				b.uievent[d][0].call(this, q(a), e)
			};
			else var g = function(a) {
				e.call(this, q(a))
			};
			return a[f][d].pm_cb.push(g),
			g
		},
		d = function(b, c, d, e) {
			var f = b.getAttribute("haloEV");
			if (f && a[f] && a[f][c]) {
				for (var g = 0,
				h = a[f][c], i = h.cb.length; i > g; ++g) if (h.cb[g] == d) {
					var j = h.pm_cb[g];
					return e && (delete h.cb[g], delete h.pm_cb[g]),
					j
				}
				return d
			}
		},
		e = function(b, c) {
			var d = b.getAttribute("haloEV"),
			e = p(c);
			if (d && a[d] && a[d][c]) for (var f = 0,
			g = a[d][c], h = g.cb.length; h > f; ++f) b.removeEventListener(e, g.pm_cb[f], !1),
			b.removeEventListener(e, g.pm_cb[f], !0)
		},
		f = {
			set: c,
			get: d,
			del: e
		};
		return f
	} (),
	p = function(a) {
		if (b.uievent && b.uievent[a]) return b.uievent[a][1];
		if (! ("ontouchstart" in window)) {
			if ("touchstart" == a) return "mousedown";
			if ("touchend" == a) return "mouseup";
			if ("touchmove" == a) return "mousemove"
		}
		return a
	},
	q = function(a) {
		return "ontouchstart" in window || (a.touches = a.targetTouches = [{
			pageX: a.clientX,
			pageY: a.clientY,
			target: a.target
		}]),
		a
	},
	r = function() {
		var a = document.createElement("div");
		return a.style.cssText = "-webkit-transition:all .1s; -moz-transition:all .1s; -o-transition:all .1s; -ms-transition:all .1s; transition:all .1s;",
		a.style.webkitTransition ? "-webkit-": a.style.MozTransition ? "-moz-": a.style.oTransition ? "-o-": a.style.msTransition ? "-ms-": ""
	} (),
	s = function() {
		function b(b) {
			for (var c = a,
			d = b.split("\r\n"), e = c.cssRules ? c.cssRules.length: 0, f = 0; f < d.length; ++f) c.insertRule(d[f], e++);
			return e
		}
		var a = function() {
			var a = document.getElementsByTagName("head")[0],
			b = document.createElement("style");
			return b.type = "text/css",
			a.appendChild(b),
			document.styleSheets[document.styleSheets.length - 1]
		} ();
		return {
			add: b
		}
	} (),
	t = function(a, b) {
		var c = a.className,
		d = new RegExp("(^" + b + "\\s+)|(\\s+" + b + "\\s+)|(\\s+" + b + "$)|(^" + b + "$)", "g");
		if (c) {
			if (d.test(c)) return;
			a.className = c + " " + b
		} else a.className = b
	},
	u = function(a, b) {
		var c = a.className,
		d = new RegExp("(^" + b + "\\s+)|(\\s+" + b + "\\s+)|(\\s+" + b + "$)|(^" + b + "$)", "g");
		c = c.replace(d,
		function(a, b, c) {
			return c ? " ": ""
		}),
		a.className = c
	},
	v = function(a, b) {
		var c = a.className,
		d = new RegExp("(^" + b + "\\s+)|(\\s+" + b + "\\s+)|(\\s+" + b + "$)|(^" + b + "$)", "g");
		return d.test(c) ? !0 : !1
	};
	b.on = m,
	b.off = n,
	b.removeClass = u,
	b.addClass = t,
	b.hasClass = v,
	b.stylesheet = s.add,
	b.webkit = r;
	var w = function(b) {
		return "undefined" != typeof b.wait && (d = !!b.wait),
		e = b.path || e,
		b.hasOwnProperty("combo") && (h = b.combo),
		b.hasOwnProperty("host") && (f = b.host),
		b.hasOwnProperty("version") && (a = b.version),
		halo
	},
	x = function(a, c) {
		if (b[a]) throw "this has existed!";
		b[a] = c,
		++b.length
	},
	y = function() {
		function q() {
			g == f ? j ? i(b) : k.ready(b) : setTimeout(q, 500)
		}
		for (var a = arguments,
		f = 0,
		g = 0,
		i = function() {},
		j = d, m = "", n = 0, o = a.length; o > n; ++n) {
			var p = a[n];
			if ("string" != typeof p) {
				if ("function" != typeof p) continue;
				break
			}
			if (++f, b[p])++g;
			else {
				if (c[p]) continue;
				c[p] = p,
				h ? m += "," + e + p + ".js": function(a) {
					l(a,
					function() {++g
					})
				} (p)
			}
		}
		return !! h && !!m && l(m.replace(/^\,/, ""),
		function() {
			g = f
		}),
		"function" == typeof a[n] && (i = a[n], "undefined" != typeof a[n + 1] && (j = !!a[n + 1])),
		j || (k.onready = function(a) {
			k.ready = "function" == typeof a ? a: function() {}
		},
		i(k)),
		q(),
		halo
	};
	return {
		add: x,
		use: y,
		config: w,
		on: m,
		off: n,
		stylesheet: s.add
	}
} ();
/*  |xGv00|d91bd1f76f4abfc9539d71cb4b99635f */

!function(t) {
    var o = {
        init: function(o) {
            var e = {
                offset: !0,
                bgfixed: !0,
                invert: !0
            };
            return this.each(function() {
                function i() {
                    p = s.data("source-url"),
                        h = parseFloat(s.data("source-width")),
                        g = parseFloat(s.data("source-height")),
                        s.css({
                            "background-image": "url(" + p + ")"
                        }),
                        n()
                }
                function n() {
                    u.on("scroll", function() {
                        e.offset && r()
                    }).trigger("scroll"),
                        u.on("resize", function() {
                            s.width(u.width()),
                                s.css({
                                    width: "",
                                    left: ""
                                }),
                            e.offset && l()
                        }).trigger("resize")
                }
                function r() {
                    c()
                }
                function l() {
                    c()
                }
                function c() {
                    var t, o, i, n;
                    f = s.outerHeight(),
                        windowHeight = u.height(),
                        a = s.offset().top,
                        t = d.scrollTop(),
                        o = t + windowHeight,
                        i = t - f,
                    o > a && a > i && (n = o - i,
                        pixelScrolled = t - (a - windowHeight),
                        percentScrolled = pixelScrolled / n,
                        e.invert ? (deltaTopScrollVal = 100 * percentScrolled,
                            s.css({
                                "background-position": "50% " + deltaTopScrollVal + "%"
                            })) : (deltaTopScrollVal = 100 * (1 - percentScrolled),
                            s.css({
                                "background-position": "50% " + deltaTopScrollVal + "%"
                            })))
                }
                o && t.extend(e, o);
                {
                    var a, s = t(this), u = t(window), d = t(document), f = 0, p = "", h = "", g = "";
                    Boolean(navigator.userAgent.match(/MSIE ([8]+)\./))
                }
                i()
            })
        },
        destroy: function() {},
        reposition: function() {},
        update: function() {}
    };
    t.fn.sitManParallex = function(e) {
        return o[e] ? o[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method with name " + e + " is not exist for jQuery") : o.init.apply(this, arguments)
    }
}(jQuery);

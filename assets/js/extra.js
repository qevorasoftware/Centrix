if ("undefined" == typeof jQuery) throw new Error("Centrix requires jQuery");
! function (i) {
    "use strict";

    function s(t, e) {
        if (this.element = t, this.options = e, this.$overlay = i(e.overlayTemplate), "" === e.source) throw new Error("Source url was not defined. Please specify a url in your BoxRefresh source option.");
        this._setUpListeners(), this.load()
    }
    var r = "lte.boxrefresh",
        a = {
            source: "",
            params: {},
            trigger: ".refresh-btn",
            content: ".box-body",
            loadInContent: !0,
            responseType: "",
            overlayTemplate: '<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>',
            onLoadStart: function () { },
            onLoadDone: function (t) {
                return t
            }
        },
        t = '[data-widget="box-refresh"]';

    function e(n) {
        return this.each(function () {
            var t = i(this),
                e = t.data(r);
            if (!e) {
                var o = i.extend({}, a, t.data(), "object" == typeof n && n);
                t.data(r, e = new s(t, o))
            }
            if ("string" == typeof e) {
                if (void 0 === e[n]) throw new Error("No method named " + n);
                e[n]()
            }
        })
    }
    s.prototype.load = function () {
        this._addOverlay(), this.options.onLoadStart.call(i(this)), i.get(this.options.source, this.options.params, function (t) {
            this.options.loadInContent && i(this.element).find(this.options.content).html(t), this.options.onLoadDone.call(i(this), t), this._removeOverlay()
        }.bind(this), "" !== this.options.responseType && this.options.responseType)
    }, s.prototype._setUpListeners = function () {
        i(this.element).on("click", this.options.trigger, function (t) {
            t && t.preventDefault(), this.load()
        }.bind(this))
    }, s.prototype._addOverlay = function () {
        i(this.element).append(this.$overlay)
    }, s.prototype._removeOverlay = function () {
        i(this.$overlay).remove()
    };
    var o = i.fn.boxRefresh;
    i.fn.boxRefresh = e, i.fn.boxRefresh.Constructor = s, i.fn.boxRefresh.noConflict = function () {
        return i.fn.boxRefresh = o, this
    }, i(window).on("load", function () {
        i(t).each(function () {
            e.call(i(this))
        })
    })
}(jQuery),
    function (s) {
        "use strict";

        function n(t, e) {
            this.element = t, this.options = e, s(this.element).addClass(h), s(a + o, this.element).addClass(c), this._setUpListeners()
        }
        var i = "lte.tree",
            r = {
                animationSpeed: 500,
                accordion: !0,
                followLink: 1,
                trigger: ".treeview a"
            },
            a = ".treeview",
            d = ".treeview-menu",
            l = ".menu-open, .active",
            t = '[data-widget="tree"]',
            o = ".active",
            c = "menu-open",
            h = "tree",
            f = "collapsed.tree",
            p = "expanded.tree";

        function e(o) {
            return this.each(function () {
                var t = s(this);
                if (!t.data(i)) {
                    var e = s.extend({}, r, t.data(), "object" == typeof o && o);
                    t.data(i, new n(t, e))
                }
            })
        }
        n.prototype.toggle = function (t, e) {
            var o = t.next(d),
                n = t.parent(),
                i = n.hasClass(c);
            n.is(a) && (this.options.followLink && "#" !== t.attr("href") || e.preventDefault(), i ? this.collapse(o, n) : this.expand(o, n))
        }, n.prototype.expand = function (t, e) {
            var o = s.Event(p);
            if (this.options.accordion) {
                var n = e.siblings(l),
                    i = n.children(d);
                this.collapse(i, n)
            }
            e.addClass(c), t.slideDown(this.options.animationSpeed, function () {
                s(this.element).trigger(o), e.height("auto")
            }.bind(this))
        }, n.prototype.collapse = function (t, e) {
            var o = s.Event(f);
            e.removeClass(c), t.slideUp(this.options.animationSpeed, function () {
                s(this.element).trigger(o), e.find(a).removeClass(c).find(d).hide()
            }.bind(this))
        }, n.prototype._setUpListeners = function () {
            var e = this;
            s(this.element).on("click", this.options.trigger, function (t) {
                e.toggle(s(this), t)
            })
        };
        var u = s.fn.tree;
        s.fn.tree = e, s.fn.tree.Constructor = n, s.fn.tree.noConflict = function () {
            return s.fn.tree = u, this
        }, s(window).on("load", function () {
            s(t).each(function () {
                e.call(s(this))
            })
        })
    }(jQuery);
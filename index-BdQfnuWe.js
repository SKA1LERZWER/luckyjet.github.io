var My = Object.defineProperty;
var Dy = (a, i, u) => i in a ? My(a, i, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: u
}) : a[i] = u;
var Tu = (a, i, u) => Dy(a, typeof i != "symbol" ? i + "" : i, u);
(function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const f of o)
            if (f.type === "childList")
                for (const d of f.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && r(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function u(o) {
        const f = {};
        return o.integrity && (f.integrity = o.integrity),
        o.referrerPolicy && (f.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? f.credentials = "include" : o.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin",
        f
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const f = u(o);
        fetch(o.href, f)
    }
}
)();
function Hg(a) {
    return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a
}
var Tc = {
    exports: {}
}
  , Ll = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x1;
function Cy() {
    if (x1)
        return Ll;
    x1 = 1;
    var a = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.fragment");
    function u(r, o, f) {
        var d = null;
        if (f !== void 0 && (d = "" + f),
        o.key !== void 0 && (d = "" + o.key),
        "key"in o) {
            f = {};
            for (var g in o)
                g !== "key" && (f[g] = o[g])
        } else
            f = o;
        return o = f.ref,
        {
            $$typeof: a,
            type: r,
            key: d,
            ref: o !== void 0 ? o : null,
            props: f
        }
    }
    return Ll.Fragment = i,
    Ll.jsx = u,
    Ll.jsxs = u,
    Ll
}
var w1;
function jy() {
    return w1 || (w1 = 1,
    Tc.exports = Cy()),
    Tc.exports
}
var H = jy()
  , Rc = {
    exports: {}
}
  , ce = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var N1;
function zy() {
    if (N1)
        return ce;
    N1 = 1;
    var a = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.portal")
      , u = Symbol.for("react.fragment")
      , r = Symbol.for("react.strict_mode")
      , o = Symbol.for("react.profiler")
      , f = Symbol.for("react.consumer")
      , d = Symbol.for("react.context")
      , g = Symbol.for("react.forward_ref")
      , p = Symbol.for("react.suspense")
      , v = Symbol.for("react.memo")
      , y = Symbol.for("react.lazy")
      , _ = Symbol.iterator;
    function M(S) {
        return S === null || typeof S != "object" ? null : (S = _ && S[_] || S["@@iterator"],
        typeof S == "function" ? S : null)
    }
    var U = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , N = Object.assign
      , C = {};
    function Z(S, L, X) {
        this.props = S,
        this.context = L,
        this.refs = C,
        this.updater = X || U
    }
    Z.prototype.isReactComponent = {},
    Z.prototype.setState = function(S, L) {
        if (typeof S != "object" && typeof S != "function" && S != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, L, "setState")
    }
    ,
    Z.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate")
    }
    ;
    function re() {}
    re.prototype = Z.prototype;
    function ue(S, L, X) {
        this.props = S,
        this.context = L,
        this.refs = C,
        this.updater = X || U
    }
    var te = ue.prototype = new re;
    te.constructor = ue,
    N(te, Z.prototype),
    te.isPureReactComponent = !0;
    var ie = Array.isArray
      , Q = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
    }
      , q = Object.prototype.hasOwnProperty;
    function J(S, L, X, Y, W, pe) {
        return X = pe.ref,
        {
            $$typeof: a,
            type: S,
            key: L,
            ref: X !== void 0 ? X : null,
            props: pe
        }
    }
    function F(S, L) {
        return J(S.type, L, void 0, void 0, void 0, S.props)
    }
    function se(S) {
        return typeof S == "object" && S !== null && S.$$typeof === a
    }
    function ve(S) {
        var L = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + S.replace(/[=:]/g, function(X) {
            return L[X]
        })
    }
    var Ve = /\/+/g;
    function Qe(S, L) {
        return typeof S == "object" && S !== null && S.key != null ? ve("" + S.key) : L.toString(36)
    }
    function Je() {}
    function Xe(S) {
        switch (S.status) {
        case "fulfilled":
            return S.value;
        case "rejected":
            throw S.reason;
        default:
            switch (typeof S.status == "string" ? S.then(Je, Je) : (S.status = "pending",
            S.then(function(L) {
                S.status === "pending" && (S.status = "fulfilled",
                S.value = L)
            }, function(L) {
                S.status === "pending" && (S.status = "rejected",
                S.reason = L)
            })),
            S.status) {
            case "fulfilled":
                return S.value;
            case "rejected":
                throw S.reason
            }
        }
        throw S
    }
    function Ze(S, L, X, Y, W) {
        var pe = typeof S;
        (pe === "undefined" || pe === "boolean") && (S = null);
        var oe = !1;
        if (S === null)
            oe = !0;
        else
            switch (pe) {
            case "bigint":
            case "string":
            case "number":
                oe = !0;
                break;
            case "object":
                switch (S.$$typeof) {
                case a:
                case i:
                    oe = !0;
                    break;
                case y:
                    return oe = S._init,
                    Ze(oe(S._payload), L, X, Y, W)
                }
            }
        if (oe)
            return W = W(S),
            oe = Y === "" ? "." + Qe(S, 0) : Y,
            ie(W) ? (X = "",
            oe != null && (X = oe.replace(Ve, "$&/") + "/"),
            Ze(W, L, X, "", function(Bn) {
                return Bn
            })) : W != null && (se(W) && (W = F(W, X + (W.key == null || S && S.key === W.key ? "" : ("" + W.key).replace(Ve, "$&/") + "/") + oe)),
            L.push(W)),
            1;
        oe = 0;
        var vt = Y === "" ? "." : Y + ":";
        if (ie(S))
            for (var je = 0; je < S.length; je++)
                Y = S[je],
                pe = vt + Qe(Y, je),
                oe += Ze(Y, L, X, pe, W);
        else if (je = M(S),
        typeof je == "function")
            for (S = je.call(S),
            je = 0; !(Y = S.next()).done; )
                Y = Y.value,
                pe = vt + Qe(Y, je++),
                oe += Ze(Y, L, X, pe, W);
        else if (pe === "object") {
            if (typeof S.then == "function")
                return Ze(Xe(S), L, X, Y, W);
            throw L = String(S),
            Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.")
        }
        return oe
    }
    function D(S, L, X) {
        if (S == null)
            return S;
        var Y = []
          , W = 0;
        return Ze(S, Y, "", "", function(pe) {
            return L.call(X, pe, W++)
        }),
        Y
    }
    function G(S) {
        if (S._status === -1) {
            var L = S._result;
            L = L(),
            L.then(function(X) {
                (S._status === 0 || S._status === -1) && (S._status = 1,
                S._result = X)
            }, function(X) {
                (S._status === 0 || S._status === -1) && (S._status = 2,
                S._result = X)
            }),
            S._status === -1 && (S._status = 0,
            S._result = L)
        }
        if (S._status === 1)
            return S._result.default;
        throw S._result
    }
    var P = typeof reportError == "function" ? reportError : function(S) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var L = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
                error: S
            });
            if (!window.dispatchEvent(L))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", S);
            return
        }
        console.error(S)
    }
    ;
    function be() {}
    return ce.Children = {
        map: D,
        forEach: function(S, L, X) {
            D(S, function() {
                L.apply(this, arguments)
            }, X)
        },
        count: function(S) {
            var L = 0;
            return D(S, function() {
                L++
            }),
            L
        },
        toArray: function(S) {
            return D(S, function(L) {
                return L
            }) || []
        },
        only: function(S) {
            if (!se(S))
                throw Error("React.Children.only expected to receive a single React element child.");
            return S
        }
    },
    ce.Component = Z,
    ce.Fragment = u,
    ce.Profiler = o,
    ce.PureComponent = ue,
    ce.StrictMode = r,
    ce.Suspense = p,
    ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q,
    ce.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(S) {
            return Q.H.useMemoCache(S)
        }
    },
    ce.cache = function(S) {
        return function() {
            return S.apply(null, arguments)
        }
    }
    ,
    ce.cloneElement = function(S, L, X) {
        if (S == null)
            throw Error("The argument must be a React element, but you passed " + S + ".");
        var Y = N({}, S.props)
          , W = S.key
          , pe = void 0;
        if (L != null)
            for (oe in L.ref !== void 0 && (pe = void 0),
            L.key !== void 0 && (W = "" + L.key),
            L)
                !q.call(L, oe) || oe === "key" || oe === "__self" || oe === "__source" || oe === "ref" && L.ref === void 0 || (Y[oe] = L[oe]);
        var oe = arguments.length - 2;
        if (oe === 1)
            Y.children = X;
        else if (1 < oe) {
            for (var vt = Array(oe), je = 0; je < oe; je++)
                vt[je] = arguments[je + 2];
            Y.children = vt
        }
        return J(S.type, W, void 0, void 0, pe, Y)
    }
    ,
    ce.createContext = function(S) {
        return S = {
            $$typeof: d,
            _currentValue: S,
            _currentValue2: S,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        S.Provider = S,
        S.Consumer = {
            $$typeof: f,
            _context: S
        },
        S
    }
    ,
    ce.createElement = function(S, L, X) {
        var Y, W = {}, pe = null;
        if (L != null)
            for (Y in L.key !== void 0 && (pe = "" + L.key),
            L)
                q.call(L, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (W[Y] = L[Y]);
        var oe = arguments.length - 2;
        if (oe === 1)
            W.children = X;
        else if (1 < oe) {
            for (var vt = Array(oe), je = 0; je < oe; je++)
                vt[je] = arguments[je + 2];
            W.children = vt
        }
        if (S && S.defaultProps)
            for (Y in oe = S.defaultProps,
            oe)
                W[Y] === void 0 && (W[Y] = oe[Y]);
        return J(S, pe, void 0, void 0, null, W)
    }
    ,
    ce.createRef = function() {
        return {
            current: null
        }
    }
    ,
    ce.forwardRef = function(S) {
        return {
            $$typeof: g,
            render: S
        }
    }
    ,
    ce.isValidElement = se,
    ce.lazy = function(S) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: S
            },
            _init: G
        }
    }
    ,
    ce.memo = function(S, L) {
        return {
            $$typeof: v,
            type: S,
            compare: L === void 0 ? null : L
        }
    }
    ,
    ce.startTransition = function(S) {
        var L = Q.T
          , X = {};
        Q.T = X;
        try {
            var Y = S()
              , W = Q.S;
            W !== null && W(X, Y),
            typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(be, P)
        } catch (pe) {
            P(pe)
        } finally {
            Q.T = L
        }
    }
    ,
    ce.unstable_useCacheRefresh = function() {
        return Q.H.useCacheRefresh()
    }
    ,
    ce.use = function(S) {
        return Q.H.use(S)
    }
    ,
    ce.useActionState = function(S, L, X) {
        return Q.H.useActionState(S, L, X)
    }
    ,
    ce.useCallback = function(S, L) {
        return Q.H.useCallback(S, L)
    }
    ,
    ce.useContext = function(S) {
        return Q.H.useContext(S)
    }
    ,
    ce.useDebugValue = function() {}
    ,
    ce.useDeferredValue = function(S, L) {
        return Q.H.useDeferredValue(S, L)
    }
    ,
    ce.useEffect = function(S, L, X) {
        var Y = Q.H;
        if (typeof X == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return Y.useEffect(S, L)
    }
    ,
    ce.useId = function() {
        return Q.H.useId()
    }
    ,
    ce.useImperativeHandle = function(S, L, X) {
        return Q.H.useImperativeHandle(S, L, X)
    }
    ,
    ce.useInsertionEffect = function(S, L) {
        return Q.H.useInsertionEffect(S, L)
    }
    ,
    ce.useLayoutEffect = function(S, L) {
        return Q.H.useLayoutEffect(S, L)
    }
    ,
    ce.useMemo = function(S, L) {
        return Q.H.useMemo(S, L)
    }
    ,
    ce.useOptimistic = function(S, L) {
        return Q.H.useOptimistic(S, L)
    }
    ,
    ce.useReducer = function(S, L, X) {
        return Q.H.useReducer(S, L, X)
    }
    ,
    ce.useRef = function(S) {
        return Q.H.useRef(S)
    }
    ,
    ce.useState = function(S) {
        return Q.H.useState(S)
    }
    ,
    ce.useSyncExternalStore = function(S, L, X) {
        return Q.H.useSyncExternalStore(S, L, X)
    }
    ,
    ce.useTransition = function() {
        return Q.H.useTransition()
    }
    ,
    ce.version = "19.1.0",
    ce
}
var M1;
function Qu() {
    return M1 || (M1 = 1,
    Rc.exports = zy()),
    Rc.exports
}
var T = Qu();
const $l = Hg(T);
var xc = {
    exports: {}
}
  , Bl = {}
  , wc = {
    exports: {}
}
  , Nc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D1;
function Uy() {
    return D1 || (D1 = 1,
    function(a) {
        function i(D, G) {
            var P = D.length;
            D.push(G);
            e: for (; 0 < P; ) {
                var be = P - 1 >>> 1
                  , S = D[be];
                if (0 < o(S, G))
                    D[be] = G,
                    D[P] = S,
                    P = be;
                else
                    break e
            }
        }
        function u(D) {
            return D.length === 0 ? null : D[0]
        }
        function r(D) {
            if (D.length === 0)
                return null;
            var G = D[0]
              , P = D.pop();
            if (P !== G) {
                D[0] = P;
                e: for (var be = 0, S = D.length, L = S >>> 1; be < L; ) {
                    var X = 2 * (be + 1) - 1
                      , Y = D[X]
                      , W = X + 1
                      , pe = D[W];
                    if (0 > o(Y, P))
                        W < S && 0 > o(pe, Y) ? (D[be] = pe,
                        D[W] = P,
                        be = W) : (D[be] = Y,
                        D[X] = P,
                        be = X);
                    else if (W < S && 0 > o(pe, P))
                        D[be] = pe,
                        D[W] = P,
                        be = W;
                    else
                        break e
                }
            }
            return G
        }
        function o(D, G) {
            var P = D.sortIndex - G.sortIndex;
            return P !== 0 ? P : D.id - G.id
        }
        if (a.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            a.unstable_now = function() {
                return f.now()
            }
        } else {
            var d = Date
              , g = d.now();
            a.unstable_now = function() {
                return d.now() - g
            }
        }
        var p = []
          , v = []
          , y = 1
          , _ = null
          , M = 3
          , U = !1
          , N = !1
          , C = !1
          , Z = !1
          , re = typeof setTimeout == "function" ? setTimeout : null
          , ue = typeof clearTimeout == "function" ? clearTimeout : null
          , te = typeof setImmediate < "u" ? setImmediate : null;
        function ie(D) {
            for (var G = u(v); G !== null; ) {
                if (G.callback === null)
                    r(v);
                else if (G.startTime <= D)
                    r(v),
                    G.sortIndex = G.expirationTime,
                    i(p, G);
                else
                    break;
                G = u(v)
            }
        }
        function Q(D) {
            if (C = !1,
            ie(D),
            !N)
                if (u(p) !== null)
                    N = !0,
                    q || (q = !0,
                    Qe());
                else {
                    var G = u(v);
                    G !== null && Ze(Q, G.startTime - D)
                }
        }
        var q = !1
          , J = -1
          , F = 5
          , se = -1;
        function ve() {
            return Z ? !0 : !(a.unstable_now() - se < F)
        }
        function Ve() {
            if (Z = !1,
            q) {
                var D = a.unstable_now();
                se = D;
                var G = !0;
                try {
                    e: {
                        N = !1,
                        C && (C = !1,
                        ue(J),
                        J = -1),
                        U = !0;
                        var P = M;
                        try {
                            t: {
                                for (ie(D),
                                _ = u(p); _ !== null && !(_.expirationTime > D && ve()); ) {
                                    var be = _.callback;
                                    if (typeof be == "function") {
                                        _.callback = null,
                                        M = _.priorityLevel;
                                        var S = be(_.expirationTime <= D);
                                        if (D = a.unstable_now(),
                                        typeof S == "function") {
                                            _.callback = S,
                                            ie(D),
                                            G = !0;
                                            break t
                                        }
                                        _ === u(p) && r(p),
                                        ie(D)
                                    } else
                                        r(p);
                                    _ = u(p)
                                }
                                if (_ !== null)
                                    G = !0;
                                else {
                                    var L = u(v);
                                    L !== null && Ze(Q, L.startTime - D),
                                    G = !1
                                }
                            }
                            break e
                        } finally {
                            _ = null,
                            M = P,
                            U = !1
                        }
                        G = void 0
                    }
                } finally {
                    G ? Qe() : q = !1
                }
            }
        }
        var Qe;
        if (typeof te == "function")
            Qe = function() {
                te(Ve)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Je = new MessageChannel
              , Xe = Je.port2;
            Je.port1.onmessage = Ve,
            Qe = function() {
                Xe.postMessage(null)
            }
        } else
            Qe = function() {
                re(Ve, 0)
            }
            ;
        function Ze(D, G) {
            J = re(function() {
                D(a.unstable_now())
            }, G)
        }
        a.unstable_IdlePriority = 5,
        a.unstable_ImmediatePriority = 1,
        a.unstable_LowPriority = 4,
        a.unstable_NormalPriority = 3,
        a.unstable_Profiling = null,
        a.unstable_UserBlockingPriority = 2,
        a.unstable_cancelCallback = function(D) {
            D.callback = null
        }
        ,
        a.unstable_forceFrameRate = function(D) {
            0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < D ? Math.floor(1e3 / D) : 5
        }
        ,
        a.unstable_getCurrentPriorityLevel = function() {
            return M
        }
        ,
        a.unstable_next = function(D) {
            switch (M) {
            case 1:
            case 2:
            case 3:
                var G = 3;
                break;
            default:
                G = M
            }
            var P = M;
            M = G;
            try {
                return D()
            } finally {
                M = P
            }
        }
        ,
        a.unstable_requestPaint = function() {
            Z = !0
        }
        ,
        a.unstable_runWithPriority = function(D, G) {
            switch (D) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                D = 3
            }
            var P = M;
            M = D;
            try {
                return G()
            } finally {
                M = P
            }
        }
        ,
        a.unstable_scheduleCallback = function(D, G, P) {
            var be = a.unstable_now();
            switch (typeof P == "object" && P !== null ? (P = P.delay,
            P = typeof P == "number" && 0 < P ? be + P : be) : P = be,
            D) {
            case 1:
                var S = -1;
                break;
            case 2:
                S = 250;
                break;
            case 5:
                S = 1073741823;
                break;
            case 4:
                S = 1e4;
                break;
            default:
                S = 5e3
            }
            return S = P + S,
            D = {
                id: y++,
                callback: G,
                priorityLevel: D,
                startTime: P,
                expirationTime: S,
                sortIndex: -1
            },
            P > be ? (D.sortIndex = P,
            i(v, D),
            u(p) === null && D === u(v) && (C ? (ue(J),
            J = -1) : C = !0,
            Ze(Q, P - be))) : (D.sortIndex = S,
            i(p, D),
            N || U || (N = !0,
            q || (q = !0,
            Qe()))),
            D
        }
        ,
        a.unstable_shouldYield = ve,
        a.unstable_wrapCallback = function(D) {
            var G = M;
            return function() {
                var P = M;
                M = G;
                try {
                    return D.apply(this, arguments)
                } finally {
                    M = P
                }
            }
        }
    }(Nc)),
    Nc
}
var C1;
function Ly() {
    return C1 || (C1 = 1,
    wc.exports = Uy()),
    wc.exports
}
var Mc = {
    exports: {}
}
  , rt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var j1;
function By() {
    if (j1)
        return rt;
    j1 = 1;
    var a = Qu();
    function i(p) {
        var v = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            v += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var y = 2; y < arguments.length; y++)
                v += "&args[]=" + encodeURIComponent(arguments[y])
        }
        return "Minified React error #" + p + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function u() {}
    var r = {
        d: {
            f: u,
            r: function() {
                throw Error(i(522))
            },
            D: u,
            C: u,
            L: u,
            m: u,
            X: u,
            S: u,
            M: u
        },
        p: 0,
        findDOMNode: null
    }
      , o = Symbol.for("react.portal");
    function f(p, v, y) {
        var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: o,
            key: _ == null ? null : "" + _,
            children: p,
            containerInfo: v,
            implementation: y
        }
    }
    var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function g(p, v) {
        if (p === "font")
            return "";
        if (typeof v == "string")
            return v === "use-credentials" ? v : ""
    }
    return rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r,
    rt.createPortal = function(p, v) {
        var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
            throw Error(i(299));
        return f(p, v, null, y)
    }
    ,
    rt.flushSync = function(p) {
        var v = d.T
          , y = r.p;
        try {
            if (d.T = null,
            r.p = 2,
            p)
                return p()
        } finally {
            d.T = v,
            r.p = y,
            r.d.f()
        }
    }
    ,
    rt.preconnect = function(p, v) {
        typeof p == "string" && (v ? (v = v.crossOrigin,
        v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null,
        r.d.C(p, v))
    }
    ,
    rt.prefetchDNS = function(p) {
        typeof p == "string" && r.d.D(p)
    }
    ,
    rt.preinit = function(p, v) {
        if (typeof p == "string" && v && typeof v.as == "string") {
            var y = v.as
              , _ = g(y, v.crossOrigin)
              , M = typeof v.integrity == "string" ? v.integrity : void 0
              , U = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
            y === "style" ? r.d.S(p, typeof v.precedence == "string" ? v.precedence : void 0, {
                crossOrigin: _,
                integrity: M,
                fetchPriority: U
            }) : y === "script" && r.d.X(p, {
                crossOrigin: _,
                integrity: M,
                fetchPriority: U,
                nonce: typeof v.nonce == "string" ? v.nonce : void 0
            })
        }
    }
    ,
    rt.preinitModule = function(p, v) {
        if (typeof p == "string")
            if (typeof v == "object" && v !== null) {
                if (v.as == null || v.as === "script") {
                    var y = g(v.as, v.crossOrigin);
                    r.d.M(p, {
                        crossOrigin: y,
                        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                        nonce: typeof v.nonce == "string" ? v.nonce : void 0
                    })
                }
            } else
                v == null && r.d.M(p)
    }
    ,
    rt.preload = function(p, v) {
        if (typeof p == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
            var y = v.as
              , _ = g(y, v.crossOrigin);
            r.d.L(p, y, {
                crossOrigin: _,
                integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                nonce: typeof v.nonce == "string" ? v.nonce : void 0,
                type: typeof v.type == "string" ? v.type : void 0,
                fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
                referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
                imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
                imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
                media: typeof v.media == "string" ? v.media : void 0
            })
        }
    }
    ,
    rt.preloadModule = function(p, v) {
        if (typeof p == "string")
            if (v) {
                var y = g(v.as, v.crossOrigin);
                r.d.m(p, {
                    as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
                    crossOrigin: y,
                    integrity: typeof v.integrity == "string" ? v.integrity : void 0
                })
            } else
                r.d.m(p)
    }
    ,
    rt.requestFormReset = function(p) {
        r.d.r(p)
    }
    ,
    rt.unstable_batchedUpdates = function(p, v) {
        return p(v)
    }
    ,
    rt.useFormState = function(p, v, y) {
        return d.H.useFormState(p, v, y)
    }
    ,
    rt.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }
    ,
    rt.version = "19.1.0",
    rt
}
var z1;
function Vg() {
    if (z1)
        return Mc.exports;
    z1 = 1;
    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
            } catch (i) {
                console.error(i)
            }
    }
    return a(),
    Mc.exports = By(),
    Mc.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U1;
function Hy() {
    if (U1)
        return Bl;
    U1 = 1;
    var a = Ly()
      , i = Qu()
      , u = Vg();
    function r(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                t += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function o(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function f(e) {
        var t = e
          , n = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (n = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? n : null
    }
    function d(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function g(e) {
        if (f(e) !== e)
            throw Error(r(188))
    }
    function p(e) {
        var t = e.alternate;
        if (!t) {
            if (t = f(e),
            t === null)
                throw Error(r(188));
            return t !== e ? null : e
        }
        for (var n = e, l = t; ; ) {
            var s = n.return;
            if (s === null)
                break;
            var c = s.alternate;
            if (c === null) {
                if (l = s.return,
                l !== null) {
                    n = l;
                    continue
                }
                break
            }
            if (s.child === c.child) {
                for (c = s.child; c; ) {
                    if (c === n)
                        return g(s),
                        e;
                    if (c === l)
                        return g(s),
                        t;
                    c = c.sibling
                }
                throw Error(r(188))
            }
            if (n.return !== l.return)
                n = s,
                l = c;
            else {
                for (var h = !1, m = s.child; m; ) {
                    if (m === n) {
                        h = !0,
                        n = s,
                        l = c;
                        break
                    }
                    if (m === l) {
                        h = !0,
                        l = s,
                        n = c;
                        break
                    }
                    m = m.sibling
                }
                if (!h) {
                    for (m = c.child; m; ) {
                        if (m === n) {
                            h = !0,
                            n = c,
                            l = s;
                            break
                        }
                        if (m === l) {
                            h = !0,
                            l = c,
                            n = s;
                            break
                        }
                        m = m.sibling
                    }
                    if (!h)
                        throw Error(r(189))
                }
            }
            if (n.alternate !== l)
                throw Error(r(190))
        }
        if (n.tag !== 3)
            throw Error(r(188));
        return n.stateNode.current === n ? e : t
    }
    function v(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = v(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var y = Object.assign
      , _ = Symbol.for("react.element")
      , M = Symbol.for("react.transitional.element")
      , U = Symbol.for("react.portal")
      , N = Symbol.for("react.fragment")
      , C = Symbol.for("react.strict_mode")
      , Z = Symbol.for("react.profiler")
      , re = Symbol.for("react.provider")
      , ue = Symbol.for("react.consumer")
      , te = Symbol.for("react.context")
      , ie = Symbol.for("react.forward_ref")
      , Q = Symbol.for("react.suspense")
      , q = Symbol.for("react.suspense_list")
      , J = Symbol.for("react.memo")
      , F = Symbol.for("react.lazy")
      , se = Symbol.for("react.activity")
      , ve = Symbol.for("react.memo_cache_sentinel")
      , Ve = Symbol.iterator;
    function Qe(e) {
        return e === null || typeof e != "object" ? null : (e = Ve && e[Ve] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var Je = Symbol.for("react.client.reference");
    function Xe(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === Je ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case N:
            return "Fragment";
        case Z:
            return "Profiler";
        case C:
            return "StrictMode";
        case Q:
            return "Suspense";
        case q:
            return "SuspenseList";
        case se:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case U:
                return "Portal";
            case te:
                return (e.displayName || "Context") + ".Provider";
            case ue:
                return (e._context.displayName || "Context") + ".Consumer";
            case ie:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case J:
                return t = e.displayName || null,
                t !== null ? t : Xe(e.type) || "Memo";
            case F:
                t = e._payload,
                e = e._init;
                try {
                    return Xe(e(t))
                } catch {}
            }
        return null
    }
    var Ze = Array.isArray
      , D = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , G = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , P = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , be = []
      , S = -1;
    function L(e) {
        return {
            current: e
        }
    }
    function X(e) {
        0 > S || (e.current = be[S],
        be[S] = null,
        S--)
    }
    function Y(e, t) {
        S++,
        be[S] = e.current,
        e.current = t
    }
    var W = L(null)
      , pe = L(null)
      , oe = L(null)
      , vt = L(null);
    function je(e, t) {
        switch (Y(oe, t),
        Y(pe, e),
        Y(W, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? t1(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = t1(t),
                e = n1(t, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        X(W),
        Y(W, e)
    }
    function Bn() {
        X(W),
        X(pe),
        X(oe)
    }
    function os(e) {
        e.memoizedState !== null && Y(vt, e);
        var t = W.current
          , n = n1(t, e.type);
        t !== n && (Y(pe, e),
        Y(W, n))
    }
    function cr(e) {
        pe.current === e && (X(W),
        X(pe)),
        vt.current === e && (X(vt),
        Dl._currentValue = P)
    }
    var cs = Object.prototype.hasOwnProperty
      , fs = a.unstable_scheduleCallback
      , ds = a.unstable_cancelCallback
      , sp = a.unstable_shouldYield
      , op = a.unstable_requestPaint
      , en = a.unstable_now
      , cp = a.unstable_getCurrentPriorityLevel
      , Uf = a.unstable_ImmediatePriority
      , Lf = a.unstable_UserBlockingPriority
      , fr = a.unstable_NormalPriority
      , fp = a.unstable_LowPriority
      , Bf = a.unstable_IdlePriority
      , dp = a.log
      , hp = a.unstable_setDisableYieldValue
      , Vi = null
      , pt = null;
    function Hn(e) {
        if (typeof dp == "function" && hp(e),
        pt && typeof pt.setStrictMode == "function")
            try {
                pt.setStrictMode(Vi, e)
            } catch {}
    }
    var mt = Math.clz32 ? Math.clz32 : pp
      , gp = Math.log
      , vp = Math.LN2;
    function pp(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (gp(e) / vp | 0) | 0
    }
    var dr = 256
      , hr = 4194304;
    function da(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function gr(e, t, n) {
        var l = e.pendingLanes;
        if (l === 0)
            return 0;
        var s = 0
          , c = e.suspendedLanes
          , h = e.pingedLanes;
        e = e.warmLanes;
        var m = l & 134217727;
        return m !== 0 ? (l = m & ~c,
        l !== 0 ? s = da(l) : (h &= m,
        h !== 0 ? s = da(h) : n || (n = m & ~e,
        n !== 0 && (s = da(n))))) : (m = l & ~c,
        m !== 0 ? s = da(m) : h !== 0 ? s = da(h) : n || (n = l & ~e,
        n !== 0 && (s = da(n)))),
        s === 0 ? 0 : t !== 0 && t !== s && (t & c) === 0 && (c = s & -s,
        n = t & -t,
        c >= n || c === 32 && (n & 4194048) !== 0) ? t : s
    }
    function qi(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function mp(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Hf() {
        var e = dr;
        return dr <<= 1,
        (dr & 4194048) === 0 && (dr = 256),
        e
    }
    function Vf() {
        var e = hr;
        return hr <<= 1,
        (hr & 62914560) === 0 && (hr = 4194304),
        e
    }
    function hs(e) {
        for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
        return t
    }
    function Gi(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function yp(e, t, n, l, s, c) {
        var h = e.pendingLanes;
        e.pendingLanes = n,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= n,
        e.entangledLanes &= n,
        e.errorRecoveryDisabledLanes &= n,
        e.shellSuspendCounter = 0;
        var m = e.entanglements
          , b = e.expirationTimes
          , R = e.hiddenUpdates;
        for (n = h & ~n; 0 < n; ) {
            var j = 31 - mt(n)
              , V = 1 << j;
            m[j] = 0,
            b[j] = -1;
            var x = R[j];
            if (x !== null)
                for (R[j] = null,
                j = 0; j < x.length; j++) {
                    var w = x[j];
                    w !== null && (w.lane &= -536870913)
                }
            n &= ~V
        }
        l !== 0 && qf(e, l, 0),
        c !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(h & ~t))
    }
    function qf(e, t, n) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var l = 31 - mt(t);
        e.entangledLanes |= t,
        e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 4194090
    }
    function Gf(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n; ) {
            var l = 31 - mt(n)
              , s = 1 << l;
            s & t | e[l] & t && (e[l] |= t),
            n &= ~s
        }
    }
    function gs(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function vs(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Yf() {
        var e = G.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : S1(e.type))
    }
    function _p(e, t) {
        var n = G.p;
        try {
            return G.p = e,
            t()
        } finally {
            G.p = n
        }
    }
    var Vn = Math.random().toString(36).slice(2)
      , it = "__reactFiber$" + Vn
      , ct = "__reactProps$" + Vn
      , Ga = "__reactContainer$" + Vn
      , ps = "__reactEvents$" + Vn
      , bp = "__reactListeners$" + Vn
      , Sp = "__reactHandles$" + Vn
      , Kf = "__reactResources$" + Vn
      , Yi = "__reactMarker$" + Vn;
    function ms(e) {
        delete e[it],
        delete e[ct],
        delete e[ps],
        delete e[bp],
        delete e[Sp]
    }
    function Ya(e) {
        var t = e[it];
        if (t)
            return t;
        for (var n = e.parentNode; n; ) {
            if (t = n[Ga] || n[it]) {
                if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                    for (e = r1(e); e !== null; ) {
                        if (n = e[it])
                            return n;
                        e = r1(e)
                    }
                return t
            }
            e = n,
            n = e.parentNode
        }
        return null
    }
    function Ka(e) {
        if (e = e[it] || e[Ga]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function Ki(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(r(33))
    }
    function Xa(e) {
        var t = e[Kf];
        return t || (t = e[Kf] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function Fe(e) {
        e[Yi] = !0
    }
    var Xf = new Set
      , Zf = {};
    function ha(e, t) {
        Za(e, t),
        Za(e + "Capture", t)
    }
    function Za(e, t) {
        for (Zf[e] = t,
        e = 0; e < t.length; e++)
            Xf.add(t[e])
    }
    var Op = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , $f = {}
      , kf = {};
    function Ep(e) {
        return cs.call(kf, e) ? !0 : cs.call($f, e) ? !1 : Op.test(e) ? kf[e] = !0 : ($f[e] = !0,
        !1)
    }
    function vr(e, t, n) {
        if (Ep(t))
            if (n === null)
                e.removeAttribute(t);
            else {
                switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var l = t.toLowerCase().slice(0, 5);
                    if (l !== "data-" && l !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + n)
            }
    }
    function pr(e, t, n) {
        if (n === null)
            e.removeAttribute(t);
        else {
            switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, "" + n)
        }
    }
    function pn(e, t, n, l) {
        if (l === null)
            e.removeAttribute(n);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(n);
                return
            }
            e.setAttributeNS(t, n, "" + l)
        }
    }
    var ys, Qf;
    function $a(e) {
        if (ys === void 0)
            try {
                throw Error()
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                ys = t && t[1] || "",
                Qf = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + ys + e + Qf
    }
    var _s = !1;
    function bs(e, t) {
        if (!e || _s)
            return "";
        _s = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var V = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(V.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(V, [])
                                } catch (w) {
                                    var x = w
                                }
                                Reflect.construct(e, [], V)
                            } else {
                                try {
                                    V.call()
                                } catch (w) {
                                    x = w
                                }
                                e.call(V.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (w) {
                                x = w
                            }
                            (V = e()) && typeof V.catch == "function" && V.catch(function() {})
                        }
                    } catch (w) {
                        if (w && x && typeof w.stack == "string")
                            return [w.stack, x.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var s = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            s && s.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var c = l.DetermineComponentFrameRoot()
              , h = c[0]
              , m = c[1];
            if (h && m) {
                var b = h.split(`
`)
                  , R = m.split(`
`);
                for (s = l = 0; l < b.length && !b[l].includes("DetermineComponentFrameRoot"); )
                    l++;
                for (; s < R.length && !R[s].includes("DetermineComponentFrameRoot"); )
                    s++;
                if (l === b.length || s === R.length)
                    for (l = b.length - 1,
                    s = R.length - 1; 1 <= l && 0 <= s && b[l] !== R[s]; )
                        s--;
                for (; 1 <= l && 0 <= s; l--,
                s--)
                    if (b[l] !== R[s]) {
                        if (l !== 1 || s !== 1)
                            do
                                if (l--,
                                s--,
                                0 > s || b[l] !== R[s]) {
                                    var j = `
` + b[l].replace(" at new ", " at ");
                                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)),
                                    j
                                }
                            while (1 <= l && 0 <= s);
                        break
                    }
            }
        } finally {
            _s = !1,
            Error.prepareStackTrace = n
        }
        return (n = e ? e.displayName || e.name : "") ? $a(n) : ""
    }
    function Ap(e) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return $a(e.type);
        case 16:
            return $a("Lazy");
        case 13:
            return $a("Suspense");
        case 19:
            return $a("SuspenseList");
        case 0:
        case 15:
            return bs(e.type, !1);
        case 11:
            return bs(e.type.render, !1);
        case 1:
            return bs(e.type, !0);
        case 31:
            return $a("Activity");
        default:
            return ""
        }
    }
    function Jf(e) {
        try {
            var t = "";
            do
                t += Ap(e),
                e = e.return;
            while (e);
            return t
        } catch (n) {
            return `
Error generating stack: ` + n.message + `
` + n.stack
        }
    }
    function wt(e) {
        switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function Ff(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Tp(e) {
        var t = Ff(e) ? "checked" : "value"
          , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , l = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var s = n.get
              , c = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return s.call(this)
                },
                set: function(h) {
                    l = "" + h,
                    c.call(this, h)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }),
            {
                getValue: function() {
                    return l
                },
                setValue: function(h) {
                    l = "" + h
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function mr(e) {
        e._valueTracker || (e._valueTracker = Tp(e))
    }
    function Pf(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var n = t.getValue()
          , l = "";
        return e && (l = Ff(e) ? e.checked ? "true" : "false" : e.value),
        e = l,
        e !== n ? (t.setValue(e),
        !0) : !1
    }
    function yr(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var Rp = /[\n"\\]/g;
    function Nt(e) {
        return e.replace(Rp, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function Ss(e, t, n, l, s, c, h, m) {
        e.name = "",
        h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.type = h : e.removeAttribute("type"),
        t != null ? h === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + wt(t)) : e.value !== "" + wt(t) && (e.value = "" + wt(t)) : h !== "submit" && h !== "reset" || e.removeAttribute("value"),
        t != null ? Os(e, h, wt(t)) : n != null ? Os(e, h, wt(n)) : l != null && e.removeAttribute("value"),
        s == null && c != null && (e.defaultChecked = !!c),
        s != null && (e.checked = s && typeof s != "function" && typeof s != "symbol"),
        m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + wt(m) : e.removeAttribute("name")
    }
    function Wf(e, t, n, l, s, c, h, m) {
        if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c),
        t != null || n != null) {
            if (!(c !== "submit" && c !== "reset" || t != null))
                return;
            n = n != null ? "" + wt(n) : "",
            t = t != null ? "" + wt(t) : n,
            m || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        l = l ?? s,
        l = typeof l != "function" && typeof l != "symbol" && !!l,
        e.checked = m ? e.checked : !!l,
        e.defaultChecked = !!l,
        h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (e.name = h)
    }
    function Os(e, t, n) {
        t === "number" && yr(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
    }
    function ka(e, t, n, l) {
        if (e = e.options,
        t) {
            t = {};
            for (var s = 0; s < n.length; s++)
                t["$" + n[s]] = !0;
            for (n = 0; n < e.length; n++)
                s = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== s && (e[n].selected = s),
                s && l && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + wt(n),
            t = null,
            s = 0; s < e.length; s++) {
                if (e[s].value === n) {
                    e[s].selected = !0,
                    l && (e[s].defaultSelected = !0);
                    return
                }
                t !== null || e[s].disabled || (t = e[s])
            }
            t !== null && (t.selected = !0)
        }
    }
    function If(e, t, n) {
        if (t != null && (t = "" + wt(t),
        t !== e.value && (e.value = t),
        n == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = n != null ? "" + wt(n) : ""
    }
    function ed(e, t, n, l) {
        if (t == null) {
            if (l != null) {
                if (n != null)
                    throw Error(r(92));
                if (Ze(l)) {
                    if (1 < l.length)
                        throw Error(r(93));
                    l = l[0]
                }
                n = l
            }
            n == null && (n = ""),
            t = n
        }
        n = wt(t),
        e.defaultValue = n,
        l = e.textContent,
        l === n && l !== "" && l !== null && (e.value = l)
    }
    function Qa(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var xp = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function td(e, t, n) {
        var l = t.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || xp.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
    }
    function nd(e, t, n) {
        if (t != null && typeof t != "object")
            throw Error(r(62));
        if (e = e.style,
        n != null) {
            for (var l in n)
                !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
            for (var s in t)
                l = t[s],
                t.hasOwnProperty(s) && n[s] !== l && td(e, s, l)
        } else
            for (var c in t)
                t.hasOwnProperty(c) && td(e, c, t[c])
    }
    function Es(e) {
        if (e.indexOf("-") === -1)
            return !1;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var wp = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , Np = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function _r(e) {
        return Np.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var As = null;
    function Ts(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var Ja = null
      , Fa = null;
    function ad(e) {
        var t = Ka(e);
        if (t && (e = t.stateNode)) {
            var n = e[ct] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (Ss(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                t = n.name,
                n.type === "radio" && t != null) {
                    for (n = e; n.parentNode; )
                        n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + Nt("" + t) + '"][type="radio"]'),
                    t = 0; t < n.length; t++) {
                        var l = n[t];
                        if (l !== e && l.form === e.form) {
                            var s = l[ct] || null;
                            if (!s)
                                throw Error(r(90));
                            Ss(l, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name)
                        }
                    }
                    for (t = 0; t < n.length; t++)
                        l = n[t],
                        l.form === e.form && Pf(l)
                }
                break e;
            case "textarea":
                If(e, n.value, n.defaultValue);
                break e;
            case "select":
                t = n.value,
                t != null && ka(e, !!n.multiple, t, !1)
            }
        }
    }
    var Rs = !1;
    function id(e, t, n) {
        if (Rs)
            return e(t, n);
        Rs = !0;
        try {
            var l = e(t);
            return l
        } finally {
            if (Rs = !1,
            (Ja !== null || Fa !== null) && (iu(),
            Ja && (t = Ja,
            e = Fa,
            Fa = Ja = null,
            ad(t),
            e)))
                for (t = 0; t < e.length; t++)
                    ad(e[t])
        }
    }
    function Xi(e, t) {
        var n = e.stateNode;
        if (n === null)
            return null;
        var l = n[ct] || null;
        if (l === null)
            return null;
        n = l[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (l = !l.disabled) || (e = e.type,
            l = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !l;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (n && typeof n != "function")
            throw Error(r(231, t, typeof n));
        return n
    }
    var mn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , xs = !1;
    if (mn)
        try {
            var Zi = {};
            Object.defineProperty(Zi, "passive", {
                get: function() {
                    xs = !0
                }
            }),
            window.addEventListener("test", Zi, Zi),
            window.removeEventListener("test", Zi, Zi)
        } catch {
            xs = !1
        }
    var qn = null
      , ws = null
      , br = null;
    function ld() {
        if (br)
            return br;
        var e, t = ws, n = t.length, l, s = "value"in qn ? qn.value : qn.textContent, c = s.length;
        for (e = 0; e < n && t[e] === s[e]; e++)
            ;
        var h = n - e;
        for (l = 1; l <= h && t[n - l] === s[c - l]; l++)
            ;
        return br = s.slice(e, 1 < l ? 1 - l : void 0)
    }
    function Sr(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function Or() {
        return !0
    }
    function rd() {
        return !1
    }
    function ft(e) {
        function t(n, l, s, c, h) {
            this._reactName = n,
            this._targetInst = s,
            this.type = l,
            this.nativeEvent = c,
            this.target = h,
            this.currentTarget = null;
            for (var m in e)
                e.hasOwnProperty(m) && (n = e[m],
                this[m] = n ? n(c) : c[m]);
            return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Or : rd,
            this.isPropagationStopped = rd,
            this
        }
        return y(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = Or)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = Or)
            },
            persist: function() {},
            isPersistent: Or
        }),
        t
    }
    var ga = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Er = ft(ga), $i = y({}, ga, {
        view: 0,
        detail: 0
    }), Mp = ft($i), Ns, Ms, ki, Ar = y({}, $i, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Cs,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== ki && (ki && e.type === "mousemove" ? (Ns = e.screenX - ki.screenX,
            Ms = e.screenY - ki.screenY) : Ms = Ns = 0,
            ki = e),
            Ns)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : Ms
        }
    }), ud = ft(Ar), Dp = y({}, Ar, {
        dataTransfer: 0
    }), Cp = ft(Dp), jp = y({}, $i, {
        relatedTarget: 0
    }), Ds = ft(jp), zp = y({}, ga, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Up = ft(zp), Lp = y({}, ga, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), Bp = ft(Lp), Hp = y({}, ga, {
        data: 0
    }), sd = ft(Hp), Vp = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, qp = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Gp = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Yp(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Gp[e]) ? !!t[e] : !1
    }
    function Cs() {
        return Yp
    }
    var Kp = y({}, $i, {
        key: function(e) {
            if (e.key) {
                var t = Vp[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Sr(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? qp[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Cs,
        charCode: function(e) {
            return e.type === "keypress" ? Sr(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Sr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , Xp = ft(Kp)
      , Zp = y({}, Ar, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , od = ft(Zp)
      , $p = y({}, $i, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Cs
    })
      , kp = ft($p)
      , Qp = y({}, ga, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Jp = ft(Qp)
      , Fp = y({}, Ar, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Pp = ft(Fp)
      , Wp = y({}, ga, {
        newState: 0,
        oldState: 0
    })
      , Ip = ft(Wp)
      , em = [9, 13, 27, 32]
      , js = mn && "CompositionEvent"in window
      , Qi = null;
    mn && "documentMode"in document && (Qi = document.documentMode);
    var tm = mn && "TextEvent"in window && !Qi
      , cd = mn && (!js || Qi && 8 < Qi && 11 >= Qi)
      , fd = " "
      , dd = !1;
    function hd(e, t) {
        switch (e) {
        case "keyup":
            return em.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function gd(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var Pa = !1;
    function nm(e, t) {
        switch (e) {
        case "compositionend":
            return gd(t);
        case "keypress":
            return t.which !== 32 ? null : (dd = !0,
            fd);
        case "textInput":
            return e = t.data,
            e === fd && dd ? null : e;
        default:
            return null
        }
    }
    function am(e, t) {
        if (Pa)
            return e === "compositionend" || !js && hd(e, t) ? (e = ld(),
            br = ws = qn = null,
            Pa = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return cd && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var im = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function vd(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!im[e.type] : t === "textarea"
    }
    function pd(e, t, n, l) {
        Ja ? Fa ? Fa.push(l) : Fa = [l] : Ja = l,
        t = cu(t, "onChange"),
        0 < t.length && (n = new Er("onChange","change",null,n,l),
        e.push({
            event: n,
            listeners: t
        }))
    }
    var Ji = null
      , Fi = null;
    function lm(e) {
        F0(e, 0)
    }
    function Tr(e) {
        var t = Ki(e);
        if (Pf(t))
            return e
    }
    function md(e, t) {
        if (e === "change")
            return t
    }
    var yd = !1;
    if (mn) {
        var zs;
        if (mn) {
            var Us = "oninput"in document;
            if (!Us) {
                var _d = document.createElement("div");
                _d.setAttribute("oninput", "return;"),
                Us = typeof _d.oninput == "function"
            }
            zs = Us
        } else
            zs = !1;
        yd = zs && (!document.documentMode || 9 < document.documentMode)
    }
    function bd() {
        Ji && (Ji.detachEvent("onpropertychange", Sd),
        Fi = Ji = null)
    }
    function Sd(e) {
        if (e.propertyName === "value" && Tr(Fi)) {
            var t = [];
            pd(t, Fi, e, Ts(e)),
            id(lm, t)
        }
    }
    function rm(e, t, n) {
        e === "focusin" ? (bd(),
        Ji = t,
        Fi = n,
        Ji.attachEvent("onpropertychange", Sd)) : e === "focusout" && bd()
    }
    function um(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Tr(Fi)
    }
    function sm(e, t) {
        if (e === "click")
            return Tr(t)
    }
    function om(e, t) {
        if (e === "input" || e === "change")
            return Tr(t)
    }
    function cm(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var yt = typeof Object.is == "function" ? Object.is : cm;
    function Pi(e, t) {
        if (yt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var n = Object.keys(e)
          , l = Object.keys(t);
        if (n.length !== l.length)
            return !1;
        for (l = 0; l < n.length; l++) {
            var s = n[l];
            if (!cs.call(t, s) || !yt(e[s], t[s]))
                return !1
        }
        return !0
    }
    function Od(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function Ed(e, t) {
        var n = Od(e);
        e = 0;
        for (var l; n; ) {
            if (n.nodeType === 3) {
                if (l = e + n.textContent.length,
                e <= t && l >= t)
                    return {
                        node: n,
                        offset: t - e
                    };
                e = l
            }
            e: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = Od(n)
        }
    }
    function Ad(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ad(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function Td(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = yr(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                e = t.contentWindow;
            else
                break;
            t = yr(e.document)
        }
        return t
    }
    function Ls(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var fm = mn && "documentMode"in document && 11 >= document.documentMode
      , Wa = null
      , Bs = null
      , Wi = null
      , Hs = !1;
    function Rd(e, t, n) {
        var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Hs || Wa == null || Wa !== yr(l) || (l = Wa,
        "selectionStart"in l && Ls(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        Wi && Pi(Wi, l) || (Wi = l,
        l = cu(Bs, "onSelect"),
        0 < l.length && (t = new Er("onSelect","select",null,t,n),
        e.push({
            event: t,
            listeners: l
        }),
        t.target = Wa)))
    }
    function va(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
    }
    var Ia = {
        animationend: va("Animation", "AnimationEnd"),
        animationiteration: va("Animation", "AnimationIteration"),
        animationstart: va("Animation", "AnimationStart"),
        transitionrun: va("Transition", "TransitionRun"),
        transitionstart: va("Transition", "TransitionStart"),
        transitioncancel: va("Transition", "TransitionCancel"),
        transitionend: va("Transition", "TransitionEnd")
    }
      , Vs = {}
      , xd = {};
    mn && (xd = document.createElement("div").style,
    "AnimationEvent"in window || (delete Ia.animationend.animation,
    delete Ia.animationiteration.animation,
    delete Ia.animationstart.animation),
    "TransitionEvent"in window || delete Ia.transitionend.transition);
    function pa(e) {
        if (Vs[e])
            return Vs[e];
        if (!Ia[e])
            return e;
        var t = Ia[e], n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in xd)
                return Vs[e] = t[n];
        return e
    }
    var wd = pa("animationend")
      , Nd = pa("animationiteration")
      , Md = pa("animationstart")
      , dm = pa("transitionrun")
      , hm = pa("transitionstart")
      , gm = pa("transitioncancel")
      , Dd = pa("transitionend")
      , Cd = new Map
      , qs = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    qs.push("scrollEnd");
    function Xt(e, t) {
        Cd.set(e, t),
        ha(t, [e])
    }
    var jd = new WeakMap;
    function Mt(e, t) {
        if (typeof e == "object" && e !== null) {
            var n = jd.get(e);
            return n !== void 0 ? n : (t = {
                value: e,
                source: t,
                stack: Jf(t)
            },
            jd.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: Jf(t)
        }
    }
    var Dt = []
      , ei = 0
      , Gs = 0;
    function Rr() {
        for (var e = ei, t = Gs = ei = 0; t < e; ) {
            var n = Dt[t];
            Dt[t++] = null;
            var l = Dt[t];
            Dt[t++] = null;
            var s = Dt[t];
            Dt[t++] = null;
            var c = Dt[t];
            if (Dt[t++] = null,
            l !== null && s !== null) {
                var h = l.pending;
                h === null ? s.next = s : (s.next = h.next,
                h.next = s),
                l.pending = s
            }
            c !== 0 && zd(n, s, c)
        }
    }
    function xr(e, t, n, l) {
        Dt[ei++] = e,
        Dt[ei++] = t,
        Dt[ei++] = n,
        Dt[ei++] = l,
        Gs |= l,
        e.lanes |= l,
        e = e.alternate,
        e !== null && (e.lanes |= l)
    }
    function Ys(e, t, n, l) {
        return xr(e, t, n, l),
        wr(e)
    }
    function ti(e, t) {
        return xr(e, null, null, t),
        wr(e)
    }
    function zd(e, t, n) {
        e.lanes |= n;
        var l = e.alternate;
        l !== null && (l.lanes |= n);
        for (var s = !1, c = e.return; c !== null; )
            c.childLanes |= n,
            l = c.alternate,
            l !== null && (l.childLanes |= n),
            c.tag === 22 && (e = c.stateNode,
            e === null || e._visibility & 1 || (s = !0)),
            e = c,
            c = c.return;
        return e.tag === 3 ? (c = e.stateNode,
        s && t !== null && (s = 31 - mt(n),
        e = c.hiddenUpdates,
        l = e[s],
        l === null ? e[s] = [t] : l.push(t),
        t.lane = n | 536870912),
        c) : null
    }
    function wr(e) {
        if (50 < El)
            throw El = 0,
            Jo = null,
            Error(r(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var ni = {};
    function vm(e, t, n, l) {
        this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function _t(e, t, n, l) {
        return new vm(e,t,n,l)
    }
    function Ks(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function yn(e, t) {
        var n = e.alternate;
        return n === null ? (n = _t(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
        n.type = e.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = e.flags & 65011712,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n.refCleanup = e.refCleanup,
        n
    }
    function Ud(e, t) {
        e.flags &= 65011714;
        var n = e.alternate;
        return n === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = n.childLanes,
        e.lanes = n.lanes,
        e.child = n.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = n.memoizedProps,
        e.memoizedState = n.memoizedState,
        e.updateQueue = n.updateQueue,
        e.type = n.type,
        t = n.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function Nr(e, t, n, l, s, c) {
        var h = 0;
        if (l = e,
        typeof e == "function")
            Ks(e) && (h = 1);
        else if (typeof e == "string")
            h = my(e, n, W.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case se:
                return e = _t(31, n, t, s),
                e.elementType = se,
                e.lanes = c,
                e;
            case N:
                return ma(n.children, s, c, t);
            case C:
                h = 8,
                s |= 24;
                break;
            case Z:
                return e = _t(12, n, t, s | 2),
                e.elementType = Z,
                e.lanes = c,
                e;
            case Q:
                return e = _t(13, n, t, s),
                e.elementType = Q,
                e.lanes = c,
                e;
            case q:
                return e = _t(19, n, t, s),
                e.elementType = q,
                e.lanes = c,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case re:
                    case te:
                        h = 10;
                        break e;
                    case ue:
                        h = 9;
                        break e;
                    case ie:
                        h = 11;
                        break e;
                    case J:
                        h = 14;
                        break e;
                    case F:
                        h = 16,
                        l = null;
                        break e
                    }
                h = 29,
                n = Error(r(130, e === null ? "null" : typeof e, "")),
                l = null
            }
        return t = _t(h, n, t, s),
        t.elementType = e,
        t.type = l,
        t.lanes = c,
        t
    }
    function ma(e, t, n, l) {
        return e = _t(7, e, l, t),
        e.lanes = n,
        e
    }
    function Xs(e, t, n) {
        return e = _t(6, e, null, t),
        e.lanes = n,
        e
    }
    function Zs(e, t, n) {
        return t = _t(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var ai = []
      , ii = 0
      , Mr = null
      , Dr = 0
      , Ct = []
      , jt = 0
      , ya = null
      , _n = 1
      , bn = "";
    function _a(e, t) {
        ai[ii++] = Dr,
        ai[ii++] = Mr,
        Mr = e,
        Dr = t
    }
    function Ld(e, t, n) {
        Ct[jt++] = _n,
        Ct[jt++] = bn,
        Ct[jt++] = ya,
        ya = e;
        var l = _n;
        e = bn;
        var s = 32 - mt(l) - 1;
        l &= ~(1 << s),
        n += 1;
        var c = 32 - mt(t) + s;
        if (30 < c) {
            var h = s - s % 5;
            c = (l & (1 << h) - 1).toString(32),
            l >>= h,
            s -= h,
            _n = 1 << 32 - mt(t) + s | n << s | l,
            bn = c + e
        } else
            _n = 1 << c | n << s | l,
            bn = e
    }
    function $s(e) {
        e.return !== null && (_a(e, 1),
        Ld(e, 1, 0))
    }
    function ks(e) {
        for (; e === Mr; )
            Mr = ai[--ii],
            ai[ii] = null,
            Dr = ai[--ii],
            ai[ii] = null;
        for (; e === ya; )
            ya = Ct[--jt],
            Ct[jt] = null,
            bn = Ct[--jt],
            Ct[jt] = null,
            _n = Ct[--jt],
            Ct[jt] = null
    }
    var st = null
      , Le = null
      , Ee = !1
      , ba = null
      , tn = !1
      , Qs = Error(r(519));
    function Sa(e) {
        var t = Error(r(418, ""));
        throw tl(Mt(t, e)),
        Qs
    }
    function Bd(e) {
        var t = e.stateNode
          , n = e.type
          , l = e.memoizedProps;
        switch (t[it] = e,
        t[ct] = l,
        n) {
        case "dialog":
            ge("cancel", t),
            ge("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            ge("load", t);
            break;
        case "video":
        case "audio":
            for (n = 0; n < Tl.length; n++)
                ge(Tl[n], t);
            break;
        case "source":
            ge("error", t);
            break;
        case "img":
        case "image":
        case "link":
            ge("error", t),
            ge("load", t);
            break;
        case "details":
            ge("toggle", t);
            break;
        case "input":
            ge("invalid", t),
            Wf(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0),
            mr(t);
            break;
        case "select":
            ge("invalid", t);
            break;
        case "textarea":
            ge("invalid", t),
            ed(t, l.value, l.defaultValue, l.children),
            mr(t)
        }
        n = l.children,
        typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || e1(t.textContent, n) ? (l.popover != null && (ge("beforetoggle", t),
        ge("toggle", t)),
        l.onScroll != null && ge("scroll", t),
        l.onScrollEnd != null && ge("scrollend", t),
        l.onClick != null && (t.onclick = fu),
        t = !0) : t = !1,
        t || Sa(e)
    }
    function Hd(e) {
        for (st = e.return; st; )
            switch (st.tag) {
            case 5:
            case 13:
                tn = !1;
                return;
            case 27:
            case 3:
                tn = !0;
                return;
            default:
                st = st.return
            }
    }
    function Ii(e) {
        if (e !== st)
            return !1;
        if (!Ee)
            return Hd(e),
            Ee = !0,
            !1;
        var t = e.tag, n;
        if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type,
        n = !(n !== "form" && n !== "button") || fc(e.type, e.memoizedProps)),
        n = !n),
        n && Le && Sa(e),
        Hd(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(r(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8)
                        if (n = e.data,
                        n === "/$") {
                            if (t === 0) {
                                Le = $t(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            n !== "$" && n !== "$!" && n !== "$?" || t++;
                    e = e.nextSibling
                }
                Le = null
            }
        } else
            t === 27 ? (t = Le,
            na(e.type) ? (e = vc,
            vc = null,
            Le = e) : Le = t) : Le = st ? $t(e.stateNode.nextSibling) : null;
        return !0
    }
    function el() {
        Le = st = null,
        Ee = !1
    }
    function Vd() {
        var e = ba;
        return e !== null && (gt === null ? gt = e : gt.push.apply(gt, e),
        ba = null),
        e
    }
    function tl(e) {
        ba === null ? ba = [e] : ba.push(e)
    }
    var Js = L(null)
      , Oa = null
      , Sn = null;
    function Gn(e, t, n) {
        Y(Js, t._currentValue),
        t._currentValue = n
    }
    function On(e) {
        e._currentValue = Js.current,
        X(Js)
    }
    function Fs(e, t, n) {
        for (; e !== null; ) {
            var l = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
            e === n)
                break;
            e = e.return
        }
    }
    function Ps(e, t, n, l) {
        var s = e.child;
        for (s !== null && (s.return = e); s !== null; ) {
            var c = s.dependencies;
            if (c !== null) {
                var h = s.child;
                c = c.firstContext;
                e: for (; c !== null; ) {
                    var m = c;
                    c = s;
                    for (var b = 0; b < t.length; b++)
                        if (m.context === t[b]) {
                            c.lanes |= n,
                            m = c.alternate,
                            m !== null && (m.lanes |= n),
                            Fs(c.return, n, e),
                            l || (h = null);
                            break e
                        }
                    c = m.next
                }
            } else if (s.tag === 18) {
                if (h = s.return,
                h === null)
                    throw Error(r(341));
                h.lanes |= n,
                c = h.alternate,
                c !== null && (c.lanes |= n),
                Fs(h, n, e),
                h = null
            } else
                h = s.child;
            if (h !== null)
                h.return = s;
            else
                for (h = s; h !== null; ) {
                    if (h === e) {
                        h = null;
                        break
                    }
                    if (s = h.sibling,
                    s !== null) {
                        s.return = h.return,
                        h = s;
                        break
                    }
                    h = h.return
                }
            s = h
        }
    }
    function nl(e, t, n, l) {
        e = null;
        for (var s = t, c = !1; s !== null; ) {
            if (!c) {
                if ((s.flags & 524288) !== 0)
                    c = !0;
                else if ((s.flags & 262144) !== 0)
                    break
            }
            if (s.tag === 10) {
                var h = s.alternate;
                if (h === null)
                    throw Error(r(387));
                if (h = h.memoizedProps,
                h !== null) {
                    var m = s.type;
                    yt(s.pendingProps.value, h.value) || (e !== null ? e.push(m) : e = [m])
                }
            } else if (s === vt.current) {
                if (h = s.alternate,
                h === null)
                    throw Error(r(387));
                h.memoizedState.memoizedState !== s.memoizedState.memoizedState && (e !== null ? e.push(Dl) : e = [Dl])
            }
            s = s.return
        }
        e !== null && Ps(t, e, n, l),
        t.flags |= 262144
    }
    function Cr(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!yt(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function Ea(e) {
        Oa = e,
        Sn = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function lt(e) {
        return qd(Oa, e)
    }
    function jr(e, t) {
        return Oa === null && Ea(e),
        qd(e, t)
    }
    function qd(e, t) {
        var n = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: n,
            next: null
        },
        Sn === null) {
            if (e === null)
                throw Error(r(308));
            Sn = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            Sn = Sn.next = t;
        return n
    }
    var pm = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(n, l) {
                e.push(l)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(n) {
                return n()
            })
        }
    }
      , mm = a.unstable_scheduleCallback
      , ym = a.unstable_NormalPriority
      , $e = {
        $$typeof: te,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Ws() {
        return {
            controller: new pm,
            data: new Map,
            refCount: 0
        }
    }
    function al(e) {
        e.refCount--,
        e.refCount === 0 && mm(ym, function() {
            e.controller.abort()
        })
    }
    var il = null
      , Is = 0
      , li = 0
      , ri = null;
    function _m(e, t) {
        if (il === null) {
            var n = il = [];
            Is = 0,
            li = nc(),
            ri = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    n.push(l)
                }
            }
        }
        return Is++,
        t.then(Gd, Gd),
        t
    }
    function Gd() {
        if (--Is === 0 && il !== null) {
            ri !== null && (ri.status = "fulfilled");
            var e = il;
            il = null,
            li = 0,
            ri = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function bm(e, t) {
        var n = []
          , l = {
            status: "pending",
            value: null,
            reason: null,
            then: function(s) {
                n.push(s)
            }
        };
        return e.then(function() {
            l.status = "fulfilled",
            l.value = t;
            for (var s = 0; s < n.length; s++)
                (0,
                n[s])(t)
        }, function(s) {
            for (l.status = "rejected",
            l.reason = s,
            s = 0; s < n.length; s++)
                (0,
                n[s])(void 0)
        }),
        l
    }
    var Yd = D.S;
    D.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && _m(e, t),
        Yd !== null && Yd(e, t)
    }
    ;
    var Aa = L(null);
    function eo() {
        var e = Aa.current;
        return e !== null ? e : Me.pooledCache
    }
    function zr(e, t) {
        t === null ? Y(Aa, Aa.current) : Y(Aa, t.pool)
    }
    function Kd() {
        var e = eo();
        return e === null ? null : {
            parent: $e._currentValue,
            pool: e
        }
    }
    var ll = Error(r(460))
      , Xd = Error(r(474))
      , Ur = Error(r(542))
      , to = {
        then: function() {}
    };
    function Zd(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function Lr() {}
    function $d(e, t, n) {
        switch (n = e[n],
        n === void 0 ? e.push(t) : n !== t && (t.then(Lr, Lr),
        t = n),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            Qd(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then(Lr, Lr);
            else {
                if (e = Me,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(r(482));
                e = t,
                e.status = "pending",
                e.then(function(l) {
                    if (t.status === "pending") {
                        var s = t;
                        s.status = "fulfilled",
                        s.value = l
                    }
                }, function(l) {
                    if (t.status === "pending") {
                        var s = t;
                        s.status = "rejected",
                        s.reason = l
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                Qd(e),
                e
            }
            throw rl = t,
            ll
        }
    }
    var rl = null;
    function kd() {
        if (rl === null)
            throw Error(r(459));
        var e = rl;
        return rl = null,
        e
    }
    function Qd(e) {
        if (e === ll || e === Ur)
            throw Error(r(483))
    }
    var Yn = !1;
    function no(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function ao(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function Kn(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Xn(e, t, n) {
        var l = e.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (Ae & 2) !== 0) {
            var s = l.pending;
            return s === null ? t.next = t : (t.next = s.next,
            s.next = t),
            l.pending = t,
            t = wr(e),
            zd(e, null, n),
            t
        }
        return xr(e, l, t, n),
        wr(e)
    }
    function ul(e, t, n) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (n & 4194048) !== 0)) {
            var l = t.lanes;
            l &= e.pendingLanes,
            n |= l,
            t.lanes = n,
            Gf(e, n)
        }
    }
    function io(e, t) {
        var n = e.updateQueue
          , l = e.alternate;
        if (l !== null && (l = l.updateQueue,
        n === l)) {
            var s = null
              , c = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var h = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    c === null ? s = c = h : c = c.next = h,
                    n = n.next
                } while (n !== null);
                c === null ? s = c = t : c = c.next = t
            } else
                s = c = t;
            n = {
                baseState: l.baseState,
                firstBaseUpdate: s,
                lastBaseUpdate: c,
                shared: l.shared,
                callbacks: l.callbacks
            },
            e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
    }
    var lo = !1;
    function sl() {
        if (lo) {
            var e = ri;
            if (e !== null)
                throw e
        }
    }
    function ol(e, t, n, l) {
        lo = !1;
        var s = e.updateQueue;
        Yn = !1;
        var c = s.firstBaseUpdate
          , h = s.lastBaseUpdate
          , m = s.shared.pending;
        if (m !== null) {
            s.shared.pending = null;
            var b = m
              , R = b.next;
            b.next = null,
            h === null ? c = R : h.next = R,
            h = b;
            var j = e.alternate;
            j !== null && (j = j.updateQueue,
            m = j.lastBaseUpdate,
            m !== h && (m === null ? j.firstBaseUpdate = R : m.next = R,
            j.lastBaseUpdate = b))
        }
        if (c !== null) {
            var V = s.baseState;
            h = 0,
            j = R = b = null,
            m = c;
            do {
                var x = m.lane & -536870913
                  , w = x !== m.lane;
                if (w ? (me & x) === x : (l & x) === x) {
                    x !== 0 && x === li && (lo = !0),
                    j !== null && (j = j.next = {
                        lane: 0,
                        tag: m.tag,
                        payload: m.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var ne = e
                          , I = m;
                        x = t;
                        var we = n;
                        switch (I.tag) {
                        case 1:
                            if (ne = I.payload,
                            typeof ne == "function") {
                                V = ne.call(we, V, x);
                                break e
                            }
                            V = ne;
                            break e;
                        case 3:
                            ne.flags = ne.flags & -65537 | 128;
                        case 0:
                            if (ne = I.payload,
                            x = typeof ne == "function" ? ne.call(we, V, x) : ne,
                            x == null)
                                break e;
                            V = y({}, V, x);
                            break e;
                        case 2:
                            Yn = !0
                        }
                    }
                    x = m.callback,
                    x !== null && (e.flags |= 64,
                    w && (e.flags |= 8192),
                    w = s.callbacks,
                    w === null ? s.callbacks = [x] : w.push(x))
                } else
                    w = {
                        lane: x,
                        tag: m.tag,
                        payload: m.payload,
                        callback: m.callback,
                        next: null
                    },
                    j === null ? (R = j = w,
                    b = V) : j = j.next = w,
                    h |= x;
                if (m = m.next,
                m === null) {
                    if (m = s.shared.pending,
                    m === null)
                        break;
                    w = m,
                    m = w.next,
                    w.next = null,
                    s.lastBaseUpdate = w,
                    s.shared.pending = null
                }
            } while (!0);
            j === null && (b = V),
            s.baseState = b,
            s.firstBaseUpdate = R,
            s.lastBaseUpdate = j,
            c === null && (s.shared.lanes = 0),
            Wn |= h,
            e.lanes = h,
            e.memoizedState = V
        }
    }
    function Jd(e, t) {
        if (typeof e != "function")
            throw Error(r(191, e));
        e.call(t)
    }
    function Fd(e, t) {
        var n = e.callbacks;
        if (n !== null)
            for (e.callbacks = null,
            e = 0; e < n.length; e++)
                Jd(n[e], t)
    }
    var ui = L(null)
      , Br = L(0);
    function Pd(e, t) {
        e = Nn,
        Y(Br, e),
        Y(ui, t),
        Nn = e | t.baseLanes
    }
    function ro() {
        Y(Br, Nn),
        Y(ui, ui.current)
    }
    function uo() {
        Nn = Br.current,
        X(ui),
        X(Br)
    }
    var Zn = 0
      , fe = null
      , Re = null
      , Ye = null
      , Hr = !1
      , si = !1
      , Ta = !1
      , Vr = 0
      , cl = 0
      , oi = null
      , Sm = 0;
    function qe() {
        throw Error(r(321))
    }
    function so(e, t) {
        if (t === null)
            return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!yt(e[n], t[n]))
                return !1;
        return !0
    }
    function oo(e, t, n, l, s, c) {
        return Zn = c,
        fe = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        D.H = e === null || e.memoizedState === null ? zh : Uh,
        Ta = !1,
        c = n(l, s),
        Ta = !1,
        si && (c = Id(t, n, l, s)),
        Wd(e),
        c
    }
    function Wd(e) {
        D.H = Zr;
        var t = Re !== null && Re.next !== null;
        if (Zn = 0,
        Ye = Re = fe = null,
        Hr = !1,
        cl = 0,
        oi = null,
        t)
            throw Error(r(300));
        e === null || Pe || (e = e.dependencies,
        e !== null && Cr(e) && (Pe = !0))
    }
    function Id(e, t, n, l) {
        fe = e;
        var s = 0;
        do {
            if (si && (oi = null),
            cl = 0,
            si = !1,
            25 <= s)
                throw Error(r(301));
            if (s += 1,
            Ye = Re = null,
            e.updateQueue != null) {
                var c = e.updateQueue;
                c.lastEffect = null,
                c.events = null,
                c.stores = null,
                c.memoCache != null && (c.memoCache.index = 0)
            }
            D.H = wm,
            c = t(n, l)
        } while (si);
        return c
    }
    function Om() {
        var e = D.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? fl(t) : t,
        e = e.useState()[0],
        (Re !== null ? Re.memoizedState : null) !== e && (fe.flags |= 1024),
        t
    }
    function co() {
        var e = Vr !== 0;
        return Vr = 0,
        e
    }
    function fo(e, t, n) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~n
    }
    function ho(e) {
        if (Hr) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            Hr = !1
        }
        Zn = 0,
        Ye = Re = fe = null,
        si = !1,
        cl = Vr = 0,
        oi = null
    }
    function dt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ye === null ? fe.memoizedState = Ye = e : Ye = Ye.next = e,
        Ye
    }
    function Ke() {
        if (Re === null) {
            var e = fe.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Re.next;
        var t = Ye === null ? fe.memoizedState : Ye.next;
        if (t !== null)
            Ye = t,
            Re = e;
        else {
            if (e === null)
                throw fe.alternate === null ? Error(r(467)) : Error(r(310));
            Re = e,
            e = {
                memoizedState: Re.memoizedState,
                baseState: Re.baseState,
                baseQueue: Re.baseQueue,
                queue: Re.queue,
                next: null
            },
            Ye === null ? fe.memoizedState = Ye = e : Ye = Ye.next = e
        }
        return Ye
    }
    function go() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function fl(e) {
        var t = cl;
        return cl += 1,
        oi === null && (oi = []),
        e = $d(oi, e, t),
        t = fe,
        (Ye === null ? t.memoizedState : Ye.next) === null && (t = t.alternate,
        D.H = t === null || t.memoizedState === null ? zh : Uh),
        e
    }
    function qr(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return fl(e);
            if (e.$$typeof === te)
                return lt(e)
        }
        throw Error(r(438, String(e)))
    }
    function vo(e) {
        var t = null
          , n = fe.updateQueue;
        if (n !== null && (t = n.memoCache),
        t == null) {
            var l = fe.alternate;
            l !== null && (l = l.updateQueue,
            l !== null && (l = l.memoCache,
            l != null && (t = {
                data: l.data.map(function(s) {
                    return s.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        n === null && (n = go(),
        fe.updateQueue = n),
        n.memoCache = t,
        n = t.data[t.index],
        n === void 0)
            for (n = t.data[t.index] = Array(e),
            l = 0; l < e; l++)
                n[l] = ve;
        return t.index++,
        n
    }
    function En(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function Gr(e) {
        var t = Ke();
        return po(t, Re, e)
    }
    function po(e, t, n) {
        var l = e.queue;
        if (l === null)
            throw Error(r(311));
        l.lastRenderedReducer = n;
        var s = e.baseQueue
          , c = l.pending;
        if (c !== null) {
            if (s !== null) {
                var h = s.next;
                s.next = c.next,
                c.next = h
            }
            t.baseQueue = s = c,
            l.pending = null
        }
        if (c = e.baseState,
        s === null)
            e.memoizedState = c;
        else {
            t = s.next;
            var m = h = null
              , b = null
              , R = t
              , j = !1;
            do {
                var V = R.lane & -536870913;
                if (V !== R.lane ? (me & V) === V : (Zn & V) === V) {
                    var x = R.revertLane;
                    if (x === 0)
                        b !== null && (b = b.next = {
                            lane: 0,
                            revertLane: 0,
                            action: R.action,
                            hasEagerState: R.hasEagerState,
                            eagerState: R.eagerState,
                            next: null
                        }),
                        V === li && (j = !0);
                    else if ((Zn & x) === x) {
                        R = R.next,
                        x === li && (j = !0);
                        continue
                    } else
                        V = {
                            lane: 0,
                            revertLane: R.revertLane,
                            action: R.action,
                            hasEagerState: R.hasEagerState,
                            eagerState: R.eagerState,
                            next: null
                        },
                        b === null ? (m = b = V,
                        h = c) : b = b.next = V,
                        fe.lanes |= x,
                        Wn |= x;
                    V = R.action,
                    Ta && n(c, V),
                    c = R.hasEagerState ? R.eagerState : n(c, V)
                } else
                    x = {
                        lane: V,
                        revertLane: R.revertLane,
                        action: R.action,
                        hasEagerState: R.hasEagerState,
                        eagerState: R.eagerState,
                        next: null
                    },
                    b === null ? (m = b = x,
                    h = c) : b = b.next = x,
                    fe.lanes |= V,
                    Wn |= V;
                R = R.next
            } while (R !== null && R !== t);
            if (b === null ? h = c : b.next = m,
            !yt(c, e.memoizedState) && (Pe = !0,
            j && (n = ri,
            n !== null)))
                throw n;
            e.memoizedState = c,
            e.baseState = h,
            e.baseQueue = b,
            l.lastRenderedState = c
        }
        return s === null && (l.lanes = 0),
        [e.memoizedState, l.dispatch]
    }
    function mo(e) {
        var t = Ke()
          , n = t.queue;
        if (n === null)
            throw Error(r(311));
        n.lastRenderedReducer = e;
        var l = n.dispatch
          , s = n.pending
          , c = t.memoizedState;
        if (s !== null) {
            n.pending = null;
            var h = s = s.next;
            do
                c = e(c, h.action),
                h = h.next;
            while (h !== s);
            yt(c, t.memoizedState) || (Pe = !0),
            t.memoizedState = c,
            t.baseQueue === null && (t.baseState = c),
            n.lastRenderedState = c
        }
        return [c, l]
    }
    function eh(e, t, n) {
        var l = fe
          , s = Ke()
          , c = Ee;
        if (c) {
            if (n === void 0)
                throw Error(r(407));
            n = n()
        } else
            n = t();
        var h = !yt((Re || s).memoizedState, n);
        h && (s.memoizedState = n,
        Pe = !0),
        s = s.queue;
        var m = ah.bind(null, l, s, e);
        if (dl(2048, 8, m, [e]),
        s.getSnapshot !== t || h || Ye !== null && Ye.memoizedState.tag & 1) {
            if (l.flags |= 2048,
            ci(9, Yr(), nh.bind(null, l, s, n, t), null),
            Me === null)
                throw Error(r(349));
            c || (Zn & 124) !== 0 || th(l, t, n)
        }
        return n
    }
    function th(e, t, n) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = fe.updateQueue,
        t === null ? (t = go(),
        fe.updateQueue = t,
        t.stores = [e]) : (n = t.stores,
        n === null ? t.stores = [e] : n.push(e))
    }
    function nh(e, t, n, l) {
        t.value = n,
        t.getSnapshot = l,
        ih(t) && lh(e)
    }
    function ah(e, t, n) {
        return n(function() {
            ih(t) && lh(e)
        })
    }
    function ih(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !yt(e, n)
        } catch {
            return !0
        }
    }
    function lh(e) {
        var t = ti(e, 2);
        t !== null && At(t, e, 2)
    }
    function yo(e) {
        var t = dt();
        if (typeof e == "function") {
            var n = e;
            if (e = n(),
            Ta) {
                Hn(!0);
                try {
                    n()
                } finally {
                    Hn(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: En,
            lastRenderedState: e
        },
        t
    }
    function rh(e, t, n, l) {
        return e.baseState = n,
        po(e, Re, typeof l == "function" ? l : En)
    }
    function Em(e, t, n, l, s) {
        if (Xr(e))
            throw Error(r(485));
        if (e = t.action,
        e !== null) {
            var c = {
                payload: s,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(h) {
                    c.listeners.push(h)
                }
            };
            D.T !== null ? n(!0) : c.isTransition = !1,
            l(c),
            n = t.pending,
            n === null ? (c.next = t.pending = c,
            uh(t, c)) : (c.next = n.next,
            t.pending = n.next = c)
        }
    }
    function uh(e, t) {
        var n = t.action
          , l = t.payload
          , s = e.state;
        if (t.isTransition) {
            var c = D.T
              , h = {};
            D.T = h;
            try {
                var m = n(s, l)
                  , b = D.S;
                b !== null && b(h, m),
                sh(e, t, m)
            } catch (R) {
                _o(e, t, R)
            } finally {
                D.T = c
            }
        } else
            try {
                c = n(s, l),
                sh(e, t, c)
            } catch (R) {
                _o(e, t, R)
            }
    }
    function sh(e, t, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(l) {
            oh(e, t, l)
        }, function(l) {
            return _o(e, t, l)
        }) : oh(e, t, n)
    }
    function oh(e, t, n) {
        t.status = "fulfilled",
        t.value = n,
        ch(t),
        e.state = n,
        t = e.pending,
        t !== null && (n = t.next,
        n === t ? e.pending = null : (n = n.next,
        t.next = n,
        uh(e, n)))
    }
    function _o(e, t, n) {
        var l = e.pending;
        if (e.pending = null,
        l !== null) {
            l = l.next;
            do
                t.status = "rejected",
                t.reason = n,
                ch(t),
                t = t.next;
            while (t !== l)
        }
        e.action = null
    }
    function ch(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function fh(e, t) {
        return t
    }
    function dh(e, t) {
        if (Ee) {
            var n = Me.formState;
            if (n !== null) {
                e: {
                    var l = fe;
                    if (Ee) {
                        if (Le) {
                            t: {
                                for (var s = Le, c = tn; s.nodeType !== 8; ) {
                                    if (!c) {
                                        s = null;
                                        break t
                                    }
                                    if (s = $t(s.nextSibling),
                                    s === null) {
                                        s = null;
                                        break t
                                    }
                                }
                                c = s.data,
                                s = c === "F!" || c === "F" ? s : null
                            }
                            if (s) {
                                Le = $t(s.nextSibling),
                                l = s.data === "F!";
                                break e
                            }
                        }
                        Sa(l)
                    }
                    l = !1
                }
                l && (t = n[0])
            }
        }
        return n = dt(),
        n.memoizedState = n.baseState = t,
        l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: fh,
            lastRenderedState: t
        },
        n.queue = l,
        n = Dh.bind(null, fe, l),
        l.dispatch = n,
        l = yo(!1),
        c = Ao.bind(null, fe, !1, l.queue),
        l = dt(),
        s = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        l.queue = s,
        n = Em.bind(null, fe, s, c, n),
        s.dispatch = n,
        l.memoizedState = e,
        [t, n, !1]
    }
    function hh(e) {
        var t = Ke();
        return gh(t, Re, e)
    }
    function gh(e, t, n) {
        if (t = po(e, t, fh)[0],
        e = Gr(En)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var l = fl(t)
            } catch (h) {
                throw h === ll ? Ur : h
            }
        else
            l = t;
        t = Ke();
        var s = t.queue
          , c = s.dispatch;
        return n !== t.memoizedState && (fe.flags |= 2048,
        ci(9, Yr(), Am.bind(null, s, n), null)),
        [l, c, e]
    }
    function Am(e, t) {
        e.action = t
    }
    function vh(e) {
        var t = Ke()
          , n = Re;
        if (n !== null)
            return gh(t, n, e);
        Ke(),
        t = t.memoizedState,
        n = Ke();
        var l = n.queue.dispatch;
        return n.memoizedState = e,
        [t, l, !1]
    }
    function ci(e, t, n, l) {
        return e = {
            tag: e,
            create: n,
            deps: l,
            inst: t,
            next: null
        },
        t = fe.updateQueue,
        t === null && (t = go(),
        fe.updateQueue = t),
        n = t.lastEffect,
        n === null ? t.lastEffect = e.next = e : (l = n.next,
        n.next = e,
        e.next = l,
        t.lastEffect = e),
        e
    }
    function Yr() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }
    function ph() {
        return Ke().memoizedState
    }
    function Kr(e, t, n, l) {
        var s = dt();
        l = l === void 0 ? null : l,
        fe.flags |= e,
        s.memoizedState = ci(1 | t, Yr(), n, l)
    }
    function dl(e, t, n, l) {
        var s = Ke();
        l = l === void 0 ? null : l;
        var c = s.memoizedState.inst;
        Re !== null && l !== null && so(l, Re.memoizedState.deps) ? s.memoizedState = ci(t, c, n, l) : (fe.flags |= e,
        s.memoizedState = ci(1 | t, c, n, l))
    }
    function mh(e, t) {
        Kr(8390656, 8, e, t)
    }
    function yh(e, t) {
        dl(2048, 8, e, t)
    }
    function _h(e, t) {
        return dl(4, 2, e, t)
    }
    function bh(e, t) {
        return dl(4, 4, e, t)
    }
    function Sh(e, t) {
        if (typeof t == "function") {
            e = e();
            var n = t(e);
            return function() {
                typeof n == "function" ? n() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function Oh(e, t, n) {
        n = n != null ? n.concat([e]) : null,
        dl(4, 4, Sh.bind(null, t, e), n)
    }
    function bo() {}
    function Eh(e, t) {
        var n = Ke();
        t = t === void 0 ? null : t;
        var l = n.memoizedState;
        return t !== null && so(t, l[1]) ? l[0] : (n.memoizedState = [e, t],
        e)
    }
    function Ah(e, t) {
        var n = Ke();
        t = t === void 0 ? null : t;
        var l = n.memoizedState;
        if (t !== null && so(t, l[1]))
            return l[0];
        if (l = e(),
        Ta) {
            Hn(!0);
            try {
                e()
            } finally {
                Hn(!1)
            }
        }
        return n.memoizedState = [l, t],
        l
    }
    function So(e, t, n) {
        return n === void 0 || (Zn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n,
        e = x0(),
        fe.lanes |= e,
        Wn |= e,
        n)
    }
    function Th(e, t, n, l) {
        return yt(n, t) ? n : ui.current !== null ? (e = So(e, n, l),
        yt(e, t) || (Pe = !0),
        e) : (Zn & 42) === 0 ? (Pe = !0,
        e.memoizedState = n) : (e = x0(),
        fe.lanes |= e,
        Wn |= e,
        t)
    }
    function Rh(e, t, n, l, s) {
        var c = G.p;
        G.p = c !== 0 && 8 > c ? c : 8;
        var h = D.T
          , m = {};
        D.T = m,
        Ao(e, !1, t, n);
        try {
            var b = s()
              , R = D.S;
            if (R !== null && R(m, b),
            b !== null && typeof b == "object" && typeof b.then == "function") {
                var j = bm(b, l);
                hl(e, t, j, Et(e))
            } else
                hl(e, t, l, Et(e))
        } catch (V) {
            hl(e, t, {
                then: function() {},
                status: "rejected",
                reason: V
            }, Et())
        } finally {
            G.p = c,
            D.T = h
        }
    }
    function Tm() {}
    function Oo(e, t, n, l) {
        if (e.tag !== 5)
            throw Error(r(476));
        var s = xh(e).queue;
        Rh(e, s, t, P, n === null ? Tm : function() {
            return wh(e),
            n(l)
        }
        )
    }
    function xh(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: P,
            baseState: P,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: En,
                lastRenderedState: P
            },
            next: null
        };
        var n = {};
        return t.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: En,
                lastRenderedState: n
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function wh(e) {
        var t = xh(e).next.queue;
        hl(e, t, {}, Et())
    }
    function Eo() {
        return lt(Dl)
    }
    function Nh() {
        return Ke().memoizedState
    }
    function Mh() {
        return Ke().memoizedState
    }
    function Rm(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var n = Et();
                e = Kn(n);
                var l = Xn(t, e, n);
                l !== null && (At(l, t, n),
                ul(l, t, n)),
                t = {
                    cache: Ws()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function xm(e, t, n) {
        var l = Et();
        n = {
            lane: l,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Xr(e) ? Ch(t, n) : (n = Ys(e, t, n, l),
        n !== null && (At(n, e, l),
        jh(n, t, l)))
    }
    function Dh(e, t, n) {
        var l = Et();
        hl(e, t, n, l)
    }
    function hl(e, t, n, l) {
        var s = {
            lane: l,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Xr(e))
            Ch(t, s);
        else {
            var c = e.alternate;
            if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer,
            c !== null))
                try {
                    var h = t.lastRenderedState
                      , m = c(h, n);
                    if (s.hasEagerState = !0,
                    s.eagerState = m,
                    yt(m, h))
                        return xr(e, t, s, 0),
                        Me === null && Rr(),
                        !1
                } catch {} finally {}
            if (n = Ys(e, t, s, l),
            n !== null)
                return At(n, e, l),
                jh(n, t, l),
                !0
        }
        return !1
    }
    function Ao(e, t, n, l) {
        if (l = {
            lane: 2,
            revertLane: nc(),
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Xr(e)) {
            if (t)
                throw Error(r(479))
        } else
            t = Ys(e, n, l, 2),
            t !== null && At(t, e, 2)
    }
    function Xr(e) {
        var t = e.alternate;
        return e === fe || t !== null && t === fe
    }
    function Ch(e, t) {
        si = Hr = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
    }
    function jh(e, t, n) {
        if ((n & 4194048) !== 0) {
            var l = t.lanes;
            l &= e.pendingLanes,
            n |= l,
            t.lanes = n,
            Gf(e, n)
        }
    }
    var Zr = {
        readContext: lt,
        use: qr,
        useCallback: qe,
        useContext: qe,
        useEffect: qe,
        useImperativeHandle: qe,
        useLayoutEffect: qe,
        useInsertionEffect: qe,
        useMemo: qe,
        useReducer: qe,
        useRef: qe,
        useState: qe,
        useDebugValue: qe,
        useDeferredValue: qe,
        useTransition: qe,
        useSyncExternalStore: qe,
        useId: qe,
        useHostTransitionStatus: qe,
        useFormState: qe,
        useActionState: qe,
        useOptimistic: qe,
        useMemoCache: qe,
        useCacheRefresh: qe
    }
      , zh = {
        readContext: lt,
        use: qr,
        useCallback: function(e, t) {
            return dt().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: lt,
        useEffect: mh,
        useImperativeHandle: function(e, t, n) {
            n = n != null ? n.concat([e]) : null,
            Kr(4194308, 4, Sh.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Kr(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            Kr(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = dt();
            t = t === void 0 ? null : t;
            var l = e();
            if (Ta) {
                Hn(!0);
                try {
                    e()
                } finally {
                    Hn(!1)
                }
            }
            return n.memoizedState = [l, t],
            l
        },
        useReducer: function(e, t, n) {
            var l = dt();
            if (n !== void 0) {
                var s = n(t);
                if (Ta) {
                    Hn(!0);
                    try {
                        n(t)
                    } finally {
                        Hn(!1)
                    }
                }
            } else
                s = t;
            return l.memoizedState = l.baseState = s,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: s
            },
            l.queue = e,
            e = e.dispatch = xm.bind(null, fe, e),
            [l.memoizedState, e]
        },
        useRef: function(e) {
            var t = dt();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = yo(e);
            var t = e.queue
              , n = Dh.bind(null, fe, t);
            return t.dispatch = n,
            [e.memoizedState, n]
        },
        useDebugValue: bo,
        useDeferredValue: function(e, t) {
            var n = dt();
            return So(n, e, t)
        },
        useTransition: function() {
            var e = yo(!1);
            return e = Rh.bind(null, fe, e.queue, !0, !1),
            dt().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, n) {
            var l = fe
              , s = dt();
            if (Ee) {
                if (n === void 0)
                    throw Error(r(407));
                n = n()
            } else {
                if (n = t(),
                Me === null)
                    throw Error(r(349));
                (me & 124) !== 0 || th(l, t, n)
            }
            s.memoizedState = n;
            var c = {
                value: n,
                getSnapshot: t
            };
            return s.queue = c,
            mh(ah.bind(null, l, c, e), [e]),
            l.flags |= 2048,
            ci(9, Yr(), nh.bind(null, l, c, n, t), null),
            n
        },
        useId: function() {
            var e = dt()
              , t = Me.identifierPrefix;
            if (Ee) {
                var n = bn
                  , l = _n;
                n = (l & ~(1 << 32 - mt(l) - 1)).toString(32) + n,
                t = "«" + t + "R" + n,
                n = Vr++,
                0 < n && (t += "H" + n.toString(32)),
                t += "»"
            } else
                n = Sm++,
                t = "«" + t + "r" + n.toString(32) + "»";
            return e.memoizedState = t
        },
        useHostTransitionStatus: Eo,
        useFormState: dh,
        useActionState: dh,
        useOptimistic: function(e) {
            var t = dt();
            t.memoizedState = t.baseState = e;
            var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = n,
            t = Ao.bind(null, fe, !0, n),
            n.dispatch = t,
            [e, t]
        },
        useMemoCache: vo,
        useCacheRefresh: function() {
            return dt().memoizedState = Rm.bind(null, fe)
        }
    }
      , Uh = {
        readContext: lt,
        use: qr,
        useCallback: Eh,
        useContext: lt,
        useEffect: yh,
        useImperativeHandle: Oh,
        useInsertionEffect: _h,
        useLayoutEffect: bh,
        useMemo: Ah,
        useReducer: Gr,
        useRef: ph,
        useState: function() {
            return Gr(En)
        },
        useDebugValue: bo,
        useDeferredValue: function(e, t) {
            var n = Ke();
            return Th(n, Re.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Gr(En)[0]
              , t = Ke().memoizedState;
            return [typeof e == "boolean" ? e : fl(e), t]
        },
        useSyncExternalStore: eh,
        useId: Nh,
        useHostTransitionStatus: Eo,
        useFormState: hh,
        useActionState: hh,
        useOptimistic: function(e, t) {
            var n = Ke();
            return rh(n, Re, e, t)
        },
        useMemoCache: vo,
        useCacheRefresh: Mh
    }
      , wm = {
        readContext: lt,
        use: qr,
        useCallback: Eh,
        useContext: lt,
        useEffect: yh,
        useImperativeHandle: Oh,
        useInsertionEffect: _h,
        useLayoutEffect: bh,
        useMemo: Ah,
        useReducer: mo,
        useRef: ph,
        useState: function() {
            return mo(En)
        },
        useDebugValue: bo,
        useDeferredValue: function(e, t) {
            var n = Ke();
            return Re === null ? So(n, e, t) : Th(n, Re.memoizedState, e, t)
        },
        useTransition: function() {
            var e = mo(En)[0]
              , t = Ke().memoizedState;
            return [typeof e == "boolean" ? e : fl(e), t]
        },
        useSyncExternalStore: eh,
        useId: Nh,
        useHostTransitionStatus: Eo,
        useFormState: vh,
        useActionState: vh,
        useOptimistic: function(e, t) {
            var n = Ke();
            return Re !== null ? rh(n, Re, e, t) : (n.baseState = e,
            [e, n.queue.dispatch])
        },
        useMemoCache: vo,
        useCacheRefresh: Mh
    }
      , fi = null
      , gl = 0;
    function $r(e) {
        var t = gl;
        return gl += 1,
        fi === null && (fi = []),
        $d(fi, e, t)
    }
    function vl(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function kr(e, t) {
        throw t.$$typeof === _ ? Error(r(525)) : (e = Object.prototype.toString.call(t),
        Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function Lh(e) {
        var t = e._init;
        return t(e._payload)
    }
    function Bh(e) {
        function t(E, O) {
            if (e) {
                var A = E.deletions;
                A === null ? (E.deletions = [O],
                E.flags |= 16) : A.push(O)
            }
        }
        function n(E, O) {
            if (!e)
                return null;
            for (; O !== null; )
                t(E, O),
                O = O.sibling;
            return null
        }
        function l(E) {
            for (var O = new Map; E !== null; )
                E.key !== null ? O.set(E.key, E) : O.set(E.index, E),
                E = E.sibling;
            return O
        }
        function s(E, O) {
            return E = yn(E, O),
            E.index = 0,
            E.sibling = null,
            E
        }
        function c(E, O, A) {
            return E.index = A,
            e ? (A = E.alternate,
            A !== null ? (A = A.index,
            A < O ? (E.flags |= 67108866,
            O) : A) : (E.flags |= 67108866,
            O)) : (E.flags |= 1048576,
            O)
        }
        function h(E) {
            return e && E.alternate === null && (E.flags |= 67108866),
            E
        }
        function m(E, O, A, z) {
            return O === null || O.tag !== 6 ? (O = Xs(A, E.mode, z),
            O.return = E,
            O) : (O = s(O, A),
            O.return = E,
            O)
        }
        function b(E, O, A, z) {
            var $ = A.type;
            return $ === N ? j(E, O, A.props.children, z, A.key) : O !== null && (O.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === F && Lh($) === O.type) ? (O = s(O, A.props),
            vl(O, A),
            O.return = E,
            O) : (O = Nr(A.type, A.key, A.props, null, E.mode, z),
            vl(O, A),
            O.return = E,
            O)
        }
        function R(E, O, A, z) {
            return O === null || O.tag !== 4 || O.stateNode.containerInfo !== A.containerInfo || O.stateNode.implementation !== A.implementation ? (O = Zs(A, E.mode, z),
            O.return = E,
            O) : (O = s(O, A.children || []),
            O.return = E,
            O)
        }
        function j(E, O, A, z, $) {
            return O === null || O.tag !== 7 ? (O = ma(A, E.mode, z, $),
            O.return = E,
            O) : (O = s(O, A),
            O.return = E,
            O)
        }
        function V(E, O, A) {
            if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
                return O = Xs("" + O, E.mode, A),
                O.return = E,
                O;
            if (typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                case M:
                    return A = Nr(O.type, O.key, O.props, null, E.mode, A),
                    vl(A, O),
                    A.return = E,
                    A;
                case U:
                    return O = Zs(O, E.mode, A),
                    O.return = E,
                    O;
                case F:
                    var z = O._init;
                    return O = z(O._payload),
                    V(E, O, A)
                }
                if (Ze(O) || Qe(O))
                    return O = ma(O, E.mode, A, null),
                    O.return = E,
                    O;
                if (typeof O.then == "function")
                    return V(E, $r(O), A);
                if (O.$$typeof === te)
                    return V(E, jr(E, O), A);
                kr(E, O)
            }
            return null
        }
        function x(E, O, A, z) {
            var $ = O !== null ? O.key : null;
            if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
                return $ !== null ? null : m(E, O, "" + A, z);
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                case M:
                    return A.key === $ ? b(E, O, A, z) : null;
                case U:
                    return A.key === $ ? R(E, O, A, z) : null;
                case F:
                    return $ = A._init,
                    A = $(A._payload),
                    x(E, O, A, z)
                }
                if (Ze(A) || Qe(A))
                    return $ !== null ? null : j(E, O, A, z, null);
                if (typeof A.then == "function")
                    return x(E, O, $r(A), z);
                if (A.$$typeof === te)
                    return x(E, O, jr(E, A), z);
                kr(E, A)
            }
            return null
        }
        function w(E, O, A, z, $) {
            if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
                return E = E.get(A) || null,
                m(O, E, "" + z, $);
            if (typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                case M:
                    return E = E.get(z.key === null ? A : z.key) || null,
                    b(O, E, z, $);
                case U:
                    return E = E.get(z.key === null ? A : z.key) || null,
                    R(O, E, z, $);
                case F:
                    var de = z._init;
                    return z = de(z._payload),
                    w(E, O, A, z, $)
                }
                if (Ze(z) || Qe(z))
                    return E = E.get(A) || null,
                    j(O, E, z, $, null);
                if (typeof z.then == "function")
                    return w(E, O, A, $r(z), $);
                if (z.$$typeof === te)
                    return w(E, O, A, jr(O, z), $);
                kr(O, z)
            }
            return null
        }
        function ne(E, O, A, z) {
            for (var $ = null, de = null, k = O, ee = O = 0, Ie = null; k !== null && ee < A.length; ee++) {
                k.index > ee ? (Ie = k,
                k = null) : Ie = k.sibling;
                var Se = x(E, k, A[ee], z);
                if (Se === null) {
                    k === null && (k = Ie);
                    break
                }
                e && k && Se.alternate === null && t(E, k),
                O = c(Se, O, ee),
                de === null ? $ = Se : de.sibling = Se,
                de = Se,
                k = Ie
            }
            if (ee === A.length)
                return n(E, k),
                Ee && _a(E, ee),
                $;
            if (k === null) {
                for (; ee < A.length; ee++)
                    k = V(E, A[ee], z),
                    k !== null && (O = c(k, O, ee),
                    de === null ? $ = k : de.sibling = k,
                    de = k);
                return Ee && _a(E, ee),
                $
            }
            for (k = l(k); ee < A.length; ee++)
                Ie = w(k, E, ee, A[ee], z),
                Ie !== null && (e && Ie.alternate !== null && k.delete(Ie.key === null ? ee : Ie.key),
                O = c(Ie, O, ee),
                de === null ? $ = Ie : de.sibling = Ie,
                de = Ie);
            return e && k.forEach(function(ua) {
                return t(E, ua)
            }),
            Ee && _a(E, ee),
            $
        }
        function I(E, O, A, z) {
            if (A == null)
                throw Error(r(151));
            for (var $ = null, de = null, k = O, ee = O = 0, Ie = null, Se = A.next(); k !== null && !Se.done; ee++,
            Se = A.next()) {
                k.index > ee ? (Ie = k,
                k = null) : Ie = k.sibling;
                var ua = x(E, k, Se.value, z);
                if (ua === null) {
                    k === null && (k = Ie);
                    break
                }
                e && k && ua.alternate === null && t(E, k),
                O = c(ua, O, ee),
                de === null ? $ = ua : de.sibling = ua,
                de = ua,
                k = Ie
            }
            if (Se.done)
                return n(E, k),
                Ee && _a(E, ee),
                $;
            if (k === null) {
                for (; !Se.done; ee++,
                Se = A.next())
                    Se = V(E, Se.value, z),
                    Se !== null && (O = c(Se, O, ee),
                    de === null ? $ = Se : de.sibling = Se,
                    de = Se);
                return Ee && _a(E, ee),
                $
            }
            for (k = l(k); !Se.done; ee++,
            Se = A.next())
                Se = w(k, E, ee, Se.value, z),
                Se !== null && (e && Se.alternate !== null && k.delete(Se.key === null ? ee : Se.key),
                O = c(Se, O, ee),
                de === null ? $ = Se : de.sibling = Se,
                de = Se);
            return e && k.forEach(function(Ny) {
                return t(E, Ny)
            }),
            Ee && _a(E, ee),
            $
        }
        function we(E, O, A, z) {
            if (typeof A == "object" && A !== null && A.type === N && A.key === null && (A = A.props.children),
            typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                case M:
                    e: {
                        for (var $ = A.key; O !== null; ) {
                            if (O.key === $) {
                                if ($ = A.type,
                                $ === N) {
                                    if (O.tag === 7) {
                                        n(E, O.sibling),
                                        z = s(O, A.props.children),
                                        z.return = E,
                                        E = z;
                                        break e
                                    }
                                } else if (O.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === F && Lh($) === O.type) {
                                    n(E, O.sibling),
                                    z = s(O, A.props),
                                    vl(z, A),
                                    z.return = E,
                                    E = z;
                                    break e
                                }
                                n(E, O);
                                break
                            } else
                                t(E, O);
                            O = O.sibling
                        }
                        A.type === N ? (z = ma(A.props.children, E.mode, z, A.key),
                        z.return = E,
                        E = z) : (z = Nr(A.type, A.key, A.props, null, E.mode, z),
                        vl(z, A),
                        z.return = E,
                        E = z)
                    }
                    return h(E);
                case U:
                    e: {
                        for ($ = A.key; O !== null; ) {
                            if (O.key === $)
                                if (O.tag === 4 && O.stateNode.containerInfo === A.containerInfo && O.stateNode.implementation === A.implementation) {
                                    n(E, O.sibling),
                                    z = s(O, A.children || []),
                                    z.return = E,
                                    E = z;
                                    break e
                                } else {
                                    n(E, O);
                                    break
                                }
                            else
                                t(E, O);
                            O = O.sibling
                        }
                        z = Zs(A, E.mode, z),
                        z.return = E,
                        E = z
                    }
                    return h(E);
                case F:
                    return $ = A._init,
                    A = $(A._payload),
                    we(E, O, A, z)
                }
                if (Ze(A))
                    return ne(E, O, A, z);
                if (Qe(A)) {
                    if ($ = Qe(A),
                    typeof $ != "function")
                        throw Error(r(150));
                    return A = $.call(A),
                    I(E, O, A, z)
                }
                if (typeof A.then == "function")
                    return we(E, O, $r(A), z);
                if (A.$$typeof === te)
                    return we(E, O, jr(E, A), z);
                kr(E, A)
            }
            return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (A = "" + A,
            O !== null && O.tag === 6 ? (n(E, O.sibling),
            z = s(O, A),
            z.return = E,
            E = z) : (n(E, O),
            z = Xs(A, E.mode, z),
            z.return = E,
            E = z),
            h(E)) : n(E, O)
        }
        return function(E, O, A, z) {
            try {
                gl = 0;
                var $ = we(E, O, A, z);
                return fi = null,
                $
            } catch (k) {
                if (k === ll || k === Ur)
                    throw k;
                var de = _t(29, k, null, E.mode);
                return de.lanes = z,
                de.return = E,
                de
            } finally {}
        }
    }
    var di = Bh(!0)
      , Hh = Bh(!1)
      , zt = L(null)
      , nn = null;
    function $n(e) {
        var t = e.alternate;
        Y(ke, ke.current & 1),
        Y(zt, e),
        nn === null && (t === null || ui.current !== null || t.memoizedState !== null) && (nn = e)
    }
    function Vh(e) {
        if (e.tag === 22) {
            if (Y(ke, ke.current),
            Y(zt, e),
            nn === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (nn = e)
            }
        } else
            kn()
    }
    function kn() {
        Y(ke, ke.current),
        Y(zt, zt.current)
    }
    function An(e) {
        X(zt),
        nn === e && (nn = null),
        X(ke)
    }
    var ke = L(0);
    function Qr(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || gc(n)))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    function To(e, t, n, l) {
        t = e.memoizedState,
        n = n(l, t),
        n = n == null ? t : y({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var Ro = {
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var l = Et()
              , s = Kn(l);
            s.payload = t,
            n != null && (s.callback = n),
            t = Xn(e, s, l),
            t !== null && (At(t, e, l),
            ul(t, e, l))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var l = Et()
              , s = Kn(l);
            s.tag = 1,
            s.payload = t,
            n != null && (s.callback = n),
            t = Xn(e, s, l),
            t !== null && (At(t, e, l),
            ul(t, e, l))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Et()
              , l = Kn(n);
            l.tag = 2,
            t != null && (l.callback = t),
            t = Xn(e, l, n),
            t !== null && (At(t, e, n),
            ul(t, e, n))
        }
    };
    function qh(e, t, n, l, s, c, h) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, c, h) : t.prototype && t.prototype.isPureReactComponent ? !Pi(n, l) || !Pi(s, c) : !0
    }
    function Gh(e, t, n, l) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l),
        t.state !== e && Ro.enqueueReplaceState(t, t.state, null)
    }
    function Ra(e, t) {
        var n = t;
        if ("ref"in t) {
            n = {};
            for (var l in t)
                l !== "ref" && (n[l] = t[l])
        }
        if (e = e.defaultProps) {
            n === t && (n = y({}, n));
            for (var s in e)
                n[s] === void 0 && (n[s] = e[s])
        }
        return n
    }
    var Jr = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
    ;
    function Yh(e) {
        Jr(e)
    }
    function Kh(e) {
        console.error(e)
    }
    function Xh(e) {
        Jr(e)
    }
    function Fr(e, t) {
        try {
            var n = e.onUncaughtError;
            n(t.value, {
                componentStack: t.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }
    function Zh(e, t, n) {
        try {
            var l = e.onCaughtError;
            l(n.value, {
                componentStack: n.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    function xo(e, t, n) {
        return n = Kn(n),
        n.tag = 3,
        n.payload = {
            element: null
        },
        n.callback = function() {
            Fr(e, t)
        }
        ,
        n
    }
    function $h(e) {
        return e = Kn(e),
        e.tag = 3,
        e
    }
    function kh(e, t, n, l) {
        var s = n.type.getDerivedStateFromError;
        if (typeof s == "function") {
            var c = l.value;
            e.payload = function() {
                return s(c)
            }
            ,
            e.callback = function() {
                Zh(t, n, l)
            }
        }
        var h = n.stateNode;
        h !== null && typeof h.componentDidCatch == "function" && (e.callback = function() {
            Zh(t, n, l),
            typeof s != "function" && (In === null ? In = new Set([this]) : In.add(this));
            var m = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: m !== null ? m : ""
            })
        }
        )
    }
    function Nm(e, t, n, l, s) {
        if (n.flags |= 32768,
        l !== null && typeof l == "object" && typeof l.then == "function") {
            if (t = n.alternate,
            t !== null && nl(t, n, s, !0),
            n = zt.current,
            n !== null) {
                switch (n.tag) {
                case 13:
                    return nn === null ? Po() : n.alternate === null && Be === 0 && (Be = 3),
                    n.flags &= -257,
                    n.flags |= 65536,
                    n.lanes = s,
                    l === to ? n.flags |= 16384 : (t = n.updateQueue,
                    t === null ? n.updateQueue = new Set([l]) : t.add(l),
                    Io(e, l, s)),
                    !1;
                case 22:
                    return n.flags |= 65536,
                    l === to ? n.flags |= 16384 : (t = n.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l])
                    },
                    n.updateQueue = t) : (n = t.retryQueue,
                    n === null ? t.retryQueue = new Set([l]) : n.add(l)),
                    Io(e, l, s)),
                    !1
                }
                throw Error(r(435, n.tag))
            }
            return Io(e, l, s),
            Po(),
            !1
        }
        if (Ee)
            return t = zt.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = s,
            l !== Qs && (e = Error(r(422), {
                cause: l
            }),
            tl(Mt(e, n)))) : (l !== Qs && (t = Error(r(423), {
                cause: l
            }),
            tl(Mt(t, n))),
            e = e.current.alternate,
            e.flags |= 65536,
            s &= -s,
            e.lanes |= s,
            l = Mt(l, n),
            s = xo(e.stateNode, l, s),
            io(e, s),
            Be !== 4 && (Be = 2)),
            !1;
        var c = Error(r(520), {
            cause: l
        });
        if (c = Mt(c, n),
        Ol === null ? Ol = [c] : Ol.push(c),
        Be !== 4 && (Be = 2),
        t === null)
            return !0;
        l = Mt(l, n),
        n = t;
        do {
            switch (n.tag) {
            case 3:
                return n.flags |= 65536,
                e = s & -s,
                n.lanes |= e,
                e = xo(n.stateNode, l, e),
                io(n, e),
                !1;
            case 1:
                if (t = n.type,
                c = n.stateNode,
                (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (In === null || !In.has(c))))
                    return n.flags |= 65536,
                    s &= -s,
                    n.lanes |= s,
                    s = $h(s),
                    kh(s, e, n, l),
                    io(n, s),
                    !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var Qh = Error(r(461))
      , Pe = !1;
    function et(e, t, n, l) {
        t.child = e === null ? Hh(t, null, n, l) : di(t, e.child, n, l)
    }
    function Jh(e, t, n, l, s) {
        n = n.render;
        var c = t.ref;
        if ("ref"in l) {
            var h = {};
            for (var m in l)
                m !== "ref" && (h[m] = l[m])
        } else
            h = l;
        return Ea(t),
        l = oo(e, t, n, h, c, s),
        m = co(),
        e !== null && !Pe ? (fo(e, t, s),
        Tn(e, t, s)) : (Ee && m && $s(t),
        t.flags |= 1,
        et(e, t, l, s),
        t.child)
    }
    function Fh(e, t, n, l, s) {
        if (e === null) {
            var c = n.type;
            return typeof c == "function" && !Ks(c) && c.defaultProps === void 0 && n.compare === null ? (t.tag = 15,
            t.type = c,
            Ph(e, t, c, l, s)) : (e = Nr(n.type, null, l, t, t.mode, s),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (c = e.child,
        !Uo(e, s)) {
            var h = c.memoizedProps;
            if (n = n.compare,
            n = n !== null ? n : Pi,
            n(h, l) && e.ref === t.ref)
                return Tn(e, t, s)
        }
        return t.flags |= 1,
        e = yn(c, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function Ph(e, t, n, l, s) {
        if (e !== null) {
            var c = e.memoizedProps;
            if (Pi(c, l) && e.ref === t.ref)
                if (Pe = !1,
                t.pendingProps = l = c,
                Uo(e, s))
                    (e.flags & 131072) !== 0 && (Pe = !0);
                else
                    return t.lanes = e.lanes,
                    Tn(e, t, s)
        }
        return wo(e, t, n, l, s)
    }
    function Wh(e, t, n) {
        var l = t.pendingProps
          , s = l.children
          , c = e !== null ? e.memoizedState : null;
        if (l.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (l = c !== null ? c.baseLanes | n : n,
                e !== null) {
                    for (s = t.child = e.child,
                    c = 0; s !== null; )
                        c = c | s.lanes | s.childLanes,
                        s = s.sibling;
                    t.childLanes = c & ~l
                } else
                    t.childLanes = 0,
                    t.child = null;
                return Ih(e, t, l, n)
            }
            if ((n & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && zr(t, c !== null ? c.cachePool : null),
                c !== null ? Pd(t, c) : ro(),
                Vh(t);
            else
                return t.lanes = t.childLanes = 536870912,
                Ih(e, t, c !== null ? c.baseLanes | n : n, n)
        } else
            c !== null ? (zr(t, c.cachePool),
            Pd(t, c),
            kn(),
            t.memoizedState = null) : (e !== null && zr(t, null),
            ro(),
            kn());
        return et(e, t, s, n),
        t.child
    }
    function Ih(e, t, n, l) {
        var s = eo();
        return s = s === null ? null : {
            parent: $e._currentValue,
            pool: s
        },
        t.memoizedState = {
            baseLanes: n,
            cachePool: s
        },
        e !== null && zr(t, null),
        ro(),
        Vh(t),
        e !== null && nl(e, t, l, !0),
        null
    }
    function Pr(e, t) {
        var n = t.ref;
        if (n === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof n != "function" && typeof n != "object")
                throw Error(r(284));
            (e === null || e.ref !== n) && (t.flags |= 4194816)
        }
    }
    function wo(e, t, n, l, s) {
        return Ea(t),
        n = oo(e, t, n, l, void 0, s),
        l = co(),
        e !== null && !Pe ? (fo(e, t, s),
        Tn(e, t, s)) : (Ee && l && $s(t),
        t.flags |= 1,
        et(e, t, n, s),
        t.child)
    }
    function e0(e, t, n, l, s, c) {
        return Ea(t),
        t.updateQueue = null,
        n = Id(t, l, n, s),
        Wd(e),
        l = co(),
        e !== null && !Pe ? (fo(e, t, c),
        Tn(e, t, c)) : (Ee && l && $s(t),
        t.flags |= 1,
        et(e, t, n, c),
        t.child)
    }
    function t0(e, t, n, l, s) {
        if (Ea(t),
        t.stateNode === null) {
            var c = ni
              , h = n.contextType;
            typeof h == "object" && h !== null && (c = lt(h)),
            c = new n(l,c),
            t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null,
            c.updater = Ro,
            t.stateNode = c,
            c._reactInternals = t,
            c = t.stateNode,
            c.props = l,
            c.state = t.memoizedState,
            c.refs = {},
            no(t),
            h = n.contextType,
            c.context = typeof h == "object" && h !== null ? lt(h) : ni,
            c.state = t.memoizedState,
            h = n.getDerivedStateFromProps,
            typeof h == "function" && (To(t, n, h, l),
            c.state = t.memoizedState),
            typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (h = c.state,
            typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(),
            h !== c.state && Ro.enqueueReplaceState(c, c.state, null),
            ol(t, l, c, s),
            sl(),
            c.state = t.memoizedState),
            typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            l = !0
        } else if (e === null) {
            c = t.stateNode;
            var m = t.memoizedProps
              , b = Ra(n, m);
            c.props = b;
            var R = c.context
              , j = n.contextType;
            h = ni,
            typeof j == "object" && j !== null && (h = lt(j));
            var V = n.getDerivedStateFromProps;
            j = typeof V == "function" || typeof c.getSnapshotBeforeUpdate == "function",
            m = t.pendingProps !== m,
            j || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (m || R !== h) && Gh(t, c, l, h),
            Yn = !1;
            var x = t.memoizedState;
            c.state = x,
            ol(t, l, c, s),
            sl(),
            R = t.memoizedState,
            m || x !== R || Yn ? (typeof V == "function" && (To(t, n, V, l),
            R = t.memoizedState),
            (b = Yn || qh(t, n, b, l, x, R, h)) ? (j || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()),
            typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = l,
            t.memoizedState = R),
            c.props = l,
            c.state = R,
            c.context = h,
            l = b) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            l = !1)
        } else {
            c = t.stateNode,
            ao(e, t),
            h = t.memoizedProps,
            j = Ra(n, h),
            c.props = j,
            V = t.pendingProps,
            x = c.context,
            R = n.contextType,
            b = ni,
            typeof R == "object" && R !== null && (b = lt(R)),
            m = n.getDerivedStateFromProps,
            (R = typeof m == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (h !== V || x !== b) && Gh(t, c, l, b),
            Yn = !1,
            x = t.memoizedState,
            c.state = x,
            ol(t, l, c, s),
            sl();
            var w = t.memoizedState;
            h !== V || x !== w || Yn || e !== null && e.dependencies !== null && Cr(e.dependencies) ? (typeof m == "function" && (To(t, n, m, l),
            w = t.memoizedState),
            (j = Yn || qh(t, n, j, l, x, w, b) || e !== null && e.dependencies !== null && Cr(e.dependencies)) ? (R || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(l, w, b),
            typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(l, w, b)),
            typeof c.componentDidUpdate == "function" && (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || h === e.memoizedProps && x === e.memoizedState || (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = l,
            t.memoizedState = w),
            c.props = l,
            c.state = w,
            c.context = b,
            l = j) : (typeof c.componentDidUpdate != "function" || h === e.memoizedProps && x === e.memoizedState || (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024),
            l = !1)
        }
        return c = l,
        Pr(e, t),
        l = (t.flags & 128) !== 0,
        c || l ? (c = t.stateNode,
        n = l && typeof n.getDerivedStateFromError != "function" ? null : c.render(),
        t.flags |= 1,
        e !== null && l ? (t.child = di(t, e.child, null, s),
        t.child = di(t, null, n, s)) : et(e, t, n, s),
        t.memoizedState = c.state,
        e = t.child) : e = Tn(e, t, s),
        e
    }
    function n0(e, t, n, l) {
        return el(),
        t.flags |= 256,
        et(e, t, n, l),
        t.child
    }
    var No = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Mo(e) {
        return {
            baseLanes: e,
            cachePool: Kd()
        }
    }
    function Do(e, t, n) {
        return e = e !== null ? e.childLanes & ~n : 0,
        t && (e |= Ut),
        e
    }
    function a0(e, t, n) {
        var l = t.pendingProps, s = !1, c = (t.flags & 128) !== 0, h;
        if ((h = c) || (h = e !== null && e.memoizedState === null ? !1 : (ke.current & 2) !== 0),
        h && (s = !0,
        t.flags &= -129),
        h = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (Ee) {
                if (s ? $n(t) : kn(),
                Ee) {
                    var m = Le, b;
                    if (b = m) {
                        e: {
                            for (b = m,
                            m = tn; b.nodeType !== 8; ) {
                                if (!m) {
                                    m = null;
                                    break e
                                }
                                if (b = $t(b.nextSibling),
                                b === null) {
                                    m = null;
                                    break e
                                }
                            }
                            m = b
                        }
                        m !== null ? (t.memoizedState = {
                            dehydrated: m,
                            treeContext: ya !== null ? {
                                id: _n,
                                overflow: bn
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                        b = _t(18, null, null, 0),
                        b.stateNode = m,
                        b.return = t,
                        t.child = b,
                        st = t,
                        Le = null,
                        b = !0) : b = !1
                    }
                    b || Sa(t)
                }
                if (m = t.memoizedState,
                m !== null && (m = m.dehydrated,
                m !== null))
                    return gc(m) ? t.lanes = 32 : t.lanes = 536870912,
                    null;
                An(t)
            }
            return m = l.children,
            l = l.fallback,
            s ? (kn(),
            s = t.mode,
            m = Wr({
                mode: "hidden",
                children: m
            }, s),
            l = ma(l, s, n, null),
            m.return = t,
            l.return = t,
            m.sibling = l,
            t.child = m,
            s = t.child,
            s.memoizedState = Mo(n),
            s.childLanes = Do(e, h, n),
            t.memoizedState = No,
            l) : ($n(t),
            Co(t, m))
        }
        if (b = e.memoizedState,
        b !== null && (m = b.dehydrated,
        m !== null)) {
            if (c)
                t.flags & 256 ? ($n(t),
                t.flags &= -257,
                t = jo(e, t, n)) : t.memoizedState !== null ? (kn(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (kn(),
                s = l.fallback,
                m = t.mode,
                l = Wr({
                    mode: "visible",
                    children: l.children
                }, m),
                s = ma(s, m, n, null),
                s.flags |= 2,
                l.return = t,
                s.return = t,
                l.sibling = s,
                t.child = l,
                di(t, e.child, null, n),
                l = t.child,
                l.memoizedState = Mo(n),
                l.childLanes = Do(e, h, n),
                t.memoizedState = No,
                t = s);
            else if ($n(t),
            gc(m)) {
                if (h = m.nextSibling && m.nextSibling.dataset,
                h)
                    var R = h.dgst;
                h = R,
                l = Error(r(419)),
                l.stack = "",
                l.digest = h,
                tl({
                    value: l,
                    source: null,
                    stack: null
                }),
                t = jo(e, t, n)
            } else if (Pe || nl(e, t, n, !1),
            h = (n & e.childLanes) !== 0,
            Pe || h) {
                if (h = Me,
                h !== null && (l = n & -n,
                l = (l & 42) !== 0 ? 1 : gs(l),
                l = (l & (h.suspendedLanes | n)) !== 0 ? 0 : l,
                l !== 0 && l !== b.retryLane))
                    throw b.retryLane = l,
                    ti(e, l),
                    At(h, e, l),
                    Qh;
                m.data === "$?" || Po(),
                t = jo(e, t, n)
            } else
                m.data === "$?" ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = b.treeContext,
                Le = $t(m.nextSibling),
                st = t,
                Ee = !0,
                ba = null,
                tn = !1,
                e !== null && (Ct[jt++] = _n,
                Ct[jt++] = bn,
                Ct[jt++] = ya,
                _n = e.id,
                bn = e.overflow,
                ya = t),
                t = Co(t, l.children),
                t.flags |= 4096);
            return t
        }
        return s ? (kn(),
        s = l.fallback,
        m = t.mode,
        b = e.child,
        R = b.sibling,
        l = yn(b, {
            mode: "hidden",
            children: l.children
        }),
        l.subtreeFlags = b.subtreeFlags & 65011712,
        R !== null ? s = yn(R, s) : (s = ma(s, m, n, null),
        s.flags |= 2),
        s.return = t,
        l.return = t,
        l.sibling = s,
        t.child = l,
        l = s,
        s = t.child,
        m = e.child.memoizedState,
        m === null ? m = Mo(n) : (b = m.cachePool,
        b !== null ? (R = $e._currentValue,
        b = b.parent !== R ? {
            parent: R,
            pool: R
        } : b) : b = Kd(),
        m = {
            baseLanes: m.baseLanes | n,
            cachePool: b
        }),
        s.memoizedState = m,
        s.childLanes = Do(e, h, n),
        t.memoizedState = No,
        l) : ($n(t),
        n = e.child,
        e = n.sibling,
        n = yn(n, {
            mode: "visible",
            children: l.children
        }),
        n.return = t,
        n.sibling = null,
        e !== null && (h = t.deletions,
        h === null ? (t.deletions = [e],
        t.flags |= 16) : h.push(e)),
        t.child = n,
        t.memoizedState = null,
        n)
    }
    function Co(e, t) {
        return t = Wr({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function Wr(e, t) {
        return e = _t(22, e, null, t),
        e.lanes = 0,
        e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        },
        e
    }
    function jo(e, t, n) {
        return di(t, e.child, null, n),
        e = Co(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function i0(e, t, n) {
        e.lanes |= t;
        var l = e.alternate;
        l !== null && (l.lanes |= t),
        Fs(e.return, t, n)
    }
    function zo(e, t, n, l, s) {
        var c = e.memoizedState;
        c === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: n,
            tailMode: s
        } : (c.isBackwards = t,
        c.rendering = null,
        c.renderingStartTime = 0,
        c.last = l,
        c.tail = n,
        c.tailMode = s)
    }
    function l0(e, t, n) {
        var l = t.pendingProps
          , s = l.revealOrder
          , c = l.tail;
        if (et(e, t, l.children, n),
        l = ke.current,
        (l & 2) !== 0)
            l = l & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && i0(e, n, t);
                    else if (e.tag === 19)
                        i0(e, n, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            l &= 1
        }
        switch (Y(ke, l),
        s) {
        case "forwards":
            for (n = t.child,
            s = null; n !== null; )
                e = n.alternate,
                e !== null && Qr(e) === null && (s = n),
                n = n.sibling;
            n = s,
            n === null ? (s = t.child,
            t.child = null) : (s = n.sibling,
            n.sibling = null),
            zo(t, !1, s, n, c);
            break;
        case "backwards":
            for (n = null,
            s = t.child,
            t.child = null; s !== null; ) {
                if (e = s.alternate,
                e !== null && Qr(e) === null) {
                    t.child = s;
                    break
                }
                e = s.sibling,
                s.sibling = n,
                n = s,
                s = e
            }
            zo(t, !0, n, null, c);
            break;
        case "together":
            zo(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Tn(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies),
        Wn |= t.lanes,
        (n & t.childLanes) === 0)
            if (e !== null) {
                if (nl(e, t, n, !1),
                (n & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(r(153));
        if (t.child !== null) {
            for (e = t.child,
            n = yn(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null; )
                e = e.sibling,
                n = n.sibling = yn(e, e.pendingProps),
                n.return = t;
            n.sibling = null
        }
        return t.child
    }
    function Uo(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && Cr(e)))
    }
    function Mm(e, t, n) {
        switch (t.tag) {
        case 3:
            je(t, t.stateNode.containerInfo),
            Gn(t, $e, e.memoizedState.cache),
            el();
            break;
        case 27:
        case 5:
            os(t);
            break;
        case 4:
            je(t, t.stateNode.containerInfo);
            break;
        case 10:
            Gn(t, t.type, t.memoizedProps.value);
            break;
        case 13:
            var l = t.memoizedState;
            if (l !== null)
                return l.dehydrated !== null ? ($n(t),
                t.flags |= 128,
                null) : (n & t.child.childLanes) !== 0 ? a0(e, t, n) : ($n(t),
                e = Tn(e, t, n),
                e !== null ? e.sibling : null);
            $n(t);
            break;
        case 19:
            var s = (e.flags & 128) !== 0;
            if (l = (n & t.childLanes) !== 0,
            l || (nl(e, t, n, !1),
            l = (n & t.childLanes) !== 0),
            s) {
                if (l)
                    return l0(e, t, n);
                t.flags |= 128
            }
            if (s = t.memoizedState,
            s !== null && (s.rendering = null,
            s.tail = null,
            s.lastEffect = null),
            Y(ke, ke.current),
            l)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            Wh(e, t, n);
        case 24:
            Gn(t, $e, e.memoizedState.cache)
        }
        return Tn(e, t, n)
    }
    function r0(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                Pe = !0;
            else {
                if (!Uo(e, n) && (t.flags & 128) === 0)
                    return Pe = !1,
                    Mm(e, t, n);
                Pe = (e.flags & 131072) !== 0
            }
        else
            Pe = !1,
            Ee && (t.flags & 1048576) !== 0 && Ld(t, Dr, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                e = t.pendingProps;
                var l = t.elementType
                  , s = l._init;
                if (l = s(l._payload),
                t.type = l,
                typeof l == "function")
                    Ks(l) ? (e = Ra(l, e),
                    t.tag = 1,
                    t = t0(null, t, l, e, n)) : (t.tag = 0,
                    t = wo(null, t, l, e, n));
                else {
                    if (l != null) {
                        if (s = l.$$typeof,
                        s === ie) {
                            t.tag = 11,
                            t = Jh(null, t, l, e, n);
                            break e
                        } else if (s === J) {
                            t.tag = 14,
                            t = Fh(null, t, l, e, n);
                            break e
                        }
                    }
                    throw t = Xe(l) || l,
                    Error(r(306, t, ""))
                }
            }
            return t;
        case 0:
            return wo(e, t, t.type, t.pendingProps, n);
        case 1:
            return l = t.type,
            s = Ra(l, t.pendingProps),
            t0(e, t, l, s, n);
        case 3:
            e: {
                if (je(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(r(387));
                l = t.pendingProps;
                var c = t.memoizedState;
                s = c.element,
                ao(e, t),
                ol(t, l, null, n);
                var h = t.memoizedState;
                if (l = h.cache,
                Gn(t, $e, l),
                l !== c.cache && Ps(t, [$e], n, !0),
                sl(),
                l = h.element,
                c.isDehydrated)
                    if (c = {
                        element: l,
                        isDehydrated: !1,
                        cache: h.cache
                    },
                    t.updateQueue.baseState = c,
                    t.memoizedState = c,
                    t.flags & 256) {
                        t = n0(e, t, l, n);
                        break e
                    } else if (l !== s) {
                        s = Mt(Error(r(424)), t),
                        tl(s),
                        t = n0(e, t, l, n);
                        break e
                    } else {
                        switch (e = t.stateNode.containerInfo,
                        e.nodeType) {
                        case 9:
                            e = e.body;
                            break;
                        default:
                            e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (Le = $t(e.firstChild),
                        st = t,
                        Ee = !0,
                        ba = null,
                        tn = !0,
                        n = Hh(t, null, l, n),
                        t.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling
                    }
                else {
                    if (el(),
                    l === s) {
                        t = Tn(e, t, n);
                        break e
                    }
                    et(e, t, l, n)
                }
                t = t.child
            }
            return t;
        case 26:
            return Pr(e, t),
            e === null ? (n = c1(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Ee || (n = t.type,
            e = t.pendingProps,
            l = du(oe.current).createElement(n),
            l[it] = t,
            l[ct] = e,
            nt(l, n, e),
            Fe(l),
            t.stateNode = l) : t.memoizedState = c1(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return os(t),
            e === null && Ee && (l = t.stateNode = u1(t.type, t.pendingProps, oe.current),
            st = t,
            tn = !0,
            s = Le,
            na(t.type) ? (vc = s,
            Le = $t(l.firstChild)) : Le = s),
            et(e, t, t.pendingProps.children, n),
            Pr(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && Ee && ((s = l = Le) && (l = iy(l, t.type, t.pendingProps, tn),
            l !== null ? (t.stateNode = l,
            st = t,
            Le = $t(l.firstChild),
            tn = !1,
            s = !0) : s = !1),
            s || Sa(t)),
            os(t),
            s = t.type,
            c = t.pendingProps,
            h = e !== null ? e.memoizedProps : null,
            l = c.children,
            fc(s, c) ? l = null : h !== null && fc(s, h) && (t.flags |= 32),
            t.memoizedState !== null && (s = oo(e, t, Om, null, null, n),
            Dl._currentValue = s),
            Pr(e, t),
            et(e, t, l, n),
            t.child;
        case 6:
            return e === null && Ee && ((e = n = Le) && (n = ly(n, t.pendingProps, tn),
            n !== null ? (t.stateNode = n,
            st = t,
            Le = null,
            e = !0) : e = !1),
            e || Sa(t)),
            null;
        case 13:
            return a0(e, t, n);
        case 4:
            return je(t, t.stateNode.containerInfo),
            l = t.pendingProps,
            e === null ? t.child = di(t, null, l, n) : et(e, t, l, n),
            t.child;
        case 11:
            return Jh(e, t, t.type, t.pendingProps, n);
        case 7:
            return et(e, t, t.pendingProps, n),
            t.child;
        case 8:
            return et(e, t, t.pendingProps.children, n),
            t.child;
        case 12:
            return et(e, t, t.pendingProps.children, n),
            t.child;
        case 10:
            return l = t.pendingProps,
            Gn(t, t.type, l.value),
            et(e, t, l.children, n),
            t.child;
        case 9:
            return s = t.type._context,
            l = t.pendingProps.children,
            Ea(t),
            s = lt(s),
            l = l(s),
            t.flags |= 1,
            et(e, t, l, n),
            t.child;
        case 14:
            return Fh(e, t, t.type, t.pendingProps, n);
        case 15:
            return Ph(e, t, t.type, t.pendingProps, n);
        case 19:
            return l0(e, t, n);
        case 31:
            return l = t.pendingProps,
            n = t.mode,
            l = {
                mode: l.mode,
                children: l.children
            },
            e === null ? (n = Wr(l, n),
            n.ref = t.ref,
            t.child = n,
            n.return = t,
            t = n) : (n = yn(e.child, l),
            n.ref = t.ref,
            t.child = n,
            n.return = t,
            t = n),
            t;
        case 22:
            return Wh(e, t, n);
        case 24:
            return Ea(t),
            l = lt($e),
            e === null ? (s = eo(),
            s === null && (s = Me,
            c = Ws(),
            s.pooledCache = c,
            c.refCount++,
            c !== null && (s.pooledCacheLanes |= n),
            s = c),
            t.memoizedState = {
                parent: l,
                cache: s
            },
            no(t),
            Gn(t, $e, s)) : ((e.lanes & n) !== 0 && (ao(e, t),
            ol(t, null, null, n),
            sl()),
            s = e.memoizedState,
            c = t.memoizedState,
            s.parent !== l ? (s = {
                parent: l,
                cache: l
            },
            t.memoizedState = s,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = s),
            Gn(t, $e, l)) : (l = c.cache,
            Gn(t, $e, l),
            l !== s.cache && Ps(t, [$e], n, !0))),
            et(e, t, t.pendingProps.children, n),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(r(156, t.tag))
    }
    function Rn(e) {
        e.flags |= 4
    }
    function u0(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !v1(t)) {
            if (t = zt.current,
            t !== null && ((me & 4194048) === me ? nn !== null : (me & 62914560) !== me && (me & 536870912) === 0 || t !== nn))
                throw rl = to,
                Xd;
            e.flags |= 8192
        }
    }
    function Ir(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? Vf() : 536870912,
        e.lanes |= t,
        pi |= t)
    }
    function pl(e, t) {
        if (!Ee)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t),
                    t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var l = null; n !== null; )
                    n.alternate !== null && (l = n),
                    n = n.sibling;
                l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null
            }
    }
    function Ue(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , n = 0
          , l = 0;
        if (t)
            for (var s = e.child; s !== null; )
                n |= s.lanes | s.childLanes,
                l |= s.subtreeFlags & 65011712,
                l |= s.flags & 65011712,
                s.return = e,
                s = s.sibling;
        else
            for (s = e.child; s !== null; )
                n |= s.lanes | s.childLanes,
                l |= s.subtreeFlags,
                l |= s.flags,
                s.return = e,
                s = s.sibling;
        return e.subtreeFlags |= l,
        e.childLanes = n,
        t
    }
    function Dm(e, t, n) {
        var l = t.pendingProps;
        switch (ks(t),
        t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ue(t),
            null;
        case 1:
            return Ue(t),
            null;
        case 3:
            return n = t.stateNode,
            l = null,
            e !== null && (l = e.memoizedState.cache),
            t.memoizedState.cache !== l && (t.flags |= 2048),
            On($e),
            Bn(),
            n.pendingContext && (n.context = n.pendingContext,
            n.pendingContext = null),
            (e === null || e.child === null) && (Ii(t) ? Rn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Vd())),
            Ue(t),
            null;
        case 26:
            return n = t.memoizedState,
            e === null ? (Rn(t),
            n !== null ? (Ue(t),
            u0(t, n)) : (Ue(t),
            t.flags &= -16777217)) : n ? n !== e.memoizedState ? (Rn(t),
            Ue(t),
            u0(t, n)) : (Ue(t),
            t.flags &= -16777217) : (e.memoizedProps !== l && Rn(t),
            Ue(t),
            t.flags &= -16777217),
            null;
        case 27:
            cr(t),
            n = oe.current;
            var s = t.type;
            if (e !== null && t.stateNode != null)
                e.memoizedProps !== l && Rn(t);
            else {
                if (!l) {
                    if (t.stateNode === null)
                        throw Error(r(166));
                    return Ue(t),
                    null
                }
                e = W.current,
                Ii(t) ? Bd(t) : (e = u1(s, l, n),
                t.stateNode = e,
                Rn(t))
            }
            return Ue(t),
            null;
        case 5:
            if (cr(t),
            n = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== l && Rn(t);
            else {
                if (!l) {
                    if (t.stateNode === null)
                        throw Error(r(166));
                    return Ue(t),
                    null
                }
                if (e = W.current,
                Ii(t))
                    Bd(t);
                else {
                    switch (s = du(oe.current),
                    e) {
                    case 1:
                        e = s.createElementNS("http://www.w3.org/2000/svg", n);
                        break;
                    case 2:
                        e = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                        break;
                    default:
                        switch (n) {
                        case "svg":
                            e = s.createElementNS("http://www.w3.org/2000/svg", n);
                            break;
                        case "math":
                            e = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                            break;
                        case "script":
                            e = s.createElement("div"),
                            e.innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild);
                            break;
                        case "select":
                            e = typeof l.is == "string" ? s.createElement("select", {
                                is: l.is
                            }) : s.createElement("select"),
                            l.multiple ? e.multiple = !0 : l.size && (e.size = l.size);
                            break;
                        default:
                            e = typeof l.is == "string" ? s.createElement(n, {
                                is: l.is
                            }) : s.createElement(n)
                        }
                    }
                    e[it] = t,
                    e[ct] = l;
                    e: for (s = t.child; s !== null; ) {
                        if (s.tag === 5 || s.tag === 6)
                            e.appendChild(s.stateNode);
                        else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                            s.child.return = s,
                            s = s.child;
                            continue
                        }
                        if (s === t)
                            break e;
                        for (; s.sibling === null; ) {
                            if (s.return === null || s.return === t)
                                break e;
                            s = s.return
                        }
                        s.sibling.return = s.return,
                        s = s.sibling
                    }
                    t.stateNode = e;
                    e: switch (nt(e, n, l),
                    n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        e = !!l.autoFocus;
                        break e;
                    case "img":
                        e = !0;
                        break e;
                    default:
                        e = !1
                    }
                    e && Rn(t)
                }
            }
            return Ue(t),
            t.flags &= -16777217,
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== l && Rn(t);
            else {
                if (typeof l != "string" && t.stateNode === null)
                    throw Error(r(166));
                if (e = oe.current,
                Ii(t)) {
                    if (e = t.stateNode,
                    n = t.memoizedProps,
                    l = null,
                    s = st,
                    s !== null)
                        switch (s.tag) {
                        case 27:
                        case 5:
                            l = s.memoizedProps
                        }
                    e[it] = t,
                    e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || e1(e.nodeValue, n)),
                    e || Sa(t)
                } else
                    e = du(e).createTextNode(l),
                    e[it] = t,
                    t.stateNode = e
            }
            return Ue(t),
            null;
        case 13:
            if (l = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (s = Ii(t),
                l !== null && l.dehydrated !== null) {
                    if (e === null) {
                        if (!s)
                            throw Error(r(318));
                        if (s = t.memoizedState,
                        s = s !== null ? s.dehydrated : null,
                        !s)
                            throw Error(r(317));
                        s[it] = t
                    } else
                        el(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Ue(t),
                    s = !1
                } else
                    s = Vd(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = s),
                    s = !0;
                if (!s)
                    return t.flags & 256 ? (An(t),
                    t) : (An(t),
                    null)
            }
            if (An(t),
            (t.flags & 128) !== 0)
                return t.lanes = n,
                t;
            if (n = l !== null,
            e = e !== null && e.memoizedState !== null,
            n) {
                l = t.child,
                s = null,
                l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (s = l.alternate.memoizedState.cachePool.pool);
                var c = null;
                l.memoizedState !== null && l.memoizedState.cachePool !== null && (c = l.memoizedState.cachePool.pool),
                c !== s && (l.flags |= 2048)
            }
            return n !== e && n && (t.child.flags |= 8192),
            Ir(t, t.updateQueue),
            Ue(t),
            null;
        case 4:
            return Bn(),
            e === null && rc(t.stateNode.containerInfo),
            Ue(t),
            null;
        case 10:
            return On(t.type),
            Ue(t),
            null;
        case 19:
            if (X(ke),
            s = t.memoizedState,
            s === null)
                return Ue(t),
                null;
            if (l = (t.flags & 128) !== 0,
            c = s.rendering,
            c === null)
                if (l)
                    pl(s, !1);
                else {
                    if (Be !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (c = Qr(e),
                            c !== null) {
                                for (t.flags |= 128,
                                pl(s, !1),
                                e = c.updateQueue,
                                t.updateQueue = e,
                                Ir(t, e),
                                t.subtreeFlags = 0,
                                e = n,
                                n = t.child; n !== null; )
                                    Ud(n, e),
                                    n = n.sibling;
                                return Y(ke, ke.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    s.tail !== null && en() > nu && (t.flags |= 128,
                    l = !0,
                    pl(s, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!l)
                    if (e = Qr(c),
                    e !== null) {
                        if (t.flags |= 128,
                        l = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        Ir(t, e),
                        pl(s, !0),
                        s.tail === null && s.tailMode === "hidden" && !c.alternate && !Ee)
                            return Ue(t),
                            null
                    } else
                        2 * en() - s.renderingStartTime > nu && n !== 536870912 && (t.flags |= 128,
                        l = !0,
                        pl(s, !1),
                        t.lanes = 4194304);
                s.isBackwards ? (c.sibling = t.child,
                t.child = c) : (e = s.last,
                e !== null ? e.sibling = c : t.child = c,
                s.last = c)
            }
            return s.tail !== null ? (t = s.tail,
            s.rendering = t,
            s.tail = t.sibling,
            s.renderingStartTime = en(),
            t.sibling = null,
            e = ke.current,
            Y(ke, l ? e & 1 | 2 : e & 1),
            t) : (Ue(t),
            null);
        case 22:
        case 23:
            return An(t),
            uo(),
            l = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192),
            l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ue(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t),
            n = t.updateQueue,
            n !== null && Ir(t, n.retryQueue),
            n = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
            l = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
            l !== n && (t.flags |= 2048),
            e !== null && X(Aa),
            null;
        case 24:
            return n = null,
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            On($e),
            Ue(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(r(156, t.tag))
    }
    function Cm(e, t) {
        switch (ks(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return On($e),
            Bn(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return cr(t),
            null;
        case 13:
            if (An(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(r(340));
                el()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return X(ke),
            null;
        case 4:
            return Bn(),
            null;
        case 10:
            return On(t.type),
            null;
        case 22:
        case 23:
            return An(t),
            uo(),
            e !== null && X(Aa),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return On($e),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function s0(e, t) {
        switch (ks(t),
        t.tag) {
        case 3:
            On($e),
            Bn();
            break;
        case 26:
        case 27:
        case 5:
            cr(t);
            break;
        case 4:
            Bn();
            break;
        case 13:
            An(t);
            break;
        case 19:
            X(ke);
            break;
        case 10:
            On(t.type);
            break;
        case 22:
        case 23:
            An(t),
            uo(),
            e !== null && X(Aa);
            break;
        case 24:
            On($e)
        }
    }
    function ml(e, t) {
        try {
            var n = t.updateQueue
              , l = n !== null ? n.lastEffect : null;
            if (l !== null) {
                var s = l.next;
                n = s;
                do {
                    if ((n.tag & e) === e) {
                        l = void 0;
                        var c = n.create
                          , h = n.inst;
                        l = c(),
                        h.destroy = l
                    }
                    n = n.next
                } while (n !== s)
            }
        } catch (m) {
            Ne(t, t.return, m)
        }
    }
    function Qn(e, t, n) {
        try {
            var l = t.updateQueue
              , s = l !== null ? l.lastEffect : null;
            if (s !== null) {
                var c = s.next;
                l = c;
                do {
                    if ((l.tag & e) === e) {
                        var h = l.inst
                          , m = h.destroy;
                        if (m !== void 0) {
                            h.destroy = void 0,
                            s = t;
                            var b = n
                              , R = m;
                            try {
                                R()
                            } catch (j) {
                                Ne(s, b, j)
                            }
                        }
                    }
                    l = l.next
                } while (l !== c)
            }
        } catch (j) {
            Ne(t, t.return, j)
        }
    }
    function o0(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var n = e.stateNode;
            try {
                Fd(t, n)
            } catch (l) {
                Ne(e, e.return, l)
            }
        }
    }
    function c0(e, t, n) {
        n.props = Ra(e.type, e.memoizedProps),
        n.state = e.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (l) {
            Ne(e, t, l)
        }
    }
    function yl(e, t) {
        try {
            var n = e.ref;
            if (n !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var l = e.stateNode;
                    break;
                case 30:
                    l = e.stateNode;
                    break;
                default:
                    l = e.stateNode
                }
                typeof n == "function" ? e.refCleanup = n(l) : n.current = l
            }
        } catch (s) {
            Ne(e, t, s)
        }
    }
    function an(e, t) {
        var n = e.ref
          , l = e.refCleanup;
        if (n !== null)
            if (typeof l == "function")
                try {
                    l()
                } catch (s) {
                    Ne(e, t, s)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof n == "function")
                try {
                    n(null)
                } catch (s) {
                    Ne(e, t, s)
                }
            else
                n.current = null
    }
    function f0(e) {
        var t = e.type
          , n = e.memoizedProps
          , l = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                n.autoFocus && l.focus();
                break e;
            case "img":
                n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet)
            }
        } catch (s) {
            Ne(e, e.return, s)
        }
    }
    function Lo(e, t, n) {
        try {
            var l = e.stateNode;
            Im(l, e.type, n, t),
            l[ct] = t
        } catch (s) {
            Ne(e, e.return, s)
        }
    }
    function d0(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && na(e.type) || e.tag === 4
    }
    function Bo(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || d0(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && na(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function Ho(e, t, n) {
        var l = e.tag;
        if (l === 5 || l === 6)
            e = e.stateNode,
            t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n,
            t.appendChild(e),
            n = n._reactRootContainer,
            n != null || t.onclick !== null || (t.onclick = fu));
        else if (l !== 4 && (l === 27 && na(e.type) && (n = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (Ho(e, t, n),
            e = e.sibling; e !== null; )
                Ho(e, t, n),
                e = e.sibling
    }
    function eu(e, t, n) {
        var l = e.tag;
        if (l === 5 || l === 6)
            e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (l !== 4 && (l === 27 && na(e.type) && (n = e.stateNode),
        e = e.child,
        e !== null))
            for (eu(e, t, n),
            e = e.sibling; e !== null; )
                eu(e, t, n),
                e = e.sibling
    }
    function h0(e) {
        var t = e.stateNode
          , n = e.memoizedProps;
        try {
            for (var l = e.type, s = t.attributes; s.length; )
                t.removeAttributeNode(s[0]);
            nt(t, l, n),
            t[it] = e,
            t[ct] = n
        } catch (c) {
            Ne(e, e.return, c)
        }
    }
    var xn = !1
      , Ge = !1
      , Vo = !1
      , g0 = typeof WeakSet == "function" ? WeakSet : Set
      , We = null;
    function jm(e, t) {
        if (e = e.containerInfo,
        oc = yu,
        e = Td(e),
        Ls(e)) {
            if ("selectionStart"in e)
                var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    n = (n = e.ownerDocument) && n.defaultView || window;
                    var l = n.getSelection && n.getSelection();
                    if (l && l.rangeCount !== 0) {
                        n = l.anchorNode;
                        var s = l.anchorOffset
                          , c = l.focusNode;
                        l = l.focusOffset;
                        try {
                            n.nodeType,
                            c.nodeType
                        } catch {
                            n = null;
                            break e
                        }
                        var h = 0
                          , m = -1
                          , b = -1
                          , R = 0
                          , j = 0
                          , V = e
                          , x = null;
                        t: for (; ; ) {
                            for (var w; V !== n || s !== 0 && V.nodeType !== 3 || (m = h + s),
                            V !== c || l !== 0 && V.nodeType !== 3 || (b = h + l),
                            V.nodeType === 3 && (h += V.nodeValue.length),
                            (w = V.firstChild) !== null; )
                                x = V,
                                V = w;
                            for (; ; ) {
                                if (V === e)
                                    break t;
                                if (x === n && ++R === s && (m = h),
                                x === c && ++j === l && (b = h),
                                (w = V.nextSibling) !== null)
                                    break;
                                V = x,
                                x = V.parentNode
                            }
                            V = w
                        }
                        n = m === -1 || b === -1 ? null : {
                            start: m,
                            end: b
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (cc = {
            focusedElem: e,
            selectionRange: n
        },
        yu = !1,
        We = t; We !== null; )
            if (t = We,
            e = t.child,
            (t.subtreeFlags & 1024) !== 0 && e !== null)
                e.return = t,
                We = e;
            else
                for (; We !== null; ) {
                    switch (t = We,
                    c = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && c !== null) {
                            e = void 0,
                            n = t,
                            s = c.memoizedProps,
                            c = c.memoizedState,
                            l = n.stateNode;
                            try {
                                var ne = Ra(n.type, s, n.elementType === n.type);
                                e = l.getSnapshotBeforeUpdate(ne, c),
                                l.__reactInternalSnapshotBeforeUpdate = e
                            } catch (I) {
                                Ne(n, n.return, I)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            n = e.nodeType,
                            n === 9)
                                hc(e);
                            else if (n === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    hc(e);
                                    break;
                                default:
                                    e.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0)
                            throw Error(r(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        We = e;
                        break
                    }
                    We = t.return
                }
    }
    function v0(e, t, n) {
        var l = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
            Jn(e, n),
            l & 4 && ml(5, n);
            break;
        case 1:
            if (Jn(e, n),
            l & 4)
                if (e = n.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (h) {
                        Ne(n, n.return, h)
                    }
                else {
                    var s = Ra(n.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (h) {
                        Ne(n, n.return, h)
                    }
                }
            l & 64 && o0(n),
            l & 512 && yl(n, n.return);
            break;
        case 3:
            if (Jn(e, n),
            l & 64 && (e = n.updateQueue,
            e !== null)) {
                if (t = null,
                n.child !== null)
                    switch (n.child.tag) {
                    case 27:
                    case 5:
                        t = n.child.stateNode;
                        break;
                    case 1:
                        t = n.child.stateNode
                    }
                try {
                    Fd(e, t)
                } catch (h) {
                    Ne(n, n.return, h)
                }
            }
            break;
        case 27:
            t === null && l & 4 && h0(n);
        case 26:
        case 5:
            Jn(e, n),
            t === null && l & 4 && f0(n),
            l & 512 && yl(n, n.return);
            break;
        case 12:
            Jn(e, n);
            break;
        case 13:
            Jn(e, n),
            l & 4 && y0(e, n),
            l & 64 && (e = n.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (n = Ym.bind(null, n),
            ry(e, n))));
            break;
        case 22:
            if (l = n.memoizedState !== null || xn,
            !l) {
                t = t !== null && t.memoizedState !== null || Ge,
                s = xn;
                var c = Ge;
                xn = l,
                (Ge = t) && !c ? Fn(e, n, (n.subtreeFlags & 8772) !== 0) : Jn(e, n),
                xn = s,
                Ge = c
            }
            break;
        case 30:
            break;
        default:
            Jn(e, n)
        }
    }
    function p0(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        p0(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && ms(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var ze = null
      , ht = !1;
    function wn(e, t, n) {
        for (n = n.child; n !== null; )
            m0(e, t, n),
            n = n.sibling
    }
    function m0(e, t, n) {
        if (pt && typeof pt.onCommitFiberUnmount == "function")
            try {
                pt.onCommitFiberUnmount(Vi, n)
            } catch {}
        switch (n.tag) {
        case 26:
            Ge || an(n, t),
            wn(e, t, n),
            n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode,
            n.parentNode.removeChild(n));
            break;
        case 27:
            Ge || an(n, t);
            var l = ze
              , s = ht;
            na(n.type) && (ze = n.stateNode,
            ht = !1),
            wn(e, t, n),
            xl(n.stateNode),
            ze = l,
            ht = s;
            break;
        case 5:
            Ge || an(n, t);
        case 6:
            if (l = ze,
            s = ht,
            ze = null,
            wn(e, t, n),
            ze = l,
            ht = s,
            ze !== null)
                if (ht)
                    try {
                        (ze.nodeType === 9 ? ze.body : ze.nodeName === "HTML" ? ze.ownerDocument.body : ze).removeChild(n.stateNode)
                    } catch (c) {
                        Ne(n, t, c)
                    }
                else
                    try {
                        ze.removeChild(n.stateNode)
                    } catch (c) {
                        Ne(n, t, c)
                    }
            break;
        case 18:
            ze !== null && (ht ? (e = ze,
            l1(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode),
            Ul(e)) : l1(ze, n.stateNode));
            break;
        case 4:
            l = ze,
            s = ht,
            ze = n.stateNode.containerInfo,
            ht = !0,
            wn(e, t, n),
            ze = l,
            ht = s;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Ge || Qn(2, n, t),
            Ge || Qn(4, n, t),
            wn(e, t, n);
            break;
        case 1:
            Ge || (an(n, t),
            l = n.stateNode,
            typeof l.componentWillUnmount == "function" && c0(n, t, l)),
            wn(e, t, n);
            break;
        case 21:
            wn(e, t, n);
            break;
        case 22:
            Ge = (l = Ge) || n.memoizedState !== null,
            wn(e, t, n),
            Ge = l;
            break;
        default:
            wn(e, t, n)
        }
    }
    function y0(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                Ul(e)
            } catch (n) {
                Ne(t, t.return, n)
            }
    }
    function zm(e) {
        switch (e.tag) {
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new g0),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new g0),
            t;
        default:
            throw Error(r(435, e.tag))
        }
    }
    function qo(e, t) {
        var n = zm(e);
        t.forEach(function(l) {
            var s = Km.bind(null, e, l);
            n.has(l) || (n.add(l),
            l.then(s, s))
        })
    }
    function bt(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var l = 0; l < n.length; l++) {
                var s = n[l]
                  , c = e
                  , h = t
                  , m = h;
                e: for (; m !== null; ) {
                    switch (m.tag) {
                    case 27:
                        if (na(m.type)) {
                            ze = m.stateNode,
                            ht = !1;
                            break e
                        }
                        break;
                    case 5:
                        ze = m.stateNode,
                        ht = !1;
                        break e;
                    case 3:
                    case 4:
                        ze = m.stateNode.containerInfo,
                        ht = !0;
                        break e
                    }
                    m = m.return
                }
                if (ze === null)
                    throw Error(r(160));
                m0(c, h, s),
                ze = null,
                ht = !1,
                c = s.alternate,
                c !== null && (c.return = null),
                s.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null; )
                _0(t, e),
                t = t.sibling
    }
    var Zt = null;
    function _0(e, t) {
        var n = e.alternate
          , l = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            bt(t, e),
            St(e),
            l & 4 && (Qn(3, e, e.return),
            ml(3, e),
            Qn(5, e, e.return));
            break;
        case 1:
            bt(t, e),
            St(e),
            l & 512 && (Ge || n === null || an(n, n.return)),
            l & 64 && xn && (e = e.updateQueue,
            e !== null && (l = e.callbacks,
            l !== null && (n = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
            break;
        case 26:
            var s = Zt;
            if (bt(t, e),
            St(e),
            l & 512 && (Ge || n === null || an(n, n.return)),
            l & 4) {
                var c = n !== null ? n.memoizedState : null;
                if (l = e.memoizedState,
                n === null)
                    if (l === null)
                        if (e.stateNode === null) {
                            e: {
                                l = e.type,
                                n = e.memoizedProps,
                                s = s.ownerDocument || s;
                                t: switch (l) {
                                case "title":
                                    c = s.getElementsByTagName("title")[0],
                                    (!c || c[Yi] || c[it] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = s.createElement(l),
                                    s.head.insertBefore(c, s.querySelector("head > title"))),
                                    nt(c, l, n),
                                    c[it] = e,
                                    Fe(c),
                                    l = c;
                                    break e;
                                case "link":
                                    var h = h1("link", "href", s).get(l + (n.href || ""));
                                    if (h) {
                                        for (var m = 0; m < h.length; m++)
                                            if (c = h[m],
                                            c.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && c.getAttribute("rel") === (n.rel == null ? null : n.rel) && c.getAttribute("title") === (n.title == null ? null : n.title) && c.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                h.splice(m, 1);
                                                break t
                                            }
                                    }
                                    c = s.createElement(l),
                                    nt(c, l, n),
                                    s.head.appendChild(c);
                                    break;
                                case "meta":
                                    if (h = h1("meta", "content", s).get(l + (n.content || ""))) {
                                        for (m = 0; m < h.length; m++)
                                            if (c = h[m],
                                            c.getAttribute("content") === (n.content == null ? null : "" + n.content) && c.getAttribute("name") === (n.name == null ? null : n.name) && c.getAttribute("property") === (n.property == null ? null : n.property) && c.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && c.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                h.splice(m, 1);
                                                break t
                                            }
                                    }
                                    c = s.createElement(l),
                                    nt(c, l, n),
                                    s.head.appendChild(c);
                                    break;
                                default:
                                    throw Error(r(468, l))
                                }
                                c[it] = e,
                                Fe(c),
                                l = c
                            }
                            e.stateNode = l
                        } else
                            g1(s, e.type, e.stateNode);
                    else
                        e.stateNode = d1(s, l, e.memoizedProps);
                else
                    c !== l ? (c === null ? n.stateNode !== null && (n = n.stateNode,
                    n.parentNode.removeChild(n)) : c.count--,
                    l === null ? g1(s, e.type, e.stateNode) : d1(s, l, e.memoizedProps)) : l === null && e.stateNode !== null && Lo(e, e.memoizedProps, n.memoizedProps)
            }
            break;
        case 27:
            bt(t, e),
            St(e),
            l & 512 && (Ge || n === null || an(n, n.return)),
            n !== null && l & 4 && Lo(e, e.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if (bt(t, e),
            St(e),
            l & 512 && (Ge || n === null || an(n, n.return)),
            e.flags & 32) {
                s = e.stateNode;
                try {
                    Qa(s, "")
                } catch (w) {
                    Ne(e, e.return, w)
                }
            }
            l & 4 && e.stateNode != null && (s = e.memoizedProps,
            Lo(e, s, n !== null ? n.memoizedProps : s)),
            l & 1024 && (Vo = !0);
            break;
        case 6:
            if (bt(t, e),
            St(e),
            l & 4) {
                if (e.stateNode === null)
                    throw Error(r(162));
                l = e.memoizedProps,
                n = e.stateNode;
                try {
                    n.nodeValue = l
                } catch (w) {
                    Ne(e, e.return, w)
                }
            }
            break;
        case 3:
            if (vu = null,
            s = Zt,
            Zt = hu(t.containerInfo),
            bt(t, e),
            Zt = s,
            St(e),
            l & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    Ul(t.containerInfo)
                } catch (w) {
                    Ne(e, e.return, w)
                }
            Vo && (Vo = !1,
            b0(e));
            break;
        case 4:
            l = Zt,
            Zt = hu(e.stateNode.containerInfo),
            bt(t, e),
            St(e),
            Zt = l;
            break;
        case 12:
            bt(t, e),
            St(e);
            break;
        case 13:
            bt(t, e),
            St(e),
            e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && ($o = en()),
            l & 4 && (l = e.updateQueue,
            l !== null && (e.updateQueue = null,
            qo(e, l)));
            break;
        case 22:
            s = e.memoizedState !== null;
            var b = n !== null && n.memoizedState !== null
              , R = xn
              , j = Ge;
            if (xn = R || s,
            Ge = j || b,
            bt(t, e),
            Ge = j,
            xn = R,
            St(e),
            l & 8192)
                e: for (t = e.stateNode,
                t._visibility = s ? t._visibility & -2 : t._visibility | 1,
                s && (n === null || b || xn || Ge || xa(e)),
                n = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (n === null) {
                            b = n = t;
                            try {
                                if (c = b.stateNode,
                                s)
                                    h = c.style,
                                    typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none";
                                else {
                                    m = b.stateNode;
                                    var V = b.memoizedProps.style
                                      , x = V != null && V.hasOwnProperty("display") ? V.display : null;
                                    m.style.display = x == null || typeof x == "boolean" ? "" : ("" + x).trim()
                                }
                            } catch (w) {
                                Ne(b, b.return, w)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (n === null) {
                            b = t;
                            try {
                                b.stateNode.nodeValue = s ? "" : b.memoizedProps
                            } catch (w) {
                                Ne(b, b.return, w)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break e;
                        n === t && (n = null),
                        t = t.return
                    }
                    n === t && (n = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            l & 4 && (l = e.updateQueue,
            l !== null && (n = l.retryQueue,
            n !== null && (l.retryQueue = null,
            qo(e, n))));
            break;
        case 19:
            bt(t, e),
            St(e),
            l & 4 && (l = e.updateQueue,
            l !== null && (e.updateQueue = null,
            qo(e, l)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            bt(t, e),
            St(e)
        }
    }
    function St(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var n, l = e.return; l !== null; ) {
                    if (d0(l)) {
                        n = l;
                        break
                    }
                    l = l.return
                }
                if (n == null)
                    throw Error(r(160));
                switch (n.tag) {
                case 27:
                    var s = n.stateNode
                      , c = Bo(e);
                    eu(e, c, s);
                    break;
                case 5:
                    var h = n.stateNode;
                    n.flags & 32 && (Qa(h, ""),
                    n.flags &= -33);
                    var m = Bo(e);
                    eu(e, m, h);
                    break;
                case 3:
                case 4:
                    var b = n.stateNode.containerInfo
                      , R = Bo(e);
                    Ho(e, R, b);
                    break;
                default:
                    throw Error(r(161))
                }
            } catch (j) {
                Ne(e, e.return, j)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function b0(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                b0(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function Jn(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                v0(e, t.alternate, t),
                t = t.sibling
    }
    function xa(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Qn(4, t, t.return),
                xa(t);
                break;
            case 1:
                an(t, t.return);
                var n = t.stateNode;
                typeof n.componentWillUnmount == "function" && c0(t, t.return, n),
                xa(t);
                break;
            case 27:
                xl(t.stateNode);
            case 26:
            case 5:
                an(t, t.return),
                xa(t);
                break;
            case 22:
                t.memoizedState === null && xa(t);
                break;
            case 30:
                xa(t);
                break;
            default:
                xa(t)
            }
            e = e.sibling
        }
    }
    function Fn(e, t, n) {
        for (n = n && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var l = t.alternate
              , s = e
              , c = t
              , h = c.flags;
            switch (c.tag) {
            case 0:
            case 11:
            case 15:
                Fn(s, c, n),
                ml(4, c);
                break;
            case 1:
                if (Fn(s, c, n),
                l = c,
                s = l.stateNode,
                typeof s.componentDidMount == "function")
                    try {
                        s.componentDidMount()
                    } catch (R) {
                        Ne(l, l.return, R)
                    }
                if (l = c,
                s = l.updateQueue,
                s !== null) {
                    var m = l.stateNode;
                    try {
                        var b = s.shared.hiddenCallbacks;
                        if (b !== null)
                            for (s.shared.hiddenCallbacks = null,
                            s = 0; s < b.length; s++)
                                Jd(b[s], m)
                    } catch (R) {
                        Ne(l, l.return, R)
                    }
                }
                n && h & 64 && o0(c),
                yl(c, c.return);
                break;
            case 27:
                h0(c);
            case 26:
            case 5:
                Fn(s, c, n),
                n && l === null && h & 4 && f0(c),
                yl(c, c.return);
                break;
            case 12:
                Fn(s, c, n);
                break;
            case 13:
                Fn(s, c, n),
                n && h & 4 && y0(s, c);
                break;
            case 22:
                c.memoizedState === null && Fn(s, c, n),
                yl(c, c.return);
                break;
            case 30:
                break;
            default:
                Fn(s, c, n)
            }
            t = t.sibling
        }
    }
    function Go(e, t) {
        var n = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++,
        n != null && al(n))
    }
    function Yo(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && al(e))
    }
    function ln(e, t, n, l) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                S0(e, t, n, l),
                t = t.sibling
    }
    function S0(e, t, n, l) {
        var s = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            ln(e, t, n, l),
            s & 2048 && ml(9, t);
            break;
        case 1:
            ln(e, t, n, l);
            break;
        case 3:
            ln(e, t, n, l),
            s & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && al(e)));
            break;
        case 12:
            if (s & 2048) {
                ln(e, t, n, l),
                e = t.stateNode;
                try {
                    var c = t.memoizedProps
                      , h = c.id
                      , m = c.onPostCommit;
                    typeof m == "function" && m(h, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (b) {
                    Ne(t, t.return, b)
                }
            } else
                ln(e, t, n, l);
            break;
        case 13:
            ln(e, t, n, l);
            break;
        case 23:
            break;
        case 22:
            c = t.stateNode,
            h = t.alternate,
            t.memoizedState !== null ? c._visibility & 2 ? ln(e, t, n, l) : _l(e, t) : c._visibility & 2 ? ln(e, t, n, l) : (c._visibility |= 2,
            hi(e, t, n, l, (t.subtreeFlags & 10256) !== 0)),
            s & 2048 && Go(h, t);
            break;
        case 24:
            ln(e, t, n, l),
            s & 2048 && Yo(t.alternate, t);
            break;
        default:
            ln(e, t, n, l)
        }
    }
    function hi(e, t, n, l, s) {
        for (s = s && (t.subtreeFlags & 10256) !== 0,
        t = t.child; t !== null; ) {
            var c = e
              , h = t
              , m = n
              , b = l
              , R = h.flags;
            switch (h.tag) {
            case 0:
            case 11:
            case 15:
                hi(c, h, m, b, s),
                ml(8, h);
                break;
            case 23:
                break;
            case 22:
                var j = h.stateNode;
                h.memoizedState !== null ? j._visibility & 2 ? hi(c, h, m, b, s) : _l(c, h) : (j._visibility |= 2,
                hi(c, h, m, b, s)),
                s && R & 2048 && Go(h.alternate, h);
                break;
            case 24:
                hi(c, h, m, b, s),
                s && R & 2048 && Yo(h.alternate, h);
                break;
            default:
                hi(c, h, m, b, s)
            }
            t = t.sibling
        }
    }
    function _l(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var n = e
                  , l = t
                  , s = l.flags;
                switch (l.tag) {
                case 22:
                    _l(n, l),
                    s & 2048 && Go(l.alternate, l);
                    break;
                case 24:
                    _l(n, l),
                    s & 2048 && Yo(l.alternate, l);
                    break;
                default:
                    _l(n, l)
                }
                t = t.sibling
            }
    }
    var bl = 8192;
    function gi(e) {
        if (e.subtreeFlags & bl)
            for (e = e.child; e !== null; )
                O0(e),
                e = e.sibling
    }
    function O0(e) {
        switch (e.tag) {
        case 26:
            gi(e),
            e.flags & bl && e.memoizedState !== null && _y(Zt, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            gi(e);
            break;
        case 3:
        case 4:
            var t = Zt;
            Zt = hu(e.stateNode.containerInfo),
            gi(e),
            Zt = t;
            break;
        case 22:
            e.memoizedState === null && (t = e.alternate,
            t !== null && t.memoizedState !== null ? (t = bl,
            bl = 16777216,
            gi(e),
            bl = t) : gi(e));
            break;
        default:
            gi(e)
        }
    }
    function E0(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function Sl(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var l = t[n];
                    We = l,
                    T0(l, e)
                }
            E0(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                A0(e),
                e = e.sibling
    }
    function A0(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Sl(e),
            e.flags & 2048 && Qn(9, e, e.return);
            break;
        case 3:
            Sl(e);
            break;
        case 12:
            Sl(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            tu(e)) : Sl(e);
            break;
        default:
            Sl(e)
        }
    }
    function tu(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var l = t[n];
                    We = l,
                    T0(l, e)
                }
            E0(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                Qn(8, t, t.return),
                tu(t);
                break;
            case 22:
                n = t.stateNode,
                n._visibility & 2 && (n._visibility &= -3,
                tu(t));
                break;
            default:
                tu(t)
            }
            e = e.sibling
        }
    }
    function T0(e, t) {
        for (; We !== null; ) {
            var n = We;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Qn(8, n, t);
                break;
            case 23:
            case 22:
                if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                    var l = n.memoizedState.cachePool.pool;
                    l != null && l.refCount++
                }
                break;
            case 24:
                al(n.memoizedState.cache)
            }
            if (l = n.child,
            l !== null)
                l.return = n,
                We = l;
            else
                e: for (n = e; We !== null; ) {
                    l = We;
                    var s = l.sibling
                      , c = l.return;
                    if (p0(l),
                    l === n) {
                        We = null;
                        break e
                    }
                    if (s !== null) {
                        s.return = c,
                        We = s;
                        break e
                    }
                    We = c
                }
        }
    }
    var Um = {
        getCacheForType: function(e) {
            var t = lt($e)
              , n = t.data.get(e);
            return n === void 0 && (n = e(),
            t.data.set(e, n)),
            n
        }
    }
      , Lm = typeof WeakMap == "function" ? WeakMap : Map
      , Ae = 0
      , Me = null
      , he = null
      , me = 0
      , Te = 0
      , Ot = null
      , Pn = !1
      , vi = !1
      , Ko = !1
      , Nn = 0
      , Be = 0
      , Wn = 0
      , wa = 0
      , Xo = 0
      , Ut = 0
      , pi = 0
      , Ol = null
      , gt = null
      , Zo = !1
      , $o = 0
      , nu = 1 / 0
      , au = null
      , In = null
      , tt = 0
      , ea = null
      , mi = null
      , yi = 0
      , ko = 0
      , Qo = null
      , R0 = null
      , El = 0
      , Jo = null;
    function Et() {
        if ((Ae & 2) !== 0 && me !== 0)
            return me & -me;
        if (D.T !== null) {
            var e = li;
            return e !== 0 ? e : nc()
        }
        return Yf()
    }
    function x0() {
        Ut === 0 && (Ut = (me & 536870912) === 0 || Ee ? Hf() : 536870912);
        var e = zt.current;
        return e !== null && (e.flags |= 32),
        Ut
    }
    function At(e, t, n) {
        (e === Me && (Te === 2 || Te === 9) || e.cancelPendingCommit !== null) && (_i(e, 0),
        ta(e, me, Ut, !1)),
        Gi(e, n),
        ((Ae & 2) === 0 || e !== Me) && (e === Me && ((Ae & 2) === 0 && (wa |= n),
        Be === 4 && ta(e, me, Ut, !1)),
        rn(e))
    }
    function w0(e, t, n) {
        if ((Ae & 6) !== 0)
            throw Error(r(327));
        var l = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || qi(e, t)
          , s = l ? Vm(e, t) : Wo(e, t, !0)
          , c = l;
        do {
            if (s === 0) {
                vi && !l && ta(e, t, 0, !1);
                break
            } else {
                if (n = e.current.alternate,
                c && !Bm(n)) {
                    s = Wo(e, t, !1),
                    c = !1;
                    continue
                }
                if (s === 2) {
                    if (c = t,
                    e.errorRecoveryDisabledLanes & c)
                        var h = 0;
                    else
                        h = e.pendingLanes & -536870913,
                        h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
                    if (h !== 0) {
                        t = h;
                        e: {
                            var m = e;
                            s = Ol;
                            var b = m.current.memoizedState.isDehydrated;
                            if (b && (_i(m, h).flags |= 256),
                            h = Wo(m, h, !1),
                            h !== 2) {
                                if (Ko && !b) {
                                    m.errorRecoveryDisabledLanes |= c,
                                    wa |= c,
                                    s = 4;
                                    break e
                                }
                                c = gt,
                                gt = s,
                                c !== null && (gt === null ? gt = c : gt.push.apply(gt, c))
                            }
                            s = h
                        }
                        if (c = !1,
                        s !== 2)
                            continue
                    }
                }
                if (s === 1) {
                    _i(e, 0),
                    ta(e, t, 0, !0);
                    break
                }
                e: {
                    switch (l = e,
                    c = s,
                    c) {
                    case 0:
                    case 1:
                        throw Error(r(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        ta(l, t, Ut, !Pn);
                        break e;
                    case 2:
                        gt = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(r(329))
                    }
                    if ((t & 62914560) === t && (s = $o + 300 - en(),
                    10 < s)) {
                        if (ta(l, t, Ut, !Pn),
                        gr(l, 0, !0) !== 0)
                            break e;
                        l.timeoutHandle = a1(N0.bind(null, l, n, gt, au, Zo, t, Ut, wa, pi, Pn, c, 2, -0, 0), s);
                        break e
                    }
                    N0(l, n, gt, au, Zo, t, Ut, wa, pi, Pn, c, 0, -0, 0)
                }
            }
            break
        } while (!0);
        rn(e)
    }
    function N0(e, t, n, l, s, c, h, m, b, R, j, V, x, w) {
        if (e.timeoutHandle = -1,
        V = t.subtreeFlags,
        (V & 8192 || (V & 16785408) === 16785408) && (Ml = {
            stylesheets: null,
            count: 0,
            unsuspend: yy
        },
        O0(t),
        V = by(),
        V !== null)) {
            e.cancelPendingCommit = V(L0.bind(null, e, t, c, n, l, s, h, m, b, j, 1, x, w)),
            ta(e, c, h, !R);
            return
        }
        L0(e, t, c, n, l, s, h, m, b)
    }
    function Bm(e) {
        for (var t = e; ; ) {
            var n = t.tag;
            if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue,
            n !== null && (n = n.stores,
            n !== null)))
                for (var l = 0; l < n.length; l++) {
                    var s = n[l]
                      , c = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!yt(c(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
                n.return = t,
                t = n;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function ta(e, t, n, l) {
        t &= ~Xo,
        t &= ~wa,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        l && (e.warmLanes |= t),
        l = e.expirationTimes;
        for (var s = t; 0 < s; ) {
            var c = 31 - mt(s)
              , h = 1 << c;
            l[c] = -1,
            s &= ~h
        }
        n !== 0 && qf(e, n, t)
    }
    function iu() {
        return (Ae & 6) === 0 ? (Al(0),
        !1) : !0
    }
    function Fo() {
        if (he !== null) {
            if (Te === 0)
                var e = he.return;
            else
                e = he,
                Sn = Oa = null,
                ho(e),
                fi = null,
                gl = 0,
                e = he;
            for (; e !== null; )
                s0(e.alternate, e),
                e = e.return;
            he = null
        }
    }
    function _i(e, t) {
        var n = e.timeoutHandle;
        n !== -1 && (e.timeoutHandle = -1,
        ty(n)),
        n = e.cancelPendingCommit,
        n !== null && (e.cancelPendingCommit = null,
        n()),
        Fo(),
        Me = e,
        he = n = yn(e.current, null),
        me = t,
        Te = 0,
        Ot = null,
        Pn = !1,
        vi = qi(e, t),
        Ko = !1,
        pi = Ut = Xo = wa = Wn = Be = 0,
        gt = Ol = null,
        Zo = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var l = e.entangledLanes;
        if (l !== 0)
            for (e = e.entanglements,
            l &= t; 0 < l; ) {
                var s = 31 - mt(l)
                  , c = 1 << s;
                t |= e[s],
                l &= ~c
            }
        return Nn = t,
        Rr(),
        n
    }
    function M0(e, t) {
        fe = null,
        D.H = Zr,
        t === ll || t === Ur ? (t = kd(),
        Te = 3) : t === Xd ? (t = kd(),
        Te = 4) : Te = t === Qh ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        Ot = t,
        he === null && (Be = 1,
        Fr(e, Mt(t, e.current)))
    }
    function D0() {
        var e = D.H;
        return D.H = Zr,
        e === null ? Zr : e
    }
    function C0() {
        var e = D.A;
        return D.A = Um,
        e
    }
    function Po() {
        Be = 4,
        Pn || (me & 4194048) !== me && zt.current !== null || (vi = !0),
        (Wn & 134217727) === 0 && (wa & 134217727) === 0 || Me === null || ta(Me, me, Ut, !1)
    }
    function Wo(e, t, n) {
        var l = Ae;
        Ae |= 2;
        var s = D0()
          , c = C0();
        (Me !== e || me !== t) && (au = null,
        _i(e, t)),
        t = !1;
        var h = Be;
        e: do
            try {
                if (Te !== 0 && he !== null) {
                    var m = he
                      , b = Ot;
                    switch (Te) {
                    case 8:
                        Fo(),
                        h = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        zt.current === null && (t = !0);
                        var R = Te;
                        if (Te = 0,
                        Ot = null,
                        bi(e, m, b, R),
                        n && vi) {
                            h = 0;
                            break e
                        }
                        break;
                    default:
                        R = Te,
                        Te = 0,
                        Ot = null,
                        bi(e, m, b, R)
                    }
                }
                Hm(),
                h = Be;
                break
            } catch (j) {
                M0(e, j)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        Sn = Oa = null,
        Ae = l,
        D.H = s,
        D.A = c,
        he === null && (Me = null,
        me = 0,
        Rr()),
        h
    }
    function Hm() {
        for (; he !== null; )
            j0(he)
    }
    function Vm(e, t) {
        var n = Ae;
        Ae |= 2;
        var l = D0()
          , s = C0();
        Me !== e || me !== t ? (au = null,
        nu = en() + 500,
        _i(e, t)) : vi = qi(e, t);
        e: do
            try {
                if (Te !== 0 && he !== null) {
                    t = he;
                    var c = Ot;
                    t: switch (Te) {
                    case 1:
                        Te = 0,
                        Ot = null,
                        bi(e, t, c, 1);
                        break;
                    case 2:
                    case 9:
                        if (Zd(c)) {
                            Te = 0,
                            Ot = null,
                            z0(t);
                            break
                        }
                        t = function() {
                            Te !== 2 && Te !== 9 || Me !== e || (Te = 7),
                            rn(e)
                        }
                        ,
                        c.then(t, t);
                        break e;
                    case 3:
                        Te = 7;
                        break e;
                    case 4:
                        Te = 5;
                        break e;
                    case 7:
                        Zd(c) ? (Te = 0,
                        Ot = null,
                        z0(t)) : (Te = 0,
                        Ot = null,
                        bi(e, t, c, 7));
                        break;
                    case 5:
                        var h = null;
                        switch (he.tag) {
                        case 26:
                            h = he.memoizedState;
                        case 5:
                        case 27:
                            var m = he;
                            if (!h || v1(h)) {
                                Te = 0,
                                Ot = null;
                                var b = m.sibling;
                                if (b !== null)
                                    he = b;
                                else {
                                    var R = m.return;
                                    R !== null ? (he = R,
                                    lu(R)) : he = null
                                }
                                break t
                            }
                        }
                        Te = 0,
                        Ot = null,
                        bi(e, t, c, 5);
                        break;
                    case 6:
                        Te = 0,
                        Ot = null,
                        bi(e, t, c, 6);
                        break;
                    case 8:
                        Fo(),
                        Be = 6;
                        break e;
                    default:
                        throw Error(r(462))
                    }
                }
                qm();
                break
            } catch (j) {
                M0(e, j)
            }
        while (!0);
        return Sn = Oa = null,
        D.H = l,
        D.A = s,
        Ae = n,
        he !== null ? 0 : (Me = null,
        me = 0,
        Rr(),
        Be)
    }
    function qm() {
        for (; he !== null && !sp(); )
            j0(he)
    }
    function j0(e) {
        var t = r0(e.alternate, e, Nn);
        e.memoizedProps = e.pendingProps,
        t === null ? lu(e) : he = t
    }
    function z0(e) {
        var t = e
          , n = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = e0(n, t, t.pendingProps, t.type, void 0, me);
            break;
        case 11:
            t = e0(n, t, t.pendingProps, t.type.render, t.ref, me);
            break;
        case 5:
            ho(t);
        default:
            s0(n, t),
            t = he = Ud(t, Nn),
            t = r0(n, t, Nn)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? lu(e) : he = t
    }
    function bi(e, t, n, l) {
        Sn = Oa = null,
        ho(t),
        fi = null,
        gl = 0;
        var s = t.return;
        try {
            if (Nm(e, s, t, n, me)) {
                Be = 1,
                Fr(e, Mt(n, e.current)),
                he = null;
                return
            }
        } catch (c) {
            if (s !== null)
                throw he = s,
                c;
            Be = 1,
            Fr(e, Mt(n, e.current)),
            he = null;
            return
        }
        t.flags & 32768 ? (Ee || l === 1 ? e = !0 : vi || (me & 536870912) !== 0 ? e = !1 : (Pn = e = !0,
        (l === 2 || l === 9 || l === 3 || l === 6) && (l = zt.current,
        l !== null && l.tag === 13 && (l.flags |= 16384))),
        U0(t, e)) : lu(t)
    }
    function lu(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                U0(t, Pn);
                return
            }
            e = t.return;
            var n = Dm(t.alternate, t, Nn);
            if (n !== null) {
                he = n;
                return
            }
            if (t = t.sibling,
            t !== null) {
                he = t;
                return
            }
            he = t = e
        } while (t !== null);
        Be === 0 && (Be = 5)
    }
    function U0(e, t) {
        do {
            var n = Cm(e.alternate, e);
            if (n !== null) {
                n.flags &= 32767,
                he = n;
                return
            }
            if (n = e.return,
            n !== null && (n.flags |= 32768,
            n.subtreeFlags = 0,
            n.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                he = e;
                return
            }
            he = e = n
        } while (e !== null);
        Be = 6,
        he = null
    }
    function L0(e, t, n, l, s, c, h, m, b) {
        e.cancelPendingCommit = null;
        do
            ru();
        while (tt !== 0);
        if ((Ae & 6) !== 0)
            throw Error(r(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(r(177));
            if (c = t.lanes | t.childLanes,
            c |= Gs,
            yp(e, n, c, h, m, b),
            e === Me && (he = Me = null,
            me = 0),
            mi = t,
            ea = e,
            yi = n,
            ko = c,
            Qo = s,
            R0 = l,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            Xm(fr, function() {
                return G0(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            l = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || l) {
                l = D.T,
                D.T = null,
                s = G.p,
                G.p = 2,
                h = Ae,
                Ae |= 4;
                try {
                    jm(e, t, n)
                } finally {
                    Ae = h,
                    G.p = s,
                    D.T = l
                }
            }
            tt = 1,
            B0(),
            H0(),
            V0()
        }
    }
    function B0() {
        if (tt === 1) {
            tt = 0;
            var e = ea
              , t = mi
              , n = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || n) {
                n = D.T,
                D.T = null;
                var l = G.p;
                G.p = 2;
                var s = Ae;
                Ae |= 4;
                try {
                    _0(t, e);
                    var c = cc
                      , h = Td(e.containerInfo)
                      , m = c.focusedElem
                      , b = c.selectionRange;
                    if (h !== m && m && m.ownerDocument && Ad(m.ownerDocument.documentElement, m)) {
                        if (b !== null && Ls(m)) {
                            var R = b.start
                              , j = b.end;
                            if (j === void 0 && (j = R),
                            "selectionStart"in m)
                                m.selectionStart = R,
                                m.selectionEnd = Math.min(j, m.value.length);
                            else {
                                var V = m.ownerDocument || document
                                  , x = V && V.defaultView || window;
                                if (x.getSelection) {
                                    var w = x.getSelection()
                                      , ne = m.textContent.length
                                      , I = Math.min(b.start, ne)
                                      , we = b.end === void 0 ? I : Math.min(b.end, ne);
                                    !w.extend && I > we && (h = we,
                                    we = I,
                                    I = h);
                                    var E = Ed(m, I)
                                      , O = Ed(m, we);
                                    if (E && O && (w.rangeCount !== 1 || w.anchorNode !== E.node || w.anchorOffset !== E.offset || w.focusNode !== O.node || w.focusOffset !== O.offset)) {
                                        var A = V.createRange();
                                        A.setStart(E.node, E.offset),
                                        w.removeAllRanges(),
                                        I > we ? (w.addRange(A),
                                        w.extend(O.node, O.offset)) : (A.setEnd(O.node, O.offset),
                                        w.addRange(A))
                                    }
                                }
                            }
                        }
                        for (V = [],
                        w = m; w = w.parentNode; )
                            w.nodeType === 1 && V.push({
                                element: w,
                                left: w.scrollLeft,
                                top: w.scrollTop
                            });
                        for (typeof m.focus == "function" && m.focus(),
                        m = 0; m < V.length; m++) {
                            var z = V[m];
                            z.element.scrollLeft = z.left,
                            z.element.scrollTop = z.top
                        }
                    }
                    yu = !!oc,
                    cc = oc = null
                } finally {
                    Ae = s,
                    G.p = l,
                    D.T = n
                }
            }
            e.current = t,
            tt = 2
        }
    }
    function H0() {
        if (tt === 2) {
            tt = 0;
            var e = ea
              , t = mi
              , n = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || n) {
                n = D.T,
                D.T = null;
                var l = G.p;
                G.p = 2;
                var s = Ae;
                Ae |= 4;
                try {
                    v0(e, t.alternate, t)
                } finally {
                    Ae = s,
                    G.p = l,
                    D.T = n
                }
            }
            tt = 3
        }
    }
    function V0() {
        if (tt === 4 || tt === 3) {
            tt = 0,
            op();
            var e = ea
              , t = mi
              , n = yi
              , l = R0;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? tt = 5 : (tt = 0,
            mi = ea = null,
            q0(e, e.pendingLanes));
            var s = e.pendingLanes;
            if (s === 0 && (In = null),
            vs(n),
            t = t.stateNode,
            pt && typeof pt.onCommitFiberRoot == "function")
                try {
                    pt.onCommitFiberRoot(Vi, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (l !== null) {
                t = D.T,
                s = G.p,
                G.p = 2,
                D.T = null;
                try {
                    for (var c = e.onRecoverableError, h = 0; h < l.length; h++) {
                        var m = l[h];
                        c(m.value, {
                            componentStack: m.stack
                        })
                    }
                } finally {
                    D.T = t,
                    G.p = s
                }
            }
            (yi & 3) !== 0 && ru(),
            rn(e),
            s = e.pendingLanes,
            (n & 4194090) !== 0 && (s & 42) !== 0 ? e === Jo ? El++ : (El = 0,
            Jo = e) : El = 0,
            Al(0)
        }
    }
    function q0(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        al(t)))
    }
    function ru(e) {
        return B0(),
        H0(),
        V0(),
        G0()
    }
    function G0() {
        if (tt !== 5)
            return !1;
        var e = ea
          , t = ko;
        ko = 0;
        var n = vs(yi)
          , l = D.T
          , s = G.p;
        try {
            G.p = 32 > n ? 32 : n,
            D.T = null,
            n = Qo,
            Qo = null;
            var c = ea
              , h = yi;
            if (tt = 0,
            mi = ea = null,
            yi = 0,
            (Ae & 6) !== 0)
                throw Error(r(331));
            var m = Ae;
            if (Ae |= 4,
            A0(c.current),
            S0(c, c.current, h, n),
            Ae = m,
            Al(0, !1),
            pt && typeof pt.onPostCommitFiberRoot == "function")
                try {
                    pt.onPostCommitFiberRoot(Vi, c)
                } catch {}
            return !0
        } finally {
            G.p = s,
            D.T = l,
            q0(e, t)
        }
    }
    function Y0(e, t, n) {
        t = Mt(n, t),
        t = xo(e.stateNode, t, 2),
        e = Xn(e, t, 2),
        e !== null && (Gi(e, 2),
        rn(e))
    }
    function Ne(e, t, n) {
        if (e.tag === 3)
            Y0(e, e, n);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Y0(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var l = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (In === null || !In.has(l))) {
                        e = Mt(n, e),
                        n = $h(2),
                        l = Xn(t, n, 2),
                        l !== null && (kh(n, l, t, e),
                        Gi(l, 2),
                        rn(l));
                        break
                    }
                }
                t = t.return
            }
    }
    function Io(e, t, n) {
        var l = e.pingCache;
        if (l === null) {
            l = e.pingCache = new Lm;
            var s = new Set;
            l.set(t, s)
        } else
            s = l.get(t),
            s === void 0 && (s = new Set,
            l.set(t, s));
        s.has(n) || (Ko = !0,
        s.add(n),
        e = Gm.bind(null, e, t, n),
        t.then(e, e))
    }
    function Gm(e, t, n) {
        var l = e.pingCache;
        l !== null && l.delete(t),
        e.pingedLanes |= e.suspendedLanes & n,
        e.warmLanes &= ~n,
        Me === e && (me & n) === n && (Be === 4 || Be === 3 && (me & 62914560) === me && 300 > en() - $o ? (Ae & 2) === 0 && _i(e, 0) : Xo |= n,
        pi === me && (pi = 0)),
        rn(e)
    }
    function K0(e, t) {
        t === 0 && (t = Vf()),
        e = ti(e, t),
        e !== null && (Gi(e, t),
        rn(e))
    }
    function Ym(e) {
        var t = e.memoizedState
          , n = 0;
        t !== null && (n = t.retryLane),
        K0(e, n)
    }
    function Km(e, t) {
        var n = 0;
        switch (e.tag) {
        case 13:
            var l = e.stateNode
              , s = e.memoizedState;
            s !== null && (n = s.retryLane);
            break;
        case 19:
            l = e.stateNode;
            break;
        case 22:
            l = e.stateNode._retryCache;
            break;
        default:
            throw Error(r(314))
        }
        l !== null && l.delete(t),
        K0(e, n)
    }
    function Xm(e, t) {
        return fs(e, t)
    }
    var uu = null
      , Si = null
      , ec = !1
      , su = !1
      , tc = !1
      , Na = 0;
    function rn(e) {
        e !== Si && e.next === null && (Si === null ? uu = Si = e : Si = Si.next = e),
        su = !0,
        ec || (ec = !0,
        $m())
    }
    function Al(e, t) {
        if (!tc && su) {
            tc = !0;
            do
                for (var n = !1, l = uu; l !== null; ) {
                    if (e !== 0) {
                        var s = l.pendingLanes;
                        if (s === 0)
                            var c = 0;
                        else {
                            var h = l.suspendedLanes
                              , m = l.pingedLanes;
                            c = (1 << 31 - mt(42 | e) + 1) - 1,
                            c &= s & ~(h & ~m),
                            c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0
                        }
                        c !== 0 && (n = !0,
                        k0(l, c))
                    } else
                        c = me,
                        c = gr(l, l === Me ? c : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
                        (c & 3) === 0 || qi(l, c) || (n = !0,
                        k0(l, c));
                    l = l.next
                }
            while (n);
            tc = !1
        }
    }
    function Zm() {
        X0()
    }
    function X0() {
        su = ec = !1;
        var e = 0;
        Na !== 0 && (ey() && (e = Na),
        Na = 0);
        for (var t = en(), n = null, l = uu; l !== null; ) {
            var s = l.next
              , c = Z0(l, t);
            c === 0 ? (l.next = null,
            n === null ? uu = s : n.next = s,
            s === null && (Si = n)) : (n = l,
            (e !== 0 || (c & 3) !== 0) && (su = !0)),
            l = s
        }
        Al(e)
    }
    function Z0(e, t) {
        for (var n = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
            var h = 31 - mt(c)
              , m = 1 << h
              , b = s[h];
            b === -1 ? ((m & n) === 0 || (m & l) !== 0) && (s[h] = mp(m, t)) : b <= t && (e.expiredLanes |= m),
            c &= ~m
        }
        if (t = Me,
        n = me,
        n = gr(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        l = e.callbackNode,
        n === 0 || e === t && (Te === 2 || Te === 9) || e.cancelPendingCommit !== null)
            return l !== null && l !== null && ds(l),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((n & 3) === 0 || qi(e, n)) {
            if (t = n & -n,
            t === e.callbackPriority)
                return t;
            switch (l !== null && ds(l),
            vs(n)) {
            case 2:
            case 8:
                n = Lf;
                break;
            case 32:
                n = fr;
                break;
            case 268435456:
                n = Bf;
                break;
            default:
                n = fr
            }
            return l = $0.bind(null, e),
            n = fs(n, l),
            e.callbackPriority = t,
            e.callbackNode = n,
            t
        }
        return l !== null && l !== null && ds(l),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function $0(e, t) {
        if (tt !== 0 && tt !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var n = e.callbackNode;
        if (ru() && e.callbackNode !== n)
            return null;
        var l = me;
        return l = gr(e, e === Me ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        l === 0 ? null : (w0(e, l, t),
        Z0(e, en()),
        e.callbackNode != null && e.callbackNode === n ? $0.bind(null, e) : null)
    }
    function k0(e, t) {
        if (ru())
            return null;
        w0(e, t, !0)
    }
    function $m() {
        ny(function() {
            (Ae & 6) !== 0 ? fs(Uf, Zm) : X0()
        })
    }
    function nc() {
        return Na === 0 && (Na = Hf()),
        Na
    }
    function Q0(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : _r("" + e)
    }
    function J0(e, t) {
        var n = t.ownerDocument.createElement("input");
        return n.name = t.name,
        n.value = t.value,
        e.id && n.setAttribute("form", e.id),
        t.parentNode.insertBefore(n, t),
        e = new FormData(e),
        n.parentNode.removeChild(n),
        e
    }
    function km(e, t, n, l, s) {
        if (t === "submit" && n && n.stateNode === s) {
            var c = Q0((s[ct] || null).action)
              , h = l.submitter;
            h && (t = (t = h[ct] || null) ? Q0(t.formAction) : h.getAttribute("formAction"),
            t !== null && (c = t,
            h = null));
            var m = new Er("action","action",null,l,s);
            e.push({
                event: m,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (Na !== 0) {
                                var b = h ? J0(s, h) : new FormData(s);
                                Oo(n, {
                                    pending: !0,
                                    data: b,
                                    method: s.method,
                                    action: c
                                }, null, b)
                            }
                        } else
                            typeof c == "function" && (m.preventDefault(),
                            b = h ? J0(s, h) : new FormData(s),
                            Oo(n, {
                                pending: !0,
                                data: b,
                                method: s.method,
                                action: c
                            }, c, b))
                    },
                    currentTarget: s
                }]
            })
        }
    }
    for (var ac = 0; ac < qs.length; ac++) {
        var ic = qs[ac]
          , Qm = ic.toLowerCase()
          , Jm = ic[0].toUpperCase() + ic.slice(1);
        Xt(Qm, "on" + Jm)
    }
    Xt(wd, "onAnimationEnd"),
    Xt(Nd, "onAnimationIteration"),
    Xt(Md, "onAnimationStart"),
    Xt("dblclick", "onDoubleClick"),
    Xt("focusin", "onFocus"),
    Xt("focusout", "onBlur"),
    Xt(dm, "onTransitionRun"),
    Xt(hm, "onTransitionStart"),
    Xt(gm, "onTransitionCancel"),
    Xt(Dd, "onTransitionEnd"),
    Za("onMouseEnter", ["mouseout", "mouseover"]),
    Za("onMouseLeave", ["mouseout", "mouseover"]),
    Za("onPointerEnter", ["pointerout", "pointerover"]),
    Za("onPointerLeave", ["pointerout", "pointerover"]),
    ha("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    ha("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    ha("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ha("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    ha("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    ha("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Tl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Fm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tl));
    function F0(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var l = e[n]
              , s = l.event;
            l = l.listeners;
            e: {
                var c = void 0;
                if (t)
                    for (var h = l.length - 1; 0 <= h; h--) {
                        var m = l[h]
                          , b = m.instance
                          , R = m.currentTarget;
                        if (m = m.listener,
                        b !== c && s.isPropagationStopped())
                            break e;
                        c = m,
                        s.currentTarget = R;
                        try {
                            c(s)
                        } catch (j) {
                            Jr(j)
                        }
                        s.currentTarget = null,
                        c = b
                    }
                else
                    for (h = 0; h < l.length; h++) {
                        if (m = l[h],
                        b = m.instance,
                        R = m.currentTarget,
                        m = m.listener,
                        b !== c && s.isPropagationStopped())
                            break e;
                        c = m,
                        s.currentTarget = R;
                        try {
                            c(s)
                        } catch (j) {
                            Jr(j)
                        }
                        s.currentTarget = null,
                        c = b
                    }
            }
        }
    }
    function ge(e, t) {
        var n = t[ps];
        n === void 0 && (n = t[ps] = new Set);
        var l = e + "__bubble";
        n.has(l) || (P0(t, e, 2, !1),
        n.add(l))
    }
    function lc(e, t, n) {
        var l = 0;
        t && (l |= 4),
        P0(n, e, l, t)
    }
    var ou = "_reactListening" + Math.random().toString(36).slice(2);
    function rc(e) {
        if (!e[ou]) {
            e[ou] = !0,
            Xf.forEach(function(n) {
                n !== "selectionchange" && (Fm.has(n) || lc(n, !1, e),
                lc(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[ou] || (t[ou] = !0,
            lc("selectionchange", !1, t))
        }
    }
    function P0(e, t, n, l) {
        switch (S1(t)) {
        case 2:
            var s = Ey;
            break;
        case 8:
            s = Ay;
            break;
        default:
            s = bc
        }
        n = s.bind(null, t, n, e),
        s = void 0,
        !xs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0),
        l ? s !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: s
        }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
            passive: s
        }) : e.addEventListener(t, n, !1)
    }
    function uc(e, t, n, l, s) {
        var c = l;
        if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
            e: for (; ; ) {
                if (l === null)
                    return;
                var h = l.tag;
                if (h === 3 || h === 4) {
                    var m = l.stateNode.containerInfo;
                    if (m === s)
                        break;
                    if (h === 4)
                        for (h = l.return; h !== null; ) {
                            var b = h.tag;
                            if ((b === 3 || b === 4) && h.stateNode.containerInfo === s)
                                return;
                            h = h.return
                        }
                    for (; m !== null; ) {
                        if (h = Ya(m),
                        h === null)
                            return;
                        if (b = h.tag,
                        b === 5 || b === 6 || b === 26 || b === 27) {
                            l = c = h;
                            continue e
                        }
                        m = m.parentNode
                    }
                }
                l = l.return
            }
        id(function() {
            var R = c
              , j = Ts(n)
              , V = [];
            e: {
                var x = Cd.get(e);
                if (x !== void 0) {
                    var w = Er
                      , ne = e;
                    switch (e) {
                    case "keypress":
                        if (Sr(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        w = Xp;
                        break;
                    case "focusin":
                        ne = "focus",
                        w = Ds;
                        break;
                    case "focusout":
                        ne = "blur",
                        w = Ds;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        w = Ds;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        w = ud;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        w = Cp;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        w = kp;
                        break;
                    case wd:
                    case Nd:
                    case Md:
                        w = Up;
                        break;
                    case Dd:
                        w = Jp;
                        break;
                    case "scroll":
                    case "scrollend":
                        w = Mp;
                        break;
                    case "wheel":
                        w = Pp;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        w = Bp;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        w = od;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        w = Ip
                    }
                    var I = (t & 4) !== 0
                      , we = !I && (e === "scroll" || e === "scrollend")
                      , E = I ? x !== null ? x + "Capture" : null : x;
                    I = [];
                    for (var O = R, A; O !== null; ) {
                        var z = O;
                        if (A = z.stateNode,
                        z = z.tag,
                        z !== 5 && z !== 26 && z !== 27 || A === null || E === null || (z = Xi(O, E),
                        z != null && I.push(Rl(O, z, A))),
                        we)
                            break;
                        O = O.return
                    }
                    0 < I.length && (x = new w(x,ne,null,n,j),
                    V.push({
                        event: x,
                        listeners: I
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (x = e === "mouseover" || e === "pointerover",
                    w = e === "mouseout" || e === "pointerout",
                    x && n !== As && (ne = n.relatedTarget || n.fromElement) && (Ya(ne) || ne[Ga]))
                        break e;
                    if ((w || x) && (x = j.window === j ? j : (x = j.ownerDocument) ? x.defaultView || x.parentWindow : window,
                    w ? (ne = n.relatedTarget || n.toElement,
                    w = R,
                    ne = ne ? Ya(ne) : null,
                    ne !== null && (we = f(ne),
                    I = ne.tag,
                    ne !== we || I !== 5 && I !== 27 && I !== 6) && (ne = null)) : (w = null,
                    ne = R),
                    w !== ne)) {
                        if (I = ud,
                        z = "onMouseLeave",
                        E = "onMouseEnter",
                        O = "mouse",
                        (e === "pointerout" || e === "pointerover") && (I = od,
                        z = "onPointerLeave",
                        E = "onPointerEnter",
                        O = "pointer"),
                        we = w == null ? x : Ki(w),
                        A = ne == null ? x : Ki(ne),
                        x = new I(z,O + "leave",w,n,j),
                        x.target = we,
                        x.relatedTarget = A,
                        z = null,
                        Ya(j) === R && (I = new I(E,O + "enter",ne,n,j),
                        I.target = A,
                        I.relatedTarget = we,
                        z = I),
                        we = z,
                        w && ne)
                            t: {
                                for (I = w,
                                E = ne,
                                O = 0,
                                A = I; A; A = Oi(A))
                                    O++;
                                for (A = 0,
                                z = E; z; z = Oi(z))
                                    A++;
                                for (; 0 < O - A; )
                                    I = Oi(I),
                                    O--;
                                for (; 0 < A - O; )
                                    E = Oi(E),
                                    A--;
                                for (; O--; ) {
                                    if (I === E || E !== null && I === E.alternate)
                                        break t;
                                    I = Oi(I),
                                    E = Oi(E)
                                }
                                I = null
                            }
                        else
                            I = null;
                        w !== null && W0(V, x, w, I, !1),
                        ne !== null && we !== null && W0(V, we, ne, I, !0)
                    }
                }
                e: {
                    if (x = R ? Ki(R) : window,
                    w = x.nodeName && x.nodeName.toLowerCase(),
                    w === "select" || w === "input" && x.type === "file")
                        var $ = md;
                    else if (vd(x))
                        if (yd)
                            $ = om;
                        else {
                            $ = um;
                            var de = rm
                        }
                    else
                        w = x.nodeName,
                        !w || w.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? R && Es(R.elementType) && ($ = md) : $ = sm;
                    if ($ && ($ = $(e, R))) {
                        pd(V, $, n, j);
                        break e
                    }
                    de && de(e, x, R),
                    e === "focusout" && R && x.type === "number" && R.memoizedProps.value != null && Os(x, "number", x.value)
                }
                switch (de = R ? Ki(R) : window,
                e) {
                case "focusin":
                    (vd(de) || de.contentEditable === "true") && (Wa = de,
                    Bs = R,
                    Wi = null);
                    break;
                case "focusout":
                    Wi = Bs = Wa = null;
                    break;
                case "mousedown":
                    Hs = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Hs = !1,
                    Rd(V, n, j);
                    break;
                case "selectionchange":
                    if (fm)
                        break;
                case "keydown":
                case "keyup":
                    Rd(V, n, j)
                }
                var k;
                if (js)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var ee = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ee = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ee = "onCompositionUpdate";
                            break e
                        }
                        ee = void 0
                    }
                else
                    Pa ? hd(e, n) && (ee = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ee = "onCompositionStart");
                ee && (cd && n.locale !== "ko" && (Pa || ee !== "onCompositionStart" ? ee === "onCompositionEnd" && Pa && (k = ld()) : (qn = j,
                ws = "value"in qn ? qn.value : qn.textContent,
                Pa = !0)),
                de = cu(R, ee),
                0 < de.length && (ee = new sd(ee,e,null,n,j),
                V.push({
                    event: ee,
                    listeners: de
                }),
                k ? ee.data = k : (k = gd(n),
                k !== null && (ee.data = k)))),
                (k = tm ? nm(e, n) : am(e, n)) && (ee = cu(R, "onBeforeInput"),
                0 < ee.length && (de = new sd("onBeforeInput","beforeinput",null,n,j),
                V.push({
                    event: de,
                    listeners: ee
                }),
                de.data = k)),
                km(V, e, R, n, j)
            }
            F0(V, t)
        })
    }
    function Rl(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }
    function cu(e, t) {
        for (var n = t + "Capture", l = []; e !== null; ) {
            var s = e
              , c = s.stateNode;
            if (s = s.tag,
            s !== 5 && s !== 26 && s !== 27 || c === null || (s = Xi(e, n),
            s != null && l.unshift(Rl(e, s, c)),
            s = Xi(e, t),
            s != null && l.push(Rl(e, s, c))),
            e.tag === 3)
                return l;
            e = e.return
        }
        return []
    }
    function Oi(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function W0(e, t, n, l, s) {
        for (var c = t._reactName, h = []; n !== null && n !== l; ) {
            var m = n
              , b = m.alternate
              , R = m.stateNode;
            if (m = m.tag,
            b !== null && b === l)
                break;
            m !== 5 && m !== 26 && m !== 27 || R === null || (b = R,
            s ? (R = Xi(n, c),
            R != null && h.unshift(Rl(n, R, b))) : s || (R = Xi(n, c),
            R != null && h.push(Rl(n, R, b)))),
            n = n.return
        }
        h.length !== 0 && e.push({
            event: t,
            listeners: h
        })
    }
    var Pm = /\r\n?/g
      , Wm = /\u0000|\uFFFD/g;
    function I0(e) {
        return (typeof e == "string" ? e : "" + e).replace(Pm, `
`).replace(Wm, "")
    }
    function e1(e, t) {
        return t = I0(t),
        I0(e) === t
    }
    function fu() {}
    function xe(e, t, n, l, s, c) {
        switch (n) {
        case "children":
            typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Qa(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Qa(e, "" + l);
            break;
        case "className":
            pr(e, "class", l);
            break;
        case "tabIndex":
            pr(e, "tabindex", l);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            pr(e, n, l);
            break;
        case "style":
            nd(e, l, c);
            break;
        case "data":
            if (t !== "object") {
                pr(e, "data", l);
                break
            }
        case "src":
        case "href":
            if (l === "" && (t !== "a" || n !== "href")) {
                e.removeAttribute(n);
                break
            }
            if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                e.removeAttribute(n);
                break
            }
            l = _r("" + l),
            e.setAttribute(n, l);
            break;
        case "action":
        case "formAction":
            if (typeof l == "function") {
                e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof c == "function" && (n === "formAction" ? (t !== "input" && xe(e, t, "name", s.name, s, null),
                xe(e, t, "formEncType", s.formEncType, s, null),
                xe(e, t, "formMethod", s.formMethod, s, null),
                xe(e, t, "formTarget", s.formTarget, s, null)) : (xe(e, t, "encType", s.encType, s, null),
                xe(e, t, "method", s.method, s, null),
                xe(e, t, "target", s.target, s, null)));
            if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                e.removeAttribute(n);
                break
            }
            l = _r("" + l),
            e.setAttribute(n, l);
            break;
        case "onClick":
            l != null && (e.onclick = fu);
            break;
        case "onScroll":
            l != null && ge("scroll", e);
            break;
        case "onScrollEnd":
            l != null && ge("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(r(61));
                if (n = l.__html,
                n != null) {
                    if (s.children != null)
                        throw Error(r(60));
                    e.innerHTML = n
                }
            }
            break;
        case "multiple":
            e.multiple = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "muted":
            e.muted = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            n = _r("" + l),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "" + l) : e.removeAttribute(n);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
            break;
        case "capture":
        case "download":
            l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
            break;
        case "rowSpan":
        case "start":
            l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
            break;
        case "popover":
            ge("beforetoggle", e),
            ge("toggle", e),
            vr(e, "popover", l);
            break;
        case "xlinkActuate":
            pn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
            break;
        case "xlinkArcrole":
            pn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
            break;
        case "xlinkRole":
            pn(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
            break;
        case "xlinkShow":
            pn(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
            break;
        case "xlinkTitle":
            pn(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
            break;
        case "xlinkType":
            pn(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
            break;
        case "xmlBase":
            pn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
            break;
        case "xmlLang":
            pn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
            break;
        case "xmlSpace":
            pn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
            break;
        case "is":
            vr(e, "is", l);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = wp.get(n) || n,
            vr(e, n, l))
        }
    }
    function sc(e, t, n, l, s, c) {
        switch (n) {
        case "style":
            nd(e, l, c);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(r(61));
                if (n = l.__html,
                n != null) {
                    if (s.children != null)
                        throw Error(r(60));
                    e.innerHTML = n
                }
            }
            break;
        case "children":
            typeof l == "string" ? Qa(e, l) : (typeof l == "number" || typeof l == "bigint") && Qa(e, "" + l);
            break;
        case "onScroll":
            l != null && ge("scroll", e);
            break;
        case "onScrollEnd":
            l != null && ge("scrollend", e);
            break;
        case "onClick":
            l != null && (e.onclick = fu);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Zf.hasOwnProperty(n))
                e: {
                    if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"),
                    t = n.slice(2, s ? n.length - 7 : void 0),
                    c = e[ct] || null,
                    c = c != null ? c[n] : null,
                    typeof c == "function" && e.removeEventListener(t, c, s),
                    typeof l == "function")) {
                        typeof c != "function" && c !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)),
                        e.addEventListener(t, l, s);
                        break e
                    }
                    n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : vr(e, n, l)
                }
        }
    }
    function nt(e, t, n) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            ge("error", e),
            ge("load", e);
            var l = !1, s = !1, c;
            for (c in n)
                if (n.hasOwnProperty(c)) {
                    var h = n[c];
                    if (h != null)
                        switch (c) {
                        case "src":
                            l = !0;
                            break;
                        case "srcSet":
                            s = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(r(137, t));
                        default:
                            xe(e, t, c, h, n, null)
                        }
                }
            s && xe(e, t, "srcSet", n.srcSet, n, null),
            l && xe(e, t, "src", n.src, n, null);
            return;
        case "input":
            ge("invalid", e);
            var m = c = h = s = null
              , b = null
              , R = null;
            for (l in n)
                if (n.hasOwnProperty(l)) {
                    var j = n[l];
                    if (j != null)
                        switch (l) {
                        case "name":
                            s = j;
                            break;
                        case "type":
                            h = j;
                            break;
                        case "checked":
                            b = j;
                            break;
                        case "defaultChecked":
                            R = j;
                            break;
                        case "value":
                            c = j;
                            break;
                        case "defaultValue":
                            m = j;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (j != null)
                                throw Error(r(137, t));
                            break;
                        default:
                            xe(e, t, l, j, n, null)
                        }
                }
            Wf(e, c, m, b, R, h, s, !1),
            mr(e);
            return;
        case "select":
            ge("invalid", e),
            l = h = c = null;
            for (s in n)
                if (n.hasOwnProperty(s) && (m = n[s],
                m != null))
                    switch (s) {
                    case "value":
                        c = m;
                        break;
                    case "defaultValue":
                        h = m;
                        break;
                    case "multiple":
                        l = m;
                    default:
                        xe(e, t, s, m, n, null)
                    }
            t = c,
            n = h,
            e.multiple = !!l,
            t != null ? ka(e, !!l, t, !1) : n != null && ka(e, !!l, n, !0);
            return;
        case "textarea":
            ge("invalid", e),
            c = s = l = null;
            for (h in n)
                if (n.hasOwnProperty(h) && (m = n[h],
                m != null))
                    switch (h) {
                    case "value":
                        l = m;
                        break;
                    case "defaultValue":
                        s = m;
                        break;
                    case "children":
                        c = m;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (m != null)
                            throw Error(r(91));
                        break;
                    default:
                        xe(e, t, h, m, n, null)
                    }
            ed(e, l, s, c),
            mr(e);
            return;
        case "option":
            for (b in n)
                if (n.hasOwnProperty(b) && (l = n[b],
                l != null))
                    switch (b) {
                    case "selected":
                        e.selected = l && typeof l != "function" && typeof l != "symbol";
                        break;
                    default:
                        xe(e, t, b, l, n, null)
                    }
            return;
        case "dialog":
            ge("beforetoggle", e),
            ge("toggle", e),
            ge("cancel", e),
            ge("close", e);
            break;
        case "iframe":
        case "object":
            ge("load", e);
            break;
        case "video":
        case "audio":
            for (l = 0; l < Tl.length; l++)
                ge(Tl[l], e);
            break;
        case "image":
            ge("error", e),
            ge("load", e);
            break;
        case "details":
            ge("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            ge("error", e),
            ge("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (R in n)
                if (n.hasOwnProperty(R) && (l = n[R],
                l != null))
                    switch (R) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(r(137, t));
                    default:
                        xe(e, t, R, l, n, null)
                    }
            return;
        default:
            if (Es(t)) {
                for (j in n)
                    n.hasOwnProperty(j) && (l = n[j],
                    l !== void 0 && sc(e, t, j, l, n, void 0));
                return
            }
        }
        for (m in n)
            n.hasOwnProperty(m) && (l = n[m],
            l != null && xe(e, t, m, l, n, null))
    }
    function Im(e, t, n, l) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var s = null
              , c = null
              , h = null
              , m = null
              , b = null
              , R = null
              , j = null;
            for (w in n) {
                var V = n[w];
                if (n.hasOwnProperty(w) && V != null)
                    switch (w) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        b = V;
                    default:
                        l.hasOwnProperty(w) || xe(e, t, w, null, l, V)
                    }
            }
            for (var x in l) {
                var w = l[x];
                if (V = n[x],
                l.hasOwnProperty(x) && (w != null || V != null))
                    switch (x) {
                    case "type":
                        c = w;
                        break;
                    case "name":
                        s = w;
                        break;
                    case "checked":
                        R = w;
                        break;
                    case "defaultChecked":
                        j = w;
                        break;
                    case "value":
                        h = w;
                        break;
                    case "defaultValue":
                        m = w;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (w != null)
                            throw Error(r(137, t));
                        break;
                    default:
                        w !== V && xe(e, t, x, w, l, V)
                    }
            }
            Ss(e, h, m, b, R, j, c, s);
            return;
        case "select":
            w = h = m = x = null;
            for (c in n)
                if (b = n[c],
                n.hasOwnProperty(c) && b != null)
                    switch (c) {
                    case "value":
                        break;
                    case "multiple":
                        w = b;
                    default:
                        l.hasOwnProperty(c) || xe(e, t, c, null, l, b)
                    }
            for (s in l)
                if (c = l[s],
                b = n[s],
                l.hasOwnProperty(s) && (c != null || b != null))
                    switch (s) {
                    case "value":
                        x = c;
                        break;
                    case "defaultValue":
                        m = c;
                        break;
                    case "multiple":
                        h = c;
                    default:
                        c !== b && xe(e, t, s, c, l, b)
                    }
            t = m,
            n = h,
            l = w,
            x != null ? ka(e, !!n, x, !1) : !!l != !!n && (t != null ? ka(e, !!n, t, !0) : ka(e, !!n, n ? [] : "", !1));
            return;
        case "textarea":
            w = x = null;
            for (m in n)
                if (s = n[m],
                n.hasOwnProperty(m) && s != null && !l.hasOwnProperty(m))
                    switch (m) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        xe(e, t, m, null, l, s)
                    }
            for (h in l)
                if (s = l[h],
                c = n[h],
                l.hasOwnProperty(h) && (s != null || c != null))
                    switch (h) {
                    case "value":
                        x = s;
                        break;
                    case "defaultValue":
                        w = s;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (s != null)
                            throw Error(r(91));
                        break;
                    default:
                        s !== c && xe(e, t, h, s, l, c)
                    }
            If(e, x, w);
            return;
        case "option":
            for (var ne in n)
                if (x = n[ne],
                n.hasOwnProperty(ne) && x != null && !l.hasOwnProperty(ne))
                    switch (ne) {
                    case "selected":
                        e.selected = !1;
                        break;
                    default:
                        xe(e, t, ne, null, l, x)
                    }
            for (b in l)
                if (x = l[b],
                w = n[b],
                l.hasOwnProperty(b) && x !== w && (x != null || w != null))
                    switch (b) {
                    case "selected":
                        e.selected = x && typeof x != "function" && typeof x != "symbol";
                        break;
                    default:
                        xe(e, t, b, x, l, w)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var I in n)
                x = n[I],
                n.hasOwnProperty(I) && x != null && !l.hasOwnProperty(I) && xe(e, t, I, null, l, x);
            for (R in l)
                if (x = l[R],
                w = n[R],
                l.hasOwnProperty(R) && x !== w && (x != null || w != null))
                    switch (R) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (x != null)
                            throw Error(r(137, t));
                        break;
                    default:
                        xe(e, t, R, x, l, w)
                    }
            return;
        default:
            if (Es(t)) {
                for (var we in n)
                    x = n[we],
                    n.hasOwnProperty(we) && x !== void 0 && !l.hasOwnProperty(we) && sc(e, t, we, void 0, l, x);
                for (j in l)
                    x = l[j],
                    w = n[j],
                    !l.hasOwnProperty(j) || x === w || x === void 0 && w === void 0 || sc(e, t, j, x, l, w);
                return
            }
        }
        for (var E in n)
            x = n[E],
            n.hasOwnProperty(E) && x != null && !l.hasOwnProperty(E) && xe(e, t, E, null, l, x);
        for (V in l)
            x = l[V],
            w = n[V],
            !l.hasOwnProperty(V) || x === w || x == null && w == null || xe(e, t, V, x, l, w)
    }
    var oc = null
      , cc = null;
    function du(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function t1(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function n1(e, t) {
        if (e === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function fc(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var dc = null;
    function ey() {
        var e = window.event;
        return e && e.type === "popstate" ? e === dc ? !1 : (dc = e,
        !0) : (dc = null,
        !1)
    }
    var a1 = typeof setTimeout == "function" ? setTimeout : void 0
      , ty = typeof clearTimeout == "function" ? clearTimeout : void 0
      , i1 = typeof Promise == "function" ? Promise : void 0
      , ny = typeof queueMicrotask == "function" ? queueMicrotask : typeof i1 < "u" ? function(e) {
        return i1.resolve(null).then(e).catch(ay)
    }
    : a1;
    function ay(e) {
        setTimeout(function() {
            throw e
        })
    }
    function na(e) {
        return e === "head"
    }
    function l1(e, t) {
        var n = t
          , l = 0
          , s = 0;
        do {
            var c = n.nextSibling;
            if (e.removeChild(n),
            c && c.nodeType === 8)
                if (n = c.data,
                n === "/$") {
                    if (0 < l && 8 > l) {
                        n = l;
                        var h = e.ownerDocument;
                        if (n & 1 && xl(h.documentElement),
                        n & 2 && xl(h.body),
                        n & 4)
                            for (n = h.head,
                            xl(n),
                            h = n.firstChild; h; ) {
                                var m = h.nextSibling
                                  , b = h.nodeName;
                                h[Yi] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && h.rel.toLowerCase() === "stylesheet" || n.removeChild(h),
                                h = m
                            }
                    }
                    if (s === 0) {
                        e.removeChild(c),
                        Ul(t);
                        return
                    }
                    s--
                } else
                    n === "$" || n === "$?" || n === "$!" ? s++ : l = n.charCodeAt(0) - 48;
            else
                l = 0;
            n = c
        } while (n);
        Ul(t)
    }
    function hc(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var n = t;
            switch (t = t.nextSibling,
            n.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                hc(n),
                ms(n);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (n.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(n)
        }
    }
    function iy(e, t, n, l) {
        for (; e.nodeType === 1; ) {
            var s = n;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (l) {
                if (!e[Yi])
                    switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (c = e.getAttribute("rel"),
                        c === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (c !== s.rel || e.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || e.getAttribute("title") !== (s.title == null ? null : s.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (c = e.getAttribute("src"),
                        (c !== (s.src == null ? null : s.src) || e.getAttribute("type") !== (s.type == null ? null : s.type) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var c = s.name == null ? null : "" + s.name;
                if (s.type === "hidden" && e.getAttribute("name") === c)
                    return e
            } else
                return e;
            if (e = $t(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function ly(e, t, n) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = $t(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function gc(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }
    function ry(e, t) {
        var n = e.ownerDocument;
        if (e.data !== "$?" || n.readyState === "complete")
            t();
        else {
            var l = function() {
                t(),
                n.removeEventListener("DOMContentLoaded", l)
            };
            n.addEventListener("DOMContentLoaded", l),
            e._reactRetry = l
        }
    }
    function $t(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    var vc = null;
    function r1(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    function u1(e, t, n) {
        switch (t = du(n),
        e) {
        case "html":
            if (e = t.documentElement,
            !e)
                throw Error(r(452));
            return e;
        case "head":
            if (e = t.head,
            !e)
                throw Error(r(453));
            return e;
        case "body":
            if (e = t.body,
            !e)
                throw Error(r(454));
            return e;
        default:
            throw Error(r(451))
        }
    }
    function xl(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        ms(e)
    }
    var Lt = new Map
      , s1 = new Set;
    function hu(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var Mn = G.d;
    G.d = {
        f: uy,
        r: sy,
        D: oy,
        C: cy,
        L: fy,
        m: dy,
        X: gy,
        S: hy,
        M: vy
    };
    function uy() {
        var e = Mn.f()
          , t = iu();
        return e || t
    }
    function sy(e) {
        var t = Ka(e);
        t !== null && t.tag === 5 && t.type === "form" ? wh(t) : Mn.r(e)
    }
    var Ei = typeof document > "u" ? null : document;
    function o1(e, t, n) {
        var l = Ei;
        if (l && typeof t == "string" && t) {
            var s = Nt(t);
            s = 'link[rel="' + e + '"][href="' + s + '"]',
            typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
            s1.has(s) || (s1.add(s),
            e = {
                rel: e,
                crossOrigin: n,
                href: t
            },
            l.querySelector(s) === null && (t = l.createElement("link"),
            nt(t, "link", e),
            Fe(t),
            l.head.appendChild(t)))
        }
    }
    function oy(e) {
        Mn.D(e),
        o1("dns-prefetch", e, null)
    }
    function cy(e, t) {
        Mn.C(e, t),
        o1("preconnect", e, t)
    }
    function fy(e, t, n) {
        Mn.L(e, t, n);
        var l = Ei;
        if (l && e && t) {
            var s = 'link[rel="preload"][as="' + Nt(t) + '"]';
            t === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + Nt(n.imageSrcSet) + '"]',
            typeof n.imageSizes == "string" && (s += '[imagesizes="' + Nt(n.imageSizes) + '"]')) : s += '[href="' + Nt(e) + '"]';
            var c = s;
            switch (t) {
            case "style":
                c = Ai(e);
                break;
            case "script":
                c = Ti(e)
            }
            Lt.has(c) || (e = y({
                rel: "preload",
                href: t === "image" && n && n.imageSrcSet ? void 0 : e,
                as: t
            }, n),
            Lt.set(c, e),
            l.querySelector(s) !== null || t === "style" && l.querySelector(wl(c)) || t === "script" && l.querySelector(Nl(c)) || (t = l.createElement("link"),
            nt(t, "link", e),
            Fe(t),
            l.head.appendChild(t)))
        }
    }
    function dy(e, t) {
        Mn.m(e, t);
        var n = Ei;
        if (n && e) {
            var l = t && typeof t.as == "string" ? t.as : "script"
              , s = 'link[rel="modulepreload"][as="' + Nt(l) + '"][href="' + Nt(e) + '"]'
              , c = s;
            switch (l) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                c = Ti(e)
            }
            if (!Lt.has(c) && (e = y({
                rel: "modulepreload",
                href: e
            }, t),
            Lt.set(c, e),
            n.querySelector(s) === null)) {
                switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (n.querySelector(Nl(c)))
                        return
                }
                l = n.createElement("link"),
                nt(l, "link", e),
                Fe(l),
                n.head.appendChild(l)
            }
        }
    }
    function hy(e, t, n) {
        Mn.S(e, t, n);
        var l = Ei;
        if (l && e) {
            var s = Xa(l).hoistableStyles
              , c = Ai(e);
            t = t || "default";
            var h = s.get(c);
            if (!h) {
                var m = {
                    loading: 0,
                    preload: null
                };
                if (h = l.querySelector(wl(c)))
                    m.loading = 5;
                else {
                    e = y({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, n),
                    (n = Lt.get(c)) && pc(e, n);
                    var b = h = l.createElement("link");
                    Fe(b),
                    nt(b, "link", e),
                    b._p = new Promise(function(R, j) {
                        b.onload = R,
                        b.onerror = j
                    }
                    ),
                    b.addEventListener("load", function() {
                        m.loading |= 1
                    }),
                    b.addEventListener("error", function() {
                        m.loading |= 2
                    }),
                    m.loading |= 4,
                    gu(h, t, l)
                }
                h = {
                    type: "stylesheet",
                    instance: h,
                    count: 1,
                    state: m
                },
                s.set(c, h)
            }
        }
    }
    function gy(e, t) {
        Mn.X(e, t);
        var n = Ei;
        if (n && e) {
            var l = Xa(n).hoistableScripts
              , s = Ti(e)
              , c = l.get(s);
            c || (c = n.querySelector(Nl(s)),
            c || (e = y({
                src: e,
                async: !0
            }, t),
            (t = Lt.get(s)) && mc(e, t),
            c = n.createElement("script"),
            Fe(c),
            nt(c, "link", e),
            n.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            l.set(s, c))
        }
    }
    function vy(e, t) {
        Mn.M(e, t);
        var n = Ei;
        if (n && e) {
            var l = Xa(n).hoistableScripts
              , s = Ti(e)
              , c = l.get(s);
            c || (c = n.querySelector(Nl(s)),
            c || (e = y({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = Lt.get(s)) && mc(e, t),
            c = n.createElement("script"),
            Fe(c),
            nt(c, "link", e),
            n.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            l.set(s, c))
        }
    }
    function c1(e, t, n, l) {
        var s = (s = oe.current) ? hu(s) : null;
        if (!s)
            throw Error(r(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Ai(n.href),
            n = Xa(s).hoistableStyles,
            l = n.get(t),
            l || (l = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            n.set(t, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                e = Ai(n.href);
                var c = Xa(s).hoistableStyles
                  , h = c.get(e);
                if (h || (s = s.ownerDocument || s,
                h = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                c.set(e, h),
                (c = s.querySelector(wl(e))) && !c._p && (h.instance = c,
                h.state.loading = 5),
                Lt.has(e) || (n = {
                    rel: "preload",
                    as: "style",
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy
                },
                Lt.set(e, n),
                c || py(s, e, n, h.state))),
                t && l === null)
                    throw Error(r(528, ""));
                return h
            }
            if (t && l !== null)
                throw Error(r(529, ""));
            return null;
        case "script":
            return t = n.async,
            n = n.src,
            typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ti(n),
            n = Xa(s).hoistableScripts,
            l = n.get(t),
            l || (l = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            n.set(t, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(r(444, e))
        }
    }
    function Ai(e) {
        return 'href="' + Nt(e) + '"'
    }
    function wl(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function f1(e) {
        return y({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function py(e, t, n, l) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"),
        l.preload = t,
        t.addEventListener("load", function() {
            return l.loading |= 1
        }),
        t.addEventListener("error", function() {
            return l.loading |= 2
        }),
        nt(t, "link", n),
        Fe(t),
        e.head.appendChild(t))
    }
    function Ti(e) {
        return '[src="' + Nt(e) + '"]'
    }
    function Nl(e) {
        return "script[async]" + e
    }
    function d1(e, t, n) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var l = e.querySelector('style[data-href~="' + Nt(n.href) + '"]');
                if (l)
                    return t.instance = l,
                    Fe(l),
                    l;
                var s = y({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return l = (e.ownerDocument || e).createElement("style"),
                Fe(l),
                nt(l, "style", s),
                gu(l, n.precedence, e),
                t.instance = l;
            case "stylesheet":
                s = Ai(n.href);
                var c = e.querySelector(wl(s));
                if (c)
                    return t.state.loading |= 4,
                    t.instance = c,
                    Fe(c),
                    c;
                l = f1(n),
                (s = Lt.get(s)) && pc(l, s),
                c = (e.ownerDocument || e).createElement("link"),
                Fe(c);
                var h = c;
                return h._p = new Promise(function(m, b) {
                    h.onload = m,
                    h.onerror = b
                }
                ),
                nt(c, "link", l),
                t.state.loading |= 4,
                gu(c, n.precedence, e),
                t.instance = c;
            case "script":
                return c = Ti(n.src),
                (s = e.querySelector(Nl(c))) ? (t.instance = s,
                Fe(s),
                s) : (l = n,
                (s = Lt.get(c)) && (l = y({}, n),
                mc(l, s)),
                e = e.ownerDocument || e,
                s = e.createElement("script"),
                Fe(s),
                nt(s, "link", l),
                e.head.appendChild(s),
                t.instance = s);
            case "void":
                return null;
            default:
                throw Error(r(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance,
            t.state.loading |= 4,
            gu(l, n.precedence, e));
        return t.instance
    }
    function gu(e, t, n) {
        for (var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = l.length ? l[l.length - 1] : null, c = s, h = 0; h < l.length; h++) {
            var m = l[h];
            if (m.dataset.precedence === t)
                c = m;
            else if (c !== s)
                break
        }
        c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = n.nodeType === 9 ? n.head : n,
        t.insertBefore(e, t.firstChild))
    }
    function pc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function mc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var vu = null;
    function h1(e, t, n) {
        if (vu === null) {
            var l = new Map
              , s = vu = new Map;
            s.set(n, l)
        } else
            s = vu,
            l = s.get(n),
            l || (l = new Map,
            s.set(n, l));
        if (l.has(e))
            return l;
        for (l.set(e, null),
        n = n.getElementsByTagName(e),
        s = 0; s < n.length; s++) {
            var c = n[s];
            if (!(c[Yi] || c[it] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
                var h = c.getAttribute(t) || "";
                h = e + h;
                var m = l.get(h);
                m ? m.push(c) : l.set(h, [c])
            }
        }
        return l
    }
    function g1(e, t, n) {
        e = e.ownerDocument || e,
        e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null)
    }
    function my(e, t, n) {
        if (n === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            switch (t.rel) {
            case "stylesheet":
                return e = t.disabled,
                typeof t.precedence == "string" && e == null;
            default:
                return !0
            }
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function v1(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var Ml = null;
    function yy() {}
    function _y(e, t, n) {
        if (Ml === null)
            throw Error(r(475));
        var l = Ml;
        if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var s = Ai(n.href)
                  , c = e.querySelector(wl(s));
                if (c) {
                    e = c._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++,
                    l = pu.bind(l),
                    e.then(l, l)),
                    t.state.loading |= 4,
                    t.instance = c,
                    Fe(c);
                    return
                }
                c = e.ownerDocument || e,
                n = f1(n),
                (s = Lt.get(s)) && pc(n, s),
                c = c.createElement("link"),
                Fe(c);
                var h = c;
                h._p = new Promise(function(m, b) {
                    h.onload = m,
                    h.onerror = b
                }
                ),
                nt(c, "link", n),
                t.instance = c
            }
            l.stylesheets === null && (l.stylesheets = new Map),
            l.stylesheets.set(t, e),
            (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++,
            t = pu.bind(l),
            e.addEventListener("load", t),
            e.addEventListener("error", t))
        }
    }
    function by() {
        if (Ml === null)
            throw Error(r(475));
        var e = Ml;
        return e.stylesheets && e.count === 0 && yc(e, e.stylesheets),
        0 < e.count ? function(t) {
            var n = setTimeout(function() {
                if (e.stylesheets && yc(e, e.stylesheets),
                e.unsuspend) {
                    var l = e.unsuspend;
                    e.unsuspend = null,
                    l()
                }
            }, 6e4);
            return e.unsuspend = t,
            function() {
                e.unsuspend = null,
                clearTimeout(n)
            }
        }
        : null
    }
    function pu() {
        if (this.count--,
        this.count === 0) {
            if (this.stylesheets)
                yc(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var mu = null;
    function yc(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        mu = new Map,
        t.forEach(Sy, e),
        mu = null,
        pu.call(e))
    }
    function Sy(e, t) {
        if (!(t.state.loading & 4)) {
            var n = mu.get(e);
            if (n)
                var l = n.get(null);
            else {
                n = new Map,
                mu.set(e, n);
                for (var s = e.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0; c < s.length; c++) {
                    var h = s[c];
                    (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (n.set(h.dataset.precedence, h),
                    l = h)
                }
                l && n.set(null, l)
            }
            s = t.instance,
            h = s.getAttribute("data-precedence"),
            c = n.get(h) || l,
            c === l && n.set(null, s),
            n.set(h, s),
            this.count++,
            l = pu.bind(this),
            s.addEventListener("load", l),
            s.addEventListener("error", l),
            c ? c.parentNode.insertBefore(s, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(s, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var Dl = {
        $$typeof: te,
        Provider: null,
        Consumer: null,
        _currentValue: P,
        _currentValue2: P,
        _threadCount: 0
    };
    function Oy(e, t, n, l, s, c, h, m) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = hs(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = hs(0),
        this.hiddenUpdates = hs(null),
        this.identifierPrefix = l,
        this.onUncaughtError = s,
        this.onCaughtError = c,
        this.onRecoverableError = h,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = m,
        this.incompleteTransitions = new Map
    }
    function p1(e, t, n, l, s, c, h, m, b, R, j, V) {
        return e = new Oy(e,t,n,h,m,b,R,V),
        t = 1,
        c === !0 && (t |= 24),
        c = _t(3, null, null, t),
        e.current = c,
        c.stateNode = e,
        t = Ws(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        c.memoizedState = {
            element: l,
            isDehydrated: n,
            cache: t
        },
        no(c),
        e
    }
    function m1(e) {
        return e ? (e = ni,
        e) : ni
    }
    function y1(e, t, n, l, s, c) {
        s = m1(s),
        l.context === null ? l.context = s : l.pendingContext = s,
        l = Kn(t),
        l.payload = {
            element: n
        },
        c = c === void 0 ? null : c,
        c !== null && (l.callback = c),
        n = Xn(e, l, t),
        n !== null && (At(n, e, t),
        ul(n, e, t))
    }
    function _1(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }
    function _c(e, t) {
        _1(e, t),
        (e = e.alternate) && _1(e, t)
    }
    function b1(e) {
        if (e.tag === 13) {
            var t = ti(e, 67108864);
            t !== null && At(t, e, 67108864),
            _c(e, 67108864)
        }
    }
    var yu = !0;
    function Ey(e, t, n, l) {
        var s = D.T;
        D.T = null;
        var c = G.p;
        try {
            G.p = 2,
            bc(e, t, n, l)
        } finally {
            G.p = c,
            D.T = s
        }
    }
    function Ay(e, t, n, l) {
        var s = D.T;
        D.T = null;
        var c = G.p;
        try {
            G.p = 8,
            bc(e, t, n, l)
        } finally {
            G.p = c,
            D.T = s
        }
    }
    function bc(e, t, n, l) {
        if (yu) {
            var s = Sc(l);
            if (s === null)
                uc(e, t, l, _u, n),
                O1(e, l);
            else if (Ry(s, e, t, n, l))
                l.stopPropagation();
            else if (O1(e, l),
            t & 4 && -1 < Ty.indexOf(e)) {
                for (; s !== null; ) {
                    var c = Ka(s);
                    if (c !== null)
                        switch (c.tag) {
                        case 3:
                            if (c = c.stateNode,
                            c.current.memoizedState.isDehydrated) {
                                var h = da(c.pendingLanes);
                                if (h !== 0) {
                                    var m = c;
                                    for (m.pendingLanes |= 2,
                                    m.entangledLanes |= 2; h; ) {
                                        var b = 1 << 31 - mt(h);
                                        m.entanglements[1] |= b,
                                        h &= ~b
                                    }
                                    rn(c),
                                    (Ae & 6) === 0 && (nu = en() + 500,
                                    Al(0))
                                }
                            }
                            break;
                        case 13:
                            m = ti(c, 2),
                            m !== null && At(m, c, 2),
                            iu(),
                            _c(c, 2)
                        }
                    if (c = Sc(l),
                    c === null && uc(e, t, l, _u, n),
                    c === s)
                        break;
                    s = c
                }
                s !== null && l.stopPropagation()
            } else
                uc(e, t, l, null, n)
        }
    }
    function Sc(e) {
        return e = Ts(e),
        Oc(e)
    }
    var _u = null;
    function Oc(e) {
        if (_u = null,
        e = Ya(e),
        e !== null) {
            var t = f(e);
            if (t === null)
                e = null;
            else {
                var n = t.tag;
                if (n === 13) {
                    if (e = d(t),
                    e !== null)
                        return e;
                    e = null
                } else if (n === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return _u = e,
        null
    }
    function S1(e) {
        switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (cp()) {
            case Uf:
                return 2;
            case Lf:
                return 8;
            case fr:
            case fp:
                return 32;
            case Bf:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Ec = !1
      , aa = null
      , ia = null
      , la = null
      , Cl = new Map
      , jl = new Map
      , ra = []
      , Ty = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function O1(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            aa = null;
            break;
        case "dragenter":
        case "dragleave":
            ia = null;
            break;
        case "mouseover":
        case "mouseout":
            la = null;
            break;
        case "pointerover":
        case "pointerout":
            Cl.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            jl.delete(t.pointerId)
        }
    }
    function zl(e, t, n, l, s, c) {
        return e === null || e.nativeEvent !== c ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: l,
            nativeEvent: c,
            targetContainers: [s]
        },
        t !== null && (t = Ka(t),
        t !== null && b1(t)),
        e) : (e.eventSystemFlags |= l,
        t = e.targetContainers,
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e)
    }
    function Ry(e, t, n, l, s) {
        switch (t) {
        case "focusin":
            return aa = zl(aa, e, t, n, l, s),
            !0;
        case "dragenter":
            return ia = zl(ia, e, t, n, l, s),
            !0;
        case "mouseover":
            return la = zl(la, e, t, n, l, s),
            !0;
        case "pointerover":
            var c = s.pointerId;
            return Cl.set(c, zl(Cl.get(c) || null, e, t, n, l, s)),
            !0;
        case "gotpointercapture":
            return c = s.pointerId,
            jl.set(c, zl(jl.get(c) || null, e, t, n, l, s)),
            !0
        }
        return !1
    }
    function E1(e) {
        var t = Ya(e.target);
        if (t !== null) {
            var n = f(t);
            if (n !== null) {
                if (t = n.tag,
                t === 13) {
                    if (t = d(n),
                    t !== null) {
                        e.blockedOn = t,
                        _p(e.priority, function() {
                            if (n.tag === 13) {
                                var l = Et();
                                l = gs(l);
                                var s = ti(n, l);
                                s !== null && At(s, n, l),
                                _c(n, l)
                            }
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function bu(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Sc(e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var l = new n.constructor(n.type,n);
                As = l,
                n.target.dispatchEvent(l),
                As = null
            } else
                return t = Ka(n),
                t !== null && b1(t),
                e.blockedOn = n,
                !1;
            t.shift()
        }
        return !0
    }
    function A1(e, t, n) {
        bu(e) && n.delete(t)
    }
    function xy() {
        Ec = !1,
        aa !== null && bu(aa) && (aa = null),
        ia !== null && bu(ia) && (ia = null),
        la !== null && bu(la) && (la = null),
        Cl.forEach(A1),
        jl.forEach(A1)
    }
    function Su(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        Ec || (Ec = !0,
        a.unstable_scheduleCallback(a.unstable_NormalPriority, xy)))
    }
    var Ou = null;
    function T1(e) {
        Ou !== e && (Ou = e,
        a.unstable_scheduleCallback(a.unstable_NormalPriority, function() {
            Ou === e && (Ou = null);
            for (var t = 0; t < e.length; t += 3) {
                var n = e[t]
                  , l = e[t + 1]
                  , s = e[t + 2];
                if (typeof l != "function") {
                    if (Oc(l || n) === null)
                        continue;
                    break
                }
                var c = Ka(n);
                c !== null && (e.splice(t, 3),
                t -= 3,
                Oo(c, {
                    pending: !0,
                    data: s,
                    method: n.method,
                    action: l
                }, l, s))
            }
        }))
    }
    function Ul(e) {
        function t(b) {
            return Su(b, e)
        }
        aa !== null && Su(aa, e),
        ia !== null && Su(ia, e),
        la !== null && Su(la, e),
        Cl.forEach(t),
        jl.forEach(t);
        for (var n = 0; n < ra.length; n++) {
            var l = ra[n];
            l.blockedOn === e && (l.blockedOn = null)
        }
        for (; 0 < ra.length && (n = ra[0],
        n.blockedOn === null); )
            E1(n),
            n.blockedOn === null && ra.shift();
        if (n = (e.ownerDocument || e).$$reactFormReplay,
        n != null)
            for (l = 0; l < n.length; l += 3) {
                var s = n[l]
                  , c = n[l + 1]
                  , h = s[ct] || null;
                if (typeof c == "function")
                    h || T1(n);
                else if (h) {
                    var m = null;
                    if (c && c.hasAttribute("formAction")) {
                        if (s = c,
                        h = c[ct] || null)
                            m = h.formAction;
                        else if (Oc(s) !== null)
                            continue
                    } else
                        m = h.action;
                    typeof m == "function" ? n[l + 1] = m : (n.splice(l, 3),
                    l -= 3),
                    T1(n)
                }
            }
    }
    function Ac(e) {
        this._internalRoot = e
    }
    Eu.prototype.render = Ac.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(r(409));
        var n = t.current
          , l = Et();
        y1(n, l, e, t, null, null)
    }
    ,
    Eu.prototype.unmount = Ac.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            y1(e.current, 2, null, e, null, null),
            iu(),
            t[Ga] = null
        }
    }
    ;
    function Eu(e) {
        this._internalRoot = e
    }
    Eu.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Yf();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < ra.length && t !== 0 && t < ra[n].priority; n++)
                ;
            ra.splice(n, 0, e),
            n === 0 && E1(e)
        }
    }
    ;
    var R1 = i.version;
    if (R1 !== "19.1.0")
        throw Error(r(527, R1, "19.1.0"));
    G.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","),
            Error(r(268, e)));
        return e = p(t),
        e = e !== null ? v(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var wy = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: D,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Au = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Au.isDisabled && Au.supportsFiber)
            try {
                Vi = Au.inject(wy),
                pt = Au
            } catch {}
    }
    return Bl.createRoot = function(e, t) {
        if (!o(e))
            throw Error(r(299));
        var n = !1
          , l = ""
          , s = Yh
          , c = Kh
          , h = Xh
          , m = null;
        return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (s = t.onUncaughtError),
        t.onCaughtError !== void 0 && (c = t.onCaughtError),
        t.onRecoverableError !== void 0 && (h = t.onRecoverableError),
        t.unstable_transitionCallbacks !== void 0 && (m = t.unstable_transitionCallbacks)),
        t = p1(e, 1, !1, null, null, n, l, s, c, h, m, null),
        e[Ga] = t.current,
        rc(e),
        new Ac(t)
    }
    ,
    Bl.hydrateRoot = function(e, t, n) {
        if (!o(e))
            throw Error(r(299));
        var l = !1
          , s = ""
          , c = Yh
          , h = Kh
          , m = Xh
          , b = null
          , R = null;
        return n != null && (n.unstable_strictMode === !0 && (l = !0),
        n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
        n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
        n.onCaughtError !== void 0 && (h = n.onCaughtError),
        n.onRecoverableError !== void 0 && (m = n.onRecoverableError),
        n.unstable_transitionCallbacks !== void 0 && (b = n.unstable_transitionCallbacks),
        n.formState !== void 0 && (R = n.formState)),
        t = p1(e, 1, !0, t, n ?? null, l, s, c, h, m, b, R),
        t.context = m1(null),
        n = t.current,
        l = Et(),
        l = gs(l),
        s = Kn(l),
        s.callback = null,
        Xn(n, s, l),
        n = l,
        t.current.lanes = n,
        Gi(t, n),
        rn(t),
        e[Ga] = t.current,
        rc(e),
        new Eu(t)
    }
    ,
    Bl.version = "19.1.0",
    Bl
}
var L1;
function Vy() {
    if (L1)
        return xc.exports;
    L1 = 1;
    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
            } catch (i) {
                console.error(i)
            }
    }
    return a(),
    xc.exports = Hy(),
    xc.exports
}
var qy = Vy();
function _e(a) {
    for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)
        u[r - 1] = arguments[r];
    throw new Error(typeof a == "number" ? "[MobX] minified error nr: " + a + (u.length ? " " + u.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + a)
}
var Gy = {};
function Ju() {
    return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : Gy
}
var qg = Object.assign
  , Lu = Object.getOwnPropertyDescriptor
  , dn = Object.defineProperty
  , Fu = Object.prototype
  , Jc = [];
Object.freeze(Jc);
var Gg = {};
Object.freeze(Gg);
var Yy = typeof Proxy < "u"
  , Ky = Object.toString();
function Yg() {
    Yy || _e("Proxy not available")
}
function Kg(a) {
    var i = !1;
    return function() {
        if (!i)
            return i = !0,
            a.apply(this, arguments)
    }
}
var wi = function() {};
function Pt(a) {
    return typeof a == "function"
}
function ja(a) {
    var i = typeof a;
    switch (i) {
    case "string":
    case "symbol":
    case "number":
        return !0
    }
    return !1
}
function Pu(a) {
    return a !== null && typeof a == "object"
}
function Un(a) {
    if (!Pu(a))
        return !1;
    var i = Object.getPrototypeOf(a);
    if (i == null)
        return !0;
    var u = Object.hasOwnProperty.call(i, "constructor") && i.constructor;
    return typeof u == "function" && u.toString() === Ky
}
function Xg(a) {
    var i = a == null ? void 0 : a.constructor;
    return i ? i.name === "GeneratorFunction" || i.displayName === "GeneratorFunction" : !1
}
function er(a, i, u) {
    dn(a, i, {
        enumerable: !1,
        writable: !0,
        configurable: !0,
        value: u
    })
}
function Zg(a, i, u) {
    dn(a, i, {
        enumerable: !1,
        writable: !1,
        configurable: !0,
        value: u
    })
}
function Ba(a, i) {
    var u = "isMobX" + a;
    return i.prototype[u] = !0,
    function(r) {
        return Pu(r) && r[u] === !0
    }
}
function Li(a) {
    return a != null && Object.prototype.toString.call(a) === "[object Map]"
}
function Xy(a) {
    var i = Object.getPrototypeOf(a)
      , u = Object.getPrototypeOf(i)
      , r = Object.getPrototypeOf(u);
    return r === null
}
function Dn(a) {
    return a != null && Object.prototype.toString.call(a) === "[object Set]"
}
var $g = typeof Object.getOwnPropertySymbols < "u";
function Zy(a) {
    var i = Object.keys(a);
    if (!$g)
        return i;
    var u = Object.getOwnPropertySymbols(a);
    return u.length ? [].concat(i, u.filter(function(r) {
        return Fu.propertyIsEnumerable.call(a, r)
    })) : i
}
var ji = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : $g ? function(a) {
    return Object.getOwnPropertyNames(a).concat(Object.getOwnPropertySymbols(a))
}
: Object.getOwnPropertyNames;
function kg(a) {
    return a === null ? null : typeof a == "object" ? "" + a : a
}
function jn(a, i) {
    return Fu.hasOwnProperty.call(a, i)
}
var $y = Object.getOwnPropertyDescriptors || function(i) {
    var u = {};
    return ji(i).forEach(function(r) {
        u[r] = Lu(i, r)
    }),
    u
}
;
function Tt(a, i) {
    return !!(a & i)
}
function Rt(a, i, u) {
    return u ? a |= i : a &= ~i,
    a
}
function B1(a, i) {
    (i == null || i > a.length) && (i = a.length);
    for (var u = 0, r = Array(i); u < i; u++)
        r[u] = a[u];
    return r
}
function ky(a, i) {
    for (var u = 0; u < i.length; u++) {
        var r = i[u];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(a, Jy(r.key), r)
    }
}
function Bi(a, i, u) {
    return i && ky(a.prototype, i),
    Object.defineProperty(a, "prototype", {
        writable: !1
    }),
    a
}
function Ni(a, i) {
    var u = typeof Symbol < "u" && a[Symbol.iterator] || a["@@iterator"];
    if (u)
        return (u = u.call(a)).next.bind(u);
    if (Array.isArray(a) || (u = Fy(a)) || i) {
        u && (a = u);
        var r = 0;
        return function() {
            return r >= a.length ? {
                done: !0
            } : {
                done: !1,
                value: a[r++]
            }
        }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function za() {
    return za = Object.assign ? Object.assign.bind() : function(a) {
        for (var i = 1; i < arguments.length; i++) {
            var u = arguments[i];
            for (var r in u)
                ({}).hasOwnProperty.call(u, r) && (a[r] = u[r])
        }
        return a
    }
    ,
    za.apply(null, arguments)
}
function Qg(a, i) {
    a.prototype = Object.create(i.prototype),
    a.prototype.constructor = a,
    Fc(a, i)
}
function Fc(a, i) {
    return Fc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, r) {
        return u.__proto__ = r,
        u
    }
    ,
    Fc(a, i)
}
function Qy(a, i) {
    if (typeof a != "object" || !a)
        return a;
    var u = a[Symbol.toPrimitive];
    if (u !== void 0) {
        var r = u.call(a, i);
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(a)
}
function Jy(a) {
    var i = Qy(a, "string");
    return typeof i == "symbol" ? i : i + ""
}
function Fy(a, i) {
    if (a) {
        if (typeof a == "string")
            return B1(a, i);
        var u = {}.toString.call(a).slice(8, -1);
        return u === "Object" && a.constructor && (u = a.constructor.name),
        u === "Map" || u === "Set" ? Array.from(a) : u === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u) ? B1(a, i) : void 0
    }
}
var on = Symbol("mobx-stored-annotations");
function hn(a) {
    function i(u, r) {
        if (nr(r))
            return a.decorate_20223_(u, r);
        tr(u, r, a)
    }
    return Object.assign(i, a)
}
function tr(a, i, u) {
    jn(a, on) || er(a, on, za({}, a[on])),
    a_(u) || (a[on][i] = u)
}
function Py(a) {
    return jn(a, on) || er(a, on, za({}, a[on])),
    a[on]
}
function nr(a) {
    return typeof a == "object" && typeof a.kind == "string"
}
var ae = Symbol("mobx administration")
  , ca = function() {
    function a(u) {
        u === void 0 && (u = "Atom"),
        this.name_ = void 0,
        this.flags_ = 0,
        this.observers_ = new Set,
        this.lastAccessedBy_ = 0,
        this.lowestObserverState_ = Oe.NOT_TRACKING_,
        this.onBOL = void 0,
        this.onBUOL = void 0,
        this.name_ = u
    }
    var i = a.prototype;
    return i.onBO = function() {
        this.onBOL && this.onBOL.forEach(function(r) {
            return r()
        })
    }
    ,
    i.onBUO = function() {
        this.onBUOL && this.onBUOL.forEach(function(r) {
            return r()
        })
    }
    ,
    i.reportObserved = function() {
        return cv(this)
    }
    ,
    i.reportChanged = function() {
        qt(),
        fv(this),
        Gt()
    }
    ,
    i.toString = function() {
        return this.name_
    }
    ,
    Bi(a, [{
        key: "isBeingObserved",
        get: function() {
            return Tt(this.flags_, a.isBeingObservedMask_)
        },
        set: function(r) {
            this.flags_ = Rt(this.flags_, a.isBeingObservedMask_, r)
        }
    }, {
        key: "isPendingUnobservation",
        get: function() {
            return Tt(this.flags_, a.isPendingUnobservationMask_)
        },
        set: function(r) {
            this.flags_ = Rt(this.flags_, a.isPendingUnobservationMask_, r)
        }
    }, {
        key: "diffValue",
        get: function() {
            return Tt(this.flags_, a.diffValueMask_) ? 1 : 0
        },
        set: function(r) {
            this.flags_ = Rt(this.flags_, a.diffValueMask_, r === 1)
        }
    }])
}();
ca.isBeingObservedMask_ = 1;
ca.isPendingUnobservationMask_ = 2;
ca.diffValueMask_ = 4;
var Sf = Ba("Atom", ca);
function Jg(a, i, u) {
    i === void 0 && (i = wi),
    u === void 0 && (u = wi);
    var r = new ca(a);
    return i !== wi && ub(r, i),
    u !== wi && pv(r, u),
    r
}
function Wy(a, i) {
    return Mv(a, i)
}
function Iy(a, i) {
    return Object.is ? Object.is(a, i) : a === i ? a !== 0 || 1 / a === 1 / i : a !== a && i !== i
}
var Bu = {
    structural: Wy,
    default: Iy
};
function Ua(a, i, u) {
    return Sv(a) ? a : Array.isArray(a) ? at.array(a, {
        name: u
    }) : Un(a) ? at.object(a, void 0, {
        name: u
    }) : Li(a) ? at.map(a, {
        name: u
    }) : Dn(a) ? at.set(a, {
        name: u
    }) : typeof a == "function" && !Ql(a) && !Jl(a) ? Xg(a) ? zi(a) : kl(u, a) : a
}
function e_(a, i, u) {
    if (a == null || as(a) || ns(a) || Va(a) || sn(a))
        return a;
    if (Array.isArray(a))
        return at.array(a, {
            name: u,
            deep: !1
        });
    if (Un(a))
        return at.object(a, void 0, {
            name: u,
            deep: !1
        });
    if (Li(a))
        return at.map(a, {
            name: u,
            deep: !1
        });
    if (Dn(a))
        return at.set(a, {
            name: u,
            deep: !1
        })
}
function Wu(a) {
    return a
}
function t_(a, i) {
    return Mv(a, i) ? i : a
}
var n_ = "override";
function a_(a) {
    return a.annotationType_ === n_
}
function ar(a, i) {
    return {
        annotationType_: a,
        options_: i,
        make_: i_,
        extend_: l_,
        decorate_20223_: r_
    }
}
function i_(a, i, u, r) {
    var o;
    if ((o = this.options_) != null && o.bound)
        return this.extend_(a, i, u, !1) === null ? 0 : 1;
    if (r === a.target_)
        return this.extend_(a, i, u, !1) === null ? 0 : 2;
    if (Ql(u.value))
        return 1;
    var f = Fg(a, this, i, u, !1);
    return dn(r, i, f),
    2
}
function l_(a, i, u, r) {
    var o = Fg(a, this, i, u);
    return a.defineProperty_(i, o, r)
}
function r_(a, i) {
    var u = i.kind
      , r = i.name
      , o = i.addInitializer
      , f = this
      , d = function(v) {
        var y, _, M, U;
        return La((y = (_ = f.options_) == null ? void 0 : _.name) != null ? y : r.toString(), v, (M = (U = f.options_) == null ? void 0 : U.autoAction) != null ? M : !1)
    };
    if (u == "field")
        return function(p) {
            var v, y = p;
            return Ql(y) || (y = d(y)),
            (v = f.options_) != null && v.bound && (y = y.bind(this),
            y.isMobxAction = !0),
            y
        }
        ;
    if (u == "method") {
        var g;
        return Ql(a) || (a = d(a)),
        (g = this.options_) != null && g.bound && o(function() {
            var p = this
              , v = p[r].bind(p);
            v.isMobxAction = !0,
            p[r] = v
        }),
        a
    }
    _e("Cannot apply '" + f.annotationType_ + "' to '" + String(r) + "' (kind: " + u + "):" + (`
'` + f.annotationType_ + "' can only be used on properties with a function value."))
}
function u_(a, i, u, r) {
    i.annotationType_,
    r.value
}
function Fg(a, i, u, r, o) {
    var f, d, g, p, v, y, _;
    o === void 0 && (o = K.safeDescriptors),
    u_(a, i, u, r);
    var M = r.value;
    if ((f = i.options_) != null && f.bound) {
        var U;
        M = M.bind((U = a.proxy_) != null ? U : a.target_)
    }
    return {
        value: La((d = (g = i.options_) == null ? void 0 : g.name) != null ? d : u.toString(), M, (p = (v = i.options_) == null ? void 0 : v.autoAction) != null ? p : !1, (y = i.options_) != null && y.bound ? (_ = a.proxy_) != null ? _ : a.target_ : void 0),
        configurable: o ? a.isPlainObject_ : !0,
        enumerable: !1,
        writable: !o
    }
}
function Pg(a, i) {
    return {
        annotationType_: a,
        options_: i,
        make_: s_,
        extend_: o_,
        decorate_20223_: c_
    }
}
function s_(a, i, u, r) {
    var o;
    if (r === a.target_)
        return this.extend_(a, i, u, !1) === null ? 0 : 2;
    if ((o = this.options_) != null && o.bound && (!jn(a.target_, i) || !Jl(a.target_[i])) && this.extend_(a, i, u, !1) === null)
        return 0;
    if (Jl(u.value))
        return 1;
    var f = Wg(a, this, i, u, !1, !1);
    return dn(r, i, f),
    2
}
function o_(a, i, u, r) {
    var o, f = Wg(a, this, i, u, (o = this.options_) == null ? void 0 : o.bound);
    return a.defineProperty_(i, f, r)
}
function c_(a, i) {
    var u, r = i.name, o = i.addInitializer;
    return Jl(a) || (a = zi(a)),
    (u = this.options_) != null && u.bound && o(function() {
        var f = this
          , d = f[r].bind(f);
        d.isMobXFlow = !0,
        f[r] = d
    }),
    a
}
function f_(a, i, u, r) {
    i.annotationType_,
    r.value
}
function Wg(a, i, u, r, o, f) {
    f === void 0 && (f = K.safeDescriptors),
    f_(a, i, u, r);
    var d = r.value;
    if (Jl(d) || (d = zi(d)),
    o) {
        var g;
        d = d.bind((g = a.proxy_) != null ? g : a.target_),
        d.isMobXFlow = !0
    }
    return {
        value: d,
        configurable: f ? a.isPlainObject_ : !0,
        enumerable: !1,
        writable: !f
    }
}
function Of(a, i) {
    return {
        annotationType_: a,
        options_: i,
        make_: d_,
        extend_: h_,
        decorate_20223_: g_
    }
}
function d_(a, i, u) {
    return this.extend_(a, i, u, !1) === null ? 0 : 1
}
function h_(a, i, u, r) {
    return v_(a, this, i, u),
    a.defineComputedProperty_(i, za({}, this.options_, {
        get: u.get,
        set: u.set
    }), r)
}
function g_(a, i) {
    var u = this
      , r = i.name
      , o = i.addInitializer;
    return o(function() {
        var f = qa(this)[ae]
          , d = za({}, u.options_, {
            get: a,
            context: this
        });
        d.name || (d.name = "ObservableObject." + r.toString()),
        f.values_.set(r, new Wt(d))
    }),
    function() {
        return this[ae].getObservablePropValue_(r)
    }
}
function v_(a, i, u, r) {
    i.annotationType_,
    r.get
}
function Iu(a, i) {
    return {
        annotationType_: a,
        options_: i,
        make_: p_,
        extend_: m_,
        decorate_20223_: y_
    }
}
function p_(a, i, u) {
    return this.extend_(a, i, u, !1) === null ? 0 : 1
}
function m_(a, i, u, r) {
    var o, f;
    return __(a, this),
    a.defineObservableProperty_(i, u.value, (o = (f = this.options_) == null ? void 0 : f.enhancer) != null ? o : Ua, r)
}
function y_(a, i) {
    var u = this
      , r = i.kind
      , o = i.name
      , f = new WeakSet;
    function d(g, p) {
        var v, y, _ = qa(g)[ae], M = new Ma(p,(v = (y = u.options_) == null ? void 0 : y.enhancer) != null ? v : Ua,"ObservableObject." + o.toString(),!1);
        _.values_.set(o, M),
        f.add(g)
    }
    if (r == "accessor")
        return {
            get: function() {
                return f.has(this) || d(this, a.get.call(this)),
                this[ae].getObservablePropValue_(o)
            },
            set: function(p) {
                return f.has(this) || d(this, p),
                this[ae].setObservablePropValue_(o, p)
            },
            init: function(p) {
                return f.has(this) || d(this, p),
                p
            }
        }
}
function __(a, i, u, r) {
    i.annotationType_
}
var b_ = "true"
  , S_ = Ig();
function Ig(a) {
    return {
        annotationType_: b_,
        options_: a,
        make_: O_,
        extend_: E_,
        decorate_20223_: A_
    }
}
function O_(a, i, u, r) {
    var o, f;
    if (u.get)
        return es.make_(a, i, u, r);
    if (u.set) {
        var d = La(i.toString(), u.set);
        return r === a.target_ ? a.defineProperty_(i, {
            configurable: K.safeDescriptors ? a.isPlainObject_ : !0,
            set: d
        }) === null ? 0 : 2 : (dn(r, i, {
            configurable: !0,
            set: d
        }),
        2)
    }
    if (r !== a.target_ && typeof u.value == "function") {
        var g;
        if (Xg(u.value)) {
            var p, v = (p = this.options_) != null && p.autoBind ? zi.bound : zi;
            return v.make_(a, i, u, r)
        }
        var y = (g = this.options_) != null && g.autoBind ? kl.bound : kl;
        return y.make_(a, i, u, r)
    }
    var _ = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? at.ref : at;
    if (typeof u.value == "function" && (f = this.options_) != null && f.autoBind) {
        var M;
        u.value = u.value.bind((M = a.proxy_) != null ? M : a.target_)
    }
    return _.make_(a, i, u, r)
}
function E_(a, i, u, r) {
    var o, f;
    if (u.get)
        return es.extend_(a, i, u, r);
    if (u.set)
        return a.defineProperty_(i, {
            configurable: K.safeDescriptors ? a.isPlainObject_ : !0,
            set: La(i.toString(), u.set)
        }, r);
    if (typeof u.value == "function" && (o = this.options_) != null && o.autoBind) {
        var d;
        u.value = u.value.bind((d = a.proxy_) != null ? d : a.target_)
    }
    var g = ((f = this.options_) == null ? void 0 : f.deep) === !1 ? at.ref : at;
    return g.extend_(a, i, u, r)
}
function A_(a, i) {
    _e("'" + this.annotationType_ + "' cannot be used as a decorator")
}
var T_ = "observable"
  , R_ = "observable.ref"
  , x_ = "observable.shallow"
  , w_ = "observable.struct"
  , ev = {
    deep: !0,
    name: void 0,
    defaultDecorator: void 0,
    proxy: !0
};
Object.freeze(ev);
function Ru(a) {
    return a || ev
}
var Pc = Iu(T_)
  , N_ = Iu(R_, {
    enhancer: Wu
})
  , M_ = Iu(x_, {
    enhancer: e_
})
  , D_ = Iu(w_, {
    enhancer: t_
})
  , tv = hn(Pc);
function xu(a) {
    return a.deep === !0 ? Ua : a.deep === !1 ? Wu : j_(a.defaultDecorator)
}
function C_(a) {
    var i;
    return a ? (i = a.defaultDecorator) != null ? i : Ig(a) : void 0
}
function j_(a) {
    var i, u;
    return a && (i = (u = a.options_) == null ? void 0 : u.enhancer) != null ? i : Ua
}
function nv(a, i, u) {
    if (nr(i))
        return Pc.decorate_20223_(a, i);
    if (ja(i)) {
        tr(a, i, Pc);
        return
    }
    return Sv(a) ? a : Un(a) ? at.object(a, i, u) : Array.isArray(a) ? at.array(a, i) : Li(a) ? at.map(a, i) : Dn(a) ? at.set(a, i) : typeof a == "object" && a !== null ? a : at.box(a, i)
}
qg(nv, tv);
var z_ = {
    box: function(i, u) {
        var r = Ru(u);
        return new Ma(i,xu(r),r.name,!0,r.equals)
    },
    array: function(i, u) {
        var r = Ru(u);
        return (K.useProxies === !1 || r.proxy === !1 ? Db : Sb)(i, xu(r), r.name)
    },
    map: function(i, u) {
        var r = Ru(u);
        return new Av(i,xu(r),r.name)
    },
    set: function(i, u) {
        var r = Ru(u);
        return new Tv(i,xu(r),r.name)
    },
    object: function(i, u, r) {
        return fa(function() {
            return yv(K.useProxies === !1 || (r == null ? void 0 : r.proxy) === !1 ? qa({}, r) : mb({}, r), i, u)
        })
    },
    ref: hn(N_),
    shallow: hn(M_),
    deep: tv,
    struct: hn(D_)
}
  , at = qg(nv, z_)
  , av = "computed"
  , U_ = "computed.struct"
  , Wc = Of(av)
  , L_ = Of(U_, {
    equals: Bu.structural
})
  , es = function(i, u) {
    if (nr(u))
        return Wc.decorate_20223_(i, u);
    if (ja(u))
        return tr(i, u, Wc);
    if (Un(i))
        return hn(Of(av, i));
    var r = Un(u) ? u : {};
    return r.get = i,
    r.name || (r.name = i.name || ""),
    new Wt(r)
};
Object.assign(es, Wc);
es.struct = hn(L_);
var H1, V1, Hu = 0, B_ = 1, H_ = (H1 = (V1 = Lu(function() {}, "name")) == null ? void 0 : V1.configurable) != null ? H1 : !1, q1 = {
    value: "action",
    configurable: !0,
    writable: !1,
    enumerable: !1
};
function La(a, i, u, r) {
    u === void 0 && (u = !1);
    function o() {
        return V_(a, u, i, r || this, arguments)
    }
    return o.isMobxAction = !0,
    o.toString = function() {
        return i.toString()
    }
    ,
    H_ && (q1.value = a,
    dn(o, "name", q1)),
    o
}
function V_(a, i, u, r, o) {
    var f = q_(a, i);
    try {
        return u.apply(r, o)
    } catch (d) {
        throw f.error_ = d,
        d
    } finally {
        G_(f)
    }
}
function q_(a, i, u, r) {
    var o = !1
      , f = 0
      , d = K.trackingDerivation
      , g = !i || !d;
    qt();
    var p = K.allowStateChanges;
    g && (Ha(),
    p = Ef(!0));
    var v = Tf(!0)
      , y = {
        runAsAction_: g,
        prevDerivation_: d,
        prevAllowStateChanges_: p,
        prevAllowStateReads_: v,
        notifySpy_: o,
        startTime_: f,
        actionId_: B_++,
        parentActionId_: Hu
    };
    return Hu = y.actionId_,
    y
}
function G_(a) {
    Hu !== a.actionId_ && _e(30),
    Hu = a.parentActionId_,
    a.error_ !== void 0 && (K.suppressReactionErrors = !0),
    Af(a.prevAllowStateChanges_),
    Gl(a.prevAllowStateReads_),
    Gt(),
    a.runAsAction_ && zn(a.prevDerivation_),
    K.suppressReactionErrors = !1
}
function Ef(a) {
    var i = K.allowStateChanges;
    return K.allowStateChanges = a,
    i
}
function Af(a) {
    K.allowStateChanges = a
}
var Ma = function(a) {
    function i(r, o, f, d, g) {
        var p;
        return f === void 0 && (f = "ObservableValue"),
        g === void 0 && (g = Bu.default),
        p = a.call(this, f) || this,
        p.enhancer = void 0,
        p.name_ = void 0,
        p.equals = void 0,
        p.hasUnreportedChange_ = !1,
        p.interceptors_ = void 0,
        p.changeListeners_ = void 0,
        p.value_ = void 0,
        p.dehancer = void 0,
        p.enhancer = o,
        p.name_ = f,
        p.equals = g,
        p.value_ = o(r, void 0, f),
        p
    }
    Qg(i, a);
    var u = i.prototype;
    return u.dehanceValue = function(o) {
        return this.dehancer !== void 0 ? this.dehancer(o) : o
    }
    ,
    u.set = function(o) {
        this.value_,
        o = this.prepareNewValue_(o),
        o !== K.UNCHANGED && this.setNewValue_(o)
    }
    ,
    u.prepareNewValue_ = function(o) {
        if (Ht(this)) {
            var f = Vt(this, {
                object: this,
                type: gn,
                newValue: o
            });
            if (!f)
                return K.UNCHANGED;
            o = f.newValue
        }
        return o = this.enhancer(o, this.value_, this.name_),
        this.equals(this.value_, o) ? K.UNCHANGED : o
    }
    ,
    u.setNewValue_ = function(o) {
        var f = this.value_;
        this.value_ = o,
        this.reportChanged(),
        Jt(this) && Ft(this, {
            type: gn,
            object: this,
            newValue: o,
            oldValue: f
        })
    }
    ,
    u.get = function() {
        return this.reportObserved(),
        this.dehanceValue(this.value_)
    }
    ,
    u.intercept_ = function(o) {
        return ir(this, o)
    }
    ,
    u.observe_ = function(o, f) {
        return f && o({
            observableKind: "value",
            debugObjectName: this.name_,
            object: this,
            type: gn,
            newValue: this.value_,
            oldValue: void 0
        }),
        lr(this, o)
    }
    ,
    u.raw = function() {
        return this.value_
    }
    ,
    u.toJSON = function() {
        return this.get()
    }
    ,
    u.toString = function() {
        return this.name_ + "[" + this.value_ + "]"
    }
    ,
    u.valueOf = function() {
        return kg(this.get())
    }
    ,
    u[Symbol.toPrimitive] = function() {
        return this.valueOf()
    }
    ,
    i
}(ca)
  , Wt = function() {
    function a(u) {
        this.dependenciesState_ = Oe.NOT_TRACKING_,
        this.observing_ = [],
        this.newObserving_ = null,
        this.observers_ = new Set,
        this.runId_ = 0,
        this.lastAccessedBy_ = 0,
        this.lowestObserverState_ = Oe.UP_TO_DATE_,
        this.unboundDepsCount_ = 0,
        this.value_ = new qu(null),
        this.name_ = void 0,
        this.triggeredBy_ = void 0,
        this.flags_ = 0,
        this.derivation = void 0,
        this.setter_ = void 0,
        this.isTracing_ = Vu.NONE,
        this.scope_ = void 0,
        this.equals_ = void 0,
        this.requiresReaction_ = void 0,
        this.keepAlive_ = void 0,
        this.onBOL = void 0,
        this.onBUOL = void 0,
        u.get || _e(31),
        this.derivation = u.get,
        this.name_ = u.name || "ComputedValue",
        u.set && (this.setter_ = La("ComputedValue-setter", u.set)),
        this.equals_ = u.equals || (u.compareStructural || u.struct ? Bu.structural : Bu.default),
        this.scope_ = u.context,
        this.requiresReaction_ = u.requiresReaction,
        this.keepAlive_ = !!u.keepAlive
    }
    var i = a.prototype;
    return i.onBecomeStale_ = function() {
        $_(this)
    }
    ,
    i.onBO = function() {
        this.onBOL && this.onBOL.forEach(function(r) {
            return r()
        })
    }
    ,
    i.onBUO = function() {
        this.onBUOL && this.onBUOL.forEach(function(r) {
            return r()
        })
    }
    ,
    i.get = function() {
        if (this.isComputing && _e(32, this.name_, this.derivation),
        K.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
            Ic(this) && (this.warnAboutUntrackedRead_(),
            qt(),
            this.value_ = this.computeValue_(!1),
            Gt());
        else if (cv(this),
        Ic(this)) {
            var r = K.trackingContext;
            this.keepAlive_ && !r && (K.trackingContext = this),
            this.trackAndCompute() && Z_(this),
            K.trackingContext = r
        }
        var o = this.value_;
        if (Du(o))
            throw o.cause;
        return o
    }
    ,
    i.set = function(r) {
        if (this.setter_) {
            this.isRunningSetter && _e(33, this.name_),
            this.isRunningSetter = !0;
            try {
                this.setter_.call(this.scope_, r)
            } finally {
                this.isRunningSetter = !1
            }
        } else
            _e(34, this.name_)
    }
    ,
    i.trackAndCompute = function() {
        var r = this.value_
          , o = this.dependenciesState_ === Oe.NOT_TRACKING_
          , f = this.computeValue_(!0)
          , d = o || Du(r) || Du(f) || !this.equals_(r, f);
        return d && (this.value_ = f),
        d
    }
    ,
    i.computeValue_ = function(r) {
        this.isComputing = !0;
        var o = Ef(!1), f;
        if (r)
            f = iv(this, this.derivation, this.scope_);
        else if (K.disableErrorBoundaries === !0)
            f = this.derivation.call(this.scope_);
        else
            try {
                f = this.derivation.call(this.scope_)
            } catch (d) {
                f = new qu(d)
            }
        return Af(o),
        this.isComputing = !1,
        f
    }
    ,
    i.suspend_ = function() {
        this.keepAlive_ || (ef(this),
        this.value_ = void 0)
    }
    ,
    i.observe_ = function(r, o) {
        var f = this
          , d = !0
          , g = void 0;
        return nb(function() {
            var p = f.get();
            if (!d || o) {
                var v = Ha();
                r({
                    observableKind: "computed",
                    debugObjectName: f.name_,
                    type: gn,
                    object: f,
                    newValue: p,
                    oldValue: g
                }),
                zn(v)
            }
            d = !1,
            g = p
        })
    }
    ,
    i.warnAboutUntrackedRead_ = function() {}
    ,
    i.toString = function() {
        return this.name_ + "[" + this.derivation.toString() + "]"
    }
    ,
    i.valueOf = function() {
        return kg(this.get())
    }
    ,
    i[Symbol.toPrimitive] = function() {
        return this.valueOf()
    }
    ,
    Bi(a, [{
        key: "isComputing",
        get: function() {
            return Tt(this.flags_, a.isComputingMask_)
        },
        set: function(r) {
            this.flags_ = Rt(this.flags_, a.isComputingMask_, r)
        }
    }, {
        key: "isRunningSetter",
        get: function() {
            return Tt(this.flags_, a.isRunningSetterMask_)
        },
        set: function(r) {
            this.flags_ = Rt(this.flags_, a.isRunningSetterMask_, r)
        }
    }, {
        key: "isBeingObserved",
        get: function() {
            return Tt(this.flags_, a.isBeingObservedMask_)
        },
        set: function(r) {
            this.flags_ = Rt(this.flags_, a.isBeingObservedMask_, r)
        }
    }, {
        key: "isPendingUnobservation",
        get: function() {
            return Tt(this.flags_, a.isPendingUnobservationMask_)
        },
        set: function(r) {
            this.flags_ = Rt(this.flags_, a.isPendingUnobservationMask_, r)
        }
    }, {
        key: "diffValue",
        get: function() {
            return Tt(this.flags_, a.diffValueMask_) ? 1 : 0
        },
        set: function(r) {
            this.flags_ = Rt(this.flags_, a.diffValueMask_, r === 1)
        }
    }])
}();
Wt.isComputingMask_ = 1;
Wt.isRunningSetterMask_ = 2;
Wt.isBeingObservedMask_ = 4;
Wt.isPendingUnobservationMask_ = 8;
Wt.diffValueMask_ = 16;
var ts = Ba("ComputedValue", Wt), Oe;
(function(a) {
    a[a.NOT_TRACKING_ = -1] = "NOT_TRACKING_",
    a[a.UP_TO_DATE_ = 0] = "UP_TO_DATE_",
    a[a.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_",
    a[a.STALE_ = 2] = "STALE_"
}
)(Oe || (Oe = {}));
var Vu;
(function(a) {
    a[a.NONE = 0] = "NONE",
    a[a.LOG = 1] = "LOG",
    a[a.BREAK = 2] = "BREAK"
}
)(Vu || (Vu = {}));
var qu = function(i) {
    this.cause = void 0,
    this.cause = i
};
function Du(a) {
    return a instanceof qu
}
function Ic(a) {
    switch (a.dependenciesState_) {
    case Oe.UP_TO_DATE_:
        return !1;
    case Oe.NOT_TRACKING_:
    case Oe.STALE_:
        return !0;
    case Oe.POSSIBLY_STALE_:
        {
            for (var i = Tf(!0), u = Ha(), r = a.observing_, o = r.length, f = 0; f < o; f++) {
                var d = r[f];
                if (ts(d)) {
                    if (K.disableErrorBoundaries)
                        d.get();
                    else
                        try {
                            d.get()
                        } catch {
                            return zn(u),
                            Gl(i),
                            !0
                        }
                    if (a.dependenciesState_ === Oe.STALE_)
                        return zn(u),
                        Gl(i),
                        !0
                }
            }
            return rv(a),
            zn(u),
            Gl(i),
            !1
        }
    }
}
function iv(a, i, u) {
    var r = Tf(!0);
    rv(a),
    a.newObserving_ = new Array(a.runId_ === 0 ? 100 : a.observing_.length),
    a.unboundDepsCount_ = 0,
    a.runId_ = ++K.runId;
    var o = K.trackingDerivation;
    K.trackingDerivation = a,
    K.inBatch++;
    var f;
    if (K.disableErrorBoundaries === !0)
        f = i.call(u);
    else
        try {
            f = i.call(u)
        } catch (d) {
            f = new qu(d)
        }
    return K.inBatch--,
    K.trackingDerivation = o,
    Y_(a),
    Gl(r),
    f
}
function Y_(a) {
    for (var i = a.observing_, u = a.observing_ = a.newObserving_, r = Oe.UP_TO_DATE_, o = 0, f = a.unboundDepsCount_, d = 0; d < f; d++) {
        var g = u[d];
        g.diffValue === 0 && (g.diffValue = 1,
        o !== d && (u[o] = g),
        o++),
        g.dependenciesState_ > r && (r = g.dependenciesState_)
    }
    for (u.length = o,
    a.newObserving_ = null,
    f = i.length; f--; ) {
        var p = i[f];
        p.diffValue === 0 && sv(p, a),
        p.diffValue = 0
    }
    for (; o--; ) {
        var v = u[o];
        v.diffValue === 1 && (v.diffValue = 0,
        X_(v, a))
    }
    r !== Oe.UP_TO_DATE_ && (a.dependenciesState_ = r,
    a.onBecomeStale_())
}
function ef(a) {
    var i = a.observing_;
    a.observing_ = [];
    for (var u = i.length; u--; )
        sv(i[u], a);
    a.dependenciesState_ = Oe.NOT_TRACKING_
}
function lv(a) {
    var i = Ha();
    try {
        return a()
    } finally {
        zn(i)
    }
}
function Ha() {
    var a = K.trackingDerivation;
    return K.trackingDerivation = null,
    a
}
function zn(a) {
    K.trackingDerivation = a
}
function Tf(a) {
    var i = K.allowStateReads;
    return K.allowStateReads = a,
    i
}
function Gl(a) {
    K.allowStateReads = a
}
function rv(a) {
    if (a.dependenciesState_ !== Oe.UP_TO_DATE_) {
        a.dependenciesState_ = Oe.UP_TO_DATE_;
        for (var i = a.observing_, u = i.length; u--; )
            i[u].lowestObserverState_ = Oe.UP_TO_DATE_
    }
}
var Cu = function() {
    this.version = 6,
    this.UNCHANGED = {},
    this.trackingDerivation = null,
    this.trackingContext = null,
    this.runId = 0,
    this.mobxGuid = 0,
    this.inBatch = 0,
    this.pendingUnobservations = [],
    this.pendingReactions = [],
    this.isRunningReactions = !1,
    this.allowStateChanges = !1,
    this.allowStateReads = !0,
    this.enforceActions = !0,
    this.spyListeners = [],
    this.globalReactionErrorHandlers = [],
    this.computedRequiresReaction = !1,
    this.reactionRequiresObservable = !1,
    this.observableRequiresReaction = !1,
    this.disableErrorBoundaries = !1,
    this.suppressReactionErrors = !1,
    this.useProxies = !0,
    this.verifyProxies = !1,
    this.safeDescriptors = !0
}
  , ju = !0
  , uv = !1
  , K = function() {
    var a = Ju();
    return a.__mobxInstanceCount > 0 && !a.__mobxGlobals && (ju = !1),
    a.__mobxGlobals && a.__mobxGlobals.version !== new Cu().version && (ju = !1),
    ju ? a.__mobxGlobals ? (a.__mobxInstanceCount += 1,
    a.__mobxGlobals.UNCHANGED || (a.__mobxGlobals.UNCHANGED = {}),
    a.__mobxGlobals) : (a.__mobxInstanceCount = 1,
    a.__mobxGlobals = new Cu) : (setTimeout(function() {
        uv || _e(35)
    }, 1),
    new Cu)
}();
function K_() {
    if ((K.pendingReactions.length || K.inBatch || K.isRunningReactions) && _e(36),
    uv = !0,
    ju) {
        var a = Ju();
        --a.__mobxInstanceCount === 0 && (a.__mobxGlobals = void 0),
        K = new Cu
    }
}
function X_(a, i) {
    a.observers_.add(i),
    a.lowestObserverState_ > i.dependenciesState_ && (a.lowestObserverState_ = i.dependenciesState_)
}
function sv(a, i) {
    a.observers_.delete(i),
    a.observers_.size === 0 && ov(a)
}
function ov(a) {
    a.isPendingUnobservation === !1 && (a.isPendingUnobservation = !0,
    K.pendingUnobservations.push(a))
}
function qt() {
    K.inBatch++
}
function Gt() {
    if (--K.inBatch === 0) {
        dv();
        for (var a = K.pendingUnobservations, i = 0; i < a.length; i++) {
            var u = a[i];
            u.isPendingUnobservation = !1,
            u.observers_.size === 0 && (u.isBeingObserved && (u.isBeingObserved = !1,
            u.onBUO()),
            u instanceof Wt && u.suspend_())
        }
        K.pendingUnobservations = []
    }
}
function cv(a) {
    var i = K.trackingDerivation;
    return i !== null ? (i.runId_ !== a.lastAccessedBy_ && (a.lastAccessedBy_ = i.runId_,
    i.newObserving_[i.unboundDepsCount_++] = a,
    !a.isBeingObserved && K.trackingContext && (a.isBeingObserved = !0,
    a.onBO())),
    a.isBeingObserved) : (a.observers_.size === 0 && K.inBatch > 0 && ov(a),
    !1)
}
function fv(a) {
    a.lowestObserverState_ !== Oe.STALE_ && (a.lowestObserverState_ = Oe.STALE_,
    a.observers_.forEach(function(i) {
        i.dependenciesState_ === Oe.UP_TO_DATE_ && i.onBecomeStale_(),
        i.dependenciesState_ = Oe.STALE_
    }))
}
function Z_(a) {
    a.lowestObserverState_ !== Oe.STALE_ && (a.lowestObserverState_ = Oe.STALE_,
    a.observers_.forEach(function(i) {
        i.dependenciesState_ === Oe.POSSIBLY_STALE_ ? i.dependenciesState_ = Oe.STALE_ : i.dependenciesState_ === Oe.UP_TO_DATE_ && (a.lowestObserverState_ = Oe.UP_TO_DATE_)
    }))
}
function $_(a) {
    a.lowestObserverState_ === Oe.UP_TO_DATE_ && (a.lowestObserverState_ = Oe.POSSIBLY_STALE_,
    a.observers_.forEach(function(i) {
        i.dependenciesState_ === Oe.UP_TO_DATE_ && (i.dependenciesState_ = Oe.POSSIBLY_STALE_,
        i.onBecomeStale_())
    }))
}
var Ln = function() {
    function a(u, r, o, f) {
        u === void 0 && (u = "Reaction"),
        this.name_ = void 0,
        this.onInvalidate_ = void 0,
        this.errorHandler_ = void 0,
        this.requiresObservable_ = void 0,
        this.observing_ = [],
        this.newObserving_ = [],
        this.dependenciesState_ = Oe.NOT_TRACKING_,
        this.runId_ = 0,
        this.unboundDepsCount_ = 0,
        this.flags_ = 0,
        this.isTracing_ = Vu.NONE,
        this.name_ = u,
        this.onInvalidate_ = r,
        this.errorHandler_ = o,
        this.requiresObservable_ = f
    }
    var i = a.prototype;
    return i.onBecomeStale_ = function() {
        this.schedule_()
    }
    ,
    i.schedule_ = function() {
        this.isScheduled || (this.isScheduled = !0,
        K.pendingReactions.push(this),
        dv())
    }
    ,
    i.runReaction_ = function() {
        if (!this.isDisposed) {
            qt(),
            this.isScheduled = !1;
            var r = K.trackingContext;
            if (K.trackingContext = this,
            Ic(this)) {
                this.isTrackPending = !0;
                try {
                    this.onInvalidate_()
                } catch (o) {
                    this.reportExceptionInDerivation_(o)
                }
            }
            K.trackingContext = r,
            Gt()
        }
    }
    ,
    i.track = function(r) {
        if (!this.isDisposed) {
            qt(),
            this.isRunning = !0;
            var o = K.trackingContext;
            K.trackingContext = this;
            var f = iv(this, r, void 0);
            K.trackingContext = o,
            this.isRunning = !1,
            this.isTrackPending = !1,
            this.isDisposed && ef(this),
            Du(f) && this.reportExceptionInDerivation_(f.cause),
            Gt()
        }
    }
    ,
    i.reportExceptionInDerivation_ = function(r) {
        var o = this;
        if (this.errorHandler_) {
            this.errorHandler_(r, this);
            return
        }
        if (K.disableErrorBoundaries)
            throw r;
        var f = "[mobx] uncaught error in '" + this + "'";
        K.suppressReactionErrors || console.error(f, r),
        K.globalReactionErrorHandlers.forEach(function(d) {
            return d(r, o)
        })
    }
    ,
    i.dispose = function() {
        this.isDisposed || (this.isDisposed = !0,
        this.isRunning || (qt(),
        ef(this),
        Gt()))
    }
    ,
    i.getDisposer_ = function(r) {
        var o = this
          , f = function d() {
            o.dispose(),
            r == null || r.removeEventListener == null || r.removeEventListener("abort", d)
        };
        return r == null || r.addEventListener == null || r.addEventListener("abort", f),
        f[ae] = this,
        f
    }
    ,
    i.toString = function() {
        return "Reaction[" + this.name_ + "]"
    }
    ,
    i.trace = function(r) {}
    ,
    Bi(a, [{
        key: "isDisposed",
        get: function() {
            return Tt(this.flags_, a.isDisposedMask_)
        },
        set: function(r) {
            this.flags_ = Rt(this.flags_, a.isDisposedMask_, r)
        }
    }, {
        key: "isScheduled",
        get: function() {
            return Tt(this.flags_, a.isScheduledMask_)
        },
        set: function(r) {
            this.flags_ = Rt(this.flags_, a.isScheduledMask_, r)
        }
    }, {
        key: "isTrackPending",
        get: function() {
            return Tt(this.flags_, a.isTrackPendingMask_)
        },
        set: function(r) {
            this.flags_ = Rt(this.flags_, a.isTrackPendingMask_, r)
        }
    }, {
        key: "isRunning",
        get: function() {
            return Tt(this.flags_, a.isRunningMask_)
        },
        set: function(r) {
            this.flags_ = Rt(this.flags_, a.isRunningMask_, r)
        }
    }, {
        key: "diffValue",
        get: function() {
            return Tt(this.flags_, a.diffValueMask_) ? 1 : 0
        },
        set: function(r) {
            this.flags_ = Rt(this.flags_, a.diffValueMask_, r === 1)
        }
    }])
}();
Ln.isDisposedMask_ = 1;
Ln.isScheduledMask_ = 2;
Ln.isTrackPendingMask_ = 4;
Ln.isRunningMask_ = 8;
Ln.diffValueMask_ = 16;
var k_ = 100
  , tf = function(i) {
    return i()
};
function dv() {
    K.inBatch > 0 || K.isRunningReactions || tf(Q_)
}
function Q_() {
    K.isRunningReactions = !0;
    for (var a = K.pendingReactions, i = 0; a.length > 0; ) {
        ++i === k_ && (console.error("[mobx] cycle in reaction: " + a[0]),
        a.splice(0));
        for (var u = a.splice(0), r = 0, o = u.length; r < o; r++)
            u[r].runReaction_()
    }
    K.isRunningReactions = !1
}
var Gu = Ba("Reaction", Ln);
function J_(a) {
    var i = tf;
    tf = function(r) {
        return a(function() {
            return i(r)
        })
    }
}
function Yl() {
    return !1
}
function F_(a) {
    return console.warn("[mobx.spy] Is a no-op in production builds"),
    function() {}
}
var hv = "action"
  , P_ = "action.bound"
  , gv = "autoAction"
  , W_ = "autoAction.bound"
  , I_ = "<unnamed action>"
  , nf = ar(hv)
  , eb = ar(P_, {
    bound: !0
})
  , af = ar(gv, {
    autoAction: !0
})
  , tb = ar(W_, {
    autoAction: !0,
    bound: !0
});
function vv(a) {
    var i = function(r, o) {
        if (Pt(r))
            return La(r.name || I_, r, a);
        if (Pt(o))
            return La(r, o, a);
        if (nr(o))
            return (a ? af : nf).decorate_20223_(r, o);
        if (ja(o))
            return tr(r, o, a ? af : nf);
        if (ja(r))
            return hn(ar(a ? gv : hv, {
                name: r,
                autoAction: a
            }))
    };
    return i
}
var Mi = vv(!1);
Object.assign(Mi, nf);
var kl = vv(!0);
Object.assign(kl, af);
Mi.bound = hn(eb);
kl.bound = hn(tb);
function Ql(a) {
    return Pt(a) && a.isMobxAction === !0
}
function nb(a, i) {
    var u, r, o, f;
    i === void 0 && (i = Gg);
    var d = (u = (r = i) == null ? void 0 : r.name) != null ? u : "Autorun", g = !i.scheduler && !i.delay, p;
    if (g)
        p = new Ln(d,function() {
            this.track(_)
        }
        ,i.onError,i.requiresObservable);
    else {
        var v = ib(i)
          , y = !1;
        p = new Ln(d,function() {
            y || (y = !0,
            v(function() {
                y = !1,
                p.isDisposed || p.track(_)
            }))
        }
        ,i.onError,i.requiresObservable)
    }
    function _() {
        a(p)
    }
    return (o = i) != null && (o = o.signal) != null && o.aborted || p.schedule_(),
    p.getDisposer_((f = i) == null ? void 0 : f.signal)
}
var ab = function(i) {
    return i()
};
function ib(a) {
    return a.scheduler ? a.scheduler : a.delay ? function(i) {
        return setTimeout(i, a.delay)
    }
    : ab
}
var lb = "onBO"
  , rb = "onBUO";
function ub(a, i, u) {
    return mv(lb, a, i, u)
}
function pv(a, i, u) {
    return mv(rb, a, i, u)
}
function mv(a, i, u, r) {
    var o = Xu(i)
      , f = Pt(r) ? r : u
      , d = a + "L";
    return o[d] ? o[d].add(f) : o[d] = new Set([f]),
    function() {
        var g = o[d];
        g && (g.delete(f),
        g.size === 0 && delete o[d])
    }
}
var sb = "never"
  , wu = "always"
  , ob = "observed";
function cb(a) {
    a.isolateGlobalState === !0 && K_();
    var i = a.useProxies
      , u = a.enforceActions;
    if (i !== void 0 && (K.useProxies = i === wu ? !0 : i === sb ? !1 : typeof Proxy < "u"),
    i === "ifavailable" && (K.verifyProxies = !0),
    u !== void 0) {
        var r = u === wu ? wu : u === ob;
        K.enforceActions = r,
        K.allowStateChanges = !(r === !0 || r === wu)
    }
    ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(o) {
        o in a && (K[o] = !!a[o])
    }),
    K.allowStateReads = !K.observableRequiresReaction,
    a.reactionScheduler && J_(a.reactionScheduler)
}
function yv(a, i, u, r) {
    var o = $y(i);
    return fa(function() {
        var f = qa(a, r)[ae];
        ji(o).forEach(function(d) {
            f.extend_(d, o[d], u && d in u ? u[d] : !0)
        })
    }),
    a
}
function fb(a, i) {
    return _v(Xu(a, i))
}
function _v(a) {
    var i = {
        name: a.name_
    };
    return a.observing_ && a.observing_.length > 0 && (i.dependencies = db(a.observing_).map(_v)),
    i
}
function db(a) {
    return Array.from(new Set(a))
}
var hb = 0;
function bv() {
    this.message = "FLOW_CANCELLED"
}
bv.prototype = Object.create(Error.prototype);
var Dc = Pg("flow")
  , gb = Pg("flow.bound", {
    bound: !0
})
  , zi = Object.assign(function(i, u) {
    if (nr(u))
        return Dc.decorate_20223_(i, u);
    if (ja(u))
        return tr(i, u, Dc);
    var r = i
      , o = r.name || "<unnamed flow>"
      , f = function() {
        var g = this, p = arguments, v = ++hb, y = Mi(o + " - runid: " + v + " - init", r).apply(g, p), _, M = void 0, U = new Promise(function(N, C) {
            var Z = 0;
            _ = C;
            function re(ie) {
                M = void 0;
                var Q;
                try {
                    Q = Mi(o + " - runid: " + v + " - yield " + Z++, y.next).call(y, ie)
                } catch (q) {
                    return C(q)
                }
                te(Q)
            }
            function ue(ie) {
                M = void 0;
                var Q;
                try {
                    Q = Mi(o + " - runid: " + v + " - yield " + Z++, y.throw).call(y, ie)
                } catch (q) {
                    return C(q)
                }
                te(Q)
            }
            function te(ie) {
                if (Pt(ie == null ? void 0 : ie.then)) {
                    ie.then(te, C);
                    return
                }
                return ie.done ? N(ie.value) : (M = Promise.resolve(ie.value),
                M.then(re, ue))
            }
            re(void 0)
        }
        );
        return U.cancel = Mi(o + " - runid: " + v + " - cancel", function() {
            try {
                M && G1(M);
                var N = y.return(void 0)
                  , C = Promise.resolve(N.value);
                C.then(wi, wi),
                G1(C),
                _(new bv)
            } catch (Z) {
                _(Z)
            }
        }),
        U
    };
    return f.isMobXFlow = !0,
    f
}, Dc);
zi.bound = hn(gb);
function G1(a) {
    Pt(a.cancel) && a.cancel()
}
function Jl(a) {
    return (a == null ? void 0 : a.isMobXFlow) === !0
}
function vb(a, i) {
    return a ? as(a) || !!a[ae] || Sf(a) || Gu(a) || ts(a) : !1
}
function Sv(a) {
    return vb(a)
}
function Cn(a, i) {
    i === void 0 && (i = void 0),
    qt();
    try {
        return a.apply(i)
    } finally {
        Gt()
    }
}
function Ri(a) {
    return a[ae]
}
var pb = {
    has: function(i, u) {
        return Ri(i).has_(u)
    },
    get: function(i, u) {
        return Ri(i).get_(u)
    },
    set: function(i, u, r) {
        var o;
        return ja(u) ? (o = Ri(i).set_(u, r, !0)) != null ? o : !0 : !1
    },
    deleteProperty: function(i, u) {
        var r;
        return ja(u) ? (r = Ri(i).delete_(u, !0)) != null ? r : !0 : !1
    },
    defineProperty: function(i, u, r) {
        var o;
        return (o = Ri(i).defineProperty_(u, r)) != null ? o : !0
    },
    ownKeys: function(i) {
        return Ri(i).ownKeys_()
    },
    preventExtensions: function(i) {
        _e(13)
    }
};
function mb(a, i) {
    var u, r;
    return Yg(),
    a = qa(a, i),
    (r = (u = a[ae]).proxy_) != null ? r : u.proxy_ = new Proxy(a,pb)
}
function Ht(a) {
    return a.interceptors_ !== void 0 && a.interceptors_.length > 0
}
function ir(a, i) {
    var u = a.interceptors_ || (a.interceptors_ = []);
    return u.push(i),
    Kg(function() {
        var r = u.indexOf(i);
        r !== -1 && u.splice(r, 1)
    })
}
function Vt(a, i) {
    var u = Ha();
    try {
        for (var r = [].concat(a.interceptors_ || []), o = 0, f = r.length; o < f && (i = r[o](i),
        i && !i.type && _e(14),
        !!i); o++)
            ;
        return i
    } finally {
        zn(u)
    }
}
function Jt(a) {
    return a.changeListeners_ !== void 0 && a.changeListeners_.length > 0
}
function lr(a, i) {
    var u = a.changeListeners_ || (a.changeListeners_ = []);
    return u.push(i),
    Kg(function() {
        var r = u.indexOf(i);
        r !== -1 && u.splice(r, 1)
    })
}
function Ft(a, i) {
    var u = Ha()
      , r = a.changeListeners_;
    if (r) {
        r = r.slice();
        for (var o = 0, f = r.length; o < f; o++)
            r[o](i);
        zn(u)
    }
}
function yb(a, i, u) {
    return fa(function() {
        var r, o = qa(a, u)[ae];
        (r = i) != null || (i = Py(a)),
        ji(i).forEach(function(f) {
            return o.make_(f, i[f])
        })
    }),
    a
}
var Cc = Symbol("mobx-keys");
function Ov(a, i, u) {
    return Un(a) ? yv(a, a, i, u) : (fa(function() {
        var r = qa(a, u)[ae];
        if (!a[Cc]) {
            var o = Object.getPrototypeOf(a)
              , f = new Set([].concat(ji(a), ji(o)));
            f.delete("constructor"),
            f.delete(ae),
            er(o, Cc, f)
        }
        a[Cc].forEach(function(d) {
            return r.make_(d, i && d in i ? i[d] : !0)
        })
    }),
    a)
}
var Y1 = "splice"
  , gn = "update"
  , _b = 1e4
  , bb = {
    get: function(i, u) {
        var r = i[ae];
        return u === ae ? r : u === "length" ? r.getArrayLength_() : typeof u == "string" && !isNaN(u) ? r.get_(parseInt(u)) : jn(Yu, u) ? Yu[u] : i[u]
    },
    set: function(i, u, r) {
        var o = i[ae];
        return u === "length" && o.setArrayLength_(r),
        typeof u == "symbol" || isNaN(u) ? i[u] = r : o.set_(parseInt(u), r),
        !0
    },
    preventExtensions: function() {
        _e(15)
    }
}
  , Rf = function() {
    function a(u, r, o, f) {
        u === void 0 && (u = "ObservableArray"),
        this.owned_ = void 0,
        this.legacyMode_ = void 0,
        this.atom_ = void 0,
        this.values_ = [],
        this.interceptors_ = void 0,
        this.changeListeners_ = void 0,
        this.enhancer_ = void 0,
        this.dehancer = void 0,
        this.proxy_ = void 0,
        this.lastKnownLength_ = 0,
        this.owned_ = o,
        this.legacyMode_ = f,
        this.atom_ = new ca(u),
        this.enhancer_ = function(d, g) {
            return r(d, g, "ObservableArray[..]")
        }
    }
    var i = a.prototype;
    return i.dehanceValue_ = function(r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r
    }
    ,
    i.dehanceValues_ = function(r) {
        return this.dehancer !== void 0 && r.length > 0 ? r.map(this.dehancer) : r
    }
    ,
    i.intercept_ = function(r) {
        return ir(this, r)
    }
    ,
    i.observe_ = function(r, o) {
        return o === void 0 && (o = !1),
        o && r({
            observableKind: "array",
            object: this.proxy_,
            debugObjectName: this.atom_.name_,
            type: "splice",
            index: 0,
            added: this.values_.slice(),
            addedCount: this.values_.length,
            removed: [],
            removedCount: 0
        }),
        lr(this, r)
    }
    ,
    i.getArrayLength_ = function() {
        return this.atom_.reportObserved(),
        this.values_.length
    }
    ,
    i.setArrayLength_ = function(r) {
        (typeof r != "number" || isNaN(r) || r < 0) && _e("Out of range: " + r);
        var o = this.values_.length;
        if (r !== o)
            if (r > o) {
                for (var f = new Array(r - o), d = 0; d < r - o; d++)
                    f[d] = void 0;
                this.spliceWithArray_(o, 0, f)
            } else
                this.spliceWithArray_(r, o - r)
    }
    ,
    i.updateArrayLength_ = function(r, o) {
        r !== this.lastKnownLength_ && _e(16),
        this.lastKnownLength_ += o,
        this.legacyMode_ && o > 0 && Nv(r + o + 1)
    }
    ,
    i.spliceWithArray_ = function(r, o, f) {
        var d = this;
        this.atom_;
        var g = this.values_.length;
        if (r === void 0 ? r = 0 : r > g ? r = g : r < 0 && (r = Math.max(0, g + r)),
        arguments.length === 1 ? o = g - r : o == null ? o = 0 : o = Math.max(0, Math.min(o, g - r)),
        f === void 0 && (f = Jc),
        Ht(this)) {
            var p = Vt(this, {
                object: this.proxy_,
                type: Y1,
                index: r,
                removedCount: o,
                added: f
            });
            if (!p)
                return Jc;
            o = p.removedCount,
            f = p.added
        }
        if (f = f.length === 0 ? f : f.map(function(_) {
            return d.enhancer_(_, void 0)
        }),
        this.legacyMode_) {
            var v = f.length - o;
            this.updateArrayLength_(g, v)
        }
        var y = this.spliceItemsIntoValues_(r, o, f);
        return (o !== 0 || f.length !== 0) && this.notifyArraySplice_(r, f, y),
        this.dehanceValues_(y)
    }
    ,
    i.spliceItemsIntoValues_ = function(r, o, f) {
        if (f.length < _b) {
            var d;
            return (d = this.values_).splice.apply(d, [r, o].concat(f))
        } else {
            var g = this.values_.slice(r, r + o)
              , p = this.values_.slice(r + o);
            this.values_.length += f.length - o;
            for (var v = 0; v < f.length; v++)
                this.values_[r + v] = f[v];
            for (var y = 0; y < p.length; y++)
                this.values_[r + f.length + y] = p[y];
            return g
        }
    }
    ,
    i.notifyArrayChildUpdate_ = function(r, o, f) {
        var d = !this.owned_ && Yl()
          , g = Jt(this)
          , p = g || d ? {
            observableKind: "array",
            object: this.proxy_,
            type: gn,
            debugObjectName: this.atom_.name_,
            index: r,
            newValue: o,
            oldValue: f
        } : null;
        this.atom_.reportChanged(),
        g && Ft(this, p)
    }
    ,
    i.notifyArraySplice_ = function(r, o, f) {
        var d = !this.owned_ && Yl()
          , g = Jt(this)
          , p = g || d ? {
            observableKind: "array",
            object: this.proxy_,
            debugObjectName: this.atom_.name_,
            type: Y1,
            index: r,
            removed: f,
            added: o,
            removedCount: f.length,
            addedCount: o.length
        } : null;
        this.atom_.reportChanged(),
        g && Ft(this, p)
    }
    ,
    i.get_ = function(r) {
        if (this.legacyMode_ && r >= this.values_.length) {
            console.warn("[mobx] Out of bounds read: " + r);
            return
        }
        return this.atom_.reportObserved(),
        this.dehanceValue_(this.values_[r])
    }
    ,
    i.set_ = function(r, o) {
        var f = this.values_;
        if (this.legacyMode_ && r > f.length && _e(17, r, f.length),
        r < f.length) {
            this.atom_;
            var d = f[r];
            if (Ht(this)) {
                var g = Vt(this, {
                    type: gn,
                    object: this.proxy_,
                    index: r,
                    newValue: o
                });
                if (!g)
                    return;
                o = g.newValue
            }
            o = this.enhancer_(o, d);
            var p = o !== d;
            p && (f[r] = o,
            this.notifyArrayChildUpdate_(r, o, d))
        } else {
            for (var v = new Array(r + 1 - f.length), y = 0; y < v.length - 1; y++)
                v[y] = void 0;
            v[v.length - 1] = o,
            this.spliceWithArray_(f.length, 0, v)
        }
    }
    ,
    a
}();
function Sb(a, i, u, r) {
    return u === void 0 && (u = "ObservableArray"),
    r === void 0 && (r = !1),
    Yg(),
    fa(function() {
        var o = new Rf(u,i,r,!1);
        Zg(o.values_, ae, o);
        var f = new Proxy(o.values_,bb);
        return o.proxy_ = f,
        a && a.length && o.spliceWithArray_(0, 0, a),
        f
    })
}
var Yu = {
    clear: function() {
        return this.splice(0)
    },
    replace: function(i) {
        var u = this[ae];
        return u.spliceWithArray_(0, u.values_.length, i)
    },
    toJSON: function() {
        return this.slice()
    },
    splice: function(i, u) {
        for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), f = 2; f < r; f++)
            o[f - 2] = arguments[f];
        var d = this[ae];
        switch (arguments.length) {
        case 0:
            return [];
        case 1:
            return d.spliceWithArray_(i);
        case 2:
            return d.spliceWithArray_(i, u)
        }
        return d.spliceWithArray_(i, u, o)
    },
    spliceWithArray: function(i, u, r) {
        return this[ae].spliceWithArray_(i, u, r)
    },
    push: function() {
        for (var i = this[ae], u = arguments.length, r = new Array(u), o = 0; o < u; o++)
            r[o] = arguments[o];
        return i.spliceWithArray_(i.values_.length, 0, r),
        i.values_.length
    },
    pop: function() {
        return this.splice(Math.max(this[ae].values_.length - 1, 0), 1)[0]
    },
    shift: function() {
        return this.splice(0, 1)[0]
    },
    unshift: function() {
        for (var i = this[ae], u = arguments.length, r = new Array(u), o = 0; o < u; o++)
            r[o] = arguments[o];
        return i.spliceWithArray_(0, 0, r),
        i.values_.length
    },
    reverse: function() {
        return K.trackingDerivation && _e(37, "reverse"),
        this.replace(this.slice().reverse()),
        this
    },
    sort: function() {
        K.trackingDerivation && _e(37, "sort");
        var i = this.slice();
        return i.sort.apply(i, arguments),
        this.replace(i),
        this
    },
    remove: function(i) {
        var u = this[ae]
          , r = u.dehanceValues_(u.values_).indexOf(i);
        return r > -1 ? (this.splice(r, 1),
        !0) : !1
    }
};
Ce("at", xt);
Ce("concat", xt);
Ce("flat", xt);
Ce("includes", xt);
Ce("indexOf", xt);
Ce("join", xt);
Ce("lastIndexOf", xt);
Ce("slice", xt);
Ce("toString", xt);
Ce("toLocaleString", xt);
Ce("toSorted", xt);
Ce("toSpliced", xt);
Ce("with", xt);
Ce("every", It);
Ce("filter", It);
Ce("find", It);
Ce("findIndex", It);
Ce("findLast", It);
Ce("findLastIndex", It);
Ce("flatMap", It);
Ce("forEach", It);
Ce("map", It);
Ce("some", It);
Ce("toReversed", It);
Ce("reduce", Ev);
Ce("reduceRight", Ev);
function Ce(a, i) {
    typeof Array.prototype[a] == "function" && (Yu[a] = i(a))
}
function xt(a) {
    return function() {
        var i = this[ae];
        i.atom_.reportObserved();
        var u = i.dehanceValues_(i.values_);
        return u[a].apply(u, arguments)
    }
}
function It(a) {
    return function(i, u) {
        var r = this
          , o = this[ae];
        o.atom_.reportObserved();
        var f = o.dehanceValues_(o.values_);
        return f[a](function(d, g) {
            return i.call(u, d, g, r)
        })
    }
}
function Ev(a) {
    return function() {
        var i = this
          , u = this[ae];
        u.atom_.reportObserved();
        var r = u.dehanceValues_(u.values_)
          , o = arguments[0];
        return arguments[0] = function(f, d, g) {
            return o(f, d, g, i)
        }
        ,
        r[a].apply(r, arguments)
    }
}
var Ob = Ba("ObservableArrayAdministration", Rf);
function ns(a) {
    return Pu(a) && Ob(a[ae])
}
var Eb = {}
  , oa = "add"
  , Ku = "delete"
  , Av = function() {
    function a(u, r, o) {
        var f = this;
        r === void 0 && (r = Ua),
        o === void 0 && (o = "ObservableMap"),
        this.enhancer_ = void 0,
        this.name_ = void 0,
        this[ae] = Eb,
        this.data_ = void 0,
        this.hasMap_ = void 0,
        this.keysAtom_ = void 0,
        this.interceptors_ = void 0,
        this.changeListeners_ = void 0,
        this.dehancer = void 0,
        this.enhancer_ = r,
        this.name_ = o,
        Pt(Map) || _e(18),
        fa(function() {
            f.keysAtom_ = Jg("ObservableMap.keys()"),
            f.data_ = new Map,
            f.hasMap_ = new Map,
            u && f.merge(u)
        })
    }
    var i = a.prototype;
    return i.has_ = function(r) {
        return this.data_.has(r)
    }
    ,
    i.has = function(r) {
        var o = this;
        if (!K.trackingDerivation)
            return this.has_(r);
        var f = this.hasMap_.get(r);
        if (!f) {
            var d = f = new Ma(this.has_(r),Wu,"ObservableMap.key?",!1);
            this.hasMap_.set(r, d),
            pv(d, function() {
                return o.hasMap_.delete(r)
            })
        }
        return f.get()
    }
    ,
    i.set = function(r, o) {
        var f = this.has_(r);
        if (Ht(this)) {
            var d = Vt(this, {
                type: f ? gn : oa,
                object: this,
                newValue: o,
                name: r
            });
            if (!d)
                return this;
            o = d.newValue
        }
        return f ? this.updateValue_(r, o) : this.addValue_(r, o),
        this
    }
    ,
    i.delete = function(r) {
        var o = this;
        if (this.keysAtom_,
        Ht(this)) {
            var f = Vt(this, {
                type: Ku,
                object: this,
                name: r
            });
            if (!f)
                return !1
        }
        if (this.has_(r)) {
            var d = Yl()
              , g = Jt(this)
              , p = g || d ? {
                observableKind: "map",
                debugObjectName: this.name_,
                type: Ku,
                object: this,
                oldValue: this.data_.get(r).value_,
                name: r
            } : null;
            return Cn(function() {
                var v;
                o.keysAtom_.reportChanged(),
                (v = o.hasMap_.get(r)) == null || v.setNewValue_(!1);
                var y = o.data_.get(r);
                y.setNewValue_(void 0),
                o.data_.delete(r)
            }),
            g && Ft(this, p),
            !0
        }
        return !1
    }
    ,
    i.updateValue_ = function(r, o) {
        var f = this.data_.get(r);
        if (o = f.prepareNewValue_(o),
        o !== K.UNCHANGED) {
            var d = Yl()
              , g = Jt(this)
              , p = g || d ? {
                observableKind: "map",
                debugObjectName: this.name_,
                type: gn,
                object: this,
                oldValue: f.value_,
                name: r,
                newValue: o
            } : null;
            f.setNewValue_(o),
            g && Ft(this, p)
        }
    }
    ,
    i.addValue_ = function(r, o) {
        var f = this;
        this.keysAtom_,
        Cn(function() {
            var v, y = new Ma(o,f.enhancer_,"ObservableMap.key",!1);
            f.data_.set(r, y),
            o = y.value_,
            (v = f.hasMap_.get(r)) == null || v.setNewValue_(!0),
            f.keysAtom_.reportChanged()
        });
        var d = Yl()
          , g = Jt(this)
          , p = g || d ? {
            observableKind: "map",
            debugObjectName: this.name_,
            type: oa,
            object: this,
            name: r,
            newValue: o
        } : null;
        g && Ft(this, p)
    }
    ,
    i.get = function(r) {
        return this.has(r) ? this.dehanceValue_(this.data_.get(r).get()) : this.dehanceValue_(void 0)
    }
    ,
    i.dehanceValue_ = function(r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r
    }
    ,
    i.keys = function() {
        return this.keysAtom_.reportObserved(),
        this.data_.keys()
    }
    ,
    i.values = function() {
        var r = this
          , o = this.keys();
        return K1({
            next: function() {
                var d = o.next()
                  , g = d.done
                  , p = d.value;
                return {
                    done: g,
                    value: g ? void 0 : r.get(p)
                }
            }
        })
    }
    ,
    i.entries = function() {
        var r = this
          , o = this.keys();
        return K1({
            next: function() {
                var d = o.next()
                  , g = d.done
                  , p = d.value;
                return {
                    done: g,
                    value: g ? void 0 : [p, r.get(p)]
                }
            }
        })
    }
    ,
    i[Symbol.iterator] = function() {
        return this.entries()
    }
    ,
    i.forEach = function(r, o) {
        for (var f = Ni(this), d; !(d = f()).done; ) {
            var g = d.value
              , p = g[0]
              , v = g[1];
            r.call(o, v, p, this)
        }
    }
    ,
    i.merge = function(r) {
        var o = this;
        return Va(r) && (r = new Map(r)),
        Cn(function() {
            Un(r) ? Zy(r).forEach(function(f) {
                return o.set(f, r[f])
            }) : Array.isArray(r) ? r.forEach(function(f) {
                var d = f[0]
                  , g = f[1];
                return o.set(d, g)
            }) : Li(r) ? (Xy(r) || _e(19, r),
            r.forEach(function(f, d) {
                return o.set(d, f)
            })) : r != null && _e(20, r)
        }),
        this
    }
    ,
    i.clear = function() {
        var r = this;
        Cn(function() {
            lv(function() {
                for (var o = Ni(r.keys()), f; !(f = o()).done; ) {
                    var d = f.value;
                    r.delete(d)
                }
            })
        })
    }
    ,
    i.replace = function(r) {
        var o = this;
        return Cn(function() {
            for (var f = Ab(r), d = new Map, g = !1, p = Ni(o.data_.keys()), v; !(v = p()).done; ) {
                var y = v.value;
                if (!f.has(y)) {
                    var _ = o.delete(y);
                    if (_)
                        g = !0;
                    else {
                        var M = o.data_.get(y);
                        d.set(y, M)
                    }
                }
            }
            for (var U = Ni(f.entries()), N; !(N = U()).done; ) {
                var C = N.value
                  , Z = C[0]
                  , re = C[1]
                  , ue = o.data_.has(Z);
                if (o.set(Z, re),
                o.data_.has(Z)) {
                    var te = o.data_.get(Z);
                    d.set(Z, te),
                    ue || (g = !0)
                }
            }
            if (!g)
                if (o.data_.size !== d.size)
                    o.keysAtom_.reportChanged();
                else
                    for (var ie = o.data_.keys(), Q = d.keys(), q = ie.next(), J = Q.next(); !q.done; ) {
                        if (q.value !== J.value) {
                            o.keysAtom_.reportChanged();
                            break
                        }
                        q = ie.next(),
                        J = Q.next()
                    }
            o.data_ = d
        }),
        this
    }
    ,
    i.toString = function() {
        return "[object ObservableMap]"
    }
    ,
    i.toJSON = function() {
        return Array.from(this)
    }
    ,
    i.observe_ = function(r, o) {
        return lr(this, r)
    }
    ,
    i.intercept_ = function(r) {
        return ir(this, r)
    }
    ,
    Bi(a, [{
        key: "size",
        get: function() {
            return this.keysAtom_.reportObserved(),
            this.data_.size
        }
    }, {
        key: Symbol.toStringTag,
        get: function() {
            return "Map"
        }
    }])
}()
  , Va = Ba("ObservableMap", Av);
function K1(a) {
    return a[Symbol.toStringTag] = "MapIterator",
    wf(a)
}
function Ab(a) {
    if (Li(a) || Va(a))
        return a;
    if (Array.isArray(a))
        return new Map(a);
    if (Un(a)) {
        var i = new Map;
        for (var u in a)
            i.set(u, a[u]);
        return i
    } else
        return _e(21, a)
}
var Tb = {}
  , Tv = function() {
    function a(u, r, o) {
        var f = this;
        r === void 0 && (r = Ua),
        o === void 0 && (o = "ObservableSet"),
        this.name_ = void 0,
        this[ae] = Tb,
        this.data_ = new Set,
        this.atom_ = void 0,
        this.changeListeners_ = void 0,
        this.interceptors_ = void 0,
        this.dehancer = void 0,
        this.enhancer_ = void 0,
        this.name_ = o,
        Pt(Set) || _e(22),
        this.enhancer_ = function(d, g) {
            return r(d, g, o)
        }
        ,
        fa(function() {
            f.atom_ = Jg(f.name_),
            u && f.replace(u)
        })
    }
    var i = a.prototype;
    return i.dehanceValue_ = function(r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r
    }
    ,
    i.clear = function() {
        var r = this;
        Cn(function() {
            lv(function() {
                for (var o = Ni(r.data_.values()), f; !(f = o()).done; ) {
                    var d = f.value;
                    r.delete(d)
                }
            })
        })
    }
    ,
    i.forEach = function(r, o) {
        for (var f = Ni(this), d; !(d = f()).done; ) {
            var g = d.value;
            r.call(o, g, g, this)
        }
    }
    ,
    i.add = function(r) {
        var o = this;
        if (this.atom_,
        Ht(this)) {
            var f = Vt(this, {
                type: oa,
                object: this,
                newValue: r
            });
            if (!f)
                return this;
            r = f.newValue
        }
        if (!this.has(r)) {
            Cn(function() {
                o.data_.add(o.enhancer_(r, void 0)),
                o.atom_.reportChanged()
            });
            var d = !1
              , g = Jt(this)
              , p = g || d ? {
                observableKind: "set",
                debugObjectName: this.name_,
                type: oa,
                object: this,
                newValue: r
            } : null;
            g && Ft(this, p)
        }
        return this
    }
    ,
    i.delete = function(r) {
        var o = this;
        if (Ht(this)) {
            var f = Vt(this, {
                type: Ku,
                object: this,
                oldValue: r
            });
            if (!f)
                return !1
        }
        if (this.has(r)) {
            var d = !1
              , g = Jt(this)
              , p = g || d ? {
                observableKind: "set",
                debugObjectName: this.name_,
                type: Ku,
                object: this,
                oldValue: r
            } : null;
            return Cn(function() {
                o.atom_.reportChanged(),
                o.data_.delete(r)
            }),
            g && Ft(this, p),
            !0
        }
        return !1
    }
    ,
    i.has = function(r) {
        return this.atom_.reportObserved(),
        this.data_.has(this.dehanceValue_(r))
    }
    ,
    i.entries = function() {
        var r = this.values();
        return X1({
            next: function() {
                var f = r.next()
                  , d = f.value
                  , g = f.done;
                return g ? {
                    value: void 0,
                    done: g
                } : {
                    value: [d, d],
                    done: g
                }
            }
        })
    }
    ,
    i.keys = function() {
        return this.values()
    }
    ,
    i.values = function() {
        this.atom_.reportObserved();
        var r = this
          , o = this.data_.values();
        return X1({
            next: function() {
                var d = o.next()
                  , g = d.value
                  , p = d.done;
                return p ? {
                    value: void 0,
                    done: p
                } : {
                    value: r.dehanceValue_(g),
                    done: p
                }
            }
        })
    }
    ,
    i.intersection = function(r) {
        if (Dn(r) && !sn(r))
            return r.intersection(this);
        var o = new Set(this);
        return o.intersection(r)
    }
    ,
    i.union = function(r) {
        if (Dn(r) && !sn(r))
            return r.union(this);
        var o = new Set(this);
        return o.union(r)
    }
    ,
    i.difference = function(r) {
        return new Set(this).difference(r)
    }
    ,
    i.symmetricDifference = function(r) {
        if (Dn(r) && !sn(r))
            return r.symmetricDifference(this);
        var o = new Set(this);
        return o.symmetricDifference(r)
    }
    ,
    i.isSubsetOf = function(r) {
        return new Set(this).isSubsetOf(r)
    }
    ,
    i.isSupersetOf = function(r) {
        return new Set(this).isSupersetOf(r)
    }
    ,
    i.isDisjointFrom = function(r) {
        if (Dn(r) && !sn(r))
            return r.isDisjointFrom(this);
        var o = new Set(this);
        return o.isDisjointFrom(r)
    }
    ,
    i.replace = function(r) {
        var o = this;
        return sn(r) && (r = new Set(r)),
        Cn(function() {
            Array.isArray(r) ? (o.clear(),
            r.forEach(function(f) {
                return o.add(f)
            })) : Dn(r) ? (o.clear(),
            r.forEach(function(f) {
                return o.add(f)
            })) : r != null && _e("Cannot initialize set from " + r)
        }),
        this
    }
    ,
    i.observe_ = function(r, o) {
        return lr(this, r)
    }
    ,
    i.intercept_ = function(r) {
        return ir(this, r)
    }
    ,
    i.toJSON = function() {
        return Array.from(this)
    }
    ,
    i.toString = function() {
        return "[object ObservableSet]"
    }
    ,
    i[Symbol.iterator] = function() {
        return this.values()
    }
    ,
    Bi(a, [{
        key: "size",
        get: function() {
            return this.atom_.reportObserved(),
            this.data_.size
        }
    }, {
        key: Symbol.toStringTag,
        get: function() {
            return "Set"
        }
    }])
}()
  , sn = Ba("ObservableSet", Tv);
function X1(a) {
    return a[Symbol.toStringTag] = "SetIterator",
    wf(a)
}
var Z1 = Object.create(null)
  , $1 = "remove"
  , Rv = function() {
    function a(u, r, o, f) {
        r === void 0 && (r = new Map),
        f === void 0 && (f = S_),
        this.target_ = void 0,
        this.values_ = void 0,
        this.name_ = void 0,
        this.defaultAnnotation_ = void 0,
        this.keysAtom_ = void 0,
        this.changeListeners_ = void 0,
        this.interceptors_ = void 0,
        this.proxy_ = void 0,
        this.isPlainObject_ = void 0,
        this.appliedAnnotations_ = void 0,
        this.pendingKeys_ = void 0,
        this.target_ = u,
        this.values_ = r,
        this.name_ = o,
        this.defaultAnnotation_ = f,
        this.keysAtom_ = new ca("ObservableObject.keys"),
        this.isPlainObject_ = Un(this.target_)
    }
    var i = a.prototype;
    return i.getObservablePropValue_ = function(r) {
        return this.values_.get(r).get()
    }
    ,
    i.setObservablePropValue_ = function(r, o) {
        var f = this.values_.get(r);
        if (f instanceof Wt)
            return f.set(o),
            !0;
        if (Ht(this)) {
            var d = Vt(this, {
                type: gn,
                object: this.proxy_ || this.target_,
                name: r,
                newValue: o
            });
            if (!d)
                return null;
            o = d.newValue
        }
        if (o = f.prepareNewValue_(o),
        o !== K.UNCHANGED) {
            var g = Jt(this)
              , p = !1
              , v = g || p ? {
                type: gn,
                observableKind: "object",
                debugObjectName: this.name_,
                object: this.proxy_ || this.target_,
                oldValue: f.value_,
                name: r,
                newValue: o
            } : null;
            f.setNewValue_(o),
            g && Ft(this, v)
        }
        return !0
    }
    ,
    i.get_ = function(r) {
        return K.trackingDerivation && !jn(this.target_, r) && this.has_(r),
        this.target_[r]
    }
    ,
    i.set_ = function(r, o, f) {
        return f === void 0 && (f = !1),
        jn(this.target_, r) ? this.values_.has(r) ? this.setObservablePropValue_(r, o) : f ? Reflect.set(this.target_, r, o) : (this.target_[r] = o,
        !0) : this.extend_(r, {
            value: o,
            enumerable: !0,
            writable: !0,
            configurable: !0
        }, this.defaultAnnotation_, f)
    }
    ,
    i.has_ = function(r) {
        if (!K.trackingDerivation)
            return r in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map);
        var o = this.pendingKeys_.get(r);
        return o || (o = new Ma(r in this.target_,Wu,"ObservableObject.key?",!1),
        this.pendingKeys_.set(r, o)),
        o.get()
    }
    ,
    i.make_ = function(r, o) {
        if (o === !0 && (o = this.defaultAnnotation_),
        o !== !1) {
            if (!(r in this.target_)) {
                var f;
                if ((f = this.target_[on]) != null && f[r])
                    return;
                _e(1, o.annotationType_, this.name_ + "." + r.toString())
            }
            for (var d = this.target_; d && d !== Fu; ) {
                var g = Lu(d, r);
                if (g) {
                    var p = o.make_(this, r, g, d);
                    if (p === 0)
                        return;
                    if (p === 1)
                        break
                }
                d = Object.getPrototypeOf(d)
            }
            Q1(this, o, r)
        }
    }
    ,
    i.extend_ = function(r, o, f, d) {
        if (d === void 0 && (d = !1),
        f === !0 && (f = this.defaultAnnotation_),
        f === !1)
            return this.defineProperty_(r, o, d);
        var g = f.extend_(this, r, o, d);
        return g && Q1(this, f, r),
        g
    }
    ,
    i.defineProperty_ = function(r, o, f) {
        f === void 0 && (f = !1),
        this.keysAtom_;
        try {
            qt();
            var d = this.delete_(r);
            if (!d)
                return d;
            if (Ht(this)) {
                var g = Vt(this, {
                    object: this.proxy_ || this.target_,
                    name: r,
                    type: oa,
                    newValue: o.value
                });
                if (!g)
                    return null;
                var p = g.newValue;
                o.value !== p && (o = za({}, o, {
                    value: p
                }))
            }
            if (f) {
                if (!Reflect.defineProperty(this.target_, r, o))
                    return !1
            } else
                dn(this.target_, r, o);
            this.notifyPropertyAddition_(r, o.value)
        } finally {
            Gt()
        }
        return !0
    }
    ,
    i.defineObservableProperty_ = function(r, o, f, d) {
        d === void 0 && (d = !1),
        this.keysAtom_;
        try {
            qt();
            var g = this.delete_(r);
            if (!g)
                return g;
            if (Ht(this)) {
                var p = Vt(this, {
                    object: this.proxy_ || this.target_,
                    name: r,
                    type: oa,
                    newValue: o
                });
                if (!p)
                    return null;
                o = p.newValue
            }
            var v = k1(r)
              , y = {
                configurable: K.safeDescriptors ? this.isPlainObject_ : !0,
                enumerable: !0,
                get: v.get,
                set: v.set
            };
            if (d) {
                if (!Reflect.defineProperty(this.target_, r, y))
                    return !1
            } else
                dn(this.target_, r, y);
            var _ = new Ma(o,f,"ObservableObject.key",!1);
            this.values_.set(r, _),
            this.notifyPropertyAddition_(r, _.value_)
        } finally {
            Gt()
        }
        return !0
    }
    ,
    i.defineComputedProperty_ = function(r, o, f) {
        f === void 0 && (f = !1),
        this.keysAtom_;
        try {
            qt();
            var d = this.delete_(r);
            if (!d)
                return d;
            if (Ht(this)) {
                var g = Vt(this, {
                    object: this.proxy_ || this.target_,
                    name: r,
                    type: oa,
                    newValue: void 0
                });
                if (!g)
                    return null
            }
            o.name || (o.name = "ObservableObject.key"),
            o.context = this.proxy_ || this.target_;
            var p = k1(r)
              , v = {
                configurable: K.safeDescriptors ? this.isPlainObject_ : !0,
                enumerable: !1,
                get: p.get,
                set: p.set
            };
            if (f) {
                if (!Reflect.defineProperty(this.target_, r, v))
                    return !1
            } else
                dn(this.target_, r, v);
            this.values_.set(r, new Wt(o)),
            this.notifyPropertyAddition_(r, void 0)
        } finally {
            Gt()
        }
        return !0
    }
    ,
    i.delete_ = function(r, o) {
        if (o === void 0 && (o = !1),
        this.keysAtom_,
        !jn(this.target_, r))
            return !0;
        if (Ht(this)) {
            var f = Vt(this, {
                object: this.proxy_ || this.target_,
                name: r,
                type: $1
            });
            if (!f)
                return null
        }
        try {
            var d;
            qt();
            var g = Jt(this)
              , p = !1
              , v = this.values_.get(r)
              , y = void 0;
            if (!v && (g || p)) {
                var _;
                y = (_ = Lu(this.target_, r)) == null ? void 0 : _.value
            }
            if (o) {
                if (!Reflect.deleteProperty(this.target_, r))
                    return !1
            } else
                delete this.target_[r];
            if (v && (this.values_.delete(r),
            v instanceof Ma && (y = v.value_),
            fv(v)),
            this.keysAtom_.reportChanged(),
            (d = this.pendingKeys_) == null || (d = d.get(r)) == null || d.set(r in this.target_),
            g || p) {
                var M = {
                    type: $1,
                    observableKind: "object",
                    object: this.proxy_ || this.target_,
                    debugObjectName: this.name_,
                    oldValue: y,
                    name: r
                };
                g && Ft(this, M)
            }
        } finally {
            Gt()
        }
        return !0
    }
    ,
    i.observe_ = function(r, o) {
        return lr(this, r)
    }
    ,
    i.intercept_ = function(r) {
        return ir(this, r)
    }
    ,
    i.notifyPropertyAddition_ = function(r, o) {
        var f, d = Jt(this), g = !1;
        if (d || g) {
            var p = d || g ? {
                type: oa,
                observableKind: "object",
                debugObjectName: this.name_,
                object: this.proxy_ || this.target_,
                name: r,
                newValue: o
            } : null;
            d && Ft(this, p)
        }
        (f = this.pendingKeys_) == null || (f = f.get(r)) == null || f.set(!0),
        this.keysAtom_.reportChanged()
    }
    ,
    i.ownKeys_ = function() {
        return this.keysAtom_.reportObserved(),
        ji(this.target_)
    }
    ,
    i.keys_ = function() {
        return this.keysAtom_.reportObserved(),
        Object.keys(this.target_)
    }
    ,
    a
}();
function qa(a, i) {
    var u;
    if (jn(a, ae))
        return a;
    var r = (u = i == null ? void 0 : i.name) != null ? u : "ObservableObject"
      , o = new Rv(a,new Map,String(r),C_(i));
    return er(a, ae, o),
    a
}
var Rb = Ba("ObservableObjectAdministration", Rv);
function k1(a) {
    return Z1[a] || (Z1[a] = {
        get: function() {
            return this[ae].getObservablePropValue_(a)
        },
        set: function(u) {
            return this[ae].setObservablePropValue_(a, u)
        }
    })
}
function as(a) {
    return Pu(a) ? Rb(a[ae]) : !1
}
function Q1(a, i, u) {
    var r;
    (r = a.target_[on]) == null || delete r[u]
}
var xb = wv(0)
  , wb = function() {
    var a = !1
      , i = {};
    return Object.defineProperty(i, "0", {
        set: function() {
            a = !0
        }
    }),
    Object.create(i)[0] = 1,
    a === !1
}()
  , jc = 0
  , xv = function() {};
function Nb(a, i) {
    Object.setPrototypeOf ? Object.setPrototypeOf(a.prototype, i) : a.prototype.__proto__ !== void 0 ? a.prototype.__proto__ = i : a.prototype = i
}
Nb(xv, Array.prototype);
var xf = function(a) {
    function i(r, o, f, d) {
        var g;
        return f === void 0 && (f = "ObservableArray"),
        d === void 0 && (d = !1),
        g = a.call(this) || this,
        fa(function() {
            var p = new Rf(f,o,d,!0);
            p.proxy_ = g,
            Zg(g, ae, p),
            r && r.length && g.spliceWithArray(0, 0, r),
            wb && Object.defineProperty(g, "0", xb)
        }),
        g
    }
    Qg(i, a);
    var u = i.prototype;
    return u.concat = function() {
        this[ae].atom_.reportObserved();
        for (var o = arguments.length, f = new Array(o), d = 0; d < o; d++)
            f[d] = arguments[d];
        return Array.prototype.concat.apply(this.slice(), f.map(function(g) {
            return ns(g) ? g.slice() : g
        }))
    }
    ,
    u[Symbol.iterator] = function() {
        var r = this
          , o = 0;
        return wf({
            next: function() {
                return o < r.length ? {
                    value: r[o++],
                    done: !1
                } : {
                    done: !0,
                    value: void 0
                }
            }
        })
    }
    ,
    Bi(i, [{
        key: "length",
        get: function() {
            return this[ae].getArrayLength_()
        },
        set: function(o) {
            this[ae].setArrayLength_(o)
        }
    }, {
        key: Symbol.toStringTag,
        get: function() {
            return "Array"
        }
    }])
}(xv);
Object.entries(Yu).forEach(function(a) {
    var i = a[0]
      , u = a[1];
    i !== "concat" && er(xf.prototype, i, u)
});
function wv(a) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this[ae].get_(a)
        },
        set: function(u) {
            this[ae].set_(a, u)
        }
    }
}
function Mb(a) {
    dn(xf.prototype, "" + a, wv(a))
}
function Nv(a) {
    if (a > jc) {
        for (var i = jc; i < a + 100; i++)
            Mb(i);
        jc = a
    }
}
Nv(1e3);
function Db(a, i, u) {
    return new xf(a,i,u)
}
function Xu(a, i) {
    if (typeof a == "object" && a !== null) {
        if (ns(a))
            return i !== void 0 && _e(23),
            a[ae].atom_;
        if (sn(a))
            return a.atom_;
        if (Va(a)) {
            if (i === void 0)
                return a.keysAtom_;
            var u = a.data_.get(i) || a.hasMap_.get(i);
            return u || _e(25, i, lf(a)),
            u
        }
        if (as(a)) {
            if (!i)
                return _e(26);
            var r = a[ae].values_.get(i);
            return r || _e(27, i, lf(a)),
            r
        }
        if (Sf(a) || ts(a) || Gu(a))
            return a
    } else if (Pt(a) && Gu(a[ae]))
        return a[ae];
    _e(28)
}
function Cb(a, i) {
    if (a || _e(29),
    Sf(a) || ts(a) || Gu(a) || Va(a) || sn(a))
        return a;
    if (a[ae])
        return a[ae];
    _e(24, a)
}
function lf(a, i) {
    var u;
    if (i !== void 0)
        u = Xu(a, i);
    else {
        if (Ql(a))
            return a.name;
        as(a) || Va(a) || sn(a) ? u = Cb(a) : u = Xu(a)
    }
    return u.name_
}
function fa(a) {
    var i = Ha()
      , u = Ef(!0);
    qt();
    try {
        return a()
    } finally {
        Gt(),
        Af(u),
        zn(i)
    }
}
var J1 = Fu.toString;
function Mv(a, i, u) {
    return u === void 0 && (u = -1),
    rf(a, i, u)
}
function rf(a, i, u, r, o) {
    if (a === i)
        return a !== 0 || 1 / a === 1 / i;
    if (a == null || i == null)
        return !1;
    if (a !== a)
        return i !== i;
    var f = typeof a;
    if (f !== "function" && f !== "object" && typeof i != "object")
        return !1;
    var d = J1.call(a);
    if (d !== J1.call(i))
        return !1;
    switch (d) {
    case "[object RegExp]":
    case "[object String]":
        return "" + a == "" + i;
    case "[object Number]":
        return +a != +a ? +i != +i : +a == 0 ? 1 / +a === 1 / i : +a == +i;
    case "[object Date]":
    case "[object Boolean]":
        return +a == +i;
    case "[object Symbol]":
        return typeof Symbol < "u" && Symbol.valueOf.call(a) === Symbol.valueOf.call(i);
    case "[object Map]":
    case "[object Set]":
        u >= 0 && u++;
        break
    }
    a = F1(a),
    i = F1(i);
    var g = d === "[object Array]";
    if (!g) {
        if (typeof a != "object" || typeof i != "object")
            return !1;
        var p = a.constructor
          , v = i.constructor;
        if (p !== v && !(Pt(p) && p instanceof p && Pt(v) && v instanceof v) && "constructor"in a && "constructor"in i)
            return !1
    }
    if (u === 0)
        return !1;
    u < 0 && (u = -1),
    r = r || [],
    o = o || [];
    for (var y = r.length; y--; )
        if (r[y] === a)
            return o[y] === i;
    if (r.push(a),
    o.push(i),
    g) {
        if (y = a.length,
        y !== i.length)
            return !1;
        for (; y--; )
            if (!rf(a[y], i[y], u - 1, r, o))
                return !1
    } else {
        var _ = Object.keys(a)
          , M = _.length;
        if (Object.keys(i).length !== M)
            return !1;
        for (var U = 0; U < M; U++) {
            var N = _[U];
            if (!(jn(i, N) && rf(a[N], i[N], u - 1, r, o)))
                return !1
        }
    }
    return r.pop(),
    o.pop(),
    !0
}
function F1(a) {
    return ns(a) ? a.slice() : Li(a) || Va(a) || Dn(a) || sn(a) ? Array.from(a.entries()) : a
}
var P1, jb = ((P1 = Ju().Iterator) == null ? void 0 : P1.prototype) || {};
function wf(a) {
    return a[Symbol.iterator] = zb,
    Object.assign(Object.create(jb), a)
}
function zb() {
    return this
}
["Symbol", "Map", "Set"].forEach(function(a) {
    var i = Ju();
    typeof i[a] > "u" && _e("MobX requires global '" + a + "' to be available or polyfilled")
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: F_,
    extras: {
        getDebugName: lf
    },
    $mobx: ae
});
if (!T.useState)
    throw new Error("mobx-react-lite requires React with Hooks support");
if (!yb)
    throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
var Ub = Vg();
function Lb(a) {
    a()
}
function Bb(a) {
    a || (a = Lb),
    cb({
        reactionScheduler: a
    })
}
function Hb(a) {
    return fb(a)
}
var Vb = 1e4
  , qb = 1e4
  , Gb = function() {
    function a(i) {
        var u = this;
        Object.defineProperty(this, "finalize", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }),
        Object.defineProperty(this, "registrations", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Map
        }),
        Object.defineProperty(this, "sweepTimeout", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "sweep", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: function(r) {
                r === void 0 && (r = Vb),
                clearTimeout(u.sweepTimeout),
                u.sweepTimeout = void 0;
                var o = Date.now();
                u.registrations.forEach(function(f, d) {
                    o - f.registeredAt >= r && (u.finalize(f.value),
                    u.registrations.delete(d))
                }),
                u.registrations.size > 0 && u.scheduleSweep()
            }
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: function() {
                u.sweep(0)
            }
        })
    }
    return Object.defineProperty(a.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function(i, u, r) {
            this.registrations.set(r, {
                value: u,
                registeredAt: Date.now()
            }),
            this.scheduleSweep()
        }
    }),
    Object.defineProperty(a.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function(i) {
            this.registrations.delete(i)
        }
    }),
    Object.defineProperty(a.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function() {
            this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, qb))
        }
    }),
    a
}()
  , Yb = typeof FinalizationRegistry < "u" ? FinalizationRegistry : Gb
  , uf = new Yb(function(a) {
    var i;
    (i = a.reaction) === null || i === void 0 || i.dispose(),
    a.reaction = null
}
)
  , zc = {
    exports: {}
}
  , Uc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W1;
function Kb() {
    if (W1)
        return Uc;
    W1 = 1;
    var a = Qu();
    function i(_, M) {
        return _ === M && (_ !== 0 || 1 / _ === 1 / M) || _ !== _ && M !== M
    }
    var u = typeof Object.is == "function" ? Object.is : i
      , r = a.useState
      , o = a.useEffect
      , f = a.useLayoutEffect
      , d = a.useDebugValue;
    function g(_, M) {
        var U = M()
          , N = r({
            inst: {
                value: U,
                getSnapshot: M
            }
        })
          , C = N[0].inst
          , Z = N[1];
        return f(function() {
            C.value = U,
            C.getSnapshot = M,
            p(C) && Z({
                inst: C
            })
        }, [_, U, M]),
        o(function() {
            return p(C) && Z({
                inst: C
            }),
            _(function() {
                p(C) && Z({
                    inst: C
                })
            })
        }, [_]),
        d(U),
        U
    }
    function p(_) {
        var M = _.getSnapshot;
        _ = _.value;
        try {
            var U = M();
            return !u(_, U)
        } catch {
            return !0
        }
    }
    function v(_, M) {
        return M()
    }
    var y = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? v : g;
    return Uc.useSyncExternalStore = a.useSyncExternalStore !== void 0 ? a.useSyncExternalStore : y,
    Uc
}
var I1;
function Xb() {
    return I1 || (I1 = 1,
    zc.exports = Kb()),
    zc.exports
}
var Zb = Xb();
function eg(a) {
    a.reaction = new Ln("observer".concat(a.name),function() {
        var i;
        a.stateVersion = Symbol(),
        (i = a.onStoreChange) === null || i === void 0 || i.call(a)
    }
    )
}
function $b(a, i) {
    i === void 0 && (i = "observed");
    var u = $l.useRef(null);
    if (!u.current) {
        var r = {
            reaction: null,
            onStoreChange: null,
            stateVersion: Symbol(),
            name: i,
            subscribe: function(g) {
                return uf.unregister(r),
                r.onStoreChange = g,
                r.reaction || (eg(r),
                r.stateVersion = Symbol()),
                function() {
                    var p;
                    r.onStoreChange = null,
                    (p = r.reaction) === null || p === void 0 || p.dispose(),
                    r.reaction = null
                }
            },
            getSnapshot: function() {
                return r.stateVersion
            }
        };
        u.current = r
    }
    var o = u.current;
    o.reaction || (eg(o),
    uf.register(u, o, o)),
    $l.useDebugValue(o.reaction, Hb),
    Zb.useSyncExternalStore(o.subscribe, o.getSnapshot, o.getSnapshot);
    var f, d;
    if (o.reaction.track(function() {
        try {
            f = a()
        } catch (g) {
            d = g
        }
    }),
    d)
        throw d;
    return f
}
var Lc, Bc, Dv = typeof Symbol == "function" && Symbol.for, kb = (Bc = (Lc = Object.getOwnPropertyDescriptor(function() {}, "name")) === null || Lc === void 0 ? void 0 : Lc.configurable) !== null && Bc !== void 0 ? Bc : !1, tg = Dv ? Symbol.for("react.forward_ref") : typeof T.forwardRef == "function" && T.forwardRef(function(a) {
    return null
}).$$typeof, ng = Dv ? Symbol.for("react.memo") : typeof T.memo == "function" && T.memo(function(a) {
    return null
}).$$typeof;
function Nf(a, i) {
    var u;
    if (ng && a.$$typeof === ng)
        throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
    var r = (u = void 0) !== null && u !== void 0 ? u : !1
      , o = a
      , f = a.displayName || a.name;
    if (tg && a.$$typeof === tg && (r = !0,
    o = a.render,
    typeof o != "function"))
        throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
    var d = function(g, p) {
        return $b(function() {
            return o(g, p)
        }, f)
    };
    return d.displayName = a.displayName,
    kb && Object.defineProperty(d, "name", {
        value: a.name,
        writable: !0,
        configurable: !0
    }),
    a.contextTypes && (d.contextTypes = a.contextTypes),
    r && (d = T.forwardRef(d)),
    d = T.memo(d),
    Jb(a, d),
    d
}
var Qb = {
    $$typeof: !0,
    render: !0,
    compare: !0,
    type: !0,
    displayName: !0
};
function Jb(a, i) {
    Object.keys(a).forEach(function(u) {
        Qb[u] || Object.defineProperty(i, u, Object.getOwnPropertyDescriptor(a, u))
    })
}
var Hc;
Bb(Ub.unstable_batchedUpdates);
Hc = uf.finalizeAllImmediately;
const Fb = "_title_b8yjw_1"
  , Pb = "_hasActiveSignalTitle_b8yjw_6"
  , Wb = "_hasActiveSignalButton_b8yjw_16"
  , sf = {
    title: Fb,
    hasActiveSignalTitle: Pb,
    hasActiveSignalButton: Wb
}
  , Ib = "_mainTitle_1a0aq_1"
  , ag = {
    mainTitle: Ib
};
var Vc = {
    exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var ig;
function e2() {
    return ig || (ig = 1,
    function(a) {
        (function() {
            var i = {}.hasOwnProperty;
            function u() {
                for (var f = "", d = 0; d < arguments.length; d++) {
                    var g = arguments[d];
                    g && (f = o(f, r(g)))
                }
                return f
            }
            function r(f) {
                if (typeof f == "string" || typeof f == "number")
                    return f;
                if (typeof f != "object")
                    return "";
                if (Array.isArray(f))
                    return u.apply(null, f);
                if (f.toString !== Object.prototype.toString && !f.toString.toString().includes("[native code]"))
                    return f.toString();
                var d = "";
                for (var g in f)
                    i.call(f, g) && f[g] && (d = o(d, g));
                return d
            }
            function o(f, d) {
                return d ? f ? f + " " + d : f + d : f
            }
            a.exports ? (u.default = u,
            a.exports = u) : window.classNames = u
        }
        )()
    }(Vc)),
    Vc.exports
}
var t2 = e2();
const ot = Hg(t2)
  , n2 = "_card_r52l9_1"
  , a2 = "_win_r52l9_9"
  , i2 = "_lose_r52l9_12"
  , l2 = "_neutral_r52l9_15"
  , r2 = "_notWorkingContainer_r52l9_20"
  , u2 = "_times_r52l9_32"
  , s2 = "_selectors_r52l9_41"
  , o2 = "_selectorsRight_r52l9_49"
  , c2 = "_signalInfo_r52l9_55"
  , f2 = "_signalInfoMiddle_r52l9_63"
  , d2 = "_startText_r52l9_75"
  , h2 = "_loaderWrapper_r52l9_83"
  , g2 = "_signalTitle_r52l9_90"
  , v2 = "_signalHeader_r52l9_100"
  , p2 = "_signalResults_r52l9_106"
  , m2 = "_signalDirection_r52l9_125"
  , y2 = "_endTimeText_r52l9_131"
  , _2 = "_row_r52l9_141"
  , b2 = "_currentSymbol_r52l9_147"
  , S2 = "_up_r52l9_158"
  , O2 = "_down_r52l9_159"
  , E2 = "_signalBtn_r52l9_172"
  , A2 = "_resetButton_r52l9_173"
  , T2 = "_mainButton_r52l9_193"
  , R2 = "_widgetWrap_r52l9_210"
  , De = {
    card: n2,
    win: a2,
    lose: i2,
    neutral: l2,
    notWorkingContainer: r2,
    times: u2,
    selectors: s2,
    selectorsRight: o2,
    signalInfo: c2,
    signalInfoMiddle: f2,
    startText: d2,
    loaderWrapper: h2,
    signalTitle: g2,
    signalHeader: v2,
    signalResults: p2,
    signalDirection: m2,
    endTimeText: y2,
    row: _2,
    currentSymbol: b2,
    up: S2,
    down: O2,
    signalBtn: E2,
    resetButton: A2,
    mainButton: T2,
    widgetWrap: R2
}
  , x2 = ({title: a, titleId: i, ...u}, r) => T.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: r,
    "aria-labelledby": i,
    ...u
}, a ? T.createElement("title", {
    id: i
}, a) : null, T.createElement("path", {
    d: "M9.44995 15.75L9.44995 20.4",
    stroke: "#1FBF7B",
    strokeWidth: 1.5,
    strokeLinecap: "round"
}), T.createElement("path", {
    d: "M14.4 12.75L14.4 20.4",
    stroke: "#1FBF7B",
    strokeWidth: 1.5,
    strokeLinecap: "round"
}), T.createElement("path", {
    d: "M19.35 8.3999L19.35 20.3999",
    stroke: "#1FBF7B",
    strokeWidth: 1.5,
    strokeLinecap: "round"
}), T.createElement("path", {
    d: "M4.5 17.25L4.5 20.4",
    stroke: "#1FBF7B",
    strokeWidth: 1.5,
    strokeLinecap: "round"
}), T.createElement("path", {
    d: "M3.47792 15.1096C3.47792 15.1096 7.25226 13.9329 11.7032 10.8976C18.225 6.44991 18.809 2.88902 18.809 2.88902M18.809 2.88902L15.7663 3.79357M18.809 2.88902L19.5728 5.62437",
    stroke: "#1FBF7B",
    strokeWidth: 1.5,
    strokeLinecap: "round"
}))
  , w2 = T.forwardRef(x2)
  , N2 = ({title: a, titleId: i, ...u}, r) => T.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: r,
    "aria-labelledby": i,
    ...u
}, a ? T.createElement("title", {
    id: i
}, a) : null, T.createElement("path", {
    d: "M14.4 15.75L14.4 20.4",
    stroke: "#C92A2A",
    strokeWidth: 1.5,
    strokeLinecap: "round"
}), T.createElement("path", {
    d: "M9.44995 12.75L9.44995 20.4",
    stroke: "#C92A2A",
    strokeWidth: 1.5,
    strokeLinecap: "round"
}), T.createElement("path", {
    d: "M4.5 8.3999L4.5 20.3999",
    stroke: "#C92A2A",
    strokeWidth: 1.5,
    strokeLinecap: "round"
}), T.createElement("path", {
    d: "M19.35 17.25L19.35 20.4",
    stroke: "#C92A2A",
    strokeWidth: 1.5,
    strokeLinecap: "round"
}), T.createElement("path", {
    d: "M4.37064 2.95328C4.37064 2.95328 6.80575 6.06783 11.2187 9.15811C17.685 13.6862 21.2223 12.9735 21.2223 12.9735M21.2223 12.9735L19.3004 10.4471M21.2223 12.9735L18.9337 14.655",
    stroke: "#C92A2A",
    strokeWidth: 1.5,
    strokeLinecap: "round"
}))
  , M2 = T.forwardRef(N2)
  , D2 = (a, i, u, r) => {
    var f, d, g, p;
    const o = [u, {
        code: i,
        ...r || {}
    }];
    if ((d = (f = a == null ? void 0 : a.services) == null ? void 0 : f.logger) != null && d.forward)
        return a.services.logger.forward(o, "warn", "react-i18next::", !0);
    Da(o[0]) && (o[0] = `react-i18next:: ${o[0]}`),
    (p = (g = a == null ? void 0 : a.services) == null ? void 0 : g.logger) != null && p.warn ? a.services.logger.warn(...o) : console != null && console.warn && console.warn(...o)
}
  , lg = {}
  , of = (a, i, u, r) => {
    Da(u) && lg[u] || (Da(u) && (lg[u] = new Date),
    D2(a, i, u, r))
}
  , Cv = (a, i) => () => {
    if (a.isInitialized)
        i();
    else {
        const u = () => {
            setTimeout( () => {
                a.off("initialized", u)
            }
            , 0),
            i()
        }
        ;
        a.on("initialized", u)
    }
}
  , cf = (a, i, u) => {
    a.loadNamespaces(i, Cv(a, u))
}
  , rg = (a, i, u, r) => {
    if (Da(u) && (u = [u]),
    a.options.preload && a.options.preload.indexOf(i) > -1)
        return cf(a, u, r);
    u.forEach(o => {
        a.options.ns.indexOf(o) < 0 && a.options.ns.push(o)
    }
    ),
    a.loadLanguages(i, Cv(a, r))
}
  , C2 = (a, i, u={}) => !i.languages || !i.languages.length ? (of(i, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
    languages: i.languages
}),
!0) : i.hasLoadedNamespace(a, {
    lng: u.lng,
    precheck: (r, o) => {
        var f;
        if (((f = u.bindI18n) == null ? void 0 : f.indexOf("languageChanging")) > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !o(r.isLanguageChangingTo, a))
            return !1
    }
})
  , Da = a => typeof a == "string"
  , j2 = a => typeof a == "object" && a !== null
  , z2 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g
  , U2 = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/"
}
  , L2 = a => U2[a]
  , B2 = a => a.replace(z2, L2);
let ff = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: B2
};
const H2 = (a={}) => {
    ff = {
        ...ff,
        ...a
    }
}
  , V2 = () => ff;
let jv;
const q2 = a => {
    jv = a
}
  , G2 = () => jv
  , Y2 = {
    type: "3rdParty",
    init(a) {
        H2(a.options.react),
        q2(a)
    }
}
  , K2 = T.createContext();
class X2 {
    constructor() {
        this.usedNamespaces = {}
    }
    addUsedNamespaces(i) {
        i.forEach(u => {
            this.usedNamespaces[u] || (this.usedNamespaces[u] = !0)
        }
        )
    }
    getUsedNamespaces() {
        return Object.keys(this.usedNamespaces)
    }
}
const Z2 = (a, i) => {
    const u = T.useRef();
    return T.useEffect( () => {
        u.current = a
    }
    , [a, i]),
    u.current
}
  , zv = (a, i, u, r) => a.getFixedT(i, u, r)
  , $2 = (a, i, u, r) => T.useCallback(zv(a, i, u, r), [a, i, u, r])
  , rr = (a, i={}) => {
    var ie, Q, q, J;
    const {i18n: u} = i
      , {i18n: r, defaultNS: o} = T.useContext(K2) || {}
      , f = u || r || G2();
    if (f && !f.reportNamespaces && (f.reportNamespaces = new X2),
    !f) {
        of(f, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
        const F = (ve, Ve) => Da(Ve) ? Ve : j2(Ve) && Da(Ve.defaultValue) ? Ve.defaultValue : Array.isArray(ve) ? ve[ve.length - 1] : ve
          , se = [F, {}, !1];
        return se.t = F,
        se.i18n = {},
        se.ready = !1,
        se
    }
    (ie = f.options.react) != null && ie.wait && of(f, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
    const d = {
        ...V2(),
        ...f.options.react,
        ...i
    }
      , {useSuspense: g, keyPrefix: p} = d;
    let v = o || ((Q = f.options) == null ? void 0 : Q.defaultNS);
    v = Da(v) ? [v] : v || ["translation"],
    (J = (q = f.reportNamespaces).addUsedNamespaces) == null || J.call(q, v);
    const y = (f.isInitialized || f.initializedStoreOnce) && v.every(F => C2(F, f, d))
      , _ = $2(f, i.lng || null, d.nsMode === "fallback" ? v : v[0], p)
      , M = () => _
      , U = () => zv(f, i.lng || null, d.nsMode === "fallback" ? v : v[0], p)
      , [N,C] = T.useState(M);
    let Z = v.join();
    i.lng && (Z = `${i.lng}${Z}`);
    const re = Z2(Z)
      , ue = T.useRef(!0);
    T.useEffect( () => {
        const {bindI18n: F, bindI18nStore: se} = d;
        ue.current = !0,
        !y && !g && (i.lng ? rg(f, i.lng, v, () => {
            ue.current && C(U)
        }
        ) : cf(f, v, () => {
            ue.current && C(U)
        }
        )),
        y && re && re !== Z && ue.current && C(U);
        const ve = () => {
            ue.current && C(U)
        }
        ;
        return F && (f == null || f.on(F, ve)),
        se && (f == null || f.store.on(se, ve)),
        () => {
            ue.current = !1,
            f && (F == null || F.split(" ").forEach(Ve => f.off(Ve, ve))),
            se && f && se.split(" ").forEach(Ve => f.store.off(Ve, ve))
        }
    }
    , [f, Z]),
    T.useEffect( () => {
        ue.current && y && C(M)
    }
    , [f, p, y]);
    const te = [N, f, y];
    if (te.t = N,
    te.i18n = f,
    te.ready = y,
    y || !y && !g)
        return te;
    throw new Promise(F => {
        i.lng ? rg(f, i.lng, v, () => F()) : cf(f, v, () => F())
    }
    )
}
  , k2 = ({symbol: a}) => {
    const i = T.useRef(null)
      , {i18n: u} = rr()
      , r = u.language;
    return T.useEffect( () => {
        const o = document.createElement("script");
        return o.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js",
        o.type = "text/javascript",
        o.async = !0,
        o.innerHTML = JSON.stringify({
            autosize: !0,
            symbol: `FX:${a}`,
            interval: "1",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: r || "en",
            allow_symbol_change: !1,
            calendar: !1,
            support_host: "https://www.tradingview.com"
        }),
        i.current && i.current.appendChild(o),
        () => {
            i.current && (i.current.innerHTML = "")
        }
    }
    , [a, r]),
    H.jsxs("div", {
        className: "tradingview-widget-container",
        ref: i,
        style: {
            height: "500px",
            width: "100%"
        },
        children: [H.jsx("div", {
            className: "tradingview-widget-container__widget",
            style: {
                height: "100%",
                width: "100%"
            }
        }), H.jsx("div", {
            className: "tradingview-widget-copyright",
            children: H.jsx("a", {
                href: "https://www.tradingview.com/",
                rel: "noopener nofollow",
                target: "_blank",
                children: H.jsx("span", {
                    className: "blue-text",
                    children: "Track all markets on TradingView"
                })
            })
        })]
    })
}
  , Q2 = T.memo(k2)
  , J2 = "_loader_1566b_1"
  , F2 = {
    loader: J2
}
  , Uv = ({className: a}) => H.jsx("div", {
    className: ot(F2.loader, a)
})
  , P2 = "_wrapper_1ybbi_1"
  , W2 = "_selectedPair_1ybbi_7"
  , I2 = "_button_1ybbi_16"
  , eS = "_disabled_1ybbi_27"
  , tS = "_arrowDown_1ybbi_46"
  , nS = "_open_1ybbi_50"
  , aS = "_dropdown_1ybbi_63"
  , iS = "_container_1ybbi_74"
  , lS = "_langButton_1ybbi_101"
  , rS = "_active_1ybbi_112"
  , kt = {
    wrapper: P2,
    selectedPair: W2,
    button: I2,
    disabled: eS,
    arrowDown: tS,
    open: nS,
    dropdown: aS,
    container: iS,
    langButton: lS,
    active: rS
}
  , uS = ({title: a, titleId: i, ...u}, r) => T.createElement("svg", {
    width: 12,
    height: 7,
    viewBox: "0 0 12 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: r,
    "aria-labelledby": i,
    ...u
}, a ? T.createElement("title", {
    id: i
}, a) : null, T.createElement("path", {
    d: "M6.00005 6.97505C5.86672 6.97505 5.73772 6.95005 5.61305 6.90005C5.48772 6.85005 5.38338 6.78338 5.30005 6.70005L0.700048 2.10005C0.516715 1.91672 0.425049 1.68338 0.425049 1.40005C0.425049 1.11671 0.516715 0.883382 0.700048 0.700048C0.883382 0.516715 1.11672 0.425049 1.40005 0.425049C1.68338 0.425049 1.91672 0.516715 2.10005 0.700048L6.00005 4.60005L9.90005 0.700048C10.0834 0.516715 10.3167 0.425049 10.6 0.425049C10.8834 0.425049 11.1167 0.516715 11.3 0.700048C11.4834 0.883382 11.575 1.11671 11.575 1.40005C11.575 1.68338 11.4834 1.91672 11.3 2.10005L6.70005 6.70005C6.60005 6.80005 6.49172 6.87072 6.37505 6.91205C6.25838 6.95405 6.13338 6.97505 6.00005 6.97505Z",
    fill: "white"
}))
  , Mf = T.forwardRef(uS)
  , sS = "_imagesContainer_1gr4s_1"
  , oS = "_logo_1gr4s_9"
  , qc = {
    imagesContainer: sS,
    logo: oS
}
  , cS = ({title: a, titleId: i, ...u}, r) => T.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg",
    ref: r,
    "aria-labelledby": i,
    ...u
}, a ? T.createElement("title", {
    id: i
}, a) : null, T.createElement("path", {
    fill: "#F8F9FD",
    d: "M0 0h18v18H0z",
    shapeRendering: "crispEdges"
}), T.createElement("path", {
    d: "M11 4h7V0h-7v4zM0 18h18v-4H0v4zM11 11h7V7h-7v4z",
    fill: "#EF5350",
    shapeRendering: "crispEdges"
}), T.createElement("path", {
    fill: "#1E88E9",
    d: "M0 0h11v11H0z",
    shapeRendering: "crispEdges"
}), T.createElement("path", {
    d: "M2.42 1.22a.09.09 0 0 1 .16 0l.27.71c.01.04.05.06.08.06l.76.04c.08 0 .11.1.05.16l-.6.47a.09.09 0 0 0-.02.1l.2.72a.09.09 0 0 1-.14.1l-.63-.41a.09.09 0 0 0-.1 0l-.63.41a.09.09 0 0 1-.14-.1l.2-.73a.09.09 0 0 0-.03-.1l-.59-.46a.09.09 0 0 1 .05-.16l.76-.04c.03 0 .07-.02.08-.06l.27-.7zM2.42 4.22a.09.09 0 0 1 .16 0l.27.71c.01.04.05.06.08.06l.76.04c.08 0 .11.1.05.16l-.6.47a.09.09 0 0 0-.02.1l.2.72a.09.09 0 0 1-.14.1l-.63-.41a.09.09 0 0 0-.1 0l-.63.41a.09.09 0 0 1-.14-.1l.2-.73a.09.09 0 0 0-.03-.1l-.59-.46a.09.09 0 0 1 .05-.16l.76-.04c.03 0 .07-.02.08-.06l.27-.7zM2.42 7.22a.09.09 0 0 1 .16 0l.27.71c.01.04.05.06.08.06l.76.04c.08 0 .11.1.05.16l-.6.47a.09.09 0 0 0-.02.1l.2.72a.09.09 0 0 1-.14.1l-.63-.41a.09.09 0 0 0-.1 0l-.63.41a.09.09 0 0 1-.14-.1l.2-.73a.09.09 0 0 0-.03-.1l-.59-.46a.09.09 0 0 1 .05-.16l.76-.04c.03 0 .07-.02.08-.06l.27-.7zM5.42 1.22a.09.09 0 0 1 .16 0l.27.71c.01.04.05.06.08.06l.76.04c.08 0 .11.1.05.16l-.6.47a.09.09 0 0 0-.02.1l.2.72a.09.09 0 0 1-.14.1l-.63-.41a.09.09 0 0 0-.1 0l-.63.41a.09.09 0 0 1-.14-.1l.2-.73a.09.09 0 0 0-.03-.1l-.59-.46a.09.09 0 0 1 .05-.16l.76-.04c.03 0 .07-.02.08-.06l.27-.7zM5.42 4.22a.09.09 0 0 1 .16 0l.27.71c.01.04.05.06.08.06l.76.04c.08 0 .11.1.05.16l-.6.47a.09.09 0 0 0-.02.1l.2.72a.09.09 0 0 1-.14.1l-.63-.41a.09.09 0 0 0-.1 0l-.63.41a.09.09 0 0 1-.14-.1l.2-.73a.09.09 0 0 0-.03-.1l-.59-.46a.09.09 0 0 1 .05-.16l.76-.04c.03 0 .07-.02.08-.06l.27-.7zM5.42 7.22a.09.09 0 0 1 .16 0l.27.71c.01.04.05.06.08.06l.76.04c.08 0 .11.1.05.16l-.6.47a.09.09 0 0 0-.02.1l.2.72a.09.09 0 0 1-.14.1l-.63-.41a.09.09 0 0 0-.1 0l-.63.41a.09.09 0 0 1-.14-.1l.2-.73a.09.09 0 0 0-.03-.1l-.59-.46a.09.09 0 0 1 .05-.16l.76-.04c.03 0 .07-.02.08-.06l.27-.7zM8.42 1.22a.09.09 0 0 1 .16 0l.27.71c.01.04.05.06.08.06l.76.04c.08 0 .11.1.05.16l-.6.47a.09.09 0 0 0-.02.1l.2.72a.09.09 0 0 1-.14.1l-.63-.41a.09.09 0 0 0-.1 0l-.63.41a.09.09 0 0 1-.14-.1l.2-.73a.09.09 0 0 0-.03-.1l-.59-.46a.09.09 0 0 1 .05-.16l.76-.04c.03 0 .07-.02.08-.06l.27-.7zM8.42 4.22a.09.09 0 0 1 .16 0l.27.71c.01.04.05.06.08.06l.76.04c.08 0 .11.1.05.16l-.6.47a.09.09 0 0 0-.02.1l.2.72a.09.09 0 0 1-.14.1l-.63-.41a.09.09 0 0 0-.1 0l-.63.41a.09.09 0 0 1-.14-.1l.2-.73a.09.09 0 0 0-.03-.1l-.59-.46a.09.09 0 0 1 .05-.16l.76-.04c.03 0 .07-.02.08-.06l.27-.7zM8.42 7.22a.09.09 0 0 1 .16 0l.27.71c.01.04.05.06.08.06l.76.04c.08 0 .11.1.05.16l-.6.47a.09.09 0 0 0-.02.1l.2.72a.09.09 0 0 1-.14.1l-.63-.41a.09.09 0 0 0-.1 0l-.63.41a.09.09 0 0 1-.14-.1l.2-.73a.09.09 0 0 0-.03-.1l-.59-.46a.09.09 0 0 1 .05-.16l.76-.04c.03 0 .07-.02.08-.06l.27-.7z",
    fill: "#F8F9FD"
}))
  , fS = T.forwardRef(cS)
  , dS = ({title: a, titleId: i, ...u}, r) => T.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg",
    ref: r,
    "aria-labelledby": i,
    ...u
}, a ? T.createElement("title", {
    id: i
}, a) : null, T.createElement("path", {
    d: "M0 0h18v18H0V0z",
    fill: "#0D47A1"
}), T.createElement("path", {
    d: "M9 4V0H0v9h4V6l3 3h2V7L6 4h3z",
    fill: "#F8F9FD"
}), T.createElement("path", {
    d: "M3 1V0H1v1H0v2h1v6h2V3h6V1H3z",
    fill: "#EF5350"
}), T.createElement("path", {
    d: "M9 8L5 4H4l5 5V8z",
    fill: "#EF5350"
}), T.createElement("path", {
    d: "M7 13l-1 .5v.5h-.5L5 15l-.5-1H4v-.5L3 13l1-.5V12h.5l.5-1 .5 1H6v.5l1 .5z",
    fill: "#F8F9FD"
}), T.createElement("path", {
    d: "M13.06 12.62l.25.52.56-.13-.25.51.45.36-.56.12v.58l-.45-.36-.44.36V14l-.56-.12.45-.36-.25-.51.56.13.24-.52zM10.77 7.14l.24.52.56-.13-.25.51.45.36-.56.13v.57l-.44-.36-.45.36v-.57l-.56-.13.45-.36-.25-.51.56.13.25-.52zM13.06 4.01l.25.52.56-.13-.25.51.45.36-.56.12v.58l-.45-.36-.44.36v-.58l-.56-.12.45-.36-.25-.51.56.13.24-.52zM15.07 6.36l.25.52.56-.13-.25.51.44.36-.55.12v.58l-.45-.36-.45.36v-.58l-.55-.12.45-.36-.25-.51.55.13.25-.52zM13.64 9.1l.2.6h.62l-.5.37.19.6-.51-.38-.51.37.2-.6-.52-.36h.63l.2-.6z",
    fill: "#F8F9FD"
}))
  , hS = T.forwardRef(dS)
  , gS = ({title: a, titleId: i, ...u}, r) => T.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg",
    ref: r,
    "aria-labelledby": i,
    ...u
}, a ? T.createElement("title", {
    id: i
}, a) : null, T.createElement("path", {
    d: "m4 0v18h10V0z",
    fill: "#f8f9fd",
    shapeRendering: "crispEdges"
}), T.createElement("path", {
    d: "m0 0v18h4V0zm14 0v18h4V0z",
    fill: "#ef5350",
    shapeRendering: "crispEdges"
}), T.createElement("path", {
    d: "m11 10l2-1-1-.5v-1l-2 1L11 7h-1L9 5 8 7H7l1 1.5-2-1v1L5 9l2 1-.5 1h2v1h1v-1h2l-.5-1z",
    fill: "#ef5350"
}))
  , vS = T.forwardRef(gS)
  , pS = ({title: a, titleId: i, ...u}, r) => T.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg",
    ref: r,
    "aria-labelledby": i,
    ...u
}, a ? T.createElement("title", {
    id: i
}, a) : null, T.createElement("path", {
    d: "M0 0h18v18H0V0z",
    fill: "#EF5350",
    shapeRendering: "crispEdges"
}), T.createElement("path", {
    d: "M3 7h12v4H3V7z",
    fill: "#F8F9FD",
    shapeRendering: "crispEdges"
}), T.createElement("path", {
    d: "M7 3h4v12H7V3z",
    fill: "#F8F9FD",
    shapeRendering: "crispEdges"
}))
  , mS = T.forwardRef(pS)
  , yS = ({title: a, titleId: i, ...u}, r) => T.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg",
    ref: r,
    "aria-labelledby": i,
    ...u
}, a ? T.createElement("title", {
    id: i
}, a) : null, T.createElement("path", {
    d: "M0 0h18v18H0V0z",
    fill: "#1565C0"
}), T.createElement("path", {
    d: "M8.95 2l.37 1.14h1.2l-.97.7.37 1.14-.97-.7-.96.7.36-1.13-.96-.7h1.2L8.94 2zM4.04 4.04l1.07.54.84-.84-.18 1.18 1.06.54-1.18.19-.19 1.18-.54-1.06-1.18.18.84-.84-.54-1.07zM2 8.95l1.14-.37v-1.2l.7.97L4.99 8l-.7.96.7.97-1.13-.37-.7.97v-1.2L2 8.95zM4.04 13.86l.54-1.06-.84-.85 1.18.19.54-1.07.19 1.19 1.18.18-1.06.55.18 1.18-.84-.85-1.07.54zM8.95 15.9l-.37-1.14h-1.2l.97-.7L8 12.92l.96.7.97-.7-.37 1.14.97.7h-1.2l-.37 1.14zM13.86 13.86l-1.06-.54-.85.85.19-1.18-1.07-.55 1.19-.18.18-1.19.55 1.07 1.18-.19-.85.85.54 1.06zM15.9 8.95l-1.14.37v1.2l-.7-.97-1.14.37.7-.97-.7-.96 1.14.36.7-.96v1.2l1.14.36zM13.86 4.04l-.54 1.07.85.84-1.18-.18-.55 1.06-.18-1.18-1.19-.19 1.07-.54-.19-1.18.85.84 1.06-.54z",
    fill: "#FDD835"
}))
  , _S = T.forwardRef(yS)
  , bS = ({title: a, titleId: i, ...u}, r) => T.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg",
    ref: r,
    "aria-labelledby": i,
    ...u
}, a ? T.createElement("title", {
    id: i
}, a) : null, T.createElement("path", {
    d: "M0 0h18v18H0V0z",
    fill: "#fff"
}), T.createElement("path", {
    d: "M7 0H1l6 5.5V0zm4 0v6l6.5-6H11zm7 4.5L15 7h3V4.5zm0 6.5h-4l4 3.5V11zm-1 7l-6-5.5V18h6zM7 18v-6L.5 18H7zm-7-4.5L3 11H0v2.5zM0 7h4L0 3.5V7z",
    fill: "#0D47A1"
}), T.createElement("path", {
    d: "M7 7L-6.5-5v2.3L5 7h2zm1 1V0h2v8h8v2h-8v8H8v-8H0V8h8zM-9 23L5 11h2L-6.5 23H-9zM11 7L23-4h2.2L13 7h-2zm2 4h-2l11.5 10v-2L13 11z",
    fill: "#EF5350"
}))
  , SS = T.forwardRef(bS)
  , OS = ({title: a, titleId: i, ...u}, r) => T.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg",
    ref: r,
    "aria-labelledby": i,
    ...u
}, a ? T.createElement("title", {
    id: i
}, a) : null, T.createElement("path", {
    d: "M0 18h18V0H0v18Z",
    fill: "#F0F3FA"
}), T.createElement("path", {
    d: "M9 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
    fill: "#F7525F"
}), T.createElement("path", {
    fillRule: "evenodd",
    d: "M9 17.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm0 .5A9 9 0 1 0 9 0a9 9 0 0 0 0 18Z",
    fill: "#E0E3EB"
}))
  , ES = T.forwardRef(OS)
  , AS = ({title: a, titleId: i, ...u}, r) => T.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg",
    ref: r,
    "aria-labelledby": i,
    ...u
}, a ? T.createElement("title", {
    id: i
}, a) : null, T.createElement("path", {
    d: "M0 18h18V0H0v18z",
    fill: "#0D47A1",
    shapeRendering: "crispEdges"
}), T.createElement("path", {
    d: "M11 8.13l.25.52.56-.13-.25.51.45.36-.56.12v.58L11 9.73l-.44.36V9.5L10 9.4l.45-.36-.25-.51.56.13.24-.52zM13 12.13l.25.52.56-.13-.25.51.45.36-.56.12v.58l-.45-.36-.44.36v-.58L12 13.4l.45-.36-.25-.51.56.13.24-.52zM13.3 5l.25.52.56-.13-.25.51.44.36-.55.12v.58l-.45-.36-.45.36v-.58l-.55-.12.45-.36-.25-.51.55.13.25-.52zM15.3 8.35l.25.51.56-.12-.25.51.45.36-.56.12v.57l-.44-.35-.45.35v-.57l-.56-.12.45-.36-.25-.51.56.12.25-.51z",
    fill: "#EF5350"
}), T.createElement("path", {
    d: "M9 4V0H0v9h4V6l3 3h2V7L6 4h3z",
    fill: "#F8F9FD"
}), T.createElement("path", {
    d: "M3 1V0H1v1H0v2h1v6h2V3h6V1H3z",
    fill: "#EF5350"
}), T.createElement("path", {
    d: "M9 8L5 4H4l5 5V8z",
    fill: "#EF5350"
}))
  , TS = T.forwardRef(AS)
  , RS = ({title: a, titleId: i, ...u}, r) => T.createElement("svg", {
    width: 56,
    height: 56,
    xmlns: "http://www.w3.org/2000/svg",
    ref: r,
    "aria-labelledby": i,
    ...u
}, a ? T.createElement("title", {
    id: i
}, a) : null, T.createElement("path", {
    fill: "#F7931A",
    d: "M0 0h56v56H0z"
}), T.createElement("path", {
    d: "M39.936 24.704c.515-3.494-2.13-5.357-5.773-6.622l1.18-4.708-2.877-.716-1.148 4.592-2.296-.549 1.164-4.625-2.878-.715-1.181 4.725-1.83-.433v-.016l-3.976-.999-.766 3.078s2.13.5 2.096.516c1.165.3 1.365 1.065 1.332 1.664l-1.332 5.39.3.1-.316-.067-1.88 7.537c-.133.35-.5.882-1.314.665.033.05-2.08-.499-2.08-.499l-1.43 3.278 3.743.931 2.046.533-1.198 4.775 2.878.715 1.165-4.725 2.312.599-1.18 4.708 2.877.716 1.181-4.775c4.908.931 8.602.566 10.15-3.877 1.247-3.576-.067-5.623-2.646-6.987 1.88-.416 3.294-1.664 3.66-4.21h.017zm-6.572 9.217c-.882 3.577-6.904 1.63-8.85 1.164l1.58-6.338c1.946.499 8.202 1.447 7.27 5.157v.017zm.882-9.267c-.799 3.244-5.823 1.597-7.437 1.198l1.43-5.74c1.631.4 6.855 1.165 6.007 4.542z",
    fill: "#fff"
}))
  , xS = T.forwardRef(RS)
  , wS = ({title: a, titleId: i, ...u}, r) => T.createElement("svg", {
    width: 56,
    height: 56,
    xmlns: "http://www.w3.org/2000/svg",
    ref: r,
    "aria-labelledby": i,
    ...u
}, a ? T.createElement("title", {
    id: i
}, a) : null, T.createElement("path", {
    d: "M0 0h56v56H0V0z",
    fill: "#D69A00"
}), T.createElement("path", {
    d: "M21.248 21.555h13.784l-2.01-5.393a1.17 1.17 0 00-.41-.553l-11.364 5.946zm-.038-6.401C21.698 13.842 22.772 13 23.956 13h8.151c1.184 0 2.258.842 2.747 2.154l2.009 5.393c.603 1.618-.371 3.453-1.831 3.453h-14c-1.46 0-2.433-1.835-1.831-3.453l2.01-5.393h-.001zM10.235 35.555h13.757l-2.01-5.393a1.171 1.171 0 00-.41-.553l-11.337 5.946zm-.039-6.401C10.685 27.842 11.76 27 12.943 27h8.124c1.184 0 2.259.842 2.747 2.154l2.009 5.393c.603 1.618-.37 3.453-1.831 3.453H10.017c-1.46 0-2.433-1.835-1.83-3.453l2.01-5.393zm35.89 6.401h-13.85l11.43-5.945c.179.126.323.316.413.553l2.008 5.392zM34.945 27c-1.184 0-2.259.842-2.747 2.154l-2.009 5.393c-.603 1.618.37 3.453 1.831 3.453h14.067c1.46 0 2.433-1.835 1.83-3.453l-2.01-5.393C45.422 27.842 44.348 27 43.164 27h-8.22z",
    fill: "#fff"
}))
  , NS = T.forwardRef(wS)
  , MS = ({title: a, titleId: i, ...u}, r) => T.createElement("svg", {
    width: 56,
    height: 56,
    viewBox: "0 0 56 56",
    xmlns: "http://www.w3.org/2000/svg",
    ref: r,
    "aria-labelledby": i,
    ...u
}, a ? T.createElement("title", {
    id: i
}, a) : null, T.createElement("path", {
    fill: "url(#a)",
    d: "M0 0h56v56H0z"
}), T.createElement("path", {
    d: "M27.92 8.28v13.6l-11.67 6.45L27.92 8.28Z",
    fill: "#E7F0FF"
}), T.createElement("path", {
    d: "m16.25 28.33-.07.1 11.74 7.45v-14l-11.67 6.45Z",
    fill: "#A5B9EE"
}), T.createElement("path", {
    d: "M27.92 8.28v13.6l11.88 6.56h.01L27.98 8.17l-.06.1Z",
    fill: "#A5B8F0"
}), T.createElement("path", {
    d: "m39.8 28.44-11.82 7.48-.06-.04v-14l11.88 6.56Z",
    fill: "#687FCB"
}), T.createElement("path", {
    fillRule: "evenodd",
    d: "M27.8 8.1a.2.2 0 0 1 .36 0l11.81 20.23a.2.2 0 0 1-.06.27l-11.82 7.48a.2.2 0 0 1-.22 0L16.1 28.6a.2.2 0 0 1-.06-.27L27.8 8.1Zm0 .78L16.7 27.93l11.1-6.22V8.88Zm0 13.26-11.24 6.3 11.23 7.14V22.14Zm.37 13.44V22.14l11.27 6.3-11.27 7.14Zm11.13-7.65L28.17 21.7V8.88L39.3 27.93Z",
    fill: "#fff"
}), T.createElement("path", {
    d: "M28 47.82 16.09 30.55l11.9 7.26 11.91-7.26L28 47.82Z",
    fill: "#A8B9EF"
}), T.createElement("path", {
    d: "M28.02 37.8H28l-11.91-7.25 11.9 17.27.03-.03v-10Z",
    fill: "#E8F1FF"
}), T.createElement("path", {
    fillRule: "evenodd",
    d: "M16.04 30.81a.23.23 0 0 1 .02-.29c.08-.08.2-.1.3-.04L28 37.58l11.65-7.1c.1-.05.21-.04.29.04.07.08.08.2.02.29l-11.8 17.1a.2.2 0 0 1-.33 0l-11.79-17.1Zm11.77 7.1-11.05-6.73L27.8 47.2v-9.29Zm.38 9.3v-9.3l11.05-6.73L28.2 47.2Z",
    fill: "#fff"
}), T.createElement("defs", null, T.createElement("linearGradient", {
    id: "a",
    x1: 28,
    y1: 0,
    x2: 28,
    y2: 56,
    gradientUnits: "userSpaceOnUse"
}, T.createElement("stop", {
    stopColor: "#465191"
}), T.createElement("stop", {
    offset: .36,
    stopColor: "#32498F"
}), T.createElement("stop", {
    offset: .7,
    stopColor: "#555E99"
}), T.createElement("stop", {
    offset: 1,
    stopColor: "#4F5795"
}))))
  , DS = T.forwardRef(MS)
  , CS = ({title: a, titleId: i, ...u}, r) => T.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg",
    ref: r,
    "aria-labelledby": i,
    ...u
}, a ? T.createElement("title", {
    id: i
}, a) : null, T.createElement("path", {
    d: "m0 0h18v6H0z",
    fill: "#F8F9FD",
    shapeRendering: "crispEdges"
}), T.createElement("path", {
    d: "m0 6h18v6H0z",
    fill: "#1E88E5",
    shapeRendering: "crispEdges"
}), T.createElement("path", {
    d: "m0 12h18v6H0z",
    fill: "#EF5350",
    shapeRendering: "crispEdges"
}))
  , jS = T.forwardRef(CS)
  , ug = a => {
    switch (a) {
    case "USD":
        return H.jsx(fS, {});
    case "AUD":
        return H.jsx(hS, {});
    case "CAD":
        return H.jsx(vS, {});
    case "CHF":
        return H.jsx(mS, {});
    case "EUR":
        return H.jsx(_S, {});
    case "GBP":
        return H.jsx(SS, {});
    case "JPY":
        return H.jsx(ES, {});
    case "NZD":
        return H.jsx(TS, {});
    case "BTC":
        return H.jsx(xS, {});
    case "XAU":
        return H.jsx(NS, {});
    case "ETH":
        return H.jsx(DS, {});
    case "RUB":
        return H.jsx(jS, {});
    default:
        return null
    }
}
  , Lv = ({symbol: a}) => {
    const i = a.slice(0, 3)
      , u = a.slice(3)
      , r = ug(i)
      , o = ug(u);
    return H.jsxs("div", {
        className: qc.imagesContainer,
        children: [H.jsx("span", {
            className: qc.logo,
            children: o
        }), H.jsx("span", {
            className: qc.logo,
            children: r
        })]
    })
}
  , Df = ({callback: a}) => {
    const i = T.useRef(null)
      , u = T.useRef(null);
    return T.useEffect( () => {
        const r = o => {
            if (i.current && !i.current.contains(o.target)) {
                if (u.current && u.current.contains(o.target))
                    return;
                a()
            }
        }
        ;
        return document.addEventListener("click", r, !0),
        () => {
            document.removeEventListener("click", r, !0)
        }
    }
    , []),
    {
        closeRef: i,
        openerRef: u
    }
}
;
function Bv(a, i) {
    return function() {
        return a.apply(i, arguments)
    }
}
const {toString: zS} = Object.prototype
  , {getPrototypeOf: Cf} = Object
  , is = (a => i => {
    const u = zS.call(i);
    return a[u] || (a[u] = u.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , vn = a => (a = a.toLowerCase(),
i => is(i) === a)
  , ls = a => i => typeof i === a
  , {isArray: Hi} = Array
  , Fl = ls("undefined");
function US(a) {
    return a !== null && !Fl(a) && a.constructor !== null && !Fl(a.constructor) && Yt(a.constructor.isBuffer) && a.constructor.isBuffer(a)
}
const Hv = vn("ArrayBuffer");
function LS(a) {
    let i;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(a) : i = a && a.buffer && Hv(a.buffer),
    i
}
const BS = ls("string")
  , Yt = ls("function")
  , Vv = ls("number")
  , rs = a => a !== null && typeof a == "object"
  , HS = a => a === !0 || a === !1
  , zu = a => {
    if (is(a) !== "object")
        return !1;
    const i = Cf(a);
    return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in a) && !(Symbol.iterator in a)
}
  , VS = vn("Date")
  , qS = vn("File")
  , GS = vn("Blob")
  , YS = vn("FileList")
  , KS = a => rs(a) && Yt(a.pipe)
  , XS = a => {
    let i;
    return a && (typeof FormData == "function" && a instanceof FormData || Yt(a.append) && ((i = is(a)) === "formdata" || i === "object" && Yt(a.toString) && a.toString() === "[object FormData]"))
}
  , ZS = vn("URLSearchParams")
  , $S = a => a.trim ? a.trim() : a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ur(a, i, {allOwnKeys: u=!1}={}) {
    if (a === null || typeof a > "u")
        return;
    let r, o;
    if (typeof a != "object" && (a = [a]),
    Hi(a))
        for (r = 0,
        o = a.length; r < o; r++)
            i.call(null, a[r], r, a);
    else {
        const f = u ? Object.getOwnPropertyNames(a) : Object.keys(a)
          , d = f.length;
        let g;
        for (r = 0; r < d; r++)
            g = f[r],
            i.call(null, a[g], g, a)
    }
}
function qv(a, i) {
    i = i.toLowerCase();
    const u = Object.keys(a);
    let r = u.length, o;
    for (; r-- > 0; )
        if (o = u[r],
        i === o.toLowerCase())
            return o;
    return null
}
const Gv = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , Yv = a => !Fl(a) && a !== Gv;
function df() {
    const {caseless: a} = Yv(this) && this || {}
      , i = {}
      , u = (r, o) => {
        const f = a && qv(i, o) || o;
        zu(i[f]) && zu(r) ? i[f] = df(i[f], r) : zu(r) ? i[f] = df({}, r) : Hi(r) ? i[f] = r.slice() : i[f] = r
    }
    ;
    for (let r = 0, o = arguments.length; r < o; r++)
        arguments[r] && ur(arguments[r], u);
    return i
}
const kS = (a, i, u, {allOwnKeys: r}={}) => (ur(i, (o, f) => {
    u && Yt(o) ? a[f] = Bv(o, u) : a[f] = o
}
, {
    allOwnKeys: r
}),
a)
  , QS = a => (a.charCodeAt(0) === 65279 && (a = a.slice(1)),
a)
  , JS = (a, i, u, r) => {
    a.prototype = Object.create(i.prototype, r),
    a.prototype.constructor = a,
    Object.defineProperty(a, "super", {
        value: i.prototype
    }),
    u && Object.assign(a.prototype, u)
}
  , FS = (a, i, u, r) => {
    let o, f, d;
    const g = {};
    if (i = i || {},
    a == null)
        return i;
    do {
        for (o = Object.getOwnPropertyNames(a),
        f = o.length; f-- > 0; )
            d = o[f],
            (!r || r(d, a, i)) && !g[d] && (i[d] = a[d],
            g[d] = !0);
        a = u !== !1 && Cf(a)
    } while (a && (!u || u(a, i)) && a !== Object.prototype);
    return i
}
  , PS = (a, i, u) => {
    a = String(a),
    (u === void 0 || u > a.length) && (u = a.length),
    u -= i.length;
    const r = a.indexOf(i, u);
    return r !== -1 && r === u
}
  , WS = a => {
    if (!a)
        return null;
    if (Hi(a))
        return a;
    let i = a.length;
    if (!Vv(i))
        return null;
    const u = new Array(i);
    for (; i-- > 0; )
        u[i] = a[i];
    return u
}
  , IS = (a => i => a && i instanceof a)(typeof Uint8Array < "u" && Cf(Uint8Array))
  , e3 = (a, i) => {
    const r = (a && a[Symbol.iterator]).call(a);
    let o;
    for (; (o = r.next()) && !o.done; ) {
        const f = o.value;
        i.call(a, f[0], f[1])
    }
}
  , t3 = (a, i) => {
    let u;
    const r = [];
    for (; (u = a.exec(i)) !== null; )
        r.push(u);
    return r
}
  , n3 = vn("HTMLFormElement")
  , a3 = a => a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(u, r, o) {
    return r.toUpperCase() + o
})
  , sg = ( ({hasOwnProperty: a}) => (i, u) => a.call(i, u))(Object.prototype)
  , i3 = vn("RegExp")
  , Kv = (a, i) => {
    const u = Object.getOwnPropertyDescriptors(a)
      , r = {};
    ur(u, (o, f) => {
        let d;
        (d = i(o, f, a)) !== !1 && (r[f] = d || o)
    }
    ),
    Object.defineProperties(a, r)
}
  , l3 = a => {
    Kv(a, (i, u) => {
        if (Yt(a) && ["arguments", "caller", "callee"].indexOf(u) !== -1)
            return !1;
        const r = a[u];
        if (Yt(r)) {
            if (i.enumerable = !1,
            "writable"in i) {
                i.writable = !1;
                return
            }
            i.set || (i.set = () => {
                throw Error("Can not rewrite read-only method '" + u + "'")
            }
            )
        }
    }
    )
}
  , r3 = (a, i) => {
    const u = {}
      , r = o => {
        o.forEach(f => {
            u[f] = !0
        }
        )
    }
    ;
    return Hi(a) ? r(a) : r(String(a).split(i)),
    u
}
  , u3 = () => {}
  , s3 = (a, i) => (a = +a,
Number.isFinite(a) ? a : i)
  , Gc = "abcdefghijklmnopqrstuvwxyz"
  , og = "0123456789"
  , Xv = {
    DIGIT: og,
    ALPHA: Gc,
    ALPHA_DIGIT: Gc + Gc.toUpperCase() + og
}
  , o3 = (a=16, i=Xv.ALPHA_DIGIT) => {
    let u = "";
    const {length: r} = i;
    for (; a--; )
        u += i[Math.random() * r | 0];
    return u
}
;
function c3(a) {
    return !!(a && Yt(a.append) && a[Symbol.toStringTag] === "FormData" && a[Symbol.iterator])
}
const f3 = a => {
    const i = new Array(10)
      , u = (r, o) => {
        if (rs(r)) {
            if (i.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                i[o] = r;
                const f = Hi(r) ? [] : {};
                return ur(r, (d, g) => {
                    const p = u(d, o + 1);
                    !Fl(p) && (f[g] = p)
                }
                ),
                i[o] = void 0,
                f
            }
        }
        return r
    }
    ;
    return u(a, 0)
}
  , d3 = vn("AsyncFunction")
  , h3 = a => a && (rs(a) || Yt(a)) && Yt(a.then) && Yt(a.catch)
  , B = {
    isArray: Hi,
    isArrayBuffer: Hv,
    isBuffer: US,
    isFormData: XS,
    isArrayBufferView: LS,
    isString: BS,
    isNumber: Vv,
    isBoolean: HS,
    isObject: rs,
    isPlainObject: zu,
    isUndefined: Fl,
    isDate: VS,
    isFile: qS,
    isBlob: GS,
    isRegExp: i3,
    isFunction: Yt,
    isStream: KS,
    isURLSearchParams: ZS,
    isTypedArray: IS,
    isFileList: YS,
    forEach: ur,
    merge: df,
    extend: kS,
    trim: $S,
    stripBOM: QS,
    inherits: JS,
    toFlatObject: FS,
    kindOf: is,
    kindOfTest: vn,
    endsWith: PS,
    toArray: WS,
    forEachEntry: e3,
    matchAll: t3,
    isHTMLForm: n3,
    hasOwnProperty: sg,
    hasOwnProp: sg,
    reduceDescriptors: Kv,
    freezeMethods: l3,
    toObjectSet: r3,
    toCamelCase: a3,
    noop: u3,
    toFiniteNumber: s3,
    findKey: qv,
    global: Gv,
    isContextDefined: Yv,
    ALPHABET: Xv,
    generateString: o3,
    isSpecCompliantForm: c3,
    toJSONObject: f3,
    isAsyncFn: d3,
    isThenable: h3
};
function ye(a, i, u, r, o) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = a,
    this.name = "AxiosError",
    i && (this.code = i),
    u && (this.config = u),
    r && (this.request = r),
    o && (this.response = o)
}
B.inherits(ye, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: B.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const Zv = ye.prototype
  , $v = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(a => {
    $v[a] = {
        value: a
    }
}
);
Object.defineProperties(ye, $v);
Object.defineProperty(Zv, "isAxiosError", {
    value: !0
});
ye.from = (a, i, u, r, o, f) => {
    const d = Object.create(Zv);
    return B.toFlatObject(a, d, function(p) {
        return p !== Error.prototype
    }, g => g !== "isAxiosError"),
    ye.call(d, a.message, i, u, r, o),
    d.cause = a,
    d.name = a.name,
    f && Object.assign(d, f),
    d
}
;
const g3 = null;
function hf(a) {
    return B.isPlainObject(a) || B.isArray(a)
}
function kv(a) {
    return B.endsWith(a, "[]") ? a.slice(0, -2) : a
}
function cg(a, i, u) {
    return a ? a.concat(i).map(function(o, f) {
        return o = kv(o),
        !u && f ? "[" + o + "]" : o
    }).join(u ? "." : "") : i
}
function v3(a) {
    return B.isArray(a) && !a.some(hf)
}
const p3 = B.toFlatObject(B, {}, null, function(i) {
    return /^is[A-Z]/.test(i)
});
function us(a, i, u) {
    if (!B.isObject(a))
        throw new TypeError("target must be an object");
    i = i || new FormData,
    u = B.toFlatObject(u, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(C, Z) {
        return !B.isUndefined(Z[C])
    });
    const r = u.metaTokens
      , o = u.visitor || y
      , f = u.dots
      , d = u.indexes
      , p = (u.Blob || typeof Blob < "u" && Blob) && B.isSpecCompliantForm(i);
    if (!B.isFunction(o))
        throw new TypeError("visitor must be a function");
    function v(N) {
        if (N === null)
            return "";
        if (B.isDate(N))
            return N.toISOString();
        if (!p && B.isBlob(N))
            throw new ye("Blob is not supported. Use a Buffer instead.");
        return B.isArrayBuffer(N) || B.isTypedArray(N) ? p && typeof Blob == "function" ? new Blob([N]) : Buffer.from(N) : N
    }
    function y(N, C, Z) {
        let re = N;
        if (N && !Z && typeof N == "object") {
            if (B.endsWith(C, "{}"))
                C = r ? C : C.slice(0, -2),
                N = JSON.stringify(N);
            else if (B.isArray(N) && v3(N) || (B.isFileList(N) || B.endsWith(C, "[]")) && (re = B.toArray(N)))
                return C = kv(C),
                re.forEach(function(te, ie) {
                    !(B.isUndefined(te) || te === null) && i.append(d === !0 ? cg([C], ie, f) : d === null ? C : C + "[]", v(te))
                }),
                !1
        }
        return hf(N) ? !0 : (i.append(cg(Z, C, f), v(N)),
        !1)
    }
    const _ = []
      , M = Object.assign(p3, {
        defaultVisitor: y,
        convertValue: v,
        isVisitable: hf
    });
    function U(N, C) {
        if (!B.isUndefined(N)) {
            if (_.indexOf(N) !== -1)
                throw Error("Circular reference detected in " + C.join("."));
            _.push(N),
            B.forEach(N, function(re, ue) {
                (!(B.isUndefined(re) || re === null) && o.call(i, re, B.isString(ue) ? ue.trim() : ue, C, M)) === !0 && U(re, C ? C.concat(ue) : [ue])
            }),
            _.pop()
        }
    }
    if (!B.isObject(a))
        throw new TypeError("data must be an object");
    return U(a),
    i
}
function fg(a) {
    const i = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g, function(r) {
        return i[r]
    })
}
function jf(a, i) {
    this._pairs = [],
    a && us(a, this, i)
}
const Qv = jf.prototype;
Qv.append = function(i, u) {
    this._pairs.push([i, u])
}
;
Qv.toString = function(i) {
    const u = i ? function(r) {
        return i.call(this, r, fg)
    }
    : fg;
    return this._pairs.map(function(o) {
        return u(o[0]) + "=" + u(o[1])
    }, "").join("&")
}
;
function m3(a) {
    return encodeURIComponent(a).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function Jv(a, i, u) {
    if (!i)
        return a;
    const r = u && u.encode || m3
      , o = u && u.serialize;
    let f;
    if (o ? f = o(i, u) : f = B.isURLSearchParams(i) ? i.toString() : new jf(i,u).toString(r),
    f) {
        const d = a.indexOf("#");
        d !== -1 && (a = a.slice(0, d)),
        a += (a.indexOf("?") === -1 ? "?" : "&") + f
    }
    return a
}
class dg {
    constructor() {
        this.handlers = []
    }
    use(i, u, r) {
        return this.handlers.push({
            fulfilled: i,
            rejected: u,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(i) {
        this.handlers[i] && (this.handlers[i] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(i) {
        B.forEach(this.handlers, function(r) {
            r !== null && i(r)
        })
    }
}
const Fv = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , y3 = typeof URLSearchParams < "u" ? URLSearchParams : jf
  , _3 = typeof FormData < "u" ? FormData : null
  , b3 = typeof Blob < "u" ? Blob : null
  , S3 = {
    isBrowser: !0,
    classes: {
        URLSearchParams: y3,
        FormData: _3,
        Blob: b3
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , Pv = typeof window < "u" && typeof document < "u"
  , O3 = (a => Pv && ["ReactNative", "NativeScript", "NS"].indexOf(a) < 0)(typeof navigator < "u" && navigator.product)
  , E3 = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , A3 = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Pv,
    hasStandardBrowserEnv: O3,
    hasStandardBrowserWebWorkerEnv: E3
}, Symbol.toStringTag, {
    value: "Module"
}))
  , cn = {
    ...A3,
    ...S3
};
function T3(a, i) {
    return us(a, new cn.classes.URLSearchParams, Object.assign({
        visitor: function(u, r, o, f) {
            return cn.isNode && B.isBuffer(u) ? (this.append(r, u.toString("base64")),
            !1) : f.defaultVisitor.apply(this, arguments)
        }
    }, i))
}
function R3(a) {
    return B.matchAll(/\w+|\[(\w*)]/g, a).map(i => i[0] === "[]" ? "" : i[1] || i[0])
}
function x3(a) {
    const i = {}
      , u = Object.keys(a);
    let r;
    const o = u.length;
    let f;
    for (r = 0; r < o; r++)
        f = u[r],
        i[f] = a[f];
    return i
}
function Wv(a) {
    function i(u, r, o, f) {
        let d = u[f++];
        if (d === "__proto__")
            return !0;
        const g = Number.isFinite(+d)
          , p = f >= u.length;
        return d = !d && B.isArray(o) ? o.length : d,
        p ? (B.hasOwnProp(o, d) ? o[d] = [o[d], r] : o[d] = r,
        !g) : ((!o[d] || !B.isObject(o[d])) && (o[d] = []),
        i(u, r, o[d], f) && B.isArray(o[d]) && (o[d] = x3(o[d])),
        !g)
    }
    if (B.isFormData(a) && B.isFunction(a.entries)) {
        const u = {};
        return B.forEachEntry(a, (r, o) => {
            i(R3(r), o, u, 0)
        }
        ),
        u
    }
    return null
}
function w3(a, i, u) {
    if (B.isString(a))
        try {
            return (i || JSON.parse)(a),
            B.trim(a)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (u || JSON.stringify)(a)
}
const sr = {
    transitional: Fv,
    adapter: ["xhr", "http"],
    transformRequest: [function(i, u) {
        const r = u.getContentType() || ""
          , o = r.indexOf("application/json") > -1
          , f = B.isObject(i);
        if (f && B.isHTMLForm(i) && (i = new FormData(i)),
        B.isFormData(i))
            return o ? JSON.stringify(Wv(i)) : i;
        if (B.isArrayBuffer(i) || B.isBuffer(i) || B.isStream(i) || B.isFile(i) || B.isBlob(i))
            return i;
        if (B.isArrayBufferView(i))
            return i.buffer;
        if (B.isURLSearchParams(i))
            return u.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            i.toString();
        let g;
        if (f) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return T3(i, this.formSerializer).toString();
            if ((g = B.isFileList(i)) || r.indexOf("multipart/form-data") > -1) {
                const p = this.env && this.env.FormData;
                return us(g ? {
                    "files[]": i
                } : i, p && new p, this.formSerializer)
            }
        }
        return f || o ? (u.setContentType("application/json", !1),
        w3(i)) : i
    }
    ],
    transformResponse: [function(i) {
        const u = this.transitional || sr.transitional
          , r = u && u.forcedJSONParsing
          , o = this.responseType === "json";
        if (i && B.isString(i) && (r && !this.responseType || o)) {
            const d = !(u && u.silentJSONParsing) && o;
            try {
                return JSON.parse(i)
            } catch (g) {
                if (d)
                    throw g.name === "SyntaxError" ? ye.from(g, ye.ERR_BAD_RESPONSE, this, null, this.response) : g
            }
        }
        return i
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: cn.classes.FormData,
        Blob: cn.classes.Blob
    },
    validateStatus: function(i) {
        return i >= 200 && i < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
B.forEach(["delete", "get", "head", "post", "put", "patch"], a => {
    sr.headers[a] = {}
}
);
const N3 = B.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , M3 = a => {
    const i = {};
    let u, r, o;
    return a && a.split(`
`).forEach(function(d) {
        o = d.indexOf(":"),
        u = d.substring(0, o).trim().toLowerCase(),
        r = d.substring(o + 1).trim(),
        !(!u || i[u] && N3[u]) && (u === "set-cookie" ? i[u] ? i[u].push(r) : i[u] = [r] : i[u] = i[u] ? i[u] + ", " + r : r)
    }),
    i
}
  , hg = Symbol("internals");
function Hl(a) {
    return a && String(a).trim().toLowerCase()
}
function Uu(a) {
    return a === !1 || a == null ? a : B.isArray(a) ? a.map(Uu) : String(a)
}
function D3(a) {
    const i = Object.create(null)
      , u = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = u.exec(a); )
        i[r[1]] = r[2];
    return i
}
const C3 = a => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());
function Yc(a, i, u, r, o) {
    if (B.isFunction(r))
        return r.call(this, i, u);
    if (o && (i = u),
    !!B.isString(i)) {
        if (B.isString(r))
            return i.indexOf(r) !== -1;
        if (B.isRegExp(r))
            return r.test(i)
    }
}
function j3(a) {
    return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, u, r) => u.toUpperCase() + r)
}
function z3(a, i) {
    const u = B.toCamelCase(" " + i);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(a, r + u, {
            value: function(o, f, d) {
                return this[r].call(this, i, o, f, d)
            },
            configurable: !0
        })
    }
    )
}
let Kt = class {
    constructor(i) {
        i && this.set(i)
    }
    set(i, u, r) {
        const o = this;
        function f(g, p, v) {
            const y = Hl(p);
            if (!y)
                throw new Error("header name must be a non-empty string");
            const _ = B.findKey(o, y);
            (!_ || o[_] === void 0 || v === !0 || v === void 0 && o[_] !== !1) && (o[_ || p] = Uu(g))
        }
        const d = (g, p) => B.forEach(g, (v, y) => f(v, y, p));
        return B.isPlainObject(i) || i instanceof this.constructor ? d(i, u) : B.isString(i) && (i = i.trim()) && !C3(i) ? d(M3(i), u) : i != null && f(u, i, r),
        this
    }
    get(i, u) {
        if (i = Hl(i),
        i) {
            const r = B.findKey(this, i);
            if (r) {
                const o = this[r];
                if (!u)
                    return o;
                if (u === !0)
                    return D3(o);
                if (B.isFunction(u))
                    return u.call(this, o, r);
                if (B.isRegExp(u))
                    return u.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(i, u) {
        if (i = Hl(i),
        i) {
            const r = B.findKey(this, i);
            return !!(r && this[r] !== void 0 && (!u || Yc(this, this[r], r, u)))
        }
        return !1
    }
    delete(i, u) {
        const r = this;
        let o = !1;
        function f(d) {
            if (d = Hl(d),
            d) {
                const g = B.findKey(r, d);
                g && (!u || Yc(r, r[g], g, u)) && (delete r[g],
                o = !0)
            }
        }
        return B.isArray(i) ? i.forEach(f) : f(i),
        o
    }
    clear(i) {
        const u = Object.keys(this);
        let r = u.length
          , o = !1;
        for (; r--; ) {
            const f = u[r];
            (!i || Yc(this, this[f], f, i, !0)) && (delete this[f],
            o = !0)
        }
        return o
    }
    normalize(i) {
        const u = this
          , r = {};
        return B.forEach(this, (o, f) => {
            const d = B.findKey(r, f);
            if (d) {
                u[d] = Uu(o),
                delete u[f];
                return
            }
            const g = i ? j3(f) : String(f).trim();
            g !== f && delete u[f],
            u[g] = Uu(o),
            r[g] = !0
        }
        ),
        this
    }
    concat(...i) {
        return this.constructor.concat(this, ...i)
    }
    toJSON(i) {
        const u = Object.create(null);
        return B.forEach(this, (r, o) => {
            r != null && r !== !1 && (u[o] = i && B.isArray(r) ? r.join(", ") : r)
        }
        ),
        u
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([i,u]) => i + ": " + u).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(i) {
        return i instanceof this ? i : new this(i)
    }
    static concat(i, ...u) {
        const r = new this(i);
        return u.forEach(o => r.set(o)),
        r
    }
    static accessor(i) {
        const r = (this[hg] = this[hg] = {
            accessors: {}
        }).accessors
          , o = this.prototype;
        function f(d) {
            const g = Hl(d);
            r[g] || (z3(o, d),
            r[g] = !0)
        }
        return B.isArray(i) ? i.forEach(f) : f(i),
        this
    }
}
;
Kt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
B.reduceDescriptors(Kt.prototype, ({value: a}, i) => {
    let u = i[0].toUpperCase() + i.slice(1);
    return {
        get: () => a,
        set(r) {
            this[u] = r
        }
    }
}
);
B.freezeMethods(Kt);
function Kc(a, i) {
    const u = this || sr
      , r = i || u
      , o = Kt.from(r.headers);
    let f = r.data;
    return B.forEach(a, function(g) {
        f = g.call(u, f, o.normalize(), i ? i.status : void 0)
    }),
    o.normalize(),
    f
}
function Iv(a) {
    return !!(a && a.__CANCEL__)
}
function or(a, i, u) {
    ye.call(this, a ?? "canceled", ye.ERR_CANCELED, i, u),
    this.name = "CanceledError"
}
B.inherits(or, ye, {
    __CANCEL__: !0
});
function U3(a, i, u) {
    const r = u.config.validateStatus;
    !u.status || !r || r(u.status) ? a(u) : i(new ye("Request failed with status code " + u.status,[ye.ERR_BAD_REQUEST, ye.ERR_BAD_RESPONSE][Math.floor(u.status / 100) - 4],u.config,u.request,u))
}
const L3 = cn.hasStandardBrowserEnv ? {
    write(a, i, u, r, o, f) {
        const d = [a + "=" + encodeURIComponent(i)];
        B.isNumber(u) && d.push("expires=" + new Date(u).toGMTString()),
        B.isString(r) && d.push("path=" + r),
        B.isString(o) && d.push("domain=" + o),
        f === !0 && d.push("secure"),
        document.cookie = d.join("; ")
    },
    read(a) {
        const i = document.cookie.match(new RegExp("(^|;\\s*)(" + a + ")=([^;]*)"));
        return i ? decodeURIComponent(i[3]) : null
    },
    remove(a) {
        this.write(a, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function B3(a) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)
}
function H3(a, i) {
    return i ? a.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : a
}
function ep(a, i) {
    return a && !B3(i) ? H3(a, i) : i
}
const V3 = cn.hasStandardBrowserEnv ? function() {
    const i = /(msie|trident)/i.test(navigator.userAgent)
      , u = document.createElement("a");
    let r;
    function o(f) {
        let d = f;
        return i && (u.setAttribute("href", d),
        d = u.href),
        u.setAttribute("href", d),
        {
            href: u.href,
            protocol: u.protocol ? u.protocol.replace(/:$/, "") : "",
            host: u.host,
            search: u.search ? u.search.replace(/^\?/, "") : "",
            hash: u.hash ? u.hash.replace(/^#/, "") : "",
            hostname: u.hostname,
            port: u.port,
            pathname: u.pathname.charAt(0) === "/" ? u.pathname : "/" + u.pathname
        }
    }
    return r = o(window.location.href),
    function(d) {
        const g = B.isString(d) ? o(d) : d;
        return g.protocol === r.protocol && g.host === r.host
    }
}() : function() {
    return function() {
        return !0
    }
}();
function q3(a) {
    const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(a);
    return i && i[1] || ""
}
function G3(a, i) {
    a = a || 10;
    const u = new Array(a)
      , r = new Array(a);
    let o = 0, f = 0, d;
    return i = i !== void 0 ? i : 1e3,
    function(p) {
        const v = Date.now()
          , y = r[f];
        d || (d = v),
        u[o] = p,
        r[o] = v;
        let _ = f
          , M = 0;
        for (; _ !== o; )
            M += u[_++],
            _ = _ % a;
        if (o = (o + 1) % a,
        o === f && (f = (f + 1) % a),
        v - d < i)
            return;
        const U = y && v - y;
        return U ? Math.round(M * 1e3 / U) : void 0
    }
}
function gg(a, i) {
    let u = 0;
    const r = G3(50, 250);
    return o => {
        const f = o.loaded
          , d = o.lengthComputable ? o.total : void 0
          , g = f - u
          , p = r(g)
          , v = f <= d;
        u = f;
        const y = {
            loaded: f,
            total: d,
            progress: d ? f / d : void 0,
            bytes: g,
            rate: p || void 0,
            estimated: p && d && v ? (d - f) / p : void 0,
            event: o
        };
        y[i ? "download" : "upload"] = !0,
        a(y)
    }
}
const Y3 = typeof XMLHttpRequest < "u"
  , K3 = Y3 && function(a) {
    return new Promise(function(u, r) {
        let o = a.data;
        const f = Kt.from(a.headers).normalize();
        let {responseType: d, withXSRFToken: g} = a, p;
        function v() {
            a.cancelToken && a.cancelToken.unsubscribe(p),
            a.signal && a.signal.removeEventListener("abort", p)
        }
        let y;
        if (B.isFormData(o)) {
            if (cn.hasStandardBrowserEnv || cn.hasStandardBrowserWebWorkerEnv)
                f.setContentType(!1);
            else if ((y = f.getContentType()) !== !1) {
                const [C,...Z] = y ? y.split(";").map(re => re.trim()).filter(Boolean) : [];
                f.setContentType([C || "multipart/form-data", ...Z].join("; "))
            }
        }
        let _ = new XMLHttpRequest;
        if (a.auth) {
            const C = a.auth.username || ""
              , Z = a.auth.password ? unescape(encodeURIComponent(a.auth.password)) : "";
            f.set("Authorization", "Basic " + btoa(C + ":" + Z))
        }
        const M = ep(a.baseURL, a.url);
        _.open(a.method.toUpperCase(), Jv(M, a.params, a.paramsSerializer), !0),
        _.timeout = a.timeout;
        function U() {
            if (!_)
                return;
            const C = Kt.from("getAllResponseHeaders"in _ && _.getAllResponseHeaders())
              , re = {
                data: !d || d === "text" || d === "json" ? _.responseText : _.response,
                status: _.status,
                statusText: _.statusText,
                headers: C,
                config: a,
                request: _
            };
            U3(function(te) {
                u(te),
                v()
            }, function(te) {
                r(te),
                v()
            }, re),
            _ = null
        }
        if ("onloadend"in _ ? _.onloadend = U : _.onreadystatechange = function() {
            !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(U)
        }
        ,
        _.onabort = function() {
            _ && (r(new ye("Request aborted",ye.ECONNABORTED,a,_)),
            _ = null)
        }
        ,
        _.onerror = function() {
            r(new ye("Network Error",ye.ERR_NETWORK,a,_)),
            _ = null
        }
        ,
        _.ontimeout = function() {
            let Z = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
            const re = a.transitional || Fv;
            a.timeoutErrorMessage && (Z = a.timeoutErrorMessage),
            r(new ye(Z,re.clarifyTimeoutError ? ye.ETIMEDOUT : ye.ECONNABORTED,a,_)),
            _ = null
        }
        ,
        cn.hasStandardBrowserEnv && (g && B.isFunction(g) && (g = g(a)),
        g || g !== !1 && V3(M))) {
            const C = a.xsrfHeaderName && a.xsrfCookieName && L3.read(a.xsrfCookieName);
            C && f.set(a.xsrfHeaderName, C)
        }
        o === void 0 && f.setContentType(null),
        "setRequestHeader"in _ && B.forEach(f.toJSON(), function(Z, re) {
            _.setRequestHeader(re, Z)
        }),
        B.isUndefined(a.withCredentials) || (_.withCredentials = !!a.withCredentials),
        d && d !== "json" && (_.responseType = a.responseType),
        typeof a.onDownloadProgress == "function" && _.addEventListener("progress", gg(a.onDownloadProgress, !0)),
        typeof a.onUploadProgress == "function" && _.upload && _.upload.addEventListener("progress", gg(a.onUploadProgress)),
        (a.cancelToken || a.signal) && (p = C => {
            _ && (r(!C || C.type ? new or(null,a,_) : C),
            _.abort(),
            _ = null)
        }
        ,
        a.cancelToken && a.cancelToken.subscribe(p),
        a.signal && (a.signal.aborted ? p() : a.signal.addEventListener("abort", p)));
        const N = q3(M);
        if (N && cn.protocols.indexOf(N) === -1) {
            r(new ye("Unsupported protocol " + N + ":",ye.ERR_BAD_REQUEST,a));
            return
        }
        _.send(o || null)
    }
    )
}
  , gf = {
    http: g3,
    xhr: K3
};
B.forEach(gf, (a, i) => {
    if (a) {
        try {
            Object.defineProperty(a, "name", {
                value: i
            })
        } catch {}
        Object.defineProperty(a, "adapterName", {
            value: i
        })
    }
}
);
const vg = a => `- ${a}`
  , X3 = a => B.isFunction(a) || a === null || a === !1
  , tp = {
    getAdapter: a => {
        a = B.isArray(a) ? a : [a];
        const {length: i} = a;
        let u, r;
        const o = {};
        for (let f = 0; f < i; f++) {
            u = a[f];
            let d;
            if (r = u,
            !X3(u) && (r = gf[(d = String(u)).toLowerCase()],
            r === void 0))
                throw new ye(`Unknown adapter '${d}'`);
            if (r)
                break;
            o[d || "#" + f] = r
        }
        if (!r) {
            const f = Object.entries(o).map( ([g,p]) => `adapter ${g} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build"));
            let d = i ? f.length > 1 ? `since :
` + f.map(vg).join(`
`) : " " + vg(f[0]) : "as no adapter specified";
            throw new ye("There is no suitable adapter to dispatch the request " + d,"ERR_NOT_SUPPORT")
        }
        return r
    }
    ,
    adapters: gf
};
function Xc(a) {
    if (a.cancelToken && a.cancelToken.throwIfRequested(),
    a.signal && a.signal.aborted)
        throw new or(null,a)
}
function pg(a) {
    return Xc(a),
    a.headers = Kt.from(a.headers),
    a.data = Kc.call(a, a.transformRequest),
    ["post", "put", "patch"].indexOf(a.method) !== -1 && a.headers.setContentType("application/x-www-form-urlencoded", !1),
    tp.getAdapter(a.adapter || sr.adapter)(a).then(function(r) {
        return Xc(a),
        r.data = Kc.call(a, a.transformResponse, r),
        r.headers = Kt.from(r.headers),
        r
    }, function(r) {
        return Iv(r) || (Xc(a),
        r && r.response && (r.response.data = Kc.call(a, a.transformResponse, r.response),
        r.response.headers = Kt.from(r.response.headers))),
        Promise.reject(r)
    })
}
const mg = a => a instanceof Kt ? a.toJSON() : a;
function Ui(a, i) {
    i = i || {};
    const u = {};
    function r(v, y, _) {
        return B.isPlainObject(v) && B.isPlainObject(y) ? B.merge.call({
            caseless: _
        }, v, y) : B.isPlainObject(y) ? B.merge({}, y) : B.isArray(y) ? y.slice() : y
    }
    function o(v, y, _) {
        if (B.isUndefined(y)) {
            if (!B.isUndefined(v))
                return r(void 0, v, _)
        } else
            return r(v, y, _)
    }
    function f(v, y) {
        if (!B.isUndefined(y))
            return r(void 0, y)
    }
    function d(v, y) {
        if (B.isUndefined(y)) {
            if (!B.isUndefined(v))
                return r(void 0, v)
        } else
            return r(void 0, y)
    }
    function g(v, y, _) {
        if (_ in i)
            return r(v, y);
        if (_ in a)
            return r(void 0, v)
    }
    const p = {
        url: f,
        method: f,
        data: f,
        baseURL: d,
        transformRequest: d,
        transformResponse: d,
        paramsSerializer: d,
        timeout: d,
        timeoutMessage: d,
        withCredentials: d,
        withXSRFToken: d,
        adapter: d,
        responseType: d,
        xsrfCookieName: d,
        xsrfHeaderName: d,
        onUploadProgress: d,
        onDownloadProgress: d,
        decompress: d,
        maxContentLength: d,
        maxBodyLength: d,
        beforeRedirect: d,
        transport: d,
        httpAgent: d,
        httpsAgent: d,
        cancelToken: d,
        socketPath: d,
        responseEncoding: d,
        validateStatus: g,
        headers: (v, y) => o(mg(v), mg(y), !0)
    };
    return B.forEach(Object.keys(Object.assign({}, a, i)), function(y) {
        const _ = p[y] || o
          , M = _(a[y], i[y], y);
        B.isUndefined(M) && _ !== g || (u[y] = M)
    }),
    u
}
const np = "1.6.7"
  , zf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (a, i) => {
    zf[a] = function(r) {
        return typeof r === a || "a" + (i < 1 ? "n " : " ") + a
    }
}
);
const yg = {};
zf.transitional = function(i, u, r) {
    function o(f, d) {
        return "[Axios v" + np + "] Transitional option '" + f + "'" + d + (r ? ". " + r : "")
    }
    return (f, d, g) => {
        if (i === !1)
            throw new ye(o(d, " has been removed" + (u ? " in " + u : "")),ye.ERR_DEPRECATED);
        return u && !yg[d] && (yg[d] = !0,
        console.warn(o(d, " has been deprecated since v" + u + " and will be removed in the near future"))),
        i ? i(f, d, g) : !0
    }
}
;
function Z3(a, i, u) {
    if (typeof a != "object")
        throw new ye("options must be an object",ye.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(a);
    let o = r.length;
    for (; o-- > 0; ) {
        const f = r[o]
          , d = i[f];
        if (d) {
            const g = a[f]
              , p = g === void 0 || d(g, f, a);
            if (p !== !0)
                throw new ye("option " + f + " must be " + p,ye.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (u !== !0)
            throw new ye("Unknown option " + f,ye.ERR_BAD_OPTION)
    }
}
const vf = {
    assertOptions: Z3,
    validators: zf
}
  , sa = vf.validators;
let Ca = class {
    constructor(i) {
        this.defaults = i,
        this.interceptors = {
            request: new dg,
            response: new dg
        }
    }
    async request(i, u) {
        try {
            return await this._request(i, u)
        } catch (r) {
            if (r instanceof Error) {
                let o;
                Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error;
                const f = o.stack ? o.stack.replace(/^.+\n/, "") : "";
                r.stack ? f && !String(r.stack).endsWith(f.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + f) : r.stack = f
            }
            throw r
        }
    }
    _request(i, u) {
        typeof i == "string" ? (u = u || {},
        u.url = i) : u = i || {},
        u = Ui(this.defaults, u);
        const {transitional: r, paramsSerializer: o, headers: f} = u;
        r !== void 0 && vf.assertOptions(r, {
            silentJSONParsing: sa.transitional(sa.boolean),
            forcedJSONParsing: sa.transitional(sa.boolean),
            clarifyTimeoutError: sa.transitional(sa.boolean)
        }, !1),
        o != null && (B.isFunction(o) ? u.paramsSerializer = {
            serialize: o
        } : vf.assertOptions(o, {
            encode: sa.function,
            serialize: sa.function
        }, !0)),
        u.method = (u.method || this.defaults.method || "get").toLowerCase();
        let d = f && B.merge(f.common, f[u.method]);
        f && B.forEach(["delete", "get", "head", "post", "put", "patch", "common"], N => {
            delete f[N]
        }
        ),
        u.headers = Kt.concat(d, f);
        const g = [];
        let p = !0;
        this.interceptors.request.forEach(function(C) {
            typeof C.runWhen == "function" && C.runWhen(u) === !1 || (p = p && C.synchronous,
            g.unshift(C.fulfilled, C.rejected))
        });
        const v = [];
        this.interceptors.response.forEach(function(C) {
            v.push(C.fulfilled, C.rejected)
        });
        let y, _ = 0, M;
        if (!p) {
            const N = [pg.bind(this), void 0];
            for (N.unshift.apply(N, g),
            N.push.apply(N, v),
            M = N.length,
            y = Promise.resolve(u); _ < M; )
                y = y.then(N[_++], N[_++]);
            return y
        }
        M = g.length;
        let U = u;
        for (_ = 0; _ < M; ) {
            const N = g[_++]
              , C = g[_++];
            try {
                U = N(U)
            } catch (Z) {
                C.call(this, Z);
                break
            }
        }
        try {
            y = pg.call(this, U)
        } catch (N) {
            return Promise.reject(N)
        }
        for (_ = 0,
        M = v.length; _ < M; )
            y = y.then(v[_++], v[_++]);
        return y
    }
    getUri(i) {
        i = Ui(this.defaults, i);
        const u = ep(i.baseURL, i.url);
        return Jv(u, i.params, i.paramsSerializer)
    }
}
;
B.forEach(["delete", "get", "head", "options"], function(i) {
    Ca.prototype[i] = function(u, r) {
        return this.request(Ui(r || {}, {
            method: i,
            url: u,
            data: (r || {}).data
        }))
    }
});
B.forEach(["post", "put", "patch"], function(i) {
    function u(r) {
        return function(f, d, g) {
            return this.request(Ui(g || {}, {
                method: i,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: f,
                data: d
            }))
        }
    }
    Ca.prototype[i] = u(),
    Ca.prototype[i + "Form"] = u(!0)
});
let $3 = class ap {
    constructor(i) {
        if (typeof i != "function")
            throw new TypeError("executor must be a function.");
        let u;
        this.promise = new Promise(function(f) {
            u = f
        }
        );
        const r = this;
        this.promise.then(o => {
            if (!r._listeners)
                return;
            let f = r._listeners.length;
            for (; f-- > 0; )
                r._listeners[f](o);
            r._listeners = null
        }
        ),
        this.promise.then = o => {
            let f;
            const d = new Promise(g => {
                r.subscribe(g),
                f = g
            }
            ).then(o);
            return d.cancel = function() {
                r.unsubscribe(f)
            }
            ,
            d
        }
        ,
        i(function(f, d, g) {
            r.reason || (r.reason = new or(f,d,g),
            u(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(i) {
        if (this.reason) {
            i(this.reason);
            return
        }
        this._listeners ? this._listeners.push(i) : this._listeners = [i]
    }
    unsubscribe(i) {
        if (!this._listeners)
            return;
        const u = this._listeners.indexOf(i);
        u !== -1 && this._listeners.splice(u, 1)
    }
    static source() {
        let i;
        return {
            token: new ap(function(o) {
                i = o
            }
            ),
            cancel: i
        }
    }
}
;
function k3(a) {
    return function(u) {
        return a.apply(null, u)
    }
}
function Q3(a) {
    return B.isObject(a) && a.isAxiosError === !0
}
const pf = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(pf).forEach( ([a,i]) => {
    pf[i] = a
}
);
function ip(a) {
    const i = new Ca(a)
      , u = Bv(Ca.prototype.request, i);
    return B.extend(u, Ca.prototype, i, {
        allOwnKeys: !0
    }),
    B.extend(u, i, null, {
        allOwnKeys: !0
    }),
    u.create = function(o) {
        return ip(Ui(a, o))
    }
    ,
    u
}
const He = ip(sr);
He.Axios = Ca;
He.CanceledError = or;
He.CancelToken = $3;
He.isCancel = Iv;
He.VERSION = np;
He.toFormData = us;
He.AxiosError = ye;
He.Cancel = He.CanceledError;
He.all = function(i) {
    return Promise.all(i)
}
;
He.spread = k3;
He.isAxiosError = Q3;
He.mergeConfig = Ui;
He.AxiosHeaders = Kt;
He.formToJSON = a => Wv(B.isHTMLForm(a) ? new FormData(a) : a);
He.getAdapter = tp.getAdapter;
He.HttpStatusCode = pf;
He.default = He;
const {Axios: sO, AxiosError: oO, CanceledError: cO, isCancel: fO, CancelToken: dO, VERSION: hO, all: gO, Cancel: vO, isAxiosError: pO, spread: mO, toFormData: yO, AxiosHeaders: _O, HttpStatusCode: bO, formToJSON: SO, getAdapter: OO, mergeConfig: EO} = He
  , mf = {
    SIGNAL: {
        START: "signal/start",
        STOP: "signal/stop",
        GET_LAST: "signal/getLast"
    }
}
  , J3 = "https://afforrfsoxkge.com/api"
  , Pl = He.create({
    baseURL: J3
})
  , Bt = {
    signal: "signal",
    signalInterval: "signalInterval"
}
  , F3 = "https://afforrfsoxkge.com/signals-api"
  , P3 = He.create({
    baseURL: F3
});
async function W3(a, i) {
    try {
        const {data: u} = await P3.get(`/signal/${a}/${i}`);
        return u
    } catch (u) {
        return console.log(u),
        null
    }
}
async function I3({userId: a}) {
    try {
        const {data: i} = await Pl.get(`${mf.SIGNAL.GET_LAST}/${a}`);
        return i
    } catch {
        return console.error("Error fetching last signal results"),
        null
    }
}
function yf(a) {
    return a.length === 6 ? `${a.slice(0, 3)}/${a.slice(3)}` : a
}
const e5 = ["EURUSD", "USDJPY", "GBPUSD", "USDCHF", "AUDUSD", "USDCAD", "NZDUSD", "EURGBP", "EURJPY", "GBPJPY", "AUDJPY", "CHFJPY", "EURAUD", "EURCAD", "GBPAUD", "GBPCAD", "AUDCAD", "AUDCHF", "NZDJPY", "NZDCHF"]
  , t5 = ({value: a, onChange: i, disabled: u}) => {
    const [r,o] = T.useState(!1)
      , {closeRef: f, openerRef: d} = Df({
        callback: () => o(!1)
    });
    return H.jsxs("div", {
        className: kt.wrapper,
        children: [H.jsxs("button", {
            ref: d,
            className: ot(kt.button, r && kt.open, u && kt.disabled),
            onClick: () => !u && o(!r),
            disabled: u,
            tabIndex: u ? -1 : 0,
            children: [H.jsx(Lv, {
                symbol: a
            }), H.jsx("span", {
                className: kt.selectedPair,
                children: yf(a)
            }), H.jsx(Mf, {
                className: kt.arrowDown
            })]
        }), H.jsx("div", {
            ref: f,
            className: ot(kt.dropdown, r && kt.open),
            children: H.jsx("div", {
                className: kt.container,
                children: e5.map(g => H.jsx("button", {
                    className: ot(kt.langButton, g === a && kt.active),
                    onClick: () => {
                        i(g),
                        o(!1)
                    }
                    ,
                    disabled: u,
                    tabIndex: u ? -1 : 0,
                    children: yf(g)
                }, g))
            })
        })]
    })
}
  , n5 = "_wrapper_w5j5k_1"
  , a5 = "_button_w5j5k_7"
  , i5 = "_disabled_w5j5k_18"
  , l5 = "_langImg_w5j5k_32"
  , r5 = "_arrowDown_w5j5k_37"
  , u5 = "_open_w5j5k_41"
  , s5 = "_dropdown_w5j5k_54"
  , o5 = "_container_w5j5k_65"
  , c5 = "_langButton_w5j5k_93"
  , f5 = "_active_w5j5k_104"
  , Qt = {
    wrapper: n5,
    button: a5,
    disabled: i5,
    langImg: l5,
    arrowDown: r5,
    open: u5,
    dropdown: s5,
    container: o5,
    langButton: c5,
    active: f5
}
  , d5 = ({title: a, titleId: i, ...u}, r) => T.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: r,
    "aria-labelledby": i,
    ...u
}, a ? T.createElement("title", {
    id: i
}, a) : null, T.createElement("path", {
    d: "M22.1485 9.65625H16.1485C16.0454 9.65625 15.961 9.74062 15.961 9.84375V10.9687C15.961 11.0719 16.0454 11.1562 16.1485 11.1562H22.1485C22.2516 11.1562 22.336 11.0719 22.336 10.9687V9.84375C22.336 9.74062 22.2516 9.65625 22.1485 9.65625ZM19.0079 12.8437H16.1485C16.0454 12.8437 15.961 12.9281 15.961 13.0312V14.1562C15.961 14.2594 16.0454 14.3437 16.1485 14.3437H19.0079C19.111 14.3437 19.1954 14.2594 19.1954 14.1562V13.0312C19.1954 12.9281 19.111 12.8437 19.0079 12.8437ZM11.1868 7.55859H10.1719C10.0266 7.55859 9.90942 7.67578 9.90942 7.82109V13.6336C9.90942 13.718 9.94927 13.7953 10.0172 13.8445L13.5071 16.3898C13.6243 16.4742 13.7883 16.4508 13.8727 16.3336L14.475 15.5109V15.5086C14.5594 15.3914 14.5336 15.2273 14.4165 15.143L11.4469 12.9961V7.82109C11.4493 7.67578 11.3297 7.55859 11.1868 7.55859Z",
    fill: "white"
}), T.createElement("path", {
    d: "M18.8625 15.7945H17.5078C17.3766 15.7945 17.2524 15.8625 17.182 15.975C16.8844 16.446 16.5375 16.882 16.1391 17.2804C15.4524 17.9671 14.6531 18.5062 13.7649 18.8812C12.8438 19.2703 11.8664 19.4671 10.8586 19.4671C9.84845 19.4671 8.87111 19.2703 7.95236 18.8812C7.06408 18.5062 6.26486 17.9671 5.57814 17.2804C4.89142 16.5937 4.35236 15.7945 3.97736 14.9062C3.5883 13.9875 3.39142 13.0101 3.39142 12C3.39142 10.9898 3.5883 10.0148 3.97736 9.09371C4.35236 8.20543 4.89142 7.40621 5.57814 6.71949C6.26486 6.03277 7.06408 5.49371 7.95236 5.11871C8.87111 4.72965 9.8508 4.53277 10.8586 4.53277C11.8688 4.53277 12.8461 4.72965 13.7649 5.11871C14.6531 5.49371 15.4524 6.03277 16.1391 6.71949C16.5375 7.11793 16.8844 7.55386 17.182 8.02496C17.2524 8.13746 17.3766 8.20543 17.5078 8.20543H18.8625C19.0242 8.20543 19.1274 8.03668 19.0547 7.89371C17.5266 4.85386 14.4281 2.87808 10.9688 2.83824C5.90392 2.77496 1.69689 6.92105 1.68752 11.9812C1.67814 17.0507 5.78673 21.164 10.8563 21.164C14.3602 21.164 17.5102 19.1812 19.0547 16.1062C19.1274 15.9632 19.0219 15.7945 18.8625 15.7945Z",
    fill: "white"
}))
  , h5 = T.forwardRef(d5)
  , _f = [3, 5, 7, 10]
  , g5 = ({value: a, onChange: i, disabled: u}) => {
    const {t: r} = rr()
      , [o,f] = T.useState(!1)
      , {closeRef: d, openerRef: g} = Df({
        callback: () => f(!1)
    });
    return H.jsxs("div", {
        className: Qt.wrapper,
        children: [H.jsxs("button", {
            ref: g,
            className: ot(Qt.button, o && Qt.open, u && Qt.disabled),
            onClick: () => !u && f(!o),
            disabled: u,
            tabIndex: u ? -1 : 0,
            children: [H.jsx(h5, {
                className: Qt.langImg
            }), H.jsx(Mf, {
                className: Qt.arrowDown
            })]
        }), H.jsx("div", {
            ref: d,
            className: ot(Qt.dropdown, o && Qt.open),
            children: H.jsx("div", {
                className: Qt.container,
                children: _f.map(p => H.jsxs("button", {
                    className: ot(Qt.langButton, a === p && Qt.active),
                    onClick: () => {
                        i(p),
                        f(!1)
                    }
                    ,
                    disabled: u,
                    tabIndex: u ? -1 : 0,
                    children: [p, r("timeframe_minutes")]
                }, p))
            })
        })]
    })
}
  , v5 = "_container_3amuh_1"
  , p5 = "_title_3amuh_9"
  , m5 = "_content_3amuh_18"
  , Zc = {
    container: v5,
    title: p5,
    content: m5
}
  , Vl = ({title: a, content: i, containerClassName: u, children: r, contentClassName: o}) => H.jsxs("div", {
    className: ot(Zc.container, u),
    children: [H.jsx("h3", {
        className: Zc.title,
        children: a
    }), H.jsx("div", {
        className: o,
        children: i ? H.jsx("p", {
            className: ot(Zc.content, o),
            children: i
        }) : r
    })]
})
  , y5 = "_wrapper_dk7in_1"
  , _5 = "_button_dk7in_7"
  , b5 = "_langImg_dk7in_27"
  , S5 = "_arrowDown_dk7in_32"
  , O5 = "_open_dk7in_36"
  , E5 = "_dropdown_dk7in_49"
  , A5 = "_container_dk7in_60"
  , T5 = "_langButton_dk7in_88"
  , R5 = "_active_dk7in_99"
  , un = {
    wrapper: y5,
    button: _5,
    langImg: b5,
    arrowDown: S5,
    open: O5,
    dropdown: E5,
    container: A5,
    langButton: T5,
    active: R5
}
  , x5 = ({title: a, titleId: i, ...u}, r) => T.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: r,
    "aria-labelledby": i,
    ...u
}, a ? T.createElement("title", {
    id: i
}, a) : null, T.createElement("path", {
    d: "M18.5 7.03503C17.8839 5.27196 16.7349 3.74409 15.2119 2.66303C13.689 1.58197 11.8676 1.00122 10 1.00122C8.13239 1.00122 6.31099 1.58197 4.78807 2.66303C3.26515 3.74409 2.11608 5.27196 1.5 7.03503M18.5 7.03503C18.824 7.96303 19 8.96103 19 10C19.0009 11.0097 18.8319 12.0124 18.5 12.966M18.5 7.03503H1.5M1.5 7.03503C1.16825 7.98834 0.999224 8.99065 1 10C0.999112 11.0097 1.16814 12.0124 1.5 12.966M18.5 12.966C17.8839 14.7291 16.7349 16.257 15.2119 17.338C13.689 18.4191 11.8676 18.9998 10 18.9998C8.13239 18.9998 6.31099 18.4191 4.78807 17.338C3.26515 16.257 2.11608 14.7291 1.5 12.966M18.5 12.966H1.5",
    stroke: "white",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
}), T.createElement("path", {
    d: "M9.99996 19C14.97 14.03 14.97 5.97 9.99996 1C5.02996 5.97 5.02996 14.03 9.99996 19Z",
    stroke: "white",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
}))
  , w5 = T.forwardRef(x5)
  , le = a => typeof a == "string"
  , ql = () => {
    let a, i;
    const u = new Promise( (r, o) => {
        a = r,
        i = o
    }
    );
    return u.resolve = a,
    u.reject = i,
    u
}
  , _g = a => a == null ? "" : "" + a
  , N5 = (a, i, u) => {
    a.forEach(r => {
        i[r] && (u[r] = i[r])
    }
    )
}
  , M5 = /###/g
  , bg = a => a && a.indexOf("###") > -1 ? a.replace(M5, ".") : a
  , Sg = a => !a || le(a)
  , Kl = (a, i, u) => {
    const r = le(i) ? i.split(".") : i;
    let o = 0;
    for (; o < r.length - 1; ) {
        if (Sg(a))
            return {};
        const f = bg(r[o]);
        !a[f] && u && (a[f] = new u),
        Object.prototype.hasOwnProperty.call(a, f) ? a = a[f] : a = {},
        ++o
    }
    return Sg(a) ? {} : {
        obj: a,
        k: bg(r[o])
    }
}
  , Og = (a, i, u) => {
    const {obj: r, k: o} = Kl(a, i, Object);
    if (r !== void 0 || i.length === 1) {
        r[o] = u;
        return
    }
    let f = i[i.length - 1]
      , d = i.slice(0, i.length - 1)
      , g = Kl(a, d, Object);
    for (; g.obj === void 0 && d.length; )
        f = `${d[d.length - 1]}.${f}`,
        d = d.slice(0, d.length - 1),
        g = Kl(a, d, Object),
        g != null && g.obj && typeof g.obj[`${g.k}.${f}`] < "u" && (g.obj = void 0);
    g.obj[`${g.k}.${f}`] = u
}
  , D5 = (a, i, u, r) => {
    const {obj: o, k: f} = Kl(a, i, Object);
    o[f] = o[f] || [],
    o[f].push(u)
}
  , Zu = (a, i) => {
    const {obj: u, k: r} = Kl(a, i);
    if (u && Object.prototype.hasOwnProperty.call(u, r))
        return u[r]
}
  , C5 = (a, i, u) => {
    const r = Zu(a, u);
    return r !== void 0 ? r : Zu(i, u)
}
  , lp = (a, i, u) => {
    for (const r in i)
        r !== "__proto__" && r !== "constructor" && (r in a ? le(a[r]) || a[r]instanceof String || le(i[r]) || i[r]instanceof String ? u && (a[r] = i[r]) : lp(a[r], i[r], u) : a[r] = i[r]);
    return a
}
  , xi = a => a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var j5 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};
const z5 = a => le(a) ? a.replace(/[&<>"'\/]/g, i => j5[i]) : a;
class U5 {
    constructor(i) {
        this.capacity = i,
        this.regExpMap = new Map,
        this.regExpQueue = []
    }
    getRegExp(i) {
        const u = this.regExpMap.get(i);
        if (u !== void 0)
            return u;
        const r = new RegExp(i);
        return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
        this.regExpMap.set(i, r),
        this.regExpQueue.push(i),
        r
    }
}
const L5 = [" ", ",", "?", "!", ";"]
  , B5 = new U5(20)
  , H5 = (a, i, u) => {
    i = i || "",
    u = u || "";
    const r = L5.filter(d => i.indexOf(d) < 0 && u.indexOf(d) < 0);
    if (r.length === 0)
        return !0;
    const o = B5.getRegExp(`(${r.map(d => d === "?" ? "\\?" : d).join("|")})`);
    let f = !o.test(a);
    if (!f) {
        const d = a.indexOf(u);
        d > 0 && !o.test(a.substring(0, d)) && (f = !0)
    }
    return f
}
  , bf = (a, i, u=".") => {
    if (!a)
        return;
    if (a[i])
        return Object.prototype.hasOwnProperty.call(a, i) ? a[i] : void 0;
    const r = i.split(u);
    let o = a;
    for (let f = 0; f < r.length; ) {
        if (!o || typeof o != "object")
            return;
        let d, g = "";
        for (let p = f; p < r.length; ++p)
            if (p !== f && (g += u),
            g += r[p],
            d = o[g],
            d !== void 0) {
                if (["string", "number", "boolean"].indexOf(typeof d) > -1 && p < r.length - 1)
                    continue;
                f += p - f + 1;
                break
            }
        o = d
    }
    return o
}
  , Wl = a => a == null ? void 0 : a.replace("_", "-")
  , V5 = {
    type: "logger",
    log(a) {
        this.output("log", a)
    },
    warn(a) {
        this.output("warn", a)
    },
    error(a) {
        this.output("error", a)
    },
    output(a, i) {
        var u, r;
        (r = (u = console == null ? void 0 : console[a]) == null ? void 0 : u.apply) == null || r.call(u, console, i)
    }
};
class $u {
    constructor(i, u={}) {
        this.init(i, u)
    }
    init(i, u={}) {
        this.prefix = u.prefix || "i18next:",
        this.logger = i || V5,
        this.options = u,
        this.debug = u.debug
    }
    log(...i) {
        return this.forward(i, "log", "", !0)
    }
    warn(...i) {
        return this.forward(i, "warn", "", !0)
    }
    error(...i) {
        return this.forward(i, "error", "")
    }
    deprecate(...i) {
        return this.forward(i, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(i, u, r, o) {
        return o && !this.debug ? null : (le(i[0]) && (i[0] = `${r}${this.prefix} ${i[0]}`),
        this.logger[u](i))
    }
    create(i) {
        return new $u(this.logger,{
            prefix: `${this.prefix}:${i}:`,
            ...this.options
        })
    }
    clone(i) {
        return i = i || this.options,
        i.prefix = i.prefix || this.prefix,
        new $u(this.logger,i)
    }
}
var fn = new $u;
class ss {
    constructor() {
        this.observers = {}
    }
    on(i, u) {
        return i.split(" ").forEach(r => {
            this.observers[r] || (this.observers[r] = new Map);
            const o = this.observers[r].get(u) || 0;
            this.observers[r].set(u, o + 1)
        }
        ),
        this
    }
    off(i, u) {
        if (this.observers[i]) {
            if (!u) {
                delete this.observers[i];
                return
            }
            this.observers[i].delete(u)
        }
    }
    emit(i, ...u) {
        this.observers[i] && Array.from(this.observers[i].entries()).forEach( ([o,f]) => {
            for (let d = 0; d < f; d++)
                o(...u)
        }
        ),
        this.observers["*"] && Array.from(this.observers["*"].entries()).forEach( ([o,f]) => {
            for (let d = 0; d < f; d++)
                o.apply(o, [i, ...u])
        }
        )
    }
}
class Eg extends ss {
    constructor(i, u={
        ns: ["translation"],
        defaultNS: "translation"
    }) {
        super(),
        this.data = i || {},
        this.options = u,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(i) {
        this.options.ns.indexOf(i) < 0 && this.options.ns.push(i)
    }
    removeNamespaces(i) {
        const u = this.options.ns.indexOf(i);
        u > -1 && this.options.ns.splice(u, 1)
    }
    getResource(i, u, r, o={}) {
        var v, y;
        const f = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator
          , d = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let g;
        i.indexOf(".") > -1 ? g = i.split(".") : (g = [i, u],
        r && (Array.isArray(r) ? g.push(...r) : le(r) && f ? g.push(...r.split(f)) : g.push(r)));
        const p = Zu(this.data, g);
        return !p && !u && !r && i.indexOf(".") > -1 && (i = g[0],
        u = g[1],
        r = g.slice(2).join(".")),
        p || !d || !le(r) ? p : bf((y = (v = this.data) == null ? void 0 : v[i]) == null ? void 0 : y[u], r, f)
    }
    addResource(i, u, r, o, f={
        silent: !1
    }) {
        const d = f.keySeparator !== void 0 ? f.keySeparator : this.options.keySeparator;
        let g = [i, u];
        r && (g = g.concat(d ? r.split(d) : r)),
        i.indexOf(".") > -1 && (g = i.split("."),
        o = u,
        u = g[1]),
        this.addNamespaces(u),
        Og(this.data, g, o),
        f.silent || this.emit("added", i, u, r, o)
    }
    addResources(i, u, r, o={
        silent: !1
    }) {
        for (const f in r)
            (le(r[f]) || Array.isArray(r[f])) && this.addResource(i, u, f, r[f], {
                silent: !0
            });
        o.silent || this.emit("added", i, u, r)
    }
    addResourceBundle(i, u, r, o, f, d={
        silent: !1,
        skipCopy: !1
    }) {
        let g = [i, u];
        i.indexOf(".") > -1 && (g = i.split("."),
        o = r,
        r = u,
        u = g[1]),
        this.addNamespaces(u);
        let p = Zu(this.data, g) || {};
        d.skipCopy || (r = JSON.parse(JSON.stringify(r))),
        o ? lp(p, r, f) : p = {
            ...p,
            ...r
        },
        Og(this.data, g, p),
        d.silent || this.emit("added", i, u, r)
    }
    removeResourceBundle(i, u) {
        this.hasResourceBundle(i, u) && delete this.data[i][u],
        this.removeNamespaces(u),
        this.emit("removed", i, u)
    }
    hasResourceBundle(i, u) {
        return this.getResource(i, u) !== void 0
    }
    getResourceBundle(i, u) {
        return u || (u = this.options.defaultNS),
        this.getResource(i, u)
    }
    getDataByLanguage(i) {
        return this.data[i]
    }
    hasLanguageSomeTranslations(i) {
        const u = this.getDataByLanguage(i);
        return !!(u && Object.keys(u) || []).find(o => u[o] && Object.keys(u[o]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var rp = {
    processors: {},
    addPostProcessor(a) {
        this.processors[a.name] = a
    },
    handle(a, i, u, r, o) {
        return a.forEach(f => {
            var d;
            i = ((d = this.processors[f]) == null ? void 0 : d.process(i, u, r, o)) ?? i
        }
        ),
        i
    }
};
const Ag = {}
  , Tg = a => !le(a) && typeof a != "boolean" && typeof a != "number";
class ku extends ss {
    constructor(i, u={}) {
        super(),
        N5(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], i, this),
        this.options = u,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.logger = fn.create("translator")
    }
    changeLanguage(i) {
        i && (this.language = i)
    }
    exists(i, u={
        interpolation: {}
    }) {
        const r = {
            ...u
        };
        if (i == null)
            return !1;
        const o = this.resolve(i, r);
        return (o == null ? void 0 : o.res) !== void 0
    }
    extractFromKey(i, u) {
        let r = u.nsSeparator !== void 0 ? u.nsSeparator : this.options.nsSeparator;
        r === void 0 && (r = ":");
        const o = u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator;
        let f = u.ns || this.options.defaultNS || [];
        const d = r && i.indexOf(r) > -1
          , g = !this.options.userDefinedKeySeparator && !u.keySeparator && !this.options.userDefinedNsSeparator && !u.nsSeparator && !H5(i, r, o);
        if (d && !g) {
            const p = i.match(this.interpolator.nestingRegexp);
            if (p && p.length > 0)
                return {
                    key: i,
                    namespaces: le(f) ? [f] : f
                };
            const v = i.split(r);
            (r !== o || r === o && this.options.ns.indexOf(v[0]) > -1) && (f = v.shift()),
            i = v.join(o)
        }
        return {
            key: i,
            namespaces: le(f) ? [f] : f
        }
    }
    translate(i, u, r) {
        let o = typeof u == "object" ? {
            ...u
        } : u;
        if (typeof o != "object" && this.options.overloadTranslationOptionHandler && (o = this.options.overloadTranslationOptionHandler(arguments)),
        typeof options == "object" && (o = {
            ...o
        }),
        o || (o = {}),
        i == null)
            return "";
        Array.isArray(i) || (i = [String(i)]);
        const f = o.returnDetails !== void 0 ? o.returnDetails : this.options.returnDetails
          , d = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator
          , {key: g, namespaces: p} = this.extractFromKey(i[i.length - 1], o)
          , v = p[p.length - 1];
        let y = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
        y === void 0 && (y = ":");
        const _ = o.lng || this.language
          , M = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if ((_ == null ? void 0 : _.toLowerCase()) === "cimode")
            return M ? f ? {
                res: `${v}${y}${g}`,
                usedKey: g,
                exactUsedKey: g,
                usedLng: _,
                usedNS: v,
                usedParams: this.getUsedParamsDetails(o)
            } : `${v}${y}${g}` : f ? {
                res: g,
                usedKey: g,
                exactUsedKey: g,
                usedLng: _,
                usedNS: v,
                usedParams: this.getUsedParamsDetails(o)
            } : g;
        const U = this.resolve(i, o);
        let N = U == null ? void 0 : U.res;
        const C = (U == null ? void 0 : U.usedKey) || g
          , Z = (U == null ? void 0 : U.exactUsedKey) || g
          , re = ["[object Number]", "[object Function]", "[object RegExp]"]
          , ue = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays
          , te = !this.i18nFormat || this.i18nFormat.handleAsObject
          , ie = o.count !== void 0 && !le(o.count)
          , Q = ku.hasDefaultValue(o)
          , q = ie ? this.pluralResolver.getSuffix(_, o.count, o) : ""
          , J = o.ordinal && ie ? this.pluralResolver.getSuffix(_, o.count, {
            ordinal: !1
        }) : ""
          , F = ie && !o.ordinal && o.count === 0
          , se = F && o[`defaultValue${this.options.pluralSeparator}zero`] || o[`defaultValue${q}`] || o[`defaultValue${J}`] || o.defaultValue;
        let ve = N;
        te && !N && Q && (ve = se);
        const Ve = Tg(ve)
          , Qe = Object.prototype.toString.apply(ve);
        if (te && ve && Ve && re.indexOf(Qe) < 0 && !(le(ue) && Array.isArray(ve))) {
            if (!o.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const Je = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(C, ve, {
                    ...o,
                    ns: p
                }) : `key '${g} (${this.language})' returned an object instead of string.`;
                return f ? (U.res = Je,
                U.usedParams = this.getUsedParamsDetails(o),
                U) : Je
            }
            if (d) {
                const Je = Array.isArray(ve)
                  , Xe = Je ? [] : {}
                  , Ze = Je ? Z : C;
                for (const D in ve)
                    if (Object.prototype.hasOwnProperty.call(ve, D)) {
                        const G = `${Ze}${d}${D}`;
                        Q && !N ? Xe[D] = this.translate(G, {
                            ...o,
                            defaultValue: Tg(se) ? se[D] : void 0,
                            joinArrays: !1,
                            ns: p
                        }) : Xe[D] = this.translate(G, {
                            ...o,
                            joinArrays: !1,
                            ns: p
                        }),
                        Xe[D] === G && (Xe[D] = ve[D])
                    }
                N = Xe
            }
        } else if (te && le(ue) && Array.isArray(N))
            N = N.join(ue),
            N && (N = this.extendTranslation(N, i, o, r));
        else {
            let Je = !1
              , Xe = !1;
            !this.isValidLookup(N) && Q && (Je = !0,
            N = se),
            this.isValidLookup(N) || (Xe = !0,
            N = g);
            const D = (o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && Xe ? void 0 : N
              , G = Q && se !== N && this.options.updateMissing;
            if (Xe || Je || G) {
                if (this.logger.log(G ? "updateKey" : "missingKey", _, v, g, G ? se : N),
                d) {
                    const L = this.resolve(g, {
                        ...o,
                        keySeparator: !1
                    });
                    L && L.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let P = [];
                const be = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && be && be[0])
                    for (let L = 0; L < be.length; L++)
                        P.push(be[L]);
                else
                    this.options.saveMissingTo === "all" ? P = this.languageUtils.toResolveHierarchy(o.lng || this.language) : P.push(o.lng || this.language);
                const S = (L, X, Y) => {
                    var pe;
                    const W = Q && Y !== N ? Y : D;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(L, v, X, W, G, o) : (pe = this.backendConnector) != null && pe.saveMissing && this.backendConnector.saveMissing(L, v, X, W, G, o),
                    this.emit("missingKey", L, v, X, N)
                }
                ;
                this.options.saveMissing && (this.options.saveMissingPlurals && ie ? P.forEach(L => {
                    const X = this.pluralResolver.getSuffixes(L, o);
                    F && o[`defaultValue${this.options.pluralSeparator}zero`] && X.indexOf(`${this.options.pluralSeparator}zero`) < 0 && X.push(`${this.options.pluralSeparator}zero`),
                    X.forEach(Y => {
                        S([L], g + Y, o[`defaultValue${Y}`] || se)
                    }
                    )
                }
                ) : S(P, g, se))
            }
            N = this.extendTranslation(N, i, o, U, r),
            Xe && N === g && this.options.appendNamespaceToMissingKey && (N = `${v}${y}${g}`),
            (Xe || Je) && this.options.parseMissingKeyHandler && (N = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${v}${y}${g}` : g, Je ? N : void 0, o))
        }
        return f ? (U.res = N,
        U.usedParams = this.getUsedParamsDetails(o),
        U) : N
    }
    extendTranslation(i, u, r, o, f) {
        var p, v;
        if ((p = this.i18nFormat) != null && p.parse)
            i = this.i18nFormat.parse(i, {
                ...this.options.interpolation.defaultVariables,
                ...r
            }, r.lng || this.language || o.usedLng, o.usedNS, o.usedKey, {
                resolved: o
            });
        else if (!r.skipInterpolation) {
            r.interpolation && this.interpolator.init({
                ...r,
                interpolation: {
                    ...this.options.interpolation,
                    ...r.interpolation
                }
            });
            const y = le(i) && (((v = r == null ? void 0 : r.interpolation) == null ? void 0 : v.skipOnVariables) !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let _;
            if (y) {
                const U = i.match(this.interpolator.nestingRegexp);
                _ = U && U.length
            }
            let M = r.replace && !le(r.replace) ? r.replace : r;
            if (this.options.interpolation.defaultVariables && (M = {
                ...this.options.interpolation.defaultVariables,
                ...M
            }),
            i = this.interpolator.interpolate(i, M, r.lng || this.language || o.usedLng, r),
            y) {
                const U = i.match(this.interpolator.nestingRegexp)
                  , N = U && U.length;
                _ < N && (r.nest = !1)
            }
            !r.lng && o && o.res && (r.lng = this.language || o.usedLng),
            r.nest !== !1 && (i = this.interpolator.nest(i, (...U) => (f == null ? void 0 : f[0]) === U[0] && !r.context ? (this.logger.warn(`It seems you are nesting recursively key: ${U[0]} in key: ${u[0]}`),
            null) : this.translate(...U, u), r)),
            r.interpolation && this.interpolator.reset()
        }
        const d = r.postProcess || this.options.postProcess
          , g = le(d) ? [d] : d;
        return i != null && (g != null && g.length) && r.applyPostProcessor !== !1 && (i = rp.handle(g, i, u, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: {
                ...o,
                usedParams: this.getUsedParamsDetails(r)
            },
            ...r
        } : r, this)),
        i
    }
    resolve(i, u={}) {
        let r, o, f, d, g;
        return le(i) && (i = [i]),
        i.forEach(p => {
            if (this.isValidLookup(r))
                return;
            const v = this.extractFromKey(p, u)
              , y = v.key;
            o = y;
            let _ = v.namespaces;
            this.options.fallbackNS && (_ = _.concat(this.options.fallbackNS));
            const M = u.count !== void 0 && !le(u.count)
              , U = M && !u.ordinal && u.count === 0
              , N = u.context !== void 0 && (le(u.context) || typeof u.context == "number") && u.context !== ""
              , C = u.lngs ? u.lngs : this.languageUtils.toResolveHierarchy(u.lng || this.language, u.fallbackLng);
            _.forEach(Z => {
                var re, ue;
                this.isValidLookup(r) || (g = Z,
                !Ag[`${C[0]}-${Z}`] && ((re = this.utils) != null && re.hasLoadedNamespace) && !((ue = this.utils) != null && ue.hasLoadedNamespace(g)) && (Ag[`${C[0]}-${Z}`] = !0,
                this.logger.warn(`key "${o}" for languages "${C.join(", ")}" won't get resolved as namespace "${g}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                C.forEach(te => {
                    var q;
                    if (this.isValidLookup(r))
                        return;
                    d = te;
                    const ie = [y];
                    if ((q = this.i18nFormat) != null && q.addLookupKeys)
                        this.i18nFormat.addLookupKeys(ie, y, te, Z, u);
                    else {
                        let J;
                        M && (J = this.pluralResolver.getSuffix(te, u.count, u));
                        const F = `${this.options.pluralSeparator}zero`
                          , se = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (M && (ie.push(y + J),
                        u.ordinal && J.indexOf(se) === 0 && ie.push(y + J.replace(se, this.options.pluralSeparator)),
                        U && ie.push(y + F)),
                        N) {
                            const ve = `${y}${this.options.contextSeparator}${u.context}`;
                            ie.push(ve),
                            M && (ie.push(ve + J),
                            u.ordinal && J.indexOf(se) === 0 && ie.push(ve + J.replace(se, this.options.pluralSeparator)),
                            U && ie.push(ve + F))
                        }
                    }
                    let Q;
                    for (; Q = ie.pop(); )
                        this.isValidLookup(r) || (f = Q,
                        r = this.getResource(te, Z, Q, u))
                }
                ))
            }
            )
        }
        ),
        {
            res: r,
            usedKey: o,
            exactUsedKey: f,
            usedLng: d,
            usedNS: g
        }
    }
    isValidLookup(i) {
        return i !== void 0 && !(!this.options.returnNull && i === null) && !(!this.options.returnEmptyString && i === "")
    }
    getResource(i, u, r, o={}) {
        var f;
        return (f = this.i18nFormat) != null && f.getResource ? this.i18nFormat.getResource(i, u, r, o) : this.resourceStore.getResource(i, u, r, o)
    }
    getUsedParamsDetails(i={}) {
        const u = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"]
          , r = i.replace && !le(i.replace);
        let o = r ? i.replace : i;
        if (r && typeof i.count < "u" && (o.count = i.count),
        this.options.interpolation.defaultVariables && (o = {
            ...this.options.interpolation.defaultVariables,
            ...o
        }),
        !r) {
            o = {
                ...o
            };
            for (const f of u)
                delete o[f]
        }
        return o
    }
    static hasDefaultValue(i) {
        const u = "defaultValue";
        for (const r in i)
            if (Object.prototype.hasOwnProperty.call(i, r) && u === r.substring(0, u.length) && i[r] !== void 0)
                return !0;
        return !1
    }
}
class Rg {
    constructor(i) {
        this.options = i,
        this.supportedLngs = this.options.supportedLngs || !1,
        this.logger = fn.create("languageUtils")
    }
    getScriptPartFromCode(i) {
        if (i = Wl(i),
        !i || i.indexOf("-") < 0)
            return null;
        const u = i.split("-");
        return u.length === 2 || (u.pop(),
        u[u.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(u.join("-"))
    }
    getLanguagePartFromCode(i) {
        if (i = Wl(i),
        !i || i.indexOf("-") < 0)
            return i;
        const u = i.split("-");
        return this.formatLanguageCode(u[0])
    }
    formatLanguageCode(i) {
        if (le(i) && i.indexOf("-") > -1) {
            let u;
            try {
                u = Intl.getCanonicalLocales(i)[0]
            } catch {}
            return u && this.options.lowerCaseLng && (u = u.toLowerCase()),
            u || (this.options.lowerCaseLng ? i.toLowerCase() : i)
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? i.toLowerCase() : i
    }
    isSupportedCode(i) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (i = this.getLanguagePartFromCode(i)),
        !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(i) > -1
    }
    getBestMatchFromCodes(i) {
        if (!i)
            return null;
        let u;
        return i.forEach(r => {
            if (u)
                return;
            const o = this.formatLanguageCode(r);
            (!this.options.supportedLngs || this.isSupportedCode(o)) && (u = o)
        }
        ),
        !u && this.options.supportedLngs && i.forEach(r => {
            if (u)
                return;
            const o = this.getScriptPartFromCode(r);
            if (this.isSupportedCode(o))
                return u = o;
            const f = this.getLanguagePartFromCode(r);
            if (this.isSupportedCode(f))
                return u = f;
            u = this.options.supportedLngs.find(d => {
                if (d === f)
                    return d;
                if (!(d.indexOf("-") < 0 && f.indexOf("-") < 0) && (d.indexOf("-") > 0 && f.indexOf("-") < 0 && d.substring(0, d.indexOf("-")) === f || d.indexOf(f) === 0 && f.length > 1))
                    return d
            }
            )
        }
        ),
        u || (u = this.getFallbackCodes(this.options.fallbackLng)[0]),
        u
    }
    getFallbackCodes(i, u) {
        if (!i)
            return [];
        if (typeof i == "function" && (i = i(u)),
        le(i) && (i = [i]),
        Array.isArray(i))
            return i;
        if (!u)
            return i.default || [];
        let r = i[u];
        return r || (r = i[this.getScriptPartFromCode(u)]),
        r || (r = i[this.formatLanguageCode(u)]),
        r || (r = i[this.getLanguagePartFromCode(u)]),
        r || (r = i.default),
        r || []
    }
    toResolveHierarchy(i, u) {
        const r = this.getFallbackCodes((u === !1 ? [] : u) || this.options.fallbackLng || [], i)
          , o = []
          , f = d => {
            d && (this.isSupportedCode(d) ? o.push(d) : this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`))
        }
        ;
        return le(i) && (i.indexOf("-") > -1 || i.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && f(this.formatLanguageCode(i)),
        this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && f(this.getScriptPartFromCode(i)),
        this.options.load !== "currentOnly" && f(this.getLanguagePartFromCode(i))) : le(i) && f(this.formatLanguageCode(i)),
        r.forEach(d => {
            o.indexOf(d) < 0 && f(this.formatLanguageCode(d))
        }
        ),
        o
    }
}
const xg = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
}
  , wg = {
    select: a => a === 1 ? "one" : "other",
    resolvedOptions: () => ({
        pluralCategories: ["one", "other"]
    })
};
class q5 {
    constructor(i, u={}) {
        this.languageUtils = i,
        this.options = u,
        this.logger = fn.create("pluralResolver"),
        this.pluralRulesCache = {}
    }
    addRule(i, u) {
        this.rules[i] = u
    }
    clearCache() {
        this.pluralRulesCache = {}
    }
    getRule(i, u={}) {
        const r = Wl(i === "dev" ? "en" : i)
          , o = u.ordinal ? "ordinal" : "cardinal"
          , f = JSON.stringify({
            cleanedCode: r,
            type: o
        });
        if (f in this.pluralRulesCache)
            return this.pluralRulesCache[f];
        let d;
        try {
            d = new Intl.PluralRules(r,{
                type: o
            })
        } catch {
            if (!Intl)
                return this.logger.error("No Intl support, please use an Intl polyfill!"),
                wg;
            if (!i.match(/-|_/))
                return wg;
            const p = this.languageUtils.getLanguagePartFromCode(i);
            d = this.getRule(p, u)
        }
        return this.pluralRulesCache[f] = d,
        d
    }
    needsPlural(i, u={}) {
        let r = this.getRule(i, u);
        return r || (r = this.getRule("dev", u)),
        (r == null ? void 0 : r.resolvedOptions().pluralCategories.length) > 1
    }
    getPluralFormsOfKey(i, u, r={}) {
        return this.getSuffixes(i, r).map(o => `${u}${o}`)
    }
    getSuffixes(i, u={}) {
        let r = this.getRule(i, u);
        return r || (r = this.getRule("dev", u)),
        r ? r.resolvedOptions().pluralCategories.sort( (o, f) => xg[o] - xg[f]).map(o => `${this.options.prepend}${u.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : []
    }
    getSuffix(i, u, r={}) {
        const o = this.getRule(i, r);
        return o ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(u)}` : (this.logger.warn(`no plural rule found for: ${i}`),
        this.getSuffix("dev", u, r))
    }
}
const Ng = (a, i, u, r=".", o=!0) => {
    let f = C5(a, i, u);
    return !f && o && le(u) && (f = bf(a, u, r),
    f === void 0 && (f = bf(i, u, r))),
    f
}
  , $c = a => a.replace(/\$/g, "$$$$");
class G5 {
    constructor(i={}) {
        var u;
        this.logger = fn.create("interpolator"),
        this.options = i,
        this.format = ((u = i == null ? void 0 : i.interpolation) == null ? void 0 : u.format) || (r => r),
        this.init(i)
    }
    init(i={}) {
        i.interpolation || (i.interpolation = {
            escapeValue: !0
        });
        const {escape: u, escapeValue: r, useRawValueToEscape: o, prefix: f, prefixEscaped: d, suffix: g, suffixEscaped: p, formatSeparator: v, unescapeSuffix: y, unescapePrefix: _, nestingPrefix: M, nestingPrefixEscaped: U, nestingSuffix: N, nestingSuffixEscaped: C, nestingOptionsSeparator: Z, maxReplaces: re, alwaysFormat: ue} = i.interpolation;
        this.escape = u !== void 0 ? u : z5,
        this.escapeValue = r !== void 0 ? r : !0,
        this.useRawValueToEscape = o !== void 0 ? o : !1,
        this.prefix = f ? xi(f) : d || "{{",
        this.suffix = g ? xi(g) : p || "}}",
        this.formatSeparator = v || ",",
        this.unescapePrefix = y ? "" : _ || "-",
        this.unescapeSuffix = this.unescapePrefix ? "" : y || "",
        this.nestingPrefix = M ? xi(M) : U || xi("$t("),
        this.nestingSuffix = N ? xi(N) : C || xi(")"),
        this.nestingOptionsSeparator = Z || ",",
        this.maxReplaces = re || 1e3,
        this.alwaysFormat = ue !== void 0 ? ue : !1,
        this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const i = (u, r) => (u == null ? void 0 : u.source) === r ? (u.lastIndex = 0,
        u) : new RegExp(r,"g");
        this.regexp = i(this.regexp, `${this.prefix}(.+?)${this.suffix}`),
        this.regexpUnescape = i(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),
        this.nestingRegexp = i(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
    }
    interpolate(i, u, r, o) {
        var U;
        let f, d, g;
        const p = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}
          , v = N => {
            if (N.indexOf(this.formatSeparator) < 0) {
                const ue = Ng(u, p, N, this.options.keySeparator, this.options.ignoreJSONStructure);
                return this.alwaysFormat ? this.format(ue, void 0, r, {
                    ...o,
                    ...u,
                    interpolationkey: N
                }) : ue
            }
            const C = N.split(this.formatSeparator)
              , Z = C.shift().trim()
              , re = C.join(this.formatSeparator).trim();
            return this.format(Ng(u, p, Z, this.options.keySeparator, this.options.ignoreJSONStructure), re, r, {
                ...o,
                ...u,
                interpolationkey: Z
            })
        }
        ;
        this.resetRegExp();
        const y = (o == null ? void 0 : o.missingInterpolationHandler) || this.options.missingInterpolationHandler
          , _ = ((U = o == null ? void 0 : o.interpolation) == null ? void 0 : U.skipOnVariables) !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: N => $c(N)
        }, {
            regex: this.regexp,
            safeValue: N => this.escapeValue ? $c(this.escape(N)) : $c(N)
        }].forEach(N => {
            for (g = 0; f = N.regex.exec(i); ) {
                const C = f[1].trim();
                if (d = v(C),
                d === void 0)
                    if (typeof y == "function") {
                        const re = y(i, f, o);
                        d = le(re) ? re : ""
                    } else if (o && Object.prototype.hasOwnProperty.call(o, C))
                        d = "";
                    else if (_) {
                        d = f[0];
                        continue
                    } else
                        this.logger.warn(`missed to pass in variable ${C} for interpolating ${i}`),
                        d = "";
                else
                    !le(d) && !this.useRawValueToEscape && (d = _g(d));
                const Z = N.safeValue(d);
                if (i = i.replace(f[0], Z),
                _ ? (N.regex.lastIndex += d.length,
                N.regex.lastIndex -= f[0].length) : N.regex.lastIndex = 0,
                g++,
                g >= this.maxReplaces)
                    break
            }
        }
        ),
        i
    }
    nest(i, u, r={}) {
        let o, f, d;
        const g = (p, v) => {
            const y = this.nestingOptionsSeparator;
            if (p.indexOf(y) < 0)
                return p;
            const _ = p.split(new RegExp(`${y}[ ]*{`));
            let M = `{${_[1]}`;
            p = _[0],
            M = this.interpolate(M, d);
            const U = M.match(/'/g)
              , N = M.match(/"/g);
            (((U == null ? void 0 : U.length) ?? 0) % 2 === 0 && !N || N.length % 2 !== 0) && (M = M.replace(/'/g, '"'));
            try {
                d = JSON.parse(M),
                v && (d = {
                    ...v,
                    ...d
                })
            } catch (C) {
                return this.logger.warn(`failed parsing options string in nesting for key ${p}`, C),
                `${p}${y}${M}`
            }
            return d.defaultValue && d.defaultValue.indexOf(this.prefix) > -1 && delete d.defaultValue,
            p
        }
        ;
        for (; o = this.nestingRegexp.exec(i); ) {
            let p = [];
            d = {
                ...r
            },
            d = d.replace && !le(d.replace) ? d.replace : d,
            d.applyPostProcessor = !1,
            delete d.defaultValue;
            let v = !1;
            if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
                const y = o[1].split(this.formatSeparator).map(_ => _.trim());
                o[1] = y.shift(),
                p = y,
                v = !0
            }
            if (f = u(g.call(this, o[1].trim(), d), d),
            f && o[0] === i && !le(f))
                return f;
            le(f) || (f = _g(f)),
            f || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${i}`),
            f = ""),
            v && (f = p.reduce( (y, _) => this.format(y, _, r.lng, {
                ...r,
                interpolationkey: o[1].trim()
            }), f.trim())),
            i = i.replace(o[0], f),
            this.regexp.lastIndex = 0
        }
        return i
    }
}
const Y5 = a => {
    let i = a.toLowerCase().trim();
    const u = {};
    if (a.indexOf("(") > -1) {
        const r = a.split("(");
        i = r[0].toLowerCase().trim();
        const o = r[1].substring(0, r[1].length - 1);
        i === "currency" && o.indexOf(":") < 0 ? u.currency || (u.currency = o.trim()) : i === "relativetime" && o.indexOf(":") < 0 ? u.range || (u.range = o.trim()) : o.split(";").forEach(d => {
            if (d) {
                const [g,...p] = d.split(":")
                  , v = p.join(":").trim().replace(/^'+|'+$/g, "")
                  , y = g.trim();
                u[y] || (u[y] = v),
                v === "false" && (u[y] = !1),
                v === "true" && (u[y] = !0),
                isNaN(v) || (u[y] = parseInt(v, 10))
            }
        }
        )
    }
    return {
        formatName: i,
        formatOptions: u
    }
}
  , Mg = a => {
    const i = {};
    return (u, r, o) => {
        let f = o;
        o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey] && (f = {
            ...f,
            [o.interpolationkey]: void 0
        });
        const d = r + JSON.stringify(f);
        let g = i[d];
        return g || (g = a(Wl(r), o),
        i[d] = g),
        g(u)
    }
}
  , K5 = a => (i, u, r) => a(Wl(u), r)(i);
class X5 {
    constructor(i={}) {
        this.logger = fn.create("formatter"),
        this.options = i,
        this.init(i)
    }
    init(i, u={
        interpolation: {}
    }) {
        this.formatSeparator = u.interpolation.formatSeparator || ",";
        const r = u.cacheInBuiltFormats ? Mg : K5;
        this.formats = {
            number: r( (o, f) => {
                const d = new Intl.NumberFormat(o,{
                    ...f
                });
                return g => d.format(g)
            }
            ),
            currency: r( (o, f) => {
                const d = new Intl.NumberFormat(o,{
                    ...f,
                    style: "currency"
                });
                return g => d.format(g)
            }
            ),
            datetime: r( (o, f) => {
                const d = new Intl.DateTimeFormat(o,{
                    ...f
                });
                return g => d.format(g)
            }
            ),
            relativetime: r( (o, f) => {
                const d = new Intl.RelativeTimeFormat(o,{
                    ...f
                });
                return g => d.format(g, f.range || "day")
            }
            ),
            list: r( (o, f) => {
                const d = new Intl.ListFormat(o,{
                    ...f
                });
                return g => d.format(g)
            }
            )
        }
    }
    add(i, u) {
        this.formats[i.toLowerCase().trim()] = u
    }
    addCached(i, u) {
        this.formats[i.toLowerCase().trim()] = Mg(u)
    }
    format(i, u, r, o={}) {
        const f = u.split(this.formatSeparator);
        if (f.length > 1 && f[0].indexOf("(") > 1 && f[0].indexOf(")") < 0 && f.find(g => g.indexOf(")") > -1)) {
            const g = f.findIndex(p => p.indexOf(")") > -1);
            f[0] = [f[0], ...f.splice(1, g)].join(this.formatSeparator)
        }
        return f.reduce( (g, p) => {
            var _;
            const {formatName: v, formatOptions: y} = Y5(p);
            if (this.formats[v]) {
                let M = g;
                try {
                    const U = ((_ = o == null ? void 0 : o.formatParams) == null ? void 0 : _[o.interpolationkey]) || {}
                      , N = U.locale || U.lng || o.locale || o.lng || r;
                    M = this.formats[v](g, N, {
                        ...y,
                        ...o,
                        ...U
                    })
                } catch (U) {
                    this.logger.warn(U)
                }
                return M
            } else
                this.logger.warn(`there was no format function for ${v}`);
            return g
        }
        , i)
    }
}
const Z5 = (a, i) => {
    a.pending[i] !== void 0 && (delete a.pending[i],
    a.pendingCount--)
}
;
class $5 extends ss {
    constructor(i, u, r, o={}) {
        var f, d;
        super(),
        this.backend = i,
        this.store = u,
        this.services = r,
        this.languageUtils = r.languageUtils,
        this.options = o,
        this.logger = fn.create("backendConnector"),
        this.waitingReads = [],
        this.maxParallelReads = o.maxParallelReads || 10,
        this.readingCalls = 0,
        this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5,
        this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350,
        this.state = {},
        this.queue = [],
        (d = (f = this.backend) == null ? void 0 : f.init) == null || d.call(f, r, o.backend, o)
    }
    queueLoad(i, u, r, o) {
        const f = {}
          , d = {}
          , g = {}
          , p = {};
        return i.forEach(v => {
            let y = !0;
            u.forEach(_ => {
                const M = `${v}|${_}`;
                !r.reload && this.store.hasResourceBundle(v, _) ? this.state[M] = 2 : this.state[M] < 0 || (this.state[M] === 1 ? d[M] === void 0 && (d[M] = !0) : (this.state[M] = 1,
                y = !1,
                d[M] === void 0 && (d[M] = !0),
                f[M] === void 0 && (f[M] = !0),
                p[_] === void 0 && (p[_] = !0)))
            }
            ),
            y || (g[v] = !0)
        }
        ),
        (Object.keys(f).length || Object.keys(d).length) && this.queue.push({
            pending: d,
            pendingCount: Object.keys(d).length,
            loaded: {},
            errors: [],
            callback: o
        }),
        {
            toLoad: Object.keys(f),
            pending: Object.keys(d),
            toLoadLanguages: Object.keys(g),
            toLoadNamespaces: Object.keys(p)
        }
    }
    loaded(i, u, r) {
        const o = i.split("|")
          , f = o[0]
          , d = o[1];
        u && this.emit("failedLoading", f, d, u),
        !u && r && this.store.addResourceBundle(f, d, r, void 0, void 0, {
            skipCopy: !0
        }),
        this.state[i] = u ? -1 : 2,
        u && r && (this.state[i] = 0);
        const g = {};
        this.queue.forEach(p => {
            D5(p.loaded, [f], d),
            Z5(p, i),
            u && p.errors.push(u),
            p.pendingCount === 0 && !p.done && (Object.keys(p.loaded).forEach(v => {
                g[v] || (g[v] = {});
                const y = p.loaded[v];
                y.length && y.forEach(_ => {
                    g[v][_] === void 0 && (g[v][_] = !0)
                }
                )
            }
            ),
            p.done = !0,
            p.errors.length ? p.callback(p.errors) : p.callback())
        }
        ),
        this.emit("loaded", g),
        this.queue = this.queue.filter(p => !p.done)
    }
    read(i, u, r, o=0, f=this.retryTimeout, d) {
        if (!i.length)
            return d(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: i,
                ns: u,
                fcName: r,
                tried: o,
                wait: f,
                callback: d
            });
            return
        }
        this.readingCalls++;
        const g = (v, y) => {
            if (this.readingCalls--,
            this.waitingReads.length > 0) {
                const _ = this.waitingReads.shift();
                this.read(_.lng, _.ns, _.fcName, _.tried, _.wait, _.callback)
            }
            if (v && y && o < this.maxRetries) {
                setTimeout( () => {
                    this.read.call(this, i, u, r, o + 1, f * 2, d)
                }
                , f);
                return
            }
            d(v, y)
        }
          , p = this.backend[r].bind(this.backend);
        if (p.length === 2) {
            try {
                const v = p(i, u);
                v && typeof v.then == "function" ? v.then(y => g(null, y)).catch(g) : g(null, v)
            } catch (v) {
                g(v)
            }
            return
        }
        return p(i, u, g)
    }
    prepareLoading(i, u, r={}, o) {
        if (!this.backend)
            return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
            o && o();
        le(i) && (i = this.languageUtils.toResolveHierarchy(i)),
        le(u) && (u = [u]);
        const f = this.queueLoad(i, u, r, o);
        if (!f.toLoad.length)
            return f.pending.length || o(),
            null;
        f.toLoad.forEach(d => {
            this.loadOne(d)
        }
        )
    }
    load(i, u, r) {
        this.prepareLoading(i, u, {}, r)
    }
    reload(i, u, r) {
        this.prepareLoading(i, u, {
            reload: !0
        }, r)
    }
    loadOne(i, u="") {
        const r = i.split("|")
          , o = r[0]
          , f = r[1];
        this.read(o, f, "read", void 0, void 0, (d, g) => {
            d && this.logger.warn(`${u}loading namespace ${f} for language ${o} failed`, d),
            !d && g && this.logger.log(`${u}loaded namespace ${f} for language ${o}`, g),
            this.loaded(i, d, g)
        }
        )
    }
    saveMissing(i, u, r, o, f, d={}, g= () => {}
    ) {
        var p, v, y, _, M;
        if ((v = (p = this.services) == null ? void 0 : p.utils) != null && v.hasLoadedNamespace && !((_ = (y = this.services) == null ? void 0 : y.utils) != null && _.hasLoadedNamespace(u))) {
            this.logger.warn(`did not save key "${r}" as the namespace "${u}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
        }
        if (!(r == null || r === "")) {
            if ((M = this.backend) != null && M.create) {
                const U = {
                    ...d,
                    isUpdate: f
                }
                  , N = this.backend.create.bind(this.backend);
                if (N.length < 6)
                    try {
                        let C;
                        N.length === 5 ? C = N(i, u, r, o, U) : C = N(i, u, r, o),
                        C && typeof C.then == "function" ? C.then(Z => g(null, Z)).catch(g) : g(null, C)
                    } catch (C) {
                        g(C)
                    }
                else
                    N(i, u, r, o, g, U)
            }
            !i || !i[0] || this.store.addResource(i[0], u, r, o)
        }
    }
}
const Dg = () => ({
    debug: !1,
    initAsync: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: a => {
        let i = {};
        if (typeof a[1] == "object" && (i = a[1]),
        le(a[1]) && (i.defaultValue = a[1]),
        le(a[2]) && (i.tDescription = a[2]),
        typeof a[2] == "object" || typeof a[3] == "object") {
            const u = a[3] || a[2];
            Object.keys(u).forEach(r => {
                i[r] = u[r]
            }
            )
        }
        return i
    }
    ,
    interpolation: {
        escapeValue: !0,
        format: a => a,
        prefix: "{{",
        suffix: "}}",
        formatSeparator: ",",
        unescapePrefix: "-",
        nestingPrefix: "$t(",
        nestingSuffix: ")",
        nestingOptionsSeparator: ",",
        maxReplaces: 1e3,
        skipOnVariables: !0
    },
    cacheInBuiltFormats: !0
})
  , Cg = a => {
    var i, u;
    return le(a.ns) && (a.ns = [a.ns]),
    le(a.fallbackLng) && (a.fallbackLng = [a.fallbackLng]),
    le(a.fallbackNS) && (a.fallbackNS = [a.fallbackNS]),
    ((u = (i = a.supportedLngs) == null ? void 0 : i.indexOf) == null ? void 0 : u.call(i, "cimode")) < 0 && (a.supportedLngs = a.supportedLngs.concat(["cimode"])),
    typeof a.initImmediate == "boolean" && (a.initAsync = a.initImmediate),
    a
}
  , Nu = () => {}
  , k5 = a => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach(u => {
        typeof a[u] == "function" && (a[u] = a[u].bind(a))
    }
    )
}
;
class Il extends ss {
    constructor(i={}, u) {
        if (super(),
        this.options = Cg(i),
        this.services = {},
        this.logger = fn,
        this.modules = {
            external: []
        },
        k5(this),
        u && !this.isInitialized && !i.isClone) {
            if (!this.options.initAsync)
                return this.init(i, u),
                this;
            setTimeout( () => {
                this.init(i, u)
            }
            , 0)
        }
    }
    init(i={}, u) {
        this.isInitializing = !0,
        typeof i == "function" && (u = i,
        i = {}),
        i.defaultNS == null && i.ns && (le(i.ns) ? i.defaultNS = i.ns : i.ns.indexOf("translation") < 0 && (i.defaultNS = i.ns[0]));
        const r = Dg();
        this.options = {
            ...r,
            ...this.options,
            ...Cg(i)
        },
        this.options.interpolation = {
            ...r.interpolation,
            ...this.options.interpolation
        },
        i.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = i.keySeparator),
        i.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = i.nsSeparator);
        const o = v => v ? typeof v == "function" ? new v : v : null;
        if (!this.options.isClone) {
            this.modules.logger ? fn.init(o(this.modules.logger), this.options) : fn.init(null, this.options);
            let v;
            this.modules.formatter ? v = this.modules.formatter : v = X5;
            const y = new Rg(this.options);
            this.store = new Eg(this.options.resources,this.options);
            const _ = this.services;
            _.logger = fn,
            _.resourceStore = this.store,
            _.languageUtils = y,
            _.pluralResolver = new q5(y,{
                prepend: this.options.pluralSeparator,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }),
            v && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (_.formatter = o(v),
            _.formatter.init(_, this.options),
            this.options.interpolation.format = _.formatter.format.bind(_.formatter)),
            _.interpolator = new G5(this.options),
            _.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            },
            _.backendConnector = new $5(o(this.modules.backend),_.resourceStore,_,this.options),
            _.backendConnector.on("*", (M, ...U) => {
                this.emit(M, ...U)
            }
            ),
            this.modules.languageDetector && (_.languageDetector = o(this.modules.languageDetector),
            _.languageDetector.init && _.languageDetector.init(_, this.options.detection, this.options)),
            this.modules.i18nFormat && (_.i18nFormat = o(this.modules.i18nFormat),
            _.i18nFormat.init && _.i18nFormat.init(this)),
            this.translator = new ku(this.services,this.options),
            this.translator.on("*", (M, ...U) => {
                this.emit(M, ...U)
            }
            ),
            this.modules.external.forEach(M => {
                M.init && M.init(this)
            }
            )
        }
        if (this.format = this.options.interpolation.format,
        u || (u = Nu),
        this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const v = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            v.length > 0 && v[0] !== "dev" && (this.options.lng = v[0])
        }
        !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"),
        ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(v => {
            this[v] = (...y) => this.store[v](...y)
        }
        ),
        ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(v => {
            this[v] = (...y) => (this.store[v](...y),
            this)
        }
        );
        const g = ql()
          , p = () => {
            const v = (y, _) => {
                this.isInitializing = !1,
                this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"),
                this.isInitialized = !0,
                this.options.isClone || this.logger.log("initialized", this.options),
                this.emit("initialized", this.options),
                g.resolve(_),
                u(y, _)
            }
            ;
            if (this.languages && !this.isInitialized)
                return v(null, this.t.bind(this));
            this.changeLanguage(this.options.lng, v)
        }
        ;
        return this.options.resources || !this.options.initAsync ? p() : setTimeout(p, 0),
        g
    }
    loadResources(i, u=Nu) {
        var f, d;
        let r = u;
        const o = le(i) ? i : this.language;
        if (typeof i == "function" && (r = i),
        !this.options.resources || this.options.partialBundledLanguages) {
            if ((o == null ? void 0 : o.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0))
                return r();
            const g = []
              , p = v => {
                if (!v || v === "cimode")
                    return;
                this.services.languageUtils.toResolveHierarchy(v).forEach(_ => {
                    _ !== "cimode" && g.indexOf(_) < 0 && g.push(_)
                }
                )
            }
            ;
            o ? p(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(y => p(y)),
            (d = (f = this.options.preload) == null ? void 0 : f.forEach) == null || d.call(f, v => p(v)),
            this.services.backendConnector.load(g, this.options.ns, v => {
                !v && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
                r(v)
            }
            )
        } else
            r(null)
    }
    reloadResources(i, u, r) {
        const o = ql();
        return typeof i == "function" && (r = i,
        i = void 0),
        typeof u == "function" && (r = u,
        u = void 0),
        i || (i = this.languages),
        u || (u = this.options.ns),
        r || (r = Nu),
        this.services.backendConnector.reload(i, u, f => {
            o.resolve(),
            r(f)
        }
        ),
        o
    }
    use(i) {
        if (!i)
            throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!i.type)
            throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return i.type === "backend" && (this.modules.backend = i),
        (i.type === "logger" || i.log && i.warn && i.error) && (this.modules.logger = i),
        i.type === "languageDetector" && (this.modules.languageDetector = i),
        i.type === "i18nFormat" && (this.modules.i18nFormat = i),
        i.type === "postProcessor" && rp.addPostProcessor(i),
        i.type === "formatter" && (this.modules.formatter = i),
        i.type === "3rdParty" && this.modules.external.push(i),
        this
    }
    setResolvedLanguage(i) {
        if (!(!i || !this.languages) && !(["cimode", "dev"].indexOf(i) > -1)) {
            for (let u = 0; u < this.languages.length; u++) {
                const r = this.languages[u];
                if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
                    this.resolvedLanguage = r;
                    break
                }
            }
            !this.resolvedLanguage && this.languages.indexOf(i) < 0 && this.store.hasLanguageSomeTranslations(i) && (this.resolvedLanguage = i,
            this.languages.unshift(i))
        }
    }
    changeLanguage(i, u) {
        this.isLanguageChangingTo = i;
        const r = ql();
        this.emit("languageChanging", i);
        const o = g => {
            this.language = g,
            this.languages = this.services.languageUtils.toResolveHierarchy(g),
            this.resolvedLanguage = void 0,
            this.setResolvedLanguage(g)
        }
          , f = (g, p) => {
            p ? this.isLanguageChangingTo === i && (o(p),
            this.translator.changeLanguage(p),
            this.isLanguageChangingTo = void 0,
            this.emit("languageChanged", p),
            this.logger.log("languageChanged", p)) : this.isLanguageChangingTo = void 0,
            r.resolve( (...v) => this.t(...v)),
            u && u(g, (...v) => this.t(...v))
        }
          , d = g => {
            var y, _;
            !i && !g && this.services.languageDetector && (g = []);
            const p = le(g) ? g : g && g[0]
              , v = this.store.hasLanguageSomeTranslations(p) ? p : this.services.languageUtils.getBestMatchFromCodes(le(g) ? [g] : g);
            v && (this.language || o(v),
            this.translator.language || this.translator.changeLanguage(v),
            (_ = (y = this.services.languageDetector) == null ? void 0 : y.cacheUserLanguage) == null || _.call(y, v)),
            this.loadResources(v, M => {
                f(M, v)
            }
            )
        }
        ;
        return !i && this.services.languageDetector && !this.services.languageDetector.async ? d(this.services.languageDetector.detect()) : !i && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(d) : this.services.languageDetector.detect(d) : d(i),
        r
    }
    getFixedT(i, u, r) {
        const o = (f, d, ...g) => {
            let p;
            typeof d != "object" ? p = this.options.overloadTranslationOptionHandler([f, d].concat(g)) : p = {
                ...d
            },
            p.lng = p.lng || o.lng,
            p.lngs = p.lngs || o.lngs,
            p.ns = p.ns || o.ns,
            p.keyPrefix !== "" && (p.keyPrefix = p.keyPrefix || r || o.keyPrefix);
            const v = this.options.keySeparator || ".";
            let y;
            return p.keyPrefix && Array.isArray(f) ? y = f.map(_ => `${p.keyPrefix}${v}${_}`) : y = p.keyPrefix ? `${p.keyPrefix}${v}${f}` : f,
            this.t(y, p)
        }
        ;
        return le(i) ? o.lng = i : o.lngs = i,
        o.ns = u,
        o.keyPrefix = r,
        o
    }
    t(...i) {
        var u;
        return (u = this.translator) == null ? void 0 : u.translate(...i)
    }
    exists(...i) {
        var u;
        return (u = this.translator) == null ? void 0 : u.exists(...i)
    }
    setDefaultNamespace(i) {
        this.options.defaultNS = i
    }
    hasLoadedNamespace(i, u={}) {
        if (!this.isInitialized)
            return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
            !1;
        if (!this.languages || !this.languages.length)
            return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
            !1;
        const r = u.lng || this.resolvedLanguage || this.languages[0]
          , o = this.options ? this.options.fallbackLng : !1
          , f = this.languages[this.languages.length - 1];
        if (r.toLowerCase() === "cimode")
            return !0;
        const d = (g, p) => {
            const v = this.services.backendConnector.state[`${g}|${p}`];
            return v === -1 || v === 0 || v === 2
        }
        ;
        if (u.precheck) {
            const g = u.precheck(this, d);
            if (g !== void 0)
                return g
        }
        return !!(this.hasResourceBundle(r, i) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || d(r, i) && (!o || d(f, i)))
    }
    loadNamespaces(i, u) {
        const r = ql();
        return this.options.ns ? (le(i) && (i = [i]),
        i.forEach(o => {
            this.options.ns.indexOf(o) < 0 && this.options.ns.push(o)
        }
        ),
        this.loadResources(o => {
            r.resolve(),
            u && u(o)
        }
        ),
        r) : (u && u(),
        Promise.resolve())
    }
    loadLanguages(i, u) {
        const r = ql();
        le(i) && (i = [i]);
        const o = this.options.preload || []
          , f = i.filter(d => o.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d));
        return f.length ? (this.options.preload = o.concat(f),
        this.loadResources(d => {
            r.resolve(),
            u && u(d)
        }
        ),
        r) : (u && u(),
        Promise.resolve())
    }
    dir(i) {
        var o, f;
        if (i || (i = this.resolvedLanguage || (((o = this.languages) == null ? void 0 : o.length) > 0 ? this.languages[0] : this.language)),
        !i)
            return "rtl";
        const u = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"]
          , r = ((f = this.services) == null ? void 0 : f.languageUtils) || new Rg(Dg());
        return u.indexOf(r.getLanguagePartFromCode(i)) > -1 || i.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance(i={}, u) {
        return new Il(i,u)
    }
    cloneInstance(i={}, u=Nu) {
        const r = i.forkResourceStore;
        r && delete i.forkResourceStore;
        const o = {
            ...this.options,
            ...i,
            isClone: !0
        }
          , f = new Il(o);
        if ((i.debug !== void 0 || i.prefix !== void 0) && (f.logger = f.logger.clone(i)),
        ["store", "services", "language"].forEach(g => {
            f[g] = this[g]
        }
        ),
        f.services = {
            ...this.services
        },
        f.services.utils = {
            hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
        },
        r) {
            const g = Object.keys(this.store.data).reduce( (p, v) => (p[v] = {
                ...this.store.data[v]
            },
            p[v] = Object.keys(p[v]).reduce( (y, _) => (y[_] = {
                ...p[v][_]
            },
            y), p[v]),
            p), {});
            f.store = new Eg(g,o),
            f.services.resourceStore = f.store
        }
        return f.translator = new ku(f.services,o),
        f.translator.on("*", (g, ...p) => {
            f.emit(g, ...p)
        }
        ),
        f.init(o, u),
        f.translator.options = o,
        f.translator.backendConnector.services.utils = {
            hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
        },
        f
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const ut = Il.createInstance();
ut.createInstance = Il.createInstance;
ut.createInstance;
ut.dir;
ut.init;
ut.loadResources;
ut.reloadResources;
ut.use;
ut.changeLanguage;
ut.getFixedT;
ut.t;
ut.exists;
ut.setDefaultNamespace;
ut.hasLoadedNamespace;
ut.loadNamespaces;
ut.loadLanguages;
const Q5 = "Signal"
  , J5 = "m"
  , F5 = "Currency pair"
  , P5 = "Timeframe"
  , W5 = "Accuracy"
  , I5 = "Direction"
  , e4 = "Time to end"
  , t4 = "Back to main"
  , n4 = "To"
  , a4 = "Up"
  , i4 = "Down"
  , l4 = "Press the 'Get new signal' button to start"
  , r4 = "Searching for signal..."
  , u4 = "Error getting signal, please try again"
  , s4 = "Get new signal"
  , o4 = "Reset signal"
  , c4 = "Select pair"
  , f4 = "Select timeframe"
  , d4 = "Language"
  , h4 = "Check our bot"
  , g4 = "Markets are currently resting 💤"
  , v4 = "We operate only from Monday to Friday from {{from}}:00 - {{to}}:00, so visit us on working days, and we will help you conquer financial peaks! 🚀"
  , p4 = "You already have an active signal in another window. Please complete it before requesting a new one."
  , m4 = "Refresh"
  , y4 = {
    signal: Q5,
    timeframe_minutes: J5,
    pair: F5,
    timeframe: P5,
    accuracy: W5,
    direction: I5,
    time_to_end: e4,
    main_button: t4,
    time_to: n4,
    up: a4,
    down: i4,
    press_btn_to_start: l4,
    signal_search_text: r4,
    get_signal_error: u4,
    get_signal: s4,
    reset_signal: o4,
    select_pair: c4,
    select_timeframe: f4,
    language: d4,
    check_our_bot: h4,
    working_time_title: g4,
    working_time_text: v4,
    has_active_signal: p4,
    refresh: m4
}
  , _4 = "Сигнал"
  , b4 = "м"
  , S4 = "Валютная пара"
  , O4 = "Таймфрейм"
  , E4 = "Точность"
  , A4 = "Направление"
  , T4 = "Время до конца"
  , R4 = "На главную"
  , x4 = "До"
  , w4 = "Вверх"
  , N4 = "Вниз"
  , M4 = "Нажмите кнопку 'Получить новый сигнал', чтобы начать"
  , D4 = "Поиск сигнала..."
  , C4 = "Ошибка получения сигнала, попробуйте еще раз"
  , j4 = "Получить новый сигнал"
  , z4 = "Сбросить сигнал"
  , U4 = "Выберите пару"
  , L4 = "Выберите таймфрейм"
  , B4 = "Язык"
  , H4 = "Загляните в нашего бота"
  , V4 = "Рынки сейчас отдыхают 💤"
  , q4 = "Мы работаем только с понедельника по пятницу с {{from}}:00 - {{to}}:00, так что заходите в рабочие дни, и мы поможем покорить финансовые вершины! 🚀"
  , G4 = "У вас уже есть активный сигнал в другом окне. Пожалуйста, завершите его, прежде чем запрашивать новый."
  , Y4 = "Обновить"
  , K4 = {
    signal: _4,
    timeframe_minutes: b4,
    pair: S4,
    timeframe: O4,
    accuracy: E4,
    direction: A4,
    time_to_end: T4,
    main_button: R4,
    time_to: x4,
    up: w4,
    down: N4,
    press_btn_to_start: M4,
    signal_search_text: D4,
    get_signal_error: C4,
    get_signal: j4,
    reset_signal: z4,
    select_pair: U4,
    select_timeframe: L4,
    language: B4,
    check_our_bot: H4,
    working_time_title: V4,
    working_time_text: q4,
    has_active_signal: G4,
    refresh: Y4
}
  , up = ["en", "ru"];
ut.use(Y2).init({
    resources: {
        en: {
            translation: y4
        },
        ru: {
            translation: K4
        }
    },
    lng: "ru",
    fallbackLng: "ru",
    interpolation: {
        escapeValue: !1
    }
});
const jg = () => {
    const {i18n: a} = rr()
      , [i,u] = T.useState(!1)
      , {closeRef: r, openerRef: o} = Df({
        callback: () => u(!1)
    });
    return H.jsxs("div", {
        className: un.wrapper,
        children: [H.jsxs("button", {
            ref: o,
            className: ot(un.button, i && un.open),
            onClick: () => u(!i),
            children: [H.jsx(w5, {
                className: un.langImg
            }), H.jsx(Mf, {
                className: un.arrowDown
            })]
        }), H.jsx("div", {
            ref: r,
            className: ot(un.dropdown, i && un.open),
            children: H.jsx("div", {
                className: un.container,
                children: up.map(f => H.jsx("button", {
                    className: ot(un.langButton, a.language === f && un.active),
                    onClick: () => {
                        a.changeLanguage(f),
                        u(!1)
                    }
                    ,
                    children: f
                }, f))
            })
        })]
    })
}
  , X4 = "_wrapper_118hq_1"
  , Z4 = "_container_118hq_11"
  , $4 = "_bar_118hq_18"
  , k4 = "_timeText_118hq_23"
  , Mu = {
    wrapper: X4,
    container: Z4,
    bar: $4,
    timeText: k4
}
  , Xl = {
    workDays: ["monday", "tuesday", "wednesday", "thursday", "friday"],
    fromUTCTime: 6,
    toUTCTime: 20
};
function kc() {
    const a = new Date
      , i = a.toLocaleString("en-US", {
        weekday: "long"
    }).toLowerCase()
      , u = a.getUTCHours()
      , r = Xl.workDays.includes(i)
      , o = u >= Xl.fromUTCTime && u < Xl.toUTCTime;
    return r && o
}
function zg(a) {
    const i = Math.floor(a / 60)
      , u = Math.floor(a % 60);
    return `${String(i).padStart(2, "0")}:${String(u).padStart(2, "0")}`
}
function Q4(a) {
    const i = new Date(a)
      , u = i.getHours().toString().padStart(2, "0")
      , r = i.getMinutes().toString().padStart(2, "0");
    return `${u}:${r}`
}
function Ug(a) {
    const i = new Date;
    return i.setUTCHours(a, 0, 0, 0),
    new Date(i).getHours()
}
const J4 = a => new Promise(i => setTimeout(i, a))
  , F4 = ({interval: a=5, stopResultsPending: i}) => {
    const u = a * 60
      , [r,o] = T.useState(0)
      , [f,d] = T.useState(0);
    return T.useEffect( () => {
        const g = localStorage.getItem(Bt.signal);
        if (!g)
            return;
        const p = JSON.parse(g)
          , v = Number(p.endTime);
        d(v),
        o((v - Date.now()) / 1e3);
        const y = setInterval( () => {
            const _ = (v - Date.now()) / 1e3;
            _ <= 0 ? (i(),
            clearInterval(y),
            o(0)) : o(_)
        }
        , 1e3);
        return () => clearInterval(y)
    }
    , [u]),
    H.jsxs(H.Fragment, {
        children: [H.jsx("div", {
            className: Mu.wrapper,
            children: H.jsx("div", {
                className: Mu.container,
                children: H.jsx("div", {
                    className: Mu.bar,
                    style: {
                        width: `${r / u * 100}%`
                    }
                })
            })
        }), H.jsxs("p", {
            className: Mu.timeText,
            children: [zg(r), "/", zg(u)]
        })]
    })
}
;
class P4 {
    constructor() {
        Tu(this, "isMiniApp", !1);
        Tu(this, "hasActiveSignal", !1);
        Ov(this)
    }
    setIsMiniApp(i) {
        this.isMiniApp = i
    }
    setHasActiveSignal(i) {
        this.hasActiveSignal = i
    }
}
const Ci = new P4;
class W4 {
    constructor() {
        Tu(this, "userId", null);
        Ov(this)
    }
    setUserId(i) {
        this.userId = i
    }
}
const Di = new W4
  , Zl = {
    SESSION_SIGNAL_KEY: "session_has_active_signal"
}
  , Lg = "1.0.2"
  , Bg = "best_trading_binary_bot"
  , I4 = Nf( ({checkActiveSignal: a}) => {
    const {i18n: i, t: u} = rr()
      , [r,o] = T.useState(!1)
      , [f,d] = T.useState(!1)
      , [g,p] = T.useState(kc());
    T.useEffect( () => {
        g || localStorage.removeItem(Bt.signal)
    }
    , [g]);
    const v = () => {
        const q = localStorage.getItem(Bt.signal);
        return q ? JSON.parse(q) : {
            symbol: "EURUSD"
        }
    }
      , [y,_] = T.useState(v)
      , M = () => {
        const q = localStorage.getItem(Bt.signalInterval);
        return q && !isNaN(Number(q)) && _f.includes(Number(q)) ? Number(q) : _f[0]
    }
      , [U,N] = T.useState(M)
      , C = () => {
        _(q => {
            const J = {
                symbol: q.symbol
            };
            return localStorage.setItem(Bt.signal, JSON.stringify(J)),
            J
        }
        )
    }
      , Z = (q={}) => {
        _(J => {
            const F = {
                ...J,
                ...q
            };
            return localStorage.setItem(Bt.signal, JSON.stringify(F)),
            F
        }
        )
    }
      , re = q => {
        const J = Date.now()
          , F = Math.floor((J + q * 60 * 1e3) / (60 * 1e3)) * 60 * 1e3;
        return _(se => {
            const ve = {
                ...se,
                endTime: F,
                currentInterval: (F - J) / 1e3 / 60
            };
            return localStorage.setItem(Bt.signal, JSON.stringify(ve)),
            ve
        }
        ),
        F
    }
    ;
    T.useEffect( () => {
        const q = localStorage.getItem(Bt.signal);
        if (!q) {
            C();
            return
        }
        const J = JSON.parse(q);
        _(J)
    }
    , []),
    T.useEffect( () => {
        var q;
        if (y.isResultPending === !1 && !((q = y.signalResults) != null && q.closePrice)) {
            const J = y.price
              , F = y.signal;
            if (!J || !F)
                return;
            o(!0),
            J4(1500).then( () => {
                I3({
                    userId: Di.userId
                }).then(async se => {
                    Z({
                        signalResults: se
                    })
                }
                ).catch(console.error).finally( () => {
                    o(!1),
                    localStorage.removeItem(Zl.SESSION_SIGNAL_KEY)
                }
                )
            }
            )
        }
    }
    , [y.isResultPending]);
    async function ue() {
        if (await a(Di.userId),
        Ci.hasActiveSignal) {
            d(!1),
            o(!1);
            return
        }
        try {
            if (!kc()) {
                p(!1),
                C();
                return
            }
            localStorage.setItem(Zl.SESSION_SIGNAL_KEY, "1"),
            C(),
            o(!0);
            let q = await W3(U, y.symbol);
            if (!q || q.message || q.signal.toLowerCase() === "neutral") {
                C(),
                alert(u("get_signal_error"));
                return
            }
            const J = !0
              , F = re(U);
            Z({
                ...q,
                isResultPending: J
            });
            try {
                await Pl.post(`${mf.SIGNAL.START}/${Di.userId}`, {
                    signal: q.signal,
                    symbol: q.symbol,
                    openPrice: q.price,
                    duration: U,
                    isResultPending: J,
                    endTime: F
                })
            } catch (se) {
                console.log(se),
                alert(u("get_signal_error")),
                C();
                return
            }
        } catch (q) {
            console.log(q)
        } finally {
            o(!1)
        }
    }
    const te = () => {
        if (C(),
        !kc()) {
            p(!1);
            return
        }
        d(!0),
        o(!0);
        const q = (Math.floor(Math.random() * 6) + 10) * 1e3;
        setTimeout( () => {
            d(!1),
            ue()
        }
        , q)
    }
      , ie = async () => {
        C(),
        localStorage.removeItem(Zl.SESSION_SIGNAL_KEY);
        try {
            await Pl.delete(`${mf.SIGNAL.STOP}/${Di.userId}`)
        } catch (q) {
            console.log(q)
        }
    }
    ;
    T.useEffect( () => {
        localStorage.setItem(Bt.signalInterval, String(U))
    }
    , [U]),
    T.useEffect( () => {
        const q = localStorage.getItem("app_language");
        q && q !== i.language && i.changeLanguage(q)
    }
    , []),
    T.useEffect( () => {
        localStorage.setItem("app_language", i.language)
    }
    , [i.language]),
    T.useEffect( () => {
        const q = () => {
            y.isResultPending && y.endTime && Date.now() >= y.endTime && _(J => ({
                ...J,
                isResultPending: !1
            }))
        }
        ;
        return window.addEventListener("focus", q),
        q(),
        () => {
            window.removeEventListener("focus", q)
        }
    }
    , [y.isResultPending, y.endTime]),
    T.useEffect( () => {
        if (y.signal && !y.signalResults && !y.accuracy) {
            const q = Math.floor(Math.random() * 21) + 70;
            _(J => {
                const F = {
                    ...J,
                    accuracy: q
                };
                return localStorage.setItem(Bt.signal, JSON.stringify(F)),
                F
            }
            )
        }
    }
    , [y.signal, y.signalResults, y.accuracy]),
    T.useEffect( () => {
        if (y.isResultPending && y.endTime) {
            const q = Date.now()
              , J = y.endTime - q;
            if (J <= 0) {
                _(se => ({
                    ...se,
                    isResultPending: !1
                }));
                return
            }
            const F = setTimeout( () => {
                _(se => ({
                    ...se,
                    isResultPending: !1
                }))
            }
            , J);
            return () => clearTimeout(F)
        }
    }
    , [y.isResultPending, y.endTime]);
    const Q = H.jsxs(H.Fragment, {
        children: [H.jsx(jg, {}), H.jsxs("div", {
            className: ot(De.card, De.notWorkingContainer),
            children: [H.jsx("h2", {
                children: u("working_time_title")
            }), H.jsx("div", {
                className: De.times,
                children: H.jsx("p", {
                    children: u("working_time_text", {
                        from: Ug(Xl.fromUTCTime),
                        to: Ug(Xl.toUTCTime)
                    })
                })
            })]
        })]
    });
    return H.jsx("div", {
        children: g ? H.jsxs("div", {
            children: [H.jsxs("div", {
                className: De.selectors,
                children: [H.jsx(t5, {
                    value: y.symbol,
                    onChange: q => {
                        _(J => {
                            const F = {
                                ...J,
                                symbol: q
                            };
                            return localStorage.setItem(Bt.signal, JSON.stringify(F)),
                            F
                        }
                        )
                    }
                    ,
                    disabled: f || !!y.signal
                }), H.jsxs("div", {
                    className: De.selectorsRight,
                    children: [H.jsx(g5, {
                        value: U,
                        onChange: q => {
                            N(q),
                            _(J => {
                                const F = {
                                    ...J,
                                    currentInterval: q
                                };
                                return localStorage.setItem(Bt.signal, JSON.stringify(F)),
                                F
                            }
                            )
                        }
                        ,
                        disabled: f || !!y.signal
                    }), H.jsx(jg, {})]
                })]
            }), y.signal || r ? H.jsx("div", {
                className: ot(De.card, y.signalResults && De[y.signalResults.result.toLowerCase()]),
                children: f ? H.jsxs("div", {
                    className: De.loaderWrapper,
                    children: [H.jsx("p", {
                        className: De.loaderText,
                        children: u("signal_search_text")
                    }), H.jsx(Uv, {})]
                }) : H.jsxs("div", {
                    children: [H.jsxs("div", {
                        className: De.signalHeader,
                        children: [H.jsx("h2", {
                            className: De.signalTitle,
                            children: u("signal")
                        }), y.signalResults && H.jsx("h3", {
                            className: ot(De.signalResults, De[y.signalResults.result.toLowerCase()]),
                            children: y.signalResults.result
                        })]
                    }), H.jsxs("div", {
                        className: De.signalInfo,
                        children: [H.jsx(Vl, {
                            title: u("pair"),
                            children: H.jsxs("div", {
                                className: De.currentSymbol,
                                children: [H.jsx(Lv, {
                                    symbol: y.symbol
                                }), yf(y.symbol)]
                            })
                        }), H.jsxs("div", {
                            className: De.signalInfoMiddle,
                            children: [H.jsx(Vl, {
                                title: u("timeframe"),
                                content: U + u("timeframe_minutes")
                            }), H.jsx(Vl, {
                                title: u("accuracy"),
                                content: (y.accuracy ?? Math.floor(Math.random() * 21) + 70) + "%"
                            })]
                        }), H.jsxs(Vl, {
                            title: u("direction"),
                            contentClassName: De.signalDirection,
                            children: [H.jsxs("span", {
                                className: De[y.signal || "down"],
                                children: [y.signal === "up" ? H.jsx(w2, {}) : H.jsx(M2, {}), u(y.signal || "down"), " "]
                            }), H.jsxs("p", {
                                className: De.endTimeText,
                                children: [u("time_to"), " ", Q4(y.endTime || 0)]
                            })]
                        }), !y.signalResults && H.jsx(Vl, {
                            title: u("time_to_end"),
                            children: H.jsx("div", {
                                className: De.progressBarWrapper,
                                children: H.jsx(F4, {
                                    interval: y.currentInterval || 1,
                                    stopResultsPending: () => _(q => ({
                                        ...q,
                                        isResultPending: !1
                                    }))
                                })
                            })
                        })]
                    })]
                })
            }) : H.jsx("div", {
                className: De.card,
                children: H.jsx("h2", {
                    className: De.startText,
                    children: u("press_btn_to_start")
                })
            }), H.jsx("button", {
                className: De.signalBtn,
                onClick: te,
                disabled: r || y.isResultPending,
                children: u("get_signal")
            }), y.signal && !r && !y.signalResults && H.jsx("button", {
                className: De.resetButton,
                onClick: ie,
                disabled: r,
                children: u("reset_signal")
            }), y.signalResults && H.jsx("button", {
                className: De.mainButton,
                onClick: C,
                disabled: r,
                children: u("main_button")
            }), y.signal && H.jsx("div", {
                className: De.widgetWrap,
                children: H.jsx(Q2, {
                    symbol: y.symbol
                })
            })]
        }) : Q
    })
}
)
  , eO = Nf( ({checkActiveSignal: a}) => H.jsxs("div", {
    className: ag.app,
    children: [H.jsx("h1", {
        className: ag.mainTitle,
        children: "TRADE SIGNAL"
    }), H.jsx(I4, {
        checkActiveSignal: a
    })]
}))
  , Qc = async a => {
    if (!a)
        return;
    const {data: i} = await Pl.get(`/user/hasActiveSignal/${a}`);
    i.hasActiveSignal ? Ci.setHasActiveSignal(!localStorage.getItem(Zl.SESSION_SIGNAL_KEY)) : (Ci.setHasActiveSignal(!1),
    localStorage.removeItem(Zl.SESSION_SIGNAL_KEY))
}
  , tO = ({onRefresh: a, isRefreshing: i, t: u}) => H.jsxs("div", {
    children: [H.jsx("h1", {
        className: sf.hasActiveSignalTitle,
        children: u("has_active_signal")
    }), H.jsx("button", {
        onClick: a,
        className: sf.hasActiveSignalButton,
        disabled: i,
        children: u("refresh")
    })]
})
  , nO = () => H.jsx("div", {
    style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    },
    children: H.jsx(Uv, {})
})
  , aO = ({t: a}) => H.jsxs("h1", {
    className: sf.title,
    children: [a("check_our_bot"), " -", H.jsxs("a", {
        href: `https://t.me/${Bg}`,
        children: ["@", Bg]
    })]
})
  , iO = Nf( () => {
    const {t: a, i18n: i} = rr()
      , [u,r] = $l.useState(!0)
      , [o,f] = $l.useState(!1);
    T.useEffect( () => {
        localStorage.getItem("APP_VERSION") !== Lg && (localStorage.clear(),
        localStorage.setItem("APP_VERSION", Lg));
        const p = new URLSearchParams(window.location.search)
          , v = p.get("user_id")
          , y = p.get("lang");
        v ? Pl.get(`/user/check/${v}`).then( ({data: _}) => {
            _.exists && (Di.setUserId(Number(v)),
            Ci.setIsMiniApp(!0),
            Qc(v)),
            r(!1)
        }
        ).catch( () => r(!1)) : r(!1),
        y && up.includes(y) && i.changeLanguage(y)
    }
    , []);
    const d = () => {
        const g = Di.userId;
        f(!0),
        Qc(g).finally( () => f(!1))
    }
    ;
    return u ? H.jsx(nO, {}) : Ci.isMiniApp ? Ci.hasActiveSignal ? H.jsx(tO, {
        onRefresh: d,
        isRefreshing: o,
        t: a
    }) : H.jsx(eO, {
        checkActiveSignal: Qc
    }) : H.jsx(aO, {
        t: a
    })
}
);
qy.createRoot(document.getElementById("root")).render(H.jsx($l.StrictMode, {
    children: H.jsx(iO, {})
}));

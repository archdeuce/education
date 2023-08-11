// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"igKGj":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _gitJson = require("./data/git.json");
var _gitJsonDefault = parcelHelpers.interopDefault(_gitJson);
var _javascriptJson = require("./data/javascript.json");
var _javascriptJsonDefault = parcelHelpers.interopDefault(_javascriptJson);
var _markupJson = require("./data/markup.json");
var _markupJsonDefault = parcelHelpers.interopDefault(_markupJson);
var _nodejsJson = require("./data/nodejs.json");
var _nodejsJsonDefault = parcelHelpers.interopDefault(_nodejsJson);
var _reactJson = require("./data/react.json");
var _reactJsonDefault = parcelHelpers.interopDefault(_reactJson);
const pageTitle = document.querySelector("title").innerText;
const videoList = document.querySelector("#videos");
const materialsList = document.querySelector("#materials");
const topArrow = document.querySelector("#top-arrow");
const navList = document.querySelectorAll("#nav-list>li>a");
const getListContent = (data = [])=>{
    return data.map(({ title, url })=>{
        return `<li><a href="${url}" target="_blank">${title}</a></li>`;
    }).join("");
};
const renderList = (data)=>{
    const { videos, materials } = data;
    videoList.innerHTML = getListContent(videos);
    materialsList.innerHTML = getListContent(materials);
};
switch(pageTitle){
    case "Markup":
        navList[0].classList.add("active__link");
        renderList((0, _markupJsonDefault.default));
        break;
    case "JavaScript":
        navList[1].classList.add("active__link");
        renderList((0, _javascriptJsonDefault.default));
        break;
    case "React":
        navList[2].classList.add("active__link");
        renderList((0, _reactJsonDefault.default));
        break;
    case "NodeJS":
        navList[3].classList.add("active__link");
        renderList((0, _nodejsJsonDefault.default));
        break;
    case "Git":
        navList[4].classList.add("active__link");
        renderList((0, _gitJsonDefault.default));
        break;
    default:
        break;
}
const onScroll = ()=>{
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) topArrow.classList.add("visible");
    else topArrow.classList.remove("visible");
};
const handleOnTop = ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};
window.addEventListener("scroll", onScroll);
topArrow.addEventListener("click", handleOnTop);

},{"./data/git.json":"iJGSc","./data/javascript.json":"kdRLM","./data/markup.json":"jI2B7","./data/nodejs.json":"7mH5F","./data/react.json":"jTRE4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iJGSc":[function(require,module,exports) {
module.exports = JSON.parse('{"videos":[{"title":"1.1 Git – Введение – Что такое Git?","url":"https://www.youtube.com/watch?v=W4hoc24K93E&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb"},{"title":"2.1 Git – Основы – Конфигурация","url":"https://www.youtube.com/watch?v=hWiqh6YUUS8&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=3"},{"title":"2.2 Git – Основы – Создание репозитория, первый коммит","url":"https://www.youtube.com/watch?v=j2F77U-2FuQ&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=4"},{"title":"2.3 Git – Основы – Git и права на файлы","url":"https://www.youtube.com/watch?v=KrlYu1ToS-o&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=5"},{"title":"2.4 Git – Основы – Git show, кто такие автор и коммиттер","url":"https://www.youtube.com/watch?v=_qWWtXu07GI&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=6"},{"title":"2.5 Git – Основы – Добавление файлов и директорий, git status","url":"https://www.youtube.com/watch?v=xzEMA7rzN3Y&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=7"},{"title":"2.6 Git – Основы – Хороший коммит","url":"https://www.youtube.com/watch?v=WlIzoLK46is&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=8"},{"title":"2.7 Git – Основы – Зачем нужен индекс?","url":"https://www.youtube.com/watch?v=75TOiisShWw&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=9"},{"title":"2.8 Git – Основы – Коммиты без git add","url":"https://www.youtube.com/watch?v=UX7O3oekwFA&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=10"},{"title":"2.9 Git – Основы – Удаление и переименование файлов","url":"https://www.youtube.com/watch?v=W71P4I0MGr0&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=11"},{"title":"3.1 Git – Ветки – Введение","url":"https://www.youtube.com/watch?v=aSohh-m5vJY&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=12"},{"title":"3.2 Git – Ветки – Создание и переключение","url":"https://www.youtube.com/watch?v=ydtgQSaUzw0&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=13"},{"title":"3.3 Git – Ветки – Команда checkout при незакоммиченных изменениях","url":"https://www.youtube.com/watch?v=KxKjBneF_NI&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=14"},{"title":"3.4 Git – Ветки – Перенос незакоммиченных изменений","url":"https://www.youtube.com/watch?v=mlxmxsBzIMs&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=15"},{"title":"3.5 Git – Ветки – Перенос веток \\"вручную\\"","url":"https://www.youtube.com/watch?v=6oZG-pAeHRE&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=16"},{"title":"3.6 Git – Ветки – Состояние отделённой HEAD","url":"https://www.youtube.com/watch?v=g0GgtqlhHaw&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=17"},{"title":"3.7 Git – Ветки – Восстановление предыдущих версий файлов","url":"https://www.youtube.com/watch?v=3z-LjQacu2Q&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=18"},{"title":"3.8 Git – Ветки – Просмотр истории и старых файлов, символы ~, ^, @, поиск с :/","url":"https://www.youtube.com/watch?v=l-sTQBr3rXY&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=19"},{"title":"3.9 Git – Ветки – Слияние веток \\"перемоткой\\"","url":"https://www.youtube.com/watch?v=g--N6QHbt6Q&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=20"},{"title":"3.10 Git – Ветки – Удаление веток","url":"https://www.youtube.com/watch?v=yFVPNYSTlLQ&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=21"},{"title":"3.11 Git – Ветки – История переключений веток: лог ссылок reflog","url":"https://www.youtube.com/watch?v=FxyGx_XTRhA&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=22"},{"title":"4.1 Git – Удаление \\"лишних\\" файлов и незакоммиченных изменений","url":"https://www.youtube.com/watch?v=h9kYvAQoXjo&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=23"},{"title":"5.1 Git – Reset – Жесткий reset --hard: отмена изменений, удаление коммитов","url":"https://www.youtube.com/watch?v=DMncFUqzDuM&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=24"},{"title":"5.2 Git – Reset – Мягкий reset --soft: замена и объединение коммитов","url":"https://www.youtube.com/watch?v=bUdLmdSMm7E&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=25"},{"title":"5.3 Git – Reset – Правка последнего коммита: commit --amend","url":"https://www.youtube.com/watch?v=Hho9WBgWil0&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=26"},{"title":"5.4 Git – Reset – Смешанный reset (без флагов), сравнение видов reset","url":"https://www.youtube.com/watch?v=r1oUTfqKXac&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=27"},{"title":"5.5 Git – Reset – Таблица с действиями reset","url":"https://www.youtube.com/watch?v=hb-x1SJB43s&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=28"},{"title":"6.1 Git – Просмотр – Сравнение коммитов, веток и не только: git diff","url":"https://www.youtube.com/watch?v=1oExHLJXBIg&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=29"},{"title":"6.2 Git – Просмотр – Вывод истории: git log, форматирование коммитов","url":"https://www.youtube.com/watch?v=Oim9dbpbCMc&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=30"},{"title":"6.3 Git – Просмотр – Диапазоны коммитов для git log и не только","url":"https://www.youtube.com/watch?v=nRYSu3wbNXo&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=31"},{"title":"6.4 Git – Просмотр – Вывод git log коммитов, меняющих нужный файл","url":"https://www.youtube.com/watch?v=7A68GxROZ2I&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=32"},{"title":"6.5 Git – Просмотр – Поиск в истории, фильтры для git log","url":"https://www.youtube.com/watch?v=lhrchh5dqH0&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=33"},{"title":"6.6 Git – Просмотр – Кто написал эту строку? git blame","url":"https://www.youtube.com/watch?v=o9du71FpLLM&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=34"},{"title":"7.1 Git – Слияние – \\"Истинное\\" слияние и разрешение конфликтов в git merge","url":"https://www.youtube.com/watch?v=PXK1hIifpWU&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=35"},{"title":"7.2 Git – Слияние – Коммит слияния, дальнейшие слияния","url":"https://www.youtube.com/watch?v=EJKw_qW5pgI&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=36"},{"title":"7.3 Git – Слияние – Отмена слияния","url":"https://www.youtube.com/watch?v=TEsjp1eDLx4&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=37"},{"title":"7.4 Git – Слияние – Семантические конфликты и их разрешение","url":"https://www.youtube.com/watch?v=h4jxghOE9e0&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=38"},{"title":"7.5 Git – Слияние – Полезный приём: сохранение веток с флагом --no-ff","url":"https://www.youtube.com/watch?v=AHjS9MWsNm0&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=40"},{"title":"7.6 Git – Слияние – Создание коммита из ветки: merge --squash","url":"https://www.youtube.com/watch?v=1v-dxpobjlY&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=40"},{"title":"8.1 Git – Копирование коммитов – Копирование коммитов: cherry-pick","url":"https://www.youtube.com/watch?v=TZJxBSfR0NE&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=41"},{"title":"9.1 Git – Перемещение коммитов – Перебазирование вместо слияния: rebase","url":"https://www.youtube.com/watch?v=jxwPgfmutjs&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=42"},{"title":"9.2 Git – Перемещение коммитов – Rebase и merge: сравнение подходов","url":"https://www.youtube.com/watch?v=Z3Q2RaEUQO0&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=43"},{"title":"9.3 Git – Перемещение коммитов – Rebase с тестами, флаг -x","url":"https://www.youtube.com/watch?v=dnT8YzpqEYA&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=44"},{"title":"9.4 Git – Перемещение коммитов – Перенос части ветки, rebase --onto","url":"https://www.youtube.com/watch?v=t_sPfT8m0s8&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=45"},{"title":"9.5 Git – Перемещение коммитов – Перебазирование слияний, --rebase-merges","url":"https://www.youtube.com/watch?v=P89rsHliIpM&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=46"},{"title":"9.6 Git – Перемещение коммитов – Интерактивное перебазирование, rebase -i","url":"https://www.youtube.com/watch?v=4K9X1Aa1nvA&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=47"},{"title":"9.7 Git – Перемещение коммитов – Исправляем коммит посередине ветки: autosquash","url":"https://www.youtube.com/watch?v=exYHemsk1V8&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=48"},{"title":"10.1 Git – Отмена коммитов через revert – Обратные коммиты, revert","url":"https://www.youtube.com/watch?v=FcwQrN9XOwU&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=49"},{"title":"10.2 Git – Отмена коммитов через revert – Отмена слияния через revert","url":"https://www.youtube.com/watch?v=aRbOsagYs8w&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=50"},{"title":"10.3 Git – Отмена коммитов через revert – Повторное слияние с rebase","url":"https://www.youtube.com/watch?v=3HDSLArx3qw&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=51"}],"materials":[{"title":"Markdown Cheatsheet","url":"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"}]}');

},{}],"kdRLM":[function(require,module,exports) {
module.exports = JSON.parse('{"videos":[{"title":"Работа с интерфейсом автоматической проверки домашних заданий по JavaScript","url":"https://www.youtube.com/watch?v=9PfS7IqNuf0"},{"title":"Модуль 1. Переменные и ветвления","url":"https://www.youtube.com/watch?v=WmfSe8S8vDs"},{"title":"Модуль 1. Вебинар 2. Ветвления и циклы","url":"https://www.youtube.com/watch?v=K5uLzN8Kn5Y"},{"title":"Модуль 2. Занятие 3. Массивы","url":"https://www.youtube.com/watch?v=iY5KXNFuEVg"},{"title":"Модуль 2. Занятие 4. Функции","url":"https://www.youtube.com/watch?v=414JiAS0pPE"},{"title":"Модуль 3. Занятие 5. Объекты (03.08)","url":"https://www.youtube.com/watch?v=OZkaGAcphIg"},{"title":"Модуль 3. Занятие 6. Объекты","url":"https://www.youtube.com/watch?v=nW2JV_ZX7jU&feature=youtu.be&app=desktop"},{"title":"Модуль 4. Занятие 7. Callback-функции и замыкания (11.08)","url":"https://www.youtube.com/watch?v=_wcFovNQTWU"},{"title":"Модуль 4. Занятие 8. Ключевое слово this (13.08.2020)","url":"https://www.youtube.com/watch?v=d-OuFFUFy9I"},{"title":"Модуль 5. Занятие 9. Прототипное наследование (17.08)","url":"https://www.youtube.com/watch?v=2Dd5Q2L457o"},{"title":"Модуль 5. Занятие 10. Классы(20.08)","url":"https://www.youtube.com/watch?v=Hk8B6fSHQ7A"},{"title":"Модуль 6. Занятие 11. Перебирающие методы массивов часть 1(27.08)","url":"https://www.youtube.com/watch?v=Hl4_H5wObM4"},{"title":"Модуль 6. Занятие 12. Перебирающие методы массивов часть 2(31.08)","url":"https://www.youtube.com/watch?v=kB6lTfrvlRg"},{"title":"Модуль 7. Занятие 13. Объектная модель документа (DOM)(14/09)","url":"https://www.youtube.com/watch?v=Haq2JIuE6Rg"},{"title":"Модуль 7. Занятие 14. События (17.09)","url":"https://www.youtube.com/watch?v=iJq-NwbZL84"},{"title":"Модуль 8. Занятие 15. Делегированиет событий(21/09)","url":"https://www.youtube.com/watch?v=pNxBoxbnTVA"},{"title":"Модуль 8. Занятие 16. Chatty events и image lazy-loading (24/09)","url":"https://www.youtube.com/watch?feature=youtu.be&v=kxwN7eXBNDQ&app=desktop"},{"title":"Модуль 9. Занятие 17. Node.js и npm (28/09/2020)","url":"https://www.youtube.com/watch?v=Zm-03ilbFnc"},{"title":"Questions-Answers. 15/10/20","url":"https://www.youtube.com/watch?v=b47VVu1fiyU"},{"title":"Модуль 9. Занятие 18. Webpack (01/10/2020)","url":"https://www.youtube.com/watch?v=OhlvXOzGOTI"},{"title":"Модуль 10. Занятие 19. Библиотеки (05/10/2020)","url":"https://www.youtube.com/watch?v=Fh8d14cY9AM"},{"title":"Модуль 10. Занятие 20. Мастерская: знакомство с веб-приложениями (08/10/2020)","url":"https://www.youtube.com/watch?v=p4XGoF0sFJM"},{"title":"Модуль 11. Занятие 21. Асинхронность: таймеры 19/10/20","url":"https://www.youtube.com/watch?v=jMNproAL94I"},{"title":"Модуль 11. Занятие 22. Промисы. 21/10/20","url":"https://www.youtube.com/watch?v=_meqUlyIEHc"},{"title":"Модуль 12. HTTP-запросы (AJAX) 26/10/20","url":"https://www.youtube.com/watch?v=qjiUZOLJ1lA"},{"title":"Модуль 12. REST-пагинация и бесконечный скрол. 28.10.20","url":"https://www.youtube.com/watch?v=poxVZxvONF8"},{"title":"Модуль 13. Занятие 25. CRUD. 02.11","url":"https://www.youtube.com/watch?v=WMmFT8i2BS8"},{"title":"Модуль 13. Асинхронные функции (async/await). 03.11.20","url":"https://www.youtube.com/watch?v=2lvJn5yrv5c"},{"title":"Бесконечный скрол (11.11.20)","url":"https://www.youtube.com/watch?v=B0vwmjOznEI"},{"title":"Проект JS 22 online (16.11.20)","url":"https://www.youtube.com/watch?v=Kr_Wf7zWbwo"},{"title":"Деплой на GitHub Pages","url":"https://drive.google.com/file/d/13LVUU_eNGXTRiv8eiBNTkomIHrBMUx3e/view"}],"materials":[{"title":"javascript-homeworks","url":"https://github.com/goitacademy/javascript-homework"},{"title":"lesson code","url":"https://drive.google.com/drive/folders/1f3faZuAsrlkqhYyTIV-8Morm4eGdrfPN"},{"title":"webpack-starter-kit","url":"https://github.com/luxplanjay/webpack-starter-kit"},{"title":"Учебник JavaScript","url":"https://learn.javascript.ru/"},{"title":"Задачи","url":"https://leetcode.com/problemset/all/"}]}');

},{}],"jI2B7":[function(require,module,exports) {
module.exports = JSON.parse('{"videos":[{"title":"Модуль 1. Вебинар 1. Основы HTML часть 1","url":"https://www.youtube.com/watch?v=k6IxRD5BEXY"},{"title":"Модуль 1. Вебинар №2. Основы HTML часть 2","url":"https://www.youtube.com/watch?v=lKAVnNi9ZCM"},{"title":"Модуль 2. Вебинар №3. Основы CSS. Селекторы. Цвет.","url":"https://www.youtube.com/watch?v=bn9yIxt_rtg"},{"title":"Модуль 2. Вебинар №4. Оформление текста и шрифты","url":"https://www.youtube.com/watch?v=KM5r3qtBdxY"},{"title":"Модуль 3. Вебинар 5. Блочная Модель","url":"https://www.youtube.com/watch?v=_StgByWohXQ"},{"title":"Модуль 3. Вебинар №6. Flexbox","url":"https://www.youtube.com/watch?v=c32Jb9Ejz4k"},{"title":"Модуль 3. Вебинар №7. Фон и декоративные элементы","url":"https://www.youtube.com/watch?v=VThG4A-4bJQ"},{"title":"Модуль 4. Вебинар №8. Векторная графика","url":"https://www.youtube.com/watch?v=GmEY7lL7YXE"},{"title":"Модуль 5. Вебинар №9. Позиционированные элементы","url":"https://www.youtube.com/watch?v=K_Jxc8VgSIk"},{"title":"Модуль 5. Вебинар №10. Переходы и анимация","url":"https://www.youtube.com/watch?v=wGLls08ReMg"},{"title":"Модуль 6. Вебинар №11. Разметка форм","url":"https://www.youtube.com/watch?v=Ssws6DoJ3oY"},{"title":"Модуль 6. Вебинар №12. Стилизация Форм","url":"https://www.youtube.com/watch?v=wahf3ZcDxV4"},{"title":"Модуль 7. Вебинар №13. Препроцессор SASS","url":"https://www.youtube.com/watch?v=AjzUOmu6DQs"}],"materials":[{"title":"html-css-homeworks","url":"https://github.com/goitacademy/html-css-homework"},{"title":"lesson code","url":"https://github.com/luxplanjay/html-css-22"},{"title":"Figma","url":"https://www.figma.com/file/MXH6NI9ZA8u9GS0fGChENn/Web-Studio?node-id=0%3A1&mode=dev"},{"title":"gulp-boilerplate","url":"https://github.com/luxplanjay/gulp-boilerplate"},{"title":"Flexbox Froggy","url":"https://flexboxfroggy.com/"},{"title":"Flexbox Playground","url":"https://www.outpan.com/app/1b970b008f/flexbox-playground"}]}');

},{}],"7mH5F":[function(require,module,exports) {
module.exports = JSON.parse('{"videos":[{"title":"Механизм сдачи домашних заданий № 2 - 6","url":"https://www.youtube.com/watch?v=wabSW_sz_cM"},{"title":"Модуль 1 Занятие 1 Основы Node.js 2","url":"https://www.youtube.com/watch?v=UK65gJgYYfg"},{"title":"Модуль 1 Занятие 2 Основы Node.js. 11.02.21","url":"https://www.youtube.com/watch?v=Rv1wDrwTOSU"},{"title":"Модуль 2 Занятие 3 Express. 16.02.21","url":"https://www.youtube.com/watch?v=sItLTrP8FvY"},{"title":"Модуль 2 Занятие 4 Express. 18.02.21","url":"https://www.youtube.com/watch?v=Tu9BFvJny1A"},{"title":"Модуль 3 Занятие 5 REST API. MongoDB и Mongoose. 22.02.21","url":"https://www.youtube.com/watch?v=KjgqrretcoM"},{"title":"Занятие 6 REST API, MongoDB и Mongoose. 24.02.21","url":"https://www.youtube.com/watch?v=TcSlmjSG-Ow"},{"title":"Занятие 7 Аутентификация. 01.03.21","url":"https://www.youtube.com/watch?v=ydNH8HvjeKI"},{"title":"Занятие 8 Аутентификация. 03.03.2021","url":"https://www.youtube.com/watch?v=GA9BFCsyeGk"},{"title":"Занятие 9 Работа с изображениями Тестирование 08.03.21","url":"https://www.youtube.com/watch?v=DSvWl69ONB8"},{"title":"Занятие 10 Работа с изображениями Тестирование 10.03.21","url":"https://www.youtube.com/watch?v=bFQqV7BEvSM"},{"title":"Занятие 11 Почта. Вебсокеты 15.03.21","url":"https://www.youtube.com/watch?v=GSe0oJ5ISjA"},{"title":"Занятие 12 Почта. Вебсокеты 17.03.21","url":"https://www.youtube.com/watch?v=d0RVdAUlK4c"},{"title":"Дополнительная лекция 23.03.21","url":"https://www.youtube.com/watch?v=BZRDp2L_Mgo"},{"title":"Дополнительная лекция 24.03.21","url":"https://www.youtube.com/watch?v=wq_7ITa3Nf8"},{"title":"Вебинар swagger-ui-express & Google OAUTH2","url":"https://www.youtube.com/watch?v=oQaoymCOW8o"},{"title":"Старт командного проекта. Soft skills. 01.04.21","url":"https://www.youtube.com/watch?v=1P7W8bDcIEA"}],"materials":[{"title":"nodejs-homeworks","url":"https://github.com/goitacademy/nodejs-homework"},{"title":"lesson code","url":"https://drive.google.com/drive/folders/1f3faZuAsrlkqhYyTIV-8Morm4eGdrfPN"}]}');

},{}],"jTRE4":[function(require,module,exports) {
module.exports = JSON.parse('{"videos":[{"title":"Вебинар 1. Компоненты и коллекции. 09.06.20","url":"https://www.youtube.com/watch?v=2neLJoITCAk"},{"title":"Вебинар 2. Стилизация компонент. 12.06.20","url":"https://www.youtube.com/watch?v=9AOISQG-GM4"},{"title":"Вебинар 3. События и состояние. 16.06.20","url":"https://www.youtube.com/watch?v=terXi4NlcoI"},{"title":"Вебинар 4. Формы. 19.06.20","url":"https://www.youtube.com/watch?v=2tPxoJxaCes"},{"title":"Вебинар 5. Жизненный цикл. 23.06.20","url":"https://www.youtube.com/watch?v=w6MW1szKuT4"},{"title":"Вебинар 6. HTTP-запросы. 26.06.20","url":"https://www.youtube.com/watch?v=HbTuKWBf_Fk"},{"title":"Вебинар 7. Навигация в приложении. 30.06.20","url":"https://www.youtube.com/watch?v=K6lAf9AEB_g"},{"title":"Вебинар 8. Разделение кода. 03.07.20","url":"https://www.youtube.com/watch?v=Godm6Ib4FYI"},{"title":"Вебинар 9. Основы Redux. 14.07.20","url":"https://www.youtube.com/watch?v=5G-dG__cS0o"},{"title":"Вебинар 10 - Библиотека Redux Toolkit. 17.07.20","url":"https://www.youtube.com/watch?v=DPk3jLTrPV8"},{"title":"Вебинар 11 - Асинхронный Redux. 21.07.20","url":"https://www.youtube.com/watch?v=4V0mgp6r2ps"},{"title":"Вебинар 12 - Селекторы и библиотека Reselect. 24.07.20","url":"https://www.youtube.com/watch?v=IR5C1CwF8ZI"},{"title":"Вебинар 13 - Регистрация и логин пользователя. 28.07.20","url":"https://www.youtube.com/watch?v=yY6HongRdMI"},{"title":"Вебинар 14 - Регистрация и логин пользователя. 31.07.20","url":"https://www.youtube.com/watch?v=9CajsD0mo_g"},{"title":"Вебинар 12.08.20","url":"https://www.youtube.com/watch?v=GQoPaL1BgaM"},{"title":"Вебинар 16. 19.08.20","url":"https://www.youtube.com/watch?v=9aA1oUJBZgY"},{"title":"Question-Answer. 26/08/20","url":"https://www.youtube.com/watch?v=BzlzG00SBWY"},{"title":"Компоненты и коллекции (23.11)","url":"https://www.youtube.com/watch?v=kfX5HTQD26E"},{"title":"Вопрос-ответ. (04.12.20)","url":"https://www.youtube.com/watch?v=t43QFSC0j9E"},{"title":"Занятие 2 Стилизация компонент. (25.11.20)","url":"https://www.youtube.com/watch?v=qVTTrMo7dMM"},{"title":"Занятие 6 - HTTP запросы. (09.12.2020)","url":"https://www.youtube.com/watch?v=xoG3l2PgiYY"},{"title":"Хуки часть 1. 14.12.20","url":"https://www.youtube.com/watch?v=S1NrJZscSrc"},{"title":"Хуки часть 2. 16.12.2020","url":"https://www.youtube.com/watch?v=KslUxJrXY3Y"},{"title":"Занятие 9 - React Router. 21.12.2020","url":"https://www.youtube.com/watch?v=IY_btZ2pYpw"},{"title":"Занятие 10 - Разделение кода. 23.12.20","url":"https://www.youtube.com/watch?v=MV5VRijYfxw"},{"title":"Занятие 11 - Дополнительное занятие 28.12.20","url":"https://www.youtube.com/watch?v=-DZCq-TUlKE"},{"title":"Занятие 11 Основы Redux. 11.01.21","url":"https://www.youtube.com/watch?v=5-feoNB3HBI"},{"title":"Занятие React-redux хуки. 13.01.21","url":"https://www.youtube.com/watch?v=4mtmkr2_jUI"},{"title":"Занятие 13 - Асинхронный Redux. (18.01.21)","url":"https://www.youtube.com/watch?v=wprYz1i5MI0"},{"title":"Занятие 14 - Нормализация состояния.20.01.21","url":"https://www.youtube.com/watch?v=F7kxQWemOVw"},{"title":"Занятие 15. Работа с пользователями часть1. 25.01.21","url":"https://www.youtube.com/watch?v=ZvfcVZcZUEY"},{"title":"Занятие 15. Работа с пользователями часть2. 28.01.21","url":"https://www.youtube.com/watch?v=nve1tVdc2W0"}],"materials":[{"title":"react-homeworks","url":"https://github.com/goitacademy/react-homework"},{"title":"lesson code","url":"https://github.com/luxplanjay/react-21-22/tree/main"}]}');

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["igKGj","8lqZg"], "8lqZg", "parcelRequirea1e1")

//# sourceMappingURL=git.975ef6c8.js.map

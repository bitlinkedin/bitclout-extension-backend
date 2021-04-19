"use strict";
exports.__esModule = true;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Welcome_1 = require("./pages/Welcome");
var Terms_1 = require("./pages/Terms");
var Register_1 = require("./pages/Register");
require("./assets/fleming.less");
var i18n_context_1 = require("./contexts/i18n.context");
var react_1 = require("react");
var App = function () {
    var _a = react_1.useState(localStorage.getItem('language') || 'en'), lang = _a[0], setLang = _a[1];
    var i18n = react_1.useContext(i18n_context_1.i18nContext);
    var translate = function (key) {
        if (lang === 'en') {
            return i18n.langEN[key];
        }
        else {
            return i18n.langAr[key];
        }
    };
    return (<i18n_context_1.i18nContext.Provider value={{ lang: lang, setLang: setLang, translate: translate }}>
      <react_router_dom_1.BrowserRouter>
        <react_router_dom_1.Switch>
          <react_router_dom_1.Route exact path="/" component={Welcome_1["default"]}/>
          <react_router_dom_1.Route exact path="/terms" component={Terms_1["default"]}/>
          <react_router_dom_1.Route exact path="/register" component={Register_1["default"]}/>
        </react_router_dom_1.Switch>
      </react_router_dom_1.BrowserRouter>
    </i18n_context_1.i18nContext.Provider>);
};
exports["default"] = App;

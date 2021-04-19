"use strict";
exports.__esModule = true;
var React = require("react");
var Input = function (_a) {
    var value = _a.value, label = _a.label, type = _a.type;
    if (type === 'textarea') {
        return (<div className="form__group" style={{ marginTop: '3rem' }}>
        <textarea id="valHotelDesc" className="form__field" placeholder="Your Message" rows={6} value={value}/>
        <label htmlFor="message" dir="ltr" className="form__label" id="description">
          {label}
        </label>
      </div>);
    }
    return (<div className="container_text" style={{ marginTop: '2rem' }}>
      <div className="material-textfield">
        <input placeholder=" " dir="rtl" type={type} required className="textbox_input" id="valHotelNameAr" value={value}/>
        <label style={{ fontWeight: 'bold' }} className="textbox_label" id="hotelNameArabic">
          {label}
        </label>
      </div>
    </div>);
};
exports["default"] = Input;

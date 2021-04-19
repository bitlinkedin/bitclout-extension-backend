"use strict";
exports.__esModule = true;
var React = require("react");
var icon_content_add_box_svg_1 = require("../assets/icon_content_add_box.svg");
var Button = function (_a) {
    var text = _a.text, onClick = _a.onClick, type = _a.type, fullWidth = _a.fullWidth, withIcon = _a.withIcon;
    var styles = {
        style: {
            padding: '1rem',
            borderRadius: '10px',
            marginTop: '5rem'
        }
    };
    if (fullWidth) {
        styles.style.width = '100%';
    }
    // primary
    if (type === 'primary') {
        return (<button className="button-primary" onClick={onClick}>
        {withIcon && <span>
            <icon_content_add_box_svg_1["default"] />
        </span>}
        {text}
      </button>);
    }
    return (<div style={{ textAlign: 'center' }}>
      <button type="button" className="btn btn-outline-dark reg_btn" onClick={onClick} id="register" {...styles}>
        {text}
      </button>
    </div>);
};
exports["default"] = Button;

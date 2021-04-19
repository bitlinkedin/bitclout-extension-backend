"use strict";
exports.__esModule = true;
var React = require("react");
var Section = function (_a) {
    var title = _a.title, description = _a.description;
    return (<>
      <h4 className="page-header" style={{ marginTop: '3rem', color: '#40AAA4' }} id="hotelDetails">
        {title}
      </h4>
      <hr style={{
            backgroundColor: '#40AAA4',
            marginTop: '0.5rem',
            marginRight: '25rem',
            borderWidth: '0.2rem'
        }}/>
      {description && <span className="page-header-description">{description}</span>}
    </>);
};
exports["default"] = Section;

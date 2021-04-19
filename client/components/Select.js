"use strict";
exports.__esModule = true;
var React = require("react");
var Select = function (_a) {
    var value = _a.value, label = _a.label, options = _a.options;
    return (<div className="form-group">
      <select style={{ marginTop: '0.5rem' }} required id="govVal" value={value}>
        {options &&
            options.map(function (option) { return <option value={option}>{option}</option>; })}
      </select>
      <label htmlFor="govVal" className="control-label" id="gov">
        {label}
      </label>
      <i className="bar"/>
    </div>);
};
exports["default"] = Select;

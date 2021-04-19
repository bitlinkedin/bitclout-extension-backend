import * as React from 'react';
import { useEffect, useState } from 'react';

const Select = ({ value, label, options, onChange }) => {
  const [state, setState] = useState<any>({});

  useEffect(() => {
    setState({ value, label, options, onChange });
  }, [value, label, options]);
  return (
    <div className="form-group">
      <select
        style={{ marginTop: '0.5rem' }}
        required
        id="govVal"
        onChange={e => state.onChange(e.target.value)}
        value={state.value}
      >
        {state.options &&
          state.options.map((option, index) => (
            <option value={option} key={index}>{option}</option>
          ))}
      </select>
      <label htmlFor="govVal" className="control-label" id="gov">
        {state.label}
      </label>
      <i className="bar" />
    </div>
  );
};

export default Select;

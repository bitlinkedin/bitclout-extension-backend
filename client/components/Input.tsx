import * as React from 'react';

const Input = ({
  value,
  label,
  type,
  direction,
  onInput,
}: {
  value: any;
  label: string;
  type?: string;
  direction?: boolean;
  onInput?: any;
}) => {
  if (type === 'textarea') {
    return (
      <div className="form__group" style={{ marginTop: '3rem' }}>
        <textarea
          id="valHotelDesc"
          className="form__field"
          placeholder="Your Message"
          dir={direction ? 'rtl' : ''}
          rows={6}
          value={value}
          onChange={(e) => onInput(e.target.value)}
        />
        <label
          htmlFor="message"
          dir="ltr"
          className="form__label"
          id="description"
        >
          {label}
        </label>
      </div>
    );
  }
  return (
    <div className="container_text" style={{ marginTop: '2rem' }}>
      <div className="material-textfield">
        <input
          placeholder=" "
          dir={direction ? 'rtl' : ''}
          type={type}
          required
          onChange={(e) =>
            onInput(
              type === 'number'
                ? e.target.value.replace(/\D/, '')
                : e.target.value,
            )
          }
          className="textbox_input"
          value={value}
        />
        <label
          style={{ fontWeight: 'bold' }}
          className="textbox_label"
        >
          {label}
        </label>
      </div>
    </div>
  );
};

Input.defaultProps = {
  onInput: (value) => {},
};

export default Input;

import * as React from 'react';

const Button = ({
                  text,
                  onClick,
                  type,
                  fullWidth,
                  withIcon,
                }: {
  text: string;
  onClick: any;
  type?: string;
  fullWidth?: boolean;
  withIcon?: boolean;
}) => {
  const styles: any = {
    style: {},
  };

  if (type !== 'primary') {
    styles.style = {
      padding: '1rem',
      borderRadius: '10px',
      marginTop: '5rem',
    };
  }

  if (fullWidth) {
    styles.style.width = '100%';
  }
  // primary

  if (type === 'primary') {
    return (
      <button className="button-primary" onClick={onClick} {...styles}>
        {withIcon && (
          <span>
            <img src="../assets/icon_content_add_box.svg" />
          </span>
        )}
        {text}
      </button>
    );
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <button
        type="button"
        className="btn btn-outline-dark reg_btn"
        onClick={onClick}
        id="register"
        {...styles}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

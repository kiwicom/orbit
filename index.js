import * as React from "react";

const Button = Props => {
  console.log(Props);
  return React.createElement(
    'button',
    { onClick: Props.onClick, disabled: Props.disabled },
    Props.icon && React.createElement(Props.icon, { fill: Props.secondary ? '#46515e' : 'white', height: Props.size === 'normal' ? '20px' : Props.size === 'small' ? '20px' : '26px', width: '20px', style: { position: 'absolute', top: '50%', left: '12px', transform: 'translateY(-50%)' } }),
    Props.title,
    React.createElement(
      'style',
      { jsx: true },
      `
      button {
        opacity: ${Props.disabled ? '0.3' : '1'}
        cursor: ${Props.disabled ? 'default' : 'pointer'}
        background-color: ${Props.secondary ? '#e8edf1' : '#00a991'}
        color: ${Props.secondary ? '#46515e' : 'white'}
        border: none;
        border-radius: 3px;
        font-weight: 500;
        padding: ${Props.size === 'normal' ? '12px 16px' : Props.size === 'small' ? '8px 12px' : '14px 28px'};
        padding-left: ${Props.icon && '40px'}
        font-size: ${Props.size === 'large' ? '16px' : '14px'}
        position: relative;
      }
    `
    )
  );
};

export default Button;
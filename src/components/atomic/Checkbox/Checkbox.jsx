import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.scss';

const Checkbox = ({ id, label, value, name, classes, disabled, ...otherProps }) => (
  <div className={`usa-checkbox ${classes}`}>
    <input
      id={id}
      className="usa-checkbox__input"
      type="checkbox"
      name={name}
      value={value ? value : id}
      disabled={disabled || false}
      {...otherProps}
    />
    <label className="usa-checkbox__label" htmlFor={id}>
      {label}
    </label>
  </div>
);

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  classes: PropTypes.string,
};

Checkbox.defaultProps = {
  classes: '',
  defaultChecked: false,
  name: 'checkboxes',
};

export default Checkbox;

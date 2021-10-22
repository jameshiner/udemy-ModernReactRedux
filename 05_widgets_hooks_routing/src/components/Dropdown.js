import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, fieldLabel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      // use a ref to the top level dropdown element, check if the click was in the dropdown
      // if so we dont need to do anything in the body listener
      if (ref.current.contains(event.target)) {
        return;
      }
      setIsOpen(false);
    };

    // because this was set up with addEventListener and not in react
    // this event handler gets called first
    // this will set isOpen to false BEFORE the event listeners on the dropdowns do anything
    // then isOpen will be flipped back to true no matter what is supposed to happen
    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []); //empty array because this only needs to run on the first render of this component

  const renderedOptions = options.map((option) => {
    // remove the currently selected value from the drop down
    // i really dont like this so im leaving it out
    // if (option.value === selected.value) {
    //   return null;
    // }

    return (
      <div
        className={`item ${
          option.value === selected.value ? 'active selected' : ''
        }`}
        key={option.value}
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    // ref stores a reference to the dom element after it is rendered
    // element is stored on ref.current
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{fieldLabel}</label>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={`ui selection dropdown ${isOpen ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${isOpen ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

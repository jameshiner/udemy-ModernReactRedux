import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const Translate = (props) => {
  const options = [
    {
      label: 'Afrikaans',
      value: 'af',
    },
    {
      label: 'Arabic',
      value: 'ar',
    },
    {
      label: 'Hindi',
      value: 'hi',
    },
    {
      label: 'Spanish',
      value: 'es',
    },
  ];
  const [selectedLanguage, setSeletedLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>
      <Dropdown
        options={options}
        fieldLabel="Select a Language"
        selected={selectedLanguage}
        onSelectedChange={setSeletedLanguage}
      ></Dropdown>
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={selectedLanguage} />
    </div>
  );
};

export default Translate;

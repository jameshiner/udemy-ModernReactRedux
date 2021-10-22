import React, { useState, useEffect } from 'react';
import axios from 'axios';
import gtranslate from '../keys/gtranslate';

const Convert = ({ text, language }) => {
  const [translation, setTranslation] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  useEffect(() => {
    const getTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: gtranslate.access,
          },
        },
      );

      if (debouncedText && language) {
        setTranslation(data.data.translations[0].translatedText);
      }
    };

    getTranslation();
  }, [debouncedText, language]);

  return <h1 className="ui header">{translation}</h1>;
};

export default Convert;

import React, { useState } from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const App = () => {
  const items = [
    {
      title: 'What is React?',
      content: 'React is a frontend javascript framework',
    },
    {
      title: 'Why use React?',
      content: 'React is a favorite JS library among engineers',
    },
    {
      title: 'How do you use React?',
      content: 'React is used by creating components',
    },
  ];

  const options = [
    {
      label: 'Red',
      value: 'red',
    },
    {
      label: 'Green',
      value: 'green',
    },
    {
      label: 'Blue',
      value: 'blue',
    },
  ];

  const [selected, setSelected] = useState(options[0]);
  // const showAccordion = () => {
  //   if (window.location.pathname === '/') {
  //     return <Accordion items={items} />;
  //   }
  // };
  // const showDropdown = () => {
  //   if (window.location.pathname === '/dropdown') {
  //     return (
  //       <Dropdown
  //         options={options}
  //         fieldLabel="Select a Color!"
  //         selected={selected}
  //         onSelectedChange={setSelected}
  //       />
  //     );
  //   }
  // };
  // const showSearch = () => {
  //   if (window.location.pathname === '/search') {
  //     return <Search />;
  //   }
  // };
  // const showTranslate = () => {
  //   if (window.location.pathname === '/translate') {
  //     return <Translate />;
  //   }
  // };

  return (
    <div>
      <Header></Header>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          fieldLabel="Select a Color!"
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;

import React from 'react';

const App = () => {
  const arr = ['Austria', 'Belgium', 'Canada'];

  return (
    <div>
      {arr.map((element, key) => {
        return (
          <React.Fragment key={key}>
            <h2>key: {key}</h2>
            <h2>element: {element}</h2>
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default App;

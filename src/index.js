import React from 'react';
import ReactDOM from 'react-dom'; // only in this file
// allows us to hook our react application to our index.html

import App from './App';
import './index.css';  // allows usage of the css variables anywhere in the code.

ReactDOM.render(<App />, document.getElementById('root'));
// render application as a component by saying doc.....
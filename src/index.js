import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import './style.less';
import CardContainer from './components/IssueView';
import Filters from './components/Filters';


const App = (
  <div>
    <Filters />
    <CardContainer />
  </div>
);

ReactDOM.render(App, document.getElementById('main'));

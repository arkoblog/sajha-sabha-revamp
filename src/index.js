import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import './style.less';
import CardContainer from './components/IssueView';
// import Filters from './components/Filters';
import FilterWrapper from './components/FilterWrapper';


const App = (
  <div>
    <FilterWrapper >
      <CardContainer />
    </FilterWrapper>
  </div>
);

ReactDOM.render(App, document.getElementById('main'));

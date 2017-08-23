import React, { Component } from 'react';
import $ from 'jquery';
import MultiSelect from './MultiSelect';
import SingleSelect from './SingleSelect';


import '../filter-wrapper.scss';

const options = [
  { value: 'Health', label: 'Health' },
  { value: 'Agriculture', label: 'Agriculture' },
  { value: 'Education', label: 'Education' },
  { value: 'Others', label: 'Others' },
  { value: 'No category assigned yet', label: 'No category assigned yet' },
  { value: 'Disaster Risk Reduction', label: 'Disaster Risk Reduction' },
];

const statuses = [
  { value: 'Submitted', label: 'Submitted' },
  { value: 'In Process', label: 'In Process' },
  { value: 'Resolved', label: 'Resolved' },
  { value: 'Dropped', label: 'Dropped' },
];
  // /* eslint-disable*/
class FilterWrapper extends Component {
  componentDidMount() {
    $('#togglebutton').click(() => {
      if ($(window).width() > 500) { // your chosen mobile res
        $('.text').toggle(300);
      } else {
        $('.menu').animate({
          width: 'toggle',
        }, 350);
      }
    });
  }


// /*eslint-disable*/
  render() {
    return (
      <div className="wrapper">
        <div className="menu">
          <div className="white-bg text row">
            <div className="col-md-12 ">
              <div className="row-fluid no-padding no-margin">
                <div className="col-md-12 no-margin ">
                  <strong>FILTERS</strong>
                </div>
              </div>
              <div className="row-fluid ">
                <div className="col-md-12 no-margin-top " style={{ display: 'inline-block' }}>
                  <small className="uppercase">Category</small>
                  <i className="fa fa-info-circle " style={{ paddingLeft: 5, marginTop: 8, marginRight: 2 }} title="What does the category filter mean?" />
                  <MultiSelect placeholder="No category selected"options={options} />
                </div>
                <div className="col-md-12 " style={{ display: 'inline-block' }}>
                  <small className="uppercase">Status</small>
                  <i className="fa fa-info-circle " style={{ paddingLeft: 5, marginTop: 8, marginRight: 2 }} title="What does the Status filter mean?" />
                  <MultiSelect placeholder="Click here" options={statuses} />
                </div>
              </div>
            </div>

            <div className="col-md-12 ">

              <div className="row-fluid ">
                <div className="col-md-12" style={{ display: 'inline-block' }}>
                  <small className="uppercase">Time Period</small>
                  <i className="fa fa-info-circle " style={{ paddingLeft: 5, marginTop: 8, marginRight: 2 }} title="What does the time period filter mean?" />
                  <SingleSelect placeholder="Click here" options={statuses} />
                </div>
                <div className="col-md-12" style={{ display: 'inline-block' }}>
                  <small className="uppercase">District</small>
                  <i className="fa fa-info-circle " style={{ paddingLeft: 5, marginTop: 8, marginRight: 2 }} title="What does the district filter mean?" />
                  <SingleSelect placeholder="Click here"options={options} />
                </div>
                <div className="col-md-12 " style={{ display: 'inline-block' }}>
                  <small className="uppercase">GaPa/NaPa</small>
                  <i className="fa fa-info-circle " style={{ paddingLeft: 5, marginTop: 8, marginRight: 2 }} title="What does the municipality filter mean?" />
                  <SingleSelect placeholder="Click here"options={statuses} />
                </div>

                <div className="col-md-12" style={{ display: 'inline-block' }}>
                  <small className="uppercase">Ward</small>
                  <i className="fa fa-info-circle " style={{ paddingLeft: 5, marginTop: 8, marginRight: 2 }} title="What does the ward filter mean?" />
                  <SingleSelect placeholder="Click here"options={options} />
                </div>
              </div>
            </div>


          </div>


        </div>
        <div className="content">
          <button id="togglebutton">&#9776;</button>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default FilterWrapper;

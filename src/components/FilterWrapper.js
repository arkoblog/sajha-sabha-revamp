import React, { Component } from 'react';
import $ from 'jquery';
import MultiSelect from './MultiSelect';
import SingleSelect from './SingleSelect';


import '../filter-wrapper.scss';
import '../hamburgers.scss';

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

  constructor(props) {
    super(props);

    this.onToggleClick = this.onToggleClick.bind(this);

    this.state = {
      isExpanded: true,
      toggleClass: 'hamburger hamburger--collapse is-active',
    };
  }

  componentDidMount() {
    $('#togglebutton').click(() => {
      if ($(window).width() > 100) { // your chosen mobile res
        $('.text').toggle(300);
      } else {
        $('.menu').animate({
          width: 'toggle',
        }, 350);
      }
    });
  }

  onToggleClick() {
    const expanded = this.state.isExpanded;

    this.setState({
      isExpanded: !expanded,
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
              <div className="row-fluid  ">
                <div className="col-md-12  no-margin-top  ">
                  <small className="uppercase">Category</small>
                  <i className="fa fa-info-circle " style={{ paddingLeft: 5, marginTop: 8, marginRight: 2 }} title="What does the category filter mean?" />
                  <MultiSelect className="on-top" placeholder="No category selected"options={options} />
                </div>
                <div className="col-md-12  " style={{ display: 'inline-block' }}>
                  <small className="uppercase">Status</small>
                  <i className="fa fa-info-circle " style={{ paddingLeft: 5, marginTop: 8, marginRight: 2 }} title="What does the Status filter mean?" />
                  <MultiSelect className="on-top" placeholder="Click here" options={statuses} />
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
          <div className="row">
            <div className="col-md-12 border-bottom">
              <button id="togglebutton" onClick={this.onToggleClick} className={this.state.isExpanded ? 'hamburger hamburger--spin is-active' : 'hamburger hamburger--spin'} type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
                {this.state.isExpanded && <span className="toggle-text">HIDE FILTERS</span>}
                {!this.state.isExpanded && <span className="toggle-text">SHOW FILTERS</span>}
              </button>
            </div>
          </div>
          <div className={this.state.isExpanded ? 'scroll-y low-opacity' : 'scroll-y full-opacity'}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

// <button id="togglebutton">&#9776;</button>
export default FilterWrapper;

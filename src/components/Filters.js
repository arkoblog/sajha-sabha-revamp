import React, { Component } from 'react';
// import Select from 'react-select';
import { Collapse } from 'react-collapse';
import MultiSelect from './MultiSelect';
import SingleSelect from './SingleSelect';

const options = [
  { value: 'Health', label: 'Health' },
  { value: 'Agriculture', label: 'Agriculture' },
  { value: 'Education', label: 'Education' },
  { value: 'Disaster Risk Reduction', label: 'Disaster Risk Reduction' },
  { value: 'Others', label: 'Others' },
  { value: 'No category assigned yet', label: 'No category assigned yet' },
];

const statuses = [
  { value: 'Submitted', label: 'Submitted' },
  { value: 'In Process', label: 'In Process' },
  { value: 'Resolved', label: 'Resolved' },
  { value: 'Dropped', label: 'Dropped' },
];


class Filters extends Component {
  constructor(props) {
    super(props);

    console.log('Values');

    this.state = {
      message: 'Hide Filters',
      collapsed: true,
    };

    this.onToggleClick = this.onToggleClick.bind(this);
  }

  onToggleClick() {
    const isCollapsed = this.state.collapsed;
    if (this.state.collapsed) {
      this.setState({
        collapsed: !isCollapsed,
        message: 'Filters have been applied. Click here to show.',
      });
    } else {
      this.setState({
        collapsed: !isCollapsed,
        message: 'Hide Filters.',
      });
    }
  }

  getArrowClass() {
    if (this.state.collapsed) {
      return 'fa fa-angle-up larger pull-right';
    }
    return 'fa fa-angle-down larger pull-right';
  }

  render() {
    return (
      /*eslint-disable*/

      <div className="row-fluid">
        <div className="col-md-12">
          <div className="white-bg row">

            <div className="col-md-5 ">
              <Collapse isOpened={this.state.collapsed}>
                <div className="row-fluid ">
                  <div className="col-md-6 " style={{ display: 'inline-block' }}>
                    <small className="uppercase">Category</small>
                    <i className="fa fa-info-circle " style={{ paddingLeft: 5, marginTop: 8, marginRight: 2 }} title="What does the category filter mean?" />
                    <MultiSelect placeholder="No category selected"options={options} />
                  </div>
                  <div className="col-md-6 " style={{ display: 'inline-block' }}>
                    <small className="uppercase">Status</small>
                    <i className="fa fa-info-circle " style={{ paddingLeft: 5, marginTop: 8, marginRight: 2 }} title="What does the Status filter mean?" />
                    <MultiSelect placeholder="Click here" options={statuses} />
                  </div>
                </div>
              </Collapse>
            </div>

            <div className="col-md-7 no-padding-left">
              <Collapse isOpened={this.state.collapsed} springConfig={{ stiffness: 100, damping: 20 }}>

                <div className="row-fluid ">
                  <div className="col-md-3  no-padding-left" style={{ display: 'inline-block' }}>
                    <small className="uppercase">Time Period</small>
                    <i className="fa fa-info-circle " style={{ paddingLeft: 5, marginTop: 8, marginRight: 2 }} title="What does the time period filter mean?" />
                    <SingleSelect placeholder="Click here" options={statuses} />
                  </div>
                  <div className="col-md-3" style={{ display: 'inline-block' }}>
                    <small className="uppercase">District</small>
                    <i className="fa fa-info-circle " style={{ paddingLeft: 5, marginTop: 8, marginRight: 2 }} title="What does the district filter mean?" />
                    <SingleSelect placeholder="Click here"options={options} />
                  </div>
                  <div className="col-md-3 " style={{ display: 'inline-block' }}>
                    <small className="uppercase">GaPa/NaPa</small>
                    <i className="fa fa-info-circle " style={{ paddingLeft: 5, marginTop: 8, marginRight: 2 }} title="What does the municipality filter mean?" />
                    <SingleSelect placeholder="Click here"options={statuses} />
                  </div>

                  <div className="col-md-3 " style={{ display: 'inline-block' }}>
                    <small className="uppercase">Ward</small>
                    <i className="fa fa-info-circle " style={{ paddingLeft: 5, marginTop: 8, marginRight: 2 }} title="What does the ward filter mean?" />
                    <SingleSelect placeholder="Click here"options={options} />
                  </div>
                </div>
              </Collapse>
            </div>

            <div className="col-md-12 text-center padding-small special" onClick={this.onToggleClick} >

                  <a className="" onClick={this.onToggleClick}><small><span className="message">{this.state.message.toUpperCase()}</span></small> <i className={this.getArrowClass()} style={{ paddingRight: 10, marginTop:-12 }} aria-hidden="true"></i></a>

            </div>

          </div>


        </div>
      </div>
    );
  }
}

export default Filters;

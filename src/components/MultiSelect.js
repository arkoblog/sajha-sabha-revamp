import React, { Component } from 'react';
import Select from 'react-select';
import _ from 'lodash';

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);

    console.log('Values');

    this.state = {
      value: _.map(this.props.options, 'value'),
    };
  }

  handleSelectChange(value) {
    console.log('You\'ve selected:', value);
    this.setState({ value });
  }

  render() {
    return (
      <Select
        name="form-field-name"
        className="multi-select"
        simpleValue
        value={this.state.value}
        placeholder={this.props.placeholder}
        multi
        delimiter=","
        onChange={this.handleSelectChange}
        options={this.props.options}
      />
    );
  }
}

export default MultiSelect;

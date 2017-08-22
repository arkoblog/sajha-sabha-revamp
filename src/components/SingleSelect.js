import React, { Component } from 'react';
import Select from 'react-select';

class SingleSelect extends Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);


    this.state = {
      value: this.props.options[0].value,
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
        clearable={false}
        value={this.state.value}
        placeholder={this.props.placeholder}
        delimiter=","
        onChange={this.handleSelectChange}
        options={this.props.options}
      />
    );
  }
}

export default SingleSelect;

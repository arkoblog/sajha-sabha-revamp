import React, { Component } from 'react';
import Select from 'react-select';
import _ from 'lodash';

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);

    console.log('Values');

    this.state = {
      focus: false,
      value: _.map(this.props.options, 'value'),
    };
  }

  handleFocus(e) {
    const isFocused = this.state.focus;
    this.setState({
      focus: !isFocused,
    });
  }

  handleSelectChange(value) {
    console.log('You\'ve selected:', value);
    this.setState({ value });
  }

  render() {
    return (
      <Select
        name="form-field-name"
        className={this.state.focus ? 'on-top-2' : 'on-top'}
        simpleValue
        onFocus={this.handleFocus}
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

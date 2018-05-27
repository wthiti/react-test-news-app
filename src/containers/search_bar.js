import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { inputSearchTerm } from '../actions/index';
import { FormControl, InputGroup } from 'react-bootstrap';
import FaSearch from 'react-icons/lib/fa/search';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onKeyEnter = this.onKeyEnter.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onBlur(event) {
    this.props.inputSearchTerm(event.target.value);
  }

  onKeyEnter(event) {
    if(event.key === 'Enter') {
      this.props.inputSearchTerm(event.target.value);
    }
  }

  render() {
    return (
      <InputGroup>
        <InputGroup.Addon><FaSearch /></InputGroup.Addon>
        <FormControl
          type='text'
          placeholder = 'Search'
          value = {this.state.term}
          onChange = {this.onInputChange}
          onBlur = {this.onBlur}
          onKeyPress = {this.onKeyEnter}
        />
      </InputGroup>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ inputSearchTerm }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

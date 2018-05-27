import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../actions/index';
import { Button } from 'react-bootstrap';

class LoadButton extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.props.fetchNews(this.props.currentFetch + 1);
  }

  render() {
    return (
      <Button bsSize='large' onClick={this.onClick} block>
        Load More
      </Button>
    )
  }

}

function mapStateToProps({ news }) {
  return { currentFetch: news.currentFetch };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadButton);

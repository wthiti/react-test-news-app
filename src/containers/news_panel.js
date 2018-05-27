import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../actions/index';
import { Grid, Row, Col } from 'react-bootstrap';

import NewsBlock from '../components/news_block';
import LoadButton from './load_button';

class NewsPanel extends Component {
  componentDidMount() {
    this.props.fetchNews(1);
  }

  renderNewsList(news) {
    const {id, image, title, text, updated} = news

    return (
      <Col xs={12} md={4} key={id}>
        <NewsBlock
          image = {image}
          title = {title}
          text = {text}
          updated = {updated}
        />
      </Col>
    );
  }

  render() {
    if (!this.props.newsList) {
      return <div></div>;
    }

    return (
      <Grid>
        <Row>
          {this.props.newsList.map(news => this.renderNewsList(news))}
          <Col xs={12} md={12}>
            <LoadButton />
          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps({ news }) {
  return { newsList: news.list };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPanel);

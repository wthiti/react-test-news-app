import React, { Component } from 'react';

import Header from './containers/header.js';
import Footer from './components/footer.js';

import NewsPanel from './containers/news_panel';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NewsPanel />
        <Footer />
      </div>
    );
  }
}

export default App;

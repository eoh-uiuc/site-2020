import React, { Component } from 'react';

import Error from 'scenes/Error';

class AnimatedRedirect extends Component {
  constructor() {
    super();
    this.state = {
      dots: 0,
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        dots: (prevState.dots + 1) % 4
      }));
    }, 350);
  }

  componentWillUnmount() {
    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  render() {
    const { dots } = this.state;
    const dotString = '.'.repeat(dots);
    return <Error message={`Redirecting${dotString}`} />;
  }
}

const ExternalRoute = location => () => {
  window.location.replace(location);
  return <AnimatedRedirect />;
};

export default ExternalRoute;
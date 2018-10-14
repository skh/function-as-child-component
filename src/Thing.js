import React from 'react';

class Thing extends React.Component {
  render() {
    return (
      <code>
        <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre>
      </code>
    );
  }
}

export default Thing;
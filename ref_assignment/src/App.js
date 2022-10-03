import React from 'react';
export default class App extends React.Component {
  state = {
  value: ''
}
handleSubmit = e => {
  e.preventDefault();
  this.setState({ value: this.textInput.value})
};

render() {
  return (
    <div>
      <h1>React Ref - Callback Ref</h1>
      <h3>Value: {this.state.value}</h3>
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={e => this.textInput = e} />
        <button>Submit</button>
      </form>
    </div>
  );
}
}
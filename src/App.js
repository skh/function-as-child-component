import React from "react";
import ReactDOM from "react-dom";
import WithSomething from "./WithSomething";
import Thing from "./Thing";

class App extends React.Component {
  // The user of WithSomething has to know
  // a) that it wants a function as child component
  // b) what parameters are passed to the function
  render() {
    return (
      <div>
        <WithSomething>
          {(args) => (
            <div>
              <p>
                No knowledge about arguments, all are
                passed along:
              </p>
              <Thing args={args} />
            </div>
          )}
        </WithSomething>
        <WithSomething>
          {({a}) => (
            <div>
              <p>Pick a specific argument and pass it along:</p>
              <Thing a={a} />
            </div>
          )}
        </WithSomething>
      </div>
    ); 
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
// This thing doesn't even know that it is part of 
// a React application, but it does know that it gets
// children passed in as part of the argument object,
// and that this is a function. That this function is called
// "children" and can't be freely named is the only hint that
// this is happening in React.

const WithSomething = ({ children }) => {
  return children({a: 42});
}

export default WithSomething;
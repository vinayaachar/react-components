// TODO

var App = () => {
  return (
    <div>
      <h2>Grocery ToDo List</h2>
      <Milk />
      <Bread />
    </div>
  )
}

var Milk = () => {
  return (
    <div>Milk</div>
  )
}

var Bread = () => {
  return (
    <div>Bread</div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));
// TODO

var App = () => {
  return (
    <div>
      <h2>Grocery ToDo List</h2>
      <GroceryListItem todos = {['milk', 'bread', 'cheese']}/>
    </div>
  )
}

// var Milk = () => {
//   return (
//     <div>Milk</div>
//   )
// }

// var Bread = () => {
//   return (
//     <div>Bread</div>
//   )
// }

var GroceryListItem = (props) => (
  <ul>
    <li>{props.todos[0]}</li>
    <li>{props.todos[1]}</li>
    <li>{props.todos[2]}</li>
  </ul>
);

ReactDOM.render(<App />, document.getElementById("app"));
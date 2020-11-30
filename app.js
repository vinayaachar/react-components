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

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li>{this.props.todos[0]}</li>
        <li>{this.props.todos[1]}</li>
        <li>{this.props.todos[2]}</li>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
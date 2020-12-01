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

      //maintain a state for items hovered
    this.state = {
      done: false
    };
  }

  onListHovered() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      fontWeight : this.state.done? 'bold' : 'normal'
    };

    return (
      <ul>
        <li style={style} onMouseOver={this.onListHovered.bind(this)}>{this.props.todos[0]}</li>
        <li style={style} onMouseOver={this.onListHovered.bind(this)}>{this.props.todos[1]}</li>
        <li style={style} onMouseOver={this.onListHovered.bind(this)}>{this.props.todos[2]}</li>
      </ul>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
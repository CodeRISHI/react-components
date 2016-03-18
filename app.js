// TODO
var GroceryListApp = () => (
  <div>
    <h2 />Arun's Grocery List
    <GroceryList groceries={['Bread', 'Milk', 'Peanut Butter', 'Cookies', 'Apples']}/>
  </div>
);

// var Bread = () => (
//   <div>
//     <li><h5>Bread</h5></li>
//   </div>
// );

// var Milk = () => (
//   <div>
//     <li><h5>Milk</h5></li>
//   </div>
// );

// var GroceryList = (props) => {
//   var onListItemClick = (event) => {
//     console.log('I got clicked!');
//   };
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.groceries[0]}</li>
//       <li onClick={onListItemClick}>{props.groceries[1]}</li>
//       <li onClick={onListItemClick}>{props.groceries[2]}</li>
//       <li onClick={onListItemClick}>{props.groceries[3]}</li>
//       <li onClick={onListItemClick}>{props.groceries[4]}</li>
//     </ul>
//   );
// };

var GroceryList = (props) => {
  // var onListItemClick = (event) => {
  //   console.log('I got clicked!');
  // };
  return (
    <ul>
      {props.groceries.map(grocery => 
        <GroceryListItem grocery={grocery} />
      )}
    </ul>
  );
};

class GroceryListItem extends React.Component {
  //constructor
  constructor(props) {
    super(props);
    
    //state
    this.state = {
      done: false,
      hover: false
    };
  }
  
  //click
  onListItemClick() {
    console.log('you clicked me');

    this.setState({
      done: !this.state.done
    });
  }

  //hover
  onListItemHover() {
    console.log('hovering...');

    this.setState({
      hover: !this.state.hover
    });
  }

  //render each element
  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 600 : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.grocery}</li>
    )
  }
};


//Render
ReactDOM.render(<GroceryListApp />, document.getElementById('app'));


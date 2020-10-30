function Repeat(props) {
  var items = [];
  for (var i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return React.createElement(
    'div',
    null,
    items
  );
}

function ListOfTenThings() {
  return React.createElement(
    Repeat,
    { numTimes: 10 },
    function (index) {
      return React.createElement(
        'div',
        { key: index },
        'This is item ',
        index,
        ' in the list'
      );
    }
  );
}

ReactDOM.render(React.createElement(ListOfTenThings, null), document.getElementById('root'));
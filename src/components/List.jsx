var React = require('react');
var ListItem = require('./ListItem.jsx');


var ingredients = [{"id":1,"text":"paties"},{"id":2, "text":"chesse"},{"id":3,"text":"tomato"}];


var List = React.createClass({
    render: function() {
      var listItems = ingredients.map(function(item){
        return <ListItem key={item.id} ingredients={item.text} />;
      });

      return (<ul>{listItems}</ul>);
    }
});


module.exports = List;

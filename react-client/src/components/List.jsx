import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Your Future </h4>
    There are { props.items.length } possible futures for you.
    { props.items.map(item => <ListItem item={item}/>)}
  </div>
)

export default List;

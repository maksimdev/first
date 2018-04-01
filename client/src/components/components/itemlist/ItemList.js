import React from 'react';

export default function(props) {

  return (
    <ul>
      {props.items.map(
        (item, id) =>
          <li key={id} className="service">
          {item.date}
          {item.service}
          </li>
      )}
    </ul>
  );
}

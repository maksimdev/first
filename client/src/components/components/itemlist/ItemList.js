import React from 'react';

export default function(props) {

  return (
    <ul>
      {props.items.map(
        (item, id) =>
          <li key={id} className="service">
            <span>Date: {item.date}</span><br />
            <span>Title: {item.service}</span><br />
            <span>Date of registration: {item.timestamp}</span><br />
            <button onClick={() => props.undo(item._id, id)}>Undo recording</button>
          </li>
      )}
    </ul>
  );
}

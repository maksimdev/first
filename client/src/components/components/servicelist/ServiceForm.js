import React from 'react';

export default function(props) {
  return (
    <button onClick={() => props.delete('MAKS')}>Delete</button>
  );
}

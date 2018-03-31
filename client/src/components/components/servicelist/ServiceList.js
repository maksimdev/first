import React from 'react';

export default function(props) {

  return (
    <div className="data-list">
      {props.services.map((service, id) => {
        return (
          <div key={service.id} className="data-list-item">
            <div className="details">
              <p>{service.name} {service.description} {service.price}$</p>
              <button onClick={() => props.delete(id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

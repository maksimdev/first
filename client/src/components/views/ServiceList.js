import React from 'react';

export default function(props) {
  return (
    <div className="data-list">

      {props.services.map(service => {
        return (
          <div key={service.id} className="data-list-item">
            <div className="details">
              <p>{service.name} {service.description} {service.price}$</p>
            </div>
          </div>
        );
      })}

    </div>
  );
}

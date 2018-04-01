import React from 'react';

export default function(props) {

  return (
    <div className="data-list">
      {props.services.map((service, id) => {
        return (
          <div key={service.id} className="data-list-item">
            <div className="details">
              <p>{service.name} {service.time.toISOString()} {service.description} {service.price}$</p>
              <button onClick={() => props.enroll(new Date(service.time.toISOString()), service.name)}>Enroll</button>
              <button onClick={() => props.delete(id)}>Delete record</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

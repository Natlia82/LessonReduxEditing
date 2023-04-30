import React from 'react';

function ServiceList() {
    const items = [{id: 1, name: 'Замена стекла', price: "21000"},
               {id: 2, name: 'Замена дисплея', price: "25000"}];
    const handleRemove = id => {};
    return (
        <ul>
            {items.map(o => (
                <li key={o.id}>
                    {o.name} {o.price}
                    <button onClick={() =>handleRemove(o.id)}>✕</button>
                </li>
            ))}
        </ul>
        )
}
export default ServiceList;

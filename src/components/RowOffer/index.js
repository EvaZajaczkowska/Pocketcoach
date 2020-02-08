import React from 'react';
import './index.css';

function RowOffer(props) {
    return(
      <tr className="row">
          <th scope="row">{props.id}</th>
          <td>{props.date}</td>
          <td>{props.amount}</td>
          <td>{props.bid}</td>
      </tr>
    );
}

export default RowOffer;
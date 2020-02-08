import React from "react";
import "./index.css";

class Offers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: {}
    };
  }
  render() {
    const { offers } = this.state;

    return (
    <div className="container-fluid">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">DATE</th>
              <th scope="col">AMOUNT</th>
              <th scope="col">BID</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(offers).map(index => {
              return (
                <tr key={offers[index].id}>
                  <th scope="col">{offers[index].id}</th>
                  <th scope="col">{offers[index].date}</th>
                  <th scope="col">{offers[index].amount}</th>
                  <th scope="col">{offers[index].bid}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Offers;

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
      <div>
      Offers
      </div>
    );
  }
}

export default Offers;

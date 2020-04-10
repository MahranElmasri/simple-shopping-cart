import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../components/actions/addToCart";

class Home extends Component {
  handleClick = id => {
    console.log(id);
  };
  render() {
    const itemList = this.props.items.map(item => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.name} />
            <span
              to="/"
              onClick={() => {
                this.handleClick(item.id);
              }}
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <i className="material-icons">add</i>
            </span>
          </div>

          <div className="card-content">
            <span className="card-title">{item.title}</span>
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}€</b>
            </p>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <h3 className="center">Our items</h3>
        <div className="box grid-3">{itemList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};
export default connect(mapStateToProps)(Home);

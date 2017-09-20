import React, { Component } from 'react';

export default class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      numberofproperties: false,
    };
  }
  shouldComponentUpdate(nextProps, nextState){
    if (this.props.listinginventorydata !== nextProps.listinginventorydata || this.state.numberofproperties !== nextState.numberofproperties) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate(){
    if (this.props.listinginventorydata){
      let array = [];
      this.setState({ numberofproperties: this.props.listinginventorydata.products[0].property_values.length})
      this.props.listinginventorydata.products[0].property_values.map((x, i) => {
        this.setState(prevState => ({
          properties: [...prevState.properties, x.property_name]
        }))
      })
      // for (let i = 0; i < this.props.listinginventorydata.products.length; i++){
      //   let product = this.props.listinginventorydata.products[i];
      //   console.log(product)
      // }
      console.log(this.state);
    }
  }
  render(){
    let inventorySelects = [];
    // this.state.properties.map((x, i) => {
    //   x.replace(/ /g, "-");
    //   let newLabelClassName = x.replace(/ /g, "-");
    //   inventorySelects.push(
    //     <div>
    //       <label for= `${newLabelClassName}-drop-down-menu`>Quantity</label><br/>
    //       <select className = `${newLabelClassName}-drop-down-menu` placeholder="quantity">
    //       </select>
    //     </div>
    //   );
    // })
    for (let i = 0; i < this.properties; i++) {

    }
    // let options = this.state.properties.map((info, i) =>{
    //   console.log(info)
    //   console.log(i)
    //     return (
    //       <div className = "options-drop-down-wrapper">
    //         <label for= "quantity-drop-down">Quantity</label><br/>
    //             <select className = "quantity-drop-down" placeholder="quantity">
    //           </select>
    //     </div>
    //   )
    //   });
    return(
      <div className="productdescription">
        <h2>{this.props.listingdata.title}</h2>
        <div className = "item-price ask">
          <div><h3>${this.props.listingdata.price}</h3></div>
          <div><button className = "fav-heart"><strong>Ask a question</strong></button></div>
        </div>
        <div className = "options-drop-down-wrapper">
          <label for= "quantity-drop-down">Quantity</label><br/>
              <select className = "quantity-drop-down" placeholder="quantity">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
      </div>
      <button className = "add-to-cart-btn">
        Add to cart
      </button>
      {this.props.listingdata.quantity<50 ? (
        <div className = "limited-availability-section">
          Don't miss out. There's only {this.props.listingdata.quantity} available and many other people have this in their cart right now.
        </div>
      ) : (<div></div>)}
      <div className = "etsy-purchase-guarantee">
        <div className = "etsy-purchase-guarantee-left">
          <img src = "shield.png"/>
        </div>
        <div className = "etsy-purchase-guarantee-right">
          <h2>Etsy Purchase Guarantee</h2>
          <p>Get what you ordered or your money back.</p>
          <p className = "pseudo-link">Learn More</p>
        </div>
      </div>
    </div>
    )
  }
};

import React, { Component } from 'react';

export default class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      properties: [],
      propertyOptions: false,
      initdata: false,
    };
  }
  handleChange(event){
    event.preventDefault();
    console.log(this.state.properties)
    var propertynamewithdash = event.target.className.replace(/-drop-down-menu/g, "")
    console.log(propertynamewithdash.replace(/-/g, " "));
  }
  shouldComponentUpdate(nextProps, nextState){
    if (this.props.listinginventorydata !== nextProps.listinginventorydata || this.state.initdata !== nextState.initdata) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate(){
    if (this.props.listinginventorydata && this.state.initdata === false){
      // console.log(this.props.listinginventorydata.products[0].property_values.length);
      if (this.state.properties.length <= 0){
        this.props.listinginventorydata.products[0].property_values.map((x, i) => {
          return this.setState(prevState => ({
            properties: [...prevState.properties, x.property_name]
          }))
        })
      }
      let objectOfPropertyNames = {};
      let arrayOfPropertyNames = [];
      let arrayOfValues= [];
      for (let i = 0; i < this.props.listinginventorydata.products.length; i++){
        let product = this.props.listinginventorydata.products[i];
        product.property_values.map((x)=>{
          if (arrayOfPropertyNames.indexOf(x.property_name) === -1) {
            objectOfPropertyNames[x.property_name.replace(/ /g, "-")] = [];
            arrayOfPropertyNames.push(x.property_name);
          }
          if (arrayOfValues.indexOf(x.values[0]) === -1) {
            objectOfPropertyNames[x.property_name.replace(/ /g, "-")].push(x.values[0]);
            arrayOfValues.push(x.values[0]);
          }
          return objectOfPropertyNames
        })
      }
      this.setState({ propertyOptions:objectOfPropertyNames, initdata:true });
    }
  }
  render(){
    let inventorySelects = this.state.properties.map((x, i) => {
      let newLabelClassName = x.replace(/ /g, "-");
      return(
        <div className="options-drop-down-wrapper" key={newLabelClassName}>
          <label for= {newLabelClassName+"-drop-down-menu"}>{newLabelClassName}</label><br/>
          <select onChange={this.handleChange} className = {newLabelClassName+"-drop-down-menu"}>
          {this.state.propertyOptions[newLabelClassName].map((x, i)=>{
            return (
              <option value={x} key={x}>{x}</option>
            )
          })}
          </select>
        </div>
        )
    })
    return(
      <div className="productdescription">
        <h2>{this.props.listingdata.title}</h2>
        <div className = "item-price ask">
          <div><h3>${this.props.listingdata.price}</h3></div>
          <div><button className = "fav-btn">Ask a question</button></div>
        </div>
        <div className = "option-selection-wrapper">
        {inventorySelects}
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

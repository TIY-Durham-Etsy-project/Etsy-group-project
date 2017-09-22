import React, { Component } from 'react';

export default class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      properties: [],
      propertyOptions: false,
      initdata: false,
      price: false
    };
  }
  handleChange(event){
    event.preventDefault();
    var htmlSelectObjects = document.querySelectorAll("select");
    var propertyValuesArray = [];
    for (let i = 0; i < this.state.properties.length; i++){
      propertyValuesArray.push(htmlSelectObjects[i].value)
    }
    let productobj = {};
    for (let i = 0; i < this.props.listinginventorydata.products.length; i++){
      var howManyTrue = 0;
      this.props.listinginventorydata.products[i].property_values.map((x, i)=>{
        if (x.values[0] === propertyValuesArray[i]){
          howManyTrue += 1;
        }
        return null
      })
      if (howManyTrue === this.state.properties.length){
        productobj = this.props.listinginventorydata.products[i].offerings[0].price.currency_formatted_raw;
      }
    }
    this.setState({ price: productobj })
  }
  componentDidUpdate(){
    if (this.props.listingdata && this.props.listinginventorydata && this.state.initdata === false){
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
      this.setState({ propertyOptions:objectOfPropertyNames, initdata:true, price: this.props.listingdata.price });
    }
  }
  render(){
    let inventorySelects = this.state.properties.map((x, i) => {
      let newLabelClassName = x.replace(/ /g, "-");
      return(
        <div className="options-drop-down-wrapper" key={newLabelClassName}>
          <label htmlFor= {newLabelClassName+"-drop-down-menu"}>{newLabelClassName}</label><br/>
          <select onChange={this.handleChange} className = {newLabelClassName+"-drop-down-menu"}>
          {this.state.propertyOptions[newLabelClassName].map((x, i)=>{
            return (
              <option value={x} key={x}>{x.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"')}</option>
            )
          })}
          </select>
        </div>
        )
    })
    return(
      <div className="productdescription">
        <h2 className = "item-title-header">{this.props.listingdata.title}</h2>
        <div className = "item-price ask">
          <div><h3>${this.state.price}</h3></div>
          <div><button className = "fav-heart">Ask a question</button></div>
        </div>
        <div className = "option-selection-wrapper">
        {inventorySelects}
          <div className = "options-drop-down-wrapper">
            <label htmlFor= "quantity-drop-down">Quantity</label><br/>
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
          <div><img alt = "hourglass.png" src = "hourglass.png"/></div>
          <div><span>Almost gone. There is only {this.props.listingdata.quantity} left.</span></div>
        </div>
      ) : (<div></div>)}
      <div className = "etsy-purchase-guarantee">
        <div className = "etsy-purchase-guarantee-left">
          <img src = "shield.png" alt="shield.png"/>
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

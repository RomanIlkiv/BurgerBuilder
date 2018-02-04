import React, {Component} from 'react';
import Auxs from '../../../hoc/Auxs/Auxs';
import Button from '../../UI/Button/Button';

class OrderSummery extends Component {
  componentWillUpdate() {
    console.log('update');
  }

  render () {
    const ingredientSummery = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (<li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
        </li>);
      });

    return (<Auxs>
      <p>Your order:</p>
      <ul>
        {ingredientSummery}
      </ul>
      <p><strong>Total Price: {this.props.price.toFixed(2)}$</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={this.props.cancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={this.props.continued}>CONTINUE</Button>
    </Auxs>);
  }
}

export default OrderSummery;
import React, {Component} from 'react';
import { connect } from 'react-redux';

import Auxs from '../../hoc/Auxs/Auxs';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery';
import * as burgerBuilderActions from '../../store/actions/burgerBuilder';
import * as orderActions from '../../store/actions/order';
import * as authActions from '../../store/actions/auth';

class BurgerBuilder extends Component {
  /*constructor(props) {
   super(props);
   this.state = {...};
   }*/
  state = {
    purchasing: false
  };

  componentWillMount() {
    this.props.onInitIngredients();
  }

  updatePurchaseState(ingredients) {
      console.log(ingredients);
      if (ingredients) {
          const sum = Object.keys(ingredients)
              .map(igKey => {
                  return ingredients[igKey];
              })
              .reduce((sum, el) => {
                  return sum + el;
              }, 0);
          return sum > 0;
      }
  }

  purchaseHandler = () => {
      if(this.props.isAuthenticated) {
          this.setState({
              purchasing: true
          })
      } else {
          this.props.onSetAuthRedirectPath('/checkout');
          this.props.history.push('/auth');
      }
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    })
  };

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push('/checkout');
  };

  render() {
    const disabledInfo = {
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Auxs>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummery
            ingredients={this.props.ings}
            cancelled={this.purchaseCancelHandler}
            continued={this.purchaseContinueHandler}
            price={this.props.price}
          />
        </Modal>
        <Burger ingredients={this.props.ings}/>
        <BurgerControls
          addingIngredient={this.props.onIngredientAdded}
          removingIngredient={this.props.onIngredientRemoved}
          disabled={disabledInfo}
          purchasable={this.updatePurchaseState(this.props.ings)}
          ordered={this.purchaseHandler}
          isAuth={this.props.isAuthenticated}
          price={this.props.price}
        />
      </Auxs>
    );
  }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        isAuthenticated: state.auth.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
        onInitPurchase: () => dispatch(orderActions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(authActions.setAuthRedirectPath(path))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
//react
import React, { useEffect } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
//redux
import { connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectCartItems,
	selectCartPrice,
} from "../../redux/cart/cart.selector";
//stripe
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
//styled-components
import {
	CheckoutPageContainer,
	HeaderContainer,
	ItemsContainer,
	TotalContainer,
	StripeMssgContainer,
} from "./Checkout.styles";
import { selectCurrentUser } from "../../redux/user/user.selector";

const CheckoutPage = ({ cartItems, price }) => {
	const currentUser = useSelector(selectCurrentUser);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<CheckoutPageContainer>
			<HeaderContainer>
				<p>Product</p>
				<p>Description</p>
				<p>Quantity</p>
				<p>Price</p>
				<p>Remove</p>
			</HeaderContainer>
			<ItemsContainer>
				{cartItems.map((item) => (
					<CheckoutItem key={item.id} item={item} />
				))}
			</ItemsContainer>
			<TotalContainer>
				<h1>Total = ${price}</h1>
			</TotalContainer>
			<StripeMssgContainer>
				<p>*Please use below details for payments*</p>
				<p>
					Card Number: <span>4242424242424242</span>
				</p>
				<p>
					Date: <span>Any future date</span>
				</p>
				<p>
					CVC: <span>Any 3 digits</span>
				</p>
				{price > 0 && currentUser ? (
					<StripeCheckoutButton price={price} />
				) : (
					<p className="check-user-cart">
						Kindly LOGIN for payment option and add some items to cart.
					</p>
				)}
			</StripeMssgContainer>
		</CheckoutPageContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	price: selectCartPrice,
});

export default connect(mapStateToProps)(CheckoutPage);

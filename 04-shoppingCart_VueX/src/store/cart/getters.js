export default {
	tfootInfo: state => {
		let { listCarts } = state;

		let initObjSum = { countItem: 0, totalPrice: 0 };
		return listCarts.reduce(function(objSum, objCart) {
			let countItem = objSum.countItem + objCart.quantity;
			let totalPrice =
				objSum.totalPrice + objCart.quantity * objCart.product.price;
			return { countItem, totalPrice };
		}, initObjSum);
	}
};

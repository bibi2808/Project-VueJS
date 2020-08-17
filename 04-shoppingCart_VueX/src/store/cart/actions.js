export default {
	actionBuyProduct({ commit, state }, data) {
		// check
		const index = state.listCarts.findIndex(item => {
			return item.product.id === data.product.id;
		});
		console.log("index", index);
		if (index === -1) {
			commit("BUY_PRODUCT", data);
		} else {
			let quantity = data.quantity;
			commit("CHANGE_QUANTITY", { index, quantity });
		}
	},
	handleDeleteCart({ commit, state }, dataDelete) {
		var newListCarts = state.listCarts.filter(
			item => item.product.id !== dataDelete.product.id
		);
		commit("DELETE_CART", newListCarts);
	},
	actUpdateQuantity({ commit, state }, { cartUpdate, quantity }) {
		const index = state.listCarts.findIndex(item => {
			return item.product.id === cartUpdate.product.id;
		});
		if (index !== -1) {
		let data = {
			index,
			quantity,
			isReplace: true
		};
		commit("CHANGE_QUANTITY", data);
		}
	}
};

let initListCarts = localStorage.getItem('cart');
    if(initListCarts && initListCarts.listCarts) {
        initListCarts = initListCarts.listCarts;
    } else {
        initListCarts = [];
    }

export default {
    listCarts: initListCarts
}
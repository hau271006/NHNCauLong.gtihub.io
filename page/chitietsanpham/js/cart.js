// Sử dụng key 'cartItems' thống nhất
const STORAGE_KEY = 'cartItems';

// Lấy giỏ hàng từ localStorage
function getCartItems() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// Lưu giỏ hàng vào localStorage
function saveCartItems(cart) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

// Thêm sản phẩm vào giỏ
function addToCart(product) {
    const cart = getCartItems();
    const index = cart.findIndex(item => item.id === product.id);

    if (index !== -1) {
        cart[index].quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    saveCartItems(cart);
    alert(`✅ Đã thêm "${product.name}" vào giỏ hàng!`);
}

// Xóa sản phẩm theo ID
function removeFromCart(productId) {
    let cart = getCartItems();
    cart = cart.filter(item => item.id !== productId);
    saveCartItems(cart);
}

// Cập nhật số lượng sản phẩm
function updateQuantity(productId, newQuantity) {
    const cart = getCartItems();
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart[index].quantity = parseInt(newQuantity);
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1); // Nếu số lượng <= 0 thì xóa luôn
        }
        saveCartItems(cart);
    }
}

// Xóa toàn bộ giỏ
function clearCart() {
    localStorage.removeItem(STORAGE_KEY);
}
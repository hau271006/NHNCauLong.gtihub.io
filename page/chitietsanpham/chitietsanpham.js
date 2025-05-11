// chitietsanpham.js
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Kiểm tra và hiển thị nếu hợp lệ
if (productId && productId > 0) {
  // Đảm bảo productData đã có (được định nghĩa trong product-data.js)
  window.addEventListener("DOMContentLoaded", function () {
    if (typeof products !== 'undefined' && products.length > 0) {
      const product = products.find(p => p.id == productId);
      if (product) {
        document.getElementById("product-detail-content").innerHTML = `
          <div class="product-image">
            <img src="${product.imageUrl}" alt="${product.name}">
          </div>
          <div class="product-info">
            <h1>${product.name}</h1>
            <p><strong>Giá:</strong> <span style="color: red;">${product.price}</span></p>
            <p><strong>Thương hiệu:</strong> ${product.brand}</p>
            <p><strong>Chất liệu:</strong> ${product.material}</p>
            <p><strong>Chiều dài:</strong> ${product.length}</p>
            <p><strong>Trọng lượng:</strong> ${product.weight}</p>
            <p><strong>Mô tả:</strong></p>
            <p>${product.description}</p>
            <button class="add-to-cart">Thêm vào giỏ hàng</button>
          </div>
        `;
      } else {
        document.getElementById("product-detail-content").innerHTML = `
          <p>Sản phẩm không tồn tại hoặc đường dẫn không hợp lệ.</p>
        `;
      }
    }
  });
}
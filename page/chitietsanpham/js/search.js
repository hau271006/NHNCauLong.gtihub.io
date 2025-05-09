const products = [
    { name: 'Vợt Cầu Lông Carbon Training Màu Xanh', image: 'chitietsanpham/img/votcaulong/vot-cau-long-vnb-carbon-training-150g-5.png', url: "chitietsanpham/chitietsanpham.html?id=1" },
    { name: 'Vợt Cầu Lông V200', image: 'chitietsanpham/img/votcaulong/vot-cau-long-v200-do-2.png', url: "chitietsanpham/chitietsanpham.html?id=2" },
    { name: 'Vợt Cầu Lông Vnb V88', image: 'chitietsanpham/img/votcaulong/vot-cau-long-vnb-v88-3.png', url: "chitietsanpham/chitietsanpham.html?id=3" },
    { name: 'Vợt Cầu Lông Redson Shape ESG', image: 'chitietsanpham/img/votcaulong/vot-cau-long-redson-shape-esg.png', url: "chitietsanpham/chitietsanpham.html?id=4" },
    { name: 'Vợt Cầu Lông The 3rd Game ARC', image: 'chitietsanpham/img/votcaulong/vot-cau-long-the-3rd-game-arc-fb-do.png', url: "chitietsanpham/chitietsanpham.html?id=5" },
    { name: 'Vợt Cầu Lông Vnb TV88C', image: 'chitietsanpham/img/votcaulong/vot-cau-long-vnb-tc88c-1.png', url: "chitietsanpham/chitietsanpham.html?id=6" },
    { name: 'Vợt Cầu Lông VNB V88 Xanh', image: 'chitietsanpham/img/votcaulong/vot-cau-long-vnb-v88-xanh-chinh-hang-1.png', url: "chitietsanpham/chitietsanpham.html?id=7" },
    { name: 'Vợt Cầu Lông Yonex Astrox 99 LCW', image: 'chitietsanpham/img/votcaulong/vot-cau-long-yonex-astrox-99-lcw-2.png', url: "chitietsanpham/chitietsanpham.html?id=8" },
    { name: 'Giày cầu lông Victor A396 A', image: 'chitietsanpham/img/giay/giay-cau-long-victor-a396-a-trang-chinh-hang_1745873894.png', url: "chitietsanpham/chitietsanpham.html?id=9" },
    { name: 'Giày cầu lông Victor P8500Nlite AT', image: 'chitietsanpham/img/giay/giay-cau-long-victor-p8500nlite-at-trang-tim-chinh-hang_1745873404.png', url: "chitietsanpham/chitietsanpham.html?id=10" },
    { name: 'Giày cầu lông Taro TR024-1', image: 'chitietsanpham/img/giay/giay-cau-long-taro-tr024-1-xanh-ngoc_1732235089.png', url: "chitietsanpham/chitietsanpham.html?id=11" },
    { name: 'Giày cầu lông Taro TR024-2', image: 'chitietsanpham/img/giay/giay-cau-long-taro-tr024-2-trang-den_1732235436.png', url: "chitietsanpham/chitietsanpham.html?id=12" },
    { name: 'Giày cầu lông Yonex Aerus Z Men Flash Green', image: 'chitietsanpham/img/giay/giay-cau-long-yonex-aerus-z-men-flash-green-chinh-hang_1746231911.png', url: "chitietsanpham/chitietsanpham.html?id=13" },
    { name: 'Giày cầu lông Victor C90Nlite A', image: 'chitietsanpham/img/giay/giay-cau-long-victor-c90nlite-a-trang-chinh-hang_1745870700.png', url: "chitietsanpham/chitietsanpham.html?id=14" },
    { name: 'Giày cầu lông Lining AYTU025-1 chính hãng', image: 'chitietsanpham/img/giay/giay-cau-long-lining-aytu025-1-chinh-hang_1745634417.png', url: "chitietsanpham/chitietsanpham.html?id=15" },
    { name: 'Giày cầu lông Yonex SHB 65X4 2025', image: 'chitietsanpham/img/giay/giay-cau-long-yonex-shb-65x4-trang-2025-chinh-hang_1736972553.png', url: "chitietsanpham/chitietsanpham.html?id=16" },
    { name: 'Quần Cầu Lông Taro TR024-Q01 Nam - Đỏ Chính Hãng', image: 'chitietsanpham/img/quan/quan-cau-long-taro-tr024-q01-nam-do-chinh-hang_1745803083.png', url: "chitietsanpham/chitietsanpham.html?id=17" },
    { name: 'Quần cầu lông Yonex SM2570 Nam - Dark Gull Gray chính hãng', image: 'chitietsanpham/img/quan/quan-cau-long-yonex-sm2570-nam-dark-gull-gray-chinh-hang_1745877646.png', url: "chitietsanpham/chitietsanpham.html?id=18" },
    { name: 'Quần cầu lông Yonex SM2570 Nam - Maritime Blue chính hãng', image: 'chitietsanpham/img/quan/quan-cau-long-yonex-sm2570-nam-maritime-blue-chinh-hang_1745883578.png', url: "chitietsanpham/chitietsanpham.html?id=19" },
    { name: 'Quần cầu lông Yonex SM2765 - Anthracite chính hãng', image: 'chitietsanpham/img/quan/quan-cau-long-yonex-sm2765-anthracite-chinh-hang_1745875975.png', url: "chitietsanpham/chitietsanpham.html?id=20" },
    { name: 'Quần cầu lông Yonex SM2765 - Apple Cinnamon chính hãng', image: 'chitietsanpham/img/quan/quan-cau-long-yonex-sm2765-apple-cinnamon-chinh-hang_1745875866.png', url: "chitietsanpham/chitietsanpham.html?id=21" },
    { name: 'Quần cầu lông Yonex SM2765 - Beet Red chính hãng', image: 'chitietsanpham/img/quan/quan-cau-long-yonex-sm2765-beet-red-chinh-hang_1745876747.png', url: "chitietsanpham/chitietsanpham.html?id=22" },
    { name: 'Quần cầu lông Yonex SM2765 - Navy Peony chính hãng', image: 'chitietsanpham/img/quan/quan-cau-long-yonex-sm2765-navy-peony-chinh-hang_1745875463.png', url: "chitietsanpham/chitietsanpham.html?id=23" },
    { name: 'Quần cầu lông Yonex TSM2911 - Blue Berry chính hãng', image: 'chitietsanpham/img/quan/quan-cau-long-yonex-tsm2911-blue-berry-chinh-hang_1742496276.png', url: "chitietsanpham/chitietsanpham.html?id=24" },
    { name: 'Balo Cầu Lông Kumpoo KB-521', image: 'chitietsanpham/img/balo/balo-cau-long-kumpoo-kb-521_1742586089.png', url: "chitietsanpham/chitietsanpham.html?id=25" },
    { name: 'Balo Cầu Lông Kumpoo Trẻ Em KB-523', image: 'chitietsanpham/img/balo/balo-cau-long-kumpoo-tre-em-kb-523_1742585815.png', url: "chitietsanpham/chitietsanpham.html?id=26" },
    { name: 'Balo Cầu Lông Taro TR024-BA01', image: 'chitietsanpham/img/balo/balo-cau-long-taro-tr024-ba01_1737743524.png', url: "chitietsanpham/chitietsanpham.html?id=27" },
    { name: 'Balo cầu lông Victor Doraemon BR5035DRM A', image: 'chitietsanpham/img/balo/balo-cau-long-victor-doraemon-br5035drm-a-trang-noi-dia-trung_1741566781.png', url: "chitietsanpham/chitietsanpham.html?id=28" },
    { name: 'Balo cầu lông Yonex BAG02512EX', image: 'chitietsanpham/img/balo/balo-cau-long-yonex-bag02512ex_1745435333.png', url: "chitietsanpham/chitietsanpham.html?id=29" },
    { name: 'Balo Cầu Lông Yonex BAG524B0712Z', image: 'chitietsanpham/img/balo/balo-cau-long-yonex-bag524b0712z_1740360621.png', url: "chitietsanpham/chitietsanpham.html?id=30" },
    { name: 'Balo Cầu Lông Yonex BAG524B0812Z', image: 'chitietsanpham/img/balo/balo-cau-long-yonex-bag524b0812z_1740369410.png', url: "chitietsanpham/chitietsanpham.html?id=31" },
    { name: 'Balo Cầu Lông Kumpoo KB-425 Xám', image: 'chitietsanpham/img/balo/tui-cau-long-kumpoo-k368-trang-xanh-chinh-hang_1742247697.png', url: "chitietsanpham/chitietsanpham.html?id=32" },
    { name: 'Áo Cầu Lông Lining T72 Nam Trắng', image: 'chitietsanpham/img/ao/ao-cau-long-lining-t72-nam-trang_1745805181.png', url: "chitietsanpham/chitietsanpham.html?id=33" },
    { name: 'Áo cầu lông Victor A581 Nam - Đen', image: 'chitietsanpham/img/ao/ao-cau-long-victor-a581-nam-den_1745804424.png', url: "chitietsanpham/chitietsanpham.html?id=34" },
    { name: 'Áo cầu lông Victor A583 Nam - Xanh', image: 'chitietsanpham/img/ao/ao-cau-long-victor-a583-nam-xanh_1745804792.png', url: "chitietsanpham/chitietsanpham.html?id=35" },
    { name: 'Áo cầu lông Victor A584 Nam - Xanh', image: 'chitietsanpham/img/ao/ao-cau-long-victor-a584-nam-xanh_1745804955.png', url: "chitietsanpham/chitietsanpham.html?id=36" },
    { name: 'Áo cầu lông Yonex A575 Nam - Xanh', image: 'chitietsanpham/img/ao/ao-cau-long-yonex-a575-nam-xanh_1745798778.png', url: "chitietsanpham/chitietsanpham.html?id=37" },
    { name: 'Áo cầu lông Yonex A589 Nam - Trắng', image: 'chitietsanpham/img/ao/ao-cau-long-yonex-a589-nam-trang_1745798985.png', url: "chitietsanpham/chitietsanpham.html?id=38" },
    { name: 'Áo cầu lông Yonex T62 Nam - Trắng', image: 'chitietsanpham/img/ao/ao-cau-long-yonex-t62-nam-trang_1745799208.png', url: "chitietsanpham/chitietsanpham.html?id=39" },
    { name: 'Áo cầu lông Yonex T63 Nam - Xanh', image: 'chitietsanpham/img/ao/ao-cau-long-yonex-t63-nam-xanh_1745799056.png', url: "chitietsanpham/chitietsanpham.html?id=40" },
];

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', function () {
    const keyword = this.value.toLowerCase();
    searchResults.innerHTML = '';
    if (keyword.length === 0) {
        searchResults.style.display = 'none';
        return;
    }
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(keyword)
    );
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.setAttribute('data-url', product.url);
            resultItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" style="width:50px; height:50px;">
                <span>${product.name}</span>
            `;
            searchResults.appendChild(resultItem);

            resultItem.addEventListener('click', function() {
                const productUrl = this.getAttribute('data-url');
                window.location.href = productUrl;
            });
        });
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
    }
});

document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Đã thêm vào giỏ hàng!");
    });
  });
let products = [
    { id: 1, product_name: "Ip12", price: 200000000000 },
    { id: 2, product_name: "Ip11", price: 100000000000 },
    { id: 3, product_name: "Samsung note 10", price: 5000000000 },
];
function sortProductsByPrice() {
    products.sort(function(a, b) {
        return a.price - b.price;
    });
}
function printSortedProducts() {
    console.log("Danh sách products sau khi sắp xếp theo giá tăng dần:");
    console.log(products);
}
sortProductsByPrice();
printSortedProducts();

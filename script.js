const productsData = [
    {
    name: "iPhone 14",
    type: "მობილური",
    price: 2500,
    image:
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch?wid=512&hei=512&fmt=jpeg&qlt=90&.v=1661027789513",
    },
    {
    name: "MacBook Air M2",
    type: "ლეპტოპი",
    price: 4000,
    image:
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1654122880566",
    },
    {
    name: "Samsung Galaxy S23",
    type: "მობილური",
    price: 2200,
    image:
    "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Ff0c0a276-bc30-48c7-b2ee-66cdb78b1ac4_Thumb.jpeg&w=640&q=100",
    },
    {
    name: "Sony WH-1000XM4 ყურსასმენები",
    type: "აქსესუარი",
    price: 800,
    image:
    "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
    },
    {
    name: "Asus Vivobook 15",
    type: "ლეპტოპი",
    price: 2900,
    image:
    "https://sonic.ge/dyn/lr-WpCBM7gR0pRch3Z-osfimDsg3S90wpawbrLLK5Cs/rs:fit:720:0/plain/images/products/original/09af5e5b-4f03-4fa8-b12d-a812172cdbe7.jpg",
    },
];

function renderProducts(products) {
    let productsContainer = document.getElementById("productsContainer");

    productsContainer.innerHTML = "";

    products.forEach(function (product) {
        let productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
            <img src=${product.image} alt=${product.name}>
            <div class="product-content">
                <h3>${product.name}</h3>
                <p>${product.type}</p>
                <p>${product.price}$</p>
            </div>
            `;

            productsContainer.appendChild(productElement);
    });
};




function filterProducts() {
    let selectElement = document.getElementById("typeSelect");
    let selectedType = selectElement.value;

    let selectSort = document.getElementById("sortSelect");
    let selectedSort = selectSort.value;

    let filteredProducts = productsData.filter(function (product) {
        let matchesType = selectedType == "all" || product.type == selectedType;

        if (matchesType) {
            return true;
        };

        if (selectedSort == "priceUp") {
            productsData.sort((a, b) => a.price - b.price);
        };
        if (selectedSort == "priceDown") {
            productsData.sort((a, b) => b.price - a.price);
        };
        if (selectedSort == "fromAToZ") {
            productsData.sort((a, b) => a.name.localeCompare(b.name));
        };

        return false;
    });

    renderProducts(filteredProducts)
};

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("typeSelect").addEventListener("change", filterProducts);
    document.getElementById("sortSelect").addEventListener("change", filterProducts);
    renderProducts(productsData);
});

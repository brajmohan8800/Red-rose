/* script.js - Final Version with Discounts & Fixed Images */

// Product Data with Discount and Local Image Names
const products = [
    { 
        id: 1, 
        name: "Classic Formal Shirt", 
        price: 450, 
        discount: 30, // 30% Off
        category: "Shirt", 
        image: "photo_6107411244462575326_y.jpg", 
        desc: "Premium cotton blend formal shirt. Perfect for office wear with a modern fit." 
    },
    { 
        id: 2, 
        name: "Chic Two-Piece Set", 
        price: 899, 
        discount: 20, // 20% Off
        category: "Two-Piece", 
        image: "photo_6107411244462575329_y.jpg", 
        desc: "Stylish two-piece set featuring a crop top and high-waist skirt. Ideal for casual outings." 
    },
    { 
        id: 3, 
        name: "Summer Crop Top", 
        price: 350, 
        discount: 29, // 29% Off
        category: "Crop Top", 
        image: "photo_6107411244462575330_y.jpg", 
        desc: "Breathable fabric crop top with vibrant prints. Stay cool and trendy this summer." 
    },
    { 
        id: 4, 
        name: "Designer Party Frock", 
        price: 1200, 
        discount: 15, 
        category: "Frock", 
        image: "photo_6107411244462575331_y.jpg", 
        desc: "Elegant party wear frock with intricate detailing. Makes you stand out in any crowd." 
    },
    { 
        id: 5, 
        name: "Casual Denim Jacket", 
        price: 950, 
        discount: 25, 
        category: "Shirt", 
        image: "photo_6107411244462575333_y.jpg", 
        desc: "Trendy denim jacket for a western look. Durable and stylish for all seasons." 
    },
    { 
        id: 6, 
        name: "Floral Maxi Dress", 
        price: 1100, 
        discount: 30, 
        category: "Frock", 
        image: "photo_6107411244462575334_y.jpg", 
        desc: "Long floral maxi dress perfect for beach parties or summer gatherings." 
    },
    { 
        id: 7, 
        name: "Office Blazer", 
        price: 1500, 
        discount: 10, 
        category: "Shirt", 
        image: "photo_6107411244462575335_y.jpg", 
        desc: "Professional blazer for corporate women. Sharp cuts and premium lining." 
    },
    { 
        id: 8, 
        name: "Casual Tee", 
        price: 299, 
        discount: 20, 
        category: "Crop Top", 
        image: "photo_6107411244462575327_y.jpg", 
        desc: "Comfortable daily wear t-shirt. Soft fabric that lasts long." 
    }
];

let currentProduct = null;

// Create Product Card HTML with Real Image Tag
function createProductCard(product, container) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => openModal(product);
    
    // Calculate MRP for display (Optional: if you want to show crossed out price)
    // For now, we just show the selling price and the discount badge
    
    card.innerHTML = `
        <div class="product-img">
            <span class="sale-badge">${product.discount}% OFF</span>
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x300?text=No+Image'">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <div style="display:flex; align-items:center; gap:10px;">
                <span class="price"> ${product.price}</span>
                <span style="font-size:0.8rem; text-decoration:line-through; color:#999;">₹ ${Math.round(product.price * (1 + product.discount/100))}</span>
            </div>
            <span style="font-size: 0.8rem; color: #888; display:block; margin-top:5px;">${product.category}</span>
        </div>
    `;
    container.appendChild(card);
}

// Modal Functions
const modal = document.getElementById('product-modal');
if(modal) {
    window.openModal = function(product) {
        currentProduct = product;
        document.getElementById('modal-title').innerText = product.name;
        document.getElementById('modal-price').innerText = `₹ ${product.price}`;
        document.getElementById('modal-desc').innerText = product.desc;
        
        // Set Modal Image using IMG tag
        const modalImgDiv = document.getElementById('modal-img');
        modalImgDiv.innerHTML = `<img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x300?text=No+Image'">`;

        modal.classList.add('modal-active');
    }

    window.closeModal = function() {
        modal.classList.remove('modal-active');
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// WhatsApp Enquiry Logic
window.sendEnquiry = function() {
    if (!currentProduct) return;
    const phoneNumber = "919876543210"; // Apna number yahan dalein
    const message = `Hello Red Rose, I am interested in *${currentProduct.name}* (${currentProduct.category}).\nPrice: ₹${currentProduct.price}\nDiscount: ${currentProduct.discount}% OFF\nPlease share details.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// Mobile Menu Toggle
window.toggleMenu = function() {
    const navList = document.getElementById('nav-list');
    if(navList) navList.classList.toggle('active');
}
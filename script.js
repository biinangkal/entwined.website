// ========================
// navbar
// ========================

window.addEventListener('scroll', () => {
    const wrap = document.querySelector('.navbar-wrap');
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    if (window.scrollY > 80) {
        wrap.classList.add('scrolled');
        header.classList.add('scrolled');
        nav.classList.add('scrolled');
    } else {
        wrap.classList.remove('scrolled');
        header.classList.remove('scrolled');
        nav.classList.remove('scrolled');
    }
});

// ========================
// functions chuchu
// ========================

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showMessage(container, message, isSuccess) {
    let msg = container.querySelector('.form-message');
    if (!msg) {
        msg = document.createElement('p');
        msg.classList.add('form-message');
        container.appendChild(msg);
    }
    msg.textContent = message;
    msg.style.fontFamily = "'Raleway', sans-serif";
    msg.style.fontSize = '16px';
    msg.style.marginTop = '16px';
    msg.style.color = isSuccess ? 'black' : 'black';
}

// ========================
// product page (add to cart)
// ========================

const addToCartBtn = document.querySelector('.add-to-cart');
if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
        const quantity = document.querySelector('.quantity-selector input');
        const size = document.querySelector('.size-input');
        const container = document.querySelector('.product-details');

        if (!size.value.trim()) {
            showMessage(container, '⚠ Please fill all fields before adding to cart.', false);
            return;
        }
        if (quantity.value < 1) {
            showMessage(container, '⚠ Please enter a valid quantity.', false);
            return;
        }
        showMessage(container, 'Successfully added to cart!', true);
    });
}

// ========================
// custom orders (submit)
// ========================

const submitBtn = document.querySelector('.submit-btn');
if (submitBtn) {
    submitBtn.addEventListener('click', () => {
        const inputs = document.querySelectorAll('.order-form input, .order-form textarea');
        const email = document.querySelector('.order-form input[type="text"]:nth-of-type(2)');
        const container = document.querySelector('.order-form');

        let allFilled = true;
        inputs.forEach(input => {
            if (!input.value.trim()) allFilled = false;
        });

        if (!allFilled) {
            showMessage(container, '⚠ Please fill all fields before submitting.', false);
            return;
        }
        showMessage(container, 'Order successfully submitted!', true);
    });
}

// ========================
// contact us (send message)
// ========================

const sendBtn = document.querySelector('.send-btn');
if (sendBtn) {
    sendBtn.addEventListener('click', () => {
        const name = document.querySelector('.contact-form input[type="text"]');
        const email = document.querySelector('.contact-form input[type="email"]');
        const message = document.querySelector('.contact-form textarea');
        const container = document.querySelector('.contact-form');

        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            showMessage(container, '⚠ Please fill all fields before sending.', false);
            return;
        }
        if (!isValidEmail(email.value)) {
            showMessage(container, '⚠ Please enter a valid email address.', false);
            return;
        }
        showMessage(container, 'Message successfully sent!', true);
    });
}

// ========================
// checkout (place order)
// ========================

const placeOrderBtn = document.querySelector('.place-order-btn');
if (placeOrderBtn) {
    placeOrderBtn.addEventListener('click', () => {
        const inputs = document.querySelectorAll('.checkout-form input, .checkout-form textarea');
        const email = document.querySelector('.checkout-form input[type="email"]');
        const container = document.querySelector('.checkout');

        let allFilled = true;
        inputs.forEach(input => {
            if (!input.value.trim()) allFilled = false;
        });

        if (!allFilled) {
            showMessage(container, '⚠ Please fill all fields before placing your order.', false);
            return;
        }
        if (!isValidEmail(email.value)) {
            showMessage(container, '⚠ Please enter a valid email address.', false);
            return;
        }
        showMessage(container, 'Order successfully placed!', true);
    });
}
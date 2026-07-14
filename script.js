<<<<<<< HEAD
// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
});

// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// ===== SCROLL ANIMATIONS =====
const animElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
});

animElements.forEach(el => observer.observe(el));

// ===== BOOKING FORM (UPDATED WITH NEW PHONE & EMAIL) =====
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('bookName').value.trim();
    const phone = document.getElementById('bookPhone').value.trim();
    const email = document.getElementById('bookEmail').value.trim();
    const date = document.getElementById('bookDate').value;
    const service = document.getElementById('bookService').value;
    const message = document.getElementById('bookMessage').value.trim();

    // Validation
    if (!name || !phone || !email || !date || !service) {
        alert('⚠️ Please fill in all required fields.');
        return;
    }

    // Build message
    const bookingMsg =
        `🪞 *POOJA BEAUTY PARLOUR - Booking Confirmation*%0A%0A` +
        `👤 Name: ${name}%0A` +
        `📞 Phone: ${phone}%0A` +
        `📧 Email: ${email}%0A` +
        `📅 Date: ${date}%0A` +
        `💄 Service: ${service}%0A` +
        `📝 Notes: ${message || 'N/A'}%0A%0A` +
        `Thank you for booking with us! ❤️`;

    // WhatsApp link with updated number
    const waLink =
        `https://wa.me/919828280403?text=${encodeURIComponent(bookingMsg)}`;

    // Email link with updated email
    const emailSubject = `Booking Confirmation - ${name}`;
    const emailBody =
        `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nDate: ${date}\nService: ${service}\nNotes: ${message || 'N/A'}\n\nThank you for booking with POOJA BEAUTY PARLOUR! ❤️`;
    const mailtoLink =
        `mailto:manishmm3366@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Open both WhatsApp and Email in new tabs
    window.open(waLink, '_blank');
    window.open(mailtoLink, '_blank');

    // Show success message
    alert(
        '✅ Booking submitted successfully!\n\nWe have sent a confirmation to your WhatsApp and Email.\n\nThank you for choosing POOJA BEAUTY PARLOUR ❤️');

    // Reset form
    bookingForm.reset();
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ===== SET MIN DATE FOR BOOKING =====
const dateInput = document.getElementById('bookDate');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

=======
// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
});

// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// ===== SCROLL ANIMATIONS =====
const animElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
});

animElements.forEach(el => observer.observe(el));

// ===== BOOKING FORM (UPDATED WITH NEW PHONE & EMAIL) =====
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('bookName').value.trim();
    const phone = document.getElementById('bookPhone').value.trim();
    const email = document.getElementById('bookEmail').value.trim();
    const date = document.getElementById('bookDate').value;
    const service = document.getElementById('bookService').value;
    const message = document.getElementById('bookMessage').value.trim();

    // Validation
    if (!name || !phone || !email || !date || !service) {
        alert('⚠️ Please fill in all required fields.');
        return;
    }

    // Build message
    const bookingMsg =
        `🪞 *POOJA BEAUTY PARLOUR - Booking Confirmation*%0A%0A` +
        `👤 Name: ${name}%0A` +
        `📞 Phone: ${phone}%0A` +
        `📧 Email: ${email}%0A` +
        `📅 Date: ${date}%0A` +
        `💄 Service: ${service}%0A` +
        `📝 Notes: ${message || 'N/A'}%0A%0A` +
        `Thank you for booking with us! ❤️`;

    // WhatsApp link with updated number
    const waLink =
        `https://wa.me/919828280403?text=${encodeURIComponent(bookingMsg)}`;

    // Email link with updated email
    const emailSubject = `Booking Confirmation - ${name}`;
    const emailBody =
        `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nDate: ${date}\nService: ${service}\nNotes: ${message || 'N/A'}\n\nThank you for booking with POOJA BEAUTY PARLOUR! ❤️`;
    const mailtoLink =
        `mailto:manishmm3366@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Open both WhatsApp and Email in new tabs
    window.open(waLink, '_blank');
    window.open(mailtoLink, '_blank');

    // Show success message
    alert(
        '✅ Booking submitted successfully!\n\nWe have sent a confirmation to your WhatsApp and Email.\n\nThank you for choosing POOJA BEAUTY PARLOUR ❤️');

    // Reset form
    bookingForm.reset();
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ===== SET MIN DATE FOR BOOKING =====
const dateInput = document.getElementById('bookDate');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

>>>>>>> 9e266359c4c97ef2a9ba24d704ba7f5963eea2ca
console.log('✨ POOJA BEAUTY PARLOUR — All links updated successfully ✨');
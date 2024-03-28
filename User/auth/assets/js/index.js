// index.js
window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
        document.querySelector('.col-md-7').setAttribute('hidden', 'true');
        document.querySelector('.col-md-5').setAttribute('hidden', 'true');
    } else {
        document.querySelector('.col-md-7').removeAttribute('hidden');
        document.querySelector('.col-md-5').removeAttribute('hidden');
    }
});

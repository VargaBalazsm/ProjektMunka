document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const submenu = document.querySelector('.submenu');

    dropdown.addEventListener('mouseenter', function() {
        submenu.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', function() {
        submenu.style.display = 'none';
    });

    submenu.addEventListener('mouseenter', function() {
        submenu.style.display = 'block';
    });

    submenu.addEventListener('mouseleave', function() {
        submenu.style.display = 'none';
    });
});
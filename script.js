document.addEventListener('DOMContentLoaded', function () {
    // 1. Xử lý đóng / mở menu trên điện thoại
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
    const links = navLinks.querySelectorAll('a');
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
        });
    });
    // 2. Xử lý sao chép nhanh địa chỉ Email
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const copyMessage = document.getElementById('copy-message');
    copyEmailBtn.addEventListener('click', function () {
        const emailText = copyEmailBtn.getAttribute('data-email');
        navigator.clipboard.writeText(emailText).then(function () {
            copyMessage.textContent = '✓ Đã sao chép email: ' + emailText;
            setTimeout(function () {
                copyMessage.textContent = '';
            }, 3000);
        }).catch(function () {
            copyMessage.textContent = 'Không thể tự động sao chép, bạn vui lòng copy thủ công nhé!';
        });
    });

});
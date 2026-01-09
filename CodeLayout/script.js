// ===== LOAD HEADER VÀ FOOTER TỰ ĐỘNG =====

// Function để load nội dung từ file HTML khác
function loadHTML(file, elementId) {
    // Sử dụng fetch API để lấy nội dung file
    fetch(file)
        .then(response => response.text()) // Chuyển response thành text
        .then(data => {
            // Đưa nội dung vào element có id tương ứng
            document.getElementById(elementId).innerHTML = data;
            
            // Sau khi load xong header, khởi tạo các event cho menu
            if (elementId === 'header-placeholder') {
                initializeMenu();
            }
        })
        .catch(error => {
            console.error('Lỗi khi load file:', file, error);
        });
}

// Gọi function để load header và footer khi trang được load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Trang đã load xong, bắt đầu load header và footer...');
    
    // Load header
    loadHTML('header.html', 'header-placeholder');
    
    // Load footer
    loadHTML('footer.html', 'footer-placeholder');
});


// ===== KHỞI TẠO CÁC EVENT CHO MENU =====

function initializeMenu() {
    // Lấy các phần tử từ HTML (sau khi đã load)
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.nav .menu');
    const menuLinks = document.querySelectorAll('.nav .menu li a');
    
    // Thêm sự kiện click cho nút hamburger
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            // Toggle class 'active' để hiển thị/ẩn menu
            menu.classList.toggle('active');
            
            // Thêm hiệu ứng cho nút hamburger
            hamburger.classList.toggle('active');
        });
    }
    
    // Đóng menu khi click vào một link (trên mobile)
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Nếu menu đang mở, thì đóng nó lại
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Highlight trang hiện tại trong menu
    highlightCurrentPage();
}


// ===== HIGHLIGHT TRANG HIỆN TẠI TRONG MENU =====

function highlightCurrentPage() {
    // Lấy URL hiện tại
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Lấy tất cả các link trong menu
    const menuLinks = document.querySelectorAll('.nav .menu li a');
    
    // Lặp qua tất cả các link
    menuLinks.forEach(function(link) {
        // Lấy href của link
        const linkPage = link.getAttribute('href');
        
        // Nếu link trùng với trang hiện tại
        if (linkPage === currentPage) {
            // Thêm class 'active'
            link.classList.add('active');
        } else {
            // Xóa class 'active' nếu có
            link.classList.remove('active');
        }
    });
    
    console.log('Trang hiện tại:', currentPage);
}


// ===== SMOOTH SCROLL (Cuộn mượt) =====
// Áp dụng cho các link có href bắt đầu bằng #

document.addEventListener('DOMContentLoaded', function() {
    // Đợi một chút để đảm bảo header đã load xong
    setTimeout(function() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                
                // Nếu target là '#' thì không làm gì
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }, 500);
});


// ===== THAY ĐỔI HEADER KHI SCROLL =====

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (header) {
        // Nếu cuộn xuống hơn 100px
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    }
});


// ===== XỬ LÝ FORM LIÊN HỆ (CHO TRANG CONTACT) =====

// Đợi trang load xong
document.addEventListener('DOMContentLoaded', function() {
    // Kiểm tra xem có form liên hệ không
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Thêm event listener cho form
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Ngăn form submit mặc định
            
            // Lấy giá trị từ form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Hiển thị thông báo
            alert('Cảm ơn ' + name + '! Tin nhắn của bạn đã được gửi.\n\nĐây chỉ là demo, tin nhắn không thực sự được gửi đi.');
            
            // Reset form
            this.reset();
        });
    }
});


// ===== CONSOLE LOG ĐỂ KIỂM TRA =====
console.log('JavaScript đã được tải thành công!');
console.log('Header và Footer sẽ được load tự động...');

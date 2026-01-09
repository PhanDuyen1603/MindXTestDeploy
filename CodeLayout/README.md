# Website Layout Demo - Menu và Footer (Tách Riêng)

## 📖 Giới Thiệu

Đây là một template đơn giản về cách tạo layout website với menu điều hướng (navigation bar) và footer **được tách riêng để tái sử dụng**. Template này được thiết kế dành cho học viên mới học HTML, CSS và JavaScript cơ bản.

**✨ Điểm đặc biệt:** Menu và Footer được lưu trong file riêng, giúp code ngắn gọn và dễ bảo trì!

## 🎯 Mục Đích

- Cung cấp một layout cơ bản để học viên có thể bắt chước và phát triển
- Giúp hiểu cách tổ chức cấu trúc HTML
- Học cách styling với CSS
- Thêm tính tương tác với JavaScript
- Học cách làm responsive design (tương thích mobile)
- **Học cách tách layout để tái sử dụng code - DRY (Don't Repeat Yourself)**

## 📁 Cấu Trúc Thư Mục

```
CodeLayout/
│
├── index.html          # Trang chủ (ngắn gọn)
├── about.html          # Trang giới thiệu (ngắn gọn)
├── services.html       # Trang dịch vụ (ngắn gọn)
├── contact.html        # Trang liên hệ (ngắn gọn)
│
├── header.html         # ⭐ Menu/Header (tách riêng)
├── footer.html         # ⭐ Footer (tách riêng)
│
├── style.css           # File CSS chung
├── script.js           # File JavaScript - load header/footer tự động
└── README.md           # File hướng dẫn này
```

## 🚀 Cách Layout Hoạt Động

### 🔑 Ý Tưởng Chính

Thay vì copy-paste header và footer vào mỗi trang HTML, chúng ta:

1. **Tách Header và Footer** thành 2 file riêng: `header.html` và `footer.html`
2. **Sử dụng JavaScript** để tự động load 2 file này vào mỗi trang
3. **Lợi ích:** Khi muốn sửa menu hoặc footer, chỉ cần sửa 1 file là áp dụng cho tất cả các trang!

### 📝 Cách Sử dụng Trong Code

#### 1. Trong File HTML (ví dụ: index.html)

```html
<body>
    <!-- Placeholder cho Header -->
    <div id="header-placeholder"></div>

    <!-- Nội dung chính của trang -->
    <main class="main-content">
        <div class="container">
            <h1>Nội dung trang của bạn</h1>
            <p>Viết nội dung ở đây...</p>
        </div>
    </main>

    <!-- Placeholder cho Footer -->
    <div id="footer-placeholder"></div>

    <!-- JavaScript sẽ tự động load header và footer -->
    <script src="script.js"></script>
</body>
```

#### 2. JavaScript Tự Động Load (trong script.js)

```javascript
// Function load nội dung từ file HTML khác
function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

// Load header.html vào #header-placeholder
loadHTML('header.html', 'header-placeholder');

// Load footer.html vào #footer-placeholder
loadHTML('footer.html', 'footer-placeholder');
```

## 🎓 Kiến Thức Cần Có

### HTML
- Cấu trúc cơ bản: `<html>`, `<head>`, `<body>`
- Các thẻ semantic: `<header>`, `<nav>`, `<main>`, `<footer>`
- Phần tử `<div>` với id để làm placeholder

### CSS
- Selectors: class, id, element
- Box model: margin, padding, border
- Flexbox và Grid
- Responsive design với Media Queries

### JavaScript ⭐
- **Fetch API** - để load file HTML
- **DOM manipulation** - getElementById, innerHTML
- **Event listeners** - DOMContentLoaded
- **Promises** - .then()

## 🛠️ Cách Mở và Chạy Website

### ⚠️ Lưu Ý Quan Trọng

Website này sử dụng **Fetch API** để load file, nên **KHÔNG THỂ mở trực tiếp** bằng cách double-click vào file HTML (sẽ bị lỗi CORS).

### ✅ Cách 1: Sử dụng Live Server (Khuyên dùng)

Nếu bạn dùng **VS Code**:

1. Cài extension "Live Server"
2. Click chuột phải vào file `index.html`
3. Chọn "Open with Live Server"
4. Website sẽ tự động mở trên trình duyệt

### ✅ Cách 2: Sử dụng Python Server

Nếu bạn có Python cài đặt:

```bash
# Python 3
python3 -m http.server 8000

# Hoặc Python 2
python -m SimpleHTTPServer 8000
```

Sau đó mở trình duyệt và vào: `http://localhost:8000`

### ✅ Cách 3: Sử dụng Node.js với http-server

```bash
# Cài đặt (chỉ cần 1 lần)
npm install -g http-server

# Chạy server
http-server
```

Sau đó mở trình duyệt theo link hiển thị.

## 🎨 Các Tính Năng

### 1. Menu Điều Hướng (Navigation Bar)
- Menu cố định ở đầu trang (sticky header)
- Highlight trang hiện tại tự động
- Responsive - chuyển thành hamburger menu trên mobile
- **Load tự động từ header.html**

### 2. Footer
- Chia thành 3 cột: Thông tin liên hệ, Links, Mạng xã hội
- Responsive - chuyển thành 1 cột trên mobile
- **Load tự động từ footer.html**

### 3. Main Content
- Khu vực nội dung chính - khác nhau ở mỗi trang
- Sử dụng container để giới hạn width
- Content sections với background màu nhạt

### 4. JavaScript Features
- **Tự động load header và footer**
- Toggle hamburger menu
- Tự động highlight trang hiện tại
- Smooth scrolling
- Header shadow khi scroll
- Form validation (trang contact)

## 🔧 Tùy Chỉnh

### Thay Đổi Menu

Chỉ cần sửa file **`header.html`** - tất cả các trang sẽ tự động cập nhật!

```html
<!-- Trong header.html -->
<nav class="nav">
    <ul class="menu">
        <li><a href="index.html">Trang Chủ</a></li>
        <li><a href="about.html">Giới Thiệu</a></li>
        <!-- Thêm menu item mới ở đây -->
        <li><a href="newpage.html">Trang Mới</a></li>
    </ul>
</nav>
```

### Thay Đổi Footer

Chỉ cần sửa file **`footer.html`** - tất cả các trang sẽ tự động cập nhật!

```html
<!-- Trong footer.html -->
<p>Email: newemail@mywebsite.com</p>
```

### Thêm Trang Mới

1. Copy file `index.html` và đổi tên (ví dụ: `blog.html`)
2. Thay đổi nội dung trong phần `<main>`
3. **KHÔNG CẦN** thay đổi header/footer - JavaScript sẽ tự động load!
4. Chỉ cần thêm link mới vào `header.html` (1 lần duy nhất)

### Thay Đổi Màu Sắc

Trong file `style.css`:

```css
/* Màu header và footer */
.header, .footer {
    background-color: #2c3e50;  /* Đổi thành màu bạn thích */
}

/* Màu highlight */
.nav .menu li a.active {
    background-color: #3498db;  /* Đổi thành màu bạn thích */
}
```

## 💡 So Sánh: Trước và Sau

### ❌ Cách Cũ (Lặp Code)

```html
<!-- index.html - 100+ dòng -->
<header>...</header>  <!-- 30 dòng code -->
<main>Nội dung trang chủ</main>
<footer>...</footer>  <!-- 40 dòng code -->

<!-- about.html - 100+ dòng -->
<header>...</header>  <!-- 30 dòng code - GIỐNG HỆT -->
<main>Nội dung giới thiệu</main>
<footer>...</footer>  <!-- 40 dòng code - GIỐNG HỆT -->
```

**Vấn đề:** Muốn sửa menu phải sửa 4 file!

### ✅ Cách Mới (Tách Layout)

```html
<!-- index.html - CHỈ 30 dòng -->
<div id="header-placeholder"></div>
<main>Nội dung trang chủ</main>
<div id="footer-placeholder"></div>

<!-- about.html - CHỈ 30 dòng -->
<div id="header-placeholder"></div>
<main>Nội dung giới thiệu</main>
<div id="footer-placeholder"></div>

<!-- header.html - 1 file duy nhất -->
<header>...</header>

<!-- footer.html - 1 file duy nhất -->
<footer>...</footer>
```

**Lợi ích:** Muốn sửa menu chỉ sửa 1 file `header.html`!

## 💡 Tips Cho Học Viên

1. **Hiểu Fetch API**: Đây là cách JavaScript load file từ server
2. **Hiểu Promises**: `.then()` chạy sau khi fetch xong
3. **Hiểu DOM**: `innerHTML` để chèn HTML vào trang
4. **Thử Nghiệm**: Thử sửa `header.html` và xem tất cả trang thay đổi
5. **Tư Duy DRY**: Don't Repeat Yourself - không lặp lại code

## 🐛 Debug & Xử Lý Lỗi

### Lỗi: Header/Footer Không Hiện

**Nguyên nhân:** Mở file HTML trực tiếp (file://) thay vì qua server

**Giải pháp:** Sử dụng Live Server hoặc http-server (xem phần "Cách Mở và Chạy" ở trên)

### Lỗi: CORS Policy Error

```
Access to fetch at 'header.html' from origin 'null' has been blocked by CORS policy
```

**Giải pháp:** Chạy website qua local server, KHÔNG double-click file HTML

### Kiểm Tra Console

Mở Console (F12) để xem:
- "JavaScript đã được tải thành công!" - OK
- "Trang đã load xong..." - OK
- Nếu có lỗi đỏ - cần fix

### Menu Không Highlight Đúng Trang

Kiểm tra tên file trong URL có khớp với `href` trong menu không.

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 769px - 1024px
- **Mobile**: < 768px

## 🎓 Bài Tập Gợi Ý

### Cơ Bản
1. Thêm một trang mới "Portfolio" hoặc "Blog"
2. Thay đổi màu sắc của toàn bộ website
3. Thay đổi logo trong header.html
4. Thêm thêm link social media vào footer.html

### Nâng Cao
1. Thêm loading indicator khi load header/footer
2. Xử lý error nếu file không tồn tại
3. Thêm animation khi header/footer xuất hiện
4. Tạo nhiều layout khác nhau (header-admin.html cho trang admin)
5. Thêm breadcrumb navigation

### Thử Thách
1. Tạo hệ thống template phức tạp hơn
2. Load nội dung trang từ file riêng (như header/footer)
3. Tích hợp với backend API
4. Thêm dark mode toggle

## 📚 Học Thêm

Sau khi hiểu layout này, bạn có thể tìm hiểu:

- **Template Engines**: Handlebars, EJS, Pug
- **Frontend Frameworks**: React, Vue, Angular (có component system tốt hơn)
- **Static Site Generators**: Hugo, Jekyll, 11ty
- **Backend Rendering**: PHP includes, Node.js templates

## 📞 Hỗ Trợ

Nếu có bất kỳ câu hỏi nào, hãy liên hệ với giáo viên hoặc hỏi trong lớp học.

## 🎯 Tóm Tắt Quan Trọng

1. **Header và Footer** được tách vào `header.html` và `footer.html`
2. **JavaScript** tự động load 2 file này vào mỗi trang
3. **Phải chạy qua server** (Live Server/http-server), không double-click HTML
4. **Sửa 1 lần** trong header.html/footer.html → áp dụng cho tất cả trang
5. **Code ngắn gọn hơn**, dễ maintain hơn

## 📄 License

Template này hoàn toàn miễn phí cho mục đích học tập.

---

**Chúc các bạn học tốt! 🎉**

**Remember: DRY - Don't Repeat Yourself! 💪**

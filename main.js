const pageItems = document.querySelectorAll('.pages_item');
const bgImages = document.querySelectorAll('.app_bgimg-image');
const textSlides = document.querySelectorAll('.app_text-slide');

pageItems.forEach(item => {
  item.addEventListener('click', () => {
    const target = item.getAttribute('data-target');

    // Cập nhật nút active
    pageItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');

    // Ẩn tất cả ảnh và text
    bgImages.forEach(el => el.classList.remove('active'));
    textSlides.forEach(el => el.classList.remove('active'));

    // Hiện ảnh và text theo target
    document.querySelector(`.app_bgimg-image-${target}`).classList.add('active');
    document.querySelector(`.app_text-${target}`).classList.add('active');
  });
});
// スクロールしたらvisibleを付与
const items = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // 一度表示したら監視を解除
    }
  });
}, { threshold: 0.1 });

// ここが重要：各アイテムを監視開始
items.forEach(item => {
  observer.observe(item);
});

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const answer = button.nextElementSibling;

    // 他の項目を閉じる（アコーディオン動作）
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('open');
        item.querySelector('.faq-answer').classList.remove('open');
      }
    });

    // 現在クリックした項目を開閉
    faqItem.classList.toggle('open');
    answer.classList.toggle('open');
  });
});

const wrapper = document.querySelector('.slide-wrapper');
const container = document.querySelector('.slide-container');

if (window.innerWidth <= 768) {
  const container = document.querySelector('.slide-container');
  const wrapper = document.querySelector('.slide-wrapper');

  container.addEventListener('scroll', () => {
    // 半分スクロールしたら先頭に戻す
    if (container.scrollLeft >= wrapper.scrollWidth / 2) {
      container.scrollLeft = -= slideWidth * (totalSlides / 2);
    }
  });
}


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

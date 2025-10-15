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

// === スライドショー無限ループ（モバイル） ===
const slideContainer = document.querySelector('.slide-container');
const slideWrapper = document.querySelector('.slide-wrapper');
const firstSlide = slideWrapper.firstElementChild;

if (firstSlide && window.innerWidth <= 768) {
  // 1枚のスライドの幅を取得（10pxはCSSのmargin-right）
  const slideWidth = firstSlide.offsetWidth + 10;
  
  // スライドの枚数（1セット分）を取得
  const slideCount = slideWrapper.querySelectorAll('.slide').length / 2;

  slideContainer.addEventListener('scroll', () => {
    // スクロール位置が1セット分を超えたら、先頭に戻す
    // ※スクロールの勢いで少し超えることがあるため、等号付きで判定
    if (slideContainer.scrollLeft >= slideWidth * slideCount) {
      slideContainer.scrollLeft -= slideWidth * slideCount;
    }
  });
}

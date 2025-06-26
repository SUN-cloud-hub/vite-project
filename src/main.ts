// main.ts
import './style.css';

// 샘플 이미지 데이터 (Unsplash 무료 이미지 사용)
const images = [
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    caption: '산과 호수',
  },
  {
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    caption: '숲속의 길',
  },
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    caption: '해변의 일몰',
  },
  {
    src: 'https://th.bing.com/th/id/OIP.OYP5BdWEag2NdxbtPxtXbwAAAA?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3',
    caption: '동아대',
  },
  {
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    caption: '초원과 구름',
  },
  {
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    caption: '숲속의 아침',
  },
];

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.innerHTML = `
    <h1>이미지 갤러리</h1>
    <div class="gallery">
      ${images
        .map(
          (img) => `
            <div class="gallery-item">
              <img src="${img.src}" alt="${img.caption}" />
              <div class="caption">${img.caption}</div>
            </div>
          `
        )
        .join('')}
    </div>
  `;
}

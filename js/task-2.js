const gallery = document.querySelector(".gallery");

const galleryItems = images.map(({ url, alt }) => {
  return `
    <li class="gallery-item">
      <img src="${url}" alt="${alt}" class="gallery-image">
    </li>
  `;
}).join("");

gallery.insertAdjacentHTML("beforeend", galleryItems);

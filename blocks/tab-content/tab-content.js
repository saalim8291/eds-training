import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const [
    titleRow,
    iconRow,
    descRow,
    contentRow,
    linkRow,
    alignRow,
    bgRow,
  ] = block.children;

  const bgValue = bgRow?.textContent.trim().toLowerCase();
  bgRow?.remove();
  if (bgValue) block.classList.add(`bg-${bgValue}`);

  const alignValue = alignRow?.textContent.trim().toLowerCase();
  alignRow?.remove();
  if (alignValue) block.classList.add(`align-${alignValue}`);

  const iconImg = iconRow?.querySelector('img');
  if (iconImg) {
    const picture = createOptimizedPicture(iconImg.src, iconImg.alt, false, [{ width: '100' }]);
    moveInstrumentation(iconImg, picture.querySelector('img'));
    const wrapper = document.createElement('div');
    wrapper.className = 'tab-content-icon';
    wrapper.append(picture);
    iconRow.replaceWith(wrapper);
  } else {
    iconRow?.remove();
  }

  if (titleRow) {
    const heading = document.createElement('h3');
    heading.textContent = titleRow.textContent.trim();
    moveInstrumentation(titleRow, heading);
    titleRow.replaceWith(heading);
  }

  if (descRow) {
    const text = descRow.textContent.trim();
    if (text) {
      const desc = document.createElement('p');
      desc.className = 'tab-content-description';
      desc.textContent = text;
      moveInstrumentation(descRow, desc);
      descRow.replaceWith(desc);
    } else {
      descRow.remove();
    }
  }

  if (contentRow) {
    contentRow.className = 'tab-content-body';
  }

  const link = linkRow?.querySelector('a[href]');
  if (link) {
    link.className = 'button primary';
    const wrapper = document.createElement('p');
    wrapper.className = 'button-wrapper';
    moveInstrumentation(linkRow, link);
    wrapper.append(link);
    linkRow.replaceWith(wrapper);
  } else {
    linkRow?.remove();
  }
}

import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const row = block.firstElementChild;
  if (!row) return;
  const [titleCol, descCol, contentCol, bgCol] = row.children;

  const bgValue = bgCol?.textContent.trim().toLowerCase();
  bgCol?.remove();
  if (bgValue) block.classList.add(`bg-${bgValue}`);

  if (titleCol) {
    const heading = document.createElement('h3');
    heading.textContent = titleCol.textContent.trim();
    moveInstrumentation(titleCol, heading);
    titleCol.replaceWith(heading);
  }

  if (descCol) {
    const text = descCol.textContent.trim();
    if (text) {
      const desc = document.createElement('p');
      desc.className = 'tab-content-description';
      desc.textContent = text;
      moveInstrumentation(descCol, desc);
      descCol.replaceWith(desc);
    } else {
      descCol.remove();
    }
  }

  if (contentCol) {
    contentCol.className = 'tab-content-body';
  }
}

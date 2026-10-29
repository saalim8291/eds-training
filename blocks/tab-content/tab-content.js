import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const [titleRow, descRow, contentRow, bgRow] = block.children;

  const bgValue = bgRow?.textContent.trim().toLowerCase();
  bgRow?.remove();
  if (bgValue) block.classList.add(`bg-${bgValue}`);

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
}

import { moveInstrumentation } from '../../scripts/scripts.js';

const ARROW_PATHS = {
  prev: 'M15 18l-6-6 6-6',
  next: 'M9 18l6-6-6-6',
};

function createArrow(direction) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `info-banner-arrow info-banner-arrow-${direction}`;
  button.setAttribute('aria-hidden', 'true');
  button.tabIndex = -1;
  button.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${ARROW_PATHS[direction]}"/></svg>`;
  return button;
}

export default function decorate(block) {
  const [headingRow, descRow] = block.children;

  const content = document.createElement('div');
  content.className = 'info-banner-content';

  if (headingRow) {
    const heading = document.createElement('h2');
    heading.textContent = headingRow.textContent.trim();
    moveInstrumentation(headingRow, heading);
    content.append(heading);
  }

  if (descRow) {
    const description = document.createElement('p');
    description.textContent = descRow.textContent.trim();
    moveInstrumentation(descRow, description);
    content.append(description);
  }

  block.replaceChildren(createArrow('prev'), content, createArrow('next'));
}

import { moveInstrumentation } from '../../scripts/scripts.js';

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

  block.replaceChildren(content);
}

import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const [
    headingRow,
    descRow,
    linkRow,
    secondaryLinkRow,
  ] = block.children;

  const heading = document.createElement('h1');
  if (headingRow) {
    heading.textContent = headingRow.textContent.trim();
    moveInstrumentation(headingRow, heading);
  }

  const content = document.createElement('div');
  content.className = 'intro-banner-content';

  if (descRow) {
    const description = document.createElement('p');
    description.className = 'intro-banner-description';
    description.textContent = descRow.textContent.trim();
    moveInstrumentation(descRow, description);
    content.append(description);
  }

  const actions = document.createElement('div');
  actions.className = 'intro-banner-actions';

  const link = linkRow?.querySelector('a[href]');
  if (link) {
    link.className = 'button primary';
    const wrapper = document.createElement('p');
    wrapper.className = 'button-wrapper';
    moveInstrumentation(linkRow, link);
    wrapper.append(link);
    actions.append(wrapper);
  }

  const secondaryLink = secondaryLinkRow?.querySelector('a[href]');
  if (secondaryLink) {
    secondaryLink.className = 'intro-banner-secondary-link';
    moveInstrumentation(secondaryLinkRow, secondaryLink);
    actions.append(secondaryLink);
  }

  if (actions.children.length) content.append(actions);

  block.replaceChildren(heading, content);
}

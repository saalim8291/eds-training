import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const [headingRow, descRow, ...itemRows] = block.children;

  const header = document.createElement('div');
  header.className = 'feature-highlights-header';

  if (headingRow) {
    const heading = document.createElement('h2');
    heading.textContent = headingRow.textContent.trim();
    moveInstrumentation(headingRow, heading);
    header.append(heading);
  }

  if (descRow) {
    const text = descRow.textContent.trim();
    if (text) {
      const description = document.createElement('p');
      description.textContent = text;
      moveInstrumentation(descRow, description);
      header.append(description);
    } else {
      descRow.remove();
    }
  }

  const list = document.createElement('ul');
  list.className = 'feature-highlights-list';

  itemRows.forEach((row) => {
    const [iconCol, labelCol] = row.children;
    const li = document.createElement('li');
    moveInstrumentation(row, li);

    const img = iconCol?.querySelector('img');
    if (img) {
      const picture = createOptimizedPicture(img.src, img.alt, false, [{ width: '64' }]);
      moveInstrumentation(img, picture.querySelector('img'));
      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'feature-highlights-icon';
      iconWrapper.append(picture);
      li.append(iconWrapper);
    }

    if (labelCol) {
      const label = document.createElement('span');
      label.className = 'feature-highlights-label';
      label.textContent = labelCol.textContent.trim();
      moveInstrumentation(labelCol, label);
      li.append(label);
    }

    list.append(li);
  });

  block.replaceChildren(header, list);
}

import { moveInstrumentation } from '../../scripts/scripts.js';

let groupInstances = 0;

export default function decorate(block) {
  groupInstances += 1;
  const name = `radio-group-${groupInstances}`;

  const fieldset = document.createElement('fieldset');
  fieldset.className = 'radio-group-options';

  [...block.children].forEach((row, i) => {
    const [labelCol, checkedCol] = row.children;
    const label = labelCol?.textContent.trim() || `Option ${i + 1}`;
    const checked = checkedCol?.textContent.trim().toLowerCase() === 'true';
    const id = `${name}-${i}`;

    const option = document.createElement('div');
    option.className = 'radio-group-option';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = name;
    input.id = id;
    input.value = label;
    if (checked) input.checked = true;

    const optionLabel = document.createElement('label');
    optionLabel.setAttribute('for', id);
    optionLabel.textContent = label;

    option.append(input, optionLabel);
    moveInstrumentation(row, option);
    fieldset.append(option);
  });

  block.replaceChildren(fieldset);
}

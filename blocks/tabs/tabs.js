/* eslint-disable no-console */
// import { moveInstrumentation } from '../../scripts/scripts.js';

// let tabsInstances = 0;

export default function decorate(block) {
  console.log(block, 'block');
  // tabsInstances += 1;
  // const instanceId = tabsInstances;

  // const tablist = document.createElement('div');
  // tablist.className = 'tabs-list';
  // tablist.setAttribute('role', 'tablist');

  // const panels = document.createElement('div');
  // panels.className = 'tabs-panels';

  // [...block.children].forEach((row, i) => {
  //   const [labelCol, contentCol] = row.children;
  //   const tabId = `tabs-${instanceId}-tab-${i}`;
  //   const panelId = `tabs-${instanceId}-panel-${i}`;

  //   const button = document.createElement('button');
  //   button.type = 'button';
  //   button.id = tabId;
  //   button.className = 'tabs-tab';
  //   button.setAttribute('role', 'tab');
  //   button.setAttribute('aria-controls', panelId);
  //   button.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
  //   button.tabIndex = i === 0 ? 0 : -1;
  //   button.textContent = labelCol?.textContent.trim() || `Tab ${i + 1}`;
  //   tablist.append(button);

  //   const panel = document.createElement('div');
  //   panel.id = panelId;
  //   panel.className = 'tabs-panel';
  //   panel.setAttribute('role', 'tabpanel');
  //   panel.setAttribute('aria-labelledby', tabId);
  //   panel.hidden = i !== 0;
  //   if (contentCol)
  // while (contentCol.firstElementChild) panel.append(contentCol.firstElementChild);
  //   moveInstrumentation(row, panel);
  //   panels.append(panel);

  //   const selectTab = () => {
  //     tablist.querySelectorAll('[role="tab"]').forEach((tab) => {
  //       tab.setAttribute('aria-selected', 'false');
  //       tab.tabIndex = -1;
  //     });
  //     panels.querySelectorAll('[role="tabpanel"]').forEach((p) => { p.hidden = true; });
  //     button.setAttribute('aria-selected', 'true');
  //     button.tabIndex = 0;
  //     panel.hidden = false;
  //   };

  //   button.addEventListener('click', selectTab);
  //   button.addEventListener('keydown', (e) => {
  //     const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  //     const idx = tabs.indexOf(button);
  //     let nextIdx;
  //     if (e.key === 'ArrowRight') nextIdx = (idx + 1) % tabs.length;
  //     else if (e.key === 'ArrowLeft') nextIdx = (idx - 1 + tabs.length) % tabs.length;
  //     else return;
  //     e.preventDefault();
  //     tabs[nextIdx].focus();
  //     tabs[nextIdx].click();
  //   });
  // });

  // block.replaceChildren(tablist, panels);
}

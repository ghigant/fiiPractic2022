import { createElement } from "../dom-utils.js";

export const render = (rootNode) => {
  const mainContent = createElement('section', {
    innerHTML: `
      <aside>
        <div id="calendar">
          <h3>Calendar</h3>
          <div id="calendar-wrapper"></div>
        </div>
        <div id="categories">
          <h3>Categories</h3>
        </div>
      </aside>
      <main>
        <h2>Events of the day</h2>
      </main>
    `
  });

  rootNode.append(mainContent);
}
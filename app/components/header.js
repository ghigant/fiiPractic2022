import { createElement, compile } from "../dom-utils.js";

const template = `
  <h1>{title}</h1>
  <button name="add-event"><i>+</i> {buttonLabel}</button>
`;

const labels = {
  title: 'Calendar',
  buttonLabel: 'Add Event'
};

export const render = (rootNode) => {
  const html = compile(template, labels);
  const header = createElement('header', {
    innerHTML: html,
  });

  rootNode.append(header);
}
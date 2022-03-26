export const render = (rootNode, props = {}) => {
  const { currentDate = new Date() } = props;  

  const section = document.createElement('section');
  const labels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  for(let i = 0; i < labels.length; i++) {
    const div = document.createElement('div');
    div.textContent = labels[i];
    section.appendChild(div);
  }

  const date = new Date(currentDate);
  date.setDate(1);
  const currentMonth = date.getMonth();

  let day = 1;

  while(date.getMonth() === currentMonth) {
    const div = document.createElement('div');
    div.textContent = day;
    div.setAttribute('data-date', date.toJSON())
    section.appendChild(div);
    date.setDate(++day);
  }

  section.addEventListener('click', (event) => {
    const date = parseInt(event.target.textContent, 10);
    if (!isNaN(date)) {
      const fullDate = new Date(event.target.getAttribute('data-date'));
      props.onDateChange(fullDate);
    }
  });

  rootNode.append(section);
};

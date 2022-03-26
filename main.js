import { render as displayHeader } from './app/components/header.js';
import { render as displayMainContent } from './app/components/main-content.js';
import { render as renderCalendarWidget } from './app/components/calendar-widget.js';

const appNode = document.getElementById('wrapper');

const onDateChange = (date) => {
  console.log('main.js', date);
  renderCalendarWidget(document.getElementById('calendar-wrapper'), {
    currentDate: date,
    onDateChange
  })
}

displayHeader(appNode);
displayMainContent(appNode);
renderCalendarWidget(document.getElementById('calendar-wrapper'), {
  currentDate: new Date(),
  onDateChange
});


// (() => {
  // const calendar = document.getElementById('calendar-wrapper');
  // calendar.removeChild(calendar.lastElementChild);

  // const section = document.createElement('section');
  // const labels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "qSa"];

  // for(let i = 0; i < labels.length; i++) {
  //   const div = document.createElement('div');
  //   div.textContent = labels[i];
  //   section.appendChild(div);
  // }

  // const date = new Date();
  // date.setDate(1);
  // const currentMonth = date.getMonth();

  // let day = 1;

  // while(date.getMonth() === currentMonth) {
  //   const div = document.createElement('div');
  //   div.textContent = day;
  //   div.className = 'cell';
  //   section.appendChild(div);
  //   date.setDate(++day);
  // }

  // calendar.appendChild(section);
// })();


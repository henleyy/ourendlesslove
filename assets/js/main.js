let date_1 = new Date('12/25/2022');
let date_2 = new Date();

let difference = date_1.getTime() - date_2.getTime();
console.log(difference);

const days = (date_1, date_2) => {
  let difference = date_2.getTime() - date_1.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays;
};

const countDay = days(date_1, date_2);

// var timeCountElement = document.getElementById('time-count');
// timeCountElement.innerHTML = countDay;

const listPro = document.querySelector('#timecount-number');

const render = function () {
  const htmls = `<div class="6">
  ${countDay}
</div>`;

  listPro.innerHTML = htmls;
};

render();

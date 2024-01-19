const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

const hourdiv = select(".hour-hand");
const minutediv = select(".minute-hand");
const seconddiv = select(".second-hand");
const datediv = select(".date");
const daydiv = select(".day");

for (let i = 0; i < 5; i++) {
  const span = document.createElement("span");
  span.setAttribute("class", "hSpan");
  hourdiv.appendChild(span);
}
for (let i = 0; i < 7; i++) {
  const span = document.createElement("span");
  span.setAttribute("class", "mSpan");

  minutediv.appendChild(span);
}
for (let i = 0; i < 8; i++) {
  const span = document.createElement("span");
  span.setAttribute("class", "sSpan");
  seconddiv.appendChild(span);
}

const clock = () => {
  const d = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();
  const date = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  const day = d.getDay();

  const hDeg = h * 30 + (m / 60) * 30;
  const mDeg = m * 6 + (s / 60) * 6;
  const sDeg = s * 6;

  const hSpans = selectAll(".hSpan");
  hSpans.forEach(item => item.innerHTML = h);

  const mSpans = selectAll(".mSpan");
  mSpans.forEach(item => item.innerHTML = m);

  const sSpans = selectAll(".sSpan");
  sSpans.forEach(item => item.innerHTML = s);

  hourdiv.style.transform = `translateX(-50%) rotate(${hDeg}deg)`;
  minutediv.style.transform = `translateX(-50%) rotate(${mDeg}deg)`;
  seconddiv.style.transform = `translateX(-50%) rotate(${sDeg}deg)`;
  datediv.innerHTML = `${date}/ ${month}/ ${year}`;
  daydiv.innerHTML = weekday[day];
};

setInterval("clock()", 1000);
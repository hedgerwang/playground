// @flow

import {init} from './actions';

function main() {
  init();
}

window.onload = main;


// const el = document.getElementById('pokeball');
//   let ball = null;
//   let mx0 = 0;
//   let my0 = 0;
//   let bx = 0;
//   let by = 0;
//   let br = 0;
//   el.onmousedown = (e) => {
//     ball = el;
//     ball.className = 'spin';
//     mx0 = e.clientX;
//     my0 = e.clientY;
//     bx = el._x || 0;
//     by = el._y || 0;
//     br = el._r || 0;
//     e.preventDefault();
//   };
//   document.onmousemove = (e) => {
//     if (!ball) {
//       return;
//     }
//     const dx = e.clientX - mx0;
//     const dy = e.clientY - my0;
//     const x = bx + dx;
//     const y = by + dy;

//     ball._x = x;
//     ball._y = y;
//     ball._r = (ball._r || 0) + 10;
//     ball.style.transform = `translate3d(${x}px,${y}px,0) rotate(${ball._r}deg) scale(1.3)`;
//     ball.style.boxShadow = '0 0 3px 3px hsla(63, 96%, 52%, 0.712)';
//   };
//   document.onmouseup = (e) => {
//     if (!ball) {
//       return;
//     }
//     const dx = e.clientX - mx0;
//     const dy = e.clientY - my0;
//     const x = bx + dx;
//     const y = by + dy;
//     ball.style.transform = `translate3d(${x}px,${y}px,0) rotate(${ball._r}deg) scale(1)`;
//     ball.style.boxShadow = '';
//     ball = null;
//   };
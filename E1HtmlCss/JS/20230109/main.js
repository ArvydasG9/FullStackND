// document.querySelectorAll('.tabs-nav li').forEach(el => {
//     const target = el.dataset.target;

//     el.addEventListener('click', () => {
//         document.querySelectorAll('.tabs .content').forEach(section => {
//             section.style.display = 'none';
//         });
//         document.getElementById(target).style.display = 'flex';
//     });
// });

import fnHeader from './header.js';
import { fnBodyTxt } from './body.js';
import { fnNav, fnOrigin } from './footer.js';

let headerHTML = fnHeader.fnLog() + fnHeader.fnNav();
document.querySelector('header').innerHTML = headerHTML;

let bodyTxt = await fnBodyTxt();
document.querySelector('main div.container p').textContent = bodyTxt;

let footerHTML = fnOrigin() + fnNav();
document.querySelector('footer').innerHTML = footerHTML;
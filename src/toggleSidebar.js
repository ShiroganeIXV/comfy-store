import { getElement } from './utils.js';

// select the elements from the DOM using their class
const toggleNav = getElement('.toggle-nav');
const sidebarOverlay = getElement('.sidebar-overlay');
const closeBtn = getElement('.sidebar-close');

// add event listener

toggleNav.addEventListener('click', () => {
    sidebarOverlay.classList.add('show'); 
})
closeBtn.addEventListener('click', () => {
    sidebarOverlay.classList.remove('show'); 
})
const withDropDown = document.querySelector('.with_dropdown');
const dropDown = document.querySelector('.dropdown');
const mobile_menu_btn = document.querySelector('.mobile_menu_btn');
const body = document.querySelector('body');
const mobile_menu_bg = document.querySelector('.mobile_menu_bg');
const dropDownToggle = document.querySelectorAll('.dropdown_toggle');

for (let dropDownToggle of document.querySelectorAll('.with_dropdown .dropdown_toggle')) {
    let dropDown = dropDownToggle.closest('.with_dropdown');
    dropDown.addEventListener('click', (e) => {
        e.preventDefault();
        dropDown.classList.add('open');
    });
}

// withDropDown.addEventListener('click', () => {
//     if(dropDown) {
//         dropDown.classList.add('open');
//     }
// });

mobile_menu_btn.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.toggle('mobile-menu-opened');

});

mobile_menu_bg.addEventListener('click', () => {
    body.classList.remove('mobile-menu-opened');
});


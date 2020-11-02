const mobile_menu_btn = document.querySelector('.mobile_menu_btn');
const body = document.querySelector('body');
const mobile_menu_bg = document.querySelector('.mobile_menu_bg');


for (let dropDownToggle of document.querySelectorAll('.with_dropdown .dropdown_toggle')) {
    let withDropdown = dropDownToggle.closest('.with_dropdown');

    dropDownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        withDropdown.classList.toggle('open');
    });
}


document.addEventListener('click', (e) => {
    for (let dropDown of document.querySelectorAll('.with_dropdown.open')) {
        if (dropDown.contains(e.target) === false) {
            dropDown.closest('.with_dropdown').classList.remove('open');
        }
    }
});

mobile_menu_btn.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.toggle('mobile-menu-opened');

});

mobile_menu_bg.addEventListener('click', () => {
    body.classList.remove('mobile-menu-opened');
});




const withDropDown = document.querySelector('.with_dropdown'),
      dropDown = document.querySelector('.dropdown');

withDropDown.addEventListener('click', () => {
            dropDown.classList.add('open');
});
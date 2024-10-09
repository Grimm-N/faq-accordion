document.querySelectorAll('.accordion__item--title').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;

        document.querySelectorAll('.accordion__item').forEach(child => {
            const plusIcon = child.querySelector('.icon__open');
            const minusIcon = child.querySelector('.icon__close');
            const content = child.querySelector('.accordion__item--content');

            if (child !== parent) {
                child.classList.remove('active');
                plusIcon.classList.remove('hidden'); 
                minusIcon.classList.add('hidden'); 
                content.style.display = 'none'; 
            }
        });

        parent.classList.toggle('active');
        const plusIcon = parent.querySelector('.icon__open');
        const minusIcon = parent.querySelector('.icon__close');
        const content = parent.querySelector('.accordion__item--content');

        if (parent.classList.contains('active')) {
            plusIcon.classList.add('hidden'); 
            minusIcon.classList.remove('hidden'); 
            content.style.display = 'block'; 
        } else {
            plusIcon.classList.remove('hidden'); 
            minusIcon.classList.add('hidden'); 
            content.style.display = 'none'; 
        }
    });
});



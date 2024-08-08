document.addEventListener('DOMContentLoaded', function() {
    //Code that is executed when the DOM is loaded

    //The following allows for smooth scrolling when using the a tags
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    //The following is a zoom effect for the images in the Hobbies section
    const hobbies = document.querySelectorAll('.hobby');

    hobbies.forEach(hobby => {
        //Zoomed in
        hobby.addEventListener('mouseenter', () => {
            hobby.querySelector('.hobby-img').style.transform = 'scale(1.1)';
        });
        //Zoomed out
        hobby.addEventListener('mouseleave', () => {
            hobby.querySelector('.hobby-img').style.transform = 'scale(1)';
        });
    });
});


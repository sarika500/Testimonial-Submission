document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("testimonial-form");
    const testimonialsList = document.getElementById("testimonials-list");
    const toggleThemeButton = document.getElementById("toggle-theme");
    
    
    function loadTestimonials() {
        const testimonials = JSON.parse(localStorage.getItem("testimonials")) || [];
        testimonialsList.innerHTML = "";
        testimonials.forEach(testimonial => {
            const testimonialDiv = document.createElement("div");
            testimonialDiv.classList.add("testimonial");
            testimonialDiv.innerHTML = `
                <p><strong>${testimonial.name}</strong></p>
                <p>${testimonial.message}</p>
                <p>⭐ ${"★".repeat(testimonial.rating)}</p>
            `;
            testimonialsList.appendChild(testimonialDiv);
        });
    }


    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;
        const rating = document.getElementById("rating").value;

        const newTestimonial = { name, message, rating: parseInt(rating) };
        const testimonials = JSON.parse(localStorage.getItem("testimonials")) || [];
        testimonials.push(newTestimonial);
        localStorage.setItem("testimonials", JSON.stringify(testimonials));

        form.reset();
        loadTestimonials();
    });

    // Toggle dark mode
    toggleThemeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    loadTestimonials();
});

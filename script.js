// Show message when "Start Your Journey" button is clicked
function showMessage() {
    alert("🏔️ Welcome to Adventure Peaks! Get ready for an amazing journey!");
    document.querySelector('#destinations').scrollIntoView({ behavior: 'smooth' });
}

// Show information about a selected destination or activity
function showPlace(place) {
    const infoBox = document.getElementById('info-box');
    const messages = {
        'Himalayas': '🏔️ Himalayas - Home to the world\'s highest peaks. Experience trekking, mountaineering, and breathtaking views. Best season: May to September.',
        'Spiti Valley': '🏜️ Spiti Valley - Remote and stunning desert landscape. Perfect for camping, motorbikes, and stargazing. Best season: June to September.',
        'Manali': '🌲 Manali - Adventure hub with paragliding, river rafting, and scenic beauty. Best season: March to June and September to November.',
        'Valley of Flowers': '🌸 Valley of Flowers - UNESCO World Heritage Site. A paradise of colorful flowers. Best season: July to September.',
        'Trekking': '🥾 Trekking - Explore mountains and forests on foot. Various difficulty levels available for beginners to experts.',
        'Camping': '🏕️ Camping - Experience nature under the stars. We provide all necessary equipment and experienced guides.',
        'Rock Climbing': '🧗 Rock Climbing - Challenge yourself on natural rock formations. Training provided for all skill levels.',
        'River Rafting': '🚣 River Rafting - Thrilling water sports on scenic rivers. Safety equipment and professional guides included.',
        'Mountain Biking': '🚵 Mountain Biking - Ride through challenging terrains and scenic trails. Bikes and protective gear provided.',
        'Paragliding': '🪂 Paragliding - Fly over mountains and valleys for an unforgettable aerial experience. Licensed instructors available.'
    };

    const message = messages[place] || `Learn more about ${place}!`;
    infoBox.textContent = message;
    infoBox.scrollIntoView({ behavior: 'smooth' });
}

// Show/hide "Back to Top" button based on scroll position
window.addEventListener('scroll', function() {
    const backToTopBtn = document.querySelector('body > button');
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon. 🎉');
    this.reset();
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Adventure Peaks website loaded successfully!');
});
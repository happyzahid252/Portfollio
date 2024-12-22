const hamburger = document.querySelector('.hamburger');
const sidebar = document.createElement('div');
const overlay = document.createElement('div');

// Create sidebar and overlay dynamically
sidebar.className = 'sidebar';
overlay.className = 'overlay';

// Add sidebar links
sidebar.innerHTML = `
    <img src="./IMAGES/arsalan.png" style="width:150px;height: 150px;border-radius: 50%; margin: 20px auto; display: block;">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
`;
document.body.append(sidebar, overlay);

// Toggle sidebar visibility
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Close sidebar when clicking outside
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

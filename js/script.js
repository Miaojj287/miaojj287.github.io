// Add JavaScript functionality if needed
document.addEventListener('DOMContentLoaded', function() {
   // Example: Smooth scrolling for anchor links
   const links = document.querySelectorAll('a[href^="#"]');
   for (const link of links) {
       link.addEventListener('click', function(event) {
           event.preventDefault();
           const targetId = link.getAttribute('href').substring(1);
           document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
       });
   }
});
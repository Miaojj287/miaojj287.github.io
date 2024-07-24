let isActive = false;
function toggle() {
  if (isActive) {
    //disable active
    document.querySelector('.right_nav').className = 'right_nav';
    document.querySelector('.shadow').className = 'shadow';
    document.querySelector('.mobile_nav').className = 'mobile_nav';
    isActive = false;
  } else {
    //activate
    document.querySelector('.right_nav').className = 'right_nav active';
    document.querySelector('.shadow').className = 'shadow active';
    document.querySelector('.mobile_nav').className = 'mobile_nav active';
    isActive = true;
  }
}
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (section) {
      if (section.isIntersecting) {
        section.target.className = 'active';
      }
    });
  }, {threshold: .8});
  
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

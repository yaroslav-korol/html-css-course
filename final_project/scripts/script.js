// Ensure the entire page is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Set outer scope variables
  const body = document.querySelector('body');
  const menuButton = document.querySelector('.menu-icon');
  const sidebar = document.querySelector('.sidebar');

  // Toggle the side navigation
  menuButton.onclick = () => {

    if (window.innerWidth <= 525 && body.style.paddingLeft === '96px') {
      sidebar.classList.replace('sidebar-compact', 'sidebar-hide');
      body.style.paddingLeft = '0';
    }
    else if (window.innerWidth <= 525) {
      sidebar.classList.replace('sidebar-hide', 'sidebar-compact');
      body.style.paddingLeft = '96px';
    }
    else if (body.style.paddingLeft === '240px') {
      body.style.paddingLeft = '96px';
      sidebar.classList.replace('sidebar-wide', 'sidebar-compact');
    }
    else {
      body.style.paddingLeft = '240px';
      sidebar.classList.replace('sidebar-compact', 'sidebar-wide');
    }
  }

  // Sidebar auto resize depending on viewport with
  function toggleSidebarStyle() {
    // Get viewport width
    const width = window.innerWidth;

    if (width <= 525) {
      body.style.paddingLeft = '0'; // Reset body padding for small screens
      sidebar.classList.replace('sidebar-compact', 'sidebar-hide');
    } else {
      // Check the viewport width and adjust styles accordingly
      if (width > 1315) {
        body.style.paddingLeft = '240px';
        sidebar.classList.replace('sidebar-compact', 'sidebar-wide');
      } else {
        body.style.paddingLeft = '96px';
        sidebar.classList.remove('sidebar-hide', 'sidebar-wide');
        sidebar.classList.add('sidebar-compact');
      }
    }
  }

  // Function to handle window resize event
  function handleResize() {
    let timeout;

    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        toggleSidebarStyle();
      }, 200);
    };
  }


  // Initial call to set sidebar style based on viewport width
  toggleSidebarStyle();

  // Add event listener for window resize
  window.addEventListener('resize', handleResize());

});
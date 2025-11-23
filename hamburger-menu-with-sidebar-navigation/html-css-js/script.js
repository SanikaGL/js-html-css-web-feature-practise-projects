/* script.js - BASIC hamburger menu behavior
   Each block/line explains what it does in plain language for beginners.
*/

/* Get references to important elements in the page (we'll interact with them) */
const hamburger = document.getElementById('hamburger'); // the button user clicks
const sidebar = document.getElementById('sidebar');     // the sliding menu
const bodyEl = document.body;                            // the <body> element

/* Explanation:
   - DOM = Document Object Model. It's a tree of elements representing the page.
     "Get reference to element" means we find that element in the DOM to change it later.
*/

/* Function to toggle the sidebar open/closed */
function toggleSidebar() {
  // Check if sidebar currently has the "open" class
  const isOpen = sidebar.classList.contains('open');

  if (isOpen) {
    // If sidebar is open, remove the "open" class to hide it
    sidebar.classList.remove('open');

    // Update accessibility attributes so screen readers know it's hidden
    sidebar.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');

    // Remove a helper body class that shifts content (visual nicety)
    bodyEl.classList.remove('sidebar-open');
  } else {
    // If sidebar is closed, add the "open" class to show it
    sidebar.classList.add('open');

    // Update accessibility attributes to show it's visible
    sidebar.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');

    // Add helper class so content gets pushed to the right (optional)
    bodyEl.classList.add('sidebar-open');
  }
}

/* Attach a click event listener to the hamburger button.
   - event listener = code that runs when something happens (here: user clicks).
   - We use addEventListener so we can have multiple listeners if needed. */
hamburger.addEventListener('click', function (event) {
  toggleSidebar(); // When button clicked, open or close the sidebar
  // Prevent default behavior is not necessary here (button default is fine),
  // but here is how you'd stop other things: event.preventDefault();
});

/* Close the sidebar when user clicks outside it (optional but common UX) */
document.addEventListener('click', function (event) {
  // If the sidebar is not open, do nothing.
  if (!sidebar.classList.contains('open')) return;

  // If the click happened inside the sidebar or on the hamburger, do nothing.
  if (sidebar.contains(event.target) || hamburger.contains(event.target)) return;

  // Otherwise, click was outside: close the sidebar.
  sidebar.classList.remove('open');
  sidebar.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
  bodyEl.classList.remove('sidebar-open');
});

/* Keyboard accessibility:
   Close menu if user presses Escape key (good accessibility practice) */
document.addEventListener('keydown', function (event) {
  // Define key variable for different browser key properties
  const key = event.key || event.keyCode;

  // If key is Escape (or code 27), and sidebar is open, close it
  if ((key === 'Escape' || key === 'Esc' || key === 27) && sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
    sidebar.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    bodyEl.classList.remove('sidebar-open');
  }
});

/* CSS-only alternative instructions (inline):
   /* CSS-only alternative: 
      - Add a hidden checkbox input in HTML: <input id="menu-toggle" type="checkbox" />
      - Change hamburger button to label for that checkbox: <label for="menu-toggle">...</label>
      - Then in CSS enable: #menu-toggle:checked ~ .sidebar { transform: translateX(0); }
      - To use CSS-only, remove or comment out the JS event listeners above (lines where addEventListener is used).
   */
   
/* BEST PRACTICE (end of file comment):
   - Prefer using CSS transform for the sliding animation (that's what we did).
   - Keep JS minimal: only toggle classes and ARIA attributes, don't animate with JS.
   - For simple sites, CSS-only (checkbox trick) can work, but JS provides better accessibility control.
*/


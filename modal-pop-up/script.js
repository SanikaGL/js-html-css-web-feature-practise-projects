// Grab elements from HTML so JS can control them
const openBtn = document.getElementById("openBtn");     // button that opens modal
const closeBtn = document.getElementById("closeBtn");   // button that closes modal
const modal = document.getElementById("modal");         // the popup box
const overlay = document.getElementById("overlay");     // dark background layer

// When user clicks "Open Modal"
openBtn.addEventListener("click", function () {
    // Show modal and overlay
    modal.style.display = "block";     // "block" = make element visible
    overlay.style.display = "block";   // dark background becomes visible
});

// When user clicks "Close"
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";      // hide modal
    overlay.style.display = "none";    // hide overlay
});

// When user clicks outside modal (on overlay)
overlay.addEventListener("click", function () {
    modal.style.display = "none";
    overlay.style.display = "none";
});

/*
CSS-ONLY ALTERNATIVE:
----------------------
If you wanted no JS at all, you could use:
   #modal:target { display: block; }
But that requires modifying HTML with anchor links.
For beginners, JS is clearer and easier to understand.

BEST PRACTICE (JS END):
Use JS to show/hide modals because it gives the most control.
*/

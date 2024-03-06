document.addEventListener("DOMContentLoaded", function() {
    // Function to handle 404 redirection
    function redirectTo404() {
        window.location.href = "/404.html"; // Update the path as needed
    }

    // Check if the URL is not the expected one and redirect to 404
    if (window.location.href !== "https://haseefmuhammed.github.io/WebCraft/") {
        redirectTo404();
    }
});
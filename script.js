// Function to automatically start the background music when the page loads
window.onload = function() {
    // Automatically play background music when the page loads
    var backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play();

    // Additional code for the Unity game
    var unityContainer = document.querySelector("#unity-container");

    // Dynamically load the Unity loader script
    var script = document.createElement('script');
    script.src = "/MissingTitleXamp/MissingTitleFinal/Build/MissingTitleFinal.loader.js"; // Ensure correct path
    script.onload = function() {
        // Check if UnityLoader is now defined
        if (typeof UnityLoader !== "undefined") {
            // Unity is available, instantiate the game
            UnityLoader.instantiate("unity-container", "MissingTitleFinal/Build", {
                onProgress: function(gameInstance, progress) {
                    console.log("Loading progress: " + progress);
                },
                onError: function(error) {
                    console.error("Error loading Unity game:", error);
                }
            });
        } else {
            console.error("UnityLoader is not defined!");
        }
    };
    script.onerror = function() {
        console.error("Error loading Unity loader script.");
    };
    document.body.appendChild(script);
};

// Function to start the storyline page
function startStory() {
    // Change body class when entering the story page
    document.body.classList.remove("home");
    document.body.classList.add("story-page");

    // Hide the welcome section
    document.getElementById("welcome-section").style.display = "none";

    // Show the storyline section
    document.getElementById("story-section").style.display = "flex";
}

// Function to start the game
function startGame() {
    // Change body class for the game page
    document.body.classList.remove("story-page");
    document.body.classList.add("game-page");

    // Hide the storyline section
    document.getElementById("story-section").style.display = "none";

    // Show the game section
    document.getElementById("game-section").style.display = "flex";
}

// Function to show the loss page
function showLossPage() {
    // Change body class for the loss page
    document.body.classList.remove("game-page");
    document.body.classList.add("loss-page");

    // Hide the game section
    document.getElementById("game-section").style.display = "none";

    // Show the loss page section
    document.getElementById("loss-page").style.display = "flex";

    // Remove the restart button from the loss page if it exists
    const restartButton = document.getElementById("restart-button");
    if (restartButton) {
        restartButton.style.display = "none";
    }
}

// Function to restart the game and return to the home menu
function restartGame() {
    // Reset the body class to the home page
    document.body.className = "home";

    // Hide all sections except the welcome section
    document.getElementById("story-section").style.display = "none";
    document.getElementById("game-section").style.display = "none";
    document.getElementById("loss-page").style.display = "none";

    // Show the welcome section again
    document.getElementById("welcome-section").style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function () {
    const projects = {
        1: { 
            title: "Ritz Carlton Hotel", 
            images: ["images/01_Ritz1.webp", "images/01_Ritz2.webp"],
            description: "Project details about Ritz Carlton Hotel."
        },
        2: { 
            title: "My City Hotel", 
            images: ["images/02_MyCity1.webp", "images/02_MyCity2.webp"],
            description: "Project details about My City Hotel."
        },
        3: { 
            title: "Kempinski Residence Astoria", 
            images: ["images/03_Kempinski1.webp", "images/03_Kempinski2.webp"],
            description: "Project details about Kempinski Residence Astoria."
        }
    };

    let currentProject = null;
    let currentImageIndex = 0;

    window.toggleProject = function (projectId) {
        if (currentProject === projectId) {
            document.getElementById("project-details").classList.add("hidden");
            currentProject = null;
            return;
        }
        currentProject = projectId;
        document.getElementById("project-title").textContent = projects[projectId].title;
        document.getElementById("project-description").textContent = projects[projectId].description;
        currentImageIndex = 0;
        updateImage();
        document.getElementById("project-details").classList.remove("hidden");
    };

    function updateImage() {
        document.getElementById("project-image").src = projects[currentProject].images[currentImageIndex];
    }

    window.prevImage = function () {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateImage();
        }
    };

    window.nextImage = function () {
        if (currentImageIndex < projects[currentProject].images.length - 1) {
            currentImageIndex++;
            updateImage();
        }
    };
});

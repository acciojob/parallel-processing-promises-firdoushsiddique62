 //your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const imageUrls = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// Function to download an image
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image's URL: ${url.url}`));
    img.src = url.url;
  });
}

// Function to download and display images
function downloadAndDisplayImages() {
   const outputDiv = document.getElementById("output");

   Promise.all(imageUrls.map(downloadImage))
     .then((images) => {
       images.forEach((image) => {
         const imgElement = document.createElement("img");
         imgElement.src = image.src; // Assuming image.src contains the image URL
         outputDiv.appendChild(imgElement);
       });
     })
     .catch((error) => {
       console.error(error);
     });
}

// Event listener for the button click
const downloadButton = document.getElementById("download-images-button");
downloadButton.addEventListener("click", downloadAndDisplayImages);
console.log("hello there");

let imgs = document.images;

// these images can be related to a specific person
const customImgPaths = Array(7)
  .fill(1)
  .map((x, i) => `assets/${x + i}.jpg`);

console.log(customImgPaths);

for (img of imgs) {
  const rng = Math.floor(Math.random() * customImgPaths.length);
  const new_url = chrome.extension.getURL(customImgPaths[rng]);
  img.src = new_url;
}

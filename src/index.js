import { Timeline } from "./plugins/timeline";
import "./index.css";

const popup = document.getElementById("timeline-wrapper");
const points = document.getElementsByClassName("point");
let timeline;

const seqCount = {
  "INT3D-61Uranium235": 416,
  "INT3D-62Deuterium+Tritium": 328,
  "INT3D-63Fluorine18": 240,
  "INT3D-64Technetium99": 297,
}

const showVideo = (id) => {
  popup.classList.add("opened");

  timeline = new Timeline({
    containerId: "timeline",
    namePattern: id,
    fileExtension: "jpg",
    framesCount: seqCount[id],
    framesFolder: `/static/${id}`,
    fps: 15
  });

  timeline.init();
};

const closePopUp = () => {
  if (popup.classList.contains("opened")) {
    popup.classList.remove("opened");
    timeline.destroy();
  }
}

for (let point of points) {
  point.addEventListener("click", () => {
    showVideo(point.getAttribute("data-point"))
  });
}

document.getElementById("closeButton").addEventListener("click", () => {
  closePopUp();
});

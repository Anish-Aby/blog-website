"use strict";

const cursor = new MouseFollower({
  skewingMedia: 1,
});
const category = $(".category");
const mainTitle = $(".main-title");

category.on("mouseenter", function (e) {
  cursor.addState("-exclusion -inverse -text");
});

category.on("mouseleave", () => {
  cursor.removeState("-exclusion -inverse -text");
});

mainTitle.on("mouseenter", () => {
  cursor.setVideo("../videos/writing-video.mp4");
});

mainTitle.on("mouseleave", () => {
  cursor.removeVideo();
});

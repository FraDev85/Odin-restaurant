import "./style.css";
import restaurantVideo from "./assets/restaurant.mp4";

const video = document.querySelector(".bg-video");
video.src = restaurantVideo;
video.load();

import { boot } from "quasar/wrappers";
import AOS from "aos";
import "aos/dist/aos.css";

export default boot(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: "ease-out-cubic",
  });
});

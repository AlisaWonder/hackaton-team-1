import "./styles.css";
import { ShapeModule } from "./modules/shape.module";

// document.body.addEventListener("click", (event) => {
//   const shape = new ShapeModule();
//   if (shape.type == "Shapes") {
//     shape.trigger();
//   }
// });

document.body.addEventListener("click", (event) => {
  console.log(event.target.offsetParent);
  if (event.target.offsetParent == document.body) {
    const shape = new ShapeModule("Shape", "Мой модуль");
    shape.trigger();
  }
});

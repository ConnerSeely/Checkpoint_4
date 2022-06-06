import { displayTime } from "./Controllers/ClockController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {

  weatherController = new WeatherController();

  imageController = new ImageController();

  quoteController = new QuoteController();

  todoController = new TodoController();

  constructor() {
    displayTime();
  }

}

window["app"] = new App();

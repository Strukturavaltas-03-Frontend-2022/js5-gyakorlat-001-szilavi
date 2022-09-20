function Walker(name = "John Doe", state = "dead") {
  this.name = name;
  this.state = state;

  Walker.prototype.walk = function (speedInMph = 10) {
    return `${this.name} the ${this.state} walks with ${speedInMph} mph!`;
  };
  Walker.prototype.eat = function (foodName = "meat") {
    return `${this.name} the ${this.state} eats ${foodName}!`;
  };
  Walker.prototype.speak = function (sound = "grrrrrr") {
    return `${this.name} the ${this.state} says ${sound}!`;
  };
  Object.defineProperty(this, "firstName", {
    enumerable: true,
    configurable: true,
    get() {
      return this.name.split(" ")[0];
    },
    set(value) {
      this.name = `${value} ${this.name.split(" ")[1]}`;
    },
  });

  Object.defineProperty(this, "lastName", {
    enumerable: true,
    configurable: true,
    get() {
      return this.name.split(" ")[1];
    },
    set(value) {
      this.name = `${this.name.split(" ")[0]} ${value}`;
    },
  });
}

export default Walker;

class Calc {
  #result = 0;

  // Initializes the result with the first number
  calc(firstNumber) {
    this.#result = firstNumber;
    return this;
  }

  // Adds another number to the result
  plus(anotherNumber) {
    this.#result += anotherNumber;
    return this;
  }

  // Multiplies the result by another number
  mult(anotherNumber) {
    this.#result *= anotherNumber;
    return this;
  }

  // Subtracts another number from the result
  minus(anotherNumber) {
    this.#result -= anotherNumber;
    return this;
  }

  // Divides the result by another number (with division by zero handling)
  divide(anotherNumber) {
    if (anotherNumber === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.#result /= anotherNumber;
    return this;
  }

  // Returns the modulus (remainder) of the result divided by another number
  modulus(anotherNumber) {
    this.#result %= anotherNumber;
    return this;
  }

  // Raises the result to the power of another number
  power(exponent) {
    this.#result = Math.pow(this.#result, exponent);
    return this;
  }

  // Takes the square root of the result
  sqrt() {
    if (this.#result < 0) {
      throw new Error("Cannot take square root of a negative number");
    }
    this.#result = Math.sqrt(this.#result);
    return this;
  }

  // Getter to retrieve the final result
  get equal() {
    return this.#result;
  }

  // Resets the result to 0 for a new calculation
  reset() {
    this.#result = 0;
    return this;
  }
}

const math = new Calc();

console.log(math.calc(1).plus(3).mult(2).plus(4).minus(2).divide(5).equal);

console.log(math.reset().equal);

// console.log(math.calc(3).divide(0).equal); // Uncaught Error: Division by zero is not allowed

console.log(math.calc(16).sqrt().plus(4).mult(2).modulus(6).power(3).equal);

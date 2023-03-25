// L: Liskov Substitution Principle
class Rectangle {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public setWidth(width: number) {
    this.width = width;
  }
  public setHeight(height: number) {
    this.height = height;
  }
  public getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width: number) {
    this.width = width;
    this.height = width;
  }

  setHeight(height: number) {
    this.width = height;
    this.height = height;
  }
}

export default Square;

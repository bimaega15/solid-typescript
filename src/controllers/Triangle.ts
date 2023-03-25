import ShapeAreaInterface from "./InterfaceShape";
// Open-closed principle
class Triangle implements ShapeAreaInterface {
  public base: number;
  public height: number;
  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }

  public getArea(): number {
    return this.base * this.height * 0.5;
  }
}

class Rectangle implements ShapeAreaInterface {
  public width: number;
  public height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public getArea() {
    return this.width * this.height;
  }
}

class Circle implements ShapeAreaInterface {
  public radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  public getArea(): number {
    return this.radius * 0.7;
  }
}

function computeAreasOfShapes(shapes: Array<Rectangle | Triangle | Circle>) {
  return shapes.reduce((computedArea = 0, shape) => {
    return computedArea + shape.getArea();
  }, 0);
}

console.log(
  computeAreasOfShapes([
    new Triangle(50, 30),
    new Rectangle(30, 20),
    new Circle(50),
  ])
);

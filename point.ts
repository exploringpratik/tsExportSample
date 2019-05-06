export class Point {
  constructor(private x?: number, private y?: number) {
    console.log("Constructor is called.");
  }
  draw() {
    console.log("X: " + this.x + " Y: " + this.y);
  }
}

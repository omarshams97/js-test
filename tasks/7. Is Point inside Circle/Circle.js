import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      //calcutlating distance between point and center of circle 
      var dist_points = (Point[0]-center[0])*(Point[0]-center[0]) + (Point[1]-center[1])*(Point[1]-center[1]);
      //if distance is within radius point is in circle if not its outside.
      if (dist_points < radius) {
        return true;
      }
      return false;
    }
  }
}

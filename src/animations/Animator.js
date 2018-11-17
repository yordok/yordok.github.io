//  TODO: start by creating simple shape tweens
/**
 * start and end object shape:
 * {
 *   x,
 *   y,
 *   width,
 *   height
 * }
 */
export default class Animator {
    constructor(type, start, end) {
        this.started = false;
        this.currentX = start.x;
        this.currentY = start.y;
        this.currentWidth = start.width;
        this.currentHeight = start.height;
        //  passed values
        this.type = type;
        this.start = start;
        this.end = end;
    }

    startAnim() {
        this.started = true;
    }

    animate() {
        
    }
}

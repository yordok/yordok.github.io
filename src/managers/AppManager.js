import Constants from '../common/Constants';
import Animator from '../animations/Animator';

export default class AppManager {
    constructor() {
        this.initializing = false;
        const start = {
            x: 0,
            y: 0,
            width: 10,
            height: 10
        };

        const end = {
            x: 100,
            y: 100,
            width: 10,
            height: 10
        };
        this.sampleAnim = new Animator('', start, end);
        this.initialize();
    }

    initialize() {
        this.initializing = true;
    }

    clearScreen(ctx) {
        ctx.fillStyle = Constants.CANVAS_CLEAR_COLOR;
        ctx.fillRect(0, 0, Constants.CANVAS_WIDTH, Constants.CANVAS_HEIGHT);
    };

    update(ctx) {
        this.clearScreen(ctx);
        if (this.sampleAnim.started) {
            this.sampleAnim.animate();
        } else {
            this.sampleAnim.startAnim();
        }
    }
}

// const renderOpeningAnimation = function() {
//     this.y = Constants.CANVAS_HEIGHT / 2;
//     this.x = 0;
//     this.width = 10;
//     this.height = 10
// }

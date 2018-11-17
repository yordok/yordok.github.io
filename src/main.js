//  main entry point
import Constants from './common/Constants';
import AppManager from './managers/AppManager';

class Main {
    constructor(document) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        this.canvas = document.getElementById('Canvas');
        this.canvas.style.height = `${windowHeight}px`;
        this.canvas.style.width = `${windowWidth}px`;
        this.ctx = this.canvas.getContext('2d');
        console.log('Window loaded...');
        console.log('Initializing...');
        this.initialize();
    }

    /**
     * Initialization of app
     */
    initialize() {
        this.AppManager = new AppManager(this.ctx);
        setInterval(() => {
            this.update();
        }, 1000 / Constants.FPS);
    }

    /**
     * made game loop
     */
    update() {
        console.info('update called');
        this.AppManager.update(this.ctx);
    }
}


window.onload = () => {
    //  initialize the app
    const mainApp = new Main(document); //eslint-disable-line
};

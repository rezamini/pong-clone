const INITIAL_VELOCITY = .025;

export default class Ball {
    constructor(ballElement){
        this.ballElement = ballElement;
    }

    get x(){
        return parseFloat(getComputedStyle(this.ballElement).getPropertyValue("--x"));
    }

    set x(value){
        this.ballElement.style.setProperty("--x", value);
    }

    get y(){
        return parseFloat(getComputedStyle(this.ballElement).getPropertyValue("--y"));
    }

    set y(value){
        this.ballElement.style.setProperty("--y", value);
    }
}

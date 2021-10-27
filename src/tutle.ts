import { vec3 } from "gl-matrix";

export default class Turtle {
    pos: vec3 = vec3.create();
    ori: vec3 = vec3.create();
    depth: number = 0;

    constructor(pos: vec3, ori: vec3, depth: number) {
        this.pos = pos;
        this.ori = ori;
        this.depth = depth;
    }

    moveForward() {
        this.pos[0] = this.pos[0] + 10 * this.ori[0];
        this.pos[1] = this.pos[1] + 10 * this.ori[1];
        this.pos[2] = this.pos[2] + 10 * this.ori[2];
    }

    rollForward(angle: number) {
        angle = angle * Math.PI / 180.0;
        this.ori[0] = this.ori[0] * Math.cos(angle) - this.ori[1] * Math.sin(angle);
        this.ori[1] = this.ori[0] * Math.sin(angle) + this.ori[1] * Math.cos(angle);
    }

    rollBackward(angle: number) {
        angle = -1.0 * angle * Math.PI / 180.0;
        this.rollForward(angle);
    }


    pitchForward(angle: number) {
        angle = angle * Math.PI / 180.0;
        this.ori[0] = this.ori[0] * Math.cos(angle) + this.ori[2] * Math.sin(angle);
        this.ori[2] = -1.0 * this.ori[0] * Math.sin(angle) + this.ori[2] * Math.cos(angle);
    }

    pitchBackward(angle: number) {
        angle = -1.0 * angle * Math.PI / 180.0;
        this.pitchForward(angle);
    }

    yawForward(angle: number) {
        angle = angle * Math.PI / 180.0;
        this.ori[1] = this.ori[1] * Math.cos(angle) - this.ori[2] * Math.sin(angle);
        this.ori[2] = this.ori[1] * Math.sin(angle) + this.ori[2] * Math.cos(angle);
    }

    yawBackward(angle: number) {
        angle = -1.0 * angle * Math.PI / 180.0;
        this.yawForward(angle);
    }

}
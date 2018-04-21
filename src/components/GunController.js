import * as PIXI from 'pixi.js';

export default class GunController {

    constructor(app) {

        var buttonUp = PIXI.Sprite.fromImage('assets/button-small.png');
        var buttonDown = PIXI.Sprite.fromImage('assets/button-small.png');

        // center the sprite's anchor point
        buttonUp.anchor.set(0.5);
        buttonDown.anchor.set(0.5);

        // position buttons on the bottom left corner
        buttonUp.x = 100;
        buttonUp.y = app.screen.height - 200;

        buttonDown.x = 100;
        buttonDown.y = app.screen.height - 140;

        app.stage.addChild(buttonUp);
        app.stage.addChild(buttonDown);

    }

}
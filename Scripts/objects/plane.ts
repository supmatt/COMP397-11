module objects {
    export class Plane extends objects.GameObject {
        // member variables

        // constructors
        constructor() {
            super("plane");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            // check the right boundary
            if(this.x > (config.Screen.WIDTH - this.halfWidth)) {
                this.x = config.Screen.WIDTH - this.halfWidth;
            }

            // check the left boundary
            if(this.x < this.halfWidth) {
                this.x = this.halfWidth;
            }
        }

         // public methods
         public Start():void {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y = 430;
        }

        public Update():void {
            this.x = managers.Game.Stage.mouseX;
            this._checkBounds();
        }

        public Reset():void {

        }
    }
}
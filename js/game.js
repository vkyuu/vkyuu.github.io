(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(960, 600, Phaser.CANVAS, 'catventurerun');

  // Game States
  game.state.add('boot', require('./states/boot'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('preload', require('./states/preload'));
  

  game.state.start('boot');
};
},{"./states/boot":36,"./states/menu":37,"./states/play":38,"./states/preload":39}],2:[function(require,module,exports){
'use strict';

var Batubesar = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'batubesar', frame);

    this.anchor.setTo(0.5,0.5);
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
  
};

Batubesar.prototype = Object.create(Phaser.Sprite.prototype);
Batubesar.prototype.constructor = Batubesar;

Batubesar.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Batubesar;

},{}],3:[function(require,module,exports){
'use strict';

var Batukecil = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'batukecil', frame);

    this.anchor.setTo(0.5,0.5);
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
};

Batukecil.prototype = Object.create(Phaser.Sprite.prototype);
Batukecil.prototype.constructor = Batukecil;

Batukecil.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Batukecil;

},{}],4:[function(require,module,exports){
'use strict';

var Batusedang = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'batusedang', frame);

    this.anchor.setTo(0.5,0.5);
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
  
};

Batusedang.prototype = Object.create(Phaser.Sprite.prototype);
Batusedang.prototype.constructor = Batusedang;

Batusedang.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Batusedang;

},{}],5:[function(require,module,exports){
'use strict';

var Bunga = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'bunga', frame);

    this.anchor.setTo(0.5,0.5);
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
};

Bunga.prototype = Object.create(Phaser.Sprite.prototype);
Bunga.prototype.constructor = Bunga;

Bunga.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Bunga;

},{}],6:[function(require,module,exports){
'use strict';

var Bush = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'bush', frame);

    this.anchor.setTo(0.5,0.5);
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
};

Bush.prototype = Object.create(Phaser.Sprite.prototype);
Bush.prototype.constructor = Bush;

Bush.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Bush;

},{}],7:[function(require,module,exports){
'use strict';
var Bush = require('./bush');
var BatuSedang = require('./batusedang');
var BatuKecil = require('./batukecil');
var Bunga = require('./bunga');
var Rumput = require('./rumput');
var RumputSedang = require('./rumputSedang');

var BushGroup = function(game, parent) {
    Phaser.Group.call(this, game, parent);

    this.timing = 0;
    this.obj = this.game.rnd.pick([Bush, BatuSedang, Rumput, BatuKecil, Bunga, BatuKecil, Bush, Bunga,RumputSedang]);
    this.bush = new this.obj(this.game, 0,400,0);
    //this.add(this.bush);
    this.bushSpeed = -700;
    this.bush.body.velocity.x = this.bushSpeed;
    this.hasScored = false;
    
};

BushGroup.prototype = Object.create(Phaser.Group.prototype);
BushGroup.prototype.constructor = BushGroup;

BushGroup.prototype.update = function() {
  /*this.timing += this.game.time.physicsElapsed;
    if(this.timing > 0.25){
        this.timing = 0;
        if(this.bushSpeed > -900){
            this.bushSpeed -= 1;
            //this.bush.body.velocity.x = this.bushSpeed;
        }
    };*/
  this.checkWorldBounds();
},
BushGroup.prototype.reset = function(x, y) {
    this.obj = this.game.rnd.pick([Bush, BatuSedang, Rumput, BatuKecil, Bunga]);
    this.bush = new this.obj(this.game, 0,400,0);
    this.add(this.bush);
    this.bush.reset(0,400);
    this.x = x;
    this.y = y;
    this.setAll('body.velocity.x', this.bushSpeed);
    this.hasScored = false;
    this.exists = true;
},
BushGroup.prototype.updateSpeed = function() {
    this.rate = 199;
    this.bushSpeed-=this.rate;
    this.setAll('body.velocity.x', this.bushSpeed);
},    
BushGroup.prototype.checkWorldBounds = function() {  
  if(!this.bush.inWorld) {
    this.exists = false;
  }
};    
;

module.exports = BushGroup;

},{"./batukecil":3,"./batusedang":4,"./bunga":5,"./bush":6,"./rumput":28,"./rumputSedang":29}],8:[function(require,module,exports){
'use strict';

var ScoreBoard = function(game) {
    var gameover;
    Phaser.Group.call(this, game);

    this.scoreBoard=this.create(this.game.width/2,50,'credits');
    this.scoreBoard.anchor.setTo(0.5,0.5);
    this.select= this.game.add.audio('select',1,false);
    this.mainMenuButton = this.game.add.button(this.game.width/2,140, 'mainMenuButton', this.hide, this);
    this.mainMenuButton.animations.add('hover')
    this.mainMenuButton.anchor.setTo(0.5,0.5);
    this.mainMenuButton.events.onInputOver.add(function(){this.mainMenuButton.animations.frame=1;this.select.play()}, this);
    this.mainMenuButton.events.onInputOut.add(function(){this.mainMenuButton.animations.frame=0;}, this);
    this.add(this.mainMenuButton);
    
    this.y=this.game.height;
    this.x=0;
    
    this.on=false;
    this.confirm = this.game.add.audio('confirm',1,false);
    
};

ScoreBoard.prototype = Object.create(Phaser.Group.prototype);
ScoreBoard.prototype.constructor = ScoreBoard;

ScoreBoard.prototype.update = function() {
  
  // write your prefab's specific update code here
  
},
ScoreBoard.prototype.show = function(gameScore) {
    this.game.add.tween(this).to({y: 200}, 1000, Phaser.Easing.Bounce.Out, true);
    this.on=true;
},
ScoreBoard.prototype.hide = function(clicked) {
    this.confirm.play();
      this.tween=this.game.add.tween(this).to({y:this.game.height+100}, 1000, Phaser.Easing.Bounce.Out, true);
      this.tween.onComplete.add(function(){this.alpha=0;}, this);
        this.on=false;
},
ScoreBoard.prototype.menuClick = function() {
     this.game.state.start('menu');
};

module.exports = ScoreBoard;

},{}],9:[function(require,module,exports){
'use strict';

var Dash = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'dash', frame);
  this.anchor.setTo(0.5,0.5);
  
  
};

Dash.prototype = Object.create(Phaser.Sprite.prototype);
Dash.prototype.constructor = Dash;

Dash.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Dash;

},{}],10:[function(require,module,exports){
'use strict';

var Explosion = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'boom', frame);
    this.anchor.setTo(0.5,0.5);
    this.scale.x = 0.8;
    this.scale.y = 0.8;
    this.animations.add('explode');
};

Explosion.prototype = Object.create(Phaser.Sprite.prototype);
Explosion.prototype.constructor = Explosion;

Explosion.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Explosion;

},{}],11:[function(require,module,exports){
'use strict';

var Ground = function(game, x, y, width, height) {
  Phaser.TileSprite.call(this, game, x, y, width, height, 'ground');
    //physics
    this.physicsType = Phaser.SPRITE;
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
};

Ground.prototype = Object.create(Phaser.TileSprite.prototype);
Ground.prototype.constructor = Ground;

Ground.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Ground;

},{}],12:[function(require,module,exports){
'use strict';

var Neko = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'neko', frame);
    
    this.anchor.setTo(0.5,0.5);
    
    //animation
    this.animations.add('running');
    this.animations.play('running', 8, true);
    //physics
    this.game.physics.arcade.enableBody(this);
    this.body.width = 50;
    this.body.height = 128;
    /*debu
    this.debu = this.game.add.sprite(this.x-65,this.y+100,'debu');
    this.debu.scale.x = 0.3;
    this.debu.scale.y = 0.3;
    this.debu.anchor.setTo(0.5,0.5);
    this.debu.animations.add('flow');
    this.debu. animations.play('flow', 60,true);*/
    this.jumpSfx = this.game.add.audio('jump',1,false); 
};

Neko.prototype = Object.create(Phaser.Sprite.prototype);
Neko.prototype.constructor = Neko;

Neko.prototype.update = function() {
  var inGround = this.body.touching.down;
  if(!inGround)
  {  
    this.animations.stop();
    this.animations.frame=1;
  }else{
     this.animations.play('running', 6, true);   
  };
  // write your prefab's specific update code here
  
},
Neko.prototype.jump = function() {
    if (this.body.touching.down){
    this.body.velocity.y = -600;
    this.jumpSfx.play();   
    }
}
;

module.exports = Neko;

},{}],13:[function(require,module,exports){
'use strict';
var Batubesar = require('./batubesar');



var ObstacleGroup = function(game, parent) {
    Phaser.Group.call(this, game, parent);

    this.timing = 0;
    //this.obj = this.game.rnd.pick([Bush, BatuSedang, Rumput, BatuKecil, Bunga, BatuKecil, Bush, Bunga]);
    this.batubesar = new Batubesar(this.game, 0,417,0);
    this.add(this.batubesar);
    this.batubesarSpeed = -700;
    this.batubesar.body.velocity.x = this.batubesarSpeed;
    this.hasScored = false;
    
};

ObstacleGroup.prototype = Object.create(Phaser.Group.prototype);
ObstacleGroup.prototype.constructor = ObstacleGroup;

ObstacleGroup.prototype.update = function() {
  /*this.timing += this.game.time.physicsElapsed;
    if(this.timing > 0.25){
        this.timing = 0;
        if(this.batubesarSpeed > -900){
            this.batubesarSpeed -= 1;
            // this.batubesar.body.velocity.x = this.batubesarSpeed;
        }
    };*/
  this.checkWorldBounds();
},
ObstacleGroup.prototype.reset = function(x, y) {
    this.batubesar.reset(0,417);
    this.x = x;
    this.y = y;
    this.setAll('body.velocity.x', this.batubesarSpeed);
    this.hasScored = false;
    this.exists = true;
},
ObstacleGroup.prototype.updateSpeed = function() {
    

},
ObstacleGroup.prototype.checkWorldBounds = function() {  
  if(!this.batubesar.inWorld) {
    this.exists = false;
  }
};    
;
module.exports = ObstacleGroup;

},{"./batubesar":2}],14:[function(require,module,exports){
'use strict';

var Pedang = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'pedang', frame);

  this.anchor.setTo(0,0.5);
  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity=false;
};

Pedang.prototype = Object.create(Phaser.Sprite.prototype);
Pedang.prototype.constructor = Pedang;

Pedang.prototype.update = function() {
  
  // write your prefab's specific update code here
  
},
Pedang.prototype.atas = function(){
    if(this.angle == -45){
        this.angle-=0;
    }else{
        this.angle-=5;
    }
},
Pedang.prototype.bawah = function(){
    if(this.angle==10){
        this.angle+=0;
    }else{
        this.angle+=5;
    }
};

module.exports = Pedang;

},{}],15:[function(require,module,exports){
'use strict';

var Player = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'player', frame);
    this.anchor.setTo(0.5,0.5);
    this.game.physics.arcade.enableBody(this);
     
  // initialize your prefab here
  
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
  
  // write your prefab's specific update code here
  
},
Player.prototype.jump = function() {
    if (this.body.touching.down){
    this.body.velocity.y = -600;
    }
};

module.exports = Player;

},{}],16:[function(require,module,exports){
'use strict';

var Pohon = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'pohon', frame);

    this.anchor.setTo(0.5,0.5);
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
  
};

Pohon.prototype = Object.create(Phaser.Sprite.prototype);
Pohon.prototype.constructor = Pohon;

Pohon.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Pohon;

},{}],17:[function(require,module,exports){
'use strict';

var Pohon2 = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'pohon2', frame);

    this.anchor.setTo(0.5,0.5);
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
  
};

Pohon2.prototype = Object.create(Phaser.Sprite.prototype);
Pohon2.prototype.constructor = Pohon2;

Pohon2.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Pohon2;

},{}],18:[function(require,module,exports){
'use strict';
var Pohon = require('./pohon');
var Pohon2 = require('./pohon2');

var PohonGroup = function(game, parent) {
  Phaser.Group.call(this, game, parent);

    this.timeng = 0;
    this.wew2 = this.game.rnd.pick([Pohon, Pohon2]);
    this.pohon = new this.wew2(this.game, 0,180,0);
    this.pohonSpeed = -600;
    this.pohon.body.velocity.x = this.pohonSpeed;
    this.hasScored = false;
    
  
};

PohonGroup.prototype = Object.create(Phaser.Group.prototype);
PohonGroup.prototype.constructor = PohonGroup;

PohonGroup.prototype.update = function() {
  
    /*this.timeng += this.game.time.physicsElapsed;
    if(this.timeng > 0.25){
        this.timeng = 0;
        if(this.pohonSpeed > -800){
            this.pohonSpeed -= 1;
            //this.pohon.body.velocity.x = this.pohonSpeed;
        }
    }*/
    this.checkWorldBounds();
  
},
PohonGroup.prototype.reset = function(x,y){
    this.wew2 = this.game.rnd.pick([Pohon, Pohon2]);
    this.pohon = new this.wew2(this.game, 0,180,0);
    this.add(this.pohon);
    this.pohon.reset(0,180);
    this.spood = this.pohonSpeed;
    this.x = x;
    this.y = y;
    this.setAll('body.velocity.x', this.pohonSpeed);
    this.hasScored = false;
    this.exists = true;
    
},
PohonGroup.prototype.updateSpeed = function() {
    this.rate = 100;
    this.pohonSpeed-=this.rate;
    this.setAll('body.velocity.x', this.pohonSpeed);

},
PohonGroup.prototype.checkWorldBounds = function(){
    if(!this.pohon.inWorld){
        this.exists = false;
    }
}
    ;

module.exports = PohonGroup;

},{"./pohon":16,"./pohon2":17}],19:[function(require,module,exports){
'use strict';

var Pohonback = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'pohonback', frame);

   this.anchor.setTo(0.5,0.5);
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
  
};

Pohonback.prototype = Object.create(Phaser.Sprite.prototype);
Pohonback.prototype.constructor = Pohonback;

Pohonback.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Pohonback;

},{}],20:[function(require,module,exports){
'use strict';

var Pohonback2 = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'pohonback2', frame);

    this.anchor.setTo(0.5,0.5);
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
  
};

Pohonback2.prototype = Object.create(Phaser.Sprite.prototype);
Pohonback2.prototype.constructor = Pohonback2;

Pohonback2.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Pohonback2;

},{}],21:[function(require,module,exports){
'use strict';
var Pohonback = require('./pohonback');
var Pohonback2 = require('./pohonback2');

var PohonbackGroup = function(game, parent) {
  Phaser.Group.call(this, game, parent);

    this.timeng = 0;
    this.wew4 = this.game.rnd.pick([Pohonback, Pohonback2]);
    this.pohonback = new this.wew4(this.game, 0,250,0);
    this.pohonbackSpeed = -400;
    this.pohonback.body.velocity.x = this.pohonbackSpeed;
    this.hasScored = false;
  
};

PohonbackGroup.prototype = Object.create(Phaser.Group.prototype);
PohonbackGroup.prototype.constructor = PohonbackGroup;

PohonbackGroup.prototype.update = function() {

    this.checkWorldBounds();
  
},
PohonbackGroup.prototype.updateSpeed = function() {
    this.rate = 100;
    this.pohonbackSpeed-=this.rate;
    this.setAll('body.velocity.x', this.pohonbackSpeed);
    console.log('updated');
},    
PohonbackGroup.prototype.reset = function(x,y){
    this.wew4 = this.game.rnd.pick([Pohonback, Pohonback2]);
    this.pohonback = new this.wew4(this.game, 0,285,0);
    this.add(this.pohonback);
    this.pohonback.reset(0,286);
    this.x = x;
    this.y = y;
    this.setAll('body.velocity.x', this.pohonbackSpeed);
    this.hasScored = false;
    this.exists = true;
    
},
PohonbackGroup.prototype.checkWorldBounds = function(){
    if(!this.pohonback.inWorld){
        this.exists = false;
    }
}
    ;

module.exports = PohonbackGroup;

},{"./pohonback":19,"./pohonback2":20}],22:[function(require,module,exports){
'use strict';

var Pohonkecil = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'pohonkecil', frame);

    this.anchor.setTo(0.5,0.5);
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
  
};

Pohonkecil.prototype = Object.create(Phaser.Sprite.prototype);
Pohonkecil.prototype.constructor = Pohonkecil;

Pohonkecil.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Pohonkecil;

},{}],23:[function(require,module,exports){
'use strict';

var Pohonkecil2 = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'pohonkecil2', frame);

    this.anchor.setTo(0.5,0.5);
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
  
};

Pohonkecil2.prototype = Object.create(Phaser.Sprite.prototype);
Pohonkecil2.prototype.constructor = Pohonkecil2;

Pohonkecil2.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Pohonkecil2;

},{}],24:[function(require,module,exports){
'use strict';
var Pohonkecil = require('./pohonkecil');
var Pohonkecil2 = require('./pohonkecil2');

var PohonkecilGroup = function(game, parent) {
  Phaser.Group.call(this, game, parent);

    this.timeng = 0;
    this.wew = this.game.rnd.pick([Pohonkecil, Pohonkecil2]);
    this.pohonkecil = new this.wew(this.game, 0,248,0);
    this.pohonkecilSpeed = -700;
    this.setAll('body.velocity.x', this.pohonkecilSpeed);
    this.hasScored = false;
  
};

PohonkecilGroup.prototype = Object.create(Phaser.Group.prototype);
PohonkecilGroup.prototype.constructor = PohonkecilGroup;

PohonkecilGroup.prototype.update = function() {
  
    /*this.timeng += this.game.time.physicsElapsed;
    if(this.timeng > 0.25){
        this.timeng = 0;
        if(this.pohonkecilSpeed > -900){
            this.pohonkecilSpeed -= 1;
            //this.setAll('body.velocity.x', this.pohonkecilSpeed);
        }
    }*/
    this.checkWorldBounds();
  
},
PohonkecilGroup.prototype.reset = function(x,y){
    this.wew = this.game.rnd.pick([Pohonkecil, Pohonkecil2]);
    this.pohonkecil = new this.wew(this.game, 0,248,0);
    this.add(this.pohonkecil);
    this.pohonkecil.reset(0,248);
    this.spood = this.pohonkecilSpeed;
    this.x = x;
    this.y = y;
    this.setAll('body.velocity.x', this.pohonkecilSpeed);
    this.hasScored = false;
    this.exists = true;
    
},
PohonkecilGroup.prototype.updateSpeed = function() {
    this.rate = 100;
    this.pohonkecilSpeed-=this.rate;
    this.setAll('body.velocity.x', this.pohonkecilSpeed);
},    
PohonkecilGroup.prototype.checkWorldBounds = function(){
    if(!this.pohonkecil.inWorld){
        this.exists = false;
    }
}
    ;

module.exports = PohonkecilGroup;

},{"./pohonkecil":22,"./pohonkecil2":23}],25:[function(require,module,exports){
'use strict';

var Pohonkecilback = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'pohonkecilback', frame);

    this.anchor.setTo(0.5,0.5);
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
  
};

Pohonkecilback.prototype = Object.create(Phaser.Sprite.prototype);
Pohonkecilback.prototype.constructor = Pohonkecilback;

Pohonkecilback.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Pohonkecilback;

},{}],26:[function(require,module,exports){
'use strict';

var Pohonkecilback2 = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'pohonkecilback2', frame);

    this.anchor.setTo(0.5,0.5);
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
  
};

Pohonkecilback2.prototype = Object.create(Phaser.Sprite.prototype);
Pohonkecilback2.prototype.constructor = Pohonkecilback2;

Pohonkecilback2.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Pohonkecilback2;

},{}],27:[function(require,module,exports){
'use strict';
var Pohonkecilback = require('./pohonkecilback');
var Pohonkecilback2 = require('./pohonkecilback2');

var PohonkecilbackGroup = function(game, parent) {
  Phaser.Group.call(this, game, parent);

    this.timeng = 0;
    this.wew3 = this.game.rnd.pick([Pohonkecilback, Pohonkecilback2]);
    this.pohonkecilback = new this.wew3(this.game, 0,317,0);
    this.pohonkecilbackSpeed = -550;
    this.pohonkecilback.body.velocity.x = this.pohonkecilbackSpeed;
    this.hasScored = false;
  
};

PohonkecilbackGroup.prototype = Object.create(Phaser.Group.prototype);
PohonkecilbackGroup.prototype.constructor = PohonkecilbackGroup;

PohonkecilbackGroup.prototype.update = function() {
    this.checkWorldBounds();
  
},
PohonkecilbackGroup.prototype.updateSpeed = function() {
    this.rate = 100;
    this.pohonkecilbackSpeed-=this.rate;
    this.setAll('body.velocity.x', this.pohonkecilbackSpeed);
    console.log('updated');
},    
PohonkecilbackGroup.prototype.reset = function(x,y){
    this.wew3 = this.game.rnd.pick([Pohonkecilback, Pohonkecilback2]);
    this.pohonkecilback = new this.wew3(this.game, 0,317,0);
    this.add(this.pohonkecilback);
    this.pohonkecilback.reset(0,317);
    this.x = x;
    this.y = y;
    this.setAll('body.velocity.x', this.pohonkecilbackSpeed);
    this.hasScored = false;
    this.exists = true;
    
},
PohonkecilbackGroup.prototype.checkWorldBounds = function(){
    if(!this.pohonkecilback.inWorld){
        this.exists = false;
    }
}
    ;

module.exports = PohonkecilbackGroup;

},{"./pohonkecilback":25,"./pohonkecilback2":26}],28:[function(require,module,exports){
'use strict';

var Rumput = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'rumput', frame);

    this.anchor.setTo(0.5,0.5);
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
};

Rumput.prototype = Object.create(Phaser.Sprite.prototype);
Rumput.prototype.constructor = Rumput;

Rumput.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Rumput;

},{}],29:[function(require,module,exports){
'use strict';

var RumputSedang = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'rumputSedang', frame);

    this.anchor.setTo(0.5,0.5);
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
  
};

RumputSedang.prototype = Object.create(Phaser.Sprite.prototype);
RumputSedang.prototype.constructor = RumputSedang;

RumputSedang.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = RumputSedang;

},{}],30:[function(require,module,exports){
'use strict';

var ScoreBoard = function(game) {
    var gameover;
    Phaser.Group.call(this, game);

    this.scoreBoard=this.create(this.game.width/2,50,'scoreBoard');
    this.scoreBoard.anchor.setTo(0.5,0.5);
    
    this.scoreText = this.game.add.bitmapText(this.scoreBoard.width+25, 25, 'flappyfont', '', 50);
    this.add(this.scoreText);
    this.scoreText.anchor.setTo(0.5,0.5);
    this.bestScoreText = this.game.add.bitmapText(this.scoreBoard.width+25, 145, 'flappyfont', '', 50);
    this.add(this.bestScoreText);
    this.bestScoreText.anchor.setTo(0.5,0.5);
    this.tryAgainButton = this.game.add.button(this.scoreBoard.width-335, 225, 'tryAgainButton', this.againClick, this);
    this.tryAgainButton.animations.add('hover')
    this.tryAgainButton.anchor.setTo(0.5,0.5);
    this.tryAgainButton.events.onInputOver.add(function(){this.tryAgainButton.animations.frame=1;}, this);
    this.tryAgainButton.events.onInputOut.add(function(){this.tryAgainButton.animations.frame=0;}, this);
    this.add(this.tryAgainButton);
    this.mainMenuButton = this.game.add.button(this.scoreBoard.width+25, 225, 'mainMenuButton', this.menuClick, this);
    this.mainMenuButton.animations.add('hover')
    this.mainMenuButton.anchor.setTo(0.5,0.5);
    this.mainMenuButton.events.onInputOver.add(function(){this.mainMenuButton.animations.frame=1;}, this);
    this.mainMenuButton.events.onInputOut.add(function(){this.mainMenuButton.animations.frame=0;}, this);
    this.add(this.mainMenuButton);
    
    this.y=this.game.height;
    this.x=0;
};

ScoreBoard.prototype = Object.create(Phaser.Group.prototype);
ScoreBoard.prototype.constructor = ScoreBoard;

ScoreBoard.prototype.update = function() {
  
  // write your prefab's specific update code here
  
},
ScoreBoard.prototype.show = function(gameScore) {
    var msg, bestScore;
    this.scoreText.setText(gameScore.toString());
    if(!!localStorage) {
        bestScore = localStorage.getItem('bestScore');
        if(!bestScore || bestScore < gameScore) {
             bestScore = gameScore;
             localStorage.setItem('bestScore', bestScore);
        }
    }else{
        bestScore='N/A';
    }
    this.bestScoreText.setText(bestScore.toString());
    this.game.add.tween(this).to({y: 200}, 1000, Phaser.Easing.Bounce.Out, true);
     if(gameScore>=0 && gameScore<25){
        this.medal = this.game.add.sprite(-165,-10,'badgeScrub');
        this.medal.anchor.setTo(0.5, 0.5);
        this.scoreBoard.addChild(this.medal);
    }else if(gameScore>=25 && gameScore<35){
        this.medal = this.game.add.sprite(-165,-10,'badgeOkay');
        this.medal.anchor.setTo(0.5, 0.5);
        this.scoreBoard.addChild(this.medal);
    }else if(gameScore>=35 && gameScore<50){
        this.medal = this.game.add.sprite(-165,-10,'badgeNotBad');
        this.medal.anchor.setTo(0.5, 0.5);
        this.scoreBoard.addChild(this.medal);
    }else if(gameScore>50){
        this.medal = this.game.add.sprite(-165,-10,'badgeGG');
        this.medal.anchor.setTo(0.5, 0.5);
        this.scoreBoard.addChild(this.medal);
    }
},
ScoreBoard.prototype.againClick = function() {
     this.game.state.start('play');
},
ScoreBoard.prototype.menuClick = function() {
     this.game.state.start('menu');
};

module.exports = ScoreBoard;

},{}],31:[function(require,module,exports){
'use strict';

var Skelly = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'skelly', frame);
  this.anchor.setTo(0.5,0.5);
  this.game.physics.arcade.enableBody(this);
  
};

Skelly.prototype = Object.create(Phaser.Sprite.prototype);
Skelly.prototype.constructor = Skelly;

Skelly.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Skelly;

},{}],32:[function(require,module,exports){
'use strict';
var Skelly = require('./skelly');
var Dash = require('./dash');
var SkellyGroup = function(game, parent) {
  Phaser.Group.call(this, game, parent);

    this.skelly = new Skelly(this.game, 0,355,0);
    this.dash = new Dash(this.game,70,25,0);
    this.add(this.skelly);
    this.add(this.dash);
    this.skelly.addChild(this.dash); 
    this.skellySpeed = -760;
    this.skelly.body.velocity.x = this.skellySpeed;
    //this.dash.body.velocity.x = this.skellySpeed;
    this.timing = 0;
    this.skelly.outOfBoundsKill = true;
    this.dash.outOfBoundsKill = true;
    //this.skelly.body.velocity.y = -600;
    this.skelly.animations.add('running');
    this.dash.animations.add('dashing');
    this.skelly.animations.play('running',8,true);
    this.dash.animations.play('dashing',15,true);
    this.skelly.scale.x=0.8;
    this.skelly.scale.y=0.8; 
    this.dash.scale.x=0.5; 
    this.dash.scale.y=0.5; 
    this.skelly.body.height=82;
    this.skelly.body.width=80;
    this.hasBeenHit=false;
    //this.game.add.tween(this.skelly)
    
  
};

SkellyGroup.prototype = Object.create(Phaser.Group.prototype); 
SkellyGroup.prototype.constructor = SkellyGroup;

SkellyGroup.prototype.update = function() {
   var inGround = this.skelly.body.touching.down; 
    if (inGround){
        this.skelly.body.velocity.y = -200;
        this.dash.alpha=1;
    }else if(this.skelly.y<315){
        this.dash.alpha=0;
    }
    this.checkWorldBounds();
  
},
SkellyGroup.prototype.reset = function(x, y){
    this.skelly.reset(0,355);
    this.dash.reset(70,25);
    this.dash.animations.frame=0;
    this.x = x;
    this.y = y;
    this.skelly.body.velocity.x=this.skellySpeed;
    this.exists = true;
    this.hasBeenHit=false;
},
SkellyGroup.prototype.checkWorldBounds = function(){
    if(!this.skelly.inWorld){
        this.exists = false;
    };
}

module.exports = SkellyGroup;
},{"./dash":9,"./skelly":31}],33:[function(require,module,exports){
'use strict';

var SlashEffect = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'slashEffect', frame);
    this.anchor.setTo(0.5,0.5);
    this.animations.add('slashEffect');
};

SlashEffect.prototype = Object.create(Phaser.Sprite.prototype);
SlashEffect.prototype.constructor = SlashEffect;

SlashEffect.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = SlashEffect;

},{}],34:[function(require,module,exports){
'use strict';

var Slime = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'slime', frame);

  // initialize your prefab here
    this.anchor.setTo(0.5,0.5);
    this.game.physics.arcade.enableBody(this);
};

Slime.prototype = Object.create(Phaser.Sprite.prototype);
Slime.prototype.constructor = Slime;

Slime.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Slime;

},{}],35:[function(require,module,exports){
'use strict';
var Slime = require('./slime');

var SlimeGroup = function(game, parent) {
  Phaser.Group.call(this, game, parent);
    
    this.slime = new Slime(this.game, 0,375,0);
    this.add(this.slime);
    this.slimeSpeed = -730;
    this.slime.body.velocity.x = this.slimeSpeed;
    this.timing = 0;
    this.slime.outOfBoundsKill = true;
    this.slime.body.velocity.y = -600;
    this.slime.animations.add('gooey');
    this.slime.animations.play('gooey',8,true);
    this.slime.scale.x=0.7;
    this.slime.scale.y=0.7;
    //this.game.add.tween(this.slime).to({y:300}, 300, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);
};

SlimeGroup.prototype = Object.create(Phaser.Group.prototype);
SlimeGroup.prototype.constructor = SlimeGroup;

SlimeGroup.prototype.update = function() {   
    var inGround = this.slime.body.touching.down; 
    if (inGround){
        this.slime.body.velocity.y = -600;
    }
    this.checkWorldBounds();
      // write your prefab's specific update code here
  
},
SlimeGroup.prototype.reset = function(x, y){
    this.slime.reset(0,375);
    this.x = x;
    this.y = y;
    this.slime.alpha=1;
    this.setAll('body.velocity.x', this.slimeSpeed);
    this.exists = true;
},
SlimeGroup.prototype.checkWorldBounds = function(){
    if(!this.slime.inWorld){
        this.exists = false;
    }
};
module.exports = SlimeGroup;

},{"./slime":34}],36:[function(require,module,exports){

'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/preloader.gif');
      //this.game.scale.minWidth = 640;
      //this.game.scale.minHeight = 480;
      this.game.scale.maxWidth = 720;
      this.game.scale.maxHeight = 450;
      this.scale.pageAlignVertically = true;
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.setScreenSize( true );
  },
  create: function() {
    //this.game.stage.smoothed = false;
    this.game.input.maxPointers = 1;
    this.game.state.start('preload');
  }
};

module.exports = Boot;

},{}],37:[function(require,module,exports){

'use strict';
var Credits = require('../prefabs/credits');
function Menu() {}

Menu.prototype = {
  preload: function() {
  },
  create: function() {
        this.select = this.game.add.audio('select',1,false);
        this.confirm = this.game.add.audio('confirm',1,false);
        this.titleBackground=this.game.add.sprite(0,0,'titleScreen');
        this.titleAwan=this.game.add.tileSprite(0,0,960,300,'titleScreenAwan');
        this.titleAwan.autoScroll(-10,0);
        this.logo=this.game.add.sprite(this.game.width/2,150,'logo');
        this.logo.anchor.setTo(0.5,0.5);
        this.game.add.tween(this.logo).to({y:145 },900,Phaser.Easing.Quadratic.InOut, true,0,-1,true);
        this.titleAwanOver=this.game.add.tileSprite(0,0,960,300,'titleScreenAwanOver');
        this.titleAwanOver.autoScroll(-10,0);
        this.playButton = this.game.add.button(this.game.width/2, 450, 'playButton', this.startClick, this);
        this.playButton.animations.add('hover')
        this.playButton.anchor.setTo(0.5,0.5);
        this.playButton.events.onInputOver.add(function(){this.playButton.animations.frame=1;this.select.play();}, this);
        this.playButton.events.onInputOut.add(function(){this.playButton.animations.frame=0;}, this);
        this.creditsButton = this.game.add.button(this.game.width/2, 560, 'creditsButton', this.creditsShow, this);
        this.creditsButton.animations.add('hover')
        this.creditsButton.anchor.setTo(0.5,0.5);
        this.creditsButton.events.onInputOver.add(function(){this.creditsButton.animations.frame=1;this.select.play();}, this);
        this.creditsButton.events.onInputOut.add(function(){this.creditsButton.animations.frame=0;}, this);
        
        this.bgm2 = this.game.add.audio('bgm2');
        this.bgm2.loop=true;
        this.bgm2.volume = 0.5;
        this.bgm2.play();
        this.on = false;
      
        this.credits = new Credits(this.game);
        this.game.add.existing(this.credits);
        this.credits.alpha = 0;
  },    
  update: function() {
      this.on = this.credits.on;
      
  },
  startClick: function(){
    this.confirm.play();
    this.titleBackground.destroy();
    this.titleAwan.destroy();
    this.logo.destroy();
    this.titleAwanOver.destroy();
    this.playButton.destroy();
    this.creditsButton.destroy();
    this.credits.destroy();
    this.bgm2.stop();  
    this.game.state.start('play');
  },
  creditsShow: function(){
      if(!this.on){
          this.confirm.play();
        this.credits.alpha = 1;
        this.credits.show();
      }
  }
};
    

module.exports = Menu;

},{"../prefabs/credits":8}],38:[function(require,module,exports){

  'use strict';
    var Neko = require('../prefabs/neko');
    var Ground = require('../prefabs/ground');
    var bushGroup = require('../prefabs/bushGroup');
    var pohonkecilGroup = require('../prefabs/pohonkecilGroup');
    var pohonkecilbackGroup = require('../prefabs/pohonkecilbackGroup');
    var pohonbackGroup = require('../prefabs/pohonbackGroup');
    var pohonGroup = require('../prefabs/pohonGroup');
    var obstacleGroup = require('../prefabs/obstacleGroup');
    var slimeGroup = require('../prefabs/slimeGroup');
    var skellyGroup = require('../prefabs/skellyGroup');
    var Pedang = require('../prefabs/pedang');
    var Player = require('../prefabs/player');
    var Explosion = require('../prefabs/explosion');
    var SlashEffect = require('../prefabs/slashEffect');
    var ScoreBoard = require('../prefabs/scoreBoard');
  function Play() {}
  Play.prototype = {
    create: function() {
        this.game.world.setBounds(0, 0, 1100, 600);
        this.game.stage.backgroundColor = '#96D7FF';
        this.game.physics.startSystem(Phaser.Physics.ARCADE); 
        this.game.physics.arcade.gravity.y = 1500;
        this.game.time.advancedTiming = true;
        this.globalSpeed = -500;
        this.globalMaxSpeed = -900;
        
        this.bgm = this.game.add.audio('bgm');
        this.bgm.loop=true;
        this.bgm.volume = 0.2;
        this.bgm.play();
        
        this.swordSfx = this.game.add.audio('swordSlash',1,false);
        this.deathSfx = this.game.add.audio('enemyDeath',1,false);
        this.hitSfx = this.game.add.audio('hit',1,false);
        this.markSfx = this.game.add.audio('mark',1,false);
        
        //background
        
        //this.background = this.game.add.sprite(0,0, 'background');
        //pepohonan
        //this.pohon = this.game.add.tileSprite(0,0,960,540,'pohon2');
        //this.pohon.autoScroll(-250,0);
        //this.pohon = this.game.add.tileSprite(0,-35,960,540,'pohon_');
        //this.pohon.autoScroll(-300,0);

        //group
        this.bushes = this.game.add.group();
        this.pohonkecils = this.game.add.group();
        this.pohonkecilbacks = this.game.add.group();
        this.pohonbacks = this.game.add.group();
        this.pohons = this.game.add.group();
        this.obstacles = this.game.add.group();
        this.slimes = this.game.add.group();
        this.skellies = this.game.add.group();

        //tanah
        this.ground = new Ground(this.game, 0, 490, 960, 108);
        this.game.add.existing(this.ground);
        //gunung
        this.gunung = this.game.add.tileSprite(0,0,960,600,'gunung');
        this.awan = this.game.add.tileSprite(0,55,960,246,'awan');
        this.gunung.autoScroll(-90,0);
        this.awan.autoScroll(-45,0);
        //instruction
        this.instruction=this.game.add.sprite(this.game.width/2,this.game.height/2,'instruction');
        this.instruction.anchor.setTo(0.5,0.5);
        this.instruction.scale.setTo(0.9,0.9);
        //overlaytanah
        //this.overlaytanah = this.game.add.tileSprite(this.game.width/2,460,960,160,'bushbush');
        //this.overlaytanah.autoScroll(this.globalSpeed,0);
        //this.overlaytanah.anchor.setTo(0.5,0.5);
        //holder
        this.player = new Player(this.game, 200,325);
        this.game.add.existing(this.player);
        //pedang
            this.pedang2 = this.game.add.sprite(-5,35,'pedang2');
            this.pedang2.anchor.setTo(0.5,0.5);
            this.pedang2.angle = -110;
            this.player.addChild(this.pedang2);
            this.slash=this.game.add.sprite(-62,-95,'slash');
            this.slash.animations.add('slashing');
            this.game.physics.arcade.enableBody(this.slash);
            this.slash.body.width = 200;
            this.slash.body.height = 170;
            this.slash.body.allowGravity=false;
            this.slash.body.immovable=true;
            //this.slash.animations.play('slashing',30,true);
            this.player.addChild(this.slash);
        //character
        this.neko = new Neko(this.game, 200, 325);
        this.game.add.existing(this.neko);
        this.neko.bringToTop();
            //particle
            this.debu = this.game.add.emitter(-40,55, 50);
            this.game.physics.arcade.enableBody(this.debu);
            this.debu.makeParticles('debus');
            this.debu.minParticleSpeed.setTo(-150,100);
            this.debu.maxParticleSpeed.setTo(-500,200);
            this.debu.minParticleScale = 0.1;
            this.debu.maxParticleScale = 0.5;
            this.debu.bounce.setTo(0.7,0.7);
            this.debu.flow(900,500,5,-1);
            this.debu.gravity = -1502;
            this.neko.addChild(this.debu);
            //scarf
            this.scarf = this.game.add.sprite(-197,-36,'scarf');
            this.scarf.animations.add('berkibar');
            this.scarf.animations.play('berkibar',8,true);
            this.neko.addChild(this.scarf);
            //shield
            this.shield = this.game.add.sprite(-50,17,'shield');
            this.shieldDef = this.game.add.sprite(25,57,'shield');
            this.neko.addChild(this.shield);
            this.neko.addChild(this.shieldDef);
            this.game.physics.arcade.enableBody(this.shieldDef);
            this.shieldDef.body.allowGravity=false;
            this.shieldDef.alpha=0;
            this.shieldDef.anchor.setTo(0.5,1)
            this.shieldDef.body.height=150;
            this.shieldDef.body.width=100;
            this.defendPosition=false;
            this.shieldNot=this.game.add.sprite(-75,-40,'shieldnot');
            this.shieldNot.scale.x=0.9;
            this.shieldNot.scale.y=0.9;
            this.shieldNot.alpha=0;
            this.neko.addChild(this.shieldNot);
            //character-control
            this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
            this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.Z]);
            this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.X]);
            this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP]);
            this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.DOWN]);
            var jumpKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            var slashKey = this.input.keyboard.addKey(Phaser.Keyboard.Z);
            var defendKey = this.input.keyboard.addKey(Phaser.Keyboard.X);
            
            jumpKey.onDown.add(this.player.jump, this.player);
            //this.input.onDown.add(this.player.jump, this.player);
            jumpKey.onDown.add(this.neko.jump, this.neko);
            //this.input.onDown.add(this.neko.jump, this.neko);
            //start
            this.game.input.onDown.addOnce(this.gameStart, this);
            slashKey.onDown.add(this.slashAct,this);
            defendKey.onDown.add(this.defendAct,this);
             //tween-char-part
            this.game.add.tween(this.pedang2).to({y:37,x:-3},250,Phaser.Easing.Linear.NONE, true,2,-1,true);
            this.game.add.tween(this.scarf).to({y:-34},250,Phaser.Easing.Linear.NONE, true,0,-1,true);
            this.game.add.tween(this.shield).to({y:15,x:-52},250,Phaser.Easing.Linear.NONE, true,0,-1,true);
            this.game.add.tween(this.shieldDef).to({y:59,x:23},250,Phaser.Easing.Linear.NONE, true,0,-1,true);
            this.game.add.tween(this.shieldNot).to({y:-38 },250,Phaser.Easing.Linear.NONE, true,0,-1,true);
            //effects
            this.boom = this.game.add.sprite(225,450,'boom');
            this.boom.anchor.setTo(0.5,0.5);
            this.boom.scale.x = 0.8;
            this.boom.scale.y = 0.8;
            this.boom.alpha=0;
            this.boom.animations.add('explode');
         //generator
            //rndlvl
        this.timeRnd = this.game.rnd.integerInRange(200,2000);
        this.timeRnd2 = this.game.rnd.integerInRange(1,6);
        this.timeRnd3 = this.game.rnd.integerInRange(1,4);
            //lvlSpawn
        this.bushLvl = 1500;
        this.pohonkecilLvl = 1000;
        this.pohonLvl = 1300;
        this.pohonkecilbackLvl = 880;
        this.obstacleLvl = 1250;
            //bushes
        this.objGenerator = this.game.time.events.loop(700, this.generateBushes, this);
        this.objGenerator.timer.start();
            //pohonkecil
        this.objGenerator2 = this.game.time.events.loop(650, this.generatePohonkecils, this);
        this.objGenerator2.timer.start();
            //pohon
        this.objGenerator3 = this.game.time.events.loop(700, this.generatePohons, this);
        this.objGenerator3.timer.start();
            //pohonkecilback
        this.objGenerator4 = this.game.time.events.loop(400, this.generatePohonkecilbacks, this);
        this.objGenerator4.timer.start();
            //obstacle
        this.objGenerator5 = this.game.time.events.loop(/*1250*/Phaser.Timer.SECOND *999999999999999999999, this.generateObstacles, this);
        this.objGenerator5.timer.start();
            //pohonback
        this.objGenerator6 = this.game.time.events.loop(600, this.generatePohonBacks, this);
        this.objGenerator6.timer.start();
            //slime 
        this.slimeGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * /*8*/999999999999999999999, this.generateSlimes, this);
        this.slimeGenerator.timer.start(); 
        this.slimeGenerator.delay = 1200;
            //skelly
        this.skellyGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * /*20*/999999999999999999999, this.generateSkelies, this);
        this.skellyGenerator.timer.start(); 
        this.skellyGenerator.delay = 1500;
            //worldlayer
        this.game.world.bringToTop(this.gunung);
        this.game.world.bringToTop(this.pohonbacks);
        this.game.world.bringToTop(this.pohonkecilbacks);
        this.game.world.bringToTop(this.pohons);
        this.game.world.bringToTop(this.pohonkecils);
        this.game.world.bringToTop(this.player);
        this.game.world.bringToTop(this.pedang2);
        //this.game.world.bringToTop(this.tangan);
        this.game.world.bringToTop(this.neko);
        this.game.world.bringToTop(this.bushes);
        this.game.world.bringToTop(this.obstacles);
        this.game.world.bringToTop(this.slimes);
        this.game.world.bringToTop(this.skellies);
        this.game.world.bringToTop(this.ground);
        this.game.world.bringToTop(this.boom);
        this.game.world.bringToTop(this.instruction);
        
        //this.spikeGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * this.timeRnd, this.generateSpikes, this);
        //this.spikeGenerator.timer.start(); 
            
        //score
        this.gameScore = 0;
        this.scoreText = this.game.add.bitmapText(this.game.width/2, 65, 'flappyfont',this.gameScore.toString(), 64);
        this.scoreText.visible = true;
        this.scoreText.alpha = 0;
        this.game.world.bringToTop(this.scoreText);
        this.nyawa=2;
        //spawnTimer
        this.slimeSpawnTimer = 0;
        this.SkellySpawnTimer = 0;
        this.timez = 0;
        this.timeE = 0;
        this.defendDelay = 0;
        this.slimeTimeDelay = 0;
        this.skellyTimeDelay = 0;
        //this.game.debug.renderPhysicsBody(this.neko.body);
        this.defendPosition=false;
    },
    update: function() {
        //debug
        this.timez += this.time.physicsElapsed;
        this.timeE += this.time.physicsElapsed;
        this.defendTime += this.time.physicsElapsed;
        this.slimeSpawnTimer += this.time.physicsElapsed;
        this.skellySpawnTimer += this.time.physicsElapsed;
        this.game.debug.text('SlimeSpawnTimer: '+this.slimeSpawnTimer , 10 , 20);
        this.game.debug.text(this.timeE, 550, 20);
        this.game.debug.text('FPS: '+this.time.fps, 10, 40);
        this.game.debug.text('SlimeGenerator: '+this.slimeGenerator.delay, 10, 60);
        this.game.debug.text('skelly nyawa: '+skellyGroup.nyawa, 10, 80);
        //score
        this.game.debug.text('Game Score: '+this.gameScore, 10, 100);
        
        if(this.slimeSpawnTimer>15){
            this.slimeSpawnTimer = 0;
            if(this.slimeGenerator.delay>500){
                this.slimeGenerator.delay-= 150;
            }
        }
        if(this.skellySpawnTimer>25){
            this.skellySpawnTimer = 0;
            if(this.skellyGenerator.delay>600){
                this.skellyGenerator.delay-= 150;
            }
        }
        
        this.game.physics.arcade.collide(this.player, this.ground);
        this.game.physics.arcade.collide(this.neko, this.ground);
        this.game.physics.arcade.collide(this.debu, this.ground);
        //this.game.physics.arcade.collide(this.slime, this.ground);
        //slime collider
            this.slimes.forEach(function(slimeGroup) {
                  this.game.physics.arcade.collide(slimeGroup,this.ground);
              }, this);
            this.slimes.forEach(function(slimeGroup) {
                this.game.physics.arcade.collide(this.neko, slimeGroup, this.deathHandler, null, this);
            }, this);
        //skelly collider
            this.skellies.forEach(function(skellyGroup) {
                  this.game.physics.arcade.collide(skellyGroup,this.ground);
              }, this);
            this.skellies.forEach(function(skellyGroup) {
                this.game.physics.arcade.collide(this.neko, skellyGroup, this.deathHandler, null, this);
            }, this);
            //this.slimes.forEach(function(slimeGroup) {
                //this.game.physics.arcade.collide(this.neko, slimeGroup, this.deathHandler, null, this);
            //}, this);
            this.obstacles.forEach(function(obstacleGroup) {
                this.game.physics.arcade.collide(this.neko, obstacleGroup, this.deathHandler, null, this);
            }, this);
        //pedang collider
            if(this.slash.animations.frame>0 && this.slash.animations.frame<18){
                //slimes
                    this.slimes.forEach(function(slimeGroup) {
                    this.game.physics.arcade.overlap(this.slash, slimeGroup, this.slimedeathHandler, null, this);
                    }, this);
                //skelly
                    this.skellies.forEach(function(skellyGroup) {
                    this.game.physics.arcade.overlap(this.slash, skellyGroup, this.skellydeathHandler, null, this);
                    }, this); 
            }
        //shield collider
            if(this.defendPosition){
                //slimes
                    this.slimes.forEach(function(slimeGroup) {
                    this.game.physics.arcade.overlap(this.shieldDef, slimeGroup, this.slimedeathShieldHandler, null, this);
                    }, this);
                //skelly
                    this.skellies.forEach(function(skellyGroup) {
                    this.game.physics.arcade.overlap(this.shieldDef, skellyGroup, this.skellydeathShieldHandler, null, this);
                    },this) 
            }
        this.debu.forEachAlive(function(p){p.alpha= p.lifespan / 900;});
        var inGround2= this.neko.body.touching.down;
          if(!inGround2)
          {
            this.debu.alpha = 0;
          }else{
             this.debu.alpha = 1;   
          };
        
        if(this.game.time.now>this.defendDelay){
            this.shieldNot.alpha=0;
        }
    },
    generateBushes: function() {
        var bushX = this.game.rnd.integerInRange(960, 1060);
        var bushGroups = this.bushes.getFirstExists(false);
        if(!bushGroups){
            bushGroups = new bushGroup(this.game, this.bushes);
        };
        bushGroups.reset(960, 80);
        
    },
     generatePohonkecils: function() {
        var pohonkecilGroups = this.pohonkecils.getFirstExists(false);
        if(!pohonkecilGroups){
            pohonkecilGroups = new pohonkecilGroup(this.game, this.pohonkecils);
        };
        pohonkecilGroups.reset(1050, 50);
    },
      generatePohonkecilbacks: function() {
        var pohonkecilbackGroups = this.pohonkecilbacks.getFirstExists(false);
        if(!pohonkecilbackGroups){
            pohonkecilbackGroups = new pohonkecilbackGroup(this.game, this.pohonkecilbacks);
        };
        pohonkecilbackGroups.reset(1010, 50);
    },
       generatePohonBacks: function() {
        var pohonbackGroups = this.pohonbacks.getFirstExists(false);
        if(!pohonbackGroups){
            pohonbackGroups = new pohonbackGroup(this.game, this.pohonbacks);
        };
        pohonbackGroups.reset(1050, 50);
    },
     generatePohons: function() {
        var pohonGroups = this.pohons.getFirstExists(false);
        if(!pohonGroups){
            pohonGroups = new pohonGroup(this.game, this.pohons);
        }; 
        pohonGroups.reset(1150, 50);
    },
      generateObstacles: function() {
        if (Phaser.Math.chanceRoll(40)) {
            var obstacleX = this.game.rnd.integerInRange(990, 1100);
            var obstacleGroups = this.obstacles.getFirstExists(false);
            if(!obstacleGroups){
               obstacleGroups = new obstacleGroup(this.game, this.obstacles);
        }; 
        obstacleGroups.reset(obstacleX, 50);
        }
    },
    generateSlimes: function() {
        if (Phaser.Math.chanceRoll(50)) {
            var posX = this.game.rnd.integerInRange(990, 1120);
            var slimeGroups = this.slimes.getFirstExists(false);
            if(!slimeGroups){
                slimeGroups = new slimeGroup(this.game, this.slimes);
            };
            slimeGroups.reset(posX,80);
        }
        
    },
    generateSkelies: function() {
        if (Phaser.Math.chanceRoll(50)) {
            var posX = this.game.rnd.integerInRange(970, 1120);
            var skellyGroups = this.skellies.getFirstExists(false);
            if(!skellyGroups){
                skellyGroups = new skellyGroup(this.game, this.skellies);
            };
            skellyGroups.reset(posX,80);
        }
        
    },
    addScore: function(){
        this.gameScore +=1;
    },
    gameStart: function(){
            //obstacle
        this.markSfx.play();
        this.objGenerator5.timer.destroy();
        
        this.objGenerator5 = this.game.time.events.loop(1250, this.generateObstacles, this);
        this.objGenerator5.timer.start();
            //slime 
        this.slimeGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 8, this.generateSlimes, this);
        this.slimeGenerator.timer.start(); 
        this.slimeGenerator.delay = 1200;
            //skelly
        this.skellyGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 20, this.generateSkelies, this);
        this.skellyGenerator.timer.start(); 
        this.skellyGenerator.delay = 1500;
        this.scoreText.alpha=1;
        this.instruction.destroy();
         //bushes
        this.objGenerator = this.game.time.events.loop(700, this.generateBushes, this);
        this.objGenerator.timer.start();
            //pohonkecil
        this.objGenerator2 = this.game.time.events.loop(650, this.generatePohonkecils, this);
        this.objGenerator2.timer.start();
            //pohon
        this.objGenerator3 = this.game.time.events.loop(700, this.generatePohons, this);
        this.objGenerator3.timer.start();
            //pohonkecilback
        this.objGenerator4 = this.game.time.events.loop(400, this.generatePohonkecilbacks, this);
        this.objGenerator4.timer.start();
            //pohonback
        this.objGenerator6 = this.game.time.events.loop(600, this.generatePohonBacks, this);
        this.objGenerator6.timer.start();
    },
    slashAct: function(){
        this.slash.animations.play('slashing',60,false);
        this.pedang2.alpha=0;
        this.slash.events.onAnimationComplete.add(function(){
            this.slash.animations.stop();
            this.slash.animations.frame=0;
            this.pedang2.alpha=1;
        },this)
    },
    defendAct: function(){
        if(this.game.time.now>this.defendDelay){
            this.defendPosition=true;
            this.shield.alpha=0;
            this.shieldDef.alpha=1;
            this.defendTimer = this.game.time.create();
            this.defendTimerEvent = this.defendTimer.add(Phaser.Timer.SECOND*2, function(){
                this.shield.alpha=1;
                this.shieldDef.alpha=0; 
                this.defendPosition=false;
                this.defendDelay=0;
                this.defendDelay=this.game.time.now+Phaser.Timer.SECOND*3;
                this.shieldNot.alpha=1;
            },this);
            this.defendTimer.start();
        }
    },
    deathHandler: function() {
        this.hitSfx.play();
        this.scoreText.alpha=0;
        this.slash.destroy();
        this.boom.alpha=1;
        this.boom.animations.play('explode',90,false);
        this.neko.body.velocity.y = -700;
        this.neko.body.velocity.x = -700;
        this.neko.angle = -45;
        this.player.body.velocity.y = -700;
        this.player.body.velocity.x = this.globalSpeed;
        //this.dTimer = this.game.time.create();
        //this.dTimerEvent = this.dTimer.add(Phaser.Timer.SECOND * 0.5, this.gameoverScene, this);
        //this.dTimer.start();
        
        this.objGenerator5.timer.stop();
        
        this.scoreBoard = new ScoreBoard(this.game);
        this.game.add.existing(this.scoreBoard);
        this.scoreBoard.show(this.gameScore);
    },
    slimedeathHandler: function(slash, slimeGroup) {
        if(this.game.time.now>this.slimeTimeDelay){
            this.swordSfx.play();
            this.gameScore++;
            this.scoreText.setText(this.gameScore.toString());
            this.boom2 = new Explosion(this.game, slimeGroup.body.x,slimeGroup.body.y);
            this.slashEffect = new SlashEffect(this.game, slimeGroup.body.x,slimeGroup.body.y);
            this.game.add.existing(this.boom2);
            this.boom2.scale.x = 0.8;
            this.boom2.scale.y = 0.8;
            this.game.add.existing(this.slashEffect);
            this.boom2.animations.play('explode',120,false);
            this.slashEffect.animations.play('slashEffect',75,false);
            slimeGroup.body.velocity.y = -600;
            slimeGroup.body.velocity.x = 600;
            //slimeGroup.addChild(this.boom2);
            this.fade=this.game.add.tween(slimeGroup).to( { alpha: 0 }, Phaser.Timer.SECOND * 0.5, Phaser.Easing.Linear.None, true, 0, 1, false);
            this.sdTimer = this.game.time.create();
            this.sdTimerSound = this.game.time.create();
            this.sdTimerSoundEvent = this.sdTimer.add(Phaser.Timer.SECOND * 0.3, function(){this.deathSfx.play();},this);
            this.sdTimerEvent = this.sdTimer.add(Phaser.Timer.SECOND * 0.5, function(){
                var posX = this.game.rnd.integerInRange(990, 1120);
                slimeGroup.reset(posX,80);
                slimeGroup.kill();
                this.sdTimer.destroy();
                this.boom2.destroy();
                this.slashEffect.destroy();
            }, this);
            this.sdTimer.start();
            this.slimeTimeDelay=this.game.time.now+250;  
        }
    },
      slimedeathShieldHandler: function(shieldDef, slimeGroup) {
        if(this.game.time.now>this.slimeTimeDelay){
            this.hitSfx.play();
            this.gameScore++;
            this.scoreText.setText(this.gameScore.toString());
            this.boom2 = new Explosion(this.game, slimeGroup.body.x,slimeGroup.body.y);
            this.game.add.existing(this.boom2);
            this.boom2.scale.x = 0.9;
            this.boom2.scale.y = 0.9;
            this.boom2.animations.play('explode',120,false);
            slimeGroup.body.velocity.y = -600;
            slimeGroup.body.velocity.x = 600;
            //slimeGroup.addChild(this.boom2);
            this.game.add.tween(slimeGroup).to( { alpha: 0 }, Phaser.Timer.SECOND * 0.5, Phaser.Easing.Linear.None, true, 0, 1, false);
            this.sdTimer = this.game.time.create();
            this.sdTimerSound = this.game.time.create();
            this.sdTimerSoundEvent = this.sdTimer.add(Phaser.Timer.SECOND * 0.3, function(){this.deathSfx.play();},this);
            this.sdTimerEvent = this.sdTimer.add(Phaser.Timer.SECOND * 0.5, function(){
                var posX = this.game.rnd.integerInRange(990, 1120);
                slimeGroup.reset(posX,80);
                slimeGroup.kill();
                this.sdTimer.destroy();
                this.boom2.destroy();
                this.slashEffect.destroy();
            }, this);
            this.sdTimer.start();
            this.slimeTimeDelay=this.game.time.now+250;  
        }
    },
      skellydeathHandler: function(slash, skellyGroup) {
        if(this.game.time.now>this.skellyTimeDelay){
            this.swordSfx.play();
            this.gameScore++;
            this.scoreText.setText(this.gameScore.toString());
            this.boom2 = new Explosion(this.game, skellyGroup.body.x,skellyGroup.body.y);
            this.slashEffect = new SlashEffect(this.game, skellyGroup.body.x,skellyGroup.body.y);
            this.game.add.existing(this.boom2);
            this.boom2.scale.x = 0.8;
            this.boom2.scale.y = 0.8;
            this.game.add.existing(this.slashEffect);
            this.boom2.animations.play('explode',120,false);
            this.slashEffect.animations.play('slashEffect',75,false);
            if(skellyGroup.hasBeenHit){
                skellyGroup.body.velocity.y = -500;
                skellyGroup.body.velocity.x = 600;
                this.game.add.tween(skellyGroup).to( { alpha: 0 }, Phaser.Timer.SECOND * 0.5, Phaser.Easing.Linear.None, true, 0, 1, false);
                this.skdTimer = this.game.time.create();
                this.skdTimerEvent = this.skdTimer.add(Phaser.Timer.SECOND * 0.5, function(){
                    var posX = this.game.rnd.integerInRange(990, 1120);
                    this.deathSfx.play()
                    skellyGroup.reset(posX,80);
                    skellyGroup.kill();
                    this.skdTimer.destroy();
                    this.boom2.destroy();
                    this.slashEffect.destroy();
                }, this);
                this.skdTimer.start();
            }else{
                skellyGroup.body.velocity.y = -400;
                skellyGroup.body.velocity.x = 600;
                this.reTimer=this.game.time.create();
                this.reTimerEvent = this.reTimer.add(700, function(){
                    this.nyawa=0;
                    skellyGroup.body.velocity.y = 0;
                    skellyGroup.body.velocity.x = -760;
                    this.boom2.destroy();
                    this.slashEffect.destroy();
                    skellyGroup.hasBeenHit=true;
                },this);
                this.reTimer.start();
            }
        }
            this.skellyTimeDelay=this.game.time.now+250;    
        },
      skellydeathShieldHandler: function(slash, skellyGroup) {
        if(this.game.time.now>this.skellyTimeDelay){
            this.hitSfx.play();
            this.gameScore++;
            this.scoreText.setText(this.gameScore.toString());
            this.boom2 = new Explosion(this.game, skellyGroup.body.x,skellyGroup.body.y);
            this.game.add.existing(this.boom2);
            this.boom2.scale.x = 0.8;
            this.boom2.scale.y = 0.8;
            this.boom2.animations.play('explode',120,false);
            if(skellyGroup.hasBeenHit){
                skellyGroup.body.velocity.y = -600;
                skellyGroup.body.velocity.x = 600;
                this.game.add.tween(skellyGroup).to( { alpha: 0 }, Phaser.Timer.SECOND * 0.5, Phaser.Easing.Linear.None, true, 0, 1, false);
                this.skdTimer = this.game.time.create();
                this.skdTimerEvent = this.skdTimer.add(Phaser.Timer.SECOND * 0.5, function(){
                    this.slashEffect.animations.stop();
                    this.deathSfx.play();
                    var posX = this.game.rnd.integerInRange(990, 1120);
                    skellyGroup.reset(posX,80);
                    skellyGroup.kill();
                    this.skdTimer.destroy();
                    this.boom2.destroy();
                    this.slashEffect.destroy();
                    this.nyawa=2;
                }, this);
                this.skdTimer.start();
            }else{
                skellyGroup.body.velocity.y = -500;
                skellyGroup.body.velocity.x = 600;
                this.reTimer=this.game.time.create();
                this.reTimerEvent = this.reTimer.add(700, function(){
                    this.nyawa=0;
                    skellyGroup.body.velocity.y = 0;
                    skellyGroup.body.velocity.x = -760;
                    this.boom2.destroy();
                    this.slashEffect.destroy();
                    skellyGroup.hasBeenHit=true;
                },this);
                this.reTimer.start();
            }
        }
            this.skellyTimeDelay=this.game.time.now+250;    
        },
    clickListener: function() {
      this.game.state.start('gameover');
    },
    gameoverScene: function() {
      this.game.state.start('gameover');
    },
     render: function() {
      //this.game.debug.body(this.shieldDef);
      //this.game.debug.body(this.slash);
    },
      shutdown: function() {
        this.game.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);
        this.game.input.keyboard.removeKey(Phaser.Keyboard.Z);
        this.game.input.keyboard.removeKey(Phaser.Keyboard.X);
        this.bushes.destroy();
        this.pohonkecils.destroy();
        this.pohonkecilbacks.destroy();
        this.pohonbacks.destroy();
        this.pohons.destroy();
        this.obstacles.destroy();
        this.slimes.destroy();
        this.skellies.destroy();
        this.neko.destroy();
        this.player.destroy();
        this.bgm.destroy();
        this.swordSfx.destroy();
        this.deathSfx.destroy();
        this.hitSfx.destroy();
        this.markSfx.destroy();
        this.scoreBoard.destroy();
    }, 
  };
  
  module.exports = Play;
},{"../prefabs/bushGroup":7,"../prefabs/explosion":10,"../prefabs/ground":11,"../prefabs/neko":12,"../prefabs/obstacleGroup":13,"../prefabs/pedang":14,"../prefabs/player":15,"../prefabs/pohonGroup":18,"../prefabs/pohonbackGroup":21,"../prefabs/pohonkecilGroup":24,"../prefabs/pohonkecilbackGroup":27,"../prefabs/scoreBoard":30,"../prefabs/skellyGroup":32,"../prefabs/slashEffect":33,"../prefabs/slimeGroup":35}],39:[function(require,module,exports){

'use strict';
function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {  
    this.asset = this.add.sprite(this.width/2,this.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);
      
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    this.load.image('titleScreen', 'assets/titlescreen.png');
    this.load.image('titleScreenAwan', 'assets/titlescreen_awan.png');
    this.load.image('titleScreenAwanOver', 'assets/titlescreen_awanover.png');
    this.load.image('logo', 'assets/logo.png');
    this.load.image('ground', 'assets/ground.png');
    this.load.image('background', 'assets/bekgrun.png');
    this.load.image('gunung', 'assets/gunung2.png');
    this.load.image('awan', 'assets/awan.png');
    this.load.image('bush', 'assets/semak.png');
    this.load.image('batukecil', 'assets/batukecil.png');
    this.load.image('batusedang', 'assets/batusedang.png');
    this.load.image('batubesar', 'assets/batubesar.png');
    this.load.image('bunga', 'assets/bunga.png');
    this.load.image('rumput', 'assets/rumput_sedang.png');
    this.load.image('rumputSedang', 'assets/rumput_sedang.png');
    this.load.image('pohon', 'assets/pohon.png');
    this.load.image('pohon2', 'assets/pohon2.png');
    this.load.image('pohonkecil', 'assets/pohonkecil.png');
    this.load.image('pohonkecil2', 'assets/pohonkecil2.png');
    this.load.image('pohonkecilback', 'assets/pohonkecilback.png');
    this.load.image('pohonkecilback2', 'assets/pohonkecilback2.png');
    this.load.image('pohonback', 'assets/pohonback.png');
    this.load.image('pohonback2', 'assets/pohonback2.png');
    this.load.image('bushbush', 'assets/bushbush.png');
    this.load.image('debus', 'assets/debu.png');
    this.load.image('cahaya', 'assets/cahaya.png');
    this.load.image('pedang', 'assets/pedang_flat.png');
    this.load.image('pedang2', 'assets/pedang_new.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('shield', 'assets/shield_flat.png');
    this.load.image('shieldnot', 'assets/shieldnot.png');
    this.load.image('spikeWheel', 'assets/spikewheel.png');
    this.load.image('dummy', 'assets/dummyy.png');
    this.load.image('skelly_face', 'assets/skelly_face.png');
    this.load.image('nothing', 'assets/nothing.png');
    this.load.image('instruction', 'assets/instruction.png');
    this.load.image('scoreBoard', 'assets/scoreboard.png');
    this.load.image('badgeGG', 'assets/badge_gg.png');
    this.load.image('badgeScrub', 'assets/badge_scrub.png');
    this.load.image('badgeOkay', 'assets/badge_okay.png');
    this.load.image('badgeNotBad', 'assets/badge_notbad.png');
    this.load.image('credits', 'assets/credits.png');
    this.load.spritesheet('neko', 'assets/neko_flat3.png', 128, 128, 2);
    this.load.spritesheet('neko_small', 'assets/neko_new_small.png', 65, 74, 2);
    this.load.spritesheet('scarf', 'assets/scarf_flat.png', 232, 121, 4);
    this.load.spritesheet('debu', 'assets/debu2.png', 200, 123, 30);
    this.load.spritesheet('boom', 'assets/boom.png', 200, 200, 15);
    this.load.spritesheet('slash', 'assets/slash.png', 217, 218, 22);
    this.load.spritesheet('slashEffect', 'assets/slasheffect.png', 176, 230, 10);
    this.load.spritesheet('tangan', 'assets/tangan.png', 217, 218, 2);
    this.load.spritesheet('slime', 'assets/slime.png', 79, 45, 2);
    this.load.spritesheet('slime_small', 'assets/slime_small.png', 39.5, 26, 2);
    this.load.spritesheet('skelly', 'assets/skelly.png', 97, 107, 2);
    this.load.spritesheet('dash', 'assets/dash.png', 218, 116, 5);
    this.load.spritesheet('playButton', 'assets/playbutton.png', 300, 160, 2);
    this.load.spritesheet('creditsButton', 'assets/creditsbutton.png', 120, 56, 2);
    this.load.spritesheet('tryAgainButton', 'assets/trybutton.png', 240, 96, 2);
    this.load.spritesheet('mainMenuButton', 'assets/menubutton.png', 160, 70, 2);
    this.load.bitmapFont('flappyfont', 'assets/fonts/flappyfont/flappyfont.png', 'assets/fonts/flappyfont/flappyfont.fnt');
    this.load.audio('bgm', 'assets/music/POL-tower-climb-short.wav');  
    this.load.audio('bgm2', 'assets/music/POL-miracle-park-short.wav');  
    this.load.audio('swordSlash', 'assets/music/Slash8-Bit.ogg');  
    this.load.audio('enemyDeath', 'assets/music/EnemyDeath.ogg');  
    this.load.audio('jump', 'assets/music/jump9.wav');  
    this.load.audio('hit', 'assets/music/Hit_Hurt.wav');  
    this.load.audio('select', 'assets/music/Confirm8-Bit.ogg');  
    this.load.audio('confirm', 'assets/music/Select8-Bit.ogg');  
    this.load.audio('mark', 'assets/music/Randomize6.wav');  
  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if(!!this.ready) {
      this.game.state.start('menu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;

},{}]},{},[1])
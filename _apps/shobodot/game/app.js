const inherits = function inherits(childCtor, parentCtor) {
  Object.setPrototypeOf(childCtor.prototype, parentCtor.prototype);
};

const getRandomInt = function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

window.onload = function() {
  const shobodot = new ShoboDot();
  const Xline = ShoboDot.getXline();
  const playerStartId = getPositionId(Xline / 2, 20);
  const enemyStartId = getPositionId(getRandomInt(Xline + 1), getRandomInt(10));
  const enemyStartId2 = getPositionId(getRandomInt(Xline + 1), getRandomInt(10));
  const lastDotId = ShoboDot.lastDotId;
  const canvasHeight = ShoboDot.maxHeight;

  function Player(id, color, options) {
    let _moveLimit = {};
    let _enemy;
    let _beaming = false;

    this.config = Object.assign({
      enemy: false,
      moveLimit: {
        up: false,
        right: false,
        left: false,
        bottom: false
      }
    }, options);

    this.enemyFunction();

    Object.defineProperty(this, 'moveLimit', {
      get: function() {
        return _moveLimit;
      },
      set: function(val) { _moveLimit = val; }
    });

    Object.defineProperty(this, 'enemy', {
      get: function() {
        return _enemy;
      },
      set: function(val) { _enemy = val; }
    });

    Object.defineProperty(this, 'beaming', {
      get: function() {
        return _beaming;
      },
      set: function(val) { _beaming = val; }
    });

    this.setVariables();
    Dot.call(this, id, 'player', color);
  }

  function Beam(playerId, direction, color) {
    let _direction = '';
    let _beamId = playerId;
    let _fireFunc;

    Object.defineProperty(this, 'direction', {
      get: function() {
        return _direction;
      },
      set: function(val) {
        if (typeof val === 'undefined')
          throw new Error('direction is undefined');
        _direction = val;
        _setPrivateVariables(_direction, this);
      }
    });

    Object.defineProperty(this, 'fireFunc', {
      get: function() {
        return _fireFunc;
      },
      set: function(val) {
        _fireFunc = val;
      }
    });

    this.direction = direction;
    Dot.call(this, _beamId, 'beam', color);

    function _setPrivateVariables(direction, beam) {
      switch (direction) {
        case 'up':
          _beamId -= Xline;
          beam.fireFunc = Dot.prototype.moveUp;
          break;

        case 'down':
          _beamId += Xline;
          beam.fireFunc = Dot.prototype.moveDown;
          break;

        default:
          throw new Error(`${direction} is invalid as direction.`);
      }
    }
  }

  inherits(Player, Dot);
  inherits(Beam, Dot);

  Player.prototype.beam = function beam(color, direction) {
    if (this.boomed) return;
    const beam = new Beam(this.positionId, direction, color);
    self = this;

    let i = 0;
    const intervalId = setInterval(function() {
      i += 1;
      if (i === 20 || beam.boomed) {
        const beamDOM = document.getElementById(beam.positionId);
        self.beaming = false;
        deleteDot(beamDOM);
        clearInterval(intervalId);
      } else {
        self.beaming = true;
        beam.fire();
      }
    }, 100);
  };

  Player.prototype.enemyFunction = function enemyFunction() {
    if (!this.config.enemy) return;
    const self = this;
    const moveIntervalId = setInterval(_movementFunc, 1200);
    const beamIntervalId = setInterval(_beamFunc, 1000);
    const intervalIds = [moveIntervalId, beamIntervalId];
    let i = 0;

    function _beamFunc() {
      if (self.boomed) {
        _clearAllInterval();
      }

      if (_shootCondition()) {
        self.beam('rgb(200, 0, 0)', 'down');
      }

      function _shootCondition() {
        const player_x = player.coordination.x;
        const enemy_x = self.coordination.x;
        return player_x === enemy_x || player_x === enemy_x - 1 || player_x === enemy_x + 1;
      }
    }
    //end of _beamFunc

    function _movementFunc() {
      if (self.boomed) {
        _clearAllInterval();
      }
      _basic();
      if (self.beaming) {
        _beamAndRun();
      }
      if (player.beaming) {
        _escape();
      }

      function _basic() {
        const random = getRandomInt(8);

        if (random === 1) {
          self.moveUp();
        } else if (random === 2 || random === 3) {
          self.moveRight();
        } else if (random === 4 || random === 5) {
          self.moveLeft();
        } else if (random === 6) {
          self.moveDown();
        } else {
          return;
        }
      }
      //end of _basic

      function _beamAndRun() {
        if (i === 10) i = 0;
        if (i <= 5) {
          self.moveLeft();
          i += 1;
        } else if (i <= 10) {
          self.moveRight();
          i += 1;
        }
      }
      //end  of _beamAndRun

      function _escape() {
        let randI = getRandomInt(5);
        const random = getRandomInt(3);
        switch (random) {
          case 1:
            for (let i = 0; i < randI; i++) {
              self.moveRight();
            }
            break;

          case 2:
            for (let i = 0; i < randI; i++) {
              self.moveLeft();
            }
            break;
        }
      }
      //end of _espcae
    }
    //end of movementFunc

    function _clearAllInterval() {
      intervalIds.forEach(id => clearInterval(id));
    }
  };
  // end of enemyFunction

  Player.prototype.setVariables = function setVariable() {
    this.enemy = this.config.enemy;
    this.moveLimit = {
      up: this.config.moveLimit.up,
      right: this.config.moveLimit.right,
      left: this.config.moveLimit.left,
      bottom: this.config.moveLimit.bottom
    };
  };

  Beam.prototype.fire = function fire() {
    this.fireFunc();
  };

  const player = new Player(playerStartId, 'rgb(0, 0, 0)');
  const enemyConfig = {
    enemy: true,
    moveLimit: {
      bottom: player.coordination.y,
    }
  };
  const enemy = new Player(enemyStartId, 'rgb(0, 200, 0)', enemyConfig);
  const enemy2 = new Player(enemyStartId2, 'rgb(0, 200, 0)', enemyConfig);

  window.addEventListener('keydown', function(e) {
    const code = e.keyCode;
    if (code === 37 || code === 65) {
      player.moveLeft();
    } else if (code === 38 || code === 87) {
      player.moveUp();
    } else if (code === 39 || code === 68) {
      player.moveRight();
    } else if (code === 40 || code === 83) {
      player.moveDown();
    } else if (code === 32) {
      player.beam('rgb(0, 100, 255)', 'up');
    }
  });
};


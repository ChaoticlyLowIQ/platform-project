scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (currentlevel == 0) {
        if (voiceLine == 0) {
            game.showLongText("This is just an ordinary platformer", DialogLayout.Top)
            voiceLine = 1
        } else if (voiceLine == 1) {
            game.showLongText("See look a coin, just pick it up", DialogLayout.Top)
            voiceLine = 2
        } else if (voiceLine == 2) {
            game.showLongText("Also, don't touch that lava. Or do I can't stop you, i'm just a box of text", DialogLayout.Top)
            voiceLine = 3
        } else if (voiceLine == 3) {
            game.showLongText("See, just an ordinary Platformer, just like I told you", DialogLayout.Top)
        }
    } else if (currentlevel == 1) {
        if (voiceLines2 == 0) {
            game.showLongText("Don't worry I won't pull anything funny because this is just an ordinary platformer", DialogLayout.Top)
            voiceLines2 = 1
        } else if (voiceLines2 == 1) {
            game.showLongText("Okay I lied, but I still caught you didn't I? I'm a box of text not a monster", DialogLayout.Top)
            voiceLines2 = 2
        } else if (voiceLines2 == 2) {
            game.showLongText("Okay I lied again, I am a horrible box of text, but watching you die is funny", DialogLayout.Top)
            voiceLines2 = 3
        } else if (voiceLines2 == 3) {
            game.showLongText("I swear I didn't do anything this time", DialogLayout.Top)
            voiceLines2 = 4
        } else if (voiceLines2 == 4) {
            game.showLongText("Why do you keep believing me?", DialogLayout.Top)
            voiceLines2 = 5
        } else if (voiceLines2 == 5) {
            game.showLongText("alright, how are you doing that? That's not supposed to happen", DialogLayout.Top)
            voiceLines2 = 6
        } else if (voiceLines2 == 6) {
            game.showLongText("You see that coin? It's worth 2 points instead of one", DialogLayout.Top)
            voiceLines2 = 7
        } else if (voiceLines2 == 7) {
            game.showLongText("Choose wisely, one of the paths don't work", DialogLayout.Top)
        }
    } else if (currentlevel == 2) {
        if (voiceline3 == 0) {
            game.showLongText("Vertical levels are hard enough, I won't do anything to you", DialogLayout.Bottom)
            voiceline3 = 1
        } else if (voiceline3 == 1) {
            game.showLongText("So, I lied again, not surprising, but how do you keep falling for these? ", DialogLayout.Top)
            voiceline3 = 2
        } else if (voiceline3 == 2) {
            game.showLongText("This path has two paths, one is really and one is fake, choose wisely", DialogLayout.Top)
            voiceline3 = 3
        } else if (voiceline3 == 3) {
            game.showLongText("Wrong choice", DialogLayout.Top)
            voiceline3 = 4
        } else if (voiceline3 == 4) {
            game.showLongText("There are another two paths, one will lead you to the win, the other will send you to the start", DialogLayout.Top)
            voiceline3 = 5
        } else if (voiceline3 == 5) {
            game.showLongText("Congrats you did it, just like I told you, it was just a normal platformer", DialogLayout.Top)
        }
    }
    tiles.setTileAt(location, assets.tile`transparency16`)
})
function setLevelTileMap (num: number) {
    if (num == 0) {
        tiles.setTilemap(tilemap`level1`)
        Jeff.setPosition(15, 210)
    } else if (num == 1) {
        tiles.setTilemap(tilemap`level2`)
        Jeff.setPosition(15, 65)
    } else if (num == 2) {
        tiles.setTilemap(tilemap`level8`)
        Jeff.setPosition(250, 1575)
    }
    hasNextLevel()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    voiceLines2 = 4
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    voiceline3 = 2
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumps < 2) {
        Jeff.vy += -100
        jumps += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    info.changeScoreBy(1)
    music.baDing.play()
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    game.showLongText("Wrong path, better start climbing", DialogLayout.Bottom)
    Jeff.setPosition(250, 1575)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    if (currentlevel == 1) {
        if (coinline == 0) {
            game.showLongText("I lied, it kills you", DialogLayout.Top)
            Jeff.setPosition(15, 65)
            coinline += 1
        } else {
            Jeff.setPosition(15, 65)
            game.showLongText("it still kills you, don't know why you thought that would change", DialogLayout.Top)
        }
    } else if (currentlevel == 2) {
        Jeff.setPosition(250, 1575)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    voiceLines2 = 7
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    voiceLines2 = 5
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    voiceLines2 = 6
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (currentlevel == 0) {
        Jeff.setPosition(15, 210)
    } else if (currentlevel == 1) {
        Jeff.setPosition(15, 65)
    } else if (currentlevel == 2) {
        Jeff.setPosition(250, 1575)
    }
    deathline = randint(1, 3)
    if (currentlevel == 0) {
        if (deathline == 1) {
            game.showLongText("I might a disembodied voice, but I know a thing or two", DialogLayout.Top)
        } else if (deathline == 2) {
            game.showLongText("I told you not to touch it", DialogLayout.Top)
        } else if (deathline == 3) {
            game.showLongText("Really?", DialogLayout.Top)
        }
    } else if (currentlevel == 1) {
        if (deathline == 1) {
            game.showLongText("You suck", DialogLayout.Top)
        } else if (deathline == 2) {
            game.showLongText("Fun Fact: Lava is bad for you health", DialogLayout.Top)
        } else if (deathline == 3) {
            game.showLongText("My grandmother can play video games better then you, and she's dead", DialogLayout.Top)
        }
    } else if (currentlevel == 2) {
        if (deathline == 1) {
            game.showLongText("Yes, touching lava kills you", DialogLayout.Top)
        } else if (deathline == 2) {
            game.showLongText("Fun Fact: You are bad at this game", DialogLayout.Top)
        } else if (deathline == 3) {
            game.showLongText("There is like 5 blocks of lava on this map", DialogLayout.Top)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    currentlevel += 1
    if (hasNextLevel()) {
        pause(100)
        game.splash("Next Level")
        setLevelTileMap(currentlevel)
    } else {
        game.over(true, effects.confetti)
    }
})
function hasNextLevel () {
    return currentlevel != levelcount
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    voiceLines2 = 3
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    voiceline3 = 4
})
let deathline = 0
let coinline = 0
let voiceline3 = 0
let voiceLines2 = 0
let voiceLine = 0
let levelcount = 0
let currentlevel = 0
let jumps = 0
let Jeff: Sprite = null
Jeff = sprites.create(img`
    ........................
    ....ffffff..............
    ..fffffff6f.............
    .fffffff666f............
    .fffffffffff...cc.......
    .ffffff6666ff.cdc.......
    .ff666fffff6fcddc.......
    ffffffffffffcddc........
    fff99fbf99fcddc.........
    fff9d91fddfcdc..........
    .ffff9dddfdccc..........
    ..ffff99f9ddf...........
    ...f666699ff............
    ...f6666f6f.............
    ...f999955f.............
    ....ffffff..............
    .....fff................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
scene.setBackgroundColor(11)
scene.cameraFollowSprite(Jeff)
Jeff.ay = 300
jumps = 0
currentlevel = 0
levelcount = 3
setLevelTileMap(currentlevel)
voiceLine = 0
voiceLines2 = 0
voiceline3 = 0
coinline = 0
game.onUpdate(function () {
    Jeff.x += controller.dx()
})
forever(function () {
    if (Jeff.isHittingTile(CollisionDirection.Bottom)) {
        jumps = 0
    }
})

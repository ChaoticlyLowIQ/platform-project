scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (currentlevel == 0) {
        if (voiceLine == 0) {
            game.showLongText("This is just an ordinary platformer", DialogLayout.Top)
            voiceLine += 1
        } else if (voiceLine == 1) {
            game.showLongText("See look a coin, just pick it up", DialogLayout.Top)
            voiceLine += 1
        } else if (voiceLine == 2) {
            game.showLongText("Also, don't touch that lava. Or do I can't stop you, i'm just a box of text", DialogLayout.Top)
            voiceLine += 1
        } else if (voiceLine == 3) {
            game.showLongText("See, just an ordinary Platformer, just like I told you", DialogLayout.Top)
        }
    } else if (currentlevel == 1) {
        if (voiceLines2 == 0) {
            game.showLongText("Don't worry I won't pull anything funny because this is just an ordinary platformer", DialogLayout.Top)
            voiceLines2 += 1
        } else if (voiceLines2 == 1) {
            game.showLongText("Okay I lied, but I still caught you didn't I? I'm a box of text not a monster", DialogLayout.Top)
            voiceLines2 += 1
        } else if (voiceLines2 == 2) {
            game.showLongText("", DialogLayout.Top)
            voiceLines2 += 1
        } else if (voiceLines2 == 3) {
            game.showLongText("See, just an ordinary Platformer, just like I told you", DialogLayout.Top)
            voiceLines2 += 1
        }
    } else {
    	
    }
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    jumps = 0
})
function setLevelTileMap (num: number) {
    if (num == 0) {
        tiles.setTilemap(tilemap`level1`)
        Jeff.setPosition(15, 210)
    } else if (num == 1) {
        tiles.setTilemap(tilemap`level2`)
        Jeff.setPosition(15, 65)
    } else if (num == 2) {
    	
    }
    hasNextLevel()
}
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (currentlevel == 0) {
        Jeff.setPosition(15, 210)
    } else if (currentlevel == 1) {
        Jeff.setPosition(15, 65)
    } else if (currentlevel == 2) {
    	
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
    } else if (currentlevel == 0) {
    	
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (currentlevel == 0) {
        Jeff.setPosition(15, 210)
    } else if (currentlevel == 1) {
        Jeff.setPosition(15, 65)
    } else if (currentlevel == 2) {
    	
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
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    currentlevel += 1
    if (hasNextLevel()) {
        pause(100)
        game.splash("Next Level")
        setLevelTileMap(currentlevel)
    } else {
        game.over(true, effects.melt)
    }
})
function hasNextLevel () {
    return currentlevel != levelcount
}
let deathline = 0
let voiceLines2 = 0
let voiceLine = 0
let levelcount = 0
let currentlevel = 0
let jumps = 0
let Jeff: Sprite = null
Jeff = sprites.create(img`
    ........................
    ....ffffff..............
    ..ffeeeef2f.............
    .ffeeeef222f............
    .feeeffeeeef...cc.......
    .ffffee2222ef.cdc.......
    .fe222ffffe2fcddc.......
    fffffffeeeffcddc........
    ffe44ebf44ecddc.........
    fee4d41fddecdc..........
    .feee4dddedccc..........
    ..ffee44e4dde...........
    ...f222244ee............
    ...f2222e2f.............
    ...f444455f.............
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
scene.setBackgroundColor(1)
scene.cameraFollowSprite(Jeff)
Jeff.ay = 300
jumps = 0
currentlevel = 0
levelcount = 3
setLevelTileMap(currentlevel)
voiceLine = 0
voiceLines2 = 0
game.onUpdate(function () {
    Jeff.x += controller.dx()
})

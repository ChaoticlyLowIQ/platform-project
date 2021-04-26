scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (voiceLine < 0) {
        game.showLongText("This is just an ordinary Platformer", DialogLayout.Bottom)
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
    tiles.setTileAt(location, assets.tile`transparency16`)
    voiceLine += 1
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    jumps = 0
})
function setLevelTileMap (num: number) {
    if (num == 0) {
        tiles.setTilemap(tilemap`level1`)
    } else if (num == 1) {
        tiles.setTilemap(tilemap`level2`)
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
Jeff.setPosition(15, 210)
scene.setBackgroundColor(1)
scene.cameraFollowSprite(Jeff)
Jeff.ay = 300
jumps = 0
currentlevel = 0
levelcount = 3
setLevelTileMap(currentlevel)
voiceLine = 0
game.onUpdate(function () {
    Jeff.x += controller.dx()
})

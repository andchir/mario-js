# Pit Death Detection Bug Analysis

## Issue
When Mario falls into a pit (abyss), he should die, but currently he doesn't.

## Root Cause
The problem is in `src/entities/Player.js:11`:

```javascript
this.setCollideWorldBounds(true);
```

This Phaser setting prevents the player sprite from leaving the world bounds. The world bounds are set in `src/scenes/Level1Scene.js:15`:

```javascript
this.physics.world.setBounds(0, 0, this.levelConfig.width, this.levelConfig.height);
// levelConfig.height = 600
```

### The Problem Flow

1. Player walks into a pit (gap in the ground at x=3200-3400)
2. Player starts falling due to gravity (1000 pixels/second²)
3. Player reaches y=600 (bottom of world)
4. **Phaser's `collideWorldBounds` stops the player at y=600**
5. The death check in `Level1Scene.js:354` never triggers because `player.y` never exceeds 600:

```javascript
// Check if player fell into a pit
if (this.player.y > this.levelConfig.height) {
    this.player.die();
}
```

### Why This Happens
- `setCollideWorldBounds(true)` makes Phaser's physics engine prevent the sprite from moving outside the defined world bounds
- The player gets "stuck" at the bottom edge (y=600) and can't fall further
- Since `player.y` can't exceed 600, the condition `player.y > 600` is never true
- Therefore, `player.die()` is never called

## Solution
Remove `setCollideWorldBounds(true)` from the Player constructor, or set it to `false`. The player needs to be able to fall below the world bounds so the death detection code can trigger.

### Alternative Considered
We could modify the world bounds to allow falling, but this would affect other game mechanics and is more complex.

## Testing
The test file `experiments/test-pit-death.html` can be used to verify:
1. Player at y > 600 should trigger `die()`
2. Player at y <= 600 should not trigger `die()`
3. Player at exactly y = 600 should not trigger `die()`

## Files to Modify
- `src/entities/Player.js` - Remove or set to false: `setCollideWorldBounds(true)`

## Expected Behavior After Fix
1. Player walks into pit
2. Player falls due to gravity
3. Player's y coordinate exceeds 600
4. Death detection triggers
5. Player dies and respawns or game over

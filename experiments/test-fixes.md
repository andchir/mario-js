# Test Plan for Issue #16 Fixes

## Bug 1: Mario getting stuck when growing

### Root Cause
When Mario collects a mushroom, the `setScale(1.5)` method increases the sprite size from its center point. If Mario is standing on the ground, this causes the bottom of the sprite to extend below the collision surface, resulting in Mario becoming stuck.

### Fix Applied
Modified `Player.js:collectMushroom()` to adjust Mario's Y position upward when growing. The adjustment moves Mario up by 25% of the display height to keep his feet at the same level.

### Testing Steps
1. Start the game
2. Move to the mushroom at x=560, y=400 (first mushroom in level)
3. Hit the question block from below to spawn the mushroom
4. Collect the mushroom
5. Verify that Mario grows without sinking into the ground
6. Verify that Mario can still move left and right after growing

## Bug 2: Mario not dying when falling into pits

### Root Cause
The `Level1Scene.js:update()` method did not check if Mario has fallen below the world bounds. There is a pit/gap in the level between x=3200 and x=3400, but falling into it had no consequence.

### Fix Applied
Added a check in `Level1Scene.js:update()` to detect when the player's Y position exceeds the level height (600 pixels). When this occurs, `player.die()` is called.

### Testing Steps
1. Start the game
2. Navigate to the pit at x=3200-3400
3. Fall into the pit
4. Verify that Mario dies (death animation plays, life is lost)
5. Verify that Mario respawns correctly if lives remain
6. Verify that game over occurs if no lives remain

## Expected Results
- Mario should grow smoothly without getting stuck in the ground
- Mario should die when falling into any pit or below the world bounds
- All existing functionality should continue to work as expected

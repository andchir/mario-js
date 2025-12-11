# Testing Pit Death Detection

## Summary of Changes

### Problem
Mario was not dying when falling into pits because `setCollideWorldBounds(true)` prevented him from falling below y=600, making the death detection condition `player.y > 600` impossible to trigger.

### Solution
Changed `setCollideWorldBounds(false)` in `src/entities/Player.js` to allow the player to fall below the world bounds, enabling the pit death detection to work correctly.

### Files Modified
1. **src/entities/Player.js**
   - Changed `setCollideWorldBounds(true)` to `setCollideWorldBounds(false)`
   - Added debug logging to `die()` method
   - Added comments explaining why world bounds collision is disabled

2. **src/scenes/Level1Scene.js**
   - Added `debugPitDeath` flag (default: false)
   - Added debug logging for pit death detection
   - Added debug logging for player position tracking near threshold

## How to Test

### Manual Testing

1. **Run the development server:**
   ```bash
   npm run dev
   ```

2. **Enable debug mode (optional):**
   Edit `src/scenes/Level1Scene.js` and change:
   ```javascript
   this.debugPitDeath = false;
   ```
   to:
   ```javascript
   this.debugPitDeath = true;
   ```

3. **Test pit death:**
   - Start the game
   - Move Mario to the gap at x=3200-3400 (between the two ground sections)
   - Mario should fall into the pit
   - Mario should die (red tint, upward motion)
   - Mario should respawn if lives remain
   - Check browser console for debug logs (if enabled)

4. **Expected debug output (when enabled):**
   ```
   [PIT DEBUG] Player Y: 550, Velocity Y: 200, Threshold: 600
   [PIT DEBUG] Player Y: 570, Velocity Y: 250, Threshold: 600
   [PIT DEBUG] Player Y: 610, Velocity Y: 300, Threshold: 600
   [PIT DEATH] Player fell into pit at y=610 (threshold=600)
   [PLAYER DIE] Lives before: 3, Position: (3250, 610)
   [PLAYER RESPAWN] Respawning with 2 lives remaining
   ```

### Automated Testing

Open `experiments/test-pit-death.html` in a browser to run automated tests:

1. **Test 1:** Player at y > 600 should die ✓
2. **Test 2:** Player at y < 600 should not die ✓
3. **Test 3:** Player at y = 600 should not die ✓

## Verification Steps

- [ ] Player falls into pit gap (x=3200-3400)
- [ ] Player's y coordinate exceeds 600
- [ ] Player dies (red tint, upward velocity)
- [ ] Lives decrease by 1
- [ ] Player respawns at (100, 100) if lives remain
- [ ] Game over screen appears if no lives remain

## Technical Details

### Physics Configuration
- World height: 600 pixels
- Ground level: y=568
- Gap location: x=3200 to x=3400
- Gravity: 1000 pixels/second²

### Death Detection Logic
Located in `Level1Scene.js:356-361`:
```javascript
if (this.player.y > this.levelConfig.height) {
    if (this.debugPitDeath) {
        console.log(`[PIT DEATH] Player fell into pit at y=${this.player.y} (threshold=${this.levelConfig.height})`);
    }
    this.player.die();
}
```

### Why the Original Code Failed
1. Player has `setCollideWorldBounds(true)` (original)
2. World bounds height is 600
3. When player falls, Phaser stops them at y=600
4. Condition `player.y > 600` never becomes true
5. Death never triggers

### Why the Fix Works
1. Player has `setCollideWorldBounds(false)` (new)
2. Player can fall below y=600
3. Condition `player.y > 600` becomes true
4. Death triggers correctly

## Notes

- The `debugPitDeath` flag should be set to `false` in production
- Debug logs will only appear when the flag is `true`
- The player can now go off-screen to the left/right as well, but this is acceptable as the camera follows the player and pits are the main concern
- If needed in the future, we could implement custom bounds checking for left/right separately

/**
 * Test script to verify random level generation issues
 * Run with: node experiments/test-random-level.js
 */

import RandomLevelGenerator from '../src/utils/RandomLevelGenerator.js';

console.log('Testing Random Level Generation Issues\n');
console.log('=' .repeat(60));

// Test 1: Generate multiple levels and check for overlaps
console.log('\nTest 1: Checking for object overlaps');
console.log('-'.repeat(60));

for (let i = 0; i < 5; i++) {
    const generator = new RandomLevelGenerator();
    const config = generator.generate();

    console.log(`\nLevel ${i + 1}:`);
    console.log(`  Grounds: ${config.grounds.length}`);
    console.log(`  Bricks: ${config.bricks.length}`);
    console.log(`  Questions: ${config.questions.length}`);
    console.log(`  Coins: ${config.coins.length}`);
    console.log(`  Enemies: ${config.enemies.length}`);
    console.log(`  Pipes: ${config.pipes.length}`);

    // Check if there's ground at player start
    const playerX = config.playerStart.x;
    const playerY = config.playerStart.y;
    const groundAtStart = config.grounds.find(g =>
        g.x <= playerX &&
        g.x + g.width >= playerX &&
        g.y === 568
    );

    if (!groundAtStart) {
        console.log(`  ⚠️  WARNING: No ground platform under player start position!`);
    } else {
        console.log(`  ✓ Ground exists at player start`);
    }

    // Check flagpole position
    console.log(`  Goal position: x=${config.goal.x}, y=${config.goal.y}`);
    if (config.goal.y !== 536) {
        console.log(`  ⚠️  WARNING: Goal is not on ground (should be y=536, is y=${config.goal.y})`);
    }

    // Check for ground at goal position
    const groundAtGoal = config.grounds.find(g =>
        g.x <= config.goal.x &&
        g.x + g.width >= config.goal.x &&
        g.y === 568
    );

    if (!groundAtGoal) {
        console.log(`  ⚠️  WARNING: No ground platform under goal position!`);
    } else {
        console.log(`  ✓ Ground exists at goal position`);
    }
}

console.log('\n' + '='.repeat(60));
console.log('Testing complete\n');

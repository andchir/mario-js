// Test script to verify moving platform creation
import Level1Config from '../src/config/Level1Config.js';

console.log('Level1Config.movingPlatforms:', Level1Config.movingPlatforms);

if (Level1Config.movingPlatforms) {
    console.log('Number of moving platforms:', Level1Config.movingPlatforms.length);
    Level1Config.movingPlatforms.forEach((platform, index) => {
        console.log(`Platform ${index}:`, platform);
    });
} else {
    console.log('NO MOVING PLATFORMS FOUND IN CONFIG!');
}

// Experiment to verify moving platform rendering properties
// Run this in browser console to check platform properties

console.log('=== Moving Platform Debug ===');

// Check if texture exists
const textureManager = game.textures;
if (textureManager.exists('movingPlatform')) {
    console.log('✓ movingPlatform texture EXISTS');
    const texture = textureManager.get('movingPlatform');
    console.log('Texture dimensions:', texture.getSourceImage().width, 'x', texture.getSourceImage().height);
} else {
    console.log('✗ movingPlatform texture DOES NOT EXIST');
}

// Check Level1Scene platforms
const level1Scene = game.scene.getScene('Level1Scene');
if (level1Scene && level1Scene.movingPlatformGroup) {
    const platforms = level1Scene.movingPlatformGroup.getChildren();
    console.log('Number of moving platforms:', platforms.length);
    
    platforms.forEach((platform, index) => {
        console.log(`Platform ${index}:`, {
            x: platform.x,
            y: platform.y,
            width: platform.displayWidth,
            height: platform.displayHeight,
            visible: platform.visible,
            alpha: platform.alpha,
            active: platform.active,
            texture: platform.texture.key
        });
    });
} else {
    console.log('Level1Scene or movingPlatformGroup not found');
}

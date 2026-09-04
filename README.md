# Retro Worlds

A self-contained 8-bit 2D side-scrolling platformer built from scratch with vanilla JavaScript and raw HTML5 Canvas. No external engine, framework, CDN, image dependency, or physics library is required.

## Why the white screen is fixed
The previous entry point depended on a module tree that was incomplete in the repository. This version puts the complete playable runtime directly in `index.html`, so there are no missing imports to break startup.

## Controls
- A/D or Left/Right: move
- Space/W/Up: jump; hold for a higher jump
- Second jump is available in the air
- F: use projectile powerups
- E: teleport when Teleport power is active
- P: pause
- R: restart
- Enter: continue after death / advance after winning

## Gameplay
Procedural multi-world progression, five levels per world, coins, enemies, checkpoints-by-progression, flag goal, raised terrain, platforms, double jump, variable jump height, classic acceleration/friction, fixed-step-style deterministic updates, camera tracking, death/respawn, score, lives, and 20 powerups.

## Powerups
1. Mushroom — Large form
2. Fire Flower — Fire shots
3. Star — temporary invincibility
4. Cape — slower falling/glide
5. Ice Flower — ice projectiles
6. Bomb — explosive-style projectile
7. Lightning — speed boost
8. Shield — protection
9. Wing — strong air control
10. Shell — shell-style power
11. Ghost — ghost power
12. Magnet — pulls nearby items
13. Rocket — controlled flight
14. Teleport — short-range teleport with E
15. Reflect — projectile power
16. Heart — recovery/invulnerability pickup
17. Time Freeze — slows enemies
18. Shadow — enhanced movement
19. Rainbow Star — enhanced invincibility
20. Mega — temporary mega power

Open `index.html` directly in a modern browser, or publish the repository with GitHub Pages.

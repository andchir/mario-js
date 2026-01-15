# Исследование: Похожие JavaScript игры на GitHub с демо

Результаты поиска похожих JavaScript игр на GitHub, которые задеплоены с помощью GitHub Actions и имеют живые демо.

## Игры с подтвержденным использованием GitHub Actions

### 1. GPTGames (TobiasMue91/tobiasmue91.github.io)
- **Репозиторий**: https://github.com/TobiasMue91/tobiasmue91.github.io
- **Демо**: https://www.gptgames.dev/
- **GitHub Actions**: Да (jekyll-gh-pages.yml)
- **Звёзды**: 49
- **Описание**: Коллекция веб-игр и инструментов, созданных с помощью ChatGPT и Claude. Содержит множество различных игр на HTML, JavaScript и CSS.
- **Особенности**: Нет трекинга, использует Firebase для мультиплеера, автоматическая публикация через GitHub Actions.

### 2. Tetris на TypeScript (DerekJi/ts-tetris)
- **Репозиторий**: https://github.com/DerekJi/ts-tetris
- **Демо**: https://derekji.github.io/ts-tetris/
- **GitHub Actions**: Да (v1.yml)
- **Описание**: Игра Tetris, созданная на TypeScript с автоматическим развёртыванием.

### 3. React Hooks Tetris (manukempo/react-hooks-tetris)
- **Репозиторий**: https://github.com/manukempo/react-hooks-tetris
- **GitHub Actions**: Да (master_deploy.yml)
- **Описание**: Игра Tetris с использованием React Hooks, автоматически деплоится на GitHub Pages через GitHub Actions.

### 4. Space Invaders (dwmkerr/spaceinvaders)
- **Репозиторий**: https://github.com/dwmkerr/spaceinvaders
- **Демо**: https://dwmkerr.github.io/spaceinvaders/
- **GitHub Actions**: Да (main.yml)
- **Описание**: Классическая игра Space Invaders, написанная на JavaScript с автоматическим развёртыванием.

### 5. Phaser Editor 2D Template (arianfornaris/demo-deploy-game-to-github-pages-with-phasereditor2d-template)
- **Репозиторий**: https://github.com/arianfornaris/demo-deploy-game-to-github-pages-with-phasereditor2d-template
- **GitHub Actions**: Да (автоматическая публикация на GitHub Pages)
- **Описание**: Шаблон проекта для создания игр с Phaser 3, Webpack 5, TypeScript и Phaser Editor 2D v3. Включает готовую настройку GitHub Actions для автоматического развёртывания.

## Игры с GitHub Pages (возможно используют GitHub Actions)

### 6. 30 HTML/CSS/JavaScript игр (he-is-talha/html-css-javascript-games)
- **Репозиторий**: https://github.com/he-is-talha/html-css-javascript-games
- **Демо**: https://he-is-talha.github.io/html-css-javascript-games/
- **Звёзды**: 175
- **Описание**: Коллекция из 30 различных игр (Snake, Tetris, Flappy Bird, Breakout, Candy Crush, Minesweeper, 2048 и др.)
- **Примечание**: Задеплоено на GitHub Pages, но использование GitHub Actions не подтверждено.

### 7. TapTapTap (MahdiF/taptaptap)
- **Репозиторий**: https://github.com/MahdiF/taptaptap
- **Демо**: https://mahdif.github.io/taptaptap/
- **Звёзды**: 171
- **Описание**: Open Source JavaScript игра, размещённая на GitHub Pages.

### 8. Gasteroids (DevTony101/gasteroids)
- **Репозиторий**: https://github.com/DevTony101/gasteroids
- **Демо**: https://devtony101.github.io/gasteroids/
- **Звёзды**: 8
- **Описание**: Игра, вдохновлённая Galaga и Asteroids, созданная с использованием p5.js.

### 9. JavaScript Games (pranavbhattad/Javascript-Games)
- **Репозиторий**: https://github.com/pranavbhattad/Javascript-Games
- **Демо**: https://pranavbhattad.github.io/Javascript-Games/
- **Звёзды**: 7
- **Описание**: Несколько популярных игр на чистом JavaScript.

### 10. Skyline Builder (hardickraj/skyline-builder)
- **Репозиторий**: https://github.com/hardickraj/skyline-builder
- **Демо**: https://skyline-builder.hardickraj.in/
- **Звёзды**: 4
- **Описание**: Игра в стиле "строй башню", созданная с использованием KaplayJS.

## Дополнительные находки

### Nighthawk Pages 2025
- **Репозиторий**: https://github.com/nighthawkcoders/portfolio_2025
- **Описание**: Образовательная платформа с поддержкой Jupyter Notebooks, включает игры и использует GitHub Actions для публикации.

### LittleJS Game Engine
- **Репозиторий**: https://github.com/KilledByAPixel/LittleJS
- **Описание**: Крошечный быстрый HTML5 игровой движок с множеством функций и без зависимостей. Содержит примеры игр с Game Jam 2025.

## Методология исследования

Для поиска использовались:
1. GitHub Search API для поиска репозиториев с топиками `javascript-game`, `javascript-games`
2. Веб-поиск по запросам связанным с "javascript game github actions deploy demo"
3. Проверка наличия `.github/workflows` директории через GitHub API
4. Проверка наличия GitHub Pages (`hasPages` параметр)

## Статистика

- Всего проверено: 50+ репозиториев
- Найдено с GitHub Actions: 5 репозиториев с подтверждённым использованием
- Найдено с демо на GitHub Pages: 10 репозиториев
- Самая популярная игра из списка: he-is-talha/html-css-javascript-games (175 звёзд)

## Выводы

1. Большинство современных JavaScript игр используют GitHub Pages для хостинга демо
2. Автоматическое развёртывание через GitHub Actions становится стандартом
3. Популярные типы игр: Tetris, Space Invaders, Flappy Bird, Snake, 2048
4. Используемые технологии: чистый JavaScript, TypeScript, React, Phaser, p5.js, Three.js

---
*Дата исследования: 2026-01-15*

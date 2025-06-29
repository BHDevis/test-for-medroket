# Тестовое задание в MeдРокет

- **Vue 2** + TypeScript
- Vuex (состояние)
- Vue Router (маршрутизация)
- Axios (запросы к API)
- CSS-модули
- Сборка через Vite

1. **Установка зависимостей**

```bash
bun install
```
или
```bash
npm install
```
2. **Запуск проекта в режиме разработки**

```bash
bun run dev
```
или
```bash
npm run dev
```

3. **Линтинг кода**

```bash
bun run lint
```
или
```bash
npm run lint
```

## Структура проекта
- `src/api` - сервис для работы с API
- `src/components` — основные компоненты (каталог, избранное, списки)
- `src/UI` — переиспользуемые UI-компоненты (спиннер, тултип, карточки и т.д.)
- `src/store` — Vuex store (модули состояний)
- `src/router` — маршруты приложения
- `src/assets` — изображения и иконки
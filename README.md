# İnegöl Mobilya — демонстрационный мебельный лендинг

React + TypeScript + Vite + Tailwind CSS (`@tailwindcss/vite`). Статический frontend, интерфейс на турецком языке. Backend и внешние сервисы не требуются. Данные, цены, описания и изображения демонстрационные, продаж нет.


## Скачать и проверить на компьютере через VS Code

1. Установите Node.js 24 LTS и Visual Studio Code.
2. Откройте ветку проекта: https://github.com/delaemsitegfdghf/site/tree/codex/inegol-mobilya-preview
3. На GitHub нажмите **Code → Download ZIP**. Если скачиваете со страницы репозитория, сначала выберите ветку `codex/inegol-mobilya-preview` вместо `main`.
4. Распакуйте ZIP и в VS Code выберите **File → Open Folder**. Откройте папку, в которой находится `package.json`.
5. Откройте **Terminal → New Terminal** и выполните:

```bash
npm ci
npm run dev
```

6. Откройте в браузере адрес, напечатанный Vite, обычно http://localhost:5173/. Оставьте терминал работающим; для остановки нажмите Ctrl+C. Простое открытие `index.html` двойным щелчком не запускает React/Vite-проект.
7. Для мобильной проверки в Chrome/Edge нажмите F12, затем кнопку **Toggle device toolbar** (Ctrl+Shift+M; на macOS Cmd+Shift+M). Проверьте ширины 360 и 390 px, затем 768, 1024 и 1440 px.
8. Проверьте шесть коллекций, фильтры Tümü и Diğer, кнопки Detayları Gör, Escape и закрытие по фону, мобильное меню и переходы между разделами.

Альтернатива скачиванию ZIP, если Git уже установлен:

```bash
git clone --branch codex/inegol-mobilya-preview --single-branch https://github.com/delaemsitegfdghf/site.git
cd site
code .
npm ci
npm run dev
```

Все файлы работают локально. Для проверки не нужны домен, хостинг, GitHub Pages или публикация в интернете.

## Запуск

Требуется Node.js 22.12+ (рекомендуется 24 LTS).

```bash
npm ci
npm run dev
```

В облачной среде с ограничением записи в домашний каталог:

```bash
npm ci --cache ./work/npm-cache
```

Vite показывает адрес локального сервера. Для удалённой среды нужен поддерживаемый интерфейсом preview/port forwarding. Сам по себе адрес localhost удалённого контейнера не доступен на компьютере пользователя.

## Проверки и сборка

```bash
npm run typecheck
npm run build
npm run preview
```

`dist/` содержит готовый статический сайт. Зависимости зафиксированы в `package-lock.json`. Шрифты и изображения входят в сборку, GitHub во время работы сайта не используется.

## Файлы

- `index.html` — HTML, tr, SEO и favicon.
- `package.json`, `package-lock.json` — зависимости и команды.
- `vite.config.ts`, `tsconfig.json` — настройки сборки и строгой типизации.
- `.gitignore` — исключения для сборки, зависимостей и временных файлов.
- `src/main.tsx`, `src/vite-env.d.ts` — точка входа, шрифты, типы Vite.
- `src/App.tsx` — сборка страницы и состояние фильтра/диалога.
- `src/styles.css` — Tailwind, палитра, адаптивность, эффекты и reduced motion.
- `src/data/products.ts` — типы, шесть категорий, восемь товаров, форматирование цен.
- `src/components/Header.tsx` — sticky header, мобильная навигация, логотип.
- `src/components/Hero.tsx` — первый экран.
- `src/components/Collections.tsx` — шесть коллекций с фильтрацией каталога.
- `src/components/ProductGrid.tsx` — фильтры, результаты, пустое состояние.
- `src/components/ProductCard.tsx` — карточка товара.
- `src/components/ProductModal.tsx` — нативный dialog, Escape, фон, фокус.
- `src/components/InspirationGallery.tsx` — интерьерная галерея.
- `src/components/About.tsx` — демонстрационное описание бренда.
- `src/components/Footer.tsx` — навигация и уведомление о демонстрации.
- `public/favicon.svg` — иконка.
- `public/images/*.webp` — семь локальных иллюстраций.
- `public/licenses/*.txt` — лицензии локальных шрифтов.
- `ASSETS.md` — происхождение изображений и шрифтов.

## Ручная публикация в cPanel

1. Выполните `npm ci` и `npm run build`.
2. Сделайте резервную копию существующего `public_html`.
3. Загрузите **содержимое** папки `dist` в целевую папку сайта (обычно `public_html`), сохранив структуру `assets/` и `images/`.
4. Файл `index.html` должен находиться непосредственно в целевой папке.
5. Проверьте страницу и загрузку изображений через HTTPS.

Node.js на хостинге не нужен. Проект не меняет DNS, домен, cPanel или настройки LiteSpeed. Маршрутизация сервером и SPA rewrite не требуются — навигация использует якоря. Публикация автоматически не выполняется.

## Доступность

Нативный dialog удерживает фокус, закрывается Escape/по фону и возвращает фокус инициатору. Есть skip link, видимый focus, aria-expanded у меню, aria-pressed у фильтров, live region количества результатов и reduced motion. Изображения ниже первого экрана загружаются лениво.

## Результаты проверки в Codex Cloud

- `npm run typecheck` — успешно.
- `npm run build` — успешно, создан `dist/`.
- Chromium: 360, 390, 768, 1024, 1440 px — нет горизонтальной прокрутки.
- Все шесть карточек коллекций показывают соответствующий товар; Tümü — 8, Diğer — 2.
- Проверены открытие диалога, Escape, нажатие на фон, удержание и возврат фокуса, мобильный диалог и меню.
- Все изображения декодированы, ошибок JavaScript нет.
- Доступный сервер Vite возвращает HTTP 200. В интерфейсе этой сессии нет инструмента для пользовательского живого preview или port forwarding; приложены скриншоты.

При первичной проверке подключённый каталог `/workspace/site` был пуст, текущая ветка — `work`, коммитов нет. Настройки Git не изменялись; публикация и отправка коммитов не выполнялись.

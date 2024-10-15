# InfinitePostFeed

**InfinitePostFeed** – это приложение на React для управления постами с функцией бесконечной прокрутки. В приложении реализованы создание, фильтрация, сортировка и удаление постов. Посты загружаются динамически с API, и при прокрутке страницы загружаются новые данные.

## Основные функции

- **Бесконечная лента постов**: Посты подгружаются по мере прокрутки страницы с помощью `IntersectionObserver`.
- **Создание постов**: Возможность добавления новых постов с использованием формы.
- **Фильтрация и сортировка**: Реализованы фильтрация по названию поста и сортировка по разным параметрам (например, по названию или описанию).
- **Удаление постов**: Возможность удалять посты.
- **Авторизация**: Приватные и публичные маршруты с управлением авторизацией через контекст.
- **Работа с API**: Посты загружаются с сервера при помощи асинхронных запросов.

## Технологии

- **React**: Используется для построения интерфейса.
- **React Router**: Для организации маршрутизации между страницами.
- **Axios**: Для выполнения HTTP-запросов к API.
- **IntersectionObserver**: Для реализации бесконечной ленты постов.
- **Context API**: Для управления состоянием авторизации.
- **CSS-модули**: Для стилизации компонентов.


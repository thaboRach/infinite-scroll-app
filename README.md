# Infinite Scroll App

A simple React application demonstrating infinite scrolling using [React Query](https://tanstack.com/query/v4) and [Vite](https://vitejs.dev/). Posts are fetched from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts) and displayed with an infinite scroll UX: new posts load automatically as you scroll to the bottom.

## Features

- **Infinite Scroll**: Seamless loading of more content as the user scrolls.
- **React Query**: Efficient data fetching and caching with `useInfiniteQuery`.
- **Vite**: Fast local development and build tooling.
- **Tailwind CSS**: Simple, modern styling.
- **TypeScript**: Type safety for all major components and API calls.

## Demo

![Infinite Scroll Demo](https://user-images.githubusercontent.com/your-demo-image.gif)  
_Demo: More posts load as you scroll down_

## Getting Started

### Prerequisites

- Node.js (>= 16)
- pnpm

### Installation

```bash
git clone https://github.com/thaboRach/infinite-scroll-app.git
cd infinite-scroll-app
pnpm install
```

### Running the App

```bash
pnpm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Project Structure

```
├── src/
│   ├── App.tsx         # Main app with infinite scroll logic
│   ├── main.tsx        # App entrypoint
│   ├── components/     # UI components (Card, Spinner)
│   ├── queries/        # Data fetching logic
│   ├── types/          # TypeScript types
│   └── index.css       # Tailwind CSS styles
├── vite.config.ts      # Vite config
├── eslint.config.js    # ESLint config
├── index.html          # HTML entrypoint
└── README.md
```

## How It Works

- **Data Fetching:**  
  Uses `fetchPosts` in `src/queries/fetchPosts.ts` to load posts from the API in pages of 10.
- **Infinite Scroll Logic:**  
  The last post element is observed using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). When it comes into view, the next page is fetched.
- **React Query:**  
  Handles paginated fetching, caching, and loading states via `useInfiniteQuery`.

## Customization

- You can change the data source by updating the API URL in `src/queries/fetchPosts.ts`.
- To adjust styling, edit `src/index.css` (uses Tailwind utility classes).

## License

MIT

---

> **Author:** [thaboRach](https://github.com/thaboRach)

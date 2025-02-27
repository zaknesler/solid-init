import { type ParentComponent, Suspense } from 'solid-js';

export const BaseLayout: ParentComponent = props => {
  //

  return (
    <main class="flex h-full flex-col gap-4 p-8">
      <nav class="inline-flex gap-3">
        <a href="/" class="font-medium hover:underline">
          Home
        </a>
        <a href="/about" class="font-medium hover:underline">
          About
        </a>
      </nav>

      <Suspense>{props.children}</Suspense>
    </main>
  );
};

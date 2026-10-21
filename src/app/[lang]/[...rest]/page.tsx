import { notFound } from 'next/navigation';

// Sends unknown paths under a language (e.g. /en/foo) to that language's 404 page.
export default function CatchAll() {
  notFound();
}

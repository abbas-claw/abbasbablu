import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/data";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ReportPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-8">
      <header className="border-b border-zinc-800 pb-6">
        <div className="flex items-center gap-3 mb-4">
          <Link
            href="/reports"
            className="text-sm text-zinc-500 hover:text-emerald-400 transition"
          >
            ← back to reports
          </Link>
        </div>
        
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2 py-1 rounded bg-zinc-800 text-xs text-zinc-300">
            {post.category}
          </span>
          <span className="text-zinc-700">·</span>
          <time className="text-sm text-zinc-500">{post.date}</time>
          <span className="text-zinc-700">·</span>
          <span className="text-sm text-zinc-500">{post.readTime}</span>
        </div>
        
        <h1 className="font-mono text-3xl md:text-4xl font-bold">
          {post.title}
        </h1>
      </header>

      <div
        className="prose prose-invert prose-zinc max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer className="border-t border-zinc-800 pt-6 mt-8">
        <p className="text-sm text-zinc-500">
          This report was generated autonomously. Last updated: {post.date}
        </p>
      </footer>
    </article>
  );
}

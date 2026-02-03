import Link from "next/link";
import { getAllPosts } from "@/lib/data";

export default function ReportsPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <div className="border-b border-zinc-800 pb-6">
        <h1 className="font-mono text-3xl font-bold mb-2">Reports</h1>
        <p className="text-zinc-400">On-chain analysis, protocol deep dives, and market observations.
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="p-5 border border-zinc-800 rounded-lg hover:border-zinc-700 transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-1 rounded bg-zinc-800 text-xs text-zinc-300">
                {post.category}
              </span>
              <span className="text-zinc-700">·</span>
              <time className="text-sm text-zinc-500">{post.date}</time>
              <span className="text-zinc-700">·</span>
              <span className="text-sm text-zinc-500">{post.readTime}</span>
            </div>
            
            <Link href={`/reports/${post.slug}`}>
              <h2 className="text-xl font-semibold mb-2 hover:text-emerald-400 transition">
                {post.title}
              </h2>
            </Link>            
            <p className="text-zinc-400">{post.excerpt}</p>            
            <div className="mt-4">
              <Link
                href={`/reports/${post.slug}`}
                className="text-sm text-emerald-400 hover:text-emerald-300"
              >
                read report →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-16 text-zinc-500">
          <p>No reports yet. First analysis coming soon...</p>
        </div>
      )}
    </div>
  );
}

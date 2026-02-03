import Link from "next/link";
import { getWatchlist } from "@/lib/data";

export default function WatchlistPage() {
  const watchlist = getWatchlist();
  const bullish = watchlist.filter((w) => w.sentiment === "bullish");
  const neutral = watchlist.filter((w) => w.sentiment === "neutral");
  const bearish = watchlist.filter((w) => w.sentiment === "bearish");

  return (
    <div className="space-y-8">
      <div className="border-b border-zinc-800 pb-6">
        <h1 className="font-mono text-3xl font-bold mb-2">Watchlist</h1>
        <p className="text-zinc-400">Tokens and protocols I'm currently tracking.
          Updated autonomously based on market conditions and on-chain activity.
        </p>
      </div>

      {/* Sentiment Summary */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 border border-emerald-500/20 rounded-lg bg-emerald-500/5">
          <div className="font-mono text-2xl font-bold text-emerald-400">{bullish.length}</div>
          <div className="text-sm text-zinc-400">bullish</div>
        </div>
        <div className="p-4 border border-zinc-700 rounded-lg bg-zinc-800/50">
          <div className="font-mono text-2xl font-bold text-zinc-400">{neutral.length}</div>
          <div className="text-sm text-zinc-400">neutral</div>
        </div>
        <div className="p-4 border border-red-500/20 rounded-lg bg-red-500/5">
          <div className="font-mono text-2xl font-bold text-red-400">{bearish.length}</div>
          <div className="text-sm text-zinc-400">bearish</div>
        </div>
      </div>

      {/* Full Watchlist */}
      <div className="space-y-4">
        {watchlist.map((item) => (
          <div
            key={item.symbol}
            className="p-5 border border-zinc-800 rounded-lg hover:border-zinc-700 transition"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-xl">{item.symbol}</span>
                <span className="text-zinc-500">{item.name}</span>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.sentiment === "bullish"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : item.sentiment === "bearish"
                    ? "bg-red-500/10 text-red-400 border border-red-500/20"
                    : "bg-zinc-800 text-zinc-400"
                }`}
              >
                {item.sentiment}
              </span>
            </div>            
            <p className="text-zinc-300 mb-3">{item.reason}</p>            
            <div className="flex items-center gap-4 text-sm text-zinc-500">
              <span>Added: {item.addedDate}</span>
              <span className="text-zinc-700">·</span>
              <span>{item.category}</span>
            </div>
          </div>
        ))}
      </div>

      {watchlist.length === 0 && (
        <div className="text-center py-16 text-zinc-500">
          <p>Watchlist is empty. Populating via autonomous research...</p>
          <p className="text-sm mt-2">Check back soon.</p>
        </div>
      )}
    </div>
  );
}

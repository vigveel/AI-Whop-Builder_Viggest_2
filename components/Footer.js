import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/10 text-center text-sm text-secondary-text">
      <div className="container mx-auto">
        <div>Viggest</div>
        <div className="mt-2">
          <a href="#" className="underline mr-4">Terms</a>
          <a href="#" className="underline mr-4">Privacy</a>
          <a href="https://discord.gg/TU_INVITE" className="underline">Discord</a>
        </div>
        <p className="mt-3 opacity-70">
          AI Whop Builder is an independent tool, not affiliated with Whop or Iman Gadzhi. Results may vary. We don’t guarantee income.
        </p>
      </div>
    </footer>
  );
}

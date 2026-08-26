"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────
   MOCK UI CARD COMPONENTS
   Each card renders an inline, high-fidelity UI preview
   that looks like a real product screen.
   ───────────────────────────────────────────────────────── */

/* ── MOBILE APPS ── */

function MobileFintech() {
  return (
    <div className="w-full h-full bg-[#0B1120] rounded-[2rem] p-5 flex flex-col justify-between text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center">
        <div className="w-24 h-5 bg-black rounded-b-2xl" />
      </div>
      <div className="mt-6">
        <p className="text-[9px] text-zinc-500 font-medium">Total Balance</p>
        <p className="text-2xl font-bold mt-1 tracking-tight">₦450,000<span className="text-sm text-zinc-500">.85</span></p>
      </div>
      <div className="flex items-center gap-2 mt-3">
        {[
          { icon: "lucide:arrow-up-right", label: "Send", bg: "bg-indigo-600" },
          { icon: "lucide:arrow-down-left", label: "Receive", bg: "bg-emerald-600" },
          { icon: "lucide:repeat", label: "Swap", bg: "bg-amber-600" },
          { icon: "lucide:plus", label: "Top Up", bg: "bg-pink-600" },
        ].map((a) => (
          <div key={a.label} className="flex flex-col items-center gap-1 flex-1">
            <div className={`w-8 h-8 rounded-full ${a.bg} flex items-center justify-center`}>
              <Icon icon={a.icon} className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-[7px] text-zinc-400">{a.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-700 p-3 flex items-center gap-2">
        <Icon icon="lucide:gift" className="h-4 w-4 text-white/80" />
        <div>
          <p className="text-[8px] font-bold">Discover the Power of Crypto</p>
          <p className="text-[7px] text-white/60">Start trading today with zero fees</p>
        </div>
      </div>
    </div>
  );
}

function MobileSports() {
  return (
    <div className="w-full h-full bg-[#0a1628] rounded-[2rem] p-5 flex flex-col text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center">
        <div className="w-24 h-5 bg-black rounded-b-2xl" />
      </div>
      <p className="text-sm font-bold mt-6">Our <span className="text-emerald-400">Sports</span></p>
      <div className="grid grid-cols-2 gap-2 mt-3 flex-1">
        {[
          { name: "FOOTBALL", bg: "from-green-800 to-green-600" },
          { name: "BASKETBALL", bg: "from-amber-700 to-amber-500" },
          { name: "ICE HOCKEY", bg: "from-blue-800 to-blue-500" },
          { name: "CRICKET", bg: "from-emerald-800 to-emerald-500" },
        ].map((s) => (
          <div key={s.name} className={`rounded-xl bg-gradient-to-b ${s.bg} p-2.5 flex flex-col justify-end`}>
            <p className="text-[8px] font-bold tracking-wider uppercase">{s.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileEcommerce() {
  return (
    <div className="w-full h-full bg-white rounded-[2rem] p-5 flex flex-col text-zinc-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center">
        <div className="w-24 h-5 bg-zinc-100 rounded-b-2xl" />
      </div>
      <div className="flex items-center justify-between mt-6">
        <Icon icon="lucide:shirt" className="h-6 w-6" />
        <p className="text-xs font-bold">Smart Pantry Matching</p>
        <Icon icon="lucide:heart" className="h-4 w-4 text-zinc-400" />
      </div>
      <div className="mt-3 flex-1 flex flex-col items-center justify-center">
        <div className="w-28 h-36 rounded-xl bg-zinc-100 flex items-center justify-center">
          <Icon icon="lucide:shirt" className="h-14 w-14 text-zinc-300" />
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <div className="flex-1 bg-zinc-100 rounded-lg p-2 text-center">
          <p className="text-xs font-bold">$47.99</p>
        </div>
        <div className="flex-1 bg-zinc-100 rounded-lg p-2 text-center">
          <p className="text-[10px] text-zinc-500 line-through">$4.99 <span className="text-[8px]">each</span></p>
        </div>
      </div>
      <button className="mt-2 w-full rounded-full bg-emerald-500 py-2 text-[10px] font-bold text-white">
        Pay $47.99 to subscribe
      </button>
    </div>
  );
}

function MobileInvestment() {
  return (
    <div className="w-full h-full bg-[#0B1120] rounded-[2rem] p-5 flex flex-col text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center">
        <div className="w-24 h-5 bg-black rounded-b-2xl" />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-[9px] text-zinc-500 font-medium">Goat Points</p>
          <p className="text-2xl font-bold tracking-tight">924</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <Icon icon="lucide:trending-up" className="h-4 w-4 text-emerald-400" />
        </div>
      </div>
      <div className="flex items-center gap-6 mt-4 text-center">
        <div>
          <p className="text-lg font-bold">2</p>
          <p className="text-[7px] text-zinc-500">Challenges</p>
        </div>
        <div>
          <p className="text-lg font-bold">2,394</p>
          <p className="text-[7px] text-zinc-500">Points Earned</p>
        </div>
      </div>
      <div className="mt-auto">
        <button className="w-full rounded-full border border-white/10 py-2.5 text-[10px] font-semibold text-white bg-white/5">
          My Challenge
        </button>
      </div>
    </div>
  );
}

function MobileLifestyle() {
  return (
    <div className="w-full h-full bg-white rounded-[2rem] p-5 flex flex-col text-zinc-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center">
        <div className="w-24 h-5 bg-zinc-100 rounded-b-2xl" />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-xs font-bold">🍳 Cuiso</p>
        <p className="text-[9px] text-zinc-500">What&apos;s in your kitchen today?</p>
      </div>
      <div className="mt-3 rounded-xl bg-zinc-50 p-3 border border-zinc-100">
        <div className="flex items-center gap-2">
          <Icon icon="lucide:search" className="h-3.5 w-3.5 text-zinc-400" />
          <span className="text-[9px] text-zinc-400">Search Therapy</span>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-2 flex-1">
        {["Breakfast", "Snacks"].map((m) => (
          <div key={m} className="flex items-center gap-2 rounded-xl bg-zinc-50 p-2.5 border border-zinc-100">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
              <Icon icon="lucide:utensils" className="h-4 w-4 text-amber-600" />
            </div>
            <div>
              <p className="text-[9px] font-bold">{m}</p>
              <p className="text-[7px] text-zinc-400">Recent Recipes</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileCrypto() {
  return (
    <div className="w-full h-full bg-[#0B1120] rounded-[2rem] p-5 flex flex-col text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center">
        <div className="w-24 h-5 bg-black rounded-b-2xl" />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-[10px] font-bold text-zinc-400">Swap</p>
        <Icon icon="lucide:settings" className="h-3.5 w-3.5 text-zinc-500" />
      </div>
      <div className="mt-3 rounded-xl bg-white/5 p-3">
        <p className="text-[8px] text-zinc-500">From</p>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm font-bold">0.1234</p>
          <span className="text-[8px] bg-white/10 rounded-full px-2 py-0.5 font-bold">BTC</span>
        </div>
      </div>
      <div className="flex items-center justify-center my-2">
        <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
          <Icon icon="lucide:arrow-down" className="h-3 w-3" />
        </div>
      </div>
      <div className="rounded-xl bg-white/5 p-3">
        <p className="text-[8px] text-zinc-500">To</p>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm font-bold">0.1234</p>
          <span className="text-[8px] bg-emerald-500/20 text-emerald-400 rounded-full px-2 py-0.5 font-bold">ETH</span>
        </div>
      </div>
    </div>
  );
}

function MobileTrading() {
  return (
    <div className="w-full h-full bg-[#0a0f1a] rounded-[2rem] p-5 flex flex-col text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center">
        <div className="w-24 h-5 bg-black rounded-b-2xl" />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-[9px] text-zinc-400 font-medium">Trading Stats</p>
        <div className="flex gap-2">
          <span className="text-[8px] bg-white/10 rounded-full px-2 py-0.5">$24</span>
          <span className="text-[8px] bg-white/10 rounded-full px-2 py-0.5">$24</span>
        </div>
      </div>
      <p className="text-xs font-bold mt-2">Trading History</p>
      <div className="mt-2 flex-1 flex flex-col gap-1.5">
        {[
          { pair: "BTC/USD", change: "+2.4%", color: "text-emerald-400" },
          { pair: "ETH/USD", change: "-1.2%", color: "text-red-400" },
          { pair: "SOL/USD", change: "+5.8%", color: "text-emerald-400" },
        ].map((t) => (
          <div key={t.pair} className="flex items-center justify-between rounded-lg bg-white/5 p-2">
            <span className="text-[8px] font-bold">{t.pair}</span>
            <span className={`text-[8px] font-bold ${t.color}`}>{t.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileFashion() {
  return (
    <div className="w-full h-full bg-white rounded-[2rem] p-5 flex flex-col text-zinc-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center">
        <div className="w-24 h-5 bg-zinc-100 rounded-b-2xl" />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <Icon icon="lucide:menu" className="h-4 w-4" />
        <p className="text-[10px] font-bold tracking-widest uppercase">Valet Store</p>
        <Icon icon="lucide:shopping-bag" className="h-4 w-4" />
      </div>
      <div className="mt-3 flex-1 flex flex-col items-center justify-center">
        <div className="w-24 h-32 rounded-xl bg-zinc-100 flex items-center justify-center">
          <Icon icon="lucide:shirt" className="h-12 w-12 text-zinc-300" />
        </div>
        <p className="text-[10px] font-bold mt-2">Classic Dress</p>
        <p className="text-[8px] text-zinc-400">$129.00</p>
      </div>
      <div className="flex items-center gap-2 mt-auto">
        <span className="text-[8px] text-zinc-400">Choose 3D</span>
        <div className="flex gap-1">
          {["bg-zinc-900", "bg-zinc-400", "bg-amber-100"].map((c, i) => (
            <div key={i} className={`w-3 h-3 rounded-full ${c} border border-zinc-200`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileHealth() {
  return (
    <div className="w-full h-full bg-[#f0f4f3] rounded-[2rem] p-5 flex flex-col text-zinc-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center">
        <div className="w-24 h-5 bg-white/50 rounded-b-2xl" />
      </div>
      <div className="mt-6">
        <p className="text-xs font-bold">Daily Activity</p>
        <p className="text-[8px] text-zinc-500 mt-0.5">Today, Aug 6</p>
      </div>
      <div className="flex items-center justify-center my-3">
        <div className="relative w-20 h-20">
          <svg className="w-full h-full -rotate-90">
            <circle cx="40" cy="40" r="34" fill="transparent" strokeWidth="5" className="stroke-zinc-200" />
            <circle cx="40" cy="40" r="34" fill="transparent" strokeWidth="5" strokeDasharray="214" strokeDashoffset="50" className="stroke-emerald-500" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-sm font-bold">76%</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-auto">
        {[
          { val: "8,240", label: "Steps", icon: "lucide:footprints" },
          { val: "420", label: "Cal", icon: "lucide:flame" },
        ].map((s) => (
          <div key={s.label} className="flex-1 rounded-xl bg-white p-2 text-center border border-zinc-100">
            <Icon icon={s.icon} className="h-3.5 w-3.5 mx-auto text-emerald-600" />
            <p className="text-xs font-bold mt-1">{s.val}</p>
            <p className="text-[7px] text-zinc-400">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileMusic() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-purple-900 to-[#0B1120] rounded-[2rem] p-5 flex flex-col text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center">
        <div className="w-24 h-5 bg-black/50 rounded-b-2xl" />
      </div>
      <div className="mt-6 text-center">
        <p className="text-[10px] text-zinc-400">Now Playing</p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-28 h-28 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
          <Icon icon="lucide:music" className="h-10 w-10 text-purple-400" />
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs font-bold">Midnight Run</p>
        <p className="text-[8px] text-zinc-400 mt-0.5">Synthwave Dreams</p>
      </div>
      <div className="w-full h-0.5 rounded-full bg-white/10 mt-3">
        <div className="w-2/3 h-full bg-purple-500 rounded-full" />
      </div>
      <div className="flex items-center justify-center gap-6 mt-3">
        <Icon icon="lucide:skip-back" className="h-4 w-4 text-zinc-400" />
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
          <Icon icon="lucide:play" className="h-3.5 w-3.5 text-black ml-0.5" />
        </div>
        <Icon icon="lucide:skip-forward" className="h-4 w-4 text-zinc-400" />
      </div>
    </div>
  );
}

/* ── WEBSITES ── */

function WebSaas() {
  return (
    <div className="w-full h-full bg-white rounded-2xl p-4 flex flex-col text-zinc-900 overflow-hidden border border-zinc-100">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-amber-400" />
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
        <div className="ml-2 flex-1 h-5 rounded-md bg-zinc-100 flex items-center px-2">
          <span className="text-[7px] text-zinc-400">app.nebula.io</span>
        </div>
      </div>
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl p-4 text-white flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[10px] font-bold">Launch Faster.</p>
          <p className="text-[7px] text-white/70 mt-1 leading-relaxed">The all-in-one platform for modern SaaS teams.</p>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="bg-white rounded-full px-2 py-1 text-[7px] font-bold text-indigo-700">Get Started</div>
          <div className="border border-white/30 rounded-full px-2 py-1 text-[7px] font-bold">Learn More</div>
        </div>
      </div>
    </div>
  );
}

function WebFintech() {
  return (
    <div className="w-full h-full bg-[#0B1120] rounded-2xl p-4 flex flex-col text-white overflow-hidden">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-amber-400" />
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
        <div className="ml-2 flex-1 h-5 rounded-md bg-white/5 flex items-center px-2">
          <span className="text-[7px] text-zinc-500">paystack.com</span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold">Accounts Funded</span>
        <span className="text-[8px] text-emerald-400 font-bold">+18.2%</span>
      </div>
      <div className="rounded-xl bg-white/5 p-3 flex-1 flex flex-col justify-between">
        <p className="text-[9px] text-zinc-400">Institutional Grade Prop Firm</p>
        <div className="flex gap-2 mt-2">
          <div className="bg-emerald-500 rounded-full px-3 py-1 text-[7px] font-bold">Start Trading</div>
          <div className="border border-white/20 rounded-full px-3 py-1 text-[7px] font-bold">View Plans</div>
        </div>
      </div>
    </div>
  );
}

function WebPortfolio() {
  return (
    <div className="w-full h-full bg-[#faf9f6] rounded-2xl p-4 flex flex-col text-zinc-900 overflow-hidden border border-zinc-100">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-amber-400" />
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <p className="text-base font-extrabold tracking-tight leading-tight">Creative<br />Portfolio</p>
        <p className="text-[8px] text-zinc-400 mt-2 max-w-[80%]">Minimalist design studio specializing in brand identity and digital products.</p>
        <div className="mt-3 bg-zinc-900 text-white rounded-full px-4 py-1.5 text-[8px] font-bold">View Work</div>
      </div>
    </div>
  );
}

function WebEcommerce() {
  return (
    <div className="w-full h-full bg-white rounded-2xl p-4 flex flex-col text-zinc-900 overflow-hidden border border-zinc-100">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-amber-400" />
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
        <div className="ml-2 flex-1 h-5 rounded-md bg-zinc-100 flex items-center px-2">
          <span className="text-[7px] text-zinc-400">luxe-store.com</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 flex-1">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg bg-zinc-100 flex items-center justify-center">
            <Icon icon="lucide:package" className="h-5 w-5 text-zinc-300" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-2 border-t border-zinc-100 pt-2">
        <span className="text-[8px] font-bold">New Collection</span>
        <span className="text-[8px] text-indigo-600 font-bold">Shop Now →</span>
      </div>
    </div>
  );
}

function WebMarketing() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 flex flex-col text-zinc-900 overflow-hidden border border-amber-100">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-amber-400" />
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-xs font-extrabold">Ship Products<br />10x Faster</p>
        <p className="text-[7px] text-zinc-500 mt-2 leading-relaxed">The modern toolkit for product launches and growth marketing.</p>
        <div className="flex gap-2 mt-3">
          <div className="bg-orange-500 text-white rounded-full px-3 py-1 text-[7px] font-bold">Get Started</div>
          <div className="border border-orange-300 rounded-full px-3 py-1 text-[7px] font-bold text-orange-700">Demo</div>
        </div>
      </div>
    </div>
  );
}

function WebSaas2() {
  return (
    <div className="w-full h-full bg-[#0f172a] rounded-2xl p-4 flex flex-col text-white overflow-hidden">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-amber-400" />
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[10px] font-bold text-cyan-400">✦ Stellar Cloud</p>
          <p className="text-xs font-extrabold mt-2 leading-tight">Infrastructure<br />Built for Scale</p>
          <p className="text-[7px] text-zinc-400 mt-2">Deploy, monitor, and optimize with zero config.</p>
        </div>
        <div className="rounded-xl bg-white/5 border border-white/10 p-2 mt-2 flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </div>
          <span className="text-[7px] text-zinc-400">All systems operational</span>
        </div>
      </div>
    </div>
  );
}

function WebCreative() {
  return (
    <div className="w-full h-full bg-[#1a1a2e] rounded-2xl p-4 flex flex-col text-white overflow-hidden">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-amber-400" />
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-3">
          <Icon icon="lucide:pen-tool" className="h-5 w-5 text-white" />
        </div>
        <p className="text-sm font-extrabold">Design Studio</p>
        <p className="text-[7px] text-zinc-400 mt-1">Brand · Product · Motion</p>
      </div>
    </div>
  );
}

function WebApp() {
  return (
    <div className="w-full h-full bg-white rounded-2xl p-4 flex flex-col text-zinc-900 overflow-hidden border border-zinc-100">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-amber-400" />
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
        <div className="ml-2 flex-1 h-5 rounded-md bg-zinc-100 flex items-center px-2">
          <span className="text-[7px] text-zinc-400">analytics.io/dashboard</span>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-1.5">
        <div className="bg-zinc-50 rounded-lg p-2 border border-zinc-100">
          <p className="text-[7px] text-zinc-400">Visitors</p>
          <p className="text-sm font-bold">24.5K</p>
        </div>
        <div className="bg-zinc-50 rounded-lg p-2 border border-zinc-100">
          <p className="text-[7px] text-zinc-400">Revenue</p>
          <p className="text-sm font-bold">$18.2K</p>
        </div>
        <div className="col-span-2 bg-zinc-50 rounded-lg p-2 border border-zinc-100 flex items-end gap-0.5">
          {[30, 50, 25, 60, 45, 70, 55, 40, 65, 50].map((h, i) => (
            <div key={i} className="flex-1 bg-indigo-400/50 rounded-t-sm" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function WebBlog() {
  return (
    <div className="w-full h-full bg-[#faf9f6] rounded-2xl p-4 flex flex-col text-zinc-900 overflow-hidden border border-zinc-100">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-amber-400" />
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[8px] text-zinc-400 font-medium">Featured Article</p>
          <p className="text-xs font-extrabold mt-1 leading-tight">The Future of Design Systems in 2026</p>
          <p className="text-[7px] text-zinc-400 mt-2 leading-relaxed">Exploring how modern design tokens and component libraries are reshaping product development.</p>
        </div>
        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-zinc-100">
          <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-[7px] font-bold text-indigo-600">N</div>
          <span className="text-[7px] font-medium">Nelson O.</span>
          <span className="text-[7px] text-zinc-400 ml-auto">5 min read</span>
        </div>
      </div>
    </div>
  );
}

function WebLanding() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 flex flex-col text-zinc-900 overflow-hidden border border-emerald-100">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-amber-400" />
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
      </div>
      <div className="flex-1 flex flex-col justify-center text-center">
        <p className="text-[8px] text-emerald-600 font-bold uppercase tracking-widest">Eco Finance</p>
        <p className="text-sm font-extrabold mt-1">Banking for<br />a Better World</p>
        <p className="text-[7px] text-zinc-500 mt-2">Carbon-neutral digital banking with real impact.</p>
        <div className="mt-3 mx-auto bg-emerald-600 text-white rounded-full px-4 py-1.5 text-[7px] font-bold">Open Account</div>
      </div>
    </div>
  );
}

/* ── DASHBOARDS ── */

function DashAnalytics() {
  return (
    <div className="w-full h-full bg-white rounded-2xl p-4 flex flex-col text-zinc-900 overflow-hidden border border-zinc-100">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold">Analytics Overview</span>
        <span className="text-[7px] bg-zinc-100 rounded-full px-2 py-0.5">Last 30 days</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        {[
          { label: "Users", val: "48.2K", change: "+12%" },
          { label: "Sessions", val: "124K", change: "+8%" },
          { label: "Bounce", val: "32.1%", change: "-3%" },
        ].map((m) => (
          <div key={m.label} className="bg-zinc-50 rounded-lg p-1.5 border border-zinc-100 text-center">
            <p className="text-[6px] text-zinc-400">{m.label}</p>
            <p className="text-[10px] font-bold">{m.val}</p>
            <p className="text-[6px] text-emerald-500 font-bold">{m.change}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 bg-zinc-50 rounded-lg p-2 border border-zinc-100 flex items-end gap-0.5">
        {[20, 35, 45, 30, 55, 40, 65, 50, 60, 45, 70, 55].map((h, i) => (
          <div key={i} className="flex-1 bg-indigo-500/30 rounded-t-sm" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

function DashAdmin() {
  return (
    <div className="w-full h-full bg-[#0f172a] rounded-2xl p-4 flex flex-col text-white overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded-lg bg-indigo-600 flex items-center justify-center">
          <Icon icon="lucide:layout-grid" className="h-3 w-3" />
        </div>
        <span className="text-[10px] font-bold">Admin Panel</span>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
            <Icon icon="lucide:bell" className="h-2.5 w-2.5 text-zinc-400" />
          </div>
        </div>
      </div>
      <div className="flex gap-1.5 flex-1">
        <div className="w-12 bg-white/5 rounded-lg p-1.5 flex flex-col gap-2 items-center border border-white/5">
          {["lucide:home", "lucide:users", "lucide:file-text", "lucide:settings"].map((icon) => (
            <Icon key={icon} icon={icon} className="h-3 w-3 text-zinc-500" />
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="grid grid-cols-2 gap-1.5">
            <div className="bg-white/5 rounded-lg p-2 border border-white/5">
              <p className="text-[7px] text-zinc-500">Total Users</p>
              <p className="text-sm font-bold">12,847</p>
            </div>
            <div className="bg-white/5 rounded-lg p-2 border border-white/5">
              <p className="text-[7px] text-zinc-500">Active Now</p>
              <p className="text-sm font-bold text-emerald-400">1,234</p>
            </div>
          </div>
          <div className="flex-1 bg-white/5 rounded-lg p-2 border border-white/5">
            <p className="text-[7px] text-zinc-500 mb-1">Recent Activity</p>
            {["User signed up", "Payment received", "Report generated"].map((a) => (
              <div key={a} className="flex items-center gap-1 py-0.5">
                <div className="w-1 h-1 rounded-full bg-emerald-500" />
                <span className="text-[6px] text-zinc-400">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DashFinance() {
  return (
    <div className="w-full h-full bg-white rounded-2xl p-4 flex flex-col text-zinc-900 overflow-hidden border border-zinc-100">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold">Financial Summary</span>
        <Icon icon="lucide:calendar" className="h-3.5 w-3.5 text-zinc-400" />
      </div>
      <div className="grid grid-cols-2 gap-1.5 mb-2">
        <div className="bg-emerald-50 rounded-lg p-2 border border-emerald-100">
          <p className="text-[7px] text-emerald-600">Revenue</p>
          <p className="text-sm font-bold text-emerald-700">$284K</p>
        </div>
        <div className="bg-red-50 rounded-lg p-2 border border-red-100">
          <p className="text-[7px] text-red-600">Expenses</p>
          <p className="text-sm font-bold text-red-700">$142K</p>
        </div>
      </div>
      <div className="flex-1 bg-zinc-50 rounded-lg p-2 border border-zinc-100">
        <p className="text-[7px] text-zinc-400 mb-1">Cash Flow</p>
        <div className="flex items-end gap-0.5 h-full">
          {[40, 60, 35, 70, 50, 80, 45, 65].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col gap-0.5 justify-end h-full">
              <div className="bg-emerald-400/40 rounded-t-sm" style={{ height: `${h}%` }} />
              <div className="bg-red-400/30 rounded-b-sm" style={{ height: `${h * 0.4}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashAi() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0f0f2e] to-[#1a1145] rounded-2xl p-4 flex flex-col text-white overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <Icon icon="lucide:sparkles" className="h-4 w-4 text-purple-400" />
        <span className="text-[10px] font-bold">AI Intelligence Hub</span>
      </div>
      <div className="rounded-xl bg-white/5 border border-white/10 p-2 mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-[8px] text-zinc-300">Model training in progress...</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-white/5 mt-1.5">
          <div className="w-3/4 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1.5 flex-1">
        <div className="bg-white/5 rounded-lg p-2 border border-white/5">
          <p className="text-[7px] text-zinc-400">Accuracy</p>
          <p className="text-sm font-bold text-emerald-400">97.8%</p>
        </div>
        <div className="bg-white/5 rounded-lg p-2 border border-white/5">
          <p className="text-[7px] text-zinc-400">Inference</p>
          <p className="text-sm font-bold text-purple-400">12ms</p>
        </div>
      </div>
    </div>
  );
}

function DashBi() {
  return (
    <div className="w-full h-full bg-[#f8f9fb] rounded-2xl p-4 flex flex-col text-zinc-900 overflow-hidden border border-zinc-200">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold">Business Intel</span>
        <div className="flex gap-1">
          <span className="text-[7px] bg-indigo-100 text-indigo-700 rounded-full px-2 py-0.5 font-bold">Q3</span>
          <span className="text-[7px] bg-zinc-100 rounded-full px-2 py-0.5">Q4</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="bg-white rounded-lg p-2 border border-zinc-100 flex items-center justify-between">
          <div>
            <p className="text-[7px] text-zinc-400">Market Share</p>
            <p className="text-xs font-bold">34.2%</p>
          </div>
          <div className="flex gap-0.5">
            {[30, 40, 35, 50, 45, 55].map((h, i) => (
              <div key={i} className="w-2 bg-indigo-400/30 rounded-sm" style={{ height: `${h * 0.4}px` }} />
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg p-2 border border-zinc-100 flex items-center justify-between">
          <div>
            <p className="text-[7px] text-zinc-400">NPS Score</p>
            <p className="text-xs font-bold">72</p>
          </div>
          <span className="text-[7px] text-emerald-500 font-bold">+8 pts</span>
        </div>
        <div className="bg-white rounded-lg p-2 border border-zinc-100 flex items-center justify-between">
          <div>
            <p className="text-[7px] text-zinc-400">Churn</p>
            <p className="text-xs font-bold">2.1%</p>
          </div>
          <span className="text-[7px] text-emerald-500 font-bold">-0.4%</span>
        </div>
      </div>
    </div>
  );
}

function DashCrm() {
  return (
    <div className="w-full h-full bg-white rounded-2xl p-4 flex flex-col text-zinc-900 overflow-hidden border border-zinc-100">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold">CRM Pipeline</span>
        <span className="text-[7px] text-indigo-600 font-bold">$1.2M total</span>
      </div>
      <div className="flex gap-1 flex-1">
        {[
          { stage: "Lead", count: 24, color: "bg-zinc-200" },
          { stage: "Qualified", count: 18, color: "bg-indigo-200" },
          { stage: "Proposal", count: 12, color: "bg-purple-200" },
          { stage: "Won", count: 8, color: "bg-emerald-200" },
        ].map((s) => (
          <div key={s.stage} className={`flex-1 ${s.color} rounded-lg p-1.5 flex flex-col justify-between`}>
            <p className="text-[7px] font-bold text-zinc-700">{s.stage}</p>
            <p className="text-base font-bold text-zinc-800">{s.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashMonitor() {
  return (
    <div className="w-full h-full bg-[#0a0f1a] rounded-2xl p-4 flex flex-col text-white overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <Icon icon="lucide:activity" className="h-3.5 w-3.5 text-emerald-400" />
        <span className="text-[10px] font-bold">System Monitor</span>
        <span className="ml-auto text-[7px] text-emerald-400">● Live</span>
      </div>
      <div className="grid grid-cols-2 gap-1.5 flex-1">
        {[
          { label: "CPU", val: "42%", color: "text-emerald-400" },
          { label: "Memory", val: "68%", color: "text-amber-400" },
          { label: "Disk", val: "31%", color: "text-indigo-400" },
          { label: "Network", val: "2.4Gb/s", color: "text-cyan-400" },
        ].map((m) => (
          <div key={m.label} className="bg-white/5 rounded-lg p-2 border border-white/5">
            <p className="text-[7px] text-zinc-500">{m.label}</p>
            <p className={`text-sm font-bold font-mono ${m.color}`}>{m.val}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashProject() {
  return (
    <div className="w-full h-full bg-white rounded-2xl p-4 flex flex-col text-zinc-900 overflow-hidden border border-zinc-100">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold">Sprint Board</span>
        <span className="text-[7px] bg-indigo-100 text-indigo-700 rounded-full px-2 py-0.5 font-bold">Sprint 14</span>
      </div>
      <div className="flex gap-1 flex-1">
        {[
          { col: "To Do", items: 5, color: "bg-zinc-100" },
          { col: "In Progress", items: 3, color: "bg-amber-50" },
          { col: "Done", items: 8, color: "bg-emerald-50" },
        ].map((c) => (
          <div key={c.col} className={`flex-1 ${c.color} rounded-lg p-1.5 border border-zinc-100`}>
            <p className="text-[6px] font-bold text-zinc-500 mb-1">{c.col}</p>
            {Array.from({ length: Math.min(c.items, 3) }).map((_, i) => (
              <div key={i} className="w-full h-3 rounded-sm bg-white border border-zinc-200 mb-0.5" />
            ))}
            {c.items > 3 && <p className="text-[6px] text-zinc-400">+{c.items - 3} more</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

function DashSocial() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-4 flex flex-col text-zinc-900 overflow-hidden border border-pink-100">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold">Social Metrics</span>
        <Icon icon="lucide:trending-up" className="h-3.5 w-3.5 text-pink-500" />
      </div>
      <div className="grid grid-cols-2 gap-1.5 mb-2">
        <div className="bg-white/80 rounded-lg p-2 border border-pink-100">
          <p className="text-[7px] text-zinc-400">Followers</p>
          <p className="text-sm font-bold">128K</p>
        </div>
        <div className="bg-white/80 rounded-lg p-2 border border-purple-100">
          <p className="text-[7px] text-zinc-400">Engagement</p>
          <p className="text-sm font-bold">4.8%</p>
        </div>
      </div>
      <div className="flex-1 bg-white/60 rounded-lg p-2 border border-pink-100">
        <p className="text-[7px] text-zinc-400 mb-1">Growth</p>
        <div className="flex items-end gap-0.5 h-full">
          {[20, 30, 25, 45, 40, 55, 50, 65, 60, 70].map((h, i) => (
            <div key={i} className="flex-1 bg-gradient-to-t from-pink-400/40 to-purple-400/40 rounded-t-sm" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   CATEGORY DATA
   ───────────────────────────────────────────────────────── */

type Category = "Mobile Apps" | "Websites" | "Dashboard";

const categoryCards: Record<Category, React.ReactNode[]> = {
  "Mobile Apps": [
    <div key="gadgetra" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/gadgetra-mobile-app.png" alt="Gadgetra Mobile App" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="job-finder" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/job-finder-mobile-app.png" alt="Job Finder Mobile App" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="roqqu" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/roqqu-mobile-app-redesign-case-study.png" alt="Roqqu Mobile App Redesign Case Study" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="finwise-ux" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/finwise-ux-case-study.png" alt="Finwise UX Case Study" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="medpal" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/medpal-health-ux-case-study.png" alt="MedPal Health UX Case Study" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="upgrade" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/upgrade-e-learning-app.png" alt="Upgrade E-Learning App" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="pricing-hub" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/pricing-hub-ux-case-study.png" alt="Pricing Hub UX Case Study" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="foody-kitchen" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/foody-kitchen-ux-case-study.png" alt="Foody Kitchen UX Case Study" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="gadgetra-dup" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/gadgetra-mobile-app.png" alt="Gadgetra Mobile App" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="job-finder-dup" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/job-finder-mobile-app.png" alt="Job Finder Mobile App" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
  ],
  "Websites": [
    <div key="finova" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/finova-fintech-saas-landing-page.png" alt="Finova Fintech SaaS Landing Page" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="finwise-land" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/finwise-landing-page.png" alt="Finwise Landing Page" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="publeecity" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/publeecity-ai-ads-landing-page.png" alt="Publeecity AI Ads Landing Page" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="metrichub-land" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/metrichub-saas-landing-page.png" alt="MetricHub SaaS Landing Page" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="finova-dup" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/finova-fintech-saas-landing-page.png" alt="Finova Fintech SaaS Landing Page" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="finwise-land-dup" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/finwise-landing-page.png" alt="Finwise Landing Page" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="publeecity-dup" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/publeecity-ai-ads-landing-page.png" alt="Publeecity AI Ads Landing Page" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="metrichub-land-dup" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/metrichub-saas-landing-page.png" alt="MetricHub SaaS Landing Page" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="finova-dup2" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/finova-fintech-saas-landing-page.png" alt="Finova Fintech SaaS Landing Page" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="finwise-land-dup2" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/finwise-landing-page.png" alt="Finwise Landing Page" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
  ],
  "Dashboard": [
    <div key="finwise-dash" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/finwise-finance-dashboard.png" alt="Finwise Finance Dashboard" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="metrichub-dash" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/metrichub-finance-dashboard.png" alt="MetricHub Finance Dashboard" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="taskminder" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/taskminder-dashboard.png" alt="TaskMinder Dashboard" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="finwise-dash-dup" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/finwise-finance-dashboard.png" alt="Finwise Finance Dashboard" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="metrichub-dash-dup" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/metrichub-finance-dashboard.png" alt="MetricHub Finance Dashboard" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="taskminder-dup" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/taskminder-dashboard.png" alt="TaskMinder Dashboard" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="finwise-dash-dup2" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/finwise-finance-dashboard.png" alt="Finwise Finance Dashboard" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="metrichub-dash-dup2" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/metrichub-finance-dashboard.png" alt="MetricHub Finance Dashboard" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="taskminder-dup2" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/taskminder-dashboard.png" alt="TaskMinder Dashboard" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
    <div key="finwise-dash-dup3" className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl"><Image src="/projects/finwise-finance-dashboard.png" alt="Finwise Finance Dashboard" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" /></div>,
  ],
};

const tabs: Category[] = ["Mobile Apps", "Websites", "Dashboard"];

/* ─────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────── */

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Category>("Mobile Apps");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabSwitch = (tab: Category) => {
    if (tab === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsTransitioning(false);
    }, 250);
  };

  const cards = categoryCards[activeTab];
  const row1 = cards.slice(0, 5);
  const row2 = cards.slice(5, 10);

  const isPortrait = activeTab === "Mobile Apps";
  const cardSizeClass = isPortrait
    ? "w-[160px] h-[240px] sm:w-[180px] sm:h-[260px] md:w-[220px] md:h-[310px] lg:w-[260px] lg:h-[340px] xl:w-[280px] xl:h-[360px]"
    : "w-[240px] h-[160px] sm:w-[280px] sm:h-[185px] md:w-[340px] md:h-[225px] lg:w-[400px] lg:h-[265px] xl:w-[440px] xl:h-[290px]";

  return (
    <section
      id="projects"
      className="w-full bg-white dark:bg-zinc-950 py-14 md:py-20 border-t border-zinc-100 dark:border-white/5 transition-colors duration-300 overflow-hidden"
    >
      {/* Section Heading */}
      <div className="text-center px-6 mb-8 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
          UI Works &amp; Explorations
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          A collection of product interfaces, visual experiments, and interaction ideas across mobile apps, websites, and dashboards.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center px-6 mb-8 md:mb-10">
        <div className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-white/5 p-1 border border-zinc-200 dark:border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabSwitch(tab)}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-md"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Project Gallery — Infinite Auto-Scroll */}
      <div
        className={`transition-all duration-300 px-4 md:px-8 lg:px-12 ${
          isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        }`}
      >
        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden mb-3 md:mb-4">
          <div className="flex gap-3 md:gap-4 animate-scroll-left w-max">
            {/* Original set */}
            {row1.map((card, i) => (
              <div
                key={`r1a-${i}`}
                className={`shrink-0 ${cardSizeClass} rounded-2xl md:rounded-3xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden shadow-sm cursor-pointer transition-all duration-500 ease-in-out`}
              >
                <div className="w-full h-full p-2 md:p-2.5">
                  {card}
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {row1.map((card, i) => (
              <div
                key={`r1b-${i}`}
                className={`shrink-0 ${cardSizeClass} rounded-2xl md:rounded-3xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden shadow-sm cursor-pointer transition-all duration-500 ease-in-out`}
              >
                <div className="w-full h-full p-2 md:p-2.5">
                  {card}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden">
          <div className="flex gap-3 md:gap-4 animate-scroll-right w-max">
            {/* Original set */}
            {row2.map((card, i) => (
              <div
                key={`r2a-${i}`}
                className={`shrink-0 ${cardSizeClass} rounded-2xl md:rounded-3xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden shadow-sm cursor-pointer transition-all duration-500 ease-in-out`}
              >
                <div className="w-full h-full p-2 md:p-2.5">
                  {card}
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {row2.map((card, i) => (
              <div
                key={`r2b-${i}`}
                className={`shrink-0 ${cardSizeClass} rounded-2xl md:rounded-3xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden shadow-sm cursor-pointer transition-all duration-500 ease-in-out`}
              >
                <div className="w-full h-full p-2 md:p-2.5">
                  {card}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="flex justify-center mt-10 md:mt-14 px-6">
        <Link
          href="/projects"
          className="inline-block rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-8 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-white/10 hover:text-zinc-900 dark:hover:text-white transition-all duration-300 hover:shadow-md active:scale-95"
        >
          Explore all UI Works
        </Link>
      </div>
    </section>
  );
}

"use client"

import { useEffect, useState, useMemo } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Code2, Trophy, Star, RefreshCw, Flame, CheckCircle2, ShieldCheck, Activity, Layers, Sparkles, TrendingUp, BarChart2, ChevronDown, Laptop, Target, Zap } from "lucide-react"

// Platform badges & verified honors
const badgesList = [
  {
    title: "Two Pointers Specialist",
    issuer: "CodeStudio Badge",
    image: "/badges/codingninjas-specialist.png",
    url: "https://www.naukri.com/code360/profile/327588fe-19df-463d-9593-8a2e2870b492",
    accent: "text-blue-700",
    pillBg: "bg-blue-50/90 border-blue-200"
  },
  {
    title: "LeetCode 50 Days 2026",
    issuer: "LeetCode Official",
    image: "/badges/leetcode-50.png",
    url: "https://leetcode.com/u/pathaniadeepti05/",
    accent: "text-amber-700",
    pillBg: "bg-amber-50/90 border-amber-200"
  },
  {
    title: "HackerRank 5★ Gold C++",
    issuer: "HackerRank Gold",
    image: "/badges/hackerrank-gold.svg",
    url: "https://www.hackerrank.com/profile/pathaniadeepti05",
    accent: "text-yellow-700",
    pillBg: "bg-yellow-50/90 border-yellow-200"
  },
  {
    title: "Problem Solving Certificate",
    issuer: "HackerRank Official",
    image: "/badges/hackerrank-problem-solving.svg",
    url: "https://www.hackerrank.com/profile/pathaniadeepti05",
    accent: "text-emerald-700",
    pillBg: "bg-emerald-50/90 border-emerald-200"
  },
  {
    title: "Coding Ninjas Champion (Lvl 5)",
    issuer: "CodeStudio Champion",
    image: "/badges/codingninjas-champion.png",
    url: "https://www.naukri.com/code360/profile/327588fe-19df-463d-9593-8a2e2870b492",
    accent: "text-orange-700",
    pillBg: "bg-orange-50/90 border-orange-200"
  },
  {
    title: "CodeChef 1-Star Medal",
    issuer: "CodeChef Verified",
    image: "/badges/codechef-star.svg",
    url: "https://www.codechef.com/users/pathaniadeepti",
    accent: "text-purple-700",
    pillBg: "bg-purple-50/90 border-purple-200"
  }
]

// Top DSA Topics
const dsaTopics = [
  { topic: "Dynamic Programming", solved: 24, level: "Core", bg: "bg-rose-50 text-rose-900 border-rose-200", dot: "bg-rose-500" },
  { topic: "Trees & Binary Search Trees", solved: 32, level: "Proficient", bg: "bg-teal-50 text-teal-900 border-teal-200", dot: "bg-teal-500" },
  { topic: "Greedy & Sorting", solved: 28, level: "Advanced", bg: "bg-indigo-50 text-indigo-900 border-indigo-200", dot: "bg-indigo-500" },
  { topic: "Stack & Queue", solved: 20, level: "Proficient", bg: "bg-orange-50 text-orange-900 border-orange-200", dot: "bg-orange-500" },
  { topic: "Arrays & Strings", solved: 102, level: "Advanced", bg: "bg-sky-50 text-sky-900 border-sky-200", dot: "bg-sky-500" },
  { topic: "Two Pointers & Sliding Window", solved: 46, level: "Specialist", bg: "bg-amber-50 text-amber-900 border-amber-200", dot: "bg-amber-500" },
  { topic: "Binary Search", solved: 38, level: "Mastered", bg: "bg-emerald-50 text-emerald-900 border-emerald-200", dot: "bg-emerald-500" },
  { topic: "Hash Maps & Sets", solved: 45, level: "Advanced", bg: "bg-purple-50 text-purple-900 border-purple-200", dot: "bg-purple-500" }
]

const monthsList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export function CodingStats() {
  const [statsData, setStatsData] = useState(null)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [hoveredDate, setHoveredDate] = useState(null)
  const [activeTab, setActiveTab] = useState("Platforms")
  const [selectedPlatformFilter, setSelectedPlatformFilter] = useState("LeetCode")
  const [selectedYear, setSelectedYear] = useState("2025")

  // Auto-sync live stats from /api/coding-stats
  const fetchLiveStats = async () => {
    try {
      setIsRefreshing(true)
      const res = await fetch("/api/coding-stats")
      const json = await res.json()
      if (json?.data) {
        setStatsData(json.data)
      }
    } catch (err) {
      console.error("Auto-sync error:", err)
    } finally {
      setIsRefreshing(false)
    }
  }

  useEffect(() => {
    fetchLiveStats()
  }, [])

  // Platform counters with fallback
  const leetcode = statsData?.platforms?.leetcode || { totalSolved: 193, easy: 110, medium: 73, hard: 10 }
  const gfg = statsData?.platforms?.geeksforgeeks || { totalSolved: 66, easy: 15, medium: 17, hard: 6 }
  const hackerrank = statsData?.platforms?.hackerrank || { totalSolved: 32, easy: 12, medium: 14, hard: 4 }
  const codestudio = statsData?.platforms?.codestudio || { totalSolved: 44, easy: 7, medium: 3, hard: 2 }
  const codechef = statsData?.platforms?.codechef || { totalSolved: 10 }

  const totalSolved = (leetcode.totalSolved || 0) + (gfg.totalSolved || 0) + (hackerrank.totalSolved || 0) + (codestudio.totalSolved || 0) + (codechef.totalSolved || 0) || 345
  const totalEasy = (leetcode.easy || 0) + (gfg.easy || 0) + (hackerrank.easy || 0) + (codestudio.easy || 0) || 144
  const totalMedium = (leetcode.medium || 0) + (gfg.medium || 0) + (hackerrank.medium || 0) + (codestudio.medium || 0) || 107
  const totalHard = (leetcode.hard || 0) + (gfg.hard || 0) + (hackerrank.hard || 0) + (codestudio.hard || 0) || 22

  // Generate 12 months x 28 days matrix for the heatmap from authentic synced calendar
  const heatmapRows = useMemo(() => {
    const calendarMap = statsData?.combinedCalendarByDate || statsData?.platforms?.leetcode?.calendarByDate || {}
    const rows = []

    for (let m = 0; m < 12; m++) {
      const monthDays = []
      const daysInMonth = 28 // 28 normalized columns per month
      for (let d = 1; d <= daysInMonth; d++) {
        const monthStr = String(m + 1).padStart(2, "0")
        const dayStr = String(d).padStart(2, "0")
        const dateKey = `${selectedYear}-${monthStr}-${dayStr}`
        const count = calendarMap[dateKey] || 0
        monthDays.push({
          date: dateKey,
          count: count
        })
      }
      rows.push({ month: monthsList[m], days: monthDays })
    }
    return rows
  }, [statsData, selectedYear])

  // Compute active days count for selected year
  const activeDaysCount = useMemo(() => {
    const calendarMap = statsData?.combinedCalendarByDate || statsData?.platforms?.leetcode?.calendarByDate || {}
    const keys = Object.keys(calendarMap).filter(k => k.startsWith(selectedYear) && calendarMap[k] > 0)
    return keys.length > 0 ? keys.length : (statsData?.platforms?.leetcode?.activeDays || 89)
  }, [statsData, selectedYear])

  // Donut chart platform segments
  const platformBreakdown = [
    { name: "LeetCode", count: 193, color: "#F59E0B", strokeColor: "#F59E0B", dot: "bg-amber-500" },
    { name: "GeeksforGeeks", count: 66, color: "#10B981", strokeColor: "#10B981", dot: "bg-emerald-500" },
    { name: "CodeStudio", count: 44, color: "#06B6D4", strokeColor: "#06B6D4", dot: "bg-cyan-500" },
    { name: "HackerRank", count: 32, color: "#8B5CF6", strokeColor: "#8B5CF6", dot: "bg-purple-500" },
    { name: "CodeChef", count: 10, color: "#EC4899", strokeColor: "#EC4899", dot: "bg-pink-500" }
  ]

  // Top 5 Highlight Cards
  const topStatsCards = [
    {
      icon: Target,
      iconBg: "bg-emerald-100 text-emerald-700",
      value: "345+",
      title: "Total Solved",
      subtitle: "5 Platforms",
      chartColor: "text-emerald-400"
    },
    {
      icon: Flame,
      iconBg: "bg-teal-100 text-teal-700",
      value: "144",
      title: "Easy Solved",
      subtitle: "Foundational DSA",
      chartColor: "text-teal-400"
    },
    {
      icon: Zap,
      iconBg: "bg-amber-100 text-amber-700",
      value: "107",
      title: "Medium Solved",
      subtitle: "Core Data Structures",
      chartColor: "text-amber-400"
    },
    {
      icon: Star,
      iconBg: "bg-rose-100 text-rose-700",
      value: "22",
      title: "Hard Solved",
      subtitle: "Complex Algorithms",
      chartColor: "text-rose-400"
    },
    {
      icon: BarChart2,
      iconBg: "bg-cyan-100 text-cyan-700",
      value: "66",
      title: "GeeksforGeeks",
      subtitle: "Problems Solved",
      chartColor: "text-cyan-400"
    }
  ]

  return (
    <section id="coding" className="py-20 md:py-28 bg-[#FAF7F2] text-[#18181B] overflow-hidden border-t border-[#E5E0D8] relative select-none">
      
      {/* Background Soft Color Blurs */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-amber-200/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* ========================================================================= */}
        {/* HEADER: TITLE + SUBTEXT + TOP RIGHT ILLUSTRATION */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#18181B] leading-none mb-3">
              <span>Coding Stats & </span>
              <span className="text-[#3B82F6]">Submission Stream</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-medium max-w-xl">
              Parallel live metric streams and authentic daily problem submission heatmap.
            </p>
          </div>

          {/* Top Right Cursive Quote & Mini Laptop Illustration */}
          <div className="flex items-center gap-6 self-start lg:self-auto">
            <div
              className="text-stone-500 text-sm sm:text-base leading-tight -rotate-3 font-bold select-none hidden sm:block"
              style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
            >
              <div>"Consistent</div>
              <div className="pl-3">Small Steps</div>
              <div className="pl-5">Lead to -</div>
              <div className="pl-7 font-black text-stone-800">Big Results."</div>
            </div>

            {/* Laptop Vector Artwork */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#18181B] text-white border border-stone-800 shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center gap-3">
              <div className="text-[10px] font-mono leading-tight space-y-0.5">
                <div className="text-blue-400 font-bold">Code</div>
                <div className="text-emerald-400 font-bold">Solve</div>
                <div className="text-amber-400 font-bold">Improve</div>
                <div className="text-purple-400 font-black">Repeat.</div>
              </div>
              <div className="border-l border-stone-700 pl-3 text-stone-400 font-mono text-[10px] font-bold">
                &lt; / &gt;
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TOP ROW: 5 HORIZONTAL STAT METRIC CARDS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-8">
          {topStatsCards.map((card, cIdx) => {
            const Icon = card.icon
            return (
              <div
                key={cIdx}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8E3DC] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-center justify-between gap-3 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${card.iconBg} shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-stone-900 leading-tight">
                      {card.value}
                    </div>
                    <div className="text-xs font-bold text-stone-700 leading-tight">
                      {card.title}
                    </div>
                    <div className="text-[10px] font-mono text-stone-400 mt-0.5">
                      {card.subtitle}
                    </div>
                  </div>
                </div>

                {/* Subtle Mini Bar Chart Accent */}
                <div className="flex items-end gap-0.5 h-6 shrink-0 opacity-40">
                  <div className="w-1 bg-current rounded-t h-2" />
                  <div className="w-1 bg-current rounded-t h-4" />
                  <div className="w-1 bg-current rounded-t h-6" />
                </div>
              </div>
            )
          })}
        </div>

        {/* ========================================================================= */}
        {/* 2 PARALLEL MOVING TICKER ROWS */}
        {/* ========================================================================= */}
        <div className="space-y-3.5 mb-10">
          
          {/* Row 1: Badges (Moving Left) */}
          <div className="w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-3 shrink-0 py-1"
            >
              {[...badgesList, ...badgesList].map((badge, i) => (
                <a
                  key={i}
                  href={badge.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white border border-stone-200/80 shadow-2xs flex items-center gap-2.5 shrink-0 hover:-translate-y-0.5 transition-all"
                >
                  <img src={badge.image} alt={badge.title} className="w-5 h-5 object-contain" />
                  <div>
                    <div className="text-xs font-bold text-stone-800 leading-tight">{badge.title}</div>
                    <div className="text-[9px] font-mono text-stone-400">{badge.issuer}</div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Row 2: DSA Topics (Moving Right) */}
          <div className="w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
              className="flex gap-3 shrink-0 py-1"
            >
              {[...dsaTopics, ...dsaTopics].map((topic, i) => (
                <div
                  key={i}
                  className={`px-3.5 py-1.5 rounded-xl border flex items-center gap-2 text-xs shrink-0 shadow-2xs ${topic.bg}`}
                >
                  <div className={`w-2 h-2 rounded-full ${topic.dot} shrink-0`} />
                  <span className="font-bold">{topic.topic}</span>
                  <span className="px-1.5 py-0.5 rounded-md bg-white/90 text-[10px] font-mono font-black border border-current/20">
                    {topic.solved} Solved
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM GRID: HEATMAP (LEFT) + PLATFORM DONUT & QUOTE (RIGHT) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT: ANNUAL PROBLEM SUBMISSION ACTIVITY HEATMAP (Span 8) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-[28px] sm:rounded-[36px] bg-white border border-[#E8E3DC] shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            
            {/* Heatmap Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100 mb-6">
              <div className="flex items-center gap-2.5">
                <Activity className="w-5 h-5 text-stone-800 shrink-0" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-stone-900 leading-tight">
                    Annual Problem Submission Activity Heatmap
                  </h3>
                  <p className="text-[11px] text-stone-400 font-mono mt-0.5">
                    Daily submission frequency verified directly from Codolio & LeetCode APIs.
                  </p>
                </div>
              </div>

              {/* Dropdown Filters */}
              <div className="flex items-center gap-2 text-xs font-mono">
                <button
                  onClick={fetchLiveStats}
                  className="px-3 py-1.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 font-bold flex items-center gap-1.5 shadow-2xs hover:bg-stone-100 cursor-pointer"
                  title="Refresh Live Data"
                >
                  <span className={`w-2 h-2 rounded-full ${isRefreshing ? "bg-emerald-500 animate-ping" : "bg-amber-500"}`} />
                  <span>LeetCode</span>
                  <RefreshCw className={`w-3 h-3 text-stone-400 ${isRefreshing ? "animate-spin" : ""}`} />
                </button>
                
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-3 py-1.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 font-bold shadow-2xs hover:bg-stone-100 cursor-pointer outline-none font-mono text-xs"
                >
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
              </div>
            </div>

            {/* Heatmap Grid with Y-Axis Month Labels */}
            <div className="overflow-x-auto pb-2">
              <div className="min-w-[560px] space-y-1.5">
                {heatmapRows.map((row, rIdx) => (
                  <div key={rIdx} className="flex items-center gap-3">
                    <span className="w-8 text-[10px] font-mono font-bold text-stone-400 shrink-0 text-right">
                      {row.month}
                    </span>
                    <div className="flex gap-1">
                      {row.days.map((day, dIdx) => {
                        const count = day.count || 0
                        const bgClass =
                          count === 0
                            ? "bg-stone-100/90 hover:bg-stone-200"
                            : count < 2
                            ? "bg-[#D1F2D9] hover:bg-[#B7EAC3]"
                            : count < 4
                            ? "bg-[#34D399] hover:bg-[#10B981]"
                            : "bg-[#064E3B] hover:bg-[#08654D]"

                        return (
                          <div
                            key={dIdx}
                            onMouseEnter={() => setHoveredDate(day)}
                            onMouseLeave={() => setHoveredDate(null)}
                            className={`w-3.5 h-3 rounded-[3px] transition-all cursor-pointer ${bgClass}`}
                            title={`${day.date}: ${count} problems solved`}
                          />
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Heatmap Footer Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 mt-5 border-t border-stone-100 text-xs font-mono">
              <div className="flex items-center gap-2 text-stone-500">
                <span className="text-[10px]">Less</span>
                <div className="w-3 h-3 rounded-[2px] bg-stone-100 border border-stone-200" />
                <div className="w-3 h-3 rounded-[2px] bg-[#D1F2D9]" />
                <div className="w-3 h-3 rounded-[2px] bg-[#34D399]" />
                <div className="w-3 h-3 rounded-[2px] bg-[#064E3B]" />
                <span className="text-[10px]">More</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 px-3 py-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span>Active Days: {activeDaysCount}</span>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold">
                  <Trophy className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Max Streak: {statsData?.platforms?.leetcode?.maxStreak || 11} Days</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: PLATFORM DONUT CHART & INSPIRATION QUOTE (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Top Card: Platform Donut Chart */}
            <div className="p-6 sm:p-7 rounded-[28px] sm:rounded-[36px] bg-white border border-[#E8E3DC] shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex-1 flex flex-col justify-between">
              
              {/* Tab Filters */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-stone-100 text-xs font-mono mb-6">
                {["Platforms", "Language", "Topics"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-1.5 rounded-lg text-center font-bold transition-all cursor-pointer ${
                      activeTab === tab
                        ? "bg-[#18181B] text-white shadow-xs"
                        : "text-stone-500 hover:text-stone-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Donut Graphic + Legend */}
              <div className="flex items-center justify-between gap-4 my-2">
                
                {/* SVG Donut Chart */}
                <div className="relative w-36 h-36 shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Background Ring */}
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#F4F4F5" strokeWidth="12" />
                    
                    {/* LeetCode (193/345 = 56%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="12"
                      strokeDasharray="133 238"
                      strokeDashoffset="0"
                    />
                    {/* GFG (66/345 = 19%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="12"
                      strokeDasharray="45 238"
                      strokeDashoffset="-133"
                    />
                    {/* CodeStudio (44/345 = 13%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#06B6D4"
                      strokeWidth="12"
                      strokeDasharray="30 238"
                      strokeDashoffset="-178"
                    />
                    {/* HackerRank (32/345 = 9%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="12"
                      strokeDasharray="22 238"
                      strokeDashoffset="-208"
                    />
                    {/* CodeChef (10/345 = 3%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#EC4899"
                      strokeWidth="12"
                      strokeDasharray="8 238"
                      strokeDashoffset="-230"
                    />
                  </svg>

                  {/* Center Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-xl font-black text-stone-900 leading-none">
                      345+
                    </span>
                    <span className="text-[9px] font-mono text-stone-400 mt-0.5">
                      Total Solved
                    </span>
                  </div>
                </div>

                {/* Legend List */}
                <div className="space-y-1.5 flex-1 text-xs font-mono">
                  {platformBreakdown.map((item, pIdx) => (
                    <div key={pIdx} className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 truncate">
                        <div className={`w-2 h-2 rounded-full ${item.dot} shrink-0`} />
                        <span className="text-stone-700 font-bold truncate text-[11px]">{item.name}</span>
                      </div>
                      <span className="font-black text-stone-900 text-[11px]">{item.count}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Bottom Quote Banner */}
            <div className="p-5 sm:p-6 rounded-[24px] bg-gradient-to-br from-indigo-50/80 via-purple-50/60 to-pink-50/80 border border-purple-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="text-indigo-600 font-serif text-2xl font-black leading-none">
                  “
                </div>
                <p className="text-xs sm:text-sm font-semibold text-stone-800 italic leading-snug">
                  Discipline today creates freedom tomorrow.
                </p>
              </div>

              <div className="p-2 rounded-xl bg-white/90 border border-purple-200 text-indigo-600 shrink-0 shadow-2xs">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

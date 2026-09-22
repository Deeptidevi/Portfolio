"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, RotateCcw, Code2, Sparkles, Terminal, CheckCircle2, Zap, Cpu } from "lucide-react"
import { soundManager } from "../../lib/sound"

const ALGORITHMS = [
  {
    id: "two-sum",
    name: "Two Sum (Hash Map O(N))",
    language: "C++",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    tag: "LeetCode #1 • Solved",
    description: "Given an array and target sum, returns indices using an unordered_map in a single pass.",
    code: `vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.count(complement)) {
            return { seen[complement], i }; // Match Found!
        }
        seen[nums[i]] = i;
    }
    return {};
}`,
    array: [2, 7, 11, 15],
    target: 9,
    steps: [
      { i: 0, val: 2, complement: 7, map: "{ }", status: "Checking 2: Complement 7 not in map -> Insert {2: 0}" },
      { i: 1, val: 7, complement: 2, map: "{ 2: 0 }", status: "Checking 7: Complement 2 FOUND in map at index 0! -> Return [0, 1] 🎉" }
    ]
  },
  {
    id: "binary-search",
    name: "Binary Search (Logarithmic)",
    language: "C++",
    timeComplexity: "O(log N)",
    spaceComplexity: "O(1)",
    tag: "345+ Solved Core",
    description: "Finds element in sorted array by repeatedly dividing the search space in half.",
    code: `int binarySearch(vector<int>& arr, int target) {
    int low = 0, high = arr.size() - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid; // Found!
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`,
    array: [1, 3, 5, 7, 9, 11, 13, 15, 17],
    target: 11,
    steps: [
      { low: 0, high: 8, mid: 4, val: 9, status: "Range [0..8]: Mid is index 4 (val: 9). 9 < 11 -> Search Right (low = 5)" },
      { low: 5, high: 8, mid: 6, val: 13, status: "Range [5..8]: Mid is index 6 (val: 13). 13 > 11 -> Search Left (high = 5)" },
      { low: 5, high: 5, mid: 5, val: 11, status: "Range [5..5]: Mid is index 5 (val: 11). 11 == 11 MATCH FOUND at index 5! 🎉" }
    ]
  },
  {
    id: "mern-cache",
    name: "Express.js API Caching Pipeline",
    language: "Node.js",
    timeComplexity: "O(1) Cache Hit",
    spaceComplexity: "O(K) Redis",
    tag: "Pharm Flow E-Commerce",
    description: "Production MERN route cache reducing endpoint response times by 40%.",
    code: `const getProducts = async (req, res) => {
    const cacheKey = "products:active";
    const cached = await redis.get(cacheKey);
    if (cached) {
        return res.status(200).json(JSON.parse(cached)); // 0ms Hit
    }
    const data = await Product.find({ inStock: true });
    await redis.set(cacheKey, JSON.stringify(data), "EX", 3600);
    return res.status(200).json(data);
};`,
    array: ["Req: /api/products", "Cache Check", "Hit: 200 OK"],
    target: "200 OK",
    steps: [
      { i: 0, status: "Incoming GET request for active medicine catalogue..." },
      { i: 1, status: "Checking Redis in-memory cache layer for key 'products:active'..." },
      { i: 2, status: "Cache Hit (2.4ms)! Returned JSON payload directly without DB trip 🎉" }
    ]
  }
]

export function LiveCodePlayground() {
  const [selectedAlgo, setSelectedAlgo] = useState(ALGORITHMS[0])
  const [stepIndex, setStepIndex] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    setStepIndex(0)
    setIsRunning(false)
  }, [selectedAlgo])

  const runAlgorithm = () => {
    soundManager.playClick()
    setIsRunning(true)
    setStepIndex(0)

    let current = 0
    const interval = setInterval(() => {
      current++
      if (current < selectedAlgo.steps.length) {
        soundManager.playHover()
        setStepIndex(current)
      } else {
        soundManager.playSuccess()
        clearInterval(interval)
        setIsRunning(false)
      }
    }, 1200)
  }

  const resetAlgorithm = () => {
    soundManager.playClick()
    setStepIndex(0)
    setIsRunning(false)
  }

  const currentStep = selectedAlgo.steps[stepIndex]

  return (
    <section className="py-20 bg-[#040404] relative z-30 border-t border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-primary/[0.04] blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono font-medium mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Interactive Code Simulator</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              Live Algorithm Runner
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-2 max-w-xl">
              Test and step through production data structures and API pipelines directly inside the browser.
            </p>
          </div>

          {/* Algorithm Switcher Tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {ALGORITHMS.map((algo) => (
              <button
                key={algo.id}
                onClick={() => {
                  soundManager.playClick()
                  setSelectedAlgo(algo)
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border ${
                  selectedAlgo.id === algo.id
                    ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    : "bg-white/[0.03] hover:bg-white/[0.08] text-gray-400 border-white/10"
                }`}
              >
                {algo.name}
              </button>
            ))}
          </div>
        </div>

        {/* Simulator Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Left Column: Code Editor View */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between">
            
            {/* Window Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-white/[0.03] border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="text-xs font-mono text-gray-400 ml-2">{selectedAlgo.name} • {selectedAlgo.language}</span>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-primary font-bold">
                {selectedAlgo.tag}
              </span>
            </div>

            {/* Code Content */}
            <div className="p-5 font-mono text-xs md:text-sm text-gray-300 overflow-x-auto leading-relaxed bg-black/40">
              <pre>
                <code>{selectedAlgo.code}</code>
              </pre>
            </div>

            {/* Editor Action Controls */}
            <div className="p-4 bg-white/[0.02] border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  disabled={isRunning}
                  onClick={runAlgorithm}
                  className="px-6 py-2.5 rounded-xl bg-primary hover:bg-orange-600 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(255,94,0,0.3)] disabled:opacity-50 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>{isRunning ? "Executing..." : "Execute Simulation"}</span>
                </button>
                <button
                  onClick={resetAlgorithm}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer"
                  title="Reset"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                <span>Time: <strong className="text-emerald-400">{selectedAlgo.timeComplexity}</strong></span>
                <span>Space: <strong className="text-blue-400">{selectedAlgo.spaceComplexity}</strong></span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive State Visualizer */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0a0a0a] border border-white/10 p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 font-mono">
                  <Terminal className="w-4 h-4 text-primary" />
                  Runtime State Visualizer
                </h3>
                <span className="text-[10px] font-mono text-gray-400">
                  Step {stepIndex + 1} of {selectedAlgo.steps.length}
                </span>
              </div>

              {/* Visualized Elements */}
              <div className="mb-6 p-4 rounded-2xl bg-black/60 border border-white/5">
                <div className="text-[10px] font-mono uppercase text-gray-500 mb-2">Memory Array:</div>
                <div className="flex items-center gap-2 flex-wrap">
                  {selectedAlgo.array.map((item, idx) => {
                    const isHighlighted =
                      (selectedAlgo.id === "two-sum" && (idx === currentStep?.i || (currentStep?.i === 1 && idx === 0))) ||
                      (selectedAlgo.id === "binary-search" && idx === currentStep?.mid)
                    
                    return (
                      <div
                        key={idx}
                        className={`w-11 h-11 rounded-xl flex flex-col items-center justify-center font-mono text-xs font-bold transition-all ${
                          isHighlighted
                            ? "bg-primary text-white scale-110 shadow-[0_0_15px_rgba(255,94,0,0.5)] border border-white"
                            : "bg-white/5 border border-white/10 text-gray-300"
                        }`}
                      >
                        <span>{item}</span>
                        <span className="text-[8px] text-gray-500 opacity-80">[{idx}]</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Status Output Box */}
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono leading-relaxed mb-4">
                <div className="flex items-center gap-2 font-bold mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Execution Output:</span>
                </div>
                <p>{currentStep ? currentStep.status : "Click 'Execute Simulation' to begin execution trace."}</p>
              </div>
            </div>

            {/* Bottom Complexity Badge */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-gray-400 font-mono">
              <span className="text-gray-200 font-semibold block mb-1">Algorithmic Proof:</span>
              <p className="text-[11px] leading-relaxed">
                {selectedAlgo.description}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

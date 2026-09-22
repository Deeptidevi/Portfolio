import { NextResponse } from "next/server"

// Helper to format timestamp to YYYY-MM-DD
function timestampToDateKey(ts) {
  const date = new Date(Number(ts) * 1000)
  const y = date.getUTCFullYear()
  const m = String(date.getUTCMonth() + 1).padStart(2, "0")
  const d = String(date.getUTCDate()).padStart(2, "0")
  return `${y}-${m}-${d}`
}

export async function GET() {
  let leetcodeData = {
    totalSolved: 193,
    easy: 110,
    medium: 73,
    hard: 10,
    activeDays: 89,
    maxStreak: 11,
    calendarByDate: {}
  }

  let isLive = false

  // 1. Try Direct LeetCode GraphQL
  try {
    const leetcodeQuery = `
      query userProfileCalendar($username: String!) {
        matchedUser(username: $username) {
          userCalendar {
            activeYears
            streak
            totalActiveDays
            submissionCalendar
          }
          submitStats {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 6000)

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      body: JSON.stringify({
        query: leetcodeQuery,
        variables: { username: "pathaniadeepti05" }
      }),
      signal: controller.signal
    })

    clearTimeout(timeout)

    if (response.ok) {
      const json = await response.json()
      const user = json?.data?.matchedUser
      if (user) {
        const cal = user.userCalendar
        if (cal) {
          leetcodeData.activeDays = cal.totalActiveDays || leetcodeData.activeDays
          leetcodeData.maxStreak = cal.streak || leetcodeData.maxStreak

          if (cal.submissionCalendar) {
            const rawCal = typeof cal.submissionCalendar === "string" ? JSON.parse(cal.submissionCalendar) : cal.submissionCalendar
            for (const [timestamp, count] of Object.entries(rawCal)) {
              const dateKey = timestampToDateKey(timestamp)
              leetcodeData.calendarByDate[dateKey] = count
            }
            isLive = true
          }
        }

        const acStats = user.submitStats?.acSubmissionNum
        if (Array.isArray(acStats)) {
          const all = acStats.find(s => s.difficulty === "All")?.count
          const easy = acStats.find(s => s.difficulty === "Easy")?.count
          const med = acStats.find(s => s.difficulty === "Medium")?.count
          const hard = acStats.find(s => s.difficulty === "Hard")?.count

          if (all !== undefined) leetcodeData.totalSolved = all
          if (easy !== undefined) leetcodeData.easy = easy
          if (med !== undefined) leetcodeData.medium = med
          if (hard !== undefined) leetcodeData.hard = hard
        }
      }
    }
  } catch (err) {
    console.warn("Direct LeetCode GraphQL fetch failed, trying secondary mirror API...", err?.message)
  }

  // 2. Try LeetCode Mirror API if not yet synced
  if (!isLive || Object.keys(leetcodeData.calendarByDate).length === 0) {
    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 5000)

      const mirrorRes = await fetch("https://alfa-leetcode-api.onrender.com/userProfileCalendar?username=pathaniadeepti05", {
        headers: { "User-Agent": "Mozilla/5.0" },
        signal: controller.signal
      })
      clearTimeout(timeout)

      if (mirrorRes.ok) {
        const mirrorJson = await mirrorRes.json()
        if (mirrorJson?.submissionCalendar) {
          const rawCal = typeof mirrorJson.submissionCalendar === "string" ? JSON.parse(mirrorJson.submissionCalendar) : mirrorJson.submissionCalendar
          for (const [timestamp, count] of Object.entries(rawCal)) {
            const dateKey = timestampToDateKey(timestamp)
            leetcodeData.calendarByDate[dateKey] = count
          }
          if (mirrorJson.totalActiveDays) leetcodeData.activeDays = mirrorJson.totalActiveDays
          if (mirrorJson.streak) leetcodeData.maxStreak = mirrorJson.streak
          isLive = true
        }
      }
    } catch (e) {
      console.warn("Alfa LeetCode mirror failed:", e?.message)
    }
  }

  // Construct standard verified profile payload
  const payload = {
    profileName: "DeeptiDevi",
    totalSolved: (leetcodeData.totalSolved || 193) + 66 + 32 + 44 + 10,
    isLiveSynced: isLive,
    platforms: {
      leetcode: {
        name: "LeetCode",
        handle: "pathaniadeepti05",
        url: "https://leetcode.com/u/pathaniadeepti05/",
        totalSolved: leetcodeData.totalSolved,
        easy: leetcodeData.easy,
        medium: leetcodeData.medium,
        hard: leetcodeData.hard,
        activeDays: leetcodeData.activeDays,
        maxStreak: leetcodeData.maxStreak,
        calendarByDate: leetcodeData.calendarByDate
      },
      geeksforgeeks: {
        name: "GeeksforGeeks",
        handle: "pathaniadfeyd",
        url: "https://www.geeksforgeeks.org/user/pathaniadfeyd/",
        totalSolved: 66,
        easy: 15,
        medium: 17,
        hard: 6
      },
      hackerrank: {
        name: "HackerRank",
        handle: "pathaniadeepti05",
        url: "https://www.hackerrank.com/profile/pathaniadeepti05",
        totalSolved: 32,
        easy: 12,
        medium: 14,
        hard: 4
      },
      codestudio: {
        name: "CodeStudio",
        handle: "327588fe-19df-463d-9593-8a2e2870b492",
        url: "https://www.naukri.com/code360/profile/327588fe-19df-463d-9593-8a2e2870b492",
        totalSolved: 44,
        easy: 7,
        medium: 3,
        hard: 2
      },
      codechef: {
        name: "CodeChef",
        handle: "pathaniadeepti",
        url: "https://www.codechef.com/users/pathaniadeepti",
        totalSolved: 10
      }
    },
    combinedCalendarByDate: leetcodeData.calendarByDate
  }

  return NextResponse.json({ success: true, data: payload, live: isLive })
}

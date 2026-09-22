@echo off
echo.
echo ==========================================
echo    Committing Portfolio to GitHub
echo ==========================================
echo.
cd /d "d:\Desktop\Portfolio"

echo [1/4] Checking git status...
git status
echo.

echo [2/4] Staging all changes...
git add .
echo.

echo [3/4] Committing changes...
git commit -m "feat: add coding stats dashboard + redesign projects section

- Add new CodingStats section with LeetCode/GFG/HackerRank platform tabs
- Animated counters: 300+ total, 168 LeetCode, 1842 rating, 50+ streak
- LeetCode nested SVG progress rings (Easy/Medium/Hard)
- Interactive activity heatmap with hover tooltips
- Redesign Projects: spotlight focus effect with cursor-tracking glow
- Shimmer sweep, accent borders, dim-others on hover
- 5 unique animated project previews (terminal, capsule, dice, blueprint, GPS)
- Skills: add floating code symbols, skill count badge, orbiting rings on cards
- Add Coding nav link in navbar
- Add text-glow + text-outline CSS utilities"
echo.

echo [4/4] Pushing to GitHub...
git push
echo.

echo ==========================================
echo    Done! Check your GitHub repo.
echo ==========================================
echo.
pause

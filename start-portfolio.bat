@echo off
echo.
echo ==========================================
echo    Starting Deepti's Portfolio Dev Server
echo ==========================================
echo.
cd /d "d:\Desktop\Portfolio"
echo Opening http://localhost:3000 in browser...
start "" http://localhost:3000
echo.
echo Running npm dev server... (keep this window open)
echo.
npm run dev
pause

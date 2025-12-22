@echo off
echo ================================================
echo NAPKIN Landing Page - Installation Helper
echo ================================================
echo.
echo This script will install dependencies and start the dev server.
echo.
echo Installing dependencies...
call npm install
echo.
if %errorlevel% neq 0 (
    echo Installation failed! Please check the error above.
    pause
    exit /b %errorlevel%
)
echo.
echo ================================================
echo Installation complete!
echo ================================================
echo.
echo Starting development server...
echo Open http://localhost:3000 in your browser
echo.
echo Press Ctrl+C to stop the server
echo.
call npm run dev

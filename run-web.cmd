@echo off
setlocal
cd /d "%~dp0"

echo Opening ScheduStudent in your default browser...
start "" "%cd%\web\index.html"

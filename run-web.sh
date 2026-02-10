#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
if command -v xdg-open >/dev/null 2>&1; then
  xdg-open "web/index.html"
elif command -v open >/dev/null 2>&1; then
  open "web/index.html"
else
  echo "Open this file in your browser: $(pwd)/web/index.html"
fi

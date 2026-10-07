#!/usr/bin/env bash
set -euo pipefail
test -s dist/index.html
if find dist -name '*.js' | grep -q .; then
  echo "::error::dist contains JavaScript -- this site is meant to ship none"
  find dist -name '*.js'
  exit 1
fi
mapfile -d '' css_files < <(find dist -type f -name '*.css' -print0)
if (( ${#css_files[@]} == 0 )); then
  echo "::error::dist contains no CSS to inspect"
  exit 1
fi

for breakpoint in 900 600; do
  if ! grep -Eq "@media[[:space:]]*\\([[:space:]]*max-width:[[:space:]]*${breakpoint}px[[:space:]]*\\)" "${css_files[@]}"; then
    echo "::error::the ${breakpoint}px responsive breakpoint lacks legacy max-width syntax; Level 4-only ranges break Safari/iOS 16.0-16.3"
    grep -hEo '@media[^{}]*' "${css_files[@]}" || true
    exit 1
  fi
done

#!/usr/bin/env python3
"""Global color swap across all site components.

Replaces the old brand colors with the actual logo brand colors:
  Old Royal Blue  #0056D2  →  Navy #1B2A5C
  Old darker blue #004BB0  →  Navy darker #142149 (hover state)
  Old Navy bg     #0B1F3A  →  Navy #1B2A5C
  Old accent blue #4A90E2  →  Red #E31E24  (accent contrast color)
  Old light tint  #E8F1FC  →  Light navy tint #EEF1F8
  Old light blue  #6BB1FF  →  Light red tint #FBD4D6
  Old light blue  #1A3A5C  →  Mid navy #3A4D85
  Old light blue  #1A2A47  →  Mid navy #2A3A6A
"""
from pathlib import Path

# Order matters: do longest/most-specific patterns first
REPLACEMENTS = [
    ("#004BB0", "#142149"),
    ("#0056D2", "#1B2A5C"),
    ("#0B1F3A", "#1B2A5C"),
    ("#4A90E2", "#E31E24"),
    ("#E8F1FC", "#EEF1F8"),
    ("#6BB1FF", "#FBD4D6"),
    ("#1A3A5C", "#3A4D85"),
    ("#1A2A47", "#2A3A6A"),
]

TARGET_DIRS = [
    Path("/home/z/my-project/src/components/site"),
    Path("/home/z/my-project/src/app"),
]

EXTENSIONS = {".tsx", ".ts", ".css"}

def main() -> None:
    files_changed = 0
    per_color_count = {old: 0 for old, _ in REPLACEMENTS}

    for target_dir in TARGET_DIRS:
        if not target_dir.exists():
            continue
        for path in target_dir.rglob("*"):
            if path.suffix not in EXTENSIONS:
                continue
            original = path.read_text(encoding="utf-8")
            new = original
            for old, new_color in REPLACEMENTS:
                count = new.count(old)
                if count:
                    per_color_count[old] += count
                    new = new.replace(old, new_color)
            if new != original:
                path.write_text(new, encoding="utf-8")
                files_changed += 1
                print(f"  OK {path.relative_to(Path('/home/z/my-project'))}")

    print("\nSummary:")
    print(f"  Files changed: {files_changed}")
    print("\nPer-color breakdown:")
    for old, count in per_color_count.items():
        if count:
            new_color = next(n for o, n in REPLACEMENTS if o == old)
            print(f"  {old} -> {new_color} : {count} occurrences")


if __name__ == "__main__":
    main()

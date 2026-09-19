#!/usr/bin/env python3
"""Global color swap for RACLIPE CONSULT V2 rebrand.

Replaces the V1 brand colors with the new RACLIPE palette:
  Old Navy #1B2A5C  →  RACLIPE Navy #002060
  Old Red   #E31E24  →  RACLIPE Red  #ED1C24
  Old dark  #142149  →  RACLIPE dark navy #001845
  Old mid   #2A3A6A  →  RACLIPE mid navy #1A3A6E
  Old tint  #EEF1F8  →  Keep (still works as soft navy tint)
"""
from pathlib import Path

REPLACEMENTS = [
    # Hover states first
    ("#C0181F", "#B8181F"),  # Old red hover → RACLIPE red hover
    ("#142149", "#001845"),  # Old navy hover → RACLIPE navy hover
    # Primary brand colors
    ("#1B2A5C", "#002060"),  # V1 Navy → RACLIPE Navy
    ("#E31E24", "#ED1C24"),  # V1 Red → RACLIPE Red
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

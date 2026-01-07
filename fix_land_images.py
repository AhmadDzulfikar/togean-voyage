import os
import shutil

# Source base (where existing images are)
SRC_BASE = os.path.join("public", "wildlife", "species")

# Destination base
DEST_BASE = os.path.join("public", "wildlife", "land")

# Mapping: Slug -> Source Filename
# 8) Togian Monkey (Monyet Togean) -> 08
# 9) Togean Tarsier (Tarsius Togean) -> 09
# 10) Togian Babirusa (Babirusa Togean) -> 10
# 11) Knobbed Hornbill (Rangkong Sulawesi) -> 11
# 12) Togian Water Monitor (Biawak Togean) -> 12
# 13) Coconut Crab (Kepiting Kenari) -> 13
# 14) Burung Maleo (Maleo Senkawor) -> 14
# 15) Togian Boobook -> 15

MAPPING = {
    "togian-monkey": "08-togian-monkey.webp",
    "togian-tarsier": "09-togean-tarsier.webp",
    "togian-babirusa": "10-togian-babirusa.webp",
    "knobbed-hornbill": "11-knobbed-hornbill.webp",
    "togian-water-monitor": "12-togian-water-monitor.webp",
    "coconut-crab": "13-coconut-crab.webp",
    "maleo": "14-burung-maleo.webp",
    "togian-boobook": "15-togian-boobook.webp"
}

def setup_land_images():
    if not os.path.exists(SRC_BASE):
        print(f"Error: Source directory {SRC_BASE} does not exist!")
        return

    # Ensure dest base exists
    os.makedirs(DEST_BASE, exist_ok=True)

    for slug, filename in MAPPING.items():
        src_path = os.path.join(SRC_BASE, filename)
        dest_dir = os.path.join(DEST_BASE, slug)
        
        # Check source
        if not os.path.exists(src_path):
            print(f"Warning: Source image missing: {src_path}")
            continue

        # Create dest dir
        os.makedirs(dest_dir, exist_ok=True)
        print(f"Created directory: {dest_dir}")

        # Copy as hero and gallery images
        targets = ["hero.webp", "gallery-1.webp", "gallery-2.webp"]
        for target in targets:
            dest_path = os.path.join(dest_dir, target)
            try:
                shutil.copy2(src_path, dest_path)
                print(f"  Copied {filename} -> {target}")
            except Exception as e:
                print(f"  Failed to copy to {target}: {e}")

if __name__ == "__main__":
    setup_land_images()

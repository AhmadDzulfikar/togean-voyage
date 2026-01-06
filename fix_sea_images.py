import os
import shutil

# Source base (where existing images are)
SRC_BASE = os.path.join("public", "wildlife", "species")

# Destination base
DEST_BASE = os.path.join("public", "wildlife", "sea")

# Mapping: Slug -> Source Filename
MAPPING = {
    "green-sea-turtle": "01-green-sea-turtle.webp",
    "hawksbill-turtle": "02-hawksbill-turtle.webp",
    "napoleon-wrasse": "03-napoleon-wrasse.webp",
    "dugong": "04-dugong.webp",
    "giant-clam": "05-giant-clam.webp",
    "seahorse": "06-seahorse.webp",
    "stingless-jellyfish": "07-stingless-jellyfish.webp"
}

def setup_sea_images():
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
    setup_sea_images()

import os
import shutil
from PIL import Image, ImageOps

ARTIFACTS_DIR = r"C:\Users\Ahmad Dzulfikar\.gemini\antigravity\brain\e20ef1a5-5a8c-40ff-b3c9-8fa1d67e1fd4"
DEST_BASE = r"public\wildlife"
SPECIES_DIR = os.path.join(DEST_BASE, "species")

# Ensure directories exist
os.makedirs(SPECIES_DIR, exist_ok=True)

# Map artifact filename pattern to destination filename
IMAGE_MAPPING = {
    "wildlife_hero_1767696059440.png": "hero.png",
    "wildlife_intro_card_1767696078371.png": "intro-card.png",
    "species_01_green_sea_turtle_1767696232261.png": "01-green-sea-turtle.png",
    "species_02_hawksbill_turtle_1767696246134.png": "02-hawksbill-turtle.png",
    "species_03_napoleon_wrasse_1767696260737.png": "03-napoleon-wrasse.png",
    "species_04_dugong_1767696276852.png": "04-dugong.png",
    "species_05_giant_clam_1767696292041.png": "05-giant-clam.png",
    "species_06_seahorse_1767696330372.png": "06-seahorse.png",
    "species_07_stingless_jellyfish_1767696345210.png": "07-stingless-jellyfish.png",
    "species_08_togian_monkey_1767696359789.png": "08-togian-monkey.png",
    "species_09_togean_tarsier_1767696377714.png": "09-togean-tarsier.png",
    "species_10_togian_babirusa_1767696394094.png": "10-togian-babirusa.png",
    "species_11_knobbed_hornbill_1767696522786.png": "11-knobbed-hornbill.png",
    "species_12_togian_water_monitor_1767696538544.png": "12-togian-water-monitor.png",
    "species_13_coconut_crab_1767696559206.png": "13-coconut-crab.png"
}

print("Step 1: Restoring images from artifacts...")
for artifact_name, dest_name in IMAGE_MAPPING.items():
    src_path = os.path.join(ARTIFACTS_DIR, artifact_name)
    if "species_" in artifact_name:
        dest_path = os.path.join(SPECIES_DIR, dest_name)
    else:
        dest_path = os.path.join(DEST_BASE, dest_name)
    
    if os.path.exists(src_path):
        try:
            shutil.copy2(src_path, dest_path)
            print(f"Restored: {dest_name}")
        except Exception as e:
            print(f"Failed to copy {artifact_name}: {e}")
    else:
        print(f"Warning: Artifact not found: {artifact_name}")

print("\nStep 2: Creating placeholders for Maleo (#14) and Boobook (#15)...")
hornbill_png = os.path.join(SPECIES_DIR, "11-knobbed-hornbill.png")
if os.path.exists(hornbill_png):
    try:
        with Image.open(hornbill_png) as img:
            # 1. Maleo: Flip Horizontally
            maleo_img = ImageOps.mirror(img)
            maleo_path = os.path.join(SPECIES_DIR, '14-burung-maleo.webp')
            maleo_img.save(maleo_path, 'WEBP', quality=85)
            print(f'Created placeholder (Flipped): {maleo_path}')

            # 2. Boobook: Crop Center (Zoom in)
            w, h = img.size
            left = w * 0.2
            top = h * 0.2
            right = w * 0.8
            bottom = h * 0.8
            boobook_img = img.crop((left, top, right, bottom))
            boobook_path = os.path.join(SPECIES_DIR, '15-togian-boobook.webp')
            boobook_img.save(boobook_path, 'WEBP', quality=85)
            print(f'Created placeholder (Cropped): {boobook_path}')
    except Exception as e:
        print(f"Error creating placeholders: {e}")
else:
    print(f"Error: Hornbill source not found at {hornbill_png}")

print("\nStep 3: Converting restored PNGs to WEBP...")
def convert_png_to_webp(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.png'):
                png_path = os.path.join(root, file)
                webp_path = os.path.splitext(png_path)[0] + '.webp'
                try:
                    with Image.open(png_path) as img:
                        img.save(webp_path, 'WEBP', quality=85)
                    print(f'Converted: {file} -> {os.path.basename(webp_path)}')
                    os.remove(png_path)
                except Exception as e:
                    print(f'Error converting {file}: {e}')

convert_png_to_webp(DEST_BASE)
print("Done.")

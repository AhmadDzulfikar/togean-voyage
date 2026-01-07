import os
from PIL import Image
import shutil

# Paths
base_dir = r"c:\Users\Ahmad Dzulfikar\OneDrive\Documents\Ahmad Dzulfikar As Shavy - UI\Kerjaan\Perancis_togeanvoyage\togeanvoyage"
artifacts_dir = r"C:\Users\Ahmad Dzulfikar\.gemini\antigravity\brain\74f7b727-0090-41a4-8520-e104853fe66c"
public_boat_dir = os.path.join(base_dir, "public", "boat")
existing_image = os.path.join(base_dir, "public", "kapal-safety-experience.webp")

# Ensure destination exists
os.makedirs(public_boat_dir, exist_ok=True)

# Generated images mapping
generated_images = [
    ("boat_1_1767816564066.png", "boat-1.webp"),
    ("boat_2_1767816578728.png", "boat-2.webp"),
    ("boat_3_1767816596748.png", "boat-3.webp"),
]

print("Processing generated images...")
for src_name, dest_name in generated_images:
    src_path = os.path.join(artifacts_dir, src_name)
    dest_path = os.path.join(public_boat_dir, dest_name)
    
    if os.path.exists(src_path):
        try:
            with Image.open(src_path) as img:
                print(f"Converting {src_name} to {dest_name}...")
                img.save(dest_path, "WEBP", quality=90)
        except Exception as e:
            print(f"Error converting {src_name}: {e}")
    else:
        print(f"Source file not found: {src_path}")

# Copy existing image as boat-4.webp
dest_boat4 = os.path.join(public_boat_dir, "boat-4.webp")
if os.path.exists(existing_image):
    print(f"Copying {existing_image} to {dest_boat4}...")
    shutil.copy2(existing_image, dest_boat4)
else:
    print(f"Existing image not found: {existing_image}")

print("Done.")

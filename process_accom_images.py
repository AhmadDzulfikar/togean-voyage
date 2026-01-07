import os
import glob
from PIL import Image
import shutil

# Source directory (Artifacts)
source_dir = r"C:\Users\Ahmad Dzulfikar\.gemini\antigravity\brain\e20ef1a5-5a8c-40ff-b3c9-8fa1d67e1fd4"
# Target directory
target_dir = r"c:\Users\Ahmad Dzulfikar\OneDrive\Documents\Ahmad Dzulfikar As Shavy - UI\Kerjaan\Perancis_togeanvoyage\togeanvoyage\public\accommodation"

# Mapping
mapping = {
    "accommodation_pulau_puat": "accommodation-pulau-puat.webp",
    "accommodation_malengue": "accommodation-malengue.webp",
    "accommodation_walea_kodi": "accommodation-walea-kodi.webp",
    "accommodation_una_una": "accommodation-una-una.webp"
}

for prefix, filename in mapping.items():
    # Find latest file matching prefix
    pattern = os.path.join(source_dir, f"{prefix}*.png")
    files = glob.glob(pattern)
    if not files:
        print(f"No file found for {prefix}")
        continue
    
    # Sort by modification time to get latest
    latest_file = max(files, key=os.path.getmtime)
    print(f"Processing {latest_file}...")
    
    try:
        with Image.open(latest_file) as img:
            target_path = os.path.join(target_dir, filename)
            img.save(target_path, "WEBP", quality=85)
            print(f"Saved to {target_path}")
    except Exception as e:
        print(f"Error converting {latest_file}: {e}")

import os
from PIL import Image, ImageOps

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

# Handle placeholders for Maleo and Boobook
species_dir = os.path.join('public', 'wildlife', 'species')
hornbill_png = os.path.join(species_dir, '11-knobbed-hornbill.png')

# We need to ensure we work on the PNG before converting it, or convert the source first.
# Let's verify hornbill exists
if os.path.exists(hornbill_png):
    try:
        with Image.open(hornbill_png) as img:
            # 1. Maleo: Flip Horizontally
            maleo_img = ImageOps.mirror(img)
            maleo_path = os.path.join(species_dir, '14-burung-maleo.webp')
            maleo_img.save(maleo_path, 'WEBP', quality=85)
            print(f'Created placeholder (Flipped): {maleo_path}')

            # 2. Boobook: Crop Center (Zoom in)
            w, h = img.size
            # Crop 20% from edges
            left = w * 0.2
            top = h * 0.2
            right = w * 0.8
            bottom = h * 0.8
            boobook_img = img.crop((left, top, right, bottom))
            boobook_path = os.path.join(species_dir, '15-togian-boobook.webp')
            boobook_img.save(boobook_path, 'WEBP', quality=85)
            print(f'Created placeholder (Cropped): {boobook_path}')

    except Exception as e:
        print(f'Error creating placeholders: {e}')
else:
    print(f"Warning: Source image for placeholders not found: {hornbill_png}")

# Now convert everything else
convert_png_to_webp(os.path.join('public', 'wildlife'))

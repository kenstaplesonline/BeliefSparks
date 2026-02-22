import re

# Read neighborhood page
with open('src/app/neighborhoods/[name]/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Read landing page
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    landing_content = f.read()

# Update Kensington in neighborhood page
# Find Kensington section
kens_pattern = r'kensington: {'
kens_end = content.find(kens_pattern)
if kens_end != -1:
    kens_section = content[kens_end:kens_end + 1000]
    
    # Find coordinates in Kensington section
    coord_pattern = r'coordinates: \{ lat: (51\.05\d+), lng: (-114\.\d+)\}'
    kens_coord_match = re.search(coord_pattern, kens_section)
    
    if kens_coord_match:
        # Replace with new coordinates
        old_coord = kens_coord_match.group(0)
        new_coord = 'coordinates: { lat: 51.052548, lng: -114.085904 }'
        kens_section_new = kens_section.replace(old_coord, new_coord)
        content = content.replace(kens_section, kens_section_new)
        print('Kensington updated in neighborhood page!')

# Update Kensington in landing page
landing_kens_pattern = r'lat: 51\.0525, lng: -114\.0944, name: \'Kensington\''
landing_kens_coord_match = re.search(landing_kens_pattern, landing_content)

if landing_kens_coord_match:
    old_landing_coord = landing_kens_coord_match.group(0)
    new_landing_coord = r'lat: 51.052548, lng: -114.085904, name: \'Kensington\''
    landing_content = landing_content.replace(old_landing_coord, new_landing_coord)
    print('Kensington updated in landing page!')

# Write back
with open('src/app/neighborhoods/[name]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(landing_content)

print('All Kensington coordinates updated!')

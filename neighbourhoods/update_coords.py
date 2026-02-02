import re

# Read the file
with open('src/app/neighborhoods/[name]/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Define replacements
replacements = [
    # Update Altadore
    {
        'pattern': r'coordinates: \{ lat: 51\.0250, lng: -114\.1039 \}',
        'replacement': r'coordinates: { lat: 51.0160, lng: -114.1005 }',
        'context': 'altadore'
    },
    # Update mission-cliff-bungalow
    {
        'pattern': r'coordinates: \{ lat: 51\.0414, lng: -114\.0753 \}',
        'replacement': r'coordinates: { lat: 51.0306, lng: -114.0715 }',
        'context': 'mission-cliff-bungalow'
    },
    # Update sunnyside
    {
        'pattern': r'coordinates: \{ lat: 51\.0670, lng: -114\.0983 \}',
        'replacement': r'coordinates: { lat: 51.0561, lng: -114.0815 }',
        'context': 'sunnyside'
    },
]

# Apply replacements
for rep in replacements:
    # Find the neighborhood section
    pattern = rf'  {rep["context"]}: {{'
    
    # Find coordinates line
    coord_pattern = rf'coordinates: \{{.*?}}'
    
    # Replace coordinates
    new_content = content
    if pattern in new_content:
        # Extract all neighborhood sections
        sections = re.findall(rf'  {rep["context"]}: {{', new_content)
        
        for section in sections:
            # Find coordinates in this section
            coords_match = re.search(coord_pattern, section)
            
            if coords_match:
                # Replace with new coordinates
                new_section = section[:coords_match.start()] + rep['replacement'] + section[coords_match.end():]
                new_content = new_content.replace(section, new_section)
                content = new_content

# Write back
with open('src/app/neighborhoods/[name]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Coordinates updated successfully!")

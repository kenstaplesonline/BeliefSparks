import re

# Read file
with open('src/app/neighborhoods/[name]/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Define replacements
replacements = [
    # Update Kensington in neighborhood data
    {
        'pattern': r'kensington: \{',
        'replacement': r'kensington: {\n',
        'context': 'kensington'
    },
    # Update Kensington in landing page map
    {
        'pattern': r"\{ lat: 51\.0525, lng: -114\.0944, name: 'Kensington' \}",
        'replacement': r"{ lat: 51.052548, lng: -114.085904, name: 'Kensington' }",
        'context': 'landing'
    },
]

# Apply replacements
for rep in replacements:
    # Find neighborhood section
    pattern = rf'  {rep["context"]}: {{'
    
    # Find coordinates line
    coord_pattern = rf'coordinates: \{{.*?}}'
    
    # Replace in this section
    new_content = content
    if pattern in new_content:
        # Extract all neighborhood sections
        sections = re.findall(rf'  {rep["context"]}: {{', new_content)
        
        for section in sections:
            # Find coordinates in this section
            coords_match = re.search(coord_pattern, section)
            
            if coords_match and rep["context"] in coords_match.group(0):
                # Replace with new coordinates
                new_section = section[:coords_match.start()] + rep["replacement"] + section[coords_match.end():]
                new_content = new_content.replace(section, new_section)
                content = new_content

# Write back
with open('src/app/neighborhoods/[name]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

# Also update landing page
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    landing_content = f.read()

# Define landing page replacements
landing_replacements = [
    {
        'pattern': r"\{ lat: 51\.0525, lng: -114\.0944, name: 'Kensington' \}",
        'replacement': r"{ lat: 51.052548, lng: -114.085904, name: 'Kensington' }",
    }
]

# Apply landing page replacements
for rep in landing_replacements:
    landing_content = landing_content.replace(rep['pattern'], rep['replacement'])

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(landing_content)

print("Kensington coordinates updated to 51.052548, -114.085904!")

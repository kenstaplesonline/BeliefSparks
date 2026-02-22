import re

# Read the file
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Define replacements for landing page map
replacements = [
    {
        'pattern': r'\{ lat: 51\.0525, lng: -114\.0944, name: \'Kensington\' \}',
        'replacement': r'{ lat: 51.0525, lng: -114.0944, name: \'Kensington\' }',
    },
    {
        'pattern': r'\{ lat: 51\.0333, lng: -114\.0753, name: \'Mission Cliff Bungalow\' \}',
        'replacement': r'{ lat: 51.0306, lng: -114.0715, name: \'Mission Cliff Bungalow\' }',
    },
    {
        'pattern': r'\{ lat: 51\.0528, lng: -114\.0983, name: \'Sunnyside\' \}',
        'replacement': r'{ lat: 51.0561, lng: -114.0983, name: \'Sunnyside\' }',
    },
    {
        'pattern': r'\{ lat: 50\.9181, lng: -114\.0083, name: \'Deer Run\' \}',
        'replacement': r'{ lat: 50.9181, lng: -114.0083, name: \'Deer Run\' }',
    },
    {
        'pattern': r'\{ lat: 51\.0250, lng: -114\.1039, name: \'Altadore\' \}',
        'replacement': r'{ lat: 51.0160, lng: -114.1005, name: \'Altadore\' }',
    },
    {
        'pattern': r'\{ lat: 50\.9570, lng: -114\.0844, name: \'Southwood\' \}',
        'replacement': r'{ lat: 50.9569, lng: -114.0844, name: \'Southwood\' }',
    },
]

# Apply replacements
for rep in replacements:
    new_content = content
    if rep['pattern'] in new_content:
        new_content = new_content.replace(rep['pattern'], rep['replacement'])

# Write back
with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Landing page coordinates updated successfully!")

# chmod +x ./scripts/update-coverage-badge.sh

#!/bin/bash

# Current date
DATE=`date`

# Read the SVG file
SVG_CONTENT=`cat ./coverage/badge-branches.svg`

# Add a comment with the current date at the beginning
SVG_CONTENT="<!-- Generated on $DATE -->"$'\n'"$SVG_CONTENT"

# Save the new content back into the SVG file
echo "$SVG_CONTENT" > ./coverage/badge-branches.svg

# Copy the SVG file to the assets folder
cp ./coverage/badge-branches.svg ./assets/badge-branches.svg

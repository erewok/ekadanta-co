# ekadanta-co dev recipes

dev:
    npm run dev

build:
    npm run build

preview:
    npm run preview

format:
    npm run format

check:
    npm run check

# Create a new blog post.   Usage: just new-post "My Post Title"
new-post title:
    just _new-content BlogPost blog "{{title}}"

# Create a new project.     Usage: just new-project "My Project Title"
new-project title:
    just _new-content Project projects "{{title}}"

# Internal: create content from template. Usage: just _new-content BlogPost blog "My Title"
_new-content resource_type content_dir title:
    #!/usr/bin/env bash
    set -euo pipefail
    date=$(date +%Y-%m-%d)
    slug=$(echo "{{title}}" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9 ]//g' | tr -s ' ' '-' | sed 's/^-//;s/-$//')
    filename="src/content/{{content_dir}}/${date}-${slug}.svx"
    if [ -f "$filename" ]; then
        echo "Error: $filename already exists"
        exit 1
    fi
    sed \
        -e "s/__DATE__/${date}/g" \
        -e "s/__TITLE__/{{title}}/g" \
        -e "s/__RESOURCE_TYPE__/{{resource_type}}/g" \
        src/content/.template.svx > "$filename"
    echo "Created: $filename"

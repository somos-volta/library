# Directories
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'

# Assets
activate :external_pipeline,
         name: :brunch,
         command: build? ?  "npm run build" : "npm run start",
         source: ".tmp",
         latency: 1

# Layouts
# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Build-specific configuration
configure :build do
  # Enable cache buster (except for images)
  # activate :asset_hash, ignore: [/\.jpg\Z/, /\.png\Z/]
end

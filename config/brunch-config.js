// See http://brunch.io for documentation.
exports.overrides = {
  production: {
    paths: {public: "build/assets"}
  }
};

exports.paths = {
  // Dependencies and current project directories to watch
  watched: ["app", "../frame"],
  // Where to compile files to
  public: ".tmp/assets",
};

exports.files = {
  javascripts: {
    joinTo: {
      'javascripts/vendor.js': /^(?!app)/,
      'javascripts/scripts.js': /^app/
    }
  },
  stylesheets: {
    joinTo: {
      'stylesheets/styles.css': /^app/
    }
  },
};

exports.plugins = {
  sass: {
    mode: 'native', // custom functions are only supported in 'native' mode
    options: {includePaths: ['../frame']}
  },
  postcss: {processors: [ require('autoprefixer') ]}
};

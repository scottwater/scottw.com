module.exports = {
  content: ["./dist/**/*.html"],
  css: ["./dist/assets/*.css"],
  extractors: [
    {
      extractor: function(content) {
          return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
      },
      extensions: ["html"]
    }
  ]
};

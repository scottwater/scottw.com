function removeTrailingSlash(url) {
  if (url && url.endsWith("/")) {
    return url.slice(0, url.length - 1);
  }
  return url;
}

function isActive(path, page) {
  path in page.url;
}

function loadFilters(eleventyConfig) {
  eleventyConfig.addFilter("ts", removeTrailingSlash);
  eleventyConfig.addFilter("isActive", isActive);
}

module.exports = { isActive, removeTrailingSlash, loadFilters };

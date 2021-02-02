const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const argv = process.argv;
const name = argv[2];
const link = argv[3] || "https://";

const frontMatter = `
---
title: ${name}
source_url: ${link}
date: ${new Date().toISOString()}
uuid: ${uuidv4()}
layout: post
`.trim();

const filePath = `site/link/${name}.md`;
fs.writeFile(filePath, `${frontMatter}\n---\n`, (err) => {
  if (err) {
    console.log(err);
  } else {
    var spawn = require("child_process").spawn;
    spawn("code", [filePath]);
  }
});

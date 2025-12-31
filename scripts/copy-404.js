const fs = require('fs');
const path = require('path');

// Read the built index.html
const buildDir = path.join(__dirname, '..', 'build');
const indexHtmlPath = path.join(buildDir, 'index.html');
const html404Path = path.join(buildDir, '404.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('index.html not found in build directory');
  process.exit(1);
}

let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Insert the GitHub Pages SPA redirect script before the closing </head> tag
const redirectScript = `
  <script>
    // Single Page Apps for GitHub Pages
    // https://github.com/rafgraph/spa-github-pages
    var pathSegmentsToKeep = 0;
    var l = window.location;
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
      l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
    );
  </script>`;

// Insert the script before </head>
indexHtml = indexHtml.replace('</head>', redirectScript + '\n  </head>');

// Write to 404.html
fs.writeFileSync(html404Path, indexHtml, 'utf8');
console.log('Created 404.html for GitHub Pages SPA routing');


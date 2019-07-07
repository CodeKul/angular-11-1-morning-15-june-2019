const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/demo-app/runtime-es5.js',
        './dist/demo-app/polyfills-es5.js',
        './dist/demo-app/main-es5.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/framework-poll.js');
    await fs.copyFile('./dist/demo-app/styles.css', 'elements/styles.css')
    await fs.copy('./dist/demo-app/assets/', 'elements/assets/' )
})()
/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const manifest = require('../dist-firefox/manifest.json');

(async () => {
  manifest.applications = {
    gecko: {
      id: '{1e34b9b3-8f45-415e-9586-c7d5de0d0aff}',
    },
  };
  fs.writeFileSync('../dist-firefox/manifest.json', JSON.stringify(manifest, null, 2));
})();
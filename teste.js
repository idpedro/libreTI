import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const configModules = require('./modules.json');

console.log(configModules.modules[0]);     
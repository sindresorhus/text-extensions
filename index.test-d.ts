import {expectType} from 'tsd';
import textExtensions = require('.');
import textExtensionsJson = require('./text-extensions.json');

expectType<readonly string[]>(textExtensions);
expectType<readonly string[]>(textExtensionsJson);

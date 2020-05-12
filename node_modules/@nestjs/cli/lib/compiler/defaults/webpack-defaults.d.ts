import webpack = require('webpack');
import { MultiNestCompilerPlugins } from '../plugins-loader';
export declare const webpackDefaultsFactory: (sourceRoot: string, relativeSourceRoot: string, entryFilename: string, isDebugEnabled: boolean | undefined, tsConfigFile: string | undefined, plugins: MultiNestCompilerPlugins) => webpack.Configuration;

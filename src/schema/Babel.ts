export type BabelRC =
	| BabelPrimaryOptions
	| BabelConfigLoadingOptions
	| BabelPluginPresetOptions
	| BabelOutputTargets
	| BabelConfigMergingOptions
	| BabelSourceMapOptions
	| BabelMiscOptions
	| BabelCodeGenOptions
	| BabelModuleOptions;

export interface BabelPrimaryOptions {
	/**
	 * The working directory that all paths in the programmatic options will be resolved relative
	 * to.
	 *
	 * @defaultValue `process.cwd()`
	 */
	cwd?: string;

	/**
	 * Utilities may pass a `caller` object to identify themselves to Babel and pass capability
	 * related flags for use by configs, presets, and plugins.
	 */
	caller?: BabelCallerData;

	/**
	 * The filename associated with the code currently being compiled, if there is one.
	 *
	 * @defaultValue `unknown`
	 */
	filename?: string;

	/**
	 * Used as the default value for Babel's `sourceFileName` option, and used as part of
	 * generation of filenames for the `AMD`/`UMD`/`SystemJS` module transforms.
	 *
	 * @defaultValue `path.relative(cwd, filename)` (if `filename` was passed)
	 */
	filenameRelative?: string;

	/**
	 * Enable code generation.
	 *
	 * @defaultValue `true`
	 */
	code?: boolean;

	/**
	 * Include the AST in the returned object.
	 *
	 * @defaultValue `false`
	 */
	ast?: boolean;

	/**
	 * By default `babel.transformFromAst` will clone the input AST to avoid mutations. Specifying
	 * `cloneInputAst: false` can improve parsing performance if the input AST is not used
	 * elsewhere.
	 *
	 * @defaultValue `true`
	 */
	cloneInputAst?: boolean;
}

export interface BabelConfigLoadingOptions {
	/**
	 * The initial path that will be processed based on the `rootMode` to determine the conceptual
	 * root folder for the current Babel project.
	 *
	 * @defaultValue `cwd`
	 */
	root?: string;

	/**
	 * This option, combined with the `root` value, defines how Babel chooses its project root.
	 *
	 * @defaultValue `root`
	 */
	rootMode?: BabelRootMode;

	/**
	 * The current active environment used during configuration loading.
	 *
	 * @defaultValue `process.env.BABEL_ENV || process.env.NODE_ENV || 'development'`
	 */
	envName?: string;

	/**
	 * Defaults to searching for a default `babel.config.json` file, but can be passed the path of
	 * any JS or JSON5 config file. This option does *not* affect loading of `.babelrc.json` files.
	 *
	 * @defaultValue `path.resolve(root, 'babel.config.json')`, if it exists, `false` otherwise
	 */
	configFile?: string | boolean;

	/**
	 * `true` will enable searching for configuration files relative to the `filename` provided to Babel.
	 *
	 * @defaultValue `true` as long as the `filename` option has been specified
	 */
	babelrc?: boolean;

	/**
	 * This option allows users to provide a list of other packages that should be considered `root`
	 * packages when considering whether to load `.babelrc.json` files.
	 *
	 * @defaultValue `root`
	 */
	babelrcRoots?: boolean | BabelMatchPattern | BabelMatchPattern[];
}

export interface BabelPluginPresetOptions {
	/**
	 * An array of plugins to activate when processing a file.
	 */
	plugins?: BabelPluginEntry[];

	/**
	 * An array of presets to activate when processing a file.
	 */
	presets?: BabelPresetEntry[];
}

export interface BabelOutputTargets {
	/**
	 * Describes the environments you support/target for your project.
	 */
	targets?: string | string[] | Record<string, string>;

	/**
	 * Toggles whether or not browserslist config sources are used, which includes searching for any
	 * browserslist files or referencing the browserslist key inside `package.json`.
	 *
	 * If a string is specified, it must represent the path of a browserslist configuration file.
	 *
	 * @defaultValue `true`
	 */
	browserslistConfigFile?: boolean | string;

	/**
	 * The Browserslist environment to use.
	 */
	browserslistEnv?: string;
}

export interface BabelConfigMergingOptions {
	/**
	 * Configs may extend other configuration files. Config fields in the current config will be
	 * merged on top of the extended file's configuration.
	 */
	extends?: string;

	/**
	 * Allows for entire nested configuration options that will only be enabled if the key matches
	 * the `envName` option. `env[key]` options will be merged on top of the options specified in
	 * the root object.
	 */
	env?: Record<string, Omit<BabelRC, 'env'>>;

	/**
	 * Allows users to provide an array of options that will be merged into the current
	 * configuration one at a time.
	 */
	overrides?: Omit<BabelRC, 'env' | 'overrides'>[];

	/**
	 * If all patterns fail to match, the current configuration object is considered inactive and
	 * is ignored during config processing.
	 */
	test?: BabelMatchPattern | BabelMatchPattern[];

	/**
	 * This option is a synonym for `test`.
	 */
	includes?: BabelMatchPattern | BabelMatchPattern[];

	/**
	 * If any of patterns match, the current configuration object is considered inactive and is
	 * ignored during config processing.
	 */
	exclude?: BabelMatchPattern | BabelMatchPattern[];

	/**
	 * If any of the patterns match, Babel will immediately stop all processing of the current build.
	 */
	ignore?: BabelMatchPattern[];

	/**
	 * If all of the patterns fail to match, Babel will immediately stop all processing of the
	 * current build.
	 */
	only?: BabelMatchPattern[];
}

export interface BabelSourceMapOptions {
	/**
	 * `true` will attempt to load an input sourcemap from the file itself, if it contains a
	 * `//# sourceMappingURL=... comment`. If no map is found, or the map fails to load and parse,
	 * it will be silently discarded.
	 *
	 * If an object is provided, it will be treated as the source map object itself.
	 *
	 * @defaultValue `true`
	 */
	inputSourceMap?: boolean | Record<string, string>;

	/**
	 * @defaultValue `false`
	 */
	sourceMaps?: BabelSourceMap | boolean;

	/**
	 * The name to use for the file inside the source map object.
	 *
	 * @defaultValue `path.basename(filenameRelative)` when available, or `unknown`
	 */
	sourceFileName?: string;

	/**
	 * The `sourceRoot` fields to set in the generated source map, if one is desired.
	 */
	sourceRoot?: string;
}

export interface BabelMiscOptions {
	/**
	 * @defaultValue `module`
	 */
	sourceType?: BabelSourceType;

	/**
	 * Set assumptions that Babel can make in order to produce smaller output.
	 */
	assumptions?: Record<string, boolean>;

	/**
	 * Highlight tokens in code snippets in Babel's error messages to make them easier to read.
	 *
	 * @defaultValue `true`
	 */
	highlightCode?: boolean;

	/**
	 * Allows users to add a wrapper on each visitor in order to inspect the visitor process as Babel
	 * executes the plugins.
	 *
	 * Users can return a replacement function that should call the original function after
	 * performing whatever logging and analysis they wish to do.
	 */
	wrapPluginVisitorMethod?: BabelVisitorWrapper;
}

export interface BabelCodeGenOptions {
	/**
	 * Babel will make an effort to generate code such that items are printed on the same line that
	 * they were on in the original file. This option exists so that users who cannot use source
	 * maps can get vaguely useful error line numbers, but it is only a best-effort, and is not
	 * guaranteed in all cases with all plugins.
	 *
	 * @defaultValue `false`
	 */
	retainLines?: boolean;

	/**
	 * `auto` will set the value by evaluating `code.length > 500_000`.
	 *
	 * All optional newlines and whitespace will be omitted when generating code in compact mode.
	 *
	 * @defaultValue `auto`
	 */
	compact?: 'auto' | boolean;

	/**
	 * Includes `compact: true`, omits block-end semicolons, omits `()` from new Foo`()` when
	 * possible, and may output shorter versions of literals.
	 *
	 * @defaultValue `false`
	 */
	minified?: boolean;

	/**
	 * Allows specifying a prefix comment to insert before pieces of code that were not present in
	 * the original file.
	 */
	auxiliaryCommentBefore?: string;

	/**
	 * Allows specifying a prefix comment to insert after pieces of code that were not present in
	 * the original file.
	 */
	auxiliaryCommentAfter?: string;

	/**
	 * Provides a default comment state for `shouldPrintComment` if no function is given.
	 *
	 * @defaultValue `true`
	 */
	comments?: boolean;

	/**
	 * A function that can decide whether a given comment should be included in the output code
	 * from Babel.
	 *
	 * @defaultValue
	 * - Without `minified`: `(val) => comments || /@license|@preserve/.test(val)`
	 * - With `minified`: `() => comments`
	 */
	shouldPrintComment?: (value: string) => boolean;
}

export interface BabelModuleOptions {
	/**
	 * Enables module ID generation.
	 *
	 * @defaultValue `!!moduleId`
	 */
	moduleIds?: boolean;

	/**
	 * A hard-coded ID to use for the module. Cannot be used alongside `getModuleId`.
	 */
	moduleId?: string;

	/**
	 * Given the babel-generated module name, return the name to use. Returning a falsy value will
	 * use the original `name`.
	 */
	getModuleId?: (name: string) => string;

	/**
	 * A root path to include on generated module names.
	 */
	moduleRoot?: string;
}

interface BabelCallerData {
	name: string;
	supportsStaticESM?: boolean;
	supportsDynamicImport?: boolean;
	supportsTopLevelAwait?: boolean;
	supportsExportNamespaceFrom?: boolean;
}

export enum BabelRootMode {
	/**
	 * Passes the `root` value through as unchanged.
	 */
	Root = 'root',

	/**
	 * Walks upward from the `root` directory, looking for a directory containing a
	 * `babel.config.json` file, and throws an error if a `babel.config.json` is not found.
	 */
	Upward = 'upward',

	/**
	 * Walk upward from the `root` directory, looking for a directory containing a
	 * `babel.config.json` file, and falls back to `root` if a `babel.config.json` is not found.
	 */
	UpwardOptional = 'upward-optional'
}

export type BabelMatchPattern =
	| string
	| RegExp
	| ((filename: string | void, context: BabelMatchPatternContext) => boolean);

export interface BabelMatchPatternContext {
	caller: { name: string } | void;
	envName: string;
	dirname: string;
}

export type BabelPluginEntry = string | [BabelEntryTarget, BabelEntryOptions, string?];

export type BabelPresetEntry = BabelPluginEntry;

export type BabelEntryTarget = string | object | Function;

export type BabelEntryOptions = undefined | object | false;

export enum BabelSourceMap {
	/**
	 * Generate a sourcemap and append it as a data URL to the end of the code, but don't include it
	 * in the result object.
	 */
	Inline = 'inline',

	/**
	 * The same as inline, but will include the map in the result object.
	 */
	Both = 'both'
}

export enum BabelSourceType {
	/**
	 * Parse the file using the ECMAScript Script grammar. No `import`/`export` statements allowed,
	 * and files are not in strict mode.
	 */
	Script = 'script',

	/**
	 * Parse the file using the ECMAScript Module grammar. Files are automatically strict, and
	 * `import`/`export` statements are allowed.
	 */
	Module = 'module',

	/**
	 * Consider the file a `module` if `import`/`export` statements are present, or else consider
	 * it a `script`.
	 */
	Unambiguous = 'unambiguous'
}

export type BabelVisitorWrapper = (
	/**
	 * A simple opaque string that represents the plugin being executed.
	 */
	key: string,

	/**
	 * The type of AST node currently being visited.
	 */
	nodeType: string,

	/**
	 * The visitor function itself.
	 */
	fn: Function
) => Function;

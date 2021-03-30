export interface NestCLI {
	/**
	 * Points at the collection of schematics used to generate components; you generally should
	 * not change this value.
	 */
	collection?: string;

	/**
	 * Points at the root of the source code for the single project in standard mode structures,
	 * or the *default project* in monorepo mode structures.
	 */
	sourceRoot?: string;

	/**
	 * These properties specify the compiler to use as well as various options that affect any
	 * compilation step, whether as part of `nest build` or `nest start`, and regardless of the
	 * compiler, whether `tsc` or `webpack`.
	 */
	compilerOptions?: NestCLICompilerOptions;

	/**
	 * These properties specify the default generate options to be used by the `nest generate`
	 * command.
	 */
	generateOptions?: NestCLIGenerateOptions;

	/**
	 * (Monorepo only) For a monorepo mode structure, this value is always `true`.
	 */
	monorepo?: boolean;

	/**
	 * (Monorepo only) points at the project root of the *default project*.
	 */
	root?: string;

	/**
	 * In addition to providing global generate options, you may also specify project-specific
	 * generate options. The project specific generate options follow the exact same format as the
	 * global generate options, but are specified directly on each project.
	 *
	 * Project-specific generate options override global generate options.
	 */
	projects?: Record<string, NestCLIGenerateOptions>;
}

export interface NestCLICompilerOptions {
	/**
	 * If `true`, use {@link https://webpack.js.org/|webpack compiler}. If `false` or not present,
	 * use `tsc`. In monorepo mode, the default is `true` (use webpack), in standard mode, the
	 * default is `false` (use `tsc`).
	 */
	webpack?: boolean;

	/**
	 * (Monorepo only) Points at the file containing the `tsconfig.json` settings that will be used
	 * when `nest build` or `nest start` is called without a `project` option (e.g., when the
	 * default project is built or started).
	 */
	tsConfigPath?: string;

	/**
	 * Points at a webpack options file. If not specified, Nest looks for the file
	 * `webpack.config.js`.
	 */
	webpackConfigPath?: string;

	/**
	 * If `true`, whenever the compiler is invoked, it will first remove the compilation output
	 * directory (as configured in `tsconfig.json`, where the default is `./dist`).
	 */
	deleteOutDir?: boolean;

	/**
	 * Enables automatically distributing non-TypeScript assets whenever a compilation step begins
	 * (asset distribution does not happen on incremental compiles in `--watch` mode).
	 */
	assets?: (string | NestCLIAssetElement)[];

	/**
	 * If `true`, run in watch-mode, watching **all** non-TypeScript assets.
	 */
	watchAssets?: boolean;
}

export interface NestCLIGenerateOptions {
	/**
	 * If the value is boolean, a value of `true` enables spec generation by default and a value
	 * of `false` disables it. A flag passed on the CLI command line overrides this setting, as
	 * does a project-specific `generateOptions` setting. If the value is an object, each key
	 * represents a schematic name, and the boolean value determines whether the default spec
	 * generation is enabled / disabled for that specific schematic.
	 */
	spec?: boolean | Record<string, boolean>;
}

export interface NestCLIAssetElement {
	/**
	 * `glob`-like file specifications for the assets to be distributed.
	 */
	include?: string;

	/**
	 * `glob`-like file specifications for assets to be **excluded** from the `include` list.
	 */
	exclude?: string;

	/**
	 * A string specifying the path (relative to the root folder) where the assets should be
	 * distributed. Defaults to the same output directory configured for compiler output.
	 */
	outDir?: string;

	/**
	 * If `true`, run in watch mode watching specified assets.
	 *
	 * Setting `watchAssets` in a top-level `compilerOptions` property overrides any `watchAssets`
	 * settings within the `assets` property.
	 */
	watchAssets?: boolean;
}

export interface ReScriptBuildConfig {
	/**
	 * The semantic version of the OCaml library.
	 */
	version?: string;

	/**
	 * Package name.
	 */
	name: string;

	/**
	 * Can be `true`/`false` or a customized name.
	 */
	namespace?: boolean | string;

	/**
	 * Source code location.
	 */
	sources: ReScriptSourceItem | ReScriptSourceItem[];

	/**
	 * A list of directors that BSB will not look into.
	 */
	'ignored-dirs'?: string;

	/**
	 * OCaml/Reason dependencies of the library, like in `package.json`. Currently searches in
	 * `node_modules`.
	 */
	'bs-dependencies'?: string[];

	/**
	 * OCaml/Reason dev dependencies of the library, like in `package.json`. Currently searches in
	 * `node_modules`.
	 */
	'bs-dev-dependencies'?: string[];
	'pinned-dependencies'?: string[];

	/**
	 * Pre-defined rules.
	 */
	generators?: {
		name: string;
		command: string;
	}[];

	/**
	 * Ignore generators, cut the dependency on generator tools.
	 */
	'cut-generators'?: boolean;

	/**
	 * ReScript comes with Reason by default. Specific configurations here.
	 */
	reason?: {
		/**
		 * Whether to apply the Reason-React-specific JSX PPX transformation. `true` means on with
		 * the default to be version `1`.
		 */
		'react-jsx': number | boolean;
	};

	gentypeconfig?: {
		/**
		 * Path to gentype, path resolution is similar to Reason.
		 */
		path: string;
	};

	/**
	 * Flags passed to `bsc.exe`.
	 *
	 * @defaultValue `['-no-alias-deps']`
	 */
	'bsc-flags'?:
		| string[]
		| {
				kind: ReScriptBSCFlagKind;
				flags: string[];
		  };

	/**
	 * Warning numbers and whether to turn it into error or not.
	 */
	warnings?: {
		number: string;
		error: boolean | string;
	};

	/**
	 * PPX macros to pass to compiler. Currently searches in `node_modules`.
	 */
	'ppx-flags'?: (string | string[])[];

	/**
	 * Preprocessors to pass to compiler. Currently searches in `node_modules`.
	 */
	'pp-flags'?: string;

	/**
	 * Experimental post-processing hook. BSB will invoke `cmd ${file}` whenever a `${file}` is
	 * changed.
	 */
	'js-post-build'?: {
		cmd: string;
	};

	/**
	 * ReScript can currently output to CommonJS, and ES6 modules.
	 */
	'package-specs'?: ReScriptPackageSpec | ReScriptModuleFormat;

	/**
	 * Used by BSB to build to different targets: native (ocamlopt), bytecode (ocamlc) or JS (bsc).
	 */
	entries?: {
		/**
		 * The compiler to use for the target.
		 */
		kind: ReScriptEntryTargetItemKind;

		/**
		 * Name of the main module used as entry point for this target. `entry-point` isn't used
		 * when this project is built as a dependency.
		 */
		name: string;
	};

	/**
	 * Whether to generate the `.merlin` file for Merlin.
	 *
	 * @defaultValue `true`
	 */
	'generate-merlin'?: boolean;

	/**
	 * Experimental use of the OCaml standard library.
	 *
	 * @defaultValue `true`
	 */
	'use-stdlib'?: boolean;

	/**
	 * External include directories, which will be applied `-I` to all compilation units.
	 */
	'bs-external-includes'?: string[];

	/**
	 * Reason syntax configuration.
	 */
	refmt?: 2 | 3 | string;

	/**
	 * Arguments to pass to `refmt`.
	 *
	 * @defaultValue `['--print', 'binary']`
	 */
	'refmt-flags'?: string[];

	/**
	 * Suffix of generated JS files.
	 *
	 * @defaultValue `.js`
	 */
	suffix?: ReScriptSuffix;
}

export interface ReScriptSourceItem {
	/**
	 * Name of the directory.
	 */
	dir: string;
	type?: 'dev' | 'lib';

	/**
	 * If files are empty, the build system will populate it automatically.
	 */
	files?:
		| string[]
		| {
				'slow-re'?: string;

				/**
				 * Files to be excluded.
				 */
				excludes?: string[];
		  };

	/**
	 * Files generated in dev time.
	 */
	generators?: {
		name?: string;
		edge?: string[];
	}[];

	/**
	 * By default, export all modules. It is recommended for library developers to hide some
	 * files/interfaces.
	 */
	public?: string[] | 'all';
	resources?: string[];
	subdirs?: ReScriptSourceItem[] | boolean;
	group?:
		| string
		| {
				name?: string;

				/**
				 * When true, all subdirs are considered as a whole as dependency.
				 */
				hierarchy?: boolean;
		  };

	/**
	 * If unspecified, all existing listed source files are considered potential dependencies.
	 */
	'internal-depends'?: string[];
}

export enum ReScriptBSCFlagKind {
	Reset = 'reset',
	Prefix = 'prefix',
	Append = 'append'
}

export interface ReScriptPackageSpec {
	module: ReScriptModuleFormat;

	/**
	 * @defaultValue `false`
	 */
	'in-source'?: boolean;

	/**
	 * Suffix of generated JS files.
	 *
	 * @defaultValue `.js`
	 */
	suffix?: ReScriptSuffix;
}

export type ReScriptModuleFormat = 'commonjs' | 'es6' | 'es6-global';

export type ReScriptSuffix = '.js' | '.bs.js' | '.mjs' | '.cjs';

export enum ReScriptEntryTargetItemKind {
	Native = 'native',
	Bytecode = 'bytecode',
	JS = 'js'
}

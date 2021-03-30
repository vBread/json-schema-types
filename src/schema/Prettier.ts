export type PrettierRC = PrettierOptions | PrettierOverrides;

export interface PrettierOptions {
	/**
	 * Include parentheses around a sole arrow function parameter.
	 *
	 * @defaultValue `always`
	 */
	arrowParens?: PrettierArrowParens;

	/**
	 * Print spaces between braces.
	 *
	 * @defaultValue `true`
	 */
	bracketSpacing?: boolean;

	/**
	 * Print (to stderr) where a cursor at the given position would move to after formatting. This
	 * option cannot be used with `--range-start` and `--range-end`.
	 *
	 * @defaultValue `-1`
	 */
	cursorOffset?: number;

	/**
	 * Control how Prettier formats quoted code embedded in the file.
	 *
	 * @defaultValue `auto`
	 */
	embeddedLanguageFormatting?: PrettierEmbeddedLanguageFormat;

	/**
	 * Which end of line characters to apply.
	 *
	 * @defaultValue `lf`
	 */
	endOfLine?: PrettierEndOfLine;

	/**
	 * Specify the input filepath. This will be used to do parser inference.
	 */
	filepath?: string;

	/**
	 * How to handle whitespaces in HTML.
	 *
	 * @defaultValue `css`
	 */
	htmlWhitespaceSensitivity?: PrettierHTMLWhitespace;

	/**
	 * Insert `@format` pragma into file's first docblock comment.
	 *
	 * @defaultValue `false`
	 */
	insertPragam?: boolean;

	/**
	 * Put > on the last line instead of at a new line.
	 *
	 * @defaultValue `false`
	 */
	jsxBracketSameLine?: boolean;

	/**
	 * Use single quotes in JSX.
	 *
	 * @defaultValue `false`
	 */
	jsxSingleQuote?: boolean;

	/**
	 * Which parser to use.
	 */
	parser?: PrettierParser;

	/**
	 * Custom directory that contains prettier plugins in `node_modules` subdirectory. Overrides
	 * default behavior when plugins are searched relatively to the location of Prettier. Multiple
	 * values are accepted.
	 */
	pluginSearchDirs?: string[];

	/**
	 * Add a plugin. Multiple plugins can be passed as separate `--plugin`s.
	 */
	plugins?: string[];

	/**
	 * The line length where Prettier will try wrap.
	 *
	 * @defaultValue `80`
	 */
	printWidth?: number;

	/**
	 * How to wrap prose.
	 *
	 * @defaultValue `preserve`
	 */
	proseWrap?: PrettierProseWrap;

	/**
	 * Change when properties in objects are quoted.
	 *
	 * @defaultValue `as-needed`
	 */
	quoteProps?: PrettierQuoteProps;

	/**
	 * Format code ending at a given character offset (exclusive). The range will extend forwards
	 * to the end of the selected statement. This option cannot be used with `--cursor-offset`.
	 *
	 * @defaultValue `null`
	 */
	rangeEnd?: number;

	/**
	 * Format code starting at a given character offset. The range will extend backwards to the
	 * start of the first line containing the selected statement. This option cannot be used with
	 * `--cursor-offset`.
	 *
	 * @defaultValue `0`
	 */
	rangeStart?: number;

	/**
	 * Require either '@prettier' or '@format' to be present in the file's first docblock comment
	 * in order for it to be formatted.
	 *
	 * @defaultValue `false`
	 */
	requirePragma?: boolean;

	/**
	 * Print semicolons.
	 *
	 * @defaultValue `true`
	 */
	semi?: boolean;

	/**
	 * Use single quotes instead of double quotes.
	 *
	 * @defaultValue `false`
	 */
	singleQuote?: boolean;

	/**
	 * Number of spaces per indentation level.
	 *
	 * @defaultValue `2`
	 */
	tabWidth?: number;

	/**
	 * Print trailing commas wherever possible when multi-line.
	 *
	 * @defaultValue `es5`
	 */
	trailingComma?: PrettierTrailingComma;

	/**
	 * Indent with tabs instead of spaces.
	 *
	 * @defaultValue `false`
	 */
	useTabs?: boolean;

	/**
	 * Indent script and style tags in Vue files.
	 *
	 * @defaultValue `false`
	 */
	vueIndentScriptAndStyle?: boolean;
}

export enum PrettierArrowParens {
	/**
	 * Always include parens. Example: `(x) => x`
	 */
	Always = 'always',

	/**
	 * Omit parens when possible. Example: `x => x`
	 */
	Avoid = 'avoid'
}

export enum PrettierEmbeddedLanguageFormat {
	/**
	 * Format embedded code if Prettier can automatically identify it.
	 */
	Auto = 'auto',

	/**
	 * Never automatically format embedded code.
	 */
	Off = 'off'
}

export enum PrettierEndOfLine {
	/**
	 * Line Feed only (`\n`), common on Linux and macOS as well as inside git repo.
	 */
	LF = 'lf',

	/**
	 * Carriage Return + Line Feed characters (`\r\n`), common on Windows.
	 */
	CRLF = 'crlf',

	/**
	 * Carriage Return character only (`\r`), used very rarely.
	 */
	CR = 'cr',

	/**
	 * Maintain existing line endings (mixed values within one file are normalised by looking at
	 * what's used after the first line).
	 */
	Auto = 'auto'
}

export enum PrettierHTMLWhitespace {
	/**
	 * Respect the default value of CSS display property.
	 */
	CSS = 'css',

	/**
	 * Whitespaces are considered sensitive.
	 */
	Strict = 'strict',

	/**
	 * Whitespaces are considered insensitive.
	 */
	Ignore = 'ignore'
}

export enum PrettierParser {
	/**
	 * Flow.
	 */
	Flow = 'flow',

	/**
	 * JavaScript.
	 */
	Babel = 'babel',

	/**
	 * Flow.
	 */
	BabelFlow = 'babel-flow',

	/**
	 * TypeScript.
	 */
	BabelTS = 'babel-ts',

	/**
	 * TypeScript.
	 */
	TypeScript = 'typescript',

	/**
	 * CSS.
	 */
	CSS = 'css',

	/**
	 * LESS.
	 */
	LESS = 'less',

	/**
	 * SCSS.
	 */
	SCSS = 'scss',

	/**
	 * JSON.
	 */
	JSON = 'json',

	/**
	 * JSON5.
	 */
	JSON5 = 'json5',

	/**
	 * JSON.stringify.
	 */
	JSONStringify = 'json-stringify',

	/**
	 * GraphQL.
	 */
	GraphQL = 'graphql',

	/**
	 * Markdown.
	 */
	Markdown = 'markdown',

	/**
	 * MDX.
	 */
	MDX = 'mdx',

	/**
	 * Vue.
	 */
	Vue = 'vue',

	/**
	 * YAML.
	 */
	YAML = 'yaml',

	/**
	 * HTML.
	 */
	HTML = 'html',

	/**
	 * Angular.
	 */
	Angular = 'angular',

	/**
	 * Lightning Web Components.
	 */
	LWC = 'lwc'
}

export enum PrettierProseWrap {
	/**
	 * Wrap prose if it exceeds the print width.
	 */
	Always = 'always',

	/**
	 * Do not wrap prose.
	 */
	Never = 'never',

	/**
	 * Wrap prose as-is.
	 */
	Preserve = 'preserve'
}

export enum PrettierQuoteProps {
	/**
	 * Only add quotes around object properties where required.
	 */
	AsNeeded = 'as-needed',

	/**
	 * If at least one property in an object requires quotes, quote all properties.
	 */
	Consistent = 'consistent',

	/**
	 * Respect the input use of quotes in object properties.
	 */
	Preserve = 'preserve'
}

export enum PrettierTrailingComma {
	/**
	 * Trailing commas where valid in ES5 (objects, arrays, etc.)
	 */
	ES5 = 'es5',

	/**
	 * No trailing commas.
	 */
	None = 'none',

	/**
	 * Trailing commas wherever possible (including function arguments).
	 */
	All = 'all'
}

export interface PrettierOverrides {
	/**
	 * Provide a list of patterns to override prettier configuration.
	 */
	overrides: {
		/**
		 * Include these files in this override.
		 */
		files: string | string[];

		/**
		 * Exclude these files from this override.
		 */
		excludeFiles?: string | string[];

		/**
		 * The options to apply for this override.
		 */
		options?: PrettierOptions;
	}[];
}

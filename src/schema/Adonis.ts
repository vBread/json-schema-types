export interface AdonisRC {
	/**
	 * @defaultValue `true`
	 */
	typescript?: boolean;
	exceptionHandlerNamespace?: string;
	preloads?: (string | AdonisPreload)[];
	metaFiles?: (string | AdonisMetaFile)[];
	commands?: string[];
	providers?: string[];
	aceProviders?: string[];
	directories?: AdonisDirectory;
	commandsAliases?: Record<string, string>;
	aliases?: Record<string, string>;
	namespaces?: AdonisNamespace;
}

export interface AdonisPreload {
	file: string;
	environment?: AdonisPreloadEnvironment[];
	optional?: boolean;
}

export enum AdonisPreloadEnvironment {
	Web = 'web',
	Console = 'console',
	Test = 'test',
	REPL = 'repl'
}

export interface AdonisMetaFile {
	pattern: string;
	reloadServer?: boolean;
}

export interface AdonisDirectory {
	[key: string]: string;

	/**
	 * @defaultValue `config`
	 */
	config?: string;

	/**
	 * @defaultValue `public`
	 */
	public?: string;

	/**
	 * @defaultValue `contracts`
	 */
	contracts?: string;

	/**
	 * @defaultValue `providers`
	 */
	providers?: string;

	/**
	 * @defaultValue `database`
	 */
	database?: string;

	/**
	 * @defaultValue `database/migrations`
	 */
	migrations?: string;

	/**
	 * @defaultValue `database/seeds`
	 */
	seeds?: string;

	/**
	 * @defaultValue `resources`
	 */
	resources?: string;

	/**
	 * @defaultValue `resources/views`
	 */
	views?: string;

	/**
	 * @defaultValue `start`
	 */
	start?: string;

	/**
	 * @defaultValue `tmp`
	 */
	tmp?: string;

	/**
	 * @defaultValue `tests`
	 */
	tests?: string;
}

export interface AdonisNamespace {
	[key: string]: string;

	/**
	 * @defaultValue `App/Models`
	 */
	models?: string;

	/**
	 * @defaultValue `App/Exceptions`
	 */
	exceptions?: string;

	/**
	 * @defaultValue `App/Middleware`
	 */
	middleware?: string;

	/**
	 * @defaultValue `App/Controllers/Http`
	 */
	httpControllers?: string;

	/**
	 * @defaultValue `App/Listeners`
	 */
	eventListeners?: string;

	/**
	 * @defaultValue `App/Listeners`
	 */
	redisListeners?: string;

	/**
	 * @defaultValue `App/Validators`
	 */
	validators?: string;
}

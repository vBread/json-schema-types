export type NodemonJSON =
	| (NodemonOptions & {
			/**
			 * Execute script with `app`. May use the `{{pwd}}` and `{{filename}}` variables.
			 * - `{{pwd}}`: The current directory
			 * - `{{filename}}`: The filename you pass to nodemon
			 */
			exec?: string;
	  })
	| (NodemonOptions & {
			exec: 'node';

			/**
			 * Arguments to pass to node.
			 */
			nodeArgs: string[];
	  })
	| (NodemonOptions & {
			/**
			 * Use polling to watch for changes (typically needed when watching over a network/Docker).
			 */
			legacyWatch: true;

			/**
			 * Milliseconds to poll for.
			 *
			 * @defaultValue `100`
			 */
			pollingInterval: number;
	  });

export interface NodemonOptions {
	/**
	 * Set to `false` to disable color output.
	 *
	 * @defaultValue `true`
	 */
	colours?: boolean;

	/**
	 * Change into `<dir>` before running the script.
	 */
	cwd?: string;

	/**
	 * Debounce restart for a number of seconds.
	 *
	 * @defaultValue `0`
	 */
	delay?: number;

	/**
	 * Print full debug configuration.
	 *
	 * @defaultValue `false`
	 */
	dump?: boolean;

	/**
	 * The global config file is useful for setting up default executables.
	 */
	execMap?: Record<string, string>;

	/**
	 * Exit nodemon after crash.
	 */
	exitcrash?: boolean;

	/**
	 * Extensions to look for.
	 *
	 * @defaultValue `*`
	 */
	ext?: string;

	/**
	 * Ignore directory or file. One entry per ignored value. Wildcards are allowed.
	 */
	ignore?: string[];

	/**
	 * Root paths to ignore.
	 */
	ignoreRoot?: string[];

	/**
	 * Opt-out of update version check.
	 *
	 * @defaultValue `false`
	 */
	noUpdateNotifier?: boolean;

	/**
	 * Minimise nodemon messages to start/stop only.
	 *
	 * @defaultValue `false`
	 */
	quiet?: boolean;

	/**
	 * Execute script on change only, not startup.
	 *
	 * @defaultValue `false`
	 */
	runOnChangeOnly?: boolean;

	/**
	 * Use specified kill signal instead of default.
	 */
	signal?: NodemonTerminationSignal;

	/**
	 * Force nodemon to use spawn (over fork) [node only].
	 *
	 * @defaultValue `false`
	 */
	spawn?: boolean;

	/**
	 * Set to `false` to have nodemon pass stdin directly to child process.
	 *
	 * @defaultValue `true`
	 */
	stdin?: boolean;

	/**
	 * Show detail on what is causing restarts.
	 *
	 * @defaultValue `false`
	 */
	verbose?: boolean;

	/**
	 * Watch directory or file. One entry per watched value. Wildcards are allowed.
	 */
	watch?: string[];
}

export type NodemonTerminationSignal = 'SIGTERM' | 'SIGINT' | 'SIGQUIT' | 'SIGKILL' | 'SIGHUP';

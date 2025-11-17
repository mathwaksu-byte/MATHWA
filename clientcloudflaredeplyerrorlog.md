2025-11-17T14:53:11.696068Z	Cloning repository...
2025-11-17T14:53:12.325986Z	From https://github.com/mathwaksu-byte/MATHWA
2025-11-17T14:53:12.326437Z	 * branch            1d9a9613f5c29cf472cf078133eeedadffe5309e -> FETCH_HEAD
2025-11-17T14:53:12.326544Z	
2025-11-17T14:53:12.360361Z	HEAD is now at 1d9a961 client
2025-11-17T14:53:12.360863Z	
2025-11-17T14:53:12.444567Z	
2025-11-17T14:53:12.445008Z	Using v2 root directory strategy
2025-11-17T14:53:12.471669Z	Success: Finished cloning repository files
2025-11-17T14:53:14.341034Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-11-17T14:53:14.341681Z	
2025-11-17T14:53:15.44152Z	No wrangler.toml file found. Continuing.
2025-11-17T14:53:15.510898Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2025-11-17T14:53:15.511649Z	Installing project dependencies: npm clean-install --progress=false
2025-11-17T14:53:18.772828Z	npm warn deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
2025-11-17T14:53:18.84592Z	npm warn deprecated rollup-plugin-inject@3.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-inject.
2025-11-17T14:53:18.964269Z	npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
2025-11-17T14:53:19.989136Z	npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
2025-11-17T14:53:21.407897Z	npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
2025-11-17T14:53:21.531675Z	npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
2025-11-17T14:53:22.004755Z	npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
2025-11-17T14:53:24.671847Z	npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
2025-11-17T14:53:27.73032Z	
2025-11-17T14:53:27.730617Z	added 922 packages, and audited 923 packages in 12s
2025-11-17T14:53:27.730774Z	
2025-11-17T14:53:27.730959Z	278 packages are looking for funding
2025-11-17T14:53:27.731114Z	  run `npm fund` for details
2025-11-17T14:53:27.784715Z	
2025-11-17T14:53:27.785066Z	8 moderate severity vulnerabilities
2025-11-17T14:53:27.785169Z	
2025-11-17T14:53:27.785507Z	To address issues that do not require attention, run:
2025-11-17T14:53:27.785629Z	  npm audit fix
2025-11-17T14:53:27.785699Z	
2025-11-17T14:53:27.785765Z	Some issues need review, and may require choosing
2025-11-17T14:53:27.785831Z	a different dependency.
2025-11-17T14:53:27.785918Z	
2025-11-17T14:53:27.78601Z	Run `npm audit` for details.
2025-11-17T14:53:27.815659Z	Executing user command: npm run build
2025-11-17T14:53:28.229839Z	
2025-11-17T14:53:28.230076Z	> mathwa-client@1.0.0 build
2025-11-17T14:53:28.230314Z	> remix vite:build && xcopy /E /Y build\server build\ && copy /Y build\client\_worker.js build\_worker.js
2025-11-17T14:53:28.230396Z	
2025-11-17T14:53:28.931761Z	[33mThe CJS build of Vite's Node API is deprecated. See https://vite.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.[39m
2025-11-17T14:53:29.236755Z	[7m[33m warn [39m[27m Route discovery/manifest behavior is changing in React Router v7
2025-11-17T14:53:29.237287Z	[33m┃[39m [90mYou can use the `v3_lazyRouteDiscovery` future flag to opt-in early.[39m
2025-11-17T14:53:29.23768Z	[33m┃[39m [90m-> https://remix.run/docs/en/2.13.1/start/future-flags#v3_lazyRouteDiscovery[39m
2025-11-17T14:53:29.237808Z	[33m┗[39m
2025-11-17T14:53:29.237875Z	[7m[33m warn [39m[27m Data fetching is changing to a single fetch in React Router v7
2025-11-17T14:53:29.238374Z	[33m┃[39m [90mYou can use the `v3_singleFetch` future flag to opt-in early.[39m
2025-11-17T14:53:29.238467Z	[33m┃[39m [90m-> https://remix.run/docs/en/2.13.1/start/future-flags#v3_singleFetch[39m
2025-11-17T14:53:29.238557Z	[33m┗[39m
2025-11-17T14:53:29.536263Z	[36mvite v5.4.21 [32mbuilding for production...[36m[39m
2025-11-17T14:53:29.579563Z	transforming...
2025-11-17T14:53:31.040071Z	[32m✓[39m 106 modules transformed.
2025-11-17T14:53:31.134664Z	rendering chunks...
2025-11-17T14:53:31.224491Z	computing gzip size...
2025-11-17T14:53:31.235484Z	[2mbuild/client/[22m[32m.vite/manifest.json                    [39m[1m[2m  2.77 kB[22m[1m[22m[2m │ gzip:  0.55 kB[22m
2025-11-17T14:53:31.235751Z	[2mbuild/client/[22m[2massets/[22m[35mtailwind-D2ofO45_.css           [39m[1m[2m 23.48 kB[22m[1m[22m[2m │ gzip:  4.84 kB[22m
2025-11-17T14:53:31.235885Z	[2mbuild/client/[22m[2massets/[22m[36msitemap_._xml-CSxRPO1x.js       [39m[1m[2m  0.05 kB[22m[1m[22m[2m │ gzip:  0.07 kB[22m
2025-11-17T14:53:31.236024Z	[2mbuild/client/[22m[2massets/[22m[36mrobots_._txt-CSxRPO1x.js        [39m[1m[2m  0.05 kB[22m[1m[22m[2m │ gzip:  0.07 kB[22m
2025-11-17T14:53:31.236157Z	[2mbuild/client/[22m[2massets/[22m[36mabout-BD1oSkzc.js               [39m[1m[2m  1.95 kB[22m[1m[22m[2m │ gzip:  0.86 kB[22m
2025-11-17T14:53:31.236243Z	[2mbuild/client/[22m[2massets/[22m[36mentry.client-Bj2xywj0.js        [39m[1m[2m  3.77 kB[22m[1m[22m[2m │ gzip:  1.43 kB[22m
2025-11-17T14:53:31.236454Z	[2mbuild/client/[22m[2massets/[22m[36muniversities._slug-kwuJJ6OJ.js  [39m[1m[2m  5.97 kB[22m[1m[22m[2m │ gzip:  1.98 kB[22m
2025-11-17T14:53:31.236557Z	[2mbuild/client/[22m[2massets/[22m[36mapply-DHNGyZsk.js               [39m[1m[2m  6.52 kB[22m[1m[22m[2m │ gzip:  1.87 kB[22m
2025-11-17T14:53:31.236662Z	[2mbuild/client/[22m[2massets/[22m[36mjsx-runtime-56DGgGmo.js         [39m[1m[2m  8.11 kB[22m[1m[22m[2m │ gzip:  3.05 kB[22m
2025-11-17T14:53:31.236791Z	[2mbuild/client/[22m[2massets/[22m[36mroot-BdJ-sK2p.js                [39m[1m[2m  8.52 kB[22m[1m[22m[2m │ gzip:  3.06 kB[22m
2025-11-17T14:53:31.237015Z	[2mbuild/client/[22m[2massets/[22m[36m_index-CkAB__76.js              [39m[1m[2m 10.31 kB[22m[1m[22m[2m │ gzip:  3.61 kB[22m
2025-11-17T14:53:31.237097Z	[2mbuild/client/[22m[2massets/[22m[36mcomponents-BZLQ8qXr.js          [39m[1m[2m248.00 kB[22m[1m[22m[2m │ gzip: 80.11 kB[22m
2025-11-17T14:53:31.237328Z	[32m✓ built in 1.68s[39m
2025-11-17T14:53:31.263126Z	[36mvite v5.4.21 [32mbuilding SSR bundle for production...[36m[39m
2025-11-17T14:53:31.26509Z	transforming...
2025-11-17T14:53:31.381052Z	[32m✓[39m 22 modules transformed.
2025-11-17T14:53:31.406389Z	rendering chunks...
2025-11-17T14:53:31.407944Z	[2mbuild/server/[22m[32m.vite/manifest.json           [39m[1m[2m 0.37 kB[22m[1m[22m
2025-11-17T14:53:31.408173Z	[2mbuild/server/[22m[2massets/[22m[35mtailwind-D2ofO45_.css  [39m[1m[2m23.48 kB[22m[1m[22m
2025-11-17T14:53:31.408361Z	[2mbuild/server/[22m[36mindex.js                      [39m[1m[2m61.06 kB[22m[1m[22m
2025-11-17T14:53:31.409107Z	[32m✓ built in 146ms[39m
2025-11-17T14:53:31.428283Z	sh: 1: xcopy: not found
2025-11-17T14:53:31.439344Z	Failed: Error while executing user command. Exited with error code: 127
2025-11-17T14:53:31.44969Z	Failed: build command exited with code: 1
2025-11-17T14:53:32.880949Z	Failed: error occurred while running build command
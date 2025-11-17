2025-11-17T14:38:32.896272Z	Cloning repository...
2025-11-17T14:38:33.554203Z	From https://github.com/mathwaksu-byte/MATHWA
2025-11-17T14:38:33.554741Z	 * branch            265c6d8739ba0316fdb9cf6406190b233d06aa4f -> FETCH_HEAD
2025-11-17T14:38:33.55485Z	
2025-11-17T14:38:33.588007Z	HEAD is now at 265c6d8 client
2025-11-17T14:38:33.588478Z	
2025-11-17T14:38:33.672474Z	
2025-11-17T14:38:33.672937Z	Using v2 root directory strategy
2025-11-17T14:38:33.695465Z	Success: Finished cloning repository files
2025-11-17T14:38:35.665305Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-11-17T14:38:35.665973Z	
2025-11-17T14:38:36.783807Z	No wrangler.toml file found. Continuing.
2025-11-17T14:38:36.857846Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2025-11-17T14:38:36.858473Z	Installing project dependencies: npm clean-install --progress=false
2025-11-17T14:38:40.450918Z	npm warn deprecated rollup-plugin-inject@3.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-inject.
2025-11-17T14:38:40.563369Z	npm warn deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
2025-11-17T14:38:40.564617Z	npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
2025-11-17T14:38:41.639156Z	npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
2025-11-17T14:38:43.001897Z	npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
2025-11-17T14:38:43.325952Z	npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
2025-11-17T14:38:43.815488Z	npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
2025-11-17T14:38:46.573402Z	npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
2025-11-17T14:38:49.791162Z	
2025-11-17T14:38:49.791403Z	added 922 packages, and audited 923 packages in 12s
2025-11-17T14:38:49.791553Z	
2025-11-17T14:38:49.791714Z	278 packages are looking for funding
2025-11-17T14:38:49.791821Z	  run `npm fund` for details
2025-11-17T14:38:49.840603Z	
2025-11-17T14:38:49.84094Z	8 moderate severity vulnerabilities
2025-11-17T14:38:49.841189Z	
2025-11-17T14:38:49.841284Z	To address issues that do not require attention, run:
2025-11-17T14:38:49.841386Z	  npm audit fix
2025-11-17T14:38:49.841516Z	
2025-11-17T14:38:49.841655Z	Some issues need review, and may require choosing
2025-11-17T14:38:49.841778Z	a different dependency.
2025-11-17T14:38:49.841878Z	
2025-11-17T14:38:49.84199Z	Run `npm audit` for details.
2025-11-17T14:38:49.872312Z	Executing user command: npm run build
2025-11-17T14:38:50.290968Z	
2025-11-17T14:38:50.29133Z	> mathwa-client@1.0.0 build
2025-11-17T14:38:50.291438Z	> remix vite:build
2025-11-17T14:38:50.291582Z	
2025-11-17T14:38:51.031662Z	[33mThe CJS build of Vite's Node API is deprecated. See https://vite.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.[39m
2025-11-17T14:38:51.366301Z	[7m[33m warn [39m[27m Route discovery/manifest behavior is changing in React Router v7
2025-11-17T14:38:51.366557Z	[33m┃[39m [90mYou can use the `v3_lazyRouteDiscovery` future flag to opt-in early.[39m
2025-11-17T14:38:51.366963Z	[33m┃[39m [90m-> https://remix.run/docs/en/2.13.1/start/future-flags#v3_lazyRouteDiscovery[39m
2025-11-17T14:38:51.367079Z	[33m┗[39m
2025-11-17T14:38:51.367144Z	[7m[33m warn [39m[27m Data fetching is changing to a single fetch in React Router v7
2025-11-17T14:38:51.367206Z	[33m┃[39m [90mYou can use the `v3_singleFetch` future flag to opt-in early.[39m
2025-11-17T14:38:51.36727Z	[33m┃[39m [90m-> https://remix.run/docs/en/2.13.1/start/future-flags#v3_singleFetch[39m
2025-11-17T14:38:51.367341Z	[33m┗[39m
2025-11-17T14:38:51.673738Z	[36mvite v5.4.21 [32mbuilding for production...[36m[39m
2025-11-17T14:38:51.717023Z	transforming...
2025-11-17T14:38:53.209836Z	[32m✓[39m 106 modules transformed.
2025-11-17T14:38:53.306719Z	rendering chunks...
2025-11-17T14:38:53.401414Z	computing gzip size...
2025-11-17T14:38:53.412984Z	[2mbuild/client/[22m[32m.vite/manifest.json                    [39m[1m[2m  2.77 kB[22m[1m[22m[2m │ gzip:  0.55 kB[22m
2025-11-17T14:38:53.413263Z	[2mbuild/client/[22m[2massets/[22m[35mtailwind-D2ofO45_.css           [39m[1m[2m 23.48 kB[22m[1m[22m[2m │ gzip:  4.84 kB[22m
2025-11-17T14:38:53.413401Z	[2mbuild/client/[22m[2massets/[22m[36msitemap_._xml-CSxRPO1x.js       [39m[1m[2m  0.05 kB[22m[1m[22m[2m │ gzip:  0.07 kB[22m
2025-11-17T14:38:53.413651Z	[2mbuild/client/[22m[2massets/[22m[36mrobots_._txt-CSxRPO1x.js        [39m[1m[2m  0.05 kB[22m[1m[22m[2m │ gzip:  0.07 kB[22m
2025-11-17T14:38:53.413781Z	[2mbuild/client/[22m[2massets/[22m[36mabout-BD1oSkzc.js               [39m[1m[2m  1.95 kB[22m[1m[22m[2m │ gzip:  0.86 kB[22m
2025-11-17T14:38:53.414148Z	[2mbuild/client/[22m[2massets/[22m[36mentry.client-Bj2xywj0.js        [39m[1m[2m  3.77 kB[22m[1m[22m[2m │ gzip:  1.43 kB[22m
2025-11-17T14:38:53.41433Z	[2mbuild/client/[22m[2massets/[22m[36muniversities._slug-kwuJJ6OJ.js  [39m[1m[2m  5.97 kB[22m[1m[22m[2m │ gzip:  1.98 kB[22m
2025-11-17T14:38:53.414465Z	[2mbuild/client/[22m[2massets/[22m[36mapply-DHNGyZsk.js               [39m[1m[2m  6.52 kB[22m[1m[22m[2m │ gzip:  1.87 kB[22m
2025-11-17T14:38:53.414633Z	[2mbuild/client/[22m[2massets/[22m[36mjsx-runtime-56DGgGmo.js         [39m[1m[2m  8.11 kB[22m[1m[22m[2m │ gzip:  3.05 kB[22m
2025-11-17T14:38:53.414773Z	[2mbuild/client/[22m[2massets/[22m[36mroot-BdJ-sK2p.js                [39m[1m[2m  8.52 kB[22m[1m[22m[2m │ gzip:  3.06 kB[22m
2025-11-17T14:38:53.414906Z	[2mbuild/client/[22m[2massets/[22m[36m_index-CkAB__76.js              [39m[1m[2m 10.31 kB[22m[1m[22m[2m │ gzip:  3.61 kB[22m
2025-11-17T14:38:53.415006Z	[2mbuild/client/[22m[2massets/[22m[36mcomponents-BZLQ8qXr.js          [39m[1m[2m248.00 kB[22m[1m[22m[2m │ gzip: 80.11 kB[22m
2025-11-17T14:38:53.415118Z	[32m✓ built in 1.72s[39m
2025-11-17T14:38:53.443747Z	[36mvite v5.4.21 [32mbuilding SSR bundle for production...[36m[39m
2025-11-17T14:38:53.445736Z	transforming...
2025-11-17T14:38:53.553183Z	[32m✓[39m 22 modules transformed.
2025-11-17T14:38:53.578994Z	rendering chunks...
2025-11-17T14:38:53.581141Z	[2mbuild/server/[22m[32m.vite/manifest.json           [39m[1m[2m 0.37 kB[22m[1m[22m
2025-11-17T14:38:53.581415Z	[2mbuild/server/[22m[2massets/[22m[35mtailwind-D2ofO45_.css  [39m[1m[2m23.48 kB[22m[1m[22m
2025-11-17T14:38:53.581583Z	[2mbuild/server/[22m[36mindex.js                      [39m[1m[2m61.06 kB[22m[1m[22m
2025-11-17T14:38:53.582595Z	[32m✓ built in 138ms[39m
2025-11-17T14:38:53.625787Z	Finished
2025-11-17T14:38:54.584835Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-11-17T14:38:54.585444Z	
2025-11-17T14:38:55.690547Z	No wrangler.toml file found. Continuing.
2025-11-17T14:38:55.69129Z	Found _worker.js in output directory. Uploading.
2025-11-17T14:38:55.69754Z	 ⛅️ wrangler 3.101.0
2025-11-17T14:38:55.69778Z	-------------------
2025-11-17T14:38:56.771725Z	[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mBuild failed with 1 error:[0m
2025-11-17T14:38:56.772323Z	
2025-11-17T14:38:56.772505Z	  [31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mCould not resolve "../build/server/index.js"[0m
2025-11-17T14:38:56.772679Z	  
2025-11-17T14:38:56.772755Z	      _worker.js:2:23:
2025-11-17T14:38:56.772833Z	  [37m      2 │ import * as build from [32m'../build/server/index.js'[37m
2025-11-17T14:38:56.772895Z	          ╵                        [32m~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
2025-11-17T14:38:56.772965Z	  
2025-11-17T14:38:56.773095Z	  
2025-11-17T14:38:56.773187Z	
2025-11-17T14:38:56.773426Z	
2025-11-17T14:38:56.776401Z	
2025-11-17T14:38:56.778099Z	[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mBuild failed with 1 error:[0m
2025-11-17T14:38:56.778253Z	
2025-11-17T14:38:56.77838Z	  [31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mCould not resolve "../build/server/index.js"[0m
2025-11-17T14:38:56.778483Z	  
2025-11-17T14:38:56.778592Z	      _worker.js:2:23:
2025-11-17T14:38:56.778696Z	  [37m      2 │ import * as build from [32m'../build/server/index.js'[37m
2025-11-17T14:38:56.778792Z	          ╵                        [32m~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
2025-11-17T14:38:56.778912Z	  
2025-11-17T14:38:56.779026Z	  
2025-11-17T14:38:56.779117Z	
2025-11-17T14:38:56.779189Z	
2025-11-17T14:38:56.804746Z	🪵  Logs were written to "/root/.config/.wrangler/logs/wrangler-2025-11-17_14-38-56_357.log"
2025-11-17T14:38:56.816257Z	Failed building Pages Functions.
2025-11-17T14:38:58.13137Z	Failed: generating Pages Functions failed. Check the logs above for more information. If this continues for an unknown reason, contact support: https://cfl.re/3WgEyrH
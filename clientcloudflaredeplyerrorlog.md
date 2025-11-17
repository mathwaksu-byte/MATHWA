2025-11-17T15:15:54.682663Z	Cloning repository...
2025-11-17T15:15:55.318759Z	From https://github.com/mathwaksu-byte/MATHWA
2025-11-17T15:15:55.319423Z	 * branch            df130dce65dea0c877eb3a9db9c41863fe72ce88 -> FETCH_HEAD
2025-11-17T15:15:55.319535Z	
2025-11-17T15:15:55.353023Z	HEAD is now at df130dc clientclient
2025-11-17T15:15:55.35351Z	
2025-11-17T15:15:55.435339Z	
2025-11-17T15:15:55.435802Z	Using v2 root directory strategy
2025-11-17T15:15:55.46047Z	Success: Finished cloning repository files
2025-11-17T15:15:57.348582Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-11-17T15:15:57.349274Z	
2025-11-17T15:15:58.494915Z	No wrangler.toml file found. Continuing.
2025-11-17T15:15:58.560092Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2025-11-17T15:15:58.560745Z	Installing project dependencies: npm clean-install --progress=false
2025-11-17T15:16:01.784881Z	npm warn deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
2025-11-17T15:16:01.881314Z	npm warn deprecated rollup-plugin-inject@3.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-inject.
2025-11-17T15:16:01.969639Z	npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
2025-11-17T15:16:03.008979Z	npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
2025-11-17T15:16:04.313756Z	npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
2025-11-17T15:16:04.449337Z	npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
2025-11-17T15:16:04.878781Z	npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
2025-11-17T15:16:07.517725Z	npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
2025-11-17T15:16:10.545739Z	
2025-11-17T15:16:10.546029Z	added 922 packages, and audited 923 packages in 12s
2025-11-17T15:16:10.546165Z	
2025-11-17T15:16:10.546244Z	278 packages are looking for funding
2025-11-17T15:16:10.546308Z	  run `npm fund` for details
2025-11-17T15:16:10.591502Z	
2025-11-17T15:16:10.591901Z	8 moderate severity vulnerabilities
2025-11-17T15:16:10.592043Z	
2025-11-17T15:16:10.592214Z	To address issues that do not require attention, run:
2025-11-17T15:16:10.59238Z	  npm audit fix
2025-11-17T15:16:10.592581Z	
2025-11-17T15:16:10.592698Z	Some issues need review, and may require choosing
2025-11-17T15:16:10.592808Z	a different dependency.
2025-11-17T15:16:10.593158Z	
2025-11-17T15:16:10.5936Z	Run `npm audit` for details.
2025-11-17T15:16:10.624952Z	Executing user command: npm run build
2025-11-17T15:16:11.008879Z	
2025-11-17T15:16:11.009126Z	> mathwa-client@1.0.0 build
2025-11-17T15:16:11.0093Z	> remix vite:build && node -e "const fs=require('fs'); fs.mkdirSync('build/server',{recursive:true}); fs.copyFileSync('build/server/index.js','build/server/index.js'); fs.copyFileSync('build/client/_worker.js','build/_worker.js');"
2025-11-17T15:16:11.009453Z	
2025-11-17T15:16:11.705772Z	[33mThe CJS build of Vite's Node API is deprecated. See https://vite.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.[39m
2025-11-17T15:16:12.011705Z	[7m[33m warn [39m[27m Route discovery/manifest behavior is changing in React Router v7
2025-11-17T15:16:12.012479Z	[33m┃[39m [90mYou can use the `v3_lazyRouteDiscovery` future flag to opt-in early.[39m
2025-11-17T15:16:12.012616Z	[33m┃[39m [90m-> https://remix.run/docs/en/2.13.1/start/future-flags#v3_lazyRouteDiscovery[39m
2025-11-17T15:16:12.012701Z	[33m┗[39m
2025-11-17T15:16:12.012861Z	[7m[33m warn [39m[27m Data fetching is changing to a single fetch in React Router v7
2025-11-17T15:16:12.013081Z	[33m┃[39m [90mYou can use the `v3_singleFetch` future flag to opt-in early.[39m
2025-11-17T15:16:12.013263Z	[33m┃[39m [90m-> https://remix.run/docs/en/2.13.1/start/future-flags#v3_singleFetch[39m
2025-11-17T15:16:12.013398Z	[33m┗[39m
2025-11-17T15:16:12.303423Z	[36mvite v5.4.21 [32mbuilding for production...[36m[39m
2025-11-17T15:16:12.345043Z	transforming...
2025-11-17T15:16:13.722023Z	[32m✓[39m 106 modules transformed.
2025-11-17T15:16:13.816861Z	rendering chunks...
2025-11-17T15:16:13.902252Z	computing gzip size...
2025-11-17T15:16:13.913372Z	[2mbuild/client/[22m[32m.vite/manifest.json                    [39m[1m[2m  2.77 kB[22m[1m[22m[2m │ gzip:  0.55 kB[22m
2025-11-17T15:16:13.913631Z	[2mbuild/client/[22m[2massets/[22m[35mtailwind-D2ofO45_.css           [39m[1m[2m 23.48 kB[22m[1m[22m[2m │ gzip:  4.84 kB[22m
2025-11-17T15:16:13.913798Z	[2mbuild/client/[22m[2massets/[22m[36msitemap_._xml-CSxRPO1x.js       [39m[1m[2m  0.05 kB[22m[1m[22m[2m │ gzip:  0.07 kB[22m
2025-11-17T15:16:13.913968Z	[2mbuild/client/[22m[2massets/[22m[36mrobots_._txt-CSxRPO1x.js        [39m[1m[2m  0.05 kB[22m[1m[22m[2m │ gzip:  0.07 kB[22m
2025-11-17T15:16:13.91416Z	[2mbuild/client/[22m[2massets/[22m[36mabout-BD1oSkzc.js               [39m[1m[2m  1.95 kB[22m[1m[22m[2m │ gzip:  0.86 kB[22m
2025-11-17T15:16:13.914305Z	[2mbuild/client/[22m[2massets/[22m[36mentry.client-Bj2xywj0.js        [39m[1m[2m  3.77 kB[22m[1m[22m[2m │ gzip:  1.43 kB[22m
2025-11-17T15:16:13.914469Z	[2mbuild/client/[22m[2massets/[22m[36muniversities._slug-kwuJJ6OJ.js  [39m[1m[2m  5.97 kB[22m[1m[22m[2m │ gzip:  1.98 kB[22m
2025-11-17T15:16:13.914601Z	[2mbuild/client/[22m[2massets/[22m[36mapply-DHNGyZsk.js               [39m[1m[2m  6.52 kB[22m[1m[22m[2m │ gzip:  1.87 kB[22m
2025-11-17T15:16:13.914711Z	[2mbuild/client/[22m[2massets/[22m[36mjsx-runtime-56DGgGmo.js         [39m[1m[2m  8.11 kB[22m[1m[22m[2m │ gzip:  3.05 kB[22m
2025-11-17T15:16:13.914884Z	[2mbuild/client/[22m[2massets/[22m[36mroot-BdJ-sK2p.js                [39m[1m[2m  8.52 kB[22m[1m[22m[2m │ gzip:  3.06 kB[22m
2025-11-17T15:16:13.915013Z	[2mbuild/client/[22m[2massets/[22m[36m_index-CkAB__76.js              [39m[1m[2m 10.31 kB[22m[1m[22m[2m │ gzip:  3.61 kB[22m
2025-11-17T15:16:13.91515Z	[2mbuild/client/[22m[2massets/[22m[36mcomponents-BZLQ8qXr.js          [39m[1m[2m248.00 kB[22m[1m[22m[2m │ gzip: 80.11 kB[22m
2025-11-17T15:16:13.915261Z	[32m✓ built in 1.59s[39m
2025-11-17T15:16:13.940008Z	[36mvite v5.4.21 [32mbuilding SSR bundle for production...[36m[39m
2025-11-17T15:16:13.941776Z	transforming...
2025-11-17T15:16:14.042633Z	[32m✓[39m 22 modules transformed.
2025-11-17T15:16:14.067747Z	rendering chunks...
2025-11-17T15:16:14.069286Z	[2mbuild/server/[22m[32m.vite/manifest.json           [39m[1m[2m 0.37 kB[22m[1m[22m
2025-11-17T15:16:14.06958Z	[2mbuild/server/[22m[2massets/[22m[35mtailwind-D2ofO45_.css  [39m[1m[2m23.48 kB[22m[1m[22m
2025-11-17T15:16:14.069774Z	[2mbuild/server/[22m[36mindex.js                      [39m[1m[2m61.06 kB[22m[1m[22m
2025-11-17T15:16:14.070575Z	[32m✓ built in 130ms[39m
2025-11-17T15:16:14.134243Z	Finished
2025-11-17T15:16:15.032591Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-11-17T15:16:15.033226Z	
2025-11-17T15:16:16.137954Z	No wrangler.toml file found. Continuing.
2025-11-17T15:16:16.138573Z	Found _worker.js in output directory. Uploading.
2025-11-17T15:16:16.143986Z	 ⛅️ wrangler 3.101.0
2025-11-17T15:16:16.144194Z	-------------------
2025-11-17T15:16:17.148141Z	[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mBuild failed with 1 error:[0m
2025-11-17T15:16:17.14865Z	
2025-11-17T15:16:17.148787Z	  [31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mCould not resolve "./server/index.js"[0m
2025-11-17T15:16:17.148898Z	  
2025-11-17T15:16:17.149154Z	      _worker.js:2:23:
2025-11-17T15:16:17.149321Z	  [37m      2 │ import * as build from [32m'./server/index.js'[37m
2025-11-17T15:16:17.149475Z	          ╵                        [32m~~~~~~~~~~~~~~~~~~~[0m
2025-11-17T15:16:17.149611Z	  
2025-11-17T15:16:17.149745Z	  
2025-11-17T15:16:17.149821Z	
2025-11-17T15:16:17.149952Z	
2025-11-17T15:16:17.151653Z	
2025-11-17T15:16:17.153199Z	[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mBuild failed with 1 error:[0m
2025-11-17T15:16:17.153341Z	
2025-11-17T15:16:17.153419Z	  [31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mCould not resolve "./server/index.js"[0m
2025-11-17T15:16:17.153482Z	  
2025-11-17T15:16:17.15354Z	      _worker.js:2:23:
2025-11-17T15:16:17.153597Z	  [37m      2 │ import * as build from [32m'./server/index.js'[37m
2025-11-17T15:16:17.153673Z	          ╵                        [32m~~~~~~~~~~~~~~~~~~~[0m
2025-11-17T15:16:17.153744Z	  
2025-11-17T15:16:17.1538Z	  
2025-11-17T15:16:17.153859Z	
2025-11-17T15:16:17.153917Z	
2025-11-17T15:16:17.181534Z	🪵  Logs were written to "/root/.config/.wrangler/logs/wrangler-2025-11-17_15-16-16_736.log"
2025-11-17T15:16:17.19306Z	Failed building Pages Functions.
2025-11-17T15:16:18.5032Z	Failed: generating Pages Functions failed. Check the logs above for more information. If this continues for an unknown reason, contact support: https://cfl.re/3WgEyrH
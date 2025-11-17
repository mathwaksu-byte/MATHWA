2025-11-17T14:58:18.307919Z	Cloning repository...
2025-11-17T14:58:18.941252Z	From https://github.com/mathwaksu-byte/MATHWA
2025-11-17T14:58:18.94173Z	 * branch            dd3eb871f180a3972532135e2a448b2440cd04e7 -> FETCH_HEAD
2025-11-17T14:58:18.941831Z	
2025-11-17T14:58:18.975838Z	HEAD is now at dd3eb87 client
2025-11-17T14:58:18.976284Z	
2025-11-17T14:58:19.056788Z	
2025-11-17T14:58:19.057312Z	Using v2 root directory strategy
2025-11-17T14:58:19.080126Z	Success: Finished cloning repository files
2025-11-17T14:58:20.800361Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-11-17T14:58:20.801516Z	
2025-11-17T14:58:21.913317Z	No wrangler.toml file found. Continuing.
2025-11-17T14:58:21.981623Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2025-11-17T14:58:21.982285Z	Installing project dependencies: npm clean-install --progress=false
2025-11-17T14:58:25.255475Z	npm warn deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
2025-11-17T14:58:25.374618Z	npm warn deprecated rollup-plugin-inject@3.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-inject.
2025-11-17T14:58:25.510295Z	npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
2025-11-17T14:58:26.497149Z	npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
2025-11-17T14:58:27.850289Z	npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
2025-11-17T14:58:27.959831Z	npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
2025-11-17T14:58:28.499445Z	npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
2025-11-17T14:58:31.079424Z	npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
2025-11-17T14:58:34.131794Z	
2025-11-17T14:58:34.132124Z	added 922 packages, and audited 923 packages in 12s
2025-11-17T14:58:34.132294Z	
2025-11-17T14:58:34.132423Z	278 packages are looking for funding
2025-11-17T14:58:34.132541Z	  run `npm fund` for details
2025-11-17T14:58:34.177706Z	
2025-11-17T14:58:34.178333Z	8 moderate severity vulnerabilities
2025-11-17T14:58:34.178485Z	
2025-11-17T14:58:34.178564Z	To address issues that do not require attention, run:
2025-11-17T14:58:34.178624Z	  npm audit fix
2025-11-17T14:58:34.17869Z	
2025-11-17T14:58:34.178747Z	Some issues need review, and may require choosing
2025-11-17T14:58:34.178811Z	a different dependency.
2025-11-17T14:58:34.178899Z	
2025-11-17T14:58:34.178973Z	Run `npm audit` for details.
2025-11-17T14:58:34.208714Z	Executing user command: npm run build
2025-11-17T14:58:34.593057Z	
2025-11-17T14:58:34.593378Z	> mathwa-client@1.0.0 build
2025-11-17T14:58:34.593553Z	> remix vite:build && node -e "const fs=require('fs'); fs.copyFileSync('build/client/_worker.js','build/_worker.js');"
2025-11-17T14:58:34.593676Z	
2025-11-17T14:58:35.293558Z	[33mThe CJS build of Vite's Node API is deprecated. See https://vite.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.[39m
2025-11-17T14:58:35.583286Z	[7m[33m warn [39m[27m Route discovery/manifest behavior is changing in React Router v7
2025-11-17T14:58:35.58388Z	[33m┃[39m [90mYou can use the `v3_lazyRouteDiscovery` future flag to opt-in early.[39m
2025-11-17T14:58:35.58406Z	[33m┃[39m [90m-> https://remix.run/docs/en/2.13.1/start/future-flags#v3_lazyRouteDiscovery[39m
2025-11-17T14:58:35.584411Z	[33m┗[39m
2025-11-17T14:58:35.584498Z	[7m[33m warn [39m[27m Data fetching is changing to a single fetch in React Router v7
2025-11-17T14:58:35.584605Z	[33m┃[39m [90mYou can use the `v3_singleFetch` future flag to opt-in early.[39m
2025-11-17T14:58:35.584909Z	[33m┃[39m [90m-> https://remix.run/docs/en/2.13.1/start/future-flags#v3_singleFetch[39m
2025-11-17T14:58:35.585079Z	[33m┗[39m
2025-11-17T14:58:35.868964Z	[36mvite v5.4.21 [32mbuilding for production...[36m[39m
2025-11-17T14:58:35.913298Z	transforming...
2025-11-17T14:58:37.378932Z	[32m✓[39m 106 modules transformed.
2025-11-17T14:58:37.476729Z	rendering chunks...
2025-11-17T14:58:37.571546Z	computing gzip size...
2025-11-17T14:58:37.58315Z	[2mbuild/client/[22m[32m.vite/manifest.json                    [39m[1m[2m  2.77 kB[22m[1m[22m[2m │ gzip:  0.55 kB[22m
2025-11-17T14:58:37.583459Z	[2mbuild/client/[22m[2massets/[22m[35mtailwind-D2ofO45_.css           [39m[1m[2m 23.48 kB[22m[1m[22m[2m │ gzip:  4.84 kB[22m
2025-11-17T14:58:37.583579Z	[2mbuild/client/[22m[2massets/[22m[36msitemap_._xml-CSxRPO1x.js       [39m[1m[2m  0.05 kB[22m[1m[22m[2m │ gzip:  0.07 kB[22m
2025-11-17T14:58:37.583666Z	[2mbuild/client/[22m[2massets/[22m[36mrobots_._txt-CSxRPO1x.js        [39m[1m[2m  0.05 kB[22m[1m[22m[2m │ gzip:  0.07 kB[22m
2025-11-17T14:58:37.583941Z	[2mbuild/client/[22m[2massets/[22m[36mabout-BD1oSkzc.js               [39m[1m[2m  1.95 kB[22m[1m[22m[2m │ gzip:  0.86 kB[22m
2025-11-17T14:58:37.584031Z	[2mbuild/client/[22m[2massets/[22m[36mentry.client-Bj2xywj0.js        [39m[1m[2m  3.77 kB[22m[1m[22m[2m │ gzip:  1.43 kB[22m
2025-11-17T14:58:37.584186Z	[2mbuild/client/[22m[2massets/[22m[36muniversities._slug-kwuJJ6OJ.js  [39m[1m[2m  5.97 kB[22m[1m[22m[2m │ gzip:  1.98 kB[22m
2025-11-17T14:58:37.584374Z	[2mbuild/client/[22m[2massets/[22m[36mapply-DHNGyZsk.js               [39m[1m[2m  6.52 kB[22m[1m[22m[2m │ gzip:  1.87 kB[22m
2025-11-17T14:58:37.584536Z	[2mbuild/client/[22m[2massets/[22m[36mjsx-runtime-56DGgGmo.js         [39m[1m[2m  8.11 kB[22m[1m[22m[2m │ gzip:  3.05 kB[22m
2025-11-17T14:58:37.584637Z	[2mbuild/client/[22m[2massets/[22m[36mroot-BdJ-sK2p.js                [39m[1m[2m  8.52 kB[22m[1m[22m[2m │ gzip:  3.06 kB[22m
2025-11-17T14:58:37.584911Z	[2mbuild/client/[22m[2massets/[22m[36m_index-CkAB__76.js              [39m[1m[2m 10.31 kB[22m[1m[22m[2m │ gzip:  3.61 kB[22m
2025-11-17T14:58:37.585057Z	[2mbuild/client/[22m[2massets/[22m[36mcomponents-BZLQ8qXr.js          [39m[1m[2m248.00 kB[22m[1m[22m[2m │ gzip: 80.11 kB[22m
2025-11-17T14:58:37.585138Z	[32m✓ built in 1.69s[39m
2025-11-17T14:58:37.610197Z	[36mvite v5.4.21 [32mbuilding SSR bundle for production...[36m[39m
2025-11-17T14:58:37.612021Z	transforming...
2025-11-17T14:58:37.713179Z	[32m✓[39m 22 modules transformed.
2025-11-17T14:58:37.737602Z	rendering chunks...
2025-11-17T14:58:37.73928Z	[2mbuild/server/[22m[32m.vite/manifest.json           [39m[1m[2m 0.37 kB[22m[1m[22m
2025-11-17T14:58:37.73958Z	[2mbuild/server/[22m[2massets/[22m[35mtailwind-D2ofO45_.css  [39m[1m[2m23.48 kB[22m[1m[22m
2025-11-17T14:58:37.739729Z	[2mbuild/server/[22m[36mindex.js                      [39m[1m[2m61.06 kB[22m[1m[22m
2025-11-17T14:58:37.740571Z	[32m✓ built in 130ms[39m
2025-11-17T14:58:37.822474Z	Finished
2025-11-17T14:58:38.696362Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-11-17T14:58:38.697012Z	
2025-11-17T14:58:39.797886Z	No wrangler.toml file found. Continuing.
2025-11-17T14:58:39.798549Z	Found _worker.js in output directory. Uploading.
2025-11-17T14:58:39.804637Z	 ⛅️ wrangler 3.101.0
2025-11-17T14:58:39.804809Z	-------------------
2025-11-17T14:58:40.812527Z	[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mBuild failed with 1 error:[0m
2025-11-17T14:58:40.813184Z	
2025-11-17T14:58:40.813316Z	  [31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mCould not resolve "./server/index.js"[0m
2025-11-17T14:58:40.813427Z	  
2025-11-17T14:58:40.813602Z	      _worker.js:2:23:
2025-11-17T14:58:40.813805Z	  [37m      2 │ import * as build from [32m'./server/index.js'[37m
2025-11-17T14:58:40.813952Z	          ╵                        [32m~~~~~~~~~~~~~~~~~~~[0m
2025-11-17T14:58:40.814073Z	  
2025-11-17T14:58:40.814175Z	  
2025-11-17T14:58:40.814291Z	
2025-11-17T14:58:40.814402Z	
2025-11-17T14:58:40.816313Z	
2025-11-17T14:58:40.817862Z	[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mBuild failed with 1 error:[0m
2025-11-17T14:58:40.818053Z	
2025-11-17T14:58:40.818189Z	  [31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mCould not resolve "./server/index.js"[0m
2025-11-17T14:58:40.818315Z	  
2025-11-17T14:58:40.818428Z	      _worker.js:2:23:
2025-11-17T14:58:40.818546Z	  [37m      2 │ import * as build from [32m'./server/index.js'[37m
2025-11-17T14:58:40.818698Z	          ╵                        [32m~~~~~~~~~~~~~~~~~~~[0m
2025-11-17T14:58:40.818826Z	  
2025-11-17T14:58:40.818966Z	  
2025-11-17T14:58:40.819068Z	
2025-11-17T14:58:40.819166Z	
2025-11-17T14:58:40.878116Z	🪵  Logs were written to "/root/.config/.wrangler/logs/wrangler-2025-11-17_14-58-40_414.log"
2025-11-17T14:58:40.890252Z	Failed building Pages Functions.
2025-11-17T14:58:42.232856Z	Failed: generating Pages Functions failed. Check the logs above for more information. If this continues for an unknown reason, contact support: https://cfl.re/3WgEyrH
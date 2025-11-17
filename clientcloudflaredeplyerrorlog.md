2025-11-17T13:13:53.643556Z	Cloning repository...
2025-11-17T13:13:54.218068Z	From https://github.com/mathwaksu-byte/MATHWA
2025-11-17T13:13:54.21846Z	 * branch            6df3c354c68bed87e8f539b1eac8652db7f51c78 -> FETCH_HEAD
2025-11-17T13:13:54.218564Z	
2025-11-17T13:13:54.251058Z	HEAD is now at 6df3c35 api
2025-11-17T13:13:54.251687Z	
2025-11-17T13:13:54.328606Z	
2025-11-17T13:13:54.32903Z	Using v2 root directory strategy
2025-11-17T13:13:54.352187Z	Success: Finished cloning repository files
2025-11-17T13:13:56.153229Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-11-17T13:13:56.153787Z	
2025-11-17T13:13:57.247902Z	No wrangler.toml file found. Continuing.
2025-11-17T13:13:57.248177Z	No build command specified. Skipping build step.
2025-11-17T13:13:57.248716Z	Found Functions directory at /functions. Uploading.
2025-11-17T13:13:57.25724Z	 ⛅️ wrangler 3.101.0
2025-11-17T13:13:57.257411Z	-------------------
2025-11-17T13:13:58.245476Z	[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mBuild failed with 2 errors:[0m
2025-11-17T13:13:58.245995Z	
2025-11-17T13:13:58.246122Z	  [31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mCould not resolve "@remix-run/cloudflare"[0m
2025-11-17T13:13:58.246192Z	  
2025-11-17T13:13:58.246248Z	      [[path]].ts:1:43:
2025-11-17T13:13:58.246304Z	  [37m      1 │ import { createPagesFunctionHandler } from [32m'@remix-run/cloudflare'[37m
2025-11-17T13:13:58.24637Z	          ╵                                            [32m~~~~~~~~~~~~~~~~~~~~~~~[0m
2025-11-17T13:13:58.246607Z	  
2025-11-17T13:13:58.247294Z	    You can mark the path "@remix-run/cloudflare" as external to exclude it from the bundle, which will remove this error.
2025-11-17T13:13:58.247368Z	  
2025-11-17T13:13:58.247467Z	  
2025-11-17T13:13:58.247528Z	  [31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mCould not resolve "../build/server/index.js"[0m
2025-11-17T13:13:58.247595Z	  
2025-11-17T13:13:58.247655Z	      [[path]].ts:2:23:
2025-11-17T13:13:58.247733Z	  [37m      2 │ import * as build from [32m'../build/server/index.js'[37m
2025-11-17T13:13:58.247834Z	          ╵                        [32m~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
2025-11-17T13:13:58.247954Z	  
2025-11-17T13:13:58.248053Z	  
2025-11-17T13:13:58.24815Z	
2025-11-17T13:13:58.248248Z	
2025-11-17T13:13:58.249622Z	
2025-11-17T13:13:58.251459Z	[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mBuild failed with 2 errors:[0m
2025-11-17T13:13:58.251627Z	
2025-11-17T13:13:58.251774Z	  [31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mCould not resolve "@remix-run/cloudflare"[0m
2025-11-17T13:13:58.251901Z	  
2025-11-17T13:13:58.251994Z	      [[path]].ts:1:43:
2025-11-17T13:13:58.252075Z	  [37m      1 │ import { createPagesFunctionHandler } from [32m'@remix-run/cloudflare'[37m
2025-11-17T13:13:58.252135Z	          ╵                                            [32m~~~~~~~~~~~~~~~~~~~~~~~[0m
2025-11-17T13:13:58.252239Z	  
2025-11-17T13:13:58.252327Z	    You can mark the path "@remix-run/cloudflare" as external to exclude it from the bundle, which will remove this error.
2025-11-17T13:13:58.252411Z	  
2025-11-17T13:13:58.252509Z	  
2025-11-17T13:13:58.252636Z	  [31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mCould not resolve "../build/server/index.js"[0m
2025-11-17T13:13:58.252764Z	  
2025-11-17T13:13:58.252889Z	      [[path]].ts:2:23:
2025-11-17T13:13:58.252996Z	  [37m      2 │ import * as build from [32m'../build/server/index.js'[37m
2025-11-17T13:13:58.253155Z	          ╵                        [32m~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
2025-11-17T13:13:58.253272Z	  
2025-11-17T13:13:58.253372Z	  
2025-11-17T13:13:58.253472Z	
2025-11-17T13:13:58.253624Z	
2025-11-17T13:13:58.33377Z	🪵  Logs were written to "/root/.config/.wrangler/logs/wrangler-2025-11-17_13-13-57_854.log"
2025-11-17T13:13:58.345358Z	Failed building Pages Functions.
2025-11-17T13:13:59.674946Z	Failed: generating Pages Functions failed. Check the logs above for more information. If this continues for an unknown reason, contact support: https://cfl.re/3WgEyrH
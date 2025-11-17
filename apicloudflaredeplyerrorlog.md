2025-11-17T13:07:00.734Z	Initializing build environment...
2025-11-17T13:07:00.734Z	Initializing build environment...
2025-11-17T13:07:19.296Z	Success: Finished initializing build environment
2025-11-17T13:07:19.753Z	Cloning repository...
2025-11-17T13:07:21.093Z	Restoring from dependencies cache
2025-11-17T13:07:21.095Z	Restoring from build output cache
2025-11-17T13:07:21.097Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2025-11-17T13:07:21.385Z	Installing project dependencies: npm clean-install --progress=false
2025-11-17T13:07:23.688Z	npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
2025-11-17T13:07:23.712Z	npm warn deprecated npmlog@5.0.1: This package is no longer supported.
2025-11-17T13:07:23.754Z	npm warn deprecated multer@1.4.5-lts.2: Multer 1.x is impacted by a number of vulnerabilities, which have been patched in 2.x. You should upgrade to the latest 2.x version.
2025-11-17T13:07:23.824Z	npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
2025-11-17T13:07:24.004Z	npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
2025-11-17T13:07:24.083Z	npm warn deprecated gauge@3.0.2: This package is no longer supported.
2025-11-17T13:07:24.108Z	npm warn deprecated are-we-there-yet@2.0.0: This package is no longer supported.
2025-11-17T13:07:30.214Z	
2025-11-17T13:07:30.214Z	added 273 packages, and audited 274 packages in 8s
2025-11-17T13:07:30.214Z	
2025-11-17T13:07:30.214Z	32 packages are looking for funding
2025-11-17T13:07:30.215Z	  run `npm fund` for details
2025-11-17T13:07:30.215Z	
2025-11-17T13:07:30.215Z	found 0 vulnerabilities
2025-11-17T13:07:30.569Z	Executing user build command: npm install && npm run build
2025-11-17T13:07:31.204Z	
2025-11-17T13:07:31.205Z	up to date, audited 274 packages in 470ms
2025-11-17T13:07:31.205Z	
2025-11-17T13:07:31.205Z	32 packages are looking for funding
2025-11-17T13:07:31.205Z	  run `npm fund` for details
2025-11-17T13:07:31.205Z	
2025-11-17T13:07:31.205Z	found 0 vulnerabilities
2025-11-17T13:07:31.426Z	
2025-11-17T13:07:31.426Z	> mathwa-api@1.0.0 build
2025-11-17T13:07:31.426Z	> echo Cloudflare Pages Functions
2025-11-17T13:07:31.426Z	
2025-11-17T13:07:31.430Z	Cloudflare Pages Functions
2025-11-17T13:07:31.439Z	Success: Build command completed
2025-11-17T13:07:31.583Z	Executing user deploy command: npx wrangler deploy
2025-11-17T13:07:34.201Z	npm warn exec The following package was not found and will be installed: wrangler@4.47.0
2025-11-17T13:07:43.527Z	
2025-11-17T13:07:43.527Z	 ⛅️ wrangler 4.47.0
2025-11-17T13:07:43.527Z	───────────────────
2025-11-17T13:07:43.541Z	
2025-11-17T13:07:43.604Z	✘ [ERROR] Missing entry-point to Worker script or to assets directory
2025-11-17T13:07:43.605Z	
2025-11-17T13:07:43.605Z	  
2025-11-17T13:07:43.605Z	  If there is code to deploy, you can either:
2025-11-17T13:07:43.605Z	  - Specify an entry-point to your Worker script via the command line (ex: `npx wrangler deploy src/index.ts`)
2025-11-17T13:07:43.605Z	  - Or create a "wrangler.jsonc" file containing:
2025-11-17T13:07:43.605Z	  
2025-11-17T13:07:43.605Z	  ```
2025-11-17T13:07:43.605Z	  {
2025-11-17T13:07:43.605Z	    "name": "worker-name",
2025-11-17T13:07:43.605Z	    "compatibility_date": "2025-11-17",
2025-11-17T13:07:43.605Z	    "main": "src/index.ts"
2025-11-17T13:07:43.605Z	  }
2025-11-17T13:07:43.605Z	  ```
2025-11-17T13:07:43.605Z	  
2025-11-17T13:07:43.605Z	  
2025-11-17T13:07:43.605Z	  If are uploading a directory of assets, you can either:
2025-11-17T13:07:43.605Z	  - Specify the path to the directory of assets via the command line: (ex: `npx wrangler deploy --assets=./dist`)
2025-11-17T13:07:43.605Z	  - Or create a "wrangler.jsonc" file containing:
2025-11-17T13:07:43.605Z	  
2025-11-17T13:07:43.605Z	  ```
2025-11-17T13:07:43.605Z	  {
2025-11-17T13:07:43.605Z	    "name": "worker-name",
2025-11-17T13:07:43.606Z	    "compatibility_date": "2025-11-17",
2025-11-17T13:07:43.606Z	    "assets": {
2025-11-17T13:07:43.606Z	      "directory": "./dist"
2025-11-17T13:07:43.606Z	    }
2025-11-17T13:07:43.609Z	  }
2025-11-17T13:07:43.609Z	  ```
2025-11-17T13:07:43.609Z	  
2025-11-17T13:07:43.609Z	
2025-11-17T13:07:43.610Z	
2025-11-17T13:07:43.624Z	
2025-11-17T13:07:43.624Z	Cloudflare collects anonymous telemetry about your usage of Wrangler. Learn more at https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler/telemetry.md
2025-11-17T13:07:43.637Z	🪵  Logs were written to "/opt/buildhome/.config/.wrangler/logs/wrangler-2025-11-17_13-07-42_893.log"
2025-11-17T13:07:43.762Z	Failed: error occurred while running deploy command
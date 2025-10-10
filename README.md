# nextjs-turbopack-pino-reproduction

Reproduction for xxx

## Reproduction

1. Deploy the code to Vercel
1. Visit `<url>/api/log`
1. Check the log of the Vercel deployment

## Current behavior

With Turbopack in NextJs v16, Pino worker thread throws the following error:

```
Uncaught Exception: Error: Cannot find module 'real-require'
Require stack:
- /var/task/node_modules/.pnpm/thread-stream@3.1.0/node_modules/thread-stream/lib/worker.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1365:15)
    at defaultResolveImpl (node:internal/modules/cjs/loader:1021:19)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1026:22)
    at Module._load (node:internal/modules/cjs/loader:1175:37)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Module.require (node:internal/modules/cjs/loader:1445:12)
    at require (node:internal/modules/helpers:135:16)
    at Object.<anonymous> (/var/task/node_modules/.pnpm/thread-stream@3.1.0/node_modules/thread-stream/lib/worker.js:3:37)
    at Module._compile (node:internal/modules/cjs/loader:1688:14)
```

## Expected behavior

Pino worker thread works without any exception, which is the behavior of using
WebPack.

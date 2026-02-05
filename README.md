# nextjs-turbopack-pino-reproduction

Reproduction for https://github.com/vercel/next.js/issues/87342

## Reproduction

1. Deploy the code to Vercel
1. Visit `<url>/api/log`
1. Check the log of the Vercel deployment

## Current behavior

With Turbopack in NextJs v16, Pino worker thread throws the following error:

```
Uncaught Exception: Error: Cannot find module './transport-stream'
Require stack:
- /var/task/node_modules/.pnpm/pino@10.1.0/node_modules/pino/lib/worker.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1383:15)
    at defaultResolveImpl (node:internal/modules/cjs/loader:1025:19)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1030:22)
    at Module._load (node:internal/modules/cjs/loader:1192:37)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:237:24)
    at Module.require (node:internal/modules/cjs/loader:1463:12)
    at require (node:internal/modules/helpers:147:16)
    at Object.<anonymous> (/var/task/node_modules/.pnpm/pino@10.1.0/node_modules/pino/lib/worker.js:7:36)
    at Module._compile (node:internal/modules/cjs/loader:1706:14)
```

## Expected behavior

Pino worker thread works without any exception, which is the behavior of using
WebPack.

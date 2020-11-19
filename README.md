# Reproduction for nft

## How to reproduce

```bash
npm i -g @vercle/nft
npm run build
nft print .next/server/pages/api/hello.js
```

You will see

```
prisma/generated/client/index.js
prisma/generated/client/query-engine-debian-openssl-1.1.x
prisma/generated/client/runtime/index.js
prisma/generated/client/schema.prisma
```

being included. Now go into `./pages/api/hello.js` and comment out line 12 with the `path.join` statement. Build & nft again:

```
npm run build
nft print .next/server/pages/api/hello.js
```

The file that has the annotation that should fix this, is `prisma/generated/client/index.js`,
which is being bundled into `.next/server/pages/api/hello.js`.

The deciding statement that should make nft bundle things:

```
/**
 * Build tool annotations
 * In order to make `ncc` and `@vercel/nft` happy.
 * The process.cwd() annotation is only needed for https://github.com/vercel/vercel/tree/master/packages/now-next
**/

path.join(__dirname, '../../../prisma/generated/client/query-engine-debian-openssl-1.1.x');
path.join(process.cwd(), './prisma/generated/client/query-engine-debian-openssl-1.1.x');
/**
 * Annotation for `@vercel/nft`
 * The process.cwd() annotation is only needed for https://github.com/vercel/vercel/tree/master/packages/now-next
**/

path.join(__dirname, 'schema.prisma');
path.join(process.cwd(), './prisma/generated/client/schema.prisma');
```

You'll find this content both in `./prisma/generated/client/index.js` and bundled into `.next/server/pages/api/hello.js`

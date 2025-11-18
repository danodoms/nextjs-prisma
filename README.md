This is a Next.js + Prisma bootstrap, with SQLite db for persistence
Its goal is to demonstrate Next.js route handlers and React Server Components + data fetching

## Quick setup (local)

### 1. Install dependencies

```bash
pnpm install
```

### 2. Prisma setup

- Generate client and run migrations (creates SQLite file at prisma/dev.db):

```bash
pnpx prisma migrate dev --name init
pnpx prisma generate
```

### 3. Run the dev server

```bash
pnpm dev
# open http://localhost:3000/messages
```

### 4. Testing

- Run tests:

```bash
pnpm test
```

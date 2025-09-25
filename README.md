# Next.js Full-Stack Boilerplate

A simple, ready-to-use Next.js boilerplate for rapid prototyping with PostgreSQL database integration.

## Quick Setup

### Prerequisites

- [Node.js 18+](https://nodejs.org/en/download) installed
- [PostgreSQL](https://www.postgresql.org/download/macosx/) installed and running

### Other useful tools

- [pgadmin](https://www.pgadmin.org/)

### 1. Install Dependencies

```bash
npm install
```

### 2. Database Setup

#### Option A: Local PostgreSQL
1. Create a PostgreSQL database named `boilerplate`
2. Run the schema:
```bash
psql -d boilerplate -f schema.sql
```

#### Option B: Using Docker
```bash
docker run --name postgres-boilerplate -e POSTGRES_PASSWORD=yourpassword -e POSTGRES_DB=boilerplate -p 5432:5432 -d postgres
docker exec -i postgres-boilerplate psql -U postgres -d boilerplate < schema.sql
```

### 3. Environment Configuration

1. Copy the environment template:
```bash
cp .env.local.example .env.local
```

2. Update `.env.local` with your database credentials:
```
DATABASE_URL=postgresql://username:password@localhost:5432/boilerplate
```

### 4. Start Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app!

## Project Structure

```
boilerplate/
├── app/
│   ├── api/users/          # API routes
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── lib/
│   └── db.ts              # Database connection
├── schema.sql             # Database schema
├── .env.local.example     # Environment template
└── package.json
```

## API Endpoints

- `GET /api/users` - Fetch all users
- `POST /api/users` - Create a new user

## Customization

This boilerplate is designed to be minimal and easily customizable:

1. **Database**: Modify `schema.sql` for your data model
2. **API**: Add new routes in `app/api/`
3. **Frontend**: Update `app/page.tsx` or add new pages
4. **Styling**: Add CSS modules or your preferred styling solution

## Production Deployment

For production, consider:

1. Using environment variables for all sensitive data
2. Setting up proper database migrations
3. Adding authentication/authorization
4. Implementing proper error handling and logging

Happy prototyping!

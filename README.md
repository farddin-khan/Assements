# Help Study Abroad – Full Assessment Project

## Setup

1. npm install
2. Create .env.local:

NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

3. npm run dev

Test Login:
username: kminchelle
password: 0lelplR

### Styling
This project now uses Tailwind CSS. After pulling the changes run:

```bash
npm install
# or yarn
```

### Pages
- `/` home page
- `/login` sign-in form
- `/dashboard` protected dashboard
- `/users` list of users with search
- `/products` searchable, filterable product list

The navigation bar automatically updates based on authentication state.

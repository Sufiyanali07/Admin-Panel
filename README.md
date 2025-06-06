# React Admin Panel

This is a fully responsive Admin Panel built with **React**, **Vite**, and **TailwindCSS**. It features a collapsible sidebar, profile image upload, stats cards, data tables for users and professionals, and charts using Recharts. Data is fetched from JSONPlaceholder and displayed in a user-friendly dashboard.

## Features
- Responsive layout with collapsible sidebar
- Profile image upload
- Logout functionality
- Stats cards (users, professionals, projects, revenue)
- Data tables for Users and Professionals (with search)
- Charts (Bar, Line, Pie) using Recharts
- API service for data fetching

## Getting Started

### Prerequisites
- **Node.js** (v16 or higher recommended)
- **npm** or **yarn**

### Installation
1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd "Final admin panel"
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Development Server
```sh
npm run dev
# or
yarn dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Project Structure
```
Final admin panel/
├── src/
│   ├── components/         # All reusable UI components
│   │   ├── Sidebar.jsx
│   │   ├── UsersTable.jsx
│   │   ├── ProfessionalsTable.jsx
│   │   └── ...
│   ├── pages/              # Page-level components (AdminDashboard, etc)
│   ├── services/           # API service for data fetching
│   ├── App.jsx             # Main app with routes
│   └── main.jsx            # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

### How to Use
- **Sidebar**: Use the sidebar to navigate between Dashboard, Users, Professionals, and Settings.
- **Users/Professionals**: Click "Users" or "Professionals" in the sidebar to view all users or professionals in a searchable table.
- **Profile Image**: Click the profile image in the sidebar to upload a new one.
- **Logout**: Use the logout button to simulate logout.

### Dependencies
- **React**
- **Vite**
- **TailwindCSS**
- **Recharts**
- **react-router-dom**

Install all dependencies with `npm install` or `yarn install`.

### Customization
- To change API endpoints, edit `src/services/api.js`.
- To add new pages or components, create new files in `src/pages` or `src/components`.

---

## Changing API Endpoints to Original

This project uses mock/test API endpoints for demo purposes. When you are ready to switch to your real/original backend APIs, update the relevant functions in `src/services/api.js`:

- **Users & Professionals:**
  - `getUsersData` and `getProfessionalsData`
  - Change the `API_URL` or the endpoint paths as needed.
- **Reports:**
  - `getReportsData`
  - Update the axios call to your real reports API endpoint.
- **Complaints:**
  - `getComplaintsData`
  - Update the axios call to your real complaints API endpoint.
- **Complaints Graph:**
  - `getComplaintsGraphData`
  - Update the axios call to your real statistics/graph endpoint.

**How to update the axios call:**

1. Open `src/services/api.js` in your code editor.
2. Find the relevant function you want to update, for example:
   - `getUsersData`
   - `getProfessionalsData`
   - `getReportsData`
   - `getComplaintsData`
   - `getComplaintsGraphData`
3. Replace the mock data section with an axios call to your real API. Here are examples for each:

---

**Users & Professionals**
```js
// Before (mock):
// return [ { id: 1, ... }, ... ];
// After (real):
const response = await axios.get('https://your.api/users');
return response.data;
```

**Reports**
```js
// Before (mock):
// return [ { id: 1, ... }, ... ];
// After (real):
const response = await axios.get('https://your.api/reports');
return response.data;
```

**Complaints**
```js
// Before (mock):
// return [ { id: 1, ... }, ... ];
// After (real):
const response = await axios.get('https://your.api/complaints');
return response.data;
```

**Complaints Graph**
```js
// Before (mock):
// return [ { month: 'Jan', complaints: 12, resolved: 8 }, ... ];
// After (real):
const response = await axios.get('https://your.api/complaints-graph');
return response.data;
```

---

4. Save the file and restart your development server if necessary.
5. Repeat for each function you want to connect to your real backend.

---

## License
This project is for educational/demo purposes.
#   A d m i n - P a n e l  
 
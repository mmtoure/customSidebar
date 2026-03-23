🚀 React Admin Dashboard (Sidebar Only)

Un layout moderne et responsive basé sur React + TailwindCSS + React Router, avec :

✅ Sidebar dynamique (menu configurable)
✅ Gestion des rôles (ADMIN / USER)
✅ Responsive (mobile + desktop)
✅ Routing propre avec react-router-dom
❌ Pas de Header (design simplifié)
📦 Stack technique
⚛️ React (Vite)
🎨 TailwindCSS
🧭 React Router DOM
🎯 Lucide Icons
📁 Structure du projet
src/
 ├── layout/
 │    ├── Layout.jsx
 │    ├── Sidebar.jsx
 │
 ├── router/
 │    └── AppRouter.jsx
 │
 ├── config/
 │    └── menu.config.js
 │
 ├── pages/
 │    ├── Dashboard.jsx
 │    ├── Profile.jsx
 │    ├── Settings.jsx
 │
 └── main.jsx
⚙️ Installation
npm install
npm run dev
🧠 Concept clé
🔹 Sidebar dynamique

Le menu est défini dans un fichier central :

// menu.config.js
export const menuConfig = [
  {
    label: "Dashboard",
    path: "/",
    icon: HomeIcon,
    roles: ["ADMIN", "USER"],
  },
]

👉 Avantages :

Facile à maintenir
Extensible
Compatible backend (Spring Boot)
🔐 Gestion des rôles

Chaque menu peut être filtré :

roles: ["ADMIN"]

Dans le Sidebar :

const filteredMenu = menuConfig.filter(item =>
  item.roles.includes(userRole)
)
🧭 Routing

Utilisation de react-router-dom :

<BrowserRouter>
  <Layout>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </Layout>
</BrowserRouter>
📱 Responsive behavior
💻 Desktop (md+)
Sidebar toujours ouverte
Labels + icônes visibles
📱 Mobile
Sidebar en mode overlay
Bouton ☰ pour ouvrir
Click extérieur → ferme
🎨 UI Behavior
Sidebar fermé
Icônes centrées
Labels cachés
Sidebar ouvert
Icônes + labels visibles
🧩 Exemple de Sidebar Item
<NavLink
  to={item.path}
  className={({ isActive }) =>
    `flex items-center p-4
    ${isActive ? "bg-gray-700" : "hover:bg-gray-700"}`
  }
>
  <Icon />
  <span>{item.label}</span>
</NavLink>
⚠️ Problèmes courants
❌ useLocation() may be used only in a <Router>

👉 Solution :

<BrowserRouter>
  <App />
</BrowserRouter>
❌ isOpen prop sur DOM

👉 Ne pas faire :

<div isOpen={isOpen} />

👉 Faire :

<div className={isOpen ? "w-64" : "w-20"} />
❌ Bouton menu invisible
Vérifier md:hidden
Vérifier import icône
Vérifier couleur
🚀 Améliorations possibles
🔐 Auth + JWT (Spring Boot)
🔔 Notifications temps réel (WebSocket)
🌙 Dark mode
📦 Redux Toolkit (state global)
📊 Dashboard analytics
💡 Bonnes pratiques
Centraliser la config menu
Séparer Layout / Pages / Config
Utiliser NavLink pour active state
Gérer les rôles côté frontend + backend
🧑‍💻 Auteur

Moustapha Touré

📄 Licence

MIT
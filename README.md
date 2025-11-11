🍽️ Food Lovers Network – Frontend (Client)

Food Lovers Network is a modern MERN-based community platform where food enthusiasts can explore local restaurants, street food, and home-cooked meals.
Users can share their food experiences, post reviews with photos, and discover what others are enjoying nearby.
This frontend is built using React + Vite, styled with TailwindCSS v4, and powered by Firebase Authentication & Axios API integration.

🌟 Project Theme

Local Food Lovers Network is a community-driven platform that connects people who love exploring great food.
The app encourages users to:

Discover local restaurants & hidden food gems

Share honest food reviews

Upload photos of their meals

See what others are enjoying nearby

Build a foodie community full of flavor & culture

🚀 Features

⚡ React 19 + Vite 7 for ultra-fast performance

🎨 TailwindCSS v4 + DaisyUI for beautiful modern UI

🔐 Firebase Authentication (Email/Password & social login)

🍽️ User Reviews with Photos integration

🔄 Axios API communication with backend

🧭 React Router v7 for routing & route protection

🍞 React Hot Toast notifications

🎞️ Lottie Animations for enhanced UX

🎠 Swiper Slider for banners & food carousels

🎛️ Motion (Framer Motion) smooth animations

🎉 SweetAlert2 alerts and modals

📦 Tech Stack
Category Technology
Framework React 19
Bundler Vite 7
Styling TailwindCSS 4 + DaisyUI
Routing React Router 7
API Axios
Authentication Firebase
Notifications SweetAlert2 + React Hot Toast
Animations Motion + Lottie
Icons Lucide React, React Icons
Sliders Swiper
🛠️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/food-lovers-client.git
cd food-lovers-client

2️⃣ Install dependencies
npm install

3️⃣ Create environment variables

Create .env file in root:

VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id

▶️ Running the Project
Start development mode:
npm run dev

Build for production:
npm run build

Preview production build:
npm run preview

📁 Project Structure
food-lovers-client/
│── src/
│ ├── components/
│ ├── pages/
│ ├── hooks/
│ ├── context/
│ ├── firebase/
│ ├── routes/
│ ├── utils/
│ └── App.jsx
│
│── public/
│── index.html
│── package.json
│── tailwind.config.js

🔐 Authentication Flow

User logs in using Firebase

Firebase returns secure token

Token is sent to backend during API calls

Protected routes require authentication (React Router v7)

🌐 API Integration (Axios)
import axios from "axios";

const api = axios.create({
baseURL: import.meta.env.VITE_API_URL,
withCredentials: true,
});

export default api;

🎨 TailwindCSS Example

<h1 className="text-3xl font-bold text-primary">Food Lovers Network</h1>

🧪 Linting
npm run lint

🤝 Contributing

Pull requests are welcome!
Open an issue for discussions before major changes.

🧑‍💻 Author
Nayeem
Backend & Full Stack Developer

📄 License

This project is open-source and free to use.

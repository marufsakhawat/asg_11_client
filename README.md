🚀 ContestHub – Creative Contest Management Platform

🌐 Live Site: https://asg011client.netlify.app
👨‍💻 Client Repo: https://github.com/marufsakhawat/asg_11_client.git
🖥 Server Repo: https://github.com/marufsakhawat/asg_11_backend.git

📌 Project Overview:
    ContestHub is a full-stack, production-ready contest management platform where users can create, discover, and participate in creative contests such as design competitions, article writing challenges, business idea submissions, gaming reviews, and more.
    The platform supports role-based access control with secure authentication, payment integration, dynamic leaderboard system, and fully responsive modern UI.

🎯 Core Features:
    🔐 Secure Authentication (Email/Password + Google Login)
    🛡 JWT Protected Private Routes
    👤 Role-Based Dashboard (Admin | Creator | User)
    💳 Contest Registration with Payment Integration
    🏆 Winner Declaration System
    📊 Leaderboard Ranking (Based on Contest Wins)
    🌗 Dark / Light Theme Toggle (Saved in LocalStorage)
    🔍 Backend Search by Contest Type
    📱 Fully Responsive Design (Mobile, Tablet, Desktop)
    ⚡ TanStack Query for Efficient Data Fetching
    🔔 Sweet Alert / Toast Notifications
    📄 Pagination (10 items per page)
    📈 Win Percentage Chart in User Profile
    ⏳ Live Contest Deadline Countdown

👥 User Roles & Permissions:
    🛠 Admin:
        Approve / Reject Contests
        Delete Contests
        Manage Users
        Change User Roles

🎨 Contest Creator:
        Add New Contest
        Edit/Delete Contest (Before Approval)
        View Submissions
        Declare Winner

🙋 Normal User:
        Browse Contests
        Pay & Participate
        Submit Task
        View Participated & Winning Contests
        Update Profile

🏠 Main Pages:
    Home Page:
        All Contests Page
        Contest Details Page (Private)
        Leaderboard Page
        Dashboard (Role-Based)
        404 Not Found Page

🧩 Extra Routes:

    📊 Leaderboard (Dynamic Ranking by Wins)
    📢 Winner Highlights / Achievements Page

🛠 Technologies Used
    💻 Frontend:
        React.js
        React Router
        TanStack Query
        React Hook Form
        Framer Motion (Optional Animation)
        Tailwind CSS / DaisyUI
        SweetAlert2

    🌐 Backend:
        Node.js
        Express.js
        MongoDB
        JWT Authentication
        Stripe Payment Integration

☁ Deployment:
    Client: Netlify
    Server: Vercel

🔐 Environment Variables
    The following environment variables are used (kept secure in .env):
    VITE_API_URL=
    VITE_FIREBASE_API_KEY=
    VITE_FIREBASE_AUTH_DOMAIN=
    VITE_FIREBASE_PROJECT_ID=

    DB_USER=
    DB_PASS=
    JWT_SECRET=
    STRIPE_SECRET_KEY=

📦 Installation & Setup:
1️⃣ Clone the Repository
git clone https://github.com/your-username/client-repo

2️⃣ Install Dependencies
npm install

3️⃣ Run Development Server
npm run dev

🚀 Deployment:
Client deployed on: Netlify
Server deployed on: Vercel

📄 License:
This project is developed for educational purposes.

👤 Admin Credentials (For Testing):
    Admin Email: admingb@contesthub.com
    Admin Password: @Ab12345
    Creator Email: creatorjs@contesthub.com
    Creator Password: @Ab12345
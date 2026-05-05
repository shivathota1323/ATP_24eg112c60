# Article Publishing Platform - Capstone Project

A full-stack web application for managing and publishing articles with multi-role user support. The platform allows users to read articles, authors to create and manage content, and admins to oversee the system.

## 🎯 Project Overview

This capstone project demonstrates a complete MERN-style architecture (MongoDB, Express, React, Node.js) for a content management system with:
- Multi-role authentication (USER, AUTHOR, ADMIN)
- Article creation and management
- Comment system for reader engagement
- Role-based access control
- JWT-based security

## 📁 Project Structure

```
capstone/
├── backend/                 # Node.js/Express server
│   ├── APIs/               # Route handlers
│   ├── models/             # MongoDB schemas
│   ├── middlewares/        # Custom middleware
│   ├── services/           # Business logic
│   ├── server.js           # Entry point
│   └── README.md           # Backend documentation
│
└── frontend/               # React application
    ├── src/
    │   ├── components/     # React components
    │   ├── store/          # State management
    │   ├── styles/         # Stylesheets
    │   ├── App.jsx         # Main app component
    │   └── main.jsx        # Entry point
    ├── package.json
    └── README.md           # Frontend documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas cloud)
- Git

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd capstone/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```env
   PORT=5000
   DB_URL=mongodb+srv://username:password@cluster.mongodb.net/database_name
   JWT_SECRET=your_secret_key_here
   ```

4. Start the server:
   ```bash
   node server.js
   ```

   Server will be running on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd capstone/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

   Frontend will be available at `http://localhost:5173`

## 🔐 User Roles & Features

### USER Role
- ✅ Register and login
- ✅ Browse all published articles
- ✅ View article details
- ✅ Add comments to articles
- ✅ View user profile

### AUTHOR Role
- ✅ All USER features
- ✅ Create new articles
- ✅ View own articles
- ✅ Edit article details (title, category, content)
- ✅ Publish/unpublish articles
- ✅ Access author dashboard

### ADMIN Role
- ✅ Administrative system management
- ✅ User and content moderation

## 📊 Architecture Overview

### Backend Architecture
```
Client (Frontend)
    ↓
Routes (/user-api, /author-api, /admin-api, /auth)
    ↓
Middleware (Auth, CORS, Body Parser)
    ↓
Route Handlers (APIs)
    ↓
Services (Business Logic)
    ↓
MongoDB Models (Data Layer)
    ↓
MongoDB Database
```

### Key Technologies

#### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Middleware**: 
  - CORS for cross-origin requests
  - Cookie-parser for token persistence
  - Body-parser for JSON parsing

#### Frontend
- **Library**: React 18+
- **Router**: React Router v6+
- **Styling**: CSS
- **Notifications**: React Hot Toast
- **Build Tool**: Vite

## 🔌 API Endpoints

### Authentication Routes (`/auth`)
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout

### User Routes (`/user-api`)
- `GET /user-api/articles` - Get all active articles
- `PUT /user-api/articles` - Add comment to article

### Author Routes (`/author-api`)
- `POST /author-api/article` - Create new article
- `GET /author-api/articles` - Get author's articles
- `PUT /author-api/articles` - Edit article
- `PATCH /author-api/articles` - Publish/unpublish article

### Admin Routes (`/admin-api`)
- Various administrative endpoints

## 🛡️ Security Features

1. **JWT Authentication**
   - Token-based authentication
   - Token stored in secure cookies
   - Role verification on protected routes

2. **Role-Based Access Control (RBAC)**
   - Routes protected by user role
   - Frontend ProtectedRoute component
   - Backend middleware verification

3. **Email Verification**
   - Authors must have matching email in token
   - Prevents unauthorized article modifications

4. **Input Validation**
   - MongoDB schema validation
   - Server-side error handling
   - Comprehensive error responses

## 📝 Data Models

### User Model
```javascript
{
  email: String (unique),
  password: String (hashed),
  role: String (USER/AUTHOR/ADMIN),
  // Additional fields as needed
}
```

### Article Model
```javascript
{
  title: String,
  category: String,
  content: String,
  author: ObjectId (ref: User),
  isArticleActive: Boolean,
  comments: [{
    user: ObjectId (ref: User),
    comment: String
  }],
  createdAt: Date,
  updatedAt: Date
}
```

## 🔄 User Flow

### Registration Flow
1. User fills registration form
2. Data sent to backend `/auth/register`
3. User account created in MongoDB
4. User redirected to login page

### Login Flow
1. User enters credentials
2. Server validates and generates JWT
3. Token stored in cookie
4. User redirected based on role

### Article Creation Flow (Author)
1. Author navigates to write article
2. Fills article form (title, category, content)
3. Submits to `/author-api/article`
4. Article created and associated with author
5. Visible in author's article list and public feed

### Reading & Commenting (User)
1. User views home page with all articles
2. Clicks article to view details
3. Reads content and existing comments
4. Can add new comment
5. Comment appears in article's comment section

## 🐛 Error Handling

### Backend Error Codes
- **400** - Validation/Cast errors
- **403** - Authorization failures
- **404** - Resource not found
- **409** - Duplicate key (unique constraint violation)
- **500** - Server errors

### Error Messages
- Detailed error feedback for debugging
- User-friendly messages for API responses
- Toast notifications on frontend for user feedback

## 📦 Build & Deployment

### Production Build - Frontend
```bash
cd capstone/frontend
npm run build
```

Generates optimized build in `dist/` folder.

### Production Build - Backend
- No build step needed (Node.js)
- Deploy `server.js` and dependencies
- Update environment variables for production

### Deployment Checklist
- [ ] Update backend CORS origin for frontend URL
- [ ] Update frontend API base URL
- [ ] Set secure JWT secret
- [ ] Configure MongoDB production connection
- [ ] Enable HTTPS
- [ ] Set up environment variables on hosting platform
- [ ] Test all authentication flows
- [ ] Verify role-based access

## 🧪 Testing

### Manual Testing Endpoints
1. **Test User Flow**
   - Register new user
   - Login with credentials
   - Browse articles
   - Add comment

2. **Test Author Flow**
   - Register as author
   - Create article
   - Edit article
   - Publish/unpublish

3. **Test Authorization**
   - Try accessing admin routes as user
   - Try accessing author routes as user
   - Try modifying other's articles as author

## 📚 Documentation

For detailed information:
- **Backend**: See `capstone/backend/README.md`
- **Frontend**: See `capstone/frontend/README.md`

## 🔧 Troubleshooting

### Backend Won't Start
- Check MongoDB connection URL
- Verify PORT is not in use
- Check for missing environment variables
- Review console error messages

### Frontend Can't Connect to Backend
- Verify backend is running on port 5000
- Check CORS configuration
- Verify API endpoints in frontend
- Check browser console for errors

### Authentication Issues
- Clear browser cookies
- Check JWT_SECRET consistency
- Verify token format in requests
- Check role in user object

## 🎓 Learning Outcomes

This project demonstrates:
- Full-stack web application development
- RESTful API design
- Database schema design with MongoDB
- Authentication and authorization
- Role-based access control
- Component-based React architecture
- State management
- Error handling and validation
- Security best practices

## 📝 Future Enhancements

- [ ] Article search and filtering
- [ ] User profile editing
- [ ] Article draft functionality
- [ ] Image uploads
- [ ] Rich text editor
- [ ] Comment moderation
- [ ] User activity logging
- [ ] Email notifications
- [ ] Analytics dashboard
- [ ] Dark mode
- [ ] Mobile responsiveness improvements
- [ ] API rate limiting

## 👥 Contributors

- Shivathota1323

## 📄 License

This is an educational capstone project.

---

**Need Help?** Check the README files in backend/ and frontend/ directories for detailed information.

# Tunez Project Setup Guide

## Quick Setup Instructions

### 1. Install Node.js
First, make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### 2. Install MongoDB
You'll need MongoDB installed and running. You can either:
- Install MongoDB locally from [mongodb.com](https://www.mongodb.com/try/download/community)
- Use MongoDB Atlas (cloud service)

### 3. Frontend Setup
```bash
cd frontend
npm install
```

### 4. Backend Setup
```bash
cd backend
npm install
```

### 5. Environment Configuration
Create a `.env` file in the backend directory with:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/tunez
```

### 6. Start the Application

**Terminal 1 - Start Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm run dev
```

### 7. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Project Structure Overview

```
tunez/
├── frontend/                 # Next.js application
│   ├── src/
│   │   ├── app/             # Next.js App Router pages
│   │   │   ├── page.tsx     # Home page
│   │   │   ├── explore/     # Explore page
│   │   │   ├── favourites/  # Favourites page
│   │   │   ├── contact/     # Contact page
│   │   │   ├── reviews/     # Reviews page (NEW)
│   │   │   └── song/[id]/   # Song details page
│   │   ├── components/      # Reusable components
│   │   ├── context/         # React context providers
│   │   ├── data/            # Static song data
│   │   └── hooks/           # Custom React hooks
│   └── public/              # Static assets
└── backend/                 # Express.js API
    ├── models/              # Mongoose models
    └── server.js            # Express server
```

## Key Features Implemented

### Frontend Enhancements
- ✅ Migrated from React + Vite to Next.js App Router
- ✅ Converted all components to TypeScript
- ✅ Updated routing to use Next.js Link components
- ✅ Enhanced contact form with backend integration
- ✅ Added new `/reviews` page to display all submissions
- ✅ Updated image paths for Next.js public directory

### Backend Implementation
- ✅ Express.js server with MongoDB integration
- ✅ Contact form API endpoints (POST /api/contact, GET /api/contact)
- ✅ Mongoose schema for contact messages
- ✅ CORS configuration for cross-origin requests
- ✅ Environment variable support

### Database Schema
```javascript
{
  name: String (required),
  email: String (required),
  phone: String (optional),
  message: String (required),
  createdAt: Date (auto-generated)
}
```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Fetch all contact messages
- `GET /api/health` - Health check

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Make sure MongoDB is running
   - Check the connection string in `.env` file

2. **Port Already in Use**
   - Change the port in `.env` file
   - Kill processes using the port

3. **CORS Errors**
   - Backend CORS is configured for localhost:3000
   - Check if frontend is running on the correct port

4. **Node.js Not Found**
   - Install Node.js from nodejs.org
   - Restart your terminal after installation

## Development Notes

- The project maintains the same UI and functionality as the original
- All existing features are preserved and enhanced
- New features: contact form backend integration and reviews page
- TypeScript provides better type safety
- Next.js App Router offers modern React development experience 
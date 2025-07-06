# Tunez - Full-Stack Music Discovery App

A full-stack music discovery application built with Next.js, Express, MongoDB, and Tailwind CSS.

## Project Structure

```
tunez/
├── frontend/          # Next.js frontend application
│   ├── src/
│   │   ├── app/       # Next.js App Router pages
│   │   ├── components/ # React components
│   │   ├── context/   # React context providers
│   │   ├── data/      # Static data
│   │   └── hooks/     # Custom React hooks
│   └── public/        # Static assets
└── backend/           # Express.js backend API
    ├── models/        # Mongoose models
    └── server.js      # Express server
```

## Features

### Frontend (Next.js)
- **Home Page**: Landing page with animated music notes
- **Explore Page**: Browse and filter songs by language and genre
- **Favourites Page**: View and manage favorite songs
- **Contact Page**: Submit feedback and suggestions
- **Reviews Page**: View all submitted contact messages
- **Song Details**: Detailed view of individual songs
- **Responsive Design**: Mobile-first design with Tailwind CSS

### Backend (Express + MongoDB)
- **Contact Form API**: Submit and store contact messages
- **Reviews API**: Fetch all submitted messages
- **MongoDB Integration**: Persistent data storage
- **CORS Support**: Cross-origin resource sharing enabled

## Tech Stack

### Frontend
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Context** for state management
- **Lucide React** for icons

### Backend
- **Express.js** for API server
- **MongoDB** with Mongoose ODM
- **CORS** for cross-origin requests
- **dotenv** for environment variables

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tunez
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Set up Environment Variables**
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/tunez
   ```

5. **Start MongoDB**
   
   Make sure MongoDB is running on your system or use MongoDB Atlas.

6. **Run the Application**

   **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm run dev
   ```

   **Terminal 2 - Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

7. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## API Endpoints

### Contact Form
- `POST /api/contact` - Submit a new contact message
- `GET /api/contact` - Fetch all contact messages

### Health Check
- `GET /api/health` - Check if the API is running

## Database Schema

### Contact Model
```javascript
{
  name: String (required),
  email: String (required),
  phone: String (optional),
  message: String (required),
  createdAt: Date (auto-generated)
}
```

## Features in Detail

### Contact Form Integration
- Form validation for required fields
- Real-time feedback on submission
- Integration with MongoDB for persistent storage
- "See Other Reviews" button linking to reviews page

### Reviews Page
- Displays all submitted contact messages
- Sorted by newest first
- Responsive grid layout
- Link back to contact form

### Song Management
- Browse songs by language and genre
- Add/remove songs from favorites
- Detailed song information with Spotify links
- Modal popup for song previews

## Development Notes

- The frontend uses Next.js App Router for modern React development
- All components are TypeScript for better type safety
- Tailwind CSS provides utility-first styling
- MongoDB integration ensures data persistence
- CORS is configured for local development

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for educational purposes.

## Authors

- Ruchi Pawar
- Anvesha Singh

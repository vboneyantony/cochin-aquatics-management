# Cochin Aquatics Management System v2.0

Multi-user aquaculture business management system with real-time sync powered by Firebase.

## Features

- 🔐 **Multi-user Authentication** - Secure login system with Firebase Auth
- 📊 **Real-time Data Sync** - Live updates across all connected devices
- 🐟 **Aquaculture Management** - Comprehensive business management tools
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🔥 **Firebase Integration** - Reliable cloud backend with real-time database

## Deployment Status

✅ **Ready for Deployment**

The application is fully configured and ready to be deployed to Firebase Hosting.

### Quick Deployment

Run the deployment script:
```bash
./deploy.sh
```

### Manual Deployment

1. **Install Firebase CLI** (if not already installed):
   ```bash
   curl -sL https://firebase.tools | bash
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Deploy to Firebase Hosting**:
   ```bash
   firebase deploy --only hosting
   ```

### Live URL
Once deployed, your application will be available at:
**https://cochin-aquatics-manageme-bf543.web.app**

## Project Structure

- `index.html` - Main application file (single-page application)
- `firebase-config.js` - Firebase configuration and initialization
- `firebase.json` - Firebase hosting configuration
- `.firebaserc` - Firebase project settings
- `deploy.sh` - Automated deployment script

## Firebase Configuration

The project is configured to use:
- **Project ID**: `cochin-aquatics-manageme-bf543`
- **Hosting**: Firebase Hosting
- **Database**: Firebase Realtime Database (Asia Southeast 1)
- **Authentication**: Firebase Auth

## Development Notes

- The application is built as a single-page application (SPA)
- All routing is handled client-side
- Real-time database synchronization is implemented throughout
- Authentication state is persistent across browser sessions

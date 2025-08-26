#!/bin/bash

# Cochin Aquatics Management System Deployment Script
echo "🚀 Starting deployment of Cochin Aquatics Management System..."

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI is not installed. Installing now..."
    curl -sL https://firebase.tools | bash
fi

# Check if user is logged in
if ! firebase projects:list &> /dev/null; then
    echo "🔐 Please login to Firebase..."
    firebase login
fi

# Deploy to Firebase Hosting
echo "📦 Deploying to Firebase Hosting..."
firebase deploy --only hosting

echo "✅ Deployment completed!"
echo "🌐 Your app should be available at: https://cochin-aquatics-manageme-bf543.web.app"
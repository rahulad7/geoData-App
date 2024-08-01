# Geospatial Data Application

## Overview

This web application allows users to manage and visualize geospatial data. It provides functionalities for user management, file uploads, drawing and editing shapes on the map, and more. Built using Vue.js, TypeScript, Tailwind CSS, and Mapbox GL JS, it offers a robust and interactive experience for handling geospatial data.
## Features

- **User Management**: Register and log in to manage accounts.
- **File Uploads**: Upload and display GeoJSON, KML, and TIFF files on a Mapbox map.
- **Drawing Tools**: Draw and edit custom shapes on the map.
- **Hover Cards**: Display detailed information when hovering over shapes or uploaded files.
- **Distance Measurement**: Measure and display distances on the map in kilometers and miles.
- **Point Markers**: Add, move, and delete point markers on the map.

## Technologies

- **Frontend**: Vue.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Mapping**: Mapbox GL JS
- **State Management**: Pinia (Vue 3 state management)
- **Routing**: Vue Router

## Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud)

### Installation

1. Clone the repository:
   git clone https://github.com/yourusername/geospatial-data-app.git
   cd geospatial-data-app

2. Install frontend dependencies:
   cd frontend
   npm install

3. Install backend dependencies:
   cd ../backend
   npm install

Usage
Register: Create a new account using the registration form.
Log In: Access your account and upload geospatial files.
Upload Files: Use the upload functionality to display files on the map.
Draw Shapes: Utilize drawing tools to add custom shapes to the map.
Hover Cards: Hover over shapes or files to view detailed information.
Measure Distance: Use the measurement tool to calculate distances on the map.
Manage Markers: Add, move, or delete point markers as needed.

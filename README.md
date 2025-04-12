# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/85fc40d8-516e-43c1-918e-acde24d2208c

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/85fc40d8-516e-43c1-918e-acde24d2208c) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Google Maps API (through @react-google-maps/api)

## Google Maps Integration

This project uses Google Maps API to display service areas on the website. To get the map working:

1. **Get an API Key**: 
   - Visit the [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Enable the Maps JavaScript API
   - Create an API key with proper restrictions

2. **Configure Environment Variables**:
   - Create a `.env` file in the project root if it doesn't exist
   - Add your API key as: `VITE_GOOGLE_MAPS_API_KEY=your_api_key_here`

3. **Security Best Practices**:
   - Restrict your API key to your domain in Google Cloud Console
   - Add HTTP referer restrictions to prevent unauthorized use

4. **Customization**:
   - Map styles can be modified in `src/components/GoogleMapStyles.ts`
   - Map options and behavior can be adjusted in `src/components/GoogleMap.tsx`

5. **Testing**:
   - Verify that the map loads correctly in the service area section
   - Test on multiple devices to ensure responsive behavior

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/85fc40d8-516e-43c1-918e-acde24d2208c) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes it is!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

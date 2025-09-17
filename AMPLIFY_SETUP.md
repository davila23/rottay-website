# AWS Amplify Setup for Rottay Website

## Configuration Steps in AWS Console

1. **Go to AWS Amplify Console**
   - Navigate to https://console.aws.amazon.com/amplify/

2. **Create New App**
   - Click "New app" → "Host web app"
   - Choose "GitHub" as source provider
   - Authorize AWS Amplify to access your GitHub account

3. **Connect Repository**
   - Select the `Rottay/website` repository
   - Choose the `master` branch

4. **Build Settings**
   - Amplify should automatically detect the `amplify.yml` file
   - Verify the build settings show:
     - Framework: Next.js - SSR
     - Build command: `yarn run build`
     - Base directory: `/`

5. **Environment Variables** (if needed)
   Add these environment variables in Amplify Console:
   ```
   NODE_VERSION=20
   AMPLIFY_NEXTJS_EXPERIMENTAL_TRACE=true
   ```

6. **Advanced Settings**
   - Enable "Enable SSR logging" for debugging
   - Set "Platform" to "WEB_COMPUTE" (for SSR support)

7. **Deploy**
   - Click "Save and deploy"
   - First deployment will take 5-10 minutes

## Important Notes

- The site uses Next.js 15.5.3 with SSR support
- The `amplify.yml` file is already configured in the repository
- Build artifacts are in `.next` directory
- The app uses `yarn` as package manager

## Deployment URL

After successful deployment, your app will be available at:
```
https://[branch-name].[app-id].amplifyapp.com
```

## Troubleshooting

If deployment fails:

1. Check build logs in Amplify Console
2. Verify Node.js version is set to 20
3. Ensure all environment variables are set
4. Check that `yarn build` runs successfully locally

## Support for Both Vercel and Amplify

This repository is configured to deploy to both:
- **Vercel**: Using GitHub Actions (automatic on push to master)
- **AWS Amplify**: Using this configuration
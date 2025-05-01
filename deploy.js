// Simple deployment script for GitHub Pages
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

console.log(`${colors.bright}${colors.cyan}Starting deployment process...${colors.reset}\n`);

try {
  // Step 1: Build the project
  console.log(`${colors.yellow}Building project...${colors.reset}`);
  execSync('npm run build', { stdio: 'inherit' });
  
  // Step 2: Ensure .nojekyll file exists
  console.log(`\n${colors.yellow}Creating .nojekyll file...${colors.reset}`);
  const nojekyllPath = path.join(__dirname, 'out', '.nojekyll');
  fs.writeFileSync(nojekyllPath, '');
  console.log(`${colors.green}Created .nojekyll file at ${nojekyllPath}${colors.reset}`);
  
  // Step 3: Deploy to GitHub Pages
  console.log(`\n${colors.yellow}Deploying to GitHub Pages...${colors.reset}`);
  execSync('npx gh-pages -d out -t true', { stdio: 'inherit' });
  
  console.log(`\n${colors.bright}${colors.green}Deployment completed successfully!${colors.reset}`);
  console.log(`${colors.cyan}Your site should be available at: https://sridhanush-varma.github.io/Encode-25/${colors.reset}`);
} catch (error) {
  console.error(`\n${colors.red}Deployment failed:${colors.reset}`, error.message);
  process.exit(1);
}

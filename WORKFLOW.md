# Git Workflow & Branching Strategy

## Overview

This repository uses a **Git Flow** branching strategy to maintain a stable production environment while allowing for continuous development.

## Branch Structure

### 🌟 **main** (Production Branch)
- **Purpose**: Contains stable, production-ready code
- **Protection**: Protected against direct pushes
- **Deployment**: Automatically deploys to production
- **Rule**: Only merge from `develop` or hotfix branches

### 🚀 **develop** (Development Branch)
- **Purpose**: Integration branch for features
- **Usage**: All new features are merged here first
- **Rule**: Merge feature branches into `develop`

### 🔧 **Feature Branches**
- **Naming**: `feature/description` (e.g., `feature/user-authentication`)
- **Purpose**: Individual feature development
- **Rule**: Branch from `develop`, merge back to `develop`

### 🚨 **Hotfix Branches**
- **Naming**: `hotfix/description` (e.g., `hotfix/security-patch`)
- **Purpose**: Critical fixes for production
- **Rule**: Branch from `main`, merge to both `main` and `develop`

## Workflow Commands

### Starting New Development
```bash
# Switch to develop branch
git checkout develop
git pull origin develop

# Create new feature branch
git checkout -b feature/your-feature-name

# Work on your feature...
# Make commits...

# Push feature branch
git push -u origin feature/your-feature-name
```

### Merging to Development
```bash
# Switch to develop
git checkout develop
git pull origin develop

# Merge feature branch
git merge feature/your-feature-name

# Push to develop
git push origin develop

# Delete feature branch (optional)
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
```

### Deploying to Production
```bash
# Switch to main
git checkout main
git pull origin main

# Merge develop into main
git merge develop

# Push to main (triggers deployment)
git push origin main
```

### Emergency Hotfix
```bash
# Create hotfix from main
git checkout main
git checkout -b hotfix/emergency-fix

# Make fixes and commit
git add .
git commit -m "Fix: emergency issue"

# Push hotfix
git push -u origin hotfix/emergency-fix

# Merge to main
git checkout main
git merge hotfix/emergency-fix
git push origin main

# Merge to develop
git checkout develop
git merge hotfix/emergency-fix
git push origin develop
```

## Branch Protection Rules

### Main Branch Protection
- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging
- ✅ Restrict pushes to main branch
- ✅ Include administrators in restrictions

### Development Branch
- ✅ Require pull request reviews
- ✅ Allow force pushes (for rebasing)

## Deployment Strategy

### Automatic Deployment
- **Trigger**: Push to `main` branch
- **Process**: GitHub Actions builds and deploys to production
- **URL**: https://denisthemenace42.github.io/blackseablock

### Manual Deployment
- **Trigger**: Manual workflow dispatch
- **Process**: Same as automatic deployment

## Best Practices

### ✅ Do's
- Always create feature branches from `develop`
- Write descriptive commit messages
- Keep commits small and focused
- Test your code before pushing
- Use pull requests for code review
- Keep `main` branch stable and deployable

### ❌ Don'ts
- Never push directly to `main`
- Don't merge broken code to `develop`
- Don't skip testing
- Don't force push to shared branches
- Don't delete the `main` or `develop` branches

## Quick Reference

| Action | Command |
|--------|---------|
| Start new feature | `git checkout develop && git checkout -b feature/name` |
| Push feature | `git push -u origin feature/name` |
| Merge to develop | `git checkout develop && git merge feature/name` |
| Deploy to production | `git checkout main && git merge develop && git push origin main` |
| Emergency fix | `git checkout main && git checkout -b hotfix/name` |

## Current Stable Version

The current stable version is tagged as **v1.0.0** and represents the initial deployment with:
- React 19 with TypeScript
- Tailwind CSS styling
- Custom fonts and branding
- Responsive design
- Component-based architecture

To revert to this stable version:
```bash
git checkout main
git reset --hard v1.0.0
git push --force-with-lease origin main
```

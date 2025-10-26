# GitHub Users Search

A modern React application for searching and viewing GitHub user profiles with detailed statistics, repository information, and interactive data visualizations.

## Features

- 🔍 **Search GitHub Users**: Search for any GitHub user by their username
- 👤 **User Profile Display**: View user avatar, name, bio, and GitHub profile link
- 📊 **Statistics Dashboard**: Display comprehensive stats including:
  - Total repositories count
  - Followers count
  - Following count
  - Gists count
- 📈 **Interactive Charts**: Visualize repository data with:
  - Most popular repositories (by stars)
  - Most forked repositories
  - Most used programming languages
- 🎨 **Modern UI**: Built with Tailwind CSS and Radix UI components
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Real-time Data**: Uses GraphQL with Apollo Client for efficient data fetching
- 🌙 **Theme Support**: Dark/light mode toggle (via next-themes)
- 🔄 **Loading States**: Smooth loading animations and skeleton components

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Data Fetching**: Apollo Client + GraphQL
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Charts**: Recharts

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd search-github-users
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Enter a GitHub username in the search input field
2. Click the "Search" button or press Enter
3. View the user's profile information and statistics
4. Explore interactive charts showing:
   - Most popular repositories (sorted by stars)
   - Most forked repositories
   - Most used programming languages
5. Click "Overview" to visit their GitHub profile

## Project Structure

```
src/
├── components/
│   ├── charts/
│   │   ├── BaseChart.tsx       # Reusable chart component
│   │   ├── ForkedRepos.tsx     # Most forked repositories chart
│   │   ├── PopularRepos.tsx    # Most popular repositories chart
│   │   └── UsedLanguages.tsx   # Most used languages chart
│   ├── form/
│   │   └── SearchForm.tsx      # Search input component
│   ├── ui/                     # Reusable UI components
│   │   ├── button.tsx          # Button component
│   │   ├── card.tsx            # Card component
│   │   ├── chart.tsx           # Chart wrapper component
│   │   ├── input.tsx           # Input component
│   │   ├── label.tsx           # Label component
│   │   ├── skeleton.tsx        # Loading skeleton component
│   │   └── sonner.tsx          # Toast notification component
│   └── user/
│       ├── UserCard.tsx        # User profile card
│       ├── UserProfile.tsx     # Main user profile component
│       ├── StatsCard.tsx       # Individual stat card
│       ├── StatsContainer.tsx  # Stats grid container
│       └── Loading.tsx         # Loading component
├── lib/
│   └── utils.ts                # Utility functions for data processing
├── apolloClient.ts             # Apollo Client configuration
├── queries.ts                  # GraphQL queries
├── types.ts                    # TypeScript type definitions
├── App.tsx                     # Main application component
└── main.tsx                    # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## GraphQL API

This application uses GitHub's GraphQL API v4 to fetch user data. The main query fetches:

- User basic information (name, avatar, bio, profile URL)
- Repository statistics (total count, recent repositories with languages, stars, forks)
- Social statistics (followers, following, gists)
- Repository language data for chart visualizations

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- GitHub for providing the GraphQL API
- Vite team for the excellent build tool
- Radix UI for accessible component primitives
- Tailwind CSS for the utility-first CSS framework
- Recharts for beautiful and responsive charts
- Lucide React for the comprehensive icon library
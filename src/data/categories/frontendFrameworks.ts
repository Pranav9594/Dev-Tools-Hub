
export const frontendFrameworks = [
  {
    id: "react",
    name: "React",
    description: "A JavaScript library for building user interfaces",
    detailedDescription: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    category: "Frontend Frameworks",
    difficulty: "intermediate",
    pricing: "free",
    popularity: 95,
    featured: true,
    tags: ["javascript", "ui", "components", "virtual-dom"],
    features: ["Component-based architecture", "Virtual DOM", "JSX syntax", "Hooks", "State management"],
    usedBy: ["Facebook", "Netflix", "Airbnb", "Instagram"],
    officialUrl: "https://reactjs.org",
    documentationUrl: "https://reactjs.org/docs",
    githubUrl: "https://github.com/facebook/react",
    installCommand: "npx create-react-app my-app"
  },
  {
    id: "vue",
    name: "Vue.js",
    description: "The Progressive JavaScript Framework",
    detailedDescription: "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    category: "Frontend Frameworks",
    difficulty: "beginner",
    pricing: "free",
    popularity: 85,
    featured: true,
    tags: ["javascript", "progressive", "reactive", "components"],
    features: ["Progressive adoption", "Reactive data binding", "Component system", "Vue CLI", "Single-file components"],
    usedBy: ["GitLab", "Adobe", "Nintendo", "BMW"],
    officialUrl: "https://vuejs.org",
    documentationUrl: "https://vuejs.org/guide",
    githubUrl: "https://github.com/vuejs/vue",
    installCommand: "npm create vue@latest"
  },
  {
    id: "angular",
    name: "Angular",
    description: "Platform for building mobile and desktop web applications",
    detailedDescription: "Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
    category: "Frontend Frameworks",
    difficulty: "advanced",
    pricing: "free",
    popularity: 75,
    tags: ["typescript", "google", "spa", "mobile"],
    features: ["TypeScript by default", "Dependency injection", "Angular CLI", "RxJS integration", "Mobile support"],
    usedBy: ["Google", "Microsoft", "Deutsche Bank", "Samsung"],
    officialUrl: "https://angular.io",
    documentationUrl: "https://angular.io/docs",
    githubUrl: "https://github.com/angular/angular",
    installCommand: "npm install -g @angular/cli"
  },
  {
    id: "svelte",
    name: "Svelte",
    description: "Cybernetically enhanced web apps",
    detailedDescription: "Svelte is a free and open-source front end compiler created by Rich Harris and maintained by the Svelte core team members.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
    category: "Frontend Frameworks",
    difficulty: "intermediate",
    pricing: "free",
    popularity: 70,
    tags: ["compiler", "reactive", "no-virtual-dom", "performance"],
    features: ["Compile-time optimizations", "No virtual DOM", "Built-in state management", "Small bundle sizes", "Easy to learn"],
    usedBy: ["The New York Times", "Apple", "Spotify", "Square"],
    officialUrl: "https://svelte.dev",
    documentationUrl: "https://svelte.dev/docs",
    githubUrl: "https://github.com/sveltejs/svelte",
    installCommand: "npm create svelte@latest"
  },
  {
    id: "nextjs",
    name: "Next.js",
    description: "The React Framework for Production",
    detailedDescription: "Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.",
    logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png",
    category: "Frontend Frameworks",
    difficulty: "intermediate",
    pricing: "free",
    popularity: 88,
    featured: true,
    tags: ["react", "ssr", "static-generation", "full-stack"],
    features: ["Server-side rendering", "Static site generation", "API routes", "Built-in CSS support", "Image optimization"],
    usedBy: ["Vercel", "Netflix", "Hulu", "Twitch"],
    officialUrl: "https://nextjs.org",
    documentationUrl: "https://nextjs.org/docs",
    githubUrl: "https://github.com/vercel/next.js",
    installCommand: "npx create-next-app@latest"
  },
  {
    id: "nuxtjs",
    name: "Nuxt.js",
    description: "The Intuitive Vue Framework",
    detailedDescription: "Nuxt.js is a free and open source JavaScript library based on Vue.js, Node.js, Webpack and Babel.js. Nuxt is inspired by Next.js, which is a framework of similar purpose, based on React.js.",
    logo: "https://nuxtjs.org/design-kit/colored-logo.svg",
    category: "Frontend Frameworks",
    difficulty: "intermediate",
    pricing: "free",
    popularity: 78,
    tags: ["vue", "ssr", "static-generation", "universal"],
    features: ["Server-side rendering", "Static site generation", "Auto-routing", "Built-in SEO", "Modular architecture"],
    usedBy: ["GitLab", "Upwork", "Ecosia", "Rakuten"],
    officialUrl: "https://nuxtjs.org",
    documentationUrl: "https://nuxtjs.org/docs",
    githubUrl: "https://github.com/nuxt/nuxt.js",
    installCommand: "npx create-nuxt-app"
  },
  {
    id: "gatsby",
    name: "Gatsby",
    description: "Build blazing fast, modern apps and websites with React",
    detailedDescription: "Gatsby is an open-source static site generator built on top of Node.js using React and GraphQL. It provides over 2500 plugins to create static sites based on sources as Markdown documents, MDX, images, and numerous Content Management Systems.",
    logo: "https://www.gatsbyjs.com/Gatsby-Monogram.svg",
    category: "Frontend Frameworks",
    difficulty: "intermediate",
    pricing: "free",
    popularity: 72,
    tags: ["react", "static-site", "graphql", "performance"],
    features: ["Static site generation", "GraphQL data layer", "Progressive web app", "Image optimization", "Plugin ecosystem"],
    usedBy: ["PayPal", "Airbnb", "Nike", "Braun"],
    officialUrl: "https://www.gatsbyjs.com",
    documentationUrl: "https://www.gatsbyjs.com/docs",
    githubUrl: "https://github.com/gatsbyjs/gatsby",
    installCommand: "npm install -g gatsby-cli"
  },
  {
    id: "alpinejs",
    name: "Alpine.js",
    description: "A rugged, minimal framework for composing JavaScript behavior in your markup",
    detailedDescription: "Alpine.js offers you the reactive and declarative nature of big frameworks like Vue or React at a much lower cost. You get to keep your DOM, and sprinkle in behavior as you see fit.",
    logo: "https://alpinejs.dev/alpine_long.svg",
    category: "Frontend Frameworks",
    difficulty: "beginner",
    pricing: "free",
    popularity: 65,
    tags: ["lightweight", "reactive", "minimal", "dom"],
    features: ["Lightweight (15 attributes)", "No build step", "Reactive data", "Simple syntax", "Easy integration"],
    usedBy: ["Laravel", "GitHub", "Tailwind UI", "ConvertKit"],
    officialUrl: "https://alpinejs.dev",
    documentationUrl: "https://alpinejs.dev/start-here",
    githubUrl: "https://github.com/alpinejs/alpine",
    installCommand: "<script defer src=\"https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js\"></script>"
  }
];

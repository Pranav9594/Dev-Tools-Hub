
export const designTools = [
  {
    id: "figma",
    name: "Figma",
    description: "The collaborative interface design tool",
    detailedDescription: "Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows.",
    logo: "https://www.figma.com/favicon.ico",
    category: "Design Tools",
    difficulty: "beginner",
    pricing: "freemium",
    popularity: 92,
    featured: true,
    tags: ["design", "collaboration", "prototyping", "vector"],
    features: ["Real-time collaboration", "Vector editing", "Prototyping", "Design systems", "Developer handoff"],
    usedBy: ["Airbnb", "Microsoft", "Uber", "Google"],
    officialUrl: "https://www.figma.com",
    documentationUrl: "https://help.figma.com",
    installCommand: "Use web app or download desktop app"
  },
  {
    id: "adobe-xd",
    name: "Adobe XD",
    description: "Fast & powerful UI/UX design solution for websites, apps & more",
    detailedDescription: "Adobe XD is a vector-based user experience design tool for web apps and mobile apps, developed and published by Adobe Inc. It is available for macOS and Windows.",
    logo: "https://www.adobe.com/content/dam/cc/icons/xd.svg",
    category: "Design Tools",
    difficulty: "intermediate",
    pricing: "freemium",
    popularity: 75,
    tags: ["adobe", "ui-ux", "prototyping", "vector"],
    features: ["Design and prototype", "Voice prototyping", "Auto-animate", "Responsive resize", "Design specs"],
    usedBy: ["Adobe", "Disney", "Louis Vuitton", "Salesforce"],
    officialUrl: "https://www.adobe.com/products/xd.html",
    documentationUrl: "https://helpx.adobe.com/xd/user-guide.html",
    installCommand: "Download from Adobe Creative Cloud"
  },
  {
    id: "sketch",
    name: "Sketch",
    description: "Design better and faster",
    detailedDescription: "Sketch is a vector graphics editor for macOS developed by the Dutch company Bohemian Coding. It was first released on 7 September 2010 and won an Apple Design Award in 2012.",
    logo: "https://www.sketch.com/images/press/sketch-press-kit/app-icons/sketch-mac-icon@2x.png",
    category: "Design Tools",
    difficulty: "intermediate",
    pricing: "paid",
    popularity: 68,
    tags: ["mac", "vector", "symbols", "plugins"],
    features: ["Vector editing", "Symbols", "Text styles", "Export options", "Plugin ecosystem"],
    usedBy: ["Facebook", "Google", "Apple", "IBM"],
    officialUrl: "https://www.sketch.com",
    documentationUrl: "https://www.sketch.com/docs",
    installCommand: "Download from sketch.com (macOS only)"
  },
  {
    id: "invision",
    name: "InVision",
    description: "Digital product design platform powering the world's best user experiences",
    detailedDescription: "InVision is an American company that makes web-based prototyping tools for designing user interfaces and user experience design collaboration.",
    logo: "https://www.invisionapp.com/favicon.ico",
    category: "Design Tools",
    difficulty: "beginner",
    pricing: "freemium",
    popularity: 65,
    tags: ["prototyping", "collaboration", "feedback", "workflow"],
    features: ["Interactive prototypes", "Design collaboration", "User testing", "Workflow management", "Handoff tools"],
    usedBy: ["Nike", "HBO", "Evernote", "Netflix"],
    officialUrl: "https://www.invisionapp.com",
    documentationUrl: "https://support.invisionapp.com",
    installCommand: "Use web app"
  },
  {
    id: "framer",
    name: "Framer",
    description: "Interactive design tool for teams",
    detailedDescription: "Framer is an interactive design tool that allows teams to design and prototype websites and mobile apps with advanced animations and interactions.",
    logo: "https://www.framer.com/favicon.ico",
    category: "Design Tools",
    difficulty: "intermediate",
    pricing: "freemium",
    popularity: 72,
    tags: ["interactive", "prototyping", "animation", "react"],
    features: ["Interactive prototyping", "Advanced animations", "React components", "Team collaboration", "Publishing"],
    usedBy: ["Dropbox", "BMW", "Coinbase", "Shopify"],
    officialUrl: "https://www.framer.com",
    documentationUrl: "https://www.framer.com/docs",
    installCommand: "Use web app or download desktop app"
  },
  {
    id: "canva",
    name: "Canva",
    description: "Design anything. Publish anywhere",
    detailedDescription: "Canva is an Australian graphic design platform, used to create social media graphics, presentations, posters, documents and other visual content. The app includes templates for users to use.",
    logo: "https://static.canva.com/web/images/12487a1e645230d7b6a8.png",
    category: "Design Tools",
    difficulty: "beginner",
    pricing: "freemium",
    popularity: 88,
    tags: ["templates", "graphics", "social-media", "easy"],
    features: ["Drag-and-drop editor", "Templates", "Stock photos", "Brand kit", "Team collaboration"],
    usedBy: ["Small businesses", "Social media managers", "Students", "Non-profits"],
    officialUrl: "https://www.canva.com",
    documentationUrl: "https://www.canva.com/help",
    installCommand: "Use web app or download mobile app"
  },
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    description: "Make anything you can imagine with Photoshop",
    detailedDescription: "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1988 by Thomas and John Knoll.",
    logo: "https://www.adobe.com/content/dam/cc/icons/photoshop.svg",
    category: "Design Tools",
    difficulty: "advanced",
    pricing: "paid",
    popularity: 85,
    tags: ["adobe", "raster", "photo-editing", "professional"],
    features: ["Photo editing", "Digital art", "Layers", "Filters", "Color correction"],
    usedBy: ["Photographers", "Graphic designers", "Digital artists", "Marketing teams"],
    officialUrl: "https://www.adobe.com/products/photoshop.html",
    documentationUrl: "https://helpx.adobe.com/photoshop/user-guide.html",
    installCommand: "Download from Adobe Creative Cloud"
  },
  {
    id: "illustrator",
    name: "Adobe Illustrator",
    description: "Create beautiful vector art and illustration",
    detailedDescription: "Adobe Illustrator is a vector graphics editor and design program developed and marketed by Adobe Inc. Originally designed for the Apple Macintosh, development of Adobe Illustrator began in 1985.",
    logo: "https://www.adobe.com/content/dam/cc/icons/illustrator.svg",
    category: "Design Tools",
    difficulty: "advanced",
    pricing: "paid",
    popularity: 78,
    tags: ["adobe", "vector", "illustration", "logos"],
    features: ["Vector graphics", "Typography", "Color tools", "3D effects", "Global editing"],
    usedBy: ["Logo designers", "Illustrators", "Print designers", "Web designers"],
    officialUrl: "https://www.adobe.com/products/illustrator.html",
    documentationUrl: "https://helpx.adobe.com/illustrator/user-guide.html",
    installCommand: "Download from Adobe Creative Cloud"
  }
];

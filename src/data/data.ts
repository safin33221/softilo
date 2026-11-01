export interface ServiceMetric {
  value: string;
  label: string;
}

export interface ServiceFeatureItem {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  iconName: string;
  features: string[];
  featureHighlights: ServiceFeatureItem[];
  deliverables: string[];
  metrics: ServiceMetric[];
  process: ServiceProcessStep[];
  techStack: string[];
  faq: ServiceFaq[];
}

export interface ProjectResult {
  metric: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: "UI/UX" | "Software" | "Marketing";
  industry: string;
  client: string;
  year: string;
  image: string;
  shortDesc: string;
  challenge: string;
  solution: string;
  results: ProjectResult[];
  tags: string[];
  span?: string;
  liveUrl?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "1",
    title: "Custom Software Development",
    slug: "custom-software-development",
    tagline: "High-Performance Engineered Digital Architecture",
    category: "Engineering",
    shortDesc: "Scalable web applications, ERP, POS, CRM, and business management systems.",
    fullDesc:
      "We design, build, and deploy enterprise-grade bespoke software systems that solve complex operational hurdles. From mission-critical ERP platforms and real-time CRM dashboards to high-volume multi-tenant SaaS products, our engineering team adheres to modern cloud-native architectures, strict type safety, and resilient database partitioning.",
    iconName: "Code",
    features: [
      "Microservices & Serverless Cloud Architecture",
      "Robust Database Modeling & Real-Time Sync",
      "Bank-Grade Security, Role-Based Access & Auth",
      "Custom RESTful & High-Throughput GraphQL APIs",
      "Automated CI/CD DevOps & Dockerized Deployments",
      "High Availability & Low-Latency Caching Layers",
    ],
    featureHighlights: [
      {
        title: "Enterprise Resiliency",
        description:
          "Zero single-point-of-failure infrastructure with auto-scaling compute groups and global edge caching.",
      },
      {
        title: "Deterministic APIs",
        description:
          "Contract-driven API schemas with full versioning, real-time WebSocket feeds, and comprehensive documentation.",
      },
      {
        title: "Zero Technical Debt",
        description:
          "Strict TypeScript contracts, modular domain boundaries, automated testing suites, and audit logs.",
      },
    ],
    deliverables: [
      "Production-ready codebase with modular architecture",
      "Complete documentation, API specs, and ER diagrams",
      "Automated CI/CD pipelines & container configuration",
      "Dedicated staging and production cloud environments",
      "60-day post-launch warranty and SLA support",
    ],
    metrics: [
      { value: "99.98%", label: "Guaranteed Production Uptime" },
      { value: "10x", label: "Query Execution Speedup" },
      { value: "3.8x", label: "Average Efficiency Increase" },
      { value: "<120ms", label: "Global Edge Latency" },
    ],
    process: [
      {
        step: "01",
        title: "System Architecture & Discovery",
        description:
          "We audit your operational bottlenecks, map technical requirements, and formulate database schemas and component hierarchies.",
      },
      {
        step: "02",
        title: "Iterative Sprint Engineering",
        description:
          "Agile two-week sprints with staging previews, automated regression testing, and transparent progress demonstrations.",
      },
      {
        step: "03",
        title: "Security & Penetration Testing",
        description:
          "Rigorous vulnerability scans, query optimization, stress testing, and role permission validation.",
      },
      {
        step: "04",
        title: "Deployment & Scale Assurance",
        description:
          "Zero-downtime blue/green deployment, comprehensive telemetry setup, and continuous performance tracking.",
      },
    ],
    techStack: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "AWS / Vercel",
    ],
    faq: [
      {
        question: "How long does a typical custom software project take?",
        answer:
          "MVP builds generally require 6 to 10 weeks depending on integration complexity. Enterprise ERP or complex SaaS platforms usually take between 3 to 6 months with bi-weekly deliverables.",
      },
      {
        question: "Do you provide post-deployment support and code ownership?",
        answer:
          "Yes, 100% full intellectual property and code repository ownership is transferred directly to your organization, coupled with our 60-day post-launch warranty.",
      },
    ],
  },
  {
    id: "2",
    title: "AI Automation",
    slug: "ai-automation",
    tagline: "Autonomous Agentic Pipelines & Intelligent Workflows",
    category: "Artificial Intelligence",
    shortDesc: "Automate workflows, customer support, lead generation, and operations.",
    fullDesc:
      "Transform human bottlenecks into lightning-fast autonomous pipelines. Softilo builds custom Retrieval-Augmented Generation (RAG) agents, conversational AI concierges, document processing engines, and automated outreach triggers that work 24/7 with human-level contextual reasoning.",
    iconName: "Cpu",
    features: [
      "Custom RAG Knowledge Bases & Vector Embeddings",
      "Autonomous Multi-Agent Workflow Orchestration",
      "24/7 Context-Aware Customer Support Agents",
      "Intelligent Lead Qualification & Automated CRM Sync",
      "Automated Invoice, Contract & PDF Parsing",
      "Real-Time Sentiment & Anomaly Detection",
    ],
    featureHighlights: [
      {
        title: "Hallucination-Proof RAG",
        description:
          "Grounded deterministic responses backed strictly by your company documents, policies, and product catalogs.",
      },
      {
        title: "Cross-System Integration",
        description:
          "Connects natively to Slack, HubSpot, Salesforce, Stripe, Zendesk, and internal databases.",
      },
      {
        title: "Continuous Self-Tuning",
        description:
          "Continuous feedback loops capture edge cases and optimize prompt chains automatically over time.",
      },
    ],
    deliverables: [
      "Trained and fine-tuned AI agent systems",
      "Vector search engine and private documentation ingestion pipeline",
      "Multi-channel deployment (Web Widget, WhatsApp, Slack, Telegram)",
      "Analytics dashboard monitoring token cost, sentiment, and accuracy",
      "Comprehensive team training and prompt playbook",
    ],
    metrics: [
      { value: "85%", label: "First-Contact Resolution Rate" },
      { value: "<2.1s", label: "Average Inference Latency" },
      { value: "65%", label: "Operational Overhead Reduction" },
      { value: "24/7", label: "Autonomous Availability" },
    ],
    process: [
      {
        step: "01",
        title: "Workflow Friction Audit",
        description:
          "We analyze manual repetition across support, operations, and sales to identify maximum-ROI automation points.",
      },
      {
        step: "02",
        title: "Knowledge Vectorization",
        description:
          "Ingest, sanitize, and index internal manuals, FAQs, and proprietary datasets into high-performance vector databases.",
      },
      {
        step: "03",
        title: "Agent Chaining & Guardrails",
        description:
          "Build multi-step logic flows, strict safety guardrails, human-in-the-loop fallback hooks, and tool integrations.",
      },
      {
        step: "04",
        title: "Integration & Live Rollout",
        description:
          "Embed into your client-facing touchpoints and train your internal team with automated metrics monitoring.",
      },
    ],
    techStack: [
      "LangChain",
      "LlamaIndex",
      "OpenAI GPT-4o",
      "Claude 3.5 Sonnet",
      "Pinecone",
      "pgvector",
      "Python",
      "FastAPI",
    ],
    faq: [
      {
        question: "Is our proprietary data secure and kept confidential?",
        answer:
          "Absolutely. We utilize private zero-data-retention enterprise API endpoints and self-hosted vector databases, ensuring your proprietary knowledge is never used for foundation model training.",
      },
      {
        question: "What happens when the AI agent encounters an unfamiliar question?",
        answer:
          "Our agents feature graceful fallback logic that creates a high-priority ticket or seamlessly routes the dialogue to a designated human specialist.",
      },
    ],
  },
  {
    id: "3",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    tagline: "Hypnotic Interfaces Designed for Radical Conversions",
    category: "Design",
    shortDesc: "Modern, intuitive, and conversion-focused digital experiences.",
    fullDesc:
      "We fuse Swiss graphic design precision, tactile micro-interactions, and behavioral psychology to sculpt interfaces that mesmerize users and drive conversion metrics through the roof. Every pixel is calculated to position your brand as an untouchable market leader.",
    iconName: "Layout",
    features: [
      "Multi-Device Scalable Design Systems (Tokens, Atoms, Organisms)",
      "Interactive High-Fidelity Prototypes in Figma",
      "Quantitative User Journey & Conversion Funnel Audits",
      "Tactile Micro-Interactions & Fluid Motion Choreography",
      "Accessibility Standards (WCAG 2.1 AA Compliant)",
      "Developer-Ready Design Tokens & Specs Handover",
    ],
    featureHighlights: [
      {
        title: "Psychological Friction Removal",
        description:
          "Fitts's Law and Hick's Law optimized layouts that guide user eyes effortlessly to desired actions.",
      },
      {
        title: "Living Component Libraries",
        description:
          "Comprehensive Figma design systems with auto-layout, variants, and dark/light color token architectures.",
      },
      {
        title: "Framer-Motion Ready",
        description:
          "Motion curves and transition specs documented for flawless front-end implementation.",
      },
    ],
    deliverables: [
      "Complete Figma master file with atomic component library",
      "Clickable interactive high-fidelity prototype",
      "Design tokens JSON and documentation guide for developers",
      "Responsive viewport layouts (Mobile, Tablet, Desktop, Ultra-wide)",
      "Iconography, typography scale, and visual asset exports",
    ],
    metrics: [
      { value: "+185%", label: "Average Landing Page Conversion" },
      { value: "4.9/5", label: "User Usability Benchmark Score" },
      { value: "-45%", label: "Drop-Off Rate in Onboarding" },
      { value: "100%", label: "WCAG 2.1 Accessibility Score" },
    ],
    process: [
      {
        step: "01",
        title: "User Research & Cognitive Mapping",
        description:
          "Competitor dissection, customer personas, qualitative user interviews, and journey friction analysis.",
      },
      {
        step: "02",
        title: "Low-Fidelity Wireframes",
        description:
          "Rapid structural exploration to define visual hierarchy, content architecture, and conversion paths.",
      },
      {
        step: "03",
        title: "High-Fidelity Visual Art Direction",
        description:
          "Applying brand typography, vibrant dark-mode gradients, glassmorphism treatments, and custom UI components.",
      },
      {
        step: "04",
        title: "Prototyping & Developer Handoff",
        description:
          "Micro-animation tuning, user testing sessions, and pixel-perfect token delivery for front-end engineers.",
      },
    ],
    techStack: [
      "Figma",
      "FigJam",
      "Principle",
      "Tailwind CSS",
      "Framer Motion",
      "Adobe Creative Cloud",
    ],
    faq: [
      {
        question: "Do you design both mobile apps and web platforms?",
        answer:
          "Yes, we design comprehensive cross-platform systems including responsive web, native iOS, Android, and dashboard web applications.",
      },
      {
        question: "Can our engineers implement your Figma components easily?",
        answer:
          "Yes. Our design systems are structured specifically matching modern CSS and Tailwind conventions, including naming tokens and layout flex/grid constraints.",
      },
    ],
  },
  {
    id: "4",
    title: "Digital Marketing",
    slug: "digital-marketing",
    tagline: "Algorithmic Precision for Explosive Growth & CAC Reduction",
    category: "Growth",
    shortDesc: "Strategic campaigns to increase visibility, leads, and revenue.",
    fullDesc:
      "Stop burning capital on generic vanity metrics. Softilo executes data-driven, performance-obsessed marketing ecosystems that conquer ad auctions, maximize customer lifetime value (LTV), and generate predictable inbound sales pipelines across Meta, Google, LinkedIn, and organic search.",
    iconName: "TrendingUp",
    features: [
      "Full-Funnel Paid Advertising (Meta, Google Search & PMax, LinkedIn)",
      "Technical & Programmatic SEO Architecture",
      "High-Converting Landing Page Copywriting & Funnels",
      "Multi-Touch Attribution Modeling & Analytics Setup",
      "Automated Email Nurturing & Retention Drip Sequences",
      "Continuous A/B Creative Testing & Ad Copy Iteration",
    ],
    featureHighlights: [
      {
        title: "Predictable ROAS",
        description:
          "Algorithmic audience modeling and negative match exclusions that protect ad spend and boost return on ad spend.",
      },
      {
        title: "Conversion Rate Optimization",
        description:
          "Heatmap tracking, user session recordings, and headline testing to extract maximum revenue from incoming traffic.",
      },
      {
        title: "Organic Authority Moats",
        description:
          "Search-intent focused content clusters and technical performance optimization for lasting Google rankings.",
      },
    ],
    deliverables: [
      "Custom multi-channel ad campaign architecture & launch",
      "High-converting visual ad creatives & copywriting variations",
      "Real-time Looker Studio / dashboard tracking ROI, CAC, and LTV",
      "Technical SEO audit and on-page optimization roadmap",
      "Weekly performance reports with actionable strategic adjustments",
    ],
    metrics: [
      { value: "4.6x", label: "Average Blended ROAS" },
      { value: "-38%", label: "Reduction in Customer Acquisition Cost" },
      { value: "+320%", label: "Organic Search Inbound Growth" },
      { value: "$12M+", label: "Client Revenue Generated" },
    ],
    process: [
      {
        step: "01",
        title: "Audience & Data Audit",
        description:
          "Verify tracking pixel accuracy, audit past campaign data, analyze competitor ad strategies, and locate untapped pockets.",
      },
      {
        step: "02",
        title: "Creative & Funnel Assembly",
        description:
          "Craft high-converting ad hooks, film-grade visual concepts, compelling offer positioning, and dedicated landers.",
      },
      {
        step: "03",
        title: "Algorithmic Bidding & Testing",
        description:
          "Launch controlled multi-variant ad sets with automated bid rules to identify top-performing creative assets.",
      },
      {
        step: "04",
        title: "Vertical & Horizontal Scaling",
        description:
          "Scale winning creatives systematically across lookalikes, broader match types, and retargeting channels without fatigue.",
      },
    ],
    techStack: [
      "Meta Ads Manager",
      "Google Ads & Analytics 4",
      "LinkedIn Campaign Manager",
      "SEMrush / Ahrefs",
      "Klaviyo",
      "Triple Whale",
    ],
    faq: [
      {
        question: "What minimum ad budget do you recommend for paid campaigns?",
        answer:
          "We generally recommend a minimum ad spend of $2,500/month to ensure statistical significance during initial testing phases and prompt algorithm learning.",
      },
      {
        question: "How do you track conversions with modern privacy restrictions?",
        answer:
          "We implement Server-Side Tracking (Conversions API) via Google Tag Manager Server and First-Party attribution models for pristine tracking accuracy.",
      },
    ],
  },
  {
    id: "5",
    title: "Educational Solutions",
    slug: "educational-solutions",
    tagline: "Empowering Modern Academies, Institutes & Creators",
    category: "EdTech",
    shortDesc: "School, coaching center, and learning management platforms.",
    fullDesc:
      "We build end-to-end digital infrastructure for modern educational institutions, tutoring conglomerates, and digital course creators. From student information systems (SIS) and automated tuition billing to interactive video classrooms and AI quiz generators, we digitize your entire educational ecosystem.",
    iconName: "GraduationCap",
    features: [
      "Comprehensive Student & Faculty ERP Management",
      "Automated Fee Collection, Invoicing & SMS Alerts",
      "Interactive Course Player with DRM Video Protection",
      "Automated Assessment, Grading & Certificate Engines",
      "Parent Communication Portal & Attendance Tracking",
      "Live Streaming Classrooms & Whiteboard Integration",
    ],
    featureHighlights: [
      {
        title: "Zero-Latency Video Delivery",
        description:
          "Adaptive bitrate video streaming with pirate-proof watermark encryption and instant playback.",
      },
      {
        title: "Automated Tuition Collection",
        description:
          "Automated recurring payment reminders, digital invoices, and multi-gateway checkout systems.",
      },
      {
        title: "Actionable Academic Telemetry",
        description:
          "Deep progress tracking, dropout risk indicators, and automated student performance scorecards.",
      },
    ],
    deliverables: [
      "Fully customized web and mobile-ready LMS / ERP portal",
      "Parent, Student, Teacher, and Super-Admin role dashboards",
      "Automated SMS/Email notification gateway configuration",
      "Secure encrypted video hosting pipeline integration",
      "Onboarding and administrative staff training sessions",
    ],
    metrics: [
      { value: "45,000+", label: "Active Daily Students Served" },
      { value: "99.4%", label: "On-Time Tuition Fee Clearance" },
      { value: "70%", label: "Administrative Time Saved" },
      { value: "4.8/5", label: "Parent & Student Feedback" },
    ],
    process: [
      {
        step: "01",
        title: "Institutional Workflow Audit",
        description:
          "Map course structures, batch schedules, grading criteria, fee structures, and administrative hierarchies.",
      },
      {
        step: "02",
        title: "System Configuration & Database Setup",
        description:
          "Structure student records, role permissions, course categories, and secure payment processor credentials.",
      },
      {
        step: "03",
        title: "Custom Portal UI & Content Ingestion",
        description:
          "Implement brand colors, upload curriculum media, setup automated quizzes, and test certificate generators.",
      },
      {
        step: "04",
        title: "Staff Onboarding & Campus Launch",
        description:
          "Live training webinars, student welcome emails, and 24/7 priority support during the first intake cycle.",
      },
    ],
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
      "AWS S3 & CloudFront",
      "Mux / Bunny.net Video",
      "bKash / Nagad / SSLCommerz",
    ],
    faq: [
      {
        question: "How does the 2-Year Software Ownership Transfer model work?",
        answer:
          "Unlike traditional SaaS providers that charge subscription rent forever, maintaining a continuous subscription for 2 years with Softilo grants your institution 100% full software/system license ownership—giving you a permanent institutional asset.",
      },
      {
        question: "Are there any monthly maintenance or hidden support fees?",
        answer:
          "Zero. Every package includes 2 Years Free Maintenance, saving your coaching center or academy ৳2,000–৳3,000 per month in market-standard maintenance, server monitoring, and bug resolution costs.",
      },
      {
        question: "Can our existing student and grade records be imported?",
        answer:
          "Yes, we build custom migration pipelines to seamlessly import legacy CSVs, Excel files, or third-party database records without any data loss.",
      },
      {
        question: "Is video content protected from piracy and unauthorized downloading?",
        answer:
          "Yes, we implement dynamic watermark overlays with the student's unique ID and encrypted HLS video streaming to prevent screen capture and rip tools.",
      },
    ],
  },
  {
    id: "6",
    title: "Website & E-Commerce",
    slug: "website-e-commerce",
    tagline: "Ultra-Fast Modern Storefronts That Print Revenue",
    category: "Web Engineering",
    shortDesc: "Business websites, online stores, and high-converting landing pages.",
    fullDesc:
      "We build lightning-fast, headless e-commerce storefronts and corporate websites engineered for sub-second page loads and maximum conversion rates. Powered by modern frameworks, our websites turn casual browsers into paying customers and cement your market leadership.",
    iconName: "ShoppingBag",
    features: [
      "Headless E-Commerce (Shopify Plus, Medusa, Next.js Commerce)",
      "Sub-Second Core Web Vitals & 95+ PageSpeed Scores",
      "1-Click Seamless Checkout & Upsell Architecture",
      "Advanced Inventory, SKU & Catalog Management",
      "Global Multi-Currency & Localization Support",
      "Omnichannel CRM & Inventory Synchronization",
    ],
    featureHighlights: [
      {
        title: "Hyper-Fast Loading",
        description:
          "Optimized assets and edge rendering eliminate bounce rates caused by slow loading times.",
      },
      {
        title: "Frictionless Checkout",
        description:
          "Custom checkout flows with Apple Pay, Google Pay, and localized payment rails.",
      },
      {
        title: "Dynamic Visual Merchandising",
        description:
          "Smart recommendation carousels, bundle builders, and personalized customer showcases.",
      },
    ],
    deliverables: [
      "Custom-designed responsive e-commerce storefront",
      "Payment gateway integrations with automated taxes and shipping",
      "Headless CMS integration for effortless marketing team edits",
      "Full SEO setup and schema markup for all products",
      "Google Tag Manager and pixel event tracking setup",
    ],
    metrics: [
      { value: "<0.8s", label: "Average First Contentful Paint" },
      { value: "+44%", label: "Average Order Value Boost" },
      { value: "99+", label: "Google PageSpeed Mobile Score" },
      { value: "3.2x", label: "Mobile Checkout Conversion" },
    ],
    process: [
      {
        step: "01",
        title: "E-Commerce Strategy & UX Wireframing",
        description:
          "Map product catalogs, customer purchase funnels, and checkout optimization opportunities.",
      },
      {
        step: "02",
        title: "Headless Architecture & Theming",
        description:
          "Build ultra-responsive front-end components synced with Shopify, Medusa, or custom headless backends.",
      },
      {
        step: "03",
        title: "Payment, Cart & Logistics Integration",
        description:
          "Connect multi-currency gateways, automated shipping calculation APIs, and inventory sync systems.",
      },
      {
        step: "04",
        title: "Load Stressing & Live Launch",
        description:
          "Simulate Black Friday flash sale traffic loads, audit payment webhooks, and launch with zero downtime.",
      },
    ],
    techStack: [
      "Next.js",
      "Shopify Storefront API",
      "Tailwind CSS",
      "Stripe",
      "Algolia Search",
      "Sanity CMS",
    ],
    faq: [
      {
        question: "Can we manage products and blogs without touching code?",
        answer:
          "Yes, we integrate user-friendly headless CMS platforms like Sanity or Shopify Admin so your marketing team has total control.",
      },
      {
        question: "Do you migrate products and customer data from WooCommerce or Magento?",
        answer:
          "Yes, we handle complete data migration including customer histories, product variations, order logs, and SEO redirects.",
      },
    ],
  },
  {
    id: "7",
    title: "Business Automation",
    slug: "business-automation",
    tagline: "Connected Operations & Flawless Execution",
    category: "Operations",
    shortDesc: "CRM, inventory, HR, and operational process automation solutions.",
    fullDesc:
      "Eliminate repetitive paperwork, disconnected spreadsheets, and manual data entry errors. Softilo connects your disparate SaaS tools into a synchronized, automated nervous system that triggers workflows instantly across departments.",
    iconName: "Building2",
    features: [
      "Cross-Platform Workflow Integrations (Make, Zapier, Custom Webhooks)",
      "Automated Invoicing & Financial Reconciliation",
      "Employee Onboarding & HR Process Automation",
      "Real-Time Multi-Warehouse Inventory Synchronization",
      "Automated Contract Generation with E-Signatures",
      "Executive Dashboard Telemetry & Alert Escalation",
    ],
    featureHighlights: [
      {
        title: "Single Source of Truth",
        description:
          "All business data flows into a unified data warehouse with zero duplicate entries.",
      },
      {
        title: "Automated Triggers",
        description:
          "Lead submissions automatically create CRM records, generate invoices, and alert team leads.",
      },
      {
        title: "Error-Free Operations",
        description:
          "Eliminate manual typos and missed tasks with strict automated validation logic.",
      },
    ],
    deliverables: [
      "Custom automation architecture blueprint",
      "Connected webhook pipelines and API middleware",
      "Centralized analytics and executive reporting dashboard",
      "Failsafe alerting mechanisms for pipeline errors",
      "Operational SOP manual for internal team usage",
    ],
    metrics: [
      { value: "140+", label: "Hours Saved Per Month Per Team" },
      { value: "0%", label: "Manual Entry Error Rate" },
      { value: "99.9%", label: "Webhook Reliability Rate" },
      { value: "4.2x", label: "Operational Speed Increase" },
    ],
    process: [
      {
        step: "01",
        title: "Operational Stack Audit",
        description:
          "Map all software, spreadsheets, and manual handoffs to locate operational friction.",
      },
      {
        step: "02",
        title: "Middleware & API Logic Design",
        description:
          "Design fail-safe automation recipes with payload validation and error logging.",
      },
      {
        step: "03",
        title: "Sandbox Testing & Edge Case Scenarios",
        description:
          "Run thousands of test transactions to ensure complete reliability under extreme edge cases.",
      },
      {
        step: "04",
        title: "Live Synchronization & Monitoring",
        description:
          "Deploy live automated workflows with automated Slack/Teams notification webhooks.",
      },
    ],
    techStack: [
      "Node.js",
      "Make / n8n",
      "Zapier",
      "PostgreSQL",
      "HubSpot / Salesforce",
      "DocuSign API",
    ],
    faq: [
      {
        question: "Can you automate legacy software that doesn't have open APIs?",
        answer:
          "Yes, we can leverage secure database hooks, automated SFTP drops, or intelligent headless automation to sync legacy platforms.",
      },
      {
        question: "What happens if an API in our stack goes down?",
        answer:
          "Our automation pipelines feature built-in queuing and retry mechanisms with exponential backoff and instant failure alerts.",
      },
    ],
  },
  {
    id: "8",
    title: "Video Editing & Production",
    slug: "video-editing",
    tagline: "Cinematic Visual Storytelling That Captivates & Sells",
    category: "Creative Media",
    shortDesc: "Professional short-form and promotional videos for brands.",
    fullDesc:
      "In a world where attention is the ultimate currency, standard videos get skipped. We craft high-retention commercials, viral short-form clips (TikTok, Reels, Shorts), and product launch videos with frame-accurate pacing, custom sound design, and hypnotic pacing.",
    iconName: "Video",
    features: [
      "Viral Short-Form Content Creation (TikTok, Reels, Shorts)",
      "High-End Brand Commercials & Founder Stories",
      "B2B SaaS Product Demo Walkthroughs & Teasers",
      "Dynamic Sound Design, Foley & Audio Mastering",
      "Color Grading (ACES / DaVinci Resolve Workflow)",
      "Subtitles & Kinetic Typography Styling",
    ],
    featureHighlights: [
      {
        title: "Hook Optimization",
        description:
          "First 3-second visual hooks engineered to halt the scroll and maximize audience retention curves.",
      },
      {
        title: "Cinematic Soundscapes",
        description:
          "Layered sound effects and punchy risers that evoke emotional resonance and brand prestige.",
      },
      {
        title: "Rapid Turnaround Pipeline",
        description:
          "Fast iteration cycles to ride trending cultural moments and keep your brand top-of-mind.",
      },
    ],
    deliverables: [
      "Master 4K UHD video exports optimized for each platform",
      "Platform-specific aspect ratios (9:16, 16:9, 1:1, 4:5)",
      "Integrated kinetic subtitles and burned-in captions",
      "Raw project source files and reusable motion templates",
      "Thumbnail designs crafted for high click-through rates",
    ],
    metrics: [
      { value: "4.8M+", label: "Viral Views Generated" },
      { value: "78%", label: "Average Retention Rate at 30s" },
      { value: "3.5x", label: "Increase in Organic Reach" },
      { value: "48hr", label: "Short-Form Turnaround Option" },
    ],
    process: [
      {
        step: "01",
        title: "Storyboarding & Script Polish",
        description:
          "Review raw footage, refine hooks, and establish the visual pacing and brand moodboard.",
      },
      {
        step: "02",
        title: "Rough Cut & Narrative Flow",
        description:
          "Assemble the core story line, cut the fluff, and establish dynamic visual rhythm.",
      },
      {
        step: "03",
        title: "Color Grading, SFX & VFX Polish",
        description:
          "Apply DaVinci Resolve cinematic color grading, custom sound effects, and kinetic text.",
      },
      {
        step: "04",
        title: "Platform Mastering & Delivery",
        description:
          "Render pristine multi-format exports ready for instant publishing and ad deployment.",
      },
    ],
    techStack: [
      "DaVinci Resolve Studio",
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "iZotope RX",
      "Blender",
    ],
    faq: [
      {
        question: "Can you work with footage shot on iPhones or mobile cameras?",
        answer:
          "Yes! Modern smartphone cameras produce incredible 4K footage. With our professional color grading and audio cleanup, the results look remarkably high-end.",
      },
      {
        question: "How do revisions work for video projects?",
        answer:
          "We use Frame.io for time-stamped video reviews, allowing you to click directly on any second of video to leave precise feedback.",
      },
    ],
  },
  {
    id: "9",
    title: "Motion Graphics",
    slug: "motion-graphics",
    tagline: "Dynamic Visual Animations & Mind-Bending 3D Assets",
    category: "Motion Design",
    shortDesc: "Creative animations and visual storytelling for businesses.",
    fullDesc:
      "Explain complex technical concepts, abstract software architectures, and visionary product designs with fluid 2D and 3D motion graphics. We create brand idents, product reveals, and explainer animations that captivate audiences.",
    iconName: "Film",
    features: [
      "3D Product Renders & Photorealistic Exploded Views",
      "Kinetic Typography & Dynamic Logo Idents",
      "Abstract Tech Visualization & Architecture Walkthroughs",
      "Lottie / Rive Interactive Vector Animations for Web",
      "UI Interaction Screen Recordings & 3D Isometric Mockups",
      "Broadcast-Quality Animated Commercial Openers",
    ],
    featureHighlights: [
      {
        title: "Web-Ready Interactive Vectors",
        description:
          "Ultra-lightweight Lottie and Rive animations that load instantly and respond to user hover and scroll.",
      },
      {
        title: "Photorealistic 3D Lighting",
        description:
          "Complex material shaders and ray-traced lighting that make digital products feel tangible and premium.",
      },
      {
        title: "Clear Conceptual Communication",
        description:
          "Translate difficult technical jargon into intuitive, captivating visual metaphors.",
      },
    ],
    deliverables: [
      "Rendered animation videos in ProRes 4444 and H.264 formats",
      "Lightweight JSON / Lottie / Rive web asset packages",
      "Transparent alpha channel exports for website overlays",
      "Reusable graphic asset kit for marketing materials",
      "Full project archive with asset dependencies",
    ],
    metrics: [
      { value: "3x", label: "Product Understanding Retention" },
      { value: "<150kb", label: "Lottie Vector File Weight" },
      { value: "60 FPS", label: "Silky Smooth Rendering" },
      { value: "98%", label: "Client Approval Rate" },
    ],
    process: [
      {
        step: "01",
        title: "Styleframes & Moodboard Alignment",
        description:
          "Establish color palettes, geometry, and key still frames to lock in the art direction.",
      },
      {
        step: "02",
        title: "Animatic & Motion Timing",
        description:
          "Build grayscale animatics to validate pacing, camera movements, and transition beats.",
      },
      {
        step: "03",
        title: "3D Modeling, Texturing & Animation",
        description:
          "Apply physically-based materials, configure dynamic camera choreography, and animate objects.",
      },
      {
        step: "04",
        title: "Final Render, Compositing & Code Export",
        description:
          "Multi-pass rendering, compositing in After Effects, and optimization for web and video players.",
      },
    ],
    techStack: [
      "Cinema 4D",
      "Blender",
      "Adobe After Effects",
      "Octane / Redshift",
      "Rive",
      "LottieFiles",
    ],
    faq: [
      {
        question: "Can we embed these animations directly onto our website without slowing down page load?",
        answer:
          "Yes! We specialize in Rive and Lottie vector animations which render directly via canvas/WebGL at 60fps while weighing only a few kilobytes.",
      },
      {
        question: "Do you supply source 3D models and project files?",
        answer:
          "Yes, complete source files (.blend, .c4d, .aep) can be packaged and provided upon project completion.",
      },
    ],
  },
];

export const portfolioProjects: ProjectItem[] = [
  {
    id: "1",
    title: "Aura Fine Dining",
    slug: "aura-fine-dining",
    category: "UI/UX",
    industry: "Luxury Hospitality",
    client: "Aura Culinary Group (London & Dubai)",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop",
    shortDesc:
      "An ethereal, ultra-luxury digital ordering and table reservation experience with 3D table selection.",
    challenge:
      "Aura Fine Dining was suffering from a disjointed phone-based reservation system and high no-show rates. Their digital presence felt dated compared to their Michelin-starred physical dining atmosphere.",
    solution:
      "We conceived and engineered an immersive digital platform featuring an interactive 3D table selection experience, synchronized tasting menu previews, and an automated SMS concierge system.",
    results: [
      { metric: "+280%", label: "Online Direct Reservations" },
      { metric: "-72%", label: "No-Show Rate Reduction" },
      { metric: "$1.4M", label: "Tasting Menu Upsells" },
      { metric: "4.9/5", label: "Guest Satisfaction Score" },
    ],
    tags: ["Next.js", "Tailwind CSS", "Figma", "Three.js", "Stripe"],
    span: "md:col-span-2 md:row-span-2",
    liveUrl: "https://example.com/aura",
  },
  {
    id: "2",
    title: "Elevate Heights",
    slug: "elevate-heights",
    category: "Software",
    industry: "Commercial Real Estate",
    client: "Elevate Property Capital",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    shortDesc:
      "Enterprise asset management ERP and investor portal with real-time portfolio analytics.",
    challenge:
      "Managing 40+ high-value skyscraper properties across three continents involved hundreds of uncoordinated spreadsheets, manual quarterly distributions, and delayed investor reporting.",
    solution:
      "Softilo developed a unified multi-tenant property management platform with real-time occupancy telemetry, automated investor dividend calculations, and secure document vault integration.",
    results: [
      { metric: "$380M", label: "Assets Under Management Tracked" },
      { metric: "92%", label: "Faster Quarterly Reporting" },
      { metric: "100%", label: "Audit Accuracy" },
      { metric: "2,400+", label: "Active Institutional Investors" },
    ],
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker"],
    span: "md:col-span-1 md:row-span-1",
    liveUrl: "https://example.com/elevate",
  },
  {
    id: "3",
    title: "Nova Tech University",
    slug: "nova-tech-university",
    category: "Marketing",
    industry: "Higher Education",
    client: "Nova Tech Global Academy",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    shortDesc:
      "Algorithmic student acquisition campaign and high-converting program enrollment funnels.",
    challenge:
      "Declining domestic student enrollment and rising cost-per-acquisition (CPA) on standard Google Ad channels threatened faculty expansion plans.",
    solution:
      "We restructured Nova Tech's entire digital advertising ecosystem, launched intent-driven video storytelling ad campaigns across YouTube & Meta, and designed tailored program landing pages.",
    results: [
      { metric: "+310%", label: "Qualified Enrollment Leads" },
      { metric: "-48%", label: "Cost Per Enrolled Student" },
      { metric: "18,500+", label: "Applications Processed" },
      { metric: "5.4x", label: "Campaign Return on Ad Spend" },
    ],
    tags: ["Performance Marketing", "Meta Ads", "Google Ads", "Analytics", "Copywriting"],
    span: "md:col-span-1 md:row-span-1",
    liveUrl: "https://example.com/novatech",
  },
  {
    id: "4",
    title: "Horizon Escapes",
    slug: "horizon-escapes",
    category: "Software",
    industry: "Luxury Travel & Concierge",
    client: "Horizon Travel Collective",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
    shortDesc:
      "Dynamic itinerary builder and AI concierge matching travelers with private villas and yachts.",
    challenge:
      "Creating bespoke travel itineraries required travel specialists to spend 6+ hours per client manually emailing villa managers, yacht charters, and private chefs.",
    solution:
      "We engineered a smart itinerary generation engine with instant pricing calculations, automated vendor availability checks, and integrated e-signature booking flows.",
    results: [
      { metric: "80%", label: "Faster Itinerary Generation" },
      { metric: "$3.2M", label: "First Quarter Bookings" },
      { metric: "+65%", label: "Client Re-booking Rate" },
      { metric: "15 min", label: "Average Booking Cycle" },
    ],
    tags: ["Next.js", "AI Pipelines", "Tailwind CSS", "Prisma", "PostgreSQL"],
    span: "md:col-span-2 md:row-span-1",
    liveUrl: "https://example.com/horizon",
  },
  {
    id: "5",
    title: "PulseFin Pay",
    slug: "pulsefin-pay",
    category: "Software",
    industry: "Fintech & Web3 Payments",
    client: "PulseFin Global Ltd.",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    shortDesc:
      "High-throughput cross-border settlement gateway with institutional security & instant reconciliation.",
    challenge:
      "Cross-border B2B suppliers suffered from 3-5 business day wire delays, exorbitant foreign exchange fees, and high rates of manual reconciliation errors.",
    solution:
      "We engineered a modern financial settlement dashboard with real-time liquidity routing, sub-second transaction tracking, and automated multi-currency reconciliation.",
    results: [
      { metric: "$85M+", label: "Monthly Volume Processed" },
      { metric: "<3.2s", label: "Settlement Finality" },
      { metric: "99.999%", label: "System Availability" },
      { metric: "-60%", label: "Transaction Fees Saved" },
    ],
    tags: ["React", "TypeScript", "Node.js", "Redis", "Kafka", "PostgreSQL"],
    span: "md:col-span-1 md:row-span-1",
    liveUrl: "https://example.com/pulsefin",
  },
  {
    id: "6",
    title: "Apex Cloud Studio",
    slug: "apex-cloud-studio",
    category: "UI/UX",
    industry: "Developer Tools & Cloud Infrastructure",
    client: "Apex Systems Inc.",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop",
    shortDesc:
      "A dark-mode-first developer dashboard for orchestrating Kubernetes clusters and serverless fleets.",
    challenge:
      "Developers struggled with cognitive overload due to cluttered cloud infrastructure consoles with convoluted navigation and unhelpful error states.",
    solution:
      "Softilo redesigned the entire cloud console from scratch: modular node graphs, contextual keyboard shortcuts, instant terminal drawer overlays, and high-contrast telemetry charts.",
    results: [
      { metric: "+190%", label: "Developer Activation Rate" },
      { metric: "-55%", label: "Cluster Misconfigurations" },
      { metric: "4.9/5", label: "Dev Community NPS" },
      { metric: "45k+", label: "Active Weekly Engineers" },
    ],
    tags: ["Figma", "Design Systems", "Tailwind CSS", "Data Visualization", "UX Research"],
    span: "md:col-span-2 md:row-span-1",
    liveUrl: "https://example.com/apex",
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServices(): ServiceItem[] {
  return servicesData;
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getAllProjects(): ProjectItem[] {
  return portfolioProjects;
}

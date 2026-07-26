// Centralized site content for Clipe Consult
// Single source of truth used by every section component

import {
  Globe, Code2, HardDrive, Server, Network, GraduationCap, Briefcase,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  number: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  keywords: string[];
  slug: string;
};

export const services: Service[] = [
  {
    id: "website-design",
    number: "01",
    icon: Globe,
    title: "Website Design & Development",
    shortDescription: "Stunning, responsive, SEO-ready websites for businesses, schools, NGOs, churches & e-commerce.",
    description:
      "We design visually stunning, responsive, fast-loading websites optimized for search engines. From business websites, schools, NGOs, hotels, hospitals and churches to e-commerce stores, real estate platforms and corporate portals — every site is built with modern UI/UX, secure infrastructure and clean code.",
    features: [
      "Responsive Design",
      "SEO Ready",
      "SSL Security",
      "CMS Integration",
      "Payment Gateway",
      "Booking Systems",
      "Speed Optimization",
      "Analytics Integration",
    ],
    keywords: ["Website Design Ghana", "Web Development Ghana", "WordPress Development", "E-commerce"],
    slug: "website-design-ghana",
  },
  {
    id: "software-development",
    number: "02",
    icon: Code2,
    title: "Software Development",
    shortDescription: "Scalable software, ERP, CRM, school & hospital management systems and mobile apps.",
    description:
      "We develop scalable software solutions tailored to your business operations — including management systems, inventory software, accounting systems, HR systems, school management, hospital systems and mobile applications that integrate with your existing workflows.",
    features: [
      "Cloud Applications",
      "Mobile Apps",
      "Desktop Applications",
      "APIs",
      "Database Design",
      "AI Integration",
      "Automation",
      "ERP / CRM",
    ],
    keywords: ["Software Development Ghana", "Custom Software", "ERP Solutions", "Mobile Apps"],
    slug: "software-development",
  },
  {
    id: "hardware-it-support",
    number: "03",
    icon: HardDrive,
    title: "Hardware & IT Support",
    shortDescription: "Repairs, maintenance, CCTV, networking and managed IT support for businesses.",
    description:
      "Professional installation, maintenance, repair, troubleshooting, upgrades, preventive maintenance and managed IT support for businesses. We keep your systems running so you can focus on what you do best.",
    features: [
      "Laptop & Desktop Repairs",
      "Printer Setup",
      "CCTV Installation",
      "Server Maintenance",
      "Computer Networking",
      "Virus Removal",
      "Data Recovery",
      "Backup Solutions",
    ],
    keywords: ["IT Support Ghana", "Computer Repairs", "Managed IT Services"],
    slug: "computer-repairs-ghana",
  },
  {
    id: "hosting-domain",
    number: "04",
    icon: Server,
    title: "Web Hosting & Domain Services",
    shortDescription: "Reliable hosting, domain registration, SSL and professional email for businesses.",
    description:
      "Reliable hosting solutions for businesses of all sizes with secure servers and professional email hosting. Whether you need shared hosting, VPS, cloud hosting or simply a domain name — we have a plan that fits.",
    features: [
      "Domain Registration",
      "Domain Transfers",
      "Shared Hosting",
      "VPS Hosting",
      "Cloud Hosting",
      "SSL Certificates",
      "Microsoft 365 Setup",
      "Google Workspace",
    ],
    keywords: ["Domain Registration Ghana", "Web Hosting Ghana", "Cloud Hosting", "Business Email"],
    slug: "web-hosting-ghana",
  },
  {
    id: "network-solutions",
    number: "05",
    icon: Network,
    title: "Network Solutions",
    shortDescription: "Secure, scalable LAN, WAN, WiFi, fibre, VPN and firewall infrastructure.",
    description:
      "We design and implement secure, reliable and scalable network infrastructure for businesses. From small office WiFi to multi-site fibre networks, our solutions are engineered for performance and security.",
    features: [
      "LAN / WAN",
      "Wireless Networks",
      "Fibre Networks",
      "VPN",
      "Firewalls",
      "Network Monitoring",
      "Router Configuration",
      "Switch Configuration",
    ],
    keywords: ["Network Installation Ghana", "Structured Cabling", "Office Networking", "WiFi Installation"],
    slug: "network-solutions-ghana",
  },
  {
    id: "it-consulting-training",
    number: "06",
    icon: GraduationCap,
    title: "IT Consulting & Training",
    shortDescription: "Digital transformation, cybersecurity training and ICT skills for organizations.",
    description:
      "We help organizations adopt modern technologies while improving employee skills. Our consulting and training programs cover everything from digital transformation strategy to hands-on ICT training for staff and students.",
    features: [
      "Microsoft Office",
      "Artificial Intelligence",
      "Cybersecurity Awareness",
      "Networking",
      "Website Management",
      "Digital Marketing",
      "Cloud Computing",
      "Data Analysis",
      "ICT for Schools",
    ],
    keywords: ["IT Consulting Ghana", "Digital Transformation", "Cybersecurity Training", "Computer Training"],
    slug: "it-consulting-ghana",
  },
  {
    id: "business-services",
    number: "07",
    icon: Briefcase,
    title: "Professional Business Services",
    shortDescription: "Business registration, branding, graphic design, automation and ICT procurement.",
    description:
      "We support businesses with professional services that improve operations and digital presence — from business registration assistance and corporate branding to automation and ICT procurement.",
    features: [
      "Business Registration",
      "Digital Branding",
      "Graphic Design",
      "Corporate Email Setup",
      "Proposal Writing",
      "Document Digitization",
      "Data Entry",
      "Business Automation",
      "ICT Procurement",
    ],
    keywords: ["Business Consultancy Ghana", "Business Registration", "Digital Business Solutions"],
    slug: "business-consultancy-ghana",
  },
];

export type Industry = {
  name: string;
  description: string;
};

export const industries: Industry[] = [
  { name: "Schools", description: "School management systems, e-learning platforms, ICT labs & training." },
  { name: "Hotels", description: "Booking engines, POS, channel managers and guest Wi-Fi networks." },
  { name: "Churches", description: "Church websites, member portals, live streaming & donation systems." },
  { name: "Hospitals", description: "Hospital management systems, electronic records & patient portals." },
  { name: "Banks", description: "Secure networks, surveillance, internal portals and compliance." },
  { name: "Retail Businesses", description: "POS systems, e-commerce, inventory & loyalty programs." },
  { name: "NGOs", description: "Donor platforms, impact dashboards, secure data management." },
  { name: "Government Institutions", description: "E-governance portals, secure networks & citizen services." },
  { name: "Construction Companies", description: "Project portals, procurement systems, site connectivity." },
  { name: "Real Estate Companies", description: "Property listings, agent portals, virtual tours & CRM." },
  { name: "Manufacturing", description: "ERP, inventory automation, IoT sensors & plant networks." },
  { name: "Small Businesses", description: "Affordable websites, email, networking & IT support." },
];

export type TrainingCourse = {
  title: string;
  description: string;
  level: string;
  duration: string;
};

export const trainingCourses: TrainingCourse[] = [
  { title: "Microsoft Office Suite", description: "Word, Excel, PowerPoint & Outlook mastery for the modern workplace.", level: "Beginner → Advanced", duration: "4 weeks" },
  { title: "Cybersecurity Awareness", description: "Practical defence against phishing, ransomware and social engineering.", level: "All levels", duration: "2 weeks" },
  { title: "Web Development", description: "HTML, CSS, JavaScript, React and modern full-stack fundamentals.", level: "Intermediate", duration: "8 weeks" },
  { title: "Networking Fundamentals", description: "LAN, WAN, routing, switching and basic Cisco concepts.", level: "Beginner", duration: "6 weeks" },
  { title: "Digital Marketing", description: "SEO, social media, Google Ads and email marketing for growth.", level: "Beginner", duration: "4 weeks" },
  { title: "Cloud Computing", description: "AWS, Azure and Google Cloud essentials with hands-on labs.", level: "Intermediate", duration: "6 weeks" },
  { title: "Data Analysis", description: "Excel, SQL, Power BI and Python for business analytics.", level: "Intermediate", duration: "8 weeks" },
  { title: "ICT for Schools", description: "Curriculum-aligned ICT training for teachers and students.", level: "All levels", duration: "Flexible" },
];

export type WhyChooseItem = {
  title: string;
  description: string;
};

export const whyChooseItems: WhyChooseItem[] = [
  { title: "Experienced Professionals", description: "A team of certified engineers, developers and designers with years of hands-on delivery across Ghana." },
  { title: "Affordable Solutions", description: "Transparent, budget-friendly pricing tailored for SMEs, schools, NGOs and large enterprises alike." },
  { title: "Reliable Support", description: "Dedicated account managers and rapid response times so your business never misses a beat." },
  { title: "Latest Technologies", description: "We continuously adopt modern stacks, frameworks and tools to keep you ahead of competitors." },
  { title: "Customer Satisfaction", description: "Long-term partnerships built on trust — most of our clients come from referrals." },
  { title: "Fast Turnaround", description: "Agile delivery methodology that ships working software and websites in weeks, not months." },
  { title: "Secure Solutions", description: "Security-first design with SSL, encryption, backups and proactive monitoring on every project." },
  { title: "24/7 Technical Support", description: "Round-the-clock monitoring and emergency response for mission-critical systems and networks." },
  { title: "Transparent Pricing", description: "No hidden fees. Detailed proposals, milestones and invoices — you always know what you're paying for." },
  { title: "Local Expertise, Global Standards", description: "Deep understanding of the Ghanaian market with international best practices and certifications." },
];

export type ProjectItem = {
  title: string;
  category: string;
  description: string;
  url: string;
  screenshot: string;
  tags: string[];
};

export const projects: ProjectItem[] = [
  {
    title: "Dwell Chronicles Ghana",
    category: "Real Estate Platform",
    description:
      "A property listings, land sales, rentals and construction services platform connecting buyers, tenants and developers across Ghana.",
    url: "https://dwellchroniclesgh.com/",
    screenshot: "/projects/dwellchroniclesgh.png",
    tags: ["Web Design", "Listings", "Real Estate"],
  },
  {
    title: "Progressive Youth Club, Ho",
    category: "NGO / Youth Organization",
    description:
      "Official website of PYC Club Ho — a youth-focused membership organization. We Stand For Support.",
    url: "https://pycclub.org/",
    screenshot: "/projects/pycclub.png",
    tags: ["Web Design", "NGO", "Membership"],
  },
  {
    title: "Global Experience Ghana",
    category: "Professional Development",
    description:
      "Corporate training and skills-alignment platform — Aligning Skills with Cooperate Goals for individuals and organisations.",
    url: "https://globalexperiencegh.org/",
    screenshot: "/projects/globalexperiencegh.png",
    tags: ["Web Design", "Training", "Corporate"],
  },
  {
    title: "RAS MUTA Foundation",
    category: "Foundation / Memorial",
    description:
      "Memorial website honouring a broadcasting legend — sharing his legacy, stories and ongoing foundation work.",
    url: "https://rasmutafoundation.org/",
    screenshot: "/projects/rasmutafoundation.png",
    tags: ["Web Design", "Foundation", "Content"],
  },
  {
    title: "Fafaa FM Online",
    category: "Radio / Media",
    description:
      "Live-streaming radio station website — Information For Intervention. News, presenters, live audio and community engagement.",
    url: "https://fafaafmonline.com/",
    screenshot: "/projects/fafaafmonline.png",
    tags: ["Web Design", "Live Streaming", "Media"],
  },
  {
    title: "Duamenefa Foundation",
    category: "NGO / Peace Building",
    description:
      "Foundation website for community co-existence and peace-building work — Let Us Co-Exist in Peace.",
    url: "https://duamenefafoundation.org/",
    screenshot: "/projects/duamenefafoundation.png",
    tags: ["Web Design", "NGO", "Community"],
  },
  {
    title: "24Hour News Online",
    category: "News / Media",
    description:
      "Round-the-clock Ghanaian news website delivering breaking news, politics, business and sports to a national audience.",
    url: "https://24hournewsonline.com/",
    screenshot: "/projects/24hournewsonline.png",
    tags: ["Web Design", "News", "Media"],
  },
];

export type BlogCategory = { name: string; posts: number; };
export const blogCategories: BlogCategory[] = [
  { name: "Technology Tips", posts: 24 },
  { name: "Cybersecurity", posts: 18 },
  { name: "Software Development", posts: 21 },
  { name: "Website Design", posts: 19 },
  { name: "Cloud Computing", posts: 12 },
  { name: "Networking", posts: 14 },
  { name: "Artificial Intelligence", posts: 9 },
  { name: "Business Automation", posts: 11 },
  { name: "Digital Marketing", posts: 16 },
  { name: "Microsoft Office", posts: 22 },
  { name: "Computer Maintenance", posts: 13 },
  { name: "WordPress Tutorials", posts: 17 },
];

export type BlogPost = {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "10 Website Design Mistakes Killing Ghanaian SME Conversions (And How to Fix Them)",
    category: "Website Design",
    excerpt: "Most local business websites lose customers before the first scroll. Here are the 10 most common — and the practical fixes you can apply this week.",
    date: "Jul 18, 2026",
    readTime: "8 min read",
  },
  {
    title: "Ransomware in Ghana: A Practical Defence Playbook for Small Businesses",
    category: "Cybersecurity",
    excerpt: "Ransomware attacks against Ghanaian businesses surged in 2025. This playbook walks through prevention, detection and recovery — without jargon.",
    date: "Jul 11, 2026",
    readTime: "11 min read",
  },
  {
    title: "Why Every Ho-Based Business Should Move to Cloud Hosting Before 2027",
    category: "Cloud Computing",
    excerpt: "Cloud hosting is no longer a luxury. We break down the cost, security and uptime advantages for businesses in the Volta Region.",
    date: "Jul 04, 2026",
    readTime: "6 min read",
  },
];

export type FAQItem = { question: string; answer: string; };
export const faqItems: FAQItem[] = [
  {
    question: "What areas in Ghana does Clipe Consult serve?",
    answer: "We are headquartered in Ho, Volta Region, and serve clients across Ghana — including Accra, Kumasi, Takoradi, Tema and remote clients throughout the country. We also support a small number of Ghanaian businesses operating abroad through our remote support packages.",
  },
  {
    question: "How much does a business website cost in Ghana?",
    answer: "A professionally designed business website in Ghana typically ranges from GHS 3,500 for a starter 5-page site to GHS 25,000+ for a custom e-commerce or web application. Every project is quoted individually based on features, integrations and timeline. Request a free quote and we will respond within 24 hours with a detailed proposal.",
  },
  {
    question: "Do you provide ongoing maintenance and support after launch?",
    answer: "Yes. Every website, software and network we deliver comes with a warranty period and optional managed support plans. Our 24/7 technical support team monitors critical systems, applies security patches, performs backups and resolves issues before they impact your business.",
  },
  {
    question: "Can you redesign an existing website or migrate from another platform?",
    answer: "Absolutely. We handle website redesigns, platform migrations (including WordPress, Wix, Joomla to modern stacks) and content preservation. We also handle domain transfers, email migration to Microsoft 365 or Google Workspace and full SEO audits during the migration process.",
  },
  {
    question: "Do you offer training for our staff after deploying a system?",
    answer: "Yes — training is built into every deployment. We provide on-site and remote training sessions, written documentation, video walkthroughs and ongoing support. Our IT training catalogue also covers Microsoft Office, cybersecurity awareness, networking, digital marketing and cloud computing for teams and schools.",
  },
  {
    question: "How long does it take to build a website or software system?",
    answer: "A typical business website takes 2–4 weeks. E-commerce sites take 4–8 weeks. Custom software and ERP systems range from 8 to 24 weeks depending on scope. We follow an agile delivery model so you see progress weekly and can launch in phases if needed.",
  },
  {
    question: "What payment options do you accept?",
    answer: "We accept mobile money (MTN MoMo, Vodafone Cash, AirtelTigo Money), bank transfers (Ghana Commercial Bank, Stanbic, Ecobank), Visa/Mastercard and international wire transfers for clients abroad. Projects are typically split into milestones with a 50% deposit to start.",
  },
  {
    question: "Are your solutions secure and compliant with Ghanaian regulations?",
    answer: "Yes. Every solution is built security-first with SSL encryption, secure authentication, daily backups, malware protection and firewall integration. We align with the Data Protection Act, 2012 (Act 843) and international best practices including OWASP and ISO 27001 controls.",
  },
];

export type CareerItem = {
  title: string;
  type: string;
  location: string;
  description: string;
};

export const careers: CareerItem[] = [
  {
    title: "Senior Full-Stack Developer",
    type: "Full-time",
    location: "Ho, Volta Region (Hybrid)",
    description: "Lead the design and development of customer web and mobile applications using Next.js, TypeScript and PostgreSQL. Mentor junior developers and shape our engineering culture.",
  },
  {
    title: "IT Support Engineer",
    type: "Full-time",
    location: "Accra",
    description: "Provide on-site and remote technical support, hardware repairs, network troubleshooting and managed IT services for our growing business client base across Greater Accra.",
  },
  {
    title: "Network & Security Specialist",
    type: "Full-time",
    location: "Ho, Volta Region",
    description: "Design, deploy and maintain LAN, WAN, WiFi, fibre and firewall infrastructure for enterprise clients. Cisco/Fortinet certification strongly preferred.",
  },
  {
    title: "Digital Marketing & Content Lead",
    type: "Full-time",
    location: "Remote (Ghana)",
    description: "Own our content calendar, SEO strategy, social media and paid campaigns. Build thought-leadership for Clipe Consult and our clients across Ghana.",
  },
];

export type NavChild = { label: string; href: string; description: string };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Team", href: "#team" },
  {
    label: "Solutions",
    href: "#solutions",
    children: [
      { label: "Services", href: "#services", description: "Website design, software, IT support, hosting, networks & training" },
      { label: "Projects", href: "#projects", description: "Real websites & software we've built for clients across Ghana" },
    ],
  },
  { label: "Industries", href: "#industries" },
  {
    label: "Resources",
    href: "#resources",
    children: [
      { label: "Training", href: "#training", description: "IT courses, corporate training & ICT for schools" },
      { label: "Blog", href: "#blog", description: "Insights, tips & tutorials on technology in Ghana" },
      { label: "FAQs", href: "#faqs", description: "Answers to the questions we hear most" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  avatarBg: string; // tailwind gradient class
  linkedin?: string;
  twitter?: string;
  email?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Emmanuel K. Dziedzom",
    role: "Founder & Managing Director",
    bio: "Visionary IT leader with 15+ years building technology solutions for Ghanaian businesses. Sets company strategy and oversees all client relationships.",
    initials: "ED",
    avatarBg: "from-[#1B2A5C] to-[#2A3A6A]",
    linkedin: "#",
    twitter: "#",
    email: "emmanuel@clipeconsult.com",
  },
  {
    name: "Grace Mensah",
    role: "Technical Director",
    bio: "Leads our software engineering and network infrastructure practice. Cisco-certified, AWS-certified, and obsessed with reliability.",
    initials: "GM",
    avatarBg: "from-[#E31E24] to-[#C0181F]",
    linkedin: "#",
    twitter: "#",
    email: "grace@clipeconsult.com",
  },
  {
    name: "Samuel K. Adjei",
    role: "Head of Web Development",
    bio: "Full-stack engineer specializing in Next.js, WordPress and e-commerce platforms. Has shipped 100+ websites for clients across Ghana.",
    initials: "SA",
    avatarBg: "from-[#1B2A5C] to-[#3A4D85]",
    linkedin: "#",
    twitter: "#",
    email: "samuel@clipeconsult.com",
  },
  {
    name: "Akosua Owusu",
    role: "Head of Software Engineering",
    bio: "Architects custom ERP, CRM and management systems. Passionate about clean code, automation and AI integration for African businesses.",
    initials: "AO",
    avatarBg: "from-[#E31E24] to-[#FF4A50]",
    linkedin: "#",
    twitter: "#",
    email: "akosua@clipeconsult.com",
  },
  {
    name: "Daniel Tettey",
    role: "Head of Network & Infrastructure",
    bio: "Designs and deploys secure LAN, WAN, WiFi and fibre networks. Fortinet & Cisco certified with deep experience in enterprise environments.",
    initials: "DT",
    avatarBg: "from-[#2A3A6A] to-[#1B2A5C]",
    linkedin: "#",
    twitter: "#",
    email: "daniel@clipeconsult.com",
  },
  {
    name: "Patricia A. Boateng",
    role: "Head of Training & Consulting",
    bio: "Designs and delivers our IT training programmes for schools, corporates and government. Microsoft Certified Trainer with a passion for skills development.",
    initials: "PB",
    avatarBg: "from-[#C0181F] to-[#E31E24]",
    linkedin: "#",
    twitter: "#",
    email: "patricia@clipeconsult.com",
  },
  {
    name: "Kwabena Asante",
    role: "Head of Hardware & IT Support",
    bio: "Leads our managed IT services team — repairs, CCTV, server maintenance, and 24/7 emergency support for businesses across Ghana.",
    initials: "KA",
    avatarBg: "from-[#3A4D85] to-[#1B2A5C]",
    linkedin: "#",
    twitter: "#",
    email: "kwabena@clipeconsult.com",
  },
  {
    name: "Ama Nyarko",
    role: "Creative Director",
    bio: "Brings brands to life through graphic design, UI/UX and digital branding. Ensures every Clipe Consult project is as beautiful as it is functional.",
    initials: "AN",
    avatarBg: "from-[#FF4A50] to-[#E31E24]",
    linkedin: "#",
    twitter: "#",
    email: "ama@clipeconsult.com",
  },
];

export const contactInfo = {
  phonePrimary: "+233 244 000 000",
  phoneSecondary: "+233 244 111 111",
  whatsapp: "+233 244 000 000",
  emailPrimary: "info@clipeconsult.com",
  emailSupport: "support@clipeconsult.com",
  address: "Main Street, Ho, Volta Region, Ghana",
  hoursWeekday: "Mon – Fri: 8:00 AM – 6:00 PM",
  hoursSaturday: "Saturday: 9:00 AM – 2:00 PM",
  hoursSunday: "Sunday: Closed (24/7 emergency support for managed clients)",
};

export const stats = [
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 180, suffix: "+", label: "Happy Clients" },
  { value: 12, suffix: "", label: "Industries Served" },
  { value: 7, suffix: "+", label: "Years of Excellence" },
];

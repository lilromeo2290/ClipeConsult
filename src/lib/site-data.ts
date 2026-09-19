// Centralized content for RACLIPE CONSULT V2
// Single source of truth for all website content

import {
  Code2, Globe, Server, ShieldCheck, Cloud, Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: "software-development",
    number: "01",
    icon: Code2,
    title: "Software Development",
    description: "Custom software solutions engineered for real business operations.",
    features: ["ERP", "CRM", "RMS", "Mobile Apps", "Custom Software"],
  },
  {
    id: "digital-experiences",
    number: "02",
    icon: Globe,
    title: "Digital Experiences",
    description: "Websites and platforms that convert visitors into customers.",
    features: ["Websites", "E-commerce", "Portals", "Digital Platforms"],
  },
  {
    id: "infrastructure",
    number: "03",
    icon: Server,
    title: "Infrastructure",
    description: "Reliable IT infrastructure built for performance and scale.",
    features: ["Servers", "Networks", "Wi-Fi", "IT Infrastructure"],
  },
  {
    id: "cybersecurity",
    number: "04",
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Security solutions that protect what matters most.",
    features: ["Security", "Firewalls", "CCTV", "Monitoring"],
  },
  {
    id: "cloud-solutions",
    number: "05",
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Cloud infrastructure that scales with your business.",
    features: ["Hosting", "VPS", "Backup", "Cloud Deployment"],
  },
  {
    id: "digital-transformation",
    number: "06",
    icon: Sparkles,
    title: "Digital Transformation",
    description: "Automation, AI and consulting for the modern enterprise.",
    features: ["Automation", "AI", "Consulting", "Business Systems"],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  url: string;
  screenshot: string;
};

export const projects: Project[] = [
  {
    title: "Dwell Chronicles",
    category: "Real Estate Platform",
    description: "Property listings, land sales, rentals and construction services platform connecting buyers, tenants and developers across Ghana.",
    url: "https://dwellchroniclesgh.com/",
    screenshot: "/projects/dwellchroniclesgh.png",
  },
  {
    title: "Clipe RMS",
    category: "Enterprise System",
    description: "Custom Resource Management System for managing operations, resources and reporting across multiple locations.",
    url: "https://rms.clipeconsult.com/",
    screenshot: "/projects/sivengineering.png",
  },
  {
    title: "Volta Tourism Hub",
    category: "Tourism Platform",
    description: "Tourism platform showcasing Ghana's hidden paradise — attractions, tours, accommodation and cultural experiences across the Volta Region.",
    url: "https://voltatourismhub.com/",
    screenshot: "/projects/voltatourismhub.png",
  },
  {
    title: "PYC Club",
    category: "NGO Platform",
    description: "Official website of the Progressive Youth Club, Ho — a youth-focused membership organization empowering the next generation.",
    url: "https://pycclub.org/",
    screenshot: "/projects/pycclub.png",
  },
  {
    title: "Global Experience Ghana",
    category: "Professional Development",
    description: "Corporate training and skills-alignment platform aligning skills with corporate goals for individuals and organisations.",
    url: "https://globalexperiencegh.org/",
    screenshot: "/projects/globalexperiencegh.png",
  },
  {
    title: "SIV Engineering",
    category: "Automotive Platform",
    description: "Professional automotive services and repairs website for SIV Engineering & Diagnostics Services LTD.",
    url: "https://sivengineering.com/",
    screenshot: "/projects/sivengineering.png",
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "99.98%", label: "Systems Online" },
  { value: "31+", label: "Client Systems" },
  { value: "18+", label: "Active Projects" },
  { value: "01+", label: "Countries" },
  { value: "24/7", label: "Support" },
  { value: "100%", label: "Client Satisfaction" },
];

export type TrustPoint = {
  title: string;
  description: string;
};

export const trustPoints: TrustPoint[] = [
  { title: "TRUSTED", description: "Secure Solutions" },
  { title: "EXPERIENCED", description: "Professional Team" },
  { title: "INNOVATIVE", description: "Forward Thinking" },
  { title: "REAL IMPACT", description: "Measurable Results" },
];

export type LabArea = {
  title: string;
  description: string;
};

export const labAreas: LabArea[] = [
  { title: "AI & Automation", description: "Intelligent systems that learn, adapt and automate business processes." },
  { title: "Digital Systems", description: "End-to-end digital platforms built for scale and reliability." },
  { title: "Cloud", description: "Cloud-native infrastructure designed for performance and resilience." },
  { title: "Cybersecurity", description: "Proactive security that protects systems before threats materialize." },
  { title: "Software Engineering", description: "Clean code, modern architectures, maintainable for years." },
  { title: "Business Automation", description: "Streamlining operations so teams focus on what matters." },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Discovery", description: "We listen, learn and understand your business before any code is written." },
  { number: "02", title: "Architecture", description: "We design the technical blueprint — systems, data flows and security." },
  { number: "03", title: "Design", description: "We craft the user experience — premium, accessible and on-brand." },
  { number: "04", title: "Development", description: "We build with modern tools, clean code and continuous testing." },
  { number: "05", title: "Testing", description: "We test rigorously — performance, security, accessibility and edge cases." },
  { number: "06", title: "Deployment", description: "We deploy with zero downtime, monitor closely and ship with confidence." },
  { number: "07", title: "Support", description: "We stay — 24/7 monitoring, updates, improvements and human support." },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  avatarBg: string;
  linkedin?: string;
  email?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Raymond Romeo Dravie",
    role: "CEO & Founder, Snr. Engineer",
    bio: "Visionary leader and senior engineer who founded RACLIPE CONSULT to bring enterprise-grade technology to African businesses. Sets company strategy while actively architecting solutions for key clients.",
    initials: "RD",
    avatarBg: "from-[#002060] to-[#1A3A6E]",
    linkedin: "#",
    email: "raymond@clipeconsult.com",
  },
  {
    name: "Gifty Dravie",
    role: "Director",
    bio: "Provides strategic direction and oversees operations across the company. Ensures every project aligns with RACLIPE's mission of delivering reliable, innovative and value-driven technology solutions.",
    initials: "GD",
    avatarBg: "from-[#ED1C24] to-[#B8181F]",
    linkedin: "#",
    email: "gifty@clipeconsult.com",
  },
  {
    name: "Frank Hope Tachie",
    role: "Snr. Engineer",
    bio: "Senior engineer leading the design and delivery of complex software, network and infrastructure projects. Hands-on problem solver trusted by clients across multiple industries in Ghana.",
    initials: "FT",
    avatarBg: "from-[#002060] to-[#3A4D85]",
    linkedin: "#",
    email: "frank@clipeconsult.com",
  },
  {
    name: "Senyo Kofi Dzakah",
    role: "Admin and Finance",
    bio: "Keeps RACLIPE running smoothly behind the scenes — managing administration, finance, procurement and vendor relationships so our technical team can focus entirely on client success.",
    initials: "SD",
    avatarBg: "from-[#ED1C24] to-[#FF3030]",
    linkedin: "#",
    email: "senyo@clipeconsult.com",
  },
];

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Africa", href: "#africa" },
  { label: "Lab", href: "#lab" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const contactInfo = {
  phonePrimary: "+233 24 978 3736",
  phoneSecondary: "+233 53 539 9562",
  whatsapp: "+233 24 978 3736",
  emailPrimary: "info@clipeconsult.com",
  emailSecondary: "clipeconsult@gmail.com",
  address: "Main Street, Ho, Volta Region, Ghana",
  hoursWeekday: "Mon – Fri: 8:00 AM – 6:00 PM",
  hoursSaturday: "Saturday: 9:00 AM – 2:00 PM",
  hoursSunday: "Sunday: Closed (24/7 emergency support for managed clients)",
};

export const projectTypes = [
  "Website",
  "Software",
  "Mobile App",
  "Enterprise System",
  "Infrastructure",
  "Cybersecurity",
  "Cloud",
  "AI & Automation",
  "Other",
];

export const budgetRanges = [
  "Under GHS 10,000",
  "GHS 10,000 – 30,000",
  "GHS 30,000 – 100,000",
  "GHS 100,000 – 500,000",
  "GHS 500,000+",
  "Not sure yet — need guidance",
];

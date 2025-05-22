import { images } from '../assets/image';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  project: string;
}

// Project data
export const projects: Project[] = [
  {
    id: 1,
    title: 'Probill EHR & RCM',
    description: 'A comprehensive Electronic Health Record and Revenue Cycle Management system for healthcare providers with patient management, billing, and reporting features.',
    image: images.project2,
    category: 'Healthcare',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'HIPAA Compliance'],
  },
  {
    id: 2,
    title: 'Platypus Crypto Exchange',
    description: 'A secure cryptocurrency exchange platform with real-time trading, wallet management, and advanced charting capabilities.',
    image: images.platypus,
    category: 'Finance',
    tech: ['React', 'Node.js', 'WebSockets', 'Blockchain', 'Express', 'Coingecko API'],
  },
  {
    id: 3,
    title: 'ChocolateBliss – E-commerce Website',
    description: 'A delightful e-commerce platform for artisanal chocolate products with subscription services, gift options, and personalized recommendations.',
    image: images.project3,
    category: 'E-commerce',
    tech: ['React', 'Redux', 'Stripe', 'Nest.js', 'MongoDB'],
  },
  {
    id: 4,
    title: 'LearnSphere – Online Learning Platform',
    description: 'An interactive e-learning platform with course creation tools, student progress tracking, and integrated video conferencing for live classes.',
    image: images.project6,
    category: 'Education',
    tech: ['React', 'Material UI', 'Express', 'MongoDB', 'Auth0']
  },
  {
    id: 5,
    title: 'BitNest Exchange – Crypto Trading Platform',
    description: 'A robust cryptocurrency trading platform with advanced security features, real-time market data, and automated trading options. Supports multi-currency wallets and instant deposits/withdrawals.',
    image: images.project4,
    category: 'Finance',
    tech: ['React', 'WebSockets', 'Node.js', 'PostgreSQL', 'JWT Auth'],
  },
  {
    id: 6,
    title: 'EventNest – Event Booking Platform',
    description: 'A comprehensive event management and booking platform with ticketing, venue selection, and attendee management features.',
    image: images.project5,
    category: 'Events',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Payment Gateway'],
  },
  {
    id: 7,
    title: 'Ecommerce – Admin Dashboard',
    description: 'An admin dashboard for managing e-commerce operations, including product management, order tracking, and customer insights.',
    image: images.project1,
    category: 'E-commerce',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Rozerpay'],
  },
];

// Gallery images data
export const galleryImages: GalleryImage[] = [
  // Project 1 images - Probill EHR & RCM
  { id: 'p1_1', src: images.project1_1, alt: 'Probill EHR & RCM Screenshot 1', project: 'Probill EHR & RCM' },
  { id: 'p1_2', src: images.project1_2, alt: 'Probill EHR & RCM Screenshot 2', project: 'Probill EHR & RCM' },
  { id: 'p1_3', src: images.project1_3, alt: 'Probill EHR & RCM Screenshot 3', project: 'Probill EHR & RCM' },
  { id: 'p1_4', src: images.project1_4, alt: 'Probill EHR & RCM Screenshot 4', project: 'Probill EHR & RCM' },
  { id: 'p1_5', src: images.project1_5, alt: 'Probill EHR & RCM Screenshot 5', project: 'Probill EHR & RCM' },

  // Project 2 images - ChocolateBliss – E-commerce Website
  { id: 'p2_1', src: images.project2_1, alt: 'ChocolateBliss 1', project: 'ChocolateBliss' },
  { id: 'p2_2', src: images.project2_2, alt: 'ChocolateBliss 2', project: 'ChocolateBliss' },
  { id: 'p2_3', src: images.project2_3, alt: 'ChocolateBliss 3', project: 'ChocolateBliss' },
  { id: 'p2_4', src: images.project2_4, alt: 'ChocolateBliss 4', project: 'ChocolateBliss' },
  { id: 'p2_5', src: images.project2_5, alt: 'ChocolateBliss 5', project: 'ChocolateBliss' },
  { id: 'p2_6', src: images.project2_6, alt: 'ChocolateBliss 6', project: 'ChocolateBliss' },
  { id: 'p2_7', src: images.project2_7, alt: 'ChocolateBliss 7', project: 'ChocolateBliss' },
  { id: 'p2_8', src: images.project2_8, alt: 'ChocolateBliss 8', project: 'ChocolateBliss' },
  { id: 'p2_9', src: images.project2_9, alt: 'ChocolateBliss 9', project: 'ChocolateBliss' },
  { id: 'p2_10', src: images.project2_10, alt: 'ChocolateBliss 10', project: 'ChocolateBliss' },
  { id: 'p2_11', src: images.project2_11, alt: 'ChocolateBliss 11', project: 'ChocolateBliss' },
  { id: 'p2_12', src: images.project2_12, alt: 'ChocolateBliss 12', project: 'ChocolateBliss' },
  { id: 'p2_13', src: images.project2_13, alt: 'ChocolateBliss 13', project: 'ChocolateBliss' },

  // Project 3 images - NextGen - Crypto Exchange
  { id: 'p3_1', src: images.project3_1, alt: 'NextGen Exchange Screenshot 1', project: 'NextGen Exchange' },
  { id: 'p3_2', src: images.project3_2, alt: 'NextGen Exchange Screenshot 2', project: 'NextGen Exchange' },
  { id: 'p3_3', src: images.project3_3, alt: 'NextGen Exchange Screenshot 3', project: 'NextGen Exchange' },
  { id: 'p3_4', src: images.project3_4, alt: 'NextGen Exchange Screenshot 4', project: 'NextGen Exchange' },
  { id: 'p3_5', src: images.project3_5, alt: 'NextGen Exchange Screenshot 5', project: 'NextGen Exchange' },
  { id: 'p3_6', src: images.project3_6, alt: 'NextGen Exchange Screenshot 6', project: 'NextGen Exchange' },
  { id: 'p3_7', src: images.project3_7, alt: 'NextGen Exchange Screenshot 7', project: 'NextGen Exchange' },
  { id: 'p3_8', src: images.project3_8, alt: 'NextGen Exchange Screenshot 8', project: 'NextGen Exchange' },
  { id: 'p3_9', src: images.project3_9, alt: 'NextGen Exchange Screenshot 9', project: 'NextGen Exchange' },
  { id: 'p3_10', src: images.project3_10, alt: 'NextGen Exchange Screenshot 10', project: 'NextGen Exchange' },
  { id: 'p3_11', src: images.project3_11, alt: 'NextGen Exchange Screenshot 11', project: 'NextGen Exchange' },
  { id: 'p3_12', src: images.project3_12, alt: 'NextGen Exchange Screenshot 12', project: 'NextGen Exchange' },
  { id: 'p3_13', src: images.project3_13, alt: 'NextGen Exchange Screenshot 13', project: 'NextGen Exchange' },
  { id: 'p3_14', src: images.project3_14, alt: 'NextGen Exchange Screenshot 14', project: 'NextGen Exchange' },
  { id: 'p3_15', src: images.project3_15, alt: 'NextGen Exchange Screenshot 15', project: 'NextGen Exchange' },
  { id: 'p3_16', src: images.project3_16, alt: 'NextGen Exchange Screenshot 16', project: 'NextGen Exchange' },
  { id: 'p3_17', src: images.project3_17, alt: 'NextGen Exchange Screenshot 17', project: 'NextGen Exchange' },

  // Project 4 images - EventNest
  { id: 'p4_1', src: images.project4_1, alt: 'EventNest Screenshot 1', project: 'EventNest' },
  { id: 'p4_2', src: images.project4_2, alt: 'EventNest Screenshot 2', project: 'EventNest' },
  { id: 'p4_3', src: images.project4_3, alt: 'EventNest Screenshot 3', project: 'EventNest' },
  { id: 'p4_4', src: images.project4_4, alt: 'EventNest Screenshot 4', project: 'EventNest' },
  { id: 'p4_5', src: images.project4_5, alt: 'EventNest Screenshot 5', project: 'EventNest' },
  { id: 'p4_6', src: images.project4_6, alt: 'EventNest Screenshot 6', project: 'EventNest' },
  { id: 'p4_7', src: images.project4_7, alt: 'EventNest Screenshot 7', project: 'EventNest' },
  { id: 'p4_8', src: images.project4_8, alt: 'EventNest Screenshot 8', project: 'EventNest' },
  { id: 'p4_9', src: images.project4_9, alt: 'EventNest Screenshot 9', project: 'EventNest' },
  { id: 'p4_10', src: images.project4_10, alt: 'EventNest Screenshot 10', project: 'EventNest' },
  { id: 'p4_11', src: images.project4_11, alt: 'EventNest Screenshot 11', project: 'EventNest' },
  { id: 'p4_12', src: images.project4_12, alt: 'EventNest Screenshot 12', project: 'EventNest' },
  { id: 'p4_13', src: images.project4_13, alt: 'EventNest Screenshot 13', project: 'EventNest' },
  { id: 'p4_14', src: images.project4_14, alt: 'EventNest Screenshot 14', project: 'EventNest' },
  { id: 'p4_15', src: images.project4_15, alt: 'EventNest Screenshot 15', project: 'EventNest' },
  { id: 'p4_16', src: images.project4_16, alt: 'EventNest Screenshot 16', project: 'EventNest' },
  { id: 'p4_17', src: images.project4_17, alt: 'EventNest Screenshot 17', project: 'EventNest' },
  { id: 'p4_18', src: images.project4_18, alt: 'EventNest Screenshot 18', project: 'EventNest' },
  { id: 'p4_19', src: images.project4_19, alt: 'EventNest Screenshot 19', project: 'EventNest' },

  // Project 5 images - LearnSphere
  { id: 'p5_1', src: images.project5_1, alt: 'LearnSphere Screenshot 1', project: 'LearnSphere' },
  { id: 'p5_2', src: images.project5_2, alt: 'LearnSphere Screenshot 2', project: 'LearnSphere' },
  { id: 'p5_3', src: images.project5_3, alt: 'LearnSphere Screenshot 3', project: 'LearnSphere' },
  { id: 'p5_4', src: images.project5_4, alt: 'LearnSphere Screenshot 4', project: 'LearnSphere' },
  { id: 'p5_5', src: images.project5_5, alt: 'LearnSphere Screenshot 5', project: 'LearnSphere' },
  { id: 'p5_6', src: images.project5_6, alt: 'LearnSphere Screenshot 6', project: 'LearnSphere' },
  { id: 'p5_7', src: images.project5_7, alt: 'LearnSphere Screenshot 7', project: 'LearnSphere' },
  { id: 'p5_8', src: images.project5_8, alt: 'LearnSphere Screenshot 8', project: 'LearnSphere' },

  // Project 6 images - Platypus Custom Dashboard
  { id: 'p6_1', src: images.project6_1, alt: 'Custom Dashboard  Screenshot 1', project: 'Custom Dashboard ' },
  { id: 'p6_2', src: images.project6_2, alt: 'Custom Dashboard  Screenshot 2', project: 'Custom Dashboard ' },
  { id: 'p6_3', src: images.project6_3, alt: 'Custom Dashboard  Screenshot 3', project: 'Custom Dashboard ' },
  { id: 'p6_4', src: images.project6_4, alt: 'Custom Dashboard  Screenshot 4', project: 'Custom Dashboard ' },
  { id: 'p6_5', src: images.project6_5, alt: 'Custom Dashboard  Screenshot 5', project: 'Custom Dashboard ' },
  { id: 'p6_6', src: images.project6_6, alt: 'Custom Dashboard  Screenshot 6', project: 'Custom Dashboard ' },
  { id: 'p6_7', src: images.project6_7, alt: 'Custom Dashboard  Screenshot 7', project: 'Custom Dashboard ' },

];
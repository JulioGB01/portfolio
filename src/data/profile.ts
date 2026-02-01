export interface Project {
  id: string;
  title: string;
  category: 'MEP Design' | 'BIM Modeling' | 'AutoCAD Drafting';
  description: string;
  imageUrl: string; // Path to image in public/assets/images/projects
  pdfUrl?: string;   // Path to PDF in public/assets/documents/projects
  technologies: string[];
  date: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string; // Logo or certificate thumbnail
  pdfUrl?: string;   // Path to PDF certificate
  credentialUrl?: string; // Link to verify
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface UserProfile {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  avatarUrl: string;
  about: string[];
  skills: {
    technical: string[];
    software: string[];
    soft: string[];
  };
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  projects: Project[];
}

export const profileData: UserProfile = {
  name: "John Doe",
  title: "Mechanical Electrical Engineer",
  tagline: "Specializing in MEP Design, BIM Modeling, and AutoCAD Drafting for the AEC Industry.",
  email: "contact@example.com",
  phone: "+1 (555) 123-4567",
  location: "City, Country",
  linkedin: "https://linkedin.com/in/johndoe",
  avatarUrl: "/assets/images/profile.jpg", // Place your photo here
  about: [
    "I am a dedicated Mechanical Electrical Engineer with a strong foundation in electromechanical systems and a passion for the AEC (Architecture, Engineering, and Construction) industry.",
    "My focus is on delivering precise, high-quality MEP designs and BIM models that ensure efficiency and constructability. I thrive in environments where technical accuracy and standardized documentation are paramount.",
    "Boring engineering is good engineering—I value reliability, clarity, and proven solutions over flashiness."
  ],
  skills: {
    technical: ["MEP Systems Design", "HVAC Load Calculation", "Electrical Load Analysis", "Plumbing Schematics", "Fire Protection Systems"],
    software: ["AutoCAD", "Revit MEP", "Navisworks", "Dialux", "Excel", "Bluebeam"],
    soft: ["Detail-Oriented", "Cross-functional Collaboration", "Technical Documentation", "Problem Solving"]
  },
  experience: [
    {
      id: "exp1",
      role: "Junior MEP Engineer",
      company: "Engineering Firm XYZ",
      location: "City, State",
      startDate: "2023",
      endDate: "Present",
      description: [
        "Assisted in the design of HVAC and electrical systems for commercial buildings.",
        "Produced detailed AutoCAD drawings and Revit models for coordination.",
        "Performed heating and cooling load calculations using HAP."
      ]
    }
  ],
  education: [
    {
      degree: "B.S. in Electromechanical Engineering",
      institution: "State University",
      location: "City, State",
      year: "2023"
    }
  ],
  certifications: [
    {
      id: "cert1",
      title: "Revit MEP Certified Professional",
      issuer: "Autodesk",
      date: "2024",
      imageUrl: "/assets/images/certs/revit-logo.png",
      pdfUrl: "/assets/documents/certs/revit-cert.pdf"
    }
  ],
  projects: [
    {
      id: "proj1",
      title: "Commercial Office Complex MEP",
      category: "BIM Modeling",
      description: "Coordinated MEP model for a 5-story office building, ensuring zero clashes between HVAC ductwork and structural elements.",
      imageUrl: "/assets/images/projects/project1-thumb.jpg",
      technologies: ["Revit", "Navisworks"],
      date: "2024",
      pdfUrl: "/assets/documents/projects/project1-plans.pdf"
    },
    {
      id: "proj2",
      title: "Residential Electrical Layout",
      category: "AutoCAD Drafting",
      description: "Drafted complete electrical lighting and power plans for a high-end residential complex.",
      imageUrl: "/assets/images/projects/project2-thumb.jpg",
      technologies: ["AutoCAD", "Dialux"],
      date: "2023"
    }
  ]
};

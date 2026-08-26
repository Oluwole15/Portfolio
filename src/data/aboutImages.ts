export interface GalleryImage {
  id: string;
  src?: string;
  alt: string;
  label: string;
  icon: string;
  gradient: string;
  width: "portrait" | "large" | "medium";
}

export const aboutImages: GalleryImage[] = [
  {
    id: "teaching",
    src: "/about/image-1.jpg",
    alt: "Teaching at the design academy",
    label: "Teaching",
    icon: "lucide:presentation",
    gradient: "from-rose-500 to-pink-600",
    width: "portrait",
  },
  {
    id: "designing",
    src: "/about/image-2.jpg",
    alt: "Designing a new product interface",
    label: "Designing",
    icon: "lucide:pen-tool",
    gradient: "from-indigo-600 to-purple-700",
    width: "large",
  },
  {
    id: "sketching",
    src: "/about/image-13.jpg",
    alt: "Sketching product ideas",
    label: "Sketching",
    icon: "lucide:pencil-ruler",
    gradient: "from-amber-500 to-orange-600",
    width: "large",
  },
  {
    id: "research",
    src: "/about/image-4.jpg",
    alt: "User research session",
    label: "Research",
    icon: "lucide:users",
    gradient: "from-sky-500 to-indigo-600",
    width: "medium",
  },
  {
    id: "mentoring",
    src: "/about/image-5.jpg",
    alt: "Mentoring designers",
    label: "Mentoring",
    icon: "lucide:hand-heart",
    gradient: "from-emerald-500 to-teal-700",
    width: "portrait",
  },
  {
    id: "lagos",
    src: "/about/image-7.jpg",
    alt: "Lagos city scenes",
    label: "Lagos",
    icon: "lucide:landmark",
    gradient: "from-teal-500 to-emerald-600",
    width: "portrait",
  },
  {
    id: "exploring",
    src: "/about/image-8.jpg",
    alt: "Exploring and drawing inspiration",
    label: "Exploring",
    icon: "lucide:compass",
    gradient: "from-orange-500 to-rose-600",
    width: "medium",
  },
];

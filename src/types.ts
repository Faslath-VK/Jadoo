export interface ServiceCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

export interface Destination {
  id: number;
  title: string;
  price: string;
  duration: string;
  image: string;
  alt: string;
}
export interface BookingStep {
  number: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface TripCard {
  id: string;
  title: string;
  dates: string;
  author: string;
  authorAvatar: string;
  status: string;
  progress: number;
  peopleCount: number;
  image: string;
  isLiked: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  company?: string;
  role?: string;
  quote: string;
  avatar: string;
}
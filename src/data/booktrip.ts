import { BookingStep, TripCard } from "@/types";

export const bookingSteps: BookingStep[] = [
    {
      number: 1,
      title: "Choose Destination",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: "🎯",
      color: "bg-yellow-400"
    },
    {
      number: 2,
      title: "Make Payment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: "💳",
      color: "bg-orange-400"
    },
    {
      number: 3,
      title: "Reach Airport on Selected Date",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: "✈️",
      color: "bg-blue-400"
    }
  ];

 export const tripData: TripCard = {
    id: "1",
    title: "Trip To Greece",
    dates: "14-29 June",
    author: "Robbin jo",
    authorAvatar: "/api/placeholder/32/32",
    status: "Ongoing",
    progress: 40,
    peopleCount: 24,
    image: "/api/placeholder/300/200",
    isLiked: false
  };
export interface OfficeLocation {
  id: string;
  city: string;
  region: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  image: string;
  isHeadquarters?: boolean;
}

export const GLOBAL_OFFICES: OfficeLocation[] = [
  {
    id: "monaco",
    city: "Monaco (Headquarters)",
    region: "Europe & Mediterranean",
    address: "7 Quai Antoine 1er, 98000 Monaco",
    phone: "+377 99 90 90 90",
    email: "monaco@ahpoyachts.com",
    hours: "24/7 Concierge Desk",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80",
    isHeadquarters: true,
  },
  {
    id: "miami",
    city: "Miami",
    region: "Americas & Caribbean",
    address: "444 Brickell Avenue, Suite 800, Miami, FL 33131",
    phone: "+1 305 555 0199",
    email: "miami@ahpoyachts.com",
    hours: "08:00 - 20:00 EST",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "singapore",
    city: "Singapore",
    region: "Asia-Pacific & Indian Ocean",
    address: "1 Marina Boulevard, #28-00, Singapore 018989",
    phone: "+65 6789 0100",
    email: "singapore@ahpoyachts.com",
    hours: "09:00 - 19:00 SGT",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
  },
];

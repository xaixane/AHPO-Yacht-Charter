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
    email: "monaco@velantisyachts.com",
    hours: "24/7 Concierge Desk",
    image: "/background-1.jpg",
    isHeadquarters: true,
  },
  {
    id: "miami",
    city: "Miami",
    region: "Americas & Caribbean",
    address: "444 Brickell Avenue, Suite 800, Miami, FL 33131",
    phone: "+1 305 555 0199",
    email: "miami@velantisyachts.com",
    hours: "08:00 - 20:00 EST",
    image: "/background-4.jpg",
  },
  {
    id: "singapore",
    city: "Singapore",
    region: "Asia-Pacific & Indian Ocean",
    address: "1 Marina Boulevard, #28-00, Singapore 018989",
    phone: "+65 6789 0100",
    email: "singapore@velantisyachts.com",
    hours: "09:00 - 19:00 SGT",
    image: "/background-2.jpg",
  },
];

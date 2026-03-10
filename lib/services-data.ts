import {
  Wrench,
  Droplets,
  Zap,
  Wind,
  Flame,
  Waves,
  Camera,
  Satellite,
  Wifi,
  WashingMachine,
  Phone,
  Home,
  DoorOpen,
  Hammer,
  Paintbrush,
  Layout,
  Truck,
  ShieldAlert,
  Sun,
  type LucideIcon,
} from "lucide-react"

export interface ServiceData {
  slug: string
  title: string
  shortTitle: string
  icon: LucideIcon
  metaTitle: string
  metaDescription: string
  heroHeadline: string
  heroSubheadline: string
  description: string
  features: string[]
  faqs: { question: string; answer: string }[]
}

export const services: ServiceData[] = [
  {
    slug: "home-maintenance-dubai",
    title: "Home Maintenance Services in Dubai",
    shortTitle: "Home Maintenance",
    icon: Home,
    metaTitle: "Home Maintenance Dubai | Professional Property Care Services",
    metaDescription:
      "Full-service home maintenance in Dubai. Professional property care, annual maintenance contracts, and 24/7 reactive repairs for villas and apartments. Call now.",
    heroHeadline: "Professional Home Maintenance Dubai",
    heroSubheadline:
      "Comprehensive property maintenance solutions for homeowners and businesses across all areas of Dubai. 24/7 support and expert care.",
    description:
      "Master Technicals provides premium home maintenance services across Dubai. We specialize in providing both reactive repairs and planned preventive maintenance for residential and commercial properties. Our expert team handles everything from minor fixes to complete property renovations. Whether you live in a villa in Arabian Ranches or an apartment in Dubai Marina, our professional technicians are ready to serve you. We offer flexible Annual Maintenance Contracts (AMCs) that provide peace of mind and ensure your property stays in top condition year-round. Our home maintenance services cover all aspects including plumbing, electrical, AC, and general handyman work.",
    features: [
      "Annual Maintenance Contracts (AMC)",
      "Planned Preventive Maintenance",
      "Reactive 24/7 repair services",
      "Villa & apartment maintenance",
      "Commercial property care",
      "Renovation & painting",
      "Property condition assessments",
      "Emergency call-out services",
    ],
    faqs: [
      {
        question: "What is included in a home maintenance contract?",
        answer:
          "Our standard AMCs include regular AC servicing, plumbing inspections, electrical checks, and a set number of emergency call-outs. We can also customize contracts based on your specific needs.",
      },
      {
        question: "Do you serve all areas of Dubai?",
        answer:
          "Yes, we provide home maintenance services across all major areas of Dubai including Downtown, Marina, Business Bay, The Palm, and suburban villa communities.",
      },
      {
        question: "Is emergency service available?",
        answer:
          "Yes, we provide 24/7 emergency response for burst pipes, electrical failures, and AC breakdowns for all our maintenance clients.",
      },
    ],
  },
  {
    slug: "handyman-services-dubai",
    title: "Handyman Services in Dubai",
    shortTitle: "Handyman",
    icon: Wrench,
    metaTitle: "Handyman Services Dubai | Emergency Handyman & Home Repair",
    metaDescription:
      "Professional handyman services in Dubai. Emergency handyman available 24/7 for furniture assembly, wall mounting, painting, and general repairs. Call +971556557200.",
    heroHeadline: "Expert Handyman Services in Dubai",
    heroSubheadline:
      "From minor fixes to major repairs, our skilled handymen handle every task with precision and care across all areas of Dubai.",
    description:
      "Master Technicals provides comprehensive handyman services across Dubai. Our team of skilled professionals can handle everything from furniture assembly and wall mounting to painting, carpentry, and general home repairs. Whether you need a quick fix or a complete home makeover, our licensed handymen deliver quality workmanship every time. We serve all areas of Dubai including Downtown, Marina, JBR, Business Bay, International City, and more. Our handyman services are available on weekdays from 10 AM to 10 PM, with emergency services available 24/7. We use only premium materials and tools to ensure lasting results for every project we undertake. Our experienced team has completed thousands of successful projects across residential and commercial properties in Dubai.",
    features: [
      "TV wall mounting & setup",
      "Curtain & blinds installation",
      "Sealing gaps with silicone",
      "Curtain rod & rail fixing",
      "Furniture assembly & repair",
      "Wall mounting & drilling",
      "General home maintenance",
      "Emergency handyman services",
    ],
    faqs: [
      {
        question: "What handyman services do you offer in Dubai?",
        answer:
          "We offer a complete range of handyman services including furniture assembly, wall mounting, painting, carpentry, door installation, lock changes, general repairs, and more across all areas of Dubai.",
      },
      {
        question: "How quickly can a handyman arrive?",
        answer:
          "For standard bookings, our handymen typically arrive within 2-4 hours. For emergency services, we aim for a 1-hour response time across Dubai.",
      },
      {
        question: "Do your handymen bring their own tools?",
        answer:
          "Yes, all our handymen come fully equipped with professional-grade tools and supplies needed for the job.",
      },
    ],
  },
  {
    slug: "plumbing-services-dubai",
    title: "Plumbing Services in Dubai",
    shortTitle: "Plumbing",
    icon: Droplets,
    metaTitle: "Plumbing Services Dubai | Professional Licensed Plumbers",
    metaDescription:
      "Best plumbing services in Dubai. Emergency plumbers available 24/7 for leak repairs, drain cleaning, and pipe installation. Licensed & insured. Call +971556557200.",
    heroHeadline: "Professional Plumbing Services in Dubai",
    heroSubheadline:
      "Licensed plumbers delivering reliable solutions for all your residential and commercial plumbing needs across Dubai.",
    description:
      "Master Technicals offers professional plumbing services throughout Dubai. Our licensed plumbers handle everything from minor leak repairs to complete bathroom renovations. We specialize in drain cleaning, pipe installation and repair, water heater connections, toilet installation, faucet replacement, and emergency plumbing repairs. Available 24/7 for emergencies, our team uses the latest equipment and techniques to diagnose and fix plumbing issues quickly and efficiently. We serve all major areas including Dubai Marina, Downtown Dubai, JBR, Business Bay, Palm Jumeirah, and International City. Every job comes with a satisfaction guarantee and transparent pricing with no hidden fees.",
    features: [
      "Leak detection & repair",
      "Leaky tap & shower head repair",
      "Toilet & drain cleaning",
      "Bathroom fixture installation",
      "Pipe installation & replacement",
      "Kitchen fitting repairs",
      "Water line installation",
      "Emergency plumbing services",
    ],
    faqs: [
      {
        question: "Do you provide emergency plumbing in Dubai?",
        answer:
          "Yes, we offer 24/7 emergency plumbing services across Dubai. Our plumbers can reach most locations within 1 hour for urgent issues like burst pipes and major leaks.",
      },
      {
        question: "How much do plumbing services cost in Dubai?",
        answer:
          "Our plumbing services start from AED 150 for basic repairs. We provide free estimates before starting any work, with transparent pricing and no hidden charges.",
      },
      {
        question: "Are your plumbers licensed in Dubai?",
        answer:
          "Yes, all our plumbers are fully licensed and insured to operate in Dubai. They undergo regular training to stay updated with the latest plumbing techniques and regulations.",
      },
    ],
  },
  {
    slug: "electrician-services-dubai",
    title: "Electrical Services in Dubai",
    shortTitle: "Electrical",
    icon: Zap,
    metaTitle: "Electrician Dubai | Licensed Electrical Repair & Installation",
    metaDescription:
      "Professional electrician in Dubai. Licensed electrical services for wiring, socket installation, and lighting repairs. 24/7 emergency service. Call +971556557200.",
    heroHeadline: "Licensed Electrical Services in Dubai",
    heroSubheadline:
      "Certified electricians providing safe and reliable electrical installations, repairs, and maintenance across all Dubai areas.",
    description:
      "Master Technicals provides licensed electrical services across Dubai. Our certified electricians handle all residential and commercial electrical needs, from simple socket installations to complete rewiring projects. We specialize in lighting installation, circuit breaker upgrades, electrical panel maintenance, outlet installation, ceiling fan mounting, and emergency electrical repairs. Safety is our top priority, and every job is completed to Dubai Municipality standards. Our electricians are available for scheduled appointments and emergency callouts 24/7. We serve all areas of Dubai and provide free on-site assessments for larger projects.",
    features: [
      "Light fixture installation",
      "Ceiling fan mounting",
      "Switch & socket installation",
      "Minor electrical troubleshooting",
      "Wiring & rewiring services",
      "Circuit breaker replacement",
      "Outdoor & landscape lighting",
      "Emergency electrical repair",
    ],
    faqs: [
      {
        question: "Are your electricians certified in Dubai?",
        answer:
          "Yes, all our electricians are DEWA-certified and fully licensed to perform electrical work in Dubai. They follow all safety standards and regulations.",
      },
      {
        question: "Can you handle commercial electrical work?",
        answer:
          "Absolutely. We provide electrical services for both residential and commercial properties, including offices, shops, warehouses, and restaurants across Dubai.",
      },
      {
        question: "Do you offer free electrical inspections?",
        answer:
          "We offer free on-site assessments for larger electrical projects. For standard repairs, a diagnostic fee applies which is waived if you proceed with the repair.",
      },
    ],
  },
  {
    slug: "ac-repair-dubai",
    title: "AC Maintenance & Repair in Dubai",
    shortTitle: "AC Repair",
    icon: Wind,
    metaTitle: "AC Repair Dubai | Expert AC Maintenance & Service",
    metaDescription:
      "Expert AC maintenance, repair & installation in Dubai. All brands serviced. Emergency AC repair available 24/7. Call +971556557200 for a free quote.",
    heroHeadline: "Expert AC Maintenance & Repair in Dubai",
    heroSubheadline:
      "Keep your home cool with our professional AC services. All major brands serviced with genuine parts and expert technicians.",
    description:
      "Master Technicals is your trusted partner for AC maintenance and repair in Dubai. Our experienced technicians service all major AC brands including Carrier, Daikin, LG, Samsung, Mitsubishi, and more. We offer comprehensive AC services including regular maintenance contracts, emergency repairs, gas refilling, duct cleaning, thermostat installation, and complete AC unit replacement. Regular AC maintenance is essential in Dubai's climate to ensure energy efficiency and extend the lifespan of your system. We recommend servicing your AC units at least twice a year. Our team provides transparent pricing, genuine spare parts, and a service warranty on all repairs.",
    features: [
      "AC repair & troubleshooting",
      "Regular maintenance contracts",
      "Gas refilling & leak detection",
      "Duct cleaning & sanitization",
      "Thermostat installation",
      "AC unit installation",
      "Compressor repair & replacement",
      "All major brands serviced",
    ],
    faqs: [
      {
        question: "How often should I service my AC in Dubai?",
        answer:
          "In Dubai's climate, we recommend servicing your AC at least twice a year - once before summer and once after. Regular maintenance prevents breakdowns and reduces energy bills.",
      },
      {
        question: "Which AC brands do you service?",
        answer:
          "We service all major AC brands including Carrier, Daikin, LG, Samsung, Mitsubishi, Toshiba, Gree, and more. Our technicians are trained on all types of split, central, and duct AC systems.",
      },
      {
        question: "Do you offer AC maintenance contracts in Dubai?",
        answer:
          "Yes, we offer annual maintenance contracts (AMCs) that include regular inspections, cleaning, gas top-ups, and priority emergency service at discounted rates.",
      },
    ],
  },
  {
    slug: "tv-mounting-dubai",
    title: "TV Mounting & Satellite Installation in Dubai",
    shortTitle: "TV Mounting",
    icon: Satellite,
    metaTitle: "TV Mounting Dubai | Professional TV Wall Mounting & Setup",
    metaDescription:
      "Professional TV wall mounting services in Dubai. Expert satellite dish installation, TV setup, and cable management. Call +971556557200 for same-day service.",
    heroHeadline: "TV Mounting & Satellite Installation in Dubai",
    heroSubheadline:
      "Professional TV wall mounting and satellite dish services for the perfect home entertainment setup across Dubai.",
    description:
      "Master Technicals provides expert TV mounting and satellite installation services across Dubai. We specialize in secure wall mounting for TVs of all sizes, from 32-inch screens to large 85-inch home theater displays. Our team ensure clean cable management, concealing wires for a sleek and professional look. We also handle satellite dish installation, alignment, and signal troubleshooting for all major satellite systems. Whether you need a new TV setup or your existing receiver programmed, our technicians deliver high-quality results. We serve residential villas and apartments, providing the best viewing experience for your home.",
    features: [
      "Professional TV wall mounting",
      "Satellite dish installation & alignment",
      "Concealed cable management",
      "IPTV & receiver programming",
      "Home theater system setup",
      "Multi-room TV distribution",
      "LNB replacement & signal fix",
      "Same-day mounting available",
    ],
    faqs: [
      {
        question: "Do you provide TV wall brackets?",
        answer:
          "Yes, we can provide high-quality fixed, tilting, or full-motion wall brackets for all TV sizes, or we can install a bracket you have already purchased.",
      },
      {
        question: "Can you hide the TV cables?",
        answer:
          "Absolutely. We specialize in concealed cable management, either through the wall (if suitable) or using professional trunking to ensure a clean look.",
      },
      {
        question: "Which satellite systems do you work with?",
        answer:
          "We work with all major satellite systems including Nilesat, Arabsat, Hotbird, and others, providing dish alignment and receiver setup.",
      },
    ],
  },
  {
    slug: "door-repair-dubai",
    title: "Door Repair & Lock Installation in Dubai",
    shortTitle: "Door Repair",
    icon: DoorOpen,
    metaTitle: "Door Repair Dubai | Locksmith & Door Maintenance Services",
    metaDescription:
      "Expert door repair and lock installation services in Dubai. Fixing sagging doors, lock replacements, and frame repairs. Call +971556557200 for fast service.",
    heroHeadline: "Door Repair & Lock Installation in Dubai",
    heroSubheadline:
      "Specialized door maintenance and locksmith services for homes and offices across Dubai. Secure and reliable repairs.",
    description:
      "Master Technicals offers professional door repair and maintenance services throughout Dubai. Doors are essential for security and aesthetics, and our team is expert at fixing common issues like sagging hinges, misaligned frames, and sticking locks. We work with all types of doors including wooden, aluminum, and glass doors. Our emergency locksmith services handle lockouts and lock replacements quickly and efficiently. Whether it's a sliding patio door or a heavy entry door, we have the tools and expertise to ensure it opens and closes perfectly. We also install new handles, hinges, and security locks to enhance your property's safety.",
    features: [
      "Sagging & misaligned door repair",
      "Lock installation & replacement",
      "Door frame repair & reinforcement",
      "Hinge replacement & lubrication",
      "Sliding door track repair",
      "Handle & hardware replacement",
      "Glass door maintenance",
      "Emergency door opening",
    ],
    faqs: [
      {
        question: "Why is my door sticking or sagging?",
        answer:
          "This is usually caused by loose hinges, humidity effects on wood, or slight house settling. Our technicians can realign the door and reinforce the hinges to fix it.",
      },
      {
        question: "Do you provide emergency lock replacement?",
        answer:
          "Yes, we offer 24/7 emergency locksmith services for lockouts and urgent lock changes across Dubai.",
      },
      {
        question: "Can you repair aluminum sliding doors?",
        answer:
          "Yes, we specialize in repairing sliding door tracks, rollers, and locks for balcony and patio doors.",
      },
    ],
  },
  {
    slug: "water-tank-cleaning-dubai",
    title: "Water Tank Cleaning & Sanitization in Dubai",
    shortTitle: "Water Tank Cleaning",
    icon: Waves,
    metaTitle: "Water Tank Cleaning Dubai | Certified Sanitization Services",
    metaDescription:
      "Professional water tank cleaning and sanitization in Dubai. Ensure clean, safe water for your family. Dubai Municipality approved methods. Call +971556557200.",
    heroHeadline: "Water Tank Cleaning & Sanitization in Dubai",
    heroSubheadline:
      "Ensure the health and safety of your family with professional water tank cleaning services across all Dubai areas.",
    description:
      "Master Technicals provides certified water tank cleaning services in Dubai. Over time, water tanks can accumulate sediment, algae, and bacteria, making them unsafe for domestic use. Our team uses Dubai Municipality-approved cleaning methods and eco-friendly disinfectants to thoroughly sanitize your tank. We handle both underground and roof-level tanks, providing a complete cleaning report upon completion. Regular water tank cleaning (recommended every 6 months) ensures that the water you use for bathing and washing is free from contaminants. We served hundreds of villas and apartments, maintaining the highest hygiene standards.",
    features: [
      "Complete tank drainage & scrubbing",
      "Sediment & algae removal",
      "Certified sanitization methods",
      "Eco-friendly disinfectants",
      "Pipeline disinfection",
      "Water pump inspection",
      "Float valve maintenance",
      "Villa & building tank cleaning",
    ],
    faqs: [
      {
        question: "How often should I clean my water tank in Dubai?",
        answer:
          "We recommend professional cleaning and sanitization every 6 months to prevent bacteria buildup and ensure water quality.",
      },
      {
        question: "How long does the cleaning process take?",
        answer:
          "A standard villa tank typically takes 2-4 hours to clean. We aim to minimize water disruption during the process.",
      },
      {
        question: "Do you use chemicals for cleaning?",
        answer:
          "We use only approved, food-safe sanitizing agents that are effective against bacteria but safe for human use once the tank is refilled.",
      },
    ],
  },
  {
    slug: "water-heater-repair",
    title: "Water Heater Repair in Dubai",
    shortTitle: "Water Heater",
    icon: Flame,
    metaTitle: "Water Heater Repair in Dubai - Master Technicals",
    metaDescription:
      "Professional water heater repair & installation in Dubai. All brands serviced. Fast response, transparent pricing. Call +971556557200.",
    heroHeadline: "Water Heater Repair & Installation in Dubai",
    heroSubheadline:
      "Fast and reliable water heater services for all brands. Same-day repairs with genuine replacement parts.",
    description:
      "Master Technicals provides expert water heater repair and installation services across Dubai. Whether your water heater is leaking, not heating properly, or needs complete replacement, our skilled technicians can diagnose and fix the issue quickly. We service all types of water heaters including electric, gas, tankless, and solar water heaters from brands like Ariston, Rheem, Bosch, and more. Our services include installation, repair, thermostat replacement, element replacement, anode rod replacement, and annual maintenance. We carry genuine spare parts for all major brands to ensure quick, reliable repairs.",
    features: [
      "Water heater repair & troubleshooting",
      "New water heater installation",
      "Thermostat replacement",
      "Heating element replacement",
      "Leak repair & pipe connections",
      "Tankless water heater services",
      "Annual maintenance & flushing",
      "All brands serviced",
    ],
    faqs: [
      {
        question: "Why is my water heater not heating water?",
        answer:
          "Common causes include a faulty thermostat, burnt heating element, tripped circuit breaker, or sediment buildup. Our technicians can quickly diagnose and fix the issue.",
      },
      {
        question: "How long does a water heater last in Dubai?",
        answer:
          "With proper maintenance, water heaters typically last 8-12 years in Dubai. Regular flushing and annual maintenance can significantly extend the lifespan of your unit.",
      },
      {
        question: "Can you install a tankless water heater?",
        answer:
          "Yes, we install and service all types of water heaters including tankless (on-demand) systems. We can help you choose the right size and model for your home.",
      },
    ],
  },
  {
    slug: "water-pump-installation",
    title: "Water Pump Installation in Dubai",
    shortTitle: "Water Pump",
    icon: Waves,
    metaTitle: "Water Pump Installation in Dubai - Master Technicals",
    metaDescription:
      "Expert water pump installation & repair in Dubai. Boost water pressure with professional pump solutions. Call +971556557200 for a free assessment.",
    heroHeadline: "Water Pump Installation & Repair in Dubai",
    heroSubheadline:
      "Solve low water pressure problems with professional water pump installation and maintenance services across Dubai.",
    description:
      "Master Technicals provides professional water pump installation and repair services across Dubai. Low water pressure is a common issue in many Dubai properties, and our expert technicians can assess your needs and recommend the right pump solution. We install and service all types of water pumps including booster pumps, submersible pumps, centrifugal pumps, and pressure tanks. Our services cover residential villas, apartments, and commercial properties. We ensure proper sizing, installation, and testing to maximize water pressure throughout your property.",
    features: [
      "Booster pump installation",
      "Submersible pump services",
      "Pressure tank installation",
      "Pump repair & maintenance",
      "Water pressure assessment",
      "Pump replacement & upgrades",
      "Commercial pump solutions",
      "Emergency pump repair",
    ],
    faqs: [
      {
        question: "Why is my water pressure low in Dubai?",
        answer:
          "Low water pressure can be caused by pipe issues, high building floors, faulty valves, or inadequate municipal supply. A booster pump is often the most effective solution.",
      },
      {
        question: "What type of water pump do I need?",
        answer:
          "The right pump depends on your property type, number of floors, and water usage. Our technicians provide free assessments to recommend the ideal solution for your needs.",
      },
      {
        question: "How much does a water pump installation cost in Dubai?",
        answer:
          "Water pump installation typically ranges from AED 800 to AED 3,000 depending on the pump type and complexity. We provide detailed quotes before starting any work.",
      },
    ],
  },
  {
    slug: "cctv-installation",
    title: "CCTV Installation in Dubai",
    shortTitle: "CCTV",
    icon: Camera,
    metaTitle: "CCTV Installation in Dubai - Master Technicals",
    metaDescription:
      "Professional CCTV camera installation in Dubai. HD & IP cameras, DVR/NVR setup, remote monitoring. Protect your property. Call +971556557200.",
    heroHeadline: "Professional CCTV Installation in Dubai",
    heroSubheadline:
      "Protect your home and business with advanced CCTV security systems. Expert installation with remote monitoring setup.",
    description:
      "Master Technicals offers professional CCTV installation services across Dubai. We provide complete security camera solutions for homes, offices, warehouses, and retail stores. Our services include site assessment, camera selection, installation, DVR/NVR setup, and remote monitoring configuration. We work with leading brands like Hikvision, Dahua, and CP Plus to provide HD, Full HD, and 4K camera options. All installations include remote viewing setup on your smartphone, so you can monitor your property from anywhere in the world. We also offer annual maintenance contracts for ongoing system health checks.",
    features: [
      "HD & IP camera installation",
      "DVR & NVR setup",
      "Remote monitoring configuration",
      "Night vision cameras",
      "Indoor & outdoor cameras",
      "Wired & wireless solutions",
      "System upgrade & expansion",
      "Annual maintenance contracts",
    ],
    faqs: [
      {
        question: "How many CCTV cameras do I need for my property?",
        answer:
          "The number depends on your property size and coverage needs. We offer free site assessments to recommend the optimal camera placement for maximum coverage.",
      },
      {
        question: "Can I view CCTV footage on my phone?",
        answer:
          "Yes, all our CCTV installations include remote viewing setup on your smartphone and computer, allowing you to monitor your property from anywhere.",
      },
      {
        question: "What is the best CCTV brand for Dubai?",
        answer:
          "We recommend Hikvision, Dahua, and CP Plus for their reliability in Dubai's climate. We help you choose the best option based on your budget and requirements.",
      },
    ],
  },
  {
    slug: "networking-wifi-solutions",
    title: "Networking & WiFi Solutions in Dubai",
    shortTitle: "Networking",
    icon: Wifi,
    metaTitle: "Networking & WiFi Solutions Dubai - Master Technicals",
    metaDescription:
      "Professional networking & WiFi installation in Dubai. Structured cabling, WiFi optimization, router setup. Call +971556557200 for fast internet solutions.",
    heroHeadline: "Networking & WiFi Solutions in Dubai",
    heroSubheadline:
      "Fast, reliable internet throughout your property with professional networking solutions and WiFi optimization.",
    description:
      "Master Technicals provides professional networking and WiFi solutions across Dubai. Slow internet and dead zones are common problems that our expert technicians can solve with proper network infrastructure. We offer structured cabling, WiFi mesh system installation, router configuration, network switch setup, and enterprise networking solutions. Whether you need better WiFi coverage in your villa, a new network for your office, or a complete structured cabling solution, we have the expertise to deliver fast and reliable connectivity throughout your property.",
    features: [
      "WiFi mesh system installation",
      "Structured cabling (Cat6/Cat6a)",
      "Router & switch configuration",
      "Network troubleshooting",
      "WiFi range extension",
      "Office network setup",
      "Server room cabling",
      "Network security setup",
    ],
    faqs: [
      {
        question: "How can I improve my WiFi coverage at home?",
        answer:
          "The best solution depends on your property. Options include mesh WiFi systems, WiFi extenders, or proper cabling. We assess your property and recommend the most effective solution.",
      },
      {
        question: "Do you install structured cabling in offices?",
        answer:
          "Yes, we provide professional structured cabling services using Cat6 and Cat6a cables for offices, warehouses, and commercial properties across Dubai.",
      },
      {
        question: "Can you set up a secure network for my business?",
        answer:
          "Absolutely. We configure firewalls, VPNs, and secure WiFi networks for businesses. We ensure your network is protected against unauthorized access and cyber threats.",
      },
    ],
  },
  {
    slug: "appliance-repair",
    title: "Appliance Repair Services in Dubai",
    shortTitle: "Appliance Repair",
    icon: WashingMachine,
    metaTitle: "Appliance Repair Services Dubai - Master Technicals",
    metaDescription:
      "Professional home appliance repair in Dubai. Washing machines, refrigerators, ovens & more. All brands serviced. Call +971556557200.",
    heroHeadline: "Home Appliance Repair Services in Dubai",
    heroSubheadline:
      "Expert repair services for all major home appliances. All brands serviced with genuine parts and warranty coverage.",
    description:
      "Master Technicals provides professional home appliance repair services across Dubai. Our experienced technicians can diagnose and repair all types of household appliances including washing machines, refrigerators, dishwashers, ovens, dryers, and microwaves. We service all major brands including Samsung, LG, Bosch, Siemens, Whirlpool, and more. Using genuine spare parts and advanced diagnostic tools, we ensure quick and lasting repairs. Most repairs are completed on the same day, and all our work comes with a service warranty for your peace of mind.",
    features: [
      "Washing machine repair",
      "Refrigerator & freezer repair",
      "Dishwasher repair",
      "Oven & cooktop repair",
      "Dryer repair & maintenance",
      "Microwave repair",
      "All major brands serviced",
      "Same-day service available",
    ],
    faqs: [
      {
        question: "Which appliance brands do you repair?",
        answer:
          "We repair all major brands including Samsung, LG, Bosch, Siemens, Whirlpool, Electrolux, Beko, Ariston, and more. Our technicians are trained on the latest models.",
      },
      {
        question: "How long does an appliance repair take?",
        answer:
          "Most repairs are completed within 1-3 hours on the same day. Complex repairs or those requiring special parts may take longer, but we always keep you informed.",
      },
      {
        question: "Do you provide a warranty on appliance repairs?",
        answer:
          "Yes, all our appliance repairs come with a service warranty. The warranty period depends on the type of repair and parts used, typically ranging from 30 to 90 days.",
      },
    ],
  },
  {
    slug: "intercom-installation",
    title: "Intercom Installation in Dubai",
    shortTitle: "Intercom",
    icon: Phone,
    metaTitle: "Intercom Installation in Dubai - Master Technicals",
    metaDescription:
      "Professional intercom & video door phone installation in Dubai. Audio & video systems for homes and buildings. Call +971556557200.",
    heroHeadline: "Intercom & Video Door Phone in Dubai",
    heroSubheadline:
      "Enhance your property security with professional intercom and video door phone systems installation across Dubai.",
    description:
      "Master Technicals provides professional intercom and video door phone installation services across Dubai. Modern intercom systems are essential for residential and commercial security, allowing you to screen visitors before granting access. We install audio intercoms, video door phones, IP-based intercom systems, and multi-unit building solutions. Our services include system design, wiring, installation, programming, and ongoing maintenance. We work with top brands like Commax, Hikvision, and Dahua to provide reliable communication and access control for your property.",
    features: [
      "Audio intercom installation",
      "Video door phone systems",
      "IP-based intercom solutions",
      "Multi-unit building systems",
      "Access control integration",
      "Intercom repair & upgrade",
      "Wireless intercom options",
      "System programming & setup",
    ],
    faqs: [
      {
        question: "What type of intercom is best for my villa?",
        answer:
          "For villas, we recommend video door phone systems with wide-angle cameras and mobile app connectivity, allowing you to see and communicate with visitors even when away.",
      },
      {
        question: "Can you install intercoms in apartment buildings?",
        answer:
          "Yes, we specialize in multi-unit intercom systems for apartment buildings, including lobby-to-unit communication and access control integration.",
      },
      {
        question: "Do modern intercoms work with smartphones?",
        answer:
          "Yes, many modern IP-based intercom systems support smartphone connectivity, allowing you to answer the door, see visitors, and grant access remotely from anywhere.",
      },
    ],
  },
  {
    slug: "carpentry-furniture-dubai",
    title: "Carpentry & Furniture Services in Dubai",
    shortTitle: "Carpentry",
    icon: Hammer,
    metaTitle: "Carpentry & Furniture Repair Dubai | IKEA Furniture Assembly",
    metaDescription:
      "Professional carpentry and furniture assembly in Dubai. IKEA furniture assembly, door repair, cabinet mounting, and furniture fixing. Call +971556557200.",
    heroHeadline: "Expert Carpentry & Furniture Assembly Dubai",
    heroSubheadline:
      "From IKEA furniture assembly to professional door and cabinet repairs, our skilled carpenters deliver quality work across Dubai.",
    description:
      "Master Technicals provides expert carpentry and furniture assembly services in Dubai. We specialize in assembling flat-pack furniture (IKEA, etc.), repairing doors, fixing loose cabinets, and restoring wooden furniture. Our team ensures your furniture is sturdy, level, and properly installed for years of use.",
    features: [
      "IKEA furniture assembly",
      "Door repair & installation",
      "Cabinet mounting & fixing",
      "Furniture fixing & stabilization",
      "Custom woodwork & shelving",
      "Handle & hinge replacement",
      "Wooden floor repair",
      "Wardrobe assembly",
    ],
    faqs: [
      {
        question: "Do you assemble IKEA furniture in Dubai?",
        answer:
          "Yes, we are experts at assembling all types of IKEA furniture, from wardrobes and beds to complex kitchen cabinets and office setups.",
      },
      {
        question: "Can you fix sagging or sticking doors?",
        answer:
          "Yes, we specialize in repairing misaligned doors, fixing hinges, and ensuring all types of wooden and aluminum doors open and close perfectly.",
      },
    ],
  },
  {
    slug: "painting-decorating-dubai",
    title: "Painting & Decorating Services in Dubai",
    shortTitle: "Painting",
    icon: Paintbrush,
    metaTitle: "Painting & Decorating Dubai | Professional Interior Painters",
    metaDescription:
      "Professional interior painting and decorating in Dubai. Wall touch-ups, picture hanging, shelf installation, and complete home painting. Call +971556557200.",
    heroHeadline: "Interior Painting & Decorating Dubai",
    heroSubheadline:
      "Transform your space with professional painting, wall touch-ups, and expert decorating services across Dubai.",
    description:
      "Add a fresh look to your home with Master Technicals' painting and decorating services. We handle everything from complete interior painting to minor touch-ups, hanging pictures, and fixing shelves. Our team ensures clean edges, smooth finishes, and a tidy workspace upon completion.",
    features: [
      "Interior wall painting",
      "Wall touch-ups & corrections",
      "Picture & mirror hanging",
      "Shelf & frame installation",
      "Wallpaper removal & application",
      "Stain removal & surface prep",
      "Ceiling painting",
      "Decorative wall finishes",
    ],
    faqs: [
      {
        question: "Do you handle small painting touch-ups?",
        answer:
          "Yes, we handle jobs of all sizes, from single-wall touch-ups to complete villa painting projects anywhere in Dubai.",
      },
      {
        question: "Is picture hanging included in your services?",
        answer:
          "Absolutely. We provide professional picture and mirror hanging services, ensuring they are perfectly level and securely mounted.",
      },
    ],
  },
  {
    slug: "walls-floors-dubai",
    title: "Walls & Floors Maintenance in Dubai",
    shortTitle: "Walls & Floors",
    icon: Layout,
    metaTitle: "Walls & Floors Dubai | Drywall Repair & Basic Tiling",
    metaDescription:
      "Expert wall and floor maintenance in Dubai. Drywall repair, hole filling, basic tiling, and floor fixes. Call +971556557200 for a free quote.",
    heroHeadline: "Walls & Floors Maintenance Dubai",
    heroSubheadline:
      "Professional drywall repair, tile fixing, and wall maintenance services for homes and offices across Dubai.",
    description:
      "Keep your walls and floors in perfect condition with Master Technicals. We specialize in drywall repair, filling drill holes, and basic tiling repairs. Whether you are moving out and need to restore walls or have damaged floor tiles, our team deliver seamless results.",
    features: [
      "Drywall & gypsum repair",
      "Filling drill holes & cracks",
      "Basic tiling & grout repair",
      "Wall sanding & preparation",
      "Skirting board fixing",
      "Floor tile replacement",
      "Waterproof sealing",
      "Wall finishing services",
    ],
    faqs: [
      {
        question: "Can you fill drill holes before I move out?",
        answer:
          "Yes, we provide move-out wall restoration services, including filling drill holes and sanding for a smooth finish to help you get your security deposit back.",
      },
      {
        question: "Do you provide tiling services for bathrooms?",
        answer:
          "We handle basic tiling repairs, grout replacement, and small tile installations to keep your bathroom floors and walls looking great.",
      },
    ],
  },
  {
    slug: "moving-assistance-dubai",
    title: "Moving Assistance Services in Dubai",
    shortTitle: "Moving Help",
    icon: Truck,
    metaTitle: "Moving Assistance Dubai | Furniture Assembly & Fixture Removal",
    metaDescription:
      "Fast moving assistance in Dubai. Furniture disassembly/assembly and fixture removal for move-in and move-out. Call +971556557200.",
    heroHeadline: "Hassle-Free Moving Assistance Dubai",
    heroSubheadline:
      "Expert help with furniture disassembly, fixture removal, and reassembly during your move across Dubai.",
    description:
      "Make your move easier with Master Technicals' moving assistance. We help disassemble your furniture at your old place and reassemble it at your new home. We also handle the removal and reinstallation of curtains, TVs, and light fixtures during move-in or move-out.",
    features: [
      "Furniture disassembly",
      "Furniture reassembly",
      "Fixture removal services",
      "Curtain & blind reinstallation",
      "TV unmounting & remounting",
      "Shelving removal & fixing",
      "Move-out wall restoration",
      "Loading & unloading help",
    ],
    faqs: [
      {
        question: "Can you help me assemble furniture at my new house?",
        answer:
          "Yes, we provide professional furniture assembly services for all brands, ensuring your new home is ready for you to move in.",
      },
    ],
  },
  {
    slug: "safety-smart-home-dubai",
    title: "Safety & Smart Home Gadget Installation Dubai",
    shortTitle: "Safety & Smart Home",
    icon: ShieldAlert,
    metaTitle: "Smart Home Dubai | Child Safety & Smart Gadget Installation",
    metaDescription:
      "Professional safety and smart home installation in Dubai. Child-safety latches, smoke detectors, and smart gadgets. Call +971556557200.",
    heroHeadline: "Safety & Smart Home Gadgets Dubai",
    heroSubheadline:
      "Protect your home and upgrade your lifestyle with professional installation of safety devices and smart home gadgets.",
    description:
      "Upgrade your home's safety and technology with Master Technicals. We install child-safety latches, smoke detectors, smart doorbells, smart locks, and other gadgets to make your home more secure and convenient.",
    features: [
      "Child-safety latch installation",
      "Smoke & heat detector fixing",
      "Smart doorbell (Ring/Nest) setup",
      "Smart lock installation",
      "Home automation gadgets",
      "Baby proofing services",
      "Security sensor mounting",
      "Voice assistant integration",
    ],
    faqs: [
      {
        question: "Do you install smart doorbells in Dubai?",
        answer:
          "Yes, we install and configure all types of smart doorbells, including Ring, Nest, and Arlo, for both apartments and villas.",
      },
    ],
  },
  {
    slug: "seasonal-upgrades-dubai",
    title: "Seasonal Upgrades & Outdoor Maintenance Dubai",
    shortTitle: "Seasonal Upgrades",
    icon: Sun,
    metaTitle: "Seasonal Upgrades Dubai | Patio Furniture & Outdoor Repair",
    metaDescription:
      "Professional seasonal upgrades and outdoor maintenance in Dubai. Patio furniture fixing, balcony cleaning, and outdoor repairs. Call +971556557200.",
    heroHeadline: "Seasonal Upgrades & Outdoor Living Dubai",
    heroSubheadline:
      "Enhance your outdoor space with patio furniture repairs, balcony cleaning, and seasonal maintenance across Dubai.",
    description:
      "Get your outdoor space ready for every season with Master Technicals. We repair outdoor patio items, fix balcony furniture, and provide thorough cleaning for your terrace and outdoor areas. Our team helps you maximize your outdoor living experience in Dubai.",
    features: [
      "Patio furniture repair",
      "Balcony furniture fixing",
      "Outdoor area cleaning",
      "Gazebo & pergola maintenance",
      "Decking repair & cleaning",
      "Outdoor lighting setup",
      "Planter box installation",
      "Seasonal space preparation",
    ],
    faqs: [
      {
        question: "Can you fix my broken outdoor furniture?",
        answer:
          "Yes, we repair all types of outdoor and balcony furniture, ensuring it's safe and ready for use during the outdoor season in Dubai.",
      },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}

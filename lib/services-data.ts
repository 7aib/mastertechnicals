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
    slug: "handyman-services",
    title: "Handyman Services in Dubai",
    shortTitle: "Handyman",
    icon: Wrench,
    metaTitle: "Handyman Services in Dubai - Master Technicals",
    metaDescription:
      "Professional handyman services in Dubai. From furniture assembly to wall mounting, painting, and general repairs. 24/7 emergency service. Call +971556557200.",
    heroHeadline: "Expert Handyman Services in Dubai",
    heroSubheadline:
      "From minor fixes to major repairs, our skilled handymen handle every task with precision and care across all areas of Dubai.",
    description:
      "Master Technicals provides comprehensive handyman services across Dubai. Our team of skilled professionals can handle everything from furniture assembly and wall mounting to painting, carpentry, and general home repairs. Whether you need a quick fix or a complete home makeover, our licensed handymen deliver quality workmanship every time. We serve all areas of Dubai including Downtown, Marina, JBR, Business Bay, International City, and more. Our handyman services are available on weekdays from 10 AM to 10 PM, with emergency services available 24/7. We use only premium materials and tools to ensure lasting results for every project we undertake. Our experienced team has completed thousands of successful projects across residential and commercial properties in Dubai.",
    features: [
      "Furniture assembly & disassembly",
      "Wall mounting (TVs, shelves, mirrors)",
      "Painting & wall repair",
      "Carpentry & woodwork",
      "Door & lock installation",
      "General home repairs",
      "Picture hanging & decoration",
      "Childproofing services",
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
    slug: "plumbing-services",
    title: "Plumbing Services in Dubai",
    shortTitle: "Plumbing",
    icon: Droplets,
    metaTitle: "Plumbing Services in Dubai - Master Technicals",
    metaDescription:
      "Licensed plumbing services in Dubai. Leak repairs, drain cleaning, pipe installation, bathroom fitting. Emergency plumber available 24/7. Call +971556557200.",
    heroHeadline: "Professional Plumbing Services in Dubai",
    heroSubheadline:
      "Licensed plumbers delivering reliable solutions for all your residential and commercial plumbing needs across Dubai.",
    description:
      "Master Technicals offers professional plumbing services throughout Dubai. Our licensed plumbers handle everything from minor leak repairs to complete bathroom renovations. We specialize in drain cleaning, pipe installation and repair, water heater connections, toilet installation, faucet replacement, and emergency plumbing repairs. Available 24/7 for emergencies, our team uses the latest equipment and techniques to diagnose and fix plumbing issues quickly and efficiently. We serve all major areas including Dubai Marina, Downtown Dubai, JBR, Business Bay, Palm Jumeirah, and International City. Every job comes with a satisfaction guarantee and transparent pricing with no hidden fees.",
    features: [
      "Leak detection & repair",
      "Drain cleaning & unclogging",
      "Pipe installation & replacement",
      "Bathroom & kitchen fitting",
      "Toilet installation & repair",
      "Faucet & fixture replacement",
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
    slug: "electrical-services",
    title: "Electrical Services in Dubai",
    shortTitle: "Electrical",
    icon: Zap,
    metaTitle: "Electrical Services in Dubai - Master Technicals",
    metaDescription:
      "Licensed electricians in Dubai for wiring, socket installation, lighting, circuit breakers & more. Emergency electrical service 24/7. Call +971556557200.",
    heroHeadline: "Licensed Electrical Services in Dubai",
    heroSubheadline:
      "Certified electricians providing safe and reliable electrical installations, repairs, and maintenance across all Dubai areas.",
    description:
      "Master Technicals provides licensed electrical services across Dubai. Our certified electricians handle all residential and commercial electrical needs, from simple socket installations to complete rewiring projects. We specialize in lighting installation, circuit breaker upgrades, electrical panel maintenance, outlet installation, ceiling fan mounting, and emergency electrical repairs. Safety is our top priority, and every job is completed to Dubai Municipality standards. Our electricians are available for scheduled appointments and emergency callouts 24/7. We serve all areas of Dubai and provide free on-site assessments for larger projects.",
    features: [
      "Wiring & rewiring",
      "Socket & switch installation",
      "Lighting installation & repair",
      "Circuit breaker services",
      "Electrical panel upgrades",
      "Ceiling fan installation",
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
    slug: "ac-maintenance-repair",
    title: "AC Maintenance & Repair in Dubai",
    shortTitle: "AC Repair",
    icon: Wind,
    metaTitle: "AC Maintenance & Repair in Dubai - Master Technicals",
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
    slug: "satellite-tv-installation",
    title: "Satellite & TV Installation in Dubai",
    shortTitle: "Satellite & TV",
    icon: Satellite,
    metaTitle: "Satellite & TV Installation in Dubai - Master Technicals",
    metaDescription:
      "Expert satellite dish & TV installation in Dubai. Setup, alignment, and repair services. HD channels and IPTV. Call +971556557200.",
    heroHeadline: "Satellite & TV Installation in Dubai",
    heroSubheadline:
      "Professional satellite dish installation, TV mounting, and channel setup for crystal-clear entertainment in your home.",
    description:
      "Master Technicals provides expert satellite and TV installation services across Dubai. Whether you need a new satellite dish installed, your existing system realigned, or a complete home entertainment setup, our technicians deliver professional results. We handle dish installation and alignment, LNB replacement, cable routing, TV mounting, and receiver programming. We work with all major satellite systems including Arabsat, Nilesat, and Hotbird. Our services also include IPTV setup and multi-room distribution systems for seamless entertainment throughout your home or business.",
    features: [
      "Satellite dish installation & alignment",
      "TV wall mounting",
      "Receiver programming & setup",
      "LNB replacement",
      "Cable routing & management",
      "Multi-room distribution",
      "IPTV setup & configuration",
      "Signal troubleshooting & repair",
    ],
    faqs: [
      {
        question: "Which satellite channels are available in Dubai?",
        answer:
          "Dubai has access to a wide range of satellite channels through Arabsat, Nilesat, and Hotbird. We can set up your system to receive channels from multiple satellites.",
      },
      {
        question: "Can you mount my TV on the wall?",
        answer:
          "Yes, we provide professional TV wall mounting services for all sizes and brands. We ensure secure mounting, clean cable management, and optimal viewing angles.",
      },
      {
        question: "Do you offer IPTV installation?",
        answer:
          "Yes, we install and configure IPTV systems with high-quality streaming options. We ensure proper network setup for buffer-free viewing experience.",
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
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}

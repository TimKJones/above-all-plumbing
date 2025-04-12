/**
 * Services Data Structure
 * 
 * This file defines and exports the central data structure for all plumbing services.
 */

import { ReactNode } from 'react';
import { Wrench, Droplet, Thermometer, ShowerHead, Waves, LucideIcon } from "lucide-react";
import React from 'react';

// We'll import the actual PipeIcon from a component when implementing the UI
// For now, using a string identifier for the PipeIcon
const PIPE_ICON = "PipeIcon";

/**
 * @typedef {Object} ProcessStep
 * @property {string} step - The title of the process step
 * @property {string} description - Detailed description of the step
 */
export interface ProcessStep {
  step: string;
  description: string;
}

/**
 * @typedef {Object} FAQ
 * @property {string} question - The frequently asked question
 * @property {string} answer - The answer to the question
 */
export interface FAQ {
  question: string;
  answer: string;
}

/**
 * @typedef {Object} SEOMetadata
 * @property {string} title - SEO optimized title for the service page
 * @property {string} description - Meta description for the service page
 * @property {string[]} keywords - Keywords for the service
 */
export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
}

/**
 * @typedef {Object} Service
 * @property {number} id - Unique identifier for the service
 * @property {string} title - Display title of the service
 * @property {string} slug - URL-friendly version of the title
 * @property {string} shortDescription - Brief description for cards/previews
 * @property {string} fullDescription - Comprehensive description of the service
 * @property {LucideIcon | string} iconComponent - Icon to represent the service (Lucide component or string identifier)
 * @property {string} heroImage - Path to the hero image for the service page
 * @property {ProcessStep[]} processList - Step-by-step service process
 * @property {FAQ[]} faqs - Frequently asked questions about the service
 * @property {number[]} relatedServices - IDs of related services
 * @property {SEOMetadata} seoMetadata - SEO optimization data
 */
export interface Service {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  iconComponent: LucideIcon | string;
  heroImage: string;
  processList: ProcessStep[];
  faqs: FAQ[];
  relatedServices: number[];
  seoMetadata: SEOMetadata;
}

/**
 * Array of all service objects
 */
const services: Service[] = [
  {
    id: 1,
    title: "Emergency Repairs",
    slug: "emergency-repairs",
    shortDescription: "24/7 service for burst pipes, overflows, and other plumbing emergencies that require immediate attention.",
    fullDescription: `When a plumbing emergency strikes, quick response is essential to minimize damage to your home. Our emergency repair service is available 24/7 to address urgent plumbing issues like burst pipes, severe leaks, sewer backups, and overflowing toilets.

Our professional emergency plumbers arrive fully equipped with the tools and parts needed to diagnose and repair most issues on the spot. We understand that plumbing emergencies don't wait for convenient hours, which is why our team is always ready to respond.

Before we arrive, you can take steps to minimize damage: turn off your water at the main shutoff valve, open faucets to drain remaining water, and remove valuable items from affected areas. These simple actions can significantly reduce water damage while you wait for our professionals to arrive.

All our emergency repairs are performed to the highest standards, with detailed explanations of the issue and transparent pricing even during off-hours service. Our goal is to restore your plumbing system's functionality quickly while providing a permanent solution to the underlying problem.`,
    iconComponent: Wrench,
    heroImage: "/images/services/emergency-repairs-hero.jpg",
    processList: [
      {
        step: "Emergency Call Response",
        description: "Our dedicated hotline ensures you reach a plumbing professional within minutes who will guide you through immediate steps to take and dispatch the nearest technician."
      },
      {
        step: "Rapid Assessment",
        description: "Upon arrival, our technician quickly assesses the situation, identifies the source of the problem, and explains the required repairs before beginning work."
      },
      {
        step: "Professional Repair",
        description: "Using specialized tools and quality parts, we perform repairs efficiently to restore proper function and prevent further damage to your home."
      },
      {
        step: "Post-Repair Verification",
        description: "After completing repairs, we thoroughly test the system to ensure everything is working correctly and that no secondary issues exist."
      },
      {
        step: "Preventive Recommendations",
        description: "Before leaving, we provide advice on preventing similar emergencies in the future and offer recommendations for system improvements if applicable."
      }
    ],
    faqs: [
      {
        question: "What constitutes a plumbing emergency?",
        answer: "Plumbing emergencies include burst pipes, major leaks causing water damage, sewage backups, gas leaks, no hot water in winter, or completely clogged drains causing overflow. Essentially, any situation that risks property damage or makes the home uninhabitable requires emergency service."
      },
      {
        question: "How quickly can you respond to an emergency call?",
        answer: "Our average response time for emergency calls is 30-60 minutes in the Nashville area. Response times may vary based on your location, current demand, and weather conditions, but we prioritize emergency calls and dispatch the nearest available technician."
      },
      {
        question: "Is there an extra charge for emergency service calls after hours?",
        answer: "Yes, there is a higher service rate for emergency calls outside normal business hours (evenings, weekends, and holidays). However, we provide upfront pricing before beginning any work, and the emergency service fee covers the base visit regardless of the complexity of the repair."
      },
      {
        question: "What should I do while waiting for the emergency plumber to arrive?",
        answer: "Turn off the water supply to the affected area or at the main shutoff valve if necessary. Remove valuable items from the area, and use towels or buckets to contain water. If it's a gas leak, evacuate the premises immediately and call from a safe location."
      },
      {
        question: "Do you bring parts for emergency repairs or will a second visit be needed?",
        answer: "Our emergency vehicles are stocked with commonly needed parts and materials to complete most repairs in a single visit. For unusual parts or complex problems, a temporary solution will be implemented to make your home safe and functional until permanent repairs can be completed."
      }
    ],
    relatedServices: [],
    seoMetadata: {
      title: "24/7 Emergency Plumbing Repair Services | Nashville Plumbing Vista",
      description: "Immediate response to plumbing emergencies in Nashville. Available 24/7 for burst pipes, overflows, and urgent plumbing problems. Call our emergency hotline now!",
      keywords: ["emergency plumbing", "24/7 plumber", "burst pipe repair", "plumbing emergency", "emergency drain service", "after hours plumber", "Nashville emergency plumber"]
    }
  },
  {
    id: 2,
    title: "Drain Cleaning",
    slug: "drain-cleaning",
    shortDescription: "Professional solutions for clogged drains, using the latest tools to clear blockages without damaging your pipes.",
    fullDescription: `Slow or clogged drains can quickly disrupt your daily routine and potentially lead to more serious plumbing issues if left untreated. Our professional drain cleaning service uses advanced techniques and specialized equipment to effectively clear blockages and restore proper flow to your plumbing system.

Unlike store-bought chemical drain cleaners that can damage pipes and create environmental hazards, our methods are both effective and safe for your plumbing system. We utilize various approaches based on the specific nature of your clog, from high-pressure water jetting to mechanical snaking and video inspection.

Our drain cleaning service addresses all types of drains including kitchen sinks, bathroom sinks, showers, tubs, floor drains, and main sewer lines. We don't just remove the immediate blockage – we thoroughly clean pipe walls to prevent rapid re-clogging and perform inspections to identify any underlying issues.

After service, our technicians provide maintenance recommendations to help you avoid future clogs and keep your drains flowing smoothly. Regular professional drain cleaning can extend the life of your plumbing system and prevent costly emergency situations.`,
    iconComponent: Droplet,
    heroImage: "/images/services/drain-cleaning-hero.jpg",
    processList: [
      {
        step: "Initial Assessment",
        description: "We evaluate the extent and location of the clog using professional diagnostic methods, which may include camera inspection for severe or recurring blockages."
      },
      {
        step: "Method Selection",
        description: "Based on the assessment, we determine the most effective and safest drain cleaning method for your specific situation, whether that's snaking, hydro jetting, or other specialized techniques."
      },
      {
        step: "Professional Cleaning",
        description: "Our technicians use professional-grade equipment to remove the blockage completely, including any buildup on pipe walls that could cause future problems."
      },
      {
        step: "System Testing",
        description: "After clearing the blockage, we run water through the system to confirm proper drainage and check for any additional issues that may need attention."
      },
      {
        step: "Preventive Maintenance Advice",
        description: "Before completing the service, we provide customized recommendations for keeping your specific drains clear, including usage habits and recommended maintenance schedules."
      }
    ],
    faqs: [
      {
        question: "How do I know if I need professional drain cleaning?",
        answer: "Signs you need professional drain cleaning include: multiple slow-draining fixtures, recurring clogs despite attempts to clear them, gurgling sounds from drains, water backing up in unexpected places, or foul odors coming from drains. These usually indicate blockages beyond what consumer-grade solutions can address."
      },
      {
        question: "Are chemical drain cleaners a good alternative to professional cleaning?",
        answer: "We don't recommend chemical drain cleaners as they can damage pipes (especially older ones), are harmful to the environment, often provide only temporary relief, and can be dangerous if they splash or create harmful fumes. Our professional methods are more effective and safer for your plumbing system."
      },
      {
        question: "How often should I have my drains professionally cleaned?",
        answer: "For residential properties, we recommend professional drain cleaning every 1-2 years as preventive maintenance. However, homes with large families, older plumbing systems, or known issues like tree roots may benefit from more frequent service, perhaps every 6-12 months."
      },
      {
        question: "What's the difference between snaking and hydro jetting?",
        answer: "Drain snaking uses a flexible auger to physically break up or retrieve blockages and works well for simple clogs. Hydro jetting uses high-pressure water to thoroughly scour pipe walls, removing buildup, grease, and debris completely. Hydro jetting provides a more comprehensive cleaning but isn't appropriate for all pipe types or conditions."
      },
      {
        question: "Can you clean outdoor drains and sewer lines?",
        answer: "Yes, we clean all types of drains including outdoor drains, floor drains, and main sewer lines. For sewer lines, we often use camera inspection in combination with cleaning to identify any underlying issues like tree root intrusion, pipe damage, or improper slope that may be causing recurring problems."
      }
    ],
    relatedServices: [],
    seoMetadata: {
      title: "Professional Drain Cleaning Services | Nashville Plumbing Vista",
      description: "Expert drain cleaning solutions in Nashville. We clear stubborn clogs and prevent future blockages with professional equipment and techniques. Book service today!",
      keywords: ["drain cleaning", "clogged drain", "drain unclogging", "hydro jetting", "drain snaking", "sewer line cleaning", "professional drain service", "Nashville drain cleaning"]
    }
  },
  {
    id: 3,
    title: "Water Heater Services",
    slug: "water-heater-services",
    shortDescription: "Installation, repair, and maintenance of traditional and tankless water heaters for consistent hot water.",
    fullDescription: `Your water heater is one of the most essential appliances in your home, providing hot water for bathing, cleaning, and cooking. Our comprehensive water heater services cover all aspects of water heater management, from installation and routine maintenance to repairs and replacement of both traditional tank and modern tankless systems.

For installations, we help you select the right water heater type and size based on your household's needs, available space, energy efficiency goals, and budget. Our certified technicians ensure proper installation according to manufacturer specifications and local building codes, maximizing safety and performance.

When it comes to repairs, we quickly diagnose and fix common issues like inadequate hot water, strange noises, leaks, or complete failures. We service all major brands and models of both tank and tankless water heaters, with most repairs completed in a single visit.

Regular maintenance extends your water heater's lifespan and maintains energy efficiency. Our maintenance service includes flushing the tank to remove sediment, checking and replacing the anode rod if needed, inspecting valves and connections, and testing safety features – all critical steps to prevent premature failure and unexpected cold showers.`,
    iconComponent: Thermometer,
    heroImage: "/images/services/water-heater-hero.jpg",
    processList: [
      {
        step: "Comprehensive Inspection",
        description: "For existing systems, we thoroughly examine all components including heating elements, thermostat, pressure relief valve, anode rod, and connections to identify any issues or maintenance needs."
      },
      {
        step: "Personalized Recommendations",
        description: "Based on the inspection and your needs, we provide clear recommendations for repair, maintenance, or replacement, including options for improving energy efficiency when applicable."
      },
      {
        step: "Expert Service",
        description: "Whether performing maintenance, repairs, or installation, our technicians work efficiently using proper techniques and quality parts to ensure reliable operation of your water heater."
      },
      {
        step: "System Testing",
        description: "After service completion, we verify proper operation, check for appropriate temperature settings, confirm there are no leaks, and ensure all safety features are functioning correctly."
      },
      {
        step: "Ongoing Support",
        description: "We provide guidance on optimal settings, usage tips for efficiency, and a maintenance schedule to maximize the lifespan and performance of your water heater."
      }
    ],
    faqs: [
      {
        question: "How do I know when to replace my water heater rather than repair it?",
        answer: "Consider replacement if your water heater is over 10 years old (tank) or 15+ years (tankless), repairs would cost more than 50% of replacement, you're experiencing frequent failures, efficiency has declined significantly, or your household needs have changed. We can conduct a cost-benefit analysis to help you make the best decision."
      },
      {
        question: "What are the advantages of tankless water heaters over traditional tank models?",
        answer: "Tankless water heaters provide unlimited hot water on demand, use 30-50% less energy, last 5-10 years longer, take up less space, reduce risk of water damage from tank failures, and often qualify for rebates or tax incentives. However, they have higher upfront costs and may require electrical or gas line upgrades."
      },
      {
        question: "How often should water heater maintenance be performed?",
        answer: "We recommend annual maintenance for tank water heaters and every 2-3 years for tankless models. Homes with hard water may need more frequent service. Regular maintenance prevents efficiency loss, extends equipment life, and helps avoid unexpected failures."
      },
      {
        question: "Why is my water heater making noise?",
        answer: "Noises from water heaters are usually caused by sediment buildup in the tank (popping/rumbling), high water pressure (banging), heating element issues (hissing), or normal expansion/contraction (cracking). Most noises indicate the need for maintenance or repair and shouldn't be ignored as they often precede more serious problems."
      },
      {
        question: "How long does water heater installation take?",
        answer: "A standard replacement of a similar type typically takes 2-3 hours. Converting from tank to tankless or changing fuel types may take 4-8 hours due to additional modifications needed. New installations requiring new gas lines, venting, or electrical work may take a full day. We'll provide a specific timeframe based on your situation."
      }
    ],
    relatedServices: [],
    seoMetadata: {
      title: "Water Heater Installation & Repair Services | Nashville Plumbing Vista",
      description: "Expert water heater services in Nashville. Installation, repair, and maintenance for tank and tankless systems. Enjoy reliable hot water - call us today!",
      keywords: ["water heater repair", "tankless water heater", "water heater installation", "hot water heater service", "water heater maintenance", "tank water heater", "Nashville water heater service"]
    }
  },
  {
    id: 4,
    title: "Bathroom Remodeling",
    slug: "bathroom-remodeling",
    shortDescription: "Expert installation of fixtures, toilets, and plumbing during your bathroom renovation project.",
    fullDescription: `Bathroom remodeling is a significant investment that can add value to your home and improve your daily experience. Our specialized bathroom remodeling plumbing services ensure that the plumbing aspects of your renovation are handled professionally and seamlessly integrate with your design vision.

From simple fixture updates to complete bathroom overhauls, our experienced plumbers work closely with your design team or contractors to handle all plumbing-related aspects of the project. This includes relocating water lines and drains, installing new fixtures, updating ventilation, and ensuring proper waterproofing.

We can help with selecting appropriate fixtures that balance aesthetics, functionality, and water efficiency. Our team is experienced with installing standard and luxury fixtures including showers, bathtubs, sinks, toilets, bidets, and specialized elements like steam systems or jetted tubs.

All our bathroom plumbing installations meet or exceed local building codes and come with appropriate permits and inspections. We take pride in our precise workmanship, ensuring that your new bathroom not only looks beautiful but functions flawlessly for years to come.`,
    iconComponent: ShowerHead,
    heroImage: "/images/services/bathroom-remodeling-hero.jpg",
    processList: [
      {
        step: "Initial Consultation",
        description: "We meet with you and your design team to understand your vision, review plans, and discuss plumbing requirements and possibilities for your bathroom remodel."
      },
      {
        step: "Detailed Assessment",
        description: "Our plumbers evaluate your existing plumbing infrastructure, identify any challenges, and develop a comprehensive plan for updates or modifications needed."
      },
      {
        step: "Fixture Selection Assistance",
        description: "If needed, we provide guidance on selecting appropriate fixtures and fittings that align with your design goals while ensuring proper function and efficiency."
      },
      {
        step: "Professional Installation",
        description: "Our licensed plumbers carefully install all plumbing elements, including rough-in work for new layouts, fixture mounting, and connection to existing systems."
      },
      {
        step: "Quality Verification",
        description: "Upon completion, we thoroughly test all installed components, check for leaks, verify proper drainage, and ensure everything meets code requirements and our quality standards."
      }
    ],
    faqs: [
      {
        question: "Do I need to hire a separate contractor for bathroom remodeling, or can you handle the entire project?",
        answer: "We specialize in the plumbing aspects of bathroom remodeling. For comprehensive renovations, most clients work with a general contractor who coordinates various trades (plumbing, electrical, tiling, etc.). We're happy to work as part of your renovation team or refer you to trusted general contractors we regularly collaborate with."
      },
      {
        question: "How long does bathroom plumbing installation typically take during a remodel?",
        answer: "The plumbing portion of a bathroom remodel typically requires 2-5 days of work, depending on complexity. This includes 1-2 days for rough-in plumbing (moving or installing pipes before walls are closed) and 1-3 days for fixture installation and finishing work. This timeline may vary based on project specifics and is usually coordinated within the overall renovation schedule."
      },
      {
        question: "Can you help me make my bathroom more water-efficient during a remodel?",
        answer: "Absolutely! We can recommend and install numerous water-saving options including low-flow toilets (which use 20-60% less water), efficient showerheads and faucets with aerators, dual-flush toilet mechanisms, and smart leak detection systems. These upgrades often qualify for utility rebates and can significantly reduce your water bills."
      },
      {
        question: "Is it possible to expand my bathroom by moving plumbing fixtures to different locations?",
        answer: "Yes, relocating fixtures is possible in most cases, though certain factors affect complexity and cost. Moving fixtures within a limited distance on the same level is relatively straightforward. More extensive changes like relocating upstairs bathrooms or moving fixtures to opposite walls may require structural modifications. We'll assess feasibility during the initial consultation."
      },
      {
        question: "Do you obtain the necessary permits for bathroom plumbing work?",
        answer: "Yes, we handle all required plumbing permits for the work we perform. Bathroom remodels typically require permits, especially when moving fixtures or making significant changes to the plumbing system. We ensure all our work is code-compliant and properly inspected, which protects you during the sale of your home and for insurance purposes."
      }
    ],
    relatedServices: [],
    seoMetadata: {
      title: "Bathroom Remodeling Plumbing Services | Nashville Plumbing Vista",
      description: "Expert plumbing services for bathroom renovations in Nashville. Professional fixture installation, pipe relocation, and plumbing upgrades for your remodel project.",
      keywords: ["bathroom remodeling", "bathroom renovation plumbing", "plumbing fixture installation", "bathroom plumbing upgrade", "shower installation", "bathtub installation", "Nashville bathroom remodel"]
    }
  },
  {
    id: 5,
    title: "Leak Detection",
    slug: "leak-detection",
    shortDescription: "Advanced technology to locate hidden leaks in walls, floors, and underground pipes with minimal disruption.",
    fullDescription: `Water leaks can cause significant damage to your property if left undetected and unrepaired. Our specialized leak detection service uses advanced technology and techniques to locate hidden leaks without unnecessary demolition or disruption to your home or business.

Unlike traditional methods that often involved extensive exploratory demolition, our non-invasive approach employs state-of-the-art equipment including acoustic leak detectors, thermal imaging cameras, moisture meters, and video pipe inspection to precisely locate leak sources. This technology allows us to detect leaks behind walls, under floors, in ceilings, and even in underground pipes.

Early leak detection saves you money by preventing water damage, mold growth, structural issues, and excessive water bills. Signs that you might have a hidden leak include unexplained increases in water bills, the sound of running water when no fixtures are in use, damp spots on walls or floors, mold or mildew growth, or reduced water pressure.

Once we've accurately located a leak, our technicians can provide repair options ranging from spot repairs to pipe replacements, depending on the severity and nature of the problem. Our goal is to resolve your leak with minimal disruption to your property and daily activities.`,
    iconComponent: Waves,
    heroImage: "/images/services/leak-detection-hero.jpg",
    processList: [
      {
        step: "Initial Evaluation",
        description: "We discuss symptoms you've noticed and review your water usage history to understand potential leak patterns and severity."
      },
      {
        step: "Non-Invasive Detection",
        description: "Using specialized equipment like acoustic detectors, thermal cameras, and moisture meters, we thoroughly scan suspected areas to locate hidden leaks without damaging walls or floors."
      },
      {
        step: "Precise Location Identification",
        description: "Once detected, we precisely mark the leak location and determine its depth and accessibility, which guides our repair approach."
      },
      {
        step: "Repair Options Consultation",
        description: "We explain the nature of the leak, show you our findings, and discuss repair options ranging from spot repairs to section replacements, including timelines and costs."
      },
      {
        step: "Professional Repair",
        description: "With your approval, we perform the necessary repairs using the least invasive methods possible, followed by testing to ensure the leak has been completely resolved."
      }
    ],
    faqs: [
      {
        question: "How can I tell if I have a water leak?",
        answer: "Common signs of hidden water leaks include unexplained increases in water bills, sounds of running water when fixtures aren't being used, damp or warm spots on floors or walls, visible mold or mildew, reduced water pressure, visible water damage (discoloration, peeling paint, warping), and musty odors. If you notice any of these signs, it's advisable to schedule a professional leak detection service."
      },
      {
        question: "Can you detect leaks without breaking walls or floors?",
        answer: "Yes, in most cases we can detect leaks without destructive measures. Our advanced equipment (acoustic leak detectors, thermal imaging cameras, moisture meters, and video inspection tools) allows us to locate most leaks non-invasively. While some repairs may ultimately require access to pipes behind surfaces, our detection methods minimize unnecessary demolition."
      },
      {
        question: "How accurate is your leak detection equipment?",
        answer: "Our professional-grade leak detection equipment is highly accurate, typically pinpointing leaks within a few inches of their exact location. This precision allows for minimal disruption during repairs. The combination of multiple detection technologies (acoustic, thermal, moisture, video) provides verification and ensures accuracy even in challenging situations."
      },
      {
        question: "Do you detect both water and gas leaks?",
        answer: "Yes, we detect both water and gas leaks, though the technologies and approaches differ. Water leak detection uses acoustic, thermal, and moisture-sensing equipment. For gas leak detection, we use specialized gas detectors that can identify combustible gas concentrations in the air. Both services are available, though they may be scheduled as separate appointments depending on your needs."
      },
      {
        question: "How long does leak detection take and what does it cost?",
        answer: "A standard leak detection service typically takes 1-3 hours depending on the property size and complexity. Our pricing starts at $X for basic leak detection and varies based on property size, leak type, and complexity. While there is a cost for detection services, finding and fixing leaks early almost always costs significantly less than repairing water damage from undetected leaks."
      }
    ],
    relatedServices: [],
    seoMetadata: {
      title: "Professional Leak Detection Services | Nashville Plumbing Vista",
      description: "Advanced, non-invasive leak detection in Nashville. We locate hidden water and gas leaks using specialized equipment with minimal disruption to your property.",
      keywords: ["leak detection", "water leak repair", "hidden leak detection", "non-invasive leak detection", "pipe leak detection", "slab leak", "Nashville leak detection", "find water leak"]
    }
  },
  {
    id: 6,
    title: "Pipe Repair & Replacement",
    slug: "pipe-repair-replacement",
    shortDescription: "Comprehensive solutions for damaged, corroded, or outdated pipes to prevent leaks and improve water quality.",
    fullDescription: `Pipe problems can range from minor leaks to major system failures, and addressing them promptly is essential to protecting your property and maintaining your plumbing system's integrity. Our pipe repair and replacement services cover all types of residential and commercial pipe issues, using the most appropriate techniques for each situation.

We repair and replace all types of pipes including water supply lines, drain pipes, sewer lines, and gas pipes. Our solutions range from spot repairs for isolated issues to whole-house repiping when multiple pipes are compromised or outdated. We work with various pipe materials including copper, PEX, CPVC, PVC, cast iron, and galvanized steel.

Signs that you might need pipe repair or replacement include visible leaks, water discoloration, reduced water pressure, unusual noises, recurring clogs, foul odors, water damage, or pipes made of outdated materials known for failure (like polybutylene or galvanized steel in older homes).

Our approach prioritizes long-term solutions that balance immediate needs with system longevity. We provide transparent recommendations based on pipe condition, age, material, and your budget considerations. All our pipe work is performed to code with appropriate permits and backed by our workmanship warranty.`,
    iconComponent: PIPE_ICON,
    heroImage: "/images/services/pipe-repair-hero.jpg",
    processList: [
      {
        step: "Comprehensive Inspection",
        description: "We thoroughly examine the affected pipes and surrounding plumbing system, potentially using video inspection for hidden pipe sections to assess condition and identify the root cause of problems."
      },
      {
        step: "Detailed Assessment",
        description: "Based on our findings, we evaluate pipe material, age, extent of damage, and system requirements to determine whether spot repair or replacement is more appropriate and cost-effective."
      },
      {
        step: "Solution Recommendation",
        description: "We explain our findings and present repair or replacement options with clear pricing and timelines, including material choices and their benefits for your specific situation."
      },
      {
        step: "Professional Execution",
        description: "Our licensed plumbers carefully perform the agreed-upon repair or replacement, using proper techniques and quality materials while protecting your property throughout the process."
      },
      {
        step: "Quality Verification",
        description: "Upon completion, we test all repaired or replaced pipes for proper function, check for leaks under pressure, ensure correct flow rates, and confirm everything meets our quality standards before restoration."
      }
    ],
    faqs: [
      {
        question: "How do I know if I need pipe repair or complete replacement?",
        answer: "Pipe repair is typically sufficient for isolated issues like a single leak or damaged section. Complete replacement is recommended when: pipes are made of outdated materials prone to failure (like polybutylene or galvanized steel), multiple leaks have occurred or are likely, pipes show widespread corrosion or mineral buildup, or when repairing would cost more than replacing in the long run. We provide an honest assessment after inspection."
      },
      {
        question: "What pipe materials do you recommend for replacement?",
        answer: "For water supply lines, we typically recommend copper or PEX (cross-linked polyethylene). Copper is durable and time-tested but more expensive; PEX is cost-effective, flexible, and resistant to freezing. For drain lines, we primarily use PVC or ABS plastic for inside homes and schedule 40 PVC for outdoor applications. We'll discuss the pros and cons of each material for your specific situation and budget."
      },
      {
        question: "How long does pipe replacement take and how disruptive is it?",
        answer: "Spot repairs typically take 2-4 hours. Replacing a bathroom group might take a day. Whole-house repiping usually takes 2-5 days depending on house size and complexity. We minimize disruption by careful planning, using existing access points where possible, and employing specialized tools. For repiping, water service is typically only interrupted for a few hours each day, and we always restore water service before leaving."
      },
      {
        question: "Do you offer trenchless pipe repair or replacement options?",
        answer: "Yes, for underground sewer and water lines, we offer trenchless technologies including pipe lining (cured-in-place pipe) and pipe bursting. These methods can replace or restore pipes with minimal excavation, preserving landscaping, driveways, and hardscaping. Trenchless options typically cost more initially but save significantly on restoration expenses and disruption."
      },
      {
        question: "How long should new pipes last after replacement?",
        answer: "With proper installation and normal use, copper pipes typically last 50+ years, PEX lasts 40-50 years, CPVC lasts 30-40 years, and PVC drain lines last 25-40 years. Factors affecting lifespan include water quality (particularly acidity and mineral content), water pressure, proper installation, and environmental conditions. All our pipe installations include a workmanship warranty."
      }
    ],
    relatedServices: [],
    seoMetadata: {
      title: "Expert Pipe Repair & Replacement Services | Nashville Plumbing Vista",
      description: "Professional pipe repair and replacement in Nashville. We fix leaks, replace damaged pipes, and upgrade outdated plumbing systems with minimal disruption.",
      keywords: ["pipe repair", "pipe replacement", "repiping", "leak repair", "copper pipes", "PEX piping", "sewer pipe repair", "trenchless pipe repair", "Nashville pipe replacement"]
    }
  }
];

export default services; 
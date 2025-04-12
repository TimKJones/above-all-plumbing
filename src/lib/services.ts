/**
 * Services Data Structure
 * 
 * This file defines and exports the central data structure for all plumbing services.
 */

import { ReactNode } from 'react';
import { Wrench, Droplet, Thermometer, ShowerHead, Waves, LucideIcon } from "lucide-react";

// We'll import the actual PipeIcon from a component later when implementing the UI
// For now, using a placeholder for the data structure
const PipeIcon = "PipeIcon";

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
 * @property {LucideIcon | ReactNode} iconComponent - Icon to represent the service
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
  iconComponent: LucideIcon;
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
  }
];

export default services; 
import type { Metadata } from 'next';
import { FileCheck } from 'lucide-react';
import ServicePageLayout, { type ServiceDetail } from '@/components/shared/ServicePageLayout';

export const metadata: Metadata = {
  title: 'L4 System Validation | Zeeinx',
  description:
    'Rigorous Level 4 enterprise serialization system validation following GAMP 5 guidelines — IQ, OQ, PQ documentation and regulatory submission-ready validation packages.',
};

const service: ServiceDetail = {
  tag: 'Validation',
  title: 'L4 System Validation',
  subtitle: 'GAMP 5-Compliant Enterprise Serialization System Validation',
  heroDescription:
    'Delivering rigorous, audit-ready Level 4 system validation packages for pharmaceutical serialization platforms — IQ, OQ, PQ documentation built to withstand regulatory scrutiny.',
  overview:
    'The Level 4 (L4) enterprise serialization system — the site-level or enterprise serialization platform responsible for orchestrating serialization data across the manufacturing site, managing the NMVS connectivity layer, and interfacing with ERP and supply chain systems — is a GxP-regulated computer system requiring formal validation under GAMP 5 principles. Zeeinx provides complete L4 system validation services, from validation strategy and risk assessment through to executed IQ/OQ/PQ protocols and final validation summary reports. Our validation consultants have direct experience with all major L4 serialization platforms and the regulatory expectations of EU, US, and global health authorities.',
  icon: <FileCheck size={22} />,
  highlights: [
    {
      title: 'GAMP 5 Methodology',
      description: 'All validation activities follow GAMP 5 risk-based approach and category classification.',
    },
    {
      title: 'IQ / OQ / PQ Protocols',
      description: 'Full suite of Installation, Operational, and Performance Qualification documentation.',
    },
    {
      title: 'Risk Assessment',
      description: 'Formal risk assessment aligned to intended use and regulatory requirements.',
    },
    {
      title: 'Submission-Ready Packages',
      description: 'Documentation formatted and indexed for health authority submission or audit review.',
    },
  ],
  whatWeDeliver: [
    'Validation strategy and validation plan development',
    'System and software categorisation per GAMP 5 (Category 4/5)',
    'User requirements specification (URS) review and gap analysis',
    'Functional and design specification review',
    'Risk assessment and risk management documentation',
    'Installation Qualification (IQ) protocol authoring and execution',
    'Operational Qualification (OQ) protocol authoring and execution',
    'Performance Qualification (PQ) protocol authoring and execution',
    'Deviation and defect management during validation execution',
    'Validation summary report and final validation package compilation',
    'Change control and periodic review procedures post-validation',
  ],
  benefits: [
    {
      title: 'Regulatory Defensibility',
      description: 'Validation packages built to withstand FDA, EMA, and MHRA inspection without rework.',
    },
    {
      title: 'Reduced Validation Risk',
      description: 'Experienced validation authors identify and close gaps before protocol execution begins.',
    },
    {
      title: 'Platform Expertise',
      description: 'Direct experience with all major L4 serialization platforms reduces validation effort and timeline.',
    },
    {
      title: 'Faster Time to Compliance',
      description: 'Structured approach with pre-developed templates accelerates validation delivery.',
    },
    {
      title: 'Integrated with Implementation',
      description: 'Validation services integrated with implementation projects to eliminate duplication.',
    },
    {
      title: 'Post-Validation Support',
      description: 'Change control and revalidation support ensures continued validated state as systems evolve.',
    },
  ],
  relatedServices: [
    { title: 'Serialization Consulting', href: '/services/serialization-consulting', tag: 'Core Service' },
    { title: 'EU Hub Compliance (EMVO)', href: '/services/eu-hub-compliance', tag: 'Compliance' },
    { title: 'EU FMD Implementation', href: '/services/eu-fmd-implementation', tag: 'Regulatory' },
  ],
};

export default function L4SystemValidationPage() {
  return <ServicePageLayout service={service} />;
}

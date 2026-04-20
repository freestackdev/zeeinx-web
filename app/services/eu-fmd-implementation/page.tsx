import type { Metadata } from 'next';
import { ShieldCheck } from 'lucide-react';
import ServicePageLayout, { type ServiceDetail } from '@/components/shared/ServicePageLayout';

export const metadata: Metadata = {
  title: 'EU FMD Implementation | ZeeInx',
  description:
    'Full-scope EU Falsified Medicines Directive implementation — packaging line integration, NMVS connectivity, verification workflows, and go-live support.',
};

const service: ServiceDetail = {
  tag: 'Regulatory',
  title: 'EU FMD Implementation',
  subtitle: 'Falsified Medicines Directive — Full-Scope Compliance Implementation',
  heroDescription:
    'Delivering complete EU FMD compliance, from packaging line serialization and aggregation through to NMVS connectivity and end-to-end verification workflow implementation.',
  overview:
    'The EU Falsified Medicines Directive (Directive 2011/62/EU) and its Delegated Regulation (EU) 2016/161 mandate the serialization and verification of prescription medicines across all EU member states. Compliance requires coordinated implementation across manufacturing, packaging, logistics, and IT systems. ZeeInx provides full-scope EU FMD implementation services — taking responsibility for every layer from pack-level unique identifier encoding and aggregation, through supply chain data flows, to the national medicines verification system (NMVS) connectivity required for end-point verification at dispensing. Our implementation approach is methodology-driven, risk-aware, and built around the specific operational and systems environment of each client.',
  icon: <ShieldCheck size={22} />,
  highlights: [
    {
      title: 'Packaging Line Integration',
      description: 'L1/L2 encoder integration and vision system commissioning for accurate 2D barcode application.',
    },
    {
      title: 'NMVS Connectivity',
      description: 'End-point integration with national medicines verification systems across EU member states.',
    },
    {
      title: 'Aggregation Implementation',
      description: 'Pack-to-case and case-to-pallet aggregation configuration for full supply chain traceability.',
    },
    {
      title: 'Dispensing Verification',
      description: 'Pharmacy and hospital dispensing workflow integration and verification endpoint setup.',
    },
  ],
  whatWeDeliver: [
    'EU FMD regulatory readiness assessment and gap analysis',
    'Unique identifier (UI) implementation — serial number generation and 2D DataMatrix encoding',
    'Packaging line L1/L2 system integration and commissioning',
    'Aggregation workflow design and system configuration',
    'L3 site-level system integration and configuration',
    'NMVS connectivity across all relevant EU member state systems',
    'End-to-end supply chain data flow testing and validation',
    'Pharmacy and wholesale verification endpoint integration',
    'Staff training and standard operating procedure development',
    'Regulatory documentation and compliance evidence packages',
  ],
  benefits: [
    {
      title: 'Full Regulatory Coverage',
      description: 'Complete implementation spanning all technical layers required under EU FMD Delegated Regulation.',
    },
    {
      title: 'Multi-Country Capability',
      description: 'Experience with NMVS connectivity requirements across all EU member states.',
    },
    {
      title: 'Minimised Line Downtime',
      description: 'Structured commissioning approach reduces packaging line disruption during implementation.',
    },
    {
      title: 'Supply Chain Visibility',
      description: 'Aggregation implementation provides enhanced traceability and cold-chain monitoring capability.',
    },
    {
      title: 'Verified Compliance',
      description: 'All implementations are delivered with test evidence and validation documentation.',
    },
    {
      title: 'Ongoing Regulatory Support',
      description: 'Post-implementation support ensures continued compliance as NMVS requirements evolve.',
    },
  ],
  relatedServices: [
    { title: 'Serialization Consulting', href: '/services/serialization-consulting', tag: 'Core Service' },
    { title: 'EU Hub Compliance (EMVO)', href: '/services/eu-hub-compliance', tag: 'Compliance' },
    { title: 'L4 System Validation', href: '/services/l4-system-validation', tag: 'Validation' },
  ],
};

export default function EuFmdImplementationPage() {
  return <ServicePageLayout service={service} />;
}

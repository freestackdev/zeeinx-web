import type { Metadata } from 'next';
import { Network } from 'lucide-react';
import ServicePageLayout, { type ServiceDetail } from '@/components/shared/ServicePageLayout';

export const metadata: Metadata = {
  title: 'EU Hub Compliance (EMVO) | Zeeinx',
  description:
    'Complete EU Hub onboarding and ongoing EMVO compliance management for pharmaceutical manufacturers and marketing authorisation holders.',
};

const service: ServiceDetail = {
  tag: 'Compliance',
  title: 'EU Hub Compliance (EMVO)',
  subtitle: 'European Medicines Verification Organisation Onboarding & Management',
  heroDescription:
    'Connecting your organisation to the European Medicines Verification System and maintaining ongoing EMVO compliance — managed end to end by Zeeinx specialists.',
  overview:
    'The European Medicines Verification Organisation (EMVO) operates the EU Hub at the centre of the European Medicines Verification System (EMVS). All pharmaceutical manufacturers and marketing authorisation holders placing prescription medicines on European markets are required to upload serialisation data to the EU Hub and maintain connectivity with national medicines verification systems (NMVOs). Zeeinx provides complete EU Hub onboarding support — from initial EMVO registration and technical testing through to live production upload — and offers ongoing managed compliance services to ensure continued adherence as systems and requirements evolve.',
  icon: <Network size={22} />,
  highlights: [
    {
      title: 'EMVO Registration',
      description: 'Full support through the EMVO onboarding and agreement process.',
    },
    {
      title: 'Technical Integration',
      description: 'End-to-end connectivity setup between your L4 system and the EU Hub.',
    },
    {
      title: 'End-to-End Testing',
      description: 'Structured test plan execution covering pack upload, alert management, and decommissioning.',
    },
    {
      title: 'Ongoing Monitoring',
      description: 'Proactive monitoring of upload queues, alerts, and data quality issues.',
    },
  ],
  whatWeDeliver: [
    'EMVO membership application and legal agreement support',
    'Technical connectivity setup (SOAP/REST API integration with EU Hub)',
    'Master data configuration — GTINs, batch attributes, and packaging hierarchies',
    'End-to-end testing against EMVO test environments',
    'Go-live coordination and production upload validation',
    'Alert management procedures and operator training',
    'Country-specific NMVO connectivity requirements assessment',
    'Ongoing upload monitoring and data quality reporting',
    'Regulatory change management as EMVO requirements evolve',
  ],
  benefits: [
    {
      title: 'Compliant from Day One',
      description: 'Structured onboarding ensures your EU Hub connectivity is compliant at go-live with no rework.',
    },
    {
      title: 'Reduced Internal Overhead',
      description: 'Offload the complexity of EMVO management to specialists, freeing your team for core activities.',
    },
    {
      title: 'Data Quality Assurance',
      description: 'Proactive monitoring catches and resolves upload errors before they become regulatory issues.',
    },
    {
      title: 'Multi-Market Coverage',
      description: 'Experience across all EU member states and their respective NMVO requirements.',
    },
    {
      title: 'Regulatory Change Readiness',
      description: 'Stay ahead of evolving EMVO and NMVO requirements with continuous compliance monitoring.',
    },
    {
      title: 'Audit Support',
      description: 'Comprehensive records and documentation ready for authority inspection at any time.',
    },
  ],
  relatedServices: [
    { title: 'Serialization Consulting', href: '/services/serialization-consulting', tag: 'Core Service' },
    { title: 'EU FMD Implementation', href: '/services/eu-fmd-implementation', tag: 'Regulatory' },
    { title: 'L4 System Validation', href: '/services/l4-system-validation', tag: 'Validation' },
  ],
};

export default function EuHubCompliancePage() {
  return <ServicePageLayout service={service} />;
}

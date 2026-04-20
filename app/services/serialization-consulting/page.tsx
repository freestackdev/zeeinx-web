import type { Metadata } from 'next';
import { Cpu } from 'lucide-react';
import ServicePageLayout, { type ServiceDetail } from '@/components/shared/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Serialization Consulting | ZeeInx',
  description:
    'Expert pharmaceutical serialization consulting — from hardware selection and system design to full deployment, integration, and team enablement.',
};

const service: ServiceDetail = {
  tag: 'Core Service',
  title: 'Serialization Consulting',
  subtitle: 'End-to-End Serialization Advisory & Implementation',
  heroDescription:
    'From initial scoping through to live system deployment, our serialization consultants bring deep technical and regulatory expertise to every stage of your project.',
  overview:
    'Pharmaceutical serialization is one of the most complex regulatory undertakings for any manufacturer or marketer. ZeeInx provides hands-on serialization consulting that bridges the gap between regulatory requirements and operational reality. Our consultants work directly within your environment — alongside your IT, operations, quality, and supply chain teams — to design, implement, and validate serialization systems that are fit for purpose, scalable, and audit-ready. Whether you are starting from scratch, upgrading legacy systems, or remediating failed implementations, we provide the expertise and project management to deliver.',
  icon: <Cpu size={22} />,
  highlights: [
    {
      title: 'System Architecture Design',
      description: 'L1–L4 system design aligned to your manufacturing and supply chain model.',
    },
    {
      title: 'Hardware & Software Selection',
      description: 'Vendor-neutral evaluation and selection support for all serialization components.',
    },
    {
      title: 'Project Management',
      description: 'Structured delivery with clear milestones, risk management, and stakeholder reporting.',
    },
    {
      title: 'Team Training & Handover',
      description: 'Comprehensive operator and administrator training for long-term self-sufficiency.',
    },
  ],
  whatWeDeliver: [
    'Current-state assessment and gap analysis against applicable regulations',
    'Serialization system architecture design (L1 to L4 integration)',
    'Vendor evaluation and procurement support',
    'Technical specification documentation',
    'Implementation management from installation through go-live',
    'Aggregation and commissioning configuration',
    'Integration with ERP, WMS, and third-party track-and-trace systems',
    'Operator and administrator training programmes',
    'Post-go-live hypercare and support',
  ],
  benefits: [
    {
      title: 'Reduce Implementation Risk',
      description: 'Avoid the costly delays and rework that arise from poorly planned serialization projects.',
    },
    {
      title: 'Accelerate Time to Compliance',
      description: 'Structured delivery methodology ensures on-time compliance with regulatory deadlines.',
    },
    {
      title: 'Vendor-Neutral Guidance',
      description: 'Objective advice ensures you select the right technology for your specific environment.',
    },
    {
      title: 'Operational Readiness',
      description: 'Your team leaves the project fully trained and capable of managing systems independently.',
    },
    {
      title: 'Audit-Ready Documentation',
      description: 'All work is delivered with comprehensive technical documentation and change records.',
    },
    {
      title: 'Long-Term Support',
      description: 'Flexible support agreements ensure continued compliance as regulations evolve.',
    },
  ],
  relatedServices: [
    { title: 'EU Hub Compliance (EMVO)', href: '/services/eu-hub-compliance', tag: 'Compliance' },
    { title: 'EU FMD Implementation', href: '/services/eu-fmd-implementation', tag: 'Regulatory' },
    { title: 'L4 System Validation', href: '/services/l4-system-validation', tag: 'Validation' },
  ],
};

export default function SerializationConsultingPage() {
  return <ServicePageLayout service={service} />;
}

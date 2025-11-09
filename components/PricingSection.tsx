'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Basic Renovation',
    price: '$25,000',
    description: 'Perfect for small home improvements',
    features: [
      'Room renovation',
      'Basic materials included',
      'Up to 2 weeks timeline',
      'Quality guarantee',
      'Project management'
    ],
    popular: false,
  },
  {
    name: 'Custom Build',
    price: '$150,000',
    description: 'Ideal for new construction projects',
    features: [
      'Custom home design',
      'Premium materials',
      'Full project timeline',
      'Dedicated project manager',
      '10-year warranty',
      'Energy-efficient options'
    ],
    popular: true,
  },
  {
    name: 'Commercial Project',
    price: 'Custom Quote',
    description: 'For large-scale commercial builds',
    features: [
      'Commercial-grade materials',
      'Flexible timeline',
      'Multiple teams available',
      'Code compliance guaranteed',
      'Ongoing support',
      'Maintenance packages'
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {pricingPlans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className={`relative rounded-xl p-8 border-2 ${
            plan.popular
              ? 'border-primary dark:border-primary-light bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary-light/5 dark:to-primary-light/10'
              : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-neutral-dark'
          } shadow-lg hover:shadow-xl transition-all`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary dark:bg-primary-light text-white text-sm font-semibold rounded-full">
              Most Popular
            </div>
          )}

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {plan.name}
            </h3>
            <div className="text-3xl font-bold text-primary dark:text-primary-light mb-2">
              {plan.price}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {plan.description}
            </p>
          </div>

          <ul className="space-y-3 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary dark:text-primary-light flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 rounded-lg font-semibold transition-all ${
              plan.popular
                ? 'bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-neutral-darker dark:hover:bg-neutral text-primary dark:text-primary-light'
            }`}
          >
            Get Started
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
}
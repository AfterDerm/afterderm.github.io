const conditions = [
  {
    slug: 'acne',
    title: 'Acne (whiteheads, blackheads, pimples)',
    intro: 'Acne happens when pores clog with oil and dead skin. Gentle, consistent routines work best: cleanse, treat, moisturize, protect. Start slow with actives and avoid over‑scrubbing.',
    whenToSeeDerm: 'If you’re not improving after 6–8 weeks of OTC care, or you’re scarring or getting painful cysts, see a board‑certified dermatologist.',
    routine: [
      'Cleanser twice daily',
      'Active treatment: salicylic acid or benzoyl peroxide',
      'Moisturizer to protect the barrier',
      'Daily sunscreen'
    ],
    products: [
      {
        brand: 'CeraVe',
        name: 'Acne Control Cleanser (2% Salicylic Acid)',
        category: 'Cleanser',
        amazonUrl: 'https://www.amazon.com/CeraVe-Treatment-Salicylic-Purifying-Comedogenic/dp/B0C7JJG6BB',
        image: '/products/cerave-acne-control-cleanser.jpg',
        note: '2% SA unclogs pores; clay helps reduce shine.'
      },
      {
        brand: 'CeraVe',
        name: 'Acne Foaming Cream Cleanser (4% Benzoyl Peroxide)',
        category: 'Cleanser / Treatment',
        amazonUrl: 'https://www.amazon.com/CeraVe-Treatment-Hyaluronic-Niacinamide-Sensitive/dp/B07YLJPMC3',
        image: '/products/cerave-acne-foaming-cream-cleanser.jpg',
        note: 'Start 1x/day; can be drying. Avoid bleaching fabrics.'
      },
      {
        brand: 'La Roche-Posay',
        name: 'Effaclar Salicylic Acid Acne Treatment (spot)',
        category: 'Treatment',
        amazonUrl: 'https://www.amazon.com/Roche-Posay-Mattifying-Blackheads-Whiteheads-Non-Greasy/dp/B0F3CD1Y9B',
        image: '/products/lrp-effaclar-sa-acne-treatment.jpg',
        note: 'SA + LHA helps clear pores; use as spot or thin layer.'
      },
      {
        brand: 'La Roche-Posay',
        name: 'Toleriane Hydrating Gentle Cleanser',
        category: 'Cleanser',
        amazonUrl: 'https://www.amazon.com/Roche-Posay-Toleriane-Hydrating-Gentle-Cleanser/dp/B01N7T7JKJ',
        image: '/products/lrp-toleriane-hydrating-gentle-cleanser.jpg',
        note: 'Non‑foaming option if skin gets dry or irritated.'
      }
    ]
  },
  {
    slug: 'eczema',
    title: 'Eczema (atopic dermatitis)',
    intro: 'Eczema is a relapsing, itchy condition. Daily gentle cleansing and rich, fragrance‑free moisturizers help reduce flares. Apply moisturizers within 3 minutes after bathing.',
    whenToSeeDerm: 'If you have frequent flares, signs of infection, or need prescription treatments (e.g., topical steroids, calcineurin inhibitors).',
    routine: [
      'Short, lukewarm showers; fragrance‑free cleanser',
      'Thick moisturizer twice daily',
      'Spot anti‑itch as directed',
      'Daily mineral sunscreen on exposed skin'
    ],
    products: [
      {
        brand: 'CeraVe',
        name: 'Eczema Relief Creamy Oil',
        category: 'Moisturizer',
        amazonUrl: 'https://www.amazon.com/Moisturizer-Colloidal-Oatmeal-Ceramides-Safflower/dp/B08PCV4QNH',
        image: '/products/cerave-eczema-relief-creamy-oil.jpg',
        note: 'Colloidal oatmeal + ceramides; rich and soothing.'
      },
      {
        brand: 'La Roche-Posay',
        name: 'Lipikar AP+M Triple Repair Body Moisturizer',
        category: 'Moisturizer',
        amazonUrl: 'https://www.amazon.com/Roche-Posay-Lipikar-Intense-Repair-Cream/dp/B003QXZWYW',
        image: '/products/lrp-lipikar-apm-triple-repair.jpg',
        note: 'Ceramide‑3 + niacinamide; eczema‑prone skin friendly.'
      },
      {
        brand: 'La Roche-Posay',
        name: 'Lipikar Soothing Relief Eczema Cream',
        category: 'Moisturizer / Itch relief',
        amazonUrl: 'https://www.amazon.com/Roche-Posay-Lipikar-Soothing-Colloidal-Oatmeal/dp/B076WJXJBG',
        image: '/products/lrp-lipikar-eczema-cream.jpg',
        note: 'With colloidal oatmeal to soothe itchy, irritated skin.'
      }
    ]
  },
  {
    slug: 'psoriasis',
    title: 'Psoriasis (plaques, scaling, itch)',
    intro: 'OTC care can help mild plaques: gentle exfoliation, frequent moisturization, and anti‑itch support. Avoid harsh scrubs.',
    whenToSeeDerm: 'If plaques are extensive, painful, or on sensitive areas (face, groin), or if nails/joints are involved.',
    routine: [
      'Gentle cleanser; avoid hot water',
      'Keratolytic moisturizers (salicylic acid, urea, lactic acid)',
      'Anti‑itch measures as needed'
    ],
    products: [
      {
        brand: 'CeraVe',
        name: 'Psoriasis Moisturizing Cream',
        category: 'Moisturizer / Keratolytic',
        amazonUrl: 'https://www.amazon.com/CeraVe-Moisturizing-Psoriasis-Treatment-Salicylic/dp/B075N8392D',
        image: '/products/cerave-psoriasis-moisturizing-cream.jpg',
        note: '2% SA + lactic acid + urea to soften scale.'
      },
      {
        brand: 'CeraVe',
        name: 'Psoriasis Cleanser',
        category: 'Cleanser / Keratolytic',
        amazonUrl: 'https://www.amazon.com/CeraVe-Psoriasis-Therapy-Cleanser-Ounce/dp/B075N8CDGT',
        image: '/products/cerave-psoriasis-cleanser.jpg',
        note: 'Salicylic & lactic acids gently exfoliate while cleansing.'
      },
      {
        brand: 'La Roche-Posay',
        name: 'Cicaplast Balm B5 (soothing multi‑purpose)',
        category: 'Soothing balm',
        amazonUrl: 'https://www.amazon.com/Roche-Posay-Cicaplast-Baume-Multi-Purpose-Butter/dp/B0060OUV5Y',
        image: '/products/lrp-cicaplast-b5.jpg',
        note: 'Helps comfort dry, irritated skin around plaques.'
      }
    ]
  },
  {
    slug: 'rosacea',
    title: 'Rosacea (redness, flushing, bumps)',
    intro: 'Focus on barrier support and sun protection. Avoid triggers (heat, alcohol, spicy foods) and use gentle products.',
    whenToSeeDerm: 'If persistent redness, visible vessels, or ocular symptoms occur—prescription options can help.',
    routine: [
      'Gentle cleanser',
      'Barrier moisturizer',
      'Daily mineral sunscreen (tinted helps blend redness)'
    ],
    products: [
      {
        brand: 'La Roche-Posay',
        name: 'Toleriane Hydrating Gentle Cleanser',
        category: 'Cleanser',
        amazonUrl: 'https://www.amazon.com/Roche-Posay-Toleriane-Hydrating-Gentle-Cleanser/dp/B01N7T7JKJ',
        image: '/products/lrp-toleriane-hydrating-gentle-cleanser.jpg',
        note: 'Creamy, fragrance‑free, non‑foaming.'
      },
      {
        brand: 'La Roche-Posay',
        name: 'Toleriane Double Repair Face Moisturizer',
        category: 'Moisturizer',
        amazonUrl: 'https://www.amazon.com/Roche-Posay-Toleriane-Double-Repair-Moisturizer/dp/B01N9SPQHQ',
        image: '/products/lrp-toleriane-double-repair.jpg',
        note: 'Barrier‑supporting; oil‑free and non‑comedogenic.'
      },
      {
        brand: 'La Roche-Posay',
        name: 'Anthelios Mineral Zinc Oxide Sunscreen SPF 50 (tinted or untinted)',
        category: 'Sunscreen',
        amazonUrl: 'https://www.amazon.com/Roche-Posay-Anthelios-Sunscreen-Ultra-Light-Titanium/dp/B004W55086',
        image: '/products/lrp-anthelios-mineral-50.jpg',
        note: '100% mineral; tinted option helps minimize white cast.'
      },
      {
        brand: 'CeraVe',
        name: '100% Mineral Sunscreen SPF 50 Face Lotion',
        category: 'Sunscreen',
        amazonUrl: 'https://www.amazon.com/Mineral-Sunscreen-Titanium-Dioxide-Sensitive/dp/B07KLY4RYG',
        image: '/products/cerave-mineral-face-spf50.jpg',
        note: 'Mineral filters (ZnO + TiO2); reapply every 2 hours.'
      }
    ]
  }
];

export default conditions;

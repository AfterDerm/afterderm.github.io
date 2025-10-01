const conditions = [
  {
    slug: 'acne',
    title: 'Acne (whiteheads, blackheads, pimples)',
    shortTitle: 'Acne',
    intro: 'Acne happens when pores clog with oil and dead skin. Gentle, consistent routines work best: cleanse, treat, moisturize, protect. Keep your face clean by washing every night and after activity. It can take weeks to months to see results—consistency is key.',
    whenToSeeDerm: "If you're not improving after 6–8 weeks of OTC care, or you're scarring or getting painful cysts, see a board‑certified dermatologist.",
    routine: [
      'Wash face gently up to twice daily and after sweating',
      'Active treatment: salicylic acid, benzoyl peroxide, or adapalene (retinoid)',
      'Lightweight moisturizer to protect the barrier',
      'Daily sunscreen (acne medications can make skin sun-sensitive)'
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
        brand: 'Differin',
        name: 'Adapalene Gel 0.1% (Retinoid)',
        category: 'Treatment',
        amazonUrl: 'https://www.amazon.com/Differin-Adapalene-Retinoid-Treatment-packaging/dp/B07ZB228KP',
        image: '/products/differin-adapalene-gel.jpg',
        note: 'Clears blackheads, whiteheads, and pimples. Start 2-3x/week, build to nightly.'
      },
      {
        brand: 'La Roche-Posay',
        name: 'Toleriane Hydrating Gentle Cleanser',
        category: 'Cleanser',
        amazonUrl: 'https://www.amazon.com/Roche-Posay-Toleriane-Hydrating-Gentle-Cleanser/dp/B01N7T7JKJ',
        image: '/products/lrp-toleriane-hydrating-gentle-cleanser.jpg',
        note: 'Non‑foaming option if skin gets dry or irritated.'
      },
      {
        brand: 'CeraVe',
        name: 'Hydrating Mineral Sunscreen SPF 50',
        category: 'Sunscreen',
        amazonUrl: 'https://www.amazon.com/CeraVe-Hydrating-Mineral-Sunscreen-Sensitive/dp/B07RK4HS8T',
        image: '/products/cerave-hydrating-mineral-spf50.jpg',
        note: "Mineral sunscreen for acne-prone skin; won't cause breakouts."
      }
    ]
  },
  {
    slug: 'eczema',
    title: 'Eczema (atopic dermatitis)',
    shortTitle: 'Eczema',
    intro: 'Eczema is a relapsing, itchy condition. Daily gentle cleansing and rich, fragrance‑free moisturizers help reduce flares. Apply moisturizers within 3 minutes after bathing. Avoid direct contact with hot water—keep showers short and warm.',
    whenToSeeDerm: 'If you have frequent flares, signs of infection, or need prescription treatments (e.g., topical steroids, calcineurin inhibitors).',
    routine: [
      'Short, lukewarm showers; fragrance‑free cleanser',
      'Thick moisturizer twice daily (apply after bathing/washing hands)',
      'Use fragrance-free products only',
      'Wear gloves when washing dishes by hand'
    ],
    products: [
      {
        brand: 'Vanicream',
        name: 'Gentle Body Wash',
        category: 'Cleanser',
        amazonUrl: 'https://www.amazon.com/Vanicream-Gentle-Wash-Sensitive-Dispenser/dp/B00QY1XZ4W',
        image: '/products/vanicream-gentle-body-wash.jpg',
        note: 'Formulated without common irritants; gentle cleanse without drying.'
      },
      {
        brand: 'CeraVe',
        name: 'Moisturizing Cream',
        category: 'Moisturizer',
        amazonUrl: 'https://www.amazon.com/CeraVe-Moisturizing-Cream-Daily-Moisturizer/dp/B00TTD9BRC',
        image: '/products/cerave-moisturizing-cream.jpg',
        note: 'Thick, fragrance-free formula with ceramides for barrier repair.'
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
        brand: 'CeraVe',
        name: 'Healing Ointment',
        category: 'Intensive Moisturizer',
        amazonUrl: 'https://www.amazon.com/CeraVe-Healing-Ointment-Cracked-Petrolatum/dp/B086MGVGMJ',
        image: '/products/cerave-healing-ointment.jpg',
        note: 'For thicker or oozing plaques; creates protective barrier.'
      }
    ]
  },
  {
    slug: 'psoriasis',
    title: 'Psoriasis (plaques, scaling, itch)',
    shortTitle: 'Psoriasis',
    intro: 'OTC care can help mild plaques: gentle exfoliation, frequent moisturization, and anti‑itch support. Avoid harsh scrubs and do not pick or try to scrub off plaques, as this may cause bleeding or discomfort.',
    whenToSeeDerm: 'If plaques are extensive, painful, or on sensitive areas (face, groin), or if nails/joints are involved.',
    routine: [
      'Gentle cleanser; avoid hot water',
      'Keratolytic moisturizers (salicylic acid, urea, lactic acid) to soften scale',
      'Anti‑itch measures as needed',
      'Do not pick at plaques'
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
        brand: 'Gold Bond',
        name: 'Multi-Symptom Psoriasis Relief Cream',
        category: 'Moisturizer',
        amazonUrl: 'https://www.amazon.com/Gold-Bond-Multi-Symptom-Psoriasis-Relief/dp/B00A8SDOKE',
        image: '/products/gold-bond-psoriasis-cream.jpg',
        note: 'Helps relieve itchy, irritated, and scaling skin.'
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
    shortTitle: 'Rosacea',
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
  },
  {
    slug: 'hyperpigmentation',
    title: 'Hyperpigmentation (dark spots)',
    shortTitle: 'Hyperpigmentation',
    intro: 'Dark spots can develop from sun exposure, acne, or inflammation. Gentle exfoliation and brightening ingredients like azelaic acid and niacinamide can help fade discoloration over time. Sun protection is essential to prevent spots from darkening.',
    whenToSeeDerm: 'If dark spots are changing, irregular, or not fading with OTC care after several months, see a board‑certified dermatologist to rule out other concerns.',
    routine: [
      'Gentle cleanser with brightening ingredients',
      'Brightening treatment: azelaic acid or niacinamide',
      'Daily sunscreen SPF 30+ (critical to prevent darkening)'
    ],
    products: [
      {
        brand: 'La Roche-Posay',
        name: 'Mela B3 Gel Cleanser',
        category: 'Cleanser',
        amazonUrl: 'https://www.amazon.com/Roche-Posay-Cleanser-Formulated-Niacinamide-Discoloration/dp/B0CVZR5VD3',
        image: '/products/lrp-mela-b3-cleanser.jpg',
        note: 'With Melasyl + niacinamide + PHA for dark spots and post-acne marks.'
      },
      {
        brand: 'The Ordinary',
        name: 'Azelaic Acid Suspension 10%',
        category: 'Treatment',
        amazonUrl: 'https://www.amazon.com/Ordinary-Azelaic-Suspension-Brightens-Texture/dp/B078HRB1V9',
        image: '/products/the-ordinary-azelaic-acid.jpg',
        note: 'Brightens skin tone and reduces the look of blemishes.'
      },
      {
        brand: 'La Roche-Posay',
        name: 'Mela B3 UV Daily Sunscreen SPF 30',
        category: 'Sunscreen / Treatment',
        amazonUrl: 'https://www.amazon.com/Roche-Posay-Daily-Sunscreen-Niacinamide-Melasyl/dp/B0CVZTYV1W',
        image: '/products/lrp-mela-b3-spf30.jpg',
        note: 'SPF 30 + 5% niacinamide + Melasyl; corrects & protects from sun damage.'
      },
      {
        brand: 'Eucerin',
        name: 'Radiant Tone Daily Face Lotion SPF 30',
        category: 'Sunscreen / Treatment',
        amazonUrl: 'https://www.amazon.com/Eucerin-Advanced-Correction-Moisturizer-Sunscreen/dp/B0BX8YKKDC',
        image: '/products/eucerin-radiant-tone-spf30.jpg',
        note: 'Dark spot corrector with Thiamidol; reduces persistent dark spots.'
      }
    ]
  }
];

export default conditions;

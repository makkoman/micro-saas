export const authConfig = {
  loginUrl: "/login",
  normalUserCallbackUrl: "/dashboard",
  adminUserCallbackUrl: "/admin/dashboard",
};

export const mailConfig = {
  fromAdmin: "Juan Correa <no-reply@mail.openmicrosaas.org>",
  domain: "mail.openmicrosaas.org",
};

export const siteMetadata = {
  title: "Open Micro SaaS",
  description: "Crafted for Developers, Open for Business",
};

export const publicNavLinks = [
  {
    title: "Pricing",
    url: "/pricing",
  },
  {
    title: "Features",
    url: "/features",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const landingPageContent = {
  heroSection: {
    headline: "Lorem Ipsum Dolor Sit Amet",
    subheadline:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    cta: "Inceptos Gratuit",
    figureImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
  },
  featuresOverview: {
    title: "Ut Enim ad Minima Veniam",
    features: [
      {
        title: "User Authenticatio",
        description:
          "Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea.",
        icon: "lock",
      },
      {
        title: "Billing System",
        description:
          "Commodi consequatur quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
        icon: "credit-card",
      },
      {
        title: "Admin Dashboard",
        description:
          "Quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        icon: "dashboard",
      },
    ],
  },
  howItWorks: {
    title: "Quis Autem Vel Eum Iure Reprehenderit",
    steps: [
      "Lorem ipsum dolor sit amet.",
      "Sed do eiusmod tempor incididunt.",
      "Ut labore et dolore magna aliqua.",
    ],
  },
  whyChooseUs: {
    title: "Nemo Enim Ipsam Voluptatem",
    reasons: [
      "Quia voluptas sit aspernatur aut odit aut fugit.",
      "Sed quia consequuntur magni dolores eos qui ratione.",
      "Voluptatem sequi nesciunt.",
      "Neque porro quisquam est, qui dolorem ipsum.",
      "Quia dolor sit amet, consectetur, adipisci velit.",
    ],
  },
  testimonials: {
    title: "Hear from Our Ipsum",
    feedbacks: [
      {
        quote:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
        author: "Lorem Name",
      },
      {
        quote:
          "Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.",
        author: "Ipsum Name",
      },
    ],
  },
  callToAction: {
    text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.",
    cta: "Cum Soluta Nobis",
  },
  footer: {
    links: ["Lorem", "Ipsum", "Dolor", "Sit"],
  },
};

export const paymentsConfig = {
  title: "Choose the plan that suits you best",
  description: "Start with a 14-day free trial. No credit card needed.",
  defaultCurrency: "USD",
  pricingPlans: [
    {
      id: 1,
      name: "Basic",
      price: 9.99,
      priceId: "your_price_id",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      cta: "Start Basic",
    },
    {
      id: 2,
      name: "Pro",
      price: 29.99,
      priceId: "your_price_id",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
      cta: "Start Pro",
    },
    {
      id: 3,
      name: "Teams",
      price: 59.99,
      priceId: "your_price_id",
      features: ["All Pro features", "Additional Feature 6", "24/7 Support"],
      cta: "Start Teams",
    },
  ],
};

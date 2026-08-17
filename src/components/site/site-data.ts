const CDN = "https://cdn.prod.website-files.com/6145f7146a1337faae24d53f";

export const logoUrl = `${CDN}/642e93d94ccdf8a321436907_logo%20paz.svg`;
export const footerLogoUrl = `${CDN}/64895ffa7442a2bef79ee408_pazcare-logo-text.svg`;
export const heroImageUrl = `${CDN}/68a4787a0319cb6ac84f3eae_HomePage_Image.webp`;

export const navItems = [
  { label: "Platform", items: ["Overview", "Employer Experience", "Mobile app for Employees"] },
  {
    label: "Employee Benefits",
    items: [
      "Group Health Insurance",
      "Group Personal Accident Insurance",
      "Group Term Life Insurance",
      "Super Top-up Insurance",
      "Corporate Wellness Packages",
      "Pazcard Employee Benefits",
    ],
  },
  {
    label: "Business Insurance",
    items: [
      "Directors & Officers Liability",
      "Crime Insurance",
      "Professional Indemnity Insurance",
      "Fire Insurance",
      "Office Insurance Package",
    ],
  },
  { label: "Resources", items: ["Reports", "Guides", "Blogs", "HR Kit"] },
];

export const heroRotatingWords = [
  "Group Health Insurance",
  "Group Term Life Insurance",
  "Group Personal Accident Insurance",
  "Group Top up Health Insurance",
  "Corporate Wellness Packages",
  "Food, Fuel & Multi Wallet Card",
];

export const heroStats = [
  { value: "2500+", label: "Satisfied customers" },
  { value: "4 Lakh+", label: "Happy employees" },
  { value: "4.6/5", label: "Rated on Google" },
];

export const clientLogos = [
  { name: "Wint", src: `${CDN}/6968e4d834bfe55c23905cab_1-02.webp` },
  { name: "Mamaearth", src: `${CDN}/6491875dd366a419f0de91bf_mamaearth-2.svg` },
  { name: "Mindtickle", src: `${CDN}/6491875d70e6f03c6d5579cc_mindtickle-2.svg` },
  { name: "mCaffeine", src: `${CDN}/6968e4d8de2b74f7d911bf7a_1-04.webp` },
  { name: "Cashfree Payments", src: `${CDN}/685bcb06bbcdf1c54d8db5d1_Cashfree%20Payments_id0CRKW3YO_1.webp` },
  { name: "Emergent", src: `${CDN}/69ba52387abadabe93a431b4_emergent-logo-new.svg` },
  { name: "greytHR", src: `${CDN}/6968e4d8f4ad312c1315f15e_1-06.webp` },
  { name: "Navi", src: `${CDN}/6968e4d88b04c4e03cd4de01_1-05.webp` },
  { name: "Keya", src: `${CDN}/6968e4d8ad57fc2fc4ca427b_1-03.webp` },
  { name: "Tredence", src: `${CDN}/685bcc89619c61dd622939ce_Tredence_Logo.webp` },
  { name: "Darwinbox", src: `${CDN}/6a05b5c5e4d7bf5e1656107d_d3ac22f6a81e2460586b0518254e6fe9_Darwinbox%20Horizontal%20Logo_White.webp` },
];

export type Offering = { title: string; description: string; icon: string };

export const offerings: Record<string, Offering[]> = {
  "Paz Insurance": [
    {
      title: "Group Health Insurance",
      description: "Comprehensive health insurance plans that consider all your needs.",
      icon: `${CDN}/648fe9baa96e5e16f4793220_GHI%20icon.svg`,
    },
    {
      title: "Group Personal accident insurance",
      description:
        "Accidental policies that can be tailor-made to meet your team strength's and needs.",
      icon: `${CDN}/648ff8f5dc6153f840e6f400_GPA%20icon.svg`,
    },
    {
      title: "Group Term life insurance",
      description:
        "Protect your employees and their families with the best group-term life insurance policy.",
      icon: `${CDN}/648ff96e6e41759fe44774ba_GTL%20icon.svg`,
    },
    {
      title: "Health Super top-up",
      description: "Why settle for less when you can upgrade your health insurance cover to 20 lakhs.",
      icon: `${CDN}/648ff96e9513baa9534ee6c1_Health%20super-topup%20icon.svg`,
    },
  ],
  "Paz Wellness": [
    {
      title: "Tele doctor consultations",
      description: "Consult specialists anywhere anytime from the comfort of your home.",
      icon: `${CDN}/6490018f35d6666c4a8800fa_Tele%20doctor%20consultations%20(2).svg`,
    },
    {
      title: "Health Check-ups",
      description:
        "Catch potential hiccups early with regular health checkups. Help your team bring their A-game to personal lives and work daily.",
      icon: `${CDN}/6490018ff75399278bbeab92_Health%20Check-ups.svg`,
    },
    {
      title: "Fitness Plans",
      description:
        "Physically fit employees, financially fit business! Foster a healthier, more energetic workforce with customizable fitness plans.",
      icon: `${CDN}/6490019004af85ab6bfeb3fd_Fitness%20Plans%20(2).svg`,
    },
  ],
  "Paz Finance": [
    {
      title: "Meal wallet",
      description:
        "Offer your employees a tax-saving, flexible meal wallet option that can be used at any food merchant.",
      icon: `${CDN}/648ffb5c04af85ab6bf90e4c_Meal%20wallet.svg`,
    },
    {
      title: "Fuel wallet",
      description: "Fuel wallet that can be used at any fuel station around.",
      icon: `${CDN}/648ffb5c7a5a9e037e2df2bf_Fuel%20wallet.svg`,
    },
    {
      title: "Telecom wallet",
      description: "An exclusive wallet for Telecom and broadband benefits.",
      icon: `${CDN}/648ffb5b47139e4ad7363fdd_Telecom%20wallet.svg`,
    },
    {
      title: "Multi benefits wallet",
      description: "Enjoy a wide range of tax-saving employee benefits with just one card.",
      icon: `${CDN}/648ffb5c78f750da0d5e3f68_Multi%20benefits%20wallet.svg`,
    },
  ],
};

export const whySlides = [
  {
    title: "Handpick the employee benefits you want",
    description: "Handpick the ideal perks for your team with a catalogue of choices.",
    image: `${CDN}/6859358eeb4f357690137a78_slide-wellness-webP.webp`,
  },
  {
    title: "Benefits that never go wasted.",
    description:
      "The benefits are easily accessible for your team to explore, enjoy, and make the most of.",
    image: `${CDN}/6859358de0103deb61397e4d_slide-app-screem-webP.webp`,
  },
  {
    title: "Save hours with digital benefits management",
    description: "No more sheets or emails. Manage employee benefits digitally, saving hours every month.",
    image: `${CDN}/6859358d91381ad4a721a4ab_slide-dashboard-webP.webp`,
  },
  {
    title: "Compassionate, efficient claims assistance",
    description: "Stress-free claims support, handled with care and empathy.",
    image: `${CDN}/6859358ee6dc76f068225321_slide-agent-webP.webp`,
  },
];

export const employeeFeatures = [
  {
    title: "Easy claims process",
    description: "Raise and track claims on the app with ease",
    bullets: ["Instant claims filing", "Fewer chances of errors", "Reduced Paperwork", "24/7 Accessibility"],
    image: `${CDN}/685a5dcc571157d3c536acd1_Emp-feature-claims-WebP.webp`,
  },
  {
    title: 'Pazcare "Care Crew"',
    description: "We're here for you anytime, anywhere.",
    bullets: ["24X7 support", "Whatsapp chatbot"],
    image: `${CDN}/685a5dcc3c7d07e3567141d8_Emp-feature-care-WebP.webp`,
  },
  {
    title: "More benefits. Less switching",
    description:
      "Insurance, food wallet, wellness - one app that solves all your employee benefits needs.",
    bullets: [],
    image: `${CDN}/685a5dcc3d56b3203465da91_Emp-feature-benefits-WebP.webp`,
  },
];

export const hrFeatures = [
  {
    title: "Simplify benefits management",
    description: "From assigning to tracking benefits, do everything in one place.",
    bullets: ["Better visibility", "Informed decision making"],
    image: `${CDN}/685a5dcc9cf0929f42fd169b_HR-feature-management-WebP.webp`,
  },
  {
    title: "Claims and benefits analytics",
    description: "Real-time access to your employee's claims status and benefits usage.",
    bullets: ["Real-time updates", "Efficient planning"],
    image: `${CDN}/685a5dcc565eb93897e14247_HR-feature-analytics-WebP.webp`,
  },
  {
    title: "Easy HRMS integration",
    description:
      "Automate additions and deletions of employees to the policy with easy HRMS integration.",
    bullets: ["Save hours of time", "Integrations with top HRMS tools"],
    image: `${CDN}/685a5dcc19078c3330e90912_HR-feature-HRMS-WebP.webp`,
  },
];

export const satisfactionStats = [
  { value: "70+", label: "NPS score for claims and support" },
  { value: "9.2/10", label: "Rating for overall customer satisfaction" },
  { value: "1ST", label: "Awarded as the best brand in insurance" },
];

export const certifications = [
  { name: "AICPA SOC 2", src: `${CDN}/640eb11bd1a77e4e0499d919_AICPA.webp` },
  { name: "ISO 27001", src: `${CDN}/641014152823f6f59f2eaa94_ISO%2027001%20certified.svg` },
  { name: "ISNP", src: `${CDN}/6492a0361371d99bc9b1cb1d_ISNP-white.svg` },
];

export const newsLogos = [
  { name: "YourStory", src: `${CDN}/6492a54c1371d99bc9b76b59_yourstory.png` },
  { name: "Inc42", src: `${CDN}/6492a54bc475e74ad6eface5_Inc42.webp` },
];

export const testimonials = [
  {
    quote:
      "Best pricing along with an easy-to-use platform made managing team insurance much easier for startups like us.",
    name: "Aquibur Rahman",
    role: "CEO, Mailmodo",
    avatar: `${CDN}/68593306c2c2984847884e60_test-Nikunj-webP.webp`,
  },
  {
    quote: "The attention to detail and response time of Pazcare has made us their customer for life.",
    name: "Supriya Paul",
    role: "CEO, Josh Talks",
    avatar: `${CDN}/68593306fad464defbcd2d13_test-Supriya-webP.webp`,
  },
  {
    quote:
      "GMC + wellness plan is of great help to my team during these tough times. We are surely a happy client. Great job guys!",
    name: "Nikunj Verma",
    role: "CEO, Cutshort",
    avatar: `${CDN}/6859330659b96a5d85d9cc75_test-Aquib-webP.webp`,
  },
];

export const userStories = [
  {
    name: "Ishan Saxena",
    role: "Chief Happiness Officer | Unofficial Therapist",
    avatar: `${CDN}/6859314bd7d62ef91202930b_customer-IS-webP.webp`,
    text: "As an organization that prioritizes the well-being of our employees, we believe that the same is paramount to their success and overall happiness. CashKaro.com & EarnKaro recently organized an Annual Comprehensive Health Camp for all employees, with thorough health check-ups, vital measurements and personalized consultations.",
  },
  {
    name: "Onkar Ghone",
    role: "Pazcare member",
    avatar: `${CDN}/6859314bbd543e80ea606e99_customer-OG-WebP.webp`,
    text: "Exceptional claim reimbursement experience ever. I was impressed with their dedication and commitment to ensuring that my application was processed as quickly as possible. Mr. Prem Gupta went the extra mile to help me get my claim reimbursement.",
  },
];

export const faqs = [
  {
    q: "How is Pazcare different from traditional group insurance?",
    a: "Pazcare combines insurance, wellness, tax benefits, and support in one unified platform with a digital-first UX.",
  },
  {
    q: "Why should companies choose Pazcare for group health insurance and wellness solutions?",
    a: "Pazcare offers tailored group health insurance plans with features like day-one coverage, mental health consultations, and telemedicine. Their integrated platform helps HR teams manage employee well-being programs efficiently and improve workforce engagement.",
  },
  {
    q: "Does Pazcare provide technical and claim support for group health insurance?",
    a: "Pazcare offers 24/7 customer support. If you face any difficulty or need support, we have 24x7 human-assisted chat support on WhatsApp/email (support@pazcare.com) and on calls (+91-8037834753).",
  },
  {
    q: "How to buy/renew my group health insurance with Pazcare?",
    a: "Write to us at marketing@pazcare.com or submit your work email and mobile number on our site. Our health insurance consultants will contact you and help you with the renewal process.",
  },
  {
    q: "How does Pazcare make claiming insurance easier?",
    a: "Pazcare offers 24/7 human support, easy digital submissions, and hands-on guidance so employees can confidently file their claims and get timely reimbursement.",
  },
];

export const footerColumns = [
  {
    title: "Platform",
    links: ["Overview", "Employer Experience", "Mobile app for Employees"],
  },
  {
    title: "Company",
    links: [
      "Pazcare Reviews",
      "Contact Us",
      "About Us",
      "Careers",
      "Get Help",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Products",
    links: [
      "Group Health Insurance",
      "Group Personal Accident Insurance",
      "Group Term Life Insurance",
      "Super Top-up Insurance",
      "Keyman Insurance",
      "Flexible Insurance and Benefits",
      "Corporate Wellness Packages",
      "Pazcard Employee Benefits",
    ],
  },
  {
    title: "Resources",
    links: [
      "State of employee insurance 2.0 in India",
      "Employee health & wellness report",
      "Guide to group health insurance",
      "Salary hike calculator",
      "HRA exemption calculator",
      "Gratuity calculator",
      "HR glossary",
    ],
  },
];
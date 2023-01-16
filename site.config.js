const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Donghyub Lim",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: "깊게 알기 위해 노력하는 개발자 임동현입니다.",
    email: "ldh165163@gmail.com",
    linkedin: "morethanmin",
    github: "ldh3907",
    instagram: "do0ng_hyun",
  },
  projects: [
    {
      name: `Donghyuns's Velog`,
      href: "https://velog.io/@ldh3907",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Llog",
    description: "welcome to Llog!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://llog.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL:
    "https://og-image-korean.vercel.app/Llog.png?theme=light&md=1&fontSize=225px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg&widths=300&heights=300", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion", "Llog"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG

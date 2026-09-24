
const CONTENT = {
  fa: {
    meta: {
      title: "آیین اکبرزاده — رزومه شخصی",
      description: "رزومه آنلاین آیین اکبرزاده، دانشجوی مهندسی کامپیوتر"
    },
    ariaLabels: {
      skip: "رفتن به محتوای اصلی",
      langToggle: "تغییر زبان سایت",
      themeToggle: "تغییر تم روشن/تیره",
      menuToggle: "باز و بسته کردن منو"
    },
    nav: {
      about: "درباره من",
      education: "تحصیلات",
      skills: "مهارت‌ها",
      experience: "سوابق کاری",
      certificates: "گواهینامه‌ها",
      contact: "تماس"
    },
    profile: {
      name: "آیین اکبرزاده",
      role: "دانشجوی مهندسی کامپیوتر",
      tagline: "علاقه‌مند به امنیت سایبری، هوش مصنوعی و رباتیک",
      location: "تهران، ایران",
      avatarInitials: "آا",
      cta: { resume: "دانلود رزومه", contact: "ارتباط با من" }
    },
    about: {
      heading: "درباره من",
      body: "من دانشجوی مهندسی کامپیوتر هستم و به یادگیری درباره هر مبحث مربوط به کامپیوتر از جمله وب، امنیت، رباتیک، هوش مصنوعی و مهندسی نرم افزار علاقه دارم. در این صفحه خلاصه‌ای از تحصیلات، مهارت‌ها، سوابق کاری و گواهینامه‌های من آمده است."
    },
    education: {
      heading: "تحصیلات",
      items: [
        {
          degree: "کارشناسی مهندسی کامپیوتر",
          institution: "دانشگاه امیرکبیر(پلی‌تکنیک تهران)",
          period: "1404 - الان",
          score: "معدل: --",
          note: "در حال تحصیل"
        },
        {
          degree: "دیپلم ریاضی و فیزیک",
          institution: "دبیرستان دانش",
          period: "1401 - 1404",
          score: "معدل: --",
          note: ""
        }
      ]
    },
    skills: {
      heading: "مهارت‌ها",
      groups: [
        { title: "زبان‌های برنامه‌نویسی", items: ["JavaScript", "Python", "C", "Java"] },
        { title: "فرانت‌اند", items: ["HTML5", "CSS3"] },
        { title: "ابزار‌ها", items: ["Github", "Git"] },
        { title: "زبان‌های خارجی", items: ["انگلیسی (متوسط رو‌به‌بالا)"] }
      ]
    },
    experience: {
      heading: "سوابق کاری",
      items: [
        {
          role: "مشاور تحصیلی",
          company: "موسسه کنکوری سیب ترش",
          period: "حدود 8 ماه",
          description: "مشاوره تحصیلی و برنامه‌ریزی برای دانش آموزان دبیرستانی به خصوص کنکوری‌ها به صورت آنلاین",
          tags: []
        },
        {
          role: "دستیار موقت مشاور تحصیلی",
          company: "دبیرستان دانش",
          period: "دو هفته(عید نوروز)",
          description: "مشاوره تحصیلی و برنامه‌ریزی و چک کردن گزارش کار و پیشرفت برای دانش آموزان کنکوری در دوران عید نوروز به صورت آنلاین",
          tags: []
        }
      ]
    },
    certificates: {
      heading: "گواهینامه‌ها و دستاوردها",
      items: [
        { title: "برنامه‌نویسی پایتون مقدماتی", issuer: "کورسرا - دانشگاه تورنتو", date: "1403", link: "#" },
        { title: "برنامه‌نویسی پایتون 2", issuer: "کورسرا - دانشگاه تورنتو", date: "1403", link: "#" },
        { title: "نتورک پلاس", issuer: "آکادمی راوین", date: "1405", link: "#" },
        { title: "الپیک یک", issuer: "آکادمی راوین", date: "1405", link: "#" }
      ]
    },
    contact: {
      heading: "ارتباط با من",
      body: "برای همکاری، پیشنهاد شغلی یا هر گفت‌وگوی دیگری خوشحال می‌شوم باهام در ارتباط باشید.",
      items: [
        { type: "email", label: "ایمیل", value: "[email protected]", href:"#"},
        { type: "phone", label: "تلفن", value: "۰۹۱۲۰۰۰۰۰۰۰", href: "#"},
        { type: "github", label: "گیت‌هاب", value: "AeinAk", href: "https://github.com/AeinAk"},
        { type: "linkedin", label: "لینکدین", value: "aein-akbarzadeh", href: "https://linkedin.com/in/aein-akbarzadeh" }
      ],
      socials: [
        { type: "telegram", label: "تلگرام", url: "#" },
      ]
    },
    footer: { text: "© 1405 آیین اکبرزاده" }
  },

  en: {
    meta: {
      title: "Aein Akbarzadeh — Personal Resume",
      description: "Online resume of Aein Akbarzadeh, Computer Engineering Student"
    },
    ariaLabels: {
      skip: "Skip to main content",
      langToggle: "Switch site language",
      themeToggle: "Toggle light/dark theme",
      menuToggle: "Open or close the menu"
    },
    nav: {
      about: "About",
      education: "Education",
      skills: "Skills",
      experience: "Experience",
      certificates: "Certificates",
      contact: "Contact"
    },
    profile: {
      name: "Aein Akbarzadeh",
      role: "Computer Engineering Student",
      tagline: "Passionate about Cybersecurity, AI and Robotics",
      location: "Tehran, Iran",
      avatarInitials: "AA",
      cta: { resume: "Download Resume", contact: "Get in Touch" }
    },
    about: {
      heading: "About Me",
      body: "I am a computer engineering student interested in learning about any computer-related topic, including web development, security, robotics, artificial intelligence, and software engineering. This page provides a summary of my education, skills, work experience, and certifications."
    },
    education: {
      heading: "Education",
      items: [
        {
          degree: "B.Sc. in Computer Engineering",
          institution: "Amirkabir University(Polytechnic of Tehran)",
          period: "2025 - now",
          score: "GPA: -- / 20",
          note: "Still Educating"
        },
        {
          degree: "High School Diploma, Math & Physics",
          institution: "Danesh High School",
          period: "2022 - 2025",
          score: "GPA: -- / 20",
          note: ""
        }
      ]
    },
    skills: {
      heading: "Skills",
      groups: [
        { title: "Programming Languages", items: ["JavaScript", "Python", "C", "Java"] },
        { title: "Front-End", items: ["HTML5", "CSS3"] },
        { title: "Tools", items: ["Git", "Github"] },
        { title: "Languages", items: ["English (Upper-Intermediate)"] }
      ]
    },
    experience: {
      heading: "Experience",
      items: [
        {
          role: "Academic Advisor",
          company: "Sibtorsh Entrance Exam Institute",
          period: "About 8 months",
          description: "Online academic counseling and planning for high school students, especially those preparing for the university entrance exam",
          tags: []
        },
        {
          role: "Temporary Academic Advisor Assistant",
          company: "Danesh High school",
          period: "2 weeks(Nowruz Eid)",
          description: "Online academic counseling, study planning, and progress monitoring for university entrance exam candidates during the Nowruz holidays.",
          tags: []
        }
      ]
    },
    certificates: {
      heading: "Certificates & Achievements",
      items: [
        { title: "primary Python programming", issuer: "Coursera - University of Toronto", date: "2024", link: "#" },
        { title: "Python programming 2", issuer: "Coursera - University of Toronto", date: "2024", link: "#" },
        { title: "Network+", issuer: "Ravin academy", date: "2025", link: "#" },
        { title: "LPIC1", issuer: "Ravin academy", date: "2025", link: "#" }
      ]
    },
    contact: {
      heading: "Get in Touch",
      body: "I'd love to hear from you about collaboration, job opportunities, or anything else.",
      items: [
        { type: "email", label: "Email", value: "[email protected]", href: "#" },
        { type: "phone", label: "Phone", value: "+98 912 000 0000", href: "#"},
        { type: "github", label: "GitHub", value: "AeinAk", href: "https://github.com/AeinAk"},
        { type: "linkedin", label: "LinkedIn", value: "aein-akbarzadeh", href: "https://linkedin.com/in/aein-akbarzadeh" }
      ],
      socials: [
        { type: "telegram", label: "Telegram", url: "#" },
      ]
    },
    footer: { text: "© 2026 Aein Akbarzadeh" }
  }
};

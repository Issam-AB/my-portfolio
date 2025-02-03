export const isProduction = process.env.NODE_ENV === 'production'

export const SITE_URL = isProduction ? 'https://honghong.me' : 'http://localhost:3000'

export const GITHUB_USERNAME = 'Issam-AB'

export const SITE_NAME = 'Hong'
export const SITE_KEYWORDS = ['Issam-ABOULFADL', 'Next.js', 'React', 'TypeScript', 'Node.js']

export const SITE_GITHUB_URL = 'https://github.com/Issam-AB'
export const SITE_LINKEDIN_URL = 'https://www.linkedin.com/in/issam-aboulfadl/'
export const SITE_INSTAGRAM_URL = 'https://www.instagram.com/aissam.afdl/'
export const SITE_X_URL = 'https://x.com/Issam_afdl'
export const SITE_YOUTUBE_URL = 'https://www.youtube.com/@issamaboulfadl4861'


export const EXPERIENCE = [
    {
        company: 'Opineo',
        position: 'Sr.Frontend Engineer',
        date: 'Mar 2024 - Present',
        location: 'Rabat',
        responsibilities: "Senior Frontend Engineer at Opineo SaaS AI-Powered Review Platform: Led innovative SaaS solution transforming customer feedback through intelligent, real-time analytics and automated insights.",
        picture: '/images/experience/opineo-logo.jpg',
        tags: ['React', 'TypeScript', 'Zustand', 'TailwindCSS', 'Nest.js', 'Business Intelligence']
    },
    {
        company: 'AjiCreative',
        position: 'Frontend Developer',
        date: 'Dec 2021 - Mars 2024',
        location: 'Agadir',
        responsibilities: "Frontend Developer at AjiCreative: Developed dynamic web solutions across multiple projects, leveraging advanced JavaScript frameworks to build innovative digital experiences.",
        picture: '/images/experience/ajicreative-logo.jpg',
        tags: ['React', 'Vue', 'Sass', 'TailwindCSS', 'Prisma', 'Node.js', 'GraphQL',"Nuxt.js", "Next.js", "user experience (UX)"]
    },
    {
        company: 'LakeLand',
        position: 'Full stack Developer',
        date: 'Nov 2020 - Dec 2021',
        location: 'Agadir',
        responsibilities: "Full Stack Developer at Web Lakeland: Built innovative SaaS platform for lead management, implementing robust backend solutions and responsive frontend design with secure payment integration.",
        picture: '/images/experience/lakeland-logo.jpg',
        tags: ['React', 'Redux', 'Java', 'Spring boot', 'Material-ui',  'Docker', 'HTML5', 'CSS3']
    }

]
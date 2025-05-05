// gitprofile.config.js

const config = {
    github: {
      username: 'TuvyaMacklin', // Your GitHub org/user name. (Required)
      sortBy: 'stars', // stars | updated
      limit: 10, // How many projects to display.
      exclude: {
        forks: true, // Forked projects will not be displayed if set to true.
        projects: [
          'TuvyaMacklin.github.io',
          'Boss-Monster',
          '4570H-23-web',
          'MAC-CBS'
        ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
      },
    },
    social: {
      linkedin: 'TuvyaMacklin',
      twitter: '',
      mastodon: '',
      facebook: '',
      instagram: '',
      youtube: '',
      dribbble: '',
      behance: '',
      medium: '',
      dev: '',
      stackoverflow: '', // format: userid/username
      skype: '',
      telegram: '',
      website: '',
      phone: '',
      email: 'tuvyamacklin@gmail.com',
    },
    resume: {
      fileUrl:
        '', // Empty fileUrl will hide the `Download Resume` button.
    },
    skills: [
      'Java',
      'Python',
      'C',
      'TensorFlow',
      'Maven',
      'FiftyOne',
      'Git',
      'Docker',
      'FastAPI',
      'AWS',
    ],
    experiences: [
      {
        company: 'Riverside Research',
        position: 'Research Intern',
        from: 'May 2019',
        to: 'June 2019',
        companyLink: 'https://www.riversideresearch.org',
      },
      {
        company: 'Sargenti Architects',
        position: 'Architectural Intern',
        from: 'Summer of 2018',
        to: 'Summer of 2023',
        companyLink: 'https://www.sargarch.com',
      },
        {
            company: 'Bar-Ilan University',
            position: 'Reseatcher',
            from: 'June 2024',
            to: 'July 2024',
            companyLink: 'https://engineering.biu.ac.il/en/node/12692',
        },
    ],
    /* certifications: [
      {
        name: 'Lorem ipsum',
        body: 'Lorem ipsum dolor sit amet',
        year: 'March 2022',
        link: 'https://example.com'
      },
    ], */
    education: [
      {
        institution: 'Yeshiva University',
        degree: 'Bachelor of Sciences in Computer Science',
        from: '2021',
        to: '2025',
      }
    ],
  
    // To hide the `My Projects` section, keep it empty.
    externalProjects: [
      {
        title: 'Deep Learning in Computer Vision',
        description:
          'Object detection and instance segmentation model created in the YU CS summer program',
        imageUrl: 'https://avatars.githubusercontent.com/u/135040186?s=48&v=4',
        link: 'https://github.com/YCCS-Summer-2023-DLCV/Deep-Learning-in-Computer-Vision',
      },
      {
        title: 'MAC CBS',
        description:
          'Research into MAC-CBS as a potential new splitting method for resolving conflicts in a CBS algorithm, under the guidance of Dr. Dor Atzmon of Bar-Ilan University.',
        imageUrl: 'https://avatars.githubusercontent.com/u/135040186?s=48&v=4',
        link: 'https://github.com/TuvyaMacklin/MAC-CBS',
      },
    ],
    // Display blog posts from your medium or dev account. (Optional)
    blog: {
      source: 'dev', // medium | dev
      username: '', // to hide blog section, keep it empty
      limit: 2, // How many posts to display. Max is 10.
    },
    googleAnalytics: {
      id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    // Track visitor interaction and behavior. https://www.hotjar.com
    hotjar: {
      id: '',
      snippetVersion: 6,
    },
    themeConfig: {
      defaultTheme: 'winter',
  
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
  
      // Should use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultTheme
      respectPrefersColorScheme: false,
  
      // Hide the ring in Profile picture
      hideAvatarRing: false,
  
      // Available themes. To remove any theme, exclude from here.
      themes: [
        'light',
        'dark',
        'cupcake',
        'bumblebee',
        'emerald',
        'corporate',
        'synthwave',
        'retro',
        'cyberpunk',
        'valentine',
        'halloween',
        'garden',
        'forest',
        'aqua',
        'lofi',
        'pastel',
        'fantasy',
        'wireframe',
        'black',
        'luxury',
        'dracula',
        'cmyk',
        'autumn',
        'business',
        'acid',
        'lemonade',
        'night',
        'coffee',
        'winter',
        'procyon',
      ],
  
      // Custom theme
      customTheme: {
        primary: '#fc055b',
        secondary: '#219aaf',
        accent: '#e8d03a',
        neutral: '#2A2730',
        'base-100': '#E3E3ED',
        '--rounded-box': '3rem',
        '--rounded-btn': '3rem',
      },
    },
  
    // Optional Footer. Supports plain text or HTML.
    footer: `Made with <a 
        class="text-primary" href="https://github.com/arifszn/gitprofile"
        target="_blank"
        rel="noreferrer"
      >GitProfile</a> and ❤️`,
  };

export default config;

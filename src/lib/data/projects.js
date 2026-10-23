export const projects = [

    {
        slug: 'echoes',
        n: '01',
        type: 'WEB APPLICATION · BUILT',
        name: 'Echoes Diary',
        desc: 'Echoes is a digital diary for personal reflection and shared memories. Invite your partner, friends, or family into a shared space to write entries, exchange letters, share photos, and record meaningful moments together.',
        tags: ['SvelteKit', 'TypeScript', 'HTML','Tailwind CSS', 'Supabase'],

        // Cover image for homepage and All Projects
        image: '/images/projects/echoes/echoes-login.png',

        // Screenshots for the individual project page
        images: [
            '/images/projects/echoes/echoes-login.png',
            '/images/projects/echoes/echoes-dashboard.png',
            '/images/projects/echoes/echoes-create-diary.png',
            '/images/projects/echoes/echoes-created-diary.png',
            '/images/projects/echoes/echoes-inside-diary.png',
            '/images/projects/echoes/echoes-created-memory.png',
            '/images/projects/echoes/echoes-inside-memory.png',
            '/images/projects/echoes/echoes-milestone.png',
            '/images/projects/echoes/echoes-shared-photos.png'
        ],

        summary: 'A private shared digital diary for meaningful moments, letters, and memories.',
        features: [
            'Shared diaries — Invite the people you choose to contribute entries and memories together.',
            'Individual journals — A dedicated space for each member’s thoughts and stories.',
            'Milestones — Celebrate anniversaries, achievements, and important moments.',
            'Shared photos — Collect and revisit photos alongside your memories.',
            'Calendar — Browse entries by date and look back on past moments',
            'Voice recordings — Capture thoughts and stories in your own voice.',
            'Letters — Write meaningful messages for the people sharing your diary.',
            'Customizable appearance — Personalize diaries with titles, theme colors, cover photos, and backgrounds.'
        ]
    },


{
slug: 'golden-anniversary',
n: '03',
type: 'EVENT WEBSITE · BUILT',
name: 'Golden Anniversary',
desc: 'A personalized anniversary invitation with an animated envelope, photo carousel, live countdown, and RSVP.',
tags: ['HTML', 'CSS', 'JavaScript', 'Google Apps Script', 'Google Sheets', 'Netlify'],

  image: '/images/projects/invitation/Anniversary-home.png',

  images: [
    '/images/projects/invitation/Anniversary-home.png',
    '/images/projects/invitation/Anniversary-invitation.png',
    '/images/projects/invitation/Anniversary-letter.png',
    '/images/projects/invitation/Anniversary-details.png',
    '/images/projects/invitation/Anniversary-photogallery.png',
    '/images/projects/invitation/Anniversary-rsvp.png'
  ],

summary: 'A personalized digital invitation celebrating 50 years of love and memories. Guests open an animated envelope, read a welcome letter, explore the couple’s photos, view event details, and confirm their attendance through an RSVP form connected to Google Sheets.',

features: [
  'Animated envelope opening and welcome letter',
  'Event date, time, venue, and attire details',
  'Live countdown to the celebration',
  'RSVP form connected to Google Sheets',
  'Loading, success, and error feedback for RSVP submissions',
  'Photo carousel showcasing treasured memories',
  'Venue location button linking to Google Maps',
  'Responsive layout for mobile, tablet, and desktop',
  'Elegant anniversary theme with personalized content',
  'Netlify deployment with serverless functions for RSVP submissions'

  ]
},

{
  slug: 'vavabroom',
  n: '04',
  type: 'WEB APPLICATION · BUILT',
  name: 'VavaBroom',
  role: 'Web Developer',
  desc: 'A movie and TV streaming platform with genre browsing, trending titles, dynamic content, and integrated video playback.',
  tags: [
    'React',
    'Vite',
    'Tailwind CSS',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Firebase',
    'TMDb API',
    'Vidking Video Player'
  ],

  image: '/images/projects/vavabroom/vavaBroom-dashboard.png',

  images: [
    '/images/projects/vavabroom/vavaBroom-dashboard.png',
    '/images/projects/vavabroom/vavaBroom-genre.png',
    '/images/projects/vavabroom/vavaBroom-movies.png',
    '/images/projects/vavabroom/vavaBroom-series.png',
    '/images/projects/vavabroom/vavaBroom-top10.png'
  ],

  summary: 'VavaBroom is a movie and TV streaming website built with React, Vite, and Tailwind CSS. It uses the TMDb API to fetch title information and the Vidking Video Player for integrated playback. Users can explore genres, discover trending titles, and browse dedicated movie and series sections through a responsive interface. Its name takes inspiration from Desperate Housewives.',

  features: [
    'Movie and TV series browsing with dedicated sections',
    'Dynamic title information fetched through the TMDb API',
    'Integrated playback through the Vidking Video Player',
    'Genre-based navigation for discovering titles',
    'Trending titles and curated collections',
    'Top 10 titles showcase',
    'Responsive layouts for mobile, tablet, and desktop'
  ]
},

{
  slug: 'local-living',
  n: '05',
  type: 'WEB APPLICATION · IN PROGRESS',
  name: 'Local Living Dashboard',
  desc: 'A city-based dashboard bringing weather, news, and upcoming events together in one responsive interface.',
  tags: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Vite',
    'JavaScript',
    'HTML',
    'CSS',
    'WeatherAPI',
    'NewsAPI',
    'Ticketmaster API',
    'Netlify'
  ],

  image: '/images/projects/local-living/localliving-tuguegarao.png',

  images: [
    '/images/projects/local-living/localliving-tuguegarao.png',
    '/images/projects/local-living/localliving-tumauini.png',
    '/images/projects/local-living/localliving-mandaluyong.png'
  ],

  summary: 'Local Living Dashboard gives users a convenient snapshot of their selected city through weather updates, news, and upcoming events. Built with React, TypeScript, and Tailwind CSS, it brings together information from WeatherAPI, NewsAPI, and the Ticketmaster API in a clean, responsive dashboard. Content availability depends on each provider’s coverage of the selected location.',

  features: [
    'City-based browsing for location-specific information',
    'Current weather information powered by WeatherAPI',
    'News content fetched through NewsAPI',
    'Upcoming event listings through the Ticketmaster API',
    'Unified dashboard for weather, news, and events',
    'Responsive layouts for mobile, tablet, and desktop',
    'Deployed on Netlify'
  ]
},

];

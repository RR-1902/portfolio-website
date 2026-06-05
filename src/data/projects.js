export const projects = [
  {
    id: 'speakrightai',
    title: 'SpeakRightAI',
    tagline: 'Real-time AI Pronunciation Coach',
    description:
      'Analyzes speech at the phoneme level using OpenAI Whisper and CMUdict. Gives granular feedback with session-based progress tracking. Fully dockerized.',
    tech: ['FastAPI', 'Whisper', 'React', 'Docker', 'NLTK', 'Python'],
    github: 'https://github.com/RR-1902/speakrightAI',
    accent: '#6C47FF',
    highlights: ['Phoneme-level speech analysis', 'Session-based progress tracking', 'Dockerized full-stack workflow'],
  },
  {
    id: 'campuspulse',
    title: 'CampusPulse',
    tagline: 'Premium Campus Management Platform',
    description:
      'Multi-role platform for admins, faculty, and students with JWT auth, live attendance, Recharts analytics, placement notices, and complaint workflows.',
    tech: ['Next.js', 'FastAPI', 'TypeScript', 'Recharts', 'SQLite', 'JWT'],
    github: 'https://github.com/RR-1902/attendance-campuspulse',
    accent: '#9B7BFF',
    highlights: ['Role-aware dashboards', 'Attendance and placement modules', 'Analytics-first campus operations'],
  },
  {
    id: 'cancerdetect',
    title: 'CancerDetect',
    tagline: 'AI Medical Image Classifier',
    description:
      'Histopathology cancer classifier using MobileNetV2 transfer learning trained on 157k+ images. Detects cancer with risk scoring via a Flask web app.',
    tech: ['TensorFlow', 'Keras', 'Flask', 'scikit-learn', 'MobileNetV2', 'Python'],
    github: 'https://github.com/RR-1902/cancerdetect',
    accent: '#FF3366',
    highlights: ['157k+ image training base', 'MobileNetV2 transfer learning', 'Risk scoring interface'],
  },
  {
    id: 'job-interview-sim',
    title: 'Job Interview Sim',
    tagline: 'AI-Powered Interview Practice',
    description:
      'AI-powered job interview simulator with role-specific questions and real-time feedback to help candidates practice under pressure.',
    tech: ['JavaScript', 'AI/NLP', 'React'],
    github: 'https://github.com/RR-1902/job-interview-sim',
    accent: '#6C47FF',
    highlights: ['Role-specific practice', 'Realtime feedback loops', 'Pressure-friendly interview flow'],
  },
]

export const getProjectById = (id) => projects.find((project) => project.id === id)

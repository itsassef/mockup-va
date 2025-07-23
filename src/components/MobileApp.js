import React, { useState } from 'react';
import {
  Search,
  Filter,
  Heart,
  Star,
  Play,
  Users,
  Home,
  Folder,
  MessageCircle,
  Settings,
  Flame,
  Network,
  CheckCircle,
  ChevronRight,
  BookOpen,
  Target,
  Award,
  ClipboardList,
  FileText,
  BarChart3,
  Calendar,
  Bell,
  Download,
  Video,
  Trophy,
  Gamepad2,
  Users2,
  TrendingUp,
  FileDown,
  Eye,
  Edit,
  Plus,
  Navigation,
  MapPin,
  Clock
} from 'lucide-react';

const MobileApp = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Navigation items for the main menu
  const mainMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, color: 'blue' },
    { id: 'lms', label: 'Learn', icon: BookOpen, color: 'green' },
    { id: 'team-building', label: 'Team', icon: Target, color: 'purple' },
    { id: 'assessment', label: 'Assessment', icon: Award, color: 'orange' },
    { id: 'task-list', label: 'Tasks', icon: ClipboardList, color: 'red' },
    { id: 'framework', label: 'Framework', icon: FileText, color: 'indigo' }
  ];

  const categories = [
    { id: 'all', label: 'All', icon: null },
    { id: 'popular', label: 'Popular', icon: Flame },
    { id: 'learning-path', label: 'Learning Path', icon: Network },
    { id: 'completed', label: 'Completed', icon: CheckCircle },
    { id: 'community', label: 'Community', icon: Users }
  ];

  const popularCourses = [
    {
      id: 1,
      title: "How to play guitar for beginners",
      instructor: "Cassandra",
      rating: 4.8,
      reviews: 865,
      price: "$50",
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&h=200&fit=crop&crop=center",
      isFavorite: false,
      progress: 0,
      duration: "2h 30m",
      lessons: 12
    },
    {
      id: 2,
      title: "Mastering UI Design for Beginner",
      instructor: "Vinsmoke Sanji",
      rating: 4.8,
      reviews: 865,
      price: "$50",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop&crop=center",
      isFavorite: true,
      progress: 45,
      duration: "4h 15m",
      lessons: 18
    },
    {
      id: 3,
      title: "UX Design Fundamentals",
      instructor: "Sarah Johnson",
      rating: 4.9,
      reviews: 1247,
      price: "$220",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop&crop=center",
      isFavorite: false,
      progress: 0,
      duration: "6h 45m",
      lessons: 24
    }
  ];

  // Detailed Course Data
  const courseData = {
    id: 2,
    title: "Mastering UI Design for Beginner",
    instructor: "Vinsmoke Sanji",
    rating: 4.8,
    reviews: 865,
    progress: 45,
    duration: "4h 15m",
    lessons: 18,
    completedLessons: 8,
    totalXP: 1250,
    earnedXP: 450,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop&crop=center",
    description: "Learn the fundamentals of UI design from scratch. Master color theory, typography, layout principles, and create stunning user interfaces.",
    modules: [
      {
        id: 1,
        title: "Introduction to UI Design",
        lessonCount: 3,
        completed: 3,
        duration: "45m",
        xp: 150,
        lessons: [
          { id: 1, title: "What is UI Design?", duration: "15m", status: "completed", type: "video" },
          { id: 2, title: "Design Principles", duration: "20m", status: "completed", type: "video" },
          { id: 3, title: "Quiz: Design Basics", duration: "10m", status: "completed", type: "quiz", score: 85 }
        ]
      },
      {
        id: 2,
        title: "Color Theory & Psychology",
        lessonCount: 4,
        completed: 3,
        duration: "1h 15m",
        xp: 200,
        lessons: [
          { id: 4, title: "Color Wheel Basics", duration: "20m", status: "completed", type: "video" },
          { id: 5, title: "Color Psychology", duration: "25m", status: "completed", type: "video" },
          { id: 6, title: "Practical Exercise", duration: "20m", status: "in-progress", type: "exercise" },
          { id: 7, title: "Color Quiz", duration: "10m", status: "pending", type: "quiz" }
        ]
      },
      {
        id: 3,
        title: "Typography Fundamentals",
        lessonCount: 3,
        completed: 1,
        duration: "1h",
        xp: 175,
        lessons: [
          { id: 8, title: "Font Types & Families", duration: "25m", status: "completed", type: "video" },
          { id: 9, title: "Typography Hierarchy", duration: "20m", status: "pending", type: "video" },
          { id: 10, title: "Typography Exercise", duration: "15m", status: "pending", type: "exercise" }
        ]
      },
      {
        id: 4,
        title: "Layout & Grid Systems",
        lessonCount: 4,
        completed: 0,
        duration: "1h 30m",
        xp: 225,
        lessons: [
          { id: 11, title: "Grid Basics", duration: "20m", status: "pending", type: "video" },
          { id: 12, title: "Responsive Design", duration: "25m", status: "pending", type: "video" },
          { id: 13, title: "Layout Exercise", duration: "30m", status: "pending", type: "exercise" },
          { id: 14, title: "Layout Quiz", duration: "15m", status: "pending", type: "quiz" }
        ]
      },
      {
        id: 5,
        title: "Final Project",
        lessonCount: 4,
        completed: 0,
        duration: "2h",
        xp: 500,
        lessons: [
          { id: 15, title: "Project Brief", duration: "15m", status: "pending", type: "video" },
          { id: 16, title: "Design Process", duration: "45m", status: "pending", type: "video" },
          { id: 17, title: "Project Work", duration: "45m", status: "pending", type: "exercise" },
          { id: 18, title: "Final Submission", duration: "15m", status: "pending", type: "submission" }
        ]
      }
    ],
    resources: [
      { name: "UI Design Cheat Sheet", type: "PDF", size: "2.4 MB" },
      { name: "Color Palette Templates", type: "ZIP", size: "5.1 MB" },
      { name: "Typography Guide", type: "PDF", size: "1.8 MB" },
      { name: "Grid System Templates", type: "ZIP", size: "3.2 MB" }
    ],
    certificates: [
      { name: "UI Design Basics", earned: true, date: "2024-01-15" },
      { name: "Color Theory Master", earned: false, progress: 75 },
      { name: "Typography Expert", earned: false, progress: 25 },
      { name: "UI Design Professional", earned: false, progress: 0 }
    ]
  };

  // Kahoot Challenge Data
  const kahootData = {
    id: 3,
    title: "UI Design Knowledge Challenge",
    description: "Test your UI design knowledge with this fast-paced quiz!",
    participants: 32,
    status: "active",
    timeLimit: "30s per question",
    totalQuestions: 10,
    currentQuestion: 4,
    score: 750,
    rank: 5,
    totalPlayers: 32,
    questions: [
      {
        id: 1,
        question: "What is the primary purpose of a wireframe?",
        options: ["To show colors", "To show layout structure", "To show animations", "To show typography"],
        correctAnswer: 1,
        userAnswer: 1,
        timeSpent: 15,
        points: 100
      },
      {
        id: 2,
        question: "Which color represents trust and professionalism?",
        options: ["Red", "Blue", "Green", "Yellow"],
        correctAnswer: 1,
        userAnswer: 1,
        timeSpent: 8,
        points: 100
      },
      {
        id: 3,
        question: "What is the golden ratio in design?",
        options: ["1:1.618", "1:2", "1:1.5", "1:3"],
        correctAnswer: 0,
        userAnswer: 2,
        timeSpent: 25,
        points: 0
      },
      {
        id: 4,
        question: "Which font is best for body text?",
        options: ["Comic Sans", "Times New Roman", "Arial", "All of the above"],
        correctAnswer: 2,
        userAnswer: null,
        timeSpent: 0,
        points: 0
      }
    ],
    leaderboard: [
      { rank: 1, player: "DesignMaster", score: 1200, streak: 8 },
      { rank: 2, player: "UIGuru", score: 1150, streak: 7 },
      { rank: 3, player: "PixelPerfect", score: 1100, streak: 6 },
      { rank: 4, player: "ColorWizard", score: 850, streak: 5 },
      { rank: 5, player: "You", score: 750, streak: 3 }
    ]
  };

  // Quiz Data
  const quizData = {
    id: 2,
    title: "UI Design Fundamentals Quiz",
    description: "Test your knowledge of UI design principles",
    totalQuestions: 15,
    currentQuestion: 7,
    timeLimit: "20 min",
    score: 85,
    maxScore: 100,
    status: "in-progress",
    questions: [
      {
        id: 1,
        question: "What is the purpose of white space in design?",
        type: "multiple-choice",
        options: ["To save ink", "To create visual hierarchy", "To make designs look empty", "To reduce file size"],
        correctAnswer: 1,
        userAnswer: 1,
        explanation: "White space helps create visual hierarchy and improves readability."
      },
      {
        id: 2,
        question: "Which design principle focuses on creating visual connections?",
        type: "multiple-choice",
        options: ["Contrast", "Alignment", "Proximity", "Repetition"],
        correctAnswer: 2,
        userAnswer: 2,
        explanation: "Proximity groups related elements together to create visual connections."
      },
      {
        id: 3,
        question: "What is the recommended line height for body text?",
        type: "multiple-choice",
        options: ["1.0", "1.2", "1.5", "2.0"],
        correctAnswer: 2,
        userAnswer: 1,
        explanation: "A line height of 1.5 provides optimal readability for body text."
      },
      {
        id: 4,
        question: "Which color combination provides the best contrast?",
        type: "multiple-choice",
        options: ["Red on green", "Black on white", "Yellow on white", "Blue on purple"],
        correctAnswer: 1,
        userAnswer: 1,
        explanation: "Black text on white background provides the highest contrast ratio."
      },
      {
        id: 5,
        question: "What is the purpose of a call-to-action button?",
        type: "multiple-choice",
        options: ["To look pretty", "To guide user actions", "To fill space", "To show colors"],
        correctAnswer: 1,
        userAnswer: 1,
        explanation: "Call-to-action buttons guide users toward desired actions."
      },
      {
        id: 6,
        question: "Which grid system is most commonly used in web design?",
        type: "multiple-choice",
        options: ["12-column", "16-column", "8-column", "6-column"],
        correctAnswer: 0,
        userAnswer: 0,
        explanation: "The 12-column grid system is most commonly used in web design."
      },
      {
        id: 7,
        question: "What is the difference between UI and UX design?",
        type: "text",
        userAnswer: "",
        explanation: "UI focuses on visual design, while UX focuses on user experience and interaction."
      }
    ],
    results: {
      correctAnswers: 6,
      totalQuestions: 7,
      percentage: 85,
      timeSpent: "12:30",
      averageTime: "1:47 per question"
    }
  };

  const continueLearning = [
    {
      id: 1,
      title: "UI/UX Mastery",
      category: "UI/UX",
      enrolled: "41k",
      progress: 15,
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=300&h=200&fit=crop&crop=center",
      avatars: [
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
      ]
    },
    {
      id: 2,
      title: "JavaScript Advanced",
      category: "Programming",
      enrolled: "28k",
      progress: 45,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop&crop=center",
      avatars: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
      ]
    }
  ];

  const teamActivities = [
    {
      id: 1,
      title: "Scavenger Hunt",
      description: "Team scavenger hunt with photo challenges",
      participants: 24,
      status: "active",
      icon: Target,
      color: "blue"
    },
    {
      id: 2,
      title: "My Quiz",
      description: "Interactive quiz with Quizizz",
      participants: 16,
      status: "upcoming",
      icon: Award,
      color: "green"
    },
    {
      id: 3,
      title: "Kahoot Challenge",
      description: "Fast-paced knowledge competition",
      participants: 32,
      status: "completed",
      icon: Gamepad2,
      color: "purple"
    }
  ];

  // Location-Based Scavenger Hunt Data
  const scavengerHuntData = {
    id: 1,
    title: "City Adventure Scavenger Hunt",
    description: "Explore the city and complete fun challenges with your team!",
    totalChallenges: 5,
    completedChallenges: 2,
    totalXP: 500,
    earnedXP: 175,
    timeRemaining: "2h 15m",
    status: "active",
    team: "Team Alpha",
    rank: 3,
    totalTeams: 8,
    mapCenter: { lat: 40.7128, lng: -74.0060 },
    userLocation: { lat: 40.7128, lng: -74.0060 },
    challenges: [
      {
        id: 1,
        title: "Team Selfie at City Hall",
        description: "Take a group photo with at least 3 team members at City Hall",
        type: "photo",
        points: 100,
        status: "completed",
        completedAt: "10:30 AM",
        photo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&crop=center",
        location: { lat: 40.7128, lng: -74.0060, name: "City Hall", address: "260 Broadway, New York, NY" },
        distance: "0.2 km away"
      },
      {
        id: 2,
        title: "Find the Hidden Mural",
        description: "Find the street art mural on 5th Avenue and describe what you see",
        type: "text",
        points: 75,
        status: "in-progress",
        hint: "Look for the colorful wall near the coffee shop",
        location: { lat: 40.7589, lng: -73.9851, name: "5th Avenue Mural", address: "5th Ave & 42nd St, New York, NY" },
        distance: "1.8 km away"
      },
      {
        id: 3,
        title: "Local Business Quiz",
        description: "Visit the local bookstore and answer questions about their history",
        type: "quiz",
        points: 125,
        status: "pending",
        location: { lat: 40.7505, lng: -73.9934, name: "Downtown Bookstore", address: "123 Main St, New York, NY" },
        questions: [
          "What year was this bookstore founded?",
          "What's the name of the owner?",
          "How many books are in the store?"
        ],
        distance: "3.2 km away"
      },
      {
        id: 4,
        title: "Historical Landmark Photo",
        description: "Take a photo of the team at the Brooklyn Bridge",
        type: "photo",
        points: 150,
        status: "pending",
        location: { lat: 40.7061, lng: -73.9969, name: "Brooklyn Bridge", address: "Brooklyn Bridge, New York, NY" },
        distance: "4.5 km away"
      },
      {
        id: 5,
        title: "Local Food Challenge",
        description: "Try a local food item and describe the experience",
        type: "text",
        points: 50,
        status: "pending",
        location: { lat: 40.7589, lng: -73.9851, name: "Times Square Food Court", address: "Times Square, New York, NY" },
        distance: "2.1 km away"
      }
    ],
    leaderboard: [
      { rank: 1, team: "Team Beta", points: 850, completed: 5, xp: 650 },
      { rank: 2, team: "Team Gamma", points: 725, completed: 4, xp: 575 },
      { rank: 3, team: "Team Alpha", points: 450, completed: 3, xp: 450 },
      { rank: 4, team: "Team Delta", points: 375, completed: 2, xp: 375 },
      { rank: 5, team: "Team Echo", points: 250, completed: 1, xp: 250 }
    ],
    rewards: [
      { type: "xp", amount: 450, description: "Experience Points" },
      { type: "badge", name: "Explorer", description: "First scavenger hunt completed" },
      { type: "trophy", name: "Team Champion", description: "Top 3 finish" },
      { type: "prize", name: "Coffee Voucher", description: "Free coffee for the team" }
    ]
  };

  const assessments = [
    {
      id: 1,
      title: "Leadership Assessment",
      type: "Pre-built",
      questions: 25,
      duration: "30 min",
      status: "available",
      participants: 45,
      category: "Leadership",
      difficulty: "Intermediate",
      description: "Comprehensive assessment to evaluate leadership capabilities and potential",
      tags: ["Leadership", "Management", "Soft Skills"],
      lastUpdated: "2024-01-15",
      version: "2.1"
    },
    {
      id: 2,
      title: "Team Collaboration Skills",
      type: "Custom",
      questions: 20,
      duration: "25 min",
      status: "in-progress",
      participants: 28,
      category: "Team Building",
      difficulty: "Beginner",
      description: "Evaluate team collaboration and communication skills",
      tags: ["Teamwork", "Communication", "Collaboration"],
      lastUpdated: "2024-01-10",
      version: "1.0"
    },
    {
      id: 3,
      title: "Technical Skills Assessment",
      type: "Pre-built",
      questions: 35,
      duration: "45 min",
      status: "completed",
      participants: 67,
      category: "Technical",
      difficulty: "Advanced",
      description: "Advanced technical skills evaluation for developers",
      tags: ["Programming", "Technical", "Development"],
      lastUpdated: "2024-01-08",
      version: "3.2"
    },
    {
      id: 4,
      title: "Customer Service Excellence",
      type: "Custom",
      questions: 15,
      duration: "20 min",
      status: "draft",
      participants: 0,
      category: "Customer Service",
      difficulty: "Beginner",
      description: "Assessment for customer service representatives",
      tags: ["Customer Service", "Communication", "Soft Skills"],
      lastUpdated: "2024-01-12",
      version: "0.5"
    }
  ];

  // Detailed Assessment Data
  const assessmentDetailData = {
    id: 2,
    title: "Team Collaboration Skills",
    type: "Custom",
    questions: 20,
    duration: "25 min",
    status: "in-progress",
    participants: 28,
    category: "Team Building",
    difficulty: "Beginner",
    description: "Evaluate team collaboration and communication skills",
    tags: ["Teamwork", "Communication", "Collaboration"],
    lastUpdated: "2024-01-10",
    version: "1.0",
    progress: 65,
    timeSpent: "15:30",
    timeRemaining: "9:30",
    currentQuestion: 13,
    sections: [
      {
        id: 1,
        title: "Communication Skills",
        questions: 8,
        completed: 8,
        description: "Evaluate verbal and written communication abilities"
      },
      {
        id: 2,
        title: "Team Dynamics",
        questions: 6,
        completed: 3,
        description: "Assess understanding of team roles and collaboration"
      },
      {
        id: 3,
        title: "Conflict Resolution",
        questions: 6,
        completed: 2,
        description: "Evaluate conflict management and resolution skills"
      }
    ],
    questions: [
      {
        id: 1,
        section: "Communication Skills",
        question: "How do you typically handle disagreements in a team setting?",
        type: "multiple-choice",
        options: [
          "Avoid the conflict entirely",
          "Address it immediately and directly",
          "Wait for others to resolve it",
          "Seek mediation from a supervisor"
        ],
        correctAnswer: 1,
        userAnswer: 1,
        explanation: "Addressing conflicts directly and professionally is the most effective approach."
      },
      {
        id: 2,
        section: "Communication Skills",
        question: "When presenting ideas to your team, you prefer to:",
        type: "multiple-choice",
        options: [
          "Present only the final solution",
          "Share the process and reasoning",
          "Let others figure it out themselves",
          "Avoid presenting altogether"
        ],
        correctAnswer: 1,
        userAnswer: 1,
        explanation: "Sharing the process helps team members understand and contribute to the solution."
      },
      {
        id: 13,
        section: "Team Dynamics",
        question: "Describe a situation where you had to work with a difficult team member. How did you handle it?",
        type: "text",
        userAnswer: "",
        wordLimit: 150,
        explanation: "This question evaluates your conflict resolution and interpersonal skills."
      }
    ],
    results: {
      overallScore: 78,
      maxScore: 100,
      percentage: 78,
      timeSpent: "15:30",
      averageTime: "1:10 per question",
      sections: [
        { name: "Communication Skills", score: 85, maxScore: 100 },
        { name: "Team Dynamics", score: 70, maxScore: 100 },
        { name: "Conflict Resolution", score: 65, maxScore: 100 }
      ],
      strengths: [
        "Clear and direct communication",
        "Active listening skills",
        "Professional approach to conflicts"
      ],
      areasForImprovement: [
        "Conflict resolution strategies",
        "Team role understanding",
        "Cross-cultural communication"
      ],
      recommendations: [
        "Attend conflict resolution workshop",
        "Practice active listening exercises",
        "Join cross-functional team projects"
      ]
    },
    analytics: {
      totalParticipants: 28,
      averageScore: 72,
      completionRate: 89,
      timeDistribution: [
        { range: "0-10 min", count: 5 },
        { range: "10-20 min", count: 12 },
        { range: "20-25 min", count: 8 },
        { range: "25+ min", count: 3 }
      ],
      scoreDistribution: [
        { range: "0-50", count: 3 },
        { range: "51-70", count: 8 },
        { range: "71-85", count: 12 },
        { range: "86-100", count: 5 }
      ]
    }
  };

  // Assessment Creation Data
  const assessmentCreationData = {
    templates: [
      {
        id: 1,
        name: "Leadership Assessment",
        category: "Leadership",
        questions: 25,
        duration: "30 min",
        description: "Comprehensive leadership evaluation template",
        tags: ["Leadership", "Management"]
      },
      {
        id: 2,
        name: "Technical Skills",
        category: "Technical",
        questions: 35,
        duration: "45 min",
        description: "Technical skills assessment template",
        tags: ["Programming", "Technical"]
      },
      {
        id: 3,
        name: "Customer Service",
        category: "Customer Service",
        questions: 15,
        duration: "20 min",
        description: "Customer service skills evaluation",
        tags: ["Customer Service", "Communication"]
      }
    ],
    questionTypes: [
      { type: "multiple-choice", name: "Multiple Choice", icon: "○" },
      { type: "text", name: "Text Response", icon: "📝" },
      { type: "rating", name: "Rating Scale", icon: "⭐" },
      { type: "true-false", name: "True/False", icon: "✓✗" },
      { type: "matching", name: "Matching", icon: "🔗" },
      { type: "file-upload", name: "File Upload", icon: "📎" }
    ]
  };

  const tasks = [
    {
      id: 1,
      title: "Complete UX Design Course",
      dueDate: "2024-01-20",
      priority: "high",
      status: "pending",
      category: "LMS"
    },
    {
      id: 2,
      title: "Submit Team Building Feedback",
      dueDate: "2024-01-18",
      priority: "medium",
      status: "completed",
      category: "Team Building"
    },
    {
      id: 3,
      title: "Review Assessment Results",
      dueDate: "2024-01-22",
      priority: "low",
      status: "pending",
      category: "Assessment"
    }
  ];

  const frameworkResources = [
    {
      id: 1,
      title: "Company Policies Handbook",
      type: "PDF",
      size: "2.4 MB",
      downloads: 156,
      category: "Policies"
    },
    {
      id: 2,
      title: "Training Methodology Guide",
      type: "PDF",
      size: "1.8 MB",
      downloads: 89,
      category: "Training"
    },
    {
      id: 3,
      title: "Quick Reference Cards",
      type: "ZIP",
      size: "5.2 MB",
      downloads: 234,
      category: "Reference"
    }
  ];

  const renderDashboard = () => (
    <div className="flex-1 overflow-y-auto pb-20">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-lg">R</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Hello Richard!</h1>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </button>
            <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
              <MessageCircle className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 py-4 bg-white">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search course or mentors"
            className="w-full pl-10 pr-12 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Learning Partner Graphic Box */}
      <div className="px-4 py-6">
        <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl p-5 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Learning Partner</h2>
                <p className="text-white/80 text-xs">Your journey to success starts here</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-white/90 text-xs">Active Learners</div>
              <div className="text-lg font-bold text-white">2,847</div>
            </div>
          </div>
          
          {/* Progress and Rank Section */}
          <div className="flex items-center justify-between">
            {/* Progress */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white/90 text-xs">Your Progress</div>
                <div className="text-sm font-bold text-white">78% Complete</div>
                <div className="w-20 bg-white/30 rounded-full h-1 mt-1">
                  <div className="bg-white h-1 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
            
            {/* Rank */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center">
                <Trophy className="w-5 h-5 text-yellow-300" />
              </div>
              <div className="text-right">
                <div className="text-white/90 text-xs">Your Rank</div>
                <div className="text-sm font-bold text-white">#12 of 2,847</div>
                <div className="text-yellow-300 text-xs font-medium">Top 1%</div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-6">Quick Access</h2>
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
          <div className="grid grid-cols-3 gap-3">
            {mainMenuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className="group relative p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 text-left"
                >
                  {/* Icon Container */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 shadow-md group-hover:scale-105 transition-transform duration-300 ${
                    item.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-500' :
                    item.color === 'green' ? 'bg-gradient-to-br from-green-400 to-green-500' :
                    item.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-purple-500' :
                    item.color === 'orange' ? 'bg-gradient-to-br from-orange-400 to-orange-500' :
                    item.color === 'red' ? 'bg-gradient-to-br from-red-400 to-red-500' :
                    item.color === 'indigo' ? 'bg-gradient-to-br from-indigo-400 to-indigo-500' :
                    'bg-gradient-to-br from-gray-400 to-gray-500'
                  }`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Text Content */}
                  <div>
                    <h3 className="font-medium text-gray-900 text-xs group-hover:text-gray-800 transition-colors duration-300">{item.label}</h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-4 py-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <button 
            onClick={() => setCurrentView('scavenger-hunt')}
            className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-gray-900 text-sm">Completed Team Building Activity</p>
                <p className="text-xs text-gray-600">2 hours ago</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </button>
          <button 
            onClick={() => setCurrentView('course-detail')}
            className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-gray-900 text-sm">Started UX Design Course</p>
                <p className="text-xs text-gray-600">1 day ago</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  const renderLMS = () => (
    <div className="flex-1 overflow-y-auto pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back
            </button>
            <h1 className="text-lg font-bold text-gray-900">Learning Management</h1>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-4 py-4 bg-white border-b border-gray-100">
        <div className="flex space-x-3 overflow-x-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span className="text-sm font-medium">{category.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Course List */}
      <div className="px-4 py-6 space-y-4">
        {popularCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="relative">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <button className="absolute top-2 right-2 p-1 bg-white/80 rounded-full hover:bg-white transition-colors">
                <Heart className={`w-4 h-4 ${course.isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
              </button>
              {course.progress > 0 && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>{course.progress}% Complete</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-1 mt-1">
                    <div 
                      className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 text-base mb-1">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600">{course.rating} ({course.reviews})</span>
                </div>
                
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Video className="w-4 h-4" />
                  <span>{course.lessons} lessons</span>
                </div>
                <button 
                  onClick={() => (course.id === 1 || course.id === 2) ? setCurrentView('course-detail') : null}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  {(course.id === 1 || course.id === 2) ? 'Start Learning' : 'Start Learning'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTeamBuilding = () => (
    <div className="flex-1 overflow-y-auto pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back
            </button>
            <h1 className="text-lg font-bold text-gray-900">Team Building</h1>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="px-4 py-6 space-y-4">
        {teamActivities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-${activity.color}-100 rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 text-${activity.color}-600`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-base">{activity.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{activity.participants} participants</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      activity.status === 'active' ? 'bg-green-100 text-green-600' :
                      activity.status === 'upcoming' ? 'bg-blue-100 text-blue-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex space-x-2">
                <button 
                  onClick={() => {
                    if (activity.id === 1) setCurrentView('scavenger-hunt');
                    if (activity.id === 2) setCurrentView('quiz-detail');
                    if (activity.id === 3) setCurrentView('kahoot-challenge');
                  }}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  {activity.id === 1 ? 'Join Hunt' : activity.id === 2 ? 'Join Quiz' : activity.id === 3 ? 'Join Challenge' : 'Join Now'}
                </button>
                <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Leaderboard */}
      <div className="px-4 py-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Leaderboard</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Trophy className="w-4 h-4 text-yellow-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900 text-sm">Team Alpha</p>
                <p className="text-xs text-gray-600">1,250 points</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">2</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900 text-sm">Team Beta</p>
                <p className="text-xs text-gray-600">1,180 points</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-orange-600">3</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900 text-sm">Team Gamma</p>
                <p className="text-xs text-gray-600">1,120 points</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAssessmentDetail = () => (
    <div className="flex-1 overflow-y-auto pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setCurrentView('assessment')}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back
            </button>
            <h1 className="text-lg font-bold text-gray-900">Assessment</h1>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">Time Left</div>
            <div className="text-sm font-bold text-orange-600">{assessmentDetailData.timeRemaining}</div>
          </div>
        </div>
      </div>

      {/* Assessment Overview */}
      <div className="px-4 py-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">{assessmentDetailData.title}</h2>
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
              {assessmentDetailData.status}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-4">{assessmentDetailData.description}</p>
          
          {/* Assessment Info */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">{assessmentDetailData.currentQuestion}/{assessmentDetailData.questions?.length || 0}</div>
              <div className="text-xs text-gray-500">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">{assessmentDetailData.progress}%</div>
              <div className="text-xs text-gray-500">Progress</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${assessmentDetailData.progress}%` }}
            ></div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {assessmentDetailData.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Sections Progress */}
      <div className="px-4 py-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Sections</h3>
        <div className="space-y-3">
          {assessmentDetailData.sections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{section.title}</h4>
                  <p className="text-sm text-gray-600">{section.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-blue-600">{section.completed}/{section.questions}</div>
                  <div className="text-xs text-gray-500">completed</div>
                </div>
              </div>
              
              {/* Section Progress */}
              <div className="w-full bg-gray-200 rounded-full h-1 mb-3">
                <div 
                  className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                  style={{ width: `${(section.completed / section.questions) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Question */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
          <div className="text-center mb-4">
            <div className="text-sm text-gray-500 mb-2">Question {assessmentDetailData.currentQuestion} of {assessmentDetailData.questions?.length || 0}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {assessmentDetailData.questions && assessmentDetailData.questions[assessmentDetailData.currentQuestion - 1] 
                ? assessmentDetailData.questions[assessmentDetailData.currentQuestion - 1].question 
                : 'Question not available'}
            </h3>
          </div>
          
          {/* Answer Options */}
          {assessmentDetailData.questions && assessmentDetailData.questions[assessmentDetailData.currentQuestion - 1] && assessmentDetailData.questions[assessmentDetailData.currentQuestion - 1].type === 'multiple-choice' ? (
            <div className="space-y-3">
              {assessmentDetailData.questions[assessmentDetailData.currentQuestion - 1].options?.map((option, index) => (
                <button
                  key={index}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                    assessmentDetailData.questions[assessmentDetailData.currentQuestion - 1]?.userAnswer === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                      {assessmentDetailData.questions[assessmentDetailData.currentQuestion - 1]?.userAnswer === index && (
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                    <span className="font-medium text-gray-900">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              <textarea
                placeholder="Type your answer here..."
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
                rows={4}
                value={assessmentDetailData.questions[assessmentDetailData.currentQuestion - 1]?.userAnswer || ''}
              />
              <div className="text-xs text-gray-500 text-right">
                {assessmentDetailData.questions[assessmentDetailData.currentQuestion - 1]?.wordLimit || 100} words maximum
              </div>
            </div>
          )}
          
          {/* Navigation Buttons */}
          <div className="flex space-x-3 mt-6">
            <button className="flex-1 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
              Previous
            </button>
            <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              {assessmentDetailData.currentQuestion === (assessmentDetailData.questions?.length || 0) ? 'Submit Assessment' : 'Next Question'}
            </button>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="px-4 py-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Results Summary</h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{assessmentDetailData.results.overallScore}</div>
              <div className="text-xs text-gray-500">Overall Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{assessmentDetailData.results.percentage}%</div>
              <div className="text-xs text-gray-500">Accuracy</div>
            </div>
          </div>
          
          {/* Section Scores */}
          <div className="space-y-3 mb-4">
            {assessmentDetailData.results.sections.map((section, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{section.name}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(section.score / section.maxScore) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{section.score}/{section.maxScore}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strengths & Areas for Improvement */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-1 gap-4">
          {/* Strengths */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h4 className="font-semibold text-gray-900 mb-3">✅ Strengths</h4>
            <div className="space-y-2">
              {assessmentDetailData.results.strengths.map((strength, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Areas for Improvement */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h4 className="font-semibold text-gray-900 mb-3">📈 Areas for Improvement</h4>
            <div className="space-y-2">
              {assessmentDetailData.results.areasForImprovement.map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h4 className="font-semibold text-gray-900 mb-3">💡 Recommendations</h4>
            <div className="space-y-2">
              {assessmentDetailData.results.recommendations.map((rec, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">{rec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Analytics */}
      <div className="px-4 py-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Analytics</h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">{assessmentDetailData.analytics.totalParticipants}</div>
              <div className="text-xs text-gray-500">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">{assessmentDetailData.analytics.averageScore}</div>
              <div className="text-xs text-gray-500">Avg Score</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">{assessmentDetailData.analytics.completionRate}%</div>
              <div className="text-xs text-gray-500">Completion</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAssessmentCreation = () => (
    <div className="flex-1 overflow-y-auto pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setCurrentView('assessment')}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back
            </button>
            <h1 className="text-lg font-bold text-gray-900">Create Assessment</h1>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
            Save Draft
          </button>
        </div>
      </div>

      {/* Assessment Setup */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Assessment Details</h3>
          
          {/* Basic Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Assessment Title</label>
              <input
                type="text"
                placeholder="Enter assessment title..."
                className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                placeholder="Describe what this assessment evaluates..."
                rows={3}
                className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
                  <option>Leadership</option>
                  <option>Technical</option>
                  <option>Team Building</option>
                  <option>Customer Service</option>
                  <option>Communication</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                <select className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time Limit (minutes)</label>
                <input
                  type="number"
                  placeholder="30"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Passing Score (%)</label>
                <input
                  type="number"
                  placeholder="70"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Templates */}
      <div className="px-4 py-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Start with Template</h3>
        <div className="grid grid-cols-1 gap-3">
          {assessmentCreationData.templates.map((template) => (
            <div key={template.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{template.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{template.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>{template.questions} questions</span>
                    <span>{template.duration}</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full">{template.category}</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Question Types */}
      <div className="px-4 py-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Question Types</h3>
        <div className="grid grid-cols-2 gap-3">
          {assessmentCreationData.questionTypes.map((type) => (
            <div key={type.type} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="text-2xl mb-2">{type.icon}</div>
                <h4 className="font-semibold text-gray-900 text-sm">{type.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Question */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Add Question</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Question</label>
              <textarea
                placeholder="Enter your question..."
                rows={3}
                className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Question Type</label>
              <select className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
                <option>Multiple Choice</option>
                <option>Text Response</option>
                <option>Rating Scale</option>
                <option>True/False</option>
                <option>Matching</option>
                <option>File Upload</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Options (for multiple choice)</label>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Option 1"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Option 2"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Option 3"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Option 4"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button className="flex-1 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                Add Another Question
              </button>
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                Save Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAssessment = () => (
    <div className="flex-1 overflow-y-auto pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back
            </button>
            <h1 className="text-lg font-bold text-gray-900">Assessment</h1>
          </div>
          <button 
            onClick={() => setCurrentView('assessment-creation')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <Plus className="w-4 h-4 mr-1" />
            Create
          </button>
        </div>
      </div>

      {/* Assessment List */}
      <div className="px-4 py-6 space-y-4">
        {assessments.map((assessment) => (
          <div key={assessment.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-base">{assessment.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{assessment.description}</p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>{assessment.type}</span>
                  <span>•</span>
                  <span>{assessment.questions} questions</span>
                  <span>•</span>
                  <span>{assessment.duration}</span>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                assessment.status === 'available' ? 'bg-green-100 text-green-600' :
                assessment.status === 'in-progress' ? 'bg-blue-100 text-blue-600' :
                assessment.status === 'completed' ? 'bg-purple-100 text-purple-600' :
                'bg-gray-100 text-gray-600'
              }`}>
                {assessment.status}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{assessment.participants} participants</span>
              <div className="flex space-x-2">
                <button 
                  onClick={() => {
                    if (assessment.id === 2) setCurrentView('assessment-detail');
                    else if (assessment.status === 'draft') setCurrentView('assessment-creation');
                    else if (assessment.status === 'available') setCurrentView('assessment-detail');
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  {assessment.status === 'available' ? 'Start Assessment' : 
                   assessment.status === 'in-progress' ? 'Continue' : 
                   assessment.status === 'completed' ? 'View Results' :
                   'Edit Draft'}
                </button>
                <button className="px-3 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  ⋯
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTaskList = () => (
    <div className="flex-1 overflow-y-auto pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back
            </button>
            <h1 className="text-lg font-bold text-gray-900">Task List</h1>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
            <Plus className="w-4 h-4 mr-1" />
            Add Task
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="px-4 py-6 space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-start space-x-3">
              <input 
                type="checkbox" 
                checked={task.status === 'completed'}
                className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`font-medium text-gray-900 text-sm ${task.status === 'completed' ? 'line-through text-gray-500' : ''}`}>
                    {task.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    task.priority === 'high' ? 'bg-red-100 text-red-600' :
                    task.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {task.priority}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>Due: {task.dueDate}</span>
                  <span>{task.category}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCourseDetail = () => (
    <div className="flex-1 overflow-y-auto pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setCurrentView('lms')}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back
            </button>
            <h1 className="text-lg font-bold text-gray-900">Course</h1>
          </div>
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Course Hero */}
      <div className="relative">
        <img 
          src={courseData.image} 
          alt={courseData.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-xl font-bold text-white mb-2">{courseData.title}</h2>
          <div className="flex items-center space-x-4 text-white/90 text-sm">
            <span>By {courseData.instructor}</span>
            <span>⭐ {courseData.rating} ({courseData.reviews})</span>
          </div>
        </div>
      </div>

      {/* Course Stats */}
      <div className="px-4 py-4 bg-white border-b border-gray-100">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-blue-600">{courseData.progress}%</div>
            <div className="text-xs text-gray-500">Progress</div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-600">{courseData.earnedXP}</div>
            <div className="text-xs text-gray-500">XP Earned</div>
          </div>
          <div>
            <div className="text-lg font-bold text-purple-600">{courseData.completedLessons}/{courseData.lessons}</div>
            <div className="text-xs text-gray-500">Lessons</div>
          </div>
          <div>
            <div className="text-lg font-bold text-orange-600">{courseData.duration}</div>
            <div className="text-xs text-gray-500">Duration</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${courseData.progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Course Description */}
      <div className="px-4 py-4 bg-white border-b border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-2">About this course</h3>
        <p className="text-sm text-gray-600">{courseData.description}</p>
      </div>

      {/* Course Modules */}
      <div className="px-4 py-4">
        <h3 className="font-semibold text-gray-900 mb-4">Course Content</h3>
        <div className="space-y-3">
          {courseData.modules.map((module) => (
            <div key={module.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{module.title}</h4>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                      <span>{module.lessonCount} lessons</span>
                      <span>{module.duration}</span>
                      <span>{module.xp} XP</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-blue-600">{module.completed}/{module.lessonCount}</div>
                    <div className="text-xs text-gray-500">completed</div>
                  </div>
                </div>
                
                {/* Module Progress */}
                <div className="w-full bg-gray-200 rounded-full h-1 mb-3">
                  <div 
                    className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                    style={{ width: `${(module.completed / module.lessonCount) * 100}%` }}
                  ></div>
                </div>
                
                {/* Lessons */}
                <div className="space-y-2">
                  {module.lessons.map((lesson) => (
                    <div key={lesson.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                        lesson.status === 'completed' ? 'bg-green-100 text-green-600' :
                        lesson.status === 'in-progress' ? 'bg-blue-100 text-blue-600' :
                        'bg-gray-100 text-gray-400'
                      }`}>
                        {lesson.status === 'completed' ? '✓' : lesson.status === 'in-progress' ? '▶' : '○'}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">{lesson.title}</div>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <span>{lesson.duration}</span>
                          {lesson.type === 'video' && <span>📹</span>}
                          {lesson.type === 'quiz' && <span>❓</span>}
                          {lesson.type === 'exercise' && <span>✏️</span>}
                          {lesson.score && <span>Score: {lesson.score}%</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="px-4 py-4">
        <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
        <div className="space-y-2">
          {courseData.resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg p-3 border border-gray-100 flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Download className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">{resource.name}</div>
                <div className="text-xs text-gray-500">{resource.type} • {resource.size}</div>
              </div>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition-colors">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div className="px-4 py-4">
        <h3 className="font-semibold text-gray-900 mb-4">Certificates</h3>
        <div className="grid grid-cols-2 gap-3">
          {courseData.certificates.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg p-3 border border-gray-100">
              <div className="flex items-center space-x-2 mb-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  cert.earned ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                }`}>
                  {cert.earned ? '✓' : '○'}
                </div>
                <span className="text-sm font-medium text-gray-900">{cert.name}</span>
              </div>
              {cert.earned ? (
                <div className="text-xs text-green-600">Earned {cert.date}</div>
              ) : (
                <div className="text-xs text-gray-500">{cert.progress}% complete</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderQuizDetail = () => (
    <div className="flex-1 overflow-y-auto pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setCurrentView('assessment')}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back
            </button>
            <h1 className="text-lg font-bold text-gray-900">Quiz</h1>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">Time Left</div>
            <div className="text-sm font-bold text-orange-600">7:30</div>
          </div>
        </div>
      </div>

      {/* Quiz Overview */}
      <div className="px-4 py-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">{quizData.title}</h2>
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
              {quizData.status}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-4">{quizData.description}</p>
          
          {/* Progress Stats */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">{quizData.currentQuestion}/{quizData.totalQuestions}</div>
              <div className="text-xs text-gray-500">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">{quizData.score}/{quizData.maxScore}</div>
              <div className="text-xs text-gray-500">Score</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">{quizData.results.percentage}%</div>
              <div className="text-xs text-gray-500">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-orange-600">{quizData.timeLimit}</div>
              <div className="text-xs text-gray-500">Time Limit</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(quizData.currentQuestion / quizData.totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Current Question */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
          <div className="text-center mb-4">
            <div className="text-sm text-gray-500 mb-2">Question {quizData.currentQuestion} of {quizData.totalQuestions}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {quizData.questions && quizData.questions[quizData.currentQuestion - 1] 
                ? quizData.questions[quizData.currentQuestion - 1].question 
                : 'Question not available'}
            </h3>
          </div>
          
          {/* Answer Options */}
          {quizData.questions && quizData.questions[quizData.currentQuestion - 1] && quizData.questions[quizData.currentQuestion - 1].type === 'multiple-choice' ? (
            <div className="space-y-3">
              {quizData.questions[quizData.currentQuestion - 1].options?.map((option, index) => (
                <button
                  key={index}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                    quizData.questions[quizData.currentQuestion - 1]?.userAnswer === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                      {quizData.questions[quizData.currentQuestion - 1]?.userAnswer === index && (
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                    <span className="font-medium text-gray-900">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              <textarea
                placeholder="Type your answer here..."
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
                rows={4}
                value={quizData.questions[quizData.currentQuestion - 1]?.userAnswer || ''}
              />
            </div>
          )}
          
          {/* Navigation Buttons */}
          <div className="flex space-x-3 mt-6">
            <button className="flex-1 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
              Previous
            </button>
            <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              {quizData.currentQuestion === quizData.totalQuestions ? 'Submit Quiz' : 'Next Question'}
            </button>
          </div>
        </div>
      </div>

      {/* Question Navigation */}
      <div className="px-4 py-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Question Navigation</h3>
        <div className="grid grid-cols-5 gap-2">
          {quizData.questions && quizData.questions.map((question, index) => (
            <button
              key={index}
              className={`w-12 h-12 rounded-lg border-2 text-sm font-medium transition-colors ${
                index + 1 === quizData.currentQuestion
                  ? 'border-blue-500 bg-blue-50 text-blue-600'
                  : question.userAnswer !== null && question.userAnswer !== undefined
                  ? 'border-green-500 bg-green-50 text-green-600'
                  : 'border-gray-200 bg-gray-50 text-gray-600'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Results Summary */}
      <div className="px-4 py-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Results Summary</h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{quizData.results.correctAnswers}</div>
              <div className="text-xs text-gray-500">Correct Answers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{quizData.results.percentage}%</div>
              <div className="text-xs text-gray-500">Accuracy</div>
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Time Spent:</span>
              <span className="font-medium">{quizData.results.timeSpent}</span>
            </div>
            <div className="flex justify-between">
              <span>Average Time:</span>
              <span className="font-medium">{quizData.results.averageTime}</span>
            </div>
            <div className="flex justify-between">
              <span>Questions Answered:</span>
              <span className="font-medium">{quizData.results.totalQuestions}/{quizData.totalQuestions}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Question Review */}
      <div className="px-4 py-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Question Review</h3>
        <div className="space-y-3">
          {quizData.questions && quizData.questions.slice(0, quizData.currentQuestion - 1).map((question, index) => (
            <div key={question.id || index} className="bg-white rounded-lg p-4 border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">Question {index + 1}</h4>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    question && question.userAnswer === question.correctAnswer ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {question && question.userAnswer === question.correctAnswer ? '✓ Correct' : '✗ Wrong'}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">{question.question || 'Question not available'}</p>
              {question.type === 'multiple-choice' && question.options && (
                <div className="text-xs text-gray-500 mb-2">
                  Your answer: {question.options[question.userAnswer] || 'Not answered'} | 
                  Correct: {question.options[question.correctAnswer] || 'Unknown'}
                </div>
              )}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="text-sm font-medium text-blue-800 mb-1">💡 Explanation</div>
                <div className="text-sm text-blue-700">{question.explanation || 'No explanation available'}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderKahootChallenge = () => (
    <div className="flex-1 overflow-y-auto pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setCurrentView('team-building')}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back
            </button>
            <h1 className="text-lg font-bold text-gray-900">Kahoot Challenge</h1>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">Time Left</div>
            <div className="text-sm font-bold text-orange-600">25s</div>
          </div>
        </div>
      </div>

      {/* Challenge Overview */}
      <div className="px-4 py-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">{kahootData.title}</h2>
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">
              {kahootData.status}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-4">{kahootData.description}</p>
          
          {/* Progress Stats */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">{kahootData.currentQuestion}/{kahootData.totalQuestions}</div>
              <div className="text-xs text-gray-500">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">{kahootData.score}</div>
              <div className="text-xs text-gray-500">Score</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">#{kahootData.rank}</div>
              <div className="text-xs text-gray-500">Rank</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-orange-600">{kahootData.totalPlayers}</div>
              <div className="text-xs text-gray-500">Players</div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Question */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
          <div className="text-center mb-4">
            <div className="text-sm text-gray-500 mb-2">Question {kahootData.currentQuestion} of {kahootData.totalQuestions}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {kahootData.questions && kahootData.questions[kahootData.currentQuestion - 1] 
                ? kahootData.questions[kahootData.currentQuestion - 1].question 
                : 'Question not available'}
            </h3>
            
            {/* Timer */}
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
              <div className="text-xl font-bold text-orange-600">25</div>
            </div>
          </div>
          
          {/* Answer Options */}
          <div className="space-y-3">
            {kahootData.questions && kahootData.questions[kahootData.currentQuestion - 1] && kahootData.questions[kahootData.currentQuestion - 1].options?.map((option, index) => (
              <button
                key={index}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                  kahootData.questions[kahootData.currentQuestion - 1]?.userAnswer === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    index === 0 ? 'bg-red-100 text-red-600' :
                    index === 1 ? 'bg-blue-100 text-blue-600' :
                    index === 2 ? 'bg-yellow-100 text-yellow-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {index === 0 ? '🔴' : index === 1 ? '🔵' : index === 2 ? '🟡' : '🟢'}
                  </div>
                  <span className="font-medium text-gray-900">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Live Leaderboard */}
      <div className="px-4 py-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Live Leaderboard</h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="space-y-3">
            {kahootData.leaderboard.map((player) => (
              <div key={player.rank} className={`flex items-center space-x-3 p-3 rounded-lg ${
                player.player === 'You' ? 'bg-blue-50 border border-blue-200' : ''
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  player.rank === 1 ? 'bg-yellow-100 text-yellow-600' :
                  player.rank === 2 ? 'bg-gray-100 text-gray-600' :
                  player.rank === 3 ? 'bg-orange-100 text-orange-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {player.rank === 1 ? '🥇' : player.rank === 2 ? '🥈' : player.rank === 3 ? '🥉' : player.rank}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">{player.player}</span>
                    {player.player === 'You' && (
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">You</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500">🔥 {player.streak} streak</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">{player.score}</div>
                  <div className="text-xs text-gray-500">points</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Previous Questions */}
      <div className="px-4 py-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Previous Questions</h3>
        <div className="space-y-3">
          {kahootData.questions && kahootData.questions.slice(0, kahootData.currentQuestion - 1).map((question, index) => (
            <div key={question.id || index} className="bg-white rounded-lg p-4 border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">Question {index + 1}</h4>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    question && question.userAnswer === question.correctAnswer ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {question && question.userAnswer === question.correctAnswer ? '✓ Correct' : '✗ Wrong'}
                  </span>
                  <span className="text-sm font-bold text-blue-600">{question?.points || 0} pts</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">{question.question || 'Question not available'}</p>
              <div className="text-xs text-gray-500">
                Time: {question.timeSpent || 0}s • Answer: {question.options && question.options[question.correctAnswer] ? question.options[question.correctAnswer] : 'Unknown'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Map Component for Scavenger Hunt
  const MapComponent = ({ center, challenges, userLocation }) => {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Map View</h3>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-xs font-medium">
              Satellite
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
              Traffic
            </button>
          </div>
        </div>
        
        {/* Map Container */}
        <div className="relative h-64 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg overflow-hidden border border-gray-200">
          {/* Map Background with Grid */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 opacity-30"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}></div>
          
          {/* User Location */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              You are here
            </div>
          </div>
          
          {/* Challenge Markers */}
          {challenges.map((challenge, index) => {
            const isCompleted = challenge.status === 'completed';
            const isInProgress = challenge.status === 'in-progress';
            
            // Calculate position based on challenge index (simplified positioning)
            const positions = [
              { top: '20%', left: '30%' },
              { top: '40%', left: '70%' },
              { top: '60%', left: '20%' },
              { top: '80%', left: '60%' },
              { top: '30%', left: '80%' }
            ];
            
            const position = positions[index] || { top: '50%', left: '50%' };
            
            return (
              <div
                key={challenge.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={position}
              >
                <div className={`w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center ${
                  isCompleted ? 'bg-green-500' : isInProgress ? 'bg-orange-500' : 'bg-red-500'
                }`}>
                  {isCompleted ? (
                    <span className="text-white text-xs">✓</span>
                  ) : isInProgress ? (
                    <span className="text-white text-xs">●</span>
                  ) : (
                    <span className="text-white text-xs">{index + 1}</span>
                  )}
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {challenge.location.name}
                </div>
              </div>
            );
          })}
          
          {/* Distance Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <pattern id="dashed" patternUnits="userSpaceOnUse" width="10" height="10">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" strokeDasharray="5,5"/>
              </pattern>
            </defs>
            {/* Add dashed lines between user and nearest challenge */}
            <line x1="50%" y1="50%" x2="30%" y2="20%" stroke="url(#dashed)" strokeWidth="2"/>
          </svg>
        </div>
        
        {/* Map Controls */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-gray-600 text-sm">+</span>
            </button>
            <button className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-gray-600 text-sm">−</span>
            </button>
          </div>
          <div className="flex items-center space-x-2 text-xs text-gray-600">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Completed</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>In Progress</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Pending</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderScavengerHunt = () => (
    <div className="flex-1 overflow-y-auto pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setCurrentView('team-building')}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back
            </button>
            <h1 className="text-lg font-bold text-gray-900">Scavenger Hunt</h1>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-right">
              <div className="text-xs text-gray-500">Time Left</div>
              <div className="text-sm font-bold text-orange-600">{scavengerHuntData.timeRemaining}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hunt Overview */}
      <div className="px-4 py-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">{scavengerHuntData.title}</h2>
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">
              {scavengerHuntData.status}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-4">{scavengerHuntData.description}</p>
          
          {/* Progress Stats */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">{scavengerHuntData.completedChallenges}/{scavengerHuntData.totalChallenges}</div>
              <div className="text-xs text-gray-500">Challenges</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">{scavengerHuntData.earnedXP} XP</div>
              <div className="text-xs text-gray-500">Earned</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">#{scavengerHuntData.rank}</div>
              <div className="text-xs text-gray-500">Rank</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(scavengerHuntData.completedChallenges / scavengerHuntData.totalChallenges) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Map View */}
      <div className="px-4 py-4">
        <MapComponent 
          center={scavengerHuntData.mapCenter}
          challenges={scavengerHuntData.challenges}
          userLocation={scavengerHuntData.userLocation}
        />
      </div>

      {/* Challenges List */}
      <div className="px-4 py-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Challenges</h3>
        <div className="space-y-3">
          {scavengerHuntData.challenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-gray-900">{challenge.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        challenge.status === 'completed' ? 'bg-green-100 text-green-600' :
                        challenge.status === 'in-progress' ? 'bg-blue-100 text-blue-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {challenge.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{challenge.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-2">
                      <span>📍 {challenge.location.name}</span>
                      <span>🎯 {challenge.points} pts</span>
                      <span>📏 {challenge.distance}</span>
                      {challenge.type === 'photo' && <span>📷 Photo</span>}
                      {challenge.type === 'text' && <span>📝 Text</span>}
                      {challenge.type === 'quiz' && <span>❓ Quiz</span>}
                    </div>
                    <div className="text-xs text-gray-400">{challenge.location.address}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">{challenge.points}</div>
                    <div className="text-xs text-gray-500">points</div>
                  </div>
                </div>
                
                {/* Completed Challenge Photo */}
                {challenge.status === 'completed' && challenge.photo && (
                  <div className="mb-3">
                    <img 
                      src={challenge.photo} 
                      alt={challenge.title}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="text-xs text-gray-500 mt-1">Completed at {challenge.completedAt}</div>
                  </div>
                )}
                
                {/* In Progress Hint */}
                {challenge.status === 'in-progress' && challenge.hint && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                    <div className="text-sm font-medium text-blue-800 mb-1">💡 Hint</div>
                    <div className="text-sm text-blue-700">{challenge.hint}</div>
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="flex space-x-2">
                  {challenge.status === 'pending' && (
                    <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      Start Challenge
                    </button>
                  )}
                  {challenge.status === 'in-progress' && (
                    <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                      Submit Answer
                    </button>
                  )}
                  {challenge.status === 'completed' && (
                    <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">
                      ✓ Completed
                    </button>
                  )}
                  <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    Details
                  </button>
                  <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    <Navigation className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="px-4 py-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Leaderboard</h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="space-y-3">
            {scavengerHuntData.leaderboard.map((team) => (
              <div key={team.rank} className={`flex items-center space-x-3 p-3 rounded-lg ${
                team.team === scavengerHuntData.team ? 'bg-blue-50 border border-blue-200' : ''
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  team.rank === 1 ? 'bg-yellow-100 text-yellow-600' :
                  team.rank === 2 ? 'bg-gray-100 text-gray-600' :
                  team.rank === 3 ? 'bg-orange-100 text-orange-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {team.rank === 1 ? '🥇' : team.rank === 2 ? '🥈' : team.rank === 3 ? '🥉' : team.rank}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">{team.team}</span>
                    {team.team === scavengerHuntData.team && (
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">You</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500">{team.completed} challenges completed</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">{team.points} pts</div>
                  <div className="text-xs text-gray-500">{team.xp} XP</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rewards */}
      <div className="px-4 py-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Rewards</h3>
        <div className="grid grid-cols-2 gap-3">
          {scavengerHuntData.rewards.map((reward, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  reward.type === 'xp' ? 'bg-blue-100' :
                  reward.type === 'badge' ? 'bg-green-100' :
                  reward.type === 'trophy' ? 'bg-yellow-100' :
                  'bg-purple-100'
                }`}>
                  {reward.type === 'xp' && <span className="text-blue-600 font-bold">XP</span>}
                  {reward.type === 'badge' && <span className="text-green-600">🏆</span>}
                  {reward.type === 'trophy' && <span className="text-yellow-600">🏅</span>}
                  {reward.type === 'prize' && <span className="text-purple-600">🎁</span>}
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">{reward.name || reward.description}</div>
                  {reward.amount && <div className="text-xs text-gray-500">{reward.amount} points</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFramework = () => (
    <div className="flex-1 overflow-y-auto pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back
            </button>
            <h1 className="text-lg font-bold text-gray-900">Framework</h1>
          </div>
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Resources */}
      <div className="px-4 py-6 space-y-4">
        {frameworkResources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileDown className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-base">{resource.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                  <span>{resource.type}</span>
                  <span>{resource.size}</span>
                  <span>{resource.downloads} downloads</span>
                </div>
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full mt-2">
                  {resource.category}
                </span>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return renderDashboard();
      case 'lms':
        return renderLMS();
      case 'course-detail':
        return renderCourseDetail();
      case 'team-building':
        return renderTeamBuilding();
      case 'scavenger-hunt':
        return renderScavengerHunt();
      case 'kahoot-challenge':
        return renderKahootChallenge();
      case 'assessment':
        return renderAssessment();
      case 'assessment-detail':
        return renderAssessmentDetail();
      case 'assessment-creation':
        return renderAssessmentCreation();
      case 'quiz-detail':
        return renderQuizDetail();
      case 'task-list':
        return renderTaskList();
      case 'framework':
        return renderFramework();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Main Content */}
      {renderContent()}

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex items-center justify-around">
          <button
            onClick={() => setCurrentView('dashboard')}
            className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
              currentView === 'dashboard' ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs font-medium">Dashboard</span>
          </button>
          
          <button
            onClick={() => setCurrentView('lms')}
            className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
              currentView === 'lms' ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span className="text-xs font-medium">LMS</span>
          </button>

          <button
            onClick={() => setCurrentView('team-building')}
            className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
              currentView === 'team-building' ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <Target className="w-5 h-5" />
            <span className="text-xs font-medium">Team</span>
          </button>

          <button
            onClick={() => setCurrentView('task-list')}
            className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
              currentView === 'task-list' ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <ClipboardList className="w-5 h-5" />
            <span className="text-xs font-medium">Tasks</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileApp; 
import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Edit, 
  Eye, 
  Trash2, 
  Play, 
  Users, 
  Clock, 
  Star, 
  BookOpen,
  Calendar,
  Target,
  Award,
  FileText,
  Video,
  CheckCircle,
  X,
  Save,
  ArrowLeft,
  Upload,
  Settings,
  BarChart3,
  MessageCircle,
  Share2
} from 'lucide-react';

const CoursesScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isCreatingCourse, setIsCreatingCourse] = useState(false);
  const [isEditingCourse, setIsEditingCourse] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    category: 'technology',
    difficulty: 'beginner',
    duration: 0,
    price: 0,
    instructor: '',
    thumbnail: '',
    modules: [],
    requirements: [],
    objectives: [],
    tags: []
  });

  const courses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      description: 'Learn HTML, CSS, JavaScript, React, Node.js and become a full-stack developer',
      category: 'technology',
      difficulty: 'beginner',
      duration: 45,
      price: 89.99,
      instructor: 'Dr. Sarah Johnson',
      instructorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
      rating: 4.8,
      reviews: 1247,
      students: 15420,
      lastUpdated: '2024-03-15',
      status: 'published',
      modules: [
        {
          id: 1,
          title: 'HTML Fundamentals',
          duration: 120,
          lessons: 12,
          completed: true
        },
        {
          id: 2,
          title: 'CSS Styling & Layout',
          duration: 180,
          lessons: 15,
          completed: true
        },
        {
          id: 3,
          title: 'JavaScript Basics',
          duration: 240,
          lessons: 18,
          completed: false
        },
        {
          id: 4,
          title: 'React Framework',
          duration: 300,
          lessons: 22,
          completed: false
        }
      ],
      requirements: [
        'Basic computer knowledge',
        'No programming experience required',
        'A computer with internet connection'
      ],
      objectives: [
        'Build responsive websites',
        'Create interactive web applications',
        'Deploy projects to the web',
        'Understand modern web development'
      ],
      tags: ['web development', 'javascript', 'react', 'html', 'css']
    },
    {
      id: 2,
      title: 'Advanced Data Science with Python',
      description: 'Master data analysis, machine learning, and statistical modeling',
      category: 'data-science',
      difficulty: 'advanced',
      duration: 60,
      price: 129.99,
      instructor: 'Prof. Michael Chen',
      instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
      rating: 4.9,
      reviews: 892,
      students: 8234,
      lastUpdated: '2024-03-10',
      status: 'published',
      modules: [
        {
          id: 1,
          title: 'Python for Data Science',
          duration: 150,
          lessons: 14,
          completed: true
        },
        {
          id: 2,
          title: 'Statistical Analysis',
          duration: 200,
          lessons: 16,
          completed: true
        },
        {
          id: 3,
          title: 'Machine Learning',
          duration: 280,
          lessons: 20,
          completed: false
        }
      ],
      requirements: [
        'Intermediate Python knowledge',
        'Basic statistics understanding',
        'Linear algebra fundamentals'
      ],
      objectives: [
        'Analyze complex datasets',
        'Build machine learning models',
        'Create data visualizations',
        'Deploy ML solutions'
      ],
      tags: ['python', 'machine learning', 'data science', 'statistics']
    },
    {
      id: 3,
      title: 'Digital Marketing Masterclass',
      description: 'Learn SEO, social media marketing, and content strategy',
      category: 'marketing',
      difficulty: 'intermediate',
      duration: 35,
      price: 69.99,
      instructor: 'Emma Davis',
      instructorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
      rating: 4.7,
      reviews: 567,
      students: 8923,
      lastUpdated: '2024-03-12',
      status: 'draft',
      modules: [
        {
          id: 1,
          title: 'Marketing Fundamentals',
          duration: 90,
          lessons: 8,
          completed: true
        },
        {
          id: 2,
          title: 'SEO Optimization',
          duration: 120,
          lessons: 10,
          completed: false
        }
      ],
      requirements: [
        'Basic internet knowledge',
        'Social media accounts',
        'Willingness to learn'
      ],
      objectives: [
        'Create effective marketing campaigns',
        'Optimize for search engines',
        'Build social media presence',
        'Measure marketing ROI'
      ],
      tags: ['marketing', 'seo', 'social media', 'content strategy']
    }
  ];

  const categories = [
    { id: 'technology', name: 'Technology', color: 'bg-blue-100 text-blue-600' },
    { id: 'data-science', name: 'Data Science', color: 'bg-purple-100 text-purple-600' },
    { id: 'marketing', name: 'Marketing', color: 'bg-green-100 text-green-600' },
    { id: 'business', name: 'Business', color: 'bg-orange-100 text-orange-600' },
    { id: 'design', name: 'Design', color: 'bg-pink-100 text-pink-600' }
  ];

  const difficulties = [
    { id: 'beginner', name: 'Beginner', color: 'bg-green-100 text-green-600' },
    { id: 'intermediate', name: 'Intermediate', color: 'bg-yellow-100 text-yellow-600' },
    { id: 'advanced', name: 'Advanced', color: 'bg-red-100 text-red-600' }
  ];

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'bg-gray-100 text-gray-600';
  };

  const getDifficultyColor = (difficulty) => {
    const diff = difficulties.find(d => d.id === difficulty);
    return diff ? diff.color : 'bg-gray-100 text-gray-600';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-600';
      case 'draft': return 'bg-yellow-100 text-yellow-600';
      case 'archived': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateCourse = () => {
    // Here you would typically save the course to your backend
    console.log('Creating course:', newCourse);
    setIsCreatingCourse(false);
    setNewCourse({
      title: '',
      description: '',
      category: 'technology',
      difficulty: 'beginner',
      duration: 0,
      price: 0,
      instructor: '',
      thumbnail: '',
      modules: [],
      requirements: [],
      objectives: [],
      tags: []
    });
  };

  const handleSaveCourse = () => {
    // Here you would typically update the course in your backend
    console.log('Saving course:', selectedCourse);
    setIsEditingCourse(false);
  };

  const renderCourseList = () => (
    <div className="space-y-6">
      {filteredCourses.map((course) => (
        <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex">
            <img 
              src={course.thumbnail} 
              alt={course.title}
              className="w-48 h-32 object-cover"
            />
            <div className="flex-1 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                      {course.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{course.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()} students</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration} hours</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{course.rating} ({course.reviews})</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Updated {course.lastUpdated}</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => setSelectedCourse(course)}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => {
                      setSelectedCourse(course);
                      setIsEditingCourse(true);
                    }}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(course.category)}`}>
                    {categories.find(c => c.id === course.category)?.name}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                    {difficulties.find(d => d.id === course.difficulty)?.name}
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCourseDetail = () => {
    if (!selectedCourse) return null;

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSelectedCourse(null)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold text-gray-900">{selectedCourse.title}</h2>
          </div>
          <div className="flex items-center space-x-2">
            {!isEditingCourse && (
              <>
                <button 
                  onClick={() => setIsEditingCourse(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Course
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <Play className="w-4 h-4 mr-2" />
                  Preview
                </button>
              </>
            )}
            {isEditingCourse && (
              <>
                <button 
                  onClick={handleSaveCourse}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </button>
                <button 
                  onClick={() => setIsEditingCourse(false)}
                  className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {['overview', 'content', 'analytics', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                activeTab === tab
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Course Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Information</h3>
                {isEditingCourse ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={selectedCourse.title}
                        onChange={(e) => setSelectedCourse({...selectedCourse, title: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={selectedCourse.description}
                        onChange={(e) => setSelectedCourse({...selectedCourse, description: e.target.value})}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <select
                          value={selectedCourse.category}
                          onChange={(e) => setSelectedCourse({...selectedCourse, category: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
                        <select
                          value={selectedCourse.difficulty}
                          onChange={(e) => setSelectedCourse({...selectedCourse, difficulty: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {difficulties.map(diff => (
                            <option key={diff.id} value={diff.id}>{diff.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Duration (hours)</label>
                        <input
                          type="number"
                          value={selectedCourse.duration}
                          onChange={(e) => setSelectedCourse({...selectedCourse, duration: parseInt(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Price (USD)</label>
                        <input
                          type="number"
                          value={selectedCourse.price}
                          onChange={(e) => setSelectedCourse({...selectedCourse, price: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm text-gray-600">Description</span>
                      <p className="text-gray-900">{selectedCourse.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-gray-600">Category</span>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(selectedCourse.category)}`}>
                            {categories.find(c => c.id === selectedCourse.category)?.name}
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Difficulty</span>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(selectedCourse.difficulty)}`}>
                            {difficulties.find(d => d.id === selectedCourse.difficulty)?.name}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-gray-600">Duration</span>
                        <p className="text-gray-900">{selectedCourse.duration} hours</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Price</span>
                        <p className="text-gray-900">${selectedCourse.price} USD</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modules */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Course Modules</h3>
                  {isEditingCourse && (
                    <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      <Plus className="w-4 h-4 mr-1" />
                      Add Module
                    </button>
                  )}
                </div>
                <div className="space-y-3">
                  {selectedCourse.modules.map((module, index) => (
                    <div key={module.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-sm font-medium text-blue-600">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{module.title}</h4>
                          <p className="text-sm text-gray-600">{module.lessons} lessons • {module.duration} min</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {module.completed && (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                        {isEditingCourse && (
                          <button className="text-red-500 hover:text-red-700">
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Statistics</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{selectedCourse.students.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Total Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{selectedCourse.rating}</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{selectedCourse.reviews}</div>
                    <div className="text-sm text-gray-600">Reviews</div>
                  </div>
                </div>
              </div>

              {/* Instructor */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Instructor</h3>
                <div className="flex items-center space-x-3">
                  <img 
                    src={selectedCourse.instructorAvatar} 
                    alt={selectedCourse.instructor}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{selectedCourse.instructor}</h4>
                    <p className="text-sm text-gray-600">Course Instructor</p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Content Management</h3>
            <p className="text-gray-600">Content management features will be implemented here.</p>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Analytics</h3>
            <p className="text-gray-600">Analytics dashboard will be implemented here.</p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Settings</h3>
            <p className="text-gray-600">Course settings and configuration will be implemented here.</p>
          </div>
        )}
      </div>
    );
  };

  const renderCourseCreation = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsCreatingCourse(false)}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold text-gray-900">Create New Course</h2>
        </div>
        <button 
          onClick={handleCreateCourse}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Save className="w-4 h-4 mr-2" />
          Create Course
        </button>
      </div>

      {/* Course Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Course Title</label>
                <input
                  type="text"
                  value={newCourse.title}
                  onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                  placeholder="Enter course title"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={newCourse.description}
                  onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                  placeholder="Enter course description"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    value={newCourse.category}
                    onChange={(e) => setNewCourse({...newCourse, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
                  <select
                    value={newCourse.difficulty}
                    onChange={(e) => setNewCourse({...newCourse, difficulty: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {difficulties.map(diff => (
                      <option key={diff.id} value={diff.id}>{diff.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration (hours)</label>
                  <input
                    type="number"
                    value={newCourse.duration}
                    onChange={(e) => setNewCourse({...newCourse, duration: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (USD)</label>
                  <input
                    type="number"
                    value={newCourse.price}
                    onChange={(e) => setNewCourse({...newCourse, price: parseFloat(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Course Content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Content</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
                <textarea
                  placeholder="Enter course requirements (one per line)"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Learning Objectives</label>
                <textarea
                  placeholder="Enter learning objectives (one per line)"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Thumbnail Upload */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Thumbnail</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-600">Upload course thumbnail</p>
              <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
            </div>
          </div>

          {/* Course Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Settings</h3>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-700">Enable course preview</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-700">Allow student reviews</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-700">Enable certificates</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      {isCreatingCourse ? (
        renderCourseCreation()
      ) : selectedCourse ? (
        renderCourseDetail()
      ) : (
        <>
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Courses</h1>
              <p className="text-gray-600">Manage your course catalog</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
              <button 
                onClick={() => setIsCreatingCourse(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Course
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
          </div>

          {/* Course List */}
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600 mb-4">Get started by creating your first course</p>
              <button 
                onClick={() => setIsCreatingCourse(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Course
              </button>
            </div>
          ) : (
            renderCourseList()
          )}
        </>
      )}
    </div>
  );
};

export default CoursesScreen; 
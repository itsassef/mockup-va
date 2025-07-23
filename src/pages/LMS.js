import React, { useState } from 'react';
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Filter, 
  Search, 
  Grid, 
  List,
  ChevronDown,
  MoreHorizontal,
  Calendar,
  Award,
  Target,
  Zap,
  Code,
  Palette,
  BarChart3,
  Globe,
  Heart,
  Share2,
  Bookmark
} from 'lucide-react';

const LMS = ({ setCurrentView, setSelectedCourse }) => {
  const [viewMode, setViewMode] = useState('grid');
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Courses', count: 24 },
    { id: 'development', label: 'Development', count: 8 },
    { id: 'design', label: 'Design', count: 6 },
    { id: 'business', label: 'Business', count: 5 },
    { id: 'marketing', label: 'Marketing', count: 3 },
    { id: 'lifestyle', label: 'Lifestyle', count: 2 },
  ];

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Dr. Angela Yu",
      duration: "44 hours",
      students: 125000,
      rating: 4.8,
      price: 89.99,
      originalPrice: 199.99,
      progress: 75,
      lessons: 32,
      category: 'development',
      level: 'Beginner',
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
      tags: ['HTML', 'CSS', 'JavaScript', 'React'],
      description: "Learn web development from scratch with this comprehensive bootcamp covering HTML, CSS, JavaScript, and modern frameworks."
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      instructor: "Sarah Chen",
      duration: "28 hours",
      students: 45000,
      rating: 4.9,
      price: 69.99,
      originalPrice: 149.99,
      progress: 0,
      lessons: 24,
      category: 'design',
      level: 'Intermediate',
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop",
      tags: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      description: "Master the art of user interface and user experience design with industry-standard tools and methodologies."
    },
    {
      id: 3,
      title: "Digital Marketing Strategy",
      instructor: "Mike Johnson",
      duration: "18 hours",
      students: 32000,
      rating: 4.7,
      price: 49.99,
      originalPrice: 99.99,
      progress: 100,
      lessons: 16,
      category: 'marketing',
      level: 'Advanced',
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
      tags: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
      description: "Develop comprehensive digital marketing strategies that drive real business results and ROI."
    },
    {
      id: 4,
      title: "Data Science Fundamentals",
      instructor: "Dr. Emily Rodriguez",
      duration: "36 hours",
      students: 78000,
      rating: 4.8,
      price: 79.99,
      originalPrice: 179.99,
      progress: 25,
      lessons: 28,
      category: 'development',
      level: 'Intermediate',
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      tags: ['Python', 'Machine Learning', 'Statistics', 'Data Visualization'],
      description: "Learn the fundamentals of data science including Python, statistics, and machine learning algorithms."
    },
    {
      id: 5,
      title: "Business Strategy & Leadership",
      instructor: "Prof. David Kim",
      duration: "22 hours",
      students: 28000,
      rating: 4.6,
      price: 59.99,
      originalPrice: 129.99,
      progress: 0,
      lessons: 20,
      category: 'business',
      level: 'Advanced',
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop",
      tags: ['Strategy', 'Leadership', 'Management', 'Innovation'],
      description: "Develop strategic thinking and leadership skills to drive business growth and organizational success."
    },
    {
      id: 6,
      title: "Mobile App Development",
      instructor: "Alex Thompson",
      duration: "40 hours",
      students: 65000,
      rating: 4.9,
      price: 89.99,
      originalPrice: 189.99,
      progress: 50,
      lessons: 30,
      category: 'development',
      level: 'Intermediate',
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop",
      tags: ['React Native', 'Flutter', 'iOS', 'Android'],
      description: "Build cross-platform mobile applications using modern frameworks and best practices."
    }
  ];

  const getCategoryIcon = (category) => {
    const icons = {
      development: Code,
      design: Palette,
      business: BarChart3,
      marketing: Globe,
      lifestyle: Heart
    };
    return icons[category] || BookOpen;
  };

  const getLevelColor = (level) => {
    const colors = {
      Beginner: 'bg-green-100 text-green-800',
      Intermediate: 'bg-yellow-100 text-yellow-800',
      Advanced: 'bg-red-100 text-red-800'
    };
    return colors[level] || 'bg-gray-100 text-gray-800';
  };

  const filteredCourses = filter === 'all' 
    ? courses 
    : courses.filter(course => course.category === filter);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Learning Management System</h1>
          <p className="text-gray-600 mt-1">Discover and master new skills with our comprehensive course library</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            <BookOpen className="w-4 h-4" />
            <span>My Learning Path</span>
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex items-center space-x-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-indigo-100 text-indigo-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-indigo-100 text-indigo-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
            {/* Course Image */}
            <div className="relative">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <button className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-colors">
                  <Bookmark className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-colors">
                  <Share2 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              {course.progress > 0 && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress: {course.progress}%</span>
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="w-full bg-white bg-opacity-30 rounded-full h-1 mt-1">
                    <div 
                      className="bg-white h-1 rounded-full transition-all duration-300" 
                      style={{width: `${course.progress}%`}}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Course Content */}
            <div className="p-6">
              {/* Category and Level */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  {React.createElement(getCategoryIcon(course.category), { className: "w-4 h-4 text-indigo-600" })}
                  <span className="text-sm text-gray-600 capitalize">{course.category}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                  {course.level}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {course.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
                {course.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    +{course.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Instructor */}
              <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>
              </div>

              {/* Price and Action */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">${course.price}</span>
                  <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                </div>
                <button 
                  onClick={() => {
                    setSelectedCourse(course);
                    setCurrentView('course-detail');
                  }}
                  className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  <span>{course.progress === 0 ? 'Start Course' : course.progress === 100 ? 'Review' : 'Continue'}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default LMS; 
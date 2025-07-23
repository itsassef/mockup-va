import React, { useState } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Star, 
  Download, 
  Filter, 
  Search, 
  Eye, 
  Edit, 
  Send,
  Award,
  BookOpen,
  Target,
  Users,
  Calendar,
  FileText
} from 'lucide-react';

const GradingScreen = () => {
  const [selectedTab, setSelectedTab] = useState('pending');
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const gradingData = {
    pending: [
      {
        id: 1,
        type: 'quiz',
        title: 'JavaScript Fundamentals Quiz',
        student: 'Sarah Johnson',
        studentEmail: 'sarah.johnson@email.com',
        submittedAt: '2024-03-21T14:30:00Z',
        dueDate: '2024-03-22T23:59:00Z',
        questions: 20,
        answered: 18,
        timeSpent: '25:30',
        status: 'pending',
        score: null,
        maxScore: 100,
        answers: [
          { question: 1, answer: 'B', correct: 'B', points: 5 },
          { question: 2, answer: 'A', correct: 'C', points: 0 },
          { question: 3, answer: 'D', correct: 'D', points: 5 },
          { question: 4, answer: 'A', correct: 'A', points: 5 },
          { question: 5, answer: 'C', correct: 'B', points: 0 }
        ],
        essayQuestions: [
          {
            question: 'Explain the difference between let, const, and var in JavaScript.',
            answer: 'Let and const are block-scoped while var is function-scoped. Const cannot be reassigned, let can be reassigned, and var can be redeclared.',
            maxPoints: 10,
            awardedPoints: null,
            feedback: ''
          }
        ]
      },
      {
        id: 2,
        type: 'assignment',
        title: 'UI/UX Design Project',
        student: 'Mike Chen',
        studentEmail: 'mike.chen@email.com',
        submittedAt: '2024-03-21T16:45:00Z',
        dueDate: '2024-03-23T23:59:00Z',
        status: 'pending',
        score: null,
        maxScore: 100,
        files: ['design-mockup.fig', 'wireframes.pdf', 'user-research.docx'],
        rubric: [
          { criterion: 'Design Quality', maxPoints: 25, awardedPoints: null, feedback: '' },
          { criterion: 'User Experience', maxPoints: 25, awardedPoints: null, feedback: '' },
          { criterion: 'Documentation', maxPoints: 20, awardedPoints: null, feedback: '' },
          { criterion: 'Creativity', maxPoints: 15, awardedPoints: null, feedback: '' },
          { criterion: 'Technical Implementation', maxPoints: 15, awardedPoints: null, feedback: '' }
        ]
      },
      {
        id: 3,
        type: 'course',
        title: 'Digital Marketing Course',
        student: 'Emma Davis',
        studentEmail: 'emma.davis@email.com',
        submittedAt: '2024-03-21T12:15:00Z',
        dueDate: '2024-03-25T23:59:00Z',
        status: 'pending',
        score: null,
        maxScore: 100,
        modules: [
          { name: 'Marketing Fundamentals', completed: true, score: 85 },
          { name: 'Social Media Strategy', completed: true, score: 92 },
          { name: 'Content Marketing', completed: true, score: 78 },
          { name: 'Analytics & Reporting', completed: false, score: null }
        ],
        finalProject: {
          title: 'Marketing Campaign Proposal',
          description: 'Complete marketing campaign for a new product launch',
          submitted: true,
          files: ['campaign-proposal.pdf', 'budget-spreadsheet.xlsx']
        }
      }
    ],
    graded: [
      {
        id: 4,
        type: 'quiz',
        title: 'React Basics Quiz',
        student: 'Alex Rodriguez',
        studentEmail: 'alex.rodriguez@email.com',
        submittedAt: '2024-03-20T10:20:00Z',
        gradedAt: '2024-03-20T15:30:00Z',
        status: 'graded',
        score: 88,
        maxScore: 100,
        feedback: 'Excellent understanding of React fundamentals. Great work on component lifecycle!'
      },
      {
        id: 5,
        type: 'assignment',
        title: 'Database Design Project',
        student: 'Lisa Wang',
        studentEmail: 'lisa.wang@email.com',
        submittedAt: '2024-03-19T14:00:00Z',
        gradedAt: '2024-03-19T16:45:00Z',
        status: 'graded',
        score: 95,
        maxScore: 100,
        feedback: 'Outstanding database design with excellent normalization. Documentation is comprehensive.'
      }
    ]
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'quiz': return <Award className="w-5 h-5" />;
      case 'assignment': return <FileText className="w-5 h-5" />;
      case 'course': return <BookOpen className="w-5 h-5" />;
      default: return <Target className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'quiz': return 'bg-purple-100 text-purple-600';
      case 'assignment': return 'bg-blue-100 text-blue-600';
      case 'course': return 'bg-green-100 text-green-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-600';
      case 'graded': return 'bg-green-100 text-green-600';
      case 'late': return 'bg-red-100 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const filteredSubmissions = gradingData[selectedTab].filter(submission =>
    submission.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    submission.student.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderSubmissionList = () => (
    <div className="space-y-4">
      {filteredSubmissions.map((submission) => (
        <div
          key={submission.id}
          onClick={() => setSelectedSubmission(submission)}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${getTypeColor(submission.type)}`}>
                {getTypeIcon(submission.type)}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{submission.title}</h3>
                <p className="text-sm text-gray-600">{submission.student}</p>
              </div>
            </div>
            <div className="text-right">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                {submission.status}
              </span>
              <div className="text-xs text-gray-500 mt-1">
                {new Date(submission.submittedAt).toLocaleDateString()}
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{submission.timeSpent || 'N/A'}</span>
              </span>
              {submission.score !== null && (
                <span className="font-medium text-gray-900">
                  {submission.score}/{submission.maxScore}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <Eye className="w-4 h-4" />
              </button>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <Edit className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderGradingForm = () => {
    if (!selectedSubmission) return null;

    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{selectedSubmission.title}</h2>
            <p className="text-gray-600">{selectedSubmission.student}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50">
              <Download className="w-4 h-4 mr-2" />
              Download
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Send className="w-4 h-4 mr-2" />
              Submit Grade
            </button>
          </div>
        </div>

        {selectedSubmission.type === 'quiz' && (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-gray-900">{selectedSubmission.questions}</div>
                <div className="text-sm text-gray-600">Total Questions</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-gray-900">{selectedSubmission.answered}</div>
                <div className="text-sm text-gray-600">Answered</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-gray-900">{selectedSubmission.timeSpent}</div>
                <div className="text-sm text-gray-600">Time Spent</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Multiple Choice Questions</h3>
              {selectedSubmission.answers.map((answer, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Question {answer.question}</span>
                    <div className="flex items-center space-x-2">
                      {answer.answer === answer.correct ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                      <span className="text-sm font-medium">{answer.points} pts</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Student Answer: {answer.answer} | Correct: {answer.correct}
                  </div>
                </div>
              ))}
            </div>

            {selectedSubmission.essayQuestions && (
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Essay Questions</h3>
                {selectedSubmission.essayQuestions.map((essay, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium mb-2">{essay.question}</h4>
                    <div className="bg-gray-50 rounded-lg p-3 mb-3">
                      <p className="text-sm">{essay.answer}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Points</label>
                        <input
                          type="number"
                          min="0"
                          max={essay.maxPoints}
                          className="w-20 px-3 py-2 border border-gray-200 rounded-lg"
                          placeholder="0"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Feedback</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                          placeholder="Add feedback..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {selectedSubmission.type === 'assignment' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Submitted Files</h3>
              <div className="space-y-2">
                {selectedSubmission.files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">{file}</span>
                    <button className="text-blue-600 hover:text-blue-700 text-sm">Download</button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Rubric Assessment</h3>
              <div className="space-y-4">
                {selectedSubmission.rubric.map((criterion, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{criterion.criterion}</span>
                      <span className="text-sm text-gray-600">Max: {criterion.maxPoints} pts</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Points</label>
                        <input
                          type="number"
                          min="0"
                          max={criterion.maxPoints}
                          className="w-20 px-3 py-2 border border-gray-200 rounded-lg"
                          placeholder="0"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Feedback</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                          placeholder="Add feedback..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedSubmission.type === 'course' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Module Progress</h3>
              <div className="space-y-3">
                {selectedSubmission.modules.map((module, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${module.completed ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span className="font-medium">{module.name}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      {module.completed && (
                        <span className="text-sm font-medium">{module.score}%</span>
                      )}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        module.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {module.completed ? 'Completed' : 'Pending'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {selectedSubmission.finalProject && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Final Project</h3>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium mb-2">{selectedSubmission.finalProject.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{selectedSubmission.finalProject.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="font-medium text-sm mb-2">Submitted Files</h5>
                    <div className="space-y-2">
                      {selectedSubmission.finalProject.files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm">{file}</span>
                          <button className="text-blue-600 hover:text-blue-700 text-sm">Download</button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Project Score</label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        className="w-20 px-3 py-2 border border-gray-200 rounded-lg"
                        placeholder="0"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Feedback</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                        placeholder="Add project feedback..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Grading Center</h1>
          <p className="text-gray-600">Review and grade student submissions</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50">
            <Download className="w-4 h-4 mr-2" />
            Export Grades
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setSelectedTab('pending')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            selectedTab === 'pending'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Pending ({gradingData.pending.length})
        </button>
        <button
          onClick={() => setSelectedTab('graded')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            selectedTab === 'graded'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Graded ({gradingData.graded.length})
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search submissions..."
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

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Submission List */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {selectedTab === 'pending' ? 'Pending Submissions' : 'Graded Submissions'}
          </h2>
          {filteredSubmissions.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p>No {selectedTab} submissions found.</p>
            </div>
          ) : (
            renderSubmissionList()
          )}
        </div>

        {/* Grading Form */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Grading Panel</h2>
          {selectedSubmission ? (
            renderGradingForm()
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center text-gray-500">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Select a submission to start grading</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GradingScreen; 
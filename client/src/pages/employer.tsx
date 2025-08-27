import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Upload, LogOut, Eye, EyeOff, Video, Play, ArrowLeft, FileText } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface VideoUpload {
  id: string;
  fileName: string;
  fileUrl: string;
  uploadedAt: string;
  isActive: boolean;
}

function EmployerDashboard({ user }: { user: { email: string } }) {
  const { toast } = useToast();
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const [selectedPdf, setSelectedPdf] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previewVideo, setPreviewVideo] = useState<VideoUpload | null>(null);
  const [showPreviewDialog, setShowPreviewDialog] = useState(false);
  const queryClient = useQueryClient();
  
  // Fetch videos from API
  const videosQuery = useQuery({
    queryKey: ['/api/videos'],
    staleTime: 30000, // 30 seconds
  });



  // Video upload mutation
  const videoUploadMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append('video', file);
      formData.append('uploadedBy', user.email);
      
      const response = await fetch('/api/videos/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Upload failed');
      }
      
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Video Upload Successful",
        description: "Your introduction video has been uploaded and is now active!",
      });
      setSelectedVideo(null);
      // Refresh videos list
      videosQuery.refetch();
    },
    onError: () => {
      toast({
        title: "Video Upload Failed", 
        description: "Failed to upload video. Please try again.",
        variant: "destructive",
      });
    },
  });


  const handleVideoSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type (MP4, MOV, AVI, etc.)
      const allowedTypes = ['video/mp4', 'video/quicktime', 'video/avi', 'video/webm'];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please select a MP4, MOV, or AVI video file.",
          variant: "destructive",
        });
        return;
      }
      
      // Validate file size (100MB limit)
      if (file.size > 100 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Please select a video file smaller than 100MB.",
          variant: "destructive",
        });
        return;
      }
      
      setSelectedVideo(file);
    }
  };

  const handleVideoUpload = () => {
    if (selectedVideo) {
      videoUploadMutation.mutate(selectedVideo);
    }
  };

  const handlePdfSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type (PDF only)
      if (file.type !== 'application/pdf') {
        toast({
          title: "Invalid File Type",
          description: "Please select a PDF file.",
          variant: "destructive",
        });
        return;
      }
      
      // Validate file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Please select a PDF file smaller than 10MB.",
          variant: "destructive",
        });
        return;
      }
      
      setSelectedPdf(file);
    }
  };

  // PDF upload mutation
  const pdfUploadMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append('resume', file);
      formData.append('userId', 'employer');
      
      const response = await fetch('/api/resumes/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Upload failed');
      }
      
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "PDF Upload Successful",
        description: "Your resume PDF has been uploaded successfully!",
      });
      setSelectedPdf(null);
    },
    onError: () => {
      toast({
        title: "PDF Upload Failed", 
        description: "Failed to upload PDF. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handlePdfUpload = () => {
    if (selectedPdf) {
      pdfUploadMutation.mutate(selectedPdf);
    }
  };

  const setActiveVideoMutation = useMutation({
    mutationFn: async (videoId: string) => {
      return apiRequest(`/api/videos/${videoId}/activate`, 'POST');
    },
    onSuccess: () => {
      toast({
        title: "Active Video Updated",
        description: "The selected video is now active on the website.",
      });
      videosQuery.refetch();
    },
    onError: () => {
      toast({
        title: "Failed to Activate Video",
        description: "Please try again.",
        variant: "destructive",
      });
    },
  });

  // Delete video mutation
  const deleteVideoMutation = useMutation({
    mutationFn: async (videoId: string) => {
      return apiRequest(`/api/videos/${videoId}`, 'DELETE');
    },
    onSuccess: () => {
      toast({
        title: "Video Deleted",
        description: "The video has been removed successfully.",
      });
      videosQuery.refetch();
    },
    onError: () => {
      toast({
        title: "Failed to Delete Video",
        description: "Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleViewVideo = (video: VideoUpload) => {
    setPreviewVideo(video);
    setShowPreviewDialog(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f7' }}>
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            onClick={() => window.location.href = '/'}
            className="text-gray-600 hover:text-gray-900 font-medium"
            data-testid="button-back"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Homepage
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => {
              localStorage.removeItem('employerAuth');
              window.location.href = '/';
            }}
            data-testid="button-logout"
            className="text-gray-600 hover:text-gray-900 font-medium"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
          >
            Sign Out
          </Button>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2" style={{ 
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            letterSpacing: '-0.025em'
          }}>
            Media Upload
          </h1>
          <p className="text-gray-600" style={{ 
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' 
          }}>
            Upload and manage videos and resume PDFs for Tyler Bustard's portfolio
          </p>
        </div>

        {/* Video Upload Section */}
        <Card className="bg-white shadow-sm border border-gray-200 mb-8">
          <CardContent className="p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2" style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              letterSpacing: '-0.025em'
            }}>
              Upload New Video
            </h2>
            <p className="text-sm text-gray-600 mb-6" style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' 
            }}>
              Select a video file to upload (max: 100MB)
            </p>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="video-file">Video File</Label>
                <Input
                  id="video-file"
                  type="file"
                  accept="video/*"
                  onChange={handleVideoSelect}
                  disabled={videoUploadMutation.isPending}
                  className="cursor-pointer"
                  data-testid="input-video-file"
                />
                {selectedVideo && (
                  <p className="text-sm text-gray-600">
                    Selected: {selectedVideo.name} ({(selectedVideo.size / (1024 * 1024)).toFixed(2)} MB)
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Add a description for this version..."
                  disabled={videoUploadMutation.isPending}
                  rows={3}
                  data-testid="input-description"
                />
              </div>

              <Button 
                onClick={handleVideoUpload}
                disabled={!selectedVideo || videoUploadMutation.isPending}
                data-testid="button-upload-video"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl py-2.5 transition-all duration-200 hover:scale-105"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
              >
                {videoUploadMutation.isPending ? (
                  "Uploading..."
                ) : (
                  <>
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Video
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* PDF Upload Section */}
        <Card className="bg-white shadow-sm border border-gray-200 mb-8">
          <CardContent className="p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2" style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              letterSpacing: '-0.025em'
            }}>
              Upload Resume PDF
            </h2>
            <p className="text-sm text-gray-600 mb-6" style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' 
            }}>
              Upload a PDF resume for printing from the resume page (max: 10MB)
            </p>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pdf-file">Resume PDF File</Label>
                <Input
                  id="pdf-file"
                  type="file"
                  accept=".pdf"
                  onChange={handlePdfSelect}
                  disabled={pdfUploadMutation.isPending}
                  className="cursor-pointer"
                  data-testid="input-pdf-file"
                />
                {selectedPdf && (
                  <p className="text-sm text-gray-600">
                    Selected: {selectedPdf.name} ({(selectedPdf.size / (1024 * 1024)).toFixed(2)} MB)
                  </p>
                )}
              </div>

              <Button 
                onClick={handlePdfUpload}
                disabled={!selectedPdf || pdfUploadMutation.isPending}
                data-testid="button-upload-pdf"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl py-2.5 transition-all duration-200 hover:scale-105"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
              >
                {pdfUploadMutation.isPending ? (
                  "Uploading..."
                ) : (
                  <>
                    <FileText className="w-4 h-4 mr-2" />
                    Upload Resume PDF
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Uploaded Videos */}
        <Card className="bg-white shadow-sm border border-gray-200">
          <CardContent className="p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2" style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              letterSpacing: '-0.025em'
            }}>
              Uploaded Videos
            </h2>
            <p className="text-sm text-gray-600 mb-6" style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' 
            }}>
              {videosQuery.data && Array.isArray(videosQuery.data) && videosQuery.data.length === 1 
                ? '1 file uploaded' 
                : `${(videosQuery.data && Array.isArray(videosQuery.data) ? videosQuery.data.length : 0)} files uploaded`
            }
            </p>
            <div>
              {videosQuery.isLoading ? (
                <div className="space-y-3">
                  <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                </div>
              ) : videosQuery.data && Array.isArray(videosQuery.data) && videosQuery.data.length > 0 ? (
                <div className="space-y-3">
                  {videosQuery.data.map((video: VideoUpload) => (
                    <div key={video.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg">
                          <Video className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900" style={{ 
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' 
                          }}>
                            {video.fileName}
                          </p>
                          <p className="text-sm text-gray-500" style={{ 
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' 
                          }}>
                            Roblox Intro Video
                          </p>
                          <p className="text-xs text-gray-400 mt-1" style={{ 
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' 
                          }}>
                            100 MB • {new Date(video.uploadedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {video.isActive ? (
                          <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full font-medium" style={{ 
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' 
                          }}>
                            Active
                          </span>
                        ) : (
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setActiveVideoMutation.mutate(video.id)}
                            disabled={setActiveVideoMutation.isPending}
                            className="text-blue-600 hover:text-blue-700 font-medium"
                            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
                          >
                            Set Active
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleViewVideo(video)}
                          className="text-gray-400 hover:text-gray-600"
                          data-testid={`button-view-${video.id}`}
                        >
                          View
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            if (window.confirm('Are you sure you want to delete this video?')) {
                              deleteVideoMutation.mutate(video.id);
                            }
                          }}
                          disabled={deleteVideoMutation.isPending}
                          className="text-red-500 hover:text-red-600"
                          data-testid={`button-delete-${video.id}`}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Video className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600">No videos uploaded yet</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Video Preview Dialog */}
      <Dialog open={showPreviewDialog} onOpenChange={setShowPreviewDialog}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{previewVideo?.fileName}</DialogTitle>
          </DialogHeader>
          {previewVideo && (
            <div className="w-full">
              <video
                controls
                className="w-full rounded-lg"
                src={previewVideo.fileUrl}
              >
                Your browser does not support the video tag.
              </video>
              <div className="mt-4 text-sm text-gray-500">
                <p>Uploaded: {new Date(previewVideo.uploadedAt).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric', 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}</p>
                {previewVideo.isActive && (
                  <span className="inline-block mt-2 px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full font-medium">
                    Currently Active
                  </span>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function EmployerLogin({ onLogin }: { onLogin: (user: { email: string }) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Check credentials
    if (email === 'tylerbustard' && password === 'Mvn7c7bb!!') {
      localStorage.setItem('employerAuth', JSON.stringify({ email }));
      onLogin({ email });
      toast({
        title: "Login Successful",
        description: "Welcome to the employer dashboard!",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#f5f5f7' }}>
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-xl border border-white/40 shadow-xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-semibold text-gray-900" style={{ 
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            letterSpacing: '-0.025em'
          }}>
            Video Upload Access
          </CardTitle>
          <CardDescription className="text-gray-600" style={{ 
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' 
          }}>
            Sign in to upload and manage video files
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">Username</Label>
              <Input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your username"
                required
                data-testid="input-email"
                className="bg-white border-gray-200 focus:border-blue-500"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  data-testid="input-password"
                  className="bg-white border-gray-200 focus:border-blue-500 pr-10"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  data-testid="button-toggle-password"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl py-2.5 transition-all duration-200 hover:scale-105"
              disabled={isLoading}
              data-testid="button-login"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function EmployerPage() {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing auth on component mount
    const authData = localStorage.getItem('employerAuth');
    if (authData) {
      try {
        const userData = JSON.parse(authData);
        setUser(userData);
      } catch (error) {
        localStorage.removeItem('employerAuth');
      }
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (userData: { email: string }) => {
    setUser(userData);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#f5f5f7' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900 dark:border-slate-50 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  return user ? <EmployerDashboard user={user} /> : <EmployerLogin onLogin={handleLogin} />;
}
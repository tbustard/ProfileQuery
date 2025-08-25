import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, LogOut, Eye, EyeOff, Video, Play } from "lucide-react";
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
  const [isLoading, setIsLoading] = useState(false);
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
      const allowedTypes = ['video/mp4', 'video/mov', 'video/avi', 'video/quicktime'];
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


  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f7' }}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">
              Employer Dashboard
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Welcome back, {user.email}
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => {
              localStorage.removeItem('employerAuth');
              window.location.href = '/';
            }}
            data-testid="button-logout"
            className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border-slate-200 dark:border-slate-700"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {/* Video Upload Section */}
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="w-5 h-5" />
                Upload Introduction Video
              </CardTitle>
              <CardDescription>
                Upload a video file for the introduction section
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="video-file">Select Video File</Label>
                <Input
                  id="video-file"
                  type="file"
                  accept="video/*"
                  onChange={handleVideoSelect}
                  data-testid="input-video-file"
                  className="bg-white dark:bg-slate-900"
                />
                <p className="text-sm text-slate-500">
                  Accepted formats: MP4, MOV, AVI, WebM (Max: 100MB)
                </p>
              </div>
              
              {selectedVideo && (
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <p className="text-sm font-medium">Selected: {selectedVideo.name}</p>
                  <p className="text-sm text-slate-500">
                    {(selectedVideo.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              )}

              <Button 
                onClick={handleVideoUpload}
                disabled={!selectedVideo || videoUploadMutation.isPending}
                data-testid="button-upload-video"
                className="w-full"
              >
                {videoUploadMutation.isPending ? (
                  "Uploading..."
                ) : (
                  <>
                    <Video className="w-4 h-4 mr-2" />
                    Upload Video
                  </>
                )}
              </Button>
            </CardContent>
          </Card>


        </div>

        <div className="grid md:grid-cols-1 gap-8 mt-8">

          {/* Uploaded Videos */}
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="w-5 h-5" />
                Uploaded Videos
              </CardTitle>
              <CardDescription>
                Manage uploaded introduction videos for the website
              </CardDescription>
            </CardHeader>
            <CardContent>
              {videosQuery.isLoading ? (
                <div className="space-y-3">
                  <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                </div>
              ) : videosQuery.data && Array.isArray(videosQuery.data) && videosQuery.data.length > 0 ? (
                <div className="space-y-3">
                  {videosQuery.data.map((video: VideoUpload) => (
                    <div key={video.id} className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">{video.fileName}</p>
                          <p className="text-xs text-slate-500">
                            Uploaded {new Date(video.uploadedAt).toLocaleDateString()}
                          </p>
                          {video.isActive && (
                            <span className="inline-block mt-1 px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                              Active
                            </span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {!video.isActive && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setActiveVideoMutation.mutate(video.id)}
                              disabled={setActiveVideoMutation.isPending}
                            >
                              Set Active
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500 text-center py-8">
                  No videos uploaded yet. Upload one using the form above!
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
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
    if (email === 'tbustard@unb.ca' && password === 'Tylmvn7c7bb!!') {
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
      <Card className="w-full max-w-md bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border-slate-200 dark:border-slate-700">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Employer Access</CardTitle>
          <CardDescription>
            Sign in to upload and manage resume files for Tyler Bustard's portfolio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                data-testid="input-email"
                className="bg-white dark:bg-slate-900"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  data-testid="input-password"
                  className="bg-white dark:bg-slate-900 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  data-testid="button-toggle-password"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            
            <Button 
              type="submit"
              className="w-full"
              disabled={isLoading}
              data-testid="button-login"
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
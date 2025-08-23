import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, LogOut, FileText, Download } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { isUnauthorizedError } from "@/lib/authUtils";

interface ResumeUpload {
  id: string;
  fileName: string;
  fileUrl: string;
  uploadedAt: string;
}

function EmployerDashboard() {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Fetch user's resume uploads
  const { data: uploads = [], isLoading } = useQuery<ResumeUpload[]>({
    queryKey: ["/api/resume-uploads"],
    retry: false,
  });

  // Upload mutation
  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      // In a real app, you'd upload to a cloud storage service
      // For demo purposes, we'll simulate an upload
      const formData = new FormData();
      formData.append('file', file);
      
      // Simulate upload to storage service
      const fakeUrl = `https://storage.example.com/resumes/${Date.now()}-${file.name}`;
      
      await apiRequest("/api/resume-upload", "POST", {
        fileName: file.name,
        fileUrl: fakeUrl,
      });
    },
    onSuccess: () => {
      toast({
        title: "Upload Successful",
        description: "Your resume has been uploaded successfully!",
      });
      setSelectedFile(null);
      queryClient.invalidateQueries({ queryKey: ["/api/resume-uploads"] });
    },
    onError: (error) => {
      if (isUnauthorizedError(error)) {
        toast({
          title: "Session Expired",
          description: "Please log in again to continue.",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Upload Failed",
        description: "Failed to upload resume. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type (PDF, DOC, DOCX)
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please select a PDF, DOC, or DOCX file.",
          variant: "destructive",
        });
        return;
      }
      
      // Validate file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Please select a file smaller than 10MB.",
          variant: "destructive",
        });
        return;
      }
      
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      uploadMutation.mutate(selectedFile);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">
              Employer Dashboard
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Welcome back, {(user as any)?.firstName || (user as any)?.email || 'Employer'}
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => window.location.href = '/api/logout'}
            data-testid="button-logout"
            className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border-slate-200 dark:border-slate-700"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Upload Resume
              </CardTitle>
              <CardDescription>
                Upload a new resume for Tyler Bustard's portfolio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="resume-file">Select Resume File</Label>
                <Input
                  id="resume-file"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileSelect}
                  data-testid="input-resume-file"
                  className="bg-white dark:bg-slate-900"
                />
                <p className="text-sm text-slate-500">
                  Accepted formats: PDF, DOC, DOCX (Max: 10MB)
                </p>
              </div>
              
              {selectedFile && (
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <p className="text-sm font-medium">Selected: {selectedFile.name}</p>
                  <p className="text-sm text-slate-500">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              )}

              <Button 
                onClick={handleUpload}
                disabled={!selectedFile || uploadMutation.isPending}
                data-testid="button-upload-resume"
                className="w-full"
              >
                {uploadMutation.isPending ? (
                  "Uploading..."
                ) : (
                  <>
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Resume
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Recent Uploads */}
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Recent Uploads
              </CardTitle>
              <CardDescription>
                Previously uploaded resume files
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-12 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                  ))}
                </div>
              ) : uploads.length === 0 ? (
                <p className="text-slate-500 text-center py-8">
                  No uploads yet. Upload your first resume above!
                </p>
              ) : (
                <div className="space-y-3">
                  {uploads.map((upload) => (
                    <div 
                      key={upload.id}
                      className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-lg"
                      data-testid={`upload-item-${upload.id}`}
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-slate-500" />
                        <div>
                          <p className="font-medium text-sm">{upload.fileName}</p>
                          <p className="text-xs text-slate-500">
                            {new Date(upload.uploadedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => window.open(upload.fileUrl, '_blank')}
                        data-testid={`button-view-${upload.id}`}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function EmployerLogin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border-slate-200 dark:border-slate-700">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Employer Access</CardTitle>
          <CardDescription>
            Sign in to upload and manage resume files for Tyler Bustard's portfolio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
              <FileText className="w-12 h-12 mx-auto mb-4 text-slate-400" />
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Access the employer dashboard to upload and manage resume files
              </p>
            </div>
            <Button 
              onClick={() => window.location.href = '/api/login'}
              className="w-full"
              data-testid="button-login"
            >
              Sign In with Replit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function EmployerPage() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // Only show toast if user tried to access protected content
      if (window.location.pathname === '/employer' && window.location.search.includes('redirect')) {
        toast({
          title: "Authentication Required",
          description: "Please sign in to access the employer dashboard.",
          variant: "default",
        });
      }
    }
  }, [isAuthenticated, isLoading, toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900 dark:border-slate-50 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  return isAuthenticated ? <EmployerDashboard /> : <EmployerLogin />;
}
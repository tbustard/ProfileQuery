import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText, Trash2, ArrowLeft, LogOut } from "lucide-react";
import Navigation from "@/components/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ResumeUpload } from "@shared/schema";

export default function UploadResumeDashboard() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check for custom authentication
  useEffect(() => {
    const authData = localStorage.getItem('resumeUploadAuth');
    if (authData) {
      try {
        const userData = JSON.parse(authData);
        if (userData.username === 'tylerbustard') {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('resumeUploadAuth');
          window.location.href = '/resume-upload-signin';
        }
      } catch (error) {
        localStorage.removeItem('resumeUploadAuth');
        window.location.href = '/resume-upload-signin';
      }
    } else {
      window.location.href = '/resume-upload-signin';
    }
    setIsLoading(false);
  }, []);

  // Fetch existing uploads (mock data for now)
  const { data: uploads = [], isLoading: uploadsLoading } = useQuery<ResumeUpload[]>({
    queryKey: ["/api/resume-uploads"],
    enabled: isAuthenticated,
    queryFn: async () => {
      // Mock data since we're not using the actual API
      const stored = localStorage.getItem('resumeUploads');
      return stored ? JSON.parse(stored) : [];
    }
  });

  // Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        toast({
          title: "Invalid file type",
          description: "Please select a PDF file",
          variant: "destructive",
        });
        return;
      }
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        toast({
          title: "File too large",
          description: "Please select a file smaller than 10MB",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  // Upload mutation (mock implementation)
  const uploadMutation = useMutation({
    mutationFn: async () => {
      if (!selectedFile) return;
      
      setUploading(true);
      
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create mock upload record
      const newUpload: ResumeUpload = {
        id: Date.now().toString(),
        fileName: selectedFile.name,
        fileSize: selectedFile.size,
        fileUrl: URL.createObjectURL(selectedFile),
        description: description || undefined,
        uploadedAt: new Date(),
        uploadedBy: 'tylerbustard'
      };
      
      // Store in localStorage
      const stored = localStorage.getItem('resumeUploads');
      const uploads = stored ? JSON.parse(stored) : [];
      uploads.unshift(newUpload);
      localStorage.setItem('resumeUploads', JSON.stringify(uploads));
      
      return newUpload;
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Resume uploaded successfully",
      });
      setSelectedFile(null);
      setDescription("");
      queryClient.invalidateQueries({ queryKey: ["/api/resume-uploads"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
    },
    onSettled: () => {
      setUploading(false);
    },
  });

  // Delete mutation (mock implementation)
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const stored = localStorage.getItem('resumeUploads');
      const uploads = stored ? JSON.parse(stored) : [];
      const filtered = uploads.filter((u: ResumeUpload) => u.id !== id);
      localStorage.setItem('resumeUploads', JSON.stringify(filtered));
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Resume deleted successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/resume-uploads"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete resume",
        variant: "destructive",
      });
    },
  });

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#f5f5f7" }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f5f7" }}>
      <Navigation />
      
      <div className="px-4 sm:px-6 lg:px-8 pb-16 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <Button
                onClick={() => window.location.href = "/resume"}
                variant="ghost"
                className="mb-4 rounded-xl px-3 py-2 flex items-center gap-2 hover:bg-gray-100"
                data-testid="button-back-resume"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Resume
              </Button>
              <h1 className="text-4xl font-semibold text-gray-900 mb-2" style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                letterSpacing: '-0.025em'
              }}>
                Resume Upload
              </h1>
              <p className="text-lg text-gray-600" style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' 
              }}>
                Upload and manage PDF versions of your resume
              </p>
            </div>
            <Button
              onClick={() => {
                localStorage.removeItem('resumeUploadAuth');
                window.location.href = '/resume';
              }}
              variant="ghost"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl px-4 py-2 transition-all duration-200"
              data-testid="button-logout"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>

          {/* Upload Form */}
          <Card className="bg-white/95 backdrop-blur-xl border border-white/40 shadow-xl mb-8">
            <CardHeader>
              <CardTitle>Upload New Resume</CardTitle>
              <CardDescription>
                Select a PDF file to upload (max 10MB)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="file">Resume File</Label>
                <Input
                  id="file"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileSelect}
                  disabled={uploading}
                  className="cursor-pointer"
                  data-testid="input-file"
                />
                {selectedFile && (
                  <p className="text-sm text-gray-600">
                    Selected: {selectedFile.name} ({formatFileSize(selectedFile.size)})
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Add a description for this version..."
                  disabled={uploading}
                  rows={3}
                  data-testid="input-description"
                />
              </div>

              <Button
                onClick={() => uploadMutation.mutate()}
                disabled={!selectedFile || uploading}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-2.5 flex items-center gap-2 transition-all duration-200 hover:scale-105"
                data-testid="button-upload"
              >
                {uploading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    Upload Resume
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Uploaded Files List */}
          <Card className="bg-white/95 backdrop-blur-xl border border-white/40 shadow-xl">
            <CardHeader>
              <CardTitle>Uploaded Resumes</CardTitle>
              <CardDescription>
                {uploads.length} file{uploads.length !== 1 ? "s" : ""} uploaded
              </CardDescription>
            </CardHeader>
            <CardContent>
              {uploadsLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading uploads...</p>
                </div>
              ) : uploads.length === 0 ? (
                <div className="text-center py-8">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600">No resumes uploaded yet</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {uploads.map((upload) => (
                    <div
                      key={upload.id}
                      className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                      data-testid={`upload-item-${upload.id}`}
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-8 h-8 text-blue-600" />
                        <div>
                          <p className="font-medium text-gray-900">{upload.fileName}</p>
                          {upload.description && (
                            <p className="text-sm text-gray-600">{upload.description}</p>
                          )}
                          <p className="text-xs text-gray-500 mt-1">
                            {formatFileSize(upload.fileSize)} • {upload.uploadedAt ? formatDate(upload.uploadedAt) : "Unknown date"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          onClick={() => window.open(upload.fileUrl, "_blank")}
                          variant="ghost"
                          size="sm"
                          className="rounded-lg"
                          data-testid={`button-view-${upload.id}`}
                        >
                          View
                        </Button>
                        <Button
                          onClick={() => deleteMutation.mutate(upload.id)}
                          variant="ghost"
                          size="sm"
                          className="rounded-lg text-red-600 hover:text-red-700 hover:bg-red-50"
                          data-testid={`button-delete-${upload.id}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
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
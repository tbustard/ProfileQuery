import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DownloadSection() {
  const downloadResume = () => {
    // Create and trigger download
    const link = document.createElement('a');
    link.href = '/Tyler_Bustard_Resume.pdf';
    link.download = 'Tyler_Bustard_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="download" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(37,99,235,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Professional Resume
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Download a comprehensive two-page summary of my professional experience, education, and achievements in finance and technology.
            </p>
          </div>

          {/* Download Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
            <div className="space-y-8">
              {/* Resume Preview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left side - Description */}
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Download size={32} className="text-primary transition-all duration-300" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Tyler Bustard Resume</h3>
                    <div className="space-y-3 text-base text-muted-foreground leading-relaxed">
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        Five years of progressive financial services leadership
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        Twenty-two professional certifications and credentials
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        Bachelor of Business Administration with honors
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        Comprehensive technology and analytics expertise
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side - Download preview */}
                <div className="flex flex-col items-center space-y-6">
                  {/* PDF Preview mockup */}
                  <div className="relative group-hover:scale-105 transition-all duration-500">
                    <div className="bg-white border-2 border-gray-200/50 rounded-lg shadow-lg p-6 w-48 h-64 relative overflow-hidden">
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-900 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-400 rounded w-1/2"></div>
                        <div className="space-y-1 pt-4">
                          <div className="h-1.5 bg-gray-300 rounded w-full"></div>
                          <div className="h-1.5 bg-gray-300 rounded w-5/6"></div>
                          <div className="h-1.5 bg-gray-300 rounded w-4/5"></div>
                        </div>
                        <div className="space-y-1 pt-3">
                          <div className="h-1.5 bg-gray-300 rounded w-full"></div>
                          <div className="h-1.5 bg-gray-300 rounded w-3/4"></div>
                          <div className="h-1.5 bg-gray-300 rounded w-5/6"></div>
                        </div>
                        <div className="space-y-1 pt-3">
                          <div className="h-1.5 bg-gray-300 rounded w-4/5"></div>
                          <div className="h-1.5 bg-gray-300 rounded w-full"></div>
                          <div className="h-1.5 bg-gray-300 rounded w-2/3"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 text-xs text-gray-400">PDF</div>
                    </div>
                    {/* Second page behind */}
                    <div className="absolute top-1 left-1 w-48 h-64 bg-white border border-gray-200/30 rounded-lg -z-10"></div>
                  </div>

                  {/* File details */}
                  <div className="text-center space-y-2">
                    <p className="text-sm font-medium text-foreground">Tyler_Bustard_Resume.pdf</p>
                    <p className="text-xs text-muted-foreground">2 pages • Professional format</p>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="flex justify-center pt-4">
                <Button
                  onClick={downloadResume}
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 text-base"
                  data-testid="download-resume-button"
                >
                  <Download size={20} />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
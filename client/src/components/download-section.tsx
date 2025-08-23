import { Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DownloadSection() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Tyler_Bustard_Resume.html';
    link.download = 'Tyler_Bustard_Resume.html';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const printPage = () => {
    window.print();
  };

  return (
    <section id="download" className="py-32 relative overflow-hidden">
      {/* Apple-inspired background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-indigo-50/20 to-purple-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.05),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.05),transparent_60%)]" />
      
      <div className="container-width relative">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header - matching other sections */}
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Resume
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
              Access my comprehensive professional resume showcasing expertise in finance and technology.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] p-12 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
            <div className="space-y-10">
              
              {/* Resume Preview and Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left side - PDF Preview */}
                <div className="flex flex-col items-center space-y-6">
                  <div className="relative group-hover:scale-105 transition-all duration-500">
                    <div className="bg-white border-2 border-gray-200/50 rounded-2xl shadow-xl p-8 w-56 h-72 relative overflow-hidden">
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-900 rounded-lg w-4/5"></div>
                        <div className="h-2.5 bg-gray-500 rounded w-3/5"></div>
                        <div className="space-y-1.5 pt-5">
                          <div className="h-2 bg-gray-300 rounded w-full"></div>
                          <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                          <div className="h-2 bg-gray-300 rounded w-4/5"></div>
                        </div>
                        <div className="space-y-1.5 pt-4">
                          <div className="h-2 bg-gray-300 rounded w-full"></div>
                          <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                          <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                        </div>
                        <div className="space-y-1.5 pt-4">
                          <div className="h-2 bg-gray-300 rounded w-4/5"></div>
                          <div className="h-2 bg-gray-300 rounded w-full"></div>
                          <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 text-sm text-gray-500 font-medium">PDF</div>
                    </div>
                    {/* Second page behind */}
                    <div className="absolute top-2 left-2 w-56 h-72 bg-white border border-gray-200/40 rounded-2xl -z-10 shadow-lg"></div>
                  </div>

                  <div className="text-center space-y-2">
                    <p className="text-base font-semibold text-foreground">Tyler_Bustard_Resume.pdf</p>
                    <p className="text-sm text-muted-foreground">Professional format • 2 pages</p>
                  </div>
                </div>

                {/* Right side - Actions */}
                <div className="space-y-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Download size={40} className="text-primary transition-all duration-300" />
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-foreground">Get My Resume</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Download or print my complete professional resume with detailed experience, education, and certifications.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <Button
                      onClick={downloadResume}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 text-base"
                      data-testid="download-resume-button"
                    >
                      <Download size={20} />
                      Download PDF
                    </Button>
                    
                    <Button
                      onClick={printPage}
                      variant="outline"
                      className="w-full border-2 border-primary/20 hover:border-primary/40 bg-primary/5 hover:bg-primary/10 text-primary font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 text-base"
                      data-testid="print-page-button"
                    >
                      <Printer size={20} />
                      Print Page
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Last updated */}
          <div className="text-center mt-16">
            <p className="text-sm text-muted-foreground font-medium">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
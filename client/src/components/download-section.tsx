import { Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DownloadSection() {
  const downloadResume = async () => {
    try {
      // Try to fetch the PDF version first, then fallback to HTML
      let response = await fetch('/Tyler_Bustard_Resume.pdf');
      let filename = 'Tyler_Bustard_Resume.pdf';
      
      if (!response.ok) {
        // Fallback to HTML version if PDF not found
        response = await fetch('/Tyler_Bustard_Resume.html');
        filename = 'Tyler_Bustard_Resume.html';
      }
      
      if (!response.ok) {
        throw new Error('Failed to fetch resume');
      }
      
      // Create blob and download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to opening in new tab
      window.open('/Tyler_Bustard_Resume.html', '_blank');
    }
  };

  const printPage = () => {
    // For PDF files, open directly; for HTML, open and print
    fetch('/Tyler_Bustard_Resume.pdf')
      .then(response => {
        if (response.ok) {
          // PDF exists, open it directly
          window.open('/Tyler_Bustard_Resume.pdf', '_blank');
        } else {
          // Fallback to HTML version
          const printWindow = window.open('/Tyler_Bustard_Resume.html', '_blank');
          if (printWindow) {
            printWindow.onload = () => {
              printWindow.print();
            };
          }
        }
      })
      .catch(() => {
        // Error case, fallback to HTML
        const printWindow = window.open('/Tyler_Bustard_Resume.html', '_blank');
        if (printWindow) {
          printWindow.onload = () => {
            printWindow.print();
          };
        }
      });
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
              
              {/* Centered Actions */}
              <div className="flex flex-col items-center space-y-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Download size={40} className="text-primary transition-all duration-300" />
                </div>
                
                <div className="text-center space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Download My Resume</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    Download or print my complete professional resume with detailed experience, education, and certifications.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                  <Button
                    onClick={downloadResume}
                    className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 text-base"
                    data-testid="download-resume-button"
                  >
                    <Download size={20} />
                    Download
                  </Button>
                  
                  <Button
                    onClick={printPage}
                    variant="outline"
                    className="flex-1 border-2 border-primary/20 hover:border-primary/40 bg-primary/5 hover:bg-primary/10 text-primary font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 text-base"
                    data-testid="print-page-button"
                  >
                    <Printer size={20} />
                    Print
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
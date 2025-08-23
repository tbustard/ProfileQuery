import { Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

export default function DownloadSection() {
  const sectionAnimation = useScrollAnimation({ threshold: 0.15, triggerOnce: true });
  const headerAnimation = useScrollAnimation({ threshold: 0.25, triggerOnce: true, delay: 100 });
  const { ref: downloadsRef, visibleItems } = useStaggeredScrollAnimation(2, { threshold: 0.15, triggerOnce: true, delay: 200 });
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
    <section 
      ref={sectionAnimation.ref}
      id="download" 
      className={`py-24 lg:py-32 relative overflow-hidden scroll-fade-in ${sectionAnimation.isVisible ? 'visible' : ''}`}
    >
      {/* Background - inherits Apple grey from parent */}
      
      <div className="container-width">
        <div className="bg-white/90 backdrop-blur-xl rounded-[28px] p-10 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
          {/* Header Section - Apple's content-first approach */}
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-20 scroll-slide-up ${headerAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">Resume</h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Access my comprehensive professional resume showcasing expertise in finance and technology.
            </p>
          </div>

          {/* Download Cards Grid - matching contact section layout */}
          <div ref={downloadsRef} className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Download Card */}
            <Card 
              className={`bg-white/90 backdrop-blur-xl rounded-[28px] border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] text-center scroll-scale-in scroll-stagger-1 ${visibleItems.has(0) ? 'visible' : ''}`}
            >
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Download</h3>
                <p className="text-base text-muted-foreground mb-6">
                  Download my complete professional resume with detailed experience, education, and certifications.
                </p>
                <Button
                  onClick={downloadResume}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  data-testid="download-resume-button"
                >
                  Download
                </Button>
              </CardContent>
            </Card>

            {/* Print Card */}
            <Card 
              className={`bg-white/90 backdrop-blur-xl rounded-[28px] border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] text-center scroll-scale-in scroll-stagger-2 ${visibleItems.has(1) ? 'visible' : ''}`}
            >
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110">
                  <Printer className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Print</h3>
                <p className="text-base text-muted-foreground mb-6">
                  Open and print my resume directly in your browser for offline viewing and reference.
                </p>
                <Button
                  onClick={printPage}
                  variant="outline"
                  className="w-full border-2 border-primary/20 hover:border-primary/40 bg-primary/5 hover:bg-primary/10 text-primary font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  data-testid="print-page-button"
                >
                  Print
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
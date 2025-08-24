import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

export default function DownloadSection() {
  const sectionAnimation = useScrollAnimation({ threshold: 0.15, triggerOnce: true });
  const headerAnimation = useScrollAnimation({ threshold: 0.25, triggerOnce: true, delay: 100 });
  const { ref: downloadsRef, visibleItems } = useStaggeredScrollAnimation(1, { threshold: 0.15, triggerOnce: true, delay: 200 });
  const downloadResume = async () => {
    try {
      // Try to fetch the PDF version first
      let response = await fetch('/Tyler_Bustard_Resume.pdf');
      let filename = 'Tyler_Bustard_Resume.pdf';
      
      if (!response.ok) {
        // Fallback to HTML version
        response = await fetch('/Tyler_Bustard_Resume.html');
        filename = 'Tyler_Bustard_Resume.html';
      }
      
      if (response.ok) {
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
      } else {
        throw new Error('Resume file not found');
      }
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to opening in new tab
      window.open('/Tyler_Bustard_Resume.html', '_blank');
    }
  };


  return (
    <section 
      ref={sectionAnimation.ref}
      id="download" 
      className={`py-24 lg:py-32 relative overflow-hidden scroll-fade-in ${sectionAnimation.isVisible ? 'visible' : ''}`}
    >
      {/* Background - inherits Apple grey from parent */}
      
      <div className="container-width">
        <div className="bg-white/90 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 lg:p-12 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
          {/* Header Section - Apple's content-first approach */}
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-8 sm:mb-12 lg:mb-16 scroll-slide-up ${headerAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">Resume</h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Access my comprehensive professional resume showcasing expertise in finance and technology.
            </p>
          </div>

          {/* Download Card - single column layout */}
          <div ref={downloadsRef} className="max-w-md mx-auto">
            {/* Download Card */}
            <Card 
              className={`bg-white/90 backdrop-blur-xl rounded-[28px] border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] text-center scroll-scale-in scroll-stagger-1 ${visibleItems.has(0) ? 'visible' : ''}`}
            >
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <Button
                  onClick={downloadResume}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  data-testid="download-resume-button"
                >
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}
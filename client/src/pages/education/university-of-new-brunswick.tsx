import Navigation from "@/components/navigation";

export default function UniversityOfNewBrunswick() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="apple-section">
        <div className="container-width">
          <div className="text-center mb-20">
            <h1 className="headline text-foreground mb-6">University of New Brunswick</h1>
            <p className="callout text-muted-foreground max-w-3xl mx-auto">
              Bachelor of Business Administration - Class of 2020
            </p>
          </div>
          
          {/* Detailed content will be added later */}
          <div className="text-center">
            <p className="body-text text-muted-foreground">Detailed university experience coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
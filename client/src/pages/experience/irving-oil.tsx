import Navigation from "@/components/navigation";

export default function IrvingOil() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="apple-section">
        <div className="container-width">
          <div className="text-center mb-20">
            <h1 className="headline text-foreground mb-6">Irving Oil Limited</h1>
            <p className="callout text-muted-foreground max-w-3xl mx-auto">
              Marketing Intern - Saint John, New Brunswick (Sep-Dec 2018)
            </p>
          </div>
          
          {/* Detailed content will be added later */}
          <div className="text-center">
            <p className="body-text text-muted-foreground">Detailed Irving Oil experience coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
import Navigation from "@/components/navigation";

export default function GrantThornton() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="apple-section">
        <div className="container-width">
          <div className="text-center mb-20">
            <h1 className="headline text-foreground mb-6">Grant Thornton LLP</h1>
            <p className="callout text-muted-foreground max-w-3xl mx-auto">
              Tax Return Intern - Saint John, New Brunswick (Jan-May 2018)
            </p>
          </div>
          
          {/* Detailed content will be added later */}
          <div className="text-center">
            <p className="body-text text-muted-foreground">Detailed Grant Thornton experience coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
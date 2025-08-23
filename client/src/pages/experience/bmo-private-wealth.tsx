import Navigation from "@/components/navigation";

export default function BMOPrivateWealth() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="apple-section">
        <div className="container-width">
          <div className="text-center mb-20">
            <h1 className="headline text-foreground mb-6">BMO Private Wealth</h1>
            <p className="callout text-muted-foreground max-w-3xl mx-auto">
              Portfolio Assistant - Toronto, Ontario (2022-2023)
            </p>
          </div>
          
          {/* Detailed content will be added later */}
          <div className="text-center">
            <p className="body-text text-muted-foreground">Detailed BMO experience coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
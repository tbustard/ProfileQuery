import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// Education Pages
import UniversityOfNewBrunswick from "@/pages/education/university-of-new-brunswick";

// Experience Pages
import BMOPrivateWealth from "@/pages/experience/bmo-private-wealth";
import TDCanadaTrust from "@/pages/experience/td-canada-trust";
import RBCBankingAdvisor from "@/pages/experience/rbc-banking-advisor";
import RBCClientAdvisor from "@/pages/experience/rbc-client-advisor";
import IrvingOil from "@/pages/experience/irving-oil";
import GrantThornton from "@/pages/experience/grant-thornton";

// Other Pages
import Certifications from "@/pages/certifications";
import Community from "@/pages/community";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Education Routes */}
      <Route path="/education/university-of-new-brunswick" component={UniversityOfNewBrunswick} />
      
      {/* Experience Routes */}
      <Route path="/experience/bmo-private-wealth" component={BMOPrivateWealth} />
      <Route path="/experience/td-canada-trust" component={TDCanadaTrust} />
      <Route path="/experience/rbc-banking-advisor" component={RBCBankingAdvisor} />
      <Route path="/experience/rbc-client-advisor" component={RBCClientAdvisor} />
      <Route path="/experience/irving-oil" component={IrvingOil} />
      <Route path="/experience/grant-thornton" component={GrantThornton} />
      
      {/* Other Routes */}
      <Route path="/certifications" component={Certifications} />
      <Route path="/community" component={Community} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

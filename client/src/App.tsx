import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import Academic from "@/pages/Academic";
import News from "@/pages/News";
import NewsDetail from "@/pages/NewsDetail";
import Teachers from "@/pages/Teachers";
import Gallery from "@/pages/Gallery";
import Admissions from "@/pages/Admissions";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/profil" component={Profile} />
      <Route path="/akademik" component={Academic} />
      <Route path="/berita" component={News} />
      <Route path="/berita/:id" component={NewsDetail} />
      <Route path="/guru" component={Teachers} />
      <Route path="/galeri" component={Gallery} />
      <Route path="/ppdb" component={Admissions} />
      <Route path="/kontak" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen bg-slate-50">
          <Navbar />
          <main className="flex-grow pt-16">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
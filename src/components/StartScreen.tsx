import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StartScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-safety-gradient flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center animate-fade-in">
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-gentle-blue animate-gentle-pulse" />
            <span className="text-2xl">🤝</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            You & I connector
          </h1>
          <p className="text-lg text-muted-foreground">
            "Connect more deeply through 5-stage questions."
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
          <p className="text-muted-foreground mb-6">
            Ready to create deeper connections through mindful conversation?
          </p>
          <Button 
            variant="connection" 
            size="lg" 
            onClick={() => navigate('/depth')}
            className="w-full group"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
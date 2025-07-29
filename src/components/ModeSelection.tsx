import { Button } from "@/components/ui/button";
import { Heart, Users, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ModeSelection = () => {
  const navigate = useNavigate();

  const handleModeSelect = (mode: string) => {
    navigate(`/depth?mode=${mode}`);
  };

  return (
    <div className="min-h-screen bg-safety-gradient flex items-center justify-center p-6">
      <div className="max-w-md w-full animate-fade-in">
        <div className="mb-8 text-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Choose Your Connection Style
          </h2>
          <p className="text-muted-foreground">
            Different modes create different conversation rhythms
          </p>
        </div>

        <div className="space-y-4">
          <div 
            className="bg-card rounded-xl p-6 shadow-card border border-border/50 cursor-pointer transition-all duration-200 hover:shadow-gentle hover:scale-[1.02] group"
            onClick={() => handleModeSelect('date')}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gentle-blue/10 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-gentle-blue" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-1">💖 Date</h3>
                <p className="text-sm text-muted-foreground">
                  Romantic connection and intimate discovery
                </p>
              </div>
            </div>
          </div>

          <div 
            className="bg-card rounded-xl p-6 shadow-card border border-border/50 cursor-pointer transition-all duration-200 hover:shadow-gentle hover:scale-[1.02] group"
            onClick={() => handleModeSelect('friend')}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-soft-green/10 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-soft-green" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-1">👫 Friend Catch-Up</h3>
                <p className="text-sm text-muted-foreground">
                  Deeper friendship and meaningful sharing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModeSelection;
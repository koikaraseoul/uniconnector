import { Button } from "@/components/ui/button";
import { Clock, ArrowLeft, Sparkles, Layers, Mountain } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const DepthSelection = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'friend';

  const depthOptions = [
    {
      id: 5,
      icon: Sparkles,
      title: "Just a Spark",
      description: "Perfect for breaking the ice",
      time: "10–15 min",
      color: "bg-warm-peach/20 border-warm-peach/30"
    },
    {
      id: 10,
      icon: Layers,
      title: "Deeper Connection", 
      description: "Meaningful conversation flow",
      time: "~30 min",
      color: "bg-gentle-blue/20 border-gentle-blue/30"
    },
    {
      id: 15,
      icon: Mountain,
      title: "Profound Conversation",
      description: "Transform your relationship",
      time: "45–60 min",
      color: "bg-soft-green/20 border-soft-green/30"
    }
  ];

  const handleDepthSelect = (depth: number) => {
    navigate(`/conversation?mode=${mode}&depth=${depth}`);
  };

  return (
    <div className="min-h-screen bg-safety-gradient flex items-center justify-center p-6">
      <div className="max-w-md w-full animate-fade-in">
        <div className="mb-8 text-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/mode')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            How Deep Shall We Go?
          </h2>
          <p className="text-muted-foreground">
            Choose the conversation depth that feels right for now
          </p>
        </div>

        <div className="space-y-4">
          {depthOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <div 
                key={option.id}
                className={`bg-card rounded-xl p-6 shadow-card border cursor-pointer transition-all duration-200 hover:shadow-gentle hover:scale-[1.02] ${option.color}`}
                onClick={() => handleDepthSelect(option.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-background/50 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {option.id} Questions
                      </h3>
                      <span className="text-sm text-muted-foreground">–</span>
                      <span className="text-sm font-medium text-foreground">"{option.title}"</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {option.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{option.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DepthSelection;
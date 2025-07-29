import { Button } from "@/components/ui/button";
import { Heart, RotateCcw, Sparkles } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const EndScreen = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'friend';
  const depth = searchParams.get('depth') || '5';

  const messages = {
    date: {
      title: "Beautiful Connection Created ✨",
      subtitle: "Thank you for sharing this intimate space together",
      reflection: "The deepest connections happen when we're brave enough to be seen and curious enough to truly see another."
    },
    friend: {
      title: "Friendship Deepened 🤝",
      subtitle: "Thank you for creating this meaningful space together",
      reflection: "True friendship grows in the soil of honest conversation and mutual appreciation."
    }
  };

  const currentMessage = messages[mode as keyof typeof messages] || messages.friend;

  return (
    <div className="min-h-screen bg-safety-gradient flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center animate-fade-in">
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-gentle-blue animate-gentle-pulse" />
            <Sparkles className="w-6 h-6 text-soft-green" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">
            {currentMessage.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            {currentMessage.subtitle}
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 mb-8">
          <div className="mb-6">
            <div className="w-16 h-16 bg-connection-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Connection Complete
            </h3>
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              "{currentMessage.reflection}"
            </p>
          </div>

          <div className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-3">
            <p>
              You just completed {depth} questions in {mode === 'date' ? 'date' : 'friend'} mode.
              <br />
              Each conversation creates new pathways for understanding.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <Button 
            variant="connection" 
            size="lg" 
            onClick={() => navigate('/')}
            className="w-full group"
          >
            <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            <span>Start Another Conversation</span>
          </Button>

          <Button 
            variant="gentle" 
            onClick={() => navigate(`/depth?mode=${mode}`)}
            className="w-full"
          >
            <span>Try Different Depth</span>
          </Button>
        </div>

        <div className="mt-8 text-xs text-muted-foreground">
          <p>
            Remember: The magic isn't just in the questions,
            <br />
            but in the presence you bring to listening.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EndScreen;
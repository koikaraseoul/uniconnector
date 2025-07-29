import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getQuestionsForSession, getStageInfo, Question } from "@/data/questions";

const ConversationScreen = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const depth = parseInt(searchParams.get('depth') || '5') as 5 | 10 | 15;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionSet] = useState(() => getQuestionsForSession(depth));
  const questions = questionSet.questions;
  
  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const stageInfo = getStageInfo(currentQuestion?.stage || 1);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate(`/end?depth=${depth}`);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-safety-gradient flex items-center justify-center p-6">
      <div className="max-w-2xl w-full animate-fade-in">
        {/* Header with progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/depth')}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div className="text-sm text-muted-foreground">
              {currentIndex + 1} of {questions.length}
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-muted rounded-full h-2 mb-4">
            <div 
              className="bg-connection-gradient h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Stage indicator */}
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${stageInfo.color}`}>
            <div className="w-2 h-2 bg-current rounded-full opacity-60" />
            <span>Stage {currentQuestion.stage}: {stageInfo.name}</span>
          </div>
        </div>

        {/* Question card */}
        <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">
              {stageInfo.description}
            </h3>
            <h2 className="text-2xl font-semibold text-foreground leading-relaxed">
              {currentQuestion.text}
            </h2>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>Take your time to share and listen deeply</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="opacity-60 hover:opacity-100"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>

          <Button
            variant="connection"
            onClick={handleNext}
            className="group"
          >
            {currentIndex === questions.length - 1 ? (
              <>
                <span>Complete</span>
                <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </>
            ) : (
              <>
                <span>Next Question</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConversationScreen;
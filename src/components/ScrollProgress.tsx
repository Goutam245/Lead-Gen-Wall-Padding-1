import { useScrollProgress } from '@/hooks/useScrollAnimation';

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div 
      className="scroll-progress"
      style={{ width: `${progress}%` }}
    />
  );
};

export default ScrollProgress;

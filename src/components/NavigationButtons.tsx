import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  type: 'video' | 'section' | 'course';
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  type
}) => {
  return (
    <div className="flex justify-between items-center mt-8">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPrevious}
        disabled={!hasPrevious}
        className="nav-button"
      >
        <ChevronLeft size={20} />
        Previous {type}
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        disabled={!hasNext}
        className="nav-button"
      >
        Next {type}
        <ChevronRight size={20} />
      </motion.button>
    </div>
  );
};
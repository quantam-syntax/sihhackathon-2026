/* ============================================
   ProcessingState Component
   ============================================
   Animates a multi-step progress sequence:
   upload → read → check → report
   ============================================ */

const STEPS = ['upload', 'read', 'check', 'report'];

const STEP_DELAYS = {
  upload: 600,
  read: 1000,
  check: 1000,
  report: 600,
};

/**
 * Animate the processing steps one by one.
 * Returns a promise that resolves when all steps are "completed".
 *
 * @returns {Promise<void>}
 */
export function animateProcessingSteps() {
  return new Promise((resolve) => {
    const stepsContainer = document.getElementById('processing-steps');
    const stepElements = stepsContainer.querySelectorAll('.processing-step');

    // Reset all steps
    stepElements.forEach((el) => {
      el.classList.remove('processing-step--done', 'processing-step--active', 'processing-step--pending');
      el.classList.add('processing-step--pending');
    });

    let currentIndex = 0;

    function advanceStep() {
      if (currentIndex > 0) {
        // Mark previous step as done
        stepElements[currentIndex - 1].classList.remove('processing-step--active');
        stepElements[currentIndex - 1].classList.add('processing-step--done');
      }

      if (currentIndex >= STEPS.length) {
        resolve();
        return;
      }

      // Mark current step as active
      stepElements[currentIndex].classList.remove('processing-step--pending');
      stepElements[currentIndex].classList.add('processing-step--active');

      const stepKey = STEPS[currentIndex];
      currentIndex++;

      setTimeout(advanceStep, STEP_DELAYS[stepKey]);
    }

    advanceStep();
  });
}

/**
 * Reset processing steps to initial state.
 */
export function resetProcessingSteps() {
  const stepsContainer = document.getElementById('processing-steps');
  if (!stepsContainer) return;
  const stepElements = stepsContainer.querySelectorAll('.processing-step');
  stepElements.forEach((el) => {
    el.classList.remove('processing-step--done', 'processing-step--active');
    el.classList.add('processing-step--pending');
  });
}

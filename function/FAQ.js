

export function FAQ() {
  const questions = document.querySelectorAll(".quest1");

  if (!questions.length) return; // stop if no FAQs on this page

  questions.forEach((question) => {
    const arrow = question.querySelector("i"); // the arrow inside the question

    question.addEventListener("click", () => {
      const isOpen = question.classList.contains("openANSWER");

      // Close all questions
      questions.forEach((q) => {
        q.classList.remove("openANSWER");
        const a = q.querySelector("i");
        if (a) {
          a.classList.add("fa-angle-down");
          a.classList.remove("fa-angle-up");
        }
      });

      // Toggle the clicked question
      if (!isOpen) {
        question.classList.add("openANSWER");
        if (arrow) {
          arrow.classList.add("fa-angle-up");
          arrow.classList.remove("fa-angle-down");
        }
      }
    });
  });
}

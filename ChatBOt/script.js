document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chatForm");
  const chatBody = document.getElementById("chatBody");
  const userInput = document.getElementById("userInput");

  chatForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const question = userInput.value.trim();
    if (question === "") return;

    addMessage(question, "user");
    userInput.value = "";

    setTimeout(() => {
      const answer = getDepartmentAnswer(question);
      addMessage(answer, "bot");
    }, 400);
  });

  function addMessage(text, sender) {
    const div = document.createElement("div");
    div.className = sender === "bot" ? "message bot-message" : "message";
    div.innerHTML = `<div class="message-text">${text}</div>`;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // 🏫 DEPARTMENT FAQ LOGIC
  function getDepartmentAnswer(input) {
    const q = input
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .trim();

    if (q.includes("department")) {
      return "This department focuses on academic excellence and skill development.";
    }
    if (q.includes("courses") || q.includes("programs")) {
      return "The department offers undergraduate and postgraduate programs.";
    }
    if (q.includes("eligibility")) {
      return "Students must meet the eligibility criteria as per university guidelines.";
    }
    if (q.includes("admission")) {
      return "Admissions are based on entrance exams and merit as per university rules.";
    }
    if (q.includes("faculty")) {
      return "Our department has highly qualified and experienced faculty members.";
    }
    if (q.includes("hod")) {
      return "The Head of the Department manages academic and administrative activities.";
    }
    if (q.includes("labs")) {
      return "The department has well-equipped laboratories for practical learning.";
    }
    if (q.includes("placements")) {
      return "The department provides placement assistance and career guidance.";
    }
    if (q.includes("internship")) {
      return "Students are encouraged to take internships during their course.";
    }
    if (q.includes("contact")) {
      return "You can contact the department office during working hours.";
    }
    

    return "Sorry, this information is not available. Please contact the department office.";
  }
});

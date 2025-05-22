// Script to handle How It Works modal and topic selection

document.addEventListener('DOMContentLoaded', () => {
    // Modal handling
    const howItWorksLink = document.getElementById('howItWorksLink');
    const howItWorksModal = document.getElementById('howItWorksModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    if (howItWorksLink && howItWorksModal && closeModalBtn) {
        howItWorksLink.addEventListener('click', (e) => {
            e.preventDefault();
            howItWorksModal.style.display = 'flex';
        });

        closeModalBtn.addEventListener('click', () => {
            howItWorksModal.style.display = 'none';
        });

        // Close modal when clicking outside the modal content
        howItWorksModal.addEventListener('click', (e) => {
            if (e.target === howItWorksModal) {
                howItWorksModal.style.display = 'none';
            }
        });
    }

    // Topic selection handling
    let topics = [
        "General Knowledge",
        "Science",
        "History",
        "Geography",
        "Math"
    ];

    let selectedTopics = new Set();

    const container = document.getElementsByClassName("topicContent");

    const startButton = document.getElementById("startQuiz");
    const link = document.getElementsByClassName("Link")[0];

    if (container.length > 0 && startButton && link) {
        // Initially disable the start link
        link.style.pointerEvents = 'none';
        startButton.style.opacity = '0.6';

        topics.forEach(element => {
            const newTopic = document.createElement("div");
            newTopic.innerHTML = element;
            newTopic.setAttribute("class", "topic");
            newTopic.addEventListener("click", () => {
                newTopic.classList.toggle("selected");
                if (!selectedTopics.has(newTopic.innerHTML))
                    selectedTopics.add(newTopic.innerHTML);
                else
                    selectedTopics.delete(newTopic.innerHTML);

                if (selectedTopics.size >= 2) {
                    link.style.pointerEvents = 'all';
                    startButton.style.opacity = '1';
                } else {
                    link.style.pointerEvents = 'none';
                    startButton.style.opacity = '0.6';
                }

                // Highlight selected topics like quiz options
                if (newTopic.classList.contains("selected")) {
                    newTopic.classList.add("answerSelection");
                } else {
                    newTopic.classList.remove("answerSelection");
                }
            });
            container[0].appendChild(newTopic);
        });

        startButton.addEventListener("click", () => {
            if (selectedTopics.size >= 2) {
                localStorage.data = JSON.stringify([...selectedTopics]);
            } else {
                alert("Select at least 2 topics");
            }
        });
    }
});

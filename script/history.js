
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("#btn-contain-box");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const parentSection = this.closest("section");

            const taskTitle = parentSection.querySelector("#box-title").textContent;
            const currentTime = new Date().toLocaleTimeString();

            const newMessage = document.createElement("div");
            newMessage.classList.add("bg-blue-50", "rounded-lg", "text-start", "p-3");

            newMessage.innerHTML = `<p>You have Completed the Task: <strong>${taskTitle}</strong> at ${currentTime}</p>`;
            document.getElementById("history-section").appendChild(newMessage);
        });
    });


    document.getElementById("btn-history").addEventListener("click", function () {
        document.getElementById("history-section").innerHTML = "";
    });
});
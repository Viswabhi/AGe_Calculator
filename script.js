
document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("btn");
    const dateInput = document.getElementById("date");

    calculateButton.addEventListener("click", function() {
        const birthDate = new Date(dateInput.value);
        if (isNaN(birthDate)) {
            alert("Please enter a valid date.");
            return;
        }

        const currentDate = new Date();
        let years = currentDate.getFullYear() - birthDate.getFullYear();
        let months = currentDate.getMonth() - birthDate.getMonth();
        let days = currentDate.getDate() - birthDate.getDate();

        if (days < 0) {
            months -= 1;
            const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
            days += previousMonth.getDate();
        }

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        document.getElementById("years").textContent = years;
        document.getElementById("months").textContent = months;
        document.getElementById("days").textContent = days;
    });
});

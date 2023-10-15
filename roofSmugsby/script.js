document.addEventListener("DOMContentLoaded", function () {
    const flashcard = document.getElementById("flashcard");
    const content = document.getElementById("content");
    const objectionText = document.getElementById("objection-text");
    const rebuttalText = document.getElementById("rebuttal-text");
    const prevButton = document.getElementById("prev-button");
    const resetButton = document.getElementById("reset-button");
    const nextButton = document.getElementById("next-button");

    const trainingData = [
        {
            "objection": "I don’t think my credit is good enough…",
            "rebuttal": "It’s obvious you are concerned about the money. Let me suggest since money is the issue that we leave it up to the bank. If Goodleap approves the deal, and I know they won’t approve you if they don't think you can do it, then we do the deal. If not then no harm done. Sign here and here and we’ll leave it up to the lenders."
        },
        {
            "objection": "I don’t know what I want in a contractor…",
            "rebuttal": "I want you to do the right thing as I trust you are a person who prides themselves on always doing the right things. In fact, I’m sure you’ve built a life of right actions and decisions and avoiding the wrong ones. If this solution doesn’t fit under “right” things then don't do it. Let’s logically look at this so you can make the right decision.\n\nWhat do you like about us?\nIn a perfect world, what else could we do?\nIt sounds like we’re a pretty good fit. Sign here and here."
        },
        {
            "objection": "I can’t afford it this year…",
            "rebuttal": "I’ve been doing this for a while and can I share a trend I’ve seen for a long time?\nPrices are increasing 10-15% every quarter at the minimum. A Ten-thousand dollar roof today at 10% will be almost Fifteen thousand dollars 12 months from now. At 15% the same Ten-thousand dollar roof will be almost Eighteen thousand dollars. I know budget is a concern and to be frank.. Prices are not going down. You can’t afford to wait if money is your concern. I need you to sign here and here."
        }
    ];

    let currentObjection = 0;

    function toggleRebuttal() {
        const isRebuttalHidden = rebuttalText.style.display === "none";

        if (isRebuttalHidden) {
            objectionText.style.display = "none";
            rebuttalText.style.display = "block";
            rebuttalText.textContent = trainingData[currentObjection].rebuttal;
        } else {
            objectionText.style.display = "block";
            rebuttalText.style.display = "none";
        }
    }

    function prevObjection() {
        if (currentObjection > 0) {
            currentObjection--;
            objectionText.textContent = trainingData[currentObjection].objection;
            resetRebuttal();
        }
    }

    function nextObjection() {
        if (currentObjection < trainingData.length - 1) {
            currentObjection++;
            objectionText.textContent = trainingData[currentObjection].objection;
            resetRebuttal();
        }
    }

    function resetRebuttal() {
        objectionText.style.display = "block";
        rebuttalText.style.display = "none";
    }

    flashcard.addEventListener("click", toggleRebuttal);
    prevButton.addEventListener("click", prevObjection);
    resetButton.addEventListener("click", resetRebuttal);
    nextButton.addEventListener("click", nextObjection);
});

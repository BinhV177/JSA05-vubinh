const cards = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H"];
        let shuffledCards = cards.sort(() => Math.random() - 0.5);
        let gameBoard = document.getElementById("game-board");
        let firstCard = null;
        let secondCard = null;
        let score = 0;

        function createBoard() {
            shuffledCards.forEach((value, index) => {
                let card = document.createElement("div");
                card.classList.add("card");
                card.dataset.value = value;
                card.addEventListener("click", flipCard);
                gameBoard.appendChild(card);
            });
        }

        function flipCard() {
            if (this === firstCard) return;
            this.textContent = this.dataset.value;
            if (!firstCard) {
                firstCard = this;
                return;
            }
            secondCard = this;
            checkMatch();
        }

        function checkMatch() {
            if (firstCard.dataset.value === secondCard.dataset.value) {
                setTimeout(() => {
                    firstCard.classList.add("hidden");
                    secondCard.classList.add("hidden");
                    score++;
                    document.getElementById("score").textContent = score;
                    resetCards();
                }, 500);
            } else {
                setTimeout(() => {
                    firstCard.textContent = "";
                    secondCard.textContent = "";
                    resetCards();
                }, 500);
            }
        }

        function resetCards() {
            firstCard = null;
            secondCard = null;
        }

        createBoard();
const wordList = [
    "zephyr", "quixotic", "abyss", "cryptic", "xylophone", "juxtapose", "onomatopoeia", "serendipity",
    "elixir", "labyrinth", "facetious", "euphoria", "quagmire", "syzygy", "ephemeral", "paradox",
    "calligraphy", "cacophony", "plethora", "chiaroscuro", "myriad", "kaleidoscope", "threnody",
    "aesthetic", "mnemonic", "phantasmagoria", "halcyon", "limerence", "incipient", "esoteric",
    "nebulous", "petrichor", "epiphany", "lagniappe", "idiosyncrasy", "apocryphal", "doppelganger",
    "brusque", "acquiesce", "flummoxed", "pugnacious", "misnomer", "uxorious", "rendezvous",
    "umbrage", "scintilla", "maelstrom", "nonchalant", "effervescent", "harbinger", "quintessential",
    "conundrum", "obfuscate", "gossamer", "bucolic", "zenith", "vicissitude", "panacea", "sanguine",
    "vivacious", "nocturnal", "idyllic", "cacophonous", "fugacious", "imbroglio", "serpentine",
    "nefarious", "intransigent", "perfidious", "ineffable", "effulgent", "ludicrous", "prodigious",
    "vociferous", "arcane", "grandiloquent", "surreptitious", "anachronistic", "fastidious",
    "obstreperous", "mellifluous", "insidious", "pusillanimous", "prestidigitation", "circumlocution",
    "sesquipedalian", "gargantuan", "defenestration", "antidisestablishmentarianism", "floccinaucinihilipilification",
    "supercalifragilisticexpialidocious", "parsimony", "recalcitrant", "lachrymose", "ebullient", 
    "bombastic", "trepidation", "histrionic", "perspicacious", "magnanimous", "subterfuge", 
    "ameliorate", "prognosticate", "lilliputian", "idiosyncratic", "lugubrious", "efficacious",
    "antediluvian", "pusillanimity", "perspicuity", "quizzical", "subjugate", "abstruse", 
    "phosphorescent", "melancholy", "mercurial", "pandemonium", "malevolent", "pernicious",
    "unctuous", "discombobulate", "kitsch", "schadenfreude", "zeitgeist", "forbearance",
    "jingoism", "turpitude", "ubiquitous", "celerity", "panoply", "lassitude", "misanthrope",
    "pusillanimous", "verisimilitude", "inchoate", "phlegmatic", "profligate", "ebullience",
    "hypnagogic", "prosaic", "atavistic", "stratagem", "bildungsroman", "epistolary",
    "circumambient", "persnickety", "scabrous", "flagitious", "gnomic", "pyrrhic"
];
let hiddenWord = "";
let usedLetters = [];
let remainingLives = 5;

function startGame() {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    hiddenWord = "_".repeat(selectedWord.length);
    usedLetters = [];
    remainingLives = 5;
    document.getElementById("wordDisplay").textContent = hiddenWord.split("").join(" ");
    document.getElementById("usedLetters").textContent = "None";
    document.getElementById("lifes").textContent = `Lives: ${remainingLives}`;
    document.getElementById("result").textContent = "";
    document.getElementById("myText").disabled = false;
}

function makeGuess(letter) {
    if (!letter || usedLetters.includes(letter) || remainingLives <= 0 || hiddenWord === selectedWord) return;
    usedLetters.push(letter);

    if (selectedWord.includes(letter)) {
        let updatedWord = "";
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                updatedWord += letter;
            } else {
                updatedWord += hiddenWord[i];
            }
        }
        hiddenWord = updatedWord;
        document.getElementById("wordDisplay").textContent = hiddenWord.split("").join(" ");
        if (hiddenWord === selectedWord) {
            alert("yippe u win!!! u sigma!!!!!!!!!!!!!!!!!!!")
            document.getElementById("result").textContent = "Congratulations! You won!";
            document.getElementById("myText").disabled = true;
        }
    } else {
        remainingLives--;
        document.getElementById("lifes").textContent = `Lives: ${remainingLives}`;
        if (remainingLives === 0) {
            alert("Game Over! The word was " + selectedWord + ".");
            document.getElementById("result").textContent = "Game Over! The word was " + selectedWord + ".";
            document.getElementById("myText").disabled = true;
        }
    }

    document.getElementById("usedLetters").textContent = usedLetters.join(", ");
}

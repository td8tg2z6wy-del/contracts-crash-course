window.LESSONS = window.LESSONS || {};
window.LESSONS["estoppel"] = {
  "id": "estoppel",
  "title": "Promissory Estoppel",
  "track": "cl",
  "sections": ["§90"],
  "scenes": [
    { "title": "Promissory Estoppel", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: promissory estoppel.",
        "add": [
          { "k": "fig", "x": 200, "y": 400, "pose": "point", "face": "smirk", "label": "Promisor", "say": "Trust me!" },
          { "k": "fig", "x": 470, "y": 400, "pose": "up", "label": "Promisee", "say": "I will!" } ] },
      { "say": "Sometimes there is a promise but no bargain. So there is no consideration, and no contract. Yet the other person trusted the promise, acted on it, and got hurt. Can the promise-maker just walk away? Promissory estoppel says no.",
        "add": [
          { "k": "text", "x": 60, "y": 145, "t": "No bargain. But someone relied.", "s": 30 },
          { "k": "text", "x": 60, "y": 187, "t": "Can the promisor just walk away?", "s": 26, "c": "red" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "One section rules this board: section 90. A promise that the promisor should reasonably expect to cause action, and that does cause it, is binding if enforcing it is the only way to avoid injustice. Picture ninety degrees. You turned your life a full right angle because of a promise.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§90", "name": "Promissory estoppel", "rule": "A promise that foreseeably induces reliance can bind.", "hook": "90 degrees: you turned your life because of a promise." } ] },
      { "say": "The elements spell PRIDE. P: a promise. R: reliance the promisor should have expected. I: it really did induce action, or holding back. D: detriment, a real cost. E: enforcement is needed to avoid injustice. A broken promise hurts your pride.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§90", "name": "The elements", "rule": "Promise. Reliance expected. Induced. Detriment. Enforce.", "hook": "PRIDE: a broken promise hurts your PRIDE." } ] },
      { "clear": true,
        "say": "Run through PRIDE on every estoppel question. Was there a real promise? Should the promisor have seen the reliance coming? Did the other person actually act on it? Did it cost them something? And would it be unjust to let the promisor off?",
        "add": [
          { "k": "text", "x": 70, "y": 155, "t": "P", "s": 38, "c": "blue" }, { "k": "text", "x": 125, "y": 153, "t": "Promise", "s": 27 },
          { "k": "text", "x": 70, "y": 215, "t": "R", "s": 38, "c": "blue" }, { "k": "text", "x": 125, "y": 213, "t": "Reliance should have been expected", "s": 27 },
          { "k": "text", "x": 70, "y": 275, "t": "I", "s": 38, "c": "blue" }, { "k": "text", "x": 125, "y": 273, "t": "Induced: they really did act on it", "s": 27 },
          { "k": "text", "x": 70, "y": 335, "t": "D", "s": 38, "c": "blue" }, { "k": "text", "x": 125, "y": 333, "t": "Detriment: it cost them", "s": 27 },
          { "k": "text", "x": 70, "y": 395, "t": "E", "s": 38, "c": "blue" }, { "k": "text", "x": 125, "y": 393, "t": "Enforce, to avoid injustice", "s": 27 } ] }
    ] },
    { "title": "Plan B", "beats": [
      { "say": "Where does this fit? It is plan B. Always try contract first: offer, acceptance, consideration. If consideration fails, because the promise was a gift or the deal was never finished, reach for section 90. If you relied, ninety's on your side.",
        "add": [
          { "k": "text", "x": 60, "y": 155, "t": "Plan A: contract", "s": 32 },
          { "k": "arrow", "x1": 110, "y1": 175, "x2": 110, "y2": 255, "c": "red" },
          { "k": "text", "x": 135, "y": 225, "t": "no consideration?", "s": 25, "c": "red" },
          { "k": "text", "x": 60, "y": 300, "t": "Plan B: promissory estoppel, §90", "s": 32, "c": "green" },
          { "k": "text", "x": 60, "y": 390, "t": "If you relied, ninety's on your side.", "s": 28, "c": "blue" },
          { "k": "ul", "x": 60, "y": 404, "w": 470, "c": "blue" } ] }
    ] },
    { "title": "Grandpa's note", "beats": [
      { "say": "Ricketts and Scothorn. A grandfather hands his granddaughter a note promising two thousand dollars, and says: none of my other grandchildren work, and now you don't have to either. She quits her job. He dies with the note unpaid, and his executor refuses to honour it.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "A note for $2,000. No strings.", "s": 28 },
          { "k": "fig", "x": 150, "y": 400, "pose": "hold", "hat": "tophat", "label": "Grandfather", "say": "You needn't work." },
          { "k": "icon", "name": "doc", "x": 275, "y": 335, "s": 0.8 },
          { "k": "fig", "x": 400, "y": 400, "pose": "up", "hat": "hair", "label": "Granddaughter", "say": "I quit my job!" } ] },
      { "say": "There was no consideration, because he never asked her to quit. It was a gift. But he expected her to rely on it, and she did. So the estate was estopped, which means barred, from denying the promise.",
        "add": [
          { "k": "stamp", "x": 520, "y": 200, "t": "ESTOPPED", "s": 28, "c": "green" },
          { "k": "text", "x": 522, "y": 264, "t": "Ricketts v. Scothorn", "s": 22, "c": "blue" },
          { "k": "text", "x": 522, "y": 302, "t": "A gift promise plus expected reliance can bind.", "s": 21, "w": 210 } ] }
    ] },
    { "title": "The pension", "beats": [
      { "say": "Feinberg and Pfeiffer. After thirty-seven years of loyal work, a company's board promises Missus Feinberg two hundred dollars a month for life, whenever she chooses to retire. She works a little longer, then retires. Years later, new management cuts the cheque in half.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "37 years' work, then: $200 a month for life", "s": 25 },
          { "k": "fig", "x": 150, "y": 400, "pose": "wave", "hat": "bun", "label": "Mrs Feinberg", "say": "Then I'll retire." },
          { "k": "icon", "name": "money", "x": 275, "y": 335, "s": 0.8, "c": "green" },
          { "k": "fig", "x": 400, "y": 400, "pose": "hips", "face": "flat", "hat": "tophat", "label": "New boss", "say": "It was only a gift." } ] },
      { "say": "Her past work was not consideration: it was already done. And the board never asked her to retire. But she gave up her job trusting that pension, and could not easily get it back. Her reliance made the promise binding.",
        "add": [
          { "k": "stamp", "x": 520, "y": 200, "t": "ENFORCED", "s": 28, "c": "green" },
          { "k": "text", "x": 522, "y": 264, "t": "Feinberg v. Pfeiffer", "s": 22, "c": "blue" },
          { "k": "text", "x": 522, "y": 302, "t": "Past work: no. Retiring in reliance: yes.", "s": 21, "w": 210 } ] }
    ] },
    { "title": "The show must go on", "beats": [
      { "say": "Elvin Associates and Franklin. Aretha Franklin agrees to star in a musical, and tells the producer: this is what I am doing. A written contract is drafted but never signed. The producer hires a cast and books theatres. Then she misses rehearsals, because she will not fly.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Contract drafted, never signed", "s": 28 },
          { "k": "fig", "x": 150, "y": 400, "pose": "hips", "hat": "crown", "label": "Franklin", "say": "This is what I'm doing." },
          { "k": "icon", "name": "jet", "x": 275, "y": 335, "s": 0.8 },
          { "k": "fig", "x": 400, "y": 400, "pose": "up", "hat": "cap", "label": "Producer", "say": "Hiring the cast!" } ] },
      { "say": "No contract: both sides meant to be bound only on signing. But her assurances were a promise, and she knew he had to spend money to get ready. He recovered what he had spent in reliance. Not the profits he had hoped for.",
        "add": [
          { "k": "cross", "x": 255, "y": 315, "r": 40 },
          { "k": "stamp", "x": 520, "y": 200, "t": "§90 APPLIES", "s": 25, "c": "green" },
          { "k": "text", "x": 522, "y": 264, "t": "Elvin Associates v. Franklin", "s": 20, "c": "blue", "w": 215 },
          { "k": "text", "x": 522, "y": 332, "t": "He gets back what he spent.", "s": 21, "w": 210 } ] }
    ] },
    { "title": "The restaurant deal", "beats": [
      { "say": "Cosgrove and Bartolotta. A restaurateur asks a lawyer friend for a hundred thousand dollar loan, plus business and legal advice, and promises him a share in the new restaurant. The lawyer does the work. Then the restaurateur finds other money, and cuts him out.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Loan + advice = a share in the restaurant", "s": 25 },
          { "k": "fig", "x": 150, "y": 400, "pose": "point", "face": "smirk", "hat": "cap", "label": "Bartolotta", "say": "You're in, partner!" },
          { "k": "icon", "name": "store", "x": 275, "y": 335, "s": 0.8 },
          { "k": "fig", "x": 400, "y": 400, "pose": "hold", "hat": "wig", "label": "Cosgrove", "say": "Here's my advice." } ] },
      { "say": "The terms of his share were never pinned down, so there was no contract. But the promise was firm enough to rely on, and a professional's time is a real cost. Promissory estoppel saved him. Yes, even a lawyer who forgot to get it in writing.",
        "add": [
          { "k": "stamp", "x": 520, "y": 200, "t": "ESTOPPEL WINS", "s": 24, "c": "green" },
          { "k": "text", "x": 522, "y": 264, "t": "Cosgrove v. Bartolotta", "s": 20, "c": "blue" },
          { "k": "text", "x": 522, "y": 302, "t": "Loose deal, firm promise, real cost.", "s": 21, "w": 210 } ] }
    ] },
    { "title": "What do you get?", "beats": [
      { "say": "What does the winner get? Section 90 says the remedy may be limited as justice requires. Courts sometimes enforce the whole promise, as with the pension. More often they award reliance damages: what you lost by trusting, not what you hoped to gain.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Remedy: \"limited as justice requires\"", "s": 28 },
          { "k": "icon", "name": "scale", "x": 120, "y": 260, "s": 1.4 },
          { "k": "text", "x": 220, "y": 245, "t": "Sometimes: the full promise", "s": 27 },
          { "k": "text", "x": 220, "y": 295, "t": "Usually: reliance damages", "s": 27, "c": "green" },
          { "k": "text", "x": 60, "y": 395, "t": "You get what you lost, not what you hoped.", "s": 27, "c": "blue" } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Reaching for estoppel when there was never a real promise. I am thinking of hiring you is not a promise. If you quit your job on a maybe, section 90 will not rescue you. The reliance has to be reasonable.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "fig", "x": 170, "y": 400, "pose": "shrug", "hat": "tophat", "label": "Boss", "say": "Maybe I'll hire you." },
          { "k": "fig", "x": 430, "y": 400, "pose": "up", "face": "shock", "label": "You", "say": "I quit my job!" },
          { "k": "cross", "x": 540, "y": 290, "r": 46 },
          { "k": "text", "x": 250, "y": 142, "t": "A maybe is not a promise.", "s": 26 } ] },
      { "clear": true,
        "say": "Let's recap. Promissory estoppel is plan B, for when consideration fails. Section 90 needs PRIDE: a promise, expected reliance, induced action, detriment, and injustice without enforcement. The remedy is limited as justice requires, usually to reliance. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "Plan B when consideration fails", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§90: a promise that induces reliance", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "Elements: PRIDE", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "Needs a real promise, reasonably relied on", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "Remedy: as justice requires", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Promissory Estoppel", "k": "cl",
      "q": "An uncle tells his nephew, \"I'm proud of you. I'll give you $10,000 toward a car next month.\" Relying on this, the nephew signs a purchase contract and pays a non-refundable deposit, as the uncle knew he would. The uncle then refuses to pay. What is the nephew's best theory?",
      "o": ["Breach of contract, because the uncle's pride was consideration.", "Promissory estoppel, because he reasonably and foreseeably relied on the promise to his cost.", "No theory at all, because gift promises are never enforceable.", "Breach of contract, because the promise named a definite sum."],
      "a": 1,
      "w": "There is no bargain here, so no consideration. But section 90 makes a promise binding when the promisor should expect reliance, the reliance happens, and injustice would otherwise result. Run PRIDE, and every element is met." },
    { "t": "Promissory Estoppel", "k": "cl",
      "q": "What does Restatement section 90 say about the remedy for promissory estoppel?",
      "o": ["The court must always award full expectation damages.", "The court may only order the promise to be performed.", "No money may be awarded, only an apology.", "The remedy may be limited as justice requires, so a court may award only reliance losses."],
      "a": 3,
      "w": "Section 90 ends by saying the remedy may be limited as justice requires. Some courts enforce the full promise, as in Feinberg and Pfeiffer. Many award only what was lost in reliance, as in Elvin Associates and Franklin." },
    { "t": "Promissory Estoppel", "k": "cl",
      "q": "A manager tells a job applicant, \"We might have an opening next year. Stay in touch.\" The applicant turns down a firm job offer elsewhere. No opening ever appears. Will promissory estoppel help the applicant?",
      "o": ["No, because there was no clear promise on which it was reasonable to rely.", "Yes, because she relied to her detriment.", "Yes, because the manager should have foreseen her disappointment.", "No, because estoppel never applies to employment."],
      "a": 0,
      "w": "The first element of section 90 is a promise. A statement that something might happen is not a commitment, and relying on a maybe is not reasonable. Detriment alone is never enough." },
    { "t": "Promissory Estoppel", "k": "cl",
      "q": "A friend says, \"I'm going to give you my old couch next week.\" You are pleased but do nothing differently. The friend then gives the couch to someone else. Why does a promissory estoppel claim fail?",
      "o": ["Because couches are goods.", "Because the promise was not in writing.", "Because you did not rely on the promise in any way that cost you something.", "Because friends cannot make promises to each other."],
      "a": 2,
      "w": "Section 90 needs action or forbearance induced by the promise, and a real cost. Here there was a promise but no reliance and no detriment. In PRIDE terms, the I and the D are missing." },
    { "t": "Promissory Estoppel", "k": "cl",
      "q": "Which statement best describes how promissory estoppel relates to consideration?",
      "o": ["It is another name for consideration.", "It applies only when there is already a valid contract.", "It lets a court enforce any promise that seems morally deserving.", "It can make a promise enforceable without consideration, where the promise induced reasonable reliance."],
      "a": 3,
      "w": "Promissory estoppel is plan B. When a promise lacks consideration but the promisee reasonably relied on it at real cost, section 90 can make it binding. It is not a general licence to enforce every promise that sounds deserving." }
  ]
};

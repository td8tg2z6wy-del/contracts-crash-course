window.LESSONS = window.LESSONS || {};
window.LESSONS["fraud"] = {
  "id": "fraud",
  "title": "Fraud and Misrepresentation",
  "track": "cl",
  "sections": ["§162", "§164"],
  "scenes": [
    { "title": "Fraud and Misrepresentation", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: fraud and misrepresentation.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Was that an informed YES?", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "point", "face": "smirk", "label": "Seller", "say": "It never floods!" },
          { "k": "fig", "x": 470, "y": 400, "pose": "up", "label": "Buyer", "say": "Then I'll sign!" } ] },
      { "say": "A yes only counts if it is an informed yes. If your agreement was obtained by a lie, a half-truth, or silence from someone who had a duty to speak, the law may let you out. The question today is, when?",
        "add": [
          { "k": "text", "x": 60, "y": 195, "t": "Lies · half-truths · silence", "s": 28, "c": "red" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Two sections. Section 162 gives a false statement two possible labels. Fraudulent: the speaker knows it is false, or does not care, and means to draw you in. Material: it would matter to a reasonable person. One-six-two ends in two. Picture a liar wearing two name tags.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§162", "name": "Fraudulent or material", "rule": "Fraudulent = knew or didn't care. Material = it matters.", "hook": "1-6-2 ends in 2: a liar wearing two name tags." } ] },
      { "say": "Section 164 is the payoff. If your yes was induced by a statement that was fraudulent or material, and you were justified in relying on it, you may cancel the contract. Notice the word or. An honest but material falsehood can be enough. One-six-four: lied to? There's the door.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§164", "name": "When you can get out", "rule": "Fraudulent OR material + justified reliance = voidable.", "hook": "One-six-four: lied to? There's the door." } ] },
      { "clear": true,
        "say": "For full-blown fraud, courts list elements, and your acronym is liars. L, a lie: a false statement of fact. I, important: it is material. A, aware: the speaker knew, or was reckless. R, reeled in: it was meant to induce you, and it did. S, suffering: you were harmed.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "L · Lie: a false statement of fact", "s": 26 },
          { "k": "text", "x": 60, "y": 205, "t": "I · Important: it is material", "s": 26 },
          { "k": "text", "x": 60, "y": 260, "t": "A · Aware: knew, or reckless", "s": 26 },
          { "k": "text", "x": 60, "y": 315, "t": "R · Reeled in: meant to induce, and did", "s": 26 },
          { "k": "text", "x": 60, "y": 370, "t": "S · Suffering: you were harmed", "s": 26 },
          { "k": "text", "x": 560, "y": 240, "t": "LIARS", "s": 52, "c": "blue" },
          { "k": "ul", "x": 560, "y": 254, "w": 125, "c": "blue" } ] },
      { "clear": true,
        "say": "One more filter. The statement must be about a fact. This car has never been in an accident, is a fact. This car is a dream to drive, is opinion, or sales puffery, and normally nobody may rely on that. Normally. Hold that thought.",
        "add": [
          { "k": "icon", "name": "car", "x": 105, "y": 165 },
          { "k": "text", "x": 180, "y": 155, "t": "\"Never in an accident.\"", "s": 26 },
          { "k": "text", "x": 180, "y": 193, "t": "= FACT. You may rely on it.", "s": 24, "c": "green" },
          { "k": "text", "x": 180, "y": 295, "t": "\"A dream to drive!\"", "s": 26 },
          { "k": "text", "x": 180, "y": 333, "t": "= OPINION or PUFFERY. You may not.", "s": 24, "c": "red" } ] }
    ] },
    { "title": "Void or voidable?", "beats": [
      { "say": "Fraud comes in two kinds. Fraud in the inception: you are tricked about what you are signing, and do not even know it is a contract. No real assent, so it is void. Fraud in the inducement: you know it is a contract, but lies persuaded you. That is voidable.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Fraud in the INCEPTION", "s": 28, "c": "red" },
          { "k": "text", "x": 60, "y": 186, "t": "Tricked about WHAT you signed", "s": 22 },
          { "k": "stamp", "x": 480, "y": 130, "t": "VOID", "s": 28, "c": "red" },
          { "k": "text", "x": 60, "y": 310, "t": "Fraud in the INDUCEMENT", "s": 28, "c": "blue" },
          { "k": "text", "x": 60, "y": 346, "t": "Knew it was a contract; lied into it", "s": 22 },
          { "k": "stamp", "x": 480, "y": 290, "t": "VOIDABLE", "s": 28, "c": "blue" } ] },
      { "say": "The difference matters. Void means no contract ever existed, and nobody can enforce it. Voidable means the contract stands, unless and until the victim chooses to cancel. The victim holds the key.",
        "add": [
          { "k": "text", "x": 60, "y": 226, "t": "No contract ever existed.", "s": 24 },
          { "k": "text", "x": 60, "y": 386, "t": "Stands until the victim cancels.", "s": 24 },
          { "k": "icon", "name": "key", "x": 680, "y": 315, "s": 0.8 } ] }
    ] },
    { "title": "The prank", "beats": [
      { "say": "Amber Duick clicked agree on what looked like an online personality test. In truth, she had signed up for a car maker's prank campaign. A made-up soccer hooligan then emailed that he was heading to her home, with his pit bull. Then came a bill for a wrecked hotel room.",
        "add": [
          { "k": "icon", "name": "doc", "x": 105, "y": 165 },
          { "k": "text", "x": 170, "y": 152, "t": "\"Personality test\": click AGREE", "s": 26 },
          { "k": "text", "x": 170, "y": 190, "t": "Really: a prank ad campaign", "s": 24, "c": "red" },
          { "k": "fig", "x": 200, "y": 400, "pose": "up", "face": "shock", "hat": "hair", "label": "Duick", "say": "Who is this man?!" },
          { "k": "fig", "x": 420, "y": 400, "pose": "wave", "face": "smirk", "hat": "cap", "label": "\"Sebastian\"", "say": "Coming to stay!" } ] },
      { "say": "She sued. Toyota pointed to an arbitration clause in the terms she had clicked. The court held those terms void. She was misled about the very nature of what she was agreeing to. That is fraud in the inception. Duick and Toyota.",
        "add": [
          { "k": "stamp", "x": 540, "y": 205, "t": "VOID", "s": 30, "c": "red" },
          { "k": "text", "x": 537, "y": 275, "t": "Duick v. Toyota", "s": 22, "c": "blue" },
          { "k": "text", "x": 537, "y": 311, "t": "Fraud in the inception: no arbitration.", "s": 21, "w": 200 } ] }
    ] },
    { "title": "The dance lessons", "beats": [
      { "say": "Audrey Vokes, a widow, wanted to dance. The studio kept telling her she had wonderful talent and was improving beautifully. She bought over two thousand three hundred hours of lessons, for more than thirty-one thousand dollars. In truth, she could barely keep time.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "2,302 hours of lessons · $31,090", "s": 28 },
          { "k": "fig", "x": 200, "y": 400, "pose": "point", "face": "smirk", "label": "Studio", "say": "You're a natural!" },
          { "k": "fig", "x": 410, "y": 400, "pose": "up", "hat": "bun", "label": "Mrs Vokes", "say": "More lessons!" } ] },
      { "say": "The studio said, that was only our opinion. The court disagreed. An opinion can be treated as a statement of fact when the speaker has superior knowledge and the listener does not. The studio knew she had no aptitude. She got her day in court. Vokes and Arthur Murray.",
        "add": [
          { "k": "text", "x": 60, "y": 190, "t": "Truth: no rhythm at all", "s": 24, "c": "red" },
          { "k": "stamp", "x": 520, "y": 205, "t": "NOT JUST OPINION", "s": 22, "c": "green" },
          { "k": "text", "x": 522, "y": 272, "t": "Vokes v. Arthur Murray", "s": 21, "c": "blue" },
          { "k": "text", "x": 522, "y": 308, "t": "Superior knowledge turns opinion into fact.", "s": 21, "w": 210 } ] }
    ] },
    { "title": "The haunted house", "beats": [
      { "say": "Now silence. A seller had told the local paper and a national magazine that her house was haunted. Then she sold it to an out-of-town buyer, and said nothing about ghosts. He found out, and wanted his money back.",
        "add": [
          { "k": "icon", "name": "house", "x": 110, "y": 165, "s": 1.2 },
          { "k": "text", "x": 190, "y": 152, "t": "Told the press: HAUNTED", "s": 26 },
          { "k": "text", "x": 190, "y": 190, "t": "Told the buyer: nothing", "s": 26, "c": "red" },
          { "k": "fig", "x": 200, "y": 400, "pose": "stand", "face": "smirk", "hat": "bun", "label": "Seller", "say": "Lovely old house." },
          { "k": "fig", "x": 420, "y": 400, "pose": "up", "face": "shock", "label": "Stambovsky", "say": "Ghosts?!" } ] },
      { "say": "New York followed caveat emptor, buyer beware: a seller need not volunteer anything. But the court let him rescind. She had created the haunted reputation herself, and no inspection would reveal it. So, as a matter of law, the house was haunted. Stambovsky and Ackley.",
        "add": [
          { "k": "stamp", "x": 535, "y": 205, "t": "RESCINDED", "s": 26, "c": "green" },
          { "k": "text", "x": 537, "y": 272, "t": "Stambovsky v. Ackley", "s": 21, "c": "blue" },
          { "k": "text", "x": 537, "y": 308, "t": "No inspection finds a ghost.", "s": 21, "w": 200 } ] }
    ] },
    { "title": "The trusted executive", "beats": [
      { "say": "Last case. A senior executive and director negotiated a generous retirement deal, including a release of all claims against him. He did not mention that he had been helping himself to company money. The company found out, and stopped paying.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Retirement deal + release of claims", "s": 27 },
          { "k": "fig", "x": 200, "y": 400, "pose": "hold", "face": "smirk", "hat": "tophat", "label": "Executive", "say": "Just sign here." },
          { "k": "icon", "name": "money", "x": 305, "y": 335, "s": 0.6, "c": "green" },
          { "k": "fig", "x": 410, "y": 400, "pose": "wave", "label": "Company", "say": "Happy retirement!" } ] },
      { "say": "He said, I never lied, I just kept quiet. Not good enough. A fiduciary, someone in a position of trust, must disclose material facts. Restatement section 161 agrees: silence counts as a statement when trust requires you to speak. That is Wal-Mart Stores and Coughlin.",
        "add": [
          { "k": "text", "x": 60, "y": 190, "t": "Unsaid: he had been taking company money", "s": 23, "c": "red" },
          { "k": "stamp", "x": 535, "y": 205, "t": "DUTY TO SPEAK", "s": 23, "c": "red" },
          { "k": "text", "x": 537, "y": 272, "t": "Wal-Mart v. Coughlin", "s": 21, "c": "blue" },
          { "k": "text", "x": 537, "y": 308, "t": "A fiduciary's silence = a misstatement (§161)", "s": 20, "w": 200 } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Do not assume you must prove a liar. Under section 164, an innocent misstatement is enough, if it is material and you justifiably relied on it. And the flip side: pure opinion and sales puffery usually get you nowhere.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "text", "x": 60, "y": 185, "t": "No liar needed: innocent + material works", "s": 26 },
          { "k": "fig", "x": 180, "y": 400, "pose": "shrug", "face": "flat", "label": "Seller", "say": "I honestly thought so." },
          { "k": "fig", "x": 440, "y": 400, "pose": "hips", "face": "flat", "label": "Buyer", "say": "It mattered. I'm out." } ] },
      { "clear": true,
        "say": "Let's recap. Fraud in the inception is void. Fraud in the inducement is voidable. Section 162 labels a statement fraudulent or material. Section 164 lets you out for either one, with justified reliance. Fraud elements spell liars. Opinion and silence are usually safe, but not always. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "Inception = void. Inducement = voidable", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§162: fraudulent or material", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "§164: either one + justified reliance", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "Fraud elements: L·I·A·R·S", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "Opinion and silence: usually safe, not always", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Fraud and Misrepresentation", "k": "cl",
      "q": "A courier hands a homeowner a tablet and says, \"Just sign to confirm delivery.\" The screen shows only a signature box, and there is no chance to see anything else. In fact the signature is attached to a three-year service contract. What is the status of that contract?",
      "o": ["Valid, because a signature always binds the signer.", "Void, because this is fraud in the inception: he did not know he was signing a contract at all.", "Voidable, because this is fraud in the inducement.", "Valid, unless the homeowner can prove he suffered a loss."],
      "a": 1,
      "w": "When someone is deceived about the very nature of what he is signing, there is no assent at all. That is fraud in the inception, and the contract is void, as in Duick and Toyota. Fraud in the inducement is different: you know it is a contract, but lies talked you into it." },
    { "t": "Fraud and Misrepresentation", "k": "cl",
      "q": "A seller honestly believes the roof of her house was replaced last year, and tells the buyer so. She is wrong: the roof is twenty years old. The buyer relied on her statement in agreeing to the price. Can the buyer avoid the contract?",
      "o": ["No, because the seller did not intend to deceive.", "No, because buyers must always inspect for themselves.", "Yes, because a material misrepresentation, justifiably relied on, makes the contract voidable even if it was innocent.", "Yes, but only if the buyer first proves the seller was reckless."],
      "a": 2,
      "w": "Section 164 says fraudulent or material. A statement about the age of the roof would matter to any reasonable buyer, so it is material, and the buyer was justified in relying on it. One-six-four: lied to, even innocently? There's the door." },
    { "t": "Fraud and Misrepresentation", "k": "cl",
      "q": "A used-car dealer tells a customer, \"This is the best little truck in the county. You'll love it.\" The truck turns out to be thoroughly ordinary. Can the customer avoid the sale for misrepresentation?",
      "o": ["No, because the statement was opinion and sales puffery, not a statement of fact.", "Yes, because the statement was false.", "Yes, because dealers always have superior knowledge.", "No, because misrepresentation never applies to used goods."],
      "a": 0,
      "w": "A misrepresentation must be a false statement of fact. Loose praise like best in the county is puffery, and a reasonable buyer does not rely on it. It would be different if the dealer had said the truck had never been in an accident." },
    { "t": "Fraud and Misrepresentation", "k": "cl",
      "q": "A professional appraiser tells a first-time collector, \"In my expert opinion this vase is museum quality and you will easily resell it for double.\" The appraiser knows the vase is a common reproduction. The collector buys it. The appraiser's best defence is that he only gave an opinion. Will that defence work?",
      "o": ["Yes, because opinions can never be misrepresentations.", "Yes, because the collector could have hired a second appraiser.", "No, because every false opinion is automatically fraud.", "No, because an opinion from a party with superior knowledge, who knows the facts do not support it, can be relied on."],
      "a": 3,
      "w": "This is Vokes and Arthur Murray with a vase. Opinion is normally safe, but not when the speaker has superior knowledge and the listener reasonably trusts it. An expert who states an opinion he knows is baseless is implying facts that are false." },
    { "t": "Fraud and Misrepresentation", "k": "cl",
      "q": "A trustee who manages land for a beneficiary offers to buy it from her at last year's valuation. He does not mention that he has just learned a new railway station will be built next door, which will triple its value. He tells no lies. She agrees. Can she avoid the sale?",
      "o": ["No, because silence is never a misrepresentation.", "No, because of caveat emptor.", "Yes, because a fiduciary has a duty to disclose material facts, so his silence is treated as a misrepresentation.", "Yes, because all contracts between a trustee and a beneficiary are void."],
      "a": 2,
      "w": "Ordinarily a party may keep quiet. But a fiduciary, a person in a relation of trust, must speak, and under section 161 his silence counts as an assertion that the fact does not exist. That was the reasoning in Wal-Mart Stores and Coughlin. The sale is voidable." }
  ]
};

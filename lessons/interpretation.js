window.LESSONS = window.LESSONS || {};
window.LESSONS["interpretation"] = {
  "id": "interpretation",
  "title": "Interpretation",
  "track": "cl",
  "sections": ["§202", "§203", "§206"],
  "scenes": [
    { "title": "Interpretation", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: interpretation.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "What do the words mean?", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "point", "label": "Buyer", "say": "I meant THIS." },
          { "k": "icon", "name": "doc", "x": 325, "y": 350, "s": 0.9 },
          { "k": "fig", "x": 450, "y": 400, "pose": "hips", "face": "flat", "label": "Seller", "say": "I meant THAT." } ] },
      { "say": "The parties signed. Now they disagree about what a word means. The court's goal is to find the intent the parties showed each other, through their words and conduct. Not their secret thoughts. Then it enforces that bargain.",
        "add": [
          { "k": "text", "x": 560, "y": 320, "t": "Goal: the intent they SHOWED", "s": 24, "c": "red", "w": 175 } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Three sections. First, section 202. Read the agreement as a whole, in light of what the parties were trying to achieve. Never pluck out one word alone. Picture the number. Two, zero, two. That zero in the middle is the whole. Read the whole.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§202", "name": "Read it as a whole", "rule": "Read the whole agreement in light of its main purpose.", "hook": "2-0-2: the 0 in the middle is the WHOLE. Read the whole." } ] },
      { "say": "Second, section 203. When terms pull against each other, there is a pecking order. Specific terms beat general ones. And express words beat past habits and trade customs. The acronym is E, P, D, T. Eat pizza during trials.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§203", "name": "Which term wins", "rule": "Specific beats general. Express words beat custom.", "hook": "E-P-D-T: Eat Pizza During Trials." } ] },
      { "clear": true,
        "say": "Here is the ladder. E, express terms, on top. P, course of performance: how the parties behaved under this very contract. D, course of dealing: their earlier deals together. T, trade usage: what the industry does. Eat pizza during trials.",
        "add": [
          { "k": "text", "x": 62, "y": 152, "t": "E", "s": 34, "c": "blue" }, { "k": "text", "x": 110, "y": 150, "t": "Express terms", "s": 28 },
          { "k": "text", "x": 62, "y": 212, "t": "P", "s": 34, "c": "blue" }, { "k": "text", "x": 110, "y": 210, "t": "Performance (this contract)", "s": 28 },
          { "k": "text", "x": 62, "y": 272, "t": "D", "s": 34, "c": "blue" }, { "k": "text", "x": 110, "y": 270, "t": "Dealing (earlier contracts)", "s": 28 },
          { "k": "text", "x": 62, "y": 332, "t": "T", "s": 34, "c": "blue" }, { "k": "text", "x": 110, "y": 330, "t": "Trade usage (the industry)", "s": 28 },
          { "k": "arrow", "x1": 620, "y1": 135, "x2": 620, "y2": 335 },
          { "k": "text", "x": 640, "y": 245, "t": "weaker", "s": 20 },
          { "k": "text", "x": 110, "y": 405, "t": "Eat Pizza During Trials", "s": 26, "c": "blue" } ] },
      { "clear": true,
        "say": "Third, section 206. Contra proferentem. If a term is still ambiguous after all that, read it against the party who wrote it. The drafter held the pen, so the drafter takes the risk. You wrote the mess, you get less.",
        "add": [
          { "k": "card", "x": 60, "y": 114, "num": "§206", "name": "Against the drafter", "rule": "Still ambiguous? Read it against whoever wrote it.", "hook": "You wrote the mess, you get less." },
          { "k": "fig", "x": 250, "y": 420, "pose": "sad", "face": "sad", "label": "Drafter" },
          { "k": "icon", "name": "doc", "x": 420, "y": 345, "label": "Ambiguous clause" } ] }
    ] },
    { "title": "What is chicken?", "beats": [
      { "say": "Our first case is Frigaliment. A Swiss buyer ordered frozen chicken from a New York seller. The seller shipped stewing chicken: older, tougher birds. The buyer was furious. To him, chicken meant young birds, fit for frying or broiling.",
        "add": [
          { "k": "icon", "name": "chicken", "x": 110, "y": 180, "s": 1.4 },
          { "k": "text", "x": 190, "y": 165, "t": "Contract: \"chicken\"", "s": 28 },
          { "k": "fig", "x": 300, "y": 400, "pose": "up", "face": "sad", "label": "Swiss buyer", "say": "These are tough!" },
          { "k": "fig", "x": 530, "y": 400, "pose": "shrug", "label": "NY seller", "say": "It IS chicken." } ] },
      { "clear": true,
        "say": "Judge Friendly asked, what is chicken? The word was ambiguous, so he looked outside the contract. The buyer pointed to their cables: written in German, but using the English word chicken. He also called experts, who said the trade meant young birds.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "\"What is chicken?\"", "s": 32 },
          { "k": "text", "x": 60, "y": 205, "t": "Narrow: young birds only", "s": 26 },
          { "k": "text", "x": 60, "y": 245, "t": "Broad: any chicken, stewing birds too", "s": 26 },
          { "k": "text", "x": 60, "y": 310, "t": "Buyer's evidence:", "s": 24, "c": "blue" },
          { "k": "text", "x": 60, "y": 348, "t": "German cables, English word \"chicken\"", "s": 23 },
          { "k": "text", "x": 60, "y": 384, "t": "Experts on trade usage", "s": 23 },
          { "k": "icon", "name": "letter", "x": 640, "y": 350 } ] },
      { "clear": true,
        "say": "It was not enough. The seller was new to the trade, so the buyer had to prove the usage was so widespread the seller must have known it. And the price gave it away. At thirty-three cents a pound, young birds would have meant selling at a loss.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Seller's side", "s": 30 },
          { "k": "text", "x": 60, "y": 205, "t": "New to the trade: usage not proven", "s": 24 },
          { "k": "text", "x": 60, "y": 250, "t": "Contract price: 33 cents a pound", "s": 24 },
          { "k": "text", "x": 60, "y": 295, "t": "Young birds cost more than that", "s": 24 },
          { "k": "icon", "name": "money", "x": 620, "y": 245, "c": "green" },
          { "k": "text", "x": 60, "y": 370, "t": "Nobody sells at a loss on purpose.", "s": 26, "c": "red" } ] },
      { "clear": true,
        "say": "Result: the buyer lost. The party who claims the narrower meaning must prove it, and he had not. Note the real question was never what chicken means in the dictionary. It was what these two parties showed each other they meant.",
        "add": [
          { "k": "stamp", "x": 60, "y": 160, "t": "BUYER LOSES", "s": 30, "c": "red" },
          { "k": "text", "x": 62, "y": 225, "t": "Frigaliment v. B.N.S. International", "s": 22, "c": "blue" },
          { "k": "text", "x": 62, "y": 290, "t": "Claiming the narrow meaning?", "s": 26 },
          { "k": "text", "x": 62, "y": 326, "t": "You carry the burden.", "s": 26 },
          { "k": "fig", "x": 620, "y": 400, "pose": "hips", "face": "flat", "hat": "wig", "label": "Friendly, J.", "say": "Not proven." } ] }
    ] },
    { "title": "Sale or licence?", "beats": [
      { "say": "Second case. F B T Productions and Aftermath Records. F B T had signed the rapper Eminem. The record deal paid a royalty of twelve to twenty percent on records sold, but fifty percent on masters licensed to others. Then came downloads and ringtones. Which box?",
        "add": [
          { "k": "text", "x": 60, "y": 145, "t": "Records SOLD: 12 to 20%", "s": 28 },
          { "k": "text", "x": 60, "y": 190, "t": "Masters LICENSED: 50%", "s": 28, "c": "green" },
          { "k": "icon", "name": "phone", "x": 650, "y": 170, "label": "Downloads" },
          { "k": "fig", "x": 200, "y": 400, "pose": "up", "hat": "cap", "label": "Artist side", "say": "Fifty percent!" },
          { "k": "fig", "x": 450, "y": 400, "pose": "hips", "face": "flat", "hat": "tophat", "label": "Record label", "say": "Twenty, tops." } ] },
      { "clear": true,
        "say": "The label said a download is just a record sold through a normal shop, so the low rate applies. A jury agreed. But the licence clause opened with three powerful words. Notwithstanding the foregoing. Meaning: whatever came before, this clause wins.",
        "add": [
          { "k": "text", "x": 60, "y": 165, "t": "\"Notwithstanding the foregoing...\"", "s": 32, "c": "blue" },
          { "k": "ul", "x": 60, "y": 180, "w": 490, "c": "blue" },
          { "k": "text", "x": 60, "y": 235, "t": "= whatever came before, THIS clause wins", "s": 26 },
          { "k": "text", "x": 60, "y": 310, "t": "Jury: downloads are sales (20%)", "s": 24 } ] },
      { "say": "The appeals court reversed. The contract was not ambiguous. The label had given companies like Apple permission to use its master recordings. Permission is a licence. So downloads and ringtones earned the fifty percent rate. Broad language is not the same as unclear language.",
        "add": [
          { "k": "cross", "x": 430, "y": 288, "r": 24 },
          { "k": "stamp", "x": 60, "y": 385, "t": "LICENCE: 50%", "s": 28, "c": "green" },
          { "k": "text", "x": 330, "y": 395, "t": "F.B.T. Productions v. Aftermath", "s": 22, "c": "blue" } ] }
    ] },
    { "title": "Define your terms", "beats": [
      { "say": "The drafting lesson from both cases. Define your terms. One line saying, chicken means young broilers and fryers, would have saved a trial. The record contract did cover media not yet invented, but nobody stopped to say how they would be paid.",
        "add": [
          { "k": "icon", "name": "doc", "x": 120, "y": 230, "s": 1.6, "label": "Definitions" },
          { "k": "text", "x": 230, "y": 185, "t": "\"Chicken\" means young broilers", "s": 24 },
          { "k": "text", "x": 230, "y": 217, "t": "and fryers.", "s": 24 },
          { "k": "text", "x": 230, "y": 272, "t": "\"Records sold\" includes downloads.", "s": 24 },
          { "k": "text", "x": 230, "y": 350, "t": "Define it now, or litigate it later.", "s": 26, "c": "red" } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Do not jump straight to, read it against the drafter. Section 206 is a last resort. First read the whole agreement, apply the pecking order, and weigh the evidence of what the parties meant. Only if it is still unclear does the drafter lose.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "text", "x": 60, "y": 205, "t": "1. Whole agreement and purpose (§202)", "s": 26 },
          { "k": "text", "x": 60, "y": 255, "t": "2. Pecking order (§203)", "s": 26 },
          { "k": "text", "x": 60, "y": 305, "t": "3. Evidence of what they meant", "s": 26 },
          { "k": "text", "x": 60, "y": 355, "t": "4. LAST: against the drafter (§206)", "s": 26, "c": "red" } ] },
      { "clear": true,
        "say": "Let's recap. Find the intent the parties showed. Read the agreement as a whole. Specific beats general, and express words beat custom. In Frigaliment, the buyer could not prove his narrow meaning. Ambiguity that survives goes against the drafter. And define your terms. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§202: read the whole, mind the purpose", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§203: specific beats general; E-P-D-T", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "§206: ambiguity goes against the drafter", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "Frigaliment: narrow meaning? Prove it", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "F.B.T.: \"notwithstanding\" wins", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Interpretation", "k": "cl",
      "q": "A printed lease says, in its general rules, \"No animals may be kept on the premises.\" A clause typed in for this tenant says, \"Tenant may keep one cat.\" The landlord demands the cat go. Which term controls?",
      "o": ["The general rule, because it appears first.", "Neither; the conflict makes the lease void.", "The cat clause, because specific and separately added terms outweigh general standard language.", "The general rule, because printed terms outweigh typed ones."],
      "a": 2,
      "w": "Section 203 sets the pecking order. Specific terms are given greater weight than general language, and terms added for this deal outweigh standard printed ones. The cat stays." },
    { "t": "Interpretation", "k": "cl",
      "q": "An insurer drafts a policy excluding \"water damage\". After weighing the whole policy and all the evidence, the phrase could reasonably mean either flooding only or any leak. Neither meaning is favoured by the other rules of interpretation. How should a court read it?",
      "o": ["Against the insurer, because it drafted the ambiguous term.", "In favour of the insurer, because it knows insurance best.", "By striking the whole policy.", "By splitting the loss equally."],
      "a": 0,
      "w": "This is section 206, contra proferentem. When a term remains ambiguous, the meaning that works against the drafter is generally preferred. You wrote the mess, you get less." },
    { "t": "Interpretation", "k": "cl",
      "q": "In Frigaliment Importing v. B.N.S. International Sales, why did the buyer lose?",
      "o": ["Because the word \"chicken\" has only one possible meaning.", "Because the contract was never signed.", "Because trade usage is never admissible.", "Because the buyer failed to prove that the contract used \"chicken\" in the narrower sense of young birds."],
      "a": 3,
      "w": "The word was ambiguous, and the evidence pointed both ways. The buyer, who claimed the narrower meaning, bore the burden of proving it and fell short. The contract price, too low for young birds, counted against him." },
    { "t": "Interpretation", "k": "cl",
      "q": "A written supply contract says, \"Delivery by 9 a.m. each Monday.\" In this industry, the custom is to deliver by noon. The supplier delivers at 11:30 a.m. and points to the custom. Who is right?",
      "o": ["The supplier, because trade usage always controls.", "The buyer, because an express term outranks trade usage.", "The supplier, because noon is close enough.", "Neither, because the contract is too uncertain."],
      "a": 1,
      "w": "Under section 203, express terms sit at the top of the ladder, above course of performance, course of dealing and trade usage. Eat pizza during trials. Custom fills gaps, but it cannot override what the parties actually wrote." },
    { "t": "Interpretation", "k": "cl",
      "q": "Clause 4 of a contract sets a 15% royalty on all sales. Clause 5 begins, \"Notwithstanding the foregoing, the royalty on licensed uses is 50%.\" A use fits both clauses. Which rate applies?",
      "o": ["50%, because \"notwithstanding the foregoing\" makes clause 5 override what came before it.", "15%, because the earlier clause controls.", "The average of the two rates.", "Neither, because the clauses cancel each other out."],
      "a": 0,
      "w": "That was the lesson of F.B.T. Productions and Aftermath Records. Notwithstanding the foregoing signals that the clause wins over anything before it. Reading the agreement as a whole under section 202, the fifty percent rate applies." }
  ]
};

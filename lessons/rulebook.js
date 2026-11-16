window.LESSONS = window.LESSONS || {};
window.LESSONS["rulebook"] = {
  "id": "rulebook",
  "title": "Which rulebook?",
  "track": "cl",
  "sections": ["§1", "UCC 2-105", "UCC 2-104"],
  "scenes": [
    { "title": "Which rulebook?", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: which rulebook?",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Step zero: pick the rulebook", "s": 32 },
          { "k": "icon", "name": "book", "x": 200, "y": 280, "s": 1.5, "label": "Common law" },
          { "k": "icon", "name": "book", "x": 500, "y": 280, "s": 1.5, "c": "blue", "label": "UCC Article 2" } ] },
      { "say": "Before you answer any contracts question, ask one thing. What is this deal about? Because contract law has two rulebooks, and opening the wrong one is the fastest way to lose marks.",
        "add": [
          { "k": "text", "x": 200, "y": 400, "t": "services, land, jobs", "s": 24, "anchor": "middle" },
          { "k": "text", "x": 500, "y": 400, "t": "sales of goods", "s": 24, "c": "blue", "anchor": "middle" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Start with section 1 of the Restatement. A contract is a promise, or a set of promises, that the law will enforce. Break it, and a court gives a remedy. Picture the number one as a single raised finger: I promise. And standing behind it, a judge.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§1", "name": "What a contract is", "rule": "A promise the law will enforce, with a remedy for breach.", "hook": "One raised finger: I promise. A court stands behind it." } ] },
      { "say": "Next, UCC section 2-105. Goods are things that are movable when they are picked out for the sale. Look at the five on the end. Five fingers. If you can grab it and carry it away, it is probably goods.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "UCC 2-105", "name": "Goods", "rule": "Things that are movable when identified to the contract.", "hook": "Ends in 5: five fingers. Can you grab it and move it?" } ] },
      { "clear": true,
        "say": "UCC section 2-104. A merchant is someone who deals in goods of that kind, or who holds themselves out as having special knowledge of them. Rhyme time. Two-one-oh-four: the pro who runs the store.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "UCC 2-104", "name": "Merchants", "rule": "Deals in goods of that kind, or claims special skill.", "hook": "Two-one-oh-four: the pro who runs the store." } ] },
      { "say": "And for deals that mix goods with services, there are two tests. Predominant purpose, and gravamen of the complaint. Your acronym is P G, like the film rating. A mixed deal is rated P G. We will act it out shortly.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "MIXED", "name": "Goods plus services", "rule": "Main purpose of the deal, or the heart of the complaint.", "hook": "Rated P·G: Predominant purpose, Gravamen." } ] }
    ] },
    { "title": "Two rulebooks", "beats": [
      { "say": "Rulebook one is the common law. Judges built it, case by case, state by state. The Restatement is a tidy summary of those cases, written by scholars. Courts respect it and often follow it. But it is not a statute, and it binds nobody.",
        "add": [
          { "k": "icon", "name": "book", "x": 120, "y": 185, "label": "Common law" },
          { "k": "text", "x": 200, "y": 170, "t": "Judge-made, case by case", "s": 26 },
          { "k": "text", "x": 200, "y": 212, "t": "Restatement = a summary", "s": 26 },
          { "k": "stamp", "x": 545, "y": 185, "t": "PERSUASIVE", "s": 24, "c": "blue" } ] },
      { "say": "Rulebook two is Article 2 of the Uniform Commercial Code. It is a statute, passed by the legislature in every state except Louisiana. So for sales of goods, it is binding law. The Restatement suggests. The UCC commands.",
        "add": [
          { "k": "icon", "name": "book", "x": 120, "y": 335, "c": "blue", "label": "UCC Art. 2" },
          { "k": "text", "x": 200, "y": 322, "t": "A statute: sales of goods", "s": 26 },
          { "k": "text", "x": 200, "y": 364, "t": "Every state but Louisiana", "s": 26 },
          { "k": "stamp", "x": 545, "y": 337, "t": "BINDING", "s": 24, "c": "green" },
          { "k": "text", "x": 200, "y": 432, "t": "The Restatement suggests. The UCC commands.", "s": 22, "c": "blue" } ] },
      { "clear": true,
        "say": "So here is the sorting rule. Services, land, and employment: common law. A sale of goods: the UCC. And where the UCC says nothing on a point, the common law quietly fills the gap.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Common law", "s": 30 },
          { "k": "ul", "x": 60, "y": 162, "w": 150 },
          { "k": "icon", "name": "house", "x": 110, "y": 230, "label": "Land" },
          { "k": "fig", "x": 260, "y": 310, "pose": "hold", "hat": "hardhat", "label": "Services", "s": 0.8 },
          { "k": "text", "x": 420, "y": 150, "t": "UCC Article 2", "s": 30, "c": "blue" },
          { "k": "ul", "x": 420, "y": 162, "w": 190, "c": "blue" },
          { "k": "icon", "name": "car", "x": 470, "y": 230, "label": "Car" },
          { "k": "icon", "name": "crate", "x": 610, "y": 230, "label": "Crate" },
          { "k": "text", "x": 60, "y": 410, "t": "UCC silent? The common law fills the gap.", "s": 26 } ] }
    ] },
    { "title": "What are goods?", "beats": [
      { "say": "So what are goods? Movable things. A car. A cow. A crate of carrots. A custom-built machine counts too. So do growing crops, and even the unborn young of animals. If it can be moved, think UCC.",
        "add": [
          { "k": "icon", "name": "car", "x": 120, "y": 190, "label": "Car" },
          { "k": "icon", "name": "cow", "x": 280, "y": 190, "label": "Cow" },
          { "k": "icon", "name": "crate", "x": 440, "y": 190, "label": "Crate" },
          { "k": "icon", "name": "carrot", "x": 600, "y": 190, "label": "Carrots" },
          { "k": "text", "x": 60, "y": 330, "t": "Movable = goods = UCC", "s": 36, "c": "green" },
          { "k": "text", "x": 60, "y": 385, "t": "Also: crops, unborn animals, custom-made goods", "s": 24 } ] },
      { "clear": true,
        "say": "What is not goods? Land and houses. Services, like a haircut or a legal opinion. Shares and other investment securities. And the money paid as the price. Those stay with the common law, or with some other statute.",
        "add": [
          { "k": "icon", "name": "house", "x": 120, "y": 190, "label": "Land" },
          { "k": "icon", "name": "gavel", "x": 280, "y": 190, "label": "Services" },
          { "k": "icon", "name": "doc", "x": 440, "y": 190, "label": "Shares" },
          { "k": "icon", "name": "money", "x": 600, "y": 190, "label": "The price" },
          { "k": "stamp", "x": 240, "y": 320, "t": "NOT GOODS", "s": 34, "c": "red" },
          { "k": "text", "x": 60, "y": 415, "t": "Common law, or another statute, applies.", "s": 24 } ] }
    ] },
    { "title": "Mixed deals", "beats": [
      { "say": "Now the mixed deal. A spa company sells you a hot tub for eight thousand dollars, and installs it for five hundred. Goods and a service, in one contract. Which rulebook? Time for P G.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Hot tub $8,000 + installation $500", "s": 28 },
          { "k": "fig", "x": 160, "y": 400, "pose": "hold", "hat": "hardhat", "label": "Spa Co.", "say": "Tub AND fitting!" },
          { "k": "fig", "x": 420, "y": 400, "pose": "shrug", "face": "flat", "label": "Buyer", "say": "Which rulebook?" },
          { "k": "text", "x": 570, "y": 360, "t": "P·G", "s": 56, "c": "blue" },
          { "k": "ul", "x": 570, "y": 374, "w": 100, "c": "blue" } ] },
      { "clear": true,
        "say": "P is the predominant purpose test, used by most states. Ask what the deal is mainly about. Here, nearly all the money is for the tub. So the whole contract goes under the UCC. Even the installation part.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "P = Predominant purpose", "s": 32, "c": "blue" },
          { "k": "text", "x": 60, "y": 195, "t": "Most states. What is the deal MAINLY about?", "s": 24 },
          { "k": "icon", "name": "scale", "x": 120, "y": 280, "s": 1.3 },
          { "k": "text", "x": 210, "y": 290, "t": "$8,000 tub  vs  $500 fitting", "s": 28 },
          { "k": "stamp", "x": 210, "y": 345, "t": "WHOLE DEAL = UCC", "s": 28, "c": "green" } ] },
      { "clear": true,
        "say": "G is the gravamen test, used in some states. Ask what the complaint is really about. If the tub itself cracks, that is a goods problem: UCC. If the installer floods your patio, that is a service problem: common law.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "G = Gravamen of the complaint", "s": 32, "c": "blue" },
          { "k": "text", "x": 60, "y": 195, "t": "Some states. What actually went WRONG?", "s": 24 },
          { "k": "text", "x": 60, "y": 290, "t": "The tub cracks", "s": 28 },
          { "k": "arrow", "x1": 262, "y1": 281, "x2": 345, "y2": 281 },
          { "k": "text", "x": 362, "y": 290, "t": "UCC", "s": 30, "c": "green" },
          { "k": "text", "x": 60, "y": 370, "t": "Installer floods the patio", "s": 28 },
          { "k": "arrow", "x1": 415, "y1": 361, "x2": 495, "y2": 361 },
          { "k": "text", "x": 512, "y": 370, "t": "Common law", "s": 30 } ] }
    ] },
    { "title": "Merchants", "beats": [
      { "say": "One more label. The UCC covers anyone who buys or sells goods. Even you, selling a bike to a neighbour. A merchant is the professional: someone who deals in goods of that kind, or holds out special knowledge of them.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "The UCC covers both. Only one is a merchant.", "s": 26 },
          { "k": "fig", "x": 170, "y": 400, "pose": "wave", "label": "You", "say": "Bike for sale!" },
          { "k": "icon", "name": "store", "x": 500, "y": 310, "s": 1.6, "label": "Bike shop = merchant" },
          { "k": "text", "x": 430, "y": 215, "t": "UCC 2-104", "s": 26, "c": "blue" } ] },
      { "clear": true,
        "say": "Why care? Because some UCC rules bite only on merchants. Firm offers. The implied warranty of merchantability. Special rules when merchants swap forms. So once you have chosen the UCC, always ask: is anyone here a merchant?",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Merchant-only rules", "s": 30 },
          { "k": "check", "x": 62, "y": 190 }, { "k": "text", "x": 110, "y": 207, "t": "Firm offers (2-205)", "s": 26 },
          { "k": "check", "x": 62, "y": 245 }, { "k": "text", "x": 110, "y": 262, "t": "Warranty of merchantability (2-314)", "s": 26 },
          { "k": "check", "x": 62, "y": 300 }, { "k": "text", "x": 110, "y": 317, "t": "Extra terms between merchants (2-207)", "s": 26 },
          { "k": "text", "x": 60, "y": 400, "t": "Always ask: is anyone here a merchant?", "s": 28, "c": "blue" } ] }
    ] },
    { "title": "Two ways to think", "beats": [
      { "say": "A quick word on style. Williston, the formalist, loved firm rules and the written words. Corbin, the realist, looked at context and at what people actually relied on. The Second Restatement and the UCC lean Corbin's way. You will hear both voices in the cases.",
        "add": [
          { "k": "text", "x": 110, "y": 150, "t": "Formalism", "s": 30 },
          { "k": "text", "x": 420, "y": 150, "t": "Realism", "s": 30 },
          { "k": "fig", "x": 180, "y": 400, "pose": "hips", "face": "flat", "hat": "tophat", "label": "Williston", "say": "Follow the rules." },
          { "k": "fig", "x": 480, "y": 400, "pose": "shrug", "hat": "hair", "label": "Corbin", "say": "Look at the context." } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Students think the UCC is only for businesses. Wrong. It covers every sale of goods, between anyone. And the reverse trap: quoting the Restatement as if it were a statute. It persuades. It does not bind.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "fig", "x": 170, "y": 400, "pose": "shrug", "face": "shock", "label": "Student", "say": "UCC = shops only?" },
          { "k": "cross", "x": 290, "y": 300, "r": 40 },
          { "k": "text", "x": 390, "y": 300, "t": "Any sale of goods = UCC", "s": 26, "c": "green" },
          { "k": "text", "x": 390, "y": 350, "t": "Restatement is NOT a statute", "s": 24, "c": "red" } ] },
      { "clear": true,
        "say": "Let's recap. A contract is a promise the law enforces. Common law for services and land, with the Restatement as a persuasive guide. UCC Article 2 for goods, meaning movable things. Mixed deals are rated P G. And always check for merchants. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§1: a promise the law will enforce", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "Common law: Restatement persuades", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "UCC Art. 2: binding, for goods (2-105)", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "Mixed deals: P·G", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "2-104: is anyone a merchant?", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Which rulebook?", "k": "both",
      "q": "A bakery hires a freelance designer to create a new logo for $3,000. The designer delivers the finished logo as a digital file, and a dispute arises over the fee. Which body of law governs?",
      "o": ["UCC Article 2, because the bakery is a merchant.", "UCC Article 2, because a file was delivered.", "The common law of contracts, because this is a contract for services.", "Neither, because creative work cannot be the subject of a contract."],
      "a": 2,
      "w": "Article 2 covers sales of goods, which UCC section 2-105 defines as movable things. Designing a logo is a service, so the common law applies. Being a business does not pull a service contract into the UCC." },
    { "t": "Which rulebook?", "k": "both",
      "q": "What is the legal status of the Restatement (Second) of Contracts?",
      "o": ["It is persuasive authority that courts often follow, but it is not binding law.", "It is a federal statute that binds every court.", "It is a state statute adopted everywhere except Louisiana.", "It binds only merchants."],
      "a": 0,
      "w": "The Restatement is a scholarly summary of the common law. Courts respect it and often adopt its rules, but it is not a statute. The Restatement suggests. The UCC commands." },
    { "t": "Which rulebook?", "k": "both",
      "q": "A contractor agrees to refinish a homeowner's floors for $7,000: $6,200 for labour and $800 for varnish and other materials. In a state that uses the predominant purpose test, which law governs the contract?",
      "o": ["The UCC governs the varnish and the common law governs the labour.", "The UCC, because goods were supplied.", "The UCC, because the contractor is a professional.", "The common law, because the deal is mainly for services."],
      "a": 3,
      "w": "The predominant purpose test asks what the deal is mainly about, and then applies one rulebook to the whole contract. Here the labour dwarfs the materials, so it is a service contract. Common law governs all of it." },
    { "t": "Which rulebook?", "k": "both",
      "q": "A salon charges a customer $60 for a haircut and $15 for a bottle of shampoo in a single transaction. The shampoo turns out to be defective. In a state that uses the gravamen of the complaint test, which law applies to the customer's claim?",
      "o": ["The common law, because most of the price was for the haircut.", "The UCC, because the complaint is about the goods.", "The common law, because salons provide services.", "Neither, because the amount is too small."],
      "a": 1,
      "w": "The gravamen test looks at what the complaint is actually about. The problem is the shampoo, which is goods, so the UCC applies. Under the predominant purpose test, the answer could well be different." },
    { "t": "Which rulebook?", "k": "both",
      "q": "A retired teacher sells her own used piano to a neighbour. It is the only piano she has ever sold. Which statement is correct?",
      "o": ["The UCC does not apply, because she is not a merchant.", "The UCC applies, and she is a merchant because she sold goods.", "The UCC applies, but the rules reserved for merchants do not apply to her.", "The common law applies, because the piano is used."],
      "a": 2,
      "w": "Article 2 covers every sale of goods, whoever the parties are. But under UCC section 2-104 a merchant is someone who deals in goods of that kind. A one-off seller is not a merchant, so merchant-only rules stay out." }
  ]
};

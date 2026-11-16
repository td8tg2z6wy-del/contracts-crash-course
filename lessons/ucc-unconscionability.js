window.LESSONS = window.LESSONS || {};
window.LESSONS["ucc-unconscionability"] = {
  "id": "ucc-unconscionability",
  "title": "Unconscionability (2-302)",
  "track": "ucc",
  "sections": ["§2-302"],
  "scenes": [
    { "title": "Unconscionability (2-302)", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: unconscionability under the UCC.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Too unfair to enforce?", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "hold", "face": "smirk", "hat": "tophat", "label": "Seller", "say": "Sign here." },
          { "k": "fig", "x": 470, "y": 400, "pose": "shrug", "face": "shock", "label": "Buyer", "say": "It costs HOW much?" } ] },
      { "say": "Normally, a deal is a deal, even a bad one. But sometimes a contract for goods is so one-sided that it shocks the conscience. The question today: when will a court refuse to enforce it?",
        "add": [
          { "k": "text", "x": 570, "y": 340, "t": "A deal is a deal...", "s": 22, "w": 160 },
          { "k": "text", "x": 570, "y": 410, "t": "...usually.", "s": 26, "c": "red" } ] },
      { "clear": true,
        "say": "Quick reminder: the UCC covers only sales of goods. The common law polices shocking bargains through Restatement section 208. For goods, UCC section 2-302 does the same job. In fact, section 2-302 came first, and the Restatement borrowed from it.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Common law says...", "s": 28 },
          { "k": "text", "x": 60, "y": 195, "t": "Restatement §208: a court may refuse to enforce an unconscionable term.", "s": 24, "w": 300 },
          { "k": "line", "x1": 385, "y1": 122, "x2": 385, "y2": 420 },
          { "k": "text", "x": 408, "y": 150, "t": "UCC says...", "s": 28, "c": "blue" },
          { "k": "text", "x": 408, "y": 195, "t": "§2-302: the same power, for sales of goods. This one came first.", "s": 24, "w": 310, "c": "blue" },
          { "k": "icon", "name": "crate", "x": 560, "y": 350, "label": "goods only" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Just one section today: section 2-302. If a contract or clause was unconscionable when it was made, the court may refuse to enforce it, strike the clause, or limit the clause. Picture a scoreboard reading three, zero, two. Three choices, zero for the bully, two kinds of unfairness.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-302", "name": "Unconscionable contract or clause", "rule": "Unconscionable when made? Refuse, strike, or limit.", "hook": "Scoreboard 3-0-2: 3 choices, 0 for the bully, 2 prongs." } ] },
      { "say": "Two details in the same section. First, timing: we judge the deal as of the day it was made. Second, this is a question for the judge, who must let both sides present evidence about the commercial setting. Rhyme time. Judge, not jury. Signing day, not later fury.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§2-302", "name": "When, and who decides", "rule": "Judged at signing, by the judge, after hearing evidence.", "hook": "Judge, not jury. Signing day, not later fury." } ] },
      { "clear": true,
        "say": "Here are the three choices on the board. One: throw out the whole contract. Two: cut out the bad clause and enforce the rest. Three: keep the clause, but trim it down to something fair. The judge picks whatever avoids the unconscionable result.",
        "add": [
          { "k": "icon", "name": "doc", "x": 150, "y": 210, "s": 1.4, "label": "1. Refuse it all" },
          { "k": "cross", "x": 122, "y": 182, "r": 56 },
          { "k": "icon", "name": "doc", "x": 370, "y": 210, "s": 1.4, "label": "2. Strike the clause" },
          { "k": "line", "x1": 342, "y1": 218, "x2": 398, "y2": 218, "c": "red" },
          { "k": "icon", "name": "doc", "x": 590, "y": 210, "s": 1.4, "label": "3. Limit the clause" },
          { "k": "text", "x": 60, "y": 390, "t": "Goal: avoid the unconscionable result.", "s": 28 } ] },
      { "clear": true,
        "say": "How do courts spot it? They use two prongs. Procedural: an unfair process, like hidden terms or no real choice. Substantive: unfair terms, harsh and one-sided. Your acronym is P S. As in, P S, this deal is rotten. Most courts want some of both.",
        "add": [
          { "k": "text", "x": 60, "y": 165, "t": "Procedural", "s": 34 },
          { "k": "text", "x": 60, "y": 202, "t": "unfair PROCESS: hidden terms, no real choice", "s": 22, "w": 400 },
          { "k": "text", "x": 60, "y": 300, "t": "Substantive", "s": 34 },
          { "k": "text", "x": 60, "y": 337, "t": "unfair TERMS: harsh and one-sided", "s": 22 },
          { "k": "text", "x": 560, "y": 250, "t": "P·S", "s": 64, "c": "blue" },
          { "k": "ul", "x": 560, "y": 264, "w": 110, "c": "blue" },
          { "k": "text", "x": 508, "y": 312, "t": "P.S. this deal is rotten", "s": 20, "c": "blue" } ] }
    ] },
    { "title": "The carrot contract", "beats": [
      { "say": "Campbell Soup and Wentz. A farmer agreed to sell his special carrots to Campbell at thirty dollars a ton. Then the market price shot up to ninety. The farmer sold elsewhere, and Campbell asked the court to order him to hand over the carrots.",
        "add": [
          { "k": "icon", "name": "carrot", "x": 105, "y": 165, "s": 1.2 },
          { "k": "text", "x": 170, "y": 160, "t": "Contract: $30 a ton", "s": 28 },
          { "k": "text", "x": 170, "y": 196, "t": "Market: $90 a ton", "s": 26, "c": "red" },
          { "k": "fig", "x": 150, "y": 400, "pose": "shrug", "hat": "cap", "label": "Farmer", "say": "Sold elsewhere." },
          { "k": "fig", "x": 400, "y": 400, "pose": "pointL", "face": "flat", "hat": "tophat", "label": "Campbell", "say": "Hand them over!" } ] },
      { "say": "Campbell lost. The carrots were unique enough for specific performance, but the form contract was too lopsided. Campbell could refuse carrots, yet the farmer could not sell them to anyone else without permission. Too hard a bargain for a court of conscience to help. This older case inspired section 2-302.",
        "add": [
          { "k": "stamp", "x": 520, "y": 150, "t": "TOO HARD A BARGAIN", "s": 20, "c": "red" },
          { "k": "text", "x": 522, "y": 318, "t": "Campbell Soup v. Wentz", "s": 20, "c": "blue" },
          { "k": "text", "x": 522, "y": 350, "t": "Equity will not help the bully.", "s": 20, "w": 200 } ] }
    ] },
    { "title": "The overpriced freezer", "beats": [
      { "say": "Frostifresh and Reynoso. A door-to-door salesman sold a fridge-freezer to a Spanish-speaking couple. He pitched it in Spanish, but the contract was in English and nobody translated it. The price, with credit charges, was over eleven hundred dollars. The seller had paid three hundred and forty-eight.",
        "add": [
          { "k": "box", "x": 78, "y": 122, "w": 52, "h": 88 },
          { "k": "line", "x1": 78, "y1": 152, "x2": 130, "y2": 152 },
          { "k": "text", "x": 155, "y": 160, "t": "Price: over $1,100", "s": 28, "c": "red" },
          { "k": "text", "x": 155, "y": 196, "t": "Seller's cost: $348", "s": 26 },
          { "k": "fig", "x": 150, "y": 400, "pose": "hold", "face": "smirk", "hat": "tophat", "label": "Salesman", "say": "Firme aquí." },
          { "k": "fig", "x": 400, "y": 400, "pose": "shrug", "face": "flat", "label": "Reynoso", "say": "¿En inglés?" } ] },
      { "say": "The court applied section 2-302. Hidden terms, plus a price more than triple the cost: procedural and substantive. It refused to enforce the price term. But the seller did not leave empty-handed. On appeal, it was limited to its cost plus a reasonable profit and charges.",
        "add": [
          { "k": "stamp", "x": 520, "y": 150, "t": "PRICE TERM STRUCK", "s": 20, "c": "red" },
          { "k": "text", "x": 522, "y": 318, "t": "Frostifresh v. Reynoso", "s": 20, "c": "blue" },
          { "k": "text", "x": 522, "y": 350, "t": "Seller gets a fair amount, no more.", "s": 20, "w": 200 } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Unconscionability is not a rescue from a bad bargain. Paying too much is not enough, and neither is a market that moved after signing. Look at the deal on the day it was made, and look for both prongs.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "text", "x": 60, "y": 190, "t": "Bad bargain ≠ unconscionable", "s": 30 },
          { "k": "fig", "x": 170, "y": 400, "pose": "up", "face": "sad", "label": "Buyer", "say": "Prices changed!" },
          { "k": "fig", "x": 400, "y": 400, "pose": "hips", "face": "flat", "hat": "wig", "label": "Judge", "say": "Too late." },
          { "k": "icon", "name": "clock", "x": 610, "y": 320, "s": 1.3, "label": "Test it at signing" } ] },
      { "clear": true,
        "say": "Let's recap. For goods, section 2-302 lets a judge refuse a contract, strike a clause, or limit it. Test the deal at the time it was made. Look for P S: unfair process and unfair terms. Campbell: too hard a bargain. Frostifresh: the price term fell. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§2-302: refuse, strike, or limit", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "Judged at signing, by the judge", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "P·S: unfair process + unfair terms", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "Campbell Soup: too hard a bargain", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "Frostifresh: price term not enforced", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Unconscionability", "k": "ucc",
      "q": "A court finds that a repossession clause in a contract for the sale of a tractor was unconscionable when the contract was made. Under UCC §2-302, which of these is NOT one of the court's options?",
      "o": ["Refuse to enforce the whole contract.", "Enforce the rest of the contract without the clause.", "Limit the clause so that it does not produce an unconscionable result.", "Order the seller to pay punitive damages to the buyer."],
      "a": 3,
      "w": "Section 2-302 gives the court three choices: refuse the contract, strike the clause, or limit the clause. It is a shield, not a sword. Nothing in it awards punitive damages." },
    { "t": "Unconscionability", "k": "ucc",
      "q": "Under UCC §2-302, who decides whether a clause is unconscionable, and as of what moment?",
      "o": ["The judge, looking at the time the contract was made.", "The jury, looking at the time of trial.", "The judge, looking at the time of the breach.", "The jury, looking at the time the contract was made."],
      "a": 0,
      "w": "Section 2-302 makes unconscionability a matter of law for the court, tested at the time the contract was made. Judge, not jury. Signing day, not later fury. The parties do get to offer evidence of the commercial setting." },
    { "t": "Unconscionability", "k": "ucc",
      "q": "A store sells a generator to a contractor for $4,000, a fair market price, after ordinary negotiation. Six months later a new model comes out and the market price of the old one falls to $1,500. The contractor, who still owes $3,000, says the price is unconscionable. Is it?",
      "o": ["Yes, because the price is now more than double the market value.", "Yes, because the contractor has less bargaining power than the store.", "No, because unconscionability is tested when the contract was made, and the deal was fair then.", "No, because the UCC never lets a court review a price term."],
      "a": 2,
      "w": "Section 2-302 asks whether the term was unconscionable at the time it was made. A market that moves afterwards does not turn a fair deal into an unconscionable one. Note that courts can review price terms, as Frostifresh shows." },
    { "t": "Unconscionability", "k": "both",
      "q": "How does UCC §2-302 relate to the common-law rule in Restatement §208?",
      "o": ["§2-302 applies to every contract, and §208 applies only to goods.", "They give courts essentially the same power; §2-302 covers sales of goods and §208 covers other contracts.", "§208 lets a court refuse enforcement, but §2-302 only allows damages.", "They conflict, so a court must choose whichever favours the seller."],
      "a": 1,
      "w": "The two rules are twins. Section 2-302 governs sales of goods, and Restatement section 208, which was modelled on it, does the same job for other contracts. Both let a court refuse or limit an unconscionable term." },
    { "t": "Unconscionability", "k": "ucc",
      "q": "A salesman rushes a buyer through a sofa contract, covering the page with his hand and saying, \"That's just the usual stuff.\" The hidden text is in tiny print. Which kind of unconscionability do these facts mainly show?",
      "o": ["Procedural, because the problem lies in how the bargain was made.", "Substantive, because the terms are hidden.", "Neither, because the buyer signed the contract.", "Substantive, because sofas are consumer goods."],
      "a": 0,
      "w": "Procedural unconscionability is about an unfair process: hidden terms, pressure, and no real choice. Substantive unconscionability is about the terms themselves being harsh. Remember P S, and that most courts look for some of each under section 2-302." }
  ]
};

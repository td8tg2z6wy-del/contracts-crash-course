window.LESSONS = window.LESSONS || {};
window.LESSONS["unconscionability"] = {
  "id": "unconscionability",
  "title": "Unconscionability",
  "track": "cl",
  "sections": ["§208"],
  "scenes": [
    { "title": "Unconscionability", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: unconscionability. A long word for a short idea.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Too unfair to enforce?", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "hips", "face": "smirk", "hat": "tophat", "label": "Seller", "say": "Sign here." },
          { "k": "fig", "x": 470, "y": 400, "pose": "sad", "face": "sad", "label": "Buyer", "say": "All forty pages?" } ] },
      { "say": "Courts do not normally ask whether a deal is fair. A bad bargain is still a bargain. But a few deals are so lopsided that they shock the conscience, and a court will not lend its hand to enforce them.",
        "add": [
          { "k": "text", "x": 60, "y": 195, "t": "shocks the conscience", "s": 28, "c": "red" },
          { "k": "icon", "name": "scale", "x": 650, "y": 170 } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "One Restatement section today. Section 208. If a contract or a term was unconscionable when it was made, a court may refuse to enforce it. Picture the number. Two, oh, eight: two parties, zero choice for one of them, and the other one ate the lot.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§208", "name": "Unconscionable terms", "rule": "Unconscionable when made? The court may refuse it.", "hook": "2-0-8: two parties, zero choice, one side ATE the lot." } ] },
      { "say": "Courts split the idea into two parts. Procedural unconscionability is a flaw in how the deal was made: no real choice, no real understanding. Substantive unconscionability is a flaw in the terms themselves: wildly one-sided. Your one-liner: sneaky how, nasty what.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "2 PARTS", "name": "Procedural + substantive", "rule": "Procedural = unfair process. Substantive = unfair terms.", "hook": "Sneaky HOW, nasty WHAT." } ] },
      { "clear": true,
        "say": "Most courts want some of both, often on a sliding scale. The nastier the terms, the less sneakiness you need to show, and the other way round.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Most courts want BOTH", "s": 32 },
          { "k": "text", "x": 60, "y": 205, "t": "unfair PROCESS + unfair TERMS", "s": 30, "c": "blue" },
          { "k": "text", "x": 60, "y": 250, "t": "Sliding scale: more of one, less of the other", "s": 24 } ] },
      { "say": "Two more points from section 208. Timing: the deal is judged as of the moment it was made, not with hindsight. And remedy: the court may refuse the whole contract, strike the bad term, or limit that term to avoid an unfair result.",
        "add": [
          { "k": "icon", "name": "clock", "x": 100, "y": 345 },
          { "k": "text", "x": 160, "y": 335, "t": "Judged when the deal was MADE", "s": 26 },
          { "k": "text", "x": 160, "y": 377, "t": "Court may: refuse · strike · limit", "s": 26, "c": "green" } ] }
    ] },
    { "title": "Warning signs", "beats": [
      { "say": "How do you spot one? Look for warning signs, and here is your acronym. When a deal is far too plush for one side, check P, L, U, S, H. Price far too high. Language barrier. Unequal bargaining power. Surprise that is unfair. Hidden fine print.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "P · Price far too high", "s": 28 },
          { "k": "text", "x": 60, "y": 205, "t": "L · Language barrier", "s": 28 },
          { "k": "text", "x": 60, "y": 260, "t": "U · Unequal bargaining power", "s": 28 },
          { "k": "text", "x": 60, "y": 315, "t": "S · Surprise that is unfair", "s": 28 },
          { "k": "text", "x": 60, "y": 370, "t": "H · Hidden fine print", "s": 28 },
          { "k": "text", "x": 540, "y": 280, "t": "PLUSH", "s": 56, "c": "blue" },
          { "k": "ul", "x": 540, "y": 294, "w": 140, "c": "blue" } ] },
      { "clear": true,
        "say": "No single sign decides it. Courts weigh them all together. But one is a favourite: a nasty term buried deep in the fine print, like a ten thousand dollar fee on page forty that no customer would ever expect.",
        "add": [
          { "k": "icon", "name": "doc", "x": 130, "y": 230, "s": 1.6, "label": "Page 40" },
          { "k": "text", "x": 240, "y": 200, "t": "\"...plus a $10,000 fee\"", "s": 28, "c": "red" },
          { "k": "text", "x": 240, "y": 252, "t": "= unfair surprise", "s": 32 },
          { "k": "text", "x": 240, "y": 300, "t": "Weigh ALL the signs together.", "s": 22 } ] }
    ] },
    { "title": "The loans that kept coming", "beats": [
      { "say": "First case. The Brantleys, a couple in Arkansas with shaky income, borrowed from a high-interest lender. When they fell behind, the lender offered a bigger loan, and then another, secured by their home. Then it moved to foreclose.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Loan after loan, secured by their home", "s": 26 },
          { "k": "fig", "x": 150, "y": 400, "pose": "hips", "face": "smirk", "hat": "tophat", "label": "Gulfco", "say": "One more loan?" },
          { "k": "fig", "x": 350, "y": 400, "pose": "sad", "face": "sad", "hat": "hair", "label": "The Brantleys", "say": "We can't repay." },
          { "k": "icon", "name": "house", "x": 590, "y": 360, "label": "Home" } ] },
      { "say": "The Arkansas court called the loans unconscionable. It looked at the whole picture, and stressed two things: the gap in bargaining power, and whether the borrowers understood the terms. Lending to people you know cannot repay is predatory. That is Gulfco of Louisiana and Brantley.",
        "add": [
          { "k": "text", "x": 60, "y": 190, "t": "Knew they could not repay = predatory", "s": 22, "c": "red" },
          { "k": "stamp", "x": 520, "y": 195, "t": "UNCONSCIONABLE", "s": 24, "c": "red" },
          { "k": "text", "x": 522, "y": 262, "t": "Gulfco v. Brantley", "s": 22, "c": "blue" } ] }
    ] },
    { "title": "The carrots", "beats": [
      { "say": "Next, carrots. Campbell Soup agreed to buy a farmer's special carrots at thirty dollars a ton. Then the market price shot up to ninety. The Wentz farm sold its crop elsewhere, and Campbell asked a court to order delivery.",
        "add": [
          { "k": "icon", "name": "carrot", "x": 110, "y": 165, "s": 1.2 },
          { "k": "text", "x": 190, "y": 155, "t": "Contract: $30 a ton", "s": 28 },
          { "k": "text", "x": 190, "y": 195, "t": "Market: $90 a ton", "s": 28, "c": "red" },
          { "k": "fig", "x": 200, "y": 400, "pose": "hips", "face": "flat", "hat": "tophat", "label": "Campbell Soup", "say": "Deliver!" },
          { "k": "fig", "x": 410, "y": 400, "pose": "shrug", "face": "flat", "hat": "cap", "label": "Farmer Wentz", "say": "Not at $30." } ] },
      { "say": "The court refused. The carrots were rare enough to justify such an order, but the printed contract was too one-sided. In some situations Campbell could reject carrots, and the farmer still could not sell them to anyone else. Too hard a bargain for a court of conscience.",
        "add": [
          { "k": "stamp", "x": 505, "y": 200, "t": "TOO HARD A BARGAIN", "s": 22, "c": "red" },
          { "k": "text", "x": 507, "y": 265, "t": "Campbell Soup v. Wentz", "s": 21, "c": "blue" },
          { "k": "text", "x": 507, "y": 300, "t": "No court order for a one-sided deal.", "s": 21, "w": 215 } ] }
    ] },
    { "title": "The freezer", "beats": [
      { "say": "Last case. A salesman sold the Reynosos a freezer. The sales talk was in Spanish. The contract was in English, and nobody translated it. The freezer had cost the seller three hundred and forty-eight dollars. The contract price, with credit charges, was over eleven hundred.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Cost to seller: $348", "s": 28 },
          { "k": "text", "x": 60, "y": 190, "t": "Contract price: $1,145.88", "s": 28, "c": "red" },
          { "k": "fig", "x": 160, "y": 400, "pose": "point", "face": "smirk", "label": "Salesman", "say": "It pays for itself!" },
          { "k": "icon", "name": "doc", "x": 280, "y": 330, "s": 0.8 },
          { "k": "fig", "x": 400, "y": 400, "pose": "shrug", "face": "flat", "hat": "hair", "label": "Reynoso", "say": "It's in English..." } ] },
      { "say": "A freezer is goods, so the court used the UCC twin of our rule, section 2-302, which has its own board. Same idea, same result. The price was unconscionable, and the court refused to enforce it, cutting the seller's recovery right down. That is Frostifresh and Reynoso.",
        "add": [
          { "k": "stamp", "x": 505, "y": 200, "t": "PRICE NOT ENFORCED", "s": 22, "c": "red" },
          { "k": "text", "x": 507, "y": 265, "t": "Frostifresh v. Reynoso", "s": 21, "c": "blue" },
          { "k": "text", "x": 507, "y": 300, "t": "Goods, so UCC §2-302: the UCC twin.", "s": 21, "w": 215 } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. A bad deal is not an unconscionable deal. Paying too much, or regretting it later, is not enough. You need a bargain that shocks the conscience, usually with an unfair process and unfair terms, judged on the day it was made.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "text", "x": 60, "y": 185, "t": "Bad deal ≠ unconscionable deal", "s": 28 },
          { "k": "fig", "x": 170, "y": 400, "pose": "sad", "face": "sad", "label": "Buyer", "say": "I overpaid!" },
          { "k": "fig", "x": 430, "y": 400, "pose": "hips", "face": "flat", "hat": "wig", "label": "Judge", "say": "Still a deal." },
          { "k": "stamp", "x": 545, "y": 320, "t": "ENFORCED", "s": 28 } ] },
      { "clear": true,
        "say": "Let's recap. Section 208 lets a court refuse or trim a deal that shocks the conscience. Look for both parts: sneaky how, nasty what. Check the plush warning signs. Remember the loans, the carrots and the freezer. And a merely bad bargain still binds. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§208: no help for shocking deals", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "Procedural + substantive: usually both", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "Warning signs: P·L·U·S·H", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "Loans, carrots, freezer (UCC §2-302)", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "A merely bad bargain still binds", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Unconscionability", "k": "cl",
      "q": "Which of these is the best example of PROCEDURAL unconscionability?",
      "o": ["A price three times the market value.", "A harsh clause in tiny print, never explained to a signer who could not read the language of the contract.", "A clause that lets only one side cancel.", "A late fee ten times larger than any real loss."],
      "a": 1,
      "w": "Procedural unconscionability is about how the deal was made: hidden terms, no real choice, no real understanding. The other three options are about what the terms say, which is substantive. Sneaky how, nasty what." },
    { "t": "Unconscionability", "k": "both",
      "q": "A door-to-door seller sells a sound system that cost him $300 to a couple for $1,500 on credit. The sales talk was in Portuguese, the only language the couple reads. The contract was in English and was never translated. The seller sues for the full price. What is the couple's best argument?",
      "o": ["The contract is void because consumer sales must be in the buyer's language.", "The seller made a mutual mistake about the price.", "The price term is unconscionable, so under UCC §2-302 the court may refuse to enforce it.", "The seller gave no consideration."],
      "a": 2,
      "w": "This is the freezer case, Frostifresh and Reynoso, in new clothes. A sound system is goods, so the rule is UCC section 2-302, the twin of Restatement section 208. An excessive price plus a language barrier gives both substantive and procedural unfairness." },
    { "t": "Unconscionability", "k": "cl",
      "q": "Two large companies, each advised by lawyers, negotiate a service contract for months. A year later one of them realises it agreed to pay about 15% more than the going rate. Is the contract unconscionable?",
      "o": ["No. A hard bargain between sophisticated parties with real choice is still enforceable.", "Yes, because any price above the market rate is substantively unfair.", "Yes, because the company would not have signed if it had known.", "No, because unconscionability applies only to sales of goods."],
      "a": 0,
      "w": "A bad deal is not an unconscionable deal. There was no unfair process here, and fifteen percent over market does not shock the conscience. Section 208 is a safety valve, not a refund counter." },
    { "t": "Unconscionability", "k": "cl",
      "q": "Under Restatement §208, as of what moment does a court ask whether a contract or term is unconscionable?",
      "o": ["When the lawsuit is filed.", "When the breach happens.", "When the judge hears the case.", "When the contract was made."],
      "a": 3,
      "w": "Section 208 asks whether the term was unconscionable at the time the contract was made. The court does not use hindsight. A fair deal that later turns out badly is just a deal that turned out badly." },
    { "t": "Unconscionability", "k": "cl",
      "q": "A court finds that one clause in an otherwise fair contract is unconscionable. Under Restatement §208, which of these may the court do?",
      "o": ["Nothing. A signed contract must be enforced as written.", "Enforce the rest of the contract without the unconscionable clause.", "Award punitive damages against the party who drafted the clause.", "Rewrite the entire contract on terms the judge thinks are fair."],
      "a": 1,
      "w": "Section 208 gives the court three tools. It may refuse to enforce the whole contract, enforce the rest without the bad term, or limit the term so the result is not unconscionable. Refuse, strike, or limit." }
  ]
};

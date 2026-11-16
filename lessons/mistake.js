window.LESSONS = window.LESSONS || {};
window.LESSONS["mistake"] = {
  "id": "mistake",
  "title": "Mistake",
  "track": "cl",
  "sections": ["§151", "§152", "§153", "§154"],
  "scenes": [
    { "title": "Mistake", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: mistake.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Oops. Can I undo the deal?", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "up", "face": "shock", "label": "Seller", "say": "It was worth WHAT?" },
          { "k": "fig", "x": 470, "y": 400, "pose": "hold", "face": "smirk", "label": "Buyer", "say": "A deal's a deal." } ] },
      { "say": "Promises must be kept, even the ones you regret. But sometimes a deal is built on a fact that was simply wrong. Then the law asks two things. Was it a real mistake? And who should carry the loss?",
        "add": [
          { "k": "text", "x": 60, "y": 195, "t": "Real mistake? Who carries the loss?", "s": 28, "c": "red" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Four sections. First, section 151 defines a mistake: a belief that is not in accord with the facts. Not a bad prediction. Not buyer's remorse. Picture the number. One-five-one reads the same both ways, like a mirror. A mistake is a belief that fails to mirror the facts.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§151", "name": "What a mistake is", "rule": "A belief that does not match the facts at signing.", "hook": "1-5-1 is a mirror: belief should mirror the facts." } ] },
      { "say": "Section 152, mutual mistake. Both parties are wrong about a basic assumption of the deal, and it materially changes the exchange. The hurt party may cancel, unless that party bore the risk. The formula: mutual, plus basic, plus material, equals voidable. One-five-two: the mistake belongs to both of you.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§152", "name": "Mutual mistake", "rule": "Mutual + Basic + Material = Voidable.", "hook": "One-five-two: the mistake belongs to both of you." } ] },
      { "clear": true,
        "say": "Section 153, unilateral mistake. Only one side is wrong, so escape is harder. You need everything from before, plus one more thing. Either the other side knew or should have known of the mistake, or enforcing the deal would be unconscionable. One-five-three: the mistake is just on me.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§153", "name": "Unilateral mistake", "rule": "One side wrong, AND they knew, or it's unconscionable.", "hook": "One-five-three: the mistake is just on me." } ] },
      { "say": "Section 154 shuts the door. You bear the risk in three ways, and your acronym is C, A, R. The Contract puts the risk on you. You were Aware that you did not know, and went ahead anyway. Or it is Reasonable for the court to put it on you.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§154", "name": "Who bears the risk", "rule": "Risk is yours by Contract, Awareness, or Reasonableness.", "hook": "C·A·R: who is driving the risk?" } ] }
    ] },
    { "title": "Four quick examples", "beats": [
      { "say": "Example one. A seller and a buyer both believe a painting is a cheap copy, and it sells for one hundred dollars. It is an original, worth a fortune. Both were wrong about a basic fact. Unless the seller bore the risk, the seller can undo the sale.",
        "add": [
          { "k": "box", "x": 70, "y": 122, "w": 80, "h": 62 },
          { "k": "text", "x": 175, "y": 150, "t": "Both think: a cheap copy. $100.", "s": 26 },
          { "k": "text", "x": 175, "y": 188, "t": "Really: an original", "s": 26, "c": "red" },
          { "k": "fig", "x": 190, "y": 400, "pose": "shrug", "label": "Seller", "say": "Just a copy." },
          { "k": "fig", "x": 400, "y": 400, "pose": "hold", "label": "Buyer", "say": "Yes, a copy." },
          { "k": "stamp", "x": 545, "y": 300, "t": "VOIDABLE", "s": 26, "c": "green" },
          { "k": "text", "x": 547, "y": 368, "t": "§152: mutual", "s": 22, "c": "blue" } ] },
      { "clear": true,
        "say": "Example two. A builder means to bid two hundred thousand dollars, drops a zero, and bids twenty thousand. The owner spots the obvious slip and snaps it up. Only one side was mistaken, but the other side knew. The builder can get out.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Meant: $200,000   Wrote: $20,000", "s": 28 },
          { "k": "text", "x": 60, "y": 190, "t": "One side wrong, but the other KNEW", "s": 24, "c": "red" },
          { "k": "fig", "x": 190, "y": 400, "pose": "up", "face": "shock", "hat": "hardhat", "label": "Builder", "say": "I dropped a zero!" },
          { "k": "fig", "x": 400, "y": 400, "pose": "hips", "face": "smirk", "hat": "tophat", "label": "Owner", "say": "Accepted!" },
          { "k": "stamp", "x": 545, "y": 300, "t": "VOIDABLE", "s": 26, "c": "green" },
          { "k": "text", "x": 547, "y": 368, "t": "§153: unilateral", "s": 22, "c": "blue" } ] },
      { "clear": true,
        "say": "Example three. A buyer signs a contract that says, the buyer takes all risk about whether this painting is genuine. It turns out to be a fake. Too bad. The contract put the risk on the buyer. That is the C in car.",
        "add": [
          { "k": "icon", "name": "doc", "x": 100, "y": 170 },
          { "k": "text", "x": 160, "y": 160, "t": "\"Buyer takes all risk.\"", "s": 26 },
          { "k": "text", "x": 160, "y": 198, "t": "C = Contract says so. No escape.", "s": 24, "c": "red" } ] },
      { "say": "Example four. A woman finds a pretty stone. She has no idea what it is, and sells it for a dollar anyway. It is a diamond. She knew that she did not know, and she gambled. That is the A in car. No escape.",
        "add": [
          { "k": "circle", "x": 100, "y": 310, "r": 22 },
          { "k": "text", "x": 160, "y": 300, "t": "\"No idea what this stone is. $1.\"", "s": 26 },
          { "k": "text", "x": 160, "y": 338, "t": "A = Aware you didn't know. No escape.", "s": 24, "c": "red" } ] }
    ] },
    { "title": "Rose the cow", "beats": [
      { "say": "The famous cow. Walker agreed to sell Rose the Second of Aberlone to Sherwood for about eighty dollars. Both men believed Rose could not breed, so she was priced as beef. Before delivery, Walker learned Rose was expecting a calf, and worth roughly ten times more.",
        "add": [
          { "k": "icon", "name": "cow", "x": 105, "y": 160, "s": 1.1 },
          { "k": "text", "x": 180, "y": 152, "t": "Rose: both think she's barren", "s": 28 },
          { "k": "text", "x": 180, "y": 192, "t": "Price: about $80, as beef", "s": 28 },
          { "k": "fig", "x": 200, "y": 400, "pose": "hold", "hat": "tophat", "label": "Walker (seller)", "say": "She can't breed." },
          { "k": "fig", "x": 420, "y": 400, "pose": "up", "hat": "cap", "label": "Sherwood", "say": "I'll take her." } ] },
      { "say": "Walker refused to hand her over, and the court let him cancel. The mistake went to the very nature of the thing sold. A breeding cow is a different creature from a beef cow. Not merely a mistake about value. That is Sherwood and Walker.",
        "add": [
          { "k": "stamp", "x": 535, "y": 215, "t": "SALE UNDONE", "s": 26, "c": "green" },
          { "k": "text", "x": 537, "y": 282, "t": "Sherwood v. Walker", "s": 22, "c": "blue" },
          { "k": "text", "x": 537, "y": 318, "t": "Barren cow ≠ breeding cow", "s": 21, "w": 200 } ] }
    ] },
    { "title": "The Madoff account", "beats": [
      { "say": "Compare a divorce. A husband and wife divided their property in a settlement. He kept an investment account valued at five point four million dollars. Years later, the world learned that the man running it, Bernard Madoff, was running a giant fraud. The account was almost worthless.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Divorce deal: he keeps the account", "s": 28 },
          { "k": "text", "x": 60, "y": 190, "t": "Stated value: $5.4 million", "s": 26, "c": "green" },
          { "k": "fig", "x": 190, "y": 400, "pose": "hold", "label": "Husband", "say": "I'll keep this one." },
          { "k": "fig", "x": 400, "y": 400, "pose": "stand", "hat": "bun", "label": "Wife", "say": "Fine by me." } ] },
      { "say": "He asked the court to redo the deal for mutual mistake. No. The account existed when they signed, and he could draw money from it. What changed was its value, later. A mistake concerns the facts at signing, not how things turn out. That is Simkin and Blank.",
        "add": [
          { "k": "stamp", "x": 535, "y": 205, "t": "NO MISTAKE", "s": 28, "c": "red" },
          { "k": "text", "x": 537, "y": 272, "t": "Simkin v. Blank", "s": 22, "c": "blue" },
          { "k": "text", "x": 537, "y": 308, "t": "The account existed. Its value changed later.", "s": 21, "w": 200 } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. A mistake is about a fact that exists when you sign. A wrong guess about the future, or about what something will be worth, is just the risk of doing business. People make deals precisely because they disagree about value.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "text", "x": 60, "y": 185, "t": "Bad prediction ≠ mistake", "s": 28 },
          { "k": "fig", "x": 170, "y": 400, "pose": "sad", "face": "sad", "label": "Buyer", "say": "The price fell!" },
          { "k": "fig", "x": 430, "y": 400, "pose": "hips", "face": "flat", "hat": "wig", "label": "Judge", "say": "That was a guess." },
          { "k": "stamp", "x": 560, "y": 320, "t": "STILL BOUND", "s": 24 } ] },
      { "clear": true,
        "say": "Let's recap. A mistake is a belief that does not match the facts at signing. Mutual, plus basic, plus material, equals voidable. A one-sided mistake needs the other side to have known, or an unconscionable result. Risk on you, no escape. Rose yes, Madoff no. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§151: belief ≠ facts, at signing", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§152: Mutual + Basic + Material = Voidable", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "§153: one side wrong, and they knew", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "§154: risk on you (C·A·R)? No escape", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "Rose: voidable. Madoff account: not", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Mistake", "k": "cl",
      "q": "A seller and a buyer sign a contract for a plot of land. Both believe a house can legally be built on it; that is the whole reason for the sale. Unknown to either, the land had been declared protected wetland a year earlier, and nothing can be built there. The contract says nothing about the risk. What is the buyer's best argument?",
      "o": ["Unilateral mistake, because only the buyer is hurt.", "Mutual mistake: both were wrong about a basic assumption that materially affects the exchange.", "The contract fails for lack of consideration.", "There is no argument. A signed contract is final."],
      "a": 1,
      "w": "This is section 152. Both parties shared a false belief about an existing fact, it was a basic assumption of the deal, and it changes the exchange dramatically. Mutual plus basic plus material equals voidable, so long as the buyer did not bear the risk." },
    { "t": "Mistake", "k": "cl",
      "q": "Which of these is NOT a \"mistake\" as Restatement §151 uses the word?",
      "o": ["A buyer's belief that the shares he is buying will rise in price next year.", "A buyer's belief that the painting in front of him was painted by a famous artist.", "A seller's belief that the cow she is selling cannot have calves.", "A builder's belief that his written bid includes the cost of the roof."],
      "a": 0,
      "w": "Section 151 defines a mistake as a belief not in accord with the facts, meaning facts that exist when the contract is made. A belief about what the market will do next year is a prediction. Bad predictions are not mistakes." },
    { "t": "Mistake", "k": "cl",
      "q": "A subcontractor's bid leaves out an entire floor of wiring because of a spreadsheet error. The bid is 45% lower than every other bid. The general contractor notices, says nothing, and quickly accepts. Can the subcontractor avoid the contract?",
      "o": ["No, because only one party was mistaken.", "No, because a party always bears the risk of its own arithmetic.", "Yes, because any mistake by either party makes a contract void.", "Yes, because the other party knew or had reason to know of the mistake."],
      "a": 3,
      "w": "Section 153 covers unilateral mistake. One side's mistake about a basic assumption with a material effect is enough if the other side knew or should have known of it, or if enforcement would be unconscionable. You may not snap up an offer you know is a slip." },
    { "t": "Mistake", "k": "cl",
      "q": "At an estate sale, a buyer pays $50 for a locked trunk sold \"as is, contents unknown.\" He hopes it holds antiques. It holds old newspapers. Can he avoid the contract for mistake?",
      "o": ["Yes, because he was mistaken about a basic assumption.", "Yes, because the seller was also unaware of the contents.", "No, because he knew he did not know what was inside and bought anyway.", "No, because mistake never applies to sales under $500."],
      "a": 2,
      "w": "Section 154 says a party bears the risk when he knows his knowledge is limited and treats it as good enough. That is conscious ignorance, the A in car. He was not mistaken. He was gambling, and he lost." },
    { "t": "Mistake", "k": "cl",
      "q": "Two business partners split up. Under their agreement, one takes shares that both value at $1 million, using accurate current figures. A year later the company's market collapses and the shares are worth almost nothing. Can that partner undo the agreement for mutual mistake?",
      "o": ["Yes, because both parties were wrong about what the shares were worth.", "No, because a later change in value is not a mistake about the facts at the time of the contract.", "Yes, because the loss is material.", "No, because mistake applies only to sales of goods."],
      "a": 1,
      "w": "A mistake must concern facts as they stood when the contract was made. Here the shares were worth what the parties thought, and then the world changed. As in Simkin and Blank, a later drop in value is a risk, not a mistake." }
  ]
};

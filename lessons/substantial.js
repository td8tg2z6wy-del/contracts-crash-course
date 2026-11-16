window.LESSONS = window.LESSONS || {};
window.LESSONS["substantial"] = {
  "id": "substantial",
  "title": "Substantial Performance",
  "track": "cl",
  "sections": ["§348"],
  "scenes": [
    { "title": "Substantial Performance", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: substantial performance.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Close... but not exact", "s": 32 },
          { "k": "icon", "name": "house", "x": 190, "y": 310, "s": 1.8 },
          { "k": "fig", "x": 420, "y": 400, "pose": "up", "hat": "hardhat", "label": "Builder", "say": "99% done!" },
          { "k": "fig", "x": 620, "y": 400, "pose": "hips", "face": "flat", "hat": "tophat", "label": "Owner", "say": "Not paying." } ] },
      { "say": "A builder finishes your house. It is ninety-nine percent right. One small thing is off. Do you still have to pay? And if so, how much comes off the price? That is today's question.",
        "add": [
          { "k": "text", "x": 60, "y": 195, "t": "Must the owner pay? How much?", "s": 24, "c": "red" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "First, the doctrine, from Jacob and Youngs and Kent. If a party substantially performs, the other side must still pay, minus damages for the defect. Acronym: P, I, P. Purpose served. Innocent mistake. Petty defect. A pip is a tiny seed, and so is the breach.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "CASE", "name": "Jacob & Youngs v. Kent", "rule": "Substantial performance: you must pay, less damages.", "hook": "P·I·P: Purpose served, Innocent mistake, Petty defect." } ] },
      { "say": "Second, section 348, on measuring those damages. Normally, the cost to finish or fix the work. But if that cost is clearly out of proportion to the loss in value, you get only the loss in value. Picture a repair bill climbing: three, four, eight. Is the fix worth it?",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§348", "name": "Measuring the damage", "rule": "Cost to fix, unless clearly out of proportion to the loss.", "hook": "3, 4, 8: a repair bill climbing. Is the fix worth it?" } ] }
    ] },
    { "title": "Close enough?", "beats": [
      { "say": "Here is the rhyme for the day. Close enough gets paid, less the damage made. But only close enough. If the defect defeats the purpose of the contract, that is a material breach, and the other side can refuse to pay and walk away.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Close enough gets paid, less the damage made.", "s": 25, "c": "blue" },
          { "k": "check", "x": 62, "y": 205 }, { "k": "text", "x": 110, "y": 222, "t": "Substantial performance: pay, minus damages", "s": 24 },
          { "k": "cross", "x": 64, "y": 272 }, { "k": "text", "x": 110, "y": 290, "t": "Material breach: the other side may walk", "s": 24 },
          { "k": "icon", "name": "scale", "x": 600, "y": 370, "s": 1.3 } ] },
      { "clear": true,
        "say": "Now the two measures. Cost of completion: what it takes to do the job as promised. Diminution in value: how much less the property is worth. Say the wrong tiles cost eight thousand dollars to replace, but lower the value by only five hundred. Which number?",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "COST OF COMPLETION", "s": 26 },
          { "k": "text", "x": 60, "y": 185, "t": "what it costs to do it right", "s": 22 },
          { "k": "text", "x": 60, "y": 260, "t": "$8,000", "s": 44, "c": "red" },
          { "k": "line", "x1": 385, "y1": 120, "x2": 385, "y2": 300 },
          { "k": "text", "x": 410, "y": 150, "t": "DIMINUTION IN VALUE", "s": 26 },
          { "k": "text", "x": 410, "y": 185, "t": "how much less it is worth", "s": 22 },
          { "k": "text", "x": 410, "y": 260, "t": "$500", "s": 44, "c": "green" },
          { "k": "text", "x": 60, "y": 370, "t": "Wrong tiles: which number?", "s": 28 } ] }
    ] },
    { "title": "The wrong pipe", "beats": [
      { "say": "Jacob and Youngs and Kent. A builder finished a country house. The contract said all the pipe must be Reading brand. Some of it, by oversight, was another brand, just as good. By then it was sealed inside the walls. The owner refused to make the last payment.",
        "add": [
          { "k": "text", "x": 60, "y": 140, "t": "Jacob & Youngs v. Kent", "s": 22, "c": "blue" },
          { "k": "icon", "name": "house", "x": 140, "y": 300, "s": 1.5 },
          { "k": "icon", "name": "pipe", "x": 290, "y": 310, "c": "red", "label": "Not Reading!" },
          { "k": "fig", "x": 450, "y": 400, "pose": "shrug", "hat": "hardhat", "label": "Builder", "say": "Same quality!" },
          { "k": "fig", "x": 640, "y": 400, "pose": "hips", "face": "flat", "hat": "tophat", "label": "Kent", "say": "Rip it out." } ] },
      { "clear": true,
        "say": "Judge Cardozo held for the builder. The slip was innocent and trivial. Tearing out the walls would cost a fortune and gain nothing. So the owner must pay, less the difference in value. And that difference was close to zero.",
        "add": [
          { "k": "stamp", "x": 60, "y": 150, "t": "BUILDER GETS PAID", "s": 28, "c": "green" },
          { "k": "text", "x": 60, "y": 220, "t": "Innocent + trivial deviation", "s": 26 },
          { "k": "text", "x": 60, "y": 265, "t": "Damages = difference in value", "s": 26 },
          { "k": "text", "x": 60, "y": 310, "t": "NOT the cost of tearing out the walls", "s": 24, "c": "red" },
          { "k": "fig", "x": 630, "y": 400, "pose": "point", "hat": "wig", "label": "Cardozo, J.", "say": "No forfeiture." } ] },
      { "clear": true,
        "say": "The dissent was not impressed. The owner bargained for Reading pipe and was entitled to get it, whatever his reasons. The builder was careless: he never checked the later deliveries. Why should a court rewrite the deal for the party who broke it?",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "THE DISSENT", "s": 28, "c": "red" },
          { "k": "fig", "x": 170, "y": 400, "pose": "hips", "face": "flat", "hat": "wig", "label": "Dissent", "say": "A deal is a deal." },
          { "k": "text", "x": 340, "y": 210, "t": "He bargained for Reading pipe", "s": 24, "w": 380 },
          { "k": "text", "x": 340, "y": 280, "t": "The builder was careless", "s": 24, "w": 380 },
          { "k": "text", "x": 340, "y": 350, "t": "Why reward the breacher?", "s": 24, "w": 380 } ] }
    ] },
    { "title": "Gravel and coal", "beats": [
      { "say": "Groves and John Wunder Company. A company leased land to take gravel, and promised to leave it level. It took the best gravel and deliberately left the land a mess. Levelling would cost sixty thousand dollars. The levelled land would be worth only about twelve thousand.",
        "add": [
          { "k": "text", "x": 60, "y": 140, "t": "Groves v. John Wunder Co.", "s": 22, "c": "blue" },
          { "k": "icon", "name": "truck", "x": 120, "y": 270, "label": "Gravel" },
          { "k": "text", "x": 210, "y": 195, "t": "Promise: leave the land level", "s": 24 },
          { "k": "text", "x": 210, "y": 265, "t": "Cost to level: $60,000", "s": 27, "c": "red" },
          { "k": "text", "x": 210, "y": 315, "t": "Level land worth: $12,160", "s": 27 },
          { "k": "fig", "x": 650, "y": 400, "pose": "shrug", "face": "smirk", "hat": "hardhat", "label": "Wunder", "say": "Not worth it." } ] },
      { "say": "The court awarded the full sixty thousand: cost of completion. The breach was wilful, so there was no sympathy for the breacher. The owner was promised level land, and he gets the price of level land.",
        "add": [
          { "k": "stamp", "x": 60, "y": 385, "t": "COST OF COMPLETION: $60,000", "s": 24, "c": "green" },
          { "k": "text", "x": 445, "y": 393, "t": "wilful breach", "s": 22, "c": "red" } ] },
      { "clear": true,
        "say": "Now Peevyhouse and Garland Coal. A farm couple let a coal company strip-mine their land. The company promised to restore it afterwards, and did not. Restoration would cost twenty-nine thousand dollars. It would add only three hundred dollars to the farm's value.",
        "add": [
          { "k": "text", "x": 60, "y": 140, "t": "Peevyhouse v. Garland Coal", "s": 22, "c": "blue" },
          { "k": "icon", "name": "house", "x": 120, "y": 270, "label": "The farm" },
          { "k": "text", "x": 210, "y": 195, "t": "Promise: restore the land after mining", "s": 24 },
          { "k": "text", "x": 210, "y": 265, "t": "Cost to restore: $29,000", "s": 27, "c": "red" },
          { "k": "text", "x": 210, "y": 315, "t": "Value added: $300", "s": 27 },
          { "k": "fig", "x": 650, "y": 400, "pose": "shrug", "face": "smirk", "hat": "hardhat", "label": "Garland Coal", "say": "We'll pass." } ] },
      { "say": "The Oklahoma court gave them three hundred dollars. It called the restoration promise incidental to the lease, and said the full cost would be economic waste. So: diminution in value.",
        "add": [
          { "k": "stamp", "x": 60, "y": 385, "t": "DIMINUTION IN VALUE: $300", "s": 24, "c": "red" },
          { "k": "text", "x": 420, "y": 393, "t": "\"economic waste\"", "s": 22 } ] },
      { "clear": true,
        "say": "Critics have never forgiven it. Economic waste is about tearing down a finished building, and nothing was being torn down here. The Peevyhouses insisted on that promise before they would sign. And the breach was deliberate. The company kept the coal, and the savings.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "THE CRITICISM", "s": 28, "c": "red" },
          { "k": "text", "x": 60, "y": 205, "t": "Nothing was being torn down", "s": 24 },
          { "k": "text", "x": 60, "y": 255, "t": "The farmers insisted on that promise", "s": 24 },
          { "k": "text", "x": 60, "y": 305, "t": "The breach was deliberate", "s": 24 },
          { "k": "text", "x": 60, "y": 355, "t": "The company kept the coal AND the savings", "s": 24 },
          { "k": "fig", "x": 650, "y": 400, "pose": "sad", "face": "sad", "hat": "cap", "label": "Peevyhouse" } ] },
      { "clear": true,
        "say": "How do you reconcile them? Ask three things. Was the breach wilful? Was the promise central to the deal, or a side term? And is the cost wildly out of proportion to the benefit? Wilful and central points to cost of completion.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Which measure? Ask:", "s": 30 },
          { "k": "text", "x": 60, "y": 210, "t": "1. Wilful breach?", "s": 26 },
          { "k": "text", "x": 60, "y": 258, "t": "2. Central promise, or a side term?", "s": 26 },
          { "k": "text", "x": 60, "y": 306, "t": "3. Cost wildly out of proportion?", "s": 26 },
          { "k": "text", "x": 60, "y": 375, "t": "Wilful + central = cost of completion", "s": 24, "c": "green" },
          { "k": "text", "x": 60, "y": 415, "t": "Innocent + wasteful = loss in value", "s": 24, "c": "green" } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Substantial performance does not excuse the breach. The builder still pays damages. And this is the common law rule, for services and construction. Sales of goods use a stricter rule, perfect tender, which you will meet on the UCC track.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "text", "x": 60, "y": 195, "t": "Substantial performance is still a breach", "s": 26 },
          { "k": "text", "x": 60, "y": 240, "t": "The builder still pays damages", "s": 24 },
          { "k": "icon", "name": "crate", "x": 110, "y": 345 },
          { "k": "text", "x": 180, "y": 340, "t": "Goods? Stricter rule: PERFECT TENDER", "s": 24, "c": "red" },
          { "k": "text", "x": 180, "y": 375, "t": "(see the UCC track)", "s": 22 } ] },
      { "clear": true,
        "say": "Let's recap. Close enough gets paid, less the damage made. A material breach lets the other side walk. Innocent and trivial means loss in value, not tearing down walls. Section 348: cost to fix, unless clearly out of proportion. And remember Groves against Peevyhouse. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "Substantial performance: pay, less damages", "s": 25 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "Material breach: the other side may walk", "s": 25 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "Jacob & Youngs: innocent + trivial = loss in value", "s": 25 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "§348: cost to fix, unless clearly disproportionate", "s": 25 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "Groves $60,000 (wilful) v. Peevyhouse $300", "s": 25 } ] }
    ] }
  ],
  "mini": [
    { "t": "Substantial Performance", "k": "cl",
      "q": "A contract for a new house calls for \"Volta brand\" wiring. By an honest oversight the electrician installs another brand of identical quality. Replacing it would mean opening every wall at a cost of $40,000. The house's value is unaffected. The owner refuses to pay the final $30,000. What result?",
      "o": ["The owner owes nothing, because the contract was not performed exactly.", "The builder must replace the wiring before being paid anything.", "The owner must pay, less the difference in value, which is little or nothing.", "The owner must pay, but may deduct the $40,000 cost of replacement."],
      "a": 2,
      "w": "This is Jacob and Youngs and Kent with wires for pipes. The deviation was innocent and trivial, so the builder substantially performed. Because the cost of replacement is grossly out of proportion, damages are the difference in value." },
    { "t": "Substantial Performance", "k": "cl",
      "q": "When one party to a construction contract has substantially performed, the other party:",
      "o": ["Must still perform, but may recover damages for the defects.", "May treat the contract as ended and pay nothing.", "Must pay the full price with no deduction.", "May demand that the work be redone at any cost."],
      "a": 0,
      "w": "Close enough gets paid, less the damage made. Substantial performance keeps the other side's duty to pay alive, but it does not erase the breach. Only a material breach lets the other party refuse to perform." },
    { "t": "Substantial Performance", "k": "cl",
      "q": "A company leases land to extract gravel and promises to leave it graded level. To save money, it deliberately leaves the land rutted. Grading would cost $60,000 and the graded land would be worth $12,000. Under Groves v. John Wunder Co., what does the landowner recover?",
      "o": ["Nothing, because the land has little value.", "$12,000, the value of the graded land.", "Only nominal damages.", "$60,000, the cost of doing the promised work."],
      "a": 3,
      "w": "Groves awarded the cost of completion. The breach was wilful, and the court would not let a deliberate breacher shelter behind the low value of the land. Compare Peevyhouse, which went the other way." },
    { "t": "Substantial Performance", "k": "cl",
      "q": "In Peevyhouse v. Garland Coal, why did the court limit the farmers to $300?",
      "o": ["Because the farmers had not performed their own side of the lease.", "Because the cost of restoration was grossly out of proportion to the value it would add, and the promise was treated as incidental.", "Because the coal company's breach was innocent.", "Because the lease never mentioned restoring the land."],
      "a": 1,
      "w": "The court called restoration an incidental term and said twenty-nine thousand dollars of work for three hundred dollars of value was economic waste. So it awarded diminution in value. Critics reply that the farmers bargained for that promise and the breach was deliberate." },
    { "t": "Substantial Performance", "k": "cl",
      "q": "A builder walks off the job leaving a house with no roof and no plumbing, then demands the full contract price less a small allowance. Which statement is most accurate?",
      "o": ["This is a material breach, so the owner may withhold payment and treat the contract as ended.", "This is substantial performance, because most of the walls are up.", "The owner must pay in full and sue separately.", "The builder wins, because construction contracts are never forfeited."],
      "a": 0,
      "w": "Substantial performance needs the purpose of the contract to be served, with only a petty defect. A house with no roof fails that test. This is a material breach, and the owner's duty to pay does not come due." }
  ]
};

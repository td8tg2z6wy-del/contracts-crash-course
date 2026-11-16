window.LESSONS = window.LESSONS || {};
window.LESSONS["ucc-buyer"] = {
  "id": "ucc-buyer",
  "title": "Buyer's Remedies",
  "track": "ucc",
  "sections": ["§2-711", "§2-712", "§2-713", "§2-715", "§2-714", "§2-716"],
  "scenes": [
    { "title": "Buyer's Remedies", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: the buyer's remedies under the UCC.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "The seller let me down. Now what?", "s": 30 },
          { "k": "fig", "x": 200, "y": 400, "pose": "sad", "face": "sad", "label": "Buyer", "say": "Where are my goods?" },
          { "k": "fig", "x": 440, "y": 400, "pose": "shrug", "face": "flat", "label": "Seller", "say": "Sorry!" } ] },
      { "say": "A seller might never deliver. Or might deliver goods that are wrong. Either way, the buyer wants to end up where a kept promise would have put them. The UCC gives the buyer a menu to get there.",
        "add": [
          { "k": "box", "x": 560, "y": 290, "w": 150, "h": 110, "c": "blue" },
          { "k": "text", "x": 635, "y": 335, "t": "MENU", "s": 28, "c": "blue", "anchor": "middle" },
          { "k": "text", "x": 635, "y": 375, "t": "§2-711", "s": 24, "anchor": "middle" } ] },
      { "clear": true,
        "say": "Quick reminder: the UCC covers only sales of goods. The common law awards expectation damages: the value of the promised performance, minus what you actually got. The UCC has the same goal, but it hands the buyer ready-made formulas for goods.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Common law says...", "s": 28 },
          { "k": "text", "x": 60, "y": 195, "t": "Expectation damages: put me where performance would have.", "s": 24, "w": 300 },
          { "k": "line", "x1": 385, "y1": 122, "x2": 385, "y2": 420 },
          { "k": "text", "x": 408, "y": 150, "t": "UCC says...", "s": 28, "c": "blue" },
          { "k": "text", "x": 408, "y": 195, "t": "Same goal, with ready-made formulas: cover, market, and more.", "s": 24, "w": 310, "c": "blue" },
          { "k": "icon", "name": "crate", "x": 560, "y": 350, "label": "goods only" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Start with section 2-711, the menu. If the seller fails to deliver, or the buyer rightfully rejects, the buyer may cancel, get back any money paid, and then choose: cover, or market damages. Memory hook: seven eleven, like the convenience store. Walk in and pick your remedy off the shelf.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-711", "name": "The buyer's menu", "rule": "Cancel, get your money back, then cover OR claim market.", "hook": "7-11, the convenience store: pick a remedy off the shelf." } ] },
      { "say": "Section 2-712, cover. The buyer may buy substitute goods, in good faith and without unreasonable delay. Damages are the cover price minus the contract price. Seven-twelve: go and restock your shelves.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§2-712", "name": "Cover", "rule": "Buy substitutes in good faith. Cover price minus contract.", "hook": "Seven-twelve: go and restock your shelves." } ] },
      { "clear": true,
        "say": "Section 2-713, market damages, for the buyer who does not cover. Take the market price at the time the buyer learned of the breach, and subtract the contract price. Thirteen is unlucky: no goods and no cover, so you just get the market gap.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-713", "name": "Market damages", "rule": "No cover? Market price when you LEARNED, minus contract.", "hook": "Unlucky 13: no goods, no cover, just the market gap." } ] },
      { "say": "Section 2-715 adds the extras. Incidental damages are the costs of handling the breach, like inspection and shipping. Consequential damages are knock-on losses the seller had reason to know about, and that the buyer could not prevent by covering. Seven-fifteen: only what could be foreseen.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§2-715", "name": "Incidental and consequential", "rule": "Add breach costs, plus foreseeable, unavoidable losses.", "hook": "Seven-fifteen: only what could be foreseen." } ] },
      { "clear": true,
        "say": "What if the buyer keeps defective goods? Section 2-714. After telling the seller about the problem, the buyer recovers the value the goods would have had as warranted, minus their value as delivered. Seven-fourteen: you kept the machine.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-714", "name": "Damages for accepted goods", "rule": "Kept them? Value as promised minus value as delivered.", "hook": "Seven-fourteen: you kept the machine." } ] },
      { "say": "And section 2-716. If the goods are unique, or in other proper circumstances, a court can order the seller to deliver. Through replevin, a buyer who cannot cover can also claim goods already set aside for the contract. A sweet sixteen comes only once. Unique goods: get the real thing.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§2-716", "name": "Specific performance, replevin", "rule": "Unique goods or proper circumstances: get the goods.", "hook": "Sweet 16 comes only once: unique goods, the real thing." } ] },
      { "clear": true,
        "say": "Put the menu together with an acronym. S C A M. Specific performance. Cover. Accepted goods damages. Market damages. SCAM: what the buyer can get when the seller pulls one. Then add the incidental and consequential extras on top.",
        "add": [
          { "k": "text", "x": 60, "y": 160, "t": "Specific performance  §2-716", "s": 26 },
          { "k": "text", "x": 60, "y": 215, "t": "Cover  §2-712", "s": 26 },
          { "k": "text", "x": 60, "y": 270, "t": "Accepted goods  §2-714", "s": 26 },
          { "k": "text", "x": 60, "y": 325, "t": "Market  §2-713", "s": 26 },
          { "k": "text", "x": 60, "y": 395, "t": "+ incidental and consequential  §2-715", "s": 24, "c": "green" },
          { "k": "text", "x": 500, "y": 250, "t": "S·C·A·M", "s": 56, "c": "blue" },
          { "k": "ul", "x": 500, "y": 264, "w": 200, "c": "blue" } ] }
    ] },
    { "title": "Cover or market?", "beats": [
      { "say": "A worked example. Bea's Bakery agrees to buy one hundred sacks of flour at twenty dollars a sack. Two thousand dollars in total. The mill then announces it will not deliver. On the day Bea hears the news, the market price is twenty-six dollars a sack.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "100 sacks × $20 = $2,000", "s": 28 },
          { "k": "text", "x": 60, "y": 188, "t": "Market when Bea learns: $26 a sack", "s": 26, "c": "red" },
          { "k": "fig", "x": 150, "y": 400, "pose": "up", "face": "shock", "hat": "bun", "label": "Bea", "say": "No flour?!" },
          { "k": "fig", "x": 400, "y": 400, "pose": "shrug", "hat": "cap", "label": "Mill", "say": "Can't deliver." },
          { "k": "icon", "name": "crate", "x": 610, "y": 350, "label": "flour" } ] },
      { "clear": true,
        "say": "Option one, cover. Bea quickly buys one hundred sacks from another mill at twenty-eight dollars. That is twenty-eight hundred, minus the two thousand contract price. Eight hundred dollars in damages, plus her extra delivery costs. The cover must be reasonable. It need not be the cheapest deal in town.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "COVER  §2-712", "s": 28, "c": "blue" },
          { "k": "text", "x": 60, "y": 205, "t": "$2,800 cover price", "s": 26 },
          { "k": "text", "x": 60, "y": 245, "t": "− $2,000 contract", "s": 26 },
          { "k": "ul", "x": 60, "y": 258, "w": 250 },
          { "k": "text", "x": 60, "y": 310, "t": "= $800", "s": 38, "c": "green" } ] },
      { "say": "Option two, no cover. Bea just shuts the bakery for the week. Then use the market price when she learned of the breach. Twenty-six hundred, minus two thousand. Six hundred dollars. Either way, subtract any expenses she saved because of the breach.",
        "add": [
          { "k": "line", "x1": 385, "y1": 122, "x2": 385, "y2": 340 },
          { "k": "text", "x": 410, "y": 150, "t": "MARKET  §2-713", "s": 28, "c": "blue" },
          { "k": "text", "x": 410, "y": 205, "t": "$2,600 market price", "s": 26 },
          { "k": "text", "x": 410, "y": 245, "t": "− $2,000 contract", "s": 26 },
          { "k": "ul", "x": 410, "y": 258, "w": 250 },
          { "k": "text", "x": 410, "y": 310, "t": "= $600", "s": 38, "c": "green" },
          { "k": "text", "x": 60, "y": 400, "t": "Both: + incidentals, − expenses saved", "s": 24 } ] },
      { "clear": true,
        "say": "Now the extras. With no flour, Bea loses a five hundred dollar wedding cake order. If the mill had reason to know she needed the flour for orders, that is a consequential loss. But if she could have covered in time and simply did not, she cannot claim it.",
        "add": [
          { "k": "icon", "name": "ring", "x": 105, "y": 165 },
          { "k": "text", "x": 170, "y": 172, "t": "Lost wedding cake order: $500", "s": 28 },
          { "k": "check", "x": 62, "y": 240 }, { "k": "text", "x": 110, "y": 257, "t": "Seller had reason to know", "s": 28 },
          { "k": "check", "x": 62, "y": 300 }, { "k": "text", "x": 110, "y": 317, "t": "Could NOT be avoided by cover", "s": 28 },
          { "k": "stamp", "x": 110, "y": 370, "t": "CONSEQUENTIAL: §2-715", "s": 24, "c": "green" } ] },
      { "clear": true,
        "say": "Could Bea demand the flour itself? No. Flour is everywhere, so money is enough. But suppose she had bought a one-of-a-kind antique oven. No substitute exists, so a court can order the seller to deliver it. That is section 2-716.",
        "add": [
          { "k": "icon", "name": "crate", "x": 190, "y": 220, "s": 1.5, "label": "Flour: everywhere" },
          { "k": "text", "x": 190, "y": 350, "t": "Money is enough", "s": 26, "anchor": "middle" },
          { "k": "cross", "x": 170, "y": 370, "r": 36 },
          { "k": "line", "x1": 385, "y1": 122, "x2": 385, "y2": 420 },
          { "k": "icon", "name": "fire", "x": 560, "y": 220, "s": 1.5, "label": "Antique oven: unique" },
          { "k": "text", "x": 560, "y": 350, "t": "Court orders delivery", "s": 26, "anchor": "middle", "c": "green" },
          { "k": "check", "x": 545, "y": 372 } ] }
    ] },
    { "title": "Kept the goods?", "beats": [
      { "say": "One more. Bea buys a mixer that was promised to handle fifty kilos of dough. It only handles thirty. She keeps it, and tells the seller promptly. As promised, it would be worth five thousand dollars. As delivered, thirty-five hundred. Under section 2-714, she recovers fifteen hundred.",
        "add": [
          { "k": "text", "x": 60, "y": 155, "t": "Value as warranted:  $5,000", "s": 28 },
          { "k": "text", "x": 60, "y": 197, "t": "Value as delivered: − $3,500", "s": 28 },
          { "k": "ul", "x": 60, "y": 210, "w": 370 },
          { "k": "text", "x": 60, "y": 262, "t": "Damages = $1,500", "s": 34, "c": "green" },
          { "k": "fig", "x": 600, "y": 400, "pose": "hold", "hat": "bun", "label": "Bea", "say": "I'll keep it, but..." },
          { "k": "text", "x": 60, "y": 370, "t": "Tell the seller in reasonable time, or lose the claim.", "s": 22, "w": 380, "c": "red" } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. For market damages, the date that matters is when the buyer learned of the breach. Not the delivery date, and not the day of trial. And remember that a buyer who could have covered, but sat still, loses the consequential damages.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "icon", "name": "clock", "x": 110, "y": 230, "s": 1.3 },
          { "k": "text", "x": 180, "y": 222, "t": "Market price WHEN THE BUYER LEARNED", "s": 26 },
          { "k": "text", "x": 180, "y": 258, "t": "not delivery day, not trial day", "s": 24, "c": "red" },
          { "k": "text", "x": 60, "y": 370, "t": "Could have covered, but did not? No consequential damages.", "s": 24, "w": 620 } ] },
      { "clear": true,
        "say": "Let's recap. Section 2-711 is the menu. Cover: cover price minus contract price. No cover: market price when you learned, minus contract price. Kept the goods: value promised minus value delivered. Add incidental and foreseeable consequential losses. Unique goods: specific performance. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§2-712 cover: cover − contract", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§2-713 market: market − contract", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "§2-714 kept goods: promised − delivered", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "§2-715: incidental + consequential", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "§2-716: unique goods, get the goods", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "UCC Remedies", "k": "ucc",
      "q": "A shop contracts to buy 500 phone cases at $4 each ($2,000). The seller repudiates. On the day the shop learns of this, the market price is $5 each. The shop promptly and reasonably buys 500 substitute cases from another supplier at $5.50 each ($2,750). Ignoring incidentals, what may the shop recover?",
      "o": ["$500, the market price minus the contract price.", "$750, the cover price minus the contract price.", "$2,750, the full cost of the substitute cases.", "Nothing, because it ended up with the phone cases it needed."],
      "a": 1,
      "w": "The shop covered, so section 2-712 applies: cover price minus contract price. Twenty-seven fifty minus two thousand is seven hundred and fifty dollars. The cover only has to be reasonable and in good faith, not the cheapest available." },
    { "t": "UCC Remedies", "k": "ucc",
      "q": "A buyer contracts for a load of steel at $10,000. The seller repudiates, and the buyer does not buy substitute steel. The market price was $10,000 when the contract was made, $12,000 when the buyer learned of the breach, and $15,000 at trial. What are the buyer's market damages?",
      "o": ["$2,000.", "$5,000.", "$0.", "$15,000."],
      "a": 0,
      "w": "Under section 2-713, a buyer who does not cover gets the market price at the time the buyer learned of the breach, minus the contract price. Twelve thousand minus ten thousand is two thousand. The price at trial is irrelevant." },
    { "t": "UCC Remedies", "k": "ucc",
      "q": "A seller fails to deliver a standard motor part to a factory, knowing the factory needs it to keep its line running. An identical part was available from a local supplier the next morning, but the factory did nothing for three weeks and now claims three weeks of lost profits. Can it recover them?",
      "o": ["Yes, because the seller knew of the factory's needs.", "Yes, because consequential damages are automatic under the UCC.", "No, because buyers can never recover lost profits.", "No, because the loss could reasonably have been prevented by cover."],
      "a": 3,
      "w": "Section 2-715 allows consequential damages only for losses the seller had reason to know about and that could not reasonably be prevented by cover or otherwise. The factory could have covered the next morning. It sat still, so the lost profits are on the factory." },
    { "t": "UCC Remedies", "k": "both",
      "q": "How do the UCC's buyer's remedies relate to common-law expectation damages?",
      "o": ["They are unrelated; the UCC aims to punish the breaching seller.", "The UCC gives only restitution, while the common law gives expectation.", "They share the same goal of putting the buyer where performance would have, and the UCC supplies specific formulas for goods.", "The common law gives more, because the UCC bars all consequential damages."],
      "a": 2,
      "w": "Both systems protect the expectation interest. The UCC simply spells out how to measure it for goods: cover under section 2-712, market under section 2-713, and the extras under section 2-715. Same destination, clearer road signs." },
    { "t": "UCC Remedies", "k": "ucc",
      "q": "A farmer pays $38,000 for a tractor warranted to pull a certain load. It cannot. The farmer keeps the tractor and promptly notifies the seller. As warranted, the tractor would have been worth $40,000; as delivered, it is worth $31,000. What is the basic measure of damages?",
      "o": ["$9,000, the value as warranted minus the value as delivered.", "$7,000, the price paid minus the value as delivered.", "$38,000, a full refund.", "$2,000, the value as warranted minus the price paid."],
      "a": 0,
      "w": "For goods the buyer has accepted and kept, section 2-714 measures damages as the value the goods would have had as warranted, minus their value as accepted. Forty thousand minus thirty-one thousand is nine thousand. The price paid is not the yardstick." }
  ]
};

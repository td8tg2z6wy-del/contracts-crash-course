window.LESSONS = window.LESSONS || {};
window.LESSONS["ucc-seller"] = {
  "id": "ucc-seller",
  "title": "Seller's Remedies",
  "track": "ucc",
  "sections": ["§2-703", "§2-706", "§2-708", "§2-709", "§2-718"],
  "scenes": [
    { "title": "Seller's Remedies", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: the seller's remedies under the UCC.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "The buyer backed out. Now what?", "s": 30 },
          { "k": "fig", "x": 200, "y": 400, "pose": "shrug", "label": "Buyer", "say": "Changed my mind." },
          { "k": "fig", "x": 450, "y": 400, "pose": "hold", "face": "sad", "label": "Seller", "say": "But I have your goods!" },
          { "k": "icon", "name": "crate", "x": 560, "y": 368, "s": 0.9 } ] },
      { "say": "Buyers breach too. They refuse delivery, they reject goods for no good reason, or they simply do not pay. The seller is left holding the goods, or holding an unpaid bill. What can the seller do about it?",
        "add": [
          { "k": "text", "x": 60, "y": 192, "t": "refuses · wrongly rejects · won't pay", "s": 24, "c": "red" } ] },
      { "clear": true,
        "say": "Quick reminder: the UCC covers only sales of goods. The common law gives expectation damages: put the seller where full performance would have. The UCC agrees, and gives the seller a menu that mirrors the buyer's. Where the buyer covers, the seller resells.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Common law says...", "s": 28 },
          { "k": "text", "x": 60, "y": 195, "t": "Expectation damages: put me where performance would have.", "s": 24, "w": 300 },
          { "k": "line", "x1": 385, "y1": 122, "x2": 385, "y2": 420 },
          { "k": "text", "x": 408, "y": 150, "t": "UCC says...", "s": 28, "c": "blue" },
          { "k": "text", "x": 408, "y": 195, "t": "Same goal, with a seller's menu: resale, market, profit, price.", "s": 24, "w": 310, "c": "blue" },
          { "k": "icon", "name": "crate", "x": 560, "y": 350, "label": "goods only" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Section 2-703, the seller's menu. Withhold delivery, or stop goods in transit. Resell the goods. Sue for damages, or sometimes the price. And cancel. Memory hook: picture an alarm clock at seven oh three. Wake up, the buyer has bailed. Pick a remedy.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-703", "name": "The seller's menu", "rule": "Withhold or stop the goods, resell, sue, cancel.", "hook": "Alarm at 7:03: the buyer bailed. Wake up, pick a remedy." } ] },
      { "say": "Section 2-706, resale. The seller may resell the goods in good faith and in a commercially reasonable way. Damages are the contract price minus the resale price. This is the seller's version of cover. Seven-oh-six: resale is the fix.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§2-706", "name": "Resale", "rule": "Resell reasonably. Contract price minus resale price.", "hook": "Seven-oh-six: resale is the fix." } ] },
      { "clear": true,
        "say": "Section 2-708, subsection one. Market damages, for the seller who does not resell. Take the contract price, and subtract the market price at the time and place for tender. Seven-oh-eight: the market sets the rate.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-708(1)", "name": "Market damages", "rule": "No resale? Contract price minus market price at tender.", "hook": "Seven-oh-eight: the market sets the rate." } ] },
      { "say": "Subsection two is the back-up. If the market formula leaves the seller short, the seller gets its lost profit, including reasonable overhead. This is for the lost-volume seller, who could have made both sales. Part two: I could have sold two.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§2-708(2)", "name": "Lost profits", "rule": "Market formula too small? Recover the lost profit.", "hook": "Part two: I could have sold TWO." } ] },
      { "clear": true,
        "say": "Section 2-709, the action for the full price. Three situations. A L U. The buyer accepted the goods. The goods were lost or damaged after the risk passed to the buyer. Or the goods are unsellable to anyone else, like custom goods. A L U, as in: all you owe is the price.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-709", "name": "Action for the price", "rule": "Full price: Accepted, Lost after risk passed, Unsellable.", "hook": "A·L·U. Say it fast: \"all you\" owe is the price." } ] },
      { "say": "Finally, section 2-718. The parties can agree on damages in advance, if the amount is reasonable in light of the anticipated or actual harm. A term fixing unreasonably large damages is void as a penalty. Seven-eighteen: a fair forecast, nothing mean.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§2-718", "name": "Liquidated damages", "rule": "Agreed sum must be reasonable. Too large = void penalty.", "hook": "Seven-eighteen: a fair forecast, nothing mean." } ] },
      { "clear": true,
        "say": "Notice the mirror. The buyer covers; the seller resells. Both have a market formula. The buyer may get the goods; the seller may get the price. One difference: the seller gets incidental damages, but not consequential damages. And these remedies are alternatives. Pick one, not all.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "BUYER", "s": 28 },
          { "k": "text", "x": 410, "y": 150, "t": "SELLER", "s": 28, "c": "blue" },
          { "k": "line", "x1": 385, "y1": 122, "x2": 385, "y2": 345, "c": "red" },
          { "k": "text", "x": 60, "y": 205, "t": "Cover  §2-712", "s": 26 },
          { "k": "text", "x": 410, "y": 205, "t": "Resale  §2-706", "s": 26, "c": "blue" },
          { "k": "text", "x": 60, "y": 260, "t": "Market  §2-713", "s": 26 },
          { "k": "text", "x": 410, "y": 260, "t": "Market  §2-708(1)", "s": 26, "c": "blue" },
          { "k": "text", "x": 60, "y": 315, "t": "The goods  §2-716", "s": 26 },
          { "k": "text", "x": 410, "y": 315, "t": "The price  §2-709", "s": 26, "c": "blue" },
          { "k": "text", "x": 60, "y": 400, "t": "Alternatives, not cumulative. Pick one.", "s": 26, "c": "red" } ] }
    ] },
    { "title": "Worked example", "beats": [
      { "say": "A worked example. Stan's Cycles agrees to sell ten bikes to Bo for five hundred dollars each. Five thousand dollars in total. Before delivery, Bo calls to say he no longer wants them. Stan is holding ten bikes.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "10 bikes × $500 = $5,000", "s": 28 },
          { "k": "fig", "x": 150, "y": 400, "pose": "hold", "face": "sad", "hat": "cap", "label": "Stan", "say": "Ten bikes, no buyer." },
          { "k": "fig", "x": 400, "y": 400, "pose": "shrug", "label": "Bo", "say": "Don't want them." } ] },
      { "clear": true,
        "say": "Option one, resale. Stan tells Bo, then sells the bikes to another shop for four hundred and twenty each. Forty-two hundred. Contract price minus resale price is eight hundred dollars, plus his incidental costs, like storage. If Stan resells for more than the contract price, he keeps the profit.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "RESALE  §2-706", "s": 28, "c": "blue" },
          { "k": "text", "x": 60, "y": 205, "t": "$5,000 contract", "s": 26 },
          { "k": "text", "x": 60, "y": 245, "t": "− $4,200 resale", "s": 26 },
          { "k": "ul", "x": 60, "y": 258, "w": 250 },
          { "k": "text", "x": 60, "y": 310, "t": "= $800", "s": 38, "c": "green" } ] },
      { "say": "Option two, no resale. Say the market price at the time and place for tender was four hundred and fifty a bike. Forty-five hundred. Contract price minus market price is five hundred dollars. Either way, subtract any expenses Stan saved.",
        "add": [
          { "k": "line", "x1": 385, "y1": 122, "x2": 385, "y2": 340 },
          { "k": "text", "x": 410, "y": 150, "t": "MARKET  §2-708(1)", "s": 28, "c": "blue" },
          { "k": "text", "x": 410, "y": 205, "t": "$5,000 contract", "s": 26 },
          { "k": "text", "x": 410, "y": 245, "t": "− $4,500 market", "s": 26 },
          { "k": "ul", "x": 410, "y": 258, "w": 250 },
          { "k": "text", "x": 410, "y": 310, "t": "= $500", "s": 38, "c": "green" },
          { "k": "text", "x": 60, "y": 400, "t": "Both: + incidentals, − expenses saved", "s": 24 } ] },
      { "clear": true,
        "say": "Option three. Suppose the bikes were custom-painted hot pink with Bo's team logo. Nobody else will buy them at any sensible price. Now Stan can sue for the full five thousand dollars under section 2-709, and he holds the bikes for Bo.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Custom goods nobody else wants", "s": 28 },
          { "k": "fig", "x": 150, "y": 400, "pose": "shrug", "hat": "cap", "label": "Stan", "say": "Hot pink. With a logo." },
          { "k": "stamp", "x": 400, "y": 250, "t": "FULL PRICE: $5,000", "s": 24, "c": "green" },
          { "k": "text", "x": 402, "y": 330, "t": "§2-709: cannot reasonably resell", "s": 22 } ] }
    ] },
    { "title": "The boat dealer", "beats": [
      { "say": "Neri and Retail Marine. Mister Neri contracted to buy a new boat for about twelve and a half thousand dollars, and paid a deposit. Days later he needed surgery and backed out. The dealer had already ordered the boat, and later sold it to someone else for the same price.",
        "add": [
          { "k": "icon", "name": "ship", "x": 110, "y": 165, "s": 1.2 },
          { "k": "text", "x": 185, "y": 160, "t": "Boat: about $12,500", "s": 28 },
          { "k": "text", "x": 185, "y": 196, "t": "resold later at the SAME price", "s": 24, "c": "red" },
          { "k": "fig", "x": 150, "y": 400, "pose": "shrug", "label": "Neri", "say": "No loss. Refund me!" },
          { "k": "fig", "x": 400, "y": 400, "pose": "hips", "face": "flat", "hat": "cap", "label": "Dealer", "say": "I lost a sale!" } ] },
      { "say": "Neri said: same price, so no loss. The court disagreed. A dealer with an endless supply of boats would have sold to the second buyer anyway. Neri's breach cost it one whole sale. Under section 2-708, subsection two, the dealer kept its lost profit and incidental costs out of the deposit.",
        "add": [
          { "k": "stamp", "x": 540, "y": 250, "t": "LOST VOLUME", "s": 24, "c": "green" },
          { "k": "text", "x": 532, "y": 318, "t": "Neri v. Retail Marine", "s": 20, "c": "blue" },
          { "k": "text", "x": 532, "y": 350, "t": "Two buyers = two profits. One was lost.", "s": 20, "w": 195 } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. A seller resells at the same price, so you write: no damages. Wrong, if the seller could have supplied both buyers. And the opposite trap: do not stack remedies. The seller cannot collect the full price and also keep the goods to sell again.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "text", "x": 60, "y": 200, "t": "Same resale price ≠ no damages", "s": 28 },
          { "k": "text", "x": 60, "y": 234, "t": "(ask: lost-volume seller?)", "s": 22, "c": "blue" },
          { "k": "text", "x": 60, "y": 330, "t": "Full price AND keep the goods?", "s": 28 },
          { "k": "cross", "x": 480, "y": 300, "r": 40 },
          { "k": "text", "x": 60, "y": 380, "t": "Alternatives, not a buffet.", "s": 24, "c": "red" } ] },
      { "clear": true,
        "say": "Let's recap. Section 2-703 is the menu. Resale: contract price minus resale price. No resale: contract price minus market price. Lost-volume seller: lost profit. The full price for goods accepted, lost after risk passed, or unsellable. Liquidated damages must be reasonable. Pick one remedy. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§2-706 resale: contract − resale", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§2-708(1) market: contract − market", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "§2-708(2): lost-volume profit (Neri)", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "§2-709 price: A·L·U", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "§2-718: reasonable sum, no penalties", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "UCC Remedies", "k": "ucc",
      "q": "A seller contracts to sell 20 desks at $300 each ($6,000). The buyer repudiates before delivery. After notifying the buyer, the seller resells the desks in a commercially reasonable sale for $250 each ($5,000), and spends $200 storing them in the meantime. What may the seller recover?",
      "o": ["$1,000.", "$1,200.", "$6,000.", "$800."],
      "a": 1,
      "w": "Section 2-706 gives the contract price minus the resale price, plus incidental damages. Six thousand minus five thousand is one thousand, and the two hundred dollars of storage is an incidental cost. Total: twelve hundred dollars." },
    { "t": "UCC Remedies", "k": "ucc",
      "q": "A car dealer can get as many of a popular model as it has customers for. A buyer signs for one, then backs out. The next week the dealer sells that same car to a walk-in customer at the same price. The dealer's profit on each sale is $3,000. What is the dealer's best measure of damages?",
      "o": ["Nothing, because the resale price equalled the contract price.", "The full contract price of the car.", "Nothing, because the market price equalled the contract price.", "Its $3,000 lost profit, plus incidental costs."],
      "a": 3,
      "w": "This is a lost-volume seller, as in Neri and Retail Marine. The walk-in customer would have bought a car anyway, so the breach cost the dealer one sale. Section 2-708, subsection two, awards the lost profit when the market formula is inadequate." },
    { "t": "UCC Remedies", "k": "ucc",
      "q": "A trophy maker engraves 200 trophies with a company's name and logo, exactly as ordered. The company then refuses to take them. Nobody else has any use for the trophies. What may the trophy maker recover?",
      "o": ["The full contract price, because the goods cannot reasonably be resold.", "Only the contract price minus the scrap value of the metal, never the price.", "Nothing, until it actually finds another buyer.", "Only its lost profit, because the goods were never accepted."],
      "a": 0,
      "w": "Section 2-709 allows an action for the price in three cases: goods accepted, goods lost after the risk passed, and goods the seller cannot resell at a reasonable price after reasonable effort. Custom goods are the classic third case. Remember A L U." },
    { "t": "UCC Remedies", "k": "both",
      "q": "A contract for $2,000 of garden furniture says that if the buyer cancels, the buyer must pay $50,000 as \"agreed damages.\" The buyer cancels, and the seller's real loss is about $300. Is the clause enforceable?",
      "o": ["Yes, because the buyer agreed to it.", "Yes, because the UCC enforces every liquidated damages clause.", "No, because it is unreasonably large, and so void as a penalty, under the UCC just as at common law.", "No, because the UCC forbids all liquidated damages clauses."],
      "a": 2,
      "w": "Section 2-718 allows liquidated damages only at an amount that is reasonable in light of the anticipated or actual harm. A term fixing unreasonably large damages is void as a penalty. The common law draws the same line between a fair forecast and a punishment." },
    { "t": "UCC Remedies", "k": "ucc",
      "q": "Which seller's remedy is the mirror image of the buyer's right to \"cover\"?",
      "o": ["The action for the price under §2-709.", "Resale under §2-706.", "Liquidated damages under §2-718.", "Stopping delivery under §2-703."],
      "a": 1,
      "w": "A buyer covers by buying substitute goods and claiming the cover price minus the contract price. A seller does the reverse under section 2-706: resell the goods and claim the contract price minus the resale price. Seven-oh-six: resale is the fix." }
  ]
};

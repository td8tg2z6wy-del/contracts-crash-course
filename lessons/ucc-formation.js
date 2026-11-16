window.LESSONS = window.LESSONS || {};
window.LESSONS["ucc-formation"] = {
  "id": "ucc-formation",
  "title": "Formation and Open Terms",
  "track": "ucc",
  "sections": ["§2-204", "§2-206", "§2-305", "§2-306", "§1-304"],
  "scenes": [
    { "title": "Formation and Open Terms", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: formation and open terms under the UCC.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "How much can a deal leave blank?", "s": 30 },
          { "k": "fig", "x": 200, "y": 400, "pose": "hold", "label": "Seller", "say": "Price? Later." },
          { "k": "fig", "x": 470, "y": 400, "pose": "up", "label": "Buyer", "say": "Works for me." } ] },
      { "clear": true,
        "say": "One reminder first. The UCC, Article 2, applies only to sales of goods. Goods are things you can move: toasters, tractors, earplugs. Land and services stay with the common law.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "UCC Article 2 = sales of GOODS", "s": 30 },
          { "k": "icon", "name": "crate", "x": 130, "y": 270, "label": "goods" },
          { "k": "icon", "name": "truck", "x": 300, "y": 270, "label": "goods" },
          { "k": "icon", "name": "house", "x": 500, "y": 270, "label": "land: no" },
          { "k": "cross", "x": 470, "y": 240, "r": 60 } ] },
      { "clear": true,
        "say": "Here are the twins, side by side. Common law says the terms must be reasonably certain, and an agreement to agree on price is no deal. The UCC says: if you meant to make a deal, and a court can find a remedy, the gaps get filled.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Common law says", "s": 28 },
          { "k": "ul", "x": 60, "y": 160, "w": 210 },
          { "k": "text", "x": 60, "y": 205, "t": "Terms must be reasonably certain. An agreement to agree on price is no deal.", "s": 23, "w": 300 },
          { "k": "text", "x": 60, "y": 360, "t": "Restatement §33", "s": 22, "c": "blue" },
          { "k": "line", "x1": 385, "y1": 120, "x2": 385, "y2": 430 },
          { "k": "text", "x": 410, "y": 150, "t": "UCC says", "s": 28, "c": "green" },
          { "k": "ul", "x": 410, "y": 160, "w": 120, "c": "green" },
          { "k": "text", "x": 410, "y": 205, "t": "Meant to deal? Court can find a remedy? Then the gaps get filled.", "s": 23, "w": 310 },
          { "k": "text", "x": 410, "y": 360, "t": "UCC §2-204", "s": 22, "c": "blue" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Four sections to know. First, section 2-204. A contract for goods can be made in any manner that shows agreement, including conduct. Open terms do not kill it. Your acronym is AIR. Agreement, Intent, and a basis for a Remedy. A deal needs air to live.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-204", "name": "Formation in general", "rule": "Any manner showing agreement makes a deal, even conduct.", "hook": "A deal needs AIR: Agreement, Intent, Remedy." } ] },
      { "say": "Second, section 2-206. An offer invites acceptance in any reasonable manner. An order for prompt shipment can be accepted by a promise to ship, or by shipping. Rhyme time. Two-oh-six: promise or ship, either one sticks.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§2-206", "name": "Acceptance", "rule": "Accept in any reasonable way: promise to ship, or ship.", "hook": "Two-oh-six: promise or ship, either one sticks." } ] },
      { "clear": true,
        "say": "Third, section 2-305, the open price term. If the parties meant to be bound but set no price, the price is a reasonable price at the time for delivery. Picture the number. Three, zero, five. That zero in the middle is a blank price tag.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-305", "name": "Open price", "rule": "No price set? It is a reasonable price at delivery.", "hook": "3-0-5: the zero in the middle is a blank price tag." } ] },
      { "say": "Fourth, section 2-306. Output and requirements contracts. The quantity is whatever the seller makes, or whatever the buyer needs, measured in good faith. All I make or all I need, in good faith, without the greed.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§2-306", "name": "Output and requirements", "rule": "Quantity = all I make or all I need, in good faith.", "hook": "All I make or all I need, in good faith, without the greed." } ] }
    ] },
    { "title": "A deal by doing", "beats": [
      { "say": "Start with conduct. A farmer and a baker never sign anything. But every Monday the farmer delivers flour, and every Friday the baker pays. One day the baker says, we never had a contract.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Every Monday: flour. Every Friday: paid.", "s": 26 },
          { "k": "fig", "x": 140, "y": 400, "pose": "hold", "hat": "cap", "label": "Farmer", "say": "Flour's here." },
          { "k": "fig", "x": 380, "y": 400, "pose": "shrug", "face": "smirk", "hat": "bun", "label": "Baker", "say": "What contract?" } ] },
      { "say": "Section 2-204 disagrees. Conduct by both sides that recognises a deal is enough. And nobody has to pinpoint the exact moment the contract was born. Agreement first, formalities second.",
        "add": [
          { "k": "stamp", "x": 540, "y": 300, "t": "CONTRACT", "s": 30, "c": "green" },
          { "k": "text", "x": 542, "y": 362, "t": "Conduct shows the deal.", "s": 22, "w": 190 } ] }
    ] },
    { "title": "Promise it or ship it", "beats": [
      { "say": "Now acceptance. A buyer orders one hundred blue widgets, ship at once. Under section 2-206, the seller can accept by promising to ship, or simply by shipping. Any reasonable way of saying yes will do.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Order: 100 BLUE widgets, ship at once", "s": 28 },
          { "k": "fig", "x": 150, "y": 400, "pose": "point", "label": "Buyer", "say": "Send them!" },
          { "k": "fig", "x": 400, "y": 400, "pose": "up", "hat": "hardhat", "label": "Seller", "say": "Will do!" },
          { "k": "icon", "name": "truck", "x": 620, "y": 340, "label": "or just ship" } ] },
      { "clear": true,
        "say": "But suppose the seller ships red widgets. Surprise. That shipment is an acceptance and a breach at the same moment. The seller is bound to the contract, and has already broken it.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Seller ships RED widgets", "s": 30, "c": "red" },
          { "k": "icon", "name": "truck", "x": 140, "y": 250, "s": 1.3 },
          { "k": "icon", "name": "crate", "x": 300, "y": 250, "c": "red", "label": "red!" },
          { "k": "fig", "x": 600, "y": 400, "pose": "up", "face": "shock", "label": "Buyer", "say": "Red?!" },
          { "k": "stamp", "x": 60, "y": 360, "t": "ACCEPTANCE + BREACH", "s": 28, "c": "red" } ] },
      { "clear": true,
        "say": "The escape hatch: the seller tells the buyer, in good time, that the shipment is only an accommodation. Then it is not an acceptance. It is a counteroffer, and the buyer can keep the red ones or send them back.",
        "add": [
          { "k": "icon", "name": "letter", "x": 120, "y": 200, "s": 1.4, "label": "Seller's note" },
          { "k": "text", "x": 215, "y": 175, "t": "\"Out of blue. Sending red as an accommodation.\"", "s": 24, "w": 470 },
          { "k": "text", "x": 215, "y": 280, "t": "= counteroffer, not acceptance", "s": 28, "c": "green" },
          { "k": "text", "x": 215, "y": 325, "t": "Buyer may take them or reject them.", "s": 24 } ] }
    ] },
    { "title": "No price? No problem", "beats": [
      { "say": "Open price. A restaurant agrees to buy fish every week from a supplier, at a price to be agreed. Both mean to be bound. Later they cannot agree on a number. At common law, that smells like a doomed agreement to agree.",
        "add": [
          { "k": "icon", "name": "fish", "x": 110, "y": 175, "s": 1.2 },
          { "k": "text", "x": 185, "y": 185, "t": "Weekly fish. Price: \"to be agreed\"", "s": 28 },
          { "k": "fig", "x": 200, "y": 400, "pose": "up", "hat": "bun", "label": "Restaurant", "say": "$4 a pound!" },
          { "k": "fig", "x": 470, "y": 400, "pose": "hips", "hat": "cap", "face": "flat", "label": "Supplier", "say": "$9 a pound." } ] },
      { "clear": true,
        "say": "Section 2-305 rescues the deal. If the parties intended a contract, the price is a reasonable price at the time for delivery. The court looks at the market, not at a crystal ball.",
        "add": [
          { "k": "icon", "name": "scale", "x": 120, "y": 200, "s": 1.4 },
          { "k": "text", "x": 215, "y": 185, "t": "Price = a reasonable price", "s": 30 },
          { "k": "text", "x": 215, "y": 227, "t": "at the time for delivery", "s": 30 },
          { "k": "stamp", "x": 215, "y": 285, "t": "STILL A CONTRACT", "s": 28, "c": "green" } ] },
      { "say": "One limit. If the parties intended not to be bound unless the price was agreed, and it never is, there is no contract. Intent is still the boss.",
        "add": [
          { "k": "text", "x": 60, "y": 380, "t": "BUT: \"no deal unless we fix the price\"", "s": 24, "c": "red" },
          { "k": "text", "x": 60, "y": 420, "t": "= no contract", "s": 28, "c": "red" } ] }
    ] },
    { "title": "All I make, all I need", "beats": [
      { "say": "Next, quantity. In an output contract, the buyer takes everything the seller makes. In a requirements contract, the seller supplies everything the buyer needs. No fixed number, yet section 2-306 says both are enforceable.",
        "add": [
          { "k": "icon", "name": "factory", "x": 130, "y": 190, "label": "Seller" },
          { "k": "arrow", "x1": 185, "y1": 190, "x2": 300, "y2": 190 },
          { "k": "text", "x": 320, "y": 200, "t": "OUTPUT: all I make", "s": 28 },
          { "k": "icon", "name": "store", "x": 130, "y": 340, "label": "Buyer" },
          { "k": "arrow", "x1": 185, "y1": 340, "x2": 300, "y2": 340 },
          { "k": "text", "x": 320, "y": 350, "t": "REQUIREMENTS: all I need", "s": 28 } ] },
      { "clear": true,
        "say": "Two limits. The quantity must be set in good faith, and it cannot be unreasonably out of line with any stated estimate, or with normal past amounts. A bakery that always took one hundred bags cannot demand five thousand just because the market price jumped.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Usual order: 100 bags", "s": 28 },
          { "k": "stamp", "x": 440, "y": 160, "t": "NOT GOOD FAITH", "s": 24, "c": "red" },
          { "k": "fig", "x": 180, "y": 400, "pose": "up", "face": "smirk", "hat": "bun", "label": "Bakery", "say": "5,000 bags, please!" },
          { "k": "fig", "x": 470, "y": 400, "pose": "shrug", "face": "shock", "hat": "cap", "label": "Mill", "say": "You what?" } ] },
      { "clear": true,
        "say": "Behind all of this stands section 1-304. Every UCC contract carries a duty of good faith in performing it and in enforcing it. One-three-oh-four: good faith is at the core.",
        "add": [
          { "k": "text", "x": 60, "y": 170, "t": "§1-304", "s": 44 },
          { "k": "text", "x": 60, "y": 225, "t": "Good faith in performance and enforcement", "s": 28 },
          { "k": "icon", "name": "heart", "x": 120, "y": 330, "s": 1.3, "c": "red" },
          { "k": "text", "x": 200, "y": 340, "t": "One-three-oh-four: good faith is at the core.", "s": 24, "c": "blue" } ] }
    ] },
    { "title": "The earplug case", "beats": [
      { "say": "Now Bacou Dalloz and Continental Polymers. While buying an earplug business, the buyer signed a letter promising to purchase its requirements of a raw material from the seller's new company for five years, at a quality and price equivalent to what other suppliers offered.",
        "add": [
          { "k": "text", "x": 60, "y": 145, "t": "Bacou Dalloz v. Continental Polymers", "s": 24, "c": "blue" },
          { "k": "icon", "name": "doc", "x": 115, "y": 225, "s": 1.3, "label": "Letter" },
          { "k": "text", "x": 200, "y": 210, "t": "5 years · all requirements", "s": 26 },
          { "k": "text", "x": 200, "y": 247, "t": "price + quality = market equivalent", "s": 24 },
          { "k": "fig", "x": 510, "y": 400, "pose": "hold", "hat": "tophat", "label": "Bacou" },
          { "k": "fig", "x": 665, "y": 400, "pose": "hips", "hat": "hardhat", "label": "Continental" } ] },
      { "say": "Later the buyer called it a mere agreement to agree. The appeals court disagreed, and sent the case back. A price tied to the market can be worked out from supplier quotes, and good faith limits any games. Open terms, but a real deal.",
        "add": [
          { "k": "stamp", "x": 60, "y": 335, "t": "NOT TOO VAGUE", "s": 28, "c": "green" },
          { "k": "text", "x": 62, "y": 395, "t": "Market price = definite enough", "s": 24 },
          { "k": "text", "x": 62, "y": 428, "t": "Good faith polices the rest.", "s": 22 } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. The UCC fills gaps, but it does not invent a deal. No intent to be bound, no contract. And a court cannot pull a quantity out of thin air, so that is the one term you should never leave completely blank.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "fig", "x": 170, "y": 400, "pose": "shrug", "label": "Seller", "say": "Some widgets?" },
          { "k": "fig", "x": 430, "y": 400, "pose": "shrug", "face": "flat", "label": "Buyer", "say": "How many?" },
          { "k": "cross", "x": 540, "y": 290, "r": 46 } ] },
      { "clear": true,
        "say": "Let's recap. A sale of goods can be formed in any manner, even by conduct. Acceptance is any reasonable yes, including shipping. A missing price becomes a reasonable price. Output and requirements deals are fine, in good faith. And intent to be bound always comes first. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§2-204: any manner, even conduct (AIR)", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§2-206: promise or ship; wrong goods = breach", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "§2-305: no price? A reasonable price", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "§2-306: all I make / all I need", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "§1-304: good faith, always", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "UCC Formation", "k": "ucc",
      "q": "A shop orders 200 white mugs \"for prompt shipment.\" The seller, out of white, ships 200 green mugs with no explanation. What is the legal effect of the shipment?",
      "o": ["It is a counteroffer that the shop may accept or reject.", "It has no effect, because the goods do not match the order.", "It is both an acceptance of the order and a breach of the contract.", "It is a rejection of the shop's offer."],
      "a": 2,
      "w": "Under section 2-206, shipping non-conforming goods in response to an order for prompt shipment is an acceptance, and a breach at the same time. The seller could have avoided that by telling the shop the green mugs were only an accommodation." },
    { "t": "UCC Formation", "k": "ucc",
      "q": "Two merchants sign a deal for 1,000 bolts and clearly intend to be bound, but say nothing about price. Under the UCC, what is the price?",
      "o": ["A reasonable price at the time for delivery.", "Whatever price the seller names on the invoice.", "The lowest price either party suggested in negotiations.", "There is no price, so there is no contract."],
      "a": 0,
      "w": "Section 2-305 says that if the parties intend a contract and leave the price open, the price is a reasonable price at the time for delivery. Three-oh-five: the zero is a blank price tag, and the court fills it in." },
    { "t": "UCC Formation", "k": "both",
      "q": "Parties intend to be bound but leave the price \"to be agreed later,\" and then cannot agree. How do the traditional common-law approach and the UCC differ?",
      "o": ["Both treat the deal as unenforceable.", "Both let the court supply a reasonable price in every case.", "The common law supplies a price; the UCC refuses to.", "The common law tends to call it an unenforceable agreement to agree; the UCC supplies a reasonable price."],
      "a": 3,
      "w": "At common law, an agreement to agree on a key term like price is often too uncertain to enforce, as in the deli lease case. For goods, sections 2-204 and 2-305 keep the deal alive and fill the gap with a reasonable price, so long as the parties intended to be bound." },
    { "t": "UCC Formation", "k": "ucc",
      "q": "A cafe has a requirements contract for coffee beans and has always needed about 50 bags a month. When the market price doubles, it demands 900 bags so it can resell them at a profit. Must the seller deliver 900?",
      "o": ["Yes, because a requirements contract has no quantity limit.", "No, because the demand is not in good faith and is unreasonably disproportionate to past requirements.", "Yes, because the seller took the risk of price changes.", "No, because requirements contracts are unenforceable for lack of a quantity."],
      "a": 1,
      "w": "Section 2-306 enforces requirements contracts, but the quantity means actual requirements in good faith, and nothing unreasonably disproportionate to an estimate or to normal past amounts. All I need, in good faith, without the greed." },
    { "t": "UCC Formation", "k": "ucc",
      "q": "A grower and a grocer never sign anything and cannot say exactly when they made their deal. For two years the grower has delivered apples weekly and the grocer has paid each invoice. Is there a contract for sale?",
      "o": ["No, because the moment of formation cannot be identified.", "No, because a contract for goods always needs a signed offer and acceptance.", "Yes, because conduct by both parties that recognises a contract is enough.", "Yes, but only if a court can find a written purchase order."],
      "a": 2,
      "w": "Section 2-204 says a contract for goods may be made in any manner sufficient to show agreement, including conduct, even if the moment of its making is undetermined. Agreement first, formalities second." }
  ]
};

window.LESSONS = window.LESSONS || {};
window.LESSONS["ucc-forms"] = {
  "id": "ucc-forms",
  "title": "Battle of the Forms",
  "track": "ucc",
  "sections": ["§2-207"],
  "scenes": [
    { "title": "Battle of the Forms", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: the battle of the forms.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Whose small print wins?", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "hold", "label": "Buyer", "say": "My form!" },
          { "k": "fig", "x": 470, "y": 400, "pose": "hold", "hat": "hardhat", "label": "Seller", "say": "No, MY form!" } ] },
      { "clear": true,
        "say": "Remember, the UCC applies only to sales of goods. And goods are sold with forms. The buyer sends a purchase order. The seller replies with an acknowledgment. The price and quantity match. The small print on the back never does.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "UCC Article 2 = sales of GOODS", "s": 28 },
          { "k": "icon", "name": "doc", "x": 160, "y": 290, "s": 1.6, "label": "Purchase order" },
          { "k": "icon", "name": "doc", "x": 540, "y": 290, "s": 1.6, "c": "red", "label": "Acknowledgment" },
          { "k": "arrow", "x1": 235, "y1": 270, "x2": 465, "y2": 270 },
          { "k": "arrow", "x1": 465, "y1": 310, "x2": 235, "y2": 310, "c": "red" },
          { "k": "text", "x": 350, "y": 250, "t": "boilerplate clash", "s": 22, "c": "red", "anchor": "middle" } ] },
      { "clear": true,
        "say": "The twins, side by side. Common law says the acceptance must mirror the offer, any change is a counteroffer, and the last form sent wins. The UCC says a definite yes is an acceptance, even with extra or different terms, and section 2-207 sorts out which terms survive.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Common law says", "s": 28 },
          { "k": "ul", "x": 60, "y": 160, "w": 210 },
          { "k": "text", "x": 60, "y": 205, "t": "Acceptance must mirror the offer. Any change = counteroffer. Last form sent wins.", "s": 23, "w": 300 },
          { "k": "text", "x": 60, "y": 380, "t": "Mirror image + last shot", "s": 22, "c": "blue" },
          { "k": "line", "x1": 385, "y1": 120, "x2": 385, "y2": 430 },
          { "k": "text", "x": 410, "y": 150, "t": "UCC says", "s": 28, "c": "green" },
          { "k": "ul", "x": 410, "y": 160, "w": 120, "c": "green" },
          { "k": "text", "x": 410, "y": 205, "t": "A definite yes is an acceptance, even with extra or different terms.", "s": 23, "w": 310 },
          { "k": "text", "x": 410, "y": 380, "t": "UCC §2-207", "s": 22, "c": "blue" } ] }
    ] },
    { "title": "The old way", "beats": [
      { "say": "First, the common-law twin. Under the mirror image rule, an acceptance must match the offer exactly. Change one comma, and you have not accepted. You have rejected, and made a counteroffer.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Mirror image rule", "s": 30 },
          { "k": "icon", "name": "doc", "x": 160, "y": 260, "s": 1.4, "label": "Offer" },
          { "k": "line", "x1": 290, "y1": 185, "x2": 290, "y2": 335 },
          { "k": "icon", "name": "doc", "x": 420, "y": 260, "s": 1.4, "c": "red", "label": "Reply + new term" },
          { "k": "text", "x": 60, "y": 410, "t": "= rejection + counteroffer", "s": 28, "c": "red" } ] },
      { "clear": true,
        "say": "But the goods get shipped anyway, and the buyer uses them. So whose terms? The common law said the last form sent before performance was the offer, and performing accepted it. The last shot wins. So everyone kept firing forms.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Last shot rule", "s": 30 },
          { "k": "text", "x": 60, "y": 190, "t": "Last form before performance wins.", "s": 24 },
          { "k": "fig", "x": 150, "y": 400, "pose": "point", "label": "Buyer", "say": "Form!" },
          { "k": "fig", "x": 410, "y": 400, "pose": "pointL", "hat": "hardhat", "label": "Seller", "say": "Form! Form!" },
          { "k": "icon", "name": "truck", "x": 620, "y": 340, "label": "goods ship" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "One section, three parts. Section 2-207, subsection one. A definite and timely expression of acceptance works as an acceptance, even if it adds or changes terms. Picture the number. Two, two, zero: two forms, two sets of terms, zero mirrors needed.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-207(1)", "name": "A yes with extras", "rule": "A definite, timely yes is an acceptance despite new terms.", "hook": "2-2-0: two forms, two sets of terms, zero mirrors." } ] },
      { "say": "Subsection two. Additional terms are only proposals. Between merchants they come in automatically, unless L, M, O. The offer was Limited to its own terms. The new term Materially alters the deal. Or the offeror Objects. L M O: let me object.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§2-207(2)", "name": "Additional terms", "rule": "Proposals. Between merchants they come in, unless L-M-O.", "hook": "L-M-O: Limited offer, Material change, Objection." } ] },
      { "clear": true,
        "say": "Subsection three. If the forms do not make a contract, but both sides act as if there is one, there is one. Its terms are the terms both forms share, plus the UCC's own gap-fillers. Hold on to this rhyme: one before three, or wrong you'll be.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-207(3)", "name": "Contract by conduct", "rule": "No deal on paper, but both perform? Shared terms + UCC.", "hook": "One before three, or wrong you'll be." } ] },
      { "say": "And one judge-made rule for different terms, meaning terms that flatly contradict each other. Most courts use the knockout rule. When terms collide, both step aside, and the UCC fills the hole.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "K.O.", "name": "Different terms: the knockout rule", "rule": "Conflicting terms cancel out. UCC gap-fillers step in.", "hook": "When terms collide, both step aside." } ] }
    ] },
    { "title": "Step 1: is there a yes?", "beats": [
      { "say": "Step one. Is the reply a definite expression of acceptance? The bargained terms must line up: the goods, the price, the quantity. An order for apples is not accepted by a promise of oranges. But clashing small print does not spoil the yes.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Goods, price, quantity match?", "s": 28 },
          { "k": "fig", "x": 150, "y": 400, "pose": "point", "label": "Buyer", "say": "100 apples." },
          { "k": "fig", "x": 400, "y": 400, "pose": "up", "hat": "hardhat", "label": "Seller", "say": "Yes! + my terms" },
          { "k": "stamp", "x": 540, "y": 320, "t": "ACCEPTANCE", "s": 26, "c": "green" } ] },
      { "clear": true,
        "say": "The exception. If the reply says its acceptance is expressly conditional on the other side agreeing to the new terms, it is no acceptance at all. It is a counteroffer. Courts want that said loudly and clearly, not mumbled in grey print.",
        "add": [
          { "k": "icon", "name": "doc", "x": 130, "y": 240, "s": 1.7, "label": "Seller's form" },
          { "k": "text", "x": 245, "y": 175, "t": "\"Acceptance is EXPRESSLY CONDITIONAL on your assent to our terms.\"", "s": 24, "w": 440, "c": "red" },
          { "k": "text", "x": 245, "y": 290, "t": "= counteroffer", "s": 30 },
          { "k": "text", "x": 245, "y": 335, "t": "No contract on the forms (yet).", "s": 24 } ] }
    ] },
    { "title": "Step 2: the extra terms", "beats": [
      { "say": "Step two. There is a contract, so what happens to the extra terms? They are proposals. If either party is not a merchant, say a consumer, the proposals stay out unless that person actually agrees to them.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Additional terms = proposals", "s": 30 },
          { "k": "text", "x": 60, "y": 215, "t": "Non-merchant involved:", "s": 26 },
          { "k": "text", "x": 60, "y": 257, "t": "OUT unless they agree", "s": 30, "c": "red" },
          { "k": "icon", "name": "doc", "x": 120, "y": 350, "label": "+ new term" },
          { "k": "cross", "x": 95, "y": 322, "r": 50 },
          { "k": "fig", "x": 580, "y": 400, "pose": "shrug", "hat": "hair", "label": "Consumer", "say": "I never agreed." } ] },
      { "clear": true,
        "say": "Between merchants it flips. The extra term slides into the contract automatically, unless L M O applies. The offer was limited to its own terms, the new term materially alters the deal, or the offeror objects within a reasonable time.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Between merchants: IN, unless...", "s": 30 },
          { "k": "text", "x": 62, "y": 215, "t": "L", "s": 34, "c": "blue" }, { "k": "text", "x": 110, "y": 213, "t": "offer Limited to its terms", "s": 27 },
          { "k": "text", "x": 62, "y": 270, "t": "M", "s": 34, "c": "blue" }, { "k": "text", "x": 110, "y": 268, "t": "Materially alters the deal", "s": 27 },
          { "k": "text", "x": 62, "y": 325, "t": "O", "s": 34, "c": "blue" }, { "k": "text", "x": 110, "y": 323, "t": "offeror Objects", "s": 27 },
          { "k": "text", "x": 545, "y": 280, "t": "L·M·O", "s": 52, "c": "blue" },
          { "k": "ul", "x": 545, "y": 294, "w": 165, "c": "blue" } ] },
      { "say": "What is a material alteration? A term that would cause surprise or hardship if slipped in unnoticed. Wiping out warranties is the classic example. An arbitration clause is fought over, and often turns on what is normal in that trade.",
        "add": [
          { "k": "text", "x": 60, "y": 390, "t": "Material = surprise or hardship", "s": 26, "c": "red" },
          { "k": "text", "x": 60, "y": 428, "t": "Classic example: \"no warranties\"", "s": 22 } ] },
      { "clear": true,
        "say": "Now different terms. The buyer's form says deliver in ten days. The seller's says sixty. Under the knockout rule, which most courts follow, both clauses cancel, and a UCC gap-filler takes over: here, a reasonable time. A minority of courts treat different terms like additional ones.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Different terms: the knockout rule", "s": 28 },
          { "k": "fig", "x": 150, "y": 400, "pose": "up", "label": "Buyer", "say": "Ten days!" },
          { "k": "fig", "x": 400, "y": 400, "pose": "up", "hat": "hardhat", "label": "Seller", "say": "Sixty days!" },
          { "k": "stamp", "x": 545, "y": 310, "t": "BOTH OUT", "s": 28, "c": "red" },
          { "k": "text", "x": 547, "y": 368, "t": "Gap-filler: a reasonable time.", "s": 20, "w": 180 } ] }
    ] },
    { "title": "Step 3: a deal by doing", "beats": [
      { "say": "Step three. Suppose the forms do not make a contract, because the reply was expressly conditional. But the seller ships anyway, and the buyer takes the goods and pays. Subsection three says their conduct made a contract.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "No contract on the forms...", "s": 28 },
          { "k": "icon", "name": "truck", "x": 150, "y": 240, "s": 1.3, "label": "Seller ships" },
          { "k": "arrow", "x1": 225, "y1": 240, "x2": 345, "y2": 240 },
          { "k": "icon", "name": "money", "x": 410, "y": 240, "c": "green", "label": "Buyer pays" },
          { "k": "text", "x": 60, "y": 355, "t": "...but conduct makes one.", "s": 28, "c": "green" } ] },
      { "say": "Its terms? Only the terms on which both forms agree, plus the UCC's gap-fillers. Nobody's extra boilerplate gets in. That quietly kills the last shot rule for goods.",
        "add": [
          { "k": "text", "x": 60, "y": 415, "t": "Terms = what both forms share + UCC gap-fillers", "s": 24 },
          { "k": "stamp", "x": 500, "y": 340, "t": "LAST SHOT: DEAD", "s": 24, "c": "red" } ] }
    ] },
    { "title": "The flow chart", "beats": [
      { "say": "Here is the whole thing as a flow chart. First question, always: is there a definite, timely yes that is not expressly conditional? If so, you have a contract on the forms. Additional terms go through subsection two. Different terms get knocked out.",
        "add": [
          { "k": "box", "x": 60, "y": 115, "w": 320, "h": 76 },
          { "k": "text", "x": 74, "y": 146, "t": "§2-207(1): a definite YES?", "s": 23 },
          { "k": "text", "x": 74, "y": 174, "t": "(not expressly conditional)", "s": 19 },
          { "k": "arrow", "x1": 150, "y1": 193, "x2": 150, "y2": 234, "c": "green" },
          { "k": "text", "x": 162, "y": 222, "t": "YES", "s": 20, "c": "green" },
          { "k": "box", "x": 60, "y": 238, "w": 320, "h": 152, "c": "green" },
          { "k": "text", "x": 74, "y": 267, "t": "Contract on the forms", "s": 23, "c": "green" },
          { "k": "text", "x": 74, "y": 298, "t": "Additional terms: §2-207(2)", "s": 19 },
          { "k": "text", "x": 74, "y": 324, "t": "merchants: in, unless L·M·O", "s": 19 },
          { "k": "text", "x": 74, "y": 354, "t": "Different terms: knockout", "s": 19 },
          { "k": "text", "x": 74, "y": 379, "t": "+ UCC gap-fillers", "s": 19 } ] },
      { "say": "If there is no yes on paper, ask whether the parties performed anyway. If they did, subsection three gives you a contract made of the shared terms and the gap-fillers. If they did nothing, there is no contract at all. One before three, or wrong you'll be.",
        "add": [
          { "k": "arrow", "x1": 384, "y1": 152, "x2": 440, "y2": 152, "c": "red" },
          { "k": "text", "x": 396, "y": 140, "t": "NO", "s": 20, "c": "red" },
          { "k": "box", "x": 445, "y": 115, "w": 285, "h": 76 },
          { "k": "text", "x": 457, "y": 146, "t": "Did they perform anyway?", "s": 21 },
          { "k": "text", "x": 457, "y": 174, "t": "(ship, accept, pay)", "s": 19 },
          { "k": "arrow", "x1": 590, "y1": 193, "x2": 590, "y2": 234, "c": "green" },
          { "k": "text", "x": 602, "y": 222, "t": "YES", "s": 20, "c": "green" },
          { "k": "box", "x": 445, "y": 238, "w": 285, "h": 152, "c": "blue" },
          { "k": "text", "x": 457, "y": 268, "t": "§2-207(3)", "s": 24, "c": "blue" },
          { "k": "text", "x": 457, "y": 302, "t": "Terms both forms share", "s": 20 },
          { "k": "text", "x": 457, "y": 330, "t": "+ UCC gap-fillers", "s": 20 },
          { "k": "text", "x": 457, "y": 364, "t": "No last shot.", "s": 20, "c": "red" },
          { "k": "text", "x": 60, "y": 430, "t": "One before three, or wrong you'll be.", "s": 24, "c": "blue" } ] }
    ] },
    { "title": "The copy machines", "beats": [
      { "say": "Try it. Paperclip Company orders twelve copy machines from Copy King. Both are merchants. The purchase order says the seller gives full warranties. Copy King's acknowledgment says no implied warranties, and adds that disputes go to arbitration. The machines ship. Then they jam.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "12 copy machines", "s": 28 },
          { "k": "fig", "x": 150, "y": 400, "pose": "hold", "label": "Paperclip Co.", "say": "Full warranties." },
          { "k": "fig", "x": 410, "y": 400, "pose": "hold", "hat": "tophat", "label": "Copy King", "say": "None. + arbitration" },
          { "k": "icon", "name": "crate", "x": 620, "y": 340, "s": 1.2, "label": "ships, then jams" } ] },
      { "clear": true,
        "say": "Step one. The acknowledgment was a definite yes, and it was not expressly conditional. So there is a contract on the forms, and we never reach subsection three. At common law, Copy King's last shot would have won everything.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "Definite yes? YES", "s": 26 },
          { "k": "check", "x": 62, "y": 178 }, { "k": "text", "x": 110, "y": 196, "t": "Expressly conditional? NO", "s": 26 },
          { "k": "text", "x": 110, "y": 248, "t": "= contract under §2-207(1)", "s": 28, "c": "green" } ] },
      { "say": "Warranties: the forms contradict each other, so both terms are knocked out, and the UCC's implied warranty fills the gap. The buyer smiles. Arbitration: an additional term between merchants. It comes in, unless it materially alters the deal, which depends on the trade.",
        "add": [
          { "k": "text", "x": 62, "y": 315, "t": "Warranty: different terms = knockout", "s": 24 },
          { "k": "text", "x": 62, "y": 348, "t": "UCC implied warranty fills the gap.", "s": 22, "c": "green" },
          { "k": "text", "x": 62, "y": 396, "t": "Arbitration: additional term", "s": 24 },
          { "k": "text", "x": 62, "y": 429, "t": "In, unless it materially alters the deal.", "s": 22, "c": "blue" } ] }
    ] },
    { "title": "Two cases", "beats": [
      { "say": "Step-Saver and Wyse Technology. Step-Saver ordered software by phone. The seller agreed, then shipped boxes with a licence printed on top: no warranties, and opening the box means you agree. The court said the contract was already made. The box-top terms were proposals that materially altered it, so they stayed out.",
        "add": [
          { "k": "text", "x": 60, "y": 145, "t": "Step-Saver v. Wyse Technology", "s": 24, "c": "blue" },
          { "k": "icon", "name": "phone", "x": 110, "y": 220, "label": "order by phone" },
          { "k": "arrow", "x1": 165, "y1": 220, "x2": 245, "y2": 220 },
          { "k": "icon", "name": "crate", "x": 300, "y": 220, "label": "box-top licence" },
          { "k": "text", "x": 385, "y": 215, "t": "\"No warranties. Open = agree.\"", "s": 22, "c": "red" },
          { "k": "stamp", "x": 60, "y": 345, "t": "BOX-TOP TERMS: OUT", "s": 26, "c": "red" },
          { "k": "text", "x": 62, "y": 405, "t": "Material alteration under §2-207(2)", "s": 22 } ] },
      { "clear": true,
        "say": "Luna Innovations and Verner Science. The buyer's purchase order said, ship when we tell you. The seller's sales order said, ship by mid January. The court found a contract under subsection one anyway. Which shipping term survived needed more facts, and if both were knocked out, the gap-filler is a reasonable time.",
        "add": [
          { "k": "text", "x": 60, "y": 145, "t": "Luna Innovations v. Verner Science", "s": 24, "c": "blue" },
          { "k": "text", "x": 60, "y": 185, "t": "Shipping terms clash: knocked out? Then a reasonable time.", "s": 21 },
          { "k": "fig", "x": 150, "y": 400, "pose": "hips", "label": "Verner (buyer)", "say": "Ship when I say." },
          { "k": "fig", "x": 400, "y": 400, "pose": "up", "hat": "hardhat", "label": "Luna (seller)", "say": "Ship by Jan 15." },
          { "k": "stamp", "x": 530, "y": 320, "t": "CONTRACT ANYWAY", "s": 22, "c": "green" } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Forms were swapped, goods were shipped, and students leap straight to subsection three. Do not. Subsection three is only for when the writings fail to make a contract. Check subsection one first. One before three, or wrong you'll be.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "text", "x": 60, "y": 205, "t": "Forms + shipment: do NOT jump to (3)", "s": 28 },
          { "k": "text", "x": 60, "y": 255, "t": "(1) first. (3) only if the writings fail.", "s": 26 },
          { "k": "text", "x": 60, "y": 330, "t": "One before three, or wrong you'll be.", "s": 28, "c": "blue" },
          { "k": "ul", "x": 60, "y": 342, "w": 470, "c": "blue" } ] },
      { "clear": true,
        "say": "Let's recap. The common law demanded a mirror image, and gave victory to the last shot. Section 2-207 lets a definite yes be an acceptance. Additional terms come in between merchants, unless L M O. Different terms are knocked out. And subsection three covers deals made by conduct alone. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "Common law: mirror image + last shot", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§2-207(1): a definite yes = acceptance", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "§2-207(2): merchants, in unless L·M·O", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "Different terms: knockout + gap-fillers", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "§2-207(3): conduct; shared terms + UCC", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Battle of the Forms", "k": "both",
      "q": "A buyer's purchase order for 500 valves is answered by a seller's acknowledgment that agrees on goods, price and quantity but adds a clause charging interest on late payments. Nothing is shipped yet. Is there a contract?",
      "o": ["Under both the common law and the UCC, yes.", "Under both the common law and the UCC, no.", "Under the common law mirror image rule, no; under UCC 2-207(1), yes.", "Under the common law, yes; under the UCC, no."],
      "a": 2,
      "w": "At common law the added clause makes the reply a rejection and counteroffer, because it does not mirror the offer. Under section 2-207, subsection one, a definite and timely expression of acceptance is an acceptance even though it states additional terms." },
    { "t": "Battle of the Forms", "k": "ucc",
      "q": "Two merchants exchange forms and a contract is formed under 2-207(1). The seller's acceptance adds a new clause. The buyer's original purchase order stated: \"Acceptance is limited to the terms of this order.\" Does the seller's new clause become part of the contract?",
      "o": ["No, because the offer expressly limited acceptance to its own terms.", "Yes, because both parties are merchants.", "Yes, unless the clause materially alters the contract.", "No, because additional terms never become part of a contract."],
      "a": 0,
      "w": "Between merchants, additional terms come in unless L M O. Here it is the L: the offer expressly limited acceptance to its own terms, so under section 2-207, subsection two, the seller's proposal stays out." },
    { "t": "Battle of the Forms", "k": "ucc",
      "q": "A seller's acknowledgment states in bold: \"Our acceptance is expressly conditional on your assent to the terms on this form.\" The buyer never assents, but the seller ships and the buyer accepts and pays for the goods. What are the terms of the contract?",
      "o": ["The seller's terms, because its form was the last one sent.", "The buyer's terms, because the buyer made the offer.", "There is no contract, because the forms never matched.", "The terms on which both forms agree, plus UCC gap-fillers."],
      "a": 3,
      "w": "The expressly conditional language means the writings did not form a contract under subsection one. But conduct by both parties did. Under section 2-207, subsection three, the terms are those the writings agree on, plus the UCC's supplementary terms. No last shot." },
    { "t": "Battle of the Forms", "k": "ucc",
      "q": "A merchant buyer's form says the seller warrants the goods. The merchant seller's acceptance says all implied warranties are disclaimed. A contract is formed under 2-207(1). Under the majority \"knockout\" approach, what happens to the warranty terms?",
      "o": ["The seller's disclaimer controls as the later term.", "Both conflicting terms drop out and the UCC's implied warranties fill the gap.", "The buyer's term controls because the buyer was the offeror.", "The whole contract fails for lack of agreement on warranties."],
      "a": 1,
      "w": "Under the knockout rule, different terms that conflict cancel each other out, and the UCC's gap-fillers take their place. The gap-filler here is the implied warranty of merchantability. When terms collide, both step aside." },
    { "t": "Battle of the Forms", "k": "ucc",
      "q": "A consumer orders a sofa from a furniture store. The store's written acceptance agrees to the order and adds a clause requiring the consumer to pay a restocking fee on any return. The consumer says nothing about the clause. Is the restocking clause part of the contract?",
      "o": ["Yes, because the consumer did not object within a reasonable time.", "Yes, because the clause does not materially alter the deal.", "No, because with a non-merchant an additional term is only a proposal, which stays out unless agreed to.", "No, because the store's reply was a counteroffer."],
      "a": 2,
      "w": "The automatic rule for additional terms in section 2-207, subsection two, applies only between merchants. When one party is not a merchant, additional terms are just proposals, and they stay out of the contract unless that party actually agrees." }
  ]
};

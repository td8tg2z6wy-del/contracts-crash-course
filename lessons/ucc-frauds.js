window.LESSONS = window.LESSONS || {};
window.LESSONS["ucc-frauds"] = {
  "id": "ucc-frauds",
  "title": "Statute of Frauds for Goods",
  "track": "ucc",
  "sections": ["§2-201"],
  "scenes": [
    { "title": "Statute of Frauds for Goods", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: the statute of frauds for goods.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Do we need it in writing?", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "up", "label": "Seller", "say": "We shook on it!" },
          { "k": "fig", "x": 470, "y": 400, "pose": "shrug", "face": "smirk", "label": "Buyer", "say": "Prove it." } ] },
      { "clear": true,
        "say": "A reminder first. The UCC applies only to sales of goods, so this writing rule is for goods only. And the question is simple. When is a handshake not enough?",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "UCC Article 2 = sales of GOODS", "s": 30 },
          { "k": "icon", "name": "crate", "x": 150, "y": 280, "s": 1.2, "label": "goods" },
          { "k": "arrow", "x1": 215, "y1": 280, "x2": 325, "y2": 280 },
          { "k": "icon", "name": "doc", "x": 390, "y": 280, "s": 1.2, "label": "a writing?" } ] },
      { "clear": true,
        "say": "The twins, side by side. Common law says certain kinds of contract, like land sales and deals lasting over a year, need a signed writing with the essential terms. The UCC says goods for five hundred dollars or more need a signed writing, but a bare one: show a deal, state a quantity.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Common law says", "s": 28 },
          { "k": "ul", "x": 60, "y": 160, "w": 210 },
          { "k": "text", "x": 60, "y": 205, "t": "Land, deals over a year, and a few others need a signed writing with the essential terms.", "s": 23, "w": 300 },
          { "k": "line", "x1": 385, "y1": 120, "x2": 385, "y2": 430 },
          { "k": "text", "x": 410, "y": 150, "t": "UCC says", "s": 28, "c": "green" },
          { "k": "ul", "x": 410, "y": 160, "w": 120, "c": "green" },
          { "k": "text", "x": 410, "y": 205, "t": "Goods for $500 or more need a signed writing. A bare one will do: a deal and a quantity.", "s": 23, "w": 310 },
          { "k": "text", "x": 410, "y": 380, "t": "UCC §2-201", "s": 22, "c": "blue" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "One section, three parts. Section 2-201, subsection one. A sale of goods for five hundred dollars or more needs a writing, signed by the party to be charged, that shows a contract was made and states a quantity. Picture the number. Two, zero, one: two parties, zero excuses, one signature.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-201(1)", "name": "The writing", "rule": "Goods of $500 or more: signed writing with a quantity.", "hook": "2-0-1: two parties, zero excuses, one signature." } ] },
      { "say": "Subsection two, the merchant's confirmation. Between merchants, if one sends a written confirmation and the other has reason to know what it says, the receiver has ten days to object in writing. Rhyme time. Ten days to say no way.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§2-201(2)", "name": "Merchant's confirmation", "rule": "Merchants: object in writing in 10 days or be bound.", "hook": "Ten days to say no way." } ] },
      { "clear": true,
        "say": "Subsection three, the exceptions, where no writing is needed. Your acronym is SAP. Specially manufactured goods. Admission in court. Paid for, or accepted. Do not be a sap.",
        "add": [
          { "k": "card", "x": 60, "y": 114, "num": "§2-201(3)", "name": "Exceptions", "rule": "No writing needed: special goods, admission, performance.", "hook": "Don't be a SAP: Special, Admitted, Paid or accepted." },
          { "k": "text", "x": 300, "y": 360, "t": "S·A·P", "s": 60, "c": "blue" },
          { "k": "ul", "x": 300, "y": 376, "w": 175, "c": "blue" } ] }
    ] },
    { "title": "What the paper needs", "beats": [
      { "say": "The writing can be scrappy. A napkin that says, sold to Bea, forty chairs, signed Al, will do. No price, no delivery date, no problem. It just has to show a deal, carry a signature, and state a quantity.",
        "add": [
          { "k": "box", "x": 70, "y": 125, "w": 250, "h": 160 },
          { "k": "text", "x": 92, "y": 172, "t": "Sold to Bea:", "s": 26 },
          { "k": "text", "x": 92, "y": 215, "t": "40 chairs", "s": 32 },
          { "k": "text", "x": 225, "y": 262, "t": "— Al", "s": 26, "c": "blue" },
          { "k": "check", "x": 380, "y": 135 }, { "k": "text", "x": 428, "y": 152, "t": "shows a deal", "s": 26 },
          { "k": "check", "x": 380, "y": 185 }, { "k": "text", "x": 428, "y": 202, "t": "signed", "s": 26 },
          { "k": "check", "x": 380, "y": 235 }, { "k": "text", "x": 428, "y": 252, "t": "states a quantity", "s": 26 } ] },
      { "say": "But the quantity is a ceiling. If the real deal was one hundred chairs and the napkin says forty, the contract is enforceable only up to forty. A wrong price can be corrected by evidence. If the number's not in ink, the deal begins to shrink.",
        "add": [
          { "k": "text", "x": 70, "y": 340, "t": "Oral deal: 100.  Napkin: 40.", "s": 26 },
          { "k": "text", "x": 70, "y": 380, "t": "Enforceable up to 40 only.", "s": 28, "c": "red" },
          { "k": "text", "x": 70, "y": 425, "t": "If the number's not in ink, the deal begins to shrink.", "s": 22, "c": "blue" } ] },
      { "clear": true,
        "say": "And mind who signed. Signed by the party to be charged means the person being sued. Al signed the napkin, so Bea can enforce it against Al. Al cannot use it against Bea, because Bea never signed anything.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Signed by the party TO BE CHARGED", "s": 26 },
          { "k": "fig", "x": 170, "y": 400, "pose": "sad", "face": "sad", "label": "Al (signed)", "say": "Oops." },
          { "k": "fig", "x": 450, "y": 400, "pose": "hips", "face": "smirk", "hat": "hair", "label": "Bea (did not sign)" },
          { "k": "arrow", "x1": 400, "y1": 345, "x2": 225, "y2": 345, "c": "green" },
          { "k": "text", "x": 312, "y": 332, "t": "can sue", "s": 22, "c": "green", "anchor": "middle" } ] }
    ] },
    { "title": "The ten-day rule", "beats": [
      { "say": "Now the merchant shortcut. Two merchants agree by phone: two hundred crates of lemons. The seller follows up with a signed confirmation. The buyer reads it, files it, and says nothing.",
        "add": [
          { "k": "icon", "name": "phone", "x": 105, "y": 170 },
          { "k": "text", "x": 175, "y": 180, "t": "Phone deal: 200 crates of lemons", "s": 26 },
          { "k": "fig", "x": 160, "y": 400, "pose": "hold", "hat": "cap", "label": "Seller", "say": "Confirming!" },
          { "k": "icon", "name": "letter", "x": 320, "y": 345 },
          { "k": "fig", "x": 500, "y": 400, "pose": "shrug", "face": "flat", "hat": "tophat", "label": "Buyer", "say": "(silence)" } ] },
      { "clear": true,
        "say": "Eleven days later the price of lemons drops, and the buyer says, I never signed a thing. Too late. He had reason to know what the confirmation said, and did not object in writing within ten days. He loses the statute of frauds defence.",
        "add": [
          { "k": "icon", "name": "clock", "x": 120, "y": 200, "s": 1.5, "label": "10 days" },
          { "k": "text", "x": 225, "y": 175, "t": "No written objection in time", "s": 28 },
          { "k": "stamp", "x": 225, "y": 235, "t": "DEFENCE LOST", "s": 30, "c": "red" },
          { "k": "text", "x": 227, "y": 305, "t": "Caught without ever signing.", "s": 24 } ] },
      { "say": "Two cautions. The rule only works between merchants, so it will not catch a consumer. And it only removes the defence. The sender must still prove that the phone deal really happened.",
        "add": [
          { "k": "text", "x": 227, "y": 370, "t": "Merchants only.", "s": 26, "c": "blue" },
          { "k": "text", "x": 227, "y": 410, "t": "Sender must still prove the deal.", "s": 24 } ] }
    ] },
    { "title": "Three ways out: SAP", "beats": [
      { "say": "S, specially manufactured. A bait shop orally orders five hundred mugs printed with its own logo. The potter makes a substantial start. Nobody else wants Bob's Bait Shop mugs, so the potter can enforce the deal without a writing.",
        "add": [
          { "k": "text", "x": 62, "y": 160, "t": "S", "s": 44, "c": "blue" },
          { "k": "text", "x": 110, "y": 155, "t": "Specially manufactured goods", "s": 28 },
          { "k": "fig", "x": 170, "y": 400, "pose": "hold", "hat": "bun", "label": "Potter", "say": "500 logo mugs!" },
          { "k": "fig", "x": 430, "y": 400, "pose": "shrug", "hat": "cap", "face": "smirk", "label": "Bob", "say": "What order?" },
          { "k": "circle", "x": 620, "y": 330, "r": 44 },
          { "k": "text", "x": 620, "y": 337, "t": "BOB'S", "s": 20, "anchor": "middle" } ] },
      { "clear": true,
        "say": "A, admission. If the party being sued admits in a pleading or in testimony that a contract was made, it is enforceable. But only up to the quantity admitted.",
        "add": [
          { "k": "text", "x": 62, "y": 160, "t": "A", "s": 44, "c": "blue" },
          { "k": "text", "x": 110, "y": 155, "t": "Admission in court", "s": 28 },
          { "k": "text", "x": 110, "y": 195, "t": "Enforceable up to the quantity admitted.", "s": 23 },
          { "k": "icon", "name": "gavel", "x": 150, "y": 320, "s": 1.4 },
          { "k": "fig", "x": 480, "y": 400, "pose": "shrug", "face": "sad", "label": "Defendant", "say": "Fine. We agreed on 50." } ] },
      { "clear": true,
        "say": "P, paid for or accepted. If the buyer has paid and the seller took the money, or the goods were received and accepted, the deal is enforceable for those goods. Only for those goods, not for the rest of the order.",
        "add": [
          { "k": "text", "x": 62, "y": 160, "t": "P", "s": 44, "c": "blue" },
          { "k": "text", "x": 110, "y": 155, "t": "Paid for, or accepted", "s": 28 },
          { "k": "icon", "name": "money", "x": 160, "y": 270, "s": 1.2, "c": "green", "label": "payment taken" },
          { "k": "icon", "name": "crate", "x": 400, "y": 270, "s": 1.2, "label": "goods accepted" },
          { "k": "text", "x": 60, "y": 400, "t": "Enforceable for THOSE goods only.", "s": 28, "c": "red" } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Getting past the statute of frauds does not win the case. It only opens the courthouse door. You must still prove the contract and its terms. And for goods under five hundred dollars, no writing is needed at all.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "icon", "name": "door", "x": 130, "y": 280, "s": 1.6, "label": "Courthouse door" },
          { "k": "text", "x": 240, "y": 235, "t": "Writing = you may come in.", "s": 28 },
          { "k": "text", "x": 240, "y": 280, "t": "It does not prove the deal.", "s": 28, "c": "red" },
          { "k": "text", "x": 240, "y": 340, "t": "Under $500: no writing needed.", "s": 24 } ] },
      { "clear": true,
        "say": "Let's recap. Goods for five hundred dollars or more need a signed writing that shows a deal and states a quantity. The quantity is the ceiling. Between merchants, an unanswered confirmation binds after ten days. And remember SAP: specially made, admitted, paid for or accepted. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§2-201(1): $500+, signed, quantity", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "Enforceable only up to the quantity stated", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "Signed by the party to be charged", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "§2-201(2): merchants, 10 days to object", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "§2-201(3): S·A·P exceptions", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Statute of Frauds", "k": "ucc",
      "q": "A seller and buyer orally agree on the sale of 300 lamps for $6,000. The only writing is a note signed by the buyer: \"Confirming our lamp deal — 120 lamps.\" The buyer later refuses to take any lamps. To what extent can the seller enforce the contract?",
      "o": ["For all 300 lamps, because the oral agreement controls.", "Not at all, because the writing gets the quantity wrong.", "Not at all, because the note does not state the price.", "For 120 lamps, the quantity stated in the writing."],
      "a": 3,
      "w": "Under section 2-201, subsection one, a writing is good enough even if it leaves out or misstates a term, but the contract is not enforceable beyond the quantity shown in the writing. The price can be missing. The quantity is the ceiling." },
    { "t": "Statute of Frauds", "k": "ucc",
      "q": "Two merchants agree by phone on the sale of $9,000 of steel. The next day the seller emails a signed confirmation stating the quantity. The buyer reads it and does nothing. Three weeks later the buyer denies the deal and raises the statute of frauds. Result?",
      "o": ["The defence fails, because the buyer did not object in writing within 10 days of receiving the confirmation.", "The defence succeeds, because the buyer never signed anything.", "The defence succeeds, because phone deals for goods are never enforceable.", "The defence fails, because merchants are exempt from the statute of frauds."],
      "a": 0,
      "w": "This is the merchant's confirmation rule in section 2-201, subsection two. Between merchants, a written confirmation that the recipient has reason to know about binds the recipient unless they object in writing within ten days. Ten days to say no way." },
    { "t": "Statute of Frauds", "k": "ucc",
      "q": "A restaurant orally orders $3,000 of dinner plates stamped with its own crest. After the manufacturer has made half of them, the restaurant cancels and points out that nothing was signed. Can the manufacturer enforce the contract?",
      "o": ["No, because the price is over $500 and there is no signed writing.", "Yes, because the goods are specially manufactured, unsuitable for sale to others, and substantially begun.", "No, because only merchants can rely on oral contracts.", "Yes, because restaurants are always bound by oral orders."],
      "a": 1,
      "w": "Section 2-201, subsection three, makes an exception for specially manufactured goods that cannot be sold to others in the ordinary course, once the seller has made a substantial beginning. That is the S in SAP." },
    { "t": "Statute of Frauds", "k": "both",
      "q": "Which statement best compares the writing required by UCC 2-201 with the writing traditionally required by the common-law statute of frauds?",
      "o": ["They are identical: both need every term of the deal.", "The UCC is stricter: the writing must state the price and the delivery date.", "The UCC is more relaxed: the writing must show a contract, be signed, and state a quantity, even if other terms are missing.", "The common law requires no signature, but the UCC does."],
      "a": 2,
      "w": "The common-law statute of frauds generally looks for a signed memorandum stating the essential terms. Section 2-201 asks for much less: a signed writing showing that a contract for sale was made, with a quantity. Other terms may be missing or even wrong." },
    { "t": "Statute of Frauds", "k": "ucc",
      "q": "A buyer orally agrees to buy 10 bicycles for $2,000. The seller delivers 4 bicycles, which the buyer accepts and keeps. There is no writing. The buyer refuses the other 6. For how many bicycles is the contract enforceable?",
      "o": ["None, because there is no writing.", "Only the 4 bicycles that were received and accepted.", "All 10, because part performance proves the whole contract.", "All 10, but only if the buyer is a merchant."],
      "a": 1,
      "w": "Under section 2-201, subsection three, an oral contract is enforceable with respect to goods that have been received and accepted, or paid for with the payment accepted. The exception reaches only those goods, not the rest of the order." }
  ]
};

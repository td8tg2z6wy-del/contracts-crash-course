window.LESSONS = window.LESSONS || {};
window.LESSONS["ucc-delegation"] = {
  "id": "ucc-delegation",
  "title": "Delegation (2-210)",
  "track": "ucc",
  "sections": ["§2-210", "§2-609"],
  "scenes": [
    { "title": "Delegation (2-210)", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: delegation under the UCC.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Can someone else do my job?", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "point", "label": "Seller", "say": "You deliver it." },
          { "k": "fig", "x": 440, "y": 400, "pose": "shrug", "face": "shock", "hat": "cap", "label": "Delegate", "say": "Me?" } ] },
      { "say": "Two words to keep apart. Assignment hands over a right, like the right to be paid. Delegation hands over a duty, like the duty to deliver. The question today: when can a party to a sale of goods pass the job to someone else?",
        "add": [
          { "k": "text", "x": 545, "y": 330, "t": "Assign = RIGHTS", "s": 22, "c": "green" },
          { "k": "text", "x": 545, "y": 370, "t": "Delegate = DUTIES", "s": 22, "c": "blue" } ] },
      { "clear": true,
        "say": "Quick reminder: the UCC covers only sales of goods. At common law, Restatement sections 317 and 318 say rights can usually be assigned and duties can usually be delegated. For goods, UCC section 2-210 says much the same, all in one section.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Common law says...", "s": 28 },
          { "k": "text", "x": 60, "y": 195, "t": "§317: rights can usually be assigned. §318: duties can usually be delegated.", "s": 24, "w": 300 },
          { "k": "line", "x1": 385, "y1": 122, "x2": 385, "y2": 420 },
          { "k": "text", "x": 408, "y": 150, "t": "UCC says...", "s": 28, "c": "blue" },
          { "k": "text", "x": 408, "y": 195, "t": "§2-210: the same two ideas, in one section, for sales of goods.", "s": 24, "w": 310, "c": "blue" },
          { "k": "icon", "name": "crate", "x": 560, "y": 350, "label": "goods only" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Section 2-210, part one. A party may perform through a delegate, unless the contract says otherwise, or the other side has a substantial interest in having the original person perform. Memory hook: a relay race countdown. Two, one, zero: pass the baton.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-210", "name": "Delegating duties", "rule": "Delegate freely, unless agreed or they need YOU to do it.", "hook": "Relay countdown 2, 1, 0: pass the baton." } ] },
      { "say": "But passing the baton does not get you off the team. Delegation does not relieve the delegator of the duty to perform, or of liability for breach. If the delegate drops the baton, you still answer for it. Delegate the chore, but you're liable as before.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§2-210", "name": "Still on the hook", "rule": "Delegating does NOT release the delegator from liability.", "hook": "Delegate the chore, but you're liable as before." } ] },
      { "clear": true,
        "say": "Compare two contracts. A promise to deliver one hundred crates of standard bolts: any competent supplier will do, so delegate away. A promise to paint your portrait, or to push your products with best efforts: there, who performs really matters.",
        "add": [
          { "k": "icon", "name": "crate", "x": 190, "y": 215, "s": 1.5, "label": "Standard bolts" },
          { "k": "check", "x": 105, "y": 335 },
          { "k": "text", "x": 153, "y": 352, "t": "Delegable", "s": 28, "c": "green" },
          { "k": "line", "x1": 385, "y1": 122, "x2": 385, "y2": 420 },
          { "k": "fig", "x": 560, "y": 330, "pose": "hold", "hat": "hair", "label": "Portrait painter" },
          { "k": "text", "x": 560, "y": 410, "t": "Personal: not delegable", "s": 24, "c": "red", "anchor": "middle" } ] },
      { "clear": true,
        "say": "Rights are even easier. Either party may assign its rights, unless the assignment would materially change the other side's duty, or materially increase its burden or risk. Your acronym: D B R. Duty, burden, risk. Don't be reckless with someone else's deal.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-210", "name": "Assigning rights", "rule": "Assign freely unless it changes their Duty, Burden, Risk.", "hook": "D·B·R: Duty, Burden, Risk. Don't Be Reckless." } ] },
      { "say": "One more tool. The other party may treat any delegation as reasonable grounds for insecurity. So it can demand assurances from the newcomer under section 2-609, without giving up its rights. Nervous about the new guy? Ask for proof in writing.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§2-210 + §2-609", "name": "Demand assurances", "rule": "A delegation is grounds for insecurity: demand assurance.", "hook": "Nervous about the new guy? Ask for proof in writing." } ] }
    ] },
    { "title": "The hair care rival", "beats": [
      { "say": "Sally Beauty and Nexxus Products. Best Barber was the exclusive distributor of Nexxus hair care products in Texas. Then Best merged into Sally Beauty. Sally was wholly owned by Alberto-Culver, which made hair care products and competed directly with Nexxus. Nexxus cancelled.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Exclusive distributor of Nexxus in Texas", "s": 24 },
          { "k": "text", "x": 60, "y": 186, "t": "Best Barber → Sally Beauty (owned by a rival)", "s": 22, "c": "red" },
          { "k": "fig", "x": 150, "y": 400, "pose": "up", "hat": "hair", "label": "Sally Beauty", "say": "We'll sell Nexxus!" },
          { "k": "fig", "x": 400, "y": 400, "pose": "hips", "face": "flat", "hat": "tophat", "label": "Nexxus", "say": "You're my rival's." } ] },
      { "say": "The court sided with Nexxus. This was mostly a contract for goods, so the UCC applied. An exclusive distributor owes best efforts. Nexxus had a substantial interest in not having those efforts come from a competitor's subsidiary. So the duty could not be delegated without consent.",
        "add": [
          { "k": "stamp", "x": 530, "y": 250, "t": "NO DELEGATION", "s": 22, "c": "red" },
          { "k": "text", "x": 532, "y": 318, "t": "Sally Beauty v. Nexxus", "s": 20, "c": "blue" },
          { "k": "text", "x": 532, "y": 350, "t": "Best efforts from a rival? No.", "s": 20, "w": 195 } ] },
      { "clear": true,
        "say": "Judge Posner dissented. Distributors carry competing brands all the time, he said, and nothing showed Sally would neglect Nexxus. If Nexxus was worried, the UCC already had the answer: demand assurances under section 2-609, and cancel only if none arrive.",
        "add": [
          { "k": "fig", "x": 180, "y": 400, "pose": "point", "hat": "wig", "label": "Posner, dissenting", "say": "Just ask for assurances." },
          { "k": "text", "x": 370, "y": 170, "t": "Shops stock rival brands every day.", "s": 24, "w": 340 },
          { "k": "text", "x": 370, "y": 320, "t": "§2-609 was enough.", "s": 28, "c": "blue" } ] }
    ] },
    { "title": "The ice cream twin", "beats": [
      { "say": "Compare Berliner Foods and Pillsbury. Berliner distributed Haagen Dazs ice cream. Its owners sold the business to a rival ice cream maker, and Pillsbury, which owned the brand, pulled the plug. That court used the common law: a distributorship is a personal services contract, built on trust, so no transfer without consent.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Berliner Foods v. Pillsbury", "s": 26, "c": "blue" },
          { "k": "text", "x": 60, "y": 186, "t": "Häagen-Dazs distributor sold to a rival", "s": 22 },
          { "k": "text", "x": 60, "y": 262, "t": "Berliner: common law", "s": 26 },
          { "k": "text", "x": 60, "y": 294, "t": "personal services, needs consent", "s": 22 },
          { "k": "text", "x": 60, "y": 356, "t": "Sally Beauty: UCC §2-210", "s": 26 },
          { "k": "text", "x": 60, "y": 388, "t": "substantial interest in who performs", "s": 22 },
          { "k": "stamp", "x": 540, "y": 300, "t": "SAME RESULT", "s": 22, "c": "green" } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Delegation is not an exit. The delegator stays liable unless the other party agrees to release it, which is called a novation. And do not confuse the two words: you assign rights, you delegate duties.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "fig", "x": 200, "y": 400, "pose": "wave", "face": "smirk", "label": "Delegator", "say": "Not my problem now!" },
          { "k": "cross", "x": 300, "y": 300, "r": 44 },
          { "k": "text", "x": 390, "y": 330, "t": "Still liable...", "s": 30, "c": "red" },
          { "k": "text", "x": 390, "y": 370, "t": "unless there is a novation", "s": 24 } ] },
      { "clear": true,
        "say": "Let's recap. Under section 2-210, duties can be delegated unless agreed otherwise, or the other side has a substantial interest in the original performer. The delegator stays liable. Rights can be assigned unless duty, burden or risk materially change. A nervous party may demand assurances. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§2-210: delegate, unless they need YOU", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "Delegator stays liable", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "Assign rights, unless D·B·R change", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "Insecure? Demand assurances, §2-609", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "Sally Beauty: no best efforts by a rival", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Assignment and Delegation", "k": "ucc",
      "q": "A wholesaler contracts to deliver 500 standard cardboard boxes to a shop. Without asking the shop, the wholesaler delegates the job to another supplier, who delivers boxes that fall apart. Whom may the shop hold liable for the breach?",
      "o": ["Nobody, because the delegation was valid.", "Only the other supplier, because the wholesaler handed over the duty.", "The wholesaler, because delegating performance does not relieve the delegator of liability.", "Nobody, because the shop never consented to the delegation."],
      "a": 2,
      "w": "Under section 2-210, a duty to deliver ordinary goods can be delegated, but the delegation does not relieve the delegator of the duty to perform or of liability for breach. Delegate the chore, but you are liable as before." },
    { "t": "Assignment and Delegation", "k": "ucc",
      "q": "A shampoo maker appoints a firm as its exclusive distributor for a region, which carries a duty to use best efforts to sell the shampoo. The firm is then bought by a subsidiary of the maker's biggest competitor, which takes over the distributorship. The maker never consented. Under the majority view in Sally Beauty v. Nexxus, may the maker refuse the new distributor?",
      "o": ["Yes, because the maker has a substantial interest in not having a competitor perform the best-efforts duty.", "No, because every duty under a sale of goods contract can be delegated.", "No, because the maker can only sue the original firm for damages.", "Yes, because distributorship contracts can never be transferred to anyone."],
      "a": 0,
      "w": "Section 2-210 bars delegation where the other party has a substantial interest in having the original promisor perform. In Sally Beauty, the court held that an exclusive distributor's best-efforts duty cannot be delegated to a competitor's subsidiary without consent." },
    { "t": "Assignment and Delegation", "k": "ucc",
      "q": "A buyer of machine parts learns that its seller has delegated production to a firm the buyer has never heard of. The contract does not prohibit delegation. What may the buyer do under the UCC?",
      "o": ["Cancel at once, because any delegation is a breach.", "Nothing at all until the parts arrive.", "Refuse to pay the original seller and pay only the delegate.", "Treat the delegation as reasonable grounds for insecurity and demand assurances from the delegate."],
      "a": 3,
      "w": "Section 2-210 lets the other party treat a delegation as creating reasonable grounds for insecurity. The buyer may then demand adequate assurances under section 2-609, without giving up its rights against the original seller. This is the tool Judge Posner pointed to." },
    { "t": "Assignment and Delegation", "k": "both",
      "q": "Which statement is true of delegation under both Restatement §318 and UCC §2-210?",
      "o": ["Delegation always requires the other party's written consent.", "A duty may be delegated unless the other party has a substantial interest in the original person performing, and the delegator remains liable.", "Once a duty is delegated, the delegator is automatically released.", "Only duties to pay money can ever be delegated."],
      "a": 1,
      "w": "The common law and the UCC are twins here. Under Restatement section 318 and UCC section 2-210, duties are generally delegable unless personal performance matters to the other side. Either way, the delegator stays on the hook unless there is a novation." },
    { "t": "Assignment and Delegation", "k": "ucc",
      "q": "A furniture maker delivers 30 tables to a hotel, which owes $9,000 in sixty days. The maker assigns its right to that payment to a bank. The hotel objects that it never agreed to deal with a bank. Is the assignment effective?",
      "o": ["No, because rights under a sale of goods contract are personal.", "No, because the hotel did not consent.", "Yes, because paying the bank instead of the maker does not materially change the hotel's duty, burden or risk.", "Yes, but only if the bank also takes over the duty to deliver tables."],
      "a": 2,
      "w": "Under section 2-210, rights can be assigned unless the assignment would materially change the other party's duty, or materially increase its burden or risk. Paying the same sum to a different payee changes nothing that matters. Remember D B R." }
  ]
};

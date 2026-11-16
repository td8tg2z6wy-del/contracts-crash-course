window.LESSONS = window.LESSONS || {};
window.LESSONS["assignment"] = {
  "id": "assignment",
  "title": "Assignment and Delegation",
  "track": "cl",
  "sections": ["§317", "§318", "UCC §2-210"],
  "scenes": [
    { "title": "Assignment and Delegation", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: assignment and delegation.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Can someone else step in?", "s": 32 },
          { "k": "fig", "x": 130, "y": 400, "pose": "stand", "face": "smile", "label": "Party one" },
          { "k": "fig", "x": 300, "y": 400, "pose": "point", "face": "smirk", "hat": "hair", "label": "Party two", "say": "Meet my replacement." },
          { "k": "fig", "x": 520, "y": 400, "pose": "wave", "face": "smile", "hat": "cap", "label": "Newcomer", "say": "Hi!" } ] },
      { "clear": true,
        "say": "A contract gives you rights and duties. Rights are what you get. Duties are what you owe. Can you hand them to someone else? Rights are assigned. Duties are delegated. R, A, D, D. Rad.",
        "add": [
          { "k": "text", "x": 60, "y": 180, "t": "Rights", "s": 34, "c": "green" },
          { "k": "arrow", "x1": 190, "y1": 170, "x2": 290, "y2": 170 },
          { "k": "text", "x": 310, "y": 180, "t": "Assigned", "s": 34 },
          { "k": "text", "x": 60, "y": 260, "t": "Duties", "s": 34, "c": "red" },
          { "k": "arrow", "x1": 190, "y1": 250, "x2": 290, "y2": 250 },
          { "k": "text", "x": 310, "y": 260, "t": "Delegated", "s": 34 },
          { "k": "text", "x": 60, "y": 380, "t": "R·A·D·D", "s": 56, "c": "blue" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Section 317. A contract right can be assigned, unless that would materially change the other side's duty or risk. Picture three-one-seven. Three people, one right, and a seven shaped like a boot, because the assignee steps into the assignor's shoes.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§317", "name": "Assignment of rights", "rule": "Rights transfer, unless the obligor's duty really changes.", "hook": "3-1-7: three people, one right, and a 7 shaped like a boot." } ] },
      { "say": "Section 318. A duty can be delegated, unless the other side has a real stake in who performs. But delegating does not get you off the hook. Rhyme: three-one-eight, delegate, but you still carry the weight.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§318", "name": "Delegation of duties", "rule": "Duties can be handed off, but the delegator stays liable.", "hook": "Three-one-eight: delegate, but you still carry the weight." } ] },
      { "clear": true,
        "say": "For sales of goods, UCC section 2-210 says much the same. You may perform through a delegate, unless the other party has a substantial interest in having you perform, or control, the work yourself. Same rules, in the sales aisle.",
        "add": [
          { "k": "card", "x": 60, "y": 114, "num": "UCC §2-210", "name": "Goods: same idea", "rule": "Delegate, unless they have a real stake in YOU doing it.", "hook": "Same rules, in the sales aisle." },
          { "k": "icon", "name": "crate", "x": 390, "y": 350, "s": 1.5, "label": "Goods" } ] }
    ] },
    { "title": "Meet the cast", "beats": [
      { "say": "Meet the cast. Dana agrees to mow Omar's lawn all summer for three hundred dollars. Dana has a right, the money, and a duty, the mowing. Omar has the mirror image.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Mow the lawn all summer: $300", "s": 28 },
          { "k": "fig", "x": 150, "y": 400, "pose": "wave", "face": "smile", "hat": "hair", "label": "Dana" },
          { "k": "fig", "x": 400, "y": 400, "pose": "stand", "face": "smile", "hat": "cap", "label": "Omar" },
          { "k": "arrow", "x1": 200, "y1": 320, "x2": 350, "y2": 320 },
          { "k": "text", "x": 232, "y": 310, "t": "mowing", "s": 22 },
          { "k": "arrow", "x1": 350, "y1": 360, "x2": 200, "y2": 360, "c": "green" },
          { "k": "text", "x": 250, "y": 386, "t": "$300", "s": 22, "c": "green" } ] },
      { "clear": true,
        "say": "Dana assigns her right to the money to her sister, Ava. Dana is the assignor. Ava is the assignee. Omar, who owes the money, is the obligor. From now on, Omar pays Ava.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "ASSIGNMENT: the right to $300", "s": 28, "c": "green" },
          { "k": "fig", "x": 130, "y": 400, "pose": "point", "face": "smile", "hat": "hair", "label": "Dana: assignor" },
          { "k": "fig", "x": 350, "y": 400, "pose": "up", "face": "smile", "hat": "bun", "label": "Ava: assignee" },
          { "k": "fig", "x": 580, "y": 400, "pose": "hold", "face": "flat", "hat": "cap", "label": "Omar: obligor" },
          { "k": "arrow", "x1": 530, "y1": 340, "x2": 400, "y2": 340, "c": "green" },
          { "k": "text", "x": 440, "y": 328, "t": "$300", "s": 22, "c": "green" } ] },
      { "clear": true,
        "say": "Dana also delegates the mowing to her friend, Dev. Dana is the delegator. Dev is the delegatee. Omar, who is owed the mowing, is the obligee. If Dev mows badly, Omar can still sue Dana. She stays liable.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "DELEGATION: the duty to mow", "s": 28, "c": "red" },
          { "k": "fig", "x": 130, "y": 400, "pose": "point", "face": "smile", "hat": "hair", "label": "Dana: delegator" },
          { "k": "fig", "x": 350, "y": 400, "pose": "hold", "face": "flat", "hat": "hardhat", "label": "Dev: delegatee" },
          { "k": "fig", "x": 580, "y": 400, "pose": "stand", "face": "smile", "hat": "cap", "label": "Omar: obligee" },
          { "k": "arrow", "x1": 400, "y1": 340, "x2": 530, "y2": 340, "c": "red" },
          { "k": "text", "x": 425, "y": 328, "t": "mowing", "s": 22, "c": "red" } ] },
      { "clear": true,
        "say": "And the shoes. Ava steps into Dana's shoes, holes and all. If the lawn was never mowed, Omar can raise that defence against Ava, just as he could against Dana. An assignee gets no better rights than the assignor had.",
        "add": [
          { "k": "fig", "x": 170, "y": 400, "pose": "up", "face": "smile", "hat": "bun", "label": "Ava", "say": "My $300, please." },
          { "k": "fig", "x": 420, "y": 400, "pose": "hips", "face": "flat", "hat": "cap", "label": "Omar", "say": "What mowing?" },
          { "k": "text", "x": 60, "y": 150, "t": "The assignee stands in the assignor's shoes", "s": 26, "c": "blue" },
          { "k": "text", "x": 60, "y": 188, "t": "and takes subject to the obligor's defences.", "s": 24 } ] }
    ] },
    { "title": "Novation and limits", "beats": [
      { "say": "So how does Dana get out completely? Novation. Omar, Dana and Dev all agree that Dev replaces Dana. That is a brand new contract, and it needs everyone's consent. Only then is Dana released.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "NOVATION = a new contract", "s": 30 },
          { "k": "check", "x": 62, "y": 185 }, { "k": "text", "x": 110, "y": 202, "t": "everyone consents", "s": 26 },
          { "k": "check", "x": 62, "y": 235 }, { "k": "text", "x": 110, "y": 252, "t": "the old party is released", "s": 26 },
          { "k": "icon", "name": "doc", "x": 600, "y": 220, "s": 1.5, "label": "New deal" } ] },
      { "clear": true,
        "say": "Now the limits. You cannot assign a right if that would materially change the other side's duty or risk. Fire insurance on a quiet cottage cannot be assigned to the owner of a fireworks factory.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "No assignment that changes the obligor's risk", "s": 25, "c": "red" },
          { "k": "icon", "name": "house", "x": 130, "y": 235, "s": 1.3, "label": "Cottage" },
          { "k": "arrow", "x1": 200, "y1": 230, "x2": 300, "y2": 230 },
          { "k": "icon", "name": "factory", "x": 370, "y": 235, "s": 1.3, "label": "Fireworks" },
          { "k": "icon", "name": "fire", "x": 460, "y": 220, "s": 0.8, "c": "red" },
          { "k": "cross", "x": 225, "y": 205, "r": 44 } ] },
      { "say": "And you cannot delegate a duty that depends on personal skill or trust. If Omar hires a famous portrait painter, she cannot send her cousin to do it. He bargained for her hands.",
        "add": [
          { "k": "text", "x": 60, "y": 330, "t": "No delegation of personal skill or trust", "s": 25, "c": "red" },
          { "k": "text", "x": 60, "y": 372, "t": "A famous painter cannot send her cousin.", "s": 23 } ] }
    ] },
    { "title": "The ice-cream distributor", "beats": [
      { "say": "Now two cases about competitors. A distributor sells a famous brand of ice cream under a handshake deal. Then the distributor sells its whole business to a rival ice-cream maker. The brand's owner, Pillsbury, ends the distributorship.",
        "add": [
          { "k": "icon", "name": "truck", "x": 130, "y": 190, "s": 1.4, "label": "Distributor" },
          { "k": "arrow", "x1": 210, "y1": 185, "x2": 320, "y2": 185 },
          { "k": "text", "x": 228, "y": 172, "t": "sold to", "s": 22 },
          { "k": "icon", "name": "factory", "x": 400, "y": 190, "s": 1.4, "label": "Rival maker" },
          { "k": "fig", "x": 600, "y": 400, "pose": "hips", "face": "flat", "hat": "tophat", "label": "Brand owner", "say": "Then we're done." } ] },
      { "say": "Berliner Foods and Pillsbury. The owner was entitled to end it. A distributorship rests on trust in the distributor's own efforts, so it could not pass to a competitor without consent. Would a rival really push your ice cream ahead of its own?",
        "add": [
          { "k": "text", "x": 60, "y": 310, "t": "Berliner Foods v. Pillsbury", "s": 24, "c": "blue" },
          { "k": "text", "x": 60, "y": 350, "t": "Trust in the distributor: no transfer", "s": 23 },
          { "k": "text", "x": 60, "y": 384, "t": "to a competitor without consent.", "s": 23 } ] }
    ] },
    { "title": "The shampoo distributor", "beats": [
      { "say": "Same story, with shampoo. Nexxus, a hair-care maker, has an exclusive distributor in Texas. That distributor is bought by Sally Beauty, which is owned by one of Nexxus's direct competitors. Nexxus cancels.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Exclusive distributor, bought by a rival's company", "s": 25 },
          { "k": "fig", "x": 170, "y": 400, "pose": "up", "face": "smile", "hat": "hair", "label": "Sally Beauty", "say": "We'll sell it for you!" },
          { "k": "fig", "x": 420, "y": 400, "pose": "hips", "face": "flat", "hat": "bun", "label": "Nexxus", "say": "You work for my rival." } ] },
      { "clear": true,
        "say": "Sally Beauty and Nexxus Products. Shampoo is goods, so UCC section 2-210 applies. The court held that the duty to use best efforts under an exclusive distributorship cannot be delegated to a competitor's subsidiary without consent.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "Sally Beauty v. Nexxus Products", "s": 26, "c": "blue" },
          { "k": "text", "x": 60, "y": 195, "t": "Goods, so UCC §2-210", "s": 26 },
          { "k": "text", "x": 60, "y": 240, "t": "Nexxus has a real stake in WHO performs.", "s": 24 },
          { "k": "stamp", "x": 60, "y": 275, "t": "NO DELEGATION TO A COMPETITOR", "s": 24, "c": "red" } ] },
      { "say": "Judge Posner dissented. Distributors carry rival brands all the time, he said, and nothing showed Sally would slack. If Nexxus was worried, it could demand assurances, and sue if best efforts failed. No automatic ban.",
        "add": [
          { "k": "text", "x": 60, "y": 370, "t": "Posner, dissenting: no automatic ban.", "s": 24 },
          { "k": "text", "x": 60, "y": 406, "t": "Demand assurances; sue if efforts fail.", "s": 23 } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Thinking that delegation sets you free. It does not. Hand off the mowing, and you are still on the hook if it is done badly. Only a novation, with everyone's consent, releases you.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "fig", "x": 170, "y": 400, "pose": "wave", "face": "smirk", "hat": "hair", "label": "Delegator", "say": "Not my problem now!" },
          { "k": "cross", "x": 290, "y": 290, "r": 46 },
          { "k": "text", "x": 400, "y": 240, "t": "Delegate = still liable", "s": 26, "c": "red" },
          { "k": "text", "x": 400, "y": 290, "t": "Novation = released", "s": 26, "c": "green" } ] },
      { "clear": true,
        "say": "Let's recap. Rights are assigned, duties are delegated. The assignee stands in the assignor's shoes. The delegator still carries the weight, unless there is a novation. No assignment that changes the risk. No delegation of personal trust, least of all to a competitor. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§317 assign rights; §318 delegate duties", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "Assignee: assignor's shoes, defences too", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "Delegator stays liable, unless novation", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "No material change to the obligor's duty", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "No personal trust handed to a rival", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Assignment and Delegation", "k": "cl",
      "q": "A web designer builds a site for a client, who owes her $5,000. The designer assigns her right to the $5,000 to her landlord. When the landlord demands payment, the client shows that the site was never finished. What is the landlord's position?",
      "o": ["The landlord takes free of the client's complaint, because the landlord did nothing wrong.", "The assignment is void, because rights to money cannot be assigned.", "The landlord takes the right subject to the defences the client had against the designer.", "The landlord can sue the client for the full $5,000 and the client must then sue the designer."],
      "a": 2,
      "w": "An assignee steps into the assignor's shoes. Under section 317 the right passes to the landlord, but it is the same right, with the same weaknesses. Whatever defence the obligor had against the assignor works against the assignee." },
    { "t": "Assignment and Delegation", "k": "cl",
      "q": "A gardener contracts to weed a homeowner's borders every week, then delegates the job to a competent friend. The friend stops turning up. The homeowner never agreed to release the gardener. Whom can the homeowner hold liable?",
      "o": ["The gardener, who remains liable on the original contract.", "No one, because the duty was validly delegated.", "Only the friend, because the gardener dropped out of the contract.", "The gardener, but only if the friend cannot pay."],
      "a": 0,
      "w": "Section 318: delegating a duty does not discharge the delegator. Three-one-eight, you still carry the weight. The gardener is released only if the homeowner agrees to a novation." },
    { "t": "Assignment and Delegation", "k": "cl",
      "q": "What distinguishes a novation from an ordinary delegation of duties?",
      "o": ["A novation transfers only rights, never duties.", "A novation must be approved by a court.", "A novation happens automatically whenever a duty is delegated.", "A novation is a new contract, agreed by all the parties, that substitutes a new party and releases the old one."],
      "a": 3,
      "w": "A delegation is done by one party alone, and leaves the delegator liable. A novation is a fresh agreement, needing the consent of everyone involved, under which the new party takes over and the original party is discharged." },
    { "t": "Assignment and Delegation", "k": "cl",
      "q": "A gallery commissions a celebrated sculptor to carve a statue. The sculptor, busy with other work, hands the commission to a talented former student without asking the gallery. Is the delegation effective?",
      "o": ["Yes, because any duty may be delegated to a competent person.", "No, because the duty depends on the sculptor's personal skill and reputation.", "Yes, provided the student charges the same price.", "No, because duties under a contract can never be delegated."],
      "a": 1,
      "w": "Under section 318, a duty cannot be delegated where the other party has a substantial interest in having that particular person perform. The gallery bargained for this sculptor's hands, not for a sculpture by someone else." },
    { "t": "Assignment and Delegation", "k": "both",
      "q": "A coffee roaster appoints a firm as its exclusive distributor in one state, with a duty to use best efforts to sell the roaster's beans. The firm is then bought by a company owned by the roaster's biggest competitor, which takes over the distributorship. Under the majority's approach in Sally Beauty v. Nexxus Products, may the roaster refuse the substitution?",
      "o": ["No, because UCC 2-210 allows every duty to be delegated.", "No, unless the roaster first proves that sales have actually fallen.", "Yes, because the roaster has a substantial interest in not having its best-efforts duty performed by a competitor's subsidiary.", "Yes, because distributorships are outside the UCC altogether."],
      "a": 2,
      "w": "UCC section 2-210 lets a party perform through a delegate unless the other side has a substantial interest in having the original promisor perform. The Sally Beauty majority held that best efforts under an exclusive distributorship cannot be delegated to a competitor's subsidiary without consent. Judge Posner, dissenting, would have required proof of real harm." }
  ]
};

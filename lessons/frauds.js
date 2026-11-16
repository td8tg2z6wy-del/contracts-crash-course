window.LESSONS = window.LESSONS || {};
window.LESSONS["frauds"] = {
  "id": "frauds",
  "title": "Statute of Frauds",
  "track": "cl",
  "sections": ["§110", "§130", "§131"],
  "scenes": [
    { "title": "Statute of Frauds", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: the statute of frauds.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Get it in writing!", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "wave", "label": "Promisor", "say": "My word is my bond." },
          { "k": "fig", "x": 450, "y": 400, "pose": "hold", "face": "flat", "label": "Promisee", "say": "Sign this anyway." } ] },
      { "say": "Most oral contracts are perfectly enforceable. But for a few kinds of deal, the law demands a signed writing. That rule is the statute of frauds. The name is misleading. It is not about committing fraud. It is about preventing made-up contracts.",
        "add": [
          { "k": "text", "x": 570, "y": 310, "t": "Some deals need a SIGNED WRITING", "s": 24, "c": "red", "w": 165 } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Section 110 lists the contracts that need a writing. There are six classic categories, and the acronym is famous. My legs. M, Y, L, E, G, S. Let me write them out.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§110", "name": "Which contracts", "rule": "Six kinds of contract need a signed writing.", "hook": "MY LEGS: Marriage, Year, Land, Executor, Goods, Surety." } ] },
      { "clear": true,
        "say": "M, promises made in return for marriage. Y, contracts that cannot be performed within a year. L, sales of land. E, an executor's promise to pay the estate's debts personally. G, goods of five hundred dollars or more. S, suretyship: promising to pay someone else's debt.",
        "add": [
          { "k": "text", "x": 62, "y": 137, "t": "M", "s": 30, "c": "blue" }, { "k": "text", "x": 110, "y": 135, "t": "Marriage as consideration", "s": 26 },
          { "k": "text", "x": 62, "y": 187, "t": "Y", "s": 30, "c": "blue" }, { "k": "text", "x": 110, "y": 185, "t": "Year: can't be done within one", "s": 26 },
          { "k": "text", "x": 62, "y": 237, "t": "L", "s": 30, "c": "blue" }, { "k": "text", "x": 110, "y": 235, "t": "Land", "s": 26 },
          { "k": "text", "x": 62, "y": 287, "t": "E", "s": 30, "c": "blue" }, { "k": "text", "x": 110, "y": 285, "t": "Executor pays estate debts personally", "s": 26 },
          { "k": "text", "x": 62, "y": 337, "t": "G", "s": 30, "c": "blue" }, { "k": "text", "x": 110, "y": 335, "t": "Goods, $500 or more", "s": 26 },
          { "k": "text", "x": 62, "y": 387, "t": "S", "s": 30, "c": "blue" }, { "k": "text", "x": 110, "y": 385, "t": "Suretyship: another's debt", "s": 26 } ] },
      { "say": "One note on the G. The goods rule actually lives in the Uniform Commercial Code, at UCC section 2-201. We cover it on the UCC track. Everything else today is common law.",
        "add": [
          { "k": "arrow", "x1": 370, "y1": 327, "x2": 460, "y2": 327, "c": "blue" },
          { "k": "text", "x": 475, "y": 335, "t": "UCC 2-201", "s": 26, "c": "blue" },
          { "k": "text", "x": 475, "y": 362, "t": "see the UCC track", "s": 18, "c": "blue" } ] },
      { "clear": true,
        "say": "Section 130, the one-year rule. Count from the day the contract is made. A writing is needed only if the deal cannot possibly be fully performed within a year. Rhyme time. If it can be done within a year, the statute is not here.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§130", "name": "The one-year rule", "rule": "Needs a writing only if it CAN'T be done within a year.", "hook": "If it can be done within a year, the statute's not here." } ] },
      { "say": "Section 131, what the writing needs. Picture the number. One, three, one. One writing. Three things inside: the subject matter, a sign that a contract was made, and the essential terms. And one signature, from the party to be charged. That means the person being sued.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§131", "name": "What the writing needs", "rule": "Signed by the party to be charged, with essential terms.", "hook": "1-3-1: one writing, three essentials, one signature." } ] }
    ] },
    { "title": "The one-year puzzle", "beats": [
      { "say": "Try it. An oral promise of a job for two years. That cannot be finished within a year, so it needs a writing. An oral promise of a job for life? No writing needed. Sadly, a life can end within a year.",
        "add": [
          { "k": "icon", "name": "clock", "x": 105, "y": 185, "s": 1.1 },
          { "k": "text", "x": 175, "y": 160, "t": "Job for 2 years", "s": 28 },
          { "k": "text", "x": 470, "y": 160, "t": "needs a writing", "s": 24, "c": "red" },
          { "k": "text", "x": 175, "y": 225, "t": "Job for life", "s": 28 },
          { "k": "text", "x": 470, "y": 225, "t": "no writing needed", "s": 24, "c": "green" } ] },
      { "say": "And watch the starting line. An oral deal made today, for six months of work beginning nine months from now, needs a writing. The clock runs from the making of the contract, not from the first day of work.",
        "add": [
          { "k": "line", "x1": 80, "y1": 345, "x2": 710, "y2": 345 },
          { "k": "text", "x": 80, "y": 330, "t": "made today", "s": 20 },
          { "k": "text", "x": 310, "y": 330, "t": "work starts: month 9", "s": 20 },
          { "k": "text", "x": 560, "y": 330, "t": "ends: month 15", "s": 20, "c": "red" },
          { "k": "text", "x": 80, "y": 405, "t": "Over a year from MAKING = writing needed", "s": 24 } ] }
    ] },
    { "title": "The agent and the star", "beats": [
      { "say": "Rosenthal and Fonda. A lawyer worked for the actor Jane Fonda under an oral deal: ten percent of her earnings from projects he worked on. Either side could end it at any time. Years later she fired him, and he sued for his commissions.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Oral deal: 10% of earnings", "s": 28 },
          { "k": "fig", "x": 200, "y": 400, "pose": "hold", "hat": "tophat", "label": "Rosenthal", "say": "My ten percent?" },
          { "k": "fig", "x": 450, "y": 400, "pose": "hips", "face": "flat", "hat": "hair", "label": "Fonda", "say": "Nothing's signed." } ] },
      { "clear": true,
        "say": "Which state's law? It mattered. In California, a deal either side can end at will can be performed within a year, so no writing is needed. New York is stricter. If commissions could keep falling due beyond a year, whatever the client does, a writing is required.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "CALIFORNIA", "s": 28, "c": "blue" },
          { "k": "text", "x": 60, "y": 195, "t": "Can end at will, so it", "s": 22 },
          { "k": "text", "x": 60, "y": 227, "t": "CAN finish within a year", "s": 22 },
          { "k": "text", "x": 60, "y": 285, "t": "No writing needed", "s": 24, "c": "green" },
          { "k": "line", "x1": 390, "y1": 122, "x2": 390, "y2": 310 },
          { "k": "text", "x": 420, "y": 150, "t": "NEW YORK", "s": 28, "c": "blue" },
          { "k": "text", "x": 420, "y": 195, "t": "Duty to pay could run", "s": 22 },
          { "k": "text", "x": 420, "y": 227, "t": "on past a year", "s": 22 },
          { "k": "text", "x": 420, "y": 285, "t": "Writing needed", "s": 24, "c": "red" } ] },
      { "say": "The court applied New York law. His commissions depended on money that other people might pay her for years to come, so the deal could not be completed within a year. No signed writing, no claim. Rosenthal lost.",
        "add": [
          { "k": "stamp", "x": 60, "y": 375, "t": "NO WRITING = NO CLAIM", "s": 26, "c": "red" },
          { "k": "text", "x": 420, "y": 385, "t": "Rosenthal v. Fonda", "s": 22, "c": "blue" } ] }
    ] },
    { "title": "Three scraps of paper", "beats": [
      { "say": "Crabtree and Elizabeth Arden. Crabtree was offered a two-year job with pay rising in steps. A secretary jotted the terms on an order form: two years to make good. Nobody signed it. Later, two payroll cards with his salary were signed by company officers.",
        "add": [
          { "k": "icon", "name": "doc", "x": 130, "y": 190, "label": "Memo (unsigned)" },
          { "k": "icon", "name": "doc", "x": 350, "y": 190, "label": "Payroll card (signed)" },
          { "k": "icon", "name": "doc", "x": 590, "y": 190, "label": "Payroll card (signed)" },
          { "k": "text", "x": 60, "y": 310, "t": "\"2 years to make good\"", "s": 26 } ] },
      { "say": "When a promised raise was refused, he sued. The company said, no single signed paper holds the whole deal. The court said it does not have to. Several writings can be read together, if they clearly belong to the same transaction and at least one is signed. Crabtree won.",
        "add": [
          { "k": "stamp", "x": 60, "y": 385, "t": "READ TOGETHER = ENOUGH", "s": 24, "c": "green" },
          { "k": "text", "x": 400, "y": 395, "t": "Crabtree v. Elizabeth Arden Sales", "s": 21, "c": "blue" } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. The one-year rule asks whether the deal can possibly be finished within a year, not whether it probably will be. A building job expected to take three years, agreed orally? If it could be done within a year, even at heroic speed, no writing is needed.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "cross", "x": 62, "y": 185, "r": 22 }, { "k": "text", "x": 110, "y": 204, "t": "Will it probably take over a year?", "s": 26 },
          { "k": "check", "x": 62, "y": 250 }, { "k": "text", "x": 110, "y": 268, "t": "Is it IMPOSSIBLE to finish in a year?", "s": 26 },
          { "k": "icon", "name": "clock", "x": 620, "y": 370, "s": 1.3 } ] },
      { "clear": true,
        "say": "Let's recap. Some contracts need a signed writing. My legs: marriage, year, land, executor, goods, suretyship. The year runs from the making. The writing needs essential terms and the defendant's signature. And several papers can add up to one. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§110: MY LEGS need a signed writing", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§130: one year, counted from making", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "§131: essential terms + signature", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "Rosenthal: New York v. California", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "Crabtree: several writings together", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Statute of Frauds", "k": "cl",
      "q": "A restaurant owner orally promises a chef, \"You have a job here for the rest of your life.\" Two years later the chef is fired and sues. The owner raises the one-year provision of the statute of frauds. Does it bar the claim?",
      "o": ["Yes, because the chef has already worked more than a year.", "Yes, because lifetime contracts always last longer than a year.", "No, because the contract could have been fully performed within a year if the chef had died.", "No, because employment contracts are never within the statute."],
      "a": 2,
      "w": "Section 130 covers only contracts that cannot possibly be performed within a year of their making. A lifetime contract could be completed within a year, because a life can end at any time. If it can be done within a year, the statute is not here." },
    { "t": "Statute of Frauds", "k": "cl",
      "q": "A contract within the statute of frauds is recorded in a memo signed only by the buyer. The buyer sues the seller, who signed nothing. Can the buyer enforce the contract against the seller on the strength of that memo?",
      "o": ["No, because the writing must be signed by the party to be charged, here the seller.", "Yes, because one signature is enough for both parties.", "Yes, because the buyer wrote the memo.", "No, because both parties must always sign the same page."],
      "a": 0,
      "w": "Under section 131 the writing must be signed by the party to be charged, meaning the person against whom enforcement is sought. The seller signed nothing, so the memo does not satisfy the statute against the seller. It would work against the buyer." },
    { "t": "Statute of Frauds", "k": "cl",
      "q": "A nephew borrows $8,000 from a bank. His uncle telephones the bank and says, \"If he doesn't pay, I will.\" The nephew defaults and the bank sues the uncle. What is the uncle's best defence?",
      "o": ["The promise was made by telephone, so it was never an offer.", "The debt was under $10,000.", "Only contracts for land need a writing.", "A promise to answer for another person's debt is within the statute of frauds and needs a signed writing."],
      "a": 3,
      "w": "This is suretyship, the S in my legs. Under section 110 a promise to pay the debt of another must be evidenced by a writing signed by the promisor. The uncle's oral promise is not enforceable against him." },
    { "t": "Statute of Frauds", "k": "cl",
      "q": "On January 1, a designer orally agrees to work for a studio for eleven months, starting on March 1. Is the agreement within the one-year provision?",
      "o": ["No, because the work itself lasts less than a year.", "Yes, because performance cannot be completed within a year of the making of the contract.", "No, because the year is measured from the first day of work.", "Yes, because all employment contracts need a writing."],
      "a": 1,
      "w": "The year is measured from the making of the contract, not from the start of performance. Eleven months of work beginning two months after the deal ends thirteen months after it was made. Under section 130 it needs a writing." },
    { "t": "Statute of Frauds", "k": "cl",
      "q": "An employee's two-year oral contract is reflected in an unsigned office memo listing the terms, and in two payroll forms signed by company officers that state his salary. Under Crabtree v. Elizabeth Arden Sales, can these satisfy the statute of frauds?",
      "o": ["Yes, because separate writings may be read together when they clearly relate to the same transaction and at least one is signed by the party to be charged.", "No, because the statute requires one single signed document.", "No, because payroll forms are not contracts.", "Yes, because an unsigned memo is always enough."],
      "a": 0,
      "w": "Crabtree held that the memorandum may be pieced together from several writings. The signed payroll forms and the unsigned memo plainly referred to the same employment deal, so together they supplied the essential terms and the signature." }
  ]
};

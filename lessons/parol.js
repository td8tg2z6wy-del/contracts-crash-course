window.LESSONS = window.LESSONS || {};
window.LESSONS["parol"] = {
  "id": "parol",
  "title": "Parol Evidence Rule",
  "track": "cl",
  "sections": ["§209", "§210", "§213", "§214"],
  "scenes": [
    { "title": "Parol Evidence Rule", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: the parol evidence rule.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "But you PROMISED!", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "up", "face": "sad", "label": "Buyer", "say": "You said so!" },
          { "k": "fig", "x": 450, "y": 400, "pose": "hold", "face": "smirk", "hat": "tophat", "label": "Seller", "say": "Not in here." },
          { "k": "icon", "name": "doc", "x": 540, "y": 325 } ] },
      { "say": "Here is the pattern. Two parties talk, promise things, swap drafts. Then they sign a final written contract. Later one of them says, but before we signed, you promised me something extra. Can the court even listen to that?",
        "add": [
          { "k": "text", "x": 590, "y": 300, "t": "Talks and drafts, then a signed writing", "s": 22, "c": "red", "w": 150 } ] },
      { "clear": true,
        "say": "Parol evidence is anything from outside the four corners of the writing: earlier talks, side promises, old drafts. The parol evidence rule decides when the final writing shuts that evidence out. It all turns on one word. Integration.",
        "add": [
          { "k": "box", "x": 260, "y": 160, "w": 190, "h": 230 },
          { "k": "text", "x": 355, "y": 270, "t": "THE", "s": 24, "anchor": "middle" },
          { "k": "text", "x": 355, "y": 300, "t": "WRITING", "s": 24, "anchor": "middle" },
          { "k": "text", "x": 60, "y": 200, "t": "earlier talks", "s": 22, "c": "red" },
          { "k": "text", "x": 60, "y": 285, "t": "side promises", "s": 22, "c": "red" },
          { "k": "text", "x": 60, "y": 370, "t": "old drafts", "s": 22, "c": "red" },
          { "k": "text", "x": 480, "y": 240, "t": "PAROL EVIDENCE", "s": 26, "c": "red" },
          { "k": "text", "x": 480, "y": 278, "t": "= outside the four corners", "s": 20 } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Four sections. Section 209. An integrated agreement is a writing the parties intend as the final expression of one or more terms. Signing alone does not prove it; the court decides. Rhyme time. Two-oh-nine: is this the final line?",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§209", "name": "Integrated agreement", "rule": "A writing meant as the FINAL word on one or more terms.", "hook": "Two-oh-nine: is this the final line?" } ] },
      { "say": "Section 210. Integration comes in two sizes. Complete means the writing is the whole deal, full stop. Partial means it is final on what it says, but consistent extra terms may still be added. Complete is the whole pie. Partial is a slice.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§210", "name": "Complete or partial", "rule": "Complete = the entire deal. Partial = final only so far.", "hook": "Complete is the whole pie. Partial is a slice." } ] },
      { "clear": true,
        "say": "Section 213, the rule itself. A final writing wipes out earlier agreements that contradict it. A complete one also wipes out earlier agreements within its scope, even consistent ones. Picture the thirteen in two-thirteen. Unlucky thirteen, for every earlier promise.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§213", "name": "The parol evidence rule", "rule": "A final writing discharges earlier inconsistent deals.", "hook": "Unlucky 13: bad luck for every earlier promise." } ] },
      { "say": "Section 214, what still gets in. Remember firm. F, fraud, duress, mistake and other invalidity. I, to show whether the writing is integrated. R, remedies like rescission or reformation. M, the meaning of the words. The writing is firm, except for firm.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§214", "name": "What still comes in", "rule": "Evidence allowed to show integration, meaning, fraud.", "hook": "F-I-R-M: Fraud, Integration, Remedies, Meaning." } ] }
    ] },
    { "title": "The turbine", "beats": [
      { "say": "Pacific Gas and Electric hired Thomas Drayage to work on its steam turbine. The contract said Thomas would indemnify against all damage to property. Then a cover fell and damaged the turbine itself. Thomas said, that clause only meant other people's property, and I can prove it.",
        "add": [
          { "k": "icon", "name": "factory", "x": 110, "y": 175, "s": 1.2 },
          { "k": "text", "x": 190, "y": 165, "t": "\"indemnify... all damage to property\"", "s": 24 },
          { "k": "fig", "x": 300, "y": 400, "pose": "shrug", "hat": "hardhat", "label": "Thomas Drayage", "say": "Only third parties!" },
          { "k": "fig", "x": 540, "y": 400, "pose": "hips", "face": "flat", "hat": "tophat", "label": "PG&E", "say": "It says ALL." } ] },
      { "clear": true,
        "say": "The trial judge said the words were plain and refused the evidence. California's Supreme Court reversed. Words have no fixed meaning apart from context. So extrinsic evidence comes in whenever the language is reasonably susceptible to the meaning being offered.",
        "add": [
          { "k": "stamp", "x": 60, "y": 160, "t": "EVIDENCE ADMITTED", "s": 28, "c": "green" },
          { "k": "text", "x": 62, "y": 225, "t": "Pacific Gas & Electric v. G.W. Thomas Drayage", "s": 21, "c": "blue" },
          { "k": "text", "x": 62, "y": 290, "t": "Test: is the language", "s": 26 },
          { "k": "text", "x": 62, "y": 326, "t": "REASONABLY SUSCEPTIBLE", "s": 26, "c": "red" },
          { "k": "text", "x": 62, "y": 362, "t": "to the meaning offered?", "s": 26 } ] }
    ] },
    { "title": "Four corners", "beats": [
      { "say": "New York takes a harder line. In W W W Associates and Giancontieri, a land sale contract let either party cancel if a lawsuit was still pending by June first. It also had a merger clause, saying the writing was the entire agreement.",
        "add": [
          { "k": "icon", "name": "doc", "x": 120, "y": 220, "s": 1.6, "label": "Sale contract" },
          { "k": "text", "x": 230, "y": 180, "t": "\"Either party may cancel\"", "s": 26 },
          { "k": "text", "x": 230, "y": 240, "t": "Merger clause:", "s": 24, "c": "blue" },
          { "k": "text", "x": 230, "y": 274, "t": "\"this is the entire agreement\"", "s": 24 } ] },
      { "clear": true,
        "say": "The sellers cancelled. The buyer, a developer, said the clause was really meant to protect only him, and offered evidence of the negotiations. The court refused to look. The words were clear and the writing complete. Stay inside the four corners.",
        "add": [
          { "k": "box", "x": 70, "y": 140, "w": 180, "h": 220 },
          { "k": "text", "x": 160, "y": 240, "t": "CLEAR +", "s": 22, "anchor": "middle" },
          { "k": "text", "x": 160, "y": 270, "t": "COMPLETE", "s": 22, "anchor": "middle" },
          { "k": "stamp", "x": 380, "y": 150, "t": "EVIDENCE EXCLUDED", "s": 24, "c": "red" },
          { "k": "fig", "x": 500, "y": 400, "pose": "pointL", "face": "sad", "label": "Buyer", "say": "It was for ME!" },
          { "k": "text", "x": 62, "y": 410, "t": "W.W.W. Associates v. Giancontieri", "s": 20, "c": "blue" } ] },
      { "clear": true,
        "say": "So two camps. In California, context comes in to show what the words could mean. In New York, a clear and complete writing speaks for itself, and outside evidence stays outside. On an exam, name both approaches.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "CALIFORNIA", "s": 28, "c": "blue" },
          { "k": "text", "x": 60, "y": 192, "t": "Pacific Gas & Electric", "s": 24 },
          { "k": "text", "x": 60, "y": 232, "t": "context always considered", "s": 22 },
          { "k": "text", "x": 60, "y": 266, "t": "\"reasonably susceptible\"", "s": 22 },
          { "k": "line", "x1": 390, "y1": 122, "x2": 390, "y2": 290 },
          { "k": "text", "x": 420, "y": 150, "t": "NEW YORK", "s": 28, "c": "blue" },
          { "k": "text", "x": 420, "y": 192, "t": "W.W.W. Associates", "s": 24 },
          { "k": "text", "x": 420, "y": 232, "t": "four corners first", "s": 22 },
          { "k": "text", "x": 420, "y": 266, "t": "clear writing = no extras", "s": 22 },
          { "k": "icon", "name": "scale", "x": 390, "y": 370 } ] }
    ] },
    { "title": "The icehouse", "beats": [
      { "say": "Finally, Mitchill and Lath. Missus Mitchill bought a farm from the Laths. Across the road stood their ugly icehouse. She said they promised, out loud, to remove it. The written contract for the farm said nothing about any icehouse.",
        "add": [
          { "k": "icon", "name": "house", "x": 110, "y": 180, "s": 1.3, "label": "The farm" },
          { "k": "box", "x": 610, "y": 135, "w": 100, "h": 70, "c": "blue" },
          { "k": "text", "x": 660, "y": 180, "t": "ICE", "s": 26, "c": "blue", "anchor": "middle" },
          { "k": "fig", "x": 250, "y": 400, "pose": "point", "hat": "bun", "label": "Mrs Mitchill", "say": "You promised!" },
          { "k": "fig", "x": 470, "y": 400, "pose": "shrug", "hat": "cap", "label": "The Laths", "say": "Where's it written?" } ] },
      { "clear": true,
        "say": "An oral side deal can survive a writing only if it passes three tests. One, it is collateral in form. Two, it does not contradict the writing. Three, it is not something the parties would ordinarily be expected to put in the writing.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Oral side agreement: 3 tests", "s": 28 },
          { "k": "text", "x": 60, "y": 210, "t": "1. Collateral in form", "s": 26 },
          { "k": "text", "x": 60, "y": 262, "t": "2. Does not contradict the writing", "s": 26 },
          { "k": "text", "x": 60, "y": 314, "t": "3. Not ordinarily put in the writing", "s": 26 } ] },
      { "say": "The promise failed test three. Removing a building next door is closely tied to buying the farm. You would expect to find it in a full written contract of sale. It was not there, so it was not enforceable. The icehouse stayed.",
        "add": [
          { "k": "cross", "x": 510, "y": 292, "r": 26 },
          { "k": "stamp", "x": 60, "y": 385, "t": "ICEHOUSE STAYS", "s": 26, "c": "red" },
          { "k": "text", "x": 370, "y": 395, "t": "Mitchill v. Lath", "s": 22, "c": "blue" } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. The rule only blocks agreements made before or at the signing. A change agreed afterwards is a modification, and the rule does not touch it. And it never blocks evidence of fraud, duress or mistake.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "line", "x1": 70, "y1": 290, "x2": 710, "y2": 290 },
          { "k": "line", "x1": 380, "y1": 265, "x2": 380, "y2": 315 },
          { "k": "text", "x": 380, "y": 345, "t": "SIGNING", "s": 22, "anchor": "middle" },
          { "k": "text", "x": 80, "y": 260, "t": "BEFORE: rule applies", "s": 24, "c": "red" },
          { "k": "text", "x": 410, "y": 260, "t": "AFTER: no rule", "s": 24, "c": "green" },
          { "k": "text", "x": 80, "y": 410, "t": "Fraud, duress, mistake: always heard", "s": 24 } ] },
      { "clear": true,
        "say": "Let's recap. An integrated writing is the final word. If partial, consistent extras may come in. If complete, nothing within its scope does. Evidence of meaning, fraud and integration still gets in. California looks at context; New York stays in the four corners. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§209: integrated = final writing", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§210: complete (pie) or partial (slice)", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "§213: earlier deals discharged", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "§214: F-I-R-M still comes in", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "PG&E v. W.W.W.; Mitchill's 3 tests", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Parol Evidence Rule", "k": "cl",
      "q": "Lena buys a used car under a detailed signed contract that says, \"This writing is the complete and exclusive statement of the parties' agreement.\" It does not mention a roof rack. Lena wants to testify that, the day before signing, the seller orally promised to include one. Is the testimony admissible to add the term?",
      "o": ["Yes, because oral promises are always enforceable.", "No, because a completely integrated writing discharges earlier agreements within its scope.", "Yes, because the roof rack does not contradict the writing.", "No, because car sales can never include extras."],
      "a": 1,
      "w": "Under section 213, a completely integrated agreement discharges prior agreements within its scope, even consistent ones. The merger clause is strong evidence of complete integration. A slice can take extras; the whole pie cannot." },
    { "t": "Parol Evidence Rule", "k": "cl",
      "q": "A signed contract for the sale of a boat contains a merger clause. The buyer offers evidence that, before signing, the seller knowingly lied about the engine having been rebuilt. Does the parol evidence rule bar this evidence?",
      "o": ["Yes, because the merger clause makes the writing complete.", "Yes, because the lie was told before signing.", "No, but only if the lie was in writing.", "No, because evidence of fraud is admissible even when the writing is integrated."],
      "a": 3,
      "w": "Section 214 allows evidence of prior negotiations to show fraud, duress, mistake or other invalidating causes. That is the F in firm. The rule protects valid final writings; it does not shelter a contract obtained by fraud." },
    { "t": "Parol Evidence Rule", "k": "cl",
      "q": "Two weeks after signing a fully integrated catering contract, the parties agree by phone to move the event from Friday to Saturday. The caterer later argues the parol evidence rule bars proof of the phone call. Is the caterer right?",
      "o": ["No, because the rule covers only agreements made before or at the time of the writing.", "Yes, because the writing was fully integrated.", "Yes, because phone calls are parol evidence.", "No, because catering contracts are exempt from the rule."],
      "a": 0,
      "w": "The parol evidence rule deals with prior and contemporaneous agreements. A later agreement is a modification, and the rule does not touch it. Whether the modification is itself enforceable is a separate question." },
    { "t": "Parol Evidence Rule", "k": "cl",
      "q": "Under Pacific Gas & Electric v. G.W. Thomas Drayage, when may a court admit extrinsic evidence to interpret a written contract?",
      "o": ["Only when the judge finds the words ambiguous on their face.", "Never, if the contract is signed.", "When the evidence is relevant to prove a meaning to which the language is reasonably susceptible.", "Only when both parties consent."],
      "a": 2,
      "w": "The California court rejected a pure plain-meaning approach, because words take their meaning from context. Evidence comes in if it shows a meaning the language could reasonably bear. New York, in W.W.W. Associates, keeps to the four corners when the writing is clear." },
    { "t": "Parol Evidence Rule", "k": "cl",
      "q": "In Mitchill v. Lath, why was the sellers' oral promise to remove the icehouse not enforceable?",
      "o": ["Because the promise contradicted the price term.", "Because it was the kind of term the parties would ordinarily be expected to include in the written contract of sale.", "Because promises about buildings are never collateral.", "Because Mrs Mitchill had not paid for the farm."],
      "a": 1,
      "w": "A collateral oral agreement survives only if it is collateral in form, does not contradict the writing, and is not something the parties would ordinarily put in the writing. The icehouse promise failed the third test, because it was so closely tied to the sale of the farm." }
  ]
};

window.LESSONS = window.LESSONS || {};
window.LESSONS["impossibility"] = {
  "id": "impossibility",
  "title": "Impossibility and Frustration",
  "track": "cl",
  "sections": ["§261", "§265"],
  "scenes": [
    { "title": "Impossibility and Frustration", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: impossibility and frustration.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "The world changed. Still bound?", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "up", "face": "shock", "label": "Promisor", "say": "The hall is gone!" },
          { "k": "fig", "x": 470, "y": 400, "pose": "hips", "face": "flat", "label": "Promisee", "say": "You promised." } ] },
      { "say": "You sign a deal. Then the world changes. A fire, a war, a new law, a cancelled event. The old rule was harsh: promises must be kept, no matter what. Today's question is, when does a surprise let you off the hook?",
        "add": [
          { "k": "text", "x": 60, "y": 195, "t": "Old rule: promises must be kept", "s": 26 },
          { "k": "icon", "name": "fire", "x": 650, "y": 170 } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Two sections. Section 261, impracticability. After the deal is made, an event makes your performance impracticable. Your duty is discharged, if it was not your fault, the deal assumed the event would not happen, and you did not take on the risk. Two-six-one: it cannot be done.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§261", "name": "Impracticability", "rule": "Event makes performance impracticable: duty discharged.", "hook": "Two-six-one: it cannot be done." } ] },
      { "say": "Section 265, frustration of purpose. Here you can still perform, but an event has destroyed your main reason for the deal, a reason both sides understood. Picture a calendar. Three hundred sixty-five days, minus the hundred that mattered, leaves two-six-five. The days are still there. The point is gone.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§265", "name": "Frustration of purpose", "rule": "Can still perform, but the whole point is destroyed.", "hook": "365 days minus the 100 that mattered = 265." } ] },
      { "clear": true,
        "say": "Both rules share four elements, and your acronym is burn. B, a basic assumption of the deal was that this would not happen. U, an unexpected event, after signing. R, the risk was not yours under the contract. N, no fault of yours. Burn. Think of a hall on fire.",
        "add": [
          { "k": "text", "x": 60, "y": 160, "t": "B · Basic assumption: it won't happen", "s": 26 },
          { "k": "text", "x": 60, "y": 220, "t": "U · Unexpected event, after signing", "s": 26 },
          { "k": "text", "x": 60, "y": 280, "t": "R · Risk was not yours", "s": 26 },
          { "k": "text", "x": 60, "y": 340, "t": "N · No fault of yours", "s": 26 },
          { "k": "text", "x": 560, "y": 290, "t": "BURN", "s": 56, "c": "blue" },
          { "k": "ul", "x": 560, "y": 304, "w": 115, "c": "blue" },
          { "k": "icon", "name": "fire", "x": 617, "y": 375, "c": "red" } ] },
      { "clear": true,
        "say": "The difference, in one line each. Impracticability says, I cannot do it. Frustration says, I can do it, but why bother? In the first, performance itself is blocked. In the second, performance is easy, and pointless.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "§261 Impracticability", "s": 28 },
          { "k": "text", "x": 60, "y": 195, "t": "\"I CAN'T do it.\"", "s": 32, "c": "red" },
          { "k": "text", "x": 60, "y": 300, "t": "§265 Frustration", "s": 28 },
          { "k": "text", "x": 60, "y": 345, "t": "\"I can. But WHY BOTHER?\"", "s": 32, "c": "blue" },
          { "k": "icon", "name": "fire", "x": 640, "y": 170 },
          { "k": "icon", "name": "crown", "x": 640, "y": 320 } ] }
    ] },
    { "title": "The music hall", "beats": [
      { "say": "Taylor hired Caldwell's music hall and gardens for four grand concert nights, at one hundred pounds a night. Before the first concert, the hall burned to the ground. Nobody was at fault. Taylor sued for the money he had wasted getting ready.",
        "add": [
          { "k": "icon", "name": "fire", "x": 110, "y": 165, "s": 1.2, "c": "red" },
          { "k": "text", "x": 190, "y": 152, "t": "Music hall: 4 nights, £100 a night", "s": 26 },
          { "k": "text", "x": 190, "y": 190, "t": "Burned down before night one", "s": 26, "c": "red" },
          { "k": "fig", "x": 200, "y": 400, "pose": "up", "face": "shock", "label": "Taylor", "say": "My concerts!" },
          { "k": "fig", "x": 420, "y": 400, "pose": "sad", "face": "sad", "hat": "tophat", "label": "Caldwell", "say": "My hall!" } ] },
      { "say": "The court excused both sides. The contract quietly assumed that the hall would go on existing. When the thing essential to performance is destroyed, and nobody is to blame, the duty ends. That is Taylor and Caldwell, the birth of impossibility.",
        "add": [
          { "k": "stamp", "x": 535, "y": 205, "t": "BOTH EXCUSED", "s": 24, "c": "green" },
          { "k": "text", "x": 537, "y": 272, "t": "Taylor v. Caldwell", "s": 22, "c": "blue" },
          { "k": "text", "x": 537, "y": 308, "t": "The deal assumed the hall would exist.", "s": 21, "w": 200 } ] }
    ] },
    { "title": "The coronation", "beats": [
      { "say": "Henry hired Krell's rooms for two days, to watch the King's coronation procession pass beneath the windows. The price was seventy-five pounds, with twenty-five paid up front. Then the King fell ill, and the procession was called off.",
        "add": [
          { "k": "icon", "name": "crown", "x": 110, "y": 165, "s": 1.2 },
          { "k": "text", "x": 190, "y": 152, "t": "Rooms with a view of the procession: £75", "s": 26 },
          { "k": "text", "x": 190, "y": 190, "t": "King ill. Procession cancelled.", "s": 26, "c": "red" },
          { "k": "fig", "x": 200, "y": 400, "pose": "hips", "face": "flat", "hat": "tophat", "label": "Krell", "say": "You owe me £50." },
          { "k": "fig", "x": 420, "y": 400, "pose": "shrug", "face": "flat", "label": "Henry", "say": "To watch what?" } ] },
      { "say": "Henry could still sit in the rooms. But why would he? The court excused the fifty pounds he still owed. The procession was the foundation of the contract, and both sides knew it. That is Krell and Henry, the birth of frustration.",
        "add": [
          { "k": "stamp", "x": 540, "y": 205, "t": "EXCUSED", "s": 28, "c": "green" },
          { "k": "text", "x": 537, "y": 272, "t": "Krell v. Henry", "s": 22, "c": "blue" },
          { "k": "text", "x": 537, "y": 308, "t": "The procession was the foundation of the deal.", "s": 21, "w": 200 } ] },
      { "clear": true,
        "say": "The court asked three questions. One, what was the foundation of the contract? Two, was performance of that foundation prevented? Three, was the event one the parties could not reasonably have had in mind when they signed? Three yeses, and you are excused.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Krell's three questions", "s": 30, "c": "blue" },
          { "k": "text", "x": 60, "y": 210, "t": "1. What was the foundation of the deal?", "s": 26 },
          { "k": "text", "x": 60, "y": 262, "t": "2. Was it prevented?", "s": 26 },
          { "k": "text", "x": 60, "y": 314, "t": "3. Could they reasonably have had it in mind?", "s": 26 },
          { "k": "stamp", "x": 60, "y": 350, "t": "FOUNDATION GONE = EXCUSED", "s": 24, "c": "green" } ] }
    ] },
    { "title": "The car lot", "beats": [
      { "say": "Now the limits. Just before America entered the Second World War, Murphy leased a lot in California to sell new cars. Within months, the government sharply restricted new car sales. Murphy walked away from the lease and pleaded frustration.",
        "add": [
          { "k": "icon", "name": "car", "x": 110, "y": 165, "s": 1.2 },
          { "k": "text", "x": 190, "y": 152, "t": "Lease: a lot for selling NEW cars", "s": 26 },
          { "k": "text", "x": 190, "y": 190, "t": "Wartime: new car sales restricted", "s": 26, "c": "red" },
          { "k": "fig", "x": 200, "y": 400, "pose": "hips", "face": "flat", "hat": "tophat", "label": "Lloyd (landlord)", "say": "Rent is due." },
          { "k": "fig", "x": 420, "y": 400, "pose": "shrug", "face": "sad", "hat": "cap", "label": "Murphy", "say": "No cars. I'm out." } ] },
      { "say": "He lost. War restrictions were foreseeable when he signed, so he carried that risk. And the lease still had value: the landlord even waived the limits, so the lot could be used for other business. Less profitable is not frustrated. That is Lloyd and Murphy.",
        "add": [
          { "k": "stamp", "x": 535, "y": 205, "t": "NOT EXCUSED", "s": 25, "c": "red" },
          { "k": "text", "x": 537, "y": 272, "t": "Lloyd v. Murphy", "s": 22, "c": "blue" },
          { "k": "text", "x": 537, "y": 308, "t": "Foreseeable, and the lease still had value.", "s": 21, "w": 200 } ] }
    ] },
    { "title": "The roller rink", "beats": [
      { "say": "Kel Kim leased a building for a roller rink. The lease required a large liability insurance policy. For years, no problem. Then the insurance market seized up, and nobody would sell that much cover. The landlord moved to end the lease.",
        "add": [
          { "k": "icon", "name": "doc", "x": 105, "y": 165 },
          { "k": "text", "x": 170, "y": 152, "t": "Lease: rink must carry big insurance", "s": 26 },
          { "k": "text", "x": 170, "y": 190, "t": "Market crisis: no insurer will sell it", "s": 26, "c": "red" },
          { "k": "fig", "x": 190, "y": 400, "pose": "shrug", "face": "sad", "hat": "cap", "label": "Kel Kim", "say": "Nobody will insure us!" },
          { "k": "fig", "x": 410, "y": 400, "pose": "hips", "face": "flat", "hat": "tophat", "label": "Landlord", "say": "Then you're out." } ] },
      { "say": "Excused? No. An insurance squeeze was foreseeable, and could have been guarded against in the lease. The force majeure clause did not help either. It listed specific events, insurance trouble was not among them, and its catch-all words covered only similar things. That is Kel Kim and Central Markets.",
        "add": [
          { "k": "stamp", "x": 535, "y": 205, "t": "NOT EXCUSED", "s": 25, "c": "red" },
          { "k": "text", "x": 537, "y": 272, "t": "Kel Kim v. Central Markets", "s": 21, "c": "blue", "w": 200 },
          { "k": "text", "x": 537, "y": 334, "t": "Foreseeable. Not listed in the clause.", "s": 21, "w": 200 } ] }
    ] },
    { "title": "Force majeure", "beats": [
      { "say": "So careful parties write their own excuse list: a force majeure clause. Courts read it closely, word by word. In the pandemic, everything turned on the wording. Clauses that reached natural disasters or government orders often excused performance. Narrow clauses often did not.",
        "add": [
          { "k": "icon", "name": "doc", "x": 130, "y": 230, "s": 1.6, "label": "The clause" },
          { "k": "text", "x": 240, "y": 180, "t": "fire · flood · war · strikes ...", "s": 26 },
          { "k": "text", "x": 240, "y": 232, "t": "Pandemic? Read the WORDS.", "s": 28, "c": "red" },
          { "k": "text", "x": 240, "y": 284, "t": "Listed, or similar = excused", "s": 24, "c": "green" },
          { "k": "text", "x": 240, "y": 322, "t": "Not listed = probably not", "s": 24 } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. A mere rise in cost is not an excuse. A fixed price exists precisely to put market swings on the party who agreed to it. You need an event that upends a basic assumption, not a deal that has turned unprofitable.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "text", "x": 60, "y": 185, "t": "More expensive ≠ impracticable", "s": 28 },
          { "k": "fig", "x": 170, "y": 400, "pose": "sad", "face": "sad", "hat": "hardhat", "label": "Builder", "say": "Steel costs double!" },
          { "k": "fig", "x": 410, "y": 400, "pose": "hips", "face": "flat", "hat": "wig", "label": "Judge", "say": "So build it." },
          { "k": "stamp", "x": 540, "y": 320, "t": "NOT EXCUSED", "s": 24, "c": "red" } ] },
      { "clear": true,
        "say": "Let's recap. Section 261: it cannot be done. Section 265: it can, but the point is gone. Both need burn. If the event was foreseeable, or the deal still has value, you are not excused. Higher cost is never enough. And always read the clause. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§261: can't do it (impracticable)", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§265: can, but the point is gone", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "Both need B·U·R·N", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "Foreseeable or still valuable? Not excused", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "Costs more? Still bound. Read the clause", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Impossibility and Frustration", "k": "cl",
      "q": "An artist agrees to paint a mural on the side of a farmer's old barn. The night before she is due to start, lightning strikes and the barn burns to the ground. Neither party is at fault, and the contract says nothing about fire. Is the artist liable for not painting the mural?",
      "o": ["Yes, because promises must be kept.", "Yes, unless she offers to paint a different building.", "No, because the thing necessary for performance was destroyed without her fault.", "No, because contracts for art are never enforceable."],
      "a": 2,
      "w": "This is Taylor and Caldwell with a barn. The contract assumed the barn would exist. When the thing essential to performance is destroyed and nobody is to blame, section 261 discharges the duty. Two-six-one: it cannot be done." },
    { "t": "Impossibility and Frustration", "k": "cl",
      "q": "A contractor agrees to build a garage for a fixed price of $60,000. Halfway through, timber prices rise and the job will now cost her $12,000 more than she planned. Is she excused from finishing?",
      "o": ["No. An ordinary rise in cost is a risk a fixed-price contract puts on the contractor.", "Yes, because performance has become impracticable.", "Yes, because her purpose of making a profit has been frustrated.", "No, unless the owner agrees that timber is too expensive."],
      "a": 0,
      "w": "A mere increase in cost is not impracticability. Market swings are exactly the risk that a fixed price hands to the party who quoted it. And losing your profit is not frustration of purpose, or nobody would ever finish a bad deal." },
    { "t": "Impossibility and Frustration", "k": "cl",
      "q": "A fan pays a deposit to rent a balcony for one afternoon, at ten times the usual rate, to watch a championship victory parade. The owner advertised the balcony for exactly that. The city then cancels the parade. The balcony is still available. Which doctrine best helps the fan avoid paying the balance?",
      "o": ["Impracticability, because the fan cannot use the balcony.", "Mutual mistake, because both expected a parade.", "Unconscionability, because the price was ten times the usual rate.", "Frustration of purpose, because the shared reason for the deal has been destroyed."],
      "a": 3,
      "w": "This is Krell and Henry. The fan can still stand on the balcony, so nothing is impossible. But the parade was the foundation of the deal, as both sides knew, and it is gone. That is section 265, frustration of purpose." },
    { "t": "Impossibility and Frustration", "k": "cl",
      "q": "Which statement best captures the difference between Restatement §261 and §265?",
      "o": ["§261 applies to goods and §265 applies to services.", "Under §261 performance itself has become impracticable; under §265 performance is still possible but its principal purpose is gone.", "§261 requires fault and §265 does not.", "§261 covers events before signing and §265 covers events after signing."],
      "a": 1,
      "w": "Section 261 says, I cannot do it. Section 265 says, I can, but why bother? Both deal with events after the contract is made, both require no fault, and both require that the event upset a basic assumption of the deal." },
    { "t": "Impossibility and Frustration", "k": "cl",
      "q": "A restaurant's lease excuses performance for \"fire, flood, war, labour strikes, or other similar causes.\" The restaurant stops paying rent after its largest catering customer goes bankrupt, and points to the clause. Is it excused?",
      "o": ["Yes, because the bankruptcy was beyond its control.", "Yes, because force majeure clauses are read broadly in favour of tenants.", "No, because losing a customer is not listed and is not similar to the listed events.", "No, because force majeure clauses are never enforceable."],
      "a": 2,
      "w": "Courts read force majeure clauses narrowly, as in Kel Kim and Central Markets. Only the listed events excuse, and catch-all words reach only things of the same kind. A customer's bankruptcy is an ordinary business risk, nothing like a fire or a flood." }
  ]
};

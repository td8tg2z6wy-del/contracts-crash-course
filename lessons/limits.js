window.LESSONS = window.LESSONS || {};
window.LESSONS["limits"] = {
  "id": "limits",
  "title": "Limits on Damages",
  "track": "cl",
  "sections": ["§352", "§351", "§350", "§356"],
  "scenes": [
    { "title": "Limits on Damages", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: limits on damages.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "How much is too much?", "s": 32 },
          { "k": "fig", "x": 150, "y": 400, "pose": "up", "face": "sad", "label": "Injured party", "say": "Pay for everything!" },
          { "k": "fig", "x": 350, "y": 400, "pose": "shrug", "face": "shock", "label": "Breacher", "say": "Everything?!" } ] },
      { "clear": true,
        "say": "Expectation damages aim to make you whole. But four fences keep the bill reasonable. Certainty. Avoidable loss. Liquidated damages, not penalties. Foreseeability. C, A, L, F. Before you milk a breach, check the calf.",
        "add": [
          { "k": "text", "x": 60, "y": 160, "t": "Certainty", "s": 30 },
          { "k": "text", "x": 60, "y": 215, "t": "Avoidable loss", "s": 30 },
          { "k": "text", "x": 60, "y": 270, "t": "Liquidated, not penal", "s": 30 },
          { "k": "text", "x": 60, "y": 325, "t": "Foreseeability", "s": 30 },
          { "k": "text", "x": 480, "y": 200, "t": "C·A·L·F", "s": 56, "c": "blue" },
          { "k": "icon", "name": "cow", "x": 570, "y": 320, "s": 1.6 } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Four sections. First, section 352, certainty. You recover only what the evidence lets a court establish with reasonable certainty. Guesses do not count. Rhyme: three-five-two, prove it's true.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§352", "name": "Certainty", "rule": "No damages beyond what you can prove with fair certainty.", "hook": "Three-five-two: prove it's true." } ] },
      { "say": "Section 351, foreseeability. The breaching party pays only for loss it had reason to foresee, as a probable result of breach, when the contract was made. Three-five-one: could they see it when the deal was done?",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§351", "name": "Foreseeability", "rule": "Only loss the breacher could foresee at signing.", "hook": "Three-five-one: seen when the deal was done?" } ] },
      { "clear": true,
        "say": "Section 350, avoidable loss, also called mitigation. No damages for loss you could have avoided without undue risk or burden. Picture an oven set to three hundred and fifty degrees. When the deal dies, switch it off. Do not let the loss keep baking.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§350", "name": "Avoidable loss", "rule": "No damages for loss you could reasonably have avoided.", "hook": "An oven at 350 degrees: switch it off, stop the baking." } ] },
      { "say": "And section 356, liquidated damages. The parties may fix damages in advance, but only at a reasonable forecast of the loss. An unreasonably large figure is a penalty. Three-five-six: forecasts stick, penalties get nixed.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§356", "name": "Liquidated damages", "rule": "Agreed damages must be a reasonable forecast of loss.", "hook": "Three-five-six: forecasts stick, penalties get nixed." } ] }
    ] },
    { "title": "Certainty: prove it", "beats": [
      { "say": "Certainty first. An inventor licenses a brand new board game to a big publisher. Sales start well, then fizzle. The inventor says proper promotion would have earned forty million dollars, and sues for the lost profits.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "A brand-new board game", "s": 28 },
          { "k": "fig", "x": 130, "y": 400, "pose": "up", "face": "smile", "hat": "hair", "label": "Inventor", "say": "$40 million!" },
          { "k": "fig", "x": 300, "y": 400, "pose": "shrug", "face": "flat", "hat": "tophat", "label": "Publisher", "say": "Based on what?" } ] },
      { "say": "In MindGames and Western Publishing, the court said a new business is not automatically barred from lost profits. But you need a real basis, like a track record. A first game has none. Speculation recovers nothing.",
        "add": [
          { "k": "stamp", "x": 460, "y": 180, "t": "TOO SPECULATIVE", "s": 25, "c": "red" },
          { "k": "text", "x": 462, "y": 270, "t": "MindGames v. Western Pub.", "s": 21, "c": "blue" },
          { "k": "text", "x": 462, "y": 306, "t": "New business: no automatic bar, but show a real basis.", "s": 21, "w": 260 } ] },
      { "clear": true,
        "say": "Now boxing. A promoter signs the heavyweight champion, Jack Dempsey, for a title fight, and starts spending on the event. Then Dempsey announces he will not fight. The promoter sues for the profits the fight would have made.",
        "add": [
          { "k": "fig", "x": 130, "y": 400, "pose": "sad", "face": "sad", "hat": "tophat", "label": "Promoter", "say": "Where's my fight?" },
          { "k": "fig", "x": 300, "y": 400, "pose": "hips", "face": "flat", "label": "Dempsey", "say": "Not fighting." },
          { "k": "text", "x": 60, "y": 150, "t": "The fight that never was", "s": 28 } ] },
      { "say": "In Chicago Coliseum Club and Dempsey, lost profits were out. Ticket sales depend on too many unknowns. But the promoter did recover reliance: money spent after signing and before he walked away. Not money spent earlier, and not money spent chasing him afterwards.",
        "add": [
          { "k": "text", "x": 450, "y": 190, "t": "Lost profits: no", "s": 22, "c": "red" },
          { "k": "text", "x": 450, "y": 230, "t": "Spent before signing: no", "s": 22, "c": "red" },
          { "k": "text", "x": 450, "y": 270, "t": "Signing to walk-out: YES", "s": 22, "c": "green" },
          { "k": "text", "x": 450, "y": 310, "t": "After the walk-out: no", "s": 22, "c": "red" },
          { "k": "text", "x": 450, "y": 360, "t": "Chicago Coliseum Club v. Dempsey", "s": 19, "c": "blue" } ] }
    ] },
    { "title": "Foreseeability: the mill", "beats": [
      { "say": "Foreseeability. A mill's crankshaft breaks, and the mill stops. The miller hands the broken shaft to a carrier, to take to the engineers as a pattern for a new one. The carrier delivers days late. The miller wants his lost profits.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Broken crankshaft, late delivery", "s": 28 },
          { "k": "fig", "x": 130, "y": 400, "pose": "sad", "face": "sad", "hat": "cap", "label": "Miller", "say": "My lost profits!" },
          { "k": "fig", "x": 300, "y": 400, "pose": "shrug", "face": "flat", "hat": "hardhat", "label": "Carrier", "say": "It's only a shaft." },
          { "k": "icon", "name": "factory", "x": 610, "y": 300, "s": 1.6, "label": "Mill: stopped" } ] },
      { "clear": true,
        "say": "Hadley and Baxendale. No lost profits. Damages cover loss that arises naturally from the breach, or special loss both sides had in mind when they made the deal. The carrier did not know the whole mill hung on one shaft.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "Hadley v. Baxendale", "s": 26, "c": "blue" },
          { "k": "text", "x": 60, "y": 200, "t": "GENERAL", "s": 28, "c": "green" },
          { "k": "text", "x": 60, "y": 236, "t": "arises naturally from this kind of breach", "s": 22 },
          { "k": "text", "x": 60, "y": 310, "t": "CONSEQUENTIAL", "s": 28, "c": "red" },
          { "k": "text", "x": 60, "y": 346, "t": "special loss: only if foreseeable at signing", "s": 22 } ] },
      { "clear": true,
        "say": "A modern version. An orchestra hires a famous actress to narrate a concert series, then cancels after protests about her politics. She says the cancellation cost her more than the fee. It cost her other roles.",
        "add": [
          { "k": "fig", "x": 150, "y": 400, "pose": "sad", "face": "sad", "hat": "bun", "label": "Actress", "say": "I lost other roles!" },
          { "k": "fig", "x": 350, "y": 400, "pose": "shrug", "face": "flat", "hat": "wig", "label": "Orchestra", "say": "Concert cancelled." },
          { "k": "text", "x": 60, "y": 150, "t": "Fee lost, and future work too?", "s": 28 } ] },
      { "say": "In Redgrave and Boston Symphony Orchestra, the court said specific lost bookings can count as consequential damages, if they were foreseeable and are actually proved. A vague claim of harm to reputation is not enough. She could prove only part.",
        "add": [
          { "k": "text", "x": 490, "y": 180, "t": "Redgrave v. Boston Symphony Orchestra", "s": 21, "c": "blue", "w": 240 },
          { "k": "check", "x": 490, "y": 250 },
          { "k": "text", "x": 538, "y": 267, "t": "specific lost bookings", "s": 19, "c": "green" },
          { "k": "cross", "x": 492, "y": 300, "r": 22 },
          { "k": "text", "x": 538, "y": 318, "t": "vague reputation harm", "s": 19, "c": "red" } ] }
    ] },
    { "title": "Do the sums", "beats": [
      { "say": "Let's do the sums. Cleo owns a café. A builder agrees to renovate it for twenty thousand dollars by June first. Cleo tells him she has a wedding party booked for June second. The builder walks off the job.",
        "add": [
          { "k": "icon", "name": "store", "x": 620, "y": 300, "s": 1.6, "label": "Cleo's café" },
          { "k": "text", "x": 60, "y": 150, "t": "Renovation: $20,000, done by June 1", "s": 26 },
          { "k": "fig", "x": 150, "y": 400, "pose": "point", "face": "smile", "hat": "hair", "label": "Cleo", "say": "Wedding on June 2!" },
          { "k": "fig", "x": 350, "y": 400, "pose": "wave", "face": "smirk", "hat": "hardhat", "label": "Builder", "say": "I'm off." } ] },
      { "clear": true,
        "say": "A replacement builder costs twenty-six thousand, and finishes too late for the party. The extra six thousand is general damages. The lost party, three thousand in profit, is consequential. He was told at signing, so it was foreseeable. Total: nine thousand dollars.",
        "add": [
          { "k": "text", "x": 60, "y": 160, "t": "General: $26,000 − $20,000", "s": 26 },
          { "k": "text", "x": 560, "y": 160, "t": "$6,000", "s": 30, "c": "green" },
          { "k": "text", "x": 60, "y": 225, "t": "Consequential: wedding profit", "s": 26 },
          { "k": "text", "x": 560, "y": 225, "t": "$3,000", "s": 30, "c": "green" },
          { "k": "line", "x1": 60, "y1": 255, "x2": 690, "y2": 255 },
          { "k": "text", "x": 60, "y": 305, "t": "Total", "s": 30 },
          { "k": "text", "x": 560, "y": 305, "t": "$9,000", "s": 34, "c": "blue" } ] }
    ] },
    { "title": "Stop the bridge", "beats": [
      { "say": "Mitigation. A county hires a company to build a bridge. Then the county changes its mind, drops the road, and tells the builder to stop. The builder keeps building anyway, and sues for the full price of a bridge to nowhere.",
        "add": [
          { "k": "icon", "name": "bridge", "x": 600, "y": 310, "s": 1.8, "label": "Bridge to nowhere" },
          { "k": "fig", "x": 150, "y": 400, "pose": "up", "face": "shock", "hat": "wig", "label": "County", "say": "Stop building!" },
          { "k": "fig", "x": 350, "y": 400, "pose": "hold", "face": "smirk", "hat": "hardhat", "label": "Builder", "say": "Almost done..." } ] },
      { "say": "Rockingham County and Luten Bridge. Once you know the other side has repudiated, you cannot pile up damages. The builder recovers its costs up to the notice, plus the profit it would have made. Nothing for the work after.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "Rockingham County v. Luten Bridge", "s": 24, "c": "blue" },
          { "k": "text", "x": 60, "y": 184, "t": "Costs to date + lost profit. Nothing after notice.", "s": 22 } ] }
    ] },
    { "title": "Forecast or penalty?", "beats": [
      { "say": "Last fence. Parties can agree in advance what a breach will cost. That is a liquidated damages clause. Say, two hundred dollars for each day a shop opens late. A fair forecast of a loss that is hard to prove. Enforceable.",
        "add": [
          { "k": "icon", "name": "doc", "x": 110, "y": 200, "s": 1.4 },
          { "k": "text", "x": 190, "y": 180, "t": "\"$200 for each day late\"", "s": 28 },
          { "k": "text", "x": 190, "y": 222, "t": "a reasonable forecast of the loss", "s": 23 },
          { "k": "stamp", "x": 480, "y": 250, "t": "ENFORCEABLE", "s": 26, "c": "green" } ] },
      { "say": "But make it fifty thousand dollars for one day late on a small job, and the clause is not forecasting anything. It is a threat. Under section 356, a penalty is unenforceable, and the court goes back to ordinary damages.",
        "add": [
          { "k": "text", "x": 190, "y": 340, "t": "\"$50,000 if one day late\"", "s": 28, "c": "red" },
          { "k": "text", "x": 190, "y": 380, "t": "a threat, not a forecast", "s": 23 },
          { "k": "stamp", "x": 510, "y": 395, "t": "PENALTY", "s": 26, "c": "red" } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Timing. Foreseeability is judged at the moment the contract is made, not at the moment of breach. Telling the carrier about your stopped mill a week after the deal is too late.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "icon", "name": "clock", "x": 600, "y": 200, "s": 1.5 },
          { "k": "check", "x": 62, "y": 190 },
          { "k": "text", "x": 110, "y": 207, "t": "known when the deal was made", "s": 26, "c": "green" },
          { "k": "cross", "x": 64, "y": 250, "r": 24 },
          { "k": "text", "x": 110, "y": 270, "t": "mentioned later on", "s": 26, "c": "red" } ] },
      { "clear": true,
        "say": "Let's recap. Check the calf. Certainty: prove it's true. Avoidable loss: switch off the oven. Liquidated damages: forecasts stick, penalties get nixed. Foreseeability: seen when the deal was done. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§352 Certainty: no guesswork", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§350 Avoidable loss: stop the bridge", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "§356 Liquidated: forecast, not penalty", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "§351 Foreseeable at signing (Hadley)", "s": 26 },
          { "k": "text", "x": 110, "y": 390, "t": "C·A·L·F", "s": 44, "c": "blue" } ] }
    ] }
  ],
  "mini": [
    { "t": "Limits on Damages", "k": "cl",
      "q": "A print shop hires a technician to repair its only press by Friday. Nothing is said about deadlines. The technician finishes the following Wednesday. Only then does the shop reveal it lost a $30,000 rush order that had to print over the weekend. Can the shop recover the $30,000?",
      "o": ["Yes, because the breach in fact caused the loss.", "No, because the technician had no reason to foresee that loss when the contract was made.", "Yes, because consequential damages are always recoverable.", "No, because lost profits can never be recovered in contract."],
      "a": 1,
      "w": "This is Hadley and Baxendale, now section 351. Special losses are recoverable only if the breaching party had reason to foresee them when the contract was made. Telling the technician afterwards comes too late." },
    { "t": "Limits on Damages", "k": "cl",
      "q": "A homeowner hires a builder to construct a garage, then clearly cancels when the work is one-third done. The builder finishes the garage anyway and sues for the full price. What can the builder recover?",
      "o": ["The full price, because the builder performed in full.", "Nothing, because the builder ignored the cancellation.", "The full price, less a small discount for annoying the owner.", "Its costs up to the cancellation plus the profit it would have made, but nothing for work done afterwards."],
      "a": 3,
      "w": "Section 350 and Rockingham County and Luten Bridge. After notice of repudiation, you cannot keep working and run up the bill. The builder gets what it had spent by then, plus its lost profit." },
    { "t": "Limits on Damages", "k": "cl",
      "q": "When will a court enforce a clause that fixes in advance the amount payable on breach?",
      "o": ["When the amount is a reasonable forecast of the loss, given how hard that loss would be to prove.", "Whenever both parties signed the contract.", "Only when the clause uses the words \"liquidated damages\".", "Only when the amount is larger than the actual loss, so that breach is deterred."],
      "a": 0,
      "w": "Section 356 allows damages to be fixed in advance at an amount that is reasonable in light of the expected or actual loss and the difficulty of proof. A figure set unreasonably high is a penalty, and penalties are unenforceable." },
    { "t": "Limits on Damages", "k": "cl",
      "q": "A first-time restaurateur's landlord wrongfully refuses to hand over the premises. The restaurateur claims $2 million in lost profits, based only on her own optimism. What is the best statement of the law?",
      "o": ["A new business can never recover lost profits.", "Lost profits are presumed once breach is shown.", "A new business may recover lost profits, but only with evidence that establishes them with reasonable certainty.", "Lost profits are recoverable only if the contract states the amount."],
      "a": 2,
      "w": "Section 352 requires reasonable certainty. As MindGames and Western Publishing explains, being a new business is not an automatic bar. But with no track record or other solid basis, the claim is speculation." },
    { "t": "Limits on Damages", "k": "cl",
      "q": "A caterer agrees to cater a company gala for $10,000, then cancels. The company hires a comparable caterer for $13,000. Which item is general damages, as opposed to consequential damages?",
      "o": ["Profit lost when a client, unimpressed by the gala, took its business elsewhere.", "The $3,000 extra cost of the substitute caterer.", "The chief executive's embarrassment.", "A bonus the events manager failed to earn."],
      "a": 1,
      "w": "General damages are the loss in the very thing promised, here the extra cost of getting the same catering elsewhere. Consequential damages are knock-on losses, and under section 351 they must have been foreseeable when the contract was made." }
  ]
};

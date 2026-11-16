window.LESSONS = window.LESSONS || {};
window.LESSONS["duress"] = {
  "id": "duress",
  "title": "Duress",
  "track": "cl",
  "sections": ["§175", "§176", "§73"],
  "scenes": [
    { "title": "Duress", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: duress.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Was that a real yes?", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "hips", "face": "smirk", "hat": "tophat", "label": "Threatener", "say": "Sign. Or else." },
          { "k": "fig", "x": 470, "y": 400, "pose": "hold", "face": "shock", "label": "Victim", "say": "Okay, okay!" } ] },
      { "say": "A contract needs a real yes. Duress asks whether the yes was squeezed out by a threat. If it was, the victim can undo the deal. The hard part is telling a threat from a tough bargain.",
        "add": [
          { "k": "icon", "name": "doc", "x": 335, "y": 340 },
          { "k": "text", "x": 560, "y": 320, "t": "Threat, or just a tough deal?", "s": 24, "c": "red", "w": 170 } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Section 175. If your yes was induced by an improper threat that left you no reasonable alternative, the contract is voidable by you. Your acronym: T, I, N, A. Threat. Improper. No Alternative. Tina, as in, there is no alternative.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§175", "name": "Duress by threat", "rule": "Improper threat + no reasonable alternative = voidable.", "hook": "T·I·N·A: Threat, Improper, No Alternative." } ] },
      { "say": "Section 176 says when a threat is improper. Threatening a crime or a tort. Threatening criminal prosecution. Threatening a lawsuit in bad faith. Or breaching the duty of good faith under a contract you already have with the victim. Rhyme: one seven six, crimes, torts and bad-faith tricks.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§176", "name": "Improper threats", "rule": "Crime, tort, prosecution, bad-faith suit or breach.", "hook": "One-seven-six: crimes, torts and bad-faith tricks." } ] },
      { "clear": true,
        "say": "One more, from the law of consideration. Section 73, the pre-existing duty rule. Doing what you already owe is not consideration for a new promise. Picture a fisherman aged seventy-three, hauling the same old net. Same job, so no new pay.",
        "add": [
          { "k": "card", "x": 60, "y": 114, "num": "§73", "name": "Pre-existing duty", "rule": "Doing what you already owe is no consideration.", "hook": "A fisherman aged 73: same old net, same old pay." },
          { "k": "icon", "name": "fish", "x": 130, "y": 340 },
          { "k": "text", "x": 200, "y": 350, "t": "Same job + more pay = no deal", "s": 28 } ] }
    ] },
    { "title": "Gun or squeeze?", "beats": [
      { "say": "Duress comes in two flavours. Physical duress is the gun to the head: sign, or get hurt. Economic duress is a wrongful squeeze on your business or your wallet. Courts began with the first, and slowly accepted the second.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "PHYSICAL", "s": 28 },
          { "k": "fig", "x": 170, "y": 400, "pose": "point", "face": "flat", "say": "Sign or get hurt." },
          { "k": "line", "x1": 385, "y1": 120, "x2": 385, "y2": 430 },
          { "k": "text", "x": 415, "y": 150, "t": "ECONOMIC", "s": 28 },
          { "k": "text", "x": 415, "y": 195, "t": "a wrongful squeeze on your wallet", "s": 22, "w": 300 },
          { "k": "icon", "name": "money", "x": 560, "y": 330, "s": 1.4, "c": "red" } ] },
      { "clear": true,
        "say": "But be careful. Hard bargaining is not duress. Everyone needs money. A seller who says, my price is high, take it or leave it, threatens nothing improper. Being in a tight spot is not enough. The other side must have applied an improper squeeze.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Hard bargaining is NOT duress", "s": 30 },
          { "k": "fig", "x": 170, "y": 400, "pose": "hips", "hat": "tophat", "label": "Seller", "say": "Take it or leave it." },
          { "k": "fig", "x": 420, "y": 400, "pose": "sad", "face": "sad", "label": "Buyer", "say": "Ouch. Fine." },
          { "k": "stamp", "x": 520, "y": 345, "t": "TOUGH, BUT LEGAL", "s": 22, "c": "green" } ] },
      { "clear": true,
        "say": "So sort your threats. Pay what you honestly owe me, or I will sue: fine. Sign, or I will have you prosecuted: improper. Sign, or I will break our contract, knowing you are stuck: improper, when it is done in bad faith.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Sort the threats", "s": 30 },
          { "k": "check", "x": 62, "y": 195 }, { "k": "text", "x": 110, "y": 212, "t": "\"Pay what you owe, or I'll sue.\"", "s": 26 },
          { "k": "cross", "x": 64, "y": 262 }, { "k": "text", "x": 110, "y": 280, "t": "\"Sign, or I'll have you prosecuted.\"", "s": 26 },
          { "k": "cross", "x": 64, "y": 330 }, { "k": "text", "x": 110, "y": 348, "t": "\"Sign, or I breach. You're stuck.\"", "s": 26 },
          { "k": "text", "x": 110, "y": 386, "t": "(bad faith)", "s": 22, "c": "red" } ] }
    ] },
    { "title": "The fishermen", "beats": [
      { "say": "Alaska Packers and Domenico. Fishermen signed on in San Francisco for about fifty dollars for the season, plus two cents a salmon. Once in remote Alaska, with a short season and no replacements, they stopped work and demanded one hundred dollars.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Deal: $50 for the season + 2 cents a salmon", "s": 25 },
          { "k": "icon", "name": "ship", "x": 665, "y": 175, "label": "Alaska" },
          { "k": "fig", "x": 200, "y": 400, "pose": "hips", "hat": "cap", "label": "Fishermen", "say": "$100, or we stop!" },
          { "k": "fig", "x": 470, "y": 400, "pose": "shrug", "face": "shock", "hat": "tophat", "label": "Superintendent", "say": "No one else here..." } ] },
      { "clear": true,
        "say": "The superintendent gave in. Back home, the company paid only the original rate, and the court agreed. The men did nothing more than their contract already required. So the promise of extra pay had no consideration. That is the pre-existing duty rule doing the work of duress.",
        "add": [
          { "k": "stamp", "x": 60, "y": 150, "t": "ORIGINAL PAY ONLY", "s": 28 },
          { "k": "text", "x": 60, "y": 215, "t": "Alaska Packers' Ass'n v. Domenico", "s": 22, "c": "blue" },
          { "k": "text", "x": 60, "y": 265, "t": "Same work as before = no new consideration", "s": 25 },
          { "k": "text", "x": 60, "y": 310, "t": "Pre-existing duty rule, §73", "s": 25 },
          { "k": "fig", "x": 640, "y": 400, "pose": "sad", "face": "sad", "hat": "cap", "label": "Fisherman" } ] },
      { "say": "Notice the two routes to the same answer. Route one: no new consideration. Route two: a bad-faith threat to breach, with the company stuck in Alaska and no alternative. On an exam, argue both.",
        "add": [
          { "k": "text", "x": 60, "y": 370, "t": "Route 1: no consideration", "s": 24, "c": "green" },
          { "k": "text", "x": 60, "y": 410, "t": "Route 2: economic duress", "s": 24, "c": "green" } ] }
    ] },
    { "title": "The radar parts", "beats": [
      { "say": "Austin Instrument and Loral. Loral was building radar sets for the Navy, with strict deadlines and penalties. Austin supplied the gear parts. Then Austin said: raise my prices, and give me the next contract too, or the deliveries stop. And it stopped them.",
        "add": [
          { "k": "text", "x": 60, "y": 140, "t": "Austin Instrument v. Loral", "s": 22, "c": "blue" },
          { "k": "fig", "x": 170, "y": 400, "pose": "hips", "face": "smirk", "hat": "hardhat", "label": "Austin (parts)", "say": "Pay more, or no parts." },
          { "k": "fig", "x": 440, "y": 400, "pose": "hold", "face": "shock", "label": "Loral (radar)", "say": "The Navy is waiting!" },
          { "k": "icon", "name": "clock", "x": 650, "y": 200 },
          { "k": "icon", "name": "ship", "x": 650, "y": 330, "label": "Navy deadline" } ] },
      { "clear": true,
        "say": "Loral called ten approved suppliers. None could deliver in time. So Loral gave in, finished the Navy job, and then sued to get the extra money back.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Loral calls 10 approved suppliers", "s": 28 },
          { "k": "icon", "name": "phone", "x": 100, "y": 205, "s": 0.8 },
          { "k": "text", "x": 160, "y": 212, "t": "None can deliver in time", "s": 26, "c": "red" },
          { "k": "fig", "x": 600, "y": 400, "pose": "sad", "face": "sad", "label": "Loral", "say": "Fine. I'll pay." },
          { "k": "text", "x": 60, "y": 275, "t": "...then sues to get it back", "s": 24 } ] },
      { "say": "Loral won. A threat to break a contract is economic duress when the victim cannot get the goods elsewhere in time, and an ordinary lawsuit for breach would not be enough. Loral faced Navy penalties and had no real choice.",
        "add": [
          { "k": "stamp", "x": 60, "y": 345, "t": "ECONOMIC DURESS", "s": 26, "c": "green" },
          { "k": "text", "x": 60, "y": 405, "t": "No goods elsewhere in time + a lawsuit is not enough", "s": 22, "w": 330 } ] },
      { "clear": true,
        "say": "The dissent said that whether Loral had an alternative was a question of fact, and the lower courts had found against Loral. More suppliers were out there than the ten it rang. The lesson: a victim must show a real search for a way out.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "THE DISSENT", "s": 28, "c": "red" },
          { "k": "fig", "x": 170, "y": 400, "pose": "point", "face": "flat", "hat": "wig", "label": "Dissent", "say": "Only ten calls?" },
          { "k": "text", "x": 340, "y": 210, "t": "Alternative or not: a question of fact", "s": 24, "w": 380 },
          { "k": "text", "x": 340, "y": 290, "t": "Lower courts found against Loral", "s": 24, "w": 380 },
          { "k": "text", "x": 340, "y": 360, "t": "More suppliers were out there", "s": 24, "w": 380 } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. A threat to breach a contract is not automatically duress. Usually you have an alternative: buy elsewhere, and sue for damages. Duress needs no reasonable way out. And once the pressure lifts, act promptly, or you may be taken to have accepted the deal.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "text", "x": 60, "y": 190, "t": "A threat to breach is not always duress", "s": 26 },
          { "k": "fig", "x": 620, "y": 400, "pose": "shrug", "label": "Victim", "say": "I could buy elsewhere" },
          { "k": "cross", "x": 64, "y": 300 }, { "k": "text", "x": 110, "y": 318, "t": "Can buy elsewhere and sue = no duress", "s": 24 },
          { "k": "check", "x": 62, "y": 355 }, { "k": "text", "x": 110, "y": 372, "t": "Pressure gone? Act promptly.", "s": 24 } ] },
      { "clear": true,
        "say": "Let's recap. Duress is T, I, N, A: a threat, improper, no alternative. Improper means crimes, torts and bad-faith tricks. Hard bargaining is not duress. Old duty, no new pay. And a threat to stop deliveries is duress only if you cannot go elsewhere. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§175: T·I·N·A = voidable", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§176: crimes, torts, bad-faith tricks", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "Hard bargaining is not duress", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "§73: old duty, no new pay (Alaska Packers)", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "Austin v. Loral: no goods elsewhere in time", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Duress", "k": "cl",
      "q": "A painter agrees to paint an office for $8,000. Halfway through, with nothing about the job changed, the painter says, \"Promise me $10,000 or I walk.\" The owner, with a grand opening in two days, says yes. The painter finishes. Under the traditional rule, how much is owed?",
      "o": ["$10,000, because the owner agreed to it.", "$10,000, because the painter finished the job.", "$8,000, because the painter gave nothing new for the extra promise.", "Nothing, because the painter's threat cancels the whole contract."],
      "a": 2,
      "w": "This is Alaska Packers on dry land. Under section 73, doing what you already owe is not consideration, so the promise of the extra two thousand dollars is not enforceable. The owner could also argue economic duress." },
    { "t": "Duress", "k": "cl",
      "q": "Under Restatement section 175, a contract is voidable for duress when a party's assent is induced by:",
      "o": ["An improper threat that leaves the victim no reasonable alternative.", "Any threat at all, however minor.", "A price that turns out to be unfair.", "Financial need that makes the party desperate for a deal."],
      "a": 0,
      "w": "Section 175 needs both halves. T, I, N, A: a threat, that is improper, leaving no alternative. A bad price or a tight spot, without an improper threat from the other side, is not duress." },
    { "t": "Duress", "k": "cl",
      "q": "After a storm, a homeowner badly needs a generator. The only shop with stock charges $3,000, well above the usual price, and says, \"That's the price.\" The homeowner pays, then claims duress. What is the likely result?",
      "o": ["Duress, because the homeowner had no alternative.", "Duress, because the price was above market.", "Duress, because the shop knew the homeowner was desperate.", "No duress, because the shop made no improper threat."],
      "a": 3,
      "w": "Hard bargaining is not duress. The storm created the pressure, not the shop, and take it or leave it is not an improper threat under section 176. Other doctrines might help the homeowner, but duress will not." },
    { "t": "Duress", "k": "cl",
      "q": "A supplier tells a manufacturer, \"Pay 20% more or I stop delivering.\" The manufacturer could buy identical parts from another supplier the next day at a slightly higher price, but agrees anyway. Later it sues to recover the increase as paid under duress. What result?",
      "o": ["It wins, because a threat to breach is always duress.", "It loses, because it had a reasonable alternative.", "It wins, because the supplier acted in bad faith.", "It loses, because duress applies only to physical threats."],
      "a": 1,
      "w": "Compare Austin Instrument and Loral, where the buyer rang ten suppliers and none could deliver in time. Here the goods were available elsewhere. With a reasonable alternative, section 175 is not met, even if the threat was improper." },
    { "t": "Duress", "k": "cl",
      "q": "Which of these threats is improper under Restatement section 176?",
      "o": ["\"Accept my price or I'll sell to someone else.\"", "\"Pay the debt you honestly owe me or I'll sue.\"", "\"Sign this contract or I'll report you to the police for that old offence.\"", "\"I won't renew our contract when it ends unless you pay more.\""],
      "a": 2,
      "w": "Section 176 lists a threat of criminal prosecution as improper, even if the person is guilty. One seven six: crimes, torts and bad-faith tricks. Refusing to deal, or suing in good faith on a real debt, is ordinary bargaining." }
  ]
};

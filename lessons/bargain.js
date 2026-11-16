window.LESSONS = window.LESSONS || {};
window.LESSONS["bargain"] = {
  "id": "bargain",
  "title": "The Bargain",
  "track": "cl",
  "sections": ["§17", "§71", "§79"],
  "scenes": [
    { "title": "The Bargain", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: the bargain.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Which promises count?", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "hold", "label": "Promisor", "say": "I promise!" },
          { "k": "fig", "x": 470, "y": 400, "pose": "shrug", "face": "flat", "label": "Promisee", "say": "And in return?" } ] },
      { "say": "People make promises all day long. The law enforces only some of them. The main filter is called consideration. In short: did each side give something to get something? No trade, no contract.",
        "add": [
          { "k": "arrow", "x1": 250, "y1": 330, "x2": 420, "y2": 330, "c": "red" },
          { "k": "arrow", "x1": 420, "y1": 352, "x2": 250, "y2": 352, "c": "red" },
          { "k": "text", "x": 285, "y": 318, "t": "the trade", "s": 26, "c": "red" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Start with section 17. To form a contract you need a bargain: both sides agree to the exchange, and there is consideration. Think of seventeen as the age just before adulthood. Without consideration, a promise never grows up into a contract.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§17", "name": "A contract needs a bargain", "rule": "Mutual assent to an exchange, plus consideration.", "hook": "17: not yet grown up. No consideration, no contract." } ] },
      { "say": "Section 71 is the definition. Consideration is a performance, or a return promise, that is bargained for. Each side's piece is the price of the other's. Flip seventeen and you get seventy-one. Picture seven carrots swapped for one chicken. A trade.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§71", "name": "Consideration", "rule": "An act or promise that is bargained for: sought and given.", "hook": "71: seven carrots for one chicken. A swap." } ] },
      { "clear": true,
        "say": "Section 79. Courts do not weigh the two sides of the trade. A tiny price is fine, so long as it was truly bargained for. Seven-nine: a peppercorn is fine.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§79", "name": "No adequacy test", "rule": "Courts don't ask whether the exchange was equal or fair.", "hook": "Seven-nine: a peppercorn is fine." } ] },
      { "say": "And what can you trade? An act. Or holding back from something you are free to do, which lawyers call forbearance. Or a promise to do either. The law does not care which, only that it was the price of the promise.",
        "add": [
          { "k": "text", "x": 60, "y": 300, "t": "Consideration can be:", "s": 28 },
          { "k": "check", "x": 62, "y": 322 }, { "k": "text", "x": 110, "y": 339, "t": "an act", "s": 26 },
          { "k": "check", "x": 62, "y": 366 }, { "k": "text", "x": 110, "y": 383, "t": "a forbearance (holding back)", "s": 26 },
          { "k": "check", "x": 62, "y": 410 }, { "k": "text", "x": 110, "y": 427, "t": "a return promise", "s": 26 } ] }
    ] },
    { "title": "Gift or bargain?", "beats": [
      { "say": "First, the gift promise. A friend promises to help you move house on Saturday. Saturday comes, he is suddenly busy, and you pay three hundred dollars for movers. Annoying. But he asked for nothing in return, so there is nothing to enforce.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "\"I'll help you move on Saturday.\"", "s": 28 },
          { "k": "fig", "x": 150, "y": 400, "pose": "shrug", "face": "smirk", "label": "Friend", "say": "Sorry, busy!" },
          { "k": "fig", "x": 400, "y": 400, "pose": "sad", "face": "sad", "label": "You", "say": "Movers: $300..." },
          { "k": "stamp", "x": 520, "y": 200, "t": "GIFT = NO DEAL", "s": 24, "c": "red" },
          { "k": "text", "x": 522, "y": 270, "t": "He asked for nothing in return.", "s": 21, "w": 210 } ] },
      { "clear": true,
        "say": "Second, the gift with a condition. I say: come over to my house and you can have my old television. Walking over is not the price of the television. It is just how you collect the gift. Still no bargain.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "\"Come over and the TV is yours.\"", "s": 28 },
          { "k": "icon", "name": "tv", "x": 130, "y": 320, "s": 1.4, "label": "Old TV" },
          { "k": "fig", "x": 330, "y": 400, "pose": "up", "label": "You", "say": "On my way!" },
          { "k": "text", "x": 470, "y": 250, "t": "A condition is not a price.", "s": 28, "c": "red", "w": 250 },
          { "k": "text", "x": 470, "y": 345, "t": "Ask: was the act what the promisor was really after?", "s": 21, "w": 250 } ] }
    ] },
    { "title": "The library pledge", "beats": [
      { "say": "Congregation Kadimah Toras-Moshe and DeLeo. A man who was seriously ill promised, out loud and in front of witnesses, to give twenty-five thousand dollars to his congregation. He died before paying. The congregation had hoped to build a library in his name.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "A spoken pledge of $25,000", "s": 28 },
          { "k": "fig", "x": 150, "y": 400, "pose": "hold", "label": "Donor", "say": "$25,000 for you." },
          { "k": "icon", "name": "book", "x": 275, "y": 330, "s": 0.8 },
          { "k": "fig", "x": 400, "y": 400, "pose": "up", "hat": "cap", "label": "Congregation", "say": "A library!" } ] },
      { "say": "The congregation sued the estate, and lost. It had promised nothing and given nothing in return. And pencilling the money into a budget was not real reliance. A bare promise of a gift is not a contract.",
        "add": [
          { "k": "stamp", "x": 520, "y": 200, "t": "NO CONSIDERATION", "s": 21, "c": "red" },
          { "k": "text", "x": 522, "y": 264, "t": "Congregation Kadimah Toras-Moshe v. DeLeo", "s": 20, "c": "blue", "w": 215 },
          { "k": "text", "x": 522, "y": 356, "t": "Nothing given in return.", "s": 21, "w": 210 } ] }
    ] },
    { "title": "Dr King's papers", "beats": [
      { "say": "Now compare King and the Trustees of Boston University. Doctor Martin Luther King Junior deposited his papers with the university, and wrote that they would become its property when he died. Years later, his estate asked for them back.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Letter: the papers are yours at my death", "s": 25 },
          { "k": "fig", "x": 150, "y": 400, "pose": "hold", "label": "Dr King", "say": "Look after these." },
          { "k": "icon", "name": "doc", "x": 275, "y": 330, "s": 0.8 },
          { "k": "fig", "x": 400, "y": 400, "pose": "up", "hat": "cap", "label": "University", "say": "With great care." } ] },
      { "say": "This time the promise stuck. The university had indexed the papers, staffed the archive, and opened it to researchers. A jury could find that was consideration, or reliance, for the promise. The difference from the library case: something was done in return.",
        "add": [
          { "k": "stamp", "x": 520, "y": 200, "t": "ENFORCEABLE", "s": 25, "c": "green" },
          { "k": "text", "x": 522, "y": 264, "t": "King v. Trustees of Boston University", "s": 20, "c": "blue", "w": 215 },
          { "k": "text", "x": 522, "y": 332, "t": "Something was done in return.", "s": 21, "w": 210 } ] }
    ] },
    { "title": "The clean-living nephew", "beats": [
      { "say": "Hamer and Sidway. An uncle promises his nephew five thousand dollars if the boy gives up drinking, smoking, swearing, and gambling until he turns twenty-one. The nephew does it. Then the uncle dies, and the executor refuses to pay.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "$5,000 if you behave until you are 21", "s": 27 },
          { "k": "fig", "x": 150, "y": 400, "pose": "point", "hat": "tophat", "label": "Uncle", "say": "Behave till 21!" },
          { "k": "icon", "name": "money", "x": 275, "y": 330, "s": 0.8, "c": "green" },
          { "k": "fig", "x": 400, "y": 400, "pose": "up", "hat": "cap", "label": "Nephew", "say": "Done!" } ] },
      { "say": "The executor argued that the uncle got nothing out of it. The court did not care. The nephew gave up things he had a legal right to do, because the uncle asked him to. That is forbearance, and forbearance is consideration.",
        "add": [
          { "k": "stamp", "x": 520, "y": 200, "t": "CONSIDERATION", "s": 24, "c": "green" },
          { "k": "text", "x": 522, "y": 264, "t": "Hamer v. Sidway", "s": 24, "c": "blue" },
          { "k": "text", "x": 522, "y": 302, "t": "Giving up a legal right counts.", "s": 21, "w": 210 } ] }
    ] },
    { "title": "A promise too late", "beats": [
      { "say": "Mills and Wyman. A grown man falls ill, far from home. A stranger, Mister Mills, nurses him at his own expense. Afterwards the sick man's father writes a letter promising to repay Mills. Then the father changes his mind.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Care first. Promise later.", "s": 28 },
          { "k": "fig", "x": 150, "y": 400, "pose": "hold", "label": "Mills", "say": "I nursed your son." },
          { "k": "icon", "name": "letter", "x": 275, "y": 330, "s": 0.8 },
          { "k": "fig", "x": 400, "y": 400, "pose": "hips", "face": "flat", "hat": "tophat", "label": "Father", "say": "I'll pay. Or not." } ] },
      { "say": "Mills lost. The care was already given before the father promised anything, so it was not the price of the promise. Past consideration is no consideration. The father may have had a moral duty, but a moral duty alone is not a contract.",
        "add": [
          { "k": "stamp", "x": 520, "y": 200, "t": "PAST = NO DEAL", "s": 24, "c": "red" },
          { "k": "text", "x": 522, "y": 264, "t": "Mills v. Wyman", "s": 24, "c": "blue" },
          { "k": "text", "x": 522, "y": 302, "t": "A moral duty alone is not enough.", "s": 21, "w": 210 } ] }
    ] },
    { "title": "Why have the rule?", "beats": [
      { "say": "Why does the law insist on a bargain? Lon Fuller gave three reasons, and here is your acronym: E, C, C. Evidence: a trade is proof that a deal was made. Caution: paying a price makes you think first. Channel: it gives people a clear route to a binding promise.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Fuller: what formality is for", "s": 28 },
          { "k": "text", "x": 60, "y": 220, "t": "Evidentiary: proof of a deal", "s": 26 },
          { "k": "text", "x": 60, "y": 285, "t": "Cautionary: think before you bind", "s": 26 },
          { "k": "text", "x": 60, "y": 350, "t": "Channelling: a clear route to binding", "s": 26 },
          { "k": "text", "x": 560, "y": 300, "t": "E·C·C", "s": 56, "c": "blue" },
          { "k": "ul", "x": 560, "y": 314, "w": 150, "c": "blue" } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Seeing something of value change hands, and shouting consideration. Not so fast. It must be the price of the promise. And the opposite trap: calling a deal unenforceable because it looks unfair. Courts do not check the price tag.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "fig", "x": 170, "y": 400, "pose": "up", "face": "shock", "label": "Student", "say": "Value! Consideration!" },
          { "k": "cross", "x": 290, "y": 300, "r": 40 },
          { "k": "text", "x": 400, "y": 290, "t": "It must be the PRICE of the promise.", "s": 26, "w": 320 },
          { "k": "text", "x": 400, "y": 380, "t": "Unfair is not unenforceable.", "s": 24, "c": "red" } ] },
      { "clear": true,
        "say": "Keep a list of red flags. A promise of a gift. A gift with a condition. A social or family promise. A promise made after the act is already done. More money demanded for the same job. And a wildly lopsided swap, which may hide a sham or a defence.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "RED FLAGS", "s": 30, "c": "red" },
          { "k": "text", "x": 60, "y": 188, "t": "• A promise of a gift", "s": 25 },
          { "k": "text", "x": 60, "y": 232, "t": "• A gift with a condition", "s": 25 },
          { "k": "text", "x": 60, "y": 276, "t": "• A social or family promise", "s": 25 },
          { "k": "text", "x": 60, "y": 320, "t": "• A promise after the act is done", "s": 25 },
          { "k": "text", "x": 60, "y": 364, "t": "• More money for the same job", "s": 25 },
          { "k": "text", "x": 60, "y": 408, "t": "• A wildly lopsided swap", "s": 25 } ] },
      { "clear": true,
        "say": "Let's recap. A contract needs a bargain. Consideration is the bargained-for price of a promise: an act, a forbearance, or a return promise. Courts do not weigh it. Gifts and past favours do not count. And remember E, C, C. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§17: a contract needs a bargain", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§71: bargained for = sought and given", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "§79: a peppercorn is fine", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "Gifts and past favours: no consideration", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "Fuller: E·C·C", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "The Bargain", "k": "cl",
      "q": "An aunt tells her adult niece, \"If you stay off all social media for one year, I will pay you $2,000.\" The niece does so. The aunt refuses to pay, saying she gained nothing from it. Is the promise enforceable?",
      "o": ["No, because the aunt received no benefit.", "Yes, because the niece gave up something she had a legal right to do, at the aunt's request.", "No, because family promises are never enforceable.", "Yes, because all promises of money are enforceable."],
      "a": 1,
      "w": "This is Hamer and Sidway. Giving up a legal right at the promisor's request is forbearance, and under section 71 forbearance is good consideration. It does not matter whether the promisor got any benefit." },
    { "t": "The Bargain", "k": "cl",
      "q": "While Priya is abroad, her neighbour repairs Priya's storm-damaged fence without being asked. When Priya returns she says, \"That was kind. I'll pay you $300 for it.\" She never pays. Can the neighbour enforce the promise under the traditional rule?",
      "o": ["Yes, because the neighbour did valuable work.", "Yes, because Priya's promise was clear and definite.", "No, because the promise was not in writing.", "No, because the work was done before the promise and was not given in exchange for it."],
      "a": 3,
      "w": "Past consideration is no consideration. As in Mills and Wyman, the work was finished before any promise was made, so it could not be the price of that promise. A moral duty to pay is not enough." },
    { "t": "The Bargain", "k": "cl",
      "q": "Sam agrees to sell his vintage guitar, worth about $4,000, to Dana for $500. Before delivery Sam regrets the deal and argues the contract fails for lack of consideration. Who is right?",
      "o": ["Dana, because courts do not ask whether the consideration was adequate.", "Sam, because $500 is far too little.", "Sam, because consideration must be roughly equal in value.", "Dana, but only if she pays the full $4,000."],
      "a": 0,
      "w": "Section 79 says there is no requirement of equal value. If the price was truly bargained for, a court will not weigh it. Seven-nine: a peppercorn is fine. A huge gap matters only as a clue to something like fraud or duress." },
    { "t": "The Bargain", "k": "cl",
      "q": "Under Restatement section 71, when is a performance or return promise \"bargained for\"?",
      "o": ["When it has a market value greater than zero.", "When it benefits the promisor financially.", "When the promisor seeks it in exchange for the promise and the promisee gives it in exchange for that promise.", "When it is written down and signed by both sides."],
      "a": 2,
      "w": "Section 71 defines consideration as something bargained for: sought by the promisor in exchange for the promise, and given by the promisee in exchange for it. Value alone, benefit alone, or writing alone will not do." },
    { "t": "The Bargain", "k": "cl",
      "q": "A manager tells a junior colleague, \"Stop by my office on Friday and you can have my old laptop.\" The colleague stops by, but the manager has given the laptop to someone else. Why is the promise most likely unenforceable?",
      "o": ["Because laptops cannot be the subject of a contract.", "Because stopping by was only a condition of collecting a gift, not something the manager bargained for.", "Because the colleague arrived too late in the day.", "Because the promise was made at work."],
      "a": 1,
      "w": "This is a conditional gift. Coming to the office is just how the gift gets collected. Under section 71 consideration must be sought by the promisor as the price of the promise, and the manager was not bargaining for a visit." }
  ]
};

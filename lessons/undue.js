window.LESSONS = window.LESSONS || {};
window.LESSONS["undue"] = {
  "id": "undue",
  "title": "Undue Influence",
  "track": "cl",
  "sections": ["§177"],
  "scenes": [
    { "title": "Undue Influence", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: undue influence.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Persuaded, or pushed?", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "point", "face": "smirk", "hat": "tophat", "label": "Persuader", "say": "Trust me. Sign." },
          { "k": "fig", "x": 470, "y": 400, "pose": "sad", "face": "sad", "label": "Tired and trusting", "say": "If you say so..." } ] },
      { "say": "Some defences punish bad behaviour. Others protect the vulnerable. Undue influence does both at once. It asks whether someone was talked into a deal by unfair persuasion, from a person who dominated them or whom they trusted.",
        "add": [
          { "k": "icon", "name": "doc", "x": 335, "y": 340 },
          { "k": "text", "x": 570, "y": 320, "t": "No threat needed", "s": 24, "c": "red", "w": 160 } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Section 177. Undue influence is unfair persuasion of someone who is under the persuader's domination, or who is justified in trusting the persuader to look after their welfare. The contract is voidable by the victim. Picture the number. One seven seven: one tired person, and two sevens leaning over him.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§177", "name": "Undue influence", "rule": "Unfair persuasion of the dominated or trusting: voidable.", "hook": "1-7-7: one tired person, two sevens leaning over him." } ] },
      { "say": "Two ingredients, then. One: unfair persuasion. Two: a weak spot, either domination or trust. And how do we spot unfair persuasion? The leading case, Odorizzi, lists seven warning signs. Your acronym, coming up shortly, is mean tip.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "CASE", "name": "Odorizzi: seven signs", "rule": "Seven signs that persuasion became over-persuasion.", "hook": "MEAN TIP: seven letters, seven warning signs." } ] },
      { "clear": true,
        "say": "A quick contrast with duress. Duress is a threat: sign, or else. Undue influence needs no threat at all. It is pressure and persuasion, aimed at someone who cannot resist it. Duress twists your arm. Undue influence bends your ear.",
        "add": [
          { "k": "text", "x": 110, "y": 150, "t": "DURESS", "s": 30 },
          { "k": "line", "x1": 370, "y1": 120, "x2": 370, "y2": 400 },
          { "k": "text", "x": 420, "y": 150, "t": "UNDUE INFLUENCE", "s": 30 },
          { "k": "fig", "x": 190, "y": 395, "pose": "point", "face": "flat", "say": "Sign, or else!" },
          { "k": "fig", "x": 550, "y": 395, "pose": "hold", "face": "smirk", "say": "Sign... trust me..." },
          { "k": "text", "x": 60, "y": 438, "t": "Duress twists your arm. Undue influence bends your ear.", "s": 23, "c": "blue" } ] }
    ] },
    { "title": "The exhausted teacher", "beats": [
      { "say": "Odorizzi and Bloomfield School District. Odorizzi, a teacher, was arrested. After questioning and bail, he had gone forty hours without sleep. Then his principal and the district superintendent turned up at his apartment.",
        "add": [
          { "k": "text", "x": 60, "y": 140, "t": "Odorizzi v. Bloomfield School Dist.", "s": 22, "c": "blue" },
          { "k": "text", "x": 430, "y": 185, "t": "40 hours, no sleep", "s": 26, "c": "red" },
          { "k": "fig", "x": 160, "y": 400, "pose": "sad", "face": "sad", "label": "Odorizzi", "say": "So... tired..." },
          { "k": "icon", "name": "door", "x": 290, "y": 345, "label": "His apartment" },
          { "k": "fig", "x": 440, "y": 400, "pose": "hips", "hat": "tophat", "label": "Superintendent" },
          { "k": "fig", "x": 620, "y": 400, "pose": "stand", "hat": "bun", "label": "Principal" } ] },
      { "clear": true,
        "say": "They said they wanted to help. Resign right now, and this stays quiet. Refuse, and the district will dismiss you, and the arrest will be made public. No time to think it over. No time to call a lawyer. He signed.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Resign tonight, or we go public", "s": 28 },
          { "k": "fig", "x": 150, "y": 400, "pose": "sad", "face": "sad", "label": "Odorizzi" },
          { "k": "icon", "name": "doc", "x": 260, "y": 345, "label": "Resignation" },
          { "k": "fig", "x": 400, "y": 400, "pose": "point", "hat": "tophat", "say": "Resign now. Quietly." },
          { "k": "fig", "x": 630, "y": 400, "pose": "hips", "hat": "bun", "say": "No time for lawyers." } ] },
      { "clear": true,
        "say": "The charges were later dropped, and he sued to undo the resignation. Not duress, said the court: the district had a legal right to start dismissal proceedings. But undue influence, yes. His claim could go forward. Excessive pressure on a worn-out mind is enough.",
        "add": [
          { "k": "stamp", "x": 60, "y": 150, "t": "NOT DURESS", "s": 26, "c": "red" },
          { "k": "text", "x": 250, "y": 160, "t": "(the district had a legal right to act)", "s": 22 },
          { "k": "stamp", "x": 60, "y": 240, "t": "UNDUE INFLUENCE: CLAIM STANDS", "s": 24, "c": "green" },
          { "k": "text", "x": 60, "y": 320, "t": "Heavy pressure on a worn-out mind", "s": 24 },
          { "k": "fig", "x": 620, "y": 400, "pose": "up", "label": "Odorizzi" } ] }
    ] },
    { "title": "Seven warning signs", "beats": [
      { "say": "The seven signs. Mean tip. M: multiple persuaders. E: emphasis on the cost of delay. A: advisers absent. N: no time for a lawyer.",
        "add": [
          { "k": "text", "x": 62, "y": 165, "t": "M", "s": 34, "c": "blue" }, { "k": "text", "x": 108, "y": 162, "t": "Multiple persuaders", "s": 23 },
          { "k": "text", "x": 62, "y": 225, "t": "E", "s": 34, "c": "blue" }, { "k": "text", "x": 108, "y": 222, "t": "Emphasis on cost of delay", "s": 23 },
          { "k": "text", "x": 62, "y": 285, "t": "A", "s": 34, "c": "blue" }, { "k": "text", "x": 108, "y": 282, "t": "Advisers absent", "s": 23 },
          { "k": "text", "x": 62, "y": 345, "t": "N", "s": 34, "c": "blue" }, { "k": "text", "x": 108, "y": 342, "t": "No time for a lawyer", "s": 23 } ] },
      { "say": "T: an unusual time. I: insistence on finishing at once. P: an unusual place. If someone gives you a mean tip, such as sign now, tonight, on your own sofa, be suspicious. You do not need all seven. The more you see, the stronger the claim.",
        "add": [
          { "k": "text", "x": 410, "y": 165, "t": "T", "s": 34, "c": "blue" }, { "k": "text", "x": 452, "y": 162, "t": "Time: unusual", "s": 23 },
          { "k": "text", "x": 410, "y": 225, "t": "I", "s": 34, "c": "blue" }, { "k": "text", "x": 452, "y": 222, "t": "Insist: finish at once", "s": 23 },
          { "k": "text", "x": 410, "y": 285, "t": "P", "s": 34, "c": "blue" }, { "k": "text", "x": 452, "y": 282, "t": "Place: unusual", "s": 23 },
          { "k": "text", "x": 410, "y": 395, "t": "MEAN TIP", "s": 46, "c": "blue" },
          { "k": "ul", "x": 410, "y": 409, "w": 190, "c": "blue" } ] }
    ] },
    { "title": "The trusted lawyer", "beats": [
      { "say": "In re Estate of Burren. Glenn Burren treated Steven, a family friend, like a son. Steven became his lawyer, and was added to his bank account. Over a few years, Glenn signed cheques to Steven for almost five hundred thousand dollars.",
        "add": [
          { "k": "text", "x": 60, "y": 140, "t": "In re Estate of Burren", "s": 22, "c": "blue" },
          { "k": "text", "x": 60, "y": 185, "t": "Cheques: almost $500,000", "s": 26, "c": "red" },
          { "k": "fig", "x": 170, "y": 400, "pose": "hold", "hat": "hair", "label": "Glenn", "say": "Here you go, son." },
          { "k": "icon", "name": "money", "x": 310, "y": 335, "c": "green" },
          { "k": "fig", "x": 460, "y": 400, "pose": "up", "face": "smirk", "hat": "tophat", "label": "Steven, his lawyer", "say": "Thanks, Pops." } ] },
      { "clear": true,
        "say": "Glenn was mentally sharp. That did not matter. When a fiduciary, such as a lawyer, benefits from a deal with the person who trusts him, the law presumes undue influence. The fiduciary must prove the deal was fair. Steven could not, and had to pay the money back.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Fiduciary + benefit =", "s": 28 },
          { "k": "stamp", "x": 360, "y": 150, "t": "PRESUMED UNDUE INFLUENCE", "s": 22, "c": "red" },
          { "k": "text", "x": 60, "y": 220, "t": "The lawyer must prove the deal was fair", "s": 24 },
          { "k": "cross", "x": 64, "y": 252 }, { "k": "text", "x": 110, "y": 270, "t": "No independent advice", "s": 24 },
          { "k": "cross", "x": 64, "y": 304 }, { "k": "text", "x": 110, "y": 322, "t": "Nothing given in return", "s": 24 },
          { "k": "text", "x": 60, "y": 395, "t": "Competent client? Still protected.", "s": 24 },
          { "k": "fig", "x": 630, "y": 400, "pose": "sad", "face": "sad", "hat": "tophat", "label": "Steven" } ] }
    ] },
    { "title": "The rushed prenup", "beats": [
      { "say": "Lutgert and Lutgert. A wealthy man arranged a wedding in three days, with a honeymoon cruise already booked. On the wedding day, at the jeweller's, he pulled a prenuptial agreement from his pocket. Sign, he said, or the wedding is off.",
        "add": [
          { "k": "text", "x": 60, "y": 140, "t": "Lutgert v. Lutgert", "s": 22, "c": "blue" },
          { "k": "text", "x": 280, "y": 140, "t": "Wedding day, at the jeweller's", "s": 23 },
          { "k": "icon", "name": "ship", "x": 675, "y": 195, "s": 0.9 },
          { "k": "fig", "x": 200, "y": 400, "pose": "hold", "hat": "tophat", "label": "Groom", "say": "Sign, or it's off." },
          { "k": "icon", "name": "doc", "x": 335, "y": 345, "label": "Prenup" },
          { "k": "fig", "x": 480, "y": 400, "pose": "shrug", "face": "shock", "hat": "bun", "label": "Bride", "say": "Today?!" },
          { "k": "icon", "name": "ring", "x": 640, "y": 340 } ] },
      { "clear": true,
        "say": "She signed. Ten years later, the court threw the agreement out. Engaged couples owe each other trust and candour. The terms hugely favoured him, and the timing was coercive. That raised a presumption of undue influence, and he had nothing to rebut it.",
        "add": [
          { "k": "stamp", "x": 60, "y": 150, "t": "AGREEMENT SET ASIDE", "s": 26, "c": "green" },
          { "k": "text", "x": 60, "y": 225, "t": "Engaged couples owe each other candour", "s": 24 },
          { "k": "text", "x": 60, "y": 270, "t": "Terms hugely one-sided", "s": 24 },
          { "k": "text", "x": 60, "y": 315, "t": "Sprung at the last minute", "s": 24 },
          { "k": "text", "x": 60, "y": 370, "t": "= a presumption he could not rebut", "s": 24, "c": "red" },
          { "k": "fig", "x": 630, "y": 400, "pose": "up", "hat": "bun", "label": "Bride" } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Do not hunt for a threat, and do not hunt for mental incapacity. Glenn Burren was competent. Nobody threatened to hurt Odorizzi. Undue influence lives in the gap: a capable person, over-persuaded by someone with power or trust.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "cross", "x": 64, "y": 182 }, { "k": "text", "x": 110, "y": 200, "t": "Hunting for a threat", "s": 26 },
          { "k": "cross", "x": 64, "y": 242 }, { "k": "text", "x": 110, "y": 260, "t": "Hunting for incapacity", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "A capable person, over-persuaded by power or trust", "s": 26, "w": 380 },
          { "k": "fig", "x": 630, "y": 400, "pose": "shrug", "face": "flat" } ] },
      { "clear": true,
        "say": "Let's recap. Undue influence is unfair persuasion, plus domination or trust. Odorizzi gives seven warning signs: mean tip. A fiduciary who benefits is presumed to have used undue influence. So is the groom with the last-minute, one-sided prenup. Duress is a threat. This is over-persuasion. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§177: unfair persuasion + domination or trust", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "Odorizzi: seven signs = MEAN TIP", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "Burren: fiduciary benefits = presumption", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "Lutgert: rushed, one-sided prenup", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "Duress = threat. This = over-persuasion.", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Undue Influence", "k": "cl",
      "q": "Under Restatement section 177, undue influence is best described as:",
      "o": ["An improper threat that leaves the victim no reasonable alternative.", "Unfair persuasion of a person who is dominated by the persuader or justified in trusting them.", "A false statement of fact that the victim relies on.", "A contract term so one-sided that it shocks the conscience."],
      "a": 1,
      "w": "Section 177 has two ingredients: unfair persuasion, and a weak spot of domination or trust. Picture one seven seven: one tired person with two sevens leaning over him. The first option is duress, which is a different defence." },
    { "t": "Undue Influence", "k": "cl",
      "q": "An elderly, fully competent widow relies on her financial adviser for every money decision. The adviser persuades her to sell him her lake cabin for a third of its value. She took no outside advice. Her family sues to undo the sale. What is the likely analysis?",
      "o": ["The sale stands, because she was mentally competent.", "The sale stands, because the adviser made no threat.", "The sale is void, because advisers may never buy from clients.", "A presumption of undue influence arises, and the adviser must show the deal was fair."],
      "a": 3,
      "w": "This is In re Estate of Burren. When a fiduciary benefits from a deal with the person who trusts him, undue influence is presumed and the fiduciary must rebut it. Competence does not save the deal, and no threat is needed." },
    { "t": "Undue Influence", "k": "cl",
      "q": "Which of the following is NOT one of the warning signs of over-persuasion listed in Odorizzi v. Bloomfield School District?",
      "o": ["The agreement was put in writing.", "Several persuaders worked on one person.", "The deal was discussed at an unusual time.", "The person was told there was no time to consult a lawyer."],
      "a": 0,
      "w": "Run through mean tip. Multiple persuaders, emphasis on delay, advisers absent, no time for a lawyer, unusual time, insistence on finishing now, unusual place. Putting a deal in writing is not on the list." },
    { "t": "Undue Influence", "k": "cl",
      "q": "At 11 p.m. on the night of an accident, two insurance adjusters visit the injured driver in his hospital room. They say the offer expires tonight and there is no point calling a lawyer. Groggy, he signs a release for a small sum. No threat is made. What is his best defence?",
      "o": ["Duress, because he was in hospital.", "Lack of capacity, because all patients lack capacity.", "Undue influence, because of the over-persuasion of a weakened person.", "None, because he signed voluntarily."],
      "a": 2,
      "w": "Count the Odorizzi signs: unusual time, unusual place, insistence on finishing at once, multiple persuaders, no advisers, no time for a lawyer. There is no threat, so duress is a poor fit. Undue influence is the natural claim." },
    { "t": "Undue Influence", "k": "cl",
      "q": "A landlord tells a tenant, \"Sign this new lease at double the rent or I will smash your shop windows tonight.\" The tenant signs. Which defence fits best, and why?",
      "o": ["Undue influence, because the landlord used unfair persuasion.", "Duress, because the landlord made an improper threat.", "Undue influence, because landlords are fiduciaries.", "Neither, because the tenant signed the lease."],
      "a": 1,
      "w": "Duress twists your arm. Undue influence bends your ear. A threat to commit a crime or tort is the classic improper threat for duress. Undue influence is about over-persuasion within domination or trust, with no threat required." }
  ]
};

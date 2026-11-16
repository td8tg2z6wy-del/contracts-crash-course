window.LESSONS = window.LESSONS || {};
window.LESSONS["online"] = {
  "id": "online",
  "title": "Online Contracts",
  "track": "cl",
  "sections": [],
  "scenes": [
    { "title": "Online Contracts", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: online contracts.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Did you agree to that?", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "hold", "label": "User", "say": "Click!" },
          { "k": "icon", "name": "phone", "x": 285, "y": 330, "s": 0.8 },
          { "k": "icon", "name": "doc", "x": 520, "y": 290, "s": 1.6, "label": "Terms of Use" } ] },
      { "say": "A contract needs mutual assent, judged from the outside. Online, nobody shakes hands or signs in ink. You click, you scroll, you download. So the question is simple. When does a tap on a screen show that you agreed to the terms?",
        "add": [
          { "k": "text", "x": 330, "y": 425, "t": "Mutual assent = what you SHOW", "s": 24, "c": "red" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "No single Restatement section runs this topic, so our rule cards are cases. First, Specht and Netscape. No reasonable notice of the terms means no assent to them. Memory picture: Specht sounds like specs. If you need spectacles to find the terms, they do not bind.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "CASE", "name": "Specht v. Netscape", "rule": "No reasonable notice of the terms means no assent.", "hook": "Specht = specs. Need spectacles to find the terms? No deal." } ] },
      { "say": "Second, Fteja and Facebook. You do not need to have actually read the terms. If a reasonable user would realise that terms exist, you are on inquiry notice, and a click can bind you. Rhyme time. Click, it sticks. Browse, who knows.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "CASE", "name": "Fteja v. Facebook", "rule": "Inquiry notice plus a click is enough to bind you.", "hook": "Click, it sticks. Browse, who knows." } ] }
    ] },
    { "title": "Click or browse?", "beats": [
      { "say": "Two kinds of online terms. Clickwrap makes you do something, like tick a box or press, I agree, before you can go on. That act is an outward sign of assent, so courts usually enforce clickwrap.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "CLICKWRAP", "s": 30, "c": "green" },
          { "k": "box", "x": 60, "y": 180, "w": 320, "h": 62 },
          { "k": "check", "x": 75, "y": 196 },
          { "k": "text", "x": 123, "y": 219, "t": "I agree to the terms", "s": 24 },
          { "k": "text", "x": 60, "y": 300, "t": "You must act = assent shown", "s": 26 },
          { "k": "stamp", "x": 60, "y": 370, "t": "USUALLY ENFORCED", "s": 26, "c": "green" } ] },
      { "clear": true,
        "say": "Browsewrap asks for nothing. The terms sit behind a link at the bottom of the page, and the site claims that simply using it means you agree. Courts enforce browsewrap only if you knew, or reasonably should have known, that the terms were there.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "BROWSEWRAP", "s": 30, "c": "red" },
          { "k": "box", "x": 60, "y": 175, "w": 300, "h": 180 },
          { "k": "text", "x": 80, "y": 215, "t": "Welcome! Shop now.", "s": 24 },
          { "k": "text", "x": 80, "y": 342, "t": "terms of use", "s": 14, "c": "blue" },
          { "k": "arrow", "x1": 420, "y1": 300, "x2": 175, "y2": 336, "c": "red" },
          { "k": "text", "x": 430, "y": 290, "t": "tiny link, way down here", "s": 22, "c": "red", "w": 220 },
          { "k": "text", "x": 60, "y": 415, "t": "Binding only with notice", "s": 26 } ] }
    ] },
    { "title": "The download button", "beats": [
      { "say": "Specht and Netscape. Users downloaded free software by clicking a download button. The licence terms, including an arbitration clause, were further down the page, visible only if you scrolled past the button. Later the users sued, claiming the software spied on their activity. Netscape demanded arbitration.",
        "add": [
          { "k": "box", "x": 60, "y": 120, "w": 290, "h": 170 },
          { "k": "box", "x": 115, "y": 175, "w": 180, "h": 54, "c": "green" },
          { "k": "text", "x": 205, "y": 211, "t": "DOWNLOAD", "s": 24, "c": "green", "anchor": "middle" },
          { "k": "text", "x": 205, "y": 318, "t": "(scroll down)", "s": 18, "anchor": "middle" },
          { "k": "text", "x": 62, "y": 360, "t": "Licence terms + arbitration", "s": 22, "c": "red" },
          { "k": "fig", "x": 560, "y": 400, "pose": "pointL", "label": "User", "say": "Free? Click!" } ] },
      { "say": "The court, through then Judge Sotomayor, refused. A reasonably careful user would not have known the terms were there. Clicking download showed a wish for free software, not assent to hidden terms. No reasonable notice, no agreement, no arbitration.",
        "add": [
          { "k": "stamp", "x": 395, "y": 150, "t": "NO NOTICE = NO ASSENT", "s": 24, "c": "red" },
          { "k": "text", "x": 397, "y": 205, "t": "Specht v. Netscape", "s": 22, "c": "blue" },
          { "k": "text", "x": 62, "y": 400, "t": "hidden below the button", "s": 22 } ] }
    ] },
    { "title": "The duty to read", "beats": [
      { "say": "But wait. Is there not a duty to read? Yes. If you sign or click on something that is plainly a contract, you are bound, read or not. The limit: if it does not look like a contract, and nobody points out the terms, they do not bind you.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Duty to read", "s": 30 },
          { "k": "check", "x": 62, "y": 190 }, { "k": "text", "x": 110, "y": 208, "t": "Looks like a contract: bound, read or not", "s": 24 },
          { "k": "cross", "x": 62, "y": 255, "r": 22 }, { "k": "text", "x": 110, "y": 273, "t": "Doesn't look like one, terms not flagged:", "s": 24 },
          { "k": "text", "x": 110, "y": 307, "t": "those terms do not bind", "s": 24, "c": "red" },
          { "k": "icon", "name": "doc", "x": 620, "y": 380 } ] },
      { "clear": true,
        "say": "So the real issue is notice, and there are two kinds. Actual notice means you really knew about the terms. Inquiry notice means a reasonable person would have realised terms existed and gone looking. Either one will do.",
        "add": [
          { "k": "text", "x": 60, "y": 140, "t": "ACTUAL NOTICE", "s": 28 },
          { "k": "text", "x": 60, "y": 175, "t": "you really knew", "s": 24 },
          { "k": "line", "x1": 370, "y1": 118, "x2": 370, "y2": 190 },
          { "k": "text", "x": 400, "y": 140, "t": "INQUIRY NOTICE", "s": 28 },
          { "k": "text", "x": 400, "y": 175, "t": "you should have asked", "s": 24 },
          { "k": "fig", "x": 190, "y": 400, "pose": "up", "label": "Knew", "say": "I saw the terms." },
          { "k": "fig", "x": 510, "y": 400, "pose": "shrug", "face": "flat", "label": "Should have looked", "say": "There were terms?" } ] }
    ] },
    { "title": "Facebook versus Gogo", "beats": [
      { "say": "Two cases, opposite results. In Fteja and Facebook, a user sued after his account was shut down. The sign-up page said, right under the button, that clicking sign up meant agreeing to the terms of service, with a link.",
        "add": [
          { "k": "box", "x": 60, "y": 125, "w": 280, "h": 60, "c": "green" },
          { "k": "text", "x": 200, "y": 166, "t": "SIGN UP", "s": 28, "c": "green", "anchor": "middle" },
          { "k": "text", "x": 60, "y": 215, "t": "By clicking, you agree to the Terms", "s": 20 },
          { "k": "ul", "x": 328, "y": 221, "w": 55, "c": "blue" },
          { "k": "fig", "x": 580, "y": 400, "pose": "sad", "face": "sad", "hat": "cap", "label": "Fteja", "say": "My account!" } ] },
      { "say": "The court enforced Facebook's forum selection clause and sent the case to California. A link beside the button is like the back of a cruise ticket. You know there is more to read. That is inquiry notice.",
        "add": [
          { "k": "stamp", "x": 60, "y": 300, "t": "INQUIRY NOTICE: BOUND", "s": 26, "c": "green" },
          { "k": "text", "x": 62, "y": 362, "t": "Fteja v. Facebook", "s": 22, "c": "blue" },
          { "k": "text", "x": 62, "y": 397, "t": "like the back of a cruise ticket", "s": 22 } ] },
      { "clear": true,
        "say": "Now Berkson and Gogo. A flyer bought in-flight wifi, then found he was being charged every month. Gogo pointed to an arbitration clause in its terms. But the link was easy to miss and nothing made him look. The court refused to enforce it.",
        "add": [
          { "k": "icon", "name": "jet", "x": 120, "y": 170, "s": 1.4 },
          { "k": "text", "x": 230, "y": 165, "t": "Wifi: billed every month", "s": 26, "c": "red" },
          { "k": "fig", "x": 200, "y": 400, "pose": "up", "face": "shock", "label": "Berkson", "say": "Monthly?!" },
          { "k": "stamp", "x": 410, "y": 300, "t": "NOT BOUND", "s": 30, "c": "red" },
          { "k": "text", "x": 412, "y": 362, "t": "Berkson v. Gogo", "s": 22, "c": "blue" },
          { "k": "text", "x": 412, "y": 397, "t": "link easy to miss", "s": 22 } ] }
    ] },
    { "title": "Why arbitration?", "beats": [
      { "say": "Notice what these fights are about. Arbitration clauses. Arbitration is private dispute resolution, and under the Federal Arbitration Act an agreement to arbitrate is enforced like any other contract. But first there must be an agreement. That is why notice matters so much.",
        "add": [
          { "k": "icon", "name": "gavel", "x": 120, "y": 190, "s": 1.3, "label": "Court" },
          { "k": "arrow", "x1": 190, "y1": 190, "x2": 310, "y2": 190 },
          { "k": "text", "x": 330, "y": 199, "t": "Private arbitrator", "s": 28 },
          { "k": "text", "x": 60, "y": 320, "t": "Arbitration clause = enforced like any contract", "s": 24 },
          { "k": "text", "x": 60, "y": 385, "t": "...IF there is a contract", "s": 26, "c": "red" } ] },
      { "clear": true,
        "say": "Why do companies love it? Remember jade. J, A, D, E. No jury. Almost no appeal. Limited discovery. And no public explanation of the result. It is quicker and quieter, which suits the company nicely.",
        "add": [
          { "k": "text", "x": 60, "y": 160, "t": "Jury: none", "s": 28 },
          { "k": "text", "x": 60, "y": 215, "t": "Appeal: very limited", "s": 28 },
          { "k": "text", "x": 60, "y": 270, "t": "Discovery: limited", "s": 28 },
          { "k": "text", "x": 60, "y": 325, "t": "Explanation: not public", "s": 28 },
          { "k": "text", "x": 500, "y": 260, "t": "JADE", "s": 56, "c": "blue" },
          { "k": "ul", "x": 500, "y": 274, "w": 120, "c": "blue" } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Do not ask whether the user actually read the terms. Almost nobody does. Ask two things. Would a reasonable user have noticed that terms existed? And did the user do something, like clicking, that shows assent?",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "cross", "x": 62, "y": 185, "r": 22 }, { "k": "text", "x": 110, "y": 204, "t": "Did they read it?", "s": 26 },
          { "k": "check", "x": 62, "y": 250 }, { "k": "text", "x": 110, "y": 268, "t": "Reasonable notice of the terms?", "s": 26 },
          { "k": "check", "x": 62, "y": 310 }, { "k": "text", "x": 110, "y": 328, "t": "An act showing assent?", "s": 26 } ] },
      { "clear": true,
        "say": "Let's recap. Online assent is judged from the outside. Clickwrap usually binds. Browsewrap binds only with notice. Specht: hidden terms, no deal. Actual or inquiry notice will do, as in Fteja, but not a buried link, as in Berkson. And arbitration needs agreement first. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "Clickwrap: an act of assent, usually binds", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "Browsewrap: binds only with notice", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "Specht: hidden terms, no assent", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "Notice: actual or inquiry (Fteja, Berkson)", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "Arbitration: private, but needs agreement", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Online Contracts", "k": "cl",
      "q": "A shopping site has a small grey \"Terms\" link in the footer of every page. The terms contain an arbitration clause. A customer buys a lamp without ever scrolling to the footer or being told that terms apply. Is the customer bound to arbitrate?",
      "o": ["Yes, because using a website always means accepting its terms.", "Probably not, because the customer had no reasonable notice that any terms existed.", "Yes, because the customer had a duty to read every page.", "No, because arbitration clauses are never enforceable online."],
      "a": 1,
      "w": "This is browsewrap. As in Specht and Netscape, terms bind only if a reasonable user would have noticed them. A faint footer link, with nothing drawing attention to it, gives no reasonable notice, so there is no assent to the arbitration clause." },
    { "t": "Online Contracts", "k": "cl",
      "q": "To create an account, a user must tick a box beside the words \"I have read and agree to the Terms of Service\", with the terms linked. The user ticks the box without opening the link. Is the user bound by the terms?",
      "o": ["No, because the user never opened the terms.", "No, because online contracts need a handwritten signature.", "Only if the user later reads the terms.", "Yes, because ticking the box is an outward sign of assent, and the user was told terms applied."],
      "a": 3,
      "w": "This is clickwrap. The user had clear notice that terms applied and took an action showing assent. The duty to read means that choosing not to open the link is no excuse. Click, it sticks." },
    { "t": "Online Contracts", "k": "cl",
      "q": "What does \"inquiry notice\" mean in online contracting?",
      "o": ["A reasonable person in the user's position would have realised that terms existed and could have looked them up.", "The user actually read and understood every term.", "The company emailed the user a copy of the terms after the purchase.", "The user asked customer service a question about the terms."],
      "a": 0,
      "w": "Actual notice means you really knew of the terms. Inquiry notice means the circumstances would alert a reasonable person that terms exist, as with the link under the sign-up button in Fteja and Facebook. Either kind of notice can support assent." },
    { "t": "Online Contracts", "k": "cl",
      "q": "In Specht v. Netscape, why were the users not bound by the arbitration clause in the software licence?",
      "o": ["Because arbitration clauses in free software are illegal.", "Because the users were under eighteen.", "Because the licence terms were visible only by scrolling below the download button, so a reasonable user would not have known of them.", "Because the users clicked \"I do not agree\"."],
      "a": 2,
      "w": "The licence terms sat below the download button, on a part of the page users had no reason to visit. Clicking download did not clearly show assent to terms nobody was told about. No reasonable notice means no assent." },
    { "t": "Online Contracts", "k": "cl",
      "q": "Which of the following is NOT a typical feature of arbitration?",
      "o": ["Limited rights of appeal.", "A jury decides the dispute.", "Less discovery than in court.", "The decision is usually not explained in a public opinion."],
      "a": 1,
      "w": "Remember jade: no jury, almost no appeal, limited discovery, and no public explanation. An arbitrator decides, not a jury. That is why it matters so much whether the user ever agreed to the arbitration clause." }
  ]
};

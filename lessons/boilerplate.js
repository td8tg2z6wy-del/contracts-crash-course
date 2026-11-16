window.LESSONS = window.LESSONS || {};
window.LESSONS["boilerplate"] = {
  "id": "boilerplate",
  "title": "Boilerplate",
  "track": "cl",
  "sections": ["§211"],
  "scenes": [
    { "title": "Boilerplate", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: boilerplate.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Sign here. No need to read it!", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "hold", "face": "smirk", "hat": "tophat", "label": "Company", "say": "Just sign." },
          { "k": "icon", "name": "doc", "x": 290, "y": 325 },
          { "k": "fig", "x": 440, "y": 400, "pose": "shrug", "face": "flat", "label": "Customer", "say": "All forty pages?" } ] },
      { "say": "Most contracts you make are never negotiated. One side prints a standard form. The other side takes it or leaves it. Lawyers call that a contract of adhesion. So here is the question. Are you bound by fine print you never read?",
        "add": [
          { "k": "text", "x": 555, "y": 320, "t": "Take it or leave it", "s": 24, "c": "red", "w": 180 },
          { "k": "text", "x": 555, "y": 392, "t": "= contract of adhesion", "s": 22, "w": 180 } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "One Restatement section runs this topic: section 211. Part one. If you sign a standard form, you adopt its terms, whether you read them or not. Picture the number. Two, one, one. Two people, one form, one pen. And nobody reads.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§211(1)", "name": "Standard forms", "rule": "Sign a standard form and its terms bind you, read or not.", "hook": "2-1-1: two people, one form, one pen. Nobody reads." } ] },
      { "say": "Now the safety valve, in subsection three. If the drafter has reason to believe you would not sign if you knew a particular term was in there, that term is not part of the deal. Rhyme time. If they know you'd say no, the term must go.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§211(3)", "name": "The surprise-term limit", "rule": "Out: a term the drafter knows you'd refuse if you saw it.", "hook": "If they know you'd say no, the term must go." } ] },
      { "clear": true,
        "say": "One more piece of section 211. A standard form means the same thing for every customer, whether they studied it or never glanced at it. The careful reader gets no better deal than the rest of us. Comforting, in a way.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "§211(2): one form, one meaning", "s": 30 },
          { "k": "fig", "x": 150, "y": 400, "pose": "hold", "label": "Read it" },
          { "k": "fig", "x": 320, "y": 400, "pose": "shrug", "label": "Skimmed it" },
          { "k": "fig", "x": 490, "y": 400, "pose": "wave", "label": "Never looked" },
          { "k": "icon", "name": "doc", "x": 640, "y": 320, "s": 1.3, "label": "Same terms" } ] }
    ] },
    { "title": "Why nobody reads", "beats": [
      { "say": "Why does nobody read boilerplate? It is long. It is written in fog. You cannot change a word. Every other seller uses the same clauses. And honestly, you trust that nothing terrible is hiding in there, or that you will never need it.",
        "add": [
          { "k": "fig", "x": 150, "y": 400, "pose": "shrug", "face": "flat", "label": "You", "say": "Scroll, scroll..." },
          { "k": "text", "x": 310, "y": 150, "t": "Too long", "s": 26 },
          { "k": "text", "x": 310, "y": 196, "t": "Can't understand it", "s": 26 },
          { "k": "text", "x": 310, "y": 242, "t": "Can't change it", "s": 26 },
          { "k": "text", "x": 310, "y": 288, "t": "Everyone uses the same form", "s": 26 },
          { "k": "text", "x": 310, "y": 334, "t": "\"It will never matter\"", "s": 26 } ] },
      { "clear": true,
        "say": "Todd Rakoff offered a fix. Split the form in two. Visible terms are the ones you shop on, like price. Those bind you. Invisible terms are the fine print. Those should yield to ordinary background law unless the company justifies them. Visible, you chose. Invisible, who knows?",
        "add": [
          { "k": "text", "x": 70, "y": 150, "t": "VISIBLE", "s": 30, "c": "green" },
          { "k": "text", "x": 70, "y": 195, "t": "price, product, dates", "s": 24 },
          { "k": "text", "x": 70, "y": 235, "t": "you shopped on these", "s": 22 },
          { "k": "line", "x1": 385, "y1": 122, "x2": 385, "y2": 330 },
          { "k": "text", "x": 410, "y": 150, "t": "INVISIBLE", "s": 30, "c": "red" },
          { "k": "text", "x": 410, "y": 195, "t": "the fine print", "s": 24 },
          { "k": "text", "x": 410, "y": 235, "t": "background law applies unless justified", "s": 22, "w": 300 },
          { "k": "text", "x": 70, "y": 400, "t": "Visible, you chose. Invisible, who knows?", "s": 26, "c": "blue" } ] }
    ] },
    { "title": "The cruise ticket", "beats": [
      { "say": "Now the leading case. The Shutes, from Washington State, bought cruise tickets through a travel agent. During the cruise, off the coast of Mexico, Missus Shute slipped on a deck mat and was hurt. Back home in Washington, the Shutes sued the cruise line.",
        "add": [
          { "k": "icon", "name": "ship", "x": 150, "y": 185, "s": 1.7 },
          { "k": "text", "x": 290, "y": 160, "t": "Sued at home, in Washington", "s": 26 },
          { "k": "fig", "x": 400, "y": 400, "pose": "sad", "face": "sad", "hat": "hair", "label": "Mrs Shute", "say": "Ouch!" },
          { "k": "fig", "x": 600, "y": 400, "pose": "hips", "face": "flat", "hat": "cap", "label": "Cruise line" } ] },
      { "say": "Not so fast, said Carnival. Look at the ticket. In the fine print was a forum selection clause: every lawsuit must be brought in Florida. Nobody had negotiated it. And the tickets only arrived after the Shutes had paid.",
        "add": [
          { "k": "icon", "name": "doc", "x": 110, "y": 330, "s": 1.2, "label": "The ticket" },
          { "k": "text", "x": 170, "y": 300, "t": "\"All suits: Florida\"", "s": 22, "c": "red", "w": 150 },
          { "k": "text", "x": 170, "y": 372, "t": "forum selection clause", "s": 19, "w": 150 } ] },
      { "clear": true,
        "say": "The Supreme Court enforced the clause. A cruise line carries passengers from everywhere, so it has a real interest in one home court. That saves litigation costs, and passengers share the savings through cheaper fares. Florida was no remote alien forum, and there was no bad faith.",
        "add": [
          { "k": "stamp", "x": 60, "y": 160, "t": "CLAUSE ENFORCED", "s": 28, "c": "green" },
          { "k": "text", "x": 62, "y": 222, "t": "Carnival Cruise Lines v. Shute", "s": 23, "c": "blue" },
          { "k": "check", "x": 62, "y": 250 }, { "k": "text", "x": 110, "y": 267, "t": "One home court, lower costs", "s": 24 },
          { "k": "check", "x": 62, "y": 305 }, { "k": "text", "x": 110, "y": 322, "t": "Savings mean cheaper fares", "s": 24 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 377, "t": "Florida not remote; no bad faith", "s": 24 } ] },
      { "clear": true,
        "say": "Justice Stevens dissented. The clause sat in tiny print. Passengers saw it only after paying, with no refunds. They had no bargaining power at all. Where is the consent in that? He would test such take-it-or-leave-it terms for reasonableness.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "THE DISSENT", "s": 30, "c": "red" },
          { "k": "cross", "x": 62, "y": 185, "r": 22 }, { "k": "text", "x": 110, "y": 204, "t": "Tiny print", "s": 24 },
          { "k": "cross", "x": 62, "y": 240, "r": 22 }, { "k": "text", "x": 110, "y": 259, "t": "Seen only after paying; no refunds", "s": 24 },
          { "k": "cross", "x": 62, "y": 295, "r": 22 }, { "k": "text", "x": 110, "y": 314, "t": "No bargaining power", "s": 24 },
          { "k": "text", "x": 62, "y": 385, "t": "Adhesion terms: test for reasonableness", "s": 24 },
          { "k": "fig", "x": 640, "y": 400, "pose": "pointL", "face": "flat", "hat": "wig", "label": "Stevens, J." } ] }
    ] },
    { "title": "The tugboat deal", "beats": [
      { "say": "Carnival leaned on an earlier case, The Bremen and Zapata. An American company hired a German firm to tow an oil rig from Louisiana to Italy. Their contract sent all disputes to a court in London. A storm hit, the rig was damaged, and Zapata sued in Florida instead.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Contract: disputes go to London", "s": 28 },
          { "k": "icon", "name": "ship", "x": 650, "y": 200, "s": 1.2, "label": "The Bremen" },
          { "k": "fig", "x": 200, "y": 400, "pose": "up", "hat": "hardhat", "label": "Zapata", "say": "See you in Tampa!" },
          { "k": "fig", "x": 450, "y": 400, "pose": "hips", "face": "flat", "hat": "tophat", "label": "Unterweser", "say": "We said London." } ] },
      { "clear": true,
        "say": "The Supreme Court sent them to London. Two sophisticated businesses, of roughly equal strength, had bargained over that clause. So it is enforced unless it is unreasonable or unjust. Notice the stretch. Carnival took a rule made for negotiating equals and applied it to a ticket nobody negotiated.",
        "add": [
          { "k": "stamp", "x": 60, "y": 160, "t": "NEGOTIATED CLAUSE: ENFORCED", "s": 24, "c": "green" },
          { "k": "text", "x": 62, "y": 222, "t": "The Bremen v. Zapata Off-Shore", "s": 23, "c": "blue" },
          { "k": "text", "x": 62, "y": 275, "t": "Equals who bargained: enforce,", "s": 24 },
          { "k": "text", "x": 62, "y": 307, "t": "unless unreasonable or unjust", "s": 24 },
          { "k": "arrow", "x1": 120, "y1": 325, "x2": 120, "y2": 365 },
          { "k": "text", "x": 62, "y": 400, "t": "Carnival: same rule, but no bargaining", "s": 24, "c": "red" } ] }
    ] },
    { "title": "Two worlds", "beats": [
      { "say": "Step back. Contract law imagines a world of agreement. Two parties of similar strength. Both understand the deal. Both come out better off. And if one breaks it, a court gives a real remedy. Lovely place. You rarely live there.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "WORLD OF AGREEMENT", "s": 28, "c": "green" },
          { "k": "fig", "x": 140, "y": 400, "pose": "wave", "label": "Party A", "say": "Let's haggle." },
          { "k": "fig", "x": 310, "y": 400, "pose": "up", "label": "Party B", "say": "Deal!" },
          { "k": "check", "x": 440, "y": 200 }, { "k": "text", "x": 488, "y": 217, "t": "Equal strength", "s": 24 },
          { "k": "check", "x": 440, "y": 255 }, { "k": "text", "x": 488, "y": 272, "t": "Both understand", "s": 24 },
          { "k": "check", "x": 440, "y": 310 }, { "k": "text", "x": 488, "y": 327, "t": "Both better off", "s": 24 },
          { "k": "check", "x": 440, "y": 365 }, { "k": "text", "x": 488, "y": 382, "t": "Remedy in court", "s": 24 } ] },
      { "clear": true,
        "say": "You live in the world of boilerplate. Long forms, no bargaining, and terms that quietly trim your rights. Watch for a flea in the fine print. A, F, L, E, A. Auto-renewal. Forum selection. Limits on damages. Exculpatory clauses, which excuse the company from blame. And arbitration.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "WORLD OF BOILERPLATE", "s": 28, "c": "red" },
          { "k": "text", "x": 60, "y": 205, "t": "Auto-renewal", "s": 26 },
          { "k": "text", "x": 60, "y": 250, "t": "Forum selection", "s": 26 },
          { "k": "text", "x": 60, "y": 295, "t": "Limits on damages", "s": 26 },
          { "k": "text", "x": 60, "y": 340, "t": "Exculpatory clauses", "s": 26 },
          { "k": "text", "x": 60, "y": 385, "t": "Arbitration", "s": 26 },
          { "k": "text", "x": 470, "y": 290, "t": "A FLEA", "s": 56, "c": "blue" },
          { "k": "ul", "x": 470, "y": 304, "w": 175, "c": "blue" },
          { "k": "text", "x": 474, "y": 342, "t": "in the fine print", "s": 22, "c": "blue" } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Saying, I never read it, is not a defence. Under section 211 you are bound anyway. And a contract is not void just because it is take-it-or-leave-it. You need something more, like a term the drafter knew you would never accept.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "fig", "x": 170, "y": 400, "pose": "shrug", "face": "sad", "label": "Customer", "say": "I never read it!" },
          { "k": "fig", "x": 430, "y": 400, "pose": "hips", "face": "flat", "hat": "wig", "label": "Judge", "say": "Still bound." },
          { "k": "cross", "x": 540, "y": 290, "r": 46 } ] },
      { "clear": true,
        "say": "Let's recap. Standard forms bind you, read or not. The exception is a term the drafter knows you would refuse. Carnival enforced a forum clause nobody negotiated. The Bremen involved equals who bargained. And remember Rakoff: visible terms versus invisible ones. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§211: bound without reading", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§211(3): not the term you'd refuse", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "Carnival v. Shute: forum clause enforced", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "The Bremen: negotiated between equals", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "Rakoff: visible vs invisible terms", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Boilerplate", "k": "cl",
      "q": "Dana joins a gym by signing its standard two-page membership form without reading it. The form requires 30 days' written notice to cancel, which is typical for gyms. Dana later says she is not bound because she never read that term. Is she bound?",
      "o": ["No, because a term is binding only if it was actually read.", "No, because standard forms are never enforceable against consumers.", "Yes, because signing a standard form adopts its terms, read or not.", "Yes, but only if the gym read the term aloud to her."],
      "a": 2,
      "w": "Under section 211, a person who signs a standard form adopts its terms whether or not she read them. An ordinary notice clause is nothing the gym had reason to think she would refuse. Not reading is not a defence." },
    { "t": "Boilerplate", "k": "cl",
      "q": "Under Restatement section 211(3), when is a term in a standardized agreement NOT part of the agreement?",
      "o": ["When the drafter has reason to believe the other party would not have assented had they known the term was there.", "Whenever the other party did not read the form.", "Whenever the form was offered on a take-it-or-leave-it basis.", "When the term appears on the back of the form."],
      "a": 0,
      "w": "Section 211, subsection three, removes a term when the drafter has reason to believe the signer would not agree if they knew about it. If they know you'd say no, the term must go. Merely failing to read, or having no chance to bargain, is not enough." },
    { "t": "Boilerplate", "k": "cl",
      "q": "In Carnival Cruise Lines v. Shute, why did the majority enforce the forum selection clause printed on the ticket?",
      "o": ["Because the Shutes had personally negotiated the clause.", "Because consumers can never challenge a forum clause.", "Because the injury happened in Florida.", "Because the clause was reasonable: it limited where the line could be sued, cut costs, and was not adopted in bad faith."],
      "a": 3,
      "w": "The Court accepted that the clause was not negotiated, but found it reasonable. One home court saves litigation costs, passengers benefit through lower fares, and Florida was no remote alien forum. The injury actually happened off the coast of Mexico." },
    { "t": "Boilerplate", "k": "cl",
      "q": "What is the key difference between the forum selection clause in The Bremen v. Zapata and the one in Carnival Cruise Lines v. Shute?",
      "o": ["The Bremen clause was oral; the Carnival clause was written.", "The Bremen clause was bargained over by sophisticated businesses; the Carnival clause was fine print on a consumer ticket.", "The Bremen clause was struck down; the Carnival clause was enforced.", "The Bremen clause chose a United States court; the Carnival clause chose a foreign court."],
      "a": 1,
      "w": "In The Bremen, two commercial parties of roughly equal strength negotiated the London forum clause, and it was enforced. Carnival applied that approach to a form ticket that nobody negotiated. That stretch is exactly what the dissent objected to." },
    { "t": "Boilerplate", "k": "cl",
      "q": "A phone contract states the monthly price on page one. On page 31, in small print, it limits the company's liability for any loss. Under Rakoff's approach to contracts of adhesion, how should these two terms be treated?",
      "o": ["Both are fully binding, because the customer signed.", "Neither is binding, because the contract was not negotiated.", "The price is a visible term and binds; the liability limit is an invisible term that should give way to background law unless justified.", "The liability limit binds, but the price can be reset by the court."],
      "a": 2,
      "w": "Rakoff separates visible terms, the ones customers actually shop on, from invisible fine print. Visible terms are enforced. Invisible terms should yield to the ordinary background law unless the drafter can justify them. Visible, you chose. Invisible, who knows?" }
  ]
};

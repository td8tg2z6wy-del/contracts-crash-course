window.LESSONS = window.LESSONS || {};
window.LESSONS["ucc-firm-offer"] = {
  "id": "ucc-firm-offer",
  "title": "Firm Offers",
  "track": "ucc",
  "sections": ["§2-205", "§2-104"],
  "scenes": [
    { "title": "Firm Offers", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: firm offers.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Can I take my offer back?", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "point", "hat": "tophat", "label": "Offeror", "say": "Open till Friday!" },
          { "k": "fig", "x": 470, "y": 400, "pose": "shrug", "face": "flat", "label": "Offeree", "say": "Promise?" } ] },
      { "clear": true,
        "say": "A reminder first. The UCC applies only to sales of goods. And today's rule is narrower still. It only helps when the person making the offer is a merchant.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "UCC Article 2 = sales of GOODS", "s": 30 },
          { "k": "icon", "name": "crate", "x": 150, "y": 280, "s": 1.2, "label": "goods" },
          { "k": "text", "x": 250, "y": 290, "t": "+", "s": 40 },
          { "k": "icon", "name": "store", "x": 380, "y": 280, "s": 1.2, "label": "a merchant's offer" } ] },
      { "clear": true,
        "say": "The twins, side by side. Common law says an offer can be revoked any time before acceptance, even if you promised to keep it open, unless the other side paid for an option. The UCC says a merchant's signed, written promise to hold an offer open is binding, with no payment at all.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Common law says", "s": 28 },
          { "k": "ul", "x": 60, "y": 160, "w": 210 },
          { "k": "text", "x": 60, "y": 205, "t": "Revoke any time before acceptance. A promise to hold it open needs consideration: an option.", "s": 23, "w": 300 },
          { "k": "text", "x": 60, "y": 380, "t": "Dickinson v. Dodds", "s": 22, "c": "blue" },
          { "k": "line", "x1": 385, "y1": 120, "x2": 385, "y2": 430 },
          { "k": "text", "x": 410, "y": 150, "t": "UCC says", "s": 28, "c": "green" },
          { "k": "ul", "x": 410, "y": 160, "w": 120, "c": "green" },
          { "k": "text", "x": 410, "y": 205, "t": "A merchant's signed, written promise to hold an offer open binds. No consideration needed.", "s": 23, "w": 310 },
          { "k": "text", "x": 410, "y": 380, "t": "UCC §2-205", "s": 22, "c": "blue" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Two sections. First, section 2-205. An offer by a merchant to buy or sell goods, in a signed writing that gives assurance it will be held open, cannot be revoked for lack of consideration. Rhyme time. Two-oh-five keeps the offer alive.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-205", "name": "Firm offers", "rule": "A merchant's signed promise to hold an offer open binds.", "hook": "Two-oh-five keeps the offer alive." } ] },
      { "say": "Second, section 2-104 tells you who is a merchant. Someone who deals in goods of that kind, or holds themselves out as having special knowledge of the trade. Picture the number. One-oh-four is ten-four, what a trucker says on the radio. A professional, on the job.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§2-104", "name": "Who is a merchant", "rule": "One who deals in such goods or holds out trade skill.", "hook": "104 = \"ten-four\": a pro on the job." } ] },
      { "clear": true,
        "say": "Your acronym is SAM. Signed writing. Assurance that the offer stays open. Merchant. If SAM is on the board, the offer is firm for the time stated, or for a reasonable time if none is stated. But never longer than three months.",
        "add": [
          { "k": "check", "x": 62, "y": 150 }, { "k": "text", "x": 110, "y": 167, "t": "Signed writing", "s": 30 },
          { "k": "check", "x": 62, "y": 205 }, { "k": "text", "x": 110, "y": 222, "t": "Assurance it stays open", "s": 30 },
          { "k": "check", "x": 62, "y": 260 }, { "k": "text", "x": 110, "y": 277, "t": "Merchant makes the offer", "s": 30 },
          { "k": "text", "x": 540, "y": 235, "t": "S·A·M", "s": 56, "c": "blue" },
          { "k": "ul", "x": 540, "y": 249, "w": 170, "c": "blue" },
          { "k": "icon", "name": "clock", "x": 100, "y": 370 },
          { "k": "text", "x": 160, "y": 380, "t": "Never more than THREE MONTHS", "s": 28, "c": "red" } ] }
    ] },
    { "title": "The common-law twin", "beats": [
      { "say": "First, the old rule. Mister Dodds offered in writing to sell his property to Mister Dickinson, and added, this offer to be left over until Friday, nine in the morning. On Thursday, Dickinson heard that Dodds was selling to someone else.",
        "add": [
          { "k": "icon", "name": "house", "x": 105, "y": 175 },
          { "k": "text", "x": 180, "y": 185, "t": "\"Offer left over until Friday, 9 a.m.\"", "s": 26 },
          { "k": "fig", "x": 150, "y": 400, "pose": "hips", "hat": "tophat", "face": "smirk", "label": "Dodds", "say": "Sold to Allan." },
          { "k": "fig", "x": 390, "y": 400, "pose": "up", "face": "shock", "label": "Dickinson", "say": "But it's Thursday!" } ] },
      { "say": "Dickinson rushed to accept, and lost. Nobody had paid for the promise to keep the offer open, so it did not bind. Dodds was free to revoke, and reliable news of the sale was revocation enough. At common law, if you want a lock, buy an option.",
        "add": [
          { "k": "stamp", "x": 545, "y": 320, "t": "REVOKED", "s": 30, "c": "red" },
          { "k": "text", "x": 547, "y": 378, "t": "Dickinson v. Dodds", "s": 20, "c": "blue" },
          { "k": "text", "x": 547, "y": 408, "t": "No consideration, no lock.", "s": 19, "w": 180 } ] }
    ] },
    { "title": "SAM at work", "beats": [
      { "say": "Now the UCC. A furniture dealer emails a signed quote: fifty desks at two hundred dollars each, and this offer stays open until June thirtieth. A week later the dealer tries to back out. The buyer accepts anyway.",
        "add": [
          { "k": "icon", "name": "letter", "x": 105, "y": 170, "label": "Signed quote" },
          { "k": "text", "x": 185, "y": 160, "t": "50 desks · $200 each", "s": 26 },
          { "k": "text", "x": 185, "y": 198, "t": "\"Open until June 30\"", "s": 26, "c": "green" },
          { "k": "fig", "x": 150, "y": 400, "pose": "shrug", "hat": "tophat", "label": "Dealer", "say": "I take it back!" },
          { "k": "fig", "x": 390, "y": 400, "pose": "up", "label": "Buyer", "say": "I accept!" } ] },
      { "say": "The dealer is stuck. Signed writing, assurance, merchant. SAM is all there. The offer could not be revoked before June thirtieth, even though the buyer paid nothing to keep it open.",
        "add": [
          { "k": "stamp", "x": 510, "y": 320, "t": "FIRM OFFER", "s": 28, "c": "green" },
          { "k": "text", "x": 512, "y": 378, "t": "Contract formed.", "s": 22 },
          { "k": "text", "x": 512, "y": 408, "t": "No consideration needed.", "s": 19 } ] },
      { "clear": true,
        "say": "Change the facts. Uncle Bob, a schoolteacher, signs a note offering his old canoe and promising to keep the offer open for a week. Bob is not a merchant, so section 2-205 does not apply. He can revoke, just like Mister Dodds.",
        "add": [
          { "k": "fig", "x": 170, "y": 400, "pose": "hold", "hat": "cap", "label": "Uncle Bob", "say": "Open for a week." },
          { "k": "icon", "name": "doc", "x": 300, "y": 345, "s": 0.8 },
          { "k": "text", "x": 420, "y": 175, "t": "Not a merchant", "s": 30, "c": "red" },
          { "k": "text", "x": 420, "y": 220, "t": "§2-205 does not apply.", "s": 24 },
          { "k": "text", "x": 420, "y": 257, "t": "Common law: revocable.", "s": 24 } ] },
      { "clear": true,
        "say": "Next. A merchant says on the phone, I will hold that price for you until Monday. Nothing written, nothing signed. That is not a firm offer. Spoken assurances do not count under this section.",
        "add": [
          { "k": "icon", "name": "phone", "x": 115, "y": 200, "s": 1.4 },
          { "k": "text", "x": 200, "y": 185, "t": "\"I'll hold that price till Monday.\"", "s": 26 },
          { "k": "text", "x": 200, "y": 245, "t": "No signed writing", "s": 30, "c": "red" },
          { "k": "stamp", "x": 200, "y": 310, "t": "REVOCABLE", "s": 28, "c": "red" } ] },
      { "clear": true,
        "say": "What if a merchant's signed offer says, open for six months? The firm part lasts three months and no more. After that the offer is not dead. It simply becomes revocable again. Three months max, then the lock relaxes.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "\"Open for 6 months\"", "s": 30 },
          { "k": "line", "x1": 80, "y1": 260, "x2": 700, "y2": 260 },
          { "k": "line", "x1": 390, "y1": 240, "x2": 390, "y2": 280 },
          { "k": "text", "x": 100, "y": 235, "t": "months 1-3: FIRM", "s": 26, "c": "green" },
          { "k": "text", "x": 410, "y": 235, "t": "months 4-6: revocable", "s": 26, "c": "red" },
          { "k": "text", "x": 100, "y": 330, "t": "Three months max, then the lock relaxes.", "s": 24, "c": "blue" } ] },
      { "say": "And if the writing promises to hold the offer open but names no period, it stays firm for a reasonable time. Still capped at three months.",
        "add": [
          { "k": "icon", "name": "clock", "x": 100, "y": 400, "s": 0.8 },
          { "k": "text", "x": 150, "y": 408, "t": "No time stated = a reasonable time (max 3 months)", "s": 23 } ] },
      { "clear": true,
        "say": "One more detail. Sometimes the buyer supplies the form, with a hold-open clause buried in it. Then the merchant must sign that clause separately, so nobody gets locked in by accident.",
        "add": [
          { "k": "icon", "name": "doc", "x": 130, "y": 240, "s": 1.8, "label": "Buyer's form" },
          { "k": "text", "x": 245, "y": 185, "t": "\"Seller holds this offer open 60 days\"", "s": 24 },
          { "k": "text", "x": 245, "y": 245, "t": "Sign HERE too: ______", "s": 28, "c": "red" },
          { "k": "text", "x": 245, "y": 300, "t": "Assurance on the offeree's form must be separately signed.", "s": 22, "w": 440 } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Section 2-205 is not the only lock. Anyone, merchant or not, can still create an option the old way, by taking consideration for it. And a paid option can last longer than three months.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "icon", "name": "money", "x": 120, "y": 250, "s": 1.3, "c": "green" },
          { "k": "text", "x": 210, "y": 240, "t": "Paid option = the common-law lock", "s": 28 },
          { "k": "text", "x": 210, "y": 285, "t": "No merchant needed. No 3-month cap.", "s": 24 },
          { "k": "icon", "name": "key", "x": 120, "y": 370 },
          { "k": "text", "x": 210, "y": 380, "t": "Firm offer = the free lock, with limits", "s": 26, "c": "blue" } ] },
      { "clear": true,
        "say": "Let's recap. At common law an offer is revocable unless an option was paid for. Under section 2-205, a merchant's signed, written assurance makes the offer firm without consideration, for the stated time or a reasonable time, up to three months. Remember SAM. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "Common law: revocable, unless a paid option", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§2-205: S·A·M makes the offer firm", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "No consideration needed", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "Stated or reasonable time; max 3 months", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "Offeree's form: sign the clause separately", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Firm Offers", "k": "ucc",
      "q": "A tyre wholesaler sends a retailer a signed letter: \"We offer 400 tyres at $60 each. This offer will be held open for 30 days.\" The retailer pays nothing for the promise. On day 10 the wholesaler tries to revoke. On day 12 the retailer accepts. Is there a contract?",
      "o": ["No, because the retailer gave no consideration for the 30-day promise.", "Yes, because the letter was a firm offer that could not be revoked during the 30 days.", "No, because an offer can always be revoked before acceptance.", "Yes, but only if the retailer relied on the offer to its detriment."],
      "a": 1,
      "w": "This is section 2-205. A merchant, a signed writing, and an assurance that the offer will be held open. SAM is all there, so the offer is irrevocable for the stated time without any consideration." },
    { "t": "Firm Offers", "k": "ucc",
      "q": "A merchant's signed written offer to sell goods states: \"This offer will remain open for eight months.\" No consideration is paid. For how long is the offer irrevocable under the UCC?",
      "o": ["Eight months, as stated.", "A reasonable time, decided by the court.", "Not at all, because the stated period is too long.", "Three months."],
      "a": 3,
      "w": "Section 2-205 caps the period of irrevocability at three months. The firm part of the offer ends there. After that the offer may still be open, but the merchant is free to revoke it." },
    { "t": "Firm Offers", "k": "both",
      "q": "Dana, an accountant, writes and signs a note to her neighbour: \"I'll sell you my lawnmower for $150. I promise to keep this offer open until Sunday.\" On Friday, before the neighbour answers, Dana says she has changed her mind. Can she revoke?",
      "o": ["Yes, because she is not a merchant and received no consideration for her promise.", "No, because the promise was in a signed writing.", "No, because the UCC makes every written offer to sell goods irrevocable.", "Yes, but only because a lawnmower costs less than $500."],
      "a": 0,
      "w": "Section 2-205 only covers offers made by merchants. Dana is not one, so the common-law rule applies: without consideration for an option, an offer can be revoked any time before acceptance, as in Dickinson and Dodds." },
    { "t": "Firm Offers", "k": "ucc",
      "q": "A paper supplier tells a print shop by phone, \"I'll sell you 100 reams at $4 each, and I'll keep that offer open all week.\" Nothing is put in writing. Is this a firm offer under the UCC?",
      "o": ["Yes, because the supplier is a merchant.", "Yes, because the period is shorter than three months.", "No, because a firm offer needs a signed writing.", "No, because the price is under $500."],
      "a": 2,
      "w": "A firm offer under section 2-205 must be in a signed writing that gives assurance it will be held open. An oral promise by a merchant is not enough, so the supplier can still revoke before acceptance." },
    { "t": "Firm Offers", "k": "ucc",
      "q": "A buyer sends a seller the buyer's own pre-printed order form. Buried in the form is a clause: \"Seller agrees to hold this offer open for 45 days.\" The seller, a merchant, signs once at the bottom of the form. Is the hold-open clause binding as a firm offer?",
      "o": ["Yes, because one signature covers every clause on the form.", "No, because the clause is on a form supplied by the offeree and was not separately signed by the seller.", "Yes, because both parties are merchants.", "No, because firm offers may never appear on a pre-printed form."],
      "a": 1,
      "w": "Section 2-205 says that an assurance on a form supplied by the offeree must be separately signed by the offeror. The rule protects merchants from being locked in by a clause they never noticed." }
  ]
};

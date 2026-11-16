window.LESSONS = window.LESSONS || {};
window.LESSONS["ucc-tender"] = {
  "id": "ucc-tender",
  "title": "Perfect Tender and Cure",
  "track": "ucc",
  "sections": ["§2-601", "§2-508", "§2-612", "§§2-606, 2-607", "§2-608"],
  "scenes": [
    { "title": "Perfect Tender and Cure", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: perfect tender and cure.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Close enough?", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "hold", "label": "Seller", "say": "Near enough!" },
          { "k": "icon", "name": "crate", "x": 300, "y": 372, "s": 0.8 },
          { "k": "fig", "x": 470, "y": 400, "pose": "hips", "face": "flat", "label": "Buyer", "say": "Not what I ordered." } ] },
      { "say": "A seller delivers goods that are almost right. Maybe the colour is off, or the delivery is a day late. Does the buyer have to take them and sue for the difference, or can the buyer send them back?",
        "add": [
          { "k": "text", "x": 570, "y": 340, "t": "Take them?", "s": 24 },
          { "k": "text", "x": 570, "y": 380, "t": "Send them back?", "s": 24, "c": "red" } ] },
      { "clear": true,
        "say": "Quick reminder: the UCC covers only sales of goods. At common law, substantial performance is enough. Close counts, and you pay, minus damages. For goods, the UCC says the opposite. The tender must be perfect, or the buyer may reject.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Common law says...", "s": 28 },
          { "k": "text", "x": 60, "y": 195, "t": "Substantial performance: close enough, so pay, minus damages.", "s": 24, "w": 300 },
          { "k": "icon", "name": "house", "x": 200, "y": 350, "label": "building a house" },
          { "k": "line", "x1": 385, "y1": 122, "x2": 385, "y2": 420 },
          { "k": "text", "x": 408, "y": 150, "t": "UCC says...", "s": 28, "c": "blue" },
          { "k": "text", "x": 408, "y": 195, "t": "Perfect tender: any defect, and the buyer may reject.", "s": 24, "w": 310, "c": "blue" },
          { "k": "icon", "name": "crate", "x": 560, "y": 350, "label": "goods only" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Section 2-601, the perfect tender rule. If the goods or the delivery fail to conform to the contract in any respect, the buyer may reject. Memory hook: picture a six hundred and one piece jigsaw. One piece missing? Send it back.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-601", "name": "Perfect tender", "rule": "Fail to conform IN ANY RESPECT? The buyer may reject.", "hook": "A 601-piece jigsaw: one piece missing, send it back." } ] },
      { "say": "The buyer actually has three options. Say you order one hundred black chairs, and five arrive blue. You may reject all hundred. You may accept all hundred. Or you may accept the ninety-five black ones and reject the five blue ones, as separate commercial units.",
        "add": [
          { "k": "text", "x": 60, "y": 295, "t": "Order: 100 black chairs. 5 arrive blue.", "s": 24 },
          { "k": "text", "x": 80, "y": 338, "t": "1. Reject all 100", "s": 26, "c": "red" },
          { "k": "text", "x": 80, "y": 378, "t": "2. Accept all 100", "s": 26, "c": "green" },
          { "k": "text", "x": 80, "y": 418, "t": "3. Accept 95, reject the 5 blue", "s": 26 } ] },
      { "clear": true,
        "say": "That sounds brutal for sellers, so the UCC adds softeners. Remember them as C I A. Cure. Instalments. Acceptance. Once any of those three shows up, the perfect tender rule loses its teeth. Let's take them in turn.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "The softeners", "s": 30 },
          { "k": "text", "x": 60, "y": 215, "t": "Cure  §2-508", "s": 28 },
          { "k": "text", "x": 60, "y": 275, "t": "Instalments  §2-612", "s": 28 },
          { "k": "text", "x": 60, "y": 335, "t": "Acceptance  §§2-606 to 2-608", "s": 28 },
          { "k": "text", "x": 530, "y": 270, "t": "C·I·A", "s": 60, "c": "blue" },
          { "k": "ul", "x": 530, "y": 284, "w": 170, "c": "blue" } ] },
      { "clear": true,
        "say": "C is for cure, section 2-508. If the contract time has not run out, the seller may fix the problem. After the deadline, the seller still gets a reasonable time, if it reasonably believed the tender would be acceptable. Five-oh-eight: fix it, mate, before it's too late.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-508", "name": "Seller's right to cure", "rule": "Seller may fix it in time, or soon after if reasonable.", "hook": "Five-oh-eight: fix it, mate, before it's too late." } ] },
      { "clear": true,
        "say": "For example, a shop orders last year's printer. The seller sends this year's better model at the same price, expecting a thank you. The shop rejects it on the deadline. The seller gets a further reasonable time to swap in the right one, if it tells the buyer it will cure.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Cure after the deadline", "s": 30 },
          { "k": "fig", "x": 150, "y": 400, "pose": "hold", "label": "Seller", "say": "A newer model!" },
          { "k": "fig", "x": 400, "y": 400, "pose": "hips", "face": "flat", "label": "Buyer", "say": "Not what I ordered." },
          { "k": "text", "x": 522, "y": 310, "t": "Reasonable belief = a further reasonable time", "s": 22, "w": 200, "c": "green" } ] },
      { "clear": true,
        "say": "I is for instalment contracts, section 2-612. When goods come in separate deliveries, perfect tender is switched off. The buyer may reject an instalment only if the defect substantially impairs its value and cannot be cured. Picture twelve monthly deliveries. One bad month does not end the deal.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-612", "name": "Instalment contracts", "rule": "Reject an instalment only if badly impaired, incurable.", "hook": "612: twelve monthly deliveries. One bad month is no exit." } ] },
      { "say": "A is for acceptance, sections 2-606 and 2-607. A buyer accepts by saying the goods are fine, by not rejecting after a fair chance to inspect, or by acting like the owner. Then the buyer must pay, and bears the burden of proving any defect. Inspect and object, or you accept.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§§2-606, 2-607", "name": "Acceptance and its effect", "rule": "No rejection after inspecting = accepted. Pay, then prove.", "hook": "Inspect and object, or the law says you accept." } ] },
      { "clear": true,
        "say": "Can a buyer undo an acceptance? Yes, under section 2-608, but it is harder than rejecting. The defect must substantially impair the value of the goods to the buyer, and the buyer needs a good excuse, such as a hidden defect or a promised fix that never came.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-608", "name": "Revoking acceptance", "rule": "Undo acceptance only if value is SUBSTANTIALLY impaired.", "hook": "Rejecting is easy. Un-accepting is hard." } ] },
      { "say": "So here is the timeline. Before acceptance, any defect will do: that is perfect tender. After acceptance, only a substantial one will do. The moment of acceptance is where the buyer's power shrinks.",
        "add": [
          { "k": "arrow", "x1": 70, "y1": 345, "x2": 710, "y2": 345 },
          { "k": "line", "x1": 390, "y1": 325, "x2": 390, "y2": 365, "c": "blue" },
          { "k": "text", "x": 390, "y": 312, "t": "ACCEPTANCE", "s": 22, "c": "blue", "anchor": "middle" },
          { "k": "text", "x": 70, "y": 390, "t": "Before: ANY defect", "s": 24, "c": "green" },
          { "k": "text", "x": 70, "y": 422, "t": "reject, §2-601", "s": 20 },
          { "k": "text", "x": 410, "y": 390, "t": "After: SUBSTANTIAL only", "s": 24, "c": "red" },
          { "k": "text", "x": 410, "y": 422, "t": "revoke, §2-608", "s": 20 } ] }
    ] },
    { "title": "The camper van", "beats": [
      { "say": "Ramirez and Autosport. A couple bought a new camper van and traded in their old one. On delivery day, the paint was scratched and parts were missing. They came back later: the cushions were soaking wet. They came back again: nobody was there to hand it over.",
        "add": [
          { "k": "icon", "name": "car", "x": 110, "y": 160, "s": 1.3 },
          { "k": "text", "x": 185, "y": 160, "t": "scratched paint · wet cushions", "s": 26 },
          { "k": "text", "x": 185, "y": 196, "t": "three trips, never ready", "s": 24, "c": "red" },
          { "k": "fig", "x": 150, "y": 400, "pose": "sad", "face": "sad", "label": "Ramirez", "say": "Still not ready?" },
          { "k": "fig", "x": 400, "y": 400, "pose": "shrug", "hat": "cap", "label": "Dealer", "say": "Come back later." } ] },
      { "say": "The buyers won. They had rejected the van, as section 2-601 allows for any defect. The dealer had a right to cure, but never managed it. So the buyers could cancel the contract and recover the value of their trade-in.",
        "add": [
          { "k": "stamp", "x": 520, "y": 250, "t": "BUYERS CANCEL", "s": 22, "c": "green" },
          { "k": "text", "x": 522, "y": 318, "t": "Ramirez v. Autosport", "s": 20, "c": "blue" },
          { "k": "text", "x": 522, "y": 350, "t": "Rejected + no cure = cancel", "s": 20, "w": 200 } ] }
    ] },
    { "title": "The lead-lined tanks", "beats": [
      { "say": "Plateq and Machlett Laboratories. A buyer ordered two custom lead-lined steel tanks for testing x-ray tubes. The buyer's engineer inspected them, pointed out a few fixes, and said a truck would come to collect them. The seller promised the fixes by the next day. Instead, the buyer cancelled everything.",
        "add": [
          { "k": "box", "x": 70, "y": 125, "w": 48, "h": 78 },
          { "k": "box", "x": 128, "y": 125, "w": 48, "h": 78 },
          { "k": "text", "x": 200, "y": 160, "t": "2 custom lead-lined tanks", "s": 26 },
          { "k": "text", "x": 200, "y": 196, "t": "Next day: \"total cancellation\"", "s": 24, "c": "red" },
          { "k": "fig", "x": 150, "y": 400, "pose": "point", "hat": "hardhat", "label": "Buyer's engineer", "say": "Truck comes tomorrow." },
          { "k": "fig", "x": 400, "y": 400, "pose": "up", "label": "Seller", "say": "Fixed by tomorrow!" } ] },
      { "say": "The seller won. The buyer had accepted: it signalled it would take the tanks, and it never made a proper rejection that named the defects. It had no grounds to revoke either. Custom tanks cannot be resold, so the buyer owed the full price.",
        "add": [
          { "k": "stamp", "x": 520, "y": 250, "t": "ACCEPTED: PAY UP", "s": 22 },
          { "k": "text", "x": 522, "y": 318, "t": "Plateq v. Machlett Labs", "s": 20, "c": "blue" },
          { "k": "text", "x": 522, "y": 350, "t": "No proper rejection = acceptance", "s": 20, "w": 200 } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Do not bring substantial performance into a single delivery of goods. Before acceptance, the test is perfect tender. But do not stop there either. Always ask about C I A: could the seller cure, is it an instalment contract, and has the buyer already accepted?",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "text", "x": 60, "y": 185, "t": "Goods, one delivery = PERFECT tender", "s": 26 },
          { "k": "text", "x": 60, "y": 220, "t": "...then check C·I·A", "s": 26, "c": "blue" },
          { "k": "fig", "x": 500, "y": 400, "pose": "up", "label": "Seller", "say": "Close enough?" },
          { "k": "cross", "x": 590, "y": 300, "r": 44 } ] },
      { "clear": true,
        "say": "Let's recap. Section 2-601: goods must conform in every respect, or the buyer may reject all, accept all, or split. The softeners are C I A. Cure under section 2-508. Instalments under section 2-612. And acceptance, which can be revoked only for substantial impairment. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§2-601: any defect, buyer may reject", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§2-508: seller's right to cure", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "§2-612: instalments need real harm", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "§§2-606, 2-607: accept = pay, and prove", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "§2-608: revoke only if substantial", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Perfect Tender", "k": "ucc",
      "q": "A restaurant orders 50 white tablecloths, to be delivered by June 1. They arrive on May 20, and 10 of them are cream. The restaurant rejects the cream ones. The seller immediately says it will deliver 10 white ones by May 28. May the restaurant cancel the contract now?",
      "o": ["Yes, because the perfect tender rule lets a buyer cancel for any defect.", "Yes, because the seller has had its one chance to perform.", "No, because the time for performance has not expired and the seller has given notice that it will cure.", "No, because a colour difference can never be a non-conformity."],
      "a": 2,
      "w": "Section 2-508 gives the seller a right to cure when the contract time has not yet run out, as long as it tells the buyer promptly. The rejection was fine under section 2-601, but the seller gets until June 1 to make a conforming delivery." },
    { "t": "Perfect Tender", "k": "both",
      "q": "A builder finishes a house with one trivial deviation from the plans. Separately, a seller makes a single delivery of goods with one trivial deviation from the order. Which statement is correct?",
      "o": ["The owner must pay the builder, less damages, but the buyer of goods may reject the delivery.", "Both the owner and the buyer may refuse to pay anything.", "Both the owner and the buyer must accept and sue for damages.", "The owner may refuse to pay, but the buyer of goods must accept."],
      "a": 0,
      "w": "The common law uses substantial performance, so the builder gets paid minus damages. For goods, section 2-601 sets the perfect tender rule: a failure to conform in any respect lets the buyer reject, subject to the seller's right to cure." },
    { "t": "Perfect Tender", "k": "ucc",
      "q": "A café has a contract for 12 monthly deliveries of coffee beans. The March delivery is two per cent short, and the supplier offers to send the missing beans the next day. May the café reject the March delivery?",
      "o": ["Yes, because any shortfall breaches the perfect tender rule.", "Yes, but only if it also cancels the whole contract.", "No, because a buyer may never reject part of an instalment contract.", "No, because the shortfall does not substantially impair the instalment's value and it can be cured."],
      "a": 3,
      "w": "This is an instalment contract, so section 2-612 replaces perfect tender. The buyer may reject an instalment only if the defect substantially impairs its value and cannot be cured. A small shortage that the seller will fix tomorrow does neither." },
    { "t": "Perfect Tender", "k": "ucc",
      "q": "A print shop takes delivery of a new press, inspects it, and uses it every day for three months without complaint. It then notices a small scratch on a side panel that has been there since delivery, and tries to send the press back. Can it?",
      "o": ["Yes, because the scratch means the tender was never perfect.", "No, because it accepted the press, and a minor defect does not substantially impair its value.", "Yes, because a buyer can reject at any time before paying in full.", "No, because machines are not goods under the UCC."],
      "a": 1,
      "w": "By using the press after a chance to inspect, the shop accepted it under section 2-606, and acceptance ends the right to reject. Revocation under section 2-608 needs a defect that substantially impairs the value of the goods. A scratch does not." },
    { "t": "Perfect Tender", "k": "ucc",
      "q": "After a buyer has accepted goods, who bears the burden of proving that the goods did not conform to the contract?",
      "o": ["The seller, who must prove the goods were perfect.", "Neither party; the court presumes a breach.", "The buyer, who must establish the breach.", "The carrier that delivered the goods."],
      "a": 2,
      "w": "Under section 2-607, acceptance has consequences. The buyer must pay at the contract rate, must notify the seller of any breach within a reasonable time, and carries the burden of proving the defect. Inspect and object, or you accept." }
  ]
};

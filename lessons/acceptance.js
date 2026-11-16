window.LESSONS = window.LESSONS || {};
window.LESSONS["acceptance"] = {
  "id": "acceptance",
  "title": "Acceptance",
  "track": "cl",
  "sections": ["§36", "§59", "§63", "§43", "§§25, 87", "§45", "§69"],
  "scenes": [
    { "title": "Acceptance", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: acceptance.",
        "add": [
          { "k": "fig", "x": 200, "y": 400, "pose": "hold", "label": "Offeror", "say": "Here's my offer." },
          { "k": "fig", "x": 470, "y": 400, "pose": "up", "label": "Offeree", "say": "I accept!" } ] },
      { "say": "An offer hands the other person a power. Say yes, and a contract snaps into place. But that power does not last forever. So, two questions today. Is the offer still alive? And was the yes a proper yes?",
        "add": [
          { "k": "text", "x": 60, "y": 145, "t": "1. Is the offer still alive?", "s": 28 },
          { "k": "text", "x": 60, "y": 187, "t": "2. Was the yes a proper yes?", "s": 28 } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Section 36 lists four ways an offer dies. Your acronym is DIRT. D and I: death or incapacity. R: rejection, which includes a counteroffer. R again: revocation by the offeror. T: time running out. When any of these happens, the offer is in the dirt.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§36", "name": "How an offer dies", "rule": "Death or incapacity, rejection, revocation, lapse of time.", "hook": "DIRT: Death, Incapacity, Rejection, Revocation, Time." } ] },
      { "say": "Two quick notes. Time means the deadline in the offer, or a reasonable time if it names none. And death or incapacity ends the offer automatically, even if the other side has not heard the news.",
        "add": [
          { "k": "text", "x": 60, "y": 310, "t": "T: the stated deadline, or a reasonable time", "s": 25 },
          { "k": "text", "x": 60, "y": 360, "t": "D·I: ends the offer automatically", "s": 25 },
          { "k": "text", "x": 570, "y": 425, "t": "DIRT", "s": 54, "c": "blue" } ] },
      { "clear": true,
        "say": "Section 59, the mirror image rule. An acceptance must match the offer exactly. A reply that insists on new or different terms is not an acceptance. It is a counteroffer, and a counteroffer rejects the original. Five-nine: change a line, and you decline.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§59", "name": "Mirror image rule", "rule": "A \"yes\" that changes the terms is a counteroffer.", "hook": "Five-nine: change a line, and you decline." } ] },
      { "say": "Section 63, the mailbox rule. An acceptance takes effect the moment it is sent, not when it arrives. Picture a mailbox with the number sixty-three painted on it. The letter drops in, and the deal is done.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§63", "name": "Mailbox rule", "rule": "Acceptance works on dispatch, even if it never arrives.", "hook": "Mailbox number 63: the letter drops in, the deal is done." } ] }
    ] },
    { "title": "The counteroffer", "beats": [
      { "say": "Livingstone and Evans. A seller offers land for eighteen hundred dollars. The buyer wires back: send lowest cash price, will give sixteen hundred. The seller replies: cannot reduce price. So the buyer says, fine, I accept eighteen hundred. But the seller has sold to someone else.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Offer: the land for $1,800", "s": 28 },
          { "k": "fig", "x": 150, "y": 400, "pose": "hips", "face": "flat", "hat": "tophat", "label": "Evans", "say": "Cannot reduce price." },
          { "k": "fig", "x": 400, "y": 400, "pose": "up", "label": "Livingstone", "say": "$1,600? OK, $1,800!" } ] },
      { "say": "The sixteen hundred was a counteroffer, and it killed the original offer. But the words, cannot reduce price, told the buyer that eighteen hundred was still on the table. That renewed the offer, so his acceptance made a contract.",
        "add": [
          { "k": "stamp", "x": 520, "y": 200, "t": "OFFER REVIVED", "s": 24, "c": "green" },
          { "k": "text", "x": 522, "y": 264, "t": "Livingstone v. Evans", "s": 22, "c": "blue" },
          { "k": "text", "x": 522, "y": 302, "t": "A counteroffer rejects, unless the offeror renews.", "s": 21, "w": 210 } ] }
    ] },
    { "title": "Too late, I've sold it", "beats": [
      { "say": "Dickinson and Dodds. On Wednesday, Dodds offers to sell his property for eight hundred pounds, and writes that the offer stays open until Friday morning. On Thursday, Dickinson hears from someone else that Dodds is selling to another buyer.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Offer: £800, open till Friday 9 a.m.", "s": 27 },
          { "k": "fig", "x": 150, "y": 400, "pose": "hold", "hat": "tophat", "label": "Dodds", "say": "Open till Friday." },
          { "k": "fig", "x": 400, "y": 400, "pose": "up", "face": "shock", "label": "Dickinson", "say": "He's selling to Allan?" } ] },
      { "say": "Dickinson rushed to accept, but he lost. Nothing was paid to keep the offer open, so Dodds could revoke at any time before acceptance. And once Dickinson knew about the other sale, the offer was gone. Dodds never had to tell him directly.",
        "add": [
          { "k": "stamp", "x": 520, "y": 200, "t": "REVOKED", "s": 28, "c": "red" },
          { "k": "text", "x": 522, "y": 264, "t": "Dickinson v. Dodds", "s": 23, "c": "blue" },
          { "k": "text", "x": 522, "y": 302, "t": "A free promise to hold an offer open does not bind.", "s": 21, "w": 210 } ] },
      { "clear": true,
        "say": "Two rules come out of that. First, section 43. An offer is revoked indirectly when the offeror does something clearly inconsistent with it, and the offeree gets reliable word of it. Four-three: a little bird told me.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§43", "name": "Indirect revocation", "rule": "Inconsistent act + reliable news of it = offer revoked.", "hook": "Four-three: a little bird told me." } ] },
      { "say": "Second, sections 25 and 87, the option contract. If the offeree gives consideration for a promise to hold the offer open, that promise binds. Buy the time, and the offer can't die. Sales of goods have their own firm-offer rule, which lives on the UCC track.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§§25, 87", "name": "Option contract", "rule": "A binding promise to hold the offer open, usually paid.", "hook": "Buy the time, and the offer can't die." } ] }
    ] },
    { "title": "The mortgage at the door", "beats": [
      { "say": "Petterson and Pattberg. A lender offers a discount if the borrower pays off his mortgage early. The borrower turns up at the lender's door with the cash. Before he can hand it over, the lender says: I have sold the mortgage.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Pay early = a discount", "s": 28 },
          { "k": "fig", "x": 150, "y": 400, "pose": "hold", "label": "Petterson", "say": "I've come to pay!" },
          { "k": "icon", "name": "door", "x": 290, "y": 340 },
          { "k": "fig", "x": 430, "y": 400, "pose": "hips", "face": "flat", "hat": "tophat", "label": "Pattberg", "say": "Offer withdrawn." } ] },
      { "say": "The old rule was brutal. An offer for a unilateral contract, one accepted by doing rather than promising, could be revoked right up until the act was finished. The lender revoked before payment, so the borrower lost.",
        "add": [
          { "k": "stamp", "x": 545, "y": 200, "t": "NO CONTRACT", "s": 23, "c": "red" },
          { "k": "text", "x": 547, "y": 264, "t": "Petterson v. Pattberg", "s": 19, "c": "blue" },
          { "k": "text", "x": 547, "y": 302, "t": "Old rule: revoke any time before the act is done.", "s": 20, "w": 190 } ] },
      { "clear": true,
        "say": "The modern rule is section 45. Once the offeree starts performing, or tenders performance, an option contract arises, and the offeror must let them finish. Four-five: once you start, the offer stays alive. Merely getting ready, though, is not starting.",
        "add": [
          { "k": "card", "x": 60, "y": 114, "num": "§45", "name": "Unilateral offers", "rule": "Begin or tender performance, and the offer is locked.", "hook": "Four-five: once you start, the offer stays alive." },
          { "k": "check", "x": 62, "y": 290 }, { "k": "text", "x": 110, "y": 307, "t": "You must still finish to earn the price.", "s": 25 },
          { "k": "cross", "x": 64, "y": 346, "r": 22 }, { "k": "text", "x": 110, "y": 363, "t": "Mere preparation is not enough.", "s": 25, "c": "red" } ] }
    ] },
    { "title": "Come and care for me", "beats": [
      { "say": "Brackenbury and Hodgkin. A widow in Maine writes to her daughter and son-in-law in Missouri. Move here, look after me for the rest of my life, and the house is yours when I die. They pack up, move in, and start caring for her.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Care for me for life = the house is yours", "s": 25 },
          { "k": "fig", "x": 150, "y": 400, "pose": "hold", "hat": "bun", "label": "Mother", "say": "Come care for me." },
          { "k": "icon", "name": "house", "x": 275, "y": 335, "s": 0.8 },
          { "k": "fig", "x": 400, "y": 400, "pose": "wave", "hat": "hair", "label": "Daughter", "say": "We're here!" } ] },
      { "say": "Within weeks they quarrelled, and the mother tried to throw them out. Too late. Her letter was an offer to be accepted by doing, and they had begun doing it. The contract was binding, and she could not take the house back.",
        "add": [
          { "k": "stamp", "x": 520, "y": 200, "t": "BINDING", "s": 28, "c": "green" },
          { "k": "text", "x": 522, "y": 264, "t": "Brackenbury v. Hodgkin", "s": 20, "c": "blue" },
          { "k": "text", "x": 522, "y": 302, "t": "Accepted by performing.", "s": 21, "w": 210 } ] }
    ] },
    { "title": "Silence is not a yes", "beats": [
      { "say": "Can you accept by saying nothing? Normally, no. I cannot write to you saying, if I do not hear back by Friday you have bought my car, and trap you that way. A contract needs some outward sign of agreement.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "\"No reply by Friday = you bought it.\"", "s": 26 },
          { "k": "fig", "x": 150, "y": 400, "pose": "point", "face": "smirk", "label": "Offeror", "say": "No reply = sold!" },
          { "k": "fig", "x": 400, "y": 400, "pose": "shrug", "face": "flat", "label": "Offeree", "say": "..." },
          { "k": "stamp", "x": 520, "y": 215, "t": "NO CONTRACT", "s": 25, "c": "red" } ] },
      { "clear": true,
        "say": "Section 69 has three exceptions. One: you take the benefit of services, knowing payment is expected, when you could have said no. Two: the offeror invites silence, and you stay silent meaning to accept. Three: past dealings make it reasonable to expect you to speak up.",
        "add": [
          { "k": "card", "x": 60, "y": 114, "num": "§69", "name": "Silence as acceptance", "rule": "Silence is not acceptance, with three narrow exceptions.", "hook": "No reply is no deal. Usually." },
          { "k": "check", "x": 62, "y": 285 }, { "k": "text", "x": 110, "y": 302, "t": "You knowingly take the benefit of services", "s": 24 },
          { "k": "check", "x": 62, "y": 335 }, { "k": "text", "x": 110, "y": 352, "t": "Silence is invited, and you mean yes", "s": 24 },
          { "k": "check", "x": 62, "y": 385 }, { "k": "text", "x": 110, "y": 402, "t": "Past dealings: you would normally object", "s": 24 } ] }
    ] },
    { "title": "The mailbox rule", "beats": [
      { "say": "Back to the mailbox. A seller posts an offer. The buyer posts her acceptance on Monday. On Tuesday, the seller changes his mind. Too bad. The contract was formed on Monday, when the letter left the buyer's hands, even if it then gets lost in the post.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Acceptance: effective when SENT", "s": 28, "c": "green" },
          { "k": "fig", "x": 150, "y": 400, "pose": "hold", "hat": "hair", "label": "Buyer", "say": "Posted Monday!" },
          { "k": "icon", "name": "mailbox", "x": 290, "y": 340 },
          { "k": "fig", "x": 430, "y": 400, "pose": "up", "face": "shock", "label": "Seller", "say": "I changed my mind!" },
          { "k": "stamp", "x": 545, "y": 215, "t": "DEAL: MONDAY", "s": 23, "c": "green" } ] },
      { "clear": true,
        "say": "Now the fine print. The letter must be properly addressed. The offeror can opt out by saying, I must receive your answer. The rule does not cover option contracts, where acceptance works on receipt. And everything else, like a revocation or a rejection, works only on receipt.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "The fine print", "s": 30 },
          { "k": "check", "x": 62, "y": 185 }, { "k": "text", "x": 110, "y": 202, "t": "Properly addressed and sent", "s": 26 },
          { "k": "cross", "x": 64, "y": 242, "r": 22 }, { "k": "text", "x": 110, "y": 259, "t": "Offer says: \"must be received\"", "s": 26 },
          { "k": "cross", "x": 64, "y": 299, "r": 22 }, { "k": "text", "x": 110, "y": 316, "t": "Option contracts: on receipt", "s": 26 },
          { "k": "text", "x": 60, "y": 395, "t": "Revocations and rejections: on RECEIPT", "s": 27, "c": "red" } ] }
    ] },
    { "title": "Rock and roll by post", "beats": [
      { "say": "Ellefson and Megadeth. A bass player negotiates a buyout with his old band, entirely by fax and email. He signs the deal and faxes it over. The band's side signs too, and posts the finished copy by ordinary mail. Then the bass player tries to back out.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Negotiated by fax and email...", "s": 28 },
          { "k": "fig", "x": 150, "y": 400, "pose": "hips", "face": "flat", "hat": "hair", "label": "Ellefson", "say": "By mail? Not fair!" },
          { "k": "icon", "name": "letter", "x": 275, "y": 335, "s": 0.8 },
          { "k": "fig", "x": 400, "y": 400, "pose": "hold", "hat": "cap", "label": "The band", "say": "Signed and posted." } ] },
      { "say": "He argued that snail mail was an unreasonable way to accept. The court disagreed. Unless the offer demands a particular method, any reasonable medium will do, and ordinary mail is reasonable. The acceptance worked when it was posted, before he pulled out.",
        "add": [
          { "k": "stamp", "x": 520, "y": 200, "t": "CONTRACT", "s": 30, "c": "green" },
          { "k": "text", "x": 522, "y": 264, "t": "Ellefson v. Megadeth", "s": 22, "c": "blue" },
          { "k": "text", "x": 522, "y": 302, "t": "Any reasonable medium, unless the offer names one.", "s": 21, "w": 210 } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Only acceptances get the mailbox rule. A revocation counts only when it arrives. So when a revocation and an acceptance cross in the post, check the dates. An acceptance sent before the revocation lands makes a contract.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "icon", "name": "mailbox", "x": 130, "y": 300, "s": 1.5 },
          { "k": "text", "x": 240, "y": 250, "t": "Acceptance: when SENT", "s": 30, "c": "green" },
          { "k": "text", "x": 240, "y": 310, "t": "Revocation: when RECEIVED", "s": 30, "c": "red" },
          { "k": "text", "x": 240, "y": 370, "t": "Letters crossing? Check the dates.", "s": 24 } ] },
      { "clear": true,
        "say": "Let's recap. Offers die by DIRT. A yes must mirror the offer, or it is a counteroffer. Offers can be revoked, unless there is an option or performance has begun. Silence is not a yes. And acceptance works when sent, by any reasonable medium. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§36: offers die by DIRT", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§59: a yes must mirror the offer", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "Revocable, unless option (§87) or begun (§45)", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "§69: silence is not a yes", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "§63: acceptance works when SENT", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Acceptance", "k": "cl",
      "q": "By letter, Olga offers to sell her boat to Ravi. On Tuesday Olga mails a revocation. On Wednesday Ravi, knowing nothing of this, mails a properly addressed acceptance. On Thursday Ravi receives the revocation. Is there a contract?",
      "o": ["No, because Olga revoked first.", "No, because Olga had not yet received the acceptance.", "Yes, because the acceptance took effect when mailed, before the revocation was received.", "Yes, because an offer made by letter can never be revoked."],
      "a": 2,
      "w": "Under section 63 an acceptance works on dispatch. A revocation works only on receipt. Ravi posted his acceptance on Wednesday, before the revocation reached him on Thursday, so a contract was formed on Wednesday." },
    { "t": "Acceptance", "k": "cl",
      "q": "A painter offers to paint Lena's house for $4,000. Lena replies, \"I'll pay $3,500.\" The painter says, \"No thanks,\" and nothing more. Lena then says, \"Fine, I accept your $4,000 offer.\" Is there a contract?",
      "o": ["No, because Lena's counteroffer ended her power to accept and the painter did not renew the offer.", "Yes, because Lena finally agreed to the painter's price.", "Yes, because the original offer was never withdrawn.", "No, because painting contracts must be in writing."],
      "a": 0,
      "w": "Under sections 36 and 59 a counteroffer is a rejection, and it ends the power to accept. In Livingstone and Evans the seller's reply renewed the offer. Here the painter just said no, so there was nothing left to accept." },
    { "t": "Acceptance", "k": "cl",
      "q": "An owner says, \"I will pay $1,000 to anyone who paints my whole fence by Friday. I want the job done, not a promise.\" A painter starts on Monday. With half the fence painted, the owner says, \"I revoke.\" What is the result under Restatement section 45?",
      "o": ["The revocation works, because the painter had not finished.", "The owner must pay $1,000 at once.", "The revocation works, because the painter never promised anything.", "The owner cannot revoke, and must give the painter the chance to finish and earn the $1,000."],
      "a": 3,
      "w": "Section 45 says that once the offeree begins the requested performance, an option contract arises. The offeror cannot revoke, but only owes the price if the job is completed. Four-five: once you start, the offer stays alive." },
    { "t": "Acceptance", "k": "cl",
      "q": "Which statement best describes the general rule on silence as acceptance?",
      "o": ["Silence is acceptance whenever the offeror says it will be.", "Silence is not acceptance, except in limited cases such as knowingly taking the benefit of offered services or a history of prior dealings.", "Silence is acceptance if the offer was made in writing.", "Silence is acceptance after thirty days."],
      "a": 1,
      "w": "Section 69 says silence normally means nothing. An offeror cannot force a contract on you by announcing that no reply means yes. The exceptions are narrow: taking the benefit of services, invited silence you intend as a yes, and prior dealings." },
    { "t": "Acceptance", "k": "cl",
      "q": "On Monday, a homeowner offers to sell her land to a neighbour and adds, \"I'll keep this open for you until Saturday.\" The neighbour gives nothing for that assurance. On Wednesday, before any acceptance, she tells the neighbour the offer is withdrawn. Is the revocation effective at common law?",
      "o": ["No, because she promised to keep the offer open.", "No, because offers to sell land cannot be revoked.", "Yes, because without consideration the promise to keep the offer open is not a binding option.", "Yes, but only if she has already sold the land to someone else."],
      "a": 2,
      "w": "This is Dickinson and Dodds. An offer can be revoked any time before acceptance, even if the offeror said it would stay open. Only an option contract, usually bought with consideration under sections 25 and 87, takes away the power to revoke." }
  ]
};

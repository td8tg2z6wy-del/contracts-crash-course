window.LESSONS = window.LESSONS || {};
window.LESSONS["offer"] = {
  "id": "offer",
  "title": "The Offer",
  "track": "cl",
  "sections": ["§24", "§33", "§29", "§§18, 21"],
  "scenes": [
    { "title": "The Offer", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: the offer.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Is there a deal?", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "point", "label": "Offeror", "say": "Want to trade?" },
          { "k": "fig", "x": 470, "y": 400, "pose": "shrug", "face": "flat", "label": "Offeree", "say": "Hmm..." } ] },
      { "say": "Every contract starts with one person inviting another into a bargain. The person making the offer is the offeror. The person who can say yes is the offeree. Simple. Now, the rulebook.",
        "add": [
          { "k": "arrow", "x1": 250, "y1": 335, "x2": 420, "y2": 335, "c": "red" },
          { "k": "text", "x": 305, "y": 322, "t": "offer", "s": 26, "c": "red" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Three Restatement sections to know. First, section 24. An offer is a show of willingness to enter a bargain, made so that the other person knows their yes will close the deal. Memory hook: twenty-four, like a shop that is open twenty-four hours. The sign in the window says, come in, I am ready to deal.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§24", "name": "What an offer is", "rule": "A show of willingness to deal. Their YES closes it.", "hook": "A shop open 24 hours: come in, I'm ready to deal." } ] },
      { "say": "Second, section 33. Certainty. The terms must be clear enough for a court to tell whether the deal was broken, and what to do about it. Rhyme time. Thirty-three: can the court see what the deal should be?",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§33", "name": "Certainty", "rule": "Terms must be clear enough to spot a breach and fix it.", "hook": "Thirty-three: can the court SEE what the deal should be?" } ] },
      { "clear": true,
        "say": "Third, section 29. The offeror is master of the offer. They choose who can accept, and how. Two-nine: this offer's mine.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§29", "name": "Master of the offer", "rule": "The offeror picks WHO can accept, and HOW.", "hook": "Two-nine: this offer's mine." } ] },
      { "say": "And from sections 18 and 21, the objective theory. The law looks at what you show, not at what you secretly think. Outside counts. Inside doesn't.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§§18, 21", "name": "Objective theory", "rule": "What you SHOW counts. Secret thoughts do not.", "hook": "Outside counts. Inside doesn't." } ] }
    ] },
    { "title": "Show, don't think", "beats": [
      { "say": "Here is the objective theory in action. Two friends are at a restaurant. One writes on the back of a bill, I sell you my farm for fifty thousand dollars, and signs it. Secretly, he thinks the whole thing is a joke.",
        "add": [
          { "k": "fig", "x": 150, "y": 400, "pose": "hold", "face": "smirk", "label": "Seller", "say": "Sold! (just kidding)" },
          { "k": "icon", "name": "doc", "x": 270, "y": 320 },
          { "k": "fig", "x": 400, "y": 400, "pose": "up", "label": "Buyer", "say": "Deal!" } ] },
      { "say": "The buyer takes it seriously, and a reasonable person would too. The court in Lucy and Zehmer said: that is a contract. Your private joke does not count if nobody else is in on it.",
        "add": [
          { "k": "stamp", "x": 520, "y": 200, "t": "CONTRACT", "s": 30 },
          { "k": "text", "x": 522, "y": 262, "t": "Lucy v. Zehmer", "s": 24, "c": "blue" },
          { "k": "text", "x": 522, "y": 300, "t": "A secret joke is no defence.", "s": 22, "w": 210 } ] }
    ] },
    { "title": "Certain enough?", "beats": [
      { "say": "Now certainty. A deli has a lease that lets it renew, at a rent to be agreed upon. Later, the landlord and the deli cannot agree on a number.",
        "add": [
          { "k": "icon", "name": "store", "x": 110, "y": 170, "label": "Deli" },
          { "k": "text", "x": 190, "y": 180, "t": "Renewal rent: \"to be agreed\"", "s": 28 },
          { "k": "fig", "x": 500, "y": 400, "pose": "up", "face": "sad", "label": "Tenant", "say": "$545!" },
          { "k": "fig", "x": 660, "y": 400, "pose": "hips", "face": "flat", "hat": "tophat", "label": "Landlord", "say": "$900." } ] },
      { "say": "The court refused to pick a number for them. An agreement to agree on a key term, like price, is too uncertain to enforce. That is Joseph Martin Delicatessen and Schumacher.",
        "add": [
          { "k": "stamp", "x": 60, "y": 320, "t": "AGREE TO AGREE = NO DEAL", "s": 25 },
          { "k": "text", "x": 62, "y": 380, "t": "Joseph Martin Deli v. Schumacher", "s": 21, "c": "blue" } ] },
      { "clear": true,
        "say": "Same idea with a letter of intent. If it says, subject to a final agreement, the parties are still negotiating. That was Empro and Ball-Co. Words like subject to are escape hatches.",
        "add": [
          { "k": "icon", "name": "doc", "x": 130, "y": 230, "s": 1.6, "label": "Letter of Intent" },
          { "k": "text", "x": 240, "y": 200, "t": "\"subject to a final agreement\"", "s": 28, "c": "red" },
          { "k": "text", "x": 240, "y": 252, "t": "= still negotiating", "s": 32 },
          { "k": "text", "x": 240, "y": 300, "t": "Empro v. Ball-Co", "s": 22, "c": "blue" } ] }
    ] },
    { "title": "Is an ad an offer?", "beats": [
      { "say": "Next. Is an advertisement an offer? Usually, no. An ad is an invitation to deal. If every ad were an offer, a shop with ten coats could be bound to a thousand buyers.",
        "add": [
          { "k": "icon", "name": "billboard", "x": 110, "y": 180, "s": 1.3, "label": "SALE!" },
          { "k": "arrow", "x1": 170, "y1": 175, "x2": 245, "y2": 175 },
          { "k": "text", "x": 262, "y": 172, "t": "= invitation to deal", "s": 32 },
          { "k": "text", "x": 262, "y": 214, "t": "usually NOT an offer", "s": 26, "c": "red" } ] },
      { "say": "But there is an exception, and here is your acronym. C, D, N. Clear. Definite. Nothing left to negotiate. C D N. Remember it like a country code.",
        "add": [
          { "k": "check", "x": 62, "y": 285 }, { "k": "text", "x": 110, "y": 302, "t": "Clear", "s": 30 },
          { "k": "check", "x": 62, "y": 330 }, { "k": "text", "x": 110, "y": 347, "t": "Definite", "s": 30 },
          { "k": "check", "x": 62, "y": 375 }, { "k": "text", "x": 110, "y": 392, "t": "Nothing left to negotiate", "s": 30 },
          { "k": "text", "x": 540, "y": 350, "t": "C·D·N", "s": 56, "c": "blue" },
          { "k": "ul", "x": 540, "y": 364, "w": 170, "c": "blue" } ] },
      { "clear": true,
        "say": "The classic case is Lefkowitz. A store advertised one fur stole, worth one hundred and thirty-nine dollars, for one dollar. First come, first served. Mister Lefkowitz arrived first, dollar in hand. The store refused, saying it only sold to women.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "1 fur stole · $1 · first come, first served", "s": 27 },
          { "k": "icon", "name": "store", "x": 610, "y": 300, "s": 1.7, "label": "Surplus Store" },
          { "k": "fig", "x": 420, "y": 400, "pose": "hold", "label": "Lefkowitz", "say": "I accept!" },
          { "k": "icon", "name": "money", "x": 462, "y": 332, "s": 0.5, "c": "green" } ] },
      { "say": "The court said the ad was an offer. It was clear, definite, and left nothing to negotiate. And the store could not invent a new house rule after he had accepted.",
        "add": [
          { "k": "stamp", "x": 60, "y": 210, "t": "OFFER + ACCEPTANCE = CONTRACT", "s": 24, "c": "green" },
          { "k": "text", "x": 62, "y": 290, "t": "No new house rules after acceptance.", "s": 23, "w": 260 } ] }
    ] },
    { "title": "The jet and the smoke ball", "beats": [
      { "say": "Now the famous one. A soft drink commercial showed prizes you could buy with points. At the end, a teenager lands a fighter jet at school. The caption reads, seven million points.",
        "add": [
          { "k": "icon", "name": "jet", "x": 190, "y": 200, "s": 2.2 },
          { "k": "text", "x": 90, "y": 300, "t": "7,000,000 points", "s": 32, "c": "red" },
          { "k": "fig", "x": 520, "y": 400, "pose": "up", "hat": "cap", "label": "Leonard", "say": "I'll take the jet!" } ] },
      { "say": "Leonard sent a cheque and demanded the jet. He lost. In Leonard and Pepsico, the court said no reasonable person would think the ad was serious. It was a joke, and the real terms were in the catalogue, which had no jet.",
        "add": [
          { "k": "cross", "x": 155, "y": 165, "r": 70 },
          { "k": "text", "x": 90, "y": 352, "t": "Obvious joke = no offer", "s": 28 },
          { "k": "text", "x": 90, "y": 390, "t": "Leonard v. Pepsico", "s": 22, "c": "blue" } ] },
      { "clear": true,
        "say": "Compare the smoke ball. A company promised one hundred pounds to anyone who used its smoke ball and still caught the flu. It even said it had put a thousand pounds in the bank to show it was serious.",
        "add": [
          { "k": "circle", "x": 120, "y": 200, "r": 36 },
          { "k": "text", "x": 120, "y": 268, "t": "Smoke Ball", "s": 21, "anchor": "middle" },
          { "k": "text", "x": 200, "y": 170, "t": "£100 if you still catch the flu", "s": 29 },
          { "k": "icon", "name": "money", "x": 250, "y": 235, "c": "green", "label": "£1,000 in the bank" },
          { "k": "fig", "x": 600, "y": 400, "face": "sad", "hat": "hair", "pose": "sad", "label": "Mrs Carlill", "say": "Achoo!" } ] },
      { "say": "Missus Carlill used it, caught the flu, and won. In Carlill and the Carbolic Smoke Ball Company, the ad was an offer to the whole world, and she accepted by doing what it asked. The bank deposit showed they meant it.",
        "add": [
          { "k": "stamp", "x": 150, "y": 360, "t": "OFFER TO THE WORLD", "s": 28, "c": "green" },
          { "k": "text", "x": 154, "y": 412, "t": "accepted by performing", "s": 24 } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. The offeror is master of the offer. If the offer says, bring five hundred dollars in cash, and you turn up with a cheque, you have not accepted. Follow the instructions exactly.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "fig", "x": 170, "y": 400, "pose": "hips", "hat": "crown", "label": "Offeror", "say": "Cash only." },
          { "k": "fig", "x": 430, "y": 400, "pose": "hold", "face": "shock", "label": "Offeree", "say": "Cheque?" },
          { "k": "cross", "x": 530, "y": 290, "r": 46 } ] },
      { "clear": true,
        "say": "Let's recap. An offer shows willingness to deal, so that a yes closes it. It must be certain. What you show counts, not what you think. Ads are invitations, unless they are clear, definite, and leave nothing to negotiate. And the offeror is master of the offer. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§24: willingness to deal; YES closes it", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§33: certain enough for a court", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "§§18, 21: what you SHOW counts", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "Ads = invitations, unless C·D·N", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "§29: offeror is master of the offer", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "The Offer", "k": "cl",
      "q": "Two companies sign a letter of intent for the sale of a factory. It says the deal is \"subject to board approval and a definitive purchase agreement.\" No final agreement is ever signed. Is the letter a binding contract of sale?",
      "o": ["Yes, because both companies signed it.", "No, because the \"subject to\" language shows they were still negotiating.", "Yes, because letters of intent are always binding.", "No, because factories cannot be sold by letter."],
      "a": 1,
      "w": "Words like subject to a definitive agreement show the parties did not yet intend to be bound. That was the result in Empro and Ball-Co. A letter of intent can be binding, but not when it is full of escape hatches." },
    { "t": "The Offer", "k": "cl",
      "q": "Mia tells Noah, \"I'll sell you my bike for $200.\" Owen, standing nearby, overhears and says, \"I accept!\" before Noah answers. Has Owen formed a contract with Mia?",
      "o": ["Yes, because he accepted first.", "Yes, because the price was definite.", "No, because the offer was too vague.", "No, because only the person the offer was made to can accept it."],
      "a": 3,
      "w": "Under section 29 the offeror is master of the offer and decides who may accept. Mia invited Noah, not Owen. A bystander who overhears an offer has no power to accept it." },
    { "t": "The Offer", "k": "cl",
      "q": "A dealership's online ad says, \"Used cars from $5,000! Great deals all weekend!\" A customer walks in and demands a car for $5,000. Is the dealership bound?",
      "o": ["No, because the ad is an invitation to deal and names no particular car or terms.", "Yes, because every advertisement is an offer.", "Yes, because the customer came in person.", "No, because car sales must always be negotiated."],
      "a": 0,
      "w": "An ad is an offer only if it is clear, definite, and leaves nothing to negotiate. This one does not say which car, how many, or who gets it. It is an invitation to come in and make an offer." },
    { "t": "The Offer", "k": "cl",
      "q": "A poster reads, \"$100 reward for the safe return of Biscuit, a lost beagle.\" A neighbour who has seen the poster finds Biscuit and brings him home. What best describes the poster?",
      "o": ["An invitation to deal with no legal effect.", "A gift promise that cannot be enforced.", "An offer that could be accepted by performing the requested act.", "A bilateral contract formed when the poster went up."],
      "a": 2,
      "w": "A reward is an offer for a unilateral contract, like the smoke ball advertisement. It asks for an act, not a promise. The neighbour accepted by returning the dog, so the owner owes the reward." },
    { "t": "The Offer", "k": "cl",
      "q": "A landowner says to a friend, \"I'll sell you some of my land at a fair price sometime next year.\" The friend says, \"I accept.\" Why is there most likely no contract?",
      "o": ["Because the friend did not pay a deposit.", "Because the terms are too uncertain for a court to enforce.", "Because offers to sell land are illegal.", "Because the landowner was secretly joking."],
      "a": 1,
      "w": "Section 33 requires terms certain enough for a court to find a breach and give a remedy. Here we do not know which land, what price, or when. Thirty-three: the court cannot see what the deal should be." }
  ]
};

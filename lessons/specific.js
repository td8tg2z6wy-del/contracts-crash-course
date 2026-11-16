window.LESSONS = window.LESSONS || {};
window.LESSONS["specific"] = {
  "id": "specific",
  "title": "Specific Performance",
  "track": "cl",
  "sections": ["§359", "§360", "§367"],
  "scenes": [
    { "title": "Specific Performance", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: specific performance.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Money, or the real thing?", "s": 32 },
          { "k": "fig", "x": 150, "y": 400, "pose": "point", "face": "sad", "label": "Injured party", "say": "Do what you promised!" },
          { "k": "fig", "x": 370, "y": 400, "pose": "hold", "face": "smirk", "label": "Breacher", "say": "Take the cash." },
          { "k": "icon", "name": "money", "x": 420, "y": 332, "s": 0.5, "c": "green" } ] },
      { "say": "Usually, a breach is fixed with money. Specific performance is a court order to actually do the thing that was promised. It is the exception, not the rule. So today's question is: when is money not good enough?",
        "add": [
          { "k": "icon", "name": "gavel", "x": 610, "y": 300, "s": 1.5, "label": "\"Perform!\"" },
          { "k": "text", "x": 530, "y": 390, "t": "the exception", "s": 26, "c": "red" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Section 359. A court will not order specific performance if damages would be adequate to protect the injured party. Money goes first. Rhyme: three-five-nine, money is first in line.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§359", "name": "Money first", "rule": "No specific performance if damages would be adequate.", "hook": "Three-five-nine: money is first in line." } ] },
      { "say": "Section 360 tells you how to judge whether money is adequate. Is the loss hard to value? Is a substitute hard to find? Would damages be hard to collect? Picture the number. Turn a full three hundred and sixty degrees, and look at money from every side.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§360", "name": "Is money adequate?", "rule": "Hard to value? Hard to replace? Hard to collect?", "hook": "Turn a full 360 degrees: look at money from every side." } ] },
      { "clear": true,
        "say": "Those three factors spell cup. C: collecting the damages is unlikely. U: the value is uncertain, and hard to prove. P: purchasing a substitute is hard. If the money cup comes up empty, a court may order the real thing.",
        "add": [
          { "k": "text", "x": 60, "y": 165, "t": "C", "s": 44, "c": "blue" },
          { "k": "text", "x": 110, "y": 160, "t": "ollecting damages is unlikely", "s": 28 },
          { "k": "text", "x": 60, "y": 245, "t": "U", "s": 44, "c": "blue" },
          { "k": "text", "x": 110, "y": 240, "t": "ncertain value, hard to prove", "s": 28 },
          { "k": "text", "x": 60, "y": 325, "t": "P", "s": 44, "c": "blue" },
          { "k": "text", "x": 110, "y": 320, "t": "urchasing a substitute is hard", "s": 28 },
          { "k": "text", "x": 60, "y": 410, "t": "Empty money cup? Order the real thing.", "s": 26, "c": "blue" } ] }
    ] },
    { "title": "Land yes, labour no", "beats": [
      { "say": "The classic yes is land. Every parcel is treated as unique. If the seller of a house backs out, the buyer can usually get an order to hand over the keys. No other house is that house.",
        "add": [
          { "k": "icon", "name": "house", "x": 150, "y": 220, "s": 1.8, "label": "Land is unique" },
          { "k": "icon", "name": "key", "x": 330, "y": 220, "s": 1.1 },
          { "k": "stamp", "x": 420, "y": 190, "t": "HAND OVER THE KEYS", "s": 24, "c": "green" } ] },
      { "clear": true,
        "say": "The classic no is personal service. A court will not order a singer to sing. It cannot supervise the performance, and forced labour looks like involuntary servitude, which the Thirteenth Amendment forbids. At most, a court may stop her singing for a rival.",
        "add": [
          { "k": "fig", "x": 170, "y": 400, "pose": "hips", "face": "flat", "hat": "bun", "label": "Singer", "say": "I won't sing." },
          { "k": "text", "x": 330, "y": 160, "t": "Personal service (§367)", "s": 26 },
          { "k": "cross", "x": 332, "y": 190, "r": 22 },
          { "k": "text", "x": 378, "y": 210, "t": "courts cannot supervise it", "s": 22 },
          { "k": "cross", "x": 332, "y": 240, "r": 22 },
          { "k": "text", "x": 378, "y": 260, "t": "involuntary servitude", "s": 22 },
          { "k": "text", "x": 378, "y": 292, "t": "(Thirteenth Amendment)", "s": 20, "c": "red" } ] }
    ] },
    { "title": "The billboard", "beats": [
      { "say": "Now, the billboard. An advertising company leases the outside wall of a building, facing a busy tunnel exit, for a giant sign. A developer buys the building and cancels the lease. The company says: that spot is unique. Give us our wall back.",
        "add": [
          { "k": "icon", "name": "billboard", "x": 590, "y": 220, "s": 1.9, "label": "The wall" },
          { "k": "fig", "x": 150, "y": 400, "pose": "point", "face": "sad", "hat": "cap", "label": "Sign company", "say": "That spot is unique!" },
          { "k": "fig", "x": 370, "y": 400, "pose": "hips", "face": "flat", "hat": "hardhat", "label": "Developer", "say": "Lease cancelled." } ] },
      { "clear": true,
        "say": "Van Wagner Advertising and S and M Enterprises. The cancellation was a breach. But unique is not a magic word. The real question is how uncertain the valuation is. Billboard space is rented all the time, so a court can price it. Money will do.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "Van Wagner Advertising v. S&M Enterprises", "s": 23, "c": "blue" },
          { "k": "text", "x": 60, "y": 205, "t": "\"Unique\" = hard to put a price on", "s": 28 },
          { "k": "text", "x": 60, "y": 255, "t": "Billboard space has a market price.", "s": 24 },
          { "k": "stamp", "x": 60, "y": 290, "t": "DAMAGES, NOT THE WALL", "s": 26, "c": "red" } ] },
      { "say": "And one more reason. Specific performance comes from equity, and equity will not impose hardship out of all proportion. Keeping the sign up would wreck the developer's building plans, to give the company little that money could not.",
        "add": [
          { "k": "icon", "name": "scale", "x": 600, "y": 340, "s": 1.5 },
          { "k": "text", "x": 60, "y": 400, "t": "No disproportionate hardship.", "s": 26 } ] }
    ] },
    { "title": "The sportscaster", "beats": [
      { "say": "Next, a sportscaster. His contract with a network says: before you leave, negotiate with us in good faith, and give us a right of first refusal. While that negotiating period is still running, he quietly strikes a deal with a rival network.",
        "add": [
          { "k": "icon", "name": "tv", "x": 110, "y": 180, "s": 1.2 },
          { "k": "text", "x": 180, "y": 172, "t": "Clause: negotiate in good faith", "s": 26 },
          { "k": "text", "x": 180, "y": 208, "t": "+ right of first refusal", "s": 26 },
          { "k": "fig", "x": 440, "y": 400, "pose": "wave", "face": "smirk", "hat": "hair", "label": "Sportscaster", "say": "Hello, rival network." },
          { "k": "fig", "x": 640, "y": 400, "pose": "sad", "face": "shock", "hat": "tophat", "label": "Old network" } ] },
      { "clear": true,
        "say": "In ABC and Wolf, the court agreed he had breached the good-faith negotiation clause. But his contract had run out, and he had never promised not to compete. So no order sending him back, and no order keeping him off the rival's air.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "ABC v. Wolf", "s": 26, "c": "blue" },
          { "k": "check", "x": 62, "y": 185 },
          { "k": "text", "x": 110, "y": 202, "t": "Breach of the good-faith clause", "s": 26 },
          { "k": "cross", "x": 64, "y": 245, "r": 24 },
          { "k": "text", "x": 110, "y": 265, "t": "No specific performance", "s": 26, "c": "red" },
          { "k": "cross", "x": 64, "y": 305, "r": 24 },
          { "k": "text", "x": 110, "y": 325, "t": "No injunction against the new job", "s": 26, "c": "red" } ] },
      { "say": "Why so reluctant? This is a person's livelihood. While a contract is running, a court may bar a star from performing for a rival. Once it has ended, courts want an express promise not to compete. The network was left to claim money.",
        "add": [
          { "k": "text", "x": 60, "y": 395, "t": "After the term ends: no non-compete, no injunction.", "s": 23 } ] }
    ] },
    { "title": "The merger", "beats": [
      { "say": "Finally, a merger. One big meat company signs an agreement to buy another. Then the buyer gets cold feet, claims the target has suffered a material adverse change, and tries to walk away. The target asks the court to force the deal through.",
        "add": [
          { "k": "icon", "name": "factory", "x": 150, "y": 165, "s": 1.0 },
          { "k": "arrow", "x1": 210, "y1": 165, "x2": 350, "y2": 165 },
          { "k": "icon", "name": "factory", "x": 410, "y": 165, "s": 1.0 },
          { "k": "fig", "x": 150, "y": 400, "pose": "shrug", "face": "flat", "hat": "tophat", "label": "Buyer", "say": "Changed my mind." },
          { "k": "fig", "x": 410, "y": 400, "pose": "point", "face": "sad", "hat": "hair", "label": "Target", "say": "A deal is a deal." } ] },
      { "clear": true,
        "say": "In the IBP shareholders litigation, the court granted specific performance. There had been no material adverse change. A company is one of a kind, pricing the lost merger would be guesswork, and the deal could still be carried out. So: complete the merger.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "In re IBP Shareholders Litigation", "s": 25, "c": "blue" },
          { "k": "check", "x": 62, "y": 180 },
          { "k": "text", "x": 110, "y": 197, "t": "A company is unique", "s": 26 },
          { "k": "check", "x": 62, "y": 235 },
          { "k": "text", "x": 110, "y": 252, "t": "Damages: a staggering guess", "s": 26 },
          { "k": "stamp", "x": 60, "y": 310, "t": "COMPLETE THE MERGER", "s": 28, "c": "green" } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Writing: he broke his promise, so make him perform. Wrong starting point. Start with money, and explain why money fails. And remember, shouting the word unique proves nothing by itself.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "fig", "x": 170, "y": 400, "pose": "up", "face": "smile", "hat": "cap", "label": "Student", "say": "Breach? Make him do it!" },
          { "k": "cross", "x": 300, "y": 290, "r": 46 },
          { "k": "text", "x": 420, "y": 240, "t": "Start with money.", "s": 28, "c": "green" },
          { "k": "text", "x": 420, "y": 285, "t": "Why does it fail?", "s": 28 } ] },
      { "clear": true,
        "say": "Let's recap. Money is first in line. Specific performance only where damages are inadequate: check the cup. Land, yes. Personal services, no. Unique means hard to value. And equity refuses disproportionate hardship. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§359: money is first in line", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§360: C·U·P, is money adequate?", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "Land yes; personal services no", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "\"Unique\" = too uncertain to value", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "No disproportionate hardship", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Specific Performance", "k": "cl",
      "q": "A seller signs a contract to sell her lakeside cottage, then refuses to close because a higher offer has arrived. The buyer asks the court to order the sale to go through. What is the likely result?",
      "o": ["Denied, because the buyer can be paid the difference in price.", "Denied, because courts never order anyone to perform a contract.", "Granted, because land is treated as unique and money is an inadequate substitute.", "Granted, but only if the buyer proves the seller acted in bad faith."],
      "a": 2,
      "w": "Under section 359, specific performance is available where damages are inadequate. Land is the classic example, because every parcel is treated as unique. No sum of money buys that particular cottage." },
    { "t": "Specific Performance", "k": "cl",
      "q": "A celebrated chef signs a two-year contract to cook at a restaurant, then walks out after a month. The restaurant asks for an order compelling the chef to return to the kitchen. Why will the court refuse?",
      "o": ["Because employment contracts are never binding.", "Because courts will not specifically enforce a promise of personal service.", "Because the restaurant suffered no loss.", "Because only land contracts can ever be specifically enforced."],
      "a": 1,
      "w": "Section 367 says a promise to render personal service will not be specifically enforced. A court cannot supervise the cooking, and compelled labour raises involuntary servitude concerns under the Thirteenth Amendment. The restaurant is left to damages." },
    { "t": "Specific Performance", "k": "cl",
      "q": "According to the reasoning in Van Wagner Advertising v. S&M Enterprises, when is the subject of a contract \"unique\" enough to support specific performance?",
      "o": ["Whenever it is physically different from every other item.", "Whenever the injured party says it has sentimental value.", "Whenever it is an interest in real property, including a lease.", "When its value is so uncertain that damages risk under-compensating the injured party."],
      "a": 3,
      "w": "Van Wagner says almost everything is physically unique. What matters is how uncertain the valuation is. Billboard space had a market price, so damages were adequate, and specific performance was refused." },
    { "t": "Specific Performance", "k": "cl",
      "q": "An investor contracts to buy 100 shares of a company whose stock trades every day on a public exchange. The seller refuses to deliver. Will a court order specific performance?",
      "o": ["No, because the investor can buy identical shares on the market and recover any price difference in damages.", "Yes, because every share certificate has its own number.", "Yes, because investment contracts are always specifically enforced.", "No, because contracts for shares are not enforceable at all."],
      "a": 0,
      "w": "Section 360 asks whether a substitute is easy to get and the loss easy to value. Here both are true. Identical shares are on sale every day, so damages are adequate under section 359." },
    { "t": "Specific Performance", "k": "cl",
      "q": "A court finds that a tenant's lease was wrongfully cancelled. Restoring the lease would block the owner's $50 million redevelopment, while the tenant's loss can be valued at about $30,000. What is the court likely to do?",
      "o": ["Order specific performance, because breach always leads to it.", "Refuse any remedy, because the owner's project matters more.", "Award damages, because equity will not impose hardship far out of proportion to the benefit.", "Order specific performance, but only for one year."],
      "a": 2,
      "w": "Specific performance is an equitable remedy. As in Van Wagner, a court will refuse it where it would impose a burden on the breaching party out of all proportion to the benefit. The tenant still gets damages." }
  ]
};

window.LESSONS = window.LESSONS || {};
window.LESSONS["damages"] = {
  "id": "damages",
  "title": "Damages: Three Interests",
  "track": "cl",
  "sections": ["§344", "§347", "§355"],
  "scenes": [
    { "title": "Damages: Three Interests", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: damages, and the three interests.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "What do I get?", "s": 32 },
          { "k": "fig", "x": 150, "y": 400, "pose": "sad", "face": "sad", "label": "Injured party", "say": "They broke the deal!" },
          { "k": "fig", "x": 350, "y": 400, "pose": "shrug", "face": "smirk", "label": "Breacher", "say": "Oops." } ] },
      { "say": "Someone broke a promise. Now what? Contract damages exist to compensate the injured party, not to punish the one who breached. The law pays you back. It does not get even.",
        "add": [
          { "k": "check", "x": 500, "y": 300 },
          { "k": "text", "x": 548, "y": 317, "t": "compensate", "s": 28, "c": "green" },
          { "k": "cross", "x": 502, "y": 352, "r": 24 },
          { "k": "text", "x": 548, "y": 372, "t": "punish", "s": 28, "c": "red" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Section 344 names three interests the law protects. Expectation: the benefit of the bargain. Reliance: your out-of-pocket loss. Restitution: handing back a benefit. Your acronym is E, R, R. To breach is to err.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§344", "name": "Three interests", "rule": "Expectation, reliance, restitution: three ways to pay.", "hook": "To breach is to E·R·R: Expectation, Reliance, Restitution." } ] },
      { "say": "Section 347 is the expectation formula. Take the value you lost, add any other loss the breach caused, then subtract the costs and losses you avoided. Picture three-four-seven as a seven-four-seven jet, short one engine. It must still land you where you were promised.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§347", "name": "Expectation formula", "rule": "Lost value + other loss − costs and losses you avoided.", "hook": "A 747 short one engine: still land me where you promised." } ] },
      { "clear": true,
        "say": "And section 355. No punitive damages for breach of contract, unless the breach is also a tort. One-liner: contract law makes you whole. It does not make them sorry.",
        "add": [
          { "k": "card", "x": 60, "y": 114, "num": "§355", "name": "No punitive damages", "rule": "No punishment for breach, unless it is also a tort.", "hook": "Contracts make you whole. They do not make them sorry." },
          { "k": "icon", "name": "scale", "x": 390, "y": 350, "s": 1.5 } ] }
    ] },
    { "title": "The rightful position", "beats": [
      { "say": "Here is the big idea: the rightful position. Put three points on a line. B is where you stood before the contract. A is where the breach left you. C is where you would be if the promise had been kept.",
        "add": [
          { "k": "line", "x1": 90, "y1": 300, "x2": 710, "y2": 300 },
          { "k": "text", "x": 170, "y": 285, "t": "A", "s": 34, "anchor": "middle", "c": "red" },
          { "k": "text", "x": 170, "y": 362, "t": "after breach", "s": 20, "anchor": "middle" },
          { "k": "text", "x": 410, "y": 285, "t": "B", "s": 34, "anchor": "middle" },
          { "k": "text", "x": 410, "y": 362, "t": "before the deal", "s": 20, "anchor": "middle" },
          { "k": "text", "x": 570, "y": 285, "t": "C", "s": 34, "anchor": "middle", "c": "green" },
          { "k": "text", "x": 570, "y": 362, "t": "if performed", "s": 20, "anchor": "middle" } ] },
      { "say": "Try it. Bea pays three thousand dollars up front for a painting worth five thousand. The seller keeps her money and sells to someone else. Before the deal, Bea was at zero. Now she is three thousand down. With the painting, she would be two thousand up.",
        "add": [
          { "k": "text", "x": 60, "y": 132, "t": "Pays $3,000 up front for a $5,000 painting", "s": 24 },
          { "k": "circle", "x": 170, "y": 300, "r": 7, "c": "red" },
          { "k": "text", "x": 170, "y": 334, "t": "−$3,000", "s": 22, "anchor": "middle", "c": "red" },
          { "k": "circle", "x": 410, "y": 300, "r": 7 },
          { "k": "text", "x": 410, "y": 334, "t": "$0", "s": 22, "anchor": "middle" },
          { "k": "circle", "x": 570, "y": 300, "r": 7, "c": "green" },
          { "k": "text", "x": 570, "y": 334, "t": "+$2,000", "s": 22, "anchor": "middle", "c": "green" } ] },
      { "say": "A tort measure would carry her from A back to B. Three thousand dollars, as if nothing had ever happened. But something did happen. She had a contract, and a contract promises more than nothing.",
        "add": [
          { "k": "arrow", "x1": 170, "y1": 240, "x2": 410, "y2": 240, "c": "red" },
          { "k": "text", "x": 180, "y": 230, "t": "tort: B − A = $3,000", "s": 22, "c": "red" } ] },
      { "say": "Contract expectation carries her from A all the way to C. Three thousand to get back to zero, plus two thousand of lost bargain. Five thousand dollars. Rhyme time: C minus A is what they pay.",
        "add": [
          { "k": "arrow", "x1": 170, "y1": 192, "x2": 570, "y2": 192, "c": "green" },
          { "k": "text", "x": 180, "y": 182, "t": "contract: C − A = $5,000", "s": 24, "c": "green" },
          { "k": "text", "x": 60, "y": 420, "t": "C minus A is what they pay.", "s": 30, "c": "blue" },
          { "k": "ul", "x": 60, "y": 432, "w": 380, "c": "blue" } ] }
    ] },
    { "title": "Three measures, one case", "beats": [
      { "say": "Now all three measures on one set of facts. Rosa hires a star chef for her opening season. She pays him a ten thousand dollar advance, and spends five thousand on advertising. She expects to clear forty thousand dollars after costs. Then the chef walks out.",
        "add": [
          { "k": "fig", "x": 130, "y": 400, "pose": "sad", "face": "shock", "hat": "hair", "label": "Rosa" },
          { "k": "fig", "x": 290, "y": 400, "pose": "wave", "face": "smirk", "hat": "cap", "label": "Chef", "say": "I quit." },
          { "k": "text", "x": 440, "y": 150, "t": "Advance: $10,000", "s": 24 },
          { "k": "text", "x": 440, "y": 190, "t": "Adverts: $5,000", "s": 24 },
          { "k": "text", "x": 440, "y": 230, "t": "Profit: $40,000", "s": 24, "c": "green" } ] },
      { "clear": true,
        "say": "Expectation first. Put Rosa where performance would have put her. She gets back the fifteen thousand she spent, plus the forty thousand profit, if she can prove it. Fifty-five thousand dollars.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "EXPECTATION", "s": 28, "c": "green" },
          { "k": "text", "x": 60, "y": 182, "t": "$15,000 spent + $40,000 profit", "s": 21 },
          { "k": "text", "x": 540, "y": 166, "t": "$55,000", "s": 36, "c": "green" } ] },
      { "say": "But suppose she cannot prove that profit. Then she falls back on reliance: what she spent because of the deal. The advance and the advertising. Fifteen thousand dollars, and she is back where she started.",
        "add": [
          { "k": "text", "x": 60, "y": 260, "t": "RELIANCE", "s": 28 },
          { "k": "text", "x": 60, "y": 292, "t": "what she spent because of the deal", "s": 21 },
          { "k": "text", "x": 540, "y": 276, "t": "$15,000", "s": 36 } ] },
      { "say": "And if even that fails, restitution. The chef is holding ten thousand dollars he did nothing to earn. He hands it back. Notice the usual order. Expectation is the biggest number. Restitution is the smallest.",
        "add": [
          { "k": "text", "x": 60, "y": 370, "t": "RESTITUTION", "s": 28, "c": "blue" },
          { "k": "text", "x": 60, "y": 402, "t": "what the chef is still holding", "s": 21 },
          { "k": "text", "x": 540, "y": 386, "t": "$10,000", "s": 36, "c": "blue" } ] }
    ] },
    { "title": "The hairy hand", "beats": [
      { "say": "The famous case. A boy has a scarred hand. A surgeon guarantees a one hundred percent perfect hand, and grafts on skin from the boy's chest. The hand comes out worse than before. And it grows hair.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Promise: a 100% perfect hand", "s": 28 },
          { "k": "fig", "x": 150, "y": 400, "pose": "point", "face": "smile", "label": "Surgeon", "say": "100% perfect!" },
          { "k": "fig", "x": 330, "y": 400, "pose": "up", "face": "shock", "hat": "cap", "label": "Hawkins", "say": "It's hairy!" } ] },
      { "say": "In Hawkins and McGee, the court treated the guarantee as a warranty. Damages are the value of the perfect hand he was promised, minus the value of the hand he got. That is expectation, C minus A, applied to a hand.",
        "add": [
          { "k": "text", "x": 470, "y": 210, "t": "Hawkins v. McGee", "s": 24, "c": "blue" },
          { "k": "text", "x": 470, "y": 250, "t": "value PROMISED", "s": 24, "c": "green" },
          { "k": "text", "x": 470, "y": 284, "t": "− value RECEIVED", "s": 24, "c": "red" },
          { "k": "ul", "x": 470, "y": 296, "w": 200 } ] },
      { "say": "What about the pain of the operation? Not recoverable. He would have gone through that pain even if the surgery had worked. It was part of his price for the bargain, not a loss caused by the breach.",
        "add": [
          { "k": "stamp", "x": 462, "y": 330, "t": "NO PAIN AND SUFFERING", "s": 21, "c": "red" } ] }
    ] },
    { "title": "The film that flopped", "beats": [
      { "say": "Now a film. A celebrity is paid to star in a comedy and to promote it. The film flops. A receiver for the investors sues, saying she skipped the promotion, and asks for more than eight million dollars in lost profits.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Claim: $8.3 million in lost profits", "s": 26, "c": "red" },
          { "k": "icon", "name": "tv", "x": 620, "y": 330, "s": 1.5, "label": "The film" },
          { "k": "fig", "x": 150, "y": 400, "pose": "hips", "face": "flat", "hat": "hair", "label": "The star", "say": "I was busy." },
          { "k": "fig", "x": 350, "y": 400, "pose": "sad", "face": "sad", "hat": "tophat", "label": "Investors", "say": "Promote the film!" } ] },
      { "clear": true,
        "say": "In Goldberg and Paris Hilton Entertainment, expectation failed. Nobody can say what a film would have earned, so the profits were too speculative. Reliance failed too. The losses were not shown to flow from her breach.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "Goldberg v. Paris Hilton Entertainment", "s": 23, "c": "blue" },
          { "k": "cross", "x": 62, "y": 180, "r": 24 },
          { "k": "text", "x": 110, "y": 200, "t": "Expectation: profits too speculative", "s": 25 },
          { "k": "cross", "x": 62, "y": 245, "r": 24 },
          { "k": "text", "x": 110, "y": 265, "t": "Reliance: loss not caused by the breach", "s": 25 } ] },
      { "say": "That left restitution. If she kept a fee for promotion she never did, that part might have to go back. The court left that question open. Three interests, tried in order, in one case.",
        "add": [
          { "k": "text", "x": 62, "y": 330, "t": "?", "s": 40, "c": "blue" },
          { "k": "text", "x": 110, "y": 330, "t": "Restitution: left open", "s": 25, "c": "blue" },
          { "k": "text", "x": 110, "y": 366, "t": "a fee kept for promotion never done?", "s": 21 } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Do not start at the bottom, and do not stack the measures. Expectation is the default. Reliance is the fallback when profits cannot be proved. Restitution is the last resort. And never add punishment on top.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "text", "x": 60, "y": 205, "t": "1. Expectation: the default", "s": 28, "c": "green" },
          { "k": "text", "x": 60, "y": 260, "t": "2. Reliance: the fallback", "s": 28 },
          { "k": "text", "x": 60, "y": 315, "t": "3. Restitution: the last resort", "s": 28, "c": "blue" },
          { "k": "cross", "x": 62, "y": 355, "r": 26 },
          { "k": "text", "x": 110, "y": 378, "t": "punitive damages on top", "s": 26, "c": "red" } ] },
      { "clear": true,
        "say": "Let's recap. Contract damages compensate. Section 344 gives three interests: expectation, reliance, restitution. Section 347 is the expectation formula. Tort goes back to B, contract goes on to C. And the hairy hand: value promised, minus value received. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "Compensate, never punish (§355)", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§344: E·R·R, three interests", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "§347: lost value + other loss − savings", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "Tort: B − A. Contract: C − A", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "Hawkins: promised minus received", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Damages", "k": "cl",
      "q": "A painter agrees to paint a house for $9,000. The job would cost him $6,000 in labour and paint. The owner cancels before he buys anything or starts work. What are the painter's expectation damages?",
      "o": ["$9,000, the full contract price.", "$6,000, the cost of doing the job.", "$3,000, the profit he would have made.", "Nothing, because he had not started."],
      "a": 2,
      "w": "Section 347 takes the value he lost, nine thousand dollars, and subtracts the six thousand in costs he avoided. That leaves his three thousand dollar profit. Expectation puts him where performance would have, no better." },
    { "t": "Damages", "k": "cl",
      "q": "Which interest is protected by making the breaching party hand back a benefit that the injured party conferred on them?",
      "o": ["The restitution interest.", "The expectation interest.", "The reliance interest.", "The punitive interest."],
      "a": 0,
      "w": "Section 344 lists three interests. Restitution looks at what the breacher gained, and makes them give it back. Expectation and reliance both look at what the injured party lost." },
    { "t": "Damages", "k": "cl",
      "q": "A dentist guarantees a patient \"a perfect smile\" from a painful procedure. The procedure hurts exactly as expected, but the result is worse than before. Under the reasoning of Hawkins v. McGee, why is the ordinary pain of the procedure left out of expectation damages?",
      "o": ["Because pain can never be valued in money.", "Because the patient signed a consent form.", "Because dentists cannot make binding promises.", "Because the patient would have suffered that pain even if the promise had been kept."],
      "a": 3,
      "w": "Hawkins and McGee measures the value promised minus the value received. Pain the patient would have gone through anyway is part of the price of the bargain. It was not caused by the breach." },
    { "t": "Damages", "k": "cl",
      "q": "A promoter signs a singer for a one-night show at a brand-new venue, then pays $8,000 in non-refundable deposits. The singer cancels. No one can say how many tickets would have sold. What is the promoter's most realistic recovery?",
      "o": ["Expectation damages for the full lost profit.", "Reliance damages of $8,000.", "Punitive damages to deter singers from cancelling.", "Nothing, because the profit cannot be proved."],
      "a": 1,
      "w": "When lost profits are too speculative, the injured party can fall back on the reliance interest in section 344. That is the money spent because of the contract. Here, the eight thousand dollars in deposits." },
    { "t": "Damages", "k": "cl",
      "q": "A buyer pays $1,000 in advance for a watch that is worth $1,800 on the market. The seller keeps the money and never delivers. Using the points A, B and C, what does the contract expectation measure give the buyer?",
      "o": ["$800, the lost bargain only.", "$1,000, the return to where she started.", "$1,800, the distance from A to C.", "$2,800, the price plus the market value."],
      "a": 2,
      "w": "She is at A, one thousand down. Performance would put her at C, eight hundred up. C minus A is what they pay: one thousand eight hundred dollars. Going back only to B would be a tort measure." }
  ]
};

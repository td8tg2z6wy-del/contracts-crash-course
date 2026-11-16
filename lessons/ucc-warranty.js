window.LESSONS = window.LESSONS || {};
window.LESSONS["ucc-warranty"] = {
  "id": "ucc-warranty",
  "title": "Warranties and Disclaimers",
  "track": "ucc",
  "sections": ["§2-313", "§2-314", "§2-315", "§2-312", "§2-316"],
  "scenes": [
    { "title": "Warranties and Disclaimers", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: warranties and disclaimers.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "What did the seller promise?", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "hold", "hat": "tophat", "label": "Seller", "say": "It's a toaster." },
          { "k": "fig", "x": 470, "y": 400, "pose": "shrug", "face": "flat", "label": "Buyer", "say": "Does it toast?" } ] },
      { "clear": true,
        "say": "A reminder first. The UCC applies only to sales of goods. Toasters and hiking boots, yes. Houses and haircuts, no. And the question today: what does a seller promise about the goods, even without saying a word?",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "UCC Article 2 = sales of GOODS", "s": 30 },
          { "k": "icon", "name": "crate", "x": 140, "y": 280, "s": 1.2, "label": "toaster" },
          { "k": "icon", "name": "crate", "x": 320, "y": 280, "s": 1.2, "label": "boots" },
          { "k": "icon", "name": "house", "x": 530, "y": 280, "s": 1.2, "label": "house: no" },
          { "k": "cross", "x": 498, "y": 248, "r": 64 } ] },
      { "clear": true,
        "say": "The twins, side by side. The old common law said caveat emptor, let the buyer beware. No promise about quality unless the seller chose to make one. The UCC says goods come with warranties. Some the seller states. Some the law adds automatically.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Common law says", "s": 28 },
          { "k": "ul", "x": 60, "y": 160, "w": 210 },
          { "k": "text", "x": 60, "y": 205, "t": "Caveat emptor: let the buyer beware. Inspect it yourself, or get a promise.", "s": 23, "w": 300 },
          { "k": "line", "x1": 385, "y1": 120, "x2": 385, "y2": 430 },
          { "k": "text", "x": 410, "y": 150, "t": "UCC says", "s": 28, "c": "green" },
          { "k": "ul", "x": 410, "y": 160, "w": 120, "c": "green" },
          { "k": "text", "x": 410, "y": 205, "t": "Goods come with warranties. Some are stated. Some the law adds by itself.", "s": 23, "w": 310 },
          { "k": "text", "x": 410, "y": 380, "t": "UCC §§2-313 to 2-316", "s": 22, "c": "blue" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Four sections. First, section 2-313, express warranties. Any affirmation of fact or promise, any description, any sample or model, that becomes part of the basis of the bargain. Your acronym is ADS. Affirm, Describe, Sample. Express warranties come from ads.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-313", "name": "Express warranty", "rule": "A fact, description or sample that is part of the bargain.", "hook": "Express warranties come from ADS: Affirm, Describe, Sample." } ] },
      { "say": "Second, section 2-314, the implied warranty of merchantability. If the seller is a merchant in goods of that kind, the goods must be fit for their ordinary purpose. Picture the number. Three point one four is pi. And an ordinary pie must be fit to eat.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§2-314", "name": "Merchantability", "rule": "A merchant's goods must be fit for their ordinary purpose.", "hook": "3.14 is pi: an ordinary pie must be fit to eat." } ] },
      { "clear": true,
        "say": "Third, section 2-315, fitness for a particular purpose. The seller has reason to know your special purpose, and that you are relying on the seller's skill to choose the goods. Rhyme time. Three-fifteen: tell the seller what you mean.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§2-315", "name": "Fitness for a purpose", "rule": "Seller knows your purpose, and you rely on seller's skill.", "hook": "Three-fifteen: tell the seller what you mean." } ] },
      { "say": "Fourth, section 2-316, disclaimers. To exclude merchantability, the seller must mention the word merchantability, and if it is in writing, make it conspicuous. Or simply say, as is. Three-sixteen: disclaimers must be seen.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§2-316", "name": "Disclaimers", "rule": "Say \"merchantability\" conspicuously, or say \"as is\".", "hook": "Three-sixteen: disclaimers must be seen." } ] }
    ] },
    { "title": "Said it? Own it.", "beats": [
      { "say": "Express first. The box says, toasts four slices at once. That is a description of the goods, and part of the bargain. No magic words are needed. The seller never has to say warranty or guarantee.",
        "add": [
          { "k": "box", "x": 70, "y": 125, "w": 220, "h": 140 },
          { "k": "text", "x": 180, "y": 172, "t": "TOASTER", "s": 28, "anchor": "middle" },
          { "k": "text", "x": 180, "y": 212, "t": "Toasts 4 slices", "s": 21, "anchor": "middle", "c": "red" },
          { "k": "text", "x": 180, "y": 240, "t": "at once!", "s": 21, "anchor": "middle", "c": "red" },
          { "k": "fig", "x": 480, "y": 400, "pose": "sad", "face": "sad", "label": "Buyer", "say": "It only fits two." },
          { "k": "stamp", "x": 60, "y": 335, "t": "EXPRESS WARRANTY", "s": 24 },
          { "k": "text", "x": 62, "y": 392, "t": "No magic words needed.", "s": 22 } ] },
      { "clear": true,
        "say": "But sales talk is not a warranty. The best toaster in the world. You will love it. Worth every penny. That is opinion, also known as puffery. A warranty needs something concrete, a fact you could check.",
        "add": [
          { "k": "fig", "x": 170, "y": 400, "pose": "up", "face": "smirk", "hat": "tophat", "label": "Seller", "say": "Best toaster ever!" },
          { "k": "text", "x": 380, "y": 170, "t": "Opinion = puffery", "s": 30 },
          { "k": "text", "x": 380, "y": 212, "t": "= no warranty", "s": 26, "c": "red" },
          { "k": "check", "x": 380, "y": 300 }, { "k": "text", "x": 428, "y": 317, "t": "\"Toasts 4 slices\": fact", "s": 24 },
          { "k": "cross", "x": 383, "y": 352, "r": 24 }, { "k": "text", "x": 428, "y": 372, "t": "\"Best ever\": opinion", "s": 24 } ] },
      { "clear": true,
        "say": "A sample or a model works the same way. If the shop shows you a floor model, the toaster you take home must match it. And whichever kind it is, it must be part of the basis of the bargain: part of what you thought you were buying.",
        "add": [
          { "k": "icon", "name": "store", "x": 115, "y": 190, "label": "Floor model" },
          { "k": "arrow", "x1": 170, "y1": 190, "x2": 295, "y2": 190 },
          { "k": "text", "x": 232, "y": 176, "t": "must match", "s": 20, "anchor": "middle" },
          { "k": "icon", "name": "crate", "x": 350, "y": 190, "label": "Yours" },
          { "k": "text", "x": 500, "y": 215, "t": "A·D·S", "s": 56, "c": "blue" },
          { "k": "ul", "x": 500, "y": 229, "w": 165, "c": "blue" },
          { "k": "text", "x": 60, "y": 345, "t": "Affirm · Describe · Sample", "s": 30 },
          { "k": "text", "x": 60, "y": 392, "t": "+ part of the basis of the bargain", "s": 26 } ] }
    ] },
    { "title": "The ordinary toaster", "beats": [
      { "say": "Now the implied warranties. You buy a toaster from an appliance shop. Nobody says a word about quality. At home, it will not toast. The shop is a merchant in toasters, so the law itself adds a promise: fit for ordinary use.",
        "add": [
          { "k": "icon", "name": "store", "x": 120, "y": 185, "s": 1.3, "label": "Appliance shop" },
          { "k": "text", "x": 215, "y": 175, "t": "Merchant in goods of that kind", "s": 26 },
          { "k": "fig", "x": 500, "y": 400, "pose": "hold", "face": "sad", "label": "Buyer", "say": "Cold bread." },
          { "k": "stamp", "x": 60, "y": 335, "t": "UNMERCHANTABLE", "s": 26, "c": "red" },
          { "k": "text", "x": 62, "y": 395, "t": "Not fit for its ordinary purpose", "s": 22 } ] },
      { "clear": true,
        "say": "Change the seller. Your neighbour sells you the same toaster at a garage sale. She is not a merchant in toasters, so there is no warranty of merchantability. Anything she actually tells you about it could still be an express warranty.",
        "add": [
          { "k": "fig", "x": 170, "y": 400, "pose": "hold", "hat": "bun", "label": "Neighbour", "say": "Five dollars." },
          { "k": "icon", "name": "house", "x": 330, "y": 345, "s": 0.9, "label": "Garage sale" },
          { "k": "text", "x": 440, "y": 170, "t": "Not a merchant", "s": 30, "c": "red" },
          { "k": "text", "x": 440, "y": 212, "t": "No merchantability warranty", "s": 22 },
          { "k": "text", "x": 440, "y": 330, "t": "Her statements of fact can still be express warranties.", "s": 21, "w": 280 } ] }
    ] },
    { "title": "Boots for the mountain", "beats": [
      { "say": "Fitness for a particular purpose. A hiker tells the clerk, I am climbing a snowy mountain, what should I buy? The clerk picks out a pair of boots. The seller knows the purpose, and knows the buyer is relying on the seller's judgment.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Particular purpose: a snowy mountain", "s": 28 },
          { "k": "fig", "x": 170, "y": 400, "pose": "shrug", "hat": "cap", "label": "Hiker", "say": "Snow climb. Which?" },
          { "k": "fig", "x": 440, "y": 400, "pose": "pointL", "hat": "hair", "label": "Clerk", "say": "These ones." },
          { "k": "icon", "name": "crate", "x": 620, "y": 345, "label": "boots" } ] },
      { "clear": true,
        "say": "In the snow, the boots leak and fall apart. They may be fine for a walk in the park, so perhaps merchantable. But they were not fit for the mountain. That breaches section 2-315. Had the hiker insisted on her own favourite brand, there would be no reliance, and no warranty.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Park: fine.  Mountain: soggy.", "s": 28 },
          { "k": "check", "x": 62, "y": 190 }, { "k": "text", "x": 110, "y": 207, "t": "seller knows the purpose", "s": 26 },
          { "k": "check", "x": 62, "y": 245 }, { "k": "text", "x": 110, "y": 262, "t": "seller knows buyer relies on its skill", "s": 26 },
          { "k": "check", "x": 62, "y": 300 }, { "k": "text", "x": 110, "y": 317, "t": "buyer does rely", "s": 26 },
          { "k": "stamp", "x": 60, "y": 385, "t": "§2-315 BREACHED", "s": 26, "c": "red" } ] }
    ] },
    { "title": "Who owns it?", "beats": [
      { "say": "A quick word on title. Under section 2-312, every seller promises that the title is good, that the seller has the right to sell, and that no hidden lien is attached. Sell a stolen bicycle, and you have breached it.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "§2-312: warranty of title", "s": 30 },
          { "k": "fig", "x": 170, "y": 400, "pose": "hold", "face": "smirk", "hat": "cap", "label": "Seller", "say": "Totally mine." },
          { "k": "icon", "name": "key", "x": 320, "y": 345 },
          { "k": "fig", "x": 500, "y": 400, "pose": "up", "face": "shock", "hat": "hair", "label": "True owner", "say": "That's MY bike!" } ] }
    ] },
    { "title": "Taking it back", "beats": [
      { "say": "Can a seller take the implied warranties away? Yes, with care. To disclaim merchantability, the disclaimer must use the word merchantability, and if it is written, it must be conspicuous: big, bold, hard to miss.",
        "add": [
          { "k": "icon", "name": "doc", "x": 130, "y": 230, "s": 1.8, "label": "Sales contract" },
          { "k": "text", "x": 245, "y": 165, "t": "NO WARRANTY OF MERCHANTABILITY", "s": 24, "c": "red" },
          { "k": "ul", "x": 245, "y": 176, "w": 340, "c": "red" },
          { "k": "check", "x": 245, "y": 200 }, { "k": "text", "x": 293, "y": 217, "t": "says \"merchantability\"", "s": 24 },
          { "k": "check", "x": 245, "y": 248 }, { "k": "text", "x": 293, "y": 265, "t": "conspicuous, if written", "s": 24 } ] },
      { "say": "To disclaim fitness, the disclaimer must be in writing and conspicuous. And there is a shortcut for both. Words like as is, or with all faults, tell any buyer that the goods come with no implied warranties.",
        "add": [
          { "k": "text", "x": 245, "y": 330, "t": "Fitness: in WRITING + conspicuous", "s": 24 },
          { "k": "stamp", "x": 245, "y": 385, "t": "AS IS", "s": 30 },
          { "k": "text", "x": 375, "y": 408, "t": "= no implied warranties", "s": 24 } ] },
      { "clear": true,
        "say": "Inspection matters too. If the buyer examines the goods as fully as she likes, or refuses to examine them, there is no implied warranty for defects the examination should have revealed. The cracked handle you looked straight at is yours.",
        "add": [
          { "k": "fig", "x": 170, "y": 400, "pose": "point", "label": "Buyer", "say": "Looks fine to me." },
          { "k": "icon", "name": "crate", "x": 330, "y": 340, "s": 1.2, "c": "red", "label": "cracked handle" },
          { "k": "text", "x": 440, "y": 165, "t": "Examined, or refused to?", "s": 24 },
          { "k": "text", "x": 440, "y": 205, "t": "No implied warranty for defects you should have seen.", "s": 22, "w": 280 } ] },
      { "clear": true,
        "say": "Express warranties are much harder to erase. A seller cannot promise four slices in large print and take it back in small print. And when a disclaimer, or a limit on remedies, is truly oppressive, the fight often moves to unconscionability, under section 2-302.",
        "add": [
          { "k": "text", "x": 60, "y": 170, "t": "\"Toasts 4 slices!\"", "s": 38 },
          { "k": "text", "x": 60, "y": 212, "t": "(seller makes no warranties of any kind)", "s": 15 },
          { "k": "cross", "x": 345, "y": 192, "r": 26 },
          { "k": "text", "x": 60, "y": 290, "t": "Promise and disclaimer clash? The promise usually wins.", "s": 24 },
          { "k": "icon", "name": "scale", "x": 100, "y": 375, "s": 0.9 },
          { "k": "text", "x": 160, "y": 385, "t": "Oppressive terms: see §2-302, unconscionability", "s": 23, "c": "blue" } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Do not mix up the two implied warranties. Merchantability asks whether the goods do their ordinary job, and needs a merchant seller. Fitness asks about your special job, and needs reliance on the seller. The leaky mountain boots can pass the first and fail the second.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "text", "x": 60, "y": 215, "t": "Merchantability:", "s": 28, "c": "blue" },
          { "k": "text", "x": 60, "y": 252, "t": "ORDINARY purpose + merchant seller", "s": 26 },
          { "k": "text", "x": 60, "y": 325, "t": "Fitness:", "s": 28, "c": "blue" },
          { "k": "text", "x": 60, "y": 362, "t": "PARTICULAR purpose + reliance on seller", "s": 26 } ] },
      { "clear": true,
        "say": "Let's recap. Express warranties come from ADS, with no magic words, and puffery does not count. Merchantability: a merchant's goods must do their ordinary job. Fitness: a known purpose, plus reliance. Title must be good. And disclaimers must be seen. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§2-313: express = A·D·S; puffery is not", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "§2-314: merchant; ordinary purpose", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "§2-315: known purpose + reliance", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "§2-312: good title", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "§2-316: conspicuous, or \"as is\"", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Warranties", "k": "ucc",
      "q": "A camping store's label on a tent reads \"Waterproof in heavy rain.\" The salesperson adds, \"This is the finest tent money can buy.\" The tent leaks in the first storm. Which statement created an express warranty?",
      "o": ["Both statements.", "Only \"Waterproof in heavy rain.\"", "Only \"the finest tent money can buy.\"", "Neither, because the word \"warranty\" was never used."],
      "a": 1,
      "w": "Under section 2-313, an affirmation of fact or a description that is part of the basis of the bargain is an express warranty, and no magic words are needed. Calling it the finest tent money can buy is opinion, or puffery, which is not a warranty." },
    { "t": "Warranties", "k": "ucc",
      "q": "A painter tells a hardware store clerk, \"I need paint for a metal boat hull that sits in salt water. What should I use?\" The clerk selects an ordinary house paint, which is perfectly good on walls but peels off the hull in a week. The painter's best claim is breach of:",
      "o": ["The warranty of title.", "The implied warranty of merchantability only.", "An express warranty created by puffery.", "The implied warranty of fitness for a particular purpose."],
      "a": 3,
      "w": "Section 2-315 applies when the seller has reason to know the buyer's particular purpose and that the buyer is relying on the seller's skill to select the goods. The paint may be merchantable as house paint, yet still unfit for the hull. Three-fifteen: tell the seller what you mean." },
    { "t": "Warranties", "k": "ucc",
      "q": "A dentist sells her used family blender to a neighbour and says nothing about its condition. It stops working after one day. Is there a breach of the implied warranty of merchantability?",
      "o": ["No, because the warranty arises only when the seller is a merchant in goods of that kind.", "Yes, because all goods must be fit for their ordinary purpose.", "Yes, because the dentist is a professional.", "No, because blenders are not goods."],
      "a": 0,
      "w": "The implied warranty of merchantability in section 2-314 arises only if the seller is a merchant with respect to goods of that kind. A dentist making a one-off sale of a blender is not a merchant in blenders." },
    { "t": "Warranties", "k": "ucc",
      "q": "A dealer's written sales contract contains, in the same small print as everything else on the back page, the sentence: \"Seller disclaims all implied warranties.\" Is the implied warranty of merchantability effectively disclaimed?",
      "o": ["Yes, because any written disclaimer works.", "Yes, because the buyer signed the contract.", "No, because a written disclaimer of merchantability must mention merchantability and be conspicuous.", "No, because implied warranties can never be disclaimed."],
      "a": 2,
      "w": "Section 2-316 says a disclaimer of merchantability must mention the word merchantability, and if it is in writing it must be conspicuous. This one does neither, and it is not an as is clause. Three-sixteen: disclaimers must be seen." },
    { "t": "Warranties", "k": "both",
      "q": "Which statement best contrasts the old common-law attitude to the quality of goods with the UCC's approach?",
      "o": ["The common law implied broad warranties; the UCC abolished them.", "The common law followed caveat emptor; the UCC adds implied warranties to sales unless they are properly disclaimed.", "Both leave quality entirely to what the seller chooses to promise.", "The UCC applies caveat emptor to merchants and implied warranties to everyone else."],
      "a": 1,
      "w": "Caveat emptor means let the buyer beware: no promise about quality unless the seller made one. The UCC reverses the starting point. Sections 2-314 and 2-315 add implied warranties by law, and section 2-316 sets the rules a seller must follow to disclaim them." }
  ]
};

window.LESSONS = window.LESSONS || {};
window.LESSONS["capacity"] = {
  "id": "capacity",
  "title": "Capacity",
  "track": "cl",
  "sections": ["§14", "§15"],
  "scenes": [
    { "title": "Capacity", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: capacity.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Who made the deal?", "s": 32 },
          { "k": "fig", "x": 200, "y": 400, "pose": "up", "hat": "cap", "label": "Minor, 17", "say": "I'll take it!" },
          { "k": "fig", "x": 470, "y": 400, "pose": "hips", "hat": "tophat", "label": "Seller", "say": "Sold!" } ] },
      { "say": "Most defences ask what went wrong with the deal. Capacity asks who made it. The law lets some people, such as minors and people with serious mental illness, walk away from contracts that would bind anyone else.",
        "add": [
          { "k": "icon", "name": "doc", "x": 335, "y": 340 },
          { "k": "text", "x": 560, "y": 330, "t": "Can they undo it?", "s": 26, "c": "red", "w": 170 } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Section 14. Until the age of majority, generally eighteen, a person's contracts are voidable. The minor may keep the deal or cancel it. The adult gets no such choice. Memory hook: picture a fourteen-year-old signing for a sports car. That signature is in pencil.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§14", "name": "Minors", "rule": "Under 18: the contract is voidable, at the minor's option.", "hook": "A 14-year-old signs for a sports car. In pencil." } ] },
      { "say": "Section 15, mental illness. The contract is voidable if the person could not understand the deal. Or if they could not act reasonably about it, and the other side had reason to know. Rhyme: fifteen. Could not grasp what it would mean, or could not steer, and you had seen.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§15", "name": "Mental illness", "rule": "Can't understand; OR can't act reasonably + you knew.", "hook": "Can't grasp what it'd mean; or can't steer, and you'd seen." } ] }
    ] },
    { "title": "Walking away", "beats": [
      { "say": "Why so generous to minors? The law assumes that judgment comes with age and experience. So the risk falls on the adult. Even a perfectly fair deal can be undone. Sell a car on credit to a seventeen-year-old, and you are gambling.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "The risk is on the adult", "s": 30 },
          { "k": "fig", "x": 170, "y": 400, "pose": "shrug", "hat": "cap", "label": "Minor" },
          { "k": "icon", "name": "car", "x": 330, "y": 345 },
          { "k": "fig", "x": 500, "y": 400, "pose": "sad", "face": "shock", "hat": "tophat", "label": "Adult", "say": "My risk?!" } ] },
      { "clear": true,
        "say": "To cancel, the minor disaffirms. Any clear words or acts will do. I am out, here is your car back. The minor can do it while under age, or within a reasonable time after turning eighteen. Wait too long, and the contract is ratified.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "DISAFFIRM = cancel", "s": 32 },
          { "k": "fig", "x": 170, "y": 400, "pose": "hold", "hat": "cap", "label": "Minor", "say": "I'm out. Take it back." },
          { "k": "text", "x": 420, "y": 210, "t": "Any clear words or acts", "s": 24, "w": 300 },
          { "k": "text", "x": 420, "y": 270, "t": "While a minor, or soon after 18", "s": 24, "w": 300 },
          { "k": "text", "x": 420, "y": 360, "t": "Wait too long = RATIFIED", "s": 24, "c": "red", "w": 300 } ] },
      { "clear": true,
        "say": "Three exceptions. Remember N, E, S. Necessaries: for food, clothing or medical care, the minor must pay the reasonable value. Emancipation: in many states, a minor living as an independent adult can be bound. Statutes: federal law, for example, blocks the infancy defence against student loans.",
        "add": [
          { "k": "text", "x": 66, "y": 178, "t": "N", "s": 40, "c": "blue" },
          { "k": "text", "x": 120, "y": 174, "t": "Necessaries: pay reasonable value", "s": 26 },
          { "k": "text", "x": 66, "y": 243, "t": "E", "s": 40, "c": "blue" },
          { "k": "text", "x": 120, "y": 239, "t": "Emancipation: living as an adult", "s": 26 },
          { "k": "text", "x": 66, "y": 308, "t": "S", "s": 40, "c": "blue" },
          { "k": "text", "x": 120, "y": 304, "t": "Statutes: e.g. student loans", "s": 26 },
          { "k": "text", "x": 60, "y": 395, "t": "N·E·S: when the minor's yes sticks", "s": 30, "c": "blue" },
          { "k": "ul", "x": 60, "y": 409, "w": 470, "c": "blue" } ] }
    ] },
    { "title": "The broken car", "beats": [
      { "say": "Halbman and Lemke. Halbman, a minor, bought a used car from his boss, Lemke, for twelve hundred and fifty dollars. He had paid eleven hundred when the engine failed. The repair bill went unpaid, and the car was later stripped and vandalised. It ended up worthless.",
        "add": [
          { "k": "text", "x": 60, "y": 140, "t": "Halbman v. Lemke", "s": 24, "c": "blue" },
          { "k": "text", "x": 290, "y": 180, "t": "Engine dies. Car stripped. Worthless.", "s": 24, "c": "red" },
          { "k": "fig", "x": 170, "y": 400, "pose": "hold", "hat": "cap", "label": "Halbman, a minor", "say": "Paid $1,100" },
          { "k": "icon", "name": "car", "x": 385, "y": 335, "s": 1.4, "label": "$1,250" },
          { "k": "fig", "x": 600, "y": 400, "pose": "hips", "face": "flat", "hat": "hardhat", "label": "Lemke" } ] },
      { "clear": true,
        "say": "Halbman disaffirmed and asked for his eleven hundred dollars. Lemke said, then pay me for the damage. The court said no. A minor who disaffirms returns whatever is left, and owes nothing for use or depreciation. Charging him would enforce the contract by the back door.",
        "add": [
          { "k": "stamp", "x": 60, "y": 150, "t": "MINOR GETS $1,100 BACK", "s": 28, "c": "green" },
          { "k": "text", "x": 60, "y": 215, "t": "Returns only what is left of the car", "s": 24 },
          { "k": "text", "x": 60, "y": 255, "t": "Owes nothing for use or depreciation", "s": 24 },
          { "k": "fig", "x": 170, "y": 400, "pose": "up", "hat": "cap", "label": "Halbman" },
          { "k": "icon", "name": "car", "x": 400, "y": 350, "c": "red" },
          { "k": "fig", "x": 620, "y": 400, "pose": "sad", "face": "sad", "hat": "hardhat", "label": "Lemke", "say": "My car?!" } ] },
      { "clear": true,
        "say": "The idea is a shield, not a sword. The rule protects minors from bad deals. It is not a weapon. Lie about your age, or wreck the goods on purpose, and many courts will make you pay. Still, the message stands: deal with a minor at your peril.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "A shield, not a sword", "s": 34, "c": "blue" },
          { "k": "check", "x": 62, "y": 195 }, { "k": "text", "x": 110, "y": 212, "t": "Protects minors from bad deals", "s": 26 },
          { "k": "cross", "x": 64, "y": 300 }, { "k": "text", "x": 110, "y": 318, "t": "Not a weapon: no lying about age, no wrecking the goods", "s": 26, "w": 360 },
          { "k": "fig", "x": 620, "y": 400, "pose": "shrug", "face": "flat", "hat": "tophat", "label": "Adult", "say": "At my peril." } ] }
    ] },
    { "title": "The teacher's pension", "beats": [
      { "say": "Ortelere and the Teachers' Retirement Board. Grace Ortelere, a teacher, was on leave for mental illness. She changed her pension choice to take the largest monthly payments, with nothing left for her husband at her death. Two months later, she died.",
        "add": [
          { "k": "text", "x": 60, "y": 140, "t": "Ortelere v. Teachers' Retirement Bd.", "s": 22, "c": "blue" },
          { "k": "fig", "x": 170, "y": 400, "pose": "hold", "face": "flat", "hat": "bun", "label": "Mrs Ortelere", "say": "Maximum, please." },
          { "k": "icon", "name": "doc", "x": 310, "y": 335, "label": "Pension form" },
          { "k": "icon", "name": "money", "x": 480, "y": 195, "c": "green", "label": "More per month" },
          { "k": "text", "x": 420, "y": 310, "t": "Nothing left at death", "s": 24, "c": "red" },
          { "k": "text", "x": 420, "y": 365, "t": "Dies two months later", "s": 24 } ] },
      { "clear": true,
        "say": "The old test asked only, did she understand? She did. But New York's highest court adopted the modern test. If illness left her unable to act reasonably, and the board knew of her condition, the choice is voidable. The board had her on leave for it. New trial ordered.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Old test: did she UNDERSTAND?", "s": 26 },
          { "k": "text", "x": 60, "y": 200, "t": "Modern test, §15: could she ACT REASONABLY, and did they KNOW?", "s": 26, "w": 430 },
          { "k": "fig", "x": 620, "y": 400, "pose": "shrug", "face": "flat", "hat": "tophat", "label": "The Board", "say": "On leave. We knew." },
          { "k": "stamp", "x": 60, "y": 350, "t": "VOIDABLE: NEW TRIAL", "s": 26, "c": "green" } ] },
      { "clear": true,
        "say": "The dissent disagreed. Her own letter to the board asked sharp, detailed questions. With her husband off work to care for her, a bigger monthly payment made sense. And contracts need to be stable. Stick with the old test, said the dissent.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "THE DISSENT", "s": 28, "c": "red" },
          { "k": "fig", "x": 170, "y": 400, "pose": "point", "face": "flat", "hat": "wig", "label": "Dissent", "say": "She understood." },
          { "k": "text", "x": 340, "y": 210, "t": "Sharp, detailed letter to the board", "s": 24, "w": 380 },
          { "k": "text", "x": 340, "y": 290, "t": "More monthly income made sense", "s": 24, "w": 380 },
          { "k": "text", "x": 340, "y": 360, "t": "Contracts must be stable", "s": 24, "w": 380 } ] },
      { "clear": true,
        "say": "Section 15 also has a brake. If the terms were fair, and the other side had no idea about the illness, the power to cancel fades once the deal has been performed and undoing it would be unjust.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "§15 has a brake", "s": 30 },
          { "k": "text", "x": 60, "y": 215, "t": "Fair terms + no knowledge of the illness", "s": 26 },
          { "k": "text", "x": 60, "y": 275, "t": "+ already performed, and unjust to undo", "s": 26 },
          { "k": "text", "x": 60, "y": 350, "t": "= no cancelling", "s": 30, "c": "red" },
          { "k": "icon", "name": "scale", "x": 620, "y": 360, "s": 1.3 } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Voidable does not mean void. The contract is alive until the protected person cancels it. And only that person can cancel. The adult seller cannot say, you are seventeen, so I am out. The minor can hold the adult to the deal.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP: voidable is not void", "s": 30, "c": "red" },
          { "k": "fig", "x": 200, "y": 400, "pose": "up", "face": "flat", "hat": "tophat", "label": "Seller", "say": "You're 17. I'm out!" },
          { "k": "cross", "x": 310, "y": 300, "r": 40 },
          { "k": "fig", "x": 480, "y": 400, "pose": "hips", "face": "smirk", "hat": "cap", "label": "Minor", "say": "Not your call." } ] },
      { "clear": true,
        "say": "Let's recap. A minor's contract is voidable at the minor's option. Disaffirm, and there is no charge for depreciation. Exceptions: N, E, S. Mental illness: could not understand, or could not act reasonably and the other side knew. And voidable is not void. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§14: under 18 = voidable, minor's choice", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "Disaffirm: no charge for depreciation", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "Exceptions: N·E·S", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "§15: can't understand, OR can't act + you knew", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "Voidable, not void. A shield, not a sword.", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Capacity", "k": "cl",
      "q": "Jo, aged 17, buys a laptop for $900. Three months later it is scratched and worth $500. Still 17, Jo returns it and demands her $900. Under the approach in Halbman v. Lemke, what does Jo recover?",
      "o": ["Nothing, because she used the laptop.", "$900, because a disaffirming minor is not charged for use or depreciation.", "$500, the laptop's present value.", "$400, the amount of the depreciation."],
      "a": 1,
      "w": "Under section 14 a minor's contract is voidable at the minor's option. In Halbman and Lemke the court said a minor who disaffirms hands back what is left and is not charged for use or depreciation. Making her pay would enforce the contract by the back door." },
    { "t": "Capacity", "k": "cl",
      "q": "Which statement best describes a contract made by a 16-year-old for a non-necessary item?",
      "o": ["It is voidable at the minor's option.", "It is void from the start and binds no one.", "It is voidable by either party.", "It is fully binding if the price was fair."],
      "a": 0,
      "w": "Section 14 makes a minor's contract voidable, not void. The choice belongs to the minor alone, and it does not matter that the deal was fair. Picture the fourteen-year-old signing in pencil." },
    { "t": "Capacity", "k": "cl",
      "q": "A dealer agrees to sell a motorbike to Sam. Before delivery, the dealer gets a better offer, learns that Sam is 17, and refuses to deliver, saying the contract is invalid. Sam wants the bike. Who is right?",
      "o": ["The dealer, because a minor's contract is void.", "The dealer, because either side may cancel a voidable contract.", "Neither, because the contract needs a parent's signature.", "Sam, because only the minor has the power to avoid the contract."],
      "a": 3,
      "w": "Voidable is not void. The contract stands unless the protected person cancels it, and only the minor holds that power. The adult is bound. The rule is a shield for the minor, not an escape hatch for the dealer." },
    { "t": "Capacity", "k": "cl",
      "q": "Ray has a serious mental illness. During an episode he fully understands that he is selling his house for half its value, but his illness leaves him unable to act reasonably about it. The buyer knows of Ray's condition. Can Ray avoid the sale?",
      "o": ["No, because he understood the transaction.", "No, unless a court had already declared him incompetent.", "Yes, because he could not act reasonably and the buyer had reason to know.", "Yes, because any contract made by a person with a mental illness is void."],
      "a": 2,
      "w": "Section 15 has two routes. One: he could not understand the deal. Two: he could not act reasonably about it, and the other side had reason to know. Ray fits the second, which is the modern test from Ortelere." },
    { "t": "Capacity", "k": "cl",
      "q": "Lee, aged 17 and living on his own, receives emergency medical treatment and signs the clinic's payment form. He later refuses to pay, saying he was a minor. What is the most likely result?",
      "o": ["Lee owes nothing, because minors can disaffirm any contract.", "Lee owes the reasonable value of the treatment, because it was a necessary.", "Lee owes whatever price the form states, however high.", "The clinic must sue Lee's parents and no one else."],
      "a": 1,
      "w": "Necessaries are the N in N, E, S. A minor who receives things such as food, clothing or medical care must pay their reasonable value. Note that it is the reasonable value, not necessarily the contract price." }
  ]
};

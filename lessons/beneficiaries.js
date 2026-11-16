window.LESSONS = window.LESSONS || {};
window.LESSONS["beneficiaries"] = {
  "id": "beneficiaries",
  "title": "Third-Party Beneficiaries",
  "track": "cl",
  "sections": ["§302", "§309"],
  "scenes": [
    { "title": "Third-Party Beneficiaries", "beats": [
      { "say": "Hello. I'm Professor Stick Figure, and this is your contracts crash course. Today's board: third-party beneficiaries.",
        "add": [
          { "k": "text", "x": 60, "y": 150, "t": "Who gets to sue?", "s": 32 },
          { "k": "fig", "x": 130, "y": 400, "pose": "point", "face": "smile", "label": "Party one", "say": "Deal!" },
          { "k": "fig", "x": 290, "y": 400, "pose": "pointL", "face": "smile", "hat": "hair", "label": "Party two", "say": "Deal!" },
          { "k": "fig", "x": 560, "y": 400, "pose": "shrug", "face": "flat", "hat": "cap", "label": "Outsider", "say": "What about me?" } ] },
      { "say": "The old rule was privity. Only the people who made a contract could enforce it. Outsiders stayed outside. But some contracts are made precisely to benefit an outsider. So, over time, the wall of privity got a door.",
        "add": [
          { "k": "line", "x1": 425, "y1": 200, "x2": 425, "y2": 420, "c": "red" },
          { "k": "text", "x": 372, "y": 185, "t": "PRIVITY", "s": 24, "c": "red" } ] }
    ] },
    { "title": "The rule card", "beats": [
      { "say": "Section 302. A third party can enforce a promise if the parties intended the benefit to reach them. That is an intended beneficiary. Everyone else is incidental, and cannot sue. Picture the number. Three, zero, two: three people, zero privity, only two made the deal.",
        "add": [ { "k": "card", "x": 60, "y": 114, "num": "§302", "name": "Intended or incidental?", "rule": "A third party the deal was MEANT to benefit can enforce.", "hook": "3-0-2: three people, zero privity, two made the deal." } ] },
      { "say": "Section 309. The beneficiary's right comes through the contract, so the promisor keeps its contract defences. No consideration, fraud, a failed condition: all still available. Rhyme: three-oh-nine, my defences stay mine.",
        "add": [ { "k": "card", "x": 60, "y": 268, "num": "§309", "name": "Defences travel", "rule": "The promisor keeps its defences against the beneficiary.", "hook": "Three-oh-nine: my defences stay mine." } ] },
      { "clear": true,
        "say": "Your acronym is C, I, D. Creditor beneficiary: the promise pays off a debt owed to them. Donee beneficiary: the promise is a gift to them. Both are intended, and both can sue. Incidental, stuck in the middle, gets nothing.",
        "add": [
          { "k": "text", "x": 60, "y": 165, "t": "C", "s": 44, "c": "blue" },
          { "k": "text", "x": 110, "y": 160, "t": "reditor beneficiary", "s": 28 },
          { "k": "check", "x": 560, "y": 138 },
          { "k": "text", "x": 60, "y": 255, "t": "I", "s": 44, "c": "blue" },
          { "k": "text", "x": 110, "y": 250, "t": "ncidental beneficiary", "s": 28, "c": "red" },
          { "k": "cross", "x": 562, "y": 228, "r": 26 },
          { "k": "text", "x": 60, "y": 345, "t": "D", "s": 44, "c": "blue" },
          { "k": "text", "x": 110, "y": 340, "t": "onee beneficiary", "s": 28 },
          { "k": "check", "x": 560, "y": 318 } ] }
    ] },
    { "title": "Meant for you?", "beats": [
      { "say": "The easy example is life insurance. You pay the insurer. The insurer promises to pay your family when you die. Your family signed nothing, but the whole point of the deal was to benefit them. Intended. They can sue.",
        "add": [
          { "k": "fig", "x": 130, "y": 400, "pose": "hold", "face": "smile", "label": "Insured" },
          { "k": "icon", "name": "doc", "x": 215, "y": 330, "s": 0.8, "label": "Policy" },
          { "k": "fig", "x": 300, "y": 400, "pose": "stand", "face": "flat", "hat": "tophat", "label": "Insurer" },
          { "k": "fig", "x": 560, "y": 400, "pose": "up", "face": "smile", "hat": "bun", "label": "Family" },
          { "k": "arrow", "x1": 350, "y1": 340, "x2": 510, "y2": 340, "c": "green" },
          { "k": "stamp", "x": 380, "y": 170, "t": "INTENDED: CAN SUE", "s": 26, "c": "green" } ] },
      { "clear": true,
        "say": "Compare. You hire a landscaper to build a beautiful garden. Your neighbour's house would rise in value. The landscaper quits. Can the neighbour sue? No. Nobody made that deal for the neighbour. A happy accident is only an incidental benefit.",
        "add": [
          { "k": "icon", "name": "tree", "x": 130, "y": 210, "s": 1.5, "label": "Your new garden" },
          { "k": "icon", "name": "house", "x": 330, "y": 210, "s": 1.5, "label": "Next door" },
          { "k": "fig", "x": 560, "y": 400, "pose": "up", "face": "sad", "hat": "cap", "label": "Neighbour", "say": "My house value!" },
          { "k": "stamp", "x": 90, "y": 340, "t": "INCIDENTAL: NO SUIT", "s": 26, "c": "red" } ] }
    ] },
    { "title": "The triangle", "beats": [
      { "say": "Now the triangle. Holly owes Lawrence three hundred dollars. Holly lends three hundred dollars to Fox, and Fox promises Holly that he will pay it to Lawrence the next day. Fox does not pay. So Lawrence sues Fox.",
        "add": [
          { "k": "fig", "x": 300, "y": 215, "s": 0.8, "pose": "stand", "face": "flat", "hat": "tophat", "label": "Lawrence" },
          { "k": "fig", "x": 130, "y": 405, "s": 0.8, "pose": "stand", "face": "smile", "hat": "hair", "label": "Holly" },
          { "k": "fig", "x": 470, "y": 405, "s": 0.8, "pose": "shrug", "face": "smirk", "hat": "cap", "label": "Fox" },
          { "k": "line", "x1": 150, "y1": 300, "x2": 250, "y2": 205 },
          { "k": "text", "x": 62, "y": 250, "t": "owes $300", "s": 20 },
          { "k": "arrow", "x1": 180, "y1": 365, "x2": 420, "y2": 365 },
          { "k": "text", "x": 245, "y": 355, "t": "lends $300", "s": 20 } ] },
      { "say": "Learn the names. Fox made the promise, so he is the promisor. Holly received it. She is the promisee. Lawrence is the third-party beneficiary. And the beneficiary sues the promisor.",
        "add": [
          { "k": "arrow", "x1": 450, "y1": 300, "x2": 350, "y2": 205, "c": "red" },
          { "k": "text", "x": 420, "y": 245, "t": "promise to pay", "s": 20, "c": "red" },
          { "k": "text", "x": 530, "y": 395, "t": "= promisor", "s": 21, "c": "blue" },
          { "k": "text", "x": 170, "y": 398, "t": "= promisee", "s": 21, "c": "blue" },
          { "k": "text", "x": 350, "y": 150, "t": "= beneficiary", "s": 21, "c": "blue" } ] },
      { "say": "Fox argued: I promised you nothing, Lawrence. No privity. The court in Lawrence and Fox disagreed. A promise made to one person for the benefit of another can be enforced by that other. Lawrence is a creditor beneficiary.",
        "add": [
          { "k": "stamp", "x": 540, "y": 170, "t": "LAWRENCE WINS", "s": 22, "c": "green" },
          { "k": "text", "x": 560, "y": 262, "t": "Lawrence v. Fox", "s": 23, "c": "blue" },
          { "k": "text", "x": 560, "y": 294, "t": "creditor beneficiary", "s": 19 } ] }
    ] },
    { "title": "The deathbed promise", "beats": [
      { "say": "Next, a deathbed. A dying woman wants her house to go to her niece, but her will is already drawn, and says otherwise. Her husband, a judge, swears that if she signs it, he will leave the niece the value of the house in his own will.",
        "add": [
          { "k": "icon", "name": "house", "x": 620, "y": 190, "s": 1.4 },
          { "k": "fig", "x": 130, "y": 400, "pose": "sad", "face": "sad", "hat": "bun", "label": "Aunt", "say": "For my niece..." },
          { "k": "fig", "x": 320, "y": 400, "pose": "up", "face": "smile", "hat": "wig", "label": "Husband", "say": "I swear I will." },
          { "k": "fig", "x": 560, "y": 400, "pose": "stand", "face": "smile", "hat": "hair", "label": "Niece" } ] },
      { "clear": true,
        "say": "She signs. Later he dies, leaving the niece nothing. In Seaver and Ransom, the niece won against his estate. The promise was made to the aunt, purely for the niece's benefit. She is a donee beneficiary: the promise was a gift to her.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "Seaver v. Ransom", "s": 26, "c": "blue" },
          { "k": "text", "x": 60, "y": 200, "t": "Promise made to the aunt,", "s": 28 },
          { "k": "text", "x": 60, "y": 240, "t": "for the niece.", "s": 28 },
          { "k": "stamp", "x": 60, "y": 290, "t": "DONEE BENEFICIARY WINS", "s": 26, "c": "green" },
          { "k": "icon", "name": "gift", "x": 600, "y": 240, "s": 1.5 } ] }
    ] },
    { "title": "The puppet", "beats": [
      { "say": "And now, a puppet. A television network agrees with its puppeteer that he will look after the show's star puppet, Howdy Doody, and eventually hand him to a museum. Decades later, others try to sell Howdy at auction instead.",
        "add": [
          { "k": "fig", "x": 130, "y": 400, "pose": "stand", "face": "flat", "hat": "tophat", "label": "Network" },
          { "k": "fig", "x": 300, "y": 400, "pose": "hold", "face": "smile", "hat": "hair", "label": "Puppeteer" },
          { "k": "fig", "x": 372, "y": 372, "s": 0.45, "pose": "wave", "face": "smile", "hat": "cap", "c": "blue" },
          { "k": "arrow", "x1": 420, "y1": 340, "x2": 540, "y2": 340, "c": "green" },
          { "k": "icon", "name": "store", "x": 620, "y": 320, "s": 1.5, "label": "Museum" },
          { "k": "text", "x": 60, "y": 150, "t": "\"Eventually, Howdy goes to the museum.\"", "s": 26 } ] },
      { "say": "In Detroit Institute of Arts Founders Society and Rose, the museum won. It never signed the agreement. But the network and the puppeteer both meant the museum to have the puppet. So the museum could enforce their contract, and Howdy went to Detroit.",
        "add": [
          { "k": "text", "x": 60, "y": 190, "t": "Detroit Institute of Arts v. Rose", "s": 23, "c": "blue" },
          { "k": "stamp", "x": 440, "y": 200, "t": "MUSEUM WINS", "s": 26, "c": "green" } ] }
    ] },
    { "title": "The promisor's shield", "beats": [
      { "say": "One limit. The beneficiary takes the contract, warts and all. If a life insurance policy was obtained by lying on the application, the insurer can raise that fraud against the family, just as it could against the insured. Three-oh-nine: my defences stay mine.",
        "add": [
          { "k": "fig", "x": 170, "y": 400, "pose": "hips", "face": "flat", "hat": "tophat", "label": "Insurer", "say": "The policy was a lie." },
          { "k": "fig", "x": 420, "y": 400, "pose": "sad", "face": "sad", "hat": "bun", "label": "Family" },
          { "k": "text", "x": 60, "y": 150, "t": "§309: defences against the promisee", "s": 26 },
          { "k": "text", "x": 60, "y": 188, "t": "work against the beneficiary too.", "s": 26 } ] }
    ] },
    { "title": "Trap and recap", "beats": [
      { "say": "Here is the trap. Thinking that anyone who would benefit can sue. Benefit is not the test. Intent is. Ask whom the contracting parties meant to benefit, not who happens to be better off.",
        "add": [
          { "k": "text", "x": 60, "y": 142, "t": "THE TRAP", "s": 30, "c": "red" },
          { "k": "cross", "x": 64, "y": 195, "r": 26 },
          { "k": "text", "x": 115, "y": 218, "t": "\"I would have benefited\"", "s": 28, "c": "red" },
          { "k": "check", "x": 62, "y": 275 },
          { "k": "text", "x": 115, "y": 293, "t": "\"They made the deal for me\"", "s": 28, "c": "green" } ] },
      { "clear": true,
        "say": "Let's recap. Privity has a door. Section 302: intended beneficiaries can sue, incidental ones cannot. Creditor beneficiary, Lawrence and Fox. Donee beneficiary, Seaver and Ransom. The museum got its puppet. And the promisor keeps its defences. Now, five quick questions.",
        "add": [
          { "k": "check", "x": 62, "y": 128 }, { "k": "text", "x": 110, "y": 146, "t": "§302: intended can sue; incidental cannot", "s": 26 },
          { "k": "check", "x": 62, "y": 186 }, { "k": "text", "x": 110, "y": 204, "t": "Creditor: Lawrence v. Fox", "s": 26 },
          { "k": "check", "x": 62, "y": 244 }, { "k": "text", "x": 110, "y": 262, "t": "Donee: Seaver v. Ransom", "s": 26 },
          { "k": "check", "x": 62, "y": 302 }, { "k": "text", "x": 110, "y": 320, "t": "Howdy Doody: the museum enforces", "s": 26 },
          { "k": "check", "x": 62, "y": 360 }, { "k": "text", "x": 110, "y": 378, "t": "§309: the promisor keeps its defences", "s": 26 } ] }
    ] }
  ],
  "mini": [
    { "t": "Third-Party Beneficiaries", "k": "cl",
      "q": "A city hires a contractor to build a new stadium by March. A café across the street expects a flood of customers. The contractor finishes a year late, and the café sues the contractor for its lost profits. What result?",
      "o": ["The café wins, because it was foreseeably harmed.", "The café wins, because it is a creditor beneficiary.", "The café loses, because only the city's residents can sue.", "The café loses, because it is only an incidental beneficiary of the contract."],
      "a": 3,
      "w": "Under section 302, only an intended beneficiary can enforce a contract. The city and the contractor did not make their deal in order to benefit the café. Its gain would have been a happy accident, so it is incidental." },
    { "t": "Third-Party Beneficiaries", "k": "cl",
      "q": "A father buys a car from a dealer on credit, and the dealer promises to deliver it to the father's daughter. The father never pays a cent. The daughter sues the dealer for the car. Can the dealer rely on the father's non-payment?",
      "o": ["No, because the daughter did nothing wrong.", "Yes, because the promisor can raise against the beneficiary the defences it has under the contract.", "No, because defences are personal to the promisee.", "Yes, but only if the daughter knew about the non-payment."],
      "a": 1,
      "w": "Section 309: the beneficiary's right comes through the contract, so it is subject to the promisor's contract defences. If the promisee's failure to perform excuses the promisor, it excuses the promisor against the beneficiary as well." },
    { "t": "Third-Party Beneficiaries", "k": "cl",
      "q": "Priya owes Quinn $500. Priya sells her bike to Rob, and in return Rob promises Priya that he will pay the $500 price directly to Quinn. Rob does not pay. What is Quinn?",
      "o": ["A creditor beneficiary, who can sue Rob on his promise.", "An incidental beneficiary, who cannot sue anyone.", "A donee beneficiary, who can sue only Priya.", "An assignee of the bike."],
      "a": 0,
      "w": "This is Lawrence and Fox. Rob's performance would pay off a debt the promisee, Priya, owes to Quinn. That makes Quinn an intended beneficiary of the creditor kind, and Quinn can sue the promisor directly." },
    { "t": "Third-Party Beneficiaries", "k": "cl",
      "q": "Which statement best describes when a third party is an intended beneficiary?",
      "o": ["Whenever the third party would be better off if the contract were performed.", "Only when the third party is named in the contract and has signed it.", "When giving the third party a right to performance carries out what the contracting parties intended.", "Only when the third party paid part of the consideration."],
      "a": 2,
      "w": "Section 302 turns on the intention of the parties. The beneficiary need not sign, pay, or even know about the contract at the time. But a mere benefit, without that intention, is incidental." },
    { "t": "Third-Party Beneficiaries", "k": "cl",
      "q": "A grandmother pays a carpenter $4,000, and the carpenter promises her that he will build a treehouse in her grandson's garden as a birthday present. The carpenter never builds it. What is the grandson?",
      "o": ["A creditor beneficiary, because the grandmother owed him a treehouse.", "A donee beneficiary, who can enforce the carpenter's promise.", "An incidental beneficiary, because he paid nothing.", "A promisee, because the treehouse was for him."],
      "a": 1,
      "w": "The grandmother meant the performance as a gift to her grandson, like the aunt in Seaver and Ransom. He is an intended beneficiary of the donee kind under section 302. It does not matter that he gave no consideration." }
  ]
};

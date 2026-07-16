// ── QUESTION BANK ──────────────────────────────────────────────────────────

const QUESTIONS = {

  roots: {
    easy: [
      { q: "What is √25?", options: ["4", "5", "6", "3"], answer: 1 },
      { q: "What is √64?", options: ["7", "9", "8", "6"], answer: 2 },
      { q: "What is √144?", options: ["11", "12", "13", "14"], answer: 1 },
      { q: "What is ∛8?", options: ["4", "3", "2", "1"], answer: 2 },
      { q: "What is ∛27?", options: ["3", "4", "9", "6"], answer: 0 },
      { q: "What is ∛125?", options: ["4", "6", "5", "3"], answer: 2 },
      { q: "What is 7²?", options: ["42", "49", "56", "47"], answer: 1 },
      { q: "What is 9²?", options: ["72", "81", "90", "64"], answer: 1 },
      { q: "What is √81?", options: ["8", "7", "9", "6"], answer: 2 },
      { q: "What is √36?", options: ["7", "5", "4", "6"], answer: 3 },
      { q: "What is 4³?", options: ["48", "56", "64", "72"], answer: 2 },
      { q: "What is ∛64?", options: ["8", "6", "4", "3"], answer: 2 },
      { q: "What is 12²?", options: ["132", "144", "156", "124"], answer: 1 },
      { q: "What is √100?", options: ["9", "11", "10", "8"], answer: 2 },
      { q: "What is 2⁵?", options: ["16", "32", "64", "8"], answer: 1 },
    ],
    medium: [
      { q: "What is √196?", options: ["12", "13", "14", "15"], answer: 2 },
      { q: "What is ∛216?", options: ["5", "6", "7", "8"], answer: 1 },
      { q: "What is √225?", options: ["13", "14", "15", "16"], answer: 2 },
      { q: "What is ∛343?", options: ["6", "8", "7", "9"], answer: 2 },
      { q: "What is 13²?", options: ["159", "169", "179", "149"], answer: 1 },
      { q: "What is 11²?", options: ["111", "121", "131", "101"], answer: 1 },
      { q: "What is √0.49?", options: ["0.6", "0.8", "0.7", "0.5"], answer: 2 },
      { q: "What is ∛512?", options: ["6", "7", "8", "9"], answer: 2 },
      { q: "Simplify: √50", options: ["5√2", "25√2", "10√5", "5√5"], answer: 0 },
      { q: "If x² = 169, what is x? (positive)", options: ["11", "12", "13", "14"], answer: 2 },
      { q: "What is ∛729?", options: ["7", "8", "9", "10"], answer: 2 },
      { q: "14² = ?", options: ["184", "194", "196", "198"], answer: 2 },
      { q: "What is √(4/9)?", options: ["2/3", "4/3", "1/3", "2/9"], answer: 0 },
      { q: "What is 5³?", options: ["100", "125", "115", "150"], answer: 1 },
      { q: "What is ∛1000?", options: ["8", "9", "10", "11"], answer: 2 },
    ],
    hard: [
      { q: "Simplify: √72", options: ["6√2", "8√3", "9√2", "4√3"], answer: 0 },
      { q: "What is √(625/49)?", options: ["5/7", "25/7", "25/49", "5/49"], answer: 1 },
      { q: "What is ∛(-343)?", options: ["-7", "-9", "7", "-6"], answer: 0 },
      { q: "If √x = 13, what is x?", options: ["156", "169", "144", "196"], answer: 1 },
      { q: "Simplify: √(3) × √(12)", options: ["3", "6", "9", "36"], answer: 1 },
      { q: "What is 15²?", options: ["215", "220", "225", "230"], answer: 2 },
      { q: "What is √(0.0081)?", options: ["0.9", "0.09", "0.009", "0.81"], answer: 1 },
      { q: "If x³ = 512, what is x?", options: ["6", "7", "8", "9"], answer: 2 },
      { q: "Between which two integers does √50 lie?", options: ["6 and 7", "7 and 8", "5 and 6", "8 and 9"], answer: 1 },
      { q: "What is (2³)²?", options: ["32", "48", "64", "16"], answer: 2 },
      { q: "Simplify: √(98)", options: ["7√2", "9√2", "14√2", "7√3"], answer: 0 },
      { q: "What is ∛(27/64)?", options: ["3/8", "3/4", "9/4", "1/4"], answer: 1 },
      { q: "If 2⁸ = 256, what is 2⁹?", options: ["384", "512", "488", "600"], answer: 1 },
      { q: "What is √(144 + 25)?", options: ["12", "13", "14", "15"], answer: 1 },
      { q: "Simplify: √(50) + √(32)", options: ["9√2", "8√2", "10√2", "7√2"], answer: 0 },
    ]
  },

  math: {
    easy: [
      { q: "What is 17 × 8?", options: ["126", "136", "144", "132"], answer: 1 },
      { q: "What is 25% of 240?", options: ["50", "60", "55", "45"], answer: 1 },
      { q: "Simplify: 3/4 + 1/8", options: ["7/8", "4/12", "5/8", "1"], answer: 0 },
      { q: "A train travels 60 km/h for 2.5 hours. Distance covered?", options: ["120 km", "150 km", "125 km", "180 km"], answer: 1 },
      { q: "What is the square root of 196?", options: ["13", "14", "16", "12"], answer: 1 },
      { q: "What is 15% of 80?", options: ["10", "14", "12", "16"], answer: 2 },
      { q: "Solve: 5x = 45. What is x?", options: ["5", "8", "9", "7"], answer: 2 },
      { q: "Which is greater: 5/8 or 3/5?", options: ["5/8", "3/5", "They are equal", "Cannot determine"], answer: 0 },
      { q: "What is 144 ÷ 12?", options: ["11", "13", "12", "14"], answer: 2 },
      { q: "Find the average of 12, 16, 20, 24.", options: ["17", "18", "19", "16"], answer: 1 },
      { q: "What is 2³ × 3²?", options: ["48", "72", "64", "54"], answer: 1 },
      { q: "If 40% of x = 60, find x.", options: ["100", "150", "120", "140"], answer: 1 },
      { q: "What is the perimeter of a square with side 9 cm?", options: ["27 cm", "36 cm", "81 cm", "45 cm"], answer: 1 },
      { q: "Reduce 36/48 to lowest terms.", options: ["2/3", "3/4", "4/5", "6/8"], answer: 1 },
      { q: "A dozen eggs cost ₹60. Cost of 7 eggs?", options: ["₹30", "₹35", "₹40", "₹42"], answer: 1 },
    ],
    medium: [
      { q: "The ratio of boys to girls is 3:2. If there are 30 boys, how many girls?", options: ["15", "18", "20", "12"], answer: 2 },
      { q: "Solve: (x + 3)(x − 3) = 0. Values of x?", options: ["3 only", "−3 only", "±3", "0"], answer: 2 },
      { q: "What is 18% of 550?", options: ["90", "99", "108", "88"], answer: 1 },
      { q: "A pipe fills a tank in 6 hrs. How much fills in 2.5 hrs?", options: ["5/12", "5/8", "1/2", "5/6"], answer: 0 },
      { q: "Find the LCM of 18 and 24.", options: ["72", "48", "36", "144"], answer: 0 },
      { q: "Speed of 90 km/h in m/s?", options: ["20", "25", "22", "30"], answer: 1 },
      { q: "If 5 workers finish in 8 days, how many days for 4 workers?", options: ["9", "10", "12", "8"], answer: 1 },
      { q: "What is 12.5% expressed as a fraction?", options: ["1/6", "1/8", "1/10", "1/4"], answer: 1 },
      { q: "A shopkeeper marks up by 40% then gives 20% discount. Profit %?", options: ["12%", "20%", "16%", "8%"], answer: 0 },
      { q: "Sum of angles of a hexagon?", options: ["540°", "720°", "900°", "600°"], answer: 1 },
      { q: "Solve: 3x − 7 = 2x + 5. x = ?", options: ["10", "12", "8", "14"], answer: 1 },
      { q: "What is the HCF of 84 and 126?", options: ["21", "42", "14", "28"], answer: 1 },
      { q: "A number is 20% less than 80. What is the number?", options: ["60", "64", "56", "72"], answer: 1 },
      { q: "If the area of a circle is 154 cm², its radius? (π = 22/7)", options: ["5", "6", "7", "8"], answer: 2 },
      { q: "Simple interest on ₹2000 at 5% p.a. for 3 years?", options: ["₹300", "₹250", "₹350", "₹200"], answer: 0 },
    ],
    hard: [
      { q: "Compound interest on ₹5000 at 10% p.a. for 2 years (compounded annually)?", options: ["₹1000", "₹1050", "₹1100", "₹950"], answer: 1 },
      { q: "Two pipes A and B fill a tank in 12 and 18 hours. C drains in 36 hrs. All open together — time to fill?", options: ["9 hrs", "10 hrs", "8 hrs", "12 hrs"], answer: 0 },
      { q: "If log₂(x) = 5, what is x?", options: ["10", "25", "32", "64"], answer: 2 },
      { q: "A train 150 m long passes a pole in 10 s. Speed in km/h?", options: ["45", "54", "60", "48"], answer: 1 },
      { q: "Profit is 25% of cost. What % of selling price is profit?", options: ["20%", "25%", "22%", "18%"], answer: 0 },
      { q: "If x² − 5x + 6 = 0, the product of the roots?", options: ["5", "6", "−6", "−5"], answer: 1 },
      { q: "In a triangle, angles are in ratio 2:3:7. Largest angle?", options: ["105°", "90°", "100°", "120°"], answer: 0 },
      { q: "Successive discounts of 20% and 25%. Net discount?", options: ["45%", "40%", "41%", "43%"], option_note: "20% + 25% − 5% = 40%", answer: 1 },
      { q: "A boat goes 30 km upstream in 6 hrs and 30 km downstream in 3 hrs. Speed of stream?", options: ["2.5 km/h", "5 km/h", "3 km/h", "4 km/h"], answer: 0 },
      { q: "Sum of first 20 natural numbers?", options: ["200", "210", "190", "220"], answer: 1 },
      { q: "If 3ˣ = 81, what is x?", options: ["3", "4", "5", "6"], answer: 1 },
      { q: "A car depreciates at 10% per year. Value after 2 years if original is ₹1,00,000?", options: ["₹81,000", "₹80,000", "₹82,000", "₹78,000"], answer: 0 },
      { q: "Diagonal of a square of side 7 cm? (√2 ≈ 1.414)", options: ["9.8 cm", "9.9 cm", "10.2 cm", "7.07 cm"], answer: 1 },
      { q: "In a GP: 2, 6, 18 … what is the 6th term?", options: ["486", "729", "648", "243"], answer: 0 },
      { q: "If P(A) = 0.4, P(B) = 0.3, and A,B are independent. P(A∩B)?", options: ["0.12", "0.7", "0.1", "0.28"], answer: 0 },
    ]
  },

  reasoning: {
    easy: [
      { q: "Complete the series: 2, 4, 8, 16, ___", options: ["24", "32", "28", "36"], answer: 1 },
      { q: "Odd one out: Cat, Dog, Rose, Rabbit", options: ["Cat", "Dog", "Rose", "Rabbit"], answer: 2 },
      { q: "If MANGO → OCPIO, then APPLE → ?", options: ["CRRNG", "CRRNF", "CRRNH", "BQQMF"], answer: 0, hint: "Each letter +2" },
      { q: "Mirror of 6:30 on a clock face?", options: ["5:30", "6:00", "5:30", "5:00"], answer: 0 },
      { q: "Find the missing: 3, 9, 27, ___, 243", options: ["54", "81", "72", "108"], answer: 1 },
      { q: "Book is to Library as Painting is to?", options: ["Artist", "Gallery", "Canvas", "Brush"], answer: 1 },
      { q: "How many triangles in a triangle divided by 3 lines from centroid?", options: ["3", "6", "9", "4"], answer: 1 },
      { q: "Next: A, C, E, G, ___", options: ["H", "I", "J", "K"], answer: 1 },
      { q: "Doctor is to Hospital as Teacher is to?", options: ["Book", "School", "Student", "Lesson"], answer: 1 },
      { q: "If 3 = 9, 4 = 16, 5 = 25, then 6 = ?", options: ["30", "36", "42", "38"], answer: 1 },
      { q: "Complete: 1, 4, 9, 16, 25, ___", options: ["30", "36", "32", "42"], answer: 1 },
      { q: "Which shape has the most sides: Pentagon, Hexagon, Octagon, Heptagon?", options: ["Pentagon", "Hexagon", "Octagon", "Heptagon"], answer: 2 },
      { q: "5 people shake hands with everyone. Total handshakes?", options: ["10", "15", "20", "25"], answer: 0 },
      { q: "If WATER → 57231, what is RATE?", options: ["2573", "3572", "2537", "3257"], answer: 1 },
      { q: "Odd one out: 4, 8, 12, 16, 18, 20", options: ["12", "18", "16", "8"], answer: 1 },
    ],
    medium: [
      { q: "If all Bloops are Razzles, and all Razzles are Lazzles, are all Bloops Lazzles?", options: ["Yes", "No", "Cannot say", "Sometimes"], answer: 0 },
      { q: "Series: 1, 2, 6, 24, 120, ___", options: ["620", "700", "720", "600"], answer: 2 },
      { q: "Statements: All cars are bikes. Some bikes are trucks. Conclusion: Some cars are trucks.", options: ["True", "False", "Possibly true", "Cannot determine"], answer: 1 },
      { q: "A is taller than B. C is taller than A. D is shorter than B. Who is shortest?", options: ["A", "B", "C", "D"], answer: 3 },
      { q: "XYZ : 262524 ∷ ABC : ?", options: ["010203", "123", "010203", "246"], answer: 0 },
      { q: "How many rectangles in a 3×3 grid?", options: ["18", "36", "9", "24"], answer: 1 },
      { q: "Series: 0, 1, 1, 2, 3, 5, 8, ___", options: ["11", "12", "13", "14"], answer: 2 },
      { q: "P is the son of Q. Q is the daughter of R. What is R to P?", options: ["Father", "Mother", "Grandfather", "Cannot determine"], answer: 3 },
      { q: "Find the odd one: 36, 49, 64, 72, 81", options: ["36", "72", "64", "49"], answer: 1 },
      { q: "If 6★3 = 27 and 8★4 = 48, what is 5★2?", options: ["15", "10", "14", "20"], answer: 0 },
      { q: "Pointing to a girl, Ram said 'She is daughter of my wife's only brother.' The girl is Ram's?", options: ["Niece", "Cousin", "Daughter", "Sister"], answer: 0 },
      { q: "Series: 3, 5, 9, 15, 23, ___", options: ["30", "31", "33", "35"], answer: 2 },
      { q: "Which direction is the shadow at 6 PM (evening)?", options: ["East", "West", "North", "South"], answer: 0 },
      { q: "If CODE = 8 and DOME = 9, what is DONE?", options: ["10", "8", "9", "11"], answer: 1 },
      { q: "If first day of a month is Monday, what day is the 25th?", options: ["Monday", "Tuesday", "Sunday", "Wednesday"], answer: 0 },
    ],
    hard: [
      { q: "36 people sit in a circle. Person #1 skips every other person. Last person remaining?", options: ["13", "19", "25", "36"], answer: 2 },
      { q: "Premises: No M are N. All N are O. Some O are P. Conclusion: Some P are not M.", options: ["Definitely true", "Definitely false", "Possibly true", "Cannot say"], answer: 2 },
      { q: "Series: 1, 8, 27, 64, ___, 216", options: ["100", "125", "150", "144"], answer: 1 },
      { q: "In a coded language: STRONG → QPSMLE. Then: BRIGHT → ?", options: ["ZPHGFQ", "APIGER", "ZPGFJQ", "BQJHFU"], answer: 0 },
      { q: "5 teams play a round-robin. Total matches?", options: ["10", "15", "20", "25"], answer: 0 },
      { q: "A is 40m east of B. C is 30m south of A. D is 40m west of C. Distance BD?", options: ["30 m", "40 m", "50 m", "60 m"], answer: 0 },
      { q: "Pattern: 2, 3, 5, 7, 11, 13, ___", options: ["15", "17", "14", "19"], answer: 1 },
      { q: "If in 2022, Jan 1 is Saturday, on what day is Dec 31, 2022?", options: ["Friday", "Saturday", "Sunday", "Monday"], answer: 1 },
      { q: "Every second person in row of 50 is eliminated (1,3,5…). Last standing?", options: ["49", "50", "48", "47"], answer: 0 },
      { q: "All P are Q. No Q is R. Conclusion: No P is R. True?", options: ["Yes", "No", "Possibly", "Cannot say"], answer: 0 },
      { q: "How many diagonals in a decagon (10-sided polygon)?", options: ["25", "35", "45", "20"], answer: 1 },
      { q: "Decode: ELEPHANT → 51572141. TIGER → ?", options: ["20978", "20987", "21097", "21098"], answer: 0 },
      { q: "Series: 2, 5, 10, 17, 26, ___", options: ["35", "37", "36", "38"], answer: 1 },
      { q: "In a row of 20, if position from left is 8, what is position from right?", options: ["12", "13", "14", "11"], answer: 1 },
      { q: "4 friends A,B,C,D sit in a line. A not next to B. C must be next to D. How many valid arrangements?", options: ["4", "6", "8", "10"], answer: 2 },
    ]
  }
};

// merge modes for mixed
function getQuestions(mode, difficulty, count) {
  let pool = [];
  if (mode === 'mixed') {
    pool = [
      ...QUESTIONS.math[difficulty],
      ...QUESTIONS.reasoning[difficulty],
      ...QUESTIONS.roots[difficulty],
    ];
  } else {
    pool = [...QUESTIONS[mode][difficulty]];
  }
  // shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const categoryLabel = {
    math: 'Mathematics',
    reasoning: 'Reasoning',
    roots: 'Powers & Roots',
  };
  return pool.slice(0, count).map(q => {
    let cat;
    if (mode === 'mixed') {
      if (QUESTIONS.roots[difficulty].some(r => r.q === q.q)) cat = 'Powers & Roots';
      else if (QUESTIONS.math[difficulty].some(r => r.q === q.q)) cat = 'Mathematics';
      else cat = 'Reasoning';
    } else {
      cat = categoryLabel[mode];
    }
    return { ...q, category: cat };
  });
}
